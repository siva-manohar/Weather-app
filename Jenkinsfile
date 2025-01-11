pipeline {
    agent any
    stages {
        stage ('build') {
            steps {
                sh '''
                whoami
                aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 232679411998.dkr.ecr.us-east-1.amazonaws.com
                docker build -t k8s-project .
                docker tag k8s-project:latest 232679411998.dkr.ecr.us-east-1.amazonaws.com/k8s-project:${BUILD_NUMBER}
                docker push 232679411998.dkr.ecr.us-east-1.amazonaws.com/k8s-project:${BUILD_NUMBER}
                '''
            }
        }

        stage ('deploy') {
            steps {
                sh '''
                sed "s/xyz/${BUILD_NUMBER}/g" deployment.yaml > deployment-new.yaml
                /var/lib/jenkins/kubectl apply -f deployment-new.yaml
                /var/lib/jenkins/kubectl apply -f service.yaml 
                '''
            }
        }
    }
}