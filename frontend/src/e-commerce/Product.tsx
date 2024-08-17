import React from 'react';
import '../css/styles.css';

const Product = () => {
  return (
    <>
      {/* All Products */}
      <section className="section all-products" id="products">
        <div className="top container">
          <h1>All Products</h1>
          <form>
            <select>
              <option value="1">Default Sorting</option>
              <option value="2">Sort By Price</option>
              <option value="3">Sort By Popularity</option>
              <option value="4">Sort By Sale</option>
              <option value="5">Sort By Rating</option>
            </select>
            <span>
              <i className="bx bx-chevron-down"></i>
            </span>
          </form>
        </div>
        <div className="product-center container">
          <div className="product-item">
            <div className="overlay">
              <a href="productDetails.html" className="product-thumb">
                <img src="./images/product-7.jpg" alt="" />
              </a>
              <span className="discount">40%</span>
            </div>
            <div className="product-info">
              <span>MEN'S CLOTHES</span>
              <a href="productDetails.html">Concepts Solid Pink Men’s Polo</a>
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

          {/* Repeat this block for other products */}
          <div className="product-item">
            <div className="overlay">
              <a href="" className="product-thumb">
                <img src="./images/product-2.jpg" alt="" />
              </a>
              <span className="discount">40%</span>
            </div>
            <div className="product-info">
              <span>MEN'S CLOTHES</span>
              <a href="">Concepts Solid Pink Men’s Polo</a>
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

          {/* Repeat similar blocks for other products */}
        </div>
      </section>

      {/* Pagination Section */}
      <section className="pagination">
        <div className="container">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>
            <i className="bx bx-right-arrow-alt"></i>
          </span>
        </div>
      </section>
    </>
  );
};

export default Product;
