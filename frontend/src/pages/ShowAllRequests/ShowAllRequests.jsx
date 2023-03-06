import Request from "../NewRequestPage/Request";
import React from "react";
import styled from "styled-components";
import axios from "axios";


// const FlexContainer = styled.ul`
// display:flex;
// flex-wrap: wrap;
// flex-direction: column;
// place-content: top;
// justify-content: flex-start;
// align-content: flex start;
// `

// const ShowAllRequests = async ({requests}) => {

//   try{
//     let response = await axios.get('http://127.0.0.1:8000/api/requests/all/', ShowAllRequests)
//     console.log(response.data);
//     requests();
//   }catch(error){
//     console.log(error.response.data)
//   }


//     return (
//       <FlexContainer>
//         {requests.map(request =>  <li key = {request.id} >{request.text}</li>) }
//       </FlexContainer>
//     );
//   };

// export default ShowAllRequests;



const ShowAllRequests = (props) => {

  return (
    <body>
      <div className="table">
        {props.parentEntries.filter(entry=>
        entry.request_id.includes(props.query) || 
        entry.user.includes(props.query) || 
        entry.date_requested.includes(props.query) || 
        entry.expiration_date.includes(props.query) || 
        entry.area.includes(props.query) || 
        entry.reason_for_request.includes(props.query) || 
        entry.description_of_change.includes(props.query) || 
        entry.tasks.includes(props.query) || 
        entry.is_approved.includes(props.query) || 
        entry.is_rejected.includes(props.query))
        .map((entry) => {
          return <Request entry={entry} key = {entry.id} />;
        })}
      </div>
    </body>
  );
};

export default ShowAllRequests;