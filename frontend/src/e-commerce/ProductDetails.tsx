import React from 'react'
import '../css/styles.css'

const ProductDetails = () => {
  return (
    <>
      {/* Product Details */}
      <section className="section product-detail">
        <div className="details container">
          <div className="left image-container">
            <div className="main">
              <img src="./images/product-8.jpg" id="zoom" alt="Product" />
            </div>
          </div>
          <div className="right">
            <span>Home/T-shirt</span>
            <h1>Boy’s T-Shirt By Handsome</h1>
            <div className="price">$50</div>
            <form>
              <div>
                <select>
                  <option value="Select Size" selected disabled>
                    Select Size
                  </option>
                  <option value="1">32</option>
                  <option value="2">42</option>
                  <option value="3">52</option>
                  <option value="4">62</option>
                </select>
                <span>
                  <i className="bx bx-chevron-down"></i>
                </span>
              </div>
            </form>
            <form className="form">
              <input type="text" placeholder="1" />
              <a href="cart.html" className="addCart">
                Add To Cart
              </a>
            </form>
            <h3>Product Detail</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              minima delectus nulla voluptates nesciunt quidem laudantium,
              quisquam voluptas facilis dicta in explicabo, laboriosam ipsam
              suscipit!
            </p>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="section featured">
        <div className="top container">
          <h1>Related Products</h1>
          <a href="#" className="view-more">
            View more
          </a>
        </div>
        <div className="product-center container">
          <div className="product-item">
            <div className="overlay">
              <a href="#" className="product-thumb">
                <img src="./images/product-5.jpg" alt="Product" />
              </a>
            </div>
            <div className="product-info">
              <span>MEN'S CLOTHES</span>
              <a href="#">Concepts Solid Pink Men’s Polo</a>
              <h4>$150</h4>
            </div>
            <ul className="icons">
              <li>
                <i className="bx bx-heart"></i>
              </li>
              <li>
                <i className="bx bx-search"></i>
              </li>
              <li>
                <i className="bx bx-cart"></i>
              </li>
            </ul>
          </div>

          {/* Repeat similar structure for other products */}

          <div className="product-item">
            <div className="overlay">
              <a href="#" className="product-thumb">
                <img src="./images/product-2.jpg" alt="Product" />
              </a>
              <span className="discount">40%</span>
            </div>
            <div className="product-info">
              <span>MEN'S CLOTHES</span>
              <a href="#">Concepts Solid Pink Men’s Polo</a>
              <h4>$150</h4>
            </div>
            <ul className="icons">
              <li>
                <i className="bx bx-heart"></i>
              </li>
              <li>
                <i className="bx bx-search"></i>
              </li>
              <li>
                <i className="bx bx-cart"></i>
              </li>
            </ul>
          </div>
          {/* Add more product items as needed */}
        </div>
      </section>
    </>
  )
}

export default ProductDetails
