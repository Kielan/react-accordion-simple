import React, { PropTypes } from 'react';
import autoBind from 'react-autobind';
import Animate from 'rc-animate';
import PanelContent from '../PanelContent';

class AccordionPanel extends React.Component {
    constructor(props) {
	super(props);
	autoBind(this);
	this.state= {
	    
	};
    }
    static displayName = 'AccordionPanel';
    handleItemClick() {
	
    }

    render() {
	const {prefixCls, header, children, isActive} = this.props;
	const headerCls ='';

	return (
		<div>
		<div>
		<i>{header}</i>
		</div>
		<Animate>
		<PanelContent>
		{children}
		</PanelContent>
	    </Animate>
		</div>
	)
    }
}

export default AccordionPanel;
