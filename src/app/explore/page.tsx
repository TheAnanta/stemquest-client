import items from '@/data/subTopics';

function Explore() {

  return (
    <div className='flex gap-x-4 h-screen mx-16'>
      <section className='grow flex flex-col py-6 md:py-8 gap-12'>
        <nav className='gap-4 md:gap-8 flex'>
          <img src='/logo.svg' alt='' className='h-12 md:h-14' />
          <div className='grow md:hidden'></div>
          <input
            type='text'
            placeholder='Search by comic/edition'
            className='pl-8 rounded-full outline-none border border-slate-800 py-1 px-4 w-full hidden md:flex'
          />
          <img
            src='/image/profile/sreetejadusi.jpg'
            alt='Sree Teja Dusi'
            className='w-12 h-12 md:w-14 md:h-14 rounded-full'
          />
        </nav>
        <div>
          <div className='mb-6 space-y-4 md:space-y-0 md:flex justify-between items-center'>
            <div>
              <h1 className='text-3xl font-bold'>
                Explore our vast range of concepts
              </h1>
              <h2>Explore our vast range of concepts</h2>
            </div>
            <div className='flex space-x-4'>
              <img src='/icons/sort.svg' alt='sort logo' />
              <span className='font-bold uppercase'>Sort</span>
              <img src='/icons/filter.svg' alt='sort logo' />
              <span className='font-bold uppercase'>Filter</span>
            </div>
          </div>
          {/* SubTopicCards in a grid */}
          <div className='grid grid-cols-5 mx-auto container gap-8'>
            {items.map((item) => {
              return (
                <a
                  className='flex flex-col cursor-pointer'
                  href={`/explore/customise/${item.id}`}
                  target='_blank'
                >
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
                </a>
              );
            })}
          </div>
        </div>
      </section>
      {/* {selectedTopicId !== -1 && (
        <div
          className='bg-black/30 w-screen h-screen absolute md:hidden'
          // onClick={unselectTopic}
        ></div>
      )}
      {selectedTopicId !== null && selectedTopicId !== -1 && (
        <div className='z-10 bg-white md:bg-red-50 top-0 right-0 h-full w-[80%] md:w-[40%] absolute md:relative p-8 md:p-12'>
          <TopicSideSheet selectedTopicId={selectedTopicId} />
        </div>
      )} */}
    </div>
  );
}

export default Explore;