import React from "react";
import styles from './Container.module.css'
import Proptypes from 'prop-types'

const Container = ({children}) =>{
  return(
    <main>{children}</main>
  )
}

Container.propTypes = {
  children: Proptypes.node
}

export default Container;