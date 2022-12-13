import React from 'react'
import {Link} from "react-router-dom";

const ArticleCard = ({id,topic,desc,link}) => {
  return (
    <>
         <div className="card">
                <div className="box">
                  <div className="content">
                    <h2>{id}</h2>
                    <h3>{topic}</h3>
                    <p>
                      {desc}
                    </p>
                    <Link className="article_link" to={link}>Read More</Link>
                  </div>
                </div>
              </div>
    </>
  )
}

export default ArticleCard