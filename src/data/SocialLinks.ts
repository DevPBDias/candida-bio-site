interface SocialLink {
  id: number;
  name: string;
  path: string;
  url: string;
}

const socialLinks: SocialLink[] = [
  { id: 1, name: "whatsapp", path: "/icons/whatsapp.png", url: "" },
  { id: 2, name: "linkedin", path: "/icons/linkedin.png", url: "" },
  { id: 3, name: "email", path: "/icons/email.png", url: "" },
  { id: 4, name: "instagram", path: "/icons/instagram.png", url: "" },
];

export default socialLinks;
