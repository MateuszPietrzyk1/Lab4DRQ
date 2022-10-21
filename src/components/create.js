import React from "react";

export class Create extends React.Component {


    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
        this.onChangeBookCover = this.onChangeBookCover.bind(this);
        this.onChangeBookAuthor= this.onChangeBookAuthor.bind(this);


        this.state = {
            title:``,
            cover:``,
            author:``
        }
    }
    //implementation of handle submit
    handleSubmit(e) {
        e.preventDefault();
        console.log(`${this.state.title}`);
        console.log(`${this.state.cover}`);
        console.log(`${this.state.author}`);

    }


    //changes the book title from the reader 
    onChangeBookTitle(e){
        this.setState({
            title:e.target.value
        }) 
    }

    //changes the book conver from the reader 
    onChangeBookCover(e){
        this.setState({
            title:e.target.value
        }) 
    }

    //changes the book author from the reader 
    onChangeBookAuthor(e){
        this.setState({
            title:e.target.value
        }) 
    }

    render() {
        return (
            <div>
                <h3>hello from my Create component</h3>
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label>Add Book Title: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeBookTitle}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Book Cover: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeBookCover}
                        />
                    </div>


                    <div className="form-group">
                        <label>Add Book Author: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeBookAuthor}
                        />
                    </div>
                
                <input type="submit" value="Add Book"/>

                </form>
            </div>
        );
    }
}