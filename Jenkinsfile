def gv
pipeline {
  agent any
  /*environment {
    registry = "achrafladhari/graphql"
    registryCredential = 'docker'
    dockerImage = ''
  }*/
  //build on push
  triggers {
    pollSCM('') 
  }

  stages{
    stage("init") {
      steps {
        script {
          gv = load "script.groovy"
        }
      }
    }
    stage("build") {
      steps {
        script {
          gv.buildApp()
        }
        nodejs("20.11.0") {
          sh 'yarn install'
        }
      }
    }
    stage("test") {
      steps {
        script {
          gv.testApp()
        }
        nodejs("20.11.0"){
        //sh 'yarn global add jest --force'
        sh 'npx jest'
        }
      }
    }
    stage('Building docker image') {
      steps{
        sh 'docker build -t devops-graphql .'
      }
    }
    stage("deploy") {
      steps {
        script {
          gv.deployApp()
          withCredentials([usernamePassword(credentialsId: 'dockerhub-pwd', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]){
            sh "docker login -u ${USERNAME} -p ${PASSWORD}"
            sh "docker push devops-graphql"
          }
        }
      }
    }
    
  }
  post {
    success {
      echo 'SUCCESS !'
    }
    failure {
      echo 'Failure !'
    }
  }
}
