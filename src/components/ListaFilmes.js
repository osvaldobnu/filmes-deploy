import axios from 'axios';
import { useEffect, useState } from 'react';
import CardFilme from './CardFilme';

const ListaFilmes = () => {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/discover/movie?api_key=614fd2a9af2c92e4ac454c744cfc723c&amp;language=en-US&amp;sort_by=popularity.desc&amp;page=1")
            .then((response) => {
                setFilmes(response.data.results);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [])

    return (
        <div className='container'>
            <div className='row'>
                {
                    filmes.map(filme => (
                        <CardFilme filme={filme} />
                    ))
                }
            </div>
        </div>
    )
}

export default ListaFilmes;