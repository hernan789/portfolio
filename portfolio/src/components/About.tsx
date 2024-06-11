// import React, { useState, useEffect } from "react";

// const words1 = ["Software Engineering", "Philosophy", "Linguistics", "Letters"];
// const words2 = ["teamwork", "coding", "studying", "problem solving"];
// const words3 = [
//   "work",
//   "learn",
//   "listen",
//   "ask",
//   "help",
//   "design",
//   "test",
//   "build",
//   "start over and over again",
// ];

// type Phase = "first" | "second" | "third";
// type State = {
//   currentWordIndex1: number;
//   currentWordIndex2: number;
//   currentWordIndex3: number;
//   displayedText1: string;
//   displayedText2: string;
//   displayedText3: string;
//   charIndex: number;
//   phase: Phase;
// };

// const About: React.FC = () => {
//   const [state, setState] = useState<State>({
//     currentWordIndex1: 0,
//     currentWordIndex2: 0,
//     currentWordIndex3: 0,
//     displayedText1: words1[0],
//     displayedText2: words2[0],
//     displayedText3: words3[0],
//     charIndex: 0,
//     phase: "first",
//   });

//   useEffect(() => {
//     const handlePhase = () => {
//       const {
//         currentWordIndex1,
//         currentWordIndex2,
//         currentWordIndex3,
//         charIndex,
//         phase,
//       } = state;

//       const wordsMap = {
//         first: words1,
//         second: words2,
//         third: words3,
//       };

//       const currentWordIndexMap = {
//         first: currentWordIndex1,
//         second: currentWordIndex2,
//         third: currentWordIndex3,
//       };

//       const setDisplayedTextMap = {
//         first: "displayedText1",
//         second: "displayedText2",
//         third: "displayedText3",
//       };

//       const currentWord = wordsMap[phase][currentWordIndexMap[phase]];
//       const nextWord =
//         wordsMap[phase][
//           (currentWordIndexMap[phase] + 1) % wordsMap[phase].length
//         ];
//       const newDisplayedText =
//         nextWord.substring(0, charIndex + 1) +
//         currentWord.substring(charIndex + 1);

//       setState((prevState) => ({
//         ...prevState,
//         [setDisplayedTextMap[phase]]: newDisplayedText,
//         charIndex: charIndex + 1,
//       }));

//       if (charIndex + 1 >= nextWord.length) {
//         setTimeout(
//           () => {
//             const nextPhase: Phase =
//               phase === "first"
//                 ? "second"
//                 : phase === "second"
//                 ? "third"
//                 : "first";
//             setState((prevState) => ({
//               ...prevState,
//               charIndex: 0,
//               [`currentWordIndex${
//                 phase.charAt(0).toUpperCase() + phase.slice(1)
//               }`]: (currentWordIndexMap[phase] + 1) % wordsMap[phase].length,
//               phase: nextPhase,
//             }));
//           },
//           phase === "first" ? 2000 : phase === "second" ? 2000 : 4000
//         );
//       }
//     };

//     const interval = setTimeout(handlePhase, 70);

//     return () => clearTimeout(interval);
//   }, [state]);

//   return (
//     <div className="bg-[#ff0] min-h-screen">
//       <div className="mt-10 align-middle justify-center parrafo text-black italic pt-60 font-bold text-wrap">
//         <ul className="list-none p-0 m-0">
//           <li className="mb-2">I am a full-stack developer</li>
//           <li>
//             trained in&nbsp;
//             <mark className="font-bold underline">{state.displayedText1}</mark>
//             &nbsp;passionate about&nbsp;
//           </li>
//           <li className="mb-2">
//             <mark className="font-bold underline">{state.displayedText2}</mark>
//             &nbsp;who is ready to&nbsp;
//           </li>
//           <mark className="font-bold underline">{state.displayedText3}.</mark>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default About;

