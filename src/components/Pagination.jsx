import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

function PaginationComponent({ finalPages, handlePagination }) {

  let active = 2;
  let items = [];

  for (let number = 1; number <= finalPages; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active} onClick={() => handlePagination(number)}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div>
      <Pagination>{items}</Pagination>
      <br />

      {/* <Pagination size="lg">{items}</Pagination>
      <br />

      <Pagination size="sm">{items}</Pagination> */}
    </div>
  );
}

export default PaginationComponent;
