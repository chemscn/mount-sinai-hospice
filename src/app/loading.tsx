import React from 'react'

const loading = () => {
  return (
    <div className="flex flex-row justify-center">
    <div className="flex flex-col items-center">
        <div className="loading text-primary loading-ring w-[200px] h-[200px]"></div>
        <p>Loading...</p>
    </div>
</div>
  )
}

export default loading