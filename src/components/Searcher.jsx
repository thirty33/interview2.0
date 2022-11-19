import React, { useState, useMemo, useRef } from 'react';
import '@styles/Searcher.css';
var _ = require('lodash');

function Searcher({ setQueryParams, setSincronizedItems }) {
  const [searhValue, setSearhValue] = useState('');

  const doRequest = async (e) => {
    console.log('search param', e)

    setQueryParams({
        search: e,
        page: 1
    })

    setSincronizedItems(false)

  }

  const onChangeNumberSelect = useMemo(
    () => _.debounce(doRequest, 500),
    [searhValue]
  );

  return (
    <>
      <input
        className="searcher-input"
        type="text"
        placeholder="ingrese texto para hacer la busqueada"
        onChange={(e) => onChangeNumberSelect(e.target.value)}
      />
    </>
  );
}

export default Searcher;
