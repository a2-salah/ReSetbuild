import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { riseWithFade, staggerChildren, videoAnimation, wordAnimation } from "../utils/animations";

const Home: NextPage = () => {
  return (
    <motion.div className="min-h-screen bg-cream" initial="first" animate="second">
      <Head>
        <title>Home | ReSeT Co</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="grid grid-cols-[3fr_1fr] py-24">
        <div className="">
        <h1 className="text-8xl font-bold w-[40rem] leading-[90%] tracking-[-2px]">
          <AnimatedWords title="ReSet Wellness for a better everyday" /> 
        </h1></div>
        <motion.div 
        className="text-base leading-[150%] self-end" variants={riseWithFade}
        >
            providing services that optimize growth and self-reliance within the most vulnerable communities.
        </motion.div>
      </main>
      <motion.video loop autoPlay muted playsInline variants={videoAnimation}>
        <source src="/assets/helping-hand.mp4" type="video/mp4" />
      </motion.video>
      
        <p className="flex justify-center py-12 text-sa text-zinc-400">
          Copyright 2023 ReSet Co. All rights reserved.
        </p>
        
    </motion.div>
  );
};

type AnimatedWordsPros = {
  title: string;
};

const AnimatedWords: React.FC<AnimatedWordsPros> = ({title})  => {
    return (
      <motion.span variants={staggerChildren}>
        {title.split(" ").map((word, idx)  => (
        <div key={idx} className="inline-block overflow-hidden">
          <motion.span className="inline-block overflow-hidden" variants={wordAnimation}>{word + "\u00A0"}</motion.span>
        </div>
        ))}
      </motion.span>
    );

};

export default Home;
