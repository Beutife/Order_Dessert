import emptyCart from '../product-list-with-cart-main/assets/images/illustration-empty-cart.svg';
import increment from '../product-list-with-cart-main/assets/images/icon-increment-quantity.svg';
import decrease from '../product-list-with-cart-main/assets/images/icon-decrement-quantity.svg';

interface Product {
  name: string;
  price: number;
  quantity: number;
}

interface SideBarProps {
  cartItems: Product[];
  onIncrement: (name: string) => void;
  onDecrement: (name: string) => void;
  onRemove: (name: string) => void;
  onConfirmOrder: () => void;
}

const SideBar = ({ cartItems, onIncrement, onDecrement, onRemove, onConfirmOrder }: SideBarProps) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="w-full md:w-80 bg-white p-4 sm:p-6 rounded-xl shadow-lg mt-6 md:mt-0 md:ml-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">
        Cart <span className="text-red-600">({cartItems.length})</span>
      </h2>

      <div className="space-y-4 flex flex-col items-center">
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center">
            <img
              src={emptyCart}
              alt="Empty cart"
              className="w-24 h-24 sm:w-32 sm:h-32 mb-4"
            />
            <p className="text-gray-500 text-sm sm:text-base">Your cart is empty</p>
            <p className="text-gray-400 text-xs sm:text-sm mt-2">Your added items will appear here</p>
          </div>
        ) : (
          <ul className="w-full space-y-3">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-start border-b py-3"
              >
                <div className="flex-1">
                  <span className="text-sm sm:text-base font-medium text-gray-800 line-clamp-1">
                    {item.name}
                  </span>
                  <span className="block text-gray-500 text-xs sm:text-sm">
                    ${item.price.toFixed(2)}
                  </span>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => onDecrement(item.name)}
                      aria-label={`Decrease quantity of ${item.name}`}
                      className="bg-orange-500 p-1.5 sm:p-2 rounded-full hover:bg-orange-600 transition-colors duration-200"
                    >
                      <img src={decrease} alt="Decrease quantity" className="w-4 h-4" />
                    </button>
                    <span className="text-sm sm:text-base font-medium">{item.quantity}</span>
                    <button
                      onClick={() => onIncrement(item.name)}
                      aria-label={`Increase quantity of ${item.name}`}
                      className="bg-orange-500 p-1.5 sm:p-2 rounded-full hover:bg-orange-600 transition-colors duration-200"
                    >
                      <img src={increment} alt="Increase quantity" className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => onRemove(item.name)}
                  aria-label={`Remove ${item.name} from cart`}
                  className="text-red-500 text-xs sm:text-sm hover:text-red-700 transition-colors duration-200 ml-2"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-6 w-full flex justify-between items-center">
          <span className="text-sm sm:text-base font-medium text-gray-800">Total</span>
          <span className="bg-orange-100 text-orange-800 px-3 py-1.5 rounded-md text-sm sm:text-base font-bold">
            ${totalPrice.toFixed(2)}
          </span>
        </div>
        <button
          onClick={onConfirmOrder}
          className="bg-red-800 w-full mt-4 py-3 rounded-full text-white text-sm sm:text-base font-medium hover:bg-red-600 transition-colors duration-200"
          aria-label="Confirm order"
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default SideBar;