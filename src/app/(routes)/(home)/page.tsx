import Image from "next/image";



export default function Home() {
  return (
  <div>
    Home
    <Image
      src="/1.png"
      alt="Blog slider"
        width={1170}
        height={500} 
    />
    
  </div>
  );
}
