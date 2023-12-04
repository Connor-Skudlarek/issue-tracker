import SideNav from "@/app/ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex bg-my-navy h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-3 px-1 md:overflow-y-auto md:p-4 lg:px-8">
        <div className="h-[100%] bg-my-grey rounded-md">{children}</div>
      </div>
    </div>
  );
}
