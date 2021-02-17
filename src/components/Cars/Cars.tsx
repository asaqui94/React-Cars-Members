import React, {useState, useEffect} from 'react';
import {useGetData} from '../../custom-hooks';

export const Cars = () => {

    let {carData, getData} = useGetData();
    console.log(carData)

    return (
        <div>
            <h1>Create Your New Car</h1>
        </div>
    )
}