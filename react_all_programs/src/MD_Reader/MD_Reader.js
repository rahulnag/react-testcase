import React from 'react';
import ReactMarkdown from 'react-markdown'

let content = require('./README.md')
class MD_Reader extends React.Component {
    state={
        agreementContent:"",
    }

    componentDidMount(){
        fetch("https://raw.githubusercontent.com/rahulnag/React-TestCases/master/README.md")
        .then(response => { return response.text() })
        .then(text => { console.log(text) 
            this.setState({ agreementContent: text }) 
        })
        .catch(err => { console.log(err) 
        })
    }

    render() {
        console.log(this.state.agreementContent)
        return (
            <>
            <h1>jjjj</h1>
                <ReactMarkdown children={this.state.agreementContent} />
            </>
        );
    }
}

export default MD_Reader;
