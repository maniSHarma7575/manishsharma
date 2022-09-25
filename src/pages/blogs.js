import * as React from "react"
import Blog from "../components/Blog"
import Layout from "../layout"

const BlogsPage = () => {
  return (
    <Layout containerChildren={<Blog/>} />
  )
}

export default BlogsPage;