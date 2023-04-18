'use client';

import { motion } from 'framer-motion';

interface SkillProps {
  name: string;
  x: string;
  y: string;
}

const Skill = ({ name, x, y }: SkillProps) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full bg-transparent font-bold md:font-semibold text-dark md:bg-dark md:text-light text-xs lg:text-base py-1.5 px-3 md:py-3 md:px-6 shadow-dark cursor-pointer absolute dark:text-light dark:bg-transparent md:dark:text-dark md:dark:bg-light"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x, y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-6xl mt-32 lg:text-8xl md:mt-48 w-full text-center mb-2 md:mb-10 2xl:mb-20">
        Skills
      </h2>
      <div className="w-full h-[50vh] sm:h-[60vh] lg:h-[80vh] xl:h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark md:bg-circularLightMd md:dark:bg-circularDarkMd lg:bg-circularLightLg lg:dark:bg-circularDarkLg xl:bg-circularLightXl xl:dark:bg-circularDarkXl">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light text-xs lg:text-base p-2 md:p-4 lg:p-6 xl:p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-25vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="Javascript" x="20vw" y="6vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="NextJS" x="-20vw" y="-15vw" />
        <Skill name="Solidity" x="15vw" y="-12vw" />
        <Skill name="Figma" x="32vw" y="-5vw" />
        <Skill name="Tailwind CSS" x="0vw" y="-26vw" />
        <Skill name="Playwright" x="-25vw" y="18vw" />
        <Skill name="Typescript" x="18vw" y="-22vw" />
      </div>
    </>
  );
};

export default Skills;
