import React from 'react';
import PropTypes from 'prop-types';
import img01 from './images/1.jpg';
import img02 from './images/2.jpg';
import img03 from './images/3.jpg';
import img04 from './images/4.jpg';
import img05 from './images/5.jpg';


function Food({name,picture,mia,rating}){
return (
<div>
<h1>I love {name}</h1>
<h4>{rating}/5.0</h4>
<img src={picture} alt= {mia}/>
 </div> 
 );
}

const LikeWhat =[
  {id: 1,name:'no 1',image:img01,mia:'no 1',rating:2},
  {id: 2,name:'no 2',image:img02,mia:'no 2',rating:4},
  {id: 3,name:'no 3',image:img03,mia:'no 3',rating:3},
  {id: 4,name:'no 4',image:img04,mia:'no 4',rating:5},
  {id: 5,name:'no 5',image:img05,mia:'no 5',rating:5},
];
function App() {
    return (
      <div>
        {LikeWhat.map(dish =>
          (<Food key={dish.id} name={dish.name} picture={dish.image} mia={dish.mia} rating={dish.rating}/>
          ))}
      </div>
      );
    }


Food.propTypes = { 
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  mia: PropTypes.string.isRequired,
  rating: PropTypes.number 
}  
 