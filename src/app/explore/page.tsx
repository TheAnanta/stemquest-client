"use client";
import ConceptCard from "@/components/concept_card";
import concepts from "@/data/concepts";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"] });

export default function Explore() {
  return (
    <main className={dmSans.className}>
      <div className="px-12 py-10 flex flex-col gap-y-8">
        <div className="flex gap-x-14 items-center">
          <img src="/logo.png" className="h-16" />
          <input
            className="grow h-min py-3 px-6 rounded-full border-[1px] border-black placeholder-[#545454]"
            placeholder="Search by comic/edition"
          />
          {/* <img
            src="/image/profile/sreetejadusi.jpg"
            className="w-16 h-16 rounded-full"
          /> */}
          <img
            src="https://github.com/ManasMalla.png"
            className="w-16 h-16 rounded-full"
          />
        </div>
        <div className="flex gap-3">
          <div className="gap-x-1 flex flex-col">
            <h2 className="font-bold text-3xl">
              Explore our vast range of concepts
            </h2>
            <h3>Explore our vast range of concepts</h3>
          </div>
        </div>
        <div className="concept-wrapper">
          {concepts.map((concept) => {
            return (
              <ConceptCard
                key={concept.id}
                concept={concept}
                onExploreConcept={() => {
                  window.location.href = `/explore/customize/${concept.id}`;
                }}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
