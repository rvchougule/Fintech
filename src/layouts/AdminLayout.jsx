import { Outlet } from "react-router";
import AdminSideBar from "../components/admin/AdminSideBar";
import { AdminHeader } from "../components/admin/AdminHeader";

export const AdminLayout = () => {
  return (
    <>
      <section className=" max-h-[100vh] flex w-full ">
        <AdminSideBar />
        <div className="w-full">
          <AdminHeader />
          <main className="  overflow-hidden ">
            <Outlet />
          </main>
          {/* <Footer /> */}
        </div>
      </section>
    </>
  );
};
