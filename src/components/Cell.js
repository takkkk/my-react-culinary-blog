import React from 'react'
import styled from 'styled-components'

const CellGroup = styled.div`
    display: grid;
    ${'' /* grid-template-columns: 200px auto; */}
    ${'' /* grid-gap: 25px; */}
    align-items: center;
    
    margin: 50px 0;
    grid-template-areas: '. CellImage CellSectionTitle .'
                         '. CellImage CellTitle .';
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1.2fr 1fr 1fr;
    
`

const CellImage = styled.div`
    width: 200px;
    height: 200px;
    background: black;
    border-radius: 100px;
    background-image: url(${props => props.image});
    background-size: 340px;
    grid-area: CellImage;
    justify-items: center;
    
    
`

const CellTitle = styled.div`
    align-items: center;
    font-size: 22px;
    font-family: superclarendon, serif;
    font-style: normal;
    font-weight: 400;
    color: rgb(255, 255, 255);
    grid-area: CellTitle;
    ${'' /* margin: 0 0 0 100px; */}
    ${'' /* justify-items: center; */}
    margin-top: -30px;
    
`
const CellSectionTitle = styled.div`
    align-items: center;
    font-size: 30px;
    font-family: superclarendon, serif;
    font-style: normal;
    font-weight: 400;
    color: rgb(255, 255, 255);
    grid-area: CellSectionTitle;
    ${'' /* margin: 0 0 0 100px; */}
    justify-items: start;
    align-items: start;
    margin: auto auto 0 0;
    
    
`

const Cell = props => (
    <CellGroup>
        <CellImage image={props.image}></CellImage>
        <CellSectionTitle>{props.sectionTitle}</CellSectionTitle>
        <CellTitle>{props.title}</CellTitle>
    </CellGroup>
)

export default Cell