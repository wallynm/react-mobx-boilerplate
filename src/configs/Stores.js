
import { RouterStore as MobxRouterStore } from 'mobx-react-router'
const RouterStore = new MobxRouterStore()

import AppStore from 'modules/app/AppStore'
import { UserStore } from 'modules/user'

export default {
  RouterStore,  
  AppStore,
  UserStore
}