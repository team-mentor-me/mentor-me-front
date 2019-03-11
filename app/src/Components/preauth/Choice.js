import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Btn = styled.button`
display: flex;
flex-direction: column;
padding: 15px;
margin: 2% auto;
`

function Choice(){
    return(
        <div>
            <Btn>Mentor</Btn>
            <Btn>Student</Btn>
        </div>
    )
}

export default Choice