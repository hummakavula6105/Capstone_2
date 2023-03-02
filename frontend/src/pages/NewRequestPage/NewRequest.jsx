import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import ButtonHandler from "./ButtonHandler";
import axios from "axios";


const NewRequest = ({addNewRequest}) => {
  const [requestId, setRequestId] = useState("");
  const [dateRequested, setDateRequested] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [area, setArea] = useState("");
  const [reasonForRequest, setReasonForRequest] = useState("");
  const [descriptionOfChange, setDescriptionOfChange] = useState("");
  const [tasks, setTasks] = useState("");
  const [isApproved, setIsApproved] = useAuth();
  const [isRejected, setIsRejected] = useAuth();
  const [user, token] = useAuth();

  const handleSubmit = async(event) => {
    event.preventDefault();
    let newRequest = {
      user_id: user.id,
      request_id: requestId,
      date: setDateRequested,
      date: setExpirationDate,
      text1: area,
      text2: reasonForRequest,
      text3: descriptionOfChange,
      is_approved: 0,
      is_rejected: 0,
      text4: tasks,
    };
    let response = await axios.post('http://127.0.0.1:8000/api/requests/new/', newRequest, {headers:{Authorization: `Bearer ${token}`}})
    console.log(response.data);
    addNewRequest();
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
            <input type="text1" value={area}onChange={(event) => setArea(event.target.value)} />
          </div>
        <section className="main section">
          <div>
            <label>Reason for Request</label>
            <input type="text2"value={reasonForRequest}onChange={(event) => setReasonForRequest(event.target.value)} />
          </div>
          <div>
            <label>Description of Change</label>
            <input type="text3"value={descriptionOfChange}onChange={(event) => setDescriptionOfChange(event.target.value)} />
          </div>
          <div>
            <label>Tasks</label>
            <input type="text4" value={tasks} onChange={(event) => setTasks(event.target.value)} />
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
