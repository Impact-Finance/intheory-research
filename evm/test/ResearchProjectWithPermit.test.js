/* global contract; global it; global web3; global assert */

const { EIP712DOMAIN, PERMIT } =  require("./typeHashes");
const {
  encrypt,
  recoverPersonalSignature,
  recoverTypedSignature,
  TypedMessage,
  MessageTypes,
  SignTypedDataVersion
} = require('@metamask/eth-sig-util');

const ResearchProjectFactory = artifacts.require('ResearchProjectFactory');
const ResearchProject = artifacts.require('ResearchProject');
const ERC20Permit = artifacts.require('MockERC20Permit');
const createPermit = async (
  domainData,
  owner,
  spender,
  amount,
  nonce,
  deadline
) => {
  const permitData = {
    owner: owner,
    spender: spender,
    value: amount,
    nonce: nonce,
    deadline: deadline
  }
  const data = JSON.stringify({
    domain: domainData,
    message: permitData,
    primaryType: "Permit",
    types: {
      EIP712Domain: EIP712DOMAIN,
      Permit: PERMIT
    }
  })

  const getPermit = () => {
    return new Promise((res, rej) => {
      web3.currentProvider.send({
        method: "eth_signTypedData_v4",
        params: [owner, data],
        from: owner
      }, (error, result) => {
        if (error) rej(error)
        res(result)
      }
      )
    })
  }

  const permit = await getPermit()

  const signature = permit.result.substring(2)
  const r = "0x" + signature.substring(0, 64)
  const s = "0x" + signature.substring(64, 128)
  const v = parseInt(signature.substring(128, 130), 16)
  return { v, r, s }

}

contract('ResearchProjectFactory', accounts => {
  let factoryInstance;
  let stablecoinAddress;
  let stablecoinIsPermit = true

  const owner = accounts[0];
  const researcher = accounts[1];
  const manager = accounts[2];
  const stableOwner = accounts[3];
  const user = accounts[4];
  const minimum = 25;
  const feePercentage = 7;

  beforeEach(async () => {
    erc20Instance = await ERC20Permit.new({ from: stableOwner });
    stablecoinAddress = erc20Instance.address;
    factoryInstance = await ResearchProjectFactory.new({ from: owner });
  });

  it("should deploy research project contract", async () => {
    await factoryInstance.createResearchProject(
      minimum,
      researcher,
      stablecoinAddress,
      stablecoinIsPermit,
      feePercentage,
      { from: owner }
    );
    const deployedProjects = await factoryInstance.getDeployedProjects();
    expect(deployedProjects.length).to.equal(1);
    researchProject = await ResearchProject.at(deployedProjects[0]);
    expect(await researchProject.getCurrentResearcher()).to.equal(researcher);
  })

  it('should transfer ownership', async () => {
    expect(await factoryInstance.owner()).to.equal(owner);
    await factoryInstance.transferOwnership(manager, { from: owner });
    expect(await factoryInstance.owner()).to.equal(manager);
  });

  it('should assign ownership of ResearchProject contracts to owner of ResearchProjectFactory', async () => {
    await factoryInstance.createResearchProject(
      minimum,
      researcher,
      stablecoinAddress,
      stablecoinIsPermit,
      feePercentage,
      { from: owner }
    );
    const deployedProjects = await factoryInstance.getDeployedProjects();
    expect(deployedProjects.length).to.equal(1);
    researchProject = await ResearchProject.at(deployedProjects[0]);
    expect(await researchProject.owner()).to.equal(owner);
  });

  it('should not allow ResearchProject deployment or ownership transfer from non-owner', async () => {
    try {
      await factoryInstance.createResearchProject(
        minimum,
        researcher,
        stablecoinAddress,
        stablecoinIsPermit,
        feePercentage,
        { from: user }
      );
      assert(false);
    } catch (err) {
      assert(err);
    }
    try {
      await factoryInstance.transferOwnership(manager, { from: user });
      assert(false);
    } catch (err) {
      assert(err);
    }
  });
});

