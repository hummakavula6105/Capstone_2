import React from 'react';


const Request = ({ entry }) => {
  if (entry.request === 'request') {
    return
  }

    return (
      <div>
        <form>
            <h2>{entry.request_id}</h2>
            <h3>{entry.user}</h3>
            <h4>{entry.date_requested}</h4>
            <h5>{entry.expiration_date}</h5>
            <h6>{entry.area}</h6>
            <h7>{entry.reason_for_request}</h7>
            <h8>{entry.description_of_change}</h8>
            <h9>{entry.is_approved}</h9>
            <h10>{entry.is_rejected}</h10>
          </form>
      </div>
    );
  };
  
  export default Request;