import Image from "next/image";
import about1img from "../img/about-1.png";
import about2img from "../img/about-2.png";
export function About() {
  return (
    <section className="bg-[#FDF6EC] py-16 ">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
            <Image
              src={about1img}
              alt="foto do cachorro"
              fill
              quality={100}
              priority
              className="object-cover hover: scale-125 transition-all duration-500 "
            />
          </div>
          <div className="absolute w-40 h-40 right-4 -bottom-8 rounded-lg border-4 border-white overflow-hidden ">
            <Image
              src={about2img}
              alt="foto do cachorro 2"
              fill
              quality={100}
              priority
            />
          </div>
        </div>
        <div className="space-y-6 ">
          <h2 className="text-4xl font-bold">SOBRE</h2>
        </div>
      </div>
    </section>
  );
}
