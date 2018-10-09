import React, { Component } from 'react';
//import Wrapper from "./components/Wrapper.js"
import { HashRouter as Router, Route, Link, Switch} from "react-router-dom";
import request from 'superagent'
//import Menu from './components/Menu.js'
import Layout from './components/Layout.js'
//import AnimatedDome from "./components/AnimatedDome.js"
import Intro from './components/Intro.js'
import Inicio from './components/Inicio.js'
import Festivales from './components/Festivales.js'
import Programacion from './components/Programacion.js'
import ComoParticipar from './components/ComoParticipar.js'
import Wrapper from './components/Wrapper.js'
import Artistas from './components/ImageGrid.js'

const apiUrl = 'http://api.domolleno.gov.co/wp-json/wp/v2'

const menuComponents = [
  { route: 'inicio', component: Inicio},
  { route: 'festivales', component: Festivales},
  { route: 'como-participar', component: ComoParticipar},
  { route: 'programacion', component: Programacion},
  { route: 'artistas', component: Artistas}
]

class App extends Component {
  constructor() {
      super();
      this.state = {
        categories: this.populateCategories(),
        loaded: false
      }

  }

  populateCategories() {
    var menuObj = {}
    menuComponents.forEach((item) => {
      menuObj[item.route] = { posts: []}
    })
    return menuObj
  }

  getRoutes() {
    return <Switch>
      {menuComponents.map((item) => <Route path={'/'+item.route}>
        <item.component posts={this.state.categories[item.route].posts}/>
    </Route>)}</Switch>
  }

  componentWillMount() {
    var categories = {}
    var categoryBySlug = {}
    var self = this
    request
      .get(apiUrl + '/categories')
      .end((err, res) => {
      //  console.log('categories', res.body)
        if(res.body.length > 0) {
          res.body.forEach((category) => {
            categories[category.id] = Object.assign({}, category, {posts: []})
            categoryBySlug[category.slug] = categories[category.id]
          })

          request
            .get(apiUrl + '/posts?per_page=99')
            .end((err, res) => {
              //console.log('posts', res.body)
              res.body.forEach((post) => {
                if (post.categories.length > 0) {
                //  console.log('id is', post.categories[0], categories[post.categories[0]])
                  categories[post.categories[0]].posts.push(post)
                }
              })
              self.setState({ categories: categoryBySlug, loaded: true})
              //console.log('posts', categoryBySlug)
              console.log('CAT', categoryBySlug)
            })
        } else {
          console.log('error fetching categories')
        }
      })

  }



  // handleRouteChange(previousRoute, nextRoute) {
  //   console.log('Route', previousRoute, nextRoute)
  // }

  render() {
    // <AnimatedDome key="initial" domeState="closed">
    //  </AnimatedDome>
    return (
      <Router basename={process.env.PUBLIC_URL}>


          <Wrapper>
            <Switch>
            <Route exact path="/" component={Intro} />
            <Layout>
              {this.getRoutes()}

            </Layout>
              </Switch>
          </Wrapper>

      </Router>
    )}
}

export default App;



// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// );
//
// const About = () => (
//   <div>
//     <h2>About</h2>
//   </div>
// );
//
// const Topics = ({ match }) => (
//   <div>
//     <h2>Topics</h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/rendering`}>Rendering with React</Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/components`}>Components</Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//       </li>
//     </ul>
//
//     <Route path={`${match.url}/:topicId`} component={Topic} />
//     <Route
//       exact
//       path={match.url}
//       render={() => <h3>Please select a topic.</h3>}
//     />
//   </div>
// );
//
// const Topic = ({ match }) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//   </div>
// );


//import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <Wrapper domeState="closed">
//       <div className="fixed pin-t pin-l w-full h-full text-white">
//
//                 <div key="title-text-23" className='opacity cursor-pointer'>
//                 <div
//                   style={{
//                     background: "url(/static/images/title-text-18.png)",
//                     width: '50%',
//                     height: '250px',
//                     minHeight: '100px',
//                     minWidth: '300px',
//                     position: "fixed",
//                     right: "5%",
//                     bottom: "20%",
//                     backgroundSize: 'contain',
//                     backgroundPosition: 'center',
//                     backgroundRepeat: 'no-repeat'
//                   }}>
//                   </div>
//                     <div className="fixed pin-b pin-r mr-20 mb-16 text-xl font-menu cursor-pointer" style={{zIndex: 20}}>ENTRAR</div>
//
//                     </div>
//
//           </div>
//       </Wrapper>
//     );
//   }
// }

// export default App;
