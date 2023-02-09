import { useState } from "react";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

export function SpeechRec() {
  const [speechRecActive, setSpeechRecActive] = useState(false);
  const [recognition, setRecognition] = useState(null);
  const [sentence, setSentence] = useState("");

  function initRecognition() {
    const rec = new SpeechRecognition();
    rec.continuous = true;
    rec.lang = "de-DE";
    rec.interimResults = true;
    rec.maxAlternatives = 1;
    // rec.interimResults = (e) => {};
    rec.onresult = (e) => {
      const sentence = e.results[0][0].transcript;
      setSentence(sentence);
    };
    rec.start();
    setRecognition(rec);
  }
  function toggleRecognition() {
    const recording = !speechRecActive;
    if (recording) {
      initRecognition();
    } else {
      recognition.stop();
      setRecognition(null);
    }
    setSpeechRecActive(!speechRecActive);
  }

  return (
    <div className="w-4/5 h-4/5 m-5 border border-gray-200 flex flex-col justify-center items-center gap-5">
      <div className="flex gap-4 items-center">
        <p className="text-lg">Speechrec</p>
        <p
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
        </p>
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
    </div>
  );
}
