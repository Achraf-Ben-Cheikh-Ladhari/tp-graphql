def gv
pipeline {
  agent {
    label 'agent-docker'
  }
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
        sh 'docker build -t graphql/devops-graphql .'
      }
    }
    stage("deploy") {
      steps {
        script {
          gv.deployApp()
          withCredentials([string(credentialsId:'dockerhub-pwd', variable:'dockerhubpwd')])
          sh "docker login -u achrafladhari -p ${dockerhubpwd}"
          sh "docker push graphql/devops-graphql"
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
