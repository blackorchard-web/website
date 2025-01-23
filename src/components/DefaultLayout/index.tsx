import { PageProps } from "gatsby"
import React from "react"
import LightNavbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }: PageProps) => (
  <>
    <LightNavbar/>
    {children}
    <Footer/>
  </>
)

export { Layout }
