import { Suspense } from 'react';
import {
  useLocalization,
  useShopQuery,
  CacheLong,
  gql,
} from '@shopify/hydrogen';

import { Header, Logo } from '~/components';
import { Footer } from '~/components/index.server';
import { parseMenu } from '~/lib/utils';

const HEADER_MENU_HANDLE = 'main-menu';
const FOOTER_MENU_HANDLE = 'footer';

const SHOP_NAME_FALLBACK = 'Hydrogen';

/**
 * A server component that defines a structure and organization of a page that can be used in different parts of the Hydrogen app
 */
export function Layout({ children }) {
  return (
    <>
      <div className="flex flex-col min-h-screen max-w-[1500px] mx-auto ">
        <div className="">
          <a href="#mainContent" className="sr-only">
            Skip to content
          </a>
        </div>
        <Suspense fallback={<Header title={SHOP_NAME_FALLBACK} />}>
          <HeaderWithMenu />
        </Suspense>
        <main role="main" id="mainContent" className="flex-grow">
          {children}
        </main>
      </div>
      <Suspense fallback={<Footer />}>
        <FooterWithMenu />
      </Suspense>
    </>
  );
}

function HeaderWithMenu() {
  const { shopName } = useLayoutQuery();
  let headerMenu = {
    id: 'gid://shopify/Menu/180186611768',
    items: [
      {
        id: 'Home',
        resourceId: null,
        tags: [],
        title: 'Home',
        type: '',
        url: '',
        items: [],
        isExternal: false,
        target: '_self',
        to: '/',
      },

      {
        id: 'Shop',
        resourceId: null,
        tags: [],
        title: 'Shop',
        type: 'CATALOG',
        url: 'https://hydrogen-preview.myshopify.com/collections/all',
        items: [],
        isExternal: false,
        target: '_self',
        to: '/products',
      },
      {
        id: 'About',
        // resourceId: 'gid://shopify/Blog/83557253176',
        tags: [],
        title: 'About',
        type: 'BLOG',
        url: 'https://hydrogen-preview.myshopify.com/blogs/journal',
        items: [],
        isExternal: false,
        target: '_self',
        to: '/journal',
      },
      {
        id: 'Blog',
        resourceId: null,
        tags: [],
        title: 'Blog',
        type: 'COLLECTIONS',
        url: 'https://hydrogen-preview.myshopify.com/collections',
        items: [],
        isExternal: false,
        target: '_self',
        to: '/collections',
      },
      {
        id: 'Contact',
        resourceId: null,
        tags: [],
        title: 'Contact',
        type: 'COLLECTIONS',
        url: 'https://hydrogen-preview.myshopify.com/collections',
        items: [],
        isExternal: false,
        target: '_self',
        to: '/contact',
      },
    ],
  };
  return <Header title={<Logo />} menu={headerMenu} />;
}

function FooterWithMenu() {
  const { footerMenu } = useLayoutQuery();
  return <Footer menu={footerMenu} />;
}

function useLayoutQuery() {
  const {
    language: { isoCode: languageCode },
  } = useLocalization();

  const { data } = useShopQuery({
    query: SHOP_QUERY,
    variables: {
      language: languageCode,
      headerMenuHandle: HEADER_MENU_HANDLE,
      footerMenuHandle: FOOTER_MENU_HANDLE,
    },
    cache: CacheLong(),
    preload: '*',
  });

  const shopName = data ? data.shop.name : SHOP_NAME_FALLBACK;

  /*
        Modify specific links/routes (optional)
        @see: https://shopify.dev/api/storefront/unstable/enums/MenuItemType
        e.g here we map:
          - /blogs/news -> /news
          - /blog/news/blog-post -> /news/blog-post
          - /collections/all -> /products
      */
  const customPrefixes = { BLOG: '', CATALOG: 'products' };

  const headerMenu = data?.headerMenu
    ? parseMenu(data.headerMenu, customPrefixes)
    : undefined;

  const footerMenu = data?.footerMenu
    ? parseMenu(data.footerMenu, customPrefixes)
    : undefined;

  return { footerMenu, headerMenu, shopName };
}

const SHOP_QUERY = gql`
  fragment MenuItem on MenuItem {
    id
    resourceId
    tags
    title
    type
    url
  }
  query layoutMenus(
    $language: LanguageCode
    $headerMenuHandle: String!
    $footerMenuHandle: String!
  ) @inContext(language: $language) {
    shop {
      name
    }
    headerMenu: menu(handle: $headerMenuHandle) {
      id
      items {
        ...MenuItem
        items {
          ...MenuItem
        }
      }
    }
    footerMenu: menu(handle: $footerMenuHandle) {
      id
      items {
        ...MenuItem
        items {
          ...MenuItem
        }
      }
    }
  }
`;
