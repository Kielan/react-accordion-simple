import React, {PropTypes, Children} from 'react';
import autoBind from 'react-autobind';
import Animate from 'react-animate';
import _ from 'underscore';
export default class Accordion extends React.Component {
    constructor(props){
	super(props);
	autoBind(this);

	var itemMap = React.Children.map(function(i, idx) {
	    return {
		animating: false,
		open: idx === 0,
		content: i.content,
		header: i.header
	    }
	})
	this.state = {
	    itemMap: itemMap
	}
    }

    toggle(idx, event) {
 var _this = this, currentHeight = this.getParentHeight(event),
            scrollHeight = this.getParentScrollHeight(event), newHeight,
            itemMap = this.state.itemMap;

        //toggle animation for this item
        itemMap[idx].animating = true;
        this.setState({itemMap: itemMap});

        //choose the right the new height
        newHeight = currentHeight >= 25 ? "25px" : scrollHeight + "px";

        //send off to the animation library
        this.animate(
            idx + "toggle",
            {height: currentHeight + "px"},
            {height: newHeight},
            250,
            {
                //when it's done, toggle animating bool
                onComplete: function() {
                    var newMap = _this.state.itemMap;
                    newMap[idx].animating = false;
                    newMap[idx].open = newHeight !== "25px";
                    _this.setState({itemMap: newMap});
                }
            }
        );

    }

    getParentHeight(event) {
	return event.target.parentNode.clientHeight;
    }

    getParentScrollHeight(event) {
	return event.target.parentNode.scrollHeight;
    }

    getItemHeaderStyle() {
	
    }
    getContents() {
	    
	    var index = 0;
	    
	    return Children.map(this.props.children, function(c){
		if(!_.isString(c)) console.log('not s tring either')
		var clonedOption = c;
		
		//  var active = this.state.activeIndex === index;
		//clone element which does carry over props
		let newOption = React.cloneElement(c, {
		    foo: true
		});
		index++;
		console.log('clonedOption', clonedOption, 'newOption', newOption)
		return clonedOption;
	    })
    };
    enhanceSection() {
	var selectedId = this.state.selected,
	    id = child.props.id;

	return React.addons
    }
    render() {
	var _this = this.getContents();
	//add the content to the accordion container
	

	var children = React.Children.map(
	    this.props.children, this.enhanceSection);
	//render return block
	return (
		<div>{children}</div>
	)
    }
}
