import React, { Component } from "react";
import CardList from './CardList';
import Searchbox from './Searchbox';
import Scroll from './Scroll'
import errorBoundary from "./errorBoundary";

class App extends Component{
    constructor(){
        super()
        this.state={
            robots:[],
            searchfield:''
        }
        this.onSearchChange = this.onSearchChange.bind(this);
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            
            .then(users=>{this.setState({robots:users})})
        
    }

    onSearchChange=(event)=>{
        this.setState({searchfield: event.target.value})
        
    }

    render(){
        const filteredRobots = this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if(this.state.robots.length===0){
            <h1>LOADING.....</h1>
        }
        else{
            return(
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <Searchbox searchChange={this.onSearchChange} /><br></br>
                    <Scroll>
                        <errorBoundary>
                            <CardList robots={filteredRobots}/>
                        </errorBoundary>
                    </Scroll>
                </div>
                
            );
        }
    }
}



export default App