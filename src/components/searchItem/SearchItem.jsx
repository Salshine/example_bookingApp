import React from 'react'
import './searchItem.css'

const SearchItem = () => {
  return (
    <div className='searchItem'>
        <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">Tower Street Apartments</h1>
            <span className="siDistance">500m from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">
                Studio Apartment with Air conditioning
            </span>
            <span className="siFeatures">
                Entire studio · 1 bathroom · 21m² 1 full bed
            </span>
            <span className="siCancelOp">
                Free cancellation
            </span>
            <span className="siCancelOpSubtitle">
                You can cancel later, so lock in this great price today!
            </span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excelent</span>
                <button>8.9</button>
            </div>
            <div className="siDetailText">
                <span className="siPrice">IDR. 567.113</span>
                <span className="siTaxOp">Include taxes and fees</span>
                <button className='siCheckBtn'>See availability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem