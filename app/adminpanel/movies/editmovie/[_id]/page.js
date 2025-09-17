import AdminPanelEditMoviePageContent from "@/components/adminPanelEditMoviePageContent/AdminPanelEditMoviePageContent";

export const metadata = {
  title: "Edit movie",
};



export default async function EditMovie({params}){
  const {_id} = await params
  return(
    <AdminPanelEditMoviePageContent _id={_id} />
  )
}