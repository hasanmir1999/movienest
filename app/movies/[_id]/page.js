import MoviePageContent from "@/components/moviePageContent/MoviePageContent";

export async function generateMetadata({ params }) {
  const { _id } = params;
  const res = await fetch(`https://movienest.liara.run/api/movie/${_id}`, {
    cache: "no-store",
  });
  const data = await res.json();

  return {
    title: data.title,
  };
}

export default async function Movie({ params }) {
  const { _id } = await params;
  const res = await fetch(`https://movienest.liara.run/api/movie/${_id}`, {
    cache: "no-store",
  });
  const data = await res.json();

  return <MoviePageContent {...data} />;
}
