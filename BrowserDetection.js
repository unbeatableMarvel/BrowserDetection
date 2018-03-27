import React, { Component } from 'react';

export default class BrowserDetection extends Component {
	constructor(props) {
        super(props);
        this.state={
            browserDetails:[] //array to store browser details 
        }
    }

    componentDidMount()
    {
        //on browser load call the browserDetection function to show the details
        this.browserDetection();
    }
  //function to catch the browser name and version
    browserDetection=()=>
    {
        
      var browSerInformation=navigator.userAgent.split(')').reverse()[0].match(/(?!Gecko|Version|[A-Za-z]+?Web[Kk]it)[A-Z][a-z]+\/[\d.]+/g)[0].split('/');
      //matching it is returning the array of browser details
      if(browSerInformation && Array.isArray(browSerInformation))
      {
          //setting the state to show details on UI
           this.setState({browserDetails:browSerInformation})
      }
      else
      {
          //alert is displayed  when not able to detect browser
          alert("Not able to detect Browser")
      }
     
    }
	render() {
        
		
		return (
            <div style={{textAlign:'center'}}>
		            <div style={{fontWeight:'bold',fontSize:'27px',marginTop:'25px',marginBottom:'40px'}}>Brower Detected Details</div>
                    <div >
                    <div style={{fontSize:'21px',marginBottom:'20px'}}>Browser Name: {this.state.browserDetails && this.state.browserDetails[0]}</div>
                    <div style={{fontSize:'21px'}}>Browser Version: {this.state.browserDetails && this.state.browserDetails[1]}</div>
                    
                     
                    </div>
                    </div>
						);
					}
				}

				
				