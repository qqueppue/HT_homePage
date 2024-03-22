import React from 'react';
import { Carousel } from 'react-bootstrap';
import { mainImage1, mainImage2, mainImage3 } from "../../images/index";

function Main() {
    return(
        <> 
            <Carousel fade pause={false} prevLabel={null} nextLabel={null}>
                {[mainImage1, mainImage2, mainImage3].map((item) => (
                    <Carousel.Item key={item} className='carousel_main'>
                        <img className="carousel_img" src={item}></img>
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    );
}

export default Main;