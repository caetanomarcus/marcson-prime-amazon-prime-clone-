import styled from "styled-components"

const Styleds = {
    Header : styled.section `
        height: 25vw;
`,
    TopHeader: styled.div `
        width: 100%;
        height: 6vw;
        display: flex;
        justify-content: space-evenly;
        margin-inline: auto;
        position: fixed;
        top:0;
        left: 0;
        z-index: 10;
        background: #1A242F;

`,

    HeaderContainersMenu : styled.div `
        display: flex;
        width: 30%;
        justify-content: space-around;
        align-items: center; 
        margin-left: -5vw;
`,

    HeaderContainersSearcher : styled.div `
        width: 45%;
        display: flex;
        align-items: center;
        justify-content: flex-end;

`,

    BackHeader:styled.div `
        height: 80%;
        margin-top: 5.5vw; 

`,

    MarcPrime : styled.h1 `
        font-size: 1rem;
       
`,

    Menu: styled.ul `
        width: 65%;
        display: flex;
        list-style: nome;
        align-items: center;
        justify-content: space-evenly;
        color: #c4bdbc;
        font-weight: bold; 
`,

    ItemsMenu : styled.li `
        &:hover {
        color: #fff;
        
        }
`,

    LabelForSeacher : styled.label `
    border: #c4bdbc solid 1px;
    display: flex;
    align-items: center; 

    &:hover{
        border: #fff solid 1px;
        cursor: pointer;
    }
  
`,

    Seacher : styled.input `
        width: 200px;
        height: 35px;
        outline: none;
        border-style: none;
        background: #1A242F;
        font-size: 1.1rem;
        color: #fff;

        &::placeholder{
            color: #fff;
        
        }

`,

    SearcherImg : styled.img `
    width: 25px;
    margin: 3px;
`,

    Container : styled.div `
        display: flex;
        max-width: 100vw;
        flex-wrap: wrap;
        justify-content: center;
        max-width: 100vw;
       
        min-height: 100vh;
`,

    Img : styled.img `
        width: 200px;
`,

    ImgBg : styled.div `
        background-image: url(${props => props.background}) ;
        background-size: 100%; 
        width: 200px;
        height: 300px;
        margin: 1vw;
        cursor: pointer;
        border-radius: 3px;

        &:hover ~ div{
            display: block;
        }

        &:hover{
            background-size: 110%; 
            background-position: center center; 
            border: solid 2px #1DA8E1;
            
        }

`,

    InsideBg : styled.div `
        background-color: black;
        width: 100%;
        height: 100%;


`,
    Title: styled.h2 `
        color: #1DA8E1;
        
        

    `,
    SecondTitle: styled.h2 `
        margin-left: 1vw;
    `,

    TitleContainer: styled.div `
        display: flex;
        margin: 3vw 0 0 7vw;
    `


}

export default Styleds;