import { useState } from "react"
import {initialTravelPlan} from "../data/place.js"
import ChildPlace from "./ChildPlace.jsx";
export default function Places (){
const [places, setPlaces] = useState(initialTravelPlan)


function onHandlePlace(parentId, childId){
    const prent = places[parentId]
    
    const deleteFilter = {
        ...prent,
        childIds:  prent.childIds.filter(items=> items !== childId)
    };    
    setPlaces({
        ...places,
        [parentId]: deleteFilter
    })
}
const placeing = places[0].childIds;
  return (
    <>
        <h2>Places to visit</h2>
        <ol>
            
            {placeing.map(id => <ChildPlace key={id} id={id} placeId={places} parentId={0} onComplete={onHandlePlace} />)}
        </ol>
        
    </>
  )
}
