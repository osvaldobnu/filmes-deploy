import { Card, Button } from 'react-bootstrap';

const CardFilme = ({ filme }) => {
    return (
        <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
            <Card>
                <Card.Img 
                    variant='top'
                    src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`}
                    alt={filme.title}
                />
                <Card.Body>
                    <Card.Title className='text-truncate'> {filme.title} </Card.Title>
                    <Card.Text className='text-truncate'> {filme.overview} </Card.Text>
                    <Button variant='primary'>Saiba mais</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardFilme;