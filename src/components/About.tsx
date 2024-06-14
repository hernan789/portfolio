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
          }, 1000);
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
          }, 1000);
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
          }, 1000);
        }
      }
    }, 80);

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
      <div className="bg-[#ff0] min-h-[110vh] grid items-center">
        <div className="mt-10 justify-center parrafo text-black  font-bold text-wrap ">
          <ul className="list-none p-0 m-0">
            <li className="mb-0">I am a full-stack developer</li>
            <li>
              trained in&nbsp;
              <mark className="font-bold italic underline underline-offset-8">
                {displayedText1}
              </mark>
              &nbsp;passionate about&nbsp;
            </li>
            <li className="mb-0">
              {" "}
              <mark className="font-bold italic underline underline-offset-8">
                {displayedText2}
              </mark>
              &nbsp;who is ready to&nbsp;
            </li>
            {/* <li>ready to</li> */}
            <mark className="font-bold italic underline underline-offset-8">
              {displayedText3}.
            </mark>
          </ul>

          <mark> </mark>
        </div>
      </div>
      <div className="bg-black min-h-[110vh] proyectos-x font-medium grid min-[120px]:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-12 content-center pt-[10%] pb-[10%] py-4">
        <div className="">
          <h2 className="text-white  pb-2 pt-4">
            With a background in linguistics and philosophy, I ventured into
            programming out of curiosity. My skills in language analysis and
            logical reasoning proved invaluable in software development,
            enhancing my ability to solve complex problems creatively. This
            unique interdisciplinary perspective is something I am eager to
            bring to a team to drive innovative solutions and impactful results.
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
    </>
  );
};
export default About;
