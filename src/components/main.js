import React from 'react'
import LandingPage from './landingpage';
import  Project from './project'
import Contact from './contact'
import Resume from './resume'
import AboutMe from './aboutme'

import {Switch, Route} from 'react-router-dom'

const Main = () => {
    return(
<Switch>

     <Route exact path='/' component={LandingPage}/>
     <Route path='/project' component={Project}/>
     <Route path='/contact' component={Contact}/>
     <Route path='/resume' component={Resume}/>
     <Route path='/about' component={AboutMe}/>

</Switch>
    )

}

export default Main
