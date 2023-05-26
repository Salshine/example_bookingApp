import React from 'react'
import './featured.css'

const Featured = () => {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <img className='featuredImg' src="https://images.unsplash.com/photo-1546484488-2a1430996887?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" />
        <div className="featuredTitle">
          <h1>Bali</h1>
          <h2>110 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img className='featuredImg' src="https://images.unsplash.com/photo-1605752660759-2db7b7de8fa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
        <div className="featuredTitle">
          <h1>Lombok</h1>
          <h2>23 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img className='featuredImg' src="https://images.unsplash.com/photo-1556492721-d9b051557498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
        <div className="featuredTitle">
          <h1>Bandung</h1>
          <h2>12 properties</h2>
        </div>
      </div>
    </div>
  )
}

export default Featured