import React, { useState } from 'react';
// useNavigate hook is used to obtain the navigate function, which can be used to navigate to a different route 
import { useNavigate } from "react-router-dom";


import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SeacrhBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    // we prevent the default form submission behavior, which would cause the browser to refresh the page.
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`)
      
      //  after searching the term .. get searchTerm back to nill
      setSearchTerm ('');
    }
  };

  return (
    <Paper
      component='form'
      onSubmit={onhandleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        // margin : right === 5 on small devices 
        //  setting media queries with style using @mui
        mr: { sm: 5 },
      }}
    >
      <input
        className='search-bar'
        id = "search"
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton 
        type='submit' 
        sx={{ p: '10px', color: 'red' }} 
        aria-label='search'>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
export default SeacrhBar