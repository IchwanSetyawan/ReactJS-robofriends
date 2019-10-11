import React from 'react';
import './SearchBox.css';

const SearchBox = ({searchField, searchChange }) =>{
    return (
        <div>         
            <input 
                className='search'
                type="search"                 
                placeholder='search robots'
                onChange={searchChange}
                />
                
        </div>
    );

}

export default SearchBox;