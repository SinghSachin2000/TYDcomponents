import React from 'react'
import Card from './Card'
import { useState } from 'react';

const Info = (props) => {
   let reviews = props.reviews;
 const [index, setIndex] = useState(0);

 function lefthandler(){

  if(index - 1 < 0) {
            setIndex(reviews.length - 1);
        }
        else {
            setIndex(index - 1);
        }
 }

 
 function righthandler(){
    if(index + 1 >=reviews.length) {
        setIndex(0);
    }
    else {
        setIndex(index+1);
    }
 }
    return(
        <div className="flex justify-center mt-28">

        <div className="bg-slate-500 w-14 h-14 rounded-full p-3 mt-28 ml-10">
        <button onClick={lefthandler}>&#10232;</button>
        </div>
        
        <Card className="" reviews = {reviews[index]}></Card>
    
        <div className="bg-slate-500 w-14 h-14 rounded-full p-3 mt-28 ml-10">
        <button onClick={righthandler}>&#10233;</button>
        </div>

        </div>
    )
}
export default Info;