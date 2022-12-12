import React from 'react'
import "./Article.css";
import ArticleHead from './utils/ArticleHead';
import cicd from "../imgs/cicd.jpg"
import { Link } from 'react-router-dom';
import aws_cicd_1 from '../imgs/aws_cicd_1.png';
import aws_cicd_2 from '../imgs/aws_cicd_2.png';
import aws_cicd_3 from '../imgs/aws_cicd_3.png';


const AwsCi = () => {
  return (
    <article className="article_container flex">
    <ArticleHead heading="Creating a secure CI/CD pipeline with GitHub Actions for your MERN application" date="Dec 12, 2022" time="16 min read" img={cicd} alt="cicd"/>
    <div className="article_about ">
          <div className="what_is ">
            <h4>What is CI/CD Pipeline ?</h4>
            <ul>
              <li>CI/CD can be pictured as a pipeline, where new code is submitted on one end, tested over a series of stages (source, build, test, staging, and production), and then published as production-ready code.</li>
              <li>As your code progresses through the CI/CD pipeline, quality should increase as more aspects are verified. </li>
              <li>Test results are received immediately due to automation, and the pipeline stops builds and releases if they do not pass predetermined quality thresholds.</li>
              <li>Amazon Web Services (AWS) provides a collection of CI/CD tools to help accelerate software development and release lifecycles.</li>
            </ul>
          </div>
          </div>
          <div
          className="article_about"
          style={{ border: "none", marginBottom: "24vh", marginTop: "2vmin" }}
        >
          <div className="what_is ">
            <h4 style={{ fontWeight: "bold" }}>Deployment</h4>
            <p>
              First Deploy your MERN application on EC2 using this <Link className='article_link' to="/article/aws/nginx">link</Link>
            </p>
            </div>
            <div className="what_is ">
            <h4 >Create SSH Key for Github-Actions</h4>
            <p>
            Click here for reference <a target="_blank" className='article_link' to="https://github.com/appleboy/ssh-action">link</a>
            </p>
            <ul>
                <li>Go to SSH Directory
                <pre style={{ marginTop: "2vmin" }} className="copy-to-clipboard code_highlighter">
              <code className="language-html">{`cd .ssh
`}
              </code>
              </pre>
                <pre style={{ marginTop: "2vmin" }} className="copy-to-clipboard code_highlighter">
              <code className="language-html">{`ls
`}
              </code>
              </pre>
              <p style={{ marginTop: "2vmin" }}>You will see an file named 'authorized_key' </p>
              </li>
              <li>Generate SSH-Key:
              <pre style={{ marginTop: "2vmin" }} className="copy-to-clipboard code_highlighter">
              <code className="language-html">{`ssh-keygen -t ed25519 -a 200 -C “your_email@example.com”
`}
              </code>
              </pre>
              <p style={{ marginTop: "2vmin" }}>Now two files will be created in ssh directory, one will be cicd(private key) & cicd.pub(public key) <img src={aws_cicd_1} alt="aws_cicd_1" /> </p>
              <p style={{ marginTop: "2vmin" }}>Now copy public key in 'authorized_key'</p>
              <pre style={{ marginTop: "2vmin" }} className="copy-to-clipboard code_highlighter">
              <code className="language-html">{`cat cicd.pub

nano authorized_keys
`}
              </code>
              </pre>
              <p style={{ marginTop: "2vmin" }}>ctrl+x to save </p>
              </li>
              <li>Now copy private key in your Github Secrets <pre style={{ marginTop: "2vmin" }} className="copy-to-clipboard code_highlighter">
              <code className="language-html">{`cat cicd
`}
              </code>
              </pre></li>
            </ul>
            </div>
            <div className="what_is">
                <h4>Configure Github Secrets</h4>
                <img src={aws_cicd_2} alt="aws_cicd_2" />
                <p>Now create new repository secret one by one</p>
                <ol><li><strong>KEY:</strong>Your key</li>
                <li><strong>HOST:</strong>Your IP Address/Domain</li>
                <li><strong>INSTANCE_ID:</strong>Your Instance ID</li>
                <li><strong>PORT:</strong>22</li>
                <li><strong>USER:</strong>ubuntu</li></ol>
            </div>
            <div className="what_is">
                <h4>Create yml file in root of your project</h4>
                <pre className="copy-to-clipboard code_highlighter">
              <code className="language-html">{`mkdir .github/workflows
cd .github/workflows
nano deploy.yml
              `}</code>
              </pre>
            </div>
            <div className="what_is">
                <h4>Configure yml file</h4>
                <pre className="copy-to-clipboard code_highlighter">
              <code className="language-git">{`name: CICD Example
              
	on:
	  push:
	    branches:
	        - master

	jobs:
	  build:
	    runs-on: ubuntu-latest
	    strategy:
	      matrix:
	        node-version: [16.x]

	    steps:
	      - uses: actions/checkout@v2
	      - name: Use node js
	        uses: actions/setup-node@v1
	        with:
	          node-version: $ {{matrix.node-version}}
	      - name: npm install and build
	        run:  |
	          npm install
	          cd frontend
	          npm install

	        env:
	          CI: true

	  deploy:
	    needs: [build]
	    runs-on: ubuntu-latest

	    steps:
	      - name: SSH deploy
	        uses: appleboy/ssh-action@master
	        with:
	          host: $ {{secrets.HOST}}
	          username: $ {{secrets.USER}}
	          key:  $ {{secrets.KEY}}
	          port: $ {{secrets.PORT}}

	          script: |
	              cd MERN-Example
	              git pull origin master
	              npm install
	              cd frontend
	              npm install
	              cd ..
	              cd backend
	              pm2 restart server.js     
`}</code>
              </pre>
<p style={{marginTop:'4vmin'}}><strong>Note: remove space after '$' and
make sure the indentation is proper.</strong></p>

<p style={{marginTop:'4vmin'}}><strong>Finally, push all the changes in your github repository!</strong></p>
<img src={aws_cicd_3} alt="aws_cicd_3" />
<p style={{marginTop:'4vmin'}}><strong>Cheers! 😄 You have successfully created a CI/CD Pipeline for your MERN Project on AWS. </strong></p>
            </div>
            </div>
    </article>
  )
}

export default AwsCi