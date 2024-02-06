import items from '@/data/subTopics';

const SubTopicCard = () => {
  return (
    <div>
      <div className='grid grid-cols-5 mx-auto container gap-8'>
        {items.map((item) => {
          return (
            <div className='flex flex-col '>
              <img
                src={item.cover}
                alt={item.cover}
                className='w-48 h-48 rounded-lg object-cover object-top'
              />
              <div className='flex flex-col items-start justify-start'>
                <h2 className='font-bold text-lg mt-4 overflow-ellipsis'>
                  {item.title.length > 28
                    ? item.title.slice(0, 28) + '...'
                    : item.title}
                </h2>
                <p className='text-[#757575] mt-1'>
                  {item.description.length > 28
                    ? item.description.slice(0, 28) + '...'
                    : item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SubTopicCard;
