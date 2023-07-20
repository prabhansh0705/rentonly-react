import card_image_1 from '../images/card_image_1.png';
import card_image_2 from '../images/card_image_2.png';
import card_image_3 from '../images/card_image_3.png';
import card_image_4 from '../images/card_image_4.png';

let Cards = () => {
    return(
        <>
            <div className='center_card_container'>

                <div className="card_1">
                    <div className="card_1_heading_container">
                        <h1 className="card_1_heading_text">Say goodbye to security deposits</h1>
                    </div>
                    <div className="card_1_image_container">
                        <img className="card_1_image" src={card_image_1}/>
                    </div>
                    <div className="card_1_description_container">
                        <p className="card_1_description_text">Lease commercial properties without any security deposits by partnering with RentOnly. From the most premium retail stores to warehouse locations in the remote outskirts of cities.
                            <br/>With RentOnly, you’ll never have to lock your working capital in a security deposit ever again.</p>
                    </div>
                </div>

                <div className="card_2">
                    <div className="card_2_heading_container">
                        <h1 className="card_2_heading_text">Lease all equipment/ machines for your business</h1>
                    </div>
                    <div className="card_2_image_container">
                        <img className="card_2_image" src={card_image_2}/>
                    </div>
                    <div className="card_2_description_container">
                        <p className="card_2_description_text">You can lease all equipment/machines that your business needs to operate from a location with RentOnly. 
                            <br/>Our team works round the clock to procure the machines/equipment you need from any part of the world and seamlessly have them installed at your business location.</p>
                    </div>
                </div>
 
                <div className="card_3">
                        <div className="card_3_heading_container">
                            <h1 className="card_3_heading_text">Top Notch Construction & Furnishings At 60% less upfront costs</h1>
                        </div>
                        <div className="card_3_image_container">
                            <img className="card_3_image" src={card_image_3}/>
                        </div>
                        <div className="card_3_description_container">
                            <p className="card_3_description_text">Work with the best architects and contractors in the country to get the design & build of your location done with 60% less upfront costs.
                                RentOnly operates one of the biggest networks of designers, vendors, service providers in India for all your construction needs.</p>
                        </div>
                </div>
                <div className="card_1 card_4_custom">
                        <div className="card_1_heading_container card_4_heading_container">
                            <h1 className="card_1_heading_text card_4_heading_text">Supply chain management & inventory financing</h1>
                        </div>
                        <div className="card_1_image_container">
                            <img className="card_1_image" src={card_image_4}/>
                        </div>
                        <div className="card_1_description_container">
                            <p className="card_1_description_text">RentOnly does the procurement, financing of your inventory and we provide you the best payment terms 
                                in all of India. We procure from all global destinations and bring it your doorstep in the most hassle free way imaginable.</p>
                        </div>
                </div>

            </div>          
        </>
    )
}

export default Cards;