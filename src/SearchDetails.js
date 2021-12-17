import React from "react";

const SearchDetails = ({data})=>{
    return(
        <div>
        {data.map((value, key) => {
            return (
                <div className="info">
                <p><b>{value.pincode}</b></p>
                <p><i>{value.name}</i></p>
                <p>{value.address}</p>
                <p>{value.id}</p>
                </div>
            );
        })}
    </div>
    )
}

export default SearchDetails;
