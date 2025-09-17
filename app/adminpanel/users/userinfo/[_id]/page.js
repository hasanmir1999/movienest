import AdminPanelUserInfoPageContent from "@/components/adminPanelUserInfoPageContent/AdminPanelUserInfoPageContent";
export const metadata = {
  title: "User info",
};



export default async function UserInfo({params}){
  const {_id} = await params
  return(
    <AdminPanelUserInfoPageContent _id={_id} />
  )
}