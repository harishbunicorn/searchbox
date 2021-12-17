import React from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";


function SearchBar({handleFilter, clearInput, wordEntered, filteredData, searchResults}) {
  return (
    <>
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="Search users by ID, address, nam..."
          value={wordEntered}
          onChange={handleFilter}
          onKeyDown={searchResults}
        />
        <div className="searchIcon">
          {wordEntered.length === 0 ? (
            <SearchIcon/>
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      <div className={wordEntered?"dataResult":""}>
        {
          filteredData.length==0 && (
            <p className="noUser">No User Found</p>
          )
        }
      {filteredData.length != 0 && (
        <div>
          {filteredData.map((value, key) => {
            return (
              <a className="dataItem"  target="_blank">
                <div className="info">
                <p><b>{value.pincode}</b></p>
                <p><i>{value.name}</i></p>
                <p>{value.address}</p>
                <p>{value.id}</p>
                </div>
              </a>
            );
          })}
        </div>
      )}
      </div>
    </div>
    </>
  );
}

export default SearchBar;
