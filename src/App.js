import MainHome from "./components/Home/MainHome"
import SearchPage from "./components/Search/SearchPage"
import MovieInfo from "./components/Movie/MovieInfo"

import Navbar from "./components/utility/Navbar/Navbar"
import Footer from "./components/utility/Footer"
import "./components/utility/utility.styles.css"
import {BrowserRouter,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar/>
          <Route component={MainHome} path="/" exact/>
          <Route component={SearchPage} path="/search" exact/>
          <Route component={MovieInfo} path="/movie" exact/>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
