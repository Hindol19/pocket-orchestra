import React from "react";
import Image from "next/image";
import Me from "../../public/images/website/me2.png";
const About = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="mx-4">
        <h2 className="text-4xl  mt-10">About</h2>
        <div className="mt-3 w-[50px] border-b-2 border-light"></div>
      </div>
      <div className="flex flex-row justify-between my-[40px]">
        <div className="w-[54%] text-light text-justify px-3 text-xl flex flex-col justify-center">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
            distinctio deserunt? Fugiat voluptates vitae eum ullam saepe nisi
            itaque autem adipisci. Doloremque eaque illum ex, minus distinctio,
            totam corrupti repudiandae nesciunt impedit quod alias cumque quis
            incidunt praesentium fugit voluptatum ratione nisi delectus facere,
            nobis adipisci qui veniam eos. Tempora repellat facere tenetur
            nesciunt. Adipisci, quas eveniet? Doloribus quod assumenda explicabo
            reprehenderit sequi at magni!
          </p>
          <p className="mt-10">
            Quasi doloribus eius tempora ad, rem iste nemo voluptatem facilis
            sint? Explicabo quis beatae fugit sit doloribus, in atque mollitia
            ipsum laudantium laborum sed quaerat maxime molestiae quae provident
            adipisci numquam distinctio. Saepe, blanditiis similique.
          </p>
        </div>
        <div className="w-[40%] flex justify-center">
          <Image src={Me} className="w-full" />
        </div>
      </div>
      <div className=" mt-[80px] w-full border-b-2 border-light mx-auto"></div>
    </div>
  );
};

export default About;
