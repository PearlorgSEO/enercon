'use client';

import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

type HeaderMobileDrawerModule = typeof import('./HeaderMobileDrawer');

export default function HeaderMobileMenu() {
  const [DrawerComponent, setDrawerComponent] = useState<HeaderMobileDrawerModule['default'] | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = async () => {
    if (!DrawerComponent) {
      const drawerModule = await import('./HeaderMobileDrawer');
      setDrawerComponent(() => drawerModule.default);
    }

    setIsOpen(true);
  };

  return (
    <>
      <button
        className="hamburger"
        onClick={openMenu}
        aria-label="Toggle menu"
      >
        <FaBars />
      </button>

      {isOpen && DrawerComponent ? <DrawerComponent onClose={() => setIsOpen(false)} /> : null}
    </>
  );
}