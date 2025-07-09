import { RouterProvider, createBrowserRouter } from "react-router";
import "./App.css";
import "react-datepicker/dist/react-datepicker.css";

// Super admin
import { SuperAdminLayout } from "./layouts/SuperAdminLayout";
import Dashboard from "./pages/super/Dashboard";
import { SignIN } from "./pages/SignIn";
import { SchemeManager } from "./pages/super/resources_tab/SchemeManger";
import { CompanyProfile } from "./pages/super/resources_tab/CompanyProfile";
import { CompanyManger } from "./pages/super/resources_tab/CompanyManger";
import SuperAEPS from "./pages/super/agent_list/SuperAEPS";
import SuperUTI from "./pages/super/agent_list/SuperUTI";
import { TransferReturn } from "./pages/super/fund/TransferReturn";
import { Request } from "./pages/super/fund/Request";
import { RequestReport } from "./pages/super/fund/RequestReport";
import { AllAEPSTransaction } from "./pages/super/transaction_report/AllAEPSTransaction";
import { CommissionStatement } from "./pages/super/transaction_report/CommissionStatement";
import { BillPayStatement } from "./pages/super/transaction_report/BillPayStatement";
import { VerificationStatement } from "./pages/super/transaction_report/VerificationStatement";
import { AffiliateStatement } from "./pages/super/transaction_report/AffiliateStatement";
import { MicroATMStatement } from "./pages/super/transaction_report/MicroATMStatement";
import { RechargeStatement } from "./pages/super/transaction_report/RechargeStatement";
import { UTIPancardStatement } from "./pages/super/transaction_report/UTIPancardStatement";
import { CreditCardPayment } from "./pages/super/transaction_report/CreditCardPayment";
import { MainWallet } from "./pages/super/wallet_history/MainWallet";
import { AEPSWallet } from "./pages/super/wallet_history/AEPSWallet";
import { CommissionWallet } from "./pages/super/wallet_history/CommissionWallet";
import { MatchingPercentage } from "./pages/super/matching_percentage/MatchingPercentage";
import { MobileUserLogout } from "./pages/super/setup_tools/MobileUserLogout";
import { APIManager } from "./pages/super/setup_tools/APIManager";
import { BankAccount } from "./pages/super/setup_tools/BankAccount";
import { ComplaintSubject } from "./pages/super/setup_tools/ComplaintSubject";
import { OperatorManager } from "./pages/super/setup_tools/OperatorManager";
import { PortalSetting } from "./pages/super/setup_tools/PortalSetting";
import { QuickLinks } from "./pages/super/setup_tools/QuickLinks";
import { Roles } from "./pages/super/roles_permissions/Roles";
import { Permissions } from "./pages/super/roles_permissions/Permissions";
import AccountPortalSettings from "./pages/super/account_settings/AccountPortalSettings";
import { Admin } from "./pages/super/members/Admin";
import { WhiteLabel } from "./pages/super/members/WhiteLabel";
import { MasterDistributor } from "./pages/super/members/MasterDistributor";
import { Distributor } from "./pages/super/members/Distributor";
import { Retail } from "./pages/super/members/Retail";
import { Customer } from "./pages/super/members/Customer";
import WhitelabelLayout from "./layouts/members/WhitelabelLayout";
import CreateWhitelabel from "./components/super/members/whitelabel/CreateWhiteLabel";
import MDLayout from "./layouts/members/MDLayout";
import DSLayout from "./layouts/members/DSLayout";
import CustomerLayout from "./layouts/members/CustomerLayout";
import RetailerLayout from "./layouts/members/RetailerLayout";
import CreateMDS from "./components/super/members/mds/CreateMDS";
import Electricity from "./pages/super/Bill_payment/Electricity";

// admin

