// TopicSideSheet.tsx
import React, { useEffect } from 'react';
import items from '@/data/subTopics';

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
      {items.map((item: any) => (
        <div key={item.id} className={selectedTopicId === item.id ? 'selected' : ''}>
          {/* Render your subtopic card content */}
          <h3>{item.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default TopicSideSheet;
