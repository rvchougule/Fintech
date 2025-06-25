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
