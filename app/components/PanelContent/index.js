import React from 'react';

class PanelContent extends React.Component {
    shouldComponentUpdate() {
	return this.props.isActive || nextProps.isActive;
    }
    render() {
/*	this._isActived = this._isActived || this.props.isActived;
	if (!this._isActived) {
	    return null;
	    }*/
//	const { prefixCls, isActive, children } = this.props;

	return (
		<div>
		<div>{this.props.children}</div>
		</div>
	)
    }
}

export default PanelContent;
