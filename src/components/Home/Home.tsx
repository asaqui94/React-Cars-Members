import React from 'react';
import { ProgressBar } from 'react-bootstrap';
// TODO: ADD BOOTSTRAP



export const Home = (props:any) =>{
    return (
        <div>
            <h1>Hello Car Fanatics!</h1>
            <h4>{props.title}</h4>
        </div>
    )
}