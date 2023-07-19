import './App.css';

// Images import
import Ellipse from './images/Ellipse 35.svg';
import header_image_list_0 from './images/Rectangle 120.png';
import header_image_list_1 from './images/Rectangle 121.png';
import header_image_list_2 from './images/Rectangle 122.png';
import header_image_list_3 from './images/Rectangle 123.png';
import line_3 from './images/Line 3.png';
import centerEllipse from './images/Ellipse 36.png';
import arrow_right from './images/arrow-right.png'
import center_secondary_ellipse from './images/Ellipse 37.png'

// Compoonent Import
import Cards from './components/card';
import Footer from './components/Footer';

function App() {
  return (
    <div className="body_css">
        <header className="header-css">
            <div className="header_content">

                <div className="logo">
                    <img className="logo_img" src={Ellipse} alt="logo"/>
                    <div className="logo_heading_content">
                        <p className="content_1">R</p>
                        <p className="content_2">ent</p>
                        <p className="content_3">Only</p>
                    </div>
                </div>
                <div className="subheading">
                    <div className="subheading_1">
                        <p className="subheading_1_content">Open Physical locations with</p>
                    </div>
                    <div className="subheading_2">
                        <p className="subheading_2_content">90% less upfront costs & zero hassles</p>
                    </div>
                </div>
            </div>
            <div className="header_images">
              <img className="header_image_list" src={header_image_list_0}/>
              <img className="header_image_list" src={header_image_list_1}/>
              <img className="header_image_list" src={header_image_list_2}/>
              <img className="header_image_list" src={header_image_list_3}/>
            </div>
        </header>

        <div className="center_content">
          <div className="center_heading">
            <div className="center_content_Ellipse_container">
              <img className="center_content_Ellipse" src={centerEllipse}/>
            </div>
            <p className="center_heading_text">How it works</p>
            <img className="center_content_line" src={line_3}/>
          </div>
        </div>
        <Cards/>

        <div className='explore_cards_container'>
          <div className='explore_cards_container_heading'>
            <h1 className='explore_cards_container_heading_text'>The entire process runs smoothly & seamlessly with RentOnly by your side.</h1>
          </div>
          <div className='explore_cards_container_button'>
            <p className='explore_cards_container_button_text'>Get in touch today</p>
            <img className='arrow_right_image' src={arrow_right}/>
          </div>
        </div>

        <div className='center_container_secondary_heading'>
          <div className='center_container_secondary_heading_Ellipse'>
            <img className="secondary_heading_Ellipse" src={center_secondary_ellipse} alt="logo"/>
          </div>
          <div className='center_container_secondary_heading_wrapper'>
            <h1 className='center_container_secondary_heading_text'>We take care of all these huge upfront costs & operational overhead so that you can focus on providing a great customer experience.</h1>
          </div>
          <div className='explore_cards_container_button explore_cards_container_second_button'>
            <p className='explore_cards_container_button_text'>Get in touch today</p>
            <img className='arrow_right_image' src={arrow_right}/>
          </div>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
