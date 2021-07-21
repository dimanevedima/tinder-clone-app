import React, {useState,useEffect} from 'react';
import TinderCard from 'react-tinder-card';

import {database} from './fire.js';

const TinderCards = () => {
   const [people, setPeople] = useState([
  ]);

  useEffect(()=>{

      const unsubscribe = database
      //  .collection('people')
        .collection('cards')
        .onSnapshot(snapshot =>
            setPeople(snapshot.docs.map(doc => doc.data()))
      );

      return () => {
        unsubscribe();
      }
  }, []);

  return (
    <div>

        <div className = "card__container">
          {people.reverse().map(({id, name,age,url}) => (

            <TinderCard
              className = "swipe"
              key = {id}
              preventSwipe = {['up', 'down']}
              // flickOnSwipe = {false}
              >
              <div
              style = { {backgroundImage: `url(${url})` } }
              className = "card"
              >
                  <h3 className = "card__name">{name} {age}</h3>
              </div>
            </TinderCard>
          ))}
        </div>
    </div>
  )
};

export default TinderCards;
