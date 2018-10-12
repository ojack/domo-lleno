import React, { Component } from "react";

//import Title from './Title.js'
//import PageWrapper from "../components/PageWrapper.js";
//import { Config } from "../config.js";
//import { Title } from "../style-config.js";

class Taller extends Component {
    render() {
        console.log('Taller', this.props)
        if(this.props.post.title.rendered === '+Code') {
          console.log('found + code')
          this.props.post.title.rendered = '<span class="font-mono">+</span>Code'
        }
        var image = this.props.post.acf.image ? 'url('+ this.props.post.acf.image.sizes.large +')' : '#222'
        return (
            <div className="flex-1 flex flex-col-reverse md:flex-row-reverse block mt-24 mb-24">
              <div className="flex-1 text-left pl-24 pt-16 -ml-24 -mt-8 -mb-16 -mr-10" style={{background:'url(/static/images/festival-background'+this.props.index%2+'.png)'}}>
                <div className="p-10 pr-24">
                  <h1 className='font-menu uppercase text-3xl mb-6' dangerouslySetInnerHTML={{__html: this.props.post.title.rendered}}></h1>
                  <p className="font-hairline font-menu leading-loose mb-3">{this.props.post.acf.artista}</p>
                  <p className="font-hairline leading-loose" dangerouslySetInnerHTML={{__html: this.props.post.content.rendered}}></p>
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

export default Taller;
