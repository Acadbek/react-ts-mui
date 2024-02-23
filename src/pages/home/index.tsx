import Navbar from '@/components/UI/navbar';
import { Button } from '@mui/material';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Navbar />
      <Button variant="contained">Text</Button>
    </>
  );
};

export default Home;
