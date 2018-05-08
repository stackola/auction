import React from 'react';
import CSSModules from 'react-css-modules';
import style from './style.less';

@CSSModules(style, {allowMultiple:true, handleNotFoundStyleName:'log'})
export default class InputField extends React.Component{
	render(){
		return (<input styleName="input" type="text" value={this.props.value} onChange={(e)=>{this.props.onChange(e)}}/>);
	}
}