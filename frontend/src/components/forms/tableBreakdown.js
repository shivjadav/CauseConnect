import React from 'react'

const TableBreakDown = ({costBreakDown}) => {
  return (
    <table className="w-full border border-gray-300 rounded-lg shadow-sm">
    <thead className="bg-indigo-500 text-white">
        <tr>
            <th className="py-2 px-4 text-left font-semibold">Description</th>
            <th className="py-2 px-4 text-right font-semibold">Cost (₹)</th>
        </tr>
    </thead>
    <tbody>
        {costBreakDown.map((ele,id)=>(

            <tr className="hover:bg-indigo-50">
            <td className="py-2 px-4 border-t border-gray-300">{ele.desc}</td>
            <td className="py-2 px-4 border-t border-gray-300 font-semibold text-right">{ele.cost}</td>
        </tr>
        ))}
    </tbody>
</table>
  )
}

export default TableBreakDown
