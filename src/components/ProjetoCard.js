import Image from "next/image";

export default function ProjetoCard({ imgSrc, alt, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:translate-y-[-10px] transition duration-300 cursor-pointer rounded-4xl shadow overflow-hidden max-w-[350px]  sm:max-w-120"
    >
      <Image width={2000} height={2000} src={imgSrc} alt={alt} />
    </a>
  );
}
