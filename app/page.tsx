import PersonalCard from "../components/personalcard";
import Card from "../components/card";
import { TimelineItem } from "../components/timeline";
import Forms from "../components/forms";
import Title from "../components/title";
import ExpandableTechCard from "../components/expandabletech";
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
      date: "December 2024",
      title: "Internship at SENAI CIMATEC",
      subtitle: "Internship in Computer Engineering in the field of automation",
      content:
        "2-year internship that started 12/05/2024 in the field of automation, where I am participating in various projects involving automation. In these projects, I have been able to work on developing APIs in Python, applications in React Native, database modeling, and frequently dealing with PLCs.",
      position: "left" as const,
      images: ["/assets/img/fotoPerfil.png", "/assets/img/fotoPerfil.png"],
    },

    {
      date: "November 2024",
      title: "College project",
      subtitle: "Web system development for a small business, called COLABORAÊ",
      content:
        "In this project, I developed for a whole year, from 02/2024 to 11/2024, a web system for a small business in my city, where I was responsible for the frontend development of the system. The system was developed using React.js, Next.js, Tailwind CSS, Typescript, Node.js and SQL Server.",
      position: "right" as const,
      images: ["/assets/img/fotoPerfil.png", "/assets/img/fotoPerfil.png"],
    },
    {
      date: "October 2024",
      title: "Internship at Softwell Solutions",
      subtitle:
        "Internship in Computer Engineering in the field of database management",
      content:
        "I spent only 15 days in this internship, but I was able to learn some things about database management for municipal government, in areas such as accounting, health, education, etc.",
      position: "left" as const,
      images: ["/assets/img/fotoPerfil.png", "/assets/img/fotoPerfil.png"],
    },
    {
      date: "December 2022",
      title: "Web developer at CIMATEC Jr.",
      subtitle:
        "Internship in Computer Engineering in the field of database management",
      content:
        "CIMATEC Jr. is a junior company I participated in from December 2022 to December 2023. There, I was able to learn many soft skills, which I consider important, such as leadership, assertive communication, and teamwork. Additionally, I also learned hard skills in the field of computing and in the commercial area, which I also participated in within the company.",
      position: "right" as const,
      images: ["/assets/img/fotoPerfil.png", "/assets/img/fotoPerfil.png"],
    },
    {
      date: "February 2022",
      title: "Computer Engineering at SENAI CIMATEC",
      subtitle: "",
      content:
        "I started the Computer Engineering course in 2022, and I am currently in the 7th semester. It is expected to be completed in December 2026.",
      position: "left" as const,
      images: ["/assets/img/fotoPerfil.png", "/assets/img/fotoPerfil.png"],
    },
    {
      date: "January 2022",
      title: "Programming Course at Jovem de Futuro Initiative",
      subtitle: "",
      content:
        "There I learned from the basics of programming logic to JavaScript, Python, HTML, CSS, and WordPress. This course provided me with a solid foundation in various programming languages and web development technologies.",
      position: "right" as const,
      images: ["/assets/img/fotoPerfil.png", "/assets/img/fotoPerfil.png"],
    },
    {
      date: "December 2021",
      title: "Course in Electrotechnics at IFBA",
      subtitle: "",
      content:
        "I participated in the Electrotechnics course at IFBA, where I gained comprehensive training in electrical engineering. The curriculum covered topics such as electrical circuits, power systems, electronics, automation, and control systems. This course provided me with both theoretical knowledge and practical skills through hands-on laboratory work and real-world projects.",
      position: "left" as const,
      images: ["/assets/img/fotoPerfil.png", "/assets/img/fotoPerfil.png"],
    },
    {
      date: "October 2021",
      title: "Internship in Electrotechnics at Viatek",
      subtitle: "",
      content:
        "Viatek is a factory that works with injection molding for thermoplastics. There, I maintained injection molding machines and assisted electrotechnicians in performing any type of repairs on the machines.",
      position: "right" as const,
      images: ["/assets/img/fotoPerfil.png", "/assets/img/fotoPerfil.png"],
    },
    {
      date: "November 2018",
      title: "English Course at CCAA",
      subtitle: "",
      content:
        "I attended an English course at CCAA from 2013 to 2018, where I developed my proficiency in the English language, including reading, writing, listening, and speaking skills.",
      position: "left" as const,
      images: ["/assets/img/fotoPerfil.png", "/assets/img/fotoPerfil.png"],
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
        <Title title={"Portfolio"}></Title>
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

      <Title title={"Technical Expertise"}></Title>

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
      <Title title={"Professional Journey"}></Title>
      <section className="py-4">
        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            position={item.position}
            date={item.date}
            title={item.title}
            subtitle={item.subtitle}
            content={item.content}
            images={item.images}
          />
        ))}
      </section>

      <Title title={"Get in touch"}></Title>
      <section className="mb-12">
        <Forms />
      </section>
    </main>
  );
}
