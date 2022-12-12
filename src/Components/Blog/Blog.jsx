import React from "react";
import "./Blog.css";
import { useInView } from "react-intersection-observer";
import Heading from "../utility/heading/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import ArticleCard from "./ArticleCard";

const article_data = [
  {
    key: 1,
    topic:"AWS",
    desc: "Deploy a MERN application to AWS (EC2 Instance) using Nginx Server",
    link:"/article/aws/nginx"
  },
  {
    key: 2,
    topic:"CI-CD Pipeline",
    desc: "Creating a secure CI/CD pipeline with GitHub Actions for your MERN application",
    link:"/article/aws/cicd"
  },
  {
    key: 3,
    topic:"AWS(Route 53)",
    desc: "Get a Free Domain for your website and host on AWS",
    link:"/article/aws/route53"
  },
  
];

const Blog = () => {
  // const { ref, inView, entry } = useInView({ threshold: 0, triggerOnce: true });

  return (
    <>
      <section id="blog">
        <Heading topic="Articles" />

        <Swiper
          slidesPerView="auto"
          spaceBetween={25}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          style={{ width: "100vw", paddingTop: "2vmin" }}
        >
          {article_data.map((article) => (
            <SwiperSlide
              key={article?.key}
              className="blog_container"
            >
             <ArticleCard id={article.key} topic={article.topic} desc={article.desc} link={article.link}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Blog;
