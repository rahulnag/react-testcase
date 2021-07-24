import React, { Component } from 'react';

class ListDemo extends Component {

    constructor(props){
        super(props)
        this.state={
            counter: 0,
            arr:[],
        }
    }
    addToList=()=>{
        console.log(this.state.arr)
        this.setState({
            counter: this.state.counter+1,
            arr: [...this.state.arr, this.state.counter]
            // WE CANNOT USE PUSH TO PUSH TO PUSH ELEMENT TO ARRAY AS INSIDE SET STATE WE ARE PUSHING AND ASSIGNING IT TO ARRAY, BUT PUSH IS RETURNING THE LENGTH WHIHC IS NOT OF TYPE [] S THROWING ERROR
        })
    }
    render() {
        return (
            <div>
            <form id="myform" name="contacts" method="POST" data-netlify="true">
              <div class="form-group">
                <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4"/>
                <div class="validation"></div>
              </div>
              <div class="form-group">
                <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email"/>
               <div class="validation"></div>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4"/>
               <div class="validation"></div>
              </div>
              <div class="form-group">
                <textarea class="form-control" name="message" rows="5" data-rule="required" placeholder="Message"></textarea>
                <div class="validation"></div>
              </div>
              <p class="text-center"><button type="submit">Send</button></p>
			</form>

                <button onClick={this.addToList}>CLICK TO ADD</button>
                
                {
                    this.state.arr.map((e,i)=>{
                        return <li key={i}>{e}</li>
                    })
                }
                
            </div>
        );
    }
}

export default ListDemo;