import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import './Card.css';

const Card = forwardRef((props, ref) => {
  const [cards, setCards] = useState([
    {
      "card":"1",
      "color":"#BFBFBF"
    },
    {
      "card":"2",
      "color":"#EFEFEF"
    },
    {
      "card":"3",
      "color":"#72C3DC"
    },
    {
      "card":"4",
      "color":"#6F98A8"
    },
    {
      "card":"5",
      "color":"#333333"
    },
    {
      "card":"6",
      "color":"#6F98A8"
    },
    {
      "card":"7",
      "color":"#EFEFEF"
    },
    {
      "card":"8",
      "color":"#72C3DC"
    },
    {
      "card":"9",
      "color":"#BFBFBF"
    },
  
  ]
    );

  useImperativeHandle(ref[1], () => ({

    sorted() {
      const sorted = [...cards].sort((a, b) => {
        return a.card - b.card;
      });
      setCards(sorted);
    }

  }));

  useImperativeHandle(ref[0], () => ({
    shuffled() {
      let shuffle = [...cards];
      const getRandomValue = (i, N) => Math.floor(Math.random() * (N - i) + i);
      shuffle.forEach((elem, i, arr, j = getRandomValue(i, arr.length)) => [arr[i], arr[j]] = [arr[j], arr[i]])
      setCards(shuffle);
    }

  }));


  return (
    <div className="card-container">
      <Row gutter={40} className="row">
        {(cards).map(co =>
          <Col className="column"
            xs={{ span: 7 }} sm={{ span: 4 }} md={{ span: 3 }}
            lg={{ span: 4 }} xl={{ span: 3 }}
          ><div>
              <div className="card-items" style={{backgroundColor: co.color}}>{co.card}</div>
            </div>
          </Col>
        )}
      </Row>
    </div>
  );
});

export default Card
