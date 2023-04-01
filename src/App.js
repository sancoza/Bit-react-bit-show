import { Route, Routes } from 'react-router';
import { ListOfShows } from './components/ListOfShows';
import { SingleShow } from './components/SingleShow';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={'/'} element={<ListOfShows />} />
        <Route path={'/shows/:id'} element={<SingleShow />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
