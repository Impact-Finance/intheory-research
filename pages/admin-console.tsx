import { useDynamicContext, Wallet } from '@dynamic-labs/sdk-react';
import { Dispatch, SetStateAction } from 'react';

import StatsBox from '@/components/adminPage/statsBox/stats-box';
import CreateProject from '@/components/adminPage/createProject/create-project';
import { PlatformStatsObject } from '@/app';
import { getPlatformStats } from '@/utils/fetchContent';
import ClaimAndDisburse from '@/components/adminPage/claimAndDisburse/claim-and-disburse';
import ContractQueries from '@/components/adminPage/contractQueries/contract-queries';
import ContractModifier from '@/components/adminPage/contractModifier/contract-modifier';

import { withPasswordProtect } from 'next-password-protect';

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

export async function getServerSideProps() {
  const platformStats = await getPlatformStats();

  return {
    props: {
      platformStats,
    },
  };
}

// export default AdminConsole;
// Password protection
export default withPasswordProtect(AdminConsole, {
  loginComponentProps: {
    backUrl: 'https://intheory.science',
    logo: 'https://i.imgur.com/XBu6GPn.png',
    buttonColor: '#68eaff',
    buttonBackgroundColor: '#0c294b',
  },
});
