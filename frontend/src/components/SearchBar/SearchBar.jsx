import React from 'react';

const SearchBar = ({query, setQuery}) => {

    return (
        <form className = 'form-grid'>
            <div>
                <input
                    type = 'text'
                    value={query}
                    placeholder='Search'
                    onChange={event => setQuery(event.target.value)} />
            </div>
        </form>
    );
};

export default SearchBar;