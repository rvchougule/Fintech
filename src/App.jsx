import { RouterProvider, createBrowserRouter } from "react-router";
import "./App.css";
import "react-datepicker/dist/react-datepicker.css";

// Super admin
import { SuperAdminLayout } from "./layouts/SuperAdminLayout";
import Dashboard from "./pages/super/Dashboard";
import { SignIN } from "./pages/SignIn";

import SuperAEPS from "./pages/super/agent_list/SuperAEPS";

import { RequestReport } from "./pages/super/fund/RequestReport";
import { AllAEPSTransaction } from "./pages/super/transaction_report/AllAEPSTransaction";

import { BillPayStatement } from "./pages/super/transaction_report/BillPayStatement";
import { VerificationStatement } from "./pages/super/transaction_report/VerificationStatement";
import { PayoutStatement } from "./pages/super/transaction_report/PayoutStatement";
import { AffiliateStatement } from "./pages/super/transaction_report/AffiliateStatement";
import { MicroATMStatement } from "./pages/super/transaction_report/MicroATMStatement";
import { RechargeStatement } from "./pages/super/transaction_report/RechargeStatement";
import { UTIPancardStatement } from "./pages/super/transaction_report/UTIPancardStatement";
import { CreditCardPayment } from "./pages/super/transaction_report/CreditCardPayment";
import { MainWallet } from "./pages/super/wallet_history/MainWallet";
import { AEPSWallet } from "./pages/super/wallet_history/AEPSWallet";
import { CommissionWallet } from "./pages/super/wallet_history/CommissionWallet";

import { MobileUserLogout } from "./pages/super/setup_tools/MobileUserLogout";
import { APIManager } from "./pages/super/setup_tools/APIManager";
import { BankAccount } from "./pages/super/setup_tools/BankAccount";
import { ComplaintSubject } from "./pages/super/setup_tools/ComplaintSubject";
import { OperatorManager } from "./pages/super/setup_tools/OperatorManager";
import { PortalSetting } from "./pages/super/setup_tools/PortalSetting";
import { QuickLinks } from "./pages/super/setup_tools/QuickLinks";

import AccountPortalSettings from "./pages/super/account_settings/AccountPortalSettings";

import { Retail } from "./pages/super/members/Retail";
import { Customer } from "./pages/super/members/Customer";

import CreateWhitelabel from "./components/super/members/whitelabel/CreateWhiteLabel";

import CustomerLayout from "./layouts/members/CustomerLayout";
import RetailerLayout from "./layouts/members/RetailerLayout";

import Electricity from "./pages/super/Bill_payment/Electricity";
import Postpaid from "./pages/super/Bill_payment/Postpaid";
import Water from "./pages/super/Bill_payment/Water";
import Billpayment_dashboard from "./pages/super/Bill_payment/Billpayment_Dashboard";
import Lpggas from "./pages/super/Bill_payment/Lpggas";
import Pipedgas from "./pages/super/Bill_payment/Pipedgas";
import Landline from "./pages/super/Bill_payment/Landline";
import Educationfees from "./pages/super/Bill_payment/Educationfees";
import Fastag from "./pages/super/Bill_payment/Fastag";
import Loanrepayment from "./pages/super/Bill_payment/Loanrepayment";
import Insurance from "./pages/super/Bill_payment/Insurance";
import Rental from "./pages/super/Bill_payment/Rental";
import Donation from "./pages/super/Bill_payment/Donation";
import Subscription from "./pages/super/Bill_payment/Subscription";
import Hospital from "./pages/super/Bill_payment/Hospital";
import Clubsandassociations from "./pages/super/Bill_payment/Clubsandassociations";
import Municipalservices from "./pages/super/Bill_payment/Municipalservices";
import Municipaltaxes from "./pages/super/Bill_payment/Municipaltaxes";
import Housingsociety from "./pages/super/Bill_payment/Housingsociety";
import Lifeinsurance from "./pages/super/Bill_payment/Lifeinsurance";
import Cabletv from "./pages/super/Bill_payment/Cabletv";
import Creditcard from "./pages/super/Bill_payment/Creditcard";
import Recurringdeposit from "./pages/super/Bill_payment/Recurringdeposit";
import AepsRegistrationForm from "./pages/super/bankingservices/AepsRegistrationForm";
import Payout from "./pages/super/bankingservices/Payout";


