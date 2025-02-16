"use client";

import { TSession } from "@/types";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  MenuButton,
  MenuItem,
  MenuItems,
  Menu,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Blogs", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar({ session }: { session: TSession }) {
  const pathname = usePathname();
  return (
    <Disclosure
      as="nav"
      className="bg-black font-montserrat sticky top-0 z-50 shadow-md"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white">
                  <Bars3Icon
                    className={`${open ? "hidden" : "block"} size-6`}
                  />
                  <XMarkIcon
                    className={`${open ? "block" : "hidden"} size-6`}
                  />
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <Link href="/">
                  <div className="text-2xl font-bold tracking-wide text-white uppercase">
                    Minhajul
                  </div>
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-6 text-white font-semibold">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`hover:text-gray-400 transition ${
                        pathname === item.href
                          ? "underline underline-offset-4 text-indigo-400"
                          : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  {session?.user && (
                    <Link
                      href="/dashboard"
                      className={`hover:text-gray-400 transition ${
                        pathname === "/dashboard"
                          ? "underline underline-offset-4 text-indigo-400"
                          : ""
                      }`}
                    >
                      Dashboard
                    </Link>
                  )}
                  {session?.user ? (
                    <Menu as="div" className="relative ml-3">
                      <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <Image
                          src={session.user.image}
                          alt="User Profile"
                          width={100}
                          height={100}
                          className="size-8 rounded-full"
                        />
                      </MenuButton>
                      <MenuItems
                        transition
                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                      >
                        <MenuItem>
                          <button
                            onClick={() =>
                              signOut({
                                callbackUrl:
                                  "https://my-portfolio-psi-ten-98.vercel.app",
                              })
                            }
                            className="block px-3 py-2 text-black hover:text-gray-400"
                          >
                            Logout
                          </button>
                        </MenuItem>
                      </MenuItems>
                    </Menu>
                  ) : (
                    <Link
                      href={"/login"}
                      className={`hover:text-gray-400 transition ${
                        pathname === "/login"
                          ? "underline underline-offset-4 text-indigo-400"
                          : ""
                      }`}
                    >
                      Login
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as={Link}
                  href={item.href}
                  className={`block px-3 py-2 text-white ${
                    pathname === item.href
                      ? "underline underline-offset-4 text-indigo-400"
                      : ""
                  }`}
                >
                  {item.name}
                </DisclosureButton>
              ))}
              {session?.user && (
                <Link
                  href="/dashboard"
                  className={`block px-3 py-2 text-white hover:text-gray-400 ${
                    pathname === "/dashboard"
                      ? "underline underline-offset-4 text-indigo-400"
                      : ""
                  }`}
                >
                  Dashboard
                </Link>
              )}
              {session ? (
                <DisclosureButton
                  onClick={() =>
                    signOut({
                      callbackUrl: "https://my-portfolio-psi-ten-98.vercel.app",
                    })
                  }
                  className="block px-3 py-2 text-white hover:text-gray-400"
                >
                  Logout
                </DisclosureButton>
              ) : (
                <Link
                  href="/login"
                  className={`block px-3 py-2 text-white hover:text-gray-400 ${
                    pathname === "/login"
                      ? "underline underline-offset-4 text-indigo-400"
                      : ""
                  }`}
                >
                  Login
                </Link>
              )}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
