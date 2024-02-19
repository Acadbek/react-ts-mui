import { lazy } from "react";

const Home = lazy(() =>
  import('@/pages').then(({ Home }) => ({ default: Home }))
)

const Products = lazy(() =>
  import('@/pages').then(({ Products }) => ({ default: Products }))
)

export { Home, Products }
