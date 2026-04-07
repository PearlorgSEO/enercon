// ============================================================
//  ENERCON — Central Product Literature Data
//  Edit PDF paths, preview images, and labels here only.
//  All product pages import from this file.
// ============================================================

export interface ProductDoc {
  previewSrc: string;
  alt: string;
  label: string;
  pdfUrl: string;
}

// ---- EnerThane AP 250 ----------------------------------------
export const ap250Docs: ProductDoc[] = [
  {
    previewSrc: '/images/products/ap250/flyer-preview.webp',
    alt: 'Flyer',
    label: 'Flyer',
    pdfUrl: '/pdfs/ap250/Enerthane-ap-250-25kg_compressed.pdf',
  },
  {
    previewSrc: '/images/products/ap250/tds-preview.webp',
    alt: 'TDS',
    label: 'TDS',
    pdfUrl: '/pdfs/ap250/Technical-Data-Sheet-EnerThane-AP-250.pdf',
  },
];

// ---- EnerSeal Tape -------------------------------------------
export const enersealTapeDocs: ProductDoc[] = [
  {
    previewSrc: '/images/products/tape/flyer-preview.webp',
    alt: 'Flyer',
    label: 'Flyer',
    pdfUrl: '/pdfs/tape/Flyer-EnerSeal-Nano-Seal-Technology-Tape_compressed.pdf',
  },
  {
    previewSrc: '/images/products/tape/tds-preview.webp',
    alt: 'TDS',
    label: 'TDS',
    pdfUrl: '/pdfs/tape/Technical-Data-Sheet-EnerSeal-Tape.pdf',
  },
  {
    previewSrc: '/images/products/tape/sds-preview.png',
    alt: 'SDS',
    label: 'SDS',
    pdfUrl: '/pdfs/tape/MSDS-Enerseal-Tape-Nano-Seal-Technology.pdf',
  },
];

// ---- EnerFlex SP 300 -----------------------------------------
export const sp300Docs: ProductDoc[] = [
  {
    previewSrc: '/images/products/sp300/flyer-preview.webp',
    alt: 'Flyer',
    label: 'Flyer',
    pdfUrl: '/pdfs/sp300/Flyer-EnerFlex-SP-300.pdf',
  },
  {
    previewSrc: '/images/products/sp300/tds-preview.webp',
    alt: 'TDS',
    label: 'TDS',
    pdfUrl: '/pdfs/sp300/Technical-Data-Sheet-EnerFlex-SP-300-1_compressed.pdf',
  },
  {
    previewSrc: '/images/products/sp300/sds-preview.png',
    alt: 'SDS',
    label: 'SDS',
    pdfUrl: '/pdfs/sp300/MSDS-EnerFlex-SP-300.pdf',
  },
];

// ---- EnerFlex SB 100 -----------------------------------------
export const sb100Docs: ProductDoc[] = [
  {
    previewSrc: '/images/products/sb100/flyer-preview.webp',
    alt: 'Flyer',
    label: 'Flyer',
    pdfUrl: '/pdfs/sb100/Flyer-EnerFlex-SB-100_compressed.pdf',
  },
  {
    previewSrc: '/images/products/sb100/tds-preview.webp',
    alt: 'TDS',
    label: 'TDS',
    pdfUrl: '/pdfs/sb100/TDS-EnerFlex-SB-100_compressed.pdf',
  },
  {
    previewSrc: '/images/products/sb100/sds-preview.png',
    alt: 'SDS',
    label: 'SDS',
    pdfUrl: '/pdfs/sb100/MSDS-EnerFlex-SB-100.pdf',
  },
];

// ---- EnerFlex SA 200 -----------------------------------------
export const sa200Docs: ProductDoc[] = [
  {
    previewSrc: '/images/products/sa200/flyer-preview.webp',
    alt: 'Flyer',
    label: 'Flyer',
    pdfUrl: '/pdfs/sa200/Flyer-EnerFlex-Siliconized-SA-200.pdf',
  },
  {
    previewSrc: '/images/products/sa200/tds-preview.webp',
    alt: 'TDS',
    label: 'TDS',
    pdfUrl: '/pdfs/sa200/TDS-EnerFlex-Siliconized-SA-200.pdf',
  },
  {
    previewSrc: '/images/products/sa200/sds-preview.png',
    alt: 'SDS',
    label: 'SDS',
    pdfUrl: '/pdfs/sa200/SDS-EnerFlex-Siliconized-SA-200.docx.pdf',
  },
];

// ---- EnerThane AR 150 ----------------------------------------
export const ar150Docs: ProductDoc[] = [
  {
    previewSrc: '/images/products/ar150/tds-preview.webp',
    alt: 'TDS',
    label: 'TDS',
    pdfUrl: '/pdfs/ar150/TDS-EnerThane-AR-150.pdf',
  },
];

// ---- EnerCon Floor Coatings ----------------------------------
export const floorDocs: ProductDoc[] = [
  {
    previewSrc: '/images/products/floor/tds-polyaspartic.webp',
    alt: 'Polyaspartic TDS',
    label: 'EnerFloor Polyaspartic',
    pdfUrl: '/pdfs/floor/TDS-EnerFloor-Polyaspartic.pdf',
  },
  {
    previewSrc: '/images/products/floor/tds-epoxy-primer.webp',
    alt: 'Epoxy SF-2K Primer TDS',
    label: 'Epoxy SF-2K Primer',
    pdfUrl: '/pdfs/floor/Technical-Data-Shee-EnerFloor-SF-2K-Epoxy-Primer.pdf',
  },
  {
    previewSrc: '/images/products/floor/tds-epoxy-sf2k.webp',
    alt: 'Epoxy SF-2K TDS',
    label: 'Epoxy SF-2K Top Coat',
    pdfUrl: '/pdfs/floor/Technical-Data-Sheet-EnerFloor-SF-2K-Epoxy-Top-Coat.pdf',
  },
  {
    previewSrc: '/images/products/floor/tds-pu-enamel.webp',
    alt: 'PU Enamel TDS',
    label: 'PU Enamel',
    pdfUrl: '/pdfs/floor/Technical-Data-Sheet-EnerFloor-PU-Enamel-UD.pdf',
  },
  {
    previewSrc: '/images/products/floor/tds-pu-sf2k.webp',
    alt: 'PU SF-2K TDS',
    label: 'PU SF-2K',
    pdfUrl: '/pdfs/floor/Technical-Data-Sheet-EnerFloor-SF-2k-PU-Top-Coat.pdf',
  },
];

// ---- Silicone Sealants (EnerSil Mastic & EnerSil AP) ---------
// These use a custom page layout so PDFs are referenced individually.

export const sealants = {
  mastic: {
    tds: '/pdfs/sealants/Technical-Data-Sheet-EnerSil-Mastic.pdf',
    sds: '/pdfs/sealants/MSDS-ENERSIL-MASTIC.pdf',
  },
  ap: {
    tds: '/pdfs/sealants/Technical-Data-Sheet-EnerSil-AP.pdf',
    // the public site links to the "clear" MSDS file, so match that here
    sds: '/pdfs/sealants/MSDS-EnerSil-AP-Clear.pdf',
  },
};
