# Dockercompose and kubernetes 

## Description 

This project involved creating Docker files to expose a simple Express server and connect it to a MongoDB image. The entire setup was deployed in Azure Kubernetes Service (AKS).

## Prerequisites 

* Docker
* Kubernetes - kubectl

## Installation

1. 'git clone https://github.com/mvrcentes/Dockercompose_n_Kubernetes_first_deployment.git'
2. Type on the terminal: 'docker build -t <name_of_the_image> --platform Linux/amd64` 
3. Create a repository in your Dcoker account
4. `docker tag <name_of_the_image>:<tag> <register_directy>/<name_of_the_image>:<tag>`
5. 'docker push <register_directy>/<name_of_the_image>:<tag>'
6. Connect your kubernetes cluster to a service

### kubenetes commands - installation

1. 'kubectl apply -f mongo-secret.yaml'
2. 'kubectl apply -f mongoDeployment.yaml'
3. 'kubectl apply -f configmap.yaml'
4. 'kubectl apply -f deployment.yaml'

