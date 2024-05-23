import React, { useState, useEffect } from "react";
const words1 = ["Software Engenery", "Philosophy", "Linguistics", "Letters"];
const words2 = ["Work", "Coding", "Study", "el culo y las tetas"];
const About: React.FC = () => {
  const [currentWordIndex1, setCurrentWordIndex1] = useState(0);
  const [currentWordIndex2, setCurrentWordIndex2] = useState(0);
  const [displayedText1, setDisplayedText1] = useState(words1[0]);
  const [displayedText2, setDisplayedText2] = useState(words2[0]);
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState<"first" | "second">("first");

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
            setPhase("first");
          }, 1000); // Wait 1 second before starting the next word
        }
      }
    }, 80); // Adjust the speed of typing here

    return () => clearInterval(interval);
  }, [charIndex, currentWordIndex1, currentWordIndex2, phase]);

  return (
    <div className="bg-[#ff0] min-h-screen  ">
      <div className="mt-10 align-middle justify-center parrafo text-black italic pt-60 font-bold text-wrap ">
        <ul className="list-none p-0 m-0">
          <li className="mb-2">I am a full-stack developer</li>
          <li>
            trained in&nbsp;
            <mark className="font-bold underline">{displayedText1}</mark>
            &nbsp;appasionated to &nbsp;
          </li>
          <li className="mb-2">
            {" "}
            <mark className="font-bold underline">{displayedText2}</mark>
          </li>
        </ul>
        {/* <p className="parrafo text-black pt-60 font-bold text-wrap ">
          Mi formación fue en Letras y Filosofía y di mis primeros pasos en el
          mundo de la programación por curiosidad. Al hacer mi primer curso en
          Plataforma 5, una escuela online, comprendí que mis pasiones y el
          ámbito en el que se movían mis motivaciones (centradas en el estudio
          del lenguaje y la lógica) no sólo eran compatibles, sino también
          complementarios y consecuentes.
        </p> */}
        <mark> </mark>
      </div>
    </div>
  );
};
export default About;
