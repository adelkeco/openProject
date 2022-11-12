import React from "react";
import App from "../../App";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";




import { dataDigitalBestSeller } from "./data";


const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,/*koliko da se prikaze */
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

function Trending(){
    const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,/*koliko da se prikaze */
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

    return(
        <div className="Trending">
            <div className="Heading">
                <ul>
                    <li className="Naslov"><b>Trending Movies</b></li>
                    <li className="SeeAll" ><a href="#seeAll">See all <NavigateNextIcon/></a></li>
                </ul>
            </div>

            <div className="Slider">
                <Slider {...settings}>
                {dataDigitalBestSeller.map((item)=>(
                    <div className="Card">
                        <div className="card-top">
                            <img src={item.linkImg} alt={item.title} />
                              <h1>{item.title}</h1>
                              
                        </div>
                        <div className="card-bottom">
                              <h3>{item.price}</h3>
                              <p className="category">{item.category}</p>
                        </div>
                    </div>
                ))}
                </Slider>
                
            </div>

        </div>
    )
}

export default Trending



