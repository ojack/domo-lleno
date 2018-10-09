//import Header from "./Header";
//import Footer from "./Footer";
import AnimatedDome from "./AnimatedDome.js"

// <AnimatedDome />
// {props.children}
// const FullContainer = props => (
//     <div className="container font-sans text-center bg-black text-white">
//
//     </div>
// );

// <Header />
// {props.children}
// <Footer />
//  <Header />

const FullContainer = props => (
    <div className="container font-sans text-center text-white">
        <AnimatedDome domeState={props.domeState}/>
        {props.children}
    </div>
);

export default FullContainer;
