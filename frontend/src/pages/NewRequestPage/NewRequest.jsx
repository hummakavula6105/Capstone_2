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
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    let newRequest = {
      date_requested: dateRequested,
      expiration_date: expirationDate,
      area: area,
      reason_for_request: reasonForRequest,
      description_of_change: descriptionOfChange,
      tasks: tasks,
    };

    try{
      let response = await axios.post('http://127.0.0.1:8000/api/requests/new/', newRequest, {headers:{Authorization: `Bearer ${token}`}})
      console.log(response.data);
      addNewRequest();
    }catch(error){
      console.log(error.response.data)
    }
  };

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
            <input type="text" value={area}onChange={(event) => setArea(event.target.value)} />
            <select value={value} onChange={handleChange}>
              <option value="ETM">ETM</option>
              <option value="CD6R_2pc">CD6R_2pc</option>
              <option value="P702">P702</option>
              <option value="Supermarket">Supermarket</option>
              <option value="LD71">LD71</option>
            </select>
          </div>
        <section className="main section">
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
