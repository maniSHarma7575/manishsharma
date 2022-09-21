import * as React from "react"
import Layout from "../layout"
import Landing from "../components/Landing"

const IndexPage = () => {
  return (
    <Layout containerChildren={<Landing/>} />
  )
}

export default IndexPage;