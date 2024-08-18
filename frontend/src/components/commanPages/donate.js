import React from 'react'
import ListBox from '../layout/listBox'
import NgoCard from '../layout/ngoCard'

const cities=[
    { name: 'Ahmedabad' },
    { name: 'Gandhinagar' },
    { name: 'Surat' },
    { name: 'Baroda' },
    { name: 'Rajkot' },
  ]

const Donate = () => {
  return (
    <div>
      {/* <ListBox options={cities}/> */}
      <NgoCard/>
    </div>
  )
}

export default Donate
