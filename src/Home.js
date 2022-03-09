import React from 'react';
import './Home.css';
import Product from './Product';

function Home(){
  return (
    <div className="home">
    <div className="home_container">
         <div className="home_row">
           <Product
             id="12345671"
             title="Vincent Chase Online"
             price={1299}
             image='https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-s11738-c2-sunglasses_g_1123_1_1.jpg'
             rating={3}
             />
           <Product
              id="12345662"
              title="Vincent Chase Online"
              price={1500}
              image='https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e14106-c1-c1-eyeglasses_vincent-chase-vc-e14106-c1-c1-eyeglasses_vincent-chase-vc-e14106-c1-c1-eyeglasses_G_8494.jpg'
              rating={5}
              />
         </div>
         <div className="home_row">
            <Product
              id="12345473"
              title="Vincent Chase Online"
              price={1299}
              image='https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-s11738-c2-sunglasses_g_1123_1_1.jpg'
              rating={3}
              />
            <Product
               id="12335674"
               title="Vincent Chase Online"
               price={1500}
               image='https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e14106-c1-c1-eyeglasses_vincent-chase-vc-e14106-c1-c1-eyeglasses_vincent-chase-vc-e14106-c1-c1-eyeglasses_G_8494.jpg'
               rating={4}
               />
               <Product
                  id="12315675"
                  title="Vincent Chase Online"
                  price={1500}
                  image='https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e14106-c1-c1-eyeglasses_vincent-chase-vc-e14106-c1-c1-eyeglasses_vincent-chase-vc-e14106-c1-c1-eyeglasses_G_8494.jpg'
                  rating={3}
                  />
         </div>
         <div className="home_row">
            <Product
              id="12345676"
              title="Vincent Chase Online"
              price={1500}
              image='https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e14106-c1-c1-eyeglasses_vincent-chase-vc-e14106-c1-c1-eyeglasses_vincent-chase-vc-e14106-c1-c1-eyeglasses_G_8494.jpg'
              rating={4}
              />
         </div>
      </div>
    </div>
  );
}

export default Home;
