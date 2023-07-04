import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
// import Navbar from "components/navbar";
import Sidebar from "../../UI/AdminSidebar/AdminSidebar";

export default function AdminLayout({ children }) {
  // const { ...rest } = props;
  const location = useLocation();
  const [open, setOpen] = React.useState(true);
  const [currentRoute, setCurrentRoute] = React.useState("Main Dashboard");

  React.useEffect(() => {
    window.addEventListener("resize", () =>
      window.innerWidth < 1200 ? setOpen(false) : setOpen(true)
    );
  }, []);

  // document.documentElement.dir = "ltr";
  return (
    <section className="flex h-screen w-full">
      <Sidebar open={open} onClose={() => setOpen(false)} />
      <div className="h-full w-full bg-zinc-100 ">
        <main
          className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px] scroll-smooth snap-y`}
        >
          {children}
        </main>
      </div>
    </section>
  );
}
