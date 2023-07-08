import { useState } from "react";
import { RiMenu4Fill, RiCloseLine } from "react-icons/ri";
import Link from "next/link";

const HomePage = () => {
  const [collapse, setCollapse] = useState(false);

  const toggleNav = () => {
    setCollapse((prevCollapse) => !prevCollapse);
  };

  return (
    <div className="container-xxl max-h-full">
      {/* HTML structure */}
      <header className="bg-blue-500 py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div>
            <img src="logo.png" alt="Web3Odisha" className="h-8" />
            <span className="text-white text-xl font-semibold ml-2">
              web3Odisha
            </span>
          </div>
          {/* {collapse ? (
            <button
              className="navbar-toggler lg:hidden"
              type="button"
              onClick={toggleNav}
              aria-expanded={collapse ? 'true' : 'false'}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                <RiCloseLine size={30} />
              </span>
            </button>
          ) : (
            <button
              className="navbar-toggler lg:hidden"
              type="button"
              onClick={toggleNav}
              aria-expanded={collapse ? 'true' : 'false'}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                <RiMenu4Fill size={30} />
              </span>
            </button>
          )} */}
        </div>
        <div className={`container mx-auto `}>
          <nav className="space-x-4 m-2 flex flex-row">
            <a href="../About" className="text-white hover:text-gray-200">
              About
            </a>
            <a href="../Events" className="text-white hover:text-gray-200">
              Events
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              Projects
            </a>
            <a href="../GetInvolved" className="text-white hover:text-gray-200">
              Get Involved
            </a>
          </nav>
        </div>
      </header>
      <section className="bg-gray-200 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6">
              Join the web3Odisha Community
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 mb-8">
              Discover the world of web3 and connect with like-minded
              individuals in Odisha.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="../Community"
                className="bg-blue-500 text-white hover:bg-blue-600 px-6 py-3 rounded-full"
              >
                Join Now
              </a>
              <a
                href="#"
                className="bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-100 px-6 py-3 rounded-full"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
