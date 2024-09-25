import Items from './Items'
import About from './About'
import Nav from './Nav'
import Home from './Home'
import ItemDetail from './ItemDetail'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/items" exact component={Items} />
          <Route path="/items/:id" component={ItemDetail}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;