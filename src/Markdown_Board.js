import React, { Component } from "react";

class MarkdownBoard extends Component {

    handleChange = (e) => {
        this.props.getInputValue(e.target.value)
    }
    render() {
        return (
            <form>
                <textarea onChange={this.handleChange} type="text" name="textarea" placeholder="Please enter your markdown here..." value={this.props.markup} ></textarea>
            </form>
        )
    }
}

export default MarkdownBoard;