import React, { useEffect, useRef, useState } from "react";

const limitedProduct = 10;
const ProductList = () => {
  const [products, setProduct] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const loadingRef = useRef();

  useEffect(() => {
    const featchData = async () => {
      const response = await fetch(
        `https://dummyjson.com/products?limit=${limitedProduct}&skip=${page}`
      );
      const data = await response.json();
      if (data.products.length === 0) {
        setHasMore(false);
      } else {
        setProduct((prevProduct) => [...prevProduct, ...data.products]);
        setPage((prvPage) => prvPage + 1);
      }
    };

    const onObserver = (items) => {
      const loaderItem = items[0];
      if (loaderItem.isIntersecting && hasMore) {
        featchData();
      }
    };
    const observer = new IntersectionObserver(onObserver);

    if (observer && loadingRef.current) {
      observer.observe(loadingRef.current);
    }

    return ()=>{
        if(observer) observer.disconnect()
    }
  }, [hasMore, page]);

  return (
    <div>
      <div>
        <h2 className="mb-4 text-2xl font-bold">Product All List</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {products.length > 0 ? (
          <>
            {products.map((product) => (
              <div className="border p-3 rounded-lg p-4 border rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div>
                  <img
                    src={product.thumbnail}
                    className="w-full h-auto rounded"
                  />
                </div>

                <div className="mt-2">
                  <h3 className="text-lg font-semibold">{product.title}</h3>

                  {/* Replace d-flex with Tailwind Flex */}
                  <div className="flex justify-between w-full mt-1 text-sm">
                    <span>Price: <span className="text-red-500 font-semibold text-lg">${product.price}</span></span>
                    <span>Stock: {product.stock}</span>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          "Not Found Data"
        )}
      </div>
      {hasMore && <div ref={loadingRef}>Loading Data Featch...</div>}
    </div>
  );
};

export default ProductList;
