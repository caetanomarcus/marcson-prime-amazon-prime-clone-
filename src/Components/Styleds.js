import styled from "styled-components"

const Styleds = {
    Header : styled.section `
        height: 25vw;
`,
    TopHeader: styled.div `
        width: 90%;
        height: 6vw;
        display: flex;
        justify-content: space-between;
        margin-inline: auto;

`,

    HeaderContainersMenu : styled.div `
        display: flex;
        width: 30%;
        justify-content: space-between;
        align-items: center; 
`,

    HeaderContainersSearcher : styled.div `
        width: 35%;
        display: flex;
        align-items: center;
        justify-content: flex-end;

`,

    BackHeader:styled.div `
        height: 80%
`,

    MarcPrime : styled.h1 `
        font-size: 1rem;
`,

    Menu: styled.ul `
        width: 60%;
        display: flex;
        list-style: nome;
        align-items: center;
        justify-content: space-evenly;
`,

    ItemsMenu : styled.li `
        &:hover {
        color: red;
        }
`
}

export default Styleds;