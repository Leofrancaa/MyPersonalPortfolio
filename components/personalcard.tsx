"use client";

import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Mail from "@mui/icons-material/Mail";
import { useState } from "react";
import fotoPerfil from "../public/assets/img/fotoPerfil.png";

export default function PersonalCard() {
  const [hovered, setHovered] = useState<string | null>(null);

  const socialLinks = [
    {
      id: "github",
      url: "https://github.com/seu-usuario",
      icon: <GitHubIcon />,
      tooltip: "Leofrancaa",
    },
    {
      id: "linkedin",
      url: "https://linkedin.com/in/seu-usuario",
      icon: <LinkedInIcon />,
      tooltip: "leofrancaa",
    },
    {
      id: "twitter",
      url: "https://twitter.com/seu-usuario",
      icon: <TwitterIcon />,
      tooltip: "@leofrancal",
    },
    {
      id: "instagram",
      url: "https://instagram.com/seu-usuario",
      icon: <InstagramIcon />,
      tooltip: "@leofrancaa_",
    },
    {
      id: "email",
      url: "mailto:seuemail@email.com",
      icon: <Mail />,
      tooltip: "francaleonardo902@email.com",
    },
  ];

  return (
    <div className="flex flex-col gap-8 items-center justify-center w-full h-[100vh]">
      <Image
        src={fotoPerfil}
        width={100}
        height={100}
        alt="Foto de perfil"
        className="rounded-full"
      />
      <p className="text-[60px] text-center">Leonardo Franca</p>
      <p className="text-4xl">Student & Developer</p>
      <ul className="flex gap-4 mt-4">
        {socialLinks.map(({ id, url, icon, tooltip }) => (
          <li key={id} className="relative">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHovered(id)}
              onMouseLeave={() => setHovered(null)}
              className="p-2 transition-transform duration-300 hover:scale-110"
            >
              {icon}
            </a>
            {hovered === id && (
              <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-black text-white text-sm px-2 py-1 rounded-lg opacity-90">
                {tooltip}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
