import React from "react";
import "./HotelCard.css";

export default function HotelCard(props) {
  const oneStar = <span>⭐</span>;
  const halfStar = <span style={{ color: "yellow" }}>✩</span>;
  const stars = (num) => {
    const arr = [];
    for (let i = 1; i <= num; i++) {
      arr.push(oneStar);
    }
    if (props.stars % 1 !== 0) {
      arr.push(halfStar);
    }
    return arr;
  };


  const slashIndex = props.rating.indexOf("/");
  const rating = +props.rating.slice(0, slashIndex);
  let reaction;
  if (rating >= 5 && rating < 6) {
    reaction = "Decent";
  } else if (rating >= 6 && rating < 7) {
    reaction = "";
  } else if (rating >= 7 && rating < 8) {
    reaction = "Good";
  } else if (rating >= 8 && rating < 9) {
    reaction = "Very Good";
  } else if (rating >= 9 && rating <= 10) {
    reaction = "Wonderful";
  }
  const showRecomendation = rating >= 8 ? true : false;

  return (
      <div className="Hotelcard">
        <img src={props.imageURL} alt={"profile_img"} className="hotelimg" />
        <div>
          <p className="hotelname">{props.name}</p>
          <h3>
            {stars(props.stars)}
          </h3>
          <p className="hoteldesc">{props.description}</p>
          <p>
            <span className="hotelrat"> {props.rating} </span>{" "}
            <span >{reaction} </span>
            <span>({props.reviews} </span>)
          </p>
          {showRecomendation ? <p>Recomendation</p> : <></>}
        </div>
      </div>
  );
}
