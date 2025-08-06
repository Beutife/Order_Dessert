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
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  
    // Handle Escape key to close modal
    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
  
    return (
      <div
        className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50"
        onKeyDown={handleKeyDown}
        tabIndex={-1}
        aria-modal="true"
        role="dialog"
      >
        <div className="bg-white p-4 sm:p-6 rounded-lg w-full max-w-sm sm:max-w-md lg:max-w-lg mx-4 sm:mx-6">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">
            Order Confirmed!
          </h2>
  
          <div className="mb-4">
            <h3 className="text-sm sm:text-base font-semibold mb-2 text-gray-700">
              Your Order:
            </h3>
            <div className="max-h-48 sm:max-h-60 overflow-y-auto pr-2">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between py-2 text-sm sm:text-base"
                >
                  <span className="line-clamp-1">{item.name} x{item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>
  
          <div className="border-t pt-4 mb-6">
            <div className="flex justify-between font-bold text-base sm:text-lg text-gray-800">
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>
  
          <button
            onClick={onClose}
            className="w-full bg-orange-500 text-white py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium hover:bg-orange-600 transition-colors duration-200"
            aria-label="Close order confirmation modal"
          >
            Close
          </button>
        </div>
      </div>
    );
  };
  
  export default OrderConfirmModal;