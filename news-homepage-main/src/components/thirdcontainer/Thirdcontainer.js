import React from "react";
import gaming from '../images/image-gaming-growth.jpg';
import pc from '../images/image-retro-pcs.jpg';
import laptop from '../images/image-top-laptops.jpg';
import './third.css'
const Thirdcontainer = ()=>{
    const newsdata =[
        {
            id:1,
            image:pc,
            number: "01",
            head: 'Reviving Retro PCs',
            description: 'What happens when old PCs are given modern upgrades?'
        },
        {
            id:2,
            image:laptop,
            number: "02",
            head: 'Top 10 Laptops of 2022',
            description: 'Our best picks for various needs and budgets.'
        },
        {
            id:3,
            image: gaming,
            number: '03',
            head: 'The Growth of Gaming',
            description: 'How the pandemic has sparked fresh opportunities.'
        }
    ];
    return(
      <div className="third-container">
     {newsdata.map((newsdata, idx) => (
    <div className="outside"
            key={idx}
          >
            <div className="news-container">
            <div> 
            <img
              src={newsdata.image}
            />
            </div>

            <div> 
            <h1 id="number">{newsdata.number}</h1>
            <p id="heading">{newsdata.head}</p>
            <p id="info">{newsdata.description}</p>
            </div>
</div>

          </div>
))}
      </div>  
    );

}

export default Thirdcontainer;