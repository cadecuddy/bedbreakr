import React from 'react'
import { useState } from 'react';

export default function SearchBar(query) {

    const {onSearch} = query;

    const [searchText, setSearchText] = useState('');

    const handleEnterKeyPressed = (e) => {
        if (e.key === "Enter") {
            onSearch(searchText);
            setSearchText('');
        }
    }

    return (
            <div>
                <div className='search-box'>
                    <input type='text' className='search-bar' spellCheck={false} placeholder='Search player' onKeyPress={handleEnterKeyPressed} onChange={e => setSearchText(e.target.value)} value={searchText} />
                </div>
            </div>
    );
}
