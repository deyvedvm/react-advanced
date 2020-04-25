import React from "react";

function withTooltip(Component) {

    return class WithTooltip extends React.Component {
        state = {
            showToolTip: false
        };

        mouseOver = () => {
            this.setState({
                showToolTip: true
            });
        };

        mouseOut = () => {
            this.setState({
                showToolTip: false
            });
        };

        render() {
            return (
                <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
                    <Component
                        {...this.props}
                        showToolTip={this.state.showToolTip}/>
                </div>
            );
        }
    };
}

export default withTooltip;
