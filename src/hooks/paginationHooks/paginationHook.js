import React, { useState } from 'react';

export default function usePagination(totalPages) {
  const [page, setPage] = useState(1);

  const PageButtons = () => (
    <>
      <button disabled={page <= 1} name='previous' onClick={() => setPage(page => page - 1)} >&lt;</button>
      <span>{`${page} / ${totalPages}`}</span>
      <button disabled={page >= totalPages} name='next' onClick={() => setPage(page => page + 1)} >&gt;</button>
    </>
  );
  
  return { 
    page,
    PageButtons
  };
}
