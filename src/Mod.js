import React from "react";
import Axios from "axios";
import Table from "./Table";
import { Jumbotron } from "react-bootstrap";

export default class Mod extends React.Component{
    constructor(props){
        super(props);
        this.getData=this.getData.bind(this);
    }

    state = {
        totalcase:0,
        confirmedIndian: 0,
        //confirmedForeign: 0,
        discharge: 0,
        deaths: 0,
        //a:[]

        
        
    }
    componentDidMount(){
        this.getData();
    }

    async getData(){
        const resApi = await Axios.get("https://api.rootnet.in/covid19-in/stats/latest");
    
        
        var body = JSON.stringify(resApi);
        var obj = JSON.parse(body);
        
        this.setState({
            lastRefreshedd: resApi.data.lastRefreshed.value,
            totalcase:obj.data.data.summary.total,
            confirmedIndian: obj.data.data.summary.confirmedCasesIndian,
           // confirmedForeign: obj.data.data.summary.confirmedCasesForeign,
            discharge: obj.data.data.summary.discharged,
            deaths: obj.data.data.summary.deaths
            
            
        });
    }

    
render(){
    return (
        <Jumbotron>
            <div className="container">
                 <h4>Only India Cases</h4>
                <div className="row">
                    <div className="col-sm boxy totalcase">
                        <h4>Total</h4>
                        <h4>{this.state.totalcase}</h4>
                    </div>
                <div className="col-sm boxy confirmedcase">
                        <h4>Confirmed</h4>
                        <h4>{this.state.confirmedIndian}</h4>
                </div>
                <div className="col-sm boxy totaldicharged">
                        <h4>Discharged</h4>
                        <h4>{this.state.discharge}</h4>
                </div>
                <div className="col-sm boxy deaths">
                        <h4>Deceased</h4>
                        <h4>{this.state.deaths}</h4>
                </div>
                </div>
                <Table/>
            </div>
            </Jumbotron>
           
              
        )
}
}
