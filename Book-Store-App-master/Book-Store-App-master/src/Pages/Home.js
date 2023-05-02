import React, { Component } from "react";
import Counter from "../component/Counter";
import Title from '../component/Title'
class Home extends Component {
    constructor(){
        super()
        this.state = {
            title:"Book-store",
            description:"Book-store is online book buying and selling web app.its give you all the latest book which is available in market.our web app also provide the all the old book also which is rare to find."
        }
    }
    render() {
        return (
            <>
                {/* <Title text="Book-e-sell"/>
                <Title text="this is my react training project."/>
                <Title text="this ia about component"/>
                <Title text="Home"/>
                <Title text="About"/>
                <Title text="Login"/> */}
                <Title title={this.state.title} desc={this.state.description}/>
                <div className="container">

                    {/* <h3>classbased Home Component</h3> */}
                    <Counter />
                </div>
            </>
        );
    }
}
export default Home;