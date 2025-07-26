"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import useStore from "../../../../store/useStore";



export default function Home() {

  const {setText} = useStore();

  return (
  <div>
    Home
    <Image
      src="/1.png"
      alt="Blog slider"
        width={1170}
        height={500} 
    />
    <Input className="mt-4" onChange={(e)=> setText(e.target.value) } />
  </div>
  );
}
