import { useState, useEffect } from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import MoviesService from "services/moviesService";


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


const Trending = () => {
    const [trendingMovies, setTrendingMovies] = useState<any[]>([]);

    console.log('TES', trendingMovies)

    useEffect(() => {
      MoviesService.getTrending()
      .then((response: any) => {
        setTrendingMovies(response.data.results);
      })
      .catch((err) => {
            console.log('ERR', err)
      });
    }, []);

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
                {trendingMovies.map((item: any)=>(
                    <div key={item.id} className="Card">
                        <div className="card-top">
                            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} />
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



