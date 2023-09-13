import React from "react"
import Quantum from "../assets/Quantum.svg"
import AIML from "../assets/AI_ML.svg"
import webdev from "../assets/Web Dev.svg"
import corporate from "../assets/Corporate.svg"
import creatives from "../assets/Creatives.svg"

function Domain1() {
  return (
    <div className="bg-black text-white">
      <div className="w-full h-auto flex items-center justify-center text-5xl  pb-20 bold">
        DOMAINS
      </div>
      {/* core quantum */}
      <div className=" text-center sm:text-center md:text-start flex flex-col sm:flex-col md:flex-row px-20 sm:px-20 md:px-32  gap-5 sm:gap-5 md:gap-52 justify-between items-center pb-20">
        <img
          src={Quantum}
          alt="quantum"
          className="mx-auto sm:h-auto md:h-[30rem]"
        />
        <div>
          <div className="bold text-5xl pb-10">Core Quantum</div>
          <p className="text-sm sm:text-base md:text-lg min-w-full">
          At the heart of our club lies our quantum domain, where technical prowess meets intellectual curiosity. Here, we dive deep into the intricacies of quantum computing. Our discussion forums are not merely conversations; they are exchanges of quantum concepts, where members dissect complex quantum algorithms and explore the nuances of quantum mechanics. We're a collective of problem solvers, experimenting with quantum gates, quantum programming languages, and quantum algorithms and employing them in projects to achieve quantum supremacy in this NISQ era. Through hands-on workshops, coding challenges, and collaborative research initiatives, we forge the path to quantum enlightenment{" "}
          </p>
        </div>
      </div>
      {/* AI-ML */}
      <div className=" text-center sm:text-center md:text-start flex flex-col sm:flex-col md:flex-row-reverse px-20 sm:px-20 md:px-32  gap-10 sm:gap-10 md:gap-20 justify-between items-center pb-20">
        <img
          src={AIML}
          alt="quantum"
          className="h-auto  max-w-full sm:max-w-lg lg:max-w-xl  md:h-[30rem]"
        />
        <div>
          <div className="bold text-5xl pb-10">AI-ML</div>
          <p className="text-sm sm:text-base md:text-lg">
          Within our club's AI and ML domain, we venture into the concepts of Quantum Machine Learning (QML), a frontier where quantum computing and machine learning intersect.Unlike classical computers, quantum machines operate under laws of quantum theory, which enable us to venture into new dimensions of data processing and algorithm development. Our domain offers us a unique avenue/platform for members for investigating the world of quantum algorithms, quantum-enhanced optimization, and quantum data analysis.Collectively, we endeavor to harness the full potential of this state-of-the-art technology to bring about a transformative paradigm shift in the future of artificial intelligence and machine learning.
          </p>
        </div>
      </div>
      {/* Web Development */}
      <div className=" text-center sm:text-center md:text-start flex flex-col sm:flex-col md:flex-row px-20 sm:px-20 md:px-32  gap-10 sm:gap-10 md:gap-52 justify-between items-center">
        <img src={webdev} alt="quantum" className="w-[30rem]" />
        <div>
          <div className="bold text-5xl pb-10">Web Dev</div>
          <p className="text-sm sm:text-base md:text-lg">
          Within our Web Development Domain, we're deeply engaged in the craft of shaping and enhancing our digital footprint. Here, our focus revolves around the art of designing, meticulously maintaining, and optimizing every facet of our club's website and digital platforms, all aimed at ensuring a seamless and enjoyable user experience. As a member, you'll find yourself part of a dedicated team, collaborating to refine our online presence by seamlessly integrating creative visuals, technically-rich content, and strategic promotional materials into the digital tapestry. This domain offers a fertile ground to nurture and expand your web development skills, providing hands-on experience that not only benefits the club's online success but also equips you with invaluable skills for your personal and professional growth.{" "}
          </p>
        </div>
      </div>

      <div className=" text-center sm:text-center md:text-start flex flex-col sm:flex-col md:flex-row-reverse px-20 sm:px-20 md:px-32  gap-10 sm:gap-10 md:gap-52 justify-between items-center pb-20">
        <img
          src={corporate}
          alt="corporate"
          className="h-auto sm:h-auto md:h-[30rem]"
        />
        <div>
          <div className="bold text-5xl pb-10">Corporate</div>
          <p className="text-sm sm:text-base md:text-lg">
          Within our Corporate Domain, we focus on securing vital funding and cultivating essential industry connections. This segment serves as a bridge between our club and corporate partners, sponsors, and donors, ensuring financial support for our activities and forging valuable professional networks. Whether you're interested in fundraising, networking, or corporate relationships, this domain offers you the opportunity to make a significant impact on our club's success.Additionally, members involved in our Corporate Domain gain valuable experience that will undoubtedly benefit them in their future careers and endeavors.
          </p>
        </div>
      </div>

      <div className=" text-center sm:text-center md:text-start flex flex-col sm:flex-col md:flex-row px-20 sm:px-20 md:px-32  gap-10 sm:gap-10 md:gap-52 justify-between items-center">
        <img src={creatives} alt="creatives" className="w-[30rem]" />
        <div>
          <div className="bold text-5xl pb-10">Editorial/Creatives</div>
          <p className="text-sm sm:text-base md:text-lg">
          Our Editorial Domain, a dynamic space within our club that brings together a collective of creative minds and content creators. Here, we curate a diverse array of content across two distinct sub-domains, fostering an environment where imagination meets expression,
          In the 'Creative subdomain,' our talented members utilize a range of UI/UX tools to design visually stunning materials that promote our club's events, activities and projects, providing essential support to our Web Development Domain. From eye-catching web graphics to interactive user interfaces, we craft compelling visuals that captivate and engage our audience.
          Meanwhile, in the 'content' subdomain, we provide in-depth analyses, research reviews, and cutting-edge technical content that delves into the nuances of quantum computing for our presence in our social media platforms.Whether you're interested in design or technical content, our Editorial Domain provides opportunities for you to contribute to our creative and technical community.{" "}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Domain1
