import Image from "next/image";
import ScrollAnimationWrapper from "./components/ScrollAnimationWrapper";
import DiagonalArrow from "./components/DiagonalArrow";
import TypewriterComponent from "./components/TypewriterComponent";
import Hero from "./components/Hero";
import Categories from "./components/Categories";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
    </>
  );
}
