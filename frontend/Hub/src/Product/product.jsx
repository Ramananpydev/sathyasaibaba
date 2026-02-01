import React from 'react'
import { useNavigate } from 'react-router-dom'
import './product.css'


const product=[{id:9,ima:`${import.meta.env.BASE_URL}adhi.JPG`,pname:'Traditional South Indian sweet',details:'Its a deep-fried, crispy disc-shaped treat with cardamom flavor.Popular festive sweet. quantity : 10 pieces',price:'₹30.00',},
                {id:10,ima:`${import.meta.env.BASE_URL}adhi2.webp`,pname:'Cultural significance Special Sesame',details:'Adhirasam is a festive sweet during Diwali, symbol of good luck & prosperity.quantity : 10 pieces',price:'₹40.00',},
                {id:11,ima:`${import.meta.env.BASE_URL}kaimu.jpg`,pname:'Mullu Murukku',details:'Made from rice dough, deep fried. Manapparai is famous for this snack. quantity : 12 pieces',price:'₹20.00',},
                {id:12,ima:`${import.meta.env.BASE_URL}hand.webp`,pname:'Hand-woven Murukku',details:'Famous Marapparai Kai Murukku is hand-made with stiffer dough.quantity : 12 pieces',price:'₹20.00',},
                {id:13,ima:`${import.meta.env.BASE_URL}buttermurukku.webp`,pname:'Special Butter Murukku',details:'Crispy, twisted shape, savory buttery flavor. South Indian special. quantity : 100 grams',price:'₹70.00',},

]


function Product() {
  const navigate = useNavigate();
  return (
<div>
      <div className="pro1"><ins>Signature Blends</ins></div>
      <span className="pro2">Delight in Every Bite</span>


      <div className="products" >
        {product.map((item) => (
          <div className="card" key={item.id} onClick={() => navigate(`/Product/${item.id}`)}>
            <img src={item.ima} alt={item.pname} />
            <h3>{item.pname}</h3>
            <p>{item.details}</p>
            <div className="price-rating">
              <span>{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Product
