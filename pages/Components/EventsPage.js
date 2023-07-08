import React from "react";

const EventsPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
      {/* Event Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Event Card 1 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold mb-2">Event Title 1</h3>
          <p className="text-gray-600 mb-2">Date: August 15, 2023</p>
          <p className="text-gray-600 mb-2">Location: City, State</p>
          <p className="text-gray-600 mb-4">
            Description: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>
          <a href="#" className="text-blue-500 hover:underline">
            Register
          </a>
        </div>
        {/* Event Card 2 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold mb-2">Event Title 2</h3>
          <p className="text-gray-600 mb-2">Date: September 1, 2023</p>
          <p className="text-gray-600 mb-2">Location: City, State</p>
          <p className="text-gray-600 mb-4">
            Description: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>
          <a href="#" className="text-blue-500 hover:underline">
            Register
          </a>
        </div>
        {/* Event Card 3 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold mb-2">Event Title 3</h3>
          <p className="text-gray-600 mb-2">Date: October 10, 2023</p>
          <p className="text-gray-600 mb-2">Location: City, State</p>
          <p className="text-gray-600 mb-4">
            Description: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>
          <a href="#" className="text-blue-500 hover:underline">
            Register
          </a>
        </div>
      </div>
      <div className="mt-8">
        <a href="#" className="text-blue-500 hover:underline">
          View All Events
        </a>
      </div>
      <hr className="my-8" />
      <h2 className="text-2xl font-bold mb-4">Past Events</h2>
      {/* Past Event Galleries */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Past Event Gallery 1 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold mb-2">Event Title 1</h3>
          <p className="text-gray-600 mb-2">Date: July 1, 2023</p>
          <p className="text-gray-600 mb-2">Location: City, State</p>
          <a href="#" className="text-blue-500 hover:underline">
            View Photos
          </a>
        </div>
        {/* Past Event Gallery 2 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold mb-2">Event Title 2</h3>
          <p className="text-gray-600 mb-2">Date: June 15, 2023</p>
          <p className="text-gray-600 mb-2">Location: City, State</p>
          <a href="#" className="text-blue-500 hover:underline">
            View Photos
          </a>
        </div>
        {/* Past Event Gallery 3 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold mb-2">Event Title 3</h3>
          <p className="text-gray-600 mb-2">Date: May 25, 2023</p>
          <p className="text-gray-600 mb-2">Location: City, State</p>
          <a href="#" className="text-blue-500 hover:underline">
            View Photos
          </a>
        </div>
      </div>
      <div className="mt-8">
        <a href="#" className="text-blue-500 hover:underline">
          View All Past Events
        </a>
      </div>
    </div>
  );
};

export default EventsPage;
