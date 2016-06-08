import React, { PropTypes } from 'react';
import autoBind from 'react-autobind';
import Animate from 'rc-animate';
import PanelContent from '../PanelContent';
import PanelHeader from '../PanelHeader';

const panelStyle = {
    sectionClosed: {
	height: 0,
	overflow: 'hidden',
	transition: 'all .2s ease-in',
    },
    sectionOpen: {
	height: 120,
	overflow: 'hidden',
	transition: 'all .2s ease-in',
	
    }
}

class Panel extends React.Component {
    constructor(props) {
	super(props);
	autoBind(this);
	this.state= {
	    open: false,
	    class: panelStyle.sectionClosed,
	};
    }
    static displayName = 'AccordionPanel';

    expand() {
	if(this.state.open) {
	    this.setState({
		open: false,
		class: panelStyle.sectionClosed
	    })
	} else {
	    this.setState({
		open: true,
		class: panelStyle.sectionOpen
	    })
	}
    }

    render() {
	const {children} = this.props;
	//const headerCls ='';

	return (
		<div >
		<div onClick={this.expand}>{this.props.header}</div>
		<div style={this.state.class}>{this.props.content}</div>
		</div>
	)
    }
}

export default Panel;
