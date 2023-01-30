import { Link, useUrl, useCart } from '@shopify/hydrogen';
import { useWindowScroll } from 'react-use';
import { useState } from 'react';
import { clsx } from 'clsx';

import {
  Heading,
  IconAccount,
  IconBag,
  IconMenu,
  IconSearch,
  Input,
  Logo,
} from '~/components';

import { CartDrawer } from './CartDrawer.client';
import { MenuDrawer } from './MenuDrawer.client';
import { useDrawer } from './Drawer.client';

/**
 * A client component that specifies the content of the header on the website
 */
export function Header({ title, menu }) {
  const { pathname } = useUrl();
  console.log(menu);

  const localeMatch = /^\/([a-z]{2})(\/|$)/i.exec(pathname);
  const countryCode = localeMatch ? localeMatch[1] : undefined;

  const isHome = pathname === `/${countryCode ? countryCode + '/' : ''}`;

  const {
    isOpen: isCartOpen,
    openDrawer: openCart,
    closeDrawer: closeCart,
  } = useDrawer();

  const {
    isOpen: isMenuOpen,
    openDrawer: openMenu,
    closeDrawer: closeMenu,
  } = useDrawer();

  return (
    <>
      <CartDrawer isOpen={isCartOpen} onClose={closeCart} />
      <MenuDrawer isOpen={isMenuOpen} onClose={closeMenu} menu={menu} />
      <DesktopHeader
        countryCode={countryCode}
        isHome={isHome}
        title={title}
        menu={menu}
        openCart={openCart}
      />
      <MobileHeader
        countryCode={countryCode}
        isHome={isHome}
        title={title}
        openCart={openCart}
        openMenu={openMenu}
      />
    </>
  );
}

function MobileHeader({ countryCode, title, isHome, openCart, openMenu }) {
  const { y } = useWindowScroll();

  const styles = {
    // button: 'relative flex items-center justify-center w-8 h-8',
    container: `bg-contrast/80 text-primary flex lg:hidden items-center h-nav sticky backdrop-blur-lg z-40 top-0 justify-between w-full leading-none gap-4 px-4 md:px-8`,
  };

  return (
    <header role="banner" className={styles.container}>
      <div className="flex items-center justify-start w-full gap-4">
        <button onClick={openMenu} className={styles.button}>
          <IconMenu />
        </button>
        <form
          action={`/${countryCode ? countryCode + '/' : ''}search`}
          className="items-center gap-2 sm:flex"
        >
          <button type="submit" className={styles.button}>
            Search
            {/* <IconSearch /> */}
          </button>
          <Input
            className={'focus:border-primary/20 w-full'}
            type="search"
            variant="minisearch"
            placeholder="Search"
            name="q"
          />
        </form>
      </div>

      <Link
        className="flex items-center self-stretch leading-[3rem] md:leading-[4rem] justify-center flex-grow w-full h-full"
        to="/"
      >
        <Heading className="font-bold text-center" as={'h2'}>
          {title}
        </Heading>
      </Link>

      <div className="flex items-center justify-end w-full gap-4">
        <Link to={'/account'} className={styles.button}>
          <IconAccount />
        </Link>
        <button onClick={openCart} className={styles.button}>
          <IconBag />
          <CartBadge />
        </button>
      </div>
    </header>
  );
}
function HeaderLinks({ menu }) {
  const { pathname } = useUrl();
  return (
    <nav className="flex justify-around header_background ml-[10px]">
      {(menu?.items || []).map((item) => (
        <Link
          className={clsx(
            pathname == item.to && 'active_header_bg',
            'px-[25px]',
            'h-[50px]',
            'text-white',
            'fontJost'
          )}
          key={item.id}
          to={item.to}
          target={item.target}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}

function DesktopHeader({ countryCode, isHome, menu, openCart, title }) {
  const { y } = useWindowScroll();

  const styles = {
    button:
      'relative flex items-center justify-center w-8 h-8 focus:ring-primary/5',
    container:
      'bg-contrast text-primary hidden h-nav lg:flex items-center sticky transition duration-300 backdrop-blur-lg z-40 top-0 justify-between w-full leading-none gap-8 px-12 py-8',
  };

  return (
    <>
      <header role="banner" className={styles.container}>
        <Link className={`font-bold`} to="/">
          {title}
        </Link>
        {/* {<HeaderLinks menu={menu} />} */}
        <div className="flex items-center gap-1 w-full">
          <form
            action={`/${countryCode ? countryCode + '/' : ''}search`}
            className="flex items-center gap-2 w-full"
          >
            <Input
              className={clsx(
                'focus:border-primary/20 w-[50%] m-auto',
                'rounded-[66px]',
                'pr-[50px]',
                'placeholder:text-left pr-[10px]'
              )}
              type="search"
              variant="minisearch"
              placeholder="Enter your keyword..."
              name="q"
            />
            <button type="submit" className={styles.button}>
              {/* <IconSearch /> */}
            </button>
          </form>
          <Link to={'/account'} className={styles.button}>
            <IconAccount />
          </Link>
          <button onClick={openCart} className={styles.button}>
            <IconBag />
            <CartBadge dark={isHome} />
          </button>
        </div>
      </header>
      <div className="height-50 flex width:full header_background lg:flex hidden">
        <ShopByCategories />
        <HeaderLinks menu={menu} />
      </div>
    </>
  );
}

function ShopByCategories() {
  let [clicked, setClicked] = useState(false);
  return (
    <div
      className={clsx(
        clicked ? 'active_header_bg' : '',
        'px-[100px] flex items-center',
        'fontJost',
        'text-white'
      )}
      onClick={() => setClicked(!clicked)}
    >
      Shop By Categories
    </div>
  );
}

function CartBadge({ dark }) {
  const { totalQuantity } = useCart();

  if (totalQuantity < 1) {
    return null;
  }
  return (
    <div
      className={`${
        dark
          ? 'text-primary bg-contrast dark:text-contrast dark:bg-primary'
          : 'text-contrast bg-primary'
      } absolute bottom-1 right-1 text-[0.625rem] font-medium subpixel-antialiased h-3 min-w-[0.75rem] flex items-center justify-center leading-none text-center rounded-full w-auto px-[0.125rem] pb-px`}
    >
      <span>{totalQuantity}</span>
    </div>
  );
}
