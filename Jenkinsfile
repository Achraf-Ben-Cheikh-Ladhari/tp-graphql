def gv
pipeline {
  agent any
  parameters{
    choice(name: 'VERSION', choices: ['1.1.0', '1.2.0', '1.3.0'])
  }

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
        nodejs("20.11.0") {
          sh 'yarn install'
        }
      }
    }
    stage("build") {
      steps {
        script {
          gv.buildApp()
        }
      }
    }
    stage("test") {
      when {
        expression {
          BRANCH_NAME == 'test' || BRANCH_NAME == 'main'
        }
      }
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
    stage("deploy") {
      steps {
        script {
          gv.deployApp()
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
