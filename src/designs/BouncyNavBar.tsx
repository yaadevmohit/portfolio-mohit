// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import {ScrollTrigger} from "gsap/ScrollTrigger"

const BouncyNavBar = () => {
  return (
    <div className="flex flex-col justify-center items-center border">
      <nav className="flex justify-center items-center gap-8">
        <a href="">Name</a>
        <a href="">work</a>
        <a href="">projects</a>
        <a href="">blog</a>
      </nav>
      <div className="flex justify-center items-center border overflow-scroll  flex-wrap h-screen">
        <section className="w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-4xl">name section</h1>
          <p>stuff about name</p>
        </section>
        <section className="w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-4xl">Work</h1>
          <p>stuff about work</p>
        </section>
        <section className="w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-4xl">projects</h1>
          <p>Stuff about projects</p>
        </section>
        <section className="w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-4xl">blog</h1>
          <p>blog stuff</p>
        </section>
      </div>
    </div>
  )
}

export default BouncyNavBar