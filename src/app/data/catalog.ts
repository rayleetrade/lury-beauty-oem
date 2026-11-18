import { newDesigns } from "./designBriefs";
import type { LashStyle } from "./catalogTypes";
export type { LashStyle } from "./catalogTypes";
export const typicalMoq = "MOQ is quoted per style and packaging after your brief is reviewed.";
export const materialOptions = [
  { id: "pbt", name: "PBT fiber option", description: "Request PBT specifications and a physical sample. Faux-mink and silk-effect describe finishes; they do not establish animal hair or natural silk content." },
  { id: "pet", name: "PET fiber option", description: "Request PET specifications and a physical sample. Confirm the exact fiber, taper, curl and finish against your buyer brief." },
  { id: "custom", name: "Other material brief", description: "Send your required material or reference. Availability and suitability for self-adhesive production are confirmed before quotation." },
] as const;
export const styleFamilies = [
  {
    "slug": "natural",
    "name": "Natural",
    "description": "Short, sparse and softly tapered lash directions for everyday private label ranges.",
    "sampleChecklist": "Keep the density light, check inner-corner clearance and compare the band visibility on bare lashes.",
    "image": "/images/styles/natural.webp",
    "references": [
      {
        "id": "UK-W",
        "market": "UK",
        "url": "https://www.boots.com/ardell-press-on-wispies-natural-30-clusters-plus-applicator-10362440",
        "note": "自然Wispies免胶簇状款在售"
      },
      {
        "id": "TH-N",
        "market": "Thailand",
        "url": "https://www.watsons.co.th/th/bohktoh-%E0%B8%9A%E0%B8%AD%E0%B8%81%E0%B8%95%E0%B9%88%E0%B8%AD-%E0%B8%82%E0%B8%99%E0%B8%95%E0%B8%B2%E0%B8%9B%E0%B8%A5%E0%B8%AD%E0%B8%A1-%E0%B9%81%E0%B8%95%E0%B9%87%E0%B8%87%E0%B8%84%E0%B9%8C-%E0%B9%81%E0%B8%A5%E0%B8%8A-02-%E0%B8%AD%E0%B8%B8%E0%B9%8A%E0%B8%9B%E0%B8%AA%E0%B9%8C/p/BP_304430",
        "note": "自然韩式自粘合成纤维款在售"
      }
    ],
    "prefix": "N"
  },
  {
    "slug": "wispy",
    "name": "Wispy",
    "description": "Airy clusters with alternating lengths for a textured finish.",
    "sampleChecklist": "Check the difference between the base fibers and spikes, and compare spacing across the tray.",
    "image": "/images/styles/wispy.webp",
    "references": [
      {
        "id": "US-NW",
        "market": "USA",
        "url": "https://www.kissusa.com/products/impress-press-on-falsies-3-pack-wispy-90-clusters",
        "note": "Wispy预涂胶簇状款在售；不证明销量排名"
      },
      {
        "id": "UK-W",
        "market": "UK",
        "url": "https://www.boots.com/ardell-press-on-wispies-natural-30-clusters-plus-applicator-10362440",
        "note": "自然Wispies免胶簇状款在售"
      }
    ],
    "prefix": "W"
  },
  {
    "slug": "volume",
    "name": "Volume",
    "description": "Fuller, layered directions for buyers building a stronger makeup collection.",
    "sampleChecklist": "Approve density and fiber distribution on a physical sample; a dramatic photo alone does not establish comfort.",
    "image": "/images/styles/volume.webp",
    "references": [
      {
        "id": "US-V",
        "market": "USA",
        "url": "https://www.kissusa.com/products/impress-press-on-falsies-refills-30-clusters-voluminous-3pk",
        "note": "浓密预涂胶簇状款在售"
      }
    ],
    "prefix": "V"
  },
  {
    "slug": "cat",
    "name": "Cat & Fox Eye",
    "description": "Outer-corner emphasis, from a soft taper to a sharper feline shape.",
    "sampleChecklist": "Specify where the longest fibers sit. A rising outer corner and an extended outer tail create different maps.",
    "image": "/images/styles/cat.webp",
    "references": [
      {
        "id": "UK-W",
        "market": "UK",
        "url": "https://www.boots.com/ardell-press-on-wispies-natural-30-clusters-plus-applicator-10362440",
        "note": "自然Wispies免胶簇状款在售"
      }
    ],
    "prefix": "C"
  },
  {
    "slug": "doll",
    "name": "Doll & Round Eye",
    "description": "Center-focused mapping directions for a rounded, open-eye effect.",
    "sampleChecklist": "Specify the center peak and taper at both ends, then sample on the intended customer profile.",
    "image": "/images/styles/doll.webp",
    "references": [],
    "prefix": "D"
  },
  {
    "slug": "manga",
    "name": "Manga & Spiky",
    "description": "Separated spike and bundle directions for graphic, defined lash collections.",
    "sampleChecklist": "Approve spike height, separation and base density independently. These are design directions, not a verified sales ranking.",
    "image": "/images/styles/manga.webp",
    "references": [],
    "prefix": "M"
  },
  {
    "slug": "brown",
    "name": "Brown",
    "description": "Brown and brown-black directions for softer color-focused ranges.",
    "sampleChecklist": "Approve fiber color under daylight, then compare tray and on-eye appearance. Match future batches to the approved color sample.",
    "image": "/images/styles/brown.webp",
    "references": [
      {
        "id": "MY-B",
        "market": "Malaysia",
        "url": "https://www.watsons.com.my/glamfix-wink-era-poppin-glue-free-cluster-eyelashes-07-soft-girl-brown/p/BP_1026755",
        "note": "棕色免胶簇状款在售"
      }
    ],
    "prefix": "B"
  },
  {
    "slug": "strip",
    "name": "Full Strip",
    "description": "Pre-glued full-strip directions for a ready-mapped lash presentation.",
    "sampleChecklist": "Confirm strip width, band curvature, adhesive placement and left/right symmetry through sampling.",
    "image": "/images/styles/strip.webp",
    "references": [
      {
        "id": "US-S",
        "market": "USA",
        "url": "https://www.kissusa.com/products/impress-falsies-pre-glued-strip-lashes-kit-faux-mink-volume",
        "note": "仿貂毛效果预涂胶整条款在售"
      }
    ],
    "prefix": "S"
  },
  {
    "slug": "half",
    "name": "Half & Accent",
    "description": "Half-strip and outer-corner directions for localized definition.",
    "sampleChecklist": "Approve the actual band width and attachment position. Confirm whether half-strip or separate accent pieces are wanted.",
    "image": "/images/styles/half.webp",
    "references": [],
    "prefix": "H"
  },
  {
    "slug": "mapped",
    "name": "Pre-Mapped",
    "description": "Pre-arranged segmented lash directions that present a complete intended map.",
    "sampleChecklist": "Approve segment sequence, tray orientation and instruction artwork so the buyer receives a clear repeatable map.",
    "image": "/images/styles/mapped.webp",
    "references": [
      {
        "id": "UK-M",
        "market": "UK",
        "url": "https://www.boots.com/beauty/beauty-accessories/false-eyelashes/tatti-lashes-pre-glued-everyday-mapped-individual-lashes-clusters-10s-10368787",
        "note": "日常预分段预涂胶款在售"
      }
    ],
    "prefix": "P"
  }
];
const originalDirections: LashStyle[] = [
  {
    "id": "REF-N01",
    "name": "Barely There",
    "family": "natural",
    "format": "Clusters",
    "description": "Barely There is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/natural.webp"
  },
  {
    "id": "REF-N02",
    "name": "Office Soft",
    "family": "natural",
    "format": "Clusters",
    "description": "Office Soft is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/natural.webp"
  },
  {
    "id": "REF-N03",
    "name": "Short Natural",
    "family": "natural",
    "format": "Clusters",
    "description": "Short Natural is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/natural.webp"
  },
  {
    "id": "REF-N04",
    "name": "Classic Everyday",
    "family": "natural",
    "format": "Clusters",
    "description": "Classic Everyday is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/natural.webp"
  },
  {
    "id": "REF-N05",
    "name": "Airy Natural",
    "family": "natural",
    "format": "Clusters",
    "description": "Airy Natural is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/natural.webp"
  },
  {
    "id": "REF-N06",
    "name": "Fine Definition",
    "family": "natural",
    "format": "Clusters",
    "description": "Fine Definition is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/natural.webp"
  },
  {
    "id": "REF-N07",
    "name": "Soft Rounded",
    "family": "natural",
    "format": "Clusters",
    "description": "Soft Rounded is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/natural.webp"
  },
  {
    "id": "REF-N08",
    "name": "Natural Taper",
    "family": "natural",
    "format": "Clusters",
    "description": "Natural Taper is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/natural.webp"
  },
  {
    "id": "REF-N09",
    "name": "Light Cross",
    "family": "natural",
    "format": "Clusters",
    "description": "Light Cross is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/natural.webp"
  },
  {
    "id": "REF-N10",
    "name": "Natural Accent",
    "family": "natural",
    "format": "Clusters",
    "description": "Natural Accent is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/natural.webp"
  },
  {
    "id": "REF-W01",
    "name": "Soft Wispy",
    "family": "wispy",
    "format": "Clusters",
    "description": "Soft Wispy is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/wispy.webp"
  },
  {
    "id": "REF-W02",
    "name": "Long Wispy",
    "family": "wispy",
    "format": "Clusters",
    "description": "Long Wispy is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/wispy.webp"
  },
  {
    "id": "REF-W03",
    "name": "Short Wispy",
    "family": "wispy",
    "format": "Clusters",
    "description": "Short Wispy is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/wispy.webp"
  },
  {
    "id": "REF-W04",
    "name": "Feather Wispy",
    "family": "wispy",
    "format": "Clusters",
    "description": "Feather Wispy is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/wispy.webp"
  },
  {
    "id": "REF-W05",
    "name": "Layered Wispy",
    "family": "wispy",
    "format": "Clusters",
    "description": "Layered Wispy is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/wispy.webp"
  },
  {
    "id": "REF-W06",
    "name": "Cross Wispy",
    "family": "wispy",
    "format": "Clusters",
    "description": "Cross Wispy is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/wispy.webp"
  },
  {
    "id": "REF-W07",
    "name": "Center Wispy",
    "family": "wispy",
    "format": "Clusters",
    "description": "Center Wispy is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/wispy.webp"
  },
  {
    "id": "REF-W08",
    "name": "Outer Wispy",
    "family": "wispy",
    "format": "Clusters",
    "description": "Outer Wispy is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/wispy.webp"
  },
  {
    "id": "REF-W09",
    "name": "Sparse Wispy",
    "family": "wispy",
    "format": "Clusters",
    "description": "Sparse Wispy is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/wispy.webp"
  },
  {
    "id": "REF-W10",
    "name": "Full Wispy",
    "family": "wispy",
    "format": "Clusters",
    "description": "Full Wispy is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/wispy.webp"
  },
  {
    "id": "REF-V01",
    "name": "Soft Volume",
    "family": "volume",
    "format": "Clusters",
    "description": "Soft Volume is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/volume.webp"
  },
  {
    "id": "REF-V02",
    "name": "Classic Volume",
    "family": "volume",
    "format": "Clusters",
    "description": "Classic Volume is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/volume.webp"
  },
  {
    "id": "REF-V03",
    "name": "Full Volume",
    "family": "volume",
    "format": "Clusters",
    "description": "Full Volume is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/volume.webp"
  },
  {
    "id": "REF-V04",
    "name": "Dense Volume",
    "family": "volume",
    "format": "Clusters",
    "description": "Dense Volume is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/volume.webp"
  },
  {
    "id": "REF-V05",
    "name": "Fluffy Volume",
    "family": "volume",
    "format": "Clusters",
    "description": "Fluffy Volume is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/volume.webp"
  },
  {
    "id": "REF-V06",
    "name": "Layered Volume",
    "family": "volume",
    "format": "Clusters",
    "description": "Layered Volume is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/volume.webp"
  },
  {
    "id": "REF-V07",
    "name": "Short Volume",
    "family": "volume",
    "format": "Clusters",
    "description": "Short Volume is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/volume.webp"
  },
  {
    "id": "REF-V08",
    "name": "Long Volume",
    "family": "volume",
    "format": "Clusters",
    "description": "Long Volume is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/volume.webp"
  },
  {
    "id": "REF-V09",
    "name": "Center Volume",
    "family": "volume",
    "format": "Clusters",
    "description": "Center Volume is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/volume.webp"
  },
  {
    "id": "REF-V10",
    "name": "Outer Volume",
    "family": "volume",
    "format": "Clusters",
    "description": "Outer Volume is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/volume.webp"
  },
  {
    "id": "REF-C01",
    "name": "Soft Cat",
    "family": "cat",
    "format": "Clusters",
    "description": "Soft Cat is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/cat.webp"
  },
  {
    "id": "REF-C02",
    "name": "Sharp Cat",
    "family": "cat",
    "format": "Clusters",
    "description": "Sharp Cat is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/cat.webp"
  },
  {
    "id": "REF-C03",
    "name": "Short Cat",
    "family": "cat",
    "format": "Clusters",
    "description": "Short Cat is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/cat.webp"
  },
  {
    "id": "REF-C04",
    "name": "Wispy Cat",
    "family": "cat",
    "format": "Clusters",
    "description": "Wispy Cat is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/cat.webp"
  },
  {
    "id": "REF-C05",
    "name": "Volume Cat",
    "family": "cat",
    "format": "Clusters",
    "description": "Volume Cat is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/cat.webp"
  },
  {
    "id": "REF-C06",
    "name": "Natural Fox",
    "family": "cat",
    "format": "Clusters",
    "description": "Natural Fox is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/cat.webp"
  },
  {
    "id": "REF-C07",
    "name": "Lifted Fox",
    "family": "cat",
    "format": "Clusters",
    "description": "Lifted Fox is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/cat.webp"
  },
  {
    "id": "REF-C08",
    "name": "Long Fox",
    "family": "cat",
    "format": "Clusters",
    "description": "Long Fox is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/cat.webp"
  },
  {
    "id": "REF-C09",
    "name": "Layered Fox",
    "family": "cat",
    "format": "Clusters",
    "description": "Layered Fox is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/cat.webp"
  },
  {
    "id": "REF-C10",
    "name": "Accent Cat",
    "family": "cat",
    "format": "Clusters",
    "description": "Accent Cat is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/cat.webp"
  },
  {
    "id": "REF-D01",
    "name": "Soft Doll",
    "family": "doll",
    "format": "Clusters",
    "description": "Soft Doll is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/doll.webp"
  },
  {
    "id": "REF-D02",
    "name": "Natural Doll",
    "family": "doll",
    "format": "Clusters",
    "description": "Natural Doll is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/doll.webp"
  },
  {
    "id": "REF-D03",
    "name": "Round Open",
    "family": "doll",
    "format": "Clusters",
    "description": "Round Open is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/doll.webp"
  },
  {
    "id": "REF-D04",
    "name": "Center Lift",
    "family": "doll",
    "format": "Clusters",
    "description": "Center Lift is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/doll.webp"
  },
  {
    "id": "REF-D05",
    "name": "Wispy Doll",
    "family": "doll",
    "format": "Clusters",
    "description": "Wispy Doll is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/doll.webp"
  },
  {
    "id": "REF-D06",
    "name": "Fluffy Doll",
    "family": "doll",
    "format": "Clusters",
    "description": "Fluffy Doll is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/doll.webp"
  },
  {
    "id": "REF-D07",
    "name": "Short Doll",
    "family": "doll",
    "format": "Clusters",
    "description": "Short Doll is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/doll.webp"
  },
  {
    "id": "REF-D08",
    "name": "Long Doll",
    "family": "doll",
    "format": "Clusters",
    "description": "Long Doll is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/doll.webp"
  },
  {
    "id": "REF-D09",
    "name": "Layered Doll",
    "family": "doll",
    "format": "Clusters",
    "description": "Layered Doll is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/doll.webp"
  },
  {
    "id": "REF-D10",
    "name": "Defined Round",
    "family": "doll",
    "format": "Clusters",
    "description": "Defined Round is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/doll.webp"
  },
  {
    "id": "REF-M01",
    "name": "Soft Manga",
    "family": "manga",
    "format": "Clusters",
    "description": "Soft Manga is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/manga.webp"
  },
  {
    "id": "REF-M02",
    "name": "Classic Manga",
    "family": "manga",
    "format": "Clusters",
    "description": "Classic Manga is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/manga.webp"
  },
  {
    "id": "REF-M03",
    "name": "Sparse Manga",
    "family": "manga",
    "format": "Clusters",
    "description": "Sparse Manga is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/manga.webp"
  },
  {
    "id": "REF-M04",
    "name": "Dense Manga",
    "family": "manga",
    "format": "Clusters",
    "description": "Dense Manga is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/manga.webp"
  },
  {
    "id": "REF-M05",
    "name": "Short Spikes",
    "family": "manga",
    "format": "Clusters",
    "description": "Short Spikes is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/manga.webp"
  },
  {
    "id": "REF-M06",
    "name": "Long Spikes",
    "family": "manga",
    "format": "Clusters",
    "description": "Long Spikes is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/manga.webp"
  },
  {
    "id": "REF-M07",
    "name": "Alternating Spikes",
    "family": "manga",
    "format": "Clusters",
    "description": "Alternating Spikes is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/manga.webp"
  },
  {
    "id": "REF-M08",
    "name": "Center Spikes",
    "family": "manga",
    "format": "Clusters",
    "description": "Center Spikes is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/manga.webp"
  },
  {
    "id": "REF-M09",
    "name": "Outer Spikes",
    "family": "manga",
    "format": "Clusters",
    "description": "Outer Spikes is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/manga.webp"
  },
  {
    "id": "REF-M10",
    "name": "Layered Manga",
    "family": "manga",
    "format": "Clusters",
    "description": "Layered Manga is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/manga.webp"
  },
  {
    "id": "REF-B01",
    "name": "Natural Brown",
    "family": "brown",
    "format": "Clusters",
    "description": "Natural Brown is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/brown.webp"
  },
  {
    "id": "REF-B02",
    "name": "Wispy Brown",
    "family": "brown",
    "format": "Clusters",
    "description": "Wispy Brown is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/brown.webp"
  },
  {
    "id": "REF-B03",
    "name": "Soft Cat Brown",
    "family": "brown",
    "format": "Clusters",
    "description": "Soft Cat Brown is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/brown.webp"
  },
  {
    "id": "REF-B04",
    "name": "Doll Brown",
    "family": "brown",
    "format": "Clusters",
    "description": "Doll Brown is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/brown.webp"
  },
  {
    "id": "REF-B05",
    "name": "Volume Brown",
    "family": "brown",
    "format": "Clusters",
    "description": "Volume Brown is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/brown.webp"
  },
  {
    "id": "REF-B06",
    "name": "Short Brown",
    "family": "brown",
    "format": "Clusters",
    "description": "Short Brown is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/brown.webp"
  },
  {
    "id": "REF-B07",
    "name": "Long Brown",
    "family": "brown",
    "format": "Clusters",
    "description": "Long Brown is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/brown.webp"
  },
  {
    "id": "REF-B08",
    "name": "Brown Black Blend",
    "family": "brown",
    "format": "Clusters",
    "description": "Brown Black Blend is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/brown.webp"
  },
  {
    "id": "REF-B09",
    "name": "Light Brown",
    "family": "brown",
    "format": "Clusters",
    "description": "Light Brown is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/brown.webp"
  },
  {
    "id": "REF-B10",
    "name": "Deep Brown",
    "family": "brown",
    "format": "Clusters",
    "description": "Deep Brown is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/brown.webp"
  },
  {
    "id": "REF-S01",
    "name": "Natural Strip",
    "family": "strip",
    "format": "Full strip",
    "description": "Natural Strip is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/strip.webp"
  },
  {
    "id": "REF-S02",
    "name": "Wispy Strip",
    "family": "strip",
    "format": "Full strip",
    "description": "Wispy Strip is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/strip.webp"
  },
  {
    "id": "REF-S03",
    "name": "Volume Strip",
    "family": "strip",
    "format": "Full strip",
    "description": "Volume Strip is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/strip.webp"
  },
  {
    "id": "REF-S04",
    "name": "Cat Strip",
    "family": "strip",
    "format": "Full strip",
    "description": "Cat Strip is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/strip.webp"
  },
  {
    "id": "REF-S05",
    "name": "Doll Strip",
    "family": "strip",
    "format": "Full strip",
    "description": "Doll Strip is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/strip.webp"
  },
  {
    "id": "REF-S06",
    "name": "Cross Strip",
    "family": "strip",
    "format": "Full strip",
    "description": "Cross Strip is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/strip.webp"
  },
  {
    "id": "REF-S07",
    "name": "Feather Strip",
    "family": "strip",
    "format": "Full strip",
    "description": "Feather Strip is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/strip.webp"
  },
  {
    "id": "REF-S08",
    "name": "Short Strip",
    "family": "strip",
    "format": "Full strip",
    "description": "Short Strip is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/strip.webp"
  },
  {
    "id": "REF-S09",
    "name": "Long Strip",
    "family": "strip",
    "format": "Full strip",
    "description": "Long Strip is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/strip.webp"
  },
  {
    "id": "REF-S10",
    "name": "Faux Mink Effect Strip",
    "family": "strip",
    "format": "Full strip",
    "description": "Faux Mink Effect Strip is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/strip.webp"
  },
  {
    "id": "REF-H01",
    "name": "Natural Half",
    "family": "half",
    "format": "Half / accent",
    "description": "Natural Half is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/half.webp"
  },
  {
    "id": "REF-H02",
    "name": "Wispy Half",
    "family": "half",
    "format": "Half / accent",
    "description": "Wispy Half is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/half.webp"
  },
  {
    "id": "REF-H03",
    "name": "Cat Half",
    "family": "half",
    "format": "Half / accent",
    "description": "Cat Half is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/half.webp"
  },
  {
    "id": "REF-H04",
    "name": "Volume Half",
    "family": "half",
    "format": "Half / accent",
    "description": "Volume Half is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/half.webp"
  },
  {
    "id": "REF-H05",
    "name": "Short Half",
    "family": "half",
    "format": "Half / accent",
    "description": "Short Half is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/half.webp"
  },
  {
    "id": "REF-H06",
    "name": "Long Half",
    "family": "half",
    "format": "Half / accent",
    "description": "Long Half is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/half.webp"
  },
  {
    "id": "REF-H07",
    "name": "Outer Accent",
    "family": "half",
    "format": "Half / accent",
    "description": "Outer Accent is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/half.webp"
  },
  {
    "id": "REF-H08",
    "name": "Soft Outer",
    "family": "half",
    "format": "Half / accent",
    "description": "Soft Outer is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/half.webp"
  },
  {
    "id": "REF-H09",
    "name": "Spiky Accent",
    "family": "half",
    "format": "Half / accent",
    "description": "Spiky Accent is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/half.webp"
  },
  {
    "id": "REF-H10",
    "name": "Brown Half",
    "family": "half",
    "format": "Half / accent",
    "description": "Brown Half is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/half.webp"
  },
  {
    "id": "REF-P01",
    "name": "Everyday Map",
    "family": "mapped",
    "format": "Pre-mapped",
    "description": "Everyday Map is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/mapped.webp"
  },
  {
    "id": "REF-P02",
    "name": "Natural Map",
    "family": "mapped",
    "format": "Pre-mapped",
    "description": "Natural Map is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/mapped.webp"
  },
  {
    "id": "REF-P03",
    "name": "Wispy Map",
    "family": "mapped",
    "format": "Pre-mapped",
    "description": "Wispy Map is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/mapped.webp"
  },
  {
    "id": "REF-P04",
    "name": "Cat Map",
    "family": "mapped",
    "format": "Pre-mapped",
    "description": "Cat Map is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/mapped.webp"
  },
  {
    "id": "REF-P05",
    "name": "Fox Map",
    "family": "mapped",
    "format": "Pre-mapped",
    "description": "Fox Map is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/mapped.webp"
  },
  {
    "id": "REF-P06",
    "name": "Doll Map",
    "family": "mapped",
    "format": "Pre-mapped",
    "description": "Doll Map is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/mapped.webp"
  },
  {
    "id": "REF-P07",
    "name": "Soft Glam Map",
    "family": "mapped",
    "format": "Pre-mapped",
    "description": "Soft Glam Map is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/mapped.webp"
  },
  {
    "id": "REF-P08",
    "name": "Volume Map",
    "family": "mapped",
    "format": "Pre-mapped",
    "description": "Volume Map is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/mapped.webp"
  },
  {
    "id": "REF-P09",
    "name": "Short Map",
    "family": "mapped",
    "format": "Pre-mapped",
    "description": "Short Map is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/mapped.webp"
  },
  {
    "id": "REF-P10",
    "name": "Brown Map",
    "family": "mapped",
    "format": "Pre-mapped",
    "description": "Brown Map is a made-to-order self-adhesive lash design direction. Request material, length, curl and pack options against your brief.",
    "image": "/images/styles/mapped.webp"
  }
];
export const lashStyles: LashStyle[] = [...newDesigns, ...originalDirections];
export function styleInquiry(style: LashStyle, material = "To be confirmed") {
  return `Hello Lury Beauty, I would like an OEM quote for design reference ${style.id} - ${style.name}. Material request: ${material}.${style.specs ? ` Proposed sample specification: ${style.specs.lengths.join("/")}mm, ${style.specs.curl} curl, ${style.specs.color}, ${style.specs.pack}. ${style.specs.fiberRequest}.` : ""} I understand the family illustration is a style reference and final specifications require sample approval. My approximate quantity is to be discussed. Please confirm MOQ per style, packaging options and sample steps. Destination:`;
}
