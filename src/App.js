import React, { Component } from "react"
import MarkdownBoard from "./Markdown_Board";
import Previewer from "./Previewer"
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markup: ""
    }
  }

  GetInputValue = (data) => {
    this.setState({
      markup: data
    })
  }


  render() {
    return (
      <div className="App" >
        <h1>Markdown previewer</h1>
        <div>
          <MarkdownBoard getInputValue={this.GetInputValue} />
          <hr />
          <Previewer collectedData={this.state.markup} />
        </div>
      </div>
    );
  }
}

export default App;
