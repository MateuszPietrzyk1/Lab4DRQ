import React from "react";
import { Books } from './books';
//import axion 
import axios from "axios";

export class Read extends React.Component {
    //The componentDidMount() method runs after the component output has been rendered to the DOM
    componentDidMount() {
        axios.get(`https://jsonblob.com/api/jsonblob/1027219693823606784`)
        .then(
            (response)=>{
                this.setState({
                    books:response.data
                })
            }
        )
        .catch(()=>{
            console.log(error)
        });
    }
  
    state = {
        books: []
            
              
    }




render(){
    return (
        <div>
            <h3>Hello from my Read component</h3>
            <Books books={this.state.books}></Books>
            
        </div>

    );


}

}
