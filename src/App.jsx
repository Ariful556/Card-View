import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./pages/Header"
import Footer from './pages/Footer';
import Cards from './pages/Cards';

function App() {
 
  return (
    <div className="app">
      <Header fixed="top" />
      <Cards/>
      <Footer/>
    </div>
  )
}
export default App
