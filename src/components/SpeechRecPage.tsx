import { useState } from "react";

// @ts-ignore
const SpeechRecognition = window.webkitSpeechRecognition;
const SpeechSynthesis = window.speechSynthesis;

export function SpeechRec() {
  const [speechRecActive, setSpeechRecActive] = useState(false);
  const [recognition, setRecognition] = useState(null);
  const [sentence, setSentence] = useState("");

  function initRecognition() {
    const rec = new SpeechRecognition();
    rec.continuous = false;
    rec.lang = "de-DE";
    rec.interimResults = true;
    rec.maxAlternatives = 1;
    // @ts-ignore
    rec.onresult = (e) => {
      const sentence = e.results[0][0].transcript;
      setSentence(sentence);
    };
    // @ts-ignore
    rec.onend = (e) => {
      setSpeechRecActive(false);
    };
    rec.start();
    setRecognition(rec);
  }

  function toggleRecognition() {
    const recording = !speechRecActive;
    if (recording) {
      initRecognition();
    } else {
      // @ts-ignore
      recognition.stop();
      setRecognition(null);
    }
    setSpeechRecActive(!speechRecActive);
  }

  function speakToMe() {
    const phrase = new SpeechSynthesisUtterance(sentence);
    phrase.lang = "de-DE";
    phrase.volume = 100;
    phrase.rate = 0.8;
    phrase.pitch = 0.9;
    SpeechSynthesis.speak(phrase);
  }
  return (
    <div className="w-4/5 h-4/5 m-5 border border-gray-200 flex flex-col justify-center items-center gap-5">
      <div className="flex gap-4 items-center">
        <p className="text-lg">Speechrec</p>
        <button
          className="w-20 h-20 flex justify-center items-center select-none"
          onClick={toggleRecognition}
        >
          {speechRecActive ? (
            <span className="bg-red-400 w-full h-full rounded-full flex justify-center items-center border-2 border-red-800">
              stop
            </span>
          ) : (
            <span className="bg-green-400 w-full h-full rounded-full flex justify-center items-center border-2 border-green-800">
              activate
            </span>
          )}
        </button>
      </div>
      <div>
        <p className="text-xs text-gray-700 px-5 text-center">
          just hit the button and talk some stuff. should appear down there on
          the page hit the button again to stop
        </p>
      </div>
      <div>
        <p className="text-sm font-bold text-center px-10">{sentence}</p>
      </div>
      <div>
        <button className="border rounded-full px-4 py-2" onClick={speakToMe}>
          speak to me, computer!
        </button>
      </div>
    </div>
  );
}
