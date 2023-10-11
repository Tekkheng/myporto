import myCv from "../files/Tek Kheng - CV.pdf";
import { BrowserRouter as Router} from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const myButton = ((props)=>{
    const targetLink = props.targetLink;
    // if(props.text == "Download CV"){
    //     return(
    //         <a href={myCv} target="_blank" style={{textDecoration:"none",color:"black"}} download>                    
    //             <button className={props.btnClass}>
    //                 {props.text}
    //             </button>
    //         </a>
    //     )
    // }
    // return(
    //     <Router>
    //         <Link to={targetLink}>
    //         <button className={props.btnClass} type={props.type} style={props.style}>{props.text}</button>
    //         </Link>
    //     </Router>
    // )
  
    return(
        <>
        {props.text == "Download CV" ? 
        (
            <a href={myCv} target="_blank" style={{textDecoration:"none",color:"black"}} download>                    
                <button className={props.btnClass}>
                    {props.text}
                </button>
            </a>
        ) : 
        (
            <Router>
                <Link to={targetLink}>
                <button className={props.btnClass} type={props.type} style={props.style}>{props.text}</button>
                </Link>
            </Router>
        )}
        </>
        
    )
});
export default myButton