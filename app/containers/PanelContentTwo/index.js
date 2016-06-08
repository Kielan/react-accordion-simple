import React from 'react';
import autoBind from 'react-autobind';


export default class PanelContentTwo extends React.Component {
    constructor(props) {
	super(props);
	autoBind(this);
    }

    render() {
	return (
		<div><span>well well well bunny rabbit</span></div>
	)
    }
    
}
