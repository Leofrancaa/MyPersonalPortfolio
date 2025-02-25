import PersonalCard from "../components/personalcard";
import Card from "../components/card";
import { Timeline, TimelineItem } from "../components/timeline";
import ExpandableTechCard from "../components/expandabletech";
import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import Img1 from "../public/assets/img/img1.png";
import Img2 from "../public/assets/img/img2.png";
import Img3 from "../public/assets/img/img3.png";
import Img4 from "../public/assets/img/img4.png";
import Img5 from "../public/assets/img/img5.png";
import Img6 from "../public/assets/img/img6.png";
import Img7 from "../public/assets/img/img7.png";
import Img8 from "../public/assets/img/img8.png";

export default function Home() {
  const techStack = [
    {
      title: "HTML",
      description:
        "Building interactive UIs with functional components and hooks",
      proficiency: 90,
      color: "#FF0000",
    },
    {
      title: "CSS",
      description: "Strong typing for scalable application development",
      proficiency: 80,
      color: "#3178C6",
    },
    {
      title: "JavaScript",
      description: "Building scalable backend services and APIs",
      proficiency: 65,
      color: "#FFA500",
    },
    {
      title: "C",
      description: "Cloud infrastructure and serverless architecture",
      proficiency: 70,
      color: "#000000",
    },
    {
      title: "Python",
      description: "Cloud infrastructure and serverless architecture",
      proficiency: 60,
      color: "#4169E1",
    },
    {
      title: "Java",
      description: "Cloud infrastructure and serverless architecture",
      proficiency: 72,
      color: "#E60000",
    },
    {
      title: "React",
      description: "Cloud infrastructure and serverless architecture",
      proficiency: 79,
      color: "#ADD8E6",
    },
    {
      title: "TailwindCSS",
      description: "Cloud infrastructure and serverless architecture",
      proficiency: 84,
      color: "#FF9900",
    },
    {
      title: "Next.js",
      description: "Cloud infrastructure and serverless architecture",
      proficiency: 75,
      color: "#32CD32",
    },
    {
      title: "Node.js",
      description: "Cloud infrastructure and serverless architecture",
      proficiency: 45,
      color: "#9966CC",
    },
  ];

  const timelineData = [
    {
      icon: <SchoolIcon fontSize="small" />,
      date: "August 2023",
      title: "MSc Cybersecurity",
      subtitle: "KTH Royal Institute of Technology",
      content:
        "Started a Cybersecurity Master program in Sweden, focusing on advanced security protocols and network protection.",
      position: "right" as const,
    },
    {
      icon: <CodeIcon fontSize="small" />,
      date: "October 2023",
      title: "IST Delegate Election",
      subtitle: "Voting Platform Development",
      content:
        "Rebuilt the delegate election system using modern technologies like Rust and React for improved performance and security.",
      position: "left" as const,
    },
    {
      icon: <WorkIcon fontSize="small" />,
      date: "January 2024",
      title: "Security Consultant",
      subtitle: "Freelance Projects",
      content:
        "Developed security solutions for various clients including penetration testing and system hardening.",
      position: "right" as const,
    },
    {
      icon: <WorkIcon fontSize="small" />,
      date: "January 2024",
      title: "Security Consultant",
      subtitle: "Freelance Projects",
      content:
        "Developed security solutions for various clients including penetration testing and system hardening.",
      position: "left" as const,
    },
    {
      icon: <WorkIcon fontSize="small" />,
      date: "January 2024",
      title: "Security Consultant",
      subtitle: "Freelance Projects",
      content:
        "Developed security solutions for various clients including penetration testing and system hardening.",
      position: "right" as const,
    },
    {
      icon: <WorkIcon fontSize="small" />,
      date: "January 2024",
      title: "Security Consultant",
      subtitle: "Freelance Projects",
      content:
        "Developed security solutions for various clients including penetration testing and system hardening.",
      position: "left" as const,
    },
    {
      icon: <WorkIcon fontSize="small" />,
      date: "January 2024",
      title: "Security Consultant",
      subtitle: "Freelance Projects",
      content:
        "Developed security solutions for various clients including penetration testing and system hardening.",
      position: "right" as const,
    },
    {
      icon: <WorkIcon fontSize="small" />,
      date: "January 2024",
      title: "Security Consultant",
      subtitle: "Freelance Projects",
      content:
        "Developed security solutions for various clients including penetration testing and system hardening.",
      position: "left" as const,
    },
    {
      icon: <WorkIcon fontSize="small" />,
      date: "January 2024",
      title: "Security Consultant",
      subtitle: "Freelance Projects",
      content:
        "Developed security solutions for various clients including penetration testing and system hardening.",
      position: "right" as const,
    },
    {
      icon: <WorkIcon fontSize="small" />,
      date: "January 2024",
      title: "Security Consultant",
      subtitle: "Freelance Projects",
      content:
        "Developed security solutions for various clients including penetration testing and system hardening.",
      position: "left" as const,
    },
  ];

  return (
    <main className="relative z-30 flex flex-col justify-center items-center">
      {/* Seção PersonalCard */}
      <div>
        <PersonalCard />
      </div>

      {/* Seção de Introdução */}
      <div className="w-full bg-white px-6 lg:px-32 py-12 text-black flex flex-col gap-4 mb-20">
        <p className="text-3xl font-bold">Hey!</p>
        <p className="text-2xl font-thin">
          I’m Leonardo Franca Almeida Silva from Brazil! <br /> I love
          programming, as well as playing soccer, videogames and learning new
          things! <br /> Feel free to get in touch or take a look at my past
          work below.
        </p>
      </div>

      {/* Seção Portfolio */}
      <section className="w-full flex flex-col items-center justify-center mb-12">
        <h1 className="text-white text-4xl mb-20">Portfolio</h1>
        <div className="bg-white w-full text-black py-12 flex justify-center items-center flex-col">
          <h2 className="mb-8 mt-6 text-black text-2xl font-semibold">
            My Top Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-x-5 gap-y-8">
            <Card
              img={Img2}
              title={"Arcane Vault"}
              text={
                "Is a sleek and modern online platform for digital RPGs and board games. The minimalist shield with a glowing blue gem represents the fusion of strategy and magic, offering a seamless and immersive experience for fantasy enthusiasts."
              }
              color="red"
            />
            <Card
              img={Img1}
              title={"Drakeforge"}
              text={
                "Is a premium e-commerce site specializing in high-end fantasy-themed merchandise. From gaming accessories to exclusive collectibles, our store embodies the power and mystique of the dragon, delivering quality and legend-inspired craftsmanship."
              }
              color="blue"
            />
            <Card
              img={Img3}
              title={"Lunar Watch"}
              text={
                "Is a cybersecurity platform designed for modern users who value privacy and protection. Inspired by the watchful nature of the wolf, our system offers advanced online security solutions, ensuring your digital presence remains safe under the moon’s vigilant gaze."
              }
              color="grey"
            />
            <Card
              img={Img4}
              title={"Royal Tactics"}
              text={
                "Is a strategy-based online gaming hub where players engage in competitive tactical battles. The sharp, minimalist lion head represents leadership and precision, inviting users to master their strategic skills in an elegant and immersive gaming environment."
              }
              color="darkBlue"
            />
            <Card
              img={Img5}
              title={"Lunar Howl"}
              text={
                "A forum and community for night explorers, nature lovers, and outdoor enthusiasts. LunarHowl connects adventurers, offers survival tips, and allows users to share their experiences under the moonlight."
              }
              color="grey"
            />
            <Card
              img={Img6}
              title={"Phoenix Rise"}
              text={
                "A platform for courses and mentorship focused on personal and professional development. PhoenixRise helps individuals 'rise from the ashes' in their careers and lives, offering content on leadership, productivity, and fresh starts."
              }
              color="blue"
            />
            <Card
              img={Img7}
              title={"Royal Sphere"}
              text={
                "An exclusive portal for entrepreneurs and business leaders. RoyalSphere provides articles, networking opportunities, and tools for those looking to make a bold impact in the corporate world with vision and determination."
              }
              color="grey"
            />
            <Card
              img={Img8}
              title={"Tech Core"}
              text={
                "A tech hub for developers, engineers, and innovation enthusiasts. TechCore offers tutorials, articles, and forums covering artificial intelligence, programming, and cybersecurity."
              }
              color="red"
            />
          </div>
        </div>
      </section>

      <h2 className="text-3xl font-bold text-center mb-20 mt-12">
        Technical Expertise
      </h2>

      <section className="py-16 px-16 bg-gray-50 w-full">
        <div className="max-w-full mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <ExpandableTechCard
                key={index}
                title={tech.title}
                description={tech.description}
                proficiency={tech.proficiency}
                color={tech.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Seção Timeline */}
      <section className="w-[80vw]  py-12">
        <h2 className="text-4xl text-center mb-16 text-white">
          Professional Journey
        </h2>
        <Timeline>
          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              position={item.position}
              icon={item.icon}
              date={item.date}
              title={item.title}
              subtitle={item.subtitle}
              content={item.content}
            />
          ))}
        </Timeline>
      </section>
    </main>
  );
}
