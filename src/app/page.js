import BackToTop from "@/components/BackToTop";
import ProjetoCard from "@/components/ProjetoCard";
import Image from "next/image";
import { FaArrowUp } from "react-icons/fa";

const Projects = [
  {
    name: "DRA KARLA",
    link: "https://drakarlagiusti.com/",
  },
  {
    name: "ASSESSORIA JURIDICA",
    link: "https://lp.figueiredocorreia.com/assessoria-juridica/",
  },
  {
    name: "FOX ALIGNER",
    link: "https://foxaligner.com.br/",
  },
  {
    name: "AUTISMO",
    link: "https://lp.figueiredocorreia.com/autismo/",
  },
  {
    name: "CURADORIA",
    link: "https://lps.curadoria.app/ia-na-pratica/",
  },
  {
    name: "UIVE",
    link: "https://uive.com.br/assessoriaaudiovisual",
  },
  {
    name: "JBL CELL",
    link: "https://www.figma.com/proto/5SstR0gvVbd1tfIVXQGFef/LANDING-PAGE-ASSIST%C3%8ANCIA-T%C3%89CNICA?node-id=211-3825&t=vCPA1eelcsHNiTuU-0&scaling=min-zoom&content-scaling=fixed&page-id=211%3A579",
  },
  {
    name: "TIM AGS",
    link: "https://planosempresariais.com/planos-tim/",
  },
  {
    name: "LUMERE",
    link: "https://lumeremarketing.com.br/",
  },
  {
    name: "CROCS",
    link: "https://www.figma.com/proto/LboB7RxYIyDkQMEZT8ySuf/LANDING-PAGE-CROCS-PIZZA?node-id=1302-705&t=E7PeOovMVcd8vsj3-0&scaling=min-zoom&content-scaling=fixed&page-id=1302%3A2",
  },
  {
    name: "CANARITA",
    link: "https://lp.canarita.com.br/",
  },
  {
    name: "IDOSOS",
    link: "https://lp.figueiredocorreia.com/idosos/",
  },
  {
    name: "DIREITO IMOBILIARIO",
    link: "https://lp.figueiredocorreia.com/direito-imobiliario/",
  },
  {
    name: "HARMONY",
    link: "https://drakarlagiusti.com/harmony/",
  },
  {
    name: "UIVEART",
    link: "https://uive.com.br/",
  },
  {
    name: "VASTI",
    link: "https://vastioficial.vercel.app/",
  },
  {
    name: "NATHAN PORTFOLIO",
    link: "https://nathansilva.vercel.app/",
  },
  {
    name: "MTRADER",
    link: "https://projetomtrader.vercel.app/",
  },
  {
    name: "ESTACIO SPORTS",
    link: "https://estaciosports.vercel.app/",
  },
  {
    name: "ESUS NUVEM",
    link: "https://www.figma.com/proto/GuD5tni3kWGVE9Ruj1fYYX/LANDING-PAGE-ESUS-CLOUD?node-id=41-3530&t=vCPA1eelcsHNiTuU-0&scaling=scale-down-width&content-scaling=fixed&page-id=41%3A1529",
  },
  {
    name: "LUANA",
    link: "https://luanasotocorno.com.br/",
  },
  {
    name: "WISE TECH",
    link: "https://wisetech.vercel.app/",
  },
  {
    name: "ELECTRUM",
    link: "https://electrum-liart.vercel.app/",
  },
  {
    name: "GALLERIA",
    link: "https://galleria-sass-delta.vercel.app/",
  },
  {
    name: "STREAMLIT DASHBOARD",
    link: "https://teste-projeto.streamlit.app/",
  },
  {
    name: "BARBER SHOP",
    link: "https://www.figma.com/design/FKE16dFOTp5nTkrYKv6SSh/APLICATIVO-BARBER-SHOP?node-id=28-2&p=f&t=thcsE0HlXU9Ne8i3-0",
  },
  {
    name: "VISION",
    link: "https://www.figma.com/proto/vqc87LyEFCR6z4NggPrR5e/TODOS-OS-PROJETOS?node-id=19-6101&t=9uobMJUs21b3G9ug-0&scaling=scale-down-width&content-scaling=fixed&page-id=8%3A2",
  },
  {
    name: "MTRADER UI APP",
    link: "https://www.figma.com/design/YrsxdDHGSpTqLMyJVY5Vsg/APP-MTRADER?node-id=336-643&t=9urIthZokJuUnhEN-1",
  },
  {
    name: "CHAMPIONS",
    link: "https://www.figma.com/design/b6bmYPk1mQIH3eQ7Gu3KUS/PROJETO-CHAMPIONS-LEGUE?node-id=59-2&t=jpbtx9JbV7wFvOT2-1",
  },
  {
    name: "MOVIES APP",
    link: "https://www.figma.com/design/YYEZBvEKh8SYXkHEs6jw3V/APLICATIVO-CINEMA-MOVIES?node-id=412-139&t=QzTMpXNFxq0b2TJi-1",
  },
  {
    name: "SIMULADOR DO ENEM",
    link: "https://www.figma.com/design/BPdHhme2jWRpN0XKGHFotz/SIMULADOR-DA-PROVA-DO-ENEM?node-id=0-1&t=UWTG8uYiBmQGajkM-1",
  },
];

export default function Home() {
  return (
    <div>
      <section className="bg-[#03001B] pt-10 sm:py-10  space-y-1">
        <p className="font-nico text-2xl text-center text-[rgba(255,255,255,0.3)]">
          Desenvolvido por
        </p>
        <Image
          width={250}
          height={250}
          src="/logo-nathandev-projetos.png"
          alt="nathandev logo"
          className="mx-auto"
        />
      </section>

      {/* PROJECTS */}
      <section
        id="front"
        className="min-h-screen flex flex-col pt-8 pb-20 items-center bg-[#03001B]"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-9 mx-auto">
          {Projects.map((project) => (
            <ProjetoCard
              key={project.name}
              imgSrc={`/PROJETOS ORGANIZADOS/${project.name}.png`}
              alt={`Projeto ${project.name}`}
              link={project.link}
            />
          ))}
        </div>
      </section>

      <BackToTop />
    </div>
  );
}
