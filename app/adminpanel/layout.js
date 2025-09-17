import AdminPanelHeader from "@/components/adminPanelHeader/AdminPanelHeader";
import AdminPanelVerticalMenu from "@/components/adminPanelVerticalMenu/AdminPanelVerticalMenu";

export default async function DashboardLayout({ children }) {
  return (
    <>
      <div className="bg-gray-800 min-h-svh">
        <AdminPanelHeader />
        <div className="section">
          <div className="row flex">
            <AdminPanelVerticalMenu />
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
