export type MarketSource = {id:string;platform:string;market:string;title:string;url:string;observed:string;status:string};
export const marketSources: MarketSource[] = [
  {
    "id": "kiss-mini",
    "platform": "Brand website",
    "market": "USA",
    "title": "KISS imPRESS Modern Natural minipack",
    "url": "https://www.kissusa.com/products/impress-falsies-single-modern-natural-plus-applicator",
    "observed": "The listing specifies 12 clusters with a mini applicator and 12–14mm lengths.",
    "status": "Verified listing; sales rank not established"
  },
  {
    "id": "tatti-single",
    "platform": "Brand website",
    "market": "UK",
    "title": "Tatti Natural Single Length",
    "url": "https://tattilashes.com/products/natural-pre-glued-individuals-single-length",
    "observed": "Single-length choices of 8, 10 or 12mm, CC curl and three rows are stated.",
    "status": "Verified listing; sales rank not established"
  },
  {
    "id": "tatti-brown",
    "platform": "Brand website",
    "market": "UK",
    "title": "Tatti Latte pre-glued clusters",
    "url": "https://tattilashes.com/en-us/products/latte-pre-glued-individuals",
    "observed": "Medium-brown clusters with 8, 10 and 12mm lengths, CC curl and 30 clusters are stated.",
    "status": "Verified listing; sales rank not established"
  },
  {
    "id": "shopee-c",
    "platform": "Shopee",
    "market": "Singapore",
    "title": "DOROLAB Scarecrow glue-free lashes",
    "url": "https://shopee.sg/-SHIP-ON-24-HOURS-DOROLAB-Eyelash-Glue-free-eyelashes-Wonderland-Series-Eyelash-extension-set-Scarecrow-C-Curl-False-Eyelash-Length-10-12mm-i.1218927377.41050313831",
    "observed": "The seller title states a glue-free format, C curl and 10–12mm.",
    "status": "Seller-reported listing; composition and sales rank not established"
  },
  {
    "id": "shopee-tray",
    "platform": "Shopee",
    "market": "Singapore",
    "title": "Self-adhesive 120-cluster tray",
    "url": "https://shopee.sg/No-Need-Glue-120-Cluster-Self-Adhesive-Softer-Lashes-10-12mm-C-Curl-Lashes-Reusable-Tweezer-Strip-Eyelash-Extension-Set-False-Eyelashes-Glue-Free-COD-i.393469684.26972738929",
    "observed": "The seller title advertises 120 clusters, C curl and 10–12mm.",
    "status": "Seller-reported listing; performance claims not transferred"
  },
  {
    "id": "veyes-self",
    "platform": "Brand website",
    "market": "USA / international",
    "title": "VEYES self-adhesive Luxe Duo",
    "url": "https://veyesbeauty.com/es/products/pestanas-autoadhesivas-luxe-duo",
    "observed": "A self-adhesive tray is described with mixed 10–16mm lengths, 100 clusters and an applicator.",
    "status": "Verified listing; final OEM specification requires sampling"
  },
  {
    "id": "tiktok-cc",
    "platform": "TikTok Shop",
    "market": "USA",
    "title": "Char Cosmetics Cotton Cloud pre-glued lashes",
    "url": "https://shop.tiktok.com/us/pdp/cotton-cloud-lashes-by-char-cosmetics-laser-cut-cc-curl-9-11mm-pre-glued-full-volume/1732479294647341944",
    "observed": "The product title states a pre-glued format, CC curl and 9–11mm.",
    "status": "Indexed seller title only; direct page verification unavailable; current sales rank not established"
  },
  {
    "id": "tiktok-ph",
    "platform": "TikTok Shop",
    "market": "Philippines",
    "title": "Lashtalk self-adhesive fishtail segments",
    "url": "https://shop-ph.tiktok.com/pdp/fishtail-segments-lashes-by-lashtalk-self-adhesive-reusable-60-cluster/1730225174933637899",
    "observed": "The seller listing describes self-adhesive fishtail segments in a 60-cluster presentation.",
    "status": "Older indexed listing; availability must be rechecked"
  },
  {
    "id": "kiss-strip",
    "platform": "Brand website",
    "market": "USA",
    "title": "KISS imPRESS pre-glued full-strip kit",
    "url": "https://www.kissusa.com/products/impress-falsies-pre-glued-strip-lashes-kit-faux-mink-volume",
    "observed": "A pre-glued full-strip kit is listed with a faux-mink visual finish.",
    "status": "Verified format reference; faux-mink is not a raw-fiber certification"
  }
];
export const researchDate = "2026-09-18";
export function sourcesFor(ids: string[]) { return marketSources.filter(s => ids.includes(s.id)); }
