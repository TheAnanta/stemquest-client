// AddressAndPaymentComponent.js
import addresses from '@/data/payment';

const AddressAndPaymentComponent = () => {
  return (
    <main className="w-screen flex flex-col justify-evenly px-16">
      <nav className="py-12 gap-8 flex">
        <img src="@/assets/logo.svg" alt="" className="h-14" />
        <input
          type="text"
          placeholder="Search by comic/edition"
          className="pl-8 rounded-full outline-none border border-slate-800 py-1 px-4 w-full"
        />
      </nav>

      <h1 className="text-xl font-semibold">ADDRESS & PAYMENT</h1>
      {/* Card */}
      <div className="flex overflow-auto ">
        {addresses.map((item, index) => (
          <div key={index} className="p-4 bg-red-800 text-white w-fit rounded-xl mr-2 flex flex-col justify-between items-start">
            <h2 className="text-lg font-bold my-2">
              {item.type}
            </h2>
            <h3 className="text-lg my-2">
              {item.address}
            </h3>
            <h4 className="text-lg">
              {item.contact}
            </h4>
          </div>
        ))}
      </div>
    </main>
  );
};

export default AddressAndPaymentComponent;
