import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import { productApi } from '@/api/products';

export const Products = () => {
  const { data, isLoading, isError } = useQuery(
    {
      queryKey: ['products'],
      queryFn: productApi.getProducts,
      staleTime: Infinity,
    });

  console.log(data);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching products</div>;

  return (
    <>
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <div>Projects</div>
      <div>{JSON.stringify(data)}</div>
    </>
  );
};
