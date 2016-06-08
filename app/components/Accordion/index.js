import React, {PropTypes, Children} from 'react';
import autoBind from 'react-autobind';
import Animate from 'react-animate';
import _ from 'underscore';
import Panel from '../Panel';
import PanelHeader from '../PanelHeader';
import PanelContentOne from '../../containers/PanelContentOne';
import PanelContentTwo from '../../containers/PanelContentTwo';

export default class Accordion extends React.Component {
    
    render() {
	//add the content to the accordion container
	

//var children = React.Children.map(this.props.children, this.enhanceSection);
	//render return block
	return (
		<div>
			<Panel header={<PanelHeader HeaderContentTitle={'geography'} HeaderContentSubtitle={'All countries, states, and cities'} />} content={<PanelContentOne />} key="1" />
		
		<Panel header={<PanelHeader HeaderContentTitle={'device category & supply type'} HeaderContentSubtitle={'All device categories and all supply chains'} />} content={<PanelContentTwo />} key="2" /></div>
	)
    }
}
