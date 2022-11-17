import { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { GenresType } from 'types';
import GenresService from 'services/genresService';


function Selection() {
    const [genres, setGenres] = useState<GenresType[]>([]);

    useEffect(() => {
        GenresService.getGenres()
        .then((response: any) => {
            setGenres(response.data.genres as GenresType[]);
        })
        .catch((err) => {
            console.log('ERR', err)
        });
    }, []);

    return (
        <div className="Selection">
            <div className="Account">
                <div className="Slika">
                    <Avatar src="/broken-image.jpg" />
                </div>
                <div className="Name">
                    <h6>Arman Rokni</h6>
                    <p>rokni@gmail.com</p>
                </div>
            </div>

            <div className="Search">
                <input className="Search-bar" type="text"  placeholder="Search here"  />
            </div>

            <div className="Genre">
                <p>GENRE</p>
                <div className="Container">
                    {
                        genres.map((item: GenresType) => (
                            <Button key={item.id} className="DugmeKategorija" variant="contained" endIcon={<AddIcon />}>{item.name}</Button>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Selection