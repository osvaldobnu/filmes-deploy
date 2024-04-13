import './App.css';
import ListaFilmes from './components/ListaFilmes';
import { Container, Nav, Navbar } from 'react-bootstrap';
import "./styles.css"

function App() {
  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#'>Catálogo de Filmes</Navbar.Brand>
        </Container>
      </Navbar>
      <ListaFilmes />
    </>
  );
}

export default App;
