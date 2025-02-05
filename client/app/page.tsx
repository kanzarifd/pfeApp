"use client";
import { useReclams } from "@/context/reclamContext";
import useRedirect from "@/hooks/useUserRedirect";


export default function Home() {
  useRedirect("/login");

const { reclams } = useReclams();

console.log(reclams);

 return <main></main>;
}
