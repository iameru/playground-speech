import { useState } from "react";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
export function SpeechRec() {
  console.log(recognition);
  const [speechRecActive, setSpeechRecActive] = useState(true);
  return (
    <div className="w-4/5 h-4/5 m-5 border border-gray-200 flex flex-col justify-center items-center gap-5">
      <div className="flex gap-4 items-center">
        <p className="text-lg">Speechrec</p>
        <p className="w-20 h-20 flex justify-center items-center">
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
        <p className="text-sm font-bold text-center px-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          vitae optio rem ducimus ut numquam ullam fugiat reiciendis voluptas
          consectetur?
        </p>
      </div>
    </div>
  );
}
