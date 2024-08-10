'use client'
import React from 'react'

const TabButton = ({active, selectTab, children}) => {
  const buttonClass = active ? 'mr-3 font-semibold hover:text-[#7c7c7c] p-2 border-b-2 border-[#ff6262]' : 'mr-3 font-semibold hover:text-[#7c7c7c] p-2 ';  
  return (
    <button onClick={selectTab}>
        
        <p className={buttonClass}>
            {children}
        </p>
    </button>
  );
}

export default TabButton