import React, { useState } from 'react';
import { BsFillCartPlusFill } from "react-icons/bs";
import Order from './Order';
export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)
  return (
    <header>
        <div>
            <span className='logo'>Auto parts Star&Co</span>
            <ul className='nav'>
              <li>Про нас</li>
              <li>Контакти</li>
              <li>Кабінет</li>
            </ul>
            
            <BsFillCartPlusFill onClick={
              () => setCartOpen(cartOpen = !cartOpen)}
               className={`shop-cart-button ${cartOpen && 'active'}`} />
               {cartOpen && (
                <div className='shop-cart'>
                  {props.orders.map(el => (
                    <Order key={el.id} item={el} />
                  ))}
                  </div>
               )}
        </div>
        <div className='presentation'>
            
        </div>

    </header>

  )
}

export function App() {
  return (
    <div className="wrapper">
      <header />
      <footer />
    </div>
  );
}
