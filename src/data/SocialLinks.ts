interface SocialLink {
  id: number;
  name: string;
  path: string;
  url: string;
}

const socialLinks: SocialLink[] = [
  {
    id: 1,
    name: "(62) 99801-2376",
    path: "/icons/whatsapp.png",
    url: "https://wa.me/5562998012376",
  },
  {
    id: 2,
    name: "/candidadias",
    path: "/icons/linkedin.png",
    url: "https://www.linkedin.com/in/candidadiasrp/",
  },
  {
    id: 3,
    name: "candidadiasrp@gmail.com",
    path: "/icons/email.png",
    url: "mailto:[EMAIL_ADDRESS]",
  },
  {
    id: 4,
    name: "@candidadias",
    path: "/icons/instagram.png",
    url: "https://www.instagram.com/candidadiasrp/",
  },
];

export default socialLinks;
