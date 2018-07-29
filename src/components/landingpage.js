import React, {Component} from 'react'
import  {Cell, Grid} from 'react-mdl'

class LandingPage extends Component {
    render() {
        return (
            <div style={{ width:'100%', margin:'auto'}}>
            <Grid className="landing-grid">
            <Cell col={12}>
         <img src="https://www.shareicon.net/download/2015/09/18/103161_man_512x512.png" className="avatar-img" alt="profile" />
     <div className="banner-text">

  <h1>Full Stack Developer</h1>
<hr/>
 <p>HTML/CSS| Bootstrap | Javascript | Node Js |PHP| React | Express</p>
 <div className="social-link">
{/*linkedin*/}
 <a href="" target="_blink">
<i className="fa fa-linkedin-square" aria-hidden="true"/>
</a>
{/*github*/}
<a href="github.com" rel="noopener noreferrer" target="_blink">
<i className="fa fa-github-square" aria-hidden="true"/>
</a>
{/*freecodecamp*/}
<a href="" target="_blink">
<i className="fa fa-free-code-camp" aria-hidden="true"/>
</a>

{/*youtube*/}
<a href="" target="_blink">
<i className="fa fa-youtube-square" aria-hidden="true"/>

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