import { useState, useEffect, ChangeEvent } from 'react';
import Web3 from 'web3';
import { AbiItem } from 'web3-utils';

import { AdminModuleProps } from '@/pages/admin-console';
import { ResearchProjectFactory } from '@/abi/abi';
import { stablecoinAddresses } from '@/utils/supportedNetworks';
import NetworkSelector from '../networkSelector/network-selector';
import styles from './create-project.module.scss';
import getWei from '@/utils/getWei';

const alfajoresFactory = '0x83456256a6D26F19955E42EadB9b8a8d27Ec3B11';
const mumbaiFactory = '0x6B8529943363248b7f27ddB66E4384e4C9Ccc0D5';
const polygonFactory = '0x...polygon_placeholder';
const celoFactory = '0x...celo_placeholder';

interface DeploymentOptions {
  minContribution: number;
  researcher: string;
  stableContract: string;
  feePercentage: number;
}

const CreateProject = ({
  primaryWallet,
  network,
  setShowAuthFlow,
}: AdminModuleProps) => {
  const [factoryAddress, setFactoryAddress] = useState('');
  const [newContractAddress, setNewContractAddress] = useState('');
  const [pending, setPending] = useState(false);
  const [validInputs, setValidInputs] = useState(false);
  const [deploymentOptions, setDeploymentOptions] = useState<DeploymentOptions>(
    {
      minContribution: 25,
      researcher: '',
      stableContract: '',
      feePercentage: 7,
    }
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDeploymentOptions({
      ...deploymentOptions,
      [event.target.name]: event.target.value.trim(),
    });
  };

  const handleDeploy = async () => {
    setPending(true);
    if (primaryWallet && network) {
      try {
        const web3 = new Web3(window.ethereum);
        const factoryInstance = new web3.eth.Contract(
          ResearchProjectFactory as AbiItem[],
          factoryAddress
        );
        const receipt = await factoryInstance.methods
          .createResearchProject(
            getWei(network, deploymentOptions.minContribution),
            deploymentOptions.researcher,
            deploymentOptions.stableContract,
            deploymentOptions.feePercentage
          )
          .send({ from: window.ethereum.selectedAddress });

        if (receipt) {
          setNewContractAddress(receipt.events.OwnershipTransferred[0].address);
        } else {
          setNewContractAddress('ERROR DEPLOYING CONTRACT');
        }
      } catch {
        setNewContractAddress('ERROR DEPLOYING CONTRACT');
        console.error;
      } finally {
        setPending(false);
      }
    }
  };

  useEffect(() => {
    setNewContractAddress('');
    if (network === 137) {
      setFactoryAddress(polygonFactory);
      deploymentOptions.stableContract = stablecoinAddresses.polygon;
    }
    if (network === 42220) {
      setFactoryAddress(celoFactory);
      deploymentOptions.stableContract = stablecoinAddresses.celo;
    }
    if (network === 44787) {
      setFactoryAddress(alfajoresFactory);
      deploymentOptions.stableContract = stablecoinAddresses.alfajores;
    }
    if (network === 80001) {
      setFactoryAddress(mumbaiFactory);
      deploymentOptions.stableContract = stablecoinAddresses.mumbai;
    }
    if (
      deploymentOptions.feePercentage > 0 &&
      deploymentOptions.feePercentage <= 100 &&
      deploymentOptions.minContribution > 0 &&
      /^0x[a-fA-F0-9]{40}$/.test(deploymentOptions.researcher)
    ) {
      setValidInputs(true);
    } else {
      setValidInputs(false);
    }
  }, [network, deploymentOptions]);

  return (
    <section className={styles.section}>
      <h2 className={styles.header}>Deploy New Project Contract</h2>
      <div className={styles.deployBox}>
        <NetworkSelector
          network={network}
          primaryWallet={primaryWallet}
          setShowAuthFlow={setShowAuthFlow}
        />
        <p className={styles.subtext}>
          <span>Factory Contract Address:</span> {factoryAddress}
        </p>
        <form className={styles.optionsForm}>
          <div>
            <label
              className={styles.formLabel}
              htmlFor="minimum">
              Minimum contribution (default 25):
            </label>
            <input
              className={styles.formInput}
              type="number"
              id="minimum"
              name="minContribution"
              value={deploymentOptions.minContribution}
              onChange={handleChange}
              min="0"
              placeholder="0"
            />
          </div>
          <div>
            <label
              className={styles.formLabel}
              htmlFor="researcher">
              Researcher wallet address:
            </label>
            <input
              className={styles.formInput}
              type="text"
              id="researcher"
              name="researcher"
              value={deploymentOptions.researcher}
              onChange={handleChange}
              placeholder="0x00000..."
            />
          </div>
          <div>
            <label
              className={styles.formLabel}
              htmlFor="stable">
              Stablecoin contract address (not editable):
            </label>
            <input
              className={styles.formInput}
              type="text"
              id="stable"
              name="stableContract"
              value={deploymentOptions.stableContract}
              readOnly
            />
          </div>
          <div>
            <label
              className={styles.formLabel}
              htmlFor="fee">
              Fee percentage (default 7%):
            </label>
            <input
              className={styles.formInput}
              type="number"
              id="fee"
              name="feePercentage"
              value={deploymentOptions.feePercentage}
              onChange={handleChange}
              placeholder="0"
              min="0"
              max="100"
            />
          </div>
        </form>
        <button
          className={styles.deployBtn}
          onClick={handleDeploy}
          disabled={pending || !validInputs || !primaryWallet}>
          {pending ? 'Deploying' : 'Deploy'}
        </button>
        <p className={styles.subtext}>
          <span>New Project Contract Address:</span> {newContractAddress}
        </p>
      </div>
    </section>
  );
};

export default CreateProject;
