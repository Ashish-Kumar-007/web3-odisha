import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-gray-400 p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p className="mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed
        sagittis nibh, et eleifend est. Donec pharetra justo in leo posuere, nec
        convallis metus auctor.
      </p>
      <h3 className="text-xl font-semibold mb-4">Our History</h3>
      <p className="mb-6">In 20XX, web3Odisha was founded with the aim of...</p>
      <h3 className="text-xl font-semibold mb-4">Our Goals</h3>
      <ul className="list-disc pl-6 mb-6">
        <li>Goal 1: Lorem ipsum dolor sit amet</li>
        <li>Goal 2: Consectetur adipiscing elit</li>
        <li>Goal 3: Sed do eiusmod tempor incididunt</li>
      </ul>
      <h3 className="text-xl font-semibold mb-4">Our Team</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-gray-100 rounded-md">
          <h4 className="text-lg font-semibold mb-2">John Doe</h4>
          <p className="text-gray-600">Role: Developer</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-md">
          <h4 className="text-lg font-semibold mb-2">Jane Smith</h4>
          <p className="text-gray-600">Role: Designer</p>
        </div>
        {/* Add more team members as needed */}
      </div>
      <h3 className="text-xl font-semibold mb-4">Testimonials</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-gray-100 rounded-md">
          <blockquote>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              mattis sed leo vel finibus.
            </p>
            <footer className="mt-2">
              <cite className="font-semibold">John Smith</cite>
              <p className="text-gray-600">CEO, Company Name</p>
            </footer>
          </blockquote>
        </div>
        <div className="p-4 bg-gray-100 rounded-md">
          <blockquote>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              mattis sed leo vel finibus.
            </p>
            <footer className="mt-2">
              <cite className="font-semibold">Jane Doe</cite>
              <p className="text-gray-600">CTO, Company Name</p>
            </footer>
          </blockquote>
        </div>
        {/* Add more testimonials as needed */}
      </div>
      <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
      <p className="mb-2">
        For inquiries or collaborations, please reach out to:
      </p>
      <p className="text-gray-600">Email: info@web3odisha.com</p>
      <p className="text-gray-600">Phone: +1234567890</p>
    </div>
  );
};

export default AboutPage;
