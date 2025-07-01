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
import SuperAEPS from "./pages/super/agenet_list/SuperAEPS";
import SuperUTI from "./pages/super/agenet_list/SuperUTI";
import { TransferReturn } from "./pages/super/fund/TransferReturn";
import { Request } from "./pages/super/fund/Request";
import { RequestReport } from "./pages/super/fund/RequestReport";
import { CCFundReport } from "./pages/super/fund/CCFundReport";
import { AllFundReport } from "./pages/super/fund/AllFundReport";
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
        {
          path: "fund/ccrequest",
          Component: CCFundReport,
        },
        {
          path: "fund/statement",
          Component: AllFundReport,
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
