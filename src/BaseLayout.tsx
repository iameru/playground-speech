import { SpeechRec } from "./components/SpeechRecPage";

export function BaseLayout() {
  return (
    <div className="w-screen h-screen">
      <div className="bg-neutral-50 p-4 w-full h-full overflow-y-scroll overflow-x-hidden flex flex-col justify-center items-center gap-4">
        <SpeechRec />
      </div>
    </div>
  );
}
