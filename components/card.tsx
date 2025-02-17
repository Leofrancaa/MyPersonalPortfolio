import { cva } from "class-variance-authority";
import { StaticImageData } from "next/image";
import Image from "next/image";

const cardVariants = cva(
  "w-[350px] h-[425px] rounded-md flex flex-col items-center",
  {
    variants: {
      color: {
        blue: "bg-[#0A74DB]", // Azul escuro (hex)
        red: "bg-[#E91425]", // Vermelho (hex)
        green: "bg-[#16A34A]", // Verde (hex)
        yellow: "bg-[#FACC15]", // Amarelo (hex)
        darkBlue: "bg-[#273377]", // Azul escuro (hex)
        grey: "bg-[#434343]", // Cinza (hex)
        custom: "", // Caso especial para cor personalizada
      },
    },
    defaultVariants: {
      color: "blue",
    },
  }
);

interface CardProps {
  color?: "blue" | "red" | "green" | "yellow" | "darkBlue" | "grey" | "custom";
  customColor?: string; // Para permitir valores HEX personalizados
  img: StaticImageData;
  title: string;
  text: string;
}

// Para usar o customColor, basta passar o componente desta forma: <Card color="red" /> {/* Usa a cor vermelha definida no Tailwind */}
//<Card color="custom" customColor="#FF5733" /> {/* Usa a cor personalizada (laranja avermelhado) */}
//<Card color="custom" customColor="#8A2BE2" /> {/* Usa a cor Roxa (BlueViolet) */}

export default function Card({
  color,
  customColor,
  img,
  title,
  text,
}: CardProps) {
  return (
    <div
      className={`${cardVariants({ color })} ${
        color === "custom" && customColor ? `bg-[${customColor}]` : ""
      }`}
    >
      <div className="px-8 flex flex-col items-center gap-4 text-white pt-4 pb-1">
        <div className="relative w-[80px] h-[80px]">
          <Image src={img} alt={""} fill className="object-contain"></Image>
        </div>
        <h1 className="flex self-start text-xl font-semibold">{title}</h1>
        <div className="flex flex-col items-center justify-center gap-4">
          <p>{text}</p>
        </div>

        <button className="relative flex self-start text-white font-medium transition-all duration-300 hover:text-gray-200 mt-8">
          <a
            href=""
            className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
          >
            VISIT WEBSITE
          </a>
        </button>
      </div>
    </div>
  );
}
