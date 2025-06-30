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
