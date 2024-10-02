import React from 'react'
import Charity from '../SVG/charity'

const CauseFormCard = (props) => {
  return (
      <div className="bg-trasnparent w-4/5 lg:w-full  cursor-pointer  hover:border-indigo-400 hover:border-2   shadow-lg rounded-lg p-6 h-full  min-h-72">
          <h2 className="text-2xl font-bold text-dark mb-4">{props.title}</h2>
          <hr className="border-t border-gray-300 mb-4" />
          <div className="flex justify-between items-center space-x-4">
              <p className="text-gray-600 text-lg w-3/4">{props.description}</p>

              <div className="w-1/4 flex items-center justify-center">
                  {props.svg}
              </div>
          </div>
      </div>
  
  )
}

export default CauseFormCard
