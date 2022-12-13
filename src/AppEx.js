import React from "react";
import Menuitems from "./ProjectEx/Menuitems";

class Navbar extends React.Component{
    state={clicked: false}
    handleclick=()=>{
        this.setState({
            clicked: !this.state.clicked
        })
    }
    render(){
        return(
        <div className="navbaritems">
            <h1 className="navbar-logo"><i className="fab fa-react">logo</i></h1>
            <div className="menu-icon" onClick={this.handleclick}>
            <i className={this.state.clicked ? 'fa-solid fa-xmark' : 'fa-solid fabars'}></i>
            </div>
            <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
            {Menuitems.map((item,index)=>{
                return(
                  <li key={index}><a className={item.className} href={item.url}>{item.title}</a></li>
                )
            }
            )}
            </ul>
        </div>
        )
    }
}
export default Navbar;