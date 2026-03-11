import Image from "next/image";

export default function IconsNavbar() {
  const icons = [
    { name: "whatsapp", path: "/icons/whatsapp.png" },
    { name: "linkedin", path: "/icons/linkedin.png" },
    { name: "email", path: "/icons/email.png" },
    { name: "instagram", path: "/icons/instagram.png" },
  ];

  return (
    <div className="flex gap-8 mt-10">
      {icons.map((icon) => (
        <a
          key={icon.name}
          href="#"
          className="hover:scale-110 transition-transform duration-300"
        >
          <Image
            src={icon.path}
            alt={icon.name}
            width={40}
            height={40}
            className="w-10 h-10 md:w-12 md:h-12"
          />
        </a>
      ))}
    </div>
  );
}
