# React App Deployment with AWS Kubernetes & Jenkins
<img alt="Coding" width=500 height=300 src="https://user-images.githubusercontent.com/76843511/232758785-3234d819-0cbc-4818-8237-b378467a9bbf.png" alt="shashikumar" />
RUN & TEST REACT APP
-npm install
-npm start

"Deployment-Detailed-Explanation" file will guide you for Step by Step Deployment of React-App on AWS EKS with Jenkins.

In the git repo please find the PDF file "Deployment-Detailed-Explanation" for step by step understanding of this deployment.
Follow these steps:
1. install java
2. install jenkins
3. Start jenkins
4. install AWS CLI for working with AWS services as EKS, ECR
5. install eksctl - command line tool for working with EKS clusters that automates many individual tasks.
6. install kubectl - command line tool for working with Kubernetes clusters
7. create AWS EKS cluster with eksctl cli
8. Create iam role with AdministrationAccess and attach with ec2.
9. Create AWS EKS cluster using eksctl:
10. Create AWS ECR repo
11. Install Docker
12. Install Jenkins Plugins
13. Verify If EKS Cluster is up and running
14. Setup Connection Between Jenkins and Kubernetes
15. Build the jenkins pipeline for deployment
