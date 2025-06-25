import { Outlet } from "react-router";
import Sidebar from "../components/super/SideBar";
import Header from "../components/super/Header";

export const SuperAdminLayout = () => {
  return (
    <>
      <section className=" max-h-[100vh] flex w-full dark:bg-darkBlue/95">
        <Sidebar />
        <div className="w-full">
          <Header />
          <main className="overflow-hidden">
            <Outlet />
          </main>
        </div>
      </section>
    </>
  );
};
