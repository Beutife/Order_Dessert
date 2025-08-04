import React from "react";
import datas from '../product-list-with-cart-main/data.json'
import { useState } from "react";
import SideBar from "./SideBar";
import OrderConfirmModal from "./Order";
// Import images
import waffleDesktop from '../product-list-with-cart-main/assets/images/image-waffle-desktop.jpg';
import cremeBruleeDesktop from '../product-list-with-cart-main/assets/images/image-creme-brulee-desktop.jpg';
import macaronDesktop from '../product-list-with-cart-main/assets/images/image-macaron-desktop.jpg';
import tiramisuDesktop from '../product-list-with-cart-main/assets/images/image-tiramisu-desktop.jpg';
import baklavaDesktop from '../product-list-with-cart-main/assets/images/image-baklava-desktop.jpg';
import meringueDesktop from '../product-list-with-cart-main/assets/images/image-meringue-desktop.jpg';
import cakeDesktop from '../product-list-with-cart-main/assets/images/image-cake-desktop.jpg';
import brownieDesktop from '../product-list-with-cart-main/assets/images/image-brownie-desktop.jpg';
import pannaCottaDesktop from '../product-list-with-cart-main/assets/images/image-panna-cotta-desktop.jpg';

import cart from '../product-list-with-cart-main/assets/images/icon-add-to-cart.svg'

interface Product {
    image: {
        thumbnail: string;
        mobile: string;
        tablet: string;
        desktop: string;
    };
    name: string;
    category: string;
    price: number;
    quantity: number;
}

const Cart = () => {
    const [showModal, setShowModal] = useState(false);

    const handleConfirmOrder = () => {
        setShowModal(true);
    };
    const [addCart, setAddCart] = useState<Product[]>([])

    const handleAddToCart = (product: any) => {
        setAddCart(prevCart => {
          const existingItem = prevCart.find(item => item.name === product.name);
          if(existingItem){
            return prevCart.map(item =>
              item.name === product.name  ? {...item, quantity: item.quantity + 1} : item
            );
          };
          return [...prevCart, {...product, quantity:1}];
        })
    }

    const handleincrement = (productName : string) => {
        setAddCart(prevCart => 
          prevCart.map(item =>(
            item.name === productName ? {...item, quantity: item.quantity +1} : item
          )))
    };

    const handledecrement = (productName: string) => {
        setAddCart(prevCart => 
          prevCart.map(item =>(
            item.name === productName && item.quantity > 1 ? {...item, quantity: item.quantity-1} : item
          ))
        )
    }


    const handleremove = (productName: string) => {
       setAddCart(prevCart => prevCart.filter(item => item.name !== productName))
    }

    const getImageSrc = (name: string) => {
        const imageMap: { [key: string]: string } = {
            'Waffle with Berries': waffleDesktop,
            'Vanilla Bean Crème Brûlée': cremeBruleeDesktop,
            'Macaron Mix of Five': macaronDesktop,
            'Classic Tiramisu': tiramisuDesktop,
            'Pistachio Baklava': baklavaDesktop,
            'Lemon Meringue Pie': meringueDesktop,
            'Red Velvet Cake': cakeDesktop,
            'Salted Caramel Brownie': brownieDesktop,
            'Vanilla Panna Cotta': pannaCottaDesktop
        };
        return imageMap[name] || waffleDesktop;
    };

    return (
        <div className="flex relative">
            {/* Your cart component content */}
           <div>
           <h1 className="text-3xl font-bold mb-4">Desserts</h1>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                           {
                 datas.map((item, index) => (
                    <div 
                    key={index} 
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
                  >
                    <div className="relative">
                      <img 
                        src={getImageSrc(item.name)}  
                        alt={item.name}
                        className="w-full h-48 object-cover rounded-lg mb-4 hover:scale-105 transition-transform duration-300"
                      />
                  
                                {/* Button positioned over image */}
                       <button 
                         onClick={() => handleAddToCart(item)}
                         className="absolute right-3 transform -translate-x-6 -translate-y-10 flex items-center gap-2 bg-white border rounded-full px-3 py-2 hover:bg-gray-100 transition-all duration-200 shadow-lg"
                       >
                         <img src={cart} alt="add to cart" className="w-4 h-4" />
                         <span className="text-sm font-medium">Add to cart</span>
                       </button>

                       {/**Name and price of dessert */}
                       <div className="mt-6 space-y-2">
                        <p className="text-sm text-gray-500 uppercase tracking-wide">{item.category}</p>
                        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">{item.name}</h3>
                        <p className="text-xl font-bold text-orange-400">${item.price.toFixed(2)}</p>
                       </div>
                    </div>
                  </div>
                  
                 ))
              }
           </div>
           </div>
           <SideBar 
            cartItems={addCart}
            onIncrement={handleincrement}
            onRemove={handleremove}
            onDecrement={handledecrement}
            onConfirmOrder={handleConfirmOrder}
           />
           
           {showModal && (
             <OrderConfirmModal 
               cartItems={addCart}
               onClose={() => setShowModal(false)}
             />
           )}
        </div>
    )
}
export default Cart;