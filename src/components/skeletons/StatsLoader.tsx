import React from 'react'

const StatsLoader = () => {
  return (
    <div className="py-4 rounded-lg shadow w-full  animate-pulse bg-white dark:bg-gray-900">
      <div className="p-4 space-y-4 sm:px-8">
        <div className="w-full h-4 rounded bg-gray-300 dark:bg-gray-700"></div>
        <div className="w-full h-4 rounded bg-gray-300 dark:bg-gray-700"></div>
        <div className="w-3/4 h-4 rounded bg-gray-300 dark:bg-gray-700"></div>
      </div>
    </div>
  )
}

export default StatsLoader
