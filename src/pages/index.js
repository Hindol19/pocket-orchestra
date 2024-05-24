import { Inter } from "next/font/google";
import { Main } from "next/document";

import Image from "next/image";
import Cello from "../../public/images/website/Cello2.jpg";
import Button from "@/components/Button";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-row h-[100vh]">
      <div className="w-1/2 flex flex-col items-center justify-center">
        <div className="w-[80%] px-5">
          <h2 className="text-light text-7xl">Pocket Orchestra</h2>
          <div className="border border-t-1 border-light opacity-60 mt-[18px]"></div>
          <div className="text-alt1 text-2xl mt-[30px]">
            Unlock the grandeur of your project with the symphonic magic.
          </div>
          <Button text="Get Started" endpoint="/home" className="mt-[50px]" />
        </div>
      </div>
      <div className="flex flex-row justify-end w-1/2">
        <Image
          src={Cello}
          alt="Cello"
          className="w-full object-cover"
          priority
          sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
        />
      </div>
    </main>
  );
}
