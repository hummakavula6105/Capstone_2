import React from 'react';
import styled from "styled-components";

const Panel = styled.li`
width: 300px;
padding: 1rem;
display: grid;
place-content: center;
box-shadow: 2px 3px 8px -2px rgba(0, 0, 0, 0.253);
margin: 1rem;
border-radius: 3px;
font-size: 13px
`

const ReqPresenter = ({request, changeRequest}) => {
    return ( 
        <Panel>
            <button onClick={changeRequest}>
                <h2 id={request.id.requestId}>{request.id}</h2>
            </button>
        </Panel>
     );
}
 
export default ReqPresenter;