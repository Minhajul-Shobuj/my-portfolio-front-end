"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  FilePlus,
  ListChecks,
  FileText,
  MessageSquare,
  Menu,
  PlusSquare,
  Settings2,
} from "lucide-react";

const navLinks = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Add Project", href: "/dashboard/addProject", icon: FilePlus },
  {
    name: "Manage Projects",
    href: "/dashboard/manageProject",
    icon: ListChecks,
  },
  { name: "Post Blog", href: "/dashboard/addBlog", icon: FileText },
  { name: "Manage Blogs", href: "/dashboard/manageBlog", icon: ListChecks },
  { name: "Add Skills", href: "/dashboard/addSkills", icon: PlusSquare },
  { name: "Manage Skills", href: "/dashboard/manageSkills", icon: Settings2 },
  { name: "Messages", href: "/dashboard/messages", icon: MessageSquare },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleNavClick = () => setIsOpen(false);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 w-64 bg-gray-900 text-white p-5 transition-transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 md:relative md:w-64`}
        >
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-xl font-bold">Dashboard</h2>
            <button className="colour" onClick={() => setIsOpen(false)}>
              Logout
            </button>
          </div>
          <nav>
            <ul className="space-y-3">
              {navLinks.map(({ name, href, icon: Icon }) => (
                <li key={href} onClick={handleNavClick}>
                  <Link
                    href={href}
                    className={`flex items-center gap-3 p-2 rounded transition ${
                      pathname === href ? "bg-gray-700" : "hover:bg-gray-800"
                    }`}
                  >
                    <Icon size={20} /> {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <button
          className="md:hidden fixed top-4 right-4 bg-gray-900 text-white p-2 rounded z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={24} />
        </button>
      </div>
    </>
  );
}
