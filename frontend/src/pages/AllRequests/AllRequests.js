import React, { useEffect, useState } from "react";
import "./AllRequests.css"
import axios from "axios";

function AllRequests() {
  const [requests, setRequests] = useState(null)

  useEffect(() => {
  async function getAllRequests(){
    let response = await axios.get('http://127.0.0.1:8000/api/requests/all/');
    console.log(response.data);
    setRequests(response.data);
  }

    getAllRequests();

  
  }, [])
  


  const requestCards = () => {
    return requests.map(req => {
      return (
        <div className="Request-Card">
          <div className="Request-Header">
            Request #{req.id}
          </div>
          <div className="Request-Body">
            <p><strong>Username:</strong> {req.user.username}</p>
            <p><strong>Date Requested:</strong> {req.date_requested}</p>
            <p><strong>Expiration:</strong> {req.expiration_date}</p>
            <p><strong>Area:</strong> {req.area}</p>
            <p><strong>Reason:</strong> {req.reason_for_request}</p>
            <p><strong>Description:</strong> {req.description_of_change}</p>
            <p><strong>Status:</strong> {req.is_approved ? 'Approved' : 'Rejected'}</p>
          </div>
        </div>
      );
    })
  }

  if (requests === null) {
    return 'Loading';
  } else {
    return (
      <div className="Requests">
        {requestCards()}        
      </div>
    )
  }
}


export default AllRequests;