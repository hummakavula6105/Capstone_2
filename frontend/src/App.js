// General Imports
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import useAuth from "./hooks/useAuth";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import NewRequest from "./pages/NewRequestPage/NewRequest";
import BarGraph from "./pages/GraphsPage/Bars";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import ShowAllRequests from "./pages/ShowAllRequests/ShowAllRequests";


const App = () => {
  const [requests, setRequests] = useState([]);
  const [query, setQuery] = useState("");
  const [user, token] = useAuth();
  useEffect(() => {}, [requests]);
  
  // const getRequests = async () => {
  //   let response = await axios.get(`http://127.0.0.1:8000/api/requests/all/`);
  //   console.log(response.data);
  //   setRequests(response.data);
  // }

  const addNewRequest = async() => {
    let response = await axios.post(`http://127.0.0.1:8000/api/requests/new/` , requests , {headers:{Authorization: `Bearer ${token}`}})
    console.log(response.data);
    addNewRequest();
}

async function getAllRequests(){
  let response = await axios.get('http://127.0.0.1:8000/api/requests/all/', ShowAllRequests);
  console.log(response.data);
  setRequests(response.data);
}

  return (
    <body>
        <div>
          <div>
            <Navbar />
          </div>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <HomePage />
                    <div className="flex--container">
                      <div className="show-all-request-container">
                        <ShowAllRequests requests={requests}/>
                      </div>
                    <button onClick={(e) => getAllRequests()}>See All Requests</button>
                      <div className="left-container">
                        <NewRequest addNewRequest={addNewRequest}/>
                      </div>
                    <div className="right-container">
                      {/* <BarGraph/> */}
                    </div>
                    </div>
                </PrivateRoute>
              }
            />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
          {/* <Footer /> */}
        </div>
    </body>
  );
}

export default App;
