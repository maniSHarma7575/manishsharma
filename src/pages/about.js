import * as React from "react"
import About from "../components/About"
import Layout from "../layout"

const AboutPage = () => {
  return (
    <Layout containerChildren={<About/>} />
  )
}

export default AboutPage;