import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';


function App() {

  return (
    <>
     <NavBar />
     <ItemListContainer greetingMessage= 'Bienvenidx a nuestro prelanzamiento.'/>
    </>
  )
}

export default App
