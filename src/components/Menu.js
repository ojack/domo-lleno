import React, { Component } from "react";
import { Link } from "react-router-dom"
import logo from './../images/logo-menu.png'
//import { Config } from "../config.js";

const linkClass = "flex-1 text-sm p-2 w-64 flex-1 m-auto text-white hover:text-grey uppercase font-menu no-underline"

const menuList = [
  {
    ID: 1,
    object: 'category',
    title: 'Artistas Invitados',
    url: '/artistas'
  },
  {
    ID: 2,
    object: 'category',
    title: 'Festivales Invitados',
    url: '/festivales'
  },
  {
    ID: 3,
    object: 'category',
    title: 'Programación',
    url: '/programacion'
  },
  {
    ID: 4,
    object: 'category',
    title: '¿Cómo Participar?',
    url: '/como-participar'
  }
]

class Menu extends Component {
  constructor() {
      super();
      this.state = {
        active: false
      }
  }

  componentDidMount() {
      setTimeout(() => this.setState({active: true}), 300)
  }
  render() {
      const menuItems = menuList.map((item, index) => {
        return (
            <Link
                to={item.url}
                key={item.ID}
            >
                <a className={linkClass}>{item.title}</a>
            </Link>
        );
    });

    var menuClass = "flex flex-col md:flex-row menu"
    // if(this.state.active === true) {
      menuClass +=  " mt-8"
    // } else {
    //   menuClass += " -mt-32"
    // }
    return(
      <div className = {menuClass} key="main-menu">
          <Link to='/inicio'>
            <div className = "flex-1 h-full cursor-pointer m-3"
                style={{
                  background: "url("+logo+")",
                  minHeight: '100px',
                  minWidth: '300px',
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}>
            </div>
          </Link>
          <div className = "ml-12 flex-2.5 h-100 w-100 flex flex-col sm:flex-row sm:flex-wrap">
            {menuItems}
          </div>
      </div>
    )
  }


}

export default Menu;
