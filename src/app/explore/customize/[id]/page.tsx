import concepts from "@/data/concepts";
import PreferenceCard from "@/components/explore/KitComponent";

export default function Page({ params }: { params: { id: string } }) {
  const cardID = params.id;

  const selectedTopic = concepts.find((topic) => topic.id === cardID);
  if (!selectedTopic) {
    return (
      <div className="flex items-center justify-center h-screen">
        Topic not found!
      </div>
    );
  }
  return (
    <div className="flex gap-x-4 h-screen">
      <section className="grow flex flex-col mt-12 mx-12">
        <nav className="gap-x-4 md:gap-x-8 flex mb-8">
          <img src="/logo.svg" alt="logo" className="h-12 md:h-14" />
          <div className="grow md:hidden"></div>
          <input
            type="text"
            placeholder="Search by comic/edition"
            className="pl-8 rounded-full outline-none border border-slate-800 py-1 px-4 w-full hidden md:flex"
          />
          <img
            src="/image/profile/sreetejadusi.jpg"
            alt="Sree Teja Dusi"
            className="w-12 h-12 md:w-14 md:h-14 rounded-full"
          />
        </nav>

        <section className="flex justify-between">
          <div className="px-8 md:w-[65%]">
            <h1 className="text-2xl font-medium mb-6">CUSTOMIZE</h1>
            <h2 className="text-4xl font-medium mb-2">{selectedTopic.title}</h2>
            <h3 className="text-2xl medium mb-6">Edition One</h3>

            <div className="flex flex-col md:flex-row justify-between items-end">
              <div className="md:w-1/2 pr-4">
                <p className="mb-4 dmSans-medium">
                  {selectedTopic.description}
                </p>
                <p className="mb-4 dmSans-regular">
                  This is a placeholder for the text which describes the gist of
                  the comic. Placing dummy text for prototyping purposes. This
                  is a placeholder for the text which describes the gist of the
                  comic. Placing dummy text for prototyping purposes.
                </p>
              </div>
              <div className="md:w-1/2">
                <textarea
                  name="comic"
                  id="comic"
                  className="w-full md:h-56 lg:h-36 border border-black p-4 mb-4 rounded-xl focus:outline-none"
                  placeholder="Enter a prompt on how would you like your comic to be customized..."
                ></textarea>
                <button className="outline-red-800 outline outline-1 rounded-3xl text-red-800 px-4 py-2 w-full">
                  Generate Comic
                </button>
              </div>
            </div>

            <h2 className="bold text-2xl mt-4 mb-8">Your kit includes</h2>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 mb-8">
              <PreferenceCard item={`Comic`} />
              <PreferenceCard item={`Origami`} />
              <PreferenceCard item={`VR Headset`} />
              <PreferenceCard item={`Mixed Reality Content`} />
              <PreferenceCard item={`Assessment Platform`} />
              <PreferenceCard item={`Worksheets`} />
            </div>
          </div>
          <div className="flex flex-col mb-6">
            <img
              src={"/VR.svg"}
              title="topic"
              alt=""
              className="w-full h-full z-1"
            />
            <div className="flex mt-6 items-center justify-between">
              <div className="flex flex-col md:flex-row">
                <p className="text-xl md:text-2xl pl-6 dmSans-regular">Total</p>
                <p className="text-3xl md:text-4xl pl-6 dmSans-medium">
                  ₹ 2500
                </p>
              </div>
            </div>
            <button className="bg-red-800 rounded-3xl text-white px-8 py-3 w-full outline-none text-xl dmSans-regular">
              Proceed to Cart
            </button>
          </div>
        </section>
      </section>
    </div>
  );
}
