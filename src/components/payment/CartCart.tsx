import React from 'react';
import cart from '@/data/cart';

const CartCard = () => {
  const cartItem = cart;

  return (
    <main className="w-screen flex flex-col justify-evenly">
      <h1 className="my-4 text-3xl font-semibold">Your Cart</h1>
      <h2 className="my-2 text-xl">Quantity: {cartItem.length}</h2>
      {/* Card */}
      <div className="flex flex-col">
        {cartItem.map((item, index) => (
          <div key={index} className="p-4 w-fit rounded-md my-4 flex justify-between">
            <div>
              <img src={item.image} alt="image" />
            </div>
            <div>
              <h2 className="text-3xl font-semibold">{item.title}</h2>
              <h3 className="text-xl font-normal">{item.description}</h3>
              <h4 className="text-gray-500">{item.qty}</h4>
              {/* Assuming 'image' property is available in your cart items */}
            </div>
            <div>
              {item.price}
            </div>
          </div>
        ))}
      </div>
      {/* Assuming 'cartCard' is a component, make sure it's properly imported */}
      {/* <CartCard /> */}
    </main>
  );
};

export default CartCard;
