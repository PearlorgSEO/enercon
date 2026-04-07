import { FaBraille, FaImage, FaInbox, FaUsers } from 'react-icons/fa';

export interface NavLeaf {
  label: string;
  href: string;
}

export interface NavSub {
  label: string;
  href: string;
  children?: NavLeaf[] | null;
}

export interface NavChild {
  label: string;
  href: string;
  children?: NavSub[] | null;
}

export interface NavItem {
  label: string;
  icon: React.ReactElement;
  href: string;
  children: NavChild[] | null;
}

export const navItems: NavItem[] = [
  {
    label: 'About Us',
    icon: <FaUsers />,
    href: '/about-us',
    children: null,
  },
  {
    label: 'Products',
    icon: <FaInbox />,
    href: '#',
    children: [
      {
        label: 'Waterproof Coatings',
        href: '#',
        children: [
          {
            label: 'Silicone base',
            href: '#',
            children: [
              { label: 'SP 300 › high-solids', href: '/enerflex-sp-300' },
              { label: 'SB 100 › low-solids', href: '/enerflex-sb-100' },
              { label: 'SA 200 › siliconized', href: '/enerflex-sa-200' },
            ],
          },
          {
            label: 'Urethane base',
            href: '#',
            children: [
              { label: 'AP 250 › aliphatic', href: '/enerthane-ap250' },
              { label: 'AR 150 › aromatic', href: '/enerthane-ar150' },
            ],
          },
        ],
      },
      { label: 'Floor Coatings', href: '/enercon-floor-coatings', children: null },
      { label: 'Cool Roof Coatings', href: '/cool-roof-coatings', children: null },
      {
        label: 'Adhesives & Sealants',
        href: '#',
        children: [
          { label: 'EnerSeal Tape', href: '/enerseal-tape' },
          { label: 'Sealant & Mastic', href: '/silicone-sealants' },
        ],
      },
    ],
  },
  {
    label: 'Roof Restoration',
    icon: <FaBraille />,
    href: '#',
    children: [
      { label: 'Metal', href: '/metal-roof', children: null },
      { label: 'Concrete', href: '/concrete-roof', children: null },
      { label: 'BUR', href: '/bur', children: null },
    ],
  },
  {
    label: 'Project Gallery',
    icon: <FaImage />,
    href: '#',
    children: [
      { label: 'Completed Projects', href: '/completed-projects', children: null },
    ],
  },
  {
    label: 'Partner with Us',
    icon: <FaUsers />,
    href: '/became-an-applicator',
    children: null,
  },
   {
    label: 'Blogs',
    icon: <FaBraille />,
    href: '/blogs',
    children: null,
  },
];