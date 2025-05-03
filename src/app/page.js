"use client";
import BackToTop from "@/components/BackToTop";
import ProjetoCard from "@/components/ProjetoCard";
import Image from "next/image";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";

const Projects = [
  {
    name: "DRA. KARLA GIUSTI",
    link: "https://drakarlagiusti.com/",
    description:
      "Site institucional da Dra. Karla Giusti, Especialista em Reprodução Humana. Mais de 20 anos de Experiência. Feito com Wordpress, CSS e JS. ",
  },
  {
    name: "ASSESSORIA JURÍDICA",
    link: "https://lp.figueiredocorreia.com/assessoria-juridica/",
    description:
      "Landing page da Figueiredo Correia, escritório de advocacia com mais de 40 anos de experiência. Desenvolvido com Wordpress, CSS e JS.",
  },
  {
    name: "FOX ALIGNER",
    link: "https://foxaligner.com.br/",
    description:
      "Landing Page da Fox Aligner, empresa especializada em alinhadores invisíveis. Tecnologia moderna para transformar sorrisos. Criado com Wordpress, CSS e JS.",
  },
  {
    name: "BPC LOAS AUTISMO",
    link: "https://lp.figueiredocorreia.com/autismo/",
    description:
      "Landing page sobre BPC LOAS para autismo, da Figueiredo Correia. Informações jurídicas acessíveis e apoio especializado. Desenvolvido com Wordpress, CSS e JS.",
  },
  {
    name: "CURADOR.IA",
    link: "https://mediumslateblue-parrot-493345.hostingersite.com/ia-na-pratica/",
    description:
      "Landing page do curso 'IA na Prática', com foco em ferramentas de inteligência artificial aplicadas ao dia a dia. Criado com Wordpress, CSS e JS.",
  },
  {
    name: "UIVE",
    link: "https://uive.com.br/assessoriaaudiovisual",
    description:
      "Landing page da UIVE, produtora especializada em assessoria audiovisual. Soluções criativas para projetos visuais. Feito com Wordpress, CSS e JS.",
  },
  {
    name: "JBL CELL",
    link: "https://www.figma.com/proto/5SstR0gvVbd1tfIVXQGFef/LANDING-PAGE-ASSIST%C3%8ANCIA-T%C3%89CNICA?node-id=211-3825&t=vCPA1eelcsHNiTuU-0&scaling=min-zoom&content-scaling=fixed&page-id=211%3A579",
    description:
      "Landing page da JBL Cell, assistência técnica especializada em celulares e caixas de som JBL. Site fora do ar no momento — veja o layout completo no Figma. Desenvolvido com Wordpress, CSS e JS.",
  },
  {
    name: "TIM AGS",
    link: "https://planosempresariais.com/planos-tim/",
    description:
      "Landing page da AGS Soluções, autorizada TIM. Apresenta planos e serviços corporativos da operadora. Criado com Wordpress, CSS e JS.",
  },
  {
    name: "LUMERE MARKETING",
    link: "https://lumeremarketing.com.br/",
    description:
      "Landing Page da Lumere Marketing, empresa de assessoria em marketing digital. Estratégias modernas para impulsionar negócios. Feito com Wordpress, CSS e JS.",
  },
  {
    name: "CROCS PIZZA VARJOTA",
    link: "https://www.figma.com/proto/LboB7RxYIyDkQMEZT8ySuf/LANDING-PAGE-CROCS-PIZZA?node-id=1302-705&t=E7PeOovMVcd8vsj3-0&scaling=min-zoom&content-scaling=fixed&page-id=1302%3A2",
    description:
      "Landing page da Crocs Pizzaria, localizada na Varjota, Fortaleza - CE. Site fora do ar no momento — veja a versão da landing page no Figma. Criado com Wordpress, CSS e JS.",
  },
  {
    name: "CANARITA",
    link: "https://lp.canarita.com.br/",
    description:
      "Landing page da Canarita, loja de moda infantil feminina de Fortaleza. Desenvolvido com WIX.",
  },
  {
    name: "BPC LOAS IDOSOS",
    link: "https://lp.figueiredocorreia.com/idosos/",
    description:
      "Landing page sobre o BPC LOAS para idosos, da Figueiredo Correia. Orientação jurídica acessível e especializada. Feito com Wordpress, CSS e JS.",
  },
  {
    name: "DIREITO IMOBILIÁRIO",
    link: "https://lp.figueiredocorreia.com/direito-imobiliario/",
    description:
      "Landing page da Figueiredo Correia focada em Direito Imobiliário. Assessoria jurídica especializada para regularização e resolução de questões relacionadas a imóveis. Desenvolvido com Wordpress, CSS e JS.",
  },
  {
    name: "HARMONY",
    link: "https://drakarlagiusti.com/harmony/",
    description:
      "Página do tratamento Harmony Women's Health, desenvolvido pela Dra. Karla Giusti. Soluções integradas para mulheres entre 35 e 50 anos, com foco em equilíbrio hormonal, saúde íntima e bem-estar. Criado com Wordpress, CSS e JS.",
  },
  {
    name: "UIVEART",
    link: "https://uive.com.br/",
    description:
      "Landing page da UiveArt, produtora audiovisual com sede em São Paulo. Soluções criativas para projetos visuais e assessoria audiovisual completa. Feito com Wordpress, CSS e JS.",
  },
  {
    name: "VASTI",
    link: "https://vastiacessorios.site/",
    description:
      "Landing page estilo Linktree da Vasti, loja de acessórios femininos. Links organizados para redes sociais e loja online. Desenvolvido com HTML, CSS e JS.",
  },
  {
    name: "NATHAN PORTFOLIO",
    link: "https://nathansilva.vercel.app/",
    description:
      "Landing page do primeiro portfólio do desenvolvedor Nathan Silva. Projeto pessoal construído com HTML, CSS e JS.",
  },
  {
    name: "MTRADER",
    link: "https://projetomtrader.vercel.app/",
    description:
      "Aplicação fictícia para compra e venda de ações digitais com monitoramento por IA. Interface moderna e intuitiva. Projeto conceitual. Desenvolvido com HTML, CSS e JS.",
  },
  {
    name: "ESTACIO SPORTS",
    link: "https://estaciosports.vercel.app/",
    description:
      "Projeto acadêmico para a Estácio, criado na disciplina de Desenvolvimento Web. Sistema de agendamento para academia, piscina e campo de futebol. Feito com HTML, CSS, JS e PHP.",
  },
  {
    name: "ESUS NUVEM",
    link: "https://www.figma.com/proto/GuD5tni3kWGVE9Ruj1fYYX/LANDING-PAGE-ESUS-CLOUD?node-id=41-3530&t=vCPA1eelcsHNiTuU-0&scaling=scale-down-width&content-scaling=fixed&page-id=41%3A1529",
    description:
      "Landing page do projeto e-SUS Nuvem, solução digital para simplificar a gestão e otimizar tempo na área da saúde. Site ainda sem domínio — veja a implementação no Figma.",
  },
  {
    name: "LUANA SOTOCORNO",
    link: "https://luanasotocorno.com.br/",
    description:
      "Landing page da psicóloga Luana Sotocorno, especializada em atendimento psicológico infantojuvenil com abordagem Cognitivo-Comportamental (TCC). Desenvolvido com HTML, CSS e JS.",
  },
  {
    name: "WISE TECH",
    link: "https://wisetech.vercel.app/",
    description:
      "Landing page fictícia da Wise Tech, agência de desenvolvimento web. Projeto criado com HTML, CSS, JS e pré-processador SASS (SCSS).",
  },
  {
    name: "ELECTRUM",
    link: "https://electrum-liart.vercel.app/",
    description:
      "E-commerce completo fictício desenvolvido com HTML, CSS, JS e SASS. Projeto responsivo com foco em performance e usabilidade.",
  },
  {
    name: "GALLERIA",
    link: "https://galleria-sass-delta.vercel.app/",
    description:
      "Galeria de imagens com categorias como animais, esportes, pessoas e paisagens. Desenvolvido com HTML, CSS, JS e SASS.",
  },
  {
    name: "STREAMLIT DASHBOARD",
    link: "https://teste-projeto.streamlit.app/",
    description:
      "Dashboard analítico desenvolvido com Python, Streamlit e Pandas para análise de dados dos leads do site BPC LOAS para autismo (Figueiredo Correia).",
  },
  {
    name: "BARBER SHOP",
    link: "https://www.figma.com/design/FKE16dFOTp5nTkrYKv6SSh/APLICATIVO-BARBER-SHOP?node-id=28-2&p=f&t=thcsE0HlXU9Ne8i3-0",
    description:
      "Aplicativo de agendamento para barbearia, criado com React Native e Firebase. Projeto acadêmico da disciplina 'Desenvolvimento de Aplicações Móveis'. Disponível no Figma.",
  },
  {
    name: "VISION T",
    link: "https://www.figma.com/proto/vqc87LyEFCR6z4NggPrR5e/TODOS-OS-PROJETOS?node-id=19-6101&t=9uobMJUs21b3G9ug-0&scaling=scale-down-width&content-scaling=fixed&page-id=8%3A2",
    description:
      "Projeto fictício de UI/UX da Vision T, agência de criação de sites. Design responsivo focado em experiência do usuário. Disponível no Figma.",
  },
  {
    name: "MTRADER UI APP",
    link: "https://www.figma.com/design/YrsxdDHGSpTqLMyJVY5Vsg/APP-MTRADER?node-id=336-643&t=9urIthZokJuUnhEN-1",
    description:
      "Protótipo UI/UX no Figma do aplicativo MTrader, para investimentos e compra/venda de ações com interface moderna e intuitiva.",
  },
  {
    name: "CHAMPIONS LEAGUE",
    link: "https://www.figma.com/design/b6bmYPk1mQIH3eQ7Gu3KUS/PROJETO-CHAMPIONS-LEGUE?node-id=59-2&t=jpbtx9JbV7wFvOT2-1",
    description:
      "Projeto UI/UX de site para acompanhamento de jogos e times da Champions League. Protótipo navegável criado no Figma.",
  },
  {
    name: "MOVIES APP",
    link: "https://www.figma.com/design/YYEZBvEKh8SYXkHEs6jw3V/APLICATIVO-CINEMA-MOVIES?node-id=412-139&t=QzTMpXNFxq0b2TJi-1",
    description:
      "UI/UX Design de aplicativo de cinema para reservas, escolha de assentos e horários. Protótipo desenvolvido no Figma.",
  },
  {
    name: "SIMULADOR DO ENEM",
    link: "https://www.figma.com/design/BPdHhme2jWRpN0XKGHFotz/SIMULADOR-DA-PROVA-DO-ENEM?node-id=0-1&t=UWTG8uYiBmQGajkM-1",
    description:
      "Simulador do ENEM para estudantes cadastrarem questões com marcação de alternativas e conferência de gabarito. UI/UX feito no Figma",
  },
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  function openModal(project) {
    setSelectedProject(project);
  }

  function closeModal() {
    setSelectedProject(null);
  }
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
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-3 xl:px-20 gap-x-6 gap-y-9 mx-auto">
          {Projects.map((project) => (
            <ProjetoCard
              key={project.name}
              onClick={() => openModal(project)}
              imgSrc={`/PROJETOS ORGANIZADOS/${project.name}.png`}
              alt={`Projeto ${project.name}`}
            />
          ))}
        </div>
      </section>

      {selectedProject && (
        <div
          onClick={closeModal}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#03001B]/60 px-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-black/40 backdrop-blur-[20px] shadow border border-gray-600 rounded-xl max-w-md w-full px-6 py-14 sm:py-10 space-y-4 text-black relative"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 cursor-pointer text-gray-700 hover:text-gray-800  text-3xl rounded-full bg-gray-300 hover:bg-gray-200 w-9 h-9"
            >
              &times;
            </button>
            <h2 className="flex items-center gap-3 font-mono text-2xl font-bold text-white">
              <FaCircleInfo />

              {selectedProject.name}
            </h2>
            <p className="text-[#ccc] font-mono text-[14px]">
              {selectedProject.description ||
                "Este projeto ainda não possui descrição."}
            </p>
            <a
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="duration-500 hover:scale-106 font-mono inline-flex justify-center items-center gap-3 px-4 py-2 bg-slate-800 text-white rounded hover:bg-slate-700 transition"
            >
              <FaEye />
              Acessar Projeto
            </a>
          </div>
        </div>
      )}
      <div className="bg-[#03001B] p-10 flex flex-col gap-1 items-center sm:flex-row sm:gap-3 justify-center">
        <span className="text-[20px] sm:text-[16px] font-mono text-[#ffffff44] ">
          {" "}
          © Copyright 2025
        </span>
        <a
          href=" https://nathandev.com.br/"
          target="_blank"
          className="text-[20px] sm:text-[16px] w-[360px] sm:w-fit text-center underline underline-offset-2 block font-mono text-[#ffffff44] hover:text-[#ffffff7a]"
        >
          https://nathandev.com.br/
        </a>
      </div>
      <BackToTop />
    </div>
  );
}
