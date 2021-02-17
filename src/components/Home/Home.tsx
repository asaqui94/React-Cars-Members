import React from 'react';
import { ProgressBar } from 'react-bootstrap';
// TODO: ADD BOOTSTRAP

interface Props{
    title:string;
}


export const Home = (props:Props) =>{
    return (
        <div>
            <h1>Hello Car Fanatics!</h1>
            <h4>{props.title}</h4>
        </div>
    )
}