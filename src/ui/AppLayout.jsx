import { Outlet } from "react-router-dom";
import Header from "./Header";
import Modal from "./Modal";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <Modal>
      <div className="w-100 grid h-screen grid-rows-[auto_1fr] gap-4 bg-gradient-to-t from-slate-950 to-slate-900 p-4 text-slate-50">
        <Header />
        <Sidebar />
        <main className="mx-auto overflow-y-scroll md:w-[90%]">
          <Outlet />
        </main>
      </div>
    </Modal>
  );
}

export default AppLayout;
