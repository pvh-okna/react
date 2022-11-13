import React, {useState} from 'react';
import { MyInput, SearchImg } from './style';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('')
    return (
        <>
                <MyInput
                    value={searchQuery}
                    onChange={(e:any) => setSearchQuery(e.target.value)}
                    />
            <SearchImg>
                <img src={"./image/search.png"}/>
            </SearchImg>



        </>
    );
};

export default Search;