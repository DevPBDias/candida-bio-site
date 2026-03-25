import Image from "next/image";
import socialLinks from "@/data/SocialLinks";

export default function IconsNavbar() {
  return (
    <div className="flex gap-8">
      {socialLinks.map((icon) => (
        <a
          key={icon.id}
          href={icon.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 transition-all duration-300 border-2 border-rose-dark rounded-sm p-2.5 flex items-center justify-center"
        >
          <Image
            src={icon.path}
            alt={icon.name}
            width={20}
            height={20}
            className="w-5 h-5 lg:w-7 md:h-7"
          />
        </a>
      ))}
    </div>
  );
}
