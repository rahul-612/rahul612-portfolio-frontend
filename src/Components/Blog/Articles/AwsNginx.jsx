import React, { useEffect } from "react";
import "./Article.css";
import aws_mern from "../imgs/aws_mern.webp";
import aws_mern_1 from "../imgs/aws_mern_1.png";
import aws_mern_2 from "../imgs/aws_mern_2.png";
import aws_mern_3 from "../imgs/aws_mern_3.png";
import aws_mern_4 from "../imgs/aws_mern_4.png";
import ArticleHead from "./utils/ArticleHead.jsx"
import Prism from "prismjs"

const AwsNginx = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0)
    Prism.highlightAll();
  }, []);

  return (
    <>
      <article className="article_container flex">
        <ArticleHead heading="Deploy a MERN application to AWS (EC2 Instance) using Nginx Server" date="Dec 11, 2022" time="9 min read" img={aws_mern} alt="aws_mern"/>

        <div className="article_about ">
          <div className="what_is ">
            <h4>What is MERN Application ?</h4>
            <p>
              MERN stands for MongoDB, Express, React, Node, after the four key
              technologies that make up the stack.
            </p>
            <ul>
              <li>MongoDB - Document database (BSON object or Binary JSON)</li>
              <li>Express - Open source Node.js web framework</li>
              <li>A client-side JavaScript framework developed by Facebook</li>
              <li>Node.js is an open source server environment</li>
            </ul>
          </div>
          <div className="what_is">
            <h4>What is EC2 service in AWS- amazon web service ?</h4>
            <p>
              Amazon Elastic Compute Cloud (Amazon EC2) is a web service that
              provides secure, resizable compute capacity in the cloud. It is
              designed to make web - scale cloud computing easier for
              developers.
            </p>
          </div>
          <div className="what_is">
            <h4>What is NGINX server ?</h4>
            <p>
              NGINX is a free, open-source, high-performance HTTP server and
              reverse proxy, as well as an IMAP/POP3 proxy server. NGINX is
              known for its high performance, stability, rich feature set,
              simple configuration, and low resource consumption.
            </p>
          </div>
        </div>
        <div
          className="article_about"
          style={{ border: "none", marginBottom: "24vh", marginTop: "2vmin" }}
        >
          <div className="what_is ">
            <h4 style={{ fontWeight: "bold" }}>Deployment</h4>
            <p>
              We can deploy Mern Application with many ways. Two common ways
              are:
            </p>
            <ul>
              <li>
                Deploy Frontend at different place and Backend at different
                place
              </li>
              <li>
                Deploy the Frontend and Backend at same place ( Setting up proxy
                server)
              </li>
            </ul>
            <p style={{ marginTop: "4vmin" }}>
              In this post, we will follow second approach. We will create proxy
              to backend server and then deploy it to AWS using NGINX server.
            </p>
          </div>
          <div className="what_is ">
            <h4>Setting up proxy in Frontend</h4>
            <p>
              Suppose your Frontend (React app) is running on port 3000 and
              Backend is running on port 4000 . Then we have to add proxy on
              port 4000 for backend accessible.
            </p>
            <p>
              <strong>Steps:</strong>
            </p>
            <ul>
              <li>Open package.json file in your react app.</li>
              <li>
                Paste "proxy": "localhost:4000" in last line of package.json
                file.
              </li>
            </ul>
            <p style={{ marginTop: "4vmin" }}>
              <strong>In my case package.json looks like:</strong>
            </p>
            <pre className="copy-to-clipboard code_highlighter">
              <code className="language-js">{`{
  "name": "mernFrontend",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@emotion/react": "^11.10.4",
    "@emotion/styled": "^11.10.4",
    "@mui/icons-material": "^5.10.6",
    "@mui/material": "^5.10.6",
    "@mui/styled-engine-sc": "^5.10.6",
    "@reduxjs/toolkit": "^1.8.5",
    "axios": "^0.27.2",
    "prismjs": "^1.29.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-redux": "^8.0.4",
    "react-router-dom": "^6.3.0",
    "react-scripts": "5.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "proxy": "http://localhost:4000"
  }`}</code>
            </pre>
            <ul style={{ marginTop: "4vmin" }}>
              <li>
                Remove localhost:4000 at every place which you have wriiten at
                time of calling Backend API's. ( Hit API's link without
                localhost:4000 , As we have proxy to Backend).
              </li>
            </ul>
          </div>
          <div className="what_is ">
            <h4>Creating a Production Build in React App</h4>
            <ul>
              <li>
                If you are using NPM , then hit command npm run build in React
                App. It will create optimize production build folder in your
                application. Now our Frontend is ready for deployment.
              </li>
            </ul>
          </div>
          <div className="what_is ">
            <h4>
              Creating Build Folder as a Public folder in index.js (App.js) file
            </h4>
            <ul>
              <li>
                In first step , copy build folder from frontend and paste it in
                Backend directory. It will never create mesh for giving path in
                index.js file.
              </li>
              <li>Add following lines of code in index.js file.</li>
            </ul>
            <pre className="copy-to-clipboard code_highlighter">
              <code className="language-js">
                {`// serving build folder
app.use(express.static(path.join(__dirname,"../frontend/build")));

app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../frontend/build/index.html"))
})`}
              </code>
            </pre>
          </div>
          <div className="what_is ">
            <h4>Setup your MongoDB database on cloud</h4>
            <p>
              you can put your mongoDB database on mongoDB Atlas . It will give
              500MB free space. Paste secret token provided by mongoDB atlas at
              mongoDB connection in your backend file.
            </p>
            <p style={{ fontWeight: "bold" }}>
              After following these steps push your all changes to github.
            </p>
          </div>
          <div className="what_is ">
            <h4>Setup The server on AWS</h4>
            <p>
              Now, we will make instance in EC2 service given by AWS and then we
              wil setup Nginx server.
            </p>
            <ul>
              <li>Sign up to AWS (Amazon web serive)</li>
              <li>Select EC2 service from the search box</li>
              <li>Go to Instances section</li>
              <li>Click on Launch Instances.</li>
            </ul>
            <img src={aws_mern_1} alt="aws_mern_1" />
            <ul>
              <li>
                Select Ubuntu Server 22.04 LTS (HVM), SSD Volume Type server.
              </li>
              <li>
                Now aws will ask for Key-pair,which wil help to connect server
                to your remote system.
              </li>
              <li>Select new key pair</li>
              <li>
                Give key pair name and download the key-pair file (.pem file).
              </li>
              <li>Now Configure settings</li>
              <li>Click on Edit security groups</li>
            </ul>
            <img src={aws_mern_2} alt="aws_mern_2" />
            <ul>
              <li>
                Click on Launch. within short time you will get status running
                of you server and will get public IP.
              </li>
            </ul>
          </div>
          <div className="what_is ">
            <h4>Allocate Elastic IP Address to the EC2 Instace</h4>
            <p>
              Using an Elastic IP address, you can mask the failure of an
              instance or software by rapidly remapping the address to another
              instance in your account.
            </p>
            <ul>
              <li>Go to elastic ip section</li>
              <li>Click on allocate elastic ip address</li>
              <li>Click allocate</li>
              <li>Once you have created a new Elastic IP</li>
              <li>Click on newly created Elastic as shown below</li>
            </ul>
            <img src={aws_mern_3} alt="aws_mern_3" />
            <ul>
              <li>Choose your EC2 Instance then click allocate</li>
              <li>
                Cheers, You have successfully linked Elastic IP with EC2
                Instance
              </li>
            </ul>
          </div>
          <div className="what_is ">
            <h4>Connect server to your remote system</h4>
            <strong>Window Users</strong>
            <ol style={{ marginTop: "3vmin" }}>
              <li>Install Putty on your system</li>
              <li>
                Convert the .pem to putty .ppk file using Puttygen and save its
                private key.
              </li>
              <li>Open Putty</li>
              <li>
                Paste Public IP of your server (on Aws) to Host Name( Ip address
                in Putty)
              </li>
              <li>Open connection section in putty</li>
              <li>In Data section, add username ubuntu</li>
              <li>In Auth section, Browse the .ppk file saved by you.</li>
              <li>
                Click on Open , It will open your server on your remote system.
                Also, you can store this session with any name , so every time
                you don't need to fill all credentials.
              </li>
            </ol>
            <strong>OR</strong>
            <p style={{ marginTop: "2vmin" }}>
              If you have Git Bash, then simply copy the commad given in connect
              section of your aws server.
            </p>
            <strong>Linux or Mac users</strong>
            <p style={{ marginTop: "2vmin" }}>
              Copy the commad given in connect section of your aws server.
            </p>
          </div>
          <div className="what_is">
            <h4>
              Install Required dependencies on your server by pasting following
              command in your terminal
            </h4>
            <pre className="copy-to-clipboard code_highlighter">
              <code className="language-html">
                {`curl https://gist.githubusercontent.com/cornflourblue/f0abd30f47d96d6ff127fe8a9e5bbd9f/raw/e3047c9dc3ce8b796e7354c92d2c47ce61981d2f/setup-nodejs-mongodb-production-server-on-ubuntu-1804.sh | sudo bash
`}
              </code>
            </pre>
          </div>
          <div className="what_is">
            <h4>Clone Project on your server by pasting following command</h4>
            <pre className="copy-to-clipboard code_highlighter">
              <code className="language-html">{`git clone "repo link"`}</code>
            </pre>
          </div>
          <div className="what_is">
            <h4>Config NGINX server using following commands</h4>
            <ul>
              <li>
                Delete the default NGINX site config file with the command
                <pre
                  style={{ marginTop: "2vmin" }}
                  className="copy-to-clipboard code_highlighter"
                >
                  <code className="language-html">{`sudo rm /etc/nginx/sites-available/default`}</code>
                </pre>
              </li>
              <li>
                Launch the nano text editor to create an new default site config
                file with
                <pre
                  style={{ marginTop: "2vmin" }}
                  className="copy-to-clipboard code_highlighter"
                >
                  <code className="language-html">{`sudo nano /etc/nginx/sites-available/default`}</code>
                </pre>
              </li>
              <li>
                Paste following data in nano editor and save it.
                <pre
                  style={{ marginTop: "2vmin" }}
                  className="copy-to-clipboard code_highlighter"
                >
                  <code className="language-html">{`server {
  listen 80 default_server;
  server_name _;

  # Backend
  location / {
    proxy_pass http://localhost:4000/;
  }
}`}</code>
                </pre>
              </li>
              <li>
                Save the file by pressing ctrl + x and selecting Yes to save.
              </li>
              <li>
                Restart NGINX with the command
                <pre
                  style={{ marginTop: "2vmin" }}
                  className="copy-to-clipboard code_highlighter"
                >
                  <code className="language-html">{`sudo systemctl restart nginx`}</code>
                </pre>
              </li>
            </ul>
          </div>
          <div className="what_is"><h4>Configure environment variables</h4>
          <ul><li>Edit ~/.bashrc file of User which will run the program.
          <pre
                  style={{ marginTop: "2vmin" }}
                  className="copy-to-clipboard code_highlighter"
                >
                  <code className="language-html">{`sudo nano ~/.bashrc`}</code>
                </pre>
          </li>
          <li>Add your secret data at the end.
          <pre
                  style={{ marginTop: "2vmin" }}
                  className="copy-to-clipboard code_highlighter"
                >
                  <code className="language-html">{`export API_KEY=”xyzx…..”
export PORT=4000
`}</code>
                </pre>
          </li>
          <li>Save File <pre
                  style={{ marginTop: "2vmin" }}
                  className="copy-to-clipboard code_highlighter"
                >
                  <code className="language-html">{`source ~/.bashrc
`}</code>
                </pre>
          </li></ul>
          <strong>Note: make sure you have created .env file in your project folder which is stored in your ec2 instance.</strong>
          </div>
          <div className="what_is">
            <h4>Starting the server using pm2 module</h4>
            <ul>
              <li>
                Go to your project directory and then go to backend directory.
                <pre
                  style={{ marginTop: "2vmin" }}
                  className="copy-to-clipboard code_highlighter"
                >
                  <code className="language-js">{`sudo apt install npm`}</code>
                </pre>
              </li>
              <li>
                Install Dependecies using <strong>npm install</strong>
              </li>
              <li>
                Paste follwing command
                <pre
                  style={{ marginTop: "2vmin" }}
                  className="copy-to-clipboard code_highlighter"
                >
                  <code className="language-js">{`sudo npm install pm2 -g`}</code>
                </pre>
              </li>
              <li>
                Paste following command{" "}
                <pre
                  style={{ marginTop: "2vmin" }}
                  className="copy-to-clipboard code_highlighter"
                >
                  <code className="language-js">{`sudo pm2 start index.js`}</code>
                </pre>{" "}
              </li>
            </ul>
            <p>you will see following screen</p>
            <img src={aws_mern_4} alt="aws_mern_4" />
            <p>
              {" "}
              <strong>
                You have deployed your MERN app successfully . Moreover you can
                add Domain name to your app using route53 service in Aws . You
                can protect you app form attacks using AWS Waf ( web application
                firewall).
              </strong>
            </p>
          </div>
        </div>
      </article>
    </>
  );
};

export default AwsNginx;
