import { useContext } from "react";
import { cartContext } from "./CartStore";

export default function CartProducts() {
  const { cartData, handlePlus, handleMinus, handleDelete } =
    useContext(cartContext);

  return (
    <div className="w-full">
      {/* Header */}
      <div className="w-full border border-gray-200 bg-gray-50">
        <div className="flex items-center text-sm text-gray-600 px-4 py-3">
          <div className="flex-1">Product Detail</div>
          <div className="w-28 text-center">Unit Price</div>
          <div className="w-32 text-center">Quantity</div>
          <div className="w-28 text-center">Subtotal</div>
        </div>
      </div>

      {/* Body */}
      <div className="w-full border border-gray-200 border-t-0 overflow-x-auto">
        {cartData.map((product) => (
          <div
            key={product.id}
            className="flex items-stretch border-b border-gray-200"
          >
            {/* Product Info */}
            <div className="flex-1 flex items-center gap-4 px-4 py-4 min-w-[16rem]">
              <div className="w-14 h-14 border border-gray-200 bg-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col">
                <span className="text-sm font-semibold text-gray-800">
                  {product.name}
                </span>
                <span className="text-xs text-gray-500">Show Details</span>
              </div>
            </div>

            {/* Unit Price */}
            <div className="w-28 flex items-center justify-center border-l border-gray-200 text-sm">
              ₹{product.price.toFixed(2)}
            </div>

            {/* Quantity */}
            <div className="w-32 flex items-center justify-center border-l border-gray-200">
              <div className="flex items-center gap-2">
                <span
                  onClick={() => handleMinus(product.id)}
                  className="cursor-pointer w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-sm hover:bg-gray-300"
                >
                  -
                </span>

                <span className="min-w-[2.5rem] h-8 border border-gray-200 rounded flex items-center justify-center text-sm">
                  {product.quantity}
                </span>

                <span
                  onClick={() => handlePlus(product.id)}
                  className="cursor-pointer w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-sm hover:bg-gray-300"
                >
                  +
                </span>
              </div>
            </div>

            {/* Subtotal */}
            <div className="w-28 flex items-center justify-center border-l border-gray-200 text-sm">
              ₹{(product.price * product.quantity).toFixed(2)}
            </div>

            {/* Remove */}
            <div className="w-20 flex items-center justify-center border-l border-gray-200">
              <button
                onClick={() => handleDelete(product.id)}
                className="cursor-pointer text-red-500 text-sm hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
