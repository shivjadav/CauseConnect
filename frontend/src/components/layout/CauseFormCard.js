import React, { useState } from 'react'
import {useParams} from 'react-router-dom'
import Charity from '../SVG/charity'
import PlantationForm from '../forms/plantationForm'
import RiverCleaningForm from '../forms/riverCleaningForm'
import OldAgeForm from '../forms/OldAgeForm'
import OrphanageForm from '../forms/OrphanageForm'
const CauseFormCard = (props) => {
    const {id} = useParams();
    const [isPlantationModal, setplantationModal] = useState(false);
    const [isOldAgeModal, setisOldAgeModal] = useState(false)
    const [isOrphanageModal, setisOrphanageModal] = useState(false)
    const [isRiverCleaning, setisRiverCleaning] = useState(false)
    
    const handleClick=()=>{
        switch(props.title){
            case "Tree plantation":
                setplantationModal(true);
                break;
            case "Orphanage":
                setisOrphanageModal(true)
                break;
            case "Old age home":
                setisOldAgeModal(true);
                break;
            case "River cleaning":
                setisRiverCleaning(true);
                break;            
        }
    }
  return (
      <div onClick={handleClick} className="bg-trasnparent w-4/5 lg:w-full  cursor-pointer  hover:border-indigo-400 hover:border-2   shadow-lg rounded-lg p-6 h-full  min-h-72">
          <h2 className="text-2xl font-bold text-dark mb-4">{props.title}</h2>
          <hr className="border-t border-gray-300 mb-4" />
          <div className="flex justify-between items-center space-x-4">
              <p className="text-gray-600 text-lg w-3/4">{props.description}</p>

              <div className="w-1/4 flex items-center justify-center">
                  {props.svg}
              </div>
              {isPlantationModal && <PlantationForm closeModal={()=>{
                setTimeout(() => {
                    setplantationModal(false);
                }, 10);
                }} cause={props.title} ngoid={id} />}
              {isOrphanageModal && <OrphanageForm closeModal={()=>{
                setTimeout(() => {
                    setisOrphanageModal(false);
                }, 10);
                }} cause={props.title} ngoid={id}/>}
              {isOldAgeModal && <OldAgeForm cause={props.title} closeModal={()=>{
                setTimeout(() => {
                    setisOldAgeModal(false);
                }, 10);
                }} ngoid={id}/>}
              {isRiverCleaning && <RiverCleaningForm closeModal={()=>{
                setTimeout(() => {
                    setisRiverCleaning(false);
                }, 10);
                }} cause={props.title} ngoid={id}/>}
          </div>
      </div>
  
  )
}

export default CauseFormCard
