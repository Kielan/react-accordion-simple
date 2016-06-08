import React from 'react';
import Radium from 'radium';
import Collapse, { Panel } from 'rc-collapse';
import Accordion from '../../components/Accordion';
import AccordionPanel from '../../components/AccordionPanel';
import AccordionHeader from '../../components/AccordionHeader';
import autoBind from 'react-autobind';


class CampaignsAccordion extends React.Component {
    constructor(props) {
	super(props);
	autoBind(this);
	this.state= {
	    activeKey: "4",
	};
    }
    onChange(activeKey) {
	this.setState({
	    activeKey,
	});
    }
    render() {
	const activeKey = this.state.activeKey;
	return (
		<Accordion>
		<AccordionPanel header={<AccordionHeader HeaderContentTitle={'geography'} HeaderContentSubtitle={'All countries, states, and cities'} />} key="1">
		<div><p>some content</p></div>
		</AccordionPanel>
		<AccordionPanel header={<AccordionHeader HeaderContentTitle={'device category & supply type'} HeaderContentSubtitle={'All device categories and all supply chains'} />} key="2">
		<div><p>some content</p></div>
		</AccordionPanel>	    	    </Accordion>
	)
    }
    
}

export default Radium(CampaignsAccordion)
