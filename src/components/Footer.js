import React from 'react'
import styled from 'styled-components'

const FooterGroup = styled.div`
    font-family: superclarendon, serif;
    background: #FDB30F;
    padding: 50px 0;
    display: grid;
    grid-gap: 30px; 
    
`
const Text = styled.p`
    font-family: superclarendon, serif;
    font-size: 22px;
    font-weight: 600;
    color: rgb(255, 255, 255);
    ${'' /* max-width: 500px; */}
    margin: 0 auto;
    justify-items: center;
    
`
const Button = styled.button`
    background: rgb(255, 255, 255);
    box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15); 
    border-radius: 30px;
    color: black;
    border: none;    
    padding: 14px 30px;
    font-family: superclarendon, serif;
    font-weight: 600;
    font-size: 20px;
    justify-self: center;
    transition: 0.8s cubic-bezier(0.2,0.8,0.2,1);

    &:hover {
        box-shadow: 0 20px 40px rgba(0,0,0, 0.15);
        transform: translateY(-3px);
    }
`
const LinkGroup = styled.div`
    width: 500px;
    margin: 70px auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    a {
        transition: 0.8s;
    }

    a:hover {
        color: black;
    }
`


const Copyright = styled.div`
    color: grey;
    width: 550px;
    margin: 0 auto;
    font-size: 15px;
`

const Footer = ({data, children}) => (
    <FooterGroup>
      <Text>Tweet "Get fresh and healthy everyday recipes from @Taka"</Text>
      <Button>Tweet</Button>
      <LinkGroup>{data.allContentfulLink.edges.map(edge => (
        <a href={edge.node.url}>{edge.node.title}</a>
      ))}</LinkGroup>
      
      <Copyright>{children}</Copyright>
    </FooterGroup>
)

export default Footer 