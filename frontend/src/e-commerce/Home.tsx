import React, { useEffect } from 'react';
import '../css/styles.css'
import cat_3 from '../e-commerce/images/cat3.jpg';
import cat_2 from '../e-commerce/images/cat2.jpg';
import cat_1 from '../e-commerce/images/cat1.jpg';
import product_1 from '../e-commerce/images/product-1.jpg'
import product_2 from '../e-commerce/images/product-2.jpg'
import product_3 from '../e-commerce/images/product-3.jpg'
import product_4 from '../e-commerce/images/product-4.jpg'
import product_5 from '../e-commerce/images/product-5.jpg'
import product_6 from '../e-commerce/images/product-6.jpg'
import product_7 from '../e-commerce/images/product-7.jpg'
import banner from '../e-commerce/images/banner.png'
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import hero_1 from '../e-commerce/images/hero-1.png'
import hero_2 from '../e-commerce/images/hero-2.png'

const Home = () => {
  useEffect(() => {
    const initializeGlide = () => {
      const glideElement = document.querySelector('#glide_1') as HTMLElement | null;

      if (glideElement) {
        try {
          new Glide(glideElement, {
            type: 'carousel',
            startAt: 0,
            gap: 10, // Adjust gap if needed
            hoverpause: true,
            perView: 1, // Show one slide at a time
            animationDuration: 1000, // Increase duration for slower transitions
            animationTimingFunc: 'ease', // Use 'ease' for smoother transitions
            autoplay: 3000, // Adjust autoplay interval (in milliseconds) if needed
          }).mount();
          console.log('Glide initialized successfully');
        } catch (error) {
          console.error('Error initializing Glide:', error);
        }
      } else {
        console.error('Glide element not found');
      }
    };

    // Initialize Glide.js
    initializeGlide();
  }, []);

  return (
    <>
       <div className="hero">
        <div className="glide" id="glide_1">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              <li className="glide__slide">
                <div className="center">
                  <div className="left">
                    <span>New Inspiration 2024</span>
                    <h1>NEW FISH COLLECTION!</h1>
                    <p>Trending from Betta's Fish</p>
                    <a href="#" className="hero-btn">SHOP NOW</a>
                  </div>
                  <div className="right">
                    <img className="img1" src={hero_1} alt="Hero Image 1" />
                  </div>
                </div>
              </li>
              <li className="glide__slide">
                <div className="center">
                  <div className="left">
                    <span>New Inspiration 2024</span>
                    <h1>THE PERFECT MATCH FINDING BETTA FISH!</h1>
                    <p>Trending from FISH ENTUSIAST</p>
                    <a href="#" className="hero-btn">SHOP NOW</a>
                  </div>
                  <div className="right">
                    <img className="img2" src={hero_2} alt="Hero Image 2" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Categories Section */}
      <section className="section category">
        <div className="cat-center">
          <div className="cat">
            <img src={cat_3} alt="Women's Wear" />
            <div>
              <p>WOMEN'S WEAR</p>
            </div>
          </div>
          <div className="cat">
            <img src={cat_2} alt="Accessories" />
            <div>
              <p>ACCESSORIES</p>
            </div>
          </div>
          <div className="cat">
            <img src={cat_1} alt="Men's Wear" />
            <div>
              <p>MEN'S WEAR</p>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="section new-arrival">
        <div className="title">
          <h1>NEW ARRIVALS</h1>
          <p>All the latest picked from designer of our store</p>
        </div>

        <div className="product-center">
          <div className="product-item">
            <div className="overlay">
              <a href="productDetails.html" className="product-thumb">
                <img src={product_1} alt="Product 1" />
              </a>
            </div>
            <div className="product-info">
              <span>MEN'S CLOTHES</span>
              <a href="productDetails.html">Quis Nostrud Exercitation</a>
              <h4>$700</h4>
            </div>
            <ul className="icons">
              <li><i className="bx bx-heart"></i></li>
              <li><i className="bx bx-search"></i></li>
              <li><i className="bx bx-cart"></i></li>
            </ul>
          </div>
          
          {/* Additional product items */}
          
        </div>
      </section>

      {/* Promo */}
      <section className="section banner">
        <div className="left">
          <span className="trend">Trend Design</span>
          <h1>New Collection 2021</h1>
          <p>New Arrival <span className="color">Sale 50% OFF</span> Limited Time Offer</p>
          <a href="#" className="btn btn-1">Discover Now</a>
        </div>
        <div className="right">
          <img src={banner} alt="Banner" />
        </div>
      </section>

      {/* Featured */}
      <section className="section new-arrival">
        <div className="title">
          <h1>Featured</h1>
          <p>All the latest picked from designer of our store</p>
        </div>

        <div className="product-center">
          <div className="product-item">
            <div className="overlay">
              <a href="#" className="product-thumb">
                <img src={product_7} alt="Product 7" />
              </a>
              <span className="discount">50%</span>
            </div>
            <div className="product-info">
              <span>MEN'S CLOTHES</span>
              <a href="#">Quis Nostrud Exercitation</a>
              <h4>$700</h4>
            </div>
            <ul className="icons">
              <li><i className="bx bx-heart"></i></li>
              <li><i className="bx bx-search"></i></li>
              <li><i className="bx bx-cart"></i></li>
            </ul>
          </div>
          
          {/* Additional product items */}
          
        </div>
      </section>

      {/* Contact */}
      <section className="section contact">
        <div className="row">
          <div className="col">
            <h2>EXCELLENT SUPPORT</h2>
            <p>We love our customers and they can reach us any time of day. We will be at your service 24/7</p>
            <a href="#" className="btn btn-1">Contact</a>
          </div>
          <div className="col">
            <form action="">
              <div>
                <input type="email" placeholder="Email Address" />
                <a href="#">Send</a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
