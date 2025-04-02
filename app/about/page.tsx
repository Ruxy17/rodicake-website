import React from "react";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-pink-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-pink-800 mb-6">About Rodicake</h1>
          <p className="text-lg text-pink-700 max-w-3xl mx-auto">
            Discover the story behind our passion for creating delicious homemade cakes that bring joy to your special moments.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-3xl font-bold text-pink-800 mb-6">Our Story</h2>
              <p className="text-lg text-pink-700 mb-4">
                Rodicake Confections was born from a lifelong passion for baking and a desire to create memorable experiences through delicious cakes.
              </p>
              <p className="text-lg text-pink-700 mb-4">
                What started as a hobby, baking for family and friends, quickly grew into a beloved local business as word spread about our unique flavors and beautiful designs.
              </p>
              <p className="text-lg text-pink-700">
                Today, we continue to pour our heart and soul into every cake we create, ensuring that each one is not just a dessert, but a centerpiece that brings joy and celebration to your special moments.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="h-80 w-80 bg-pink-200 rounded-full flex items-center justify-center">
                <img src="/4.svg" alt="Rodicake Confections" className="w-64 h-64" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-pink-800 mb-12">Our Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-pink-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-pink-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,3C10.41,3 9.11,4.25 9,5.82C10.24,6.42 11.17,7.43 11.66,8.66C12.17,8.25 12.81,8 13.5,8C13.76,8 14,8.05 14.23,8.12C14.5,7.38 14.92,6.71 15.46,6.16C15.16,4.39 13.71,3 12,3M8,10C6.34,10 5,11.34 5,13C5,14.66 6.34,16 8,16C9.66,16 11,14.66 11,13C11,11.34 9.66,10 8,10M19,12C18.45,12 17.94,12.16 17.5,12.43C17.53,12.62 17.55,12.81 17.55,13C17.55,13.19 17.53,13.38 17.5,13.57C17.94,13.84 18.45,14 19,14C20.1,14 21,13.1 21,12C21,10.9 20.1,10 19,10M18,15.54C17.75,16.33 17.32,17.04 16.74,17.62C17.5,18.25 18.54,18.61 19.7,18.08C19.96,17.96 20.18,17.75 20.32,17.5C19.87,17.07 19.22,16.5 18,15.54M12,17.5C11.08,17.5 10.22,17.21 9.5,16.73C8.06,17.96 6,19 3.25,19C3.25,19 2,21 2,22H12C12,21 10.75,19 10.75,19C8,19 5.94,17.96 4.5,16.73C3.78,17.21 2.92,17.5 2,17.5C2,16.12 3.12,15 4.5,15C5.88,15 7,16.12 7,17.5C7.76,17.5 8.47,17.3 9.07,16.95C9.5,16.5 10,15.97 10.25,15.5C10.5,15.03 10.75,14 10.75,14C10.75,14 11.97,13.86 12.93,13.14C13.9,12.43 14.58,11.5 14.58,10.24C14.58,9.5 14.5,9 14.25,8.5C14.03,8.07 13.71,7.71 13.32,7.42C12.93,7.13 12.47,6.93 12,6.82C10.3,7.07 9.04,8.53 9,10.25C9.39,10.13 9.69,10.09 10,10C10.28,9.92 10.58,9.89 10.88,9.89C10.92,9.89 10.97,9.89 11,9.89C11.1,9.89 11.21,9.9 11.31,9.92C11.5,9.95 11.68,10 11.86,10.05C11.91,10.07 11.97,10.08 12.02,10.1C12.37,10.21 12.69,10.37 12.97,10.58C13.25,10.79 13.5,11.04 13.71,11.32C13.93,11.61 14.09,11.93 14.19,12.28C14.29,12.63 14.34,13 14.34,13.39C14.34,13.72 14.3,14.04 14.23,14.34C14.16,14.64 14.05,14.93 13.91,15.18C13.77,15.44 13.59,15.68 13.39,15.88C13.18,16.09 12.95,16.27 12.7,16.42C12.44,16.57 12.17,16.7 11.87,16.79C11.58,16.88 11.28,16.93 10.97,16.93C10.65,16.93 10.33,16.87 10.03,16.77C9.72,16.67 9.44,16.53 9.17,16.35C8.91,16.17 8.67,15.95 8.46,15.71C8.25,15.46 8.07,15.19 7.93,14.89C7.79,14.59 7.69,14.28 7.63,13.95C7.57,13.63 7.55,13.29 7.57,12.96C7.4,13.36 7.3,13.8 7.28,14.26C7.28,14.33 7.28,14.39 7.28,14.46C7.28,14.53 7.28,14.59 7.29,14.65C7.3,14.78 7.32,14.9 7.34,15.03C7.36,15.16 7.39,15.28 7.42,15.41C7.45,15.53 7.5,15.65 7.54,15.76C7.59,15.88 7.64,15.99 7.7,16.1C7.76,16.21 7.82,16.32 7.89,16.42C7.96,16.53 8.04,16.62 8.12,16.72C8.2,16.81 8.29,16.9 8.38,16.98C8.47,17.07 8.57,17.14 8.67,17.21C8.77,17.29 8.88,17.36 8.99,17.42C9.1,17.48 9.22,17.53 9.34,17.58C9.46,17.63 9.58,17.67 9.7,17.7C9.83,17.73 9.95,17.76 10.08,17.78C10.21,17.8 10.34,17.81 10.47,17.81C10.6,17.81 10.73,17.8 10.86,17.79C10.99,17.77 11.12,17.75 11.25,17.72C11.38,17.69 11.5,17.65 11.62,17.6C11.75,17.55 11.87,17.5 11.99,17.43C12.11,17.37 12.22,17.3 12.33,17.22C12.44,17.14 12.55,17.05 12.65,16.96C12.75,16.86 12.84,16.76 12.93,16.65C13.02,16.54 13.1,16.42 13.17,16.3C13.24,16.17 13.31,16.04 13.36,15.9C13.42,15.77 13.47,15.63 13.51,15.48C13.55,15.33 13.58,15.18 13.6,15.03C13.62,14.87 13.63,14.71 13.63,14.55C13.63,14.39 13.62,14.23 13.6,14.07C13.58,13.91 13.55,13.76 13.51,13.61C13.47,13.46 13.42,13.32 13.36,13.18C13.3,13.05 13.24,12.92 13.17,12.8C13.1,12.67 13.02,12.56 12.93,12.45C12.84,12.34 12.75,12.24 12.65,12.14C12.55,12.05 12.44,11.96 12.33,11.88C12.22,11.8 12.11,11.73 11.99,11.67C11.87,11.6 11.75,11.55 11.62,11.5C11.5,11.45 11.38,11.41 11.25,11.38C11.12,11.35 10.99,11.33 10.86,11.31C10.73,11.3 10.6,11.29 10.47,11.29C10.34,11.29 10.21,11.3 10.08,11.32C9.95,11.34 9.83,11.37 9.7,11.4C9.58,11.43 9.46,11.47 9.34,11.52C9.22,11.57 9.1,11.62 8.99,11.68C8.88,11.74 8.77,11.81 8.67,11.89C8.57,11.96 8.47,12.03 8.38,12.12C8.29,12.2 8.2,12.29 8.12,12.38C8.04,12.48 7.96,12.57 7.89,12.68C7.82,12.78 7.76,12.89 7.7,13C7.64,13.11 7.59,13.22 7.54,13.34C7.5,13.45 7.45,13.57 7.42,13.69C7.39,13.82 7.36,13.94 7.34,14.07C7.32,14.2 7.3,14.32 7.29,14.45C7.28,14.51 7.28,14.57 7.28,14.64C7.28,14.71 7.28,14.77 7.28,14.84C7.28,14.91 7.29,14.97 7.29,15.04C7.3,15.1 7.3,15.17 7.31,15.23C7.32,15.36 7.34,15.48 7.37,15.6C7.4,15.72 7.43,15.84 7.47,15.96C7.51,16.08 7.56,16.19 7.61,16.3C7.66,16.41 7.72,16.52 7.79,16.62C7.85,16.72 7.92,16.82 8,16.91C8.07,17 8.15,17.09 8.24,17.17C8.32,17.25 8.41,17.33 8.5,17.4C8.59,17.47 8.69,17.53 8.79,17.59C8.89,17.65 8.99,17.7 9.1,17.75C9.21,17.79 9.32,17.83 9.43,17.86C9.54,17.89 9.66,17.92 9.77,17.94C9.89,17.96 10,17.97 10.12,17.97C10.24,17.97 10.35,17.97 10.47,17.96C10.58,17.95 10.7,17.93 10.81,17.91C10.92,17.89 11.03,17.86 11.14,17.82C11.25,17.79 11.36,17.74 11.46,17.69C11.57,17.64 11.67,17.59 11.77,17.52C11.87,17.46 11.96,17.39 12.05,17.31C12.14,17.24 12.23,17.16 12.31,17.07C12.39,16.98 12.47,16.89 12.54,16.79C12.61,16.69 12.67,16.59 12.73,16.48C12.79,16.37 12.84,16.26 12.89,16.14C12.93,16.03 12.97,15.91 13,15.79C13.03,15.67 13.06,15.54 13.08,15.42C13.1,15.29 13.11,15.16 13.11,15.03C13.11,14.9 13.1,14.77 13.09,14.64C13.07,14.51 13.05,14.39 13.02,14.26C12.99,14.14 12.95,14.02 12.91,13.9C12.87,13.78 12.82,13.67 12.77,13.55C12.71,13.44 12.65,13.33 12.58,13.23C12.52,13.12 12.44,13.02 12.36,12.93C12.28,12.83 12.2,12.74 12.11,12.66C12.02,12.57 11.92,12.49 11.82,12.42C11.72,12.35 11.62,12.28 11.51,12.22C11.4,12.16 11.29,12.11 11.17,12.07C11.06,12.02 10.94,11.99 10.82,11.96C10.7,11.93 10.58,11.91 10.46,11.89C10.34,11.88 10.22,11.87 10.09,11.87C9.97,11.87 9.85,11.88 9.73,11.89C9.61,11.91 9.49,11.93 9.37,11.96C9.25,11.99 9.14,12.02 9.02,12.07C8.91,12.11 8.8,12.16 8.69,12.22C8.58,12.28 8.48,12.35 8.38,12.42C8.28,12.49 8.18,12.57 8.09,12.66C8,12.74 7.92,12.83 7.84,12.93C7.76,13.02 7.69,13.12 7.62,13.23C7.56,13.33 7.5,13.44 7.44,13.55C7.39,13.67 7.34,13.78 7.3,13.9C7.26,14.02 7.22,14.14 7.19,14.26C7.16,14.39 7.14,14.51 7.13,14.64C7.11,14.77 7.11,14.9 7.11,15.03C7.11,15.16 7.11,15.29 7.13,15.42C7.14,15.54 7.17,15.67 7.2,15.79C7.23,15.91 7.27,16.03 7.32,16.14C7.36,16.26 7.42,16.37 7.48,16.48C7.54,16.59 7.6,16.69 7.67,16.79C7.74,16.89 7.82,16.98 7.9,17.07C7.98,17.16 8.07,17.24 8.16,17.31C8.25,17.39 8.34,17.46 8.44,17.52C8.54,17.59 8.64,17.64 8.75,17.69C8.85,17.74 8.96,17.79 9.07,17.82C9.18,17.86 9.29,17.89 9.4,17.91C9.51,17.93 9.63,17.95 9.74,17.96C9.86,17.97 9.97,17.97 10.09,17.97C10.21,17.97 10.32,17.96 10.44,17.94C10.55,17.92 10.67,17.89 10.78,17.86C10.89,17.83 11,17.79 11.11,17.75C11.22,17.7 11.32,17.65 11.42,17.59C11.52,17.53 11.62,17.47 11.71,17.4C11.8,17.33 11.89,17.25 11.97,17.17C12.06,17.09 12.14,17 12.21,16.91C12.29,16.82 12.36,16.72 12.42,16.62C12.49,16.52 12.55,16.41 12.6,16.3C12.65,16.19 12.7,16.08 12.74,15.96C12.78,15.84 12.81,15.72 12.84,15.6C12.87,15.48 12.89,15.36 12.9,15.23C12.91,15.17 12.91,15.1 12.92,15.04C12.92,14.97 12.93,14.91 12.93,14.84C12.93,14.77 12.93,14.71 12.93,14.64C12.93,14.57 12.92,14.51 12.92,14.45C12.91,14.32 12.89,14.2 12.87,14.07C12.85,13.94 12.82,13.82 12.79,13.69C12.76,13.57 12.71,13.45 12.67,13.34C12.62,13.22 12.57,13.11 12.51,13C12.45,12.89 12.39,12.78 12.32,12.68C12.25,12.57 12.17,12.48 12.09,12.38C12.01,12.29 11.92,12.2 11.83,12.12C11.74,12.03 11.64,11.96 11.54,11.89C11.44,11.81 11.33,11.74 11.22,11.68C11.11,11.62 10.99,11.57 10.87,11.52C10.75,11.47 10.63,11.43 10.51,11.4C10.38,11.37 10.26,11.34 10.13,11.32C10,11.3 9.87,11.29 9.74,11.29C9.61,11.29 9.48,11.3 9.35,11.31C9.22,11.33 9.09,11.35 8.96,11.38C8.83,11.41 8.71,11.45 8.59,11.5C8.46,11.55 8.34,11.6 8.22,11.67C8.1,11.73 7.99,11.8 7.88,11.88C7.77,11.96 7.66,12.05 7.56,12.14C7.46,12.24 7.37,12.34 7.28,12.45C7.19,12.56 7.11,12.67 7.04,12.8C6.97,12.92 6.91,13.05 6.85,13.18C6.79,13.32 6.74,13.46 6.7,13.61C6.66,13.76 6.63,13.91 6.61,14.07C6.59,14.23 6.58,14.39 6.58,14.55C6.58,14.71 6.59,14.87 6.61,15.03C6.63,15.18 6.66,15.33 6.7,15.48C6.74,15.63 6.79,15.77 6.85,15.9C6.9,16.04 6.97,16.17 7.04,16.3C7.11,16.42 7.19,16.54 7.28,16.65C7.37,16.76 7.46,16.86 7.56,16.96C7.66,17.05 7.77,17.14 7.88,17.22C7.99,17.3 8.1,17.37 8.22,17.43C8.34,17.5 8.46,17.55 8.59,17.6C8.71,17.65 8.83,17.69 8.96,17.72C9.09,17.75 9.22,17.77 9.35,17.79C9.48,17.8 9.61,17.81 9.74,17.81C9.87,17.81 10,17.8 10.13,17.78C10.26,17.76 10.38,17.73 10.51,17.7C10.63,17.67 10.75,17.63 10.87,17.58C10.99,17.53 11.11,17.48 11.22,17.42C11.33,17.36 11.44,17.29 11.54,17.21C11.64,17.14 11.74,17.07 11.83,16.98C11.92,16.9 12.01,16.81 12.09,16.72C12.17,16.62 12.25,16.53 12.32,16.42C12.39,16.32 12.45,16.21 12.51,16.1C12.57,15.99 12.62,15.88 12.67,15.76C12.71,15.65 12.76,15.53 12.79,15.41C12.82,15.28 12.85,15.16 12.87,15.03C12.89,14.9 12.91,14.78 12.92,14.65C12.93,14.59 12.93,14.53 12.93,14.46C12.93,14.39 12.93,14.33 12.93,14.26C12.91,13.8 12.81,13.36 12.64,12.96C12.66,13.29 12.64,13.63 12.58,13.95C12.52,14.28 12.42,14.59 12.28,14.89C12.14,15.19 11.96,15.46 11.75,15.71C11.54,15.95 11.3,16.17 11.04,16.35C10.77,16.53 10.49,16.67 10.18,16.77C9.88,16.87 9.56,16.93 9.24,16.93C8.93,16.93 8.63,16.88 8.34,16.79C8.04,16.7 7.77,16.57 7.51,16.42C7.26,16.27 7.03,16.09 6.82,15.88C6.62,15.68 6.44,15.44 6.3,15.18C6.16,14.93 6.05,14.64 5.98,14.34C5.91,14.04 5.87,13.72 5.87,13.39C5.87,13 5.92,12.63 6.02,12.28C6.12,11.93 6.28,11.61 6.5,11.32C6.71,11.04 6.96,10.79 7.24,10.58C7.52,10.37 7.84,10.21 8.19,10.1C8.24,10.08 8.3,10.07 8.35,10.05C8.53,10 8.71,9.95 8.9,9.92C9,9.9 9.11,9.89 9.21,9.89C9.24,9.89 9.29,9.89 9.33,9.89C9.63,9.89 9.93,9.92 10.21,10C10.52,10.09 10.82,10.13 11.21,10.25C11.17,8.53 9.91,7.07 8.21,6.82C7.74,6.93 7.28,7.13 6.89,7.42C6.5,7.71 6.18,8.07 5.96,8.5C5.71,9 5.63,9.5 5.63,10.24C5.63,11.5 6.31,12.43 7.28,13.14C8.24,13.86 9.46,14 9.46,14C9.46,14 9.71,15.03 9.96,15.5C10.21,15.97 10.71,16.5 11.14,16.95C11.74,17.3 12.45,17.5 13.21,17.5C13.21,16.12 14.33,15 15.71,15C17.09,15 18.21,16.12 18.21,17.5C17.29,17.5 16.43,17.21 15.71,16.73C14.27,17.96 12.21,19 9.46,19C9.46,19 8.21,21 8.21,22H18.21C18.21,21 16.96,19 16.96,19C14.21,19 12.15,17.96 10.71,16.73C9.99,17.21 9.13,17.5 8.21,17.5Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-pink-800 mb-4">Quality Ingredients</h3>
              <p className="text-pink-700">
                We believe that exceptional cakes start with exceptional ingredients. We source the finest quality ingredients, prioritizing local and organic options whenever possible.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-pink-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-pink-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-pink-800 mb-4">Made with Love</h3>
              <p className="text-pink-700">
                Every cake we create is made with passion and attention to detail. We pour our heart into each creation, ensuring that every bite brings joy to your celebration.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-pink-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-pink-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M16.59,7.58L10,14.17L7.41,11.59L6,13L10,17L18,9L16.59,7.58Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-pink-800 mb-4">Customer Satisfaction</h3>
              <p className="text-pink-700">
                Your satisfaction is our priority. We work closely with each client to understand their vision and deliver a cake that exceeds expectations in both taste and appearance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Baker Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-pink-800 mb-12">Meet the Baker</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-10 md:mb-0">
              <div className="h-64 w-64 bg-pink-200 rounded-full mx-auto flex items-center justify-center">
                <svg className="w-32 h-32 text-pink-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
                </svg>
              </div>
            </div>
            <div className="md:w-2/3 md:pl-10">
              <h3 className="text-2xl font-bold text-pink-800 mb-4">Rodi, Founder & Head Baker</h3>
              <p className="text-lg text-pink-700 mb-4">
                With over 10 years of baking experience, Rodi has turned a lifelong passion into a thriving business. What started as creating treats for family gatherings has evolved into Rodicake Confections.
              </p>
              <p className="text-lg text-pink-700 mb-4">
                Trained in both traditional and modern baking techniques, Rodi brings creativity and precision to every cake. Specializing in unique flavor combinations and artistic designs, each creation is a perfect blend of taste and visual appeal.
              </p>
              <p className="text
(Content truncated due to size limit. Use line ranges to read in chunks)