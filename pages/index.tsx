import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import {
  riseWithFade,
  staggerChildren,
  videoAnimation,
  wordAnimation,
} from "../utils/animations";

const Home: NextPage = () => {
  return (
    <motion.div
      className="min-h-screen bg-cream"
      initial="first"
      animate="second"
    >
      <Head>
        <title>Home | ReSeT Co</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="grid grid-cols-[3fr_1fr] py-24">
        <div className="">
          <h1 className="text-8xl font-bold w-[40rem] leading-[90%] tracking-[-2px]">
            <AnimatedWords title="ReSet Wellness for a better everyday" />
          </h1>
        </div>
        <motion.div
          className="text-base leading-[150%] self-end"
          variants={riseWithFade}
        >
          providing services that optimize growth and self-reliance within the
          most vulnerable communities.
        </motion.div>
      </main>
      <motion.video loop autoPlay muted playsInline variants={videoAnimation}>
        <source src="/assets/helping-hand.mp4" type="video/mp4" />
      </motion.video>
      <div className="middle-section">
        <h3 className="text-4xl font-bold text-center py-10">
          WELCOME REFUGEES TO OUR CITY
        </h3>
        <h4 className="text-xl font-light text-center pb-20">
          Toronto receives over 40% of Canada's refugee claimants arriving
          annually but a lack of refugee-specific shelters leaves many
          vulnerable to homelessness and exploitation.
        </h4>
        <div className="flex flex-wrap py-10 justify-center items-center">
          <div className="ml-10 w-60 pb-20 mx-5 flex flex-col items-center">
            <img
              src="/assets/1.png"
              alt="Image 1"
              className="w-56 h-56 rounded-lg shadow-lg"
            />
            <h3 className="text-3xl font-bold mb-5 text-center pt-5">
              ABOUT US
            </h3>
            <p className="text-base leading-7 text-center">
              We are a welcoming community that offers a range of support
              services to help refugee claimants establish new lives in Canada.
              This includes: Shelter, Settlement Support, and Community
              Transitions.
            </p>
          </div>
          <div className="ml-10 w-60 pb-20   mx-5 flex flex-col items-center">
            <img
              src="/assets/2.png"
              alt="Image 1"
              className="w-56 h-56  rounded-lg shadow-lg"
            />
            <h3 className="text-3xl font-bold mb-5 text-center pt-5">
              OUR WORK
            </h3>
            <p className="text-base leading-7 text-center">
              We are a welcoming community that offers a range of support
              services to help refugee claimants establish new lives in Canada.
              This includes: Shelter, Settlement Support, and Community
              Transitions.
            </p>
          </div>
          <div className="ml-10 w-60 pb-20 mx-5 flex flex-col items-center">
            <img
              src="/assets/3.png"
              alt="Image 1"
              className="w-56 h-56 rounded-lg shadow-lg"
            />
            <h3 className="text-3xl font-bold mb-5 text-center pt-5">
              GET INVOLVED
            </h3>
            <p className="text-base leading-7 text-center">
              We are a welcoming community that offers a range of support
              services to help refugee claimants establish new lives in Canada.
              This includes: Shelter, Settlement Support, and Community
              Transitions.
            </p>
          </div>
        </div>
        F
      </div>
      <p className="flex justify-center py-12 text-sa text-zinc-400">
        Copyright 2023 ReSet Co. All rights reserved.
      </p>
    </motion.div>
  );
};

type AnimatedWordsPros = {
  title: string;
};

const AnimatedWords: React.FC<AnimatedWordsPros> = ({ title }) => {
  return (
    <motion.span variants={staggerChildren}>
      {title.split(" ").map((word, idx) => (
        <div key={idx} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block overflow-hidden"
            variants={wordAnimation}
          >
            {word + "\u00A0"}
          </motion.span>
        </div>
      ))}
    </motion.span>
  );
};

export default Home;