contract('ResearchProject', accounts => {
  let factoryInstance;
  let projectInstance;
  let stablecoinAddress;
  let stablecoinIsPermit = true
  let domainData

  const owner = accounts[0];
  const researcher = accounts[1];
  const manager = accounts[2];
  const stableOwner = accounts[3];
  const contributor1 = accounts[4];
  const contributor2 = accounts[5];
  const contributor3 = accounts[6];
  const minimum = 25;
  const feePercentage = 7;

  beforeEach(async () => {
    erc20Instance = await ERC20Permit.new({ from: stableOwner });
    stablecoinAddress = erc20Instance.address;
    factoryInstance = await ResearchProjectFactory.new({ from: owner });
    await factoryInstance.createResearchProject(
      minimum,
      researcher,
      stablecoinAddress,
      stablecoinIsPermit,
      feePercentage,
      { from: owner }
    );


    const deployedProjects = await factoryInstance.getDeployedProjects();
    expect(deployedProjects.length).to.equal(1);
    projectInstance = await ResearchProject.at(deployedProjects[0]);
    
    domainData = {
      name: 'Stable',
      version: "1",
      chainId: (await web3.eth.getChainId()),
      verifyingContract: stablecoinAddress
    }

    await erc20Instance.transfer(contributor1, 1000000, {
      from: stableOwner,
    });
    await erc20Instance.transfer(contributor2, 1000000, {
      from: stableOwner,
    });
    await erc20Instance.transfer(contributor3, 10, { from: stableOwner });
  });

  it('should be deployed', async () => {
    assert.ok(projectInstance.address);
  });

  it('should approve token spend', async () => {
    const amount = 200;
    await erc20Instance.approve(projectInstance.address, amount, {
      from: contributor1,
    });
    const allowance = await erc20Instance.allowance(
      contributor1,
      projectInstance.address
    );
    expect(parseInt(allowance)).to.equal(amount);
  });

  it('should allow contributions above minimum and mint an NFT', async () => {
    const amount = minimum + 1;
    const tokenMetaURI = 'https://fake.uri';
    const nonce = parseInt(await erc20Instance.nonces(contributor1))
    const deadline =  Math.floor(new Date().getTime() / 1000) + 3600
    
    const { v, r, s } = await createPermit(
      domainData,
      contributor1,
      projectInstance.address,
      amount,
      nonce,
      deadline
    )
    console.log(v, r, s)
    await projectInstance.contributeWithPermit(
      amount,
      tokenMetaURI,
      v, r, s, deadline,
        {
      from: contributor1,
    });
    const stableBalance = await erc20Instance.balanceOf(
      projectInstance.address
    );
    const nftBalance = await projectInstance.balanceOf(contributor1);
    expect(parseInt(stableBalance)).to.equal(amount);
    expect(parseInt(nftBalance)).to.equal(1);
  });

  it('should not allow contributions and not mint an NFT if contribution is below minimum', async () => {
    const amount = minimum - 1;
    const tokenMetaURI = 'https://fake.uri';

    const nonce = parseInt(await erc20Instance.nonces(contributor1))
    const deadline =  Math.floor(new Date().getTime() / 1000) + 3600
    
    const { v, r, s } = await createPermit(
      domainData,
      contributor1,
      projectInstance.address,
      amount,
      nonce,
      deadline
    )
    try {
      await projectInstance.contributeWithPermit(
        amount, tokenMetaURI,
        v, r, s, deadline,
         {
        from: contributor1,
      });
      assert(false);
    } catch (err) {
      assert(err);
    }
    const stableBalance = await erc20Instance.balanceOf(
      projectInstance.address
    );
    const nftBalance = await projectInstance.balanceOf(contributor1);
    expect(parseInt(stableBalance)).to.equal(0);
    expect(parseInt(nftBalance)).to.equal(0);
  });

  it('should allow contributions equal to minimum and mint an NFT', async () => {
    const amount = minimum;
    const tokenMetaURI = 'https://fake.uri';

    const nonce = parseInt(await erc20Instance.nonces(contributor1))
    const deadline =  Math.floor(new Date().getTime() / 1000) + 3600
    const { v, r, s } = await createPermit(
      domainData,
      contributor1,
      projectInstance.address,
      amount,
      nonce,
      deadline
    )
    await projectInstance.contributeWithPermit(
      amount, tokenMetaURI,
      v, r, s, deadline,
        {
      from: contributor1,
    });
    const stableBalance = await erc20Instance.balanceOf(
      projectInstance.address
    );
    const nftBalance = await projectInstance.balanceOf(contributor1);
    expect(parseInt(stableBalance)).to.equal(amount);
    expect(parseInt(nftBalance)).to.equal(1);
  });

  it('should not allow contributions and not mint an NFT if there is insufficient balance', async () => {
    const amount = minimum;
    const tokenMetaURI = 'https://fake.uri';
    try {
    const nonce = parseInt(await erc20Instance.nonces(contributor3))
    const deadline =  Math.floor(new Date().getTime() / 1000) + 3600
    const { v, r, s } = await createPermit(
      domainData,
      contributor3,
      projectInstance.address,
      amount,
      nonce,
      deadline
    )

    await projectInstance.contributeWithPermit(
      amount, tokenMetaURI,
      v, r, s, deadline,
        {
      from: contributor3,
    });
      assert(false);
    } catch (err) {
      assert(err);
    }
    const stableBalance = await erc20Instance.balanceOf(
      projectInstance.address
    );
    const nftBalance = await projectInstance.balanceOf(contributor1);
    expect(parseInt(stableBalance)).to.equal(0);
    expect(parseInt(nftBalance)).to.equal(0);
  });

  it('should not allow contributions and not mint an NFT if there is insufficient token allowance', async () => {
    const amount = minimum;
    const tokenMetaURI = 'https://fake.uri';

    const nonce = parseInt(await erc20Instance.nonces(contributor3))
    const deadline =  Math.floor(new Date().getTime() / 1000) + 3600
    const { v, r, s } = await createPermit(
      domainData,
      contributor3,
      projectInstance.address,
      amount,
      nonce,
      deadline
    )
    try {

    await projectInstance.contributeWithPermit(
      amount, tokenMetaURI,
      v, r, s, deadline,
        {
      from: contributor3,
    });

      assert(false);
    } catch (err) {
      assert(err);
    }
    const stableBalance = await erc20Instance.balanceOf(
      projectInstance.address
    );
    const nftBalance = await projectInstance.balanceOf(contributor1);
    expect(parseInt(stableBalance)).to.equal(0);
    expect(parseInt(nftBalance)).to.equal(0);
  });

  it('should not allow contributions and not mint an NFT if there is no metadataURI', async () => {
    const amount = minimum;
    let tokenMetaURI;

    const nonce = parseInt(await erc20Instance.nonces(contributor1))
    const deadline =  Math.floor(new Date().getTime() / 1000) + 3600
    const { v, r, s } = await createPermit(
      domainData,
      contributor1,
      projectInstance.address,
      amount,
      nonce,
      deadline
    )
    try {
    await projectInstance.contributeWithPermit(
      amount, tokenMetaURI,
      v, r, s, deadline,
        {
      from: contributor1,
    });

      assert(false);
    } catch (err) {
      assert(err);
    }
    const stableBalance = await erc20Instance.balanceOf(
      projectInstance.address
    );
    const nftBalance = await projectInstance.balanceOf(contributor1);
    expect(parseInt(stableBalance)).to.equal(0);
    expect(parseInt(nftBalance)).to.equal(0);
  });

  it('should not allow calling of ownerOnly functions from external account', async () => {
    try {
      await projectInstance.disburseFunds({ from: contributor1 });
      assert(false);
    } catch (err) {
      assert(err);
    }
    try {
      await projectInstance.claimFees({ from: contributor1 });
      assert(false);
    } catch (err) {
      assert(err);
    }
    try {
      await projectInstance.withdrawBalance(true, { from: contributor1 });
      assert(false);
    } catch (err) {
      assert(err);
    }
    try {
      await projectInstance.changeFeePercentage(10, { from: contributor1 });
      assert(false);
    } catch (err) {
      assert(err);
    }
    try {
      await projectInstance.changeMinimumContributionAmount(10, {
        from: contributor1,
      });
      assert(false);
    } catch (err) {
      assert(err);
    }
    try {
      await projectInstance.changeStablecoinAddress(contributor2, {
        from: contributor1,
      });
      assert(false);
    } catch (err) {
      assert(err);
    }
    try {
      await projectInstance.changeResearcher(contributor2, {
        from: contributor1,
      });
      assert(false);
    } catch (err) {
      assert(err);
    }
    try {
      await projectInstance.changeFeeCollector(contributor2, {
        from: contributor1,
      });
      assert(false);
    } catch (err) {
      assert(err);
    }
  });

  it('should disburse correct amount of funds to researcher', async () => {
    const amount = minimum * 10 ** 4; // simulate to wei
    const fees = (amount * feePercentage) / 100;
    const funds = amount - fees;
    const tokenMetaURI = 'https://fake.uri';

    const nonce = parseInt(await erc20Instance.nonces(contributor1))
    const deadline =  Math.floor(new Date().getTime() / 1000) + 3600
    const { v, r, s } = await createPermit(
      domainData,
      contributor1,
      projectInstance.address,
      amount,
      nonce,
      deadline
    )

    await projectInstance.contributeWithPermit(
      amount, tokenMetaURI,
      v, r, s, deadline,
        {
      from: contributor1,
    });

    await projectInstance.disburseFunds({ from: owner });
    const stableBalance = await erc20Instance.balanceOf(researcher);
    expect(parseInt(stableBalance)).to.equal(funds);
    expect(parseInt(await projectInstance.getUnclaimedFeeAmount())).to.equal(
      fees
    );
    expect(
      parseInt(await projectInstance.getUnclaimedContributionsAmount())
    ).to.equal(0);
  });

  it('should disburse correct amount of fees to fee collector', async () => {
    const amount = minimum * 10 ** 4; // simulate to wei
    const fees = (amount * feePercentage) / 100;
    const funds = amount - fees;
    const tokenMetaURI = 'https://fake.uri';

    const nonce = parseInt(await erc20Instance.nonces(contributor1))
    const deadline =  Math.floor(new Date().getTime() / 1000) + 3600
    const { v, r, s } = await createPermit(
      domainData,
      contributor1,
      projectInstance.address,
      amount,
      nonce,
      deadline
    )

    await projectInstance.contributeWithPermit(
      amount, tokenMetaURI,
      v, r, s, deadline,
        {
      from: contributor1,
    });
    await projectInstance.claimFees({ from: owner });
    const stableBalance = await erc20Instance.balanceOf(owner);
    expect(parseInt(stableBalance)).to.equal(fees);
    expect(parseInt(await projectInstance.getUnclaimedFeeAmount())).to.equal(0);
    expect(
      parseInt(await projectInstance.getUnclaimedContributionsAmount())
    ).to.equal(funds);
  });

  it('should disburse correct amount of fees and funds', async () => {
    const amount = minimum * 10 ** 4; // simulate to wei
    const fees = (amount * feePercentage) / 100;
    const funds = amount - fees;
    const tokenMetaURI = 'https://fake.uri';

    const nonce = parseInt(await erc20Instance.nonces(contributor1))
    const deadline =  Math.floor(new Date().getTime() / 1000) + 3600
    const { v, r, s } = await createPermit(
      domainData,
      contributor1,
      projectInstance.address,
      amount,
      nonce,
      deadline
    )

    await projectInstance.contributeWithPermit(
      amount, tokenMetaURI,
      v, r, s, deadline,
        {
      from: contributor1,
    });

    await projectInstance.claimFees({ from: owner });
    await projectInstance.disburseFunds({ from: owner });
    const researcherBalance = await erc20Instance.balanceOf(researcher);
    const ownerBalance = await erc20Instance.balanceOf(owner);
    expect(parseInt(ownerBalance)).to.equal(fees);
    expect(parseInt(researcherBalance)).to.equal(funds);
    expect(parseInt(await projectInstance.getUnclaimedFeeAmount())).to.equal(0);
    expect(
      parseInt(await projectInstance.getUnclaimedContributionsAmount())
    ).to.equal(0);
    expect(
      parseInt(await erc20Instance.balanceOf(projectInstance.address))
    ).to.equal(0);
  });

  it('should transfer ownership', async () => {
    expect(await projectInstance.owner()).to.equal(owner);
    await projectInstance.transferOwnership(manager, { from: owner });
    expect(await projectInstance.owner()).to.equal(manager);
  });

  it('should change researcher address only upon valid input', async () => {
    let newResearcher;
    expect(await projectInstance.getCurrentResearcher()).to.equal(researcher);
    try {
      newResearcher = 'asdjweoiumsdfhms';
      await projectInstance.changeResearcher(newResearcher, { from: owner });
      assert(false);
    } catch (err) {
      assert(err);
    }
    try {
      newResearcher = true;
      await projectInstance.changeResearcher(newResearcher, { from: owner });
      assert(false);
    } catch (err) {
      assert(err);
    }
    try {
      newResearcher = 50;
      await projectInstance.changeResearcher(newResearcher, { from: owner });
      assert(false);
    } catch (err) {
      assert(err);
    }
    newResearcher = accounts[9];
    await projectInstance.changeResearcher(newResearcher, { from: owner });
    expect(await projectInstance.getCurrentResearcher()).to.equal(
      newResearcher
    );
  });

  it('should change minimum contribution amount only upon valid input', async () => {
    let newMinimum;
    expect(
      parseInt(await projectInstance.getMinimumContributionAmount())
    ).to.equal(minimum);
    try {
      newMinimum = 'asdjweoiumsdfhms';
      await projectInstance.changeMinimumContributionAmount(newMinimum, {
        from: owner,
      });
      assert(false);
    } catch (err) {
      assert(err);
    }
    try {
      newMinimum = true;
      await projectInstance.changeMinimumContributionAmount(newMinimum, {
        from: owner,
      });
      assert(false);
    } catch (err) {
      assert(err);
    }
    try {
      newMinimum = '50';
      await projectInstance.changeMinimumContributionAmount(newMinimum, {
        from: owner,
      });
      assert(false);
    } catch (err) {
      assert(err);
    }
    try {
      newMinimum = 1.7;
      await projectInstance.changeMinimumContributionAmount(newMinimum, {
        from: owner,
      });
      assert(false);
    } catch (err) {
      assert(err);
    }
    newMinimum = 50;
    await projectInstance.changeMinimumContributionAmount(newMinimum, {
      from: owner,
    });
    expect(
      parseInt(await projectInstance.getMinimumContributionAmount())
    ).to.equal(newMinimum);
  });

  it('should change fee amount only upon valid input', async () => {
    let newFeePercentage;
    expect(parseInt(await projectInstance.getFeePercentage())).to.equal(
      feePercentage
    );
    try {
      newFeePercentage = 'asdjweoiumsdfhms';
      await projectInstance.changeFeePercentage(newFeePercentage, {
        from: owner,
      });
      assert(false);
    } catch (err) {
      assert(err);
    }
    try {
      newFeePercentage = true;
      await projectInstance.changeFeePercentage(newFeePercentage, {
        from: owner,
      });
      assert(false);
    } catch (err) {
      assert(err);
    }
    try {
      newFeePercentage = '50';
      await projectInstance.changeFeePercentage(newFeePercentage, {
        from: owner,
      });
      assert(false);
    } catch (err) {
      assert(err);
    }
    try {
      newFeePercentage = 1.7;
      await projectInstance.changeFeePercentage(newFeePercentage, {
        from: owner,
      });
      assert(false);
    } catch (err) {
      assert(err);
    }
    try {
      newFeePercentage = 101;
      await projectInstance.changeFeePercentage(newFeePercentage, {
        from: owner,
      });
      assert(false);
    } catch (err) {
      assert(err);
    }
    newFeePercentage = 15;
    await projectInstance.changeFeePercentage(newFeePercentage, {
      from: owner,
    });
    expect(parseInt(await projectInstance.getFeePercentage())).to.equal(
      newFeePercentage
    );
  });

  it('should withdraw full balance and reset fees and contributions', async () => {
    const amount = minimum * 10 ** 4; // simulate to wei
    const tokenMetaURI = 'https://fake.uri';

    const nonce = parseInt(await erc20Instance.nonces(contributor1))
    const deadline =  Math.floor(new Date().getTime() / 1000) + 3600
    const { v, r, s } = await createPermit(
      domainData,
      contributor1,
      projectInstance.address,
      amount,
      nonce,
      deadline
    )

    await projectInstance.contributeWithPermit(
      amount, tokenMetaURI,
      v, r, s, deadline,
        {
      from: contributor1,
    });
    await projectInstance.withdrawBalance(true, { from: owner });
    const researcherBalance = await erc20Instance.balanceOf(researcher);
    const ownerBalance = await erc20Instance.balanceOf(owner);
    expect(parseInt(ownerBalance)).to.equal(amount);
    expect(parseInt(researcherBalance)).to.equal(0);
    expect(parseInt(await projectInstance.getUnclaimedFeeAmount())).to.equal(0);
    expect(
      parseInt(await projectInstance.getUnclaimedContributionsAmount())
    ).to.equal(0);
    expect(
      parseInt(await erc20Instance.balanceOf(projectInstance.address))
    ).to.equal(0);
  });

  it('should withdraw full balance and NOT reset fees and contributions', async () => {
    const amount = minimum * 10 ** 4; // simulate to wei
    const fees = (amount * feePercentage) / 100;
    const funds = amount - fees;
    const tokenMetaURI = 'https://fake.uri';

    const nonce = parseInt(await erc20Instance.nonces(contributor1))
    const deadline =  Math.floor(new Date().getTime() / 1000) + 3600
    const { v, r, s } = await createPermit(
      domainData,
      contributor1,
      projectInstance.address,
      amount,
      nonce,
      deadline
    )

    await projectInstance.contributeWithPermit(
      amount, tokenMetaURI,
      v, r, s, deadline,
        {
      from: contributor1,
    });
    await projectInstance.withdrawBalance(false, { from: owner });
    const researcherBalance = await erc20Instance.balanceOf(researcher);
    const ownerBalance = await erc20Instance.balanceOf(owner);
    expect(parseInt(ownerBalance)).to.equal(amount);
    expect(parseInt(researcherBalance)).to.equal(0);
    expect(parseInt(await projectInstance.getUnclaimedFeeAmount())).to.equal(
      fees
    );
    expect(
      parseInt(await projectInstance.getUnclaimedContributionsAmount())
    ).to.equal(funds);
    expect(
      parseInt(await erc20Instance.balanceOf(projectInstance.address))
    ).to.equal(0);
  });

  it('should not withdraw balance if balance === 0', async () => {
    try {
      await projectInstance.withdrawBalance(true, { from: owner });
      assert(false);
    } catch (err) {
      assert(err);
    }
    const stableBalance = await erc20Instance.balanceOf(owner);
    expect(parseInt(stableBalance)).to.equal(0);
  });

  it('should not disburse fees if fees === 0', async () => {
    try {
      await projectInstance.claimFees({ from: owner });
      assert(false);
    } catch (err) {
      assert(err);
    }
    const stableBalance = await erc20Instance.balanceOf(researcher);
    expect(parseInt(stableBalance)).to.equal(0);
    expect(parseInt(await projectInstance.getUnclaimedFeeAmount())).to.equal(0);
    expect(
      parseInt(await projectInstance.getUnclaimedContributionsAmount())
    ).to.equal(0);
  });

  it('should not disburse funds if funds === 0', async () => {
    try {
      await projectInstance.disburseFunds({ from: owner });
      assert(false);
    } catch (err) {
      assert(err);
    }
    const stableBalance = await erc20Instance.balanceOf(researcher);
    expect(parseInt(stableBalance)).to.equal(0);
    expect(parseInt(await projectInstance.getUnclaimedFeeAmount())).to.equal(0);
    expect(
      parseInt(await projectInstance.getUnclaimedContributionsAmount())
    ).to.equal(0);
  });

  it('should handle many successful contributions at the same time', async () => {
    const amount = minimum;
    const tokenMetaURI = 'https://fake.uri';
    const numTransactions = 10;

    const deadline =  Math.floor(new Date().getTime() / 1000) + 3600
    // Spawn multiple transaction promises
    const promises = [];
    for (let i = 0; i < numTransactions; i++) {
          const nonce = parseInt(await erc20Instance.nonces(contributor1))
          const nonce2 = parseInt(await erc20Instance.nonces(contributor2))
          const { v, r, s } = await createPermit(
              domainData,
              contributor1,
              projectInstance.address,
              amount,
              nonce,
              deadline
            )
            const res1 = await projectInstance.contributeWithPermit(
              amount, tokenMetaURI,
              v, r, s, deadline,
                {
              from: contributor1,
            })
            assert.equal(res1.receipt.status, true, "Transaction failed")
            const { v:v2, r:r2, s:s2 } = await createPermit(
              domainData,
              contributor2,
              projectInstance.address,
              amount,
              nonce2,
              deadline
            )
            const res2 = await projectInstance.contributeWithPermit(
              amount, tokenMetaURI,
              v2, r2, s2, deadline,
              {from: contributor2}
            )
            assert.equal(res2.receipt.status, true, "Transaction failed")
        }

    // Check that project contract balance is correct
    const expectedBalance = amount * numTransactions * 2;
    const actualBalance = await erc20Instance.balanceOf(
      projectInstance.address
    );
    expect(expectedBalance).to.equal(parseInt(actualBalance));
  });

  it('should handle a large number of contributions from multiple users', async () => {
    const numTransactions = 50;
    const amount = minimum;
    const tokenMetaURI = 'https://fake.uri';
    for (let i = 0; i < numTransactions; i++) {
      const nonce = parseInt(await erc20Instance.nonces(contributor1))
      const nonce2 = parseInt(await erc20Instance.nonces(contributor2))
      const deadline =  Math.floor(new Date().getTime() / 1000) + 3600
      const { v, r, s } = await createPermit(
        domainData,
        contributor1,
        projectInstance.address,
        amount,
        nonce,
        deadline
      )
      const { v:v2, r:r2, s:s2 } = await createPermit(
        domainData,
        contributor2,
        projectInstance.address,
        amount,
        nonce2,
        deadline
      )

      await projectInstance.contributeWithPermit(
        amount, tokenMetaURI,
        v, r, s, deadline,
          {
        from: contributor1,
      });
      await projectInstance.contributeWithPermit(
        amount, tokenMetaURI,
        v2, r2, s2, deadline,
          {
        from: contributor2,
      });
    }
    const stableBalance = await erc20Instance.balanceOf(
      projectInstance.address
    );
    const nftBalanceUser1 = await projectInstance.balanceOf(contributor1);
    const nftBalanceUser2 = await projectInstance.balanceOf(contributor2);
    expect(parseInt(stableBalance)).to.equal(numTransactions * amount * 2);
    expect(parseInt(nftBalanceUser1)).to.equal(numTransactions);
    expect(parseInt(nftBalanceUser2)).to.equal(numTransactions);
  });
});
