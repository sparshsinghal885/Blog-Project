import React from 'react'

function Logo({ width = '100px' }) {
  return (
    <div className={`w-[${width}]`}>
      <img src="https://cdn.pixabay.com/photo/2017/01/31/23/42/animal-2028258_1280.png" alt="logo" />
    </div>
  )
}

export default Logo