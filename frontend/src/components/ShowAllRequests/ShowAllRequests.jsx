import Request from "../../pages/NewRequestPage/Request";
import React from "react";

const ShowAllRequests = (props) => {
  return (
    <div className="table">
      <div>
        {props.parentEntries.filter(entry=>
        entry.request_id.includes(props.query) || 
        entry.user.includes(props.query) || 
        entry.date_requested.includes(props.query) || 
        entry.expiration_date.includes(props.query) || 
        entry.area.includes(props.query) || 
        entry.reason_for_request.includes(props.query) || 
        entry.description_of_change.includes(props.query) || 
        entry.is_approved.includes(props.query) || 
        entry.is_rejected.includes(props.query))
        .map((entry) => {
        return <Request entry={entry} key = {entry.id} />;
        })}
      </div>
    </div>
  );
};

export default ShowAllRequests;