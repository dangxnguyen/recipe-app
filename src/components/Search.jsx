import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export const Search = () => {
    const [input, setInput] = useState('');
    const navigate = useNavigate();
    
    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/'+input)
    };

    return (
        <FormStyle onSubmit={submitHandler}>
            <div>
                <FaSearch />
                <input 
                    onChange={(e) => setInput(e.target.value)} 
                    type="text" 
                    value={input} 
                />
            </div>
        </FormStyle>
    );
}

const FormStyle = styled.form`
    margin: 0 20rem;
    
    div {
        position: relative;
    }

    input {
        width: 100%;
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border-radius: 1rem;
        outline: none;
    }

    svg {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(100%, -50%);
        color: white;
    }

    @media screen and (min-width: 920px) and (max-width: 1440px) {
        margin: 0 8rem;
    }

    @media screen and (max-width: 900px) and (min-width: 500px){
        margin: 0 5rem;
    }

    @media screen and (max-width: 450px) {
        margin: 0 2rem;
    }
`;
