import { useState, useRef, useEffect, useCallback } from 'react';
import { Link, flattenConnection } from '@shopify/hydrogen';

import { Button, Grid, ProductCard } from '~/components';
import { getImageLoadingPriority } from '~/lib/const';
import Gridel from '../../assets/Gridel';
import List from '../../assets/List';

export function ProductGrid({ url, collection }) {
  const nextButtonRef = useRef(null);
  const initialProducts = collection?.products?.nodes || [];
  const { hasNextPage, endCursor } = collection?.products?.pageInfo ?? {};
  const [products, setProducts] = useState(initialProducts);
  const [cursor, setCursor] = useState(endCursor ?? '');
  const [nextPage, setNextPage] = useState(hasNextPage);
  const [pending, setPending] = useState(false);
  const haveProducts = initialProducts.length > 0;
  const [activeView, setActiveView] = useState('grid');

  const fetchProducts = useCallback(async () => {
    setPending(true);
    const postUrl = new URL(window.location.origin + url);
    postUrl.searchParams.set('cursor', cursor);

    const response = await fetch(postUrl, {
      method: 'POST',
    });
    const { data } = await response.json();

    // ProductGrid can paginate collection, products and search routes
    // @ts-ignore TODO: Fix types
    const newProducts = flattenConnection(
      data?.collection?.products || data?.products || []
    );
    const { endCursor, hasNextPage } = data?.collection?.products?.pageInfo ||
      data?.products?.pageInfo || { endCursor: '', hasNextPage: false };

    setProducts([...products, ...newProducts]);
    setCursor(endCursor);
    setNextPage(hasNextPage);
    setPending(false);
  }, [cursor, url, products]);

  const handleIntersect = useCallback(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          fetchProducts();
        }
      });
    },
    [fetchProducts]
  );

  // useEffect(() => {
  //   const observer = new IntersectionObserver(handleIntersect, {
  //     rootMargin: '100%',
  //   });

  //   const nextButton = nextButtonRef.current;

  //   if (nextButton) observer.observe(nextButton);

  //   return () => {
  //     if (nextButton) observer.unobserve(nextButton);
  //   };
  // }, [nextButtonRef, cursor, handleIntersect]);

  if (!haveProducts) {
    return (
      <>
        <p>No products found on this collection</p>
        <Link to="/products">
          <p className="underline">Browse catalog</p>
        </Link>
      </>
    );
  }

  return (
    <>
      <div className="flex justify-between">
        <div>Best Selling</div>
        <div className=" flex justify-end gap-[20px] ">
          <div className="mr-[51px]">Showing all {products.length} results</div>

          <Gridel
            click={() => setActiveView('grid')}
            color={activeView == 'grid' ? '#f96030' : 'black'}
          />
          <List
            click={() => setActiveView('list')}
            color={activeView == 'list' ? '#f96030' : 'black'}
          />
        </div>
      </div>
      <Grid layout={activeView == 'list' ? 'list' : 'products'}>
        {products.map((product, i) => (
          <ProductCard
            key={product.id}
            product={product}
            loading={getImageLoadingPriority(i)}
            activeView={activeView}
          />
        ))}
      </Grid>

      {nextPage && (
        <div
          className="flex items-center justify-center mt-6"
          ref={nextButtonRef}
        >
          <Button
            variant="secondary"
            disabled={pending}
            onClick={fetchProducts}
            width="full"
          >
            {pending ? 'Loading...' : 'Load more products'}
          </Button>
        </div>
      )}
    </>
  );
}
