import React from 'react'

function Container({ children, height }) {
  return <div className={`w-full max-w-7xl mx-auto px-4 ${height}`}>
    {children}
  </div>;

}

export default Container