const App = () => {
  const router = createBrowserRouter([
    // super admin
    {
      path: "/",
      Component: SuperAdminLayout,
      children: [
        {
          path: "/",
          Component: Dashboard,
        },

        // Bill Payment
        {
          path: "/Bill-Payment/electricity",
          Component: Electricity,
        },
        // {
        //   path: "/resources/company",
        //   Component: p,
        // },

        // resources
        {
          path: "/resources/scheme-manager",
          Component: SchemeManager,
        },
        {
          path: "/resources/company",
          Component: CompanyManger,
        },
        {
          path: "/resources/company-profile",
          Component: CompanyProfile,
        },
        // Agent List

        {
          path: "/statement/aeps",
          Component: SuperAEPS,
        },
        {
          path: "/statement/uti",
          Component: SuperUTI,
        },

        // Fund

        {
          path: "fund/tr",
          Component: TransferReturn,
        },
        {
          path: "fund/requestview",
          Component: Request,
        },
        {
          path: "fund/requestviewall",
          Component: RequestReport,
        },

        // transaction report
        {
          path: "statement/aeps-txn",
          Component: AllAEPSTransaction,
        },
        {
          path: "statement/commision",
          Component: CommissionStatement,
        },
        {
          path: "statement/bill-pay",
          Component: BillPayStatement,
        },
        {
          path: "statement/verification",
          Component: VerificationStatement,
        },
        {
          path: "statement/affiliate",
          Component: AffiliateStatement,
        },
        {
          path: "statement/micro-atm",
          Component: MicroATMStatement,
        },
        {
          path: "statement/recharge",
          Component: RechargeStatement,
        },
        {
          path: "statement/uti-pancard",
          Component: UTIPancardStatement,
        },
        {
          path: "statement/credit",
          Component: CreditCardPayment,
        },

        // Wallet History
        {
          path: "statement/account",
          Component: MainWallet,
        },
        {
          path: "statement/aeps-wallet",
          Component: AEPSWallet,
        },
        {
          path: "statement/commission-wallet",
          Component: CommissionWallet,
        },
        // Matching Percentage
        {
          path: "matchingpercent",
          Component: MatchingPercentage,
        },
        // Setup tools
        {
          path: "setup/token",
          Component: MobileUserLogout,
        },
        {
          path: "setup/api",
          Component: APIManager,
        },
        {
          path: "setup/bank",
          Component: BankAccount,
        },
        {
          path: "setup/complaintsub",
          Component: ComplaintSubject,
        },
        {
          path: "setup/operator",
          Component: OperatorManager,
        },
        {
          path: "setup/portalsettings",
          Component: PortalSetting,
        },
        {
          path: "setup/links",
          Component: QuickLinks,
        },

        // Roles and Permission
        {
          path: "tools/roles",
          Component: Roles,
        },
        {
          path: "tools/permissions",
          Component: Permissions,
        },

        // account settings
        {
          path: "profile/view",
          Component: AccountPortalSettings,
        },

        // members
        {
          path: "members/admin",
          Component: Admin,
        },
        {
          path: "members/whitelabel",
          Component: WhitelabelLayout,
          children: [
            {
              index: true,
              Component: WhiteLabel,
            },
            {
              path: "create",
              Component: CreateWhitelabel,
            },
          ],
        },
        {
          path: "members/mds",
          Component: MDLayout,
          children: [
            {
              index: true,
              Component: MasterDistributor,
            },
            {
              path: "create",
              Component: CreateMDS,
            },
          ],
        },
        {
          path: "members/ds",
          Component: DSLayout,
          children: [
            {
              index: true,
              Component: Distributor,
            },
            {
              path: "create",
              Component: CreateWhitelabel,
            },
          ],
        },
        {
          path: "members/retail",
          Component: Retail,
          children: [
            {
              index: true,
              Component: RetailerLayout,
            },
            {
              path: "create",
              Component: CreateWhitelabel,
            },
          ],
        },
        {
          path: "members/customer",
          Component: CustomerLayout,
          children: [
            {
              index: true,
              Component: Customer,
            },
            {
              path: "create",
              Component: CreateWhitelabel,
            },
          ],
        },
      ],
    },

    // sign up
    {
      path: "/signin",
      Component: SignIN,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;

import { RouterProvider, createBrowserRouter } from "react-router";
import "./App.css";
import "react-datepicker/dist/react-datepicker.css";

// Super admin
import { SuperAdminLayout } from "./layouts/SuperAdminLayout";
import Dashboard from "./pages/super/Dashboard";
import { SignIN } from "./pages/SignIn";
import { AdminLayout } from "./layouts/AdminLayout";
import { AdminDashboard } from "./pages/admin/AdminDashboard";
import { ModalProvider } from "./contexts/ModelContext";
import { SchemeManager } from "./pages/super/resources_tab/SchemeManger";
import { CompanyProfile } from "./pages/super/resources_tab/CompanyProfile";
import { CompanyManger } from "./pages/super/resources_tab/CompanyManger";
import SuperAEPS from "./pages/super/agent_list/SuperAEPS";
import SuperUTI from "./pages/super/agent_list/SuperUTI";
import { TransferReturn } from "./pages/super/fund/TransferReturn";
import { Request } from "./pages/super/fund/Request";
import { RequestReport } from "./pages/super/fund/RequestReport";
import { AllAEPSTransaction } from "./pages/super/transaction_report/AllAEPSTransaction";
import { CommissionStatement } from "./pages/super/transaction_report/CommissionStatement";
import { BillPayStatement } from "./pages/super/transaction_report/BillPayStatement";
import { VerificationStatement } from "./pages/super/transaction_report/VerificationStatement";
import { AffiliateStatement } from "./pages/super/transaction_report/AffiliateStatement";
import { MicroATMStatement } from "./pages/super/transaction_report/MicroATMStatement";
import { RechargeStatement } from "./pages/super/transaction_report/RechargeStatement";
import { UTIPancardStatement } from "./pages/super/transaction_report/UTIPancardStatement";
import { CreditCardPayment } from "./pages/super/transaction_report/CreditCardPayment";
import { MainWallet } from "./pages/super/wallet_history/MainWallet";
import { AEPSWallet } from "./pages/super/wallet_history/AEPSWallet";
import { CommissionWallet } from "./pages/super/wallet_history/CommissionWallet";
import { MatchingPercentage } from "./pages/super/matching_percentage/MatchingPercentage";
import { MobileUserLogout } from "./pages/super/setup_tools/MobileUserLogout";
import { APIManager } from "./pages/super/setup_tools/APIManager";
import { BankAccount } from "./pages/super/setup_tools/BankAccount";
import { ComplaintSubject } from "./pages/super/setup_tools/ComplaintSubject";
import { OperatorManager } from "./pages/super/setup_tools/OperatorManager";
import { PortalSetting } from "./pages/super/setup_tools/PortalSetting";
import { QuickLinks } from "./pages/super/setup_tools/QuickLinks";
import { Roles } from "./pages/super/roles_permissions/Roles";
import { Permissions } from "./pages/super/roles_permissions/Permissions";
import AccountPortalSettings from "./pages/super/account_settings/AccountPortalSettings";
import { Admin } from "./pages/super/members/Admin";
import { WhiteLabel } from "./pages/super/members/WhiteLabel";
import { MasterDistributor } from "./pages/super/members/MasterDistributor";
import { Distributor } from "./pages/super/members/Distributor";
import { Retail } from "./pages/super/members/Retail";
import { Customer } from "./pages/super/members/Customer";
import WhitelabelLayout from "./layouts/members/WhitelabelLayout";
import CreateWhitelabel from "./components/super/members/whitelabel/CreateWhiteLabel";
import MDLayout from "./layouts/members/MDLayout";
import DSLayout from "./layouts/members/DSLayout";
import CustomerLayout from "./layouts/members/CustomerLayout";
import RetailerLayout from "./layouts/members/RetailerLayout";
import CreateMDS from "./components/super/members/mds/CreateMDS";
import MobileRechargeForm from "./pages/super/utilit_recharge/MobileRechargeForm";
import dthRecharge from "./pages/super/utilit_recharge/dthRecharge";

const App = () => {
  const router = createBrowserRouter([
    // super admin
    {
      path: "/",
      Component: SuperAdminLayout,
      children: [
        {
          path: "/",
          Component: Dashboard,
        },
        // resources
        {
          path: "/resources/scheme-manager",
          Component: SchemeManager,
        },
        {
          path: "/resources/company",
          Component: CompanyManger,
        },
        {
          path: "/resources/company-profile",
          Component: CompanyProfile,
        },
        // Agent List

        {
          path: "/statement/aeps",
          Component: SuperAEPS,
        },
        {
          path: "/statement/uti",
          Component: SuperUTI,
        },

        // Fund

        {
          path: "fund/tr",
          Component: TransferReturn,
        },
        {
          path: "fund/requestview",
          Component: Request,
        },
        {
          path: "fund/requestviewall",
          Component: RequestReport,
        },

        // transaction report
        {
          path: "statement/aeps-txn",
          Component: AllAEPSTransaction,
        },
        {
          path: "statement/commision",
          Component: CommissionStatement,
        },
        {
          path: "statement/bill-pay",
          Component: BillPayStatement,
        },
        {
          path: "statement/verification",
          Component: VerificationStatement,
        },
        {
          path: "statement/affiliate",
          Component: AffiliateStatement,
        },
        {
          path: "statement/micro-atm",
          Component: MicroATMStatement,
        },
        {
          path: "statement/recharge",
          Component: RechargeStatement,
        },
        {
          path: "statement/uti-pancard",
          Component: UTIPancardStatement,
        },
        {
          path: "statement/credit",
          Component: CreditCardPayment,
        },
        //UTILITY
        {
          path: "utility/mobile-recharge",
          Component: MobileRechargeForm,
        },
        {
          path: "utility/dth-recharge",
          Component: dthRecharge,
        },
        // Wallet History
        {
          path: "statement/account",
          Component: MainWallet,
        },
        {
          path: "statement/aeps-wallet",
          Component: AEPSWallet,
        },
        {
          path: "statement/commission-wallet",
          Component: CommissionWallet,
        },
        // Matching Percentage
        {
          path: "matchingpercent",
          Component: MatchingPercentage,
        },
        // Setup tools
        {
          path: "setup/token",
          Component: MobileUserLogout,
        },
        {
          path: "setup/api",
          Component: APIManager,
        },
        {
          path: "setup/bank",
          Component: BankAccount,
        },
        {
          path: "setup/complaintsub",
          Component: ComplaintSubject,
        },
        {
          path: "setup/operator",
          Component: OperatorManager,
        },
        {
          path: "setup/portalsettings",
          Component: PortalSetting,
        },
        {
          path: "setup/links",
          Component: QuickLinks,
        },

        // Roles and Permission
        {
          path: "tools/roles",
          Component: Roles,
        },
        {
          path: "tools/permissions",
          Component: Permissions,
        },

        // account settings
        {
          path: "profile/view",
          Component: AccountPortalSettings,
        },

        // members
        {
          path: "members/admin",
          Component: Admin,
        },
        {
          path: "members/whitelabel",
          Component: WhitelabelLayout,
          children: [
            {
              index: true,
              Component: WhiteLabel,
            },
            {
              path: "create",
              Component: CreateWhitelabel,
            },
          ],
        },
        {
          path: "members/mds",
          Component: MDLayout,
          children: [
            {
              index: true,
              Component: MasterDistributor,
            },
            {
              path: "create",
              Component: CreateMDS,
            },
          ],
        },
        {
          path: "members/ds",
          Component: DSLayout,
          children: [
            {
              index: true,
              Component: Distributor,
            },
            {
              path: "create",
              Component: CreateWhitelabel,
            },
          ],
        },
        {
          path: "members/retail",
          Component: Retail,
          children: [
            {
              index: true,
              Component: RetailerLayout,
            },
            {
              path: "create",
              Component: CreateWhitelabel,
            },
          ],
        },
        {
          path: "members/customer",
          Component: CustomerLayout,
          children: [
            {
              index: true,
              Component: Customer,
            },
            {
              path: "create",
              Component: CreateWhitelabel,
            },
          ],
        },
      ],
    },
    // admin
    {
      path: "/ad/",
      element: (
        <ModalProvider>
          <AdminLayout />
        </ModalProvider>
      ),
      children: [
        {
          path: "/ad/",
          Component: AdminDashboard,
        },
      ],
    },
    // sign up
    {
      path: "/signin",
      Component: SignIN,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
