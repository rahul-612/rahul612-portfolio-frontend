import React, { useState } from "react";
import "./portfolio.css";
import "./portfolio_res.css";
import Menu from "./Menu";
import Category from "./Category";
import MenuItems from "./MenuItems";
import { useInView } from "react-intersection-observer";
// import Lines from "../utility/lines/Lines";

const allCatValues = [
  ...new Set(
    Menu.map((currElem) => {
      return currElem.category;
    })
  ),
  "all",
];

const Portfolio = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });

  const [items, setItems] = useState(Menu);
  const [catItems, setCatItems] = useState(allCatValues);

  const filterItem = (category) => {
    if (category === "all") {
      setItems(Menu);
      return;
    }

    const updatedItems = Menu.filter((currElem) => {
      return currElem.category === category;
    });

    setItems(updatedItems);
  };

  return (
    <>
      <section id="portfolio">
        {/* <Lines /> */}
        <div className="portHead">
          <h1 className={inView === true ? "portHeadAni" : ""}>
            <span>Portfolio</span>
          </h1>
          <Category filterItem={filterItem} catItems={catItems} />
        </div>

        <div className="projectContainer" ref={ref}>
          {items.map((elem, index) => {
            const { id, name, image, url } = elem; //oject destructuring

            return (
              <a href={url} target="_blank" className="projectCard" key={index} style={inView?{opacity:'1'}:{opacity:'0'}}>
                {/* for Images */}
                <div className={inView === true ? "cardOuterAni" : ""}></div>
                <div className={inView === true ? "cardAniInfo" : ""}>
                  <img src={image} alt={name} className="p_img" />
                  <h1 className="p_title">{name}</h1>
                </div>
                {/* <i className="fas fa-4x fa-search p_icon"></i> */}
              </a>
            );
          })}
        </div>

        {/* <Project/> */}
      </section>
    </>
  );
};

export default Portfolio;
