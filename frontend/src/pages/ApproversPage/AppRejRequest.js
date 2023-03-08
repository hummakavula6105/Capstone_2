import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import ButtonHandler from "../NewRequestPage/ButtonHandler";
import axios from "axios";
import "./AppRejRequest.css";
import AllRequests from "../AllRequests/AllRequests";
import ShowAllRequests from "../ShowAllRequests/ShowAllRequests";


// const Review = ({addReview}) => { 
//     const [requests, setRequests] = useState("");
//     const [isApproved, setIsApproved] = useAuth();
//     const [isRejected, setIsRejected] = useAuth();
//     const [user, token] = useAuth();
//     const [value, setValue] = useState("");
//     const handleChange = (event) => {
//       setValue(event.target.value);
//     };

//     const HandleSubmit = async (event) => {
//         event.preventDefault();
//         let review = {
//         is_approved: isApproved,
//         is_rejected: isRejected,
//         };

//         try{
//         let response = await axios.put('http://127.0.0.1:8000/api/requests/approve_or_reject_request/', review, {headers:{Authorization: `Bearer ${token}`}});
//         console.log(response.data);
//         addReview();
//         }catch(error){
//         console.log(error.response.data)
//         }
//     };


function Review() {
    const [requests, setRequests] = useState([]);
    const [review, setReview] = useState([]);
    const [isApproved, setIsApproved] = useAuth();
    const [isRejected, setIsRejected] = useAuth();
    const [comments, setComments] = useState("");
    const [user, token] = useAuth();
    const [value, setValue] = useState("");

    const HandleSubmit = async (event) => {
        event.preventDefault();
        let review = {
        is_approved: isApproved,
        is_rejected: isRejected,
        comments: comments,
        };

        let response = await axios.put('http://127.0.0.1:8000/api/requests/approve_or_reject_request/', review, {headers:{Authorization: `Bearer ${token}`}});
        console.log(response.data);
        setReview(response.data);
    }
      
    useEffect(() => {
    }, []);

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


    async function getRequests() {
        let requests = await axios.get('http://127.0.0.1:8000/api/requests/all/')
        console.log(requests.data);
        setRequests(requests.data);
    }

    async function addReview(){
        let response = await axios.put('http://127.0.0.1:8000/api/requests/approve_or_reject_request/', review, {headers:{Authorization: `Bearer ${token}`}});
        console.log(response.data);
        setReview(response.data);
    }
    
        addReview();
    

    const reviewCards = () => {
        return review.map(req => {
            return (
                <form onSubmit={HandleSubmit}>
                    <div>
                        <button onClick={(e) => getRequests()}>See Requests</button>
                        <AllRequests setRequests={setRequests}/>
                        <ShowAllRequests requests={requests}/>
                    </div>
                    <div key={req.id} className="Review-Card">
                        <div className="Review-Header">
                            Request #{req.id}
                        </div>
                        <div className="Review-Body">
                        <label>Approvers Review</label>
                            <p><strong>Username:</strong> {req.user.username}</p>
                            <p><strong>Date Requested:</strong> {req.date_requested}</p>
                            <p><strong>Expiration:</strong> {req.expiration_date}</p>
                            <p><strong>Area:</strong> {req.area}</p>
                            <p><strong>Reason:</strong> {req.reason_for_request}</p>
                            <p><strong>Description:</strong> {req.description_of_change}</p>
                            <input type="text" value={isApproved}onChange={(event) => setIsApproved(event.target.value)} />
                            <input type="text" value={isRejected}onChange={(event) => setIsRejected(event.target.value)} />
                            <input type="text" value={comments}/>
                            <label htmlFor="comments">Reason for Rejection</label>
                        </div>
                    <div>
                        <ButtonHandler type="submit"className="btn btn-primary"style={{ marginTop: "1em" }}>Submit</ButtonHandler>
                    </div>
                    </div>
                </form>
            );
        })
    }

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

    if (review === null) {
        return 'No New Requests';
    } else {
        return (
        <div className="Reviews">
            {reviewCards()}        
        </div>
        )
    }
}
export default Review;