import React, { Component } from "react";
import Close from './../images/close-button.png'
import { Link} from "react-router-dom";

//import Title from './Title.js'
//import PageWrapper from "../components/PageWrapper.js";
//import { Config } from "../config.js";
//import { Title } from "../style-config.js";
// <div className="flex-1" style={{
//   background: image,
//   backgroundSize: '100%',
//   backgroundRepeat: 'no-repeat',
//   backgroundPosition: 'right top',
//   minHeight: '300px'
// }}>
// </div>


class ArtistPopup extends Component {
    render() {
        console.log('ArtistPopup', this.props)

        var image = this.props.post.acf.image ? 'url('+ this.props.post.acf.image.sizes.large +')' : '#222'
        return (
            <div className="fixed w-full h-full pin-t pin-l flex items-center justify-center flex-col" style={{background: 'rgba(0, 0, 0, 0.6)'}}>
              <div className="w-full max-w-3xl flex overflow-auto md:overflow-visible flex-col artist-popup" style={{background:'url(/static/images/festival-background0.png)', backgroundSize:'cover'}}>
              <Link to='/artistas' className="absolute pr-10 pt-10 self-end float-right cursor-pointer hover:opacity-50"><img className="self-end float-right cursor-pointer hover:opacity-50" src={Close} width="30px" height="30px"/></Link>

                <div className="w-full flex flex-col md:flex-row text-left">

                  <div className="flex-1 m-4 md:-ml-16 md:-mt-10 -mb-10" style={{
                    background: image,
                    backgroundSize:'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    maxWidth: '600px',
                    minHeight: '280px'

                  }}></div>
                  <div className="p-4 sm:p-10 flex-1 leading-loose" style={{
                    // maxHeight: "60%",
                    // overflowY: "auto"
                  }}>
                    <h1 className='font-menu uppercase text-3xl mb-0 mt-20' dangerouslySetInnerHTML={{__html: this.props.post.title.rendered}}></h1>
                    <h4 className="text-sm font-menu uppercase -mt-2 ml-2 mb-4">{"»   " + this.props.post.acf.pais}</h4>
                    <div className=' mb-6 max-w-md mr-6' style={{ overflowY: "auto", maxHeight: '70%'}} dangerouslySetInnerHTML={{__html: this.props.post.acf.descripcion}}></div>
                  </div>
                  </div>
              </div>


            </div>
        );
    }
}

export default ArtistPopup;
