import clsx from 'clsx';
// import {
//   flattenConnection,
//   Image,
//   Link,
//   Money,
//   useMoney,
// } from '@shopify/hydrogen';

import { Text } from '~/components';
import { isDiscounted, isNewArrival } from '~/lib/utils';
import { getProductPlaceholder } from '~/lib/placeholders';

export function ProductCard({
  product,
  label,
  className,
  loading,
  onClick,
  activeView,
}) {
  let cardLabel;

  const cardData = product?.variants ? product : getProductPlaceholder();

  const {
    image,
    priceV2: price,
    compareAtPriceV2: compareAtPrice,
  } = flattenConnection(cardData?.variants)[0] || {};

  if (label) {
    cardLabel = label;
  } else if (isDiscounted(price, compareAtPrice)) {
    cardLabel = 'Sale';
  } else if (isNewArrival(product.publishedAt)) {
    cardLabel = 'New';
  }

  const styles = clsx(
    activeView == 'list' ? 'flex items-center' : 'grid',
    'gap-6'
  );

  return (
    <Link onClick={onClick} to={`/products/${product.handle}`}>
      <div className={styles}>
        <div
          className={clsx(
            'card-image aspect-[4/5] bg-primary/5',
            activeView == 'list' ? 'h-32' : ' '
          )}
        >
          <Text
            as="label"
            size="fine"
            className="absolute top-0 right-0 m-4 text-right text-notice"
          >
            {cardLabel}
          </Text>
          {image && (
            <Image
              className="aspect-[4/5] w-full object-cover fadeIn"
              widths={[320]}
              sizes="320px"
              loaderOptions={{
                crop: 'center',
                scale: 2,
                width: 320,
                height: 400,
              }}
              // @ts-ignore Stock type has `src` as optional
              data={image}
              alt={image.altText || `Picture of ${product.title}`}
              loading={loading}
            />
          )}
        </div>
        <div
          className={clsx(
            activeView == 'list' ? 'flex justify-between w-full' : 'grid',
            'gap-1'
          )}
        >
          <Text
            className="w-full overflow-hidden whitespace-nowrap text-ellipsis "
            as="h3"
          >
            {product.title}
          </Text>
          <div className="grid gap-6">
            <Text className="flex gap-4">
              <Money withoutTrailingZeros data={price} />
              {isDiscounted(price, compareAtPrice) && (
                <CompareAtPrice
                  className={'opacity-50'}
                  data={compareAtPrice}
                />
              )}
            </Text>
          </div>
        </div>
      </div>
    </Link>
  );
}

function CompareAtPrice({ data, className }) {
  const { currencyNarrowSymbol, withoutTrailingZerosAndCurrency } =
    useMoney(data);

  const styles = clsx('strike', className);

  return (
    <span className={styles}>
      {currencyNarrowSymbol}
      {withoutTrailingZerosAndCurrency}
    </span>
  );
}
