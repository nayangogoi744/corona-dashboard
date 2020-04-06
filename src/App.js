import React from "react";
import Axios from "axios";
import Mod from "./Mod";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import { Jumbotron } from "react-bootstrap";

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.getCountryData=this.getCountryData.bind(this);
    }
    state = {
        confirmed: 0,
        recovered: 0,
        deaths: 0,
        countries: []
        
    }
    componentDidMount(){
        this.getData();
    }

    async getData(){
        const resApi = await Axios.get("https://covid19.mathdro.id/api");
        const resCountries = await Axios.get("https://covid19.mathdro.id/api/countries");
        const countries = resCountries.data.countries.map(country => {
            return country.name;
          });
        //console.log(countries);
        
        this.setState({
            confirmed: resApi.data.confirmed.value,
            recovered: resApi.data.recovered.value,
            deaths: resApi.data.deaths.value,
            countries
            
        });
    }
    async getCountryData(e){
        if(e.target.value === "WorldWide"){
            return this.getData();
        }
        const res=await Axios.get(`https://covid19.mathdro.id/api/countries/${e.target.value}`);
        this.setState({
            confirmed: res.data.confirmed.value,
            recovered: res.data.recovered.value,
            deaths: res.data.deaths.value
           
        });
    }
    renderCountryOptions(){
            
        return this.state.countries.map((country,i)=>{
            return <option key={i}>{country}</option>
        });

     
    }
    render(){
        return(
            <div>
            <Header/>
            
        <div className="container">
            
            <Jumbotron>
<label className="label" for ="se">Search Here:</label>
<select name="se" className="dropdown" onChange={this.getCountryData}>
    <option>WorldWide</option>
    {this.renderCountryOptions()}
</select>
            <div className="flex">
            <div className="box confirmed">
                <h3>Confirmed Cases</h3>
                <h4>{this.state.confirmed}</h4>
            </div>
            <div className="box recovered">
            <h3>Recovered Cases</h3>
                <h4>{this.state.recovered}</h4>
            </div>
            <div className="box deaths">
            <h3>Death Cases</h3>
                <h4>{this.state.deaths}</h4>
            </div>
            </div>
            </Jumbotron>
            <Mod/>
           
        </div>
        </div>
          
        );
    }
}