import UserPanelHeader from "@/components/userPanelHeader/UserPanelHeader";
import UserPanelVerticalMenu from "@/components/userPanelVerticalMenu/UserPanelVerticalMenu";
export const metadata = {
  title: "Dashboard",
};

export default async function DashboardLayout({ children }) {


  return (
    <>
      <div className="bg-gray-800 min-h-svh">
        <UserPanelHeader />
        <div className="section">
          <div className="row flex">
            <UserPanelVerticalMenu />
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
