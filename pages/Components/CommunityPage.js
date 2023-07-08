import React from 'react'

const CommunityPage = () => {
  return (
    <div className="max-w-3xl mx-auto">
  {/* Category Tabs */}
  <div className="flex mb-4">
    <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 rounded-l-md focus:outline-none">
      General
    </button>
    <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 focus:outline-none">
      Projects
    </button>
    <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 rounded-r-md focus:outline-none">
      Events
    </button>
  </div>
  {/* Search Bar */}
  <div className="mb-4">
    <input
      type="text"
      className="w-full px-4 py-2 text-sm text-gray-800 bg-gray-200 border border-gray-300 rounded-md focus:outline-none"
      placeholder="Search discussions"
    />
  </div>
  {/* Discussion List */}
  <div className="space-y-4">
    {/* Discussion Item */}
    <div className="bg-white shadow-sm rounded-md">
      <div className="px-4 py-3 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-800">
          How to get started with Web3 development?
        </h3>
        <p className="mt-1 text-sm text-gray-600">By JohnDoe</p>
      </div>
      <div className="px-4 py-3 text-sm text-gray-700">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo
          ex id libero tincidunt, ac tristique erat pharetra.
        </p>
      </div>
      <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-600 bg-gray-100">
        <div className="flex items-center space-x-2">
          <button className="flex items-center space-x-1">
            <svg
              className="w-4 h-4 text-gray-500 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14a6 6 0 1 0 0 12 6 6 0 0 0 0-12z" />
            </svg>
            <span className="text-xs">10</span>
          </button>
          <button className="flex items-center space-x-1">
            <svg
              className="w-4 h-4 text-gray-500 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M7 5h6v2H7V5zm0 4h6v2H7V9zm0 4h4v2H7v-2z" />
            </svg>
            <span className="text-xs">5</span>
          </button>
        </div>
        <p className="text-xs text-gray-500">Last updated 2 hours ago</p>
      </div>
    </div>
    {/* Add more discussion items here */}
  </div>
</div>

  )
}

export default CommunityPage