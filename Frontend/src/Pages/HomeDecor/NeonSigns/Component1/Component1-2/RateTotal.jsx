import React, { useState } from "react";

const RateTotal = () => {
  // Back Board options
  const backBoardOptions = [
    { id: 1, name: "Cut Around Acrylic", price: 0 },
    { id: 2, name: "Rectangle Acrylic", price: 499 },
    { id: 3, name: "Cut To Letter", price: 999 },
    { id: 4, name: "Open Box", price: 1999 },
  ];

  // Hanging options
  const hangingOptions = [
    { id: 1, name: "No Hanging Kit", price: 0 },
    { id: 2, name: "Wall Mounting", price: 999 },
    { id: 3, name: "Sign Hanging", price: 999 },
    { id: 4, name: "Acrylic Stand", price: 1999 },
  ];

  // Controller options
  const controllerOptions = [{ id: 1, name: "Remote & Dimmer", price: 0 }];

  // Water Proof options
  const waterProofOptions = [
    { id: 1, name: "No", price: 0 },
    { id: 2, name: "Yes", price: 1999 },
  ];

  // State management
  const [selectedBackBoard, setSelectedBackBoard] = useState(
    backBoardOptions[3],
  ); // Open Box selected
  const [selectedHanging, setSelectedHanging] = useState(hangingOptions[1]); // Wall Mounting selected
  const [selectedController, setSelectedController] = useState(
    controllerOptions[0],
  ); // Remote & Dimmer selected
  const [selectedWaterProof, setSelectedWaterProof] = useState(
    waterProofOptions[0],
  ); // No selected
  const [basePrice] = useState(2000); // Starting base price

  // Calculate total price
  const calculateTotal = () => {
    return (
      basePrice +
      selectedBackBoard.price +
      selectedHanging.price +
      selectedController.price +
      selectedWaterProof.price
    );
  };

  const totalPrice = calculateTotal();

  const OptionButton = ({ option, isSelected, onClick }) => (
    <div className="flex flex-col justify-center items-center">
      <button
        onClick={onClick}
        className={`px-4 py-2 rounded-full text-[0.8rem] font-medium transition-all ${
          isSelected
            ? "border-1 border-red-500 text-red-500 bg-white"
            : "border-1 border-gray-300 text-gray-700 bg-white hover:border-gray-400"
        }`}
      >
        {option.name}
      </button>
      <span className="block text-xs text-gray-600 mt-1">
        ₹{option.price.toFixed(2)}
      </span>
    </div>
  );

  return (
    <div className="w-full mt-[1.5rem] mx-auto  bg-white">
      {/* Back Board Section */}
      <div className="mb-4 flex">
        <h3 className="text-[0.9rem] min-w-[6rem]  font-semibold text-gray-900 mb-3">
          Back Board:
        </h3>
        <div className="flex flex-wrap  gap-3">
          {backBoardOptions.map((option) => (
            <OptionButton
              key={option.id}
              option={option}
              isSelected={selectedBackBoard.id === option.id}
              onClick={() => setSelectedBackBoard(option)}
            />
          ))}
        </div>
      </div>

      {/* Hanging Section */}
      <div className="mb-4 flex">
        <h3 className="mr-[1.5rem] font-semibold text-gray-900 mb-3">
          Hanging:
        </h3>
        <div className="flex flex-wrap gap-3">
          {hangingOptions.map((option) => (
            <OptionButton
              key={option.id}
              option={option}
              isSelected={selectedHanging.id === option.id}
              onClick={() => setSelectedHanging(option)}
            />
          ))}
        </div>
      </div>

      {/* Controller Section */}
      <div className="mb-4 flex">
        <h3 className="mr-[1.5rem] font-semibold text-gray-900 mb-3">
          Controller:
        </h3>
        <div className="flex flex-wrap gap-3">
          {controllerOptions.map((option) => (
            <OptionButton
              key={option.id}
              option={option}
              isSelected={selectedController.id === option.id}
              onClick={() => setSelectedController(option)}
            />
          ))}
        </div>
      </div>

      {/* Water Proof Section */}
      <div className="  mb-4 flex">
        <h3 className="mr-[1.5rem] font-semibold text-gray-900 mb-3">
          Water Proof:
        </h3>
        <div className="flex flex-wrap gap-3">
          {waterProofOptions.map((option) => (
            <OptionButton
              key={option.id}
              option={option}
              isSelected={selectedWaterProof.id === option.id}
              onClick={() => setSelectedWaterProof(option)}
            />
          ))}
        </div>
      </div>

      {/* Price Display and Action Buttons */}
      <div className=" pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* Total Price */}
        <div>
          <h2 className="text-4xl font-bold text-red-600 mb-1">
            ₹{totalPrice.toLocaleString("en-IN")}
          </h2>
          <p className="text-sm text-gray-600">(Inclusive of all taxes)</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button className="px-8 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-all">
            Upload Your Design
          </button>
          <button className="px-8 py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-all">
            Create Your Own
          </button>
        </div>
      </div>
    </div>
  );
};

export default RateTotal;
