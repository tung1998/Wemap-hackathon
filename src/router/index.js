//init vue
import Vue from 'vue'
import Router from 'vue-router'
//import page
import LoginPage from '@/components/LoginPage/LoginPage.vue'
import ErrorPage from '@/components/ErrorPage/ErrorPage.vue'

//function 
import {
  checkAccessToken
} from '../api/user'
import {
  handleError
} from '../helper/function'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'index',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
      // beforeEnter: beforeEnterLogin
    },
    // {
    //   path: '/manager',
    //   component: ManagerWorkingPage,
    //   children: [{
    //     name: 'manager',
    //     path: '',
    //     redirect: 'profile'
    //   }],
    //   // beforeEnter: beforeEnterStudent
    // },
    {
      name: "error",
      path: "*",
      component: ErrorPage
    }
  ]
})


//checkPermistion
function beforeEnterLogin(to, from, next) {
  let accessToken = Vue.$cookies.get('accessToken')
  if (accessToken)
    checkAccessToken(accessToken).then(result => {
      console.log(result)
      if (result.data && result.data.userType == 0) {
        next({
          name: 'managerProfile'
        })
      }
      if (result.data && result.data.userType == 1) {
        next({
          name: 'studentProfile'
        })
      }
      next()
    }).catch(error => {
      handleError(error)
      next()
    })
  else next()
}

function beforeEnterManager(to, from, next) {
  let accessToken = Vue.$cookies.get('accessToken')
  if (accessToken)
    checkAccessToken(accessToken).then(result => {
      if (result.data && result.data.userType == 0)
        next()
      else if (result.data && result.data.userType == 1)
        next({
          name: 'studentProfile'
        })
      else next({
        name: 'login'
      })
    }).catch(handleError)
  else next({
    name: 'login'
  })
}

function beforeEnterStudent(to, from, next) {
  let accessToken = Vue.$cookies.get('accessToken')
  if (accessToken)
    checkAccessToken(accessToken).then(result => {
      if (result.data && result.data.userType == 1)
        next()
      else if (result.data && result.data.userType == 0)
        next({
          name: 'managerProfile'
        })
      else next({
        name: 'login'
      })
    }).catch(handleError)
  else next({
    name: 'login'
  })
}

export default router
