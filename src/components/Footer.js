import dots_footer from '../images/Dots_Footer.png';
import line_3 from '../images/Line 3.png';

let Footer = () => {
    return(
        <>
        <div className='footer'>
            <div className='footer_main_Heading_wrapper'>
                <img className='dots_footer' src={dots_footer}/>
                <div className="subheading_2 footer_main_heading_container">
                    <p className="subheading_2_content footer_main_heading_container_text">Frequently Asked Questions</p>
                    <img className="center_content_line footer_main_heading_line" src={line_3}/>
                </div>
            </div>

            <div className='footer_subheadings'>

                <div className='footer_subheadings_1'>
                    <div className='footer_subheadings_1_container'>
                        <h1 className='footer_subheadings_1_text'>What kind of businesses does RentOnly work with?</h1>
                    </div>
                    <div className='footer_subheadings_1_description_container'>
                        <p className='footer_subheadings_1_description_text'>RentOnly works across all sectors to help businesses reduce their upfront costs. From F&B, Healthcare, QSR, Wellness, Education, Robotics, Manufacturing and more.</p>
                    </div>
                </div>

                <div className='footer_subheadings_1'>
                    <div className='footer_subheadings_1_container'>
                        <h1 className='footer_subheadings_1_text'>Do you also do AMC for the equipment/machines that you help procure?</h1>
                    </div>
                    <div className='footer_subheadings_1_description_container'>
                        <p className='footer_subheadings_1_description_text'>Yes, RentOnly helps in all your servicing needs PAN India to make sure that all the equipment/machines are working smoothly for your business.</p>
                    </div>
                </div>

                <div className='footer_subheadings_1 subheading_3_custom_style'>
                    <div className='footer_subheadings_1_container'>
                        <h1 className='footer_subheadings_1_text'>Do you help in scouting locations?</h1>
                    </div>
                    <div className='footer_subheadings_1_description_container'>
                        <p className='footer_subheadings_1_description_text'>Yes, RentOnly has built a vast network of the top real-estate professionals who work with RentOnly to get you the ideal property for your business.
                            <br/>We do the running around for you, while you work on growing your business.</p>
                    </div>
                </div>

                <div className='footer_subheadings_1 subheading_4_custom_style'>
                    <div className='footer_subheadings_1_container'>
                        <h1 className='footer_subheadings_1_text footer_subheading_4_mobile_text'>How much does RentOnly charge for all this?</h1>
                    </div>
                    <div className='footer_subheadings_1_description_container'>
                        <p className='footer_subheadings_1_description_text'>Shhh, it’s secret 🤫<br/>Our pricing varies from business to business based on their individual needs. Reach out to our team at hey@rentonly.co and we can figure out a pricing plan together :)</p>
                    </div>
                </div>

            </div>

            <div className='copy_rights_container'>
                <p className='copy_rights_text'>RentOnly  |  All Rights Reserved | 2023</p>
            </div>
            </div>
        </>
    )
}
export default Footer;