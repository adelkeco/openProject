import { useState, useEffect } from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import StarRateIcon from '@mui/icons-material/StarRate';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import MoviesService from "services/moviesService";
import TopRatedService from 'services/topRatedSerivice';


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

    const [topRatedMovies, setTopRatedMovies] = useState <any[]>([]);
    console.log('Test', topRatedMovies)

    useEffect(() => {
      TopRatedService.getTopRated()
      .then((response:any) =>{
        setTopRatedMovies(response.data.results);
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
                        <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} />
                        <div className="card-bottom">
                          <h1><b>{item.title}</b></h1>
                          <p>{item.release_date}</p>
                          <p><StarRateIcon/> {item.vote_average} rating</p>
                        </div>
                    </div>
                ))}
                </Slider>  
            </div>

            <div className="TopRated">
              <h3><b>Top rated </b><StarRateIcon/></h3>
              <div className="Slider">
                <Slider {...settings}>
                {topRatedMovies.map((item: any)=>(
                    <div key={item.id} className="Card">
                        <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} />
                        <div className="card-bottom">
                          <h1><b>{item.title}</b></h1>
                          <p>{item.release_date}</p>
                        </div>
                        <div className='card-top'>
                          <p><StarRateIcon/> <b>{item.vote_average}</b></p>
                        </div>
                    </div>
                ))}
                </Slider>  
            </div>
             
            </div>

        </div>
    )
}

export default Trending



