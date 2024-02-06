"use client";
import Concept from "@/data/concept";
import { useState } from "react";

export default function ConceptCard(props: { concept: Concept }) {
  console.log(props.concept);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`rounded-3xl flex flex-col gap-y-4 p-6 w-min hover:scale-105 cursor-pointer`}
      style={
        isHovered
          ? {
              backgroundColor: props.concept.subjectColor,
            }
          : {}
      }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={props.concept.cover}
        className="w-48 h-48 object-cover rounded-xl"
      />
      <div className="w-[12.7rem] text-ellipsis gap-y-2 flex flex-col">
        <h4 className="overflow-x-hidden text whitespace-nowrap text-ellipsis text-xl font-medium">
          {props.concept.title}
        </h4>
        <div className="gap-y-1 flex flex-col">
          <p className="text-[#757575] overflow-clip whitespace-nowrap text-ellipsis">
            {props.concept.description}
          </p>
          <div className="flex gap-x-6">
            <div
              style={{
                fontVariationSettings: "'FILL' 1, 'wght' 400, 'opsz' 20",
                fontSize: "2px",
              }}
            >
              <span className="material-symbols-rounded text-[#FFC200]">
                star
              </span>
              <span className="material-symbols-rounded text-[#FFC200]">
                star
              </span>
              <span className="material-symbols-rounded text-[#FFC200]">
                star
              </span>
              <span className="material-symbols-rounded text-[#FFC200]">
                star
              </span>
              <span className="material-symbols-rounded text-[#666666]">
                star
              </span>
            </div>

            <p className="font-medium text-[#757575]">142</p>
          </div>
        </div>
      </div>
    </div>
  );
}
