'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaChevronDown, FaTimes } from 'react-icons/fa';
import { navItems } from './headerNav';

interface HeaderMobileDrawerProps {
  onClose: () => void;
}

export default function HeaderMobileDrawer({ onClose }: HeaderMobileDrawerProps) {
  const [openMobileItem, setOpenMobileItem] = useState<number | null>(null);
  const [openMobileSubItem, setOpenMobileSubItem] = useState<number | null>(null);
  const [openMobileSubSubItem, setOpenMobileSubSubItem] = useState<number | null>(null);

  const toggleMobileItem = (index: number) => {
    setOpenMobileItem(openMobileItem === index ? null : index);
    setOpenMobileSubItem(null);
    setOpenMobileSubSubItem(null);
  };

  const toggleMobileSubItem = (index: number) => {
    setOpenMobileSubItem(openMobileSubItem === index ? null : index);
    setOpenMobileSubSubItem(null);
  };

  const toggleMobileSubSubItem = (index: number) => {
    setOpenMobileSubSubItem(openMobileSubSubItem === index ? null : index);
  };

  return (
    <>
      <div className="mobile-overlay" onClick={onClose} />

      <div className="mobile-drawer open">
        <div className="mobile-drawer-header">
          <button
            className="close-btn"
            onClick={onClose}
            aria-label="Close menu"
            title="Close menu"
          >
            <FaTimes />
          </button>
        </div>

        <ul className="mobile-nav-list">
          {navItems.map((item, i) => (
            <li key={i} className="mobile-nav-item">
              {item.children ? (
                <>
                  <button
                    className={`mobile-nav-link${openMobileItem === i ? ' active' : ''}`}
                    onClick={() => toggleMobileItem(i)}
                  >
                    <span className="nav-icon">{item.icon}</span>
                    {item.label}
                    <FaChevronDown className={`mobile-chevron${openMobileItem === i ? ' rotate' : ''}`} />
                  </button>
                  {openMobileItem === i && (
                    <ul className="mobile-dropdown">
                      {item.children.map((child, j) => (
                        <li key={j} className="mobile-dropdown-item">
                          {child.children ? (
                            <>
                              <button
                                className={`mobile-sub-link${openMobileSubItem === j ? ' active' : ''}`}
                                onClick={() => toggleMobileSubItem(j)}
                              >
                                {child.label}
                                <FaChevronDown className={`mobile-chevron${openMobileSubItem === j ? ' rotate' : ''}`} />
                              </button>
                              {openMobileSubItem === j && (
                                <ul className="mobile-sub-dropdown">
                                  {child.children.map((sub, k) => (
                                    <li key={k} className="mobile-dropdown-item">
                                      {sub.children ? (
                                        <>
                                          <button
                                            className={`mobile-sub-item-link mobile-expand-btn${openMobileSubSubItem === k ? ' active' : ''}`}
                                            onClick={() => toggleMobileSubSubItem(k)}
                                          >
                                            {sub.label}
                                            <FaChevronDown className={`mobile-chevron${openMobileSubSubItem === k ? ' rotate' : ''}`} />
                                          </button>
                                          {openMobileSubSubItem === k && (
                                            <ul className="mobile-sub-sub-dropdown">
                                              {sub.children.map((subsub, l) => (
                                                <li key={l}>
                                                  <Link href={subsub.href} className="mobile-sub-sub-item-link" onClick={onClose} prefetch={false}>
                                                    {subsub.label}
                                                  </Link>
                                                </li>
                                              ))}
                                            </ul>
                                          )}
                                        </>
                                      ) : (
                                        <Link href={sub.href} className="mobile-sub-item-link" onClick={onClose} prefetch={false}>
                                          {sub.label}
                                        </Link>
                                      )}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </>
                          ) : (
                            <Link href={child.href} className="mobile-sub-link" onClick={onClose} prefetch={false}>
                              {child.label}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link href={item.href} className="mobile-nav-link" onClick={onClose} prefetch={false}>
                  <span className="nav-icon">{item.icon}</span>
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <Link href="/contact" className="contact-btn mobile-contact" onClick={onClose} prefetch={false}>
          Contact Us
        </Link>
      </div>
    </>
  );
}