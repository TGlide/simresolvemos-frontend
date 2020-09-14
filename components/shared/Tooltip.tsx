import { ReactNode } from "react";

type TooltipProps = {
  text: string;
  children: ReactNode;
};

export default function Tooltip({ text, children }: TooltipProps) {
  return (
    <div className="tooltip-container">
      <div className="tooltip-box">
        <div className="relative">
          <div className="bg-gray-700 text-white text-xs rounded py-1 px-4 right-0 bottom-full">
            {text}
            <svg
              className="absolute text-gray-700 h-2 left-0 ml-2 top-full"
              x="0px"
              y="0px"
              viewBox="0 0 255 255"
            >
              <polygon
                className="fill-current"
                points="0,0 127.5,127.5 255,0"
              />
            </svg>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
