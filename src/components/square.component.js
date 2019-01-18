import React from "react";

export default class Square extends React.Component {
    render() {
        return (
            <button
                className="square"
                onClick={() =>  this.props.onClick()}
                style={{
                    height: '30px',
                    width: '30px',
                }}
            >
                {this.props.value}
            </button>
        );
    }
}
