import React from "react";

interface Product {
  name: string;
  price: number;
  quantity: number;
}

interface OrderConfirmModalProps {
  cartItems: Product[];
  onClose: () => void;
}

const OrderConfirmModal = ({ cartItems, onClose }: OrderConfirmModalProps) => {
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  return (
    <div className="fixed inset-0 bg-grey bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold mb-4">Order Confirmed!</h2>
        
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Your Order:</h3>
          <div className="max-h-40 overflow-y-auto">
            {cartItems.map((item, index) => (
              <div key={index} className="flex justify-between py-1">
                <span>{item.name} x{item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="border-t pt-4 mb-6">
          <div className="flex justify-between font-bold text-lg">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </div>
        
        <button
          onClick={onClose}
          className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmModal;
