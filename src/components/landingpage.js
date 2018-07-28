import React, {Component} from 'react'
import  {Cell, Grid} from 'react-mdl'

class LandingPage extends Component {
    render() {
        return (
            <div style={{ width:'100%', margin:'auto'}}>
            <Grid className="landing-grid">
            <Cell col={12}>
         <img src="https://www.shareicon.net/download/2015/09/18/103161_man_512x512.png" className="avatar-img" />
     <div className="banner-text">

  <h1>Full Stack Developer</h1>
<hr/>
 <p>HTML/CSS| Bootstrap | Javascript | Node Js |PHP| React | Express</p>
 <div className="social-link">
 <a href="" target="_blink">
<i ></i>

 </a>

 </div>
  </div>
            </Cell>
            </Grid>


            </div>
        );
    }


}

export default LandingPage