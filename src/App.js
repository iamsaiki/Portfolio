import React,{ Component } from 'react';
import Projects from './Projects';

class App extends Component{

    constructor(){
        super(); //super is used to invoke constructor of parent Component class.
        this.state = {displayBio: false}; 

        console.log('Component this', this);

        this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
        }

    toggleDisplayBio() {
        this.setState({displayBio: !this.state.displayBio });
        //  this.state.displayBio = !this.state.displayBio;??
    }
    render() {
        return (
            <div>
                <h1>Hello!</h1>
                <p>My name is David. I'm a software developer.</p>
                <p>I'm always looking forward to working on meaningful projects.</p>
                {this.state.displayBio ? (
                <div>
                    <p>I live in San Francisco, and code every day.</p>
                    <p>My favorite language is JavaScript, and I think React.js is awesome.</p>
                    <p>Besides coding, I love music and ramen!</p>
                    <button onClick={this.toggleDisplayBio}>Show Less</button>
                </div>
                ) : (<div>
                        <button onClick={this.toggleDisplayBio}>Read More</button>
                    </div>
                    )
                }
                <hr/>
                <Projects />
            </div>
        )
    }
}
export default App; //to make sure other files use above components