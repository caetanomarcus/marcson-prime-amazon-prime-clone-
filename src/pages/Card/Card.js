import React from 'react';
import Styleds from '../../Components/Styleds';

const CardContainer = Styleds.CardContainer,
    CardTitle= Styleds.CardTitle,
    CardBody = Styleds.CardBody;



export default function Card (){

    let data = localStorage.getItem('showsInfo')
    data = JSON.parse(data)

    return (
        <CardContainer>
            <CardTitle>{data.name}</CardTitle>
            <CardBody>
                <img src={data.poster} alt={data.name}/>
                <p>{data.overview}</p>
            </CardBody>
        </CardContainer>
    )
}