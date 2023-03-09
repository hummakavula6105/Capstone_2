import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import ButtonHandler from "../NewRequestPage/ButtonHandler";
import axios from "axios";
import "./AppRejRequest.css";
import AllRequests from "../AllRequests/AllRequests";
import ShowAllRequests from "../ShowAllRequests/ShowAllRequests";


const Review = ({addReview}) => { 
    const [id, setId] = useState ([]);
    const [isApproved, setIsApproved] = useAuth();
    const [isRejected, setIsRejected] = useAuth();
    const [comments, setComments] = useState("");
    const [user, token] = useAuth();
    const [value, setValue] = useState("");
    const handleChange = (event) => {
      setValue(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        let review = {
        id: id,
        is_approved: isApproved,
        is_rejected: isRejected,
        comments: comments,
        };



        try{
        let response = await axios.put('http://127.0.0.1:8000/api/requests/approve_or_reject_request/${id}', review, {headers:{Authorization: `Bearer ${token}`}});
        console.log(response.data);
        addReview();
        }catch(error){
        console.log(error.response.data)
        }
    };

// Saving this for reference

// function Review() {
//     const [requests, setRequests] = useState([]);
//     const [reviews, setReviews] = useState([]);
//     const [isApproved, setIsApproved] = useAuth();
//     const [isRejected, setIsRejected] = useAuth();
//     const [comments, setComments] = useState("");
//     const [user, token] = useAuth();
//     const [value, setValue] = useState("");

//     const HandleSubmit = async (event) => {
//         event.preventDefault();
//         let review = {
//         is_approved: isApproved,
//         is_rejected: isRejected,
//         comments: comments,
//         };

//         let response = await axios.put('http://127.0.0.1:8000/api/requests/approve_or_reject_request/', review, {headers:{Authorization: `Bearer ${token}`}});
//         console.log(response.data);
//         setReviews(response.data);
//     }
      
//     useEffect(() => {
//     }, []);

    // useEffect(() => {
    //     async function getRequests() {
    //         let requests = await axios.get(
    //             'http://127.0.0.1:8000/api/requests/all/'
    //         );
    //         console.log(requests.data);
    //         setRequests(requests.data);
    //     }
    //     getRequests();
    // }, []);
   // Saving this for reference

    // async function getRequests() {
    //     let requests = await axios.get('http://127.0.0.1:8000/api/requests/all/')
    //     console.log(requests.data);
    //     setRequests(requests.data);
    // }

    // Saving this for reference

    // async function addReview(){
    //     let response = await axios.put('http://127.0.0.1:8000/api/requests/approve_or_reject_request/', reviews, {headers:{Authorization: `Bearer ${token}`}});
    //     console.log(response.data);
    //     setReviews(response.data);
    // }
    //     addReview();
    
   // Saving this for reference

    // const reviewCards = () => {
    //     return reviews.map(req => {
    //         return (
    //             <form onSubmit={HandleSubmit}>
    //                 <div>
    //                     <button onClick={(e) => getRequests()}>See Requests</button>
    //                     <AllRequests setRequests={setRequests}/>
    //                     <ShowAllRequests requests={requests}/>
    //                 </div>
    //                 <div key={req.id} className="Review-Card">
    //                     <div className="Review-Header">
    //                         Request #{req.id}
    //                     </div>
    //                     <div className="Review-Body">
    //                     <label>Approvers Review</label>
    //                         <p><strong>Username:</strong> {req.user.username}</p>
    //                         <p><strong>Date Requested:</strong> {req.date_requested}</p>
    //                         <p><strong>Expiration:</strong> {req.expiration_date}</p>
    //                         <p><strong>Area:</strong> {req.area}</p>
    //                         <p><strong>Reason:</strong> {req.reason_for_request}</p>
    //                         <p><strong>Description:</strong> {req.description_of_change}</p>
    //                         <input type="text" value={isApproved}onChange={(event) => setIsApproved(event.target.value)} />
    //                         <input type="text" value={isRejected}onChange={(event) => setIsRejected(event.target.value)} />
    //                         <input type="text" value={comments}/>
    //                         <label htmlFor="comments">Reason for Rejection</label>
    //                     </div>
    //                 <div>
    //                     <ButtonHandler type="submit"className="btn btn-primary"style={{ marginTop: "1em" }}>Submit</ButtonHandler>
    //                 </div>
    //                 </div>
    //             </form>
    //         );
    //     })
    // }

    // Saving this for reference

    // return (
    //     <div className="Reviews">
    //         <form>
    //             <button onClick={(e) => getRequests()}>See Requests</button>
    //             <AllRequests setRequests = {setRequests} />
    //             <ShowAllRequests requests = {requests} />
    //         </form>
    //         {review.length > 0 ? (
    //             reviewCards()
    //         ) : (
    //             <p>No new requests</p>
    //         )}
    //     </div>
    //     )

    // Saving this for reference

//     if (reviews === null) {
//         return 'No New Requests';
//     } else {
//         return (
//         <div className="Reviews">
//             {reviewCards()}        
//         </div>
//         )
//     }
// }

// const AddReview = ({ getNewRequests, requestId }) => {
//     const [comment, setComment] = useState("");
//     const [user, token] = useAuth();
//     const [isApproved, setIsApproved] = useAuth();
//     const [isRejected, setIsRejected] = useAuth();
  
//     const handleSubmit = async(event)=> {
//       event.preventDefault();
//       let newReview = {
//         user_id: user.id,
//         id: requestId,
//         is_approved: isApproved,
//         is_rejected: isRejected,
//         comment: comment,
//       };
//       let response = await axios.put(`http://127.0.0.1:8000/api/requests/approve_or_reject_request` , newReview , {headers:{Authorization: `Bearer ${token}`}})
//       console.log(response.data);
//       getNewRequests();
//     }

    return (
      <form onSubmit={handleSubmit} >
        <div className="Review-Card">
        <label className="Approvers-Review">Approvers Review</label>
          <div className="Review-Header"> Request # {id} </div>
            <div className="Review-Body">
                {/* <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Date Requested:</strong> {date_requested}</p>
                <p><strong>Expiration:</strong> {expiration_date}</p>
                <p><strong>Area:</strong> {area}</p>
                <p><strong>Reason:</strong> {reason_for_request}</p>
                <p><strong>Description:</strong> {description_of_change}</p> */}
                <label>Approve:</label>
                <input type="text" value={isApproved} onChange={(event) => setIsApproved(event.target.value)} />
                <label>Reject:</label>
                <input type="text" value={isRejected} onChange={(event) => setIsRejected(event.target.value)} />
                <label>Reason for Rejection:</label>
                <input type="text" value={comments} onChange={(event) => setComments(event.target.value)} />
            </div>
            <div>
                <ButtonHandler type="submit" className="btn btn-primary" style={{ marginTop: "1em" }}> Submit </ButtonHandler>
            </div>
        </div>
      </form>
        )
    };

export default Review;