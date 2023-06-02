import React from 'react'

const Card = (props) => {
    let review = props.reviews;
    return(
        <div className="flex space-x-16">
        <div>
        <img className="w-[300px] h-[300px] rounded-md m-7" src={review.image}></img>
        </div>
<div className="ml-8 w-96 mr-4 mt-24">
<div className="text-3xl font-bold">{review.name}</div>
<div className="text-blue-600 text-lg">{review.job}</div>
<div className="">{review.text}</div>
</div>

        </div>
    )
}
export default Card;