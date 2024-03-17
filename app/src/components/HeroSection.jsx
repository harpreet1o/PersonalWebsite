import React from "react";
import logo from "../assets/heroimageclearbg.png";

function HeroSection() {
  return (
    <div className="bg-black p-6 text-white">
      <div className="max-w-screen-xl mx-auto px-8 grid grid-cols-2 gap-x-24 gap-y-12 items-center">
        <div className="flex  flex-col ">
          <p className="text-blue text-2xl my-4">Welcome.</p>
          <p className="text-lg my-4">
            My name is Harpreet Singh, I am Web Developer aiming to learn full
            stack. Consistently working on new projects. As learning is a never
            ending process...
          </p>
          <div className="flex gap-2">
            <button className=" text-black font-semibold text-lg py-2 px-4 rounded-full bg-white transition duration-300 ease-in-out hover:bg-blue">
              Projects
            </button>

            <button className=" text-black font-semibold text-lg py-2 px-4 rounded-full bg-white transition duration-300 ease-in-out hover:bg-blue">
              Download CV
            </button>
          </div>
        </div>
        <div>
          <img src={logo} alt="hero image" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

{
  /* // <section class="section-hero">
//       <div class="hero">
//         <div class="hero-text-box">
//           <h1 class="heading-primary">
//             A healthy meal delivered to your door, every single day
//           </h1>
//           <p class="hero-description">
//             The smart 365-days-per-year food subscription that will make you
//             eat healthy again. Tailored to your personal tastes and
//             nutritional needs.
//           </p>
//           <a href="#" class="btn btn--full margin-right-sm"
//             >Start eating well</a
//           >
//           <a href="#" class="btn btn--outline">Learn more &darr;</a>
//           <div class="delivered-meals">
//             <div class="delivered-imgs">
//               <img src="img/customers/customer-1.jpg" alt="Customer photo" />
//               <img src="img/customers/customer-2.jpg" alt="Customer photo" />
//               <img src="img/customers/customer-3.jpg" alt="Customer photo" />
//               <img src="img/customers/customer-4.jpg" alt="Customer photo" />
//               <img src="img/customers/customer-5.jpg" alt="Customer photo" />
//               <img src="img/customers/customer-6.jpg" alt="Customer photo" />
//             </div>
//             <p class="delivered-text">
//               <span>250,000+</span> meals delivered last year!
//             </p>
//           </div>
//         </div>
//         <div class="hero-img-box">
//           <img
//             src="img/hero.png"
//             class="hero-img"
//             alt="Woman enjoying food, meals in storage container, and food bowls on a table"
//           />
//         </div>
//       </div>
//     </section>

//     <section class="section-featured">
//       <div class="container">
//         <h2 class="heading-featured-in">As featured in</h2>
//         <div class="logos">
//           <img src="img/logos/techcrunch.png" alt="Techcrunch logo" />
//           <img
//             src="img/logos/business-insider.png"
//             alt="Business Insider logo"
//           />
//           <img
//             src="img/logos/the-new-york-times.png"
//             alt="The New York Times logo"
//           />
//           <img src="img/logos/forbes.png" alt="Forbes logo" />
//           <img src="img/logos/usa-today.png" alt="USA Today logo" />
//         </div>
//       </div>
//     </section> */
}