import React, { useState, useEffect } from "react";
import resume from "../assets/Resumes/Hernan Duarte Resume.pdf";
import cv from "../assets/Resumes/Hernan Luis Duarte CV (Spanish).pdf";
const words1 = ["software development ", "philosophy", "linguistics"];
const words2 = ["teamwork", "coding", "studying", "problem solving"];
const words3 = [
  "work",
  "learn",
  "listen",
  "ask",
  "help",
  "design",
  "test",
  "build",
  "restart",
];
const About: React.FC = () => {
  const [currentWordIndex1, setCurrentWordIndex1] = useState(0);
  const [currentWordIndex2, setCurrentWordIndex2] = useState(0);
  const [currentWordIndex3, setCurrentWordIndex3] = useState(0);
  const [displayedText1, setDisplayedText1] = useState(words1[0]);
  const [displayedText2, setDisplayedText2] = useState(words2[0]);
  const [displayedText3, setDisplayedText3] = useState(words3[0]);
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState<"first" | "second" | "third">("first");

  useEffect(() => {
    const interval = setInterval(() => {
      //First group of words running
      if (phase === "first") {
        const currentWord = words1[currentWordIndex1];
        const nextWord = words1[(currentWordIndex1 + 1) % words1.length];
        const newDisplayedText =
          nextWord.substring(0, charIndex + 1) +
          currentWord.substring(charIndex + 1);

        setDisplayedText1(newDisplayedText);
        setCharIndex(charIndex + 1);

        if (charIndex + 1 >= nextWord.length) {
          setTimeout(() => {
            setCharIndex(0);
            setCurrentWordIndex1((currentWordIndex1 + 1) % words1.length);
            setPhase("second");
          }, 1000); // Wait 1 second before starting the next word
        }
      } else if (phase === "second") {
        const currentWord = words2[currentWordIndex2];
        const nextWord = words2[(currentWordIndex2 + 1) % words2.length];
        const newDisplayedText =
          nextWord.substring(0, charIndex + 1) +
          currentWord.substring(charIndex + 1);

        setDisplayedText2(newDisplayedText);
        setCharIndex(charIndex + 1);

        if (charIndex + 1 >= nextWord.length) {
          setTimeout(() => {
            setCharIndex(0);
            setCurrentWordIndex2((currentWordIndex2 + 1) % words2.length);
            setPhase("third");
          }, 1000); // Wait 1 second before starting the next word
        }
      } else if (phase === "third") {
        const currentWord = words3[currentWordIndex3];
        const nextWord = words3[(currentWordIndex3 + 1) % words3.length];
        const newDisplayedText =
          nextWord.substring(0, charIndex + 1) +
          currentWord.substring(charIndex + 1);
        setDisplayedText3(newDisplayedText);
        setCharIndex(charIndex + 1);
        if (charIndex + 1 >= nextWord.length) {
          setTimeout(() => {
            setCharIndex(0);
            setCurrentWordIndex3((currentWordIndex3 + 1) % words3.length);
            setPhase("first");
          }, 1000); // Wait 1 second before starting the next word
        }
      }
    }, 80); // Adjust the speed of typing here

    return () => clearInterval(interval);
  }, [charIndex, currentWordIndex1, currentWordIndex2, phase]);
  const handleDownloadEnglishPdf = () => {
    const pdfUrl = resume;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Hernán Duarte Resume.pdf";
    link.click();
  };
  const handleDownloadSpanishPdf = () => {
    const pdfUrl = cv;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Hernán Duarte CV Spanish.pdf";
    link.click();
  };
  return (
    <>
      <div className="bg-[#ff0] min-h-screen  ">
        <div className="mt-10 align-middle justify-center parrafo text-black italic pt-60 font-bold text-wrap ">
          <ul className="list-none p-0 m-0">
            <li className="mb-2">I am a full-stack developer</li>
            <li>
              trained in&nbsp;
              <mark className="font-bold underline underline-offset-8">
                {displayedText1}
              </mark>
              &nbsp;passionate about&nbsp;
            </li>
            <li className="mb-2">
              {" "}
              <mark className="font-bold underline underline-offset-8">
                {displayedText2}
              </mark>
              &nbsp;who is ready to&nbsp;
            </li>
            {/* <li>ready to</li> */}
            <mark className="font-bold underline underline-offset-8">
              {displayedText3}.
            </mark>
          </ul>

          <mark> </mark>
        </div>
      </div>
      <div className="bg-black min-h-[110vh] proyectos-x font-medium grid min-[120px]:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-12 content-center pt-[10%] pb-[10%] py-4">
        <div className="">
          <h2 className="text-white  pb-2 pt-4">
            My background is in Literature and Philosophy, and I took my first
            steps into the world of programming out of curiosity. When I took my
            first course at Platform 5, an online school, I realized that my
            passions and the areas where my motivations lay (focused on the
            study of language and logic) were not only compatible but also
            complementary and consistent.
          </h2>
        </div>
        <div className="grid justify-items-center">
          <div
            className="grid justify-items-start content-center
          "
          >
            <div className="">
              <button
                className="text-black w-[151%] px-[5%] h-[50px] mt-4 mb-2 p-2 shadow-inner bg-[#ff0] rounded flex items-center justify-center hover:bg-white hover:border "
                onClick={handleDownloadEnglishPdf}
              >
                Download Resume
              </button>
            </div>
            <div className=" py-2">
              <button
                className="text-black w-[100%] px-[5%]  h-[auto] mt-4 mb-2 shadow-inner bg-[#ff0] rounded pl-50 flex items-center justify-center hover:bg-white hover:border "
                onClick={handleDownloadSpanishPdf}
              >
                {"Download Resume (Spanish)"}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-black min-h-screen ">
        <p className="proyectos-x text-[20px] text-white italic underline-offset-auto font-medium pt-[15%]">
          {" "}
          My background is in Literature and Philosophy, and I took my first
          steps into the world of programming out of curiosity. When I took my
          first course at Platform 5, an online school, I realized that my
          passions and the areas where my motivations lay (focused on the study
          of language and logic) were not only compatible but also complementary
          and consistent.
        </p>
        <p className="proyectos-x text-[20px] text-white italic underline-offset-auto font-medium pt-[15%]">
          Today, having successfully completed the JavaScript Bootcamp, I am
          convinced and highly motivated to continue learning and to dedicate my
          future to web development.{" "}
        </p>
      </div> */}
    </>
  );
};
export default About;
