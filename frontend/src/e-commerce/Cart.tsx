import React from 'react';
import product_2 from './images/product-2.jpg';
import product_3 from './images/product-3.jpg';
import product_4 from './images/product-4.jpg';
import product_5 from './images/product-5.jpg';
import product_6 from './images/product-6.jpg';

const Cart: React.FC = () => {
  return (
    <div className="container cart">
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="cart-info">
                <img src={product_2} alt="Boy’s T-Shirt" />
                <div>
                  <p>Boy’s T-Shirt</p>
                  <span>Price: $50.00</span> <br />
                  <a href="#">remove</a>
                </div>
              </div>
            </td>
            <td><input type="number" defaultValue="1" min="1" /></td>
            <td>$50.00</td>
          </tr>
          <tr>
            <td>
              <div className="cart-info">
                <img src={product_3} alt="Boy’s T-Shirt" />
                <div>
                  <p>Boy’s T-Shirt</p>
                  <span>Price: $90.00</span> <br />
                  <a href="#">remove</a>
                </div>
              </div>
            </td>
            <td><input type="number" defaultValue="1" min="1" /></td>
            <td>$90.00</td>
          </tr>
          <tr>
            <td>
              <div className="cart-info">
                <img src={product_4} alt="Boy’s T-Shirt" />
                <div>
                  <p>Boy’s T-Shirt</p>
                  <span>Price: $60.00</span> <br />
                  <a href="#">remove</a>
                </div>
              </div>
            </td>
            <td><input type="number" defaultValue="1" min="1" /></td>
            <td>$60.00</td>
          </tr>
          <tr>
            <td>
              <div className="cart-info">
                <img src={product_5} alt="Boy’s T-Shirt" />
                <div>
                  <p>Boy’s T-Shirt</p>
                  <span>Price: $60.00</span> <br />
                  <a href="#">remove</a>
                </div>
              </div>
            </td>
            <td><input type="number" defaultValue="1" min="1" /></td>
            <td>$60.00</td>
          </tr>
          <tr>
            <td>
              <div className="cart-info">
                <img src={product_6} alt="Boy’s T-Shirt" />
                <div>
                  <p>Boy’s T-Shirt</p>
                  <span>Price: $60.00</span> <br />
                  <a href="#">remove</a>
                </div>
              </div>
            </td>
            <td><input type="number" defaultValue="1" min="1" /></td>
            <td>$60.00</td>
          </tr>
        </tbody>
      </table>
      <div className="total-price">
        <table>
          <tbody>
            <tr>
              <td>Subtotal</td>
              <td>$200</td>
            </tr>
            <tr>
              <td>Tax</td>
              <td>$50</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>$250</td>
            </tr>
          </tbody>
        </table>
        <a href="#" className="checkout btn">Proceed To Checkout</a>
      </div>
    </div>
  );
};

export default Cart;
