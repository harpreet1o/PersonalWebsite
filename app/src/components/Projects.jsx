import React from "react";
import project1Image from "../../img/mainPage.png";
import project2Image from "../../img/ecommerceMainpage.png";
import { FaGithub } from "react-icons/fa";

function Projects() {
  return (
    <div className="p-6 mb-40">
      <div className="px-6 bg-white text-black mb-20">
        <p className="text-xl text-blue mb-4">Projects</p>
        <p className="text-2xl ">Latest Projects---</p>
      </div>

      <div className="grid grid-cols-2 gap-x-8 gap-y-16 px-6">
        <div className="relative">
          <div
            className="px-8"
            style={{ maxHeight: "400px", overflowY: "auto" }}
          >
            <img src={project1Image} alt="project 1 image" className="w-full" />
          </div>
        </div>
        <div className="px-12">
          <h1 className="text-blue text-2xl mb-8">1. Music Player App</h1>
          <p className="text-lg mb-4">
            This is a music playing app starts with the login page where
            authentication is done by google authenticaion. Once its done the
            user is entered into the app. Here we can filter out the songs and
            listen to his favorite songs. The songs are added to the library to
            the dashboard. There you could create new artists and new albums and
            add new songs. For playing of songs external library is used
            audioplayer5 is used.
          </p>
          <div className="text-lg justify-between cursor-pointer flex items-center text-white font-semibold py-2 px-4 rounded-full bg-black transition duration-300 ease-in-out hover:bg-blue max-w-40">
            <span>Code</span>
            <FaGithub className="inline" />
          </div>
        </div>

        <div className="px-12">
          <h1 className="text-blue text-2xl mb-8">2. Ecommerce Store</h1>
          <p className="text-lg mb-4">
            The design inspiration is taken from youtube greatStack. The project
            has main page where you could check the latest arrivals which when
            you push from the admin page are shown there. Then there is a
            popular in women which is last two items stored as women. The
            application has login so if you have few checkout items they are
            going to be stored in the local storage so no need to login and
            checkout again. The men page has men clothes and vice versa.
            adminpage The admin page has two pages when to add the item and
            other to delete the items.
          </p>
          <div className="text-lg flex justify-between cursor-pointer items-center text-white font-semibold py-2 px-4 rounded-full bg-black transition duration-300 ease-in-out hover:bg-blue max-w-40">
            <span>Code </span>
            <FaGithub className="inline" />
          </div>
        </div>
        <div className="relative">
          <div
            className="px-8"
            style={{ maxHeight: "400px", overflowY: "auto" }}
          >
            <img src={project2Image} alt="project 2 image" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

{
  /* <section class="section-how" id="how">
<div class="container">
  <span class="subheading">How it works</span>
  <h2 class="heading-secondary">
    Your daily dose of health in 3 simple steps
  </h2>
</div>

<div class="container grid grid--2-cols grid--center-v">
  <!-- STEP 01 -->
  <div class="step-text-box">
    <p class="step-number">01</p>
    <h3 class="heading-tertiary">
      Tell us what you like (and what not)
    </h3>
    <p class="step-description">
      Never again waste time thinking about what to eat! Omnifood AI
      will create a 100% personalized weekly meal plan just for you. It
      makes sure you get all the nutrients and vitamins you need, no
      matter what diet you follow!
    </p>
  </div>

  <div class="step-img-box">
    <img
      src="img/app/app-screen-1.png"
      class="step-img"
      alt="iPhone app
    preferences selection screen"
    />
  </div>

  <!-- STEP 02 -->
  <div class="step-img-box">
    <img
      src="img/app/app-screen-2.png"
      class="step-img"
      alt="iPhone app
    meal approving plan screen"
    />
  </div>
  <div class="step-text-box">
    <p class="step-number">02</p>
    <h3 class="heading-tertiary">Approve your weekly meal plan</h3>
    <p class="step-description">
      Once per week, approve the meal plan generated for you by Omnifood
      AI. You can change ingredients, swap entire meals, or even add
      your own recipes.
    </p>
  </div>

  <!-- STEP 03 -->
  <div class="step-text-box">
    <p class="step-number">03</p>
    <h3 class="heading-tertiary">Receive meals at convenient time</h3>
    <p class="step-description">
      Best chefs in town will cook your selected meal every day, and we
      will deliver it to your door whenever works best for you. You can
      change delivery schedule and address daily!
    </p>
  </div>
  <div class="step-img-box">
    <img
      src="img/app/app-screen-3.png"
      class="step-img"
      alt="iPhone app
    delivery screen"
    />
  </div>
</div>
</section> */
}
