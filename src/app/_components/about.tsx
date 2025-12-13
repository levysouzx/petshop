import Image from "next/image";
import about1img from "../img/about-1.png";
import about2img from "../img/about-2.png";
import { Check, MapPin } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
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
              className="object-cover hover:scale-110 transition-all duration-300 "
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

        <div className="space-y-6 mt-10">
          <h2 className="text-4xl font-bold px-5">SOBRE</h2>
          <p className="text-3xl font-semilbold py- px-5">
            Nossa empresa trabaha nesse ramo desde 2024, sempre prezando pela
            qualidade no atendimento e cuidado com seu pet. Oferecemos os melhores
            cuidados para o seu pet para garantir o bem-estar e a felicidade do
            seu amigo de quatro patas
          </p>
          <ul className="space-y-4">
            <li className="flex  items-center">
              <Check className="text-red-500 gap-2" />
              Aberto desde 2024
            </li>
            <li className="flex  items-center">
              <Check className=" text-red-500 gap-2" />
              Mais de 10 profissionais em nosso estabelecimento
            </li>
            <li className="flex  items-center">
              <Check className=" text-red-500 gap-2" />
              Seu pet é nossa prioridade
            </li>
          </ul>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md font-semibold"
            >
              <WhatsappLogo className="w-5 h-5 text-white" />
              Contato via WhatsApp
            </a>
            <a
              href="#"
              className="bg-bg-[#FDF6EC] text-blac flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md border-black border-2 font-semibold "
            >
              <MapPin className="w-5 h-5 text-black" />
              Nosso endereço
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
