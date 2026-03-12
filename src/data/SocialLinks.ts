interface SocialLink {
  id: number;
  name: string;
  path: string;
  url: string;
}

const socialLinks: SocialLink[] = [
  { id: 1, name: "(62) 99801-2376", path: "/icons/whatsapp.png", url: "" },
  { id: 2, name: "/candidadias", path: "/icons/linkedin.png", url: "" },
  { id: 3, name: "candidadiasrp@gmail.com", path: "/icons/email.png", url: "" },
  { id: 4, name: "@candidadias", path: "/icons/instagram.png", url: "" },
];

export default socialLinks;
