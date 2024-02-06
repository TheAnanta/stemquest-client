// TopicSideSheet.tsx
import React, { useEffect } from "react";
import concepts from "@/data/concepts";

interface Props {
  selectedTopicId: number;
}

interface SubTopic {
  id: number;
  title: string;
}

function TopicSideSheet({ selectedTopicId }: Props) {
  return (
    <div>
      {concepts.map((item: any) => (
        <div
          key={item.id}
          className={selectedTopicId === item.id ? "selected" : ""}
        >
          {/* Render your subtopic card content */}
          <h3>{item.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default TopicSideSheet;
