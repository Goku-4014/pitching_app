// import Image from "next/image";

import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({searchParams} : {
  searchParams: Promise<{query?: string}>
}) {

   const query =(await searchParams).query;
   const posts =[{
    _createdAt :new Date(),
    views: 55,
    author: { _id:1, name: "Manish"},
    _id:1,
    description :' this si the discription',
    image: "https://images.unsplash.com/photo-1527430253228-e93688616381?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category : "Robots",
    title: "we Robots"
   }]

  return (
    <>
      <section className="pink_container "> 
        <h1 className="heading"> Pitch your startup, <br/> grow with Entreprenuers</h1>
        <p className="sub-heading !max-w-3xl"> Submit idead, Vote on Pitches, and Get Notices in Virtual Competitions</p>
        

        <SearchForm  query ={query}/>

      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query? `Search results for "${query}"`: "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
        {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post ={post}/>
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>

      </section>
 
    </>
  );
}
