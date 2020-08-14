import React, { useState } from 'react';
import styles from './paginationHook.CSS';

export default function usePagination(totalPages) {
  const [page, setPage] = useState(1);

  function PageButtons() {
    return (
      <>
        <button disabled={page <= 1} name='previous' onClick={() => setPage(page => page - 1)} >&lt;</button>
        <span>{`${page} / ${totalPages}`}</span>
        <button disabled={page >= totalPages} name='next' onClick={() => setPage(page => page + 1)} >&gt;</button>
      </>
    );
  }
  
  return { 
    page,
    PageButtons
  };
}
