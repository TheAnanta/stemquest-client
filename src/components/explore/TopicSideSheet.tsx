import { useEffect } from 'react';

function TopicSideSheet({ item, closeOverlay }) {
  useEffect(() => {
    const unselectTopic = () => {
      // Define your unselectTopic logic here
    };

    return () => {
      unselectTopic(); // Cleanup function
    };
  }, []);

  const getImage = (fileName: any) => {
    try {
      const modules = import.meta.glob('@/assets/image/**/*.{png,svg,jpg,jpeg}', { eager: true });
      const moduleKeys = Object.keys(modules);
      const fileSrc = moduleKeys.find((key) => key.includes(fileName));

      return fileSrc ? modules[fileSrc].default : '';
    } catch (err) {
      console.log(err);
      return '';
    }
  };

  const customizeKit = () => {
    console.log(item.id);
    // You should handle routing in your parent component or use react-router
  };

  return (
    <div>
      <i className="close-icon" onClick={closeOverlay}>close</i>
      <img
        src={getImage(item.cover)}
        alt={item.cover}
        className="my-4 md:my-8 aspect-[1.2] object-cover w-full rounded-lg"
      />
      <h2 className="text-xl md:text-3xl font-bold">
        {item.title}
      </h2>
      <div className="flex items-center gap-x-3 md:gap-x-4 my-2">
        <p className="md:text-lg text-gray-500">
          Edition {item.edition.editionNumber}
        </p>
        <p className="px-3 md:px-4 py-1 bg-red-800 text-white text-[0.7rem] md:text-sm rounded-full">
          Age {item.age.min} - {item.age.max}
        </p>
        <p className="uppercase border-[2.5px] rounded-full border-red-800 text-red-800 px-3 md:px-4 py-1 text-[0.7rem] md:text-sm">
          {item.subSubject}
        </p>
      </div>
      <p className="text-md text-gray-500">
        <span className="font-medium block">
          This is a placeholder for the text which describes the gist of the comic.
        </span>
        Placing dummy text for prototyping purposes. This is a placeholder for the
        text which describes the gist of the comic. Placing dummy text for
        prototyping purposes.
      </p>
      <div className="flex gap-4 mt-3 md:mt-6">
        <button className="outline outline-red-800 py-1 px-6 rounded-full border-1 text-[0.75rem] md:text-base">
          Learn More
        </button>
        <button
          className="text-white bg-red-800 py-1 transform transition duration-300 ease-in-out hover:scale-105 rounded-full text-[0.8rem] md:text-base"
          onClick={customizeKit}
        >
          Let's Customize
        </button>
      </div>
    </div>
  );
}

export default TopicSideSheet;
