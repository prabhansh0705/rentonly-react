import card_image_1 from '../images/card_image_1.png';
import card_image_2 from '../images/card_image_2.png';
import card_image_3 from '../images/card_image_3.png';

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
                        <p className="card_1_description_text">RentOnly helps businesses lease commercial properties without any security deposits. From the most premium retail stores to warehouse locations in the remote outskirts of cities.
                            With RentOnly, you’ll never have to lock your working capital in a security deposit ever again.</p>
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
                        <p className="card_2_description_text">RentOnly leases all equipment/machines that a business needs to operate from a location. Our team works round the clock to procure the machines/equipment you need from any part of the world and have them installed at your business location.
                            The entire process runs smoothly & seamlessly with RentOnly by your side.</p>
                    </div>
                </div>
 
                <div className="card_3">
                        <div className="card_3_heading_container">
                            <h1 className="card_3_heading_text">Top notch construction & furnishings at 60% less upfront costs</h1>
                        </div>
                        <div className="card_3_image_container">
                            <img className="card_3_image" src={card_image_3}/>
                        </div>
                        <div className="card_3_description_container">
                            <p className="card_3_description_text">RentOnly works with the best architects and contractors in the country to get the design & build of the location done with 60% less upfront costs. 
                                <br/>We operate one of the biggest networks of the designers, vendors, service providers in the world for all your construction needs.</p>
                        </div>
                </div>

            </div>          
        </>
    )
}

export default Cards;