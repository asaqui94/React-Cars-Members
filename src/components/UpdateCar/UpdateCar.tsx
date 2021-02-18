import React from 'react';
import {useForm} from 'react-hook-form';
import {useLocation} from 'react-router-dom';
import {server_calls} from '../../api';
import {Container} from 'react-bootstrap';
import '../../styles.css';

type Inputs = {
    name:string,
    price:number,
    model:string,
    year:number
}

export const UpdateCar = () => {

    const location:any = useLocation();
    const {register,handleSubmit} = useForm();
    const onSubmit = (data:any) => {
        console.log(data,location)
        server_calls.update(location.state.car_id,data)
    }

    return(
        <Container>
            <h1>Update Your Car</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Car Name</label>
                <input type="text" name="name" id="name" placeholder="Update Your Car" ref={register}/>
                
                <label htmlFor="price">Car Price</label>
                <input type="text" name="price" id="price" placeholder="Update Your Car Price" ref={register}/>
                
                <label htmlFor="model">Car Model</label>
                <input type="text" name="model" id="model" placeholder="Update Your Car Model" ref={register}/>
               
                <label htmlFor="year">Car Year</label>
                <input type="text" name="year" id="year" placeholder="Update Your Car Year" ref={register}/>

                <button type="submit" className="button-styles">Submit Update</button>
            </form>
        </Container>
    )
}