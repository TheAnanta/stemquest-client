'use client';
import { useRouter } from 'next/navigation';
import PreferenceCard from '@/components/explore/KitComponent';

const Customize = ({ params }: { params: { id: String } }) => {
  const router = useRouter();

  const comic = true;
  const mixedReality = true;

  return (
    <main className=' flex-col md:flex-row justify-evenly'>
      <nav className='p-8 gap-8 flex items-center'>
        <button onClick={() => router.back()}>close</button>
        <div className='grow md:hidden'></div>
        <img src='/assets/logo.svg' alt='' className='h-14 hidden md:flex' />
        <input
          type='text'
          placeholder='Search by comic/edition'
          className='pl-8 rounded-full outline-none border border-slate-800 py-1 px-4 w-full hidden md:flex'
        />
        <img
          src='/assets/image/profile/sreetejadusi.jpg'
          alt='Sree Teja Dusi'
          className='w-14 h-14 rounded-full'
        />
      </nav>

      <section className='flex flex-col md:flex-row grow'>
        <div className='px-8 md:w-[65%]'>
          <h1 className='text-2xl medium mb-6'>CUSTOMIZE</h1>
          <h2 className='text-4xl medium mb-2'>
            {cards.filter((e) => e.id == id)[0].title}
          </h2>
          <h3 className='text-2xl medium mb-6'>Edition One</h3>

          <div className='flex flex-col md:flex-row justify-between items-end'>
            <div className='md:w-1/2 pr-4'>
              <p className='mb-4 dmSans-medium'>
                This is a placeholder for the text which describes the gist of
                the comic.
              </p>
              <p className='mb-4 dmSans-regular'>
                This is a placeholder for the text which describes the gist of
                the comic. Placing dummy text for prototyping purposes. This is
                a placeholder for the text which describes the gist of the
                comic. Placing dummy text for prototyping purposes.
              </p>
            </div>
            <div className='md:w-1/2'>
              <textarea
                name='comic'
                id='comic'
                className='w-full md:h-56 lg:h-36 border border-black p-4 mb-4 rounded-xl outline-none'
                placeholder='Enter a prompt on how would you like your comic to be customized...'
              ></textarea>
              <button className='outline-red-800 outline outline-1 rounded-3xl text-red-800 px-4 py-2 w-full'>
                Generate Comic
              </button>
            </div>
          </div>

          <h2 className='bold text-2xl mt-4 mb-8'>Your kit includes</h2>
          <div className='grid md:grid-cols-2 gap-x-8 gap-y-4 mb-8'>
            <PreferenceCard item={{ name: `Comic` }} />
            <PreferenceCard item={{ name: `Origami` }} />
            <PreferenceCard item={{ name: `VR Headset` }} />
            <PreferenceCard item={{ name: `Mixed Reality Content` }} />
            <PreferenceCard item={{ name: `Assessment Platform` }} />
            <PreferenceCard item={{ name: `Worksheets` }} />
          </div>
        </div>
        <div className='pr-8 flex flex-col grow mb-6'>
          <img
            src='url("https://github.com/ManasMalla.png")'
            className=''
            alt=''
          />
          <div className='flex mt-6 items-center justify-between'>
            <div className='flex flex-col md:flex-row'>
              <p className='text-xl md:text-2xl pl-6 dmSans-regular'>Total</p>
              <p className='text-3xl md:text-4xl pl-6 dmSans-medium'>₹ 2500</p>
            </div>
            <div>
              <button className='bg-red-800 rounded-3xl text-white px-8 py-4 w-full outline-none text-xl dmSans-regular'>
                Proceed to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

// Export the component
export default Customize;
