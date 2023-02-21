import React from 'react';
import ReqPresenter from './ReqPresenter';
import styled from 'styled-components';

const FlexContainer = styled.ul`
display:flex;
flex-wrap: wrap;
`

const ReqMapper = ({reqArray, changeReq}) => {
    return ( 
        <FlexContainer>
            {reqArray.map(el => <ReqPresenter key={el.id.requestId} request = {el} changeReq={changeReq}/>)}
        </FlexContainer>
    );
}
 
export default ReqMapper;