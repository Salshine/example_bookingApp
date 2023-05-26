import React from 'react'
import './propertyList.css'

const PropertyList = () => {
  return (
    <div className='pList'>
        <div className="pListItem">
            <img src="https://images.pexels.com/photos/13722870/pexels-photo-13722870.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="pListImg" />
            <div className="pListTitle">
                <h1>Hotels</h1>
                <h2>324 Hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://images.pexels.com/photos/111093/pexels-photo-111093.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="pListImg" />
            <div className="pListTitle">
                <h1>Apartments</h1>
                <h2>233 Apartments</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://images.pexels.com/photos/212185/pexels-photo-212185.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="pListImg" />
            <div className="pListTitle">
                <h1>Guest Houses</h1>
                <h2>158 Guest Houses</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://images.pexels.com/photos/14043454/pexels-photo-14043454.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="pListImg" />
            <div className="pListTitle">
                <h1>Villas</h1>
                <h2>296 Villas</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://images.pexels.com/photos/13512718/pexels-photo-13512718.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="pListImg" />
            <div className="pListTitle">
                <h1>Hostels</h1>
                <h2>255 Hostels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://images.pexels.com/photos/9739235/pexels-photo-9739235.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="pListImg" />
            <div className="pListTitle">
                <h1>Resorts</h1>
                <h2>121 Resorts</h2>
            </div>
        </div>
    </div>
  )
}

export default PropertyList