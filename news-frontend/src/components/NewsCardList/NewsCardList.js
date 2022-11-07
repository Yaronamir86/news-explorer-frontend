/* eslint-disable no-sequences */
import React from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import Img1 from "../../images/image_04.png";
import Img2 from "../../images/image_07.png";
import Img3 from "../../images/image_08.png";

const cards = [
  {
    id: 1,
    image: Img1,
    date: "March 16, 2020",
    title: "Everyone Needs a Special 'Sit Spot' in Nature",
    text: "Ever since I read Richard Louv's influential book, 'Last Child in the Woods,' the idea of having a special 'sit spot' has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...",
    keyword: "National parks traveler",
  },
  {
    id: 2,
    image: Img2,
    date: "November 4, 2020",
    title: "Nature makes you better",
    text: "We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves.",
    keyword: "treehugger",
  },
  {
    id: 3,
    image: Img3,
    date: "February 19, 2019",
    title: "Nostalgic Photos of Tourists in U.S. National Parks",
    text: "Uri Løvevild Golman and Helle Løvevild Golman are National Geographic Explorers and conservation photographers who just completed a project and book they call their love letter to...",
    keyword: "national geographic",
  },
  {
    id: 4,
    image: Img2,
    date: "October 19, 2020",
    title: "Grand Teton Renews Historic Crest Trail",
    text: "“The linking together of the Cascade and Death Canyon trails, at their heads, took place on October 1, 1933, and marked the first step in the realization of a plan whereby the hiker will be...",
    keyword: "treehugger",
  },
  {
    id: 5,
    image: Img1,
    date: "November 4, 2020",
    title: "Scientists Don't Know Why Polaris Is So Weird ",
    text: "Humans have long relied on the starry sky to push into new frontiers, sail to the very edge of the world and find their way back home again. Even animals look to the stars to guide them. ",
    keyword: "National parks traveler",
  },
];

const NewsCardList = () => {
  return (
    <div className ="news-card-list__container">
      <h2 className="news-card-list__title">Search results</h2>
      <ul className="news-card-list">
        {cards.map((card) => {
          return <NewsCard card={card} key={card.id} />;
        })}
      </ul>
      <button className="news-card-list__button">Show more</button>
      </div>
  );
};

export default NewsCardList;
