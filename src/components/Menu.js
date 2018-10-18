import React, { Component } from "react";
import { Link } from "react-router-dom"
import logo from './../images/logo-menu.png'
//import { Config } from "../config.js";

const linkClass = "flex-initial text-sm p-0 self-center align-center justify-center w-64 m-0 mt-4 lg:mt-0 text-white hover:text-grey uppercase font-menu no-underline"

const menuList = [
  {
    ID: 0,
    object: 'category',
    title: '¿Qué es Domo LLeno?',
    url: '/inicio'
  },
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
    title: 'Concurso Domo Lleno',
    url: '/como-participar'
  },
  {
    ID: 5,
    object: 'category',
    title: 'Talleres y Conferencias',
    url: '/talleres'
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
                className={linkClass}
                style= {{
                  minWidth: '280px'
                }}
            >
                <div className="align-center">{item.title}</div>
            </Link>
        );
    });

    var menuClass = "flex flex-col md:flex-row menu mb-10"
    // if(this.state.active === true) {
      menuClass +=  " mt-8"
    // } else {
    //   menuClass += " -mt-32"
    // }
    return(
      <div className = {menuClass} key="main-menu">
          <Link to='/' className = "flex-1 h-full cursor-pointer m-3 ml-8 mt-0">
            <div
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
          <div className = "ml-8 flex-2.5 h-100 w-100 p-4 flex flex-col sm:flex-row sm:flex-wrap">
            {menuItems}
          </div>
      </div>
    )
  }


}

export default Menu;
