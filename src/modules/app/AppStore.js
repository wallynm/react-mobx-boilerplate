import { observable, action } from 'mobx';

class AppStore {
  @observable sidebarOpen = true;

  @action
  toggleSidebar() {
    const statys = !this.sidebarOpen
    this.sidebarOpen = statys;
  }
}

export default new AppStore();