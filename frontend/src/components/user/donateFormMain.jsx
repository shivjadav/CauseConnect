import React from 'react'
import CauseFormCard from '../layout/CauseFormCard'
import Input from './../layout/CauseFormCardDetails'
const donateFormMain = () => {
    return (
        <div className="items-center lg:items-start lg:space-x-8 space-y-8  mt-8 lg:mt-16 w-full lg:max-w-7xl mx-auto px-4 lg:px-0">
            <div className="flex flex-col space-y-8  ">
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-dark font-extrabold text-center lg:text-left">
                    Fill the form for the event
                </h1>
                <p className="text-lg md:text-xl text-gray-600 text-center lg:text-left">
                    Proceed for which cause you want to make the donation by filling the form.
                </p>
            </div>
            <div className="flex flex-col">
    <div className="grid grid-cols-1 mb-10 place-items-center lg:grid-cols-2 gap-8">
        {Input.map((ele,id)=>(<CauseFormCard key={id} title={ele.title} description={ele.description} svg={ele.svg}/>))}
        {/* <CauseFormCard /> */}
    </div>
</div>

        </div>
    )
}

export default donateFormMain
