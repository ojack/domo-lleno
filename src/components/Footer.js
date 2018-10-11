//import Link from "next/link";
import React, { Component } from "react";


const Footer = props => {
    console.log('footer props!', props)
    return (
      <div className="flex-1 text-left mt-24 pt-20 text-right flex mb-20 p-4">
          <div className="flex flex-1 flex-row-reverse items-center flex-wrap">

            {props.organizadores.map((post, index) => (
              <a href={post.acf.url} target="_blank" className="flex-initial" style={{
                background: 'url('+ post.acf.logo.sizes.medium + ')',
                backgroundSize: '80%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                minHeight: '120px',
                minWidth: '150px',
                maxHeight: '160px',
                maxWidth: '200px',
              }}>
              </a>

            ))}
            <div className="font-menu self-start flex-1 mr-8 ml-4 text-left"><div>Organizadores</div></div>
          </div>

      </div>
    )
}

export default Footer;
