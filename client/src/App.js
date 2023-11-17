import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Books from './components/Books';
import Add from './components/Add';
import Update from './components/Update';
import Header from './components/Header';


function App() {
  return (
    //Configuration des routes
    <BrowserRouter> 
    <Header/>  
    <Routes>
      <Route path='/' element = {<Books/>} />
      <Route path="/add" element= {<Add/>} /> 
      <Route path="/update/:id" element= {<Update/>} /> 
      
      {/* Page incorrect renvoie à Books */}
      <Route path='*' element = {<Books/>}/>
        
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
