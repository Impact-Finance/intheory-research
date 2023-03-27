import { useDynamicContext, Wallet } from '@dynamic-labs/sdk-react';
import { Dispatch, SetStateAction } from 'react';

import StatsBox from '@/components/adminPage/statsBox/stats-box';
import CreateProject from '@/components/adminPage/createProject/create-project';
import { PlatformStatsObject } from '@/app';
import { getPlatformStats } from '@/utils/fetchContent';
import ClaimAndDisburse from '@/components/adminPage/claimAndDisburse/claim-and-disburse';
import ContractQueries from '@/components/adminPage/contractQueries/contract-queries';
import ContractModifier from '@/components/adminPage/contractModifier/contract-modifier';

interface AdminPageProps {
  platformStats: PlatformStatsObject;
}

export interface AdminModuleProps {
  primaryWallet: Wallet | null;
  network: number | undefined;
  setShowAuthFlow: Dispatch<SetStateAction<boolean>>;
}

const AdminConsole = ({ platformStats }: AdminPageProps) => {
  const { primaryWallet, network, setShowAuthFlow } = useDynamicContext();

  return (
    <>
      <StatsBox stats={platformStats} />
      <CreateProject
        primaryWallet={primaryWallet}
        network={network}
        setShowAuthFlow={setShowAuthFlow}
      />
      <ClaimAndDisburse
        primaryWallet={primaryWallet}
        network={network}
        setShowAuthFlow={setShowAuthFlow}
      />
      <ContractQueries
        primaryWallet={primaryWallet}
        network={network}
        setShowAuthFlow={setShowAuthFlow}
      />
      <ContractModifier
        primaryWallet={primaryWallet}
        network={network}
        setShowAuthFlow={setShowAuthFlow}
      />
    </>
  );
};

export default AdminConsole;

export async function getServerSideProps() {
  const platformStats = await getPlatformStats();

  return {
    props: {
      platformStats,
    },
  };
}
