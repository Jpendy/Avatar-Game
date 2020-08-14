import React, { useEffect, useState } from 'react';
import CharacterList from '../characterList/CharacterList';
import fetchCharacters from '../../services/fetchCharacters';
import usePagination from '../../hooks/paginationHooks/paginationHook';

const MainContainer = () => {
  const [characters, setCharacters] = useState([]);
  const { page, PageButtons } = usePagination(25);

  useEffect(() => {
    fetchCharacters(page)
      .then(result => setCharacters(result));
  }, [page]);

  return (
    <>
      <PageButtons />
      <CharacterList characters={characters} />
      <PageButtons />
    </>
  );
};

export default MainContainer;
