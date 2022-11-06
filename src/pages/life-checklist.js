import * as React from 'react';
import Layout from '../layout';
import Checklist from '../components/Checklist';

const LifeCheckList = () => {
  return(
    <Layout containerChildren={<Checklist />}/>
  )
}

export default LifeCheckList;