import MobileRechargeForm from "./pages/super/utilit_recharge/MobileRechargeForm";
import dthRecharge from "./pages/super/utilit_recharge/dthRecharge";
import Uti from "./pages/super/PanCard/Uti";
import CommissionRequest from "./pages/super/commision/CommisionRequest";
import TransactionHistory from "./pages/super/transaction_report/TransactionHistory";
import Affiliateservices from "./pages/super/affiliate/Affiliateservices";

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

        //  UTILITY
        {
          path: "utility/mobile-recharge",
          Component: MobileRechargeForm,
        },
        {
          path: "utility/dth-recharge",
          Component: dthRecharge,
        },
        // Bill Payment
        {
          path: "/billpay/electricity",
          Component: Electricity,
        },

        {
          path: "/billpay/postpaid",
          Component: Postpaid,
        },
        {
          path: "/billpay/water",
          Component: Water,
        },
        {
          path: "/billpay/dashboard",
          Component: Billpayment_dashboard,
        },

        {
          path: "/billpay/lpggas",
          Component: Lpggas,
        },
        {
          path: "/billpay/gas",
          Component: Pipedgas,
        },
        {
          path: "/billpay/landline",
          Component: Landline,
        },
        {
          path: "/billpay/educationfees",
          Component: Educationfees,
        },
        {
          path: "/billpay/fastag",
          Component: Fastag,
        },
        {
          path: "/billpay/loanrepayment",
          Component: Loanrepayment,
        },
        {
          path: "/billpay/insurance",
          Component: Insurance,
        },
        {
          path: "/billpay/rental",
          Component: Rental,
        },

        {
          path: "/billpay/donation",
          Component: Donation,
        },

        {
          path: "/billpay/subscription",
          Component: Subscription,
        },
        {
          path: "/billpay/hospital",
          Component: Hospital,
        },
        {
          path: "/billpay/clubsandassociations",
          Component: Clubsandassociations,
        },
        {
          path: "/billpay/municipalservices",
          Component: Municipalservices,
        },

        {
          path: "/billpay/municipaltaxes",
          Component: Municipaltaxes,
        },
        {
          path: "/billpay/housingsociety",
          Component: Housingsociety,
        },
        {
          path: "/billpay/lifeinsurance",
          Component: Lifeinsurance,
        },

        {
          path: "/billpay/cabletv",
          Component: Cabletv,
        },

        {
          path: "/billpay/creditcard",
          Component: Creditcard,
        },

        {
          path: "/billpay/recurringdeposit",
          Component: Recurringdeposit,
        },

        //Banking Services
        {
          path: "/bankingservices/aepsRegistrationForm",
          Component: AepsRegistrationForm,
        },
        {
          path: "/bankingservices/payout",
          Component: Payout,
        },

        // resources

        // Agent List

        {
          path: "/statement/aeps",
          Component: SuperAEPS,
        },

        // Affiliate
        {
          path: "/affiliate/affiliateservices",
          Component: Affiliateservices,
        },
       

        

        // Fund

        
        
        {
          path: "fund/requestviewall",
          Component: RequestReport,
        },

        // transaction report
        {
          path: "/statement/transaction-history",
          Component: TransactionHistory,
        },

        {
          path: "statement/aeps-txn",
          Component: AllAEPSTransaction,
        },
       
        {
          path: "statement/bill-pay",
          Component: BillPayStatement,
        },
        {
          path: "statement/money",
          Component: PayoutStatement,
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

        // account settings
        {
          path: "profile/view",
          Component: AccountPortalSettings,
        },

        // members

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
        //PanCard
        {
          path: "Pancard/Uti",
          Component: Uti,
        },
        

        // Commission  request
        {
          path: "commission/request",
          Component: CommissionRequest,
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
