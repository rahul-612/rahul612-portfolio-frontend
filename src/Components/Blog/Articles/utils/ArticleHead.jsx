import React from 'react'
import DateRangeIcon from "@mui/icons-material/DateRange";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";

const ArticleHead = ({heading,date,time,img,alt}) => {
  return (
    <div className="article_headComponent flex">
    <h1 className="article_heading">
      {heading}
    </h1>
    <ul className="article_metadata flex">
      <li>
        <DateRangeIcon style={{ marginRight: "1vmin" }} />
        {date}
      </li>
      <li>
        <HourglassTopIcon style={{ marginRight: "1vmin" }} /> {time}
      </li>
    </ul>
    <img src={img} alt={alt} className="article_primary_img" />
  </div>
  )
}

export default ArticleHead