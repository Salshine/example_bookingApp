import React, { useState } from 'react'
import './hotel.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)

 
  const photos = [
    {
      src : "https://images.pexels.com/photos/13722870/pexels-photo-13722870.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      src : "https://images.pexels.com/photos/15625006/pexels-photo-15625006.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      src : "https://images.pexels.com/photos/693895/pexels-photo-693895.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      src : "https://images.pexels.com/photos/699967/pexels-photo-699967.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      src : "https://images.pexels.com/photos/13722890/pexels-photo-13722890.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      src : "https://images.pexels.com/photos/14521681/pexels-photo-14521681.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
  ]

  const handleOpen = (i) => {
    setSlideNumber(i)
    setOpen(true)
  }

  const handleMove = (direction) =>  {
    let newSlideNumber 

    if(direction === "l"){
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber -1
    }else{
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber +1
    }

    setSlideNumber(newSlideNumber)
  }

  return (
    <div>
      <Navbar/>
      <Header type='list'/>
      <div className="hotelContainer">
        {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={()=>setOpen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={()=> handleMove("l")}/>
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={()=> handleMove("r")}/>
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">
            Reserve or Book Now !
          </button>
          <h1 className="hotelTitle">x``
            Grand Hotel
          </h1>
          <div className="hoteladdress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Elton 123 st New york</span>
          </div>
          <span className="hotelDistance">
            Excelent Location - 500m from center
          </span>
          <span className="hotelPricehighlight">
            Book a stay over IDR.144K at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">
                Stay in the heart of krakow
              </h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Sapiente beatae odio corporis aliquid voluptas perspiciatis odit temporibus! 
                Soluta nobis dolorum minus numquam amet. 
                Doloremque placeat quaerat non cupiditate accusantium nisi.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of krakow, this property has an
                excelent 
              </span>
              <h2>
                <b>IDR.945K</b> ( 9 nights ) 
              </h2>
              <button>Reserve or Book Now !</button>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Hotel