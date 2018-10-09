import React, { Component } from "react";

//import Title from './Title.js'
//import PageWrapper from "../components/PageWrapper.js";
//import { Config } from "../config.js";
//import { Title } from "../style-config.js";

class Festival extends Component {
    render() {
        console.log('Festival', this.props)

        var image = this.props.post.acf.imagen ? 'url('+ this.props.post.acf.imagen.sizes.large +')' : '#222'
        return (
            <div className="flex-1 flex flex-col-reverse md:flex-row-reverse block mt-24 mb-24">
              <div className="flex-1 text-left pl-24 pt-16 -ml-24 -mt-8 -mb-16 -mr-10" style={{background:'url(/static/images/festival-background'+this.props.index%2+'.png)'}}>
                <div className="p-10 pr-24">
                  <h1 className='font-menu uppercase text-3xl mb-6' dangerouslySetInnerHTML={{__html: this.props.post.title.rendered}}></h1>
                  <p className="font-hairline leading-loose"> {this.props.post.acf.texto}</p>
                </div>
              </div>
              <div className="flex-1" style={{
                background: image,
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right top',
                minHeight: '300px'
              }}>
              </div>

            </div>
        );
    }
}

export default Festival;
