import React from 'react';
import { Button } from '@material-ui/core'
import Layout  from '../components/Layout'

 function Home() {
  return (
    <Layout title="Youtube Clone" >
       clone youtube com NextJS + material ui
      <Button variant="contained" color="primary">
      Hello World
     </Button>
    </Layout>
  );
}

export default Home;