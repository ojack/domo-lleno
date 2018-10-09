import React, { Component } from "react";
import Link from "next/link";
import { Config } from "../config.js";

const linkClass = "flex-1 text-sm p-2 w-64 flex-1 m-auto text-white hover:text-grey uppercase font-menu no-underline"

class Menu extends Component {
  constructor() {
      super();
      this.state = {
        active: false
      }
  }

  getSlug(url) {
      const parts = url.split("/");
      return parts.length > 2 ? parts[parts.length - 2] : "";
  }

  componentDidMount() {
      setTimeout(() => this.setState({active: true}), 300)
  }
  render() {
      const menuItems = this.props.menu.items.map((item, index) => {
        if (item.object === "custom") {
            return (
                <Link href={item.url} key={item.ID}>
                    <a className={linkClass}>{item.title}</a>
                </Link>
            );
        }
        const slug = this.getSlug(item.url);
        const actualPage = item.object === "category" ? "category" : "post";
        return (
            <Link
                as={`/${item.object}/${slug}`}
                href={`/${actualPage}?slug=${slug}&apiRoute=${item.object}`}
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
          <Link href='/category/inicio'>
            <div className = "flex-1 h-full cursor-pointer m-3"
                style={{
                  background: "url(/static/images/logo-menu.png)",
                  // width: '395px',
                  // height: '96px',
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
