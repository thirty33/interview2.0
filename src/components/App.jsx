import React from 'react';
import '@styles/App.css';
import { useFetch } from '../hooks/useFetch';
import PeopeItem from './PeopeItem';
import Searcher from './Searcher';
import PaginationComponent from './Pagination';
import Modall from './Modal';

function App(props) {
  const { loading, response, setQueryParams, setSincronizedItems } = useFetch({
    url: '',
    method: 'GET',
  });

  console.log('render', response);

  const handlePagination = (page) => {
    console.log('page', page)
    setQueryParams({
      page
    })
    setSincronizedItems(false)
  }

  return (
    <>
      <div className="people-searcher-container">
        <Searcher setQueryParams={setQueryParams} setSincronizedItems={setSincronizedItems}/>
      </div>
      <div className="people-container">
        {loading && (
          <>
            <h4>Cargando...</h4>
          </>
        )}
        {!loading &&
          response.map((person) => <PeopeItem {...person} key={person.name} />)}
      </div>
      <div className="pagintaion-container">
        <PaginationComponent finalPages={9} handlePagination={handlePagination}/>
      </div>
      <Modall />
    </>
  );
}

export default App;
