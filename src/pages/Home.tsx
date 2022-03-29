
import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Home = (props: Props) => {
  return (
    <div className='row'>
      <h1>Trang chủ</h1>
      <div className="card col" style={{ width: '18rem', padding:'1rem', margin:'1rem' }}>
        <img src="https://shop.mixigaming.com/wp-content/uploads/sb-instagram-feed-images/268138393_125711963246796_9114059892253484825_nfull.jpg" className=" col-img-top" alt="..." />
        <div className=" col-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to="#" className="btn btn-primary">Go somewhere</Link>
        </div>
      </div>
      <div className="card col" style={{ width: '18rem', padding:'1rem', margin:'1rem' }}>
        <img src="https://shop.mixigaming.com/wp-content/uploads/sb-instagram-feed-images/268138393_125711963246796_9114059892253484825_nfull.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to="#" className="btn btn-primary">Go somewhere</Link>
        </div>
      </div>
      <div className="card col" style={{ width: '18rem', padding:'1rem', margin:'1rem' }}>
        <img src="https://shop.mixigaming.com/wp-content/uploads/sb-instagram-feed-images/268138393_125711963246796_9114059892253484825_nfull.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to="#" className="btn btn-primary">Go somewhere</Link>
        </div>
      </div>
    </div>
  )
}

export default Home