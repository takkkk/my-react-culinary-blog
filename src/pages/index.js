import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';
import Section from '../components/Section'
import staticdata from '../../staticdata.json';
import Cell from '../components/Cell';
import styled from 'styled-components'

const SectionCaption = styled.p`
    color: rgb(255, 255, 255);
    font-size: 25px;
    font-family: superclarendon, serif;
    font-style: normal;
    font-weight: 400;
   
    text-transform: uppercase;
    margin: 40px 0 0 0 ;
    text-align: center;
    display: block;
`

const SectionCellGroup = styled.div`
    
    margin: 0 auto 100px;
    display: grid;
    align-items: center;
    justify-items: center;
    ${'' /* grid-template-columns: repeat(2, 1fr); */}
    @media (max-width: 800px) {
      grid-template-columns: repeat(1, 1fr);
    }
`

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Culinary Delights</h1>
        <p>Fresh and healthy everyday recipes!</p>
        <Link to="/page-2/">Chef's Specials</Link>  
          
          <svg width="100%" height="177px" version="1.1" xmlns="http://www.w3.org/2000/svg">
            
              <path fill="#FFC82E">
                <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s" values="
                M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;

                M0 87.1596C316 87.1597 444 160 884 52.0001C1324 -55.9999 1320.29 34.966 1538 71.251C1814 117.251 2156 189.252 2560 87.1597V233.161L0 233.161V87.1596Z;

                M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;

                M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z

                "
                />
              </path>
          </svg>
        
      </div>
    </div>   
    <div className="Cards">
      {/* <h2>5 recipes, more coming</h2> */}
      <div className="CardsGroup">
        <Card 
          title="Tuna Tartare" 
          text="Meals"
          image={require('../images/tuna-tartare.jpg')}
        />
        <Card 
          title="Lobster Tail with 
          Cauliflower Puree and Garlic Noodles" 
          text="Meals"
          image={require('../images/lobster.jpg')}
        />
        <Card 
          title="Roast Leg of Lamb with 
          Mint Sauce" 
          text="Meals"
          image={require('../images/roast-lamb.jpg')}
        />
        <Card 
          title="Chicken in White Wine 
          Mushroom Sauce" 
          text="Meals"
          image={require('../images/mushroom-chicken.jpg')}
        />
        <Card 
          title="Sous Vide Chicken Thigh" 
          text="Meals"
          image={require('../images/chicken-thigh.jpg')}
        />
        <Card 
          title="Margarita" 
          text="Snacks & Drinks"
          image={require('../images/margarita.jpg')}
        />
        <Card 
          title="Garlic Noodles with shrimps" 
          text="Meals"
          image={require('../images/garlic-noodles.jpg')}
        />
        <Card 
          title="Homemade Pizza" 
          text="Meals"
          image={require('../images/pizza.jpg')}
        />
        <Card 
          title="Takoyaki" 
          text="Snacks & Drinks"
          image={require('../images/takoyaki.jpg')}
        />
        <Card 
          title="Mojito" 
          text="Snacks & Drinks"
          image={require('../images/mojito.jpg')}
        />
        <Card 
          title="Bibimbap" 
          text="Meals"
          image={require('../images/bibimbap.jpg')}
        />
        <Card 
          title="Brussel Sprouts" 
          text="Snacks & Drinks"
          image={require('../images/brussel-sprouts.jpg')}
        />
        <Card 
          title="New York Cheese Cake" 
          text="Sweets"
          image={require('../images/cheese-cake.jpg')}
        />
        <Card 
          title="Pork Tenderloin with Spicy Sweet Sauce and Yam Puree" 
          text="Meals"
          image={require('../images/pork-tenderloin.jpg')}
        />
        <Card 
          title="Mulled Wine" 
          text="Snacks & Drinks"
          image={require('../images/mulled-wine.jpg')}
        />
      </div>
    </div>
    {/* <SectionCaption> About Me </SectionCaption> */}
    <SectionCellGroup>
      {staticdata.cells.map(cell => (
        <Cell
          title={cell.title}
          image={cell.image}
          sectionTitle={cell.sectionTitle} />
      ))}
    </SectionCellGroup>
  </div>
)

export default IndexPage




