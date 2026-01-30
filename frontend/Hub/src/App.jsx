import React from 'react'
import{ BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import Header from './Index/Header/header'
import Section from './Index/section/section'
import Services from './Index/services/services'
import Review from './Index/Review/review'
import Footer from './Footer/footer'
import Product from './Product/product'
import Contact from './Contact/contact'
import About from './About/about'
import First from './p_purchases/first_product/first'
import Order from './p_purchases/order_success/order'




const service=[
              { id:1, img:  import.meta.env.BASE_URL + 'adhi_murukku.jpg', heading:'Sweet Savory Variety', p:'We sell various type of Sweet and Savory ranging from top cottage industry' },
              { id:2, img:  import.meta.env.BASE_URL + 'own_making.jpg', heading:'Own Making', p:'We make Adhirasam and Murukku using traditional hot techniques for authentic taste'},
              { id:3, img:  import.meta.env.BASE_URL + 'wholesale.jpg', heading:'Wholesale & Retail', p:'Supplying to individual customers, shops and supermarkets with best quality'},
              { id:4, img:  import.meta.env.BASE_URL + 'seasonal.webp', heading:'Seasonal Special', p:'Enjoy exclusive festive delights — from Diwali sweets to Pongal specialties, crafted only for the season'},
              { id:5, img:  import.meta.env.BASE_URL + 'Expedite_shipping.jpg', heading:'Express Delivery', p:'Fast delivery service across the US, available year-round, 24/7'},        
              
]

const Testimonials=[{id:6,icon:'fas fa-quote-left quote' ,review:'I grew up eating my grandmother’s athirasam, and tasting this instantly took me back to those days. Soft in the middle, perfectly crisp on the edges, and full of that authentic jaggery flavor — just like it’s meant to be. You can tell it’s made with care and tradition. It feels homemade, not factory-made, and that makes all the difference. ', image:'/preethi.jpg', name:'Preethi',},
                    {id:7,icon:'fas fa-quote-left quote' ,review:'When it comes to traditional snacks, these are my top picks — athirasam and murukku. The athirasam is soft in the middle with that rich jaggery sweetness, while the murukku is perfectly crunchy and light, without feeling oily. I shared both with my family and everyone loved them. Truly authentic taste you can trust every time.', image:'/saam.jpg', name:'Saam', },
                    {id:8,icon:'fas fa-quote-left quote' ,review:'The seasonal athirasam with cardamom and ginger is something special. The gentle spice from ginger blends beautifully with the sweet jaggery, and the cardamom gives a refreshing aroma in every bite. It’s not just a sweet — it feels festive, warm, and unique. A perfect treat for the season that stands out from the usual.', image:'/suriya.webp',name:'Suriya',}

]


function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
     <Route
          path="/"
          element={
            <>
              <Section />

              <div className="ourfeatures">
                <h2>Our <span>services</span></h2>
              </div>

              <div className="group">
                {service.map((val) => (
                  <Services key={val.id} val={val} />
                ))}
              </div>

              <div className="test">
                <h1>Testimonials</h1>
                <h2>What Our customer Says</h2>
              </div>

              <div className="review">
                {Testimonials.map((test) => (
                  <Review key={test.id} test={test} />
                ))}
              </div>
            </>
          }/> 
          <Route path="/" element={<Home />} />
          <Route path='/Product' element={<Product/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Product/:id' element={<First/>}/>
          <Route path="/order-success" element={<Order />} />
          </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App

