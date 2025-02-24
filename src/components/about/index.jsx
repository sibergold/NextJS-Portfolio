"use client"
import React from "react";
import ItemLayout from "../about/ItemLayout"
import Link from "next/link";


const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout className={"col-span-full lg:col-span-8 row-span-2 flex-col items-start"}>
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            Greetings, traveler! 🌟

            I am Omer Meric, a software sorcerer crafting spells of code to shape the digital realms. With JavaScript as my trusted wand and frameworks like React.js and Next.js as my enchanted tools, I bring seamless user experiences to life. My journey spans across powerful disciplines, including Node.js, TypeScript, .NET Core, and the mystical realms of MSSQL and MongoDB, allowing me to conjure fast, secure, and dynamic solutions for the ever-evolving web.

The Jamstack Arts empower my creations, ensuring they are swift and robust, while my eye for design ensures every portal I craft is not only functional but mesmerizingly captivating. As I delve into new realms of knowledge, I embrace each challenge as an opportunity to refine my spells and expand my mystical arsenal.

Whether taming the complexities of back-end architectures or summoning visually stunning front-end experiences, I thrive on crafting reliable and innovative solutions. Join me in exploring the endless possibilities of this magical digital universe—where every line of code is a step closer to shaping the future.

🧙‍♂️ Let’s weave the magic of technology together!
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}>
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            25+ <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}>
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            1+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=sibergold&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="Top Languages"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=sibergold&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="Github Stats"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full "}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=js,html,css,express,git,mongodb,nextjs,nodejs,postman,react,sqlite,ts,vite,vscode,docker,redis,rabbitmq,linux,elasticsearch,graphql`}
            alt="icons"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=sibergold&theme=dark&hide_border=true&background=EB545400&ring=FEFE5B&currStreakNum=FEFE5B`} 
            alt="GitHub Streak"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
           href="https://github.com/sibergold/HotelManagementSystem"
           target="_blank"
           className="w-full"
          >
          
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin/?username=sibergold&repo=HotelManagementSystem&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
            alt="Github Streaks"
            loading="lazy"
            
          />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
