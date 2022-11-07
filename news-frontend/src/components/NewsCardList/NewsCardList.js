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
    date: "February 19, 2019,",
    title: "Everyone Needs a Special 'Sit Spot' in Nature",
    text: "Ever since I read Richard Louv's influential book, 'Last Child in the Woods,' the idea of having a special 'sit spot' has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...",
    keyword: "treehugger",
  },
  {
    id: 2,
    image: Img2,
    date: "February 19, 2019",
    title: "Everyone Needs a Special 'Sit Spot' in Nature",
    text: "Ever since I read Richard Louv's influential book, 'Last Child in the Woods,' the idea of having a special 'sit spot' has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...",
    keyword: "treehugger",
  },
  {
    id: 3,
    image: Img3,
    date: "February 19, 2019 ",
    title: "Everyone Needs a Special 'Sit Spot' in Nature",
    text: "Ever since I read Richard Louv's influential book, 'Last Child in the Woods,' the idea of having a special 'sit spot' has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...",
    keyword: "treehugger",
  },
];

const NewsCardList = () => {
  return (
    <ul className="news-card-list">
      {cards.map((card) => {
            return (
              <NewsCard
                card={card}
                key={card._id}
              />
            );
          })}
    </ul>
  );
};

export default NewsCardList;
