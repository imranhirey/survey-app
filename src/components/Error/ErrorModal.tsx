import { XIcon } from "@heroicons/react/solid";
import { FC } from "react";

interface Props {
  error: string;
  closeError: any;
}

const ErrorModal: FC<Props> = ({ error, closeError }) => {
  return (
    <div
      id="backdrop"
      className="absolute flex items-center cursor-pointer font-poppins bg-slate-900/90 inset-0 z-20 overflow-hidden w-screen h-screen"
    >
      <div
        id="errModal"
        className="md:mx-auto -mt-9 mx-10 max-w-md md:max-w-lg bg-slate-200 rounded-lg p-6 m-2"
      >
        <div className="bg-red-500 rounded-lg p-3 m-2">
          <h1 className="text-2xl text-slate-300 font-semibold">Error!</h1>
        </div>
        <div className="m-2 text-lg font-sourceSans">
          <p>{error}</p>
        </div>
        <div
          className="flex justify-center cursor-pointer"
          onClick={closeError}
        >
          <XIcon className="h-8 w-6 text-red-500" />
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
