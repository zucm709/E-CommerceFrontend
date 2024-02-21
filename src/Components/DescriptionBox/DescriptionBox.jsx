import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
             <div className="descriptionbox-nav-box">Descrption</div>
             <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>  
        <div className="descriptionbox-description">
            <p>An e-commerce, or electronic commerce,
                 is the buying and selling of goods and services over the internet.
                  It involves online transactions between businesses,
                   consumers, or both, conducted through websites,
                 mobile apps, or other digital platforms.
                 Online Storefronts: E-commerce platforms provide virtual storefronts where businesses can showcase
                  their products or services to potential customers. These storefronts typically include product listings,
                   descriptions, images, prices, and other relevant information
            </p>

        </div>
      
    </div>
  )
}

export default DescriptionBox
