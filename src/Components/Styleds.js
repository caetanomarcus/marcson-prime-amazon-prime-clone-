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
        z-index: 101;
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
        
        flex-wrap: wrap;
        justify-content: center;
        
       
        min-height: 100vh;
`,

    Img : styled.img `
        width: 200px;
`,

    ImgBg : styled.div `
        background-image: url(${props => props.background}) ;
        background-size: cover; 
        background-repeat: no-repeat;
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
    `,

    SlideShow: styled.div `
        
    
    `,
    SingleSlides: styled.div `
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        height: 19.5vw;
        background-image: url(${props => props.background});
        background-repeat: no-repeat;
        position: absolute;
        background-size: 100%;
        background-position: top center;
        border: solide red 1px;
        transition:  ease right -5s;
        
        right: 100%;

        @keyframes indo {
            0% {left: 0}
            50%{left: 0}
            75%{left: 0}
            100% {left: -100%}
        }
    
        @keyframes vindo {
            0% {left:100%}
            50%{left: 50%}
            75%{left:0}
            100%{left: -100}
        }

        
    `,

    Slides: styled.div `
       position: relative;
       overflow: hidden;

        .btn-container{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 19.5vw;
        }

       button{
           z-index:100;
           
       }
    `,

    SlideText : styled.h1 `
    font-size: 3rem;
    margin-left: 4rem;
`,

    CardContainer: styled.div `
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `,

    CardTitle: styled.h2 `
        font-size: 2rem;

    `,

    CardBody: styled.div `
        display: flex;
        justify-content: space-evenly;
        align-items: center;

       img{
           width: 15%;
       }
       p{
           width: 60%;
           font-size: 1.5rem;
       }
    `


}

export default Styleds;