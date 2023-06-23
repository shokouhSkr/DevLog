"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LeftMenuIcon, Logo, RightMenuIcon } from "@/components/icons";
import { navLinks } from "@/helpers/constants";
import { NavLinkType } from "@/types";
import { usePathname } from "next/navigation";
import Button from "../Button";

const typedNavLinks: NavLinkType[] = navLinks;

const getSidebarState = () => {
  const storedValue = localStorage.getItem("sidebarState");
  return storedValue !== null ? JSON.parse(storedValue) : false;
};

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(getSidebarState());
  const pathname = usePathname();

  useEffect(() => {
    localStorage.setItem("sidebarState", JSON.stringify(isSidebarOpen));
  }, [isSidebarOpen]);

  return (
    <aside
      className={`${
        isSidebarOpen ? "w-60" : "w-[56px]"
      } relative flex h-screen w-60 flex-col bg-secondary p-4 transition-[width] duration-300`}
    >
      {/* SIDEBAR LOGO */}
      <Link href="/admin" className="mb-16 flex items-center gap-2">
        <Logo className="h-10 w-10 text-[#555]" />
        {isSidebarOpen && <span className="text-xl">Admin</span>}
      </Link>

      {/* SIDEBAR LINKS */}
      <div className="mb-16 space-y-2">
        {typedNavLinks.map((link) => (
          <Link
            key={link.title}
            href={link.path}
            className={`transtion-all flex items-center gap-2 py-3 duration-300 hover:scale-[0.98] hover:text-primary-light hover:dark:text-primary-dark ${
              pathname === link.path && "scale-[0.98] text-primary-light dark:text-primary-dark"
            }`}
          >
            <link.icon className="h-5 w-5" />
            {isSidebarOpen && <span className="text-xs">{link.title}</span>}
          </Link>
        ))}
      </div>

      {/* SIDEBAR TOGGLER */}
      <Button />
      <button
        type="button"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="absolute bottom-4 right-4"
      >
        {isSidebarOpen ? (
          <LeftMenuIcon className="w-6 text-neutral" />
        ) : (
          <RightMenuIcon className="w-6 text-neutral" />
        )}
      </button>
    </aside>
  );
};

export default Sidebar;
