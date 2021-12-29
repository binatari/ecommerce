import Head from "next/head";
import { motion } from "framer-motion";

import { commerce } from "../lib/commerce";

import ProductGrid from "../components/ProductGrid";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Sidebar from "../components/Sidebar";

export async function getStaticProps() {
  const { data } = await commerce.products.list();

  const products = data.filter(({ active }) => active);

  return {
    props: {
      products,
    },
    revalidate: 60,
  };
}

function IndexPage({ products }) {
  return (
    <>
      <Head>
        <title>X-store</title>
      </Head>
       <Navbar/>
      <div className="grid grid-cols-1 md:grid-cols-4">
        <Carousel/>
        <Sidebar/>
      </div>
      <motion.div
            className="py-6 md:py-12 flex flex-col items-center md:z-40 bg-[#191919]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
          >
            <ProductGrid
              products={products}
            />
          </motion.div>
    </>
  );
}

export default IndexPage;
