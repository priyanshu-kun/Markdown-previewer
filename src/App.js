import React, { Component } from "react"
import MarkdownBoard from "./Markdown_Board";
import marked from "marked"
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
    console.log(marked(this.state.markup));
    return (
      <div className="App" >
        <h1 >Markdown previewer</h1>
        <div className="board">
          <MarkdownBoard getInputValue={this.GetInputValue} markup={this.state.markup} />
          <img id="image" src="https://raw.githubusercontent.com/dcurtis/markdown-mark/master/png/208x128-solid.png" alt="markdown-img" />
          <div className="previewer" dangerouslySetInnerHTML={{ __html: marked(this.state.markup, { gfm: true, breaks: true }) }} />
        </div>
      </div>
    );
  }
}

export default App;
