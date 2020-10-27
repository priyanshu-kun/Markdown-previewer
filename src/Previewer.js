import React, { Component } from "react";

class Previewer extends Component {

    handleMarkup = () => {

        if (/^#\s/.test(this.props.collectedData) && this.props.collectedData.match(/\n/g) !== null) {
            // console.log(/\r\n/g.match(this.props.collectedData))
            return <h1>{this.props.collectedData.replace(/^#\s/,"")}</h1>
        }
        return <p>{this.props.collectedData}</p>

    }

    render() {
        return (
            <div className="Previewer">
                {this.handleMarkup()}
            </div>
        )
    }
}

export default Previewer;