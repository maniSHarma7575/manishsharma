import React from "react";
import Project from "../components/Project";
import Layout from "../layout";

const Projects = () => {
  return(
    <Layout containerChildren={<Project />} />
  )
}

export default Projects;