import React from "react";
import { TbLoader2 } from "react-icons/tb";

const LoadingScreen = ({ message = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-brandCream text-brandBlue">
      <TbLoader2 className="w-14 h-14 animate-spin mb-4" />
      <p className="text-xl font-semibold">{message}</p>
      <p className="text-sm text-brandBlue/70 mt-2">Fetching cozy stories from YouTube ✨</p>
    </div>
  );
};

export default LoadingScreen;
