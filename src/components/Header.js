import { useState} from "react";
import { Link } from "react-router-dom";
import { BiMenu, BiX } from "react-icons/bi";

export default function Header() {

    const [collapse, setCollapse] = useState(false);

    const handleToggle = ()=>{
        if(!collapse){
            document.getElementById("mobile-menu").classList.add("block");
            document.getElementById("hero").classList.add("shift-below");
            setCollapse(true)
        }else{
            document.getElementById("mobile-menu").classList.remove("block")
            document.getElementById("hero").classList.remove("shift-below");
            setCollapse(false)
        }
    }

    return (
        <div className="header">
            <div className="row">
                <div className="col-md-5">
                    <div className="menu-icon">
                        <BiMenu size={30}/>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="titles align-self-center">
                        <h2 className="brand">Lotion</h2>
                        <h5>Like notion, but worse.</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

