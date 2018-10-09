import React from "react";
import { Config } from "../config.js";

const menuItems = [
  {
    ID: 1,
    object: 'category',
    title: 'Artistas Invitados',
    url: 'http://api.domolleno.gov.co/category/artistas/'
  },
  {
    ID: 2,
    object: 'category',
    title: 'Festivales Invitados',
    url: 'http://api.domolleno.gov.co/category/festivales/'
  },
  {
    ID: 3,
    object: 'category',
    title: 'Programación',
    url: 'http://api.domolleno.gov.co/category/programacion/'
  },
  {
    ID: 4,
    object: 'category',
    title: '¿Cómo Participar?',
    url: 'http://api.domolleno.gov.co/category/como-participar/'
  }
]

const PageWrapper = Comp => (
  class extends React.Component {
    static async getInitialProps(args) {
      console.log('getting props from wrapper')

      // const headerMenuRes = await fetch(
      //   `${Config.apiUrl}/wp-json/menus/v1/menus/header-menu`
      // );
      // const headerMenu = await headerMenuRes.json();

      const categoriesRes = await fetch(
        `${Config.apiUrl}/wp-json/wp/v2/categories?slug=escenarios`
      )

      const categories = await categoriesRes.json();
      console.log('categories', categories)
      let escenarios = {}
      //
       if (categories.length > 0) {
          const postsRes = await fetch(
              `${Config.apiUrl}/wp-json/wp/v2/posts?_embed&categories=${
                  categories[0].id
              }`
          );
          escenarios = await postsRes.json();

      }
        //  return { categories, posts, domeState: 'open' };
      // }
    //  return { categories };
      // const categoriesRes = await fetch(
      //     `${Config.apiUrl}/wp-json/wp/v2/categories`
      // );
      // const categories = await categoriesRes.json();
      // const someFunction = (myArray) => {
      //     const promises = myArray.map(async (myValue) => {
      //         return {
      //             id: "my_id",
      //             myValue: await service.getByValue(myValue)
      //         }
      //     });
      //     return Promise.all(promises);
      // }
      return {
      //  headerMenu,
      headerMenu: { items: menuItems},
        escenarios,
        // categories: categories,
        ...(Comp.getInitialProps ? await Comp.getInitialProps(args) : null)
      };


    }

    // getAllPosts(categories) {
    //     const promises = categories.map(async (category) => {
    //         return {
    //             id: "my_id",
    //             myValue: await service.getByValue(myValue)
    //         }
    //     });
    //     return Promise.all(promises);
    // }

    render() {
      return (
        <Comp {...this.props} />
      )
    }
  }
)

export default PageWrapper;
