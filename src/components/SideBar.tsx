import emptyCart from '../product-list-with-cart-main/assets/images/illustration-empty-cart.svg';
import  increment from '../product-list-with-cart-main/assets/images/icon-increment-quantity.svg';
import decrease from '../product-list-with-cart-main/assets/images/icon-decrement-quantity.svg'
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
    
    const totalPrice = cartItems.reduce(
        (sum, item)=> sum + item.price * item.quantity, 0
    ) 
    return (
      <div className="w-80 bg-white p-4 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Cart <span className="text-red-600">{cartItems.length}</span></h2>
  
        <div className="space-y-4 flex flex-col items-center">
          {cartItems.length === 0 ? (
            <>
              <p className="text-gray-500">Your cart is empty</p>
              <img src={emptyCart} alt="empty cart" />
              <p className="text-gray-400 text-sm">Your added items will appear here</p>
            </>
          ) : (
            <ul className="w-full">
              {cartItems.map((item, index) => (
                <li key={index} className="flex justify-between border-b py-2">
                  <div>
                    <span>{item.name}</span>
                    <span className="block text-gray-500 text-sm">${item.price.toFixed(2)}</span>
                    <div className="flex items-center gap-2">
                      <button className="bg-orange-500 p-1 rounded" onClick={() => onDecrement(item.name)}>
                        <img src={decrease} alt="decrease" />
                      </button>
                      <span>{item.quantity}</span>
                      <button className="bg-orange-500 p-1 rounded" onClick={() => onIncrement(item.name)}>
                        <img src={increment} alt="increase" />
                      </button>
                    </div>
                  </div>
                  <button  onClick={() => onRemove(item.name)} className="text-red-500 text-sm">Remove</button>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-4 flex justify-around items-center gap-4">
            <span>Total </span>
            <span className="bg-orange-200 p-2 rounded-md">
                ${totalPrice.toFixed(2)}
            </span>
            </div>
            <button className="bg-red-800 p-4 rounded-full w-full mt-4 text-white hover:bg-red-600" onClick={onConfirmOrder}>
                Confirm Order
            </button>
        </div>
      </div>
    );
  };
  
 

export default SideBar;
