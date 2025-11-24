

pipeline {
    agent any;

    stages {
        stage("Code Clone") {
            steps {
                git url: "https://github.com/Punkakz/online_shop" , branch: "Hackathon"
            }
        }
        
        stage("Build") {
            steps {
                sh "docker build -t nodeapp ."
            }
        }
        
        stage("Test") {
            steps {
                echo "Testing code"
            }
        }
        
          stage("Push on DockerHub") {
            steps {
                withCredentials([usernamePassword(credentialsId:"dockerCreds",
                passwordVariable: "dockerpass",
                usernameVariable: "dockeruser"
                )]){
                sh "docker login -u ${env.dockeruser} -p ${env.dockerpass}"
                sh "docker image tag nodeapp ${env.dockeruser}/nodeapp"
                sh "docker push ${env.dockeruser}/nodeapp:latest"
                }
            }
        }
        
        stage('Deploy') {
            steps {
                sh "docker compose up -d --build"
            }
    }
}
}
