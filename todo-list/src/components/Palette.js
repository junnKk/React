import React,{Component} from "react";
import './Palette.css'

// class Palette extends Component{
//     render(){
//         const { colors, onColor } = this.props;
//         /* colors : 색상 객체들이 들어있는 배열
//         onColor : 색상 변경
//         */

//         const colorList = colors.map(
//             (color) => key={color}
//         )
//         return(
//             <div className = "palette">
//                 <div className={`color ${active?'actived':''}`}>
//                 </div>  
//             </div>
//         );
//     }
// }

const Color =({color, active, onClick})=>{
    return (
        <div className ={`color ${active ? 'active': ''}`} onClick={onClick}
         style={{background: color}}>

        </div>
    )
}

const Palette =({colors, selected, onSelect})=>{
    const colorList = colors.map(
        (color)=>(<Color 
            color={color}
            active ={color===selected}
            onClick={()=>onSelect(color)}   
            key= {color}         
            />
        )
    );
    return (
        <div className="palette">
            {colorList}
        </div>
    )
};

export default Palette;