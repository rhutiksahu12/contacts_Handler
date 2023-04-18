import React, { useState } from 'react'


const SearchBar = ({ search, setSearch }) => {

    return (
        <div className=" mt-10 ">

            <input className="float-right px-5 mx-5 rounded-sm shadow bg-inherit text-white md:placeholder:text-white" type="text" placeholder="Search User" value={search} onChange={(e) => {
                setSearch(e.target.value);

            }} />
        </div>
    )
}

export default SearchBar