import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [shippingDetails, setShippingDetails] = useState({
    name: "",
    address: "",
    phoneNumber: "",
    email: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [error, setError] = useState("");
  const [isOrderSuccessful, setIsOrderSuccessful] = useState(false);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItems);
  }, []);

  const calculateOrderTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  };

  const handleConfirmOrder = () => {
    const validationError = validateShippingDetails();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError("");

    setTimeout(() => {
      localStorage.removeItem("cart");

      window.alert("Order successful!");

      navigate("/shop");
    }, 1000);
  };

  const validateShippingDetails = () => {
    if (shippingDetails.name.trim() === "") {
      return "Please enter your name.";
    }
    if (shippingDetails.address.trim() === "") {
      return "Please enter your address.";
    }
    if (shippingDetails.phoneNumber.trim() === "") {
      return "Please enter your phone number.";
    }
    if (shippingDetails.email.trim() === "") {
      return "Please enter your email.";
    }
    return null;
  };

  return (
    <div className="mt-20 p-8 flex">
      <div className="w-1/2 pr-8">
        <h2 className="text-4xl font-bold mb-8">Order Summary</h2>
        {cartItems.map((item) => (
          <div key={item._id} className="flex items-center mb-4">
            <img
              src={item.imageURL}
              alt={item.bookTitle}
              className="h-24 w-24 object-cover rounded-md mr-4"
            />
            <div>
              <p className="text-gray-700 font-semibold text-xl">
                {item.bookTitle}
              </p>
              <p className="text-gray-500 text-lg">Quantity: {item.quantity}</p>
            </div>
          </div>
        ))}
        <div className="mt-4 border-t pt-4 text-red-500">
          <p className="text-2xl font-bold">
            Order Total: ${calculateOrderTotal().toFixed(2)}
          </p>
        </div>
      </div>

      <div className="w-1/2">
        <h2 className="text-4xl font-bold mb-8">Checkout</h2>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">Shipping Details</h3>
          <div className="mb-4 flex flex-col">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-lg font-bold text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={shippingDetails.name}
                onChange={(e) =>
                  setShippingDetails({
                    ...shippingDetails,
                    name: e.target.value,
                  })
                }
                className="p-3 border w-full"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-lg font-bold text-gray-700 mb-1"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                value={shippingDetails.address}
                onChange={(e) =>
                  setShippingDetails({
                    ...shippingDetails,
                    address: e.target.value,
                  })
                }
                className="p-3 border w-full"
                placeholder="Enter your address"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phoneNumber"
                className="block text-lg font-bold text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                value={shippingDetails.phoneNumber}
                onChange={(e) =>
                  setShippingDetails({
                    ...shippingDetails,
                    phoneNumber: e.target.value,
                  })
                }
                className="p-3 border w-full"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-lg font-bold text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={shippingDetails.email}
                onChange={(e) =>
                  setShippingDetails({
                    ...shippingDetails,
                    email: e.target.value,
                  })
                }
                className="p-3 border w-full"
                placeholder="Enter your email"
              />
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">Payment Method</h3>
          {["creditCard", "paypal", "cashOnDelivery"].map((method) => (
            <label key={method} className="block mb-2">
              <input
                type="radio"
                name="paymentMethod"
                value={method}
                checked={paymentMethod === method}
                onChange={() => setPaymentMethod(method)}
              />{" "}
              {method === "creditCard"
                ? "Credit Card"
                : method === "paypal"
                ? "PayPal"
                : "Payment on Delivery"}
            </label>
          ))}
        </div>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        {isOrderSuccessful ? (
          <p className="text-green-500 mb-4">
            Order successful! Redirecting...
          </p>
        ) : (
          <button
            onClick={handleConfirmOrder}
            className="bg-blue-700 text-white rounded-md text-xl hover:bg-teal-500 px-7 py-2 mb-10"
          >
            Confirm Order
          </button>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
