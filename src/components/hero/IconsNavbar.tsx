import Image from "next/image";
import socialLinks from "@/data/SocialLinks";

export default function IconsNavbar() {
  return (
    <div className="flex gap-8">
      {socialLinks.map((icon) => (
        <a
          key={icon.id}
          href={icon.url}
          className="hover:scale-110 transition-transform duration-300"
        >
          <Image
            src={icon.path}
            alt={icon.name}
            width={32}
            height={32}
            className="w-8 h-8 lg:w-12 md:h-12"
          />
        </a>
      ))}
    </div>
  );
}
