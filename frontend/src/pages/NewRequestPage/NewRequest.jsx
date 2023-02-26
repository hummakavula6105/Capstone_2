import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import DateTimePicker from "react-datetime-picker"
import ButtonHandler from "./ButtonHandler";


const NewRequest = ({addNewRequest}) => {
  const [requestId, setRequestId] = useState("");
  const [dateRequested, setDateRequested] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [area, setArea] = useState("");
  const [reasonForRequest, setReasonForRequest] = useState("");
  const [descriptionOfChange, setDescriptionOfChange] = useState("");
  const [tasks, setTasks] = useState("");
  const [isApproved, setIsApproved] = useState("");
  const [isRejected, setIsRejected] = useState("");
  const [user, token] = useAuth();

  function handleSubmit(event) {
    event.preventDefault();
    let newRequest = {
      user_id: user.id,
      request_id: requestId,
      area: area,
      date_requested: dateRequested,
      expiration_date: expirationDate,
      reason_for_request: reasonForRequest,
      description_of_change: descriptionOfChange,
    };
    console.log(newRequest);
    addNewRequest(newRequest)
  }

    
//   const handleApprove = () => {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authoriztion': 'Bearer my-token',
//       'My-Custom-Header': 'foobar'
//     },
//     body: JSON.stringify({ title: 'Review Change Request' })
// };
// fetch('http://127.0.0.1:8000/api/requests/new/', requestOptions)
//     .then(response => response.json())
//     .then(data => setPostId(data.id));
//   }, [])};
  
//   const handleReject = () => {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authoriztion': 'Bearer my-token',
//       'My-Custom-Header': 'foobar'
//     },
//     body: JSON.stringify({ title: 'Review Change Request' })
// };
// fetch('http://127.0.0.1:8000/api/requests/new/', requestOptions)
//     .then(response => response.json())
//     .then(data => setPostId(data.id));
//   }, []
//   }
  
//   if (submitted) {
//     return <Revision
//       formData={formData}
//       handleApprove={handleApprove}
//       handleReject={handleReject}
//     />
//   } else {
//     return <Form 
//       submitting={submitting}
//       handleSubmit={handleSubmit} 
//       formData={formData}
//       setFormData={setFormData}
//     />
//   }

// ReactDOM.render(
//   <App />,
//   document.getElementById('container')
// );

  return (
    <div>
      <label className="New-Request-Label">New Request</label>
      <form onSubmit={handleSubmit} className="form-grid">
        <section className="main section">
          <div>
            <label>Date Requested</label>
            <input type="date"value={dateRequested}onChange={(event) => setDateRequested(event.target.value)} />
          </div>
          <div>
            <label>Expiration Date</label>
            <input type="date"value={expirationDate}onChange={(event) => setExpirationDate(event.target.value)} />
          </div>
          <div>
            <label>Area</label>
            <input type="text"value={area}onChange={(event) => setArea(event.target.value)} />
          </div>
          <div>
            <label>Reason for Request</label>
            <input type="text"value={reasonForRequest}onChange={(event) => setReasonForRequest(event.target.value)} />
          </div>
          <div>
            <label>Description of Change</label>
            <input type="text"value={descriptionOfChange}onChange={(event) => setDescriptionOfChange(event.target.value)} />
          </div>
          <div>
            <label>Tasks</label>
            <input type="text" value={tasks} onChange={(event) => setTasks(event.target.value)} />
          </div>
          <div>
            <ButtonHandler type="submit"className="btn btn-primary"style={{ marginTop: "1em" }}>Submit</ButtonHandler>
          </div>
        </section>
      </form>
    </div>
  );
};

export default NewRequest;
