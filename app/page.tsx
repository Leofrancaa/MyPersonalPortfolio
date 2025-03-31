import PersonalCard from "../components/personalcard";
import Card from "../components/card";
import { TimelineItem } from "../components/timeline";
import Forms from "../components/forms";
import Title from "../components/title";
import ExpandableTechCard from "../components/expandabletech";
import Img1 from "../public/assets/img/img1.png";
import Img2 from "../public/assets/img/img2.png";
import Img3 from "../public/assets/img/LogoColaborae.svg";
import Img9 from "../public/assets/img/img9.png";

export default function Home() {
  const techStack = [
    {
      title: "HTML",
      description:
        "I have extensive experience using HTML to structure web pages and create semantic, accessible, and responsive designs.",
      proficiency: 90,
      color: "#FF0000",
    },
    {
      title: "CSS",
      description:
        "I am skilled in using CSS for styling web pages, including advanced techniques like animations, flexbox, and grid layouts.",
      proficiency: 80,
      color: "#3178C6",
    },
    {
      title: "JavaScript",
      description:
        "I have solid experience with JavaScript, using it to create dynamic and interactive web applications.",
      proficiency: 65,
      color: "#FFA500",
    },
    {
      title: "C",
      description:
        "I have used C for low-level programming, including embedded systems and performance-critical applications.",
      proficiency: 70,
      color: "#000000",
    },
    {
      title: "Python",
      description:
        "I have experience with Python for scripting, data analysis, and backend development, including API creation.",
      proficiency: 60,
      color: "#4169E1",
    },
    {
      title: "Java",
      description:
        "I have worked with Java for building scalable backend systems and object-oriented programming projects.",
      proficiency: 72,
      color: "#E60000",
    },
    {
      title: "React",
      description:
        "I have developed multiple projects using React, leveraging hooks, functional components, and state management libraries.",
      proficiency: 79,
      color: "#ADD8E6",
    },
    {
      title: "TailwindCSS",
      description:
        "I use TailwindCSS to quickly build modern and responsive user interfaces with utility-first classes.",
      proficiency: 84,
      color: "#FF9900",
    },
    {
      title: "Next.js",
      description:
        "I have experience with Next.js for building server-side rendered and static web applications with optimized performance.",
      proficiency: 75,
      color: "#32CD32",
    },
    {
      title: "Node.js",
      description:
        "I have used Node.js for backend development, creating RESTful APIs and handling server-side logic.",
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
        <p className="md:text-3xl text-xl font-bold">Hey!</p>
        <p className="md:text-2xl text-lg font-thin">
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
              title={"My first site"}
              text={
                "It is a Call of Duty website I created while participating in the Jovem de Futuro initiative, using only HTML, CSS, and JavaScript. That was my first project, and I am very proud of it."
              }
              color="red"
              link={"https://github.com/Leofrancaa/Website_about_COD.git"}
              text2={"see at github"}
            />
            <Card
              img={Img1}
              title={"Game based on slay the spire"}
              text={
                "This is a card-based RPG inspired by Slay the Spire, developed entirely in C. The game features a dynamic deck-building system where players strategically choose cards to defeat enemies and progress through levels."
              }
              color="blue"
              link={"https://github.com/Leofrancaa/ProjetoAed.git"}
              text2={"see at github"}
            />
            <Card
              img={Img3}
              title={"COLABORAÊ"}
              text={
                "Colaboraê is a company that offers an event space in Salvador. The platform was developed to manage and promote events, providing users with an easy way to view upcoming events, and connect with the community."
              }
              color="grey"
              link={"https://colaborae.vercel.app/"}
              text2={"See the website"}
            />
            <Card
              img={Img9}
              title={"Omni News"}
              text={
                "Omni News is a news website I am currently developing. It features a variety of news articles, including updates on cryptocurrency and general topics."
              }
              color="darkBlue"
              link={"https://omni-news.vercel.app/"}
              text2={"see the website"}
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
