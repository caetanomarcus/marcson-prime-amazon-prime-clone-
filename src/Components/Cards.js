import React from 'react'
import Styleds from '../Components/Styleds'



const Container = Styleds.Container,
Title = Styleds.Title,
SecondTitle = Styleds.SecondTitle,
TitleContainer = Styleds.TitleContainer



export default function Cards (props) {

    

    
    
    return(
        <>
        <TitleContainer>
            <Title>Prime</Title>
            <SecondTitle>{props.title}</SecondTitle>
        </TitleContainer>
         <Container>
            {props.children}
        </Container>
       </>
    )
}