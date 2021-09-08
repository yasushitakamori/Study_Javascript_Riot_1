import * as riot from 'riot'
import App from './app.riot'
import App2 from './sub.riot'

const mountApp = riot.component(App)

const mountApp2 = riot.component(App2)

const app = mountApp(
  document.getElementById('app'),
  { message: 'Hello World!!!', message3:'Hello Yasu' }
)

const subb = mountApp2(
  document.getElementById('subb'),
  { message2: 'Hello World!!!moremore', title: 'TODO App', todoList:[ {id: 1,title: 'task1', done: false},{id: 2,title: 'task2', done: true},{id: 3,title: 'task3', done: false},],nextId: 4 }
)
