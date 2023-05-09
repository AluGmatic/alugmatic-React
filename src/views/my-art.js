import React from 'react'

import { Helmet } from 'react-helmet'

import GalleryCard21 from '../components/gallery-card21'
import './my-art.css'

const MyArt = (props) => {
  return (
    <div className="my-art-container">
      <Helmet>
        <title>MyArt - alugmatic</title>
        <meta property="og:title" content="MyArt - alugmatic" />
      </Helmet>
      <div className="my-art-gallery">
        <div className="my-art-container1">
          <div className="my-art-container2">
            <div className="my-art-container3">
              <GalleryCard21 rootClassName="rootClassName2"></GalleryCard21>
            </div>
            <div className="my-art-container4">
              <GalleryCard21
                image_src="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fGZvb2R8ZW58MHx8fHwxNjI2NDQ5NjUy&amp;ixlib=rb-1.2.1&amp;h=1000"
                rootClassName="rootClassName3"
              ></GalleryCard21>
            </div>
          </div>
          <div className="my-art-container5">
            <GalleryCard21
              image_src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxmb29kfGVufDB8fHx8MTYyNjQ0OTY1Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName"
            ></GalleryCard21>
          </div>
        </div>
        <div className="my-art-container6">
          <GalleryCard21
            image_src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE5fHxmb29kfGVufDB8fHx8MTYyNjQ0OTY1Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
            rootClassName="rootClassName4"
          ></GalleryCard21>
        </div>
      </div>
    </div>
  )
}

export default MyArt
