import AdminPanelEditUserPageContent from "@/components/adminPanelEditUserPageContent/AdminPanelEditUserPageContent";

export const metadata = {
  title: "Edit user",
};



export default async function EditUser({params}){
    const {_id} = await params
  return(
    <AdminPanelEditUserPageContent _id={_id} />
  )
}