export type MarketFaq = {
  question: string;
  answer: string;
};

export type Market = {
  slug: string;
  country: string;
  countryCode: string;
  eyebrow: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  directAnswer: string;
  localIntro?: string;
  localTitle?: string;
  localPoints?: string[];
  buyerTypes: string[];
  productDirections: { title: string; copy: string }[];
  buyingPlan: { title: string; copy: string }[];
  complianceNote: string;
  authorityLabel: string;
  authorityUrl: string;
  whatsappMessage: string;
  faqs: MarketFaq[];
};

export const markets: Market[] = [
  {
    slug: "thailand",
    country: "Thailand",
    countryCode: "TH",
    eyebrow: "Thailand lash sourcing · ประเทศไทย",
    title: "Private label and OEM false eyelashes for Thailand buyers",
    metaTitle: "OEM False Eyelashes Supplier for Thailand Buyers",
    metaDescription:
      "Source private label cluster lashes from China for Thailand. Explore custom lash designs and sample options, destination-based freight and a USD proforma invoice from Lury Beauty in Qingdao.",
    directAnswer:
      "Lury Beauty supplies paid false eyelash samples and coordinates OEM/ODM production and private label packaging for buyers in Thailand through manufacturing partners in Pingdu, China.",
    localIntro:
      "ซัพพลายเออร์ขนตาปลอม OEM และ Private Label จากชิงเต่า ประเทศจีน สอบถามตัวอย่างที่ต้องการ พร้อมใบเสนอราคาค่าสินค้าและค่าขนส่งก่อนชำระเงิน",
    localTitle: "เริ่มสั่งขนตาปลอม OEM จากจีนอย่างไร",
    localPoints: [
      "แจ้งสไตล์หรือส่งภาพอ้างอิง เพื่อยืนยันตัวอย่างที่สามารถจัดหาได้",
      "แจ้งจังหวัด เมือง และรหัสไปรษณีย์ในประเทศไทยเพื่อคำนวณค่าขนส่ง",
      "รับรายละเอียดสินค้า ค่าขนส่ง และ Proforma Invoice สกุลดอลลาร์สหรัฐก่อนชำระเงิน",
      "หลังทดลองสินค้า สามารถคุยเรื่องโลโก้ การ์ดขนตา กล่อง และบรรจุภัณฑ์ Private Label",
    ],
    buyerTypes: [
      "Thai beauty brands testing a first private label collection",
      "Salon and lash studio owners adding retail products",
      "TikTok Shop, Shopee and Lazada sellers testing visual styles",
      "Beauty distributors comparing wholesale lash suppliers",
    ],
    productDirections: [
      {
        title: "Wearable everyday styles",
        copy: "Natural and soft fox-eye directions can be sampled for buyers building an easy-to-explain daily collection.",
      },
      {
        title: "Camera-visible styles",
        copy: "Cat-eye, layered and spiky models give short-video sellers a clearer difference between product options.",
      },
      {
        title: "Bilingual packaging planning",
        copy: "Share the required Thai and English label fields before artwork approval. Final local label duties should be confirmed by the Thai importer.",
      },
    ],
    buyingPlan: [
      {
        title: "Choose a sample direction",
        copy: "Ask for the photographed sample or share a style reference. We confirm the exact sample and availability before quoting.",
      },
      {
        title: "Send Thailand postcode",
        copy: "Freight is quoted after the destination city and postcode are known.",
      },
      {
        title: "Choose channel and packaging",
        copy: "Tell us whether the product is for salons, wholesale, a marketplace or social commerce.",
      },
      {
        title: "Confirm import and label needs",
        copy: "Before bulk production, the Thai buyer or importer should confirm the product classification, notification, labeling and customs requirements for the exact product format.",
      },
    ],
    complianceNote:
      "False lashes sold alone and kits containing adhesive may be treated differently. Lury Beauty can check which partner-factory and product documents are available, but the Thailand importer remains responsible for confirming current Thai FDA, customs and Thai-language labeling requirements before the bulk order.",
    authorityLabel: "Thailand FDA cosmetics information",
    authorityUrl: "https://en.fda.moph.go.th/entrepreneurs-cosmetics/",
    whatsappMessage:
      "Hello, I am sourcing private label false eyelashes for Thailand. Please quote suitable samples and freight, then send a USD proforma invoice. My Thailand city and postcode are:",
    faqs: [
      {
        question: "Can Thailand buyers order lash samples before an OEM order?",
        answer:
          "Yes. Ask for the photographed sample or share your preferred style, then provide the Thailand city and postcode. We confirm the sample item, availability, fee and freight before payment.",
      },
      {
        question: "Can you make Thai-language private label packaging?",
        answer:
          "Thai and English artwork can be discussed for labels, tray cards and boxes. The buyer or importer should supply and approve the required local wording before production.",
      },
      {
        question: "Do you quote delivery to Bangkok and other Thai provinces?",
        answer:
          "Yes. Freight is quoted using the actual city, postcode, parcel details and selected shipping option rather than a universal country price.",
      },
      {
        question: "Does Lury Beauty complete Thailand product registration?",
        answer:
          "Lury Beauty coordinates product and supplier documents when available. The Thailand importer remains responsible for confirming and completing any local notification, registration, labeling and customs steps required for the exact product.",
      },
    ],
  },
  {
    slug: "united-kingdom",
    country: "United Kingdom",
    countryCode: "GB",
    eyebrow: "UK private label lash sourcing",
    title: "Private label false eyelashes for UK brands and wholesale buyers",
    metaTitle: "Private Label False Eyelashes Supplier for UK Buyers",
    metaDescription:
      "Source private label cluster lashes for the UK. Discuss sample options, destination-based freight and a USD proforma invoice with Lury Beauty in Qingdao.",
    directAnswer:
      "Lury Beauty helps UK beauty brands, salons and online sellers test false eyelash samples, plan private label packaging and coordinate OEM/ODM orders with manufacturing partners in Pingdu, China.",
    buyerTypes: [
      "Independent UK beauty brands launching a lash line",
      "Lash salons and training studios adding retail products",
      "TikTok Shop UK and marketplace sellers testing new styles",
      "Beauty wholesalers and retailers planning repeat supply",
    ],
    productDirections: [
      {
        title: "Natural-to-glam test range",
        copy: "Compare everyday, fox-eye, cat-eye, layered and spiky visual references, then confirm the actual product through samples.",
      },
      {
        title: "Retail-ready brand system",
        copy: "Discuss logo placement, model naming, tray card, box, care information and bundle structure after the product direction is selected.",
      },
      {
        title: "Marketplace-ready information",
        copy: "Keep model codes, pack contents, product claims and images consistent across packaging and listings.",
      },
    ],
    buyingPlan: [
      {
        title: "Confirm your sample options",
        copy: "Ask for the photographed sample or share your preferred look. Visual reference codes are not confirmed stock items.",
      },
      {
        title: "Quote UK destination freight",
        copy: "Provide the UK postcode so sample shipping can be calculated before payment.",
      },
      {
        title: "Confirm claims and packaging",
        copy: "Agree the product description, pack contents and artwork before a bulk packaging run.",
      },
      {
        title: "Complete importer checks",
        copy: "The UK buyer should confirm classification, product safety, responsible-party, labeling, customs and marketplace requirements for the exact lash or adhesive kit.",
      },
    ],
    complianceNote:
      "Requirements depend on whether the shipment is false lashes only or includes adhesive or another cosmetic product. Lury Beauty can check available product and partner-factory documents; the UK importer remains responsible for current product safety, responsible-person, notification, labeling, tax and customs obligations.",
    authorityLabel: "UK government cosmetic product guidance",
    authorityUrl:
      "https://www.gov.uk/guidance/making-cosmetic-products-available-to-consumers-in-great-britain",
    whatsappMessage:
      "Hello, I am sourcing private label false eyelashes for the UK. Please quote suitable samples and freight, then send a USD proforma invoice. My UK postcode is:",
    faqs: [
      {
        question: "Can UK buyers start with lash samples?",
        answer:
          "Yes. Share your preferred style and UK postcode. We confirm the actual sample, availability, fee and freight before payment.",
      },
      {
        question: "Can you support private label packaging for a UK lash brand?",
        answer:
          "Yes. Logo labels, tray cards, boxes, inserts and bundle concepts can be discussed. MOQ and timing depend on the approved structure, artwork and quantity.",
      },
      {
        question: "Are sample prices inclusive of delivery and UK import charges?",
        answer:
          "No universal delivered price is shown. Freight is quoted to the postcode, while duties, VAT, brokerage and local import charges depend on the shipment terms and remain subject to buyer confirmation.",
      },
      {
        question: "Can you guarantee UK compliance?",
        answer:
          "No supplier should make a blanket guarantee without the exact product and sales setup. We check available documents for the selected product; the UK importer or responsible business should verify current local requirements before sale.",
      },
    ],
  },
  {
    slug: "united-states",
    country: "United States",
    countryCode: "US",
    eyebrow: "US wholesale and private label sourcing",
    title: "Private label and wholesale false eyelashes for US buyers",
    metaTitle: "Private Label & Wholesale Lashes Supplier for US Buyers",
    metaDescription:
      "Source wholesale and private label cluster lashes for the USA. Discuss sample options, ZIP-code-based freight and a USD proforma invoice with Lury Beauty in Qingdao.",
    directAnswer:
      "Lury Beauty supplies paid lash samples and coordinates private label and wholesale false eyelash orders for US buyers through a Qingdao sales team and Pingdu manufacturing partners.",
    buyerTypes: [
      "US private label beauty founders validating a new product line",
      "Beauty-supply stores and regional wholesalers",
      "TikTok Shop and Amazon sellers testing product-market fit",
      "Lash artists, salons and educators adding branded retail items",
    ],
    productDirections: [
      {
        title: "Clear style ladder",
        copy: "Compare natural, cat-eye and bolder visual directions to plan a range. Confirm each selected look through an actual sample.",
      },
      {
        title: "Private label starter route",
        copy: "Confirm available samples first, then discuss label, tray card, retail box and bundle decisions against your intended quantity.",
      },
      {
        title: "Consistent listing assets",
        copy: "Use the same model name, pack contents and supportable claims on the package, product page and marketplace listing.",
      },
    ],
    buyingPlan: [
      {
        title: "Validate styles with samples",
        copy: "Request displayed style references or the custom designs most relevant to your customer.",
      },
      {
        title: "Send US ZIP code",
        copy: "We calculate sample freight after the delivery city and ZIP code are supplied.",
      },
      {
        title: "Choose wholesale or private label",
        copy: "Discuss the available sample packaging or share a logo and packaging brief for an OEM quotation.",
      },
      {
        title: "Review federal, state and channel duties",
        copy: "The US importer or seller should confirm the exact safety, labeling, customs, state and marketplace requirements for lashes and any included adhesive.",
      },
    ],
    complianceNote:
      "False lashes alone and kits containing adhesive can create different regulatory and safety questions. Lury Beauty can check available product and partner-factory documents, while the US importer remains responsible for current federal, state, customs and sales-channel requirements and for substantiating claims.",
    authorityLabel: "US FDA eye cosmetic safety guidance",
    authorityUrl:
      "https://www.fda.gov/cosmetics/cosmetic-products/eye-cosmetic-safety",
    whatsappMessage:
      "Hello, I am sourcing private label or wholesale false eyelashes for the United States. Please quote suitable samples and freight, then send a USD proforma invoice. My city and ZIP code are:",
    faqs: [
      {
        question: "Can a US buyer order samples before choosing private label packaging?",
        answer:
          "Yes. Ask for the photographed sample or share your preferred style. We confirm the actual sample and availability; the W/B illustrations are style references. Packaging can be discussed alongside your target quantity.",
      },
      {
        question: "Do you quote sample shipping to a US ZIP code?",
        answer:
          "Yes. Send the destination city and ZIP code. We confirm the sample items and freight before issuing a USD proforma invoice.",
      },
      {
        question: "Can you supply beauty-supply stores and online sellers?",
        answer:
          "Yes. The same product range can be discussed for wholesale, private label, salons and online channels, with packaging and order details adapted to the project.",
      },
      {
        question: "Are adhesive and lash requirements the same in the USA?",
        answer:
          "Not necessarily. A lash-only product and a kit containing adhesive may raise different safety, ingredient, labeling and channel questions. Confirm the final product format before ordering packaging or bulk goods.",
      },
    ],
  },
{
  "slug": "malaysia",
  "country": "Malaysia",
  "countryCode": "MY",
  "eyebrow": "Malaysia private label sourcing",
  "title": "Self-adhesive lash sourcing for Malaysia buyers",
  "metaTitle": "Self-Adhesive Lash Supplier for Malaysia | Private Label OEM",
  "metaDescription": "Source custom self-adhesive lashes from China for Malaysian beauty brands and wholesale buyers. MOQ is quoted for your actual style and packaging.",
  "directAnswer": "Lury Beauty is a China-based sourcing contact for Malaysia buyers developing self-adhesive clusters, pre-mapped lashes and private label packaging. MOQ is confirmed after the style, quantity and packaging brief is reviewed.",
  "buyerTypes": [
    "Malaysian private label founders developing a new lash range",
    "Beauty wholesalers and retailers comparing supplier options",
    "Salon owners adding branded take-home lashes",
    "Marketplace sellers preparing a differentiated product brief"
  ],
  "productDirections": [
    {
      "title": "Brown and soft everyday designs",
      "copy": "Brown self-adhesive and basic pre-glued clusters are visible in Malaysian retail listings. Use these as format references and validate demand with your own buyers; they are not evidence of a national bestseller ranking."
    },
    {
      "title": "Material-first quotation",
      "copy": "Request PBT or PET specifications and confirm the physical sample. Faux-mink and silk-effect are finishes, not verified raw material declarations."
    },
    {
      "title": "West and East Malaysia destination brief",
      "copy": "Provide the actual delivery postcode and destination. Parcel and bulk freight are quoted against the confirmed product, packing and route."
    }
  ],
  "buyingPlan": [
    {
      "title": "Choose a design direction",
      "copy": "Explore 100 designs or send your own reference. List intended style, format, material and color."
    },
    {
      "title": "Test self-adhesive samples",
      "copy": "Approve lash mapping, adhesive format and packaging contents before describing them in retail listings."
    },
    {
      "title": "Confirm local artwork",
      "copy": "Provide the exact label wording and instructions required for your market. Approve the artwork before printing."
    },
    {
      "title": "Confirm MOQ and delivery",
      "copy": "MOQ is confirmed for the actual style and packaging. Confirm per-style, mixed-style and packaging conditions along with the destination quote."
    }
  ],
  "complianceNote": "A self-adhesive product contains pre-applied adhesive even when no separate liquid glue is supplied. The Malaysian importer should confirm the classification and applicable requirements for the exact lash and adhesive format. Documents and any testing evidence are checked for the actual project.",
  "authorityLabel": "Malaysia NPRA official information",
  "authorityUrl": "https://www.npra.gov.my/",
  "whatsappMessage": "Hello Lury Beauty, I am sourcing self-adhesive private label lashes for Malaysia. My approximate quantity is to be discussed. Please confirm materials, MOQ per style, packaging and sample steps. Delivery postcode:",
  "faqs": [
    {
      "question": "Are brown self-adhesive designs available for discussion?",
      "answer": "Yes. Share the design reference and desired brown tone. Final material, color, lash map and self-adhesive suitability are checked through quotation and samples."
    },
    {
      "question": "Can I combine different styles in an order?",
      "answer": "Mixed-style orders must be confirmed. The product and packaging requirements must be reviewed for each style and combination."
    },
    {
      "question": "Do you use a fixed freight price for all Malaysia destinations?",
      "answer": "No. Send the postcode, product format and expected packing so the actual route can be quoted."
    }
  ]
},
{
  "slug": "singapore",
  "country": "Singapore",
  "countryCode": "SG",
  "eyebrow": "Singapore brand and wholesale sourcing",
  "title": "Private label self-adhesive lashes for Singapore buyers",
  "metaTitle": "Private Label Self-Adhesive Lash Supplier for Singapore Buyers",
  "metaDescription": "Develop self-adhesive lash collections with a China sourcing contact. Custom design briefs, sampling and packaging. MOQ is confirmed for the actual style and packaging.",
  "directAnswer": "Lury Beauty coordinates China-based lash sourcing and private label development for Singapore brands, salons and wholesale buyers. Explore a wider design catalog, test the actual product and confirm bulk MOQ and packaging against your brief.",
  "buyerTypes": [
    "Singapore beauty founders developing a private label range",
    "Salon and studio owners planning branded retail products",
    "Regional beauty distributors comparing sample quality",
    "Online retailers developing a clearly specified product offer"
  ],
  "productDirections": [
    {
      "title": "Segmented and cluster formats",
      "copy": "Singapore retail includes self-adhesive cluster products. Use format references to decide whether your brief needs loose clusters or a pre-arranged map."
    },
    {
      "title": "Clear product instructions",
      "copy": "Approve tray orientation, application illustrations, removal and storage instructions for the actual sample. Do not copy another brand's wear or reuse claims."
    },
    {
      "title": "A distinct regional collection",
      "copy": "Compare natural, wispy, brown and fuller design directions against your buyer profile. Confirm demand through your own sample feedback before ordering."
    }
  ],
  "buyingPlan": [
    {
      "title": "Set the collection brief",
      "copy": "Select the intended formats, style families and material requests from the wider design catalog."
    },
    {
      "title": "Send the Singapore postcode",
      "copy": "Freight depends on the confirmed items, parcel size and delivery destination."
    },
    {
      "title": "Approve product and label details",
      "copy": "Check raw material, adhesive information, pack contents and the required instructions with the approved sample."
    },
    {
      "title": "Confirm the commercial schedule",
      "copy": "MOQ is confirmed for the actual style and packaging. Per-style quantities, custom packaging and the delivery schedule are agreed before ordering."
    }
  ],
  "complianceNote": "Confirm the exact lash and pre-applied adhesive format with the Singapore importer or qualified adviser. Product classification and applicable safety, label and import requirements should be checked before approving retail artwork or bulk production. Self-adhesive does not mean adhesive-free.",
  "authorityLabel": "Singapore HSA product classification guidance",
  "authorityUrl": "https://www.hsa.gov.sg/cosmetic-products/classification/",
  "whatsappMessage": "Hello Lury Beauty, I am developing private label self-adhesive lashes for Singapore. My approximate quantity is to be discussed. Please confirm material options, MOQ per style, packaging and sample steps. Delivery postcode:",
  "faqs": [
    {
      "question": "Is Lury Beauty a Singapore-based factory?",
      "answer": "No. Lury Beauty is a Qingdao-based trading and sourcing supplier coordinating production with partners in Pingdu, China."
    },
    {
      "question": "Can I specify my own material and lash map?",
      "answer": "Yes. Send the intended fiber material, finish, length, curl and map. Final production details and self-adhesive suitability are confirmed before quotation and sample approval."
    },
    {
      "question": "Are the 100 designs guaranteed stock items?",
      "answer": "No. They are custom design directions with representative family illustrations. Ask for a physical sample and confirmed specifications before ordering."
    }
  ]
},
];

export const marketSlugs = markets.map((market) => market.slug);

export function getMarket(slug: string) {
  return markets.find((market) => market.slug === slug);
}
