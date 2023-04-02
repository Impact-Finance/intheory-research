import { useState, useEffect, ChangeEvent } from 'react';
import { ethers } from 'ethers';

import { AdminModuleProps } from '@/pages/admin-console';
import { ResearchProjectFactory } from '@/abi/abi';
import { stablecoinAddresses } from '@/utils/supportedNetworks';
import NetworkSelector from '../networkSelector/network-selector';
import styles from './create-project.module.scss';

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
  const [decimals, setDecimals] = useState(1);
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
        const provider =
          (await primaryWallet.connector.getRpcProvider()) as ethers.JsonRpcProvider;
        const signer =
          (await primaryWallet.connector.getSigner()) as ethers.JsonRpcSigner;

        const factoryInstance = new ethers.Contract(
          factoryAddress,
          ResearchProjectFactory,
          signer
        );
        const tx = await factoryInstance.createResearchProject(
          ethers.parseUnits(
            deploymentOptions.minContribution.toString(),
            decimals
          ),
          deploymentOptions.researcher,
          deploymentOptions.stableContract,
          deploymentOptions.feePercentage
        );
        if (tx) {
          const receipt = await provider.waitForTransaction(tx.hash);
          if (receipt) {
            setNewContractAddress(receipt.logs[0].address);
          } else {
            setNewContractAddress('ERROR DEPLOYING CONTRACT');
          }
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
      setDecimals(6);
      deploymentOptions.stableContract = stablecoinAddresses.polygon;
    }
    if (network === 42220) {
      setFactoryAddress(celoFactory);
      setDecimals(18);
      deploymentOptions.stableContract = stablecoinAddresses.celo;
    }
    if (network === 44787) {
      setFactoryAddress(alfajoresFactory);
      setDecimals(18);
      deploymentOptions.stableContract = stablecoinAddresses.alfajores;
    }
    if (network === 80001) {
      setFactoryAddress(mumbaiFactory);
      setDecimals(6);
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
        <p
          className={styles.subtext}
          onClick={() => {
            navigator.clipboard.writeText(factoryAddress);
          }}>
          <span>Factory Contract Address:</span>{' '}
          {factoryAddress.slice(0, 8) + '...' + factoryAddress.slice(-8)}
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
        <p
          className={styles.subtext}
          onClick={() => {
            navigator.clipboard.writeText(newContractAddress);
          }}>
          <span>New Project Contract Address:</span>{' '}
          {newContractAddress && (
            <>
              {newContractAddress.slice(0, 8) +
                '...' +
                newContractAddress.slice(-8)}
            </>
          )}
        </p>
      </div>
    </section>
  );
};

export default CreateProject;
