import { Route, Routes } from 'react-router';
import { ListOfShows } from './components/ListOfShows';
import { SingleShow } from './components/SingleShow';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { useEffect, useState } from 'react';

function App() {
  const [shows, setShows] = useState([]);

  const fetchData = () => {
    fetch('http://api.tvmaze.com/shows')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setShows(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filterShows = (e) => {
    const filteredShows = shows.filter((show) => {
      return show.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setShows(filteredShows);
  };

  return (
    <div className="App">
      <Navbar filterFunction={filterShows} />
      <Routes>
        <Route path={'/'} element={<ListOfShows shows={shows} />} />
        <Route path={'/shows/:id'} element={<SingleShow />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
