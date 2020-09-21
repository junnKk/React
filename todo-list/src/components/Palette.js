import React,{Component} from "react";
import './Palette.css'

class Palette extends Component{
    render(){
        const { colors, onColor } = this.props;
        /* colors : 색상 객체들이 들어있는 배열
        onColor : 색상 변경?
        */

        return(
            <div className = "palette">
                <div className={`color ${active?'actived':''}`}>
                </div>  
            </div>
        );
    }
}

export default Palette;