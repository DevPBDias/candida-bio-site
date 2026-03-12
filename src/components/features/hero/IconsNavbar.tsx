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
            width={28}
            height={28}
            className="w-7 h-7 lg:w-10 md:h-10"
          />
        </a>
      ))}
    </div>
  );
}
