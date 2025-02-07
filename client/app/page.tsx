"use client";
import { useReclams } from "@/context/reclamContext";
import useRedirect from "@/hooks/useUserRedirect";
import Filters from "./Components/Filters/Filters";
import Reclamitem from "./Reclamitem/Reclamitem";
import { Reclam } from "@/utils/types";



export default function Home() {
  useRedirect("/login");

const { reclams } = useReclams()?.reclams; 




 return(
  <main className="m-6 h-full">
  <div className="flex justify-between">
    <h1 className="text-2x1 font-bold"> ALL RECLAMS</h1>
    <Filters />
  </div>
  <div className="pb-[2rem] mt-6 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-[1.5rem]">
  {reclams?.map((reclam: Reclam, i: number) => (
    <Reclamitem key={i} reclam={reclam} />
))}

  </div>
 </main>
 );
}
