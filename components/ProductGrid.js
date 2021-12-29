import Product from "./Product";

function ProductGrid({ products, ...props }) {
  if (!products || products.length === 0) return null;

  return (
    <>
    <span className="container text-[#626262] self-start text-2xl font-bold mx-auto pl-4">Products</span>
    <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3  gap-x-14 gap-y-14">
      {products.map((product, i) => (
        <div className="min-h-[25em] px-8">
        <Product key={product.id} {...product} {...props} />
        </div>
      ))}
    </div>
    </>
  );
}

export default ProductGrid;
