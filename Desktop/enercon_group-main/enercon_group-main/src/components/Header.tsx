import Link from 'next/link';
import Image from 'next/image';
import { FaChevronDown } from 'react-icons/fa';
import './Header.css';
import HeaderMobileMenu from './HeaderMobileMenu';
import { navItems } from './headerNav';

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        {/* Logo */}
        <Link href="/" className="header-logo" title="Enercon Group">
          <Image
            src="/images/common/enercondubai_logo.webp"
            alt="Enercon Group"
            width={60}
            height={60}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navItems.map((item, i) => (
              <li key={i} className={`nav-item${item.children ? ' has-dropdown' : ''}`}>
                <Link href={item.href} className="nav-link" prefetch={false}>
                  <span className="nav-icon">{item.icon}</span>
                  {item.label}
                  {item.children && <FaChevronDown className="chevron" />}
                </Link>
                {item.children && (
                  <ul className="dropdown">
                    {item.children.map((child, j) => (
                      <li key={j} className={`dropdown-item${child.children ? ' has-sub' : ''}`}>
                        <Link href={child.href} className="dropdown-link" prefetch={false}>
                          {child.label}
                          {child.children && <FaChevronDown className="chevron-right" />}
                        </Link>
                        {child.children && (
                          <ul className="sub-dropdown">
                            {child.children.map((sub, k) => (
                              <li key={k} className={`dropdown-item${sub.children ? ' has-sub' : ''}`}>
                                <Link href={sub.href} className="dropdown-link" prefetch={false}>
                                  {sub.label}
                                  {sub.children && <FaChevronDown className="chevron-right" />}
                                </Link>
                                {sub.children && (
                                  <ul className="sub-dropdown">
                                    {sub.children.map((subsub, l) => (
                                      <li key={l}>
                                        <Link href={subsub.href} className="dropdown-link" prefetch={false}>{subsub.label}</Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Contact Button */}
        <Link href="/contact" className="contact-btn desktop-contact" prefetch={false}>
          Contact Us
        </Link>

        <HeaderMobileMenu />
      </div>
    </header>
  );
}
