"use client";
import React from "react";
import Carousel from "react-material-ui-carousel";
import Item from "./Item";

function CarouselView() {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      image: "https://source.unsplash.com/random?sig=1",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      image: "https://source.unsplash.com/random",
    },
  ];

  return (
    <Carousel
      autoPlay={false}
      animation="slide"
      indicators={true}
      navButtonsAlwaysVisible={true}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

export default CarouselView;
