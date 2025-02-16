import Sidebar from "@/components/shared/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1">{children}</main>{" "}
    </div>
  );
}
