import React from 'react';
import autoBind from 'react-autobind';


export default class PanelContentOne extends React.Component {
    constructor(props) {
	super(props);
	autoBind(this);
    }

    render() {
	return (
		<div><span>well well well</span></div>
	)
    }
    
}
