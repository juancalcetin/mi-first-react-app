//Dependencies
import React from 'react'
import {Route, Switch} from 'react-router-dom'

//Components
import App from '../components/App'
import Home from '../components/Home'
import Page404 from '../components/Page404'
import Contacts from '../components/Contacts'
import Todo from '../components/todo'
import ListActive from '../components/listActive'
import ListComplete from '../components/listComplete'
import ListNoComplete from '../components/listNoComplete'
//Routes
const AppRoutes = () => 
<App>
  <Switch>
      <Route exact path='/' component ={Home} />
      <Route path='/contacts' component ={Contacts}/>
      <Route path='/todo' component={Todo}/>
      <Route path='/active' component = {ListActive}/>
      <Route path='/list-complete' component ={ListComplete}/>
      <Route path='/list-no-complete' component ={ListNoComplete}/> 
      <Route component={Page404}/>
</Switch>
    
</App>

export default AppRoutes;

