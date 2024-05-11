import Image from "next/image";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Idea from "@/components/Idea";
import Counter from "@/components/Counter";

export default function Home() {
  return (
   <>
        <Hero></Hero>
        <Features></Features>
        <About></About>
        <Idea></Idea>
        <Counter></Counter>
   </>
  );
}
