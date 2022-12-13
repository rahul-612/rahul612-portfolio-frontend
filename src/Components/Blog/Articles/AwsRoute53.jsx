import React,{useEffect} from 'react'
import ArticleHead from './utils/ArticleHead';
import route53 from "../imgs/route53.jpg"
import aws_route_1 from '../imgs/aws_route_1.png';
import aws_route_2 from '../imgs/aws_route_2.png';
import aws_route_3 from '../imgs/aws_route_3.png';
import Prism from "prismjs"

const AwsRoute53 = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    Prism.highlightAll();
  }, []);

  return (
   <>
    <article className="article_container flex">
    <ArticleHead heading="Get a Free Domain for your website and host on AWS" date="Dec 13, 2022" time="8 mins read" img={route53} alt="route53"/>
    <div
          className="article_about"
          style={{ border: "none", marginBottom: "24vh", marginTop: "2vmin" }}
        >
            <div className="what_is">
                <ul>
                    <li>First visit this website https://www.freenom.com and search for free domain and buy it but don’t put any DNS that time we will do it later.</li>
                    <li>Then after that create the Elastic IP for your EC2 instance and associate it with the instance.</li>
                    <img src={aws_route_1} alt="aws_route_1" />
                    <li>Inside the Hosted zone, enter the domain name that you have purchased earlier, then type as "public" then click below to create the hosted zone.</li>
                    <img src={aws_route_2} alt="aws_route_2" />
                    <li>After that you will get 2 records, then create new record! don’t give any name to it just put your EC2 instance elastic IP address inside value field of new record then change TTL to 60 and save it.</li>
                    <li>Now Finally go to https://www.freenom.com click on services ➡️ my domain then click on manage domain button of the domain you purchased then click on management tools ➡️ nameservers then click on use custom name servers and finally put all the 4 route traffic of “NS” record one by one then click on change nameservers.</li>
                    <img src={aws_route_3} alt="aws_route_3" />
                    
                </ul>
                <p><strong>Done 👌 Since it's free it will take about half an hour to reflect, so be patient 😄</strong></p>
            </div>
        </div>
    </article>
   </>
  )
}

export default AwsRoute53