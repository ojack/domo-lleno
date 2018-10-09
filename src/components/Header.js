import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import Menu from "./Menu.js";
import { Config } from "../config.js";
import stylesheet from '../src/styles/index.css'

class Header extends Component {
    constructor() {
        super();
    }

    render() {

        return (
            <div>
                <Head>
                    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <meta charSet="utf-8" />
                    <title>
                        DOMO LLENO
                    </title>
                    <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,700" rel="stylesheet"/>
                    <link href="/static/fonts/BlairMd.css" rel="stylesheet"/>
                </Head>
                
            </div>
        );
    }
}

export default Header;
