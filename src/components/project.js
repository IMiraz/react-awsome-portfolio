import React, {Component} from 'react'
import{Tabs, Tab} from 'react-mdl'

class Project extends Component {
    constructor(props) {
 super(props)

 this.state = {
activeTab:0
 };
    }
    render() {
        return (
           <div className="category-tabs">
<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({
 activeTab:tabId
})} ripple>
                     <Tab>REACT</Tab>
                    <Tab>JAVASCRIPT</Tab>
                    <Tab>PHP</Tab>
                    <Tab>Express JS</Tab>

           </Tabs>

           </div>
        );
    }


}

export default Project