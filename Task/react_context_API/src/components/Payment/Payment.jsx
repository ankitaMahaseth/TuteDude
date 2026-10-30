import { useState } from "react";
import { Link } from "react-router-dom";

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [isPaymentCompleted, setIsPaymentCompleted] = useState(false);

  // Get cart data from localStorage
  const [cart, setCart] = useState(() => {
    try {
      const savedData = localStorage.getItem("cartData");
      return savedData ? JSON.parse(savedData) : [];
    } catch (error) {
      console.error("Failed to load cart:", error);
      return [];
    }
  });

  // Calculate total amount
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Payment form state
  const [paymentDetails, setPaymentDetails] = useState({
    cardHolder: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setPaymentDetails({
      ...paymentDetails,
      [e.target.name]: e.target.value,
    });
  };

  // Handle payment submission
  const handlePayment = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    if (paymentMethod === "creditCard") {
      console.log("Credit Card Payment Selected");
    } else {
      console.log("Cash on Delivery Selected");
    }

    // Clear cart from localStorage
    localStorage.removeItem("cartData");

    // Clear payment form details
    setPaymentDetails({
      cardHolder: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    });

    // Display success message
    setIsPaymentCompleted(true);
    setCart([]);
  };

  return (
    <main className="min-h-screen bg-gray-100 p-5">
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
        {/* Payment Section */}
        <section className="rounded-xl bg-white p-5 shadow-md">
          {cart.length === 0 ? (
            <div className="py-10 text-center">
              <h2 className="text-xl font-bold">Your cart is empty!</h2>

              <Link
                to="/"
                className="mt-5 inline-block rounded-lg bg-indigo-600 px-6 py-3 text-white"
              >
                Continue Shopping
              </Link>
            </div>
          ) : isPaymentCompleted ? (
            // Payment Success Message
            <div className="py-10 text-center">
              <div className="mb-4 text-6xl">✅</div>

              <h2 className="text-2xl font-bold text-green-600">
                Order Placed Successfully!
              </h2>

              <p className="mt-3 text-gray-600">
                Thank you for shopping with us.
              </p>

              <Link
                to="/"
                className="mt-5 inline-block rounded-lg bg-indigo-600 px-6 py-3 text-white"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            // Payment Form
            <>
              <h2 className="mb-5 text-2xl font-bold">Payment Details</h2>

              {/* Payment Method */}
              <div className="mb-5 flex flex-row flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="creditCard"
                    name="paymentMethod"
                    value="creditCard"
                    checked={paymentMethod === "creditCard"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="h-4 w-4 cursor-pointer"
                  />

                  <label htmlFor="creditCard" className="cursor-pointer">
                    Credit Card
                  </label>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="COD"
                    name="paymentMethod"
                    value="COD"
                    checked={paymentMethod === "COD"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="h-4 w-4 cursor-pointer"
                  />

                  <label htmlFor="COD" className="cursor-pointer">
                    Cash on Delivery
                  </label>
                </div>
              </div>

              <form onSubmit={handlePayment} className="space-y-4">
                {/* Credit Card Details */}
                {paymentMethod === "creditCard" && (
                  <>
                    <div>
                      <label className="mb-1 block font-medium">
                        Card Holder Name
                      </label>

                      <input
                        type="text"
                        name="cardHolder"
                        value={paymentDetails.cardHolder}
                        onChange={handleChange}
                        placeholder="Enter card holder name"
                        required
                        className="w-full rounded-lg border p-3"
                      />
                    </div>

                    <div>
                      <label className="mb-1 block font-medium">
                        Card Number
                      </label>

                      <input
                        type="text"
                        name="cardNumber"
                        value={paymentDetails.cardNumber}
                        onChange={handleChange}
                        placeholder="1234 5678 9012 3456"
                        maxLength="19"
                        required
                        className="w-full rounded-lg border p-3"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="mb-1 block font-medium">
                          Expiry Date
                        </label>

                        <input
                          type="text"
                          name="expiryDate"
                          value={paymentDetails.expiryDate}
                          onChange={handleChange}
                          placeholder="MM/YY"
                          required
                          className="w-full rounded-lg border p-3"
                        />
                      </div>

                      <div>
                        <label className="mb-1 block font-medium">CVV</label>

                        <input
                          type="password"
                          name="cvv"
                          value={paymentDetails.cvv}
                          onChange={handleChange}
                          placeholder="CVV"
                          maxLength="4"
                          required
                          className="w-full rounded-lg border p-3"
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white hover:bg-indigo-700"
                >
                  {paymentMethod === "COD"
                    ? "Place Order"
                    : `Pay $${total.toFixed(2)}`}
                </button>
              </form>
            </>
          )}
        </section>

        {/* Order Summary */}
        <section className="rounded-xl bg-white p-5 shadow-md">
          <h2 className="mb-5 text-2xl font-bold">Order Summary</h2>

          {cart.length === 0 ? (
            <p className="text-gray-500">No items in your cart.</p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="mb-4 flex items-center gap-4 border-b pb-4"
              >
                <img
                  src={item.src}
                  alt={item.name}
                  className="h-16 w-16 rounded-lg object-cover"
                />

                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>

                  <p className="text-sm text-gray-500">
                    ${item.price} × {item.quantity}
                  </p>
                </div>

                <p className="font-bold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))
          )}

          <h3 className="mt-5 text-xl font-bold text-center">
            Total: ${total.toFixed(2)}
          </h3>
          <div className="text-center">
           <Link
            to="/"
            className="mt-5 inline-block rounded-lg bg-gray-700 px-5 py-2 text-white hover:bg-gray-800"
          >
            Go Back to Shopping
          </Link>
          </div>
          
        </section>
      </div>
    </main>
  );
}

export default Payment;
