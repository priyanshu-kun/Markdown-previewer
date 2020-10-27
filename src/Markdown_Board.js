import React, { Component } from "react";

class MarkdownBoard extends Component {

    handleChange = (e) => {
        this.props.getInputValue(e.target.value)
    }
    render() {
        return (
            <form>
                <textarea onChange={this.handleChange} type="text" name="textarea" id="textarea" ></textarea>
            </form>
        )
    }
}

export default MarkdownBoard;