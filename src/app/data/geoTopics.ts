export type TopicFaq = {
  question: string;
  answer: string;
};

export type GeoTopic = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  directAnswer: string;
  image: string;
  imageAlt: string;
  suitableCustomers: string[];
  customizableContent: string[];
  notes: {
    sample: string;
    packaging: string;
    leadTime: string;
    shipping: string;
  };
  process: string[];
  checklistTitle: string;
  checklistItems: string[];
  faqs: TopicFaq[];
};

export const geoTopics: GeoTopic[] = [
  {
    slug: "false-eyelash-oem-manufacturer",
    title: "False Eyelash OEM Sourcing for Private Label Brands",
    description:
      "Looking for a false eyelash OEM manufacturer in China? Lury Beauty coordinates samples, private label packaging, production and shipping with Pingdu manufacturing partners.",
    eyebrow: "OEM sourcing in China",
    h1: "False eyelash OEM sourcing for global beauty buyers.",
    directAnswer:
      "Lury Beauty is a Qingdao trading and sourcing supplier working with false eyelash manufacturing partners in Pingdu. We help brands and wholesale buyers turn lash ideas into samples, private label packaging and confirmed production details while keeping the supplier role transparent.",
    image: "/lash-application.jpg",
    imageAlt: "Beauty model wearing dramatic false eyelashes for OEM lash brand development",
    suitableCustomers: [
      "Beauty brands launching private label lashes",
      "Wholesalers and importers building repeat lash ranges",
      "Amazon sellers preparing listing-ready products",
      "TikTok sellers testing visual lash styles",
      "Distributors needing clear style and packaging options",
    ],
    customizableContent: [
      "Lash style, curl, length and density",
      "Tray layout, lash card and label information",
      "Logo placement and box packaging",
      "Bundle set direction and collection naming",
      "Sample plan before bulk order",
    ],
    notes: {
      sample:
        "Samples are used to check lash look, band comfort, tray presentation and packaging direction before bulk production.",
      packaging:
        "Private label packaging can include lash cards, trays, labels and boxes depending on artwork, material and order details.",
      leadTime:
        "Sample and bulk production timing depends on lash style, packaging and order details. A more accurate schedule can be given after the brief is confirmed.",
      shipping:
        "International shipping can be coordinated based on carton details, destination and preferred shipping method.",
    },
    process: [
      "Share your lash reference, target market and quantity range.",
      "Confirm suitable style directions and packaging options.",
      "Prepare samples for review when needed.",
      "Finalize artwork, packing details and order requirements.",
      "Move into production and shipment coordination after confirmation.",
    ],
    checklistTitle: "Buyer checklist",
    checklistItems: [
      "Confirm your target sales channel before selecting lash styles.",
      "Prepare reference photos or product links if you have a preferred look.",
      "Decide whether you need simple logo packaging or a full private label box.",
      "Share the estimated quantity range so sampling and quotation can be realistic.",
    ],
    faqs: [
      {
        question: "Can I start with only a lash reference photo?",
        answer:
          "Yes. A reference photo is a useful starting point. We can discuss the lash effect, curl, length, density and packaging direction, then confirm details through samples.",
      },
      {
        question: "Can my brand name be added to the lash packaging?",
        answer:
          "Yes. Logo placement and private label packaging can be discussed for lash cards, labels, boxes and bundle sets depending on packaging and order details.",
      },
      {
        question: "What is the MOQ for OEM false eyelashes?",
        answer:
          "MOQ is confirmed for the actual style and packaging. Confirm per-style quantities, mixed-style options and packaging requirements against your brief before quotation.",
      },
      {
        question: "Can I confirm samples before bulk production?",
        answer:
          "Yes. Samples are recommended before bulk production so your team can check the product look, comfort and presentation.",
      },
      {
        question: "Do you ship OEM lash orders internationally?",
        answer:
          "Yes. International shipping can be coordinated based on destination, carton details and the shipping method you prefer.",
      },
    ],
  },
  {
    slug: "private-label-lashes",
    title: "Private Label Lashes for Beauty Brands and Sellers",
    description:
      "Private label lashes for beauty brands, lash studios, wholesalers, TikTok sellers and Amazon sellers. Explore custom lash styles, logo packaging, samples and shipping details.",
    eyebrow: "Private label lashes",
    h1: "Private label lashes made for brand launches and repeat supply.",
    directAnswer:
      "Private label lashes allow your brand to sell false eyelashes under your own name with selected lash styles, logo packaging and product presentation. For B2B buyers, the practical first step is to choose a style range, confirm packaging needs and review samples before ordering.",
    image: "/lash-packaging-pink.jpg",
    imageAlt: "Private label false eyelash packaging with lash tray and pink beauty styling",
    suitableCustomers: [
      "New beauty brands building a lash collection",
      "Lash studios selling retail products",
      "Influencer and TikTok product launches",
      "Amazon sellers planning branded listings",
      "Wholesalers adding private label ranges",
    ],
    customizableContent: [
      "Natural, wispy, manga, cat eye or volume lash styles",
      "Logo, lash card, box and label design",
      "Tray color and product presentation",
      "Style names, barcode area and set configuration",
      "Sample packaging before bulk order",
    ],
    notes: {
      sample:
        "Samples help confirm the lash effect, packaging finish and overall retail look before you commit to a larger order.",
      packaging:
        "Packaging options can be simple or more customized, depending on your brand artwork, material preference and order details.",
      leadTime:
        "Sample and bulk lead time depends on packaging and order details. Custom box work usually needs more time than stock-style sampling.",
      shipping:
        "Shipping can be arranged internationally after carton size, order quantity and destination are confirmed.",
    },
    process: [
      "Choose your target customer and style direction.",
      "Select packaging level, logo placement and label needs.",
      "Review lash and packaging samples if needed.",
      "Confirm order quantity, artwork and packing details.",
      "Coordinate production, checking and shipping.",
    ],
    checklistTitle: "Packaging questions to prepare",
    checklistItems: [
      "Do you need logo label, tray card, box packaging or a full bundle set?",
      "Will the product be sold online, in salons, through distributors or in retail stores?",
      "Do you already have logo files and brand colors ready for packaging discussion?",
      "Should the first order prioritize speed, low trial quantity or a more premium package?",
    ],
    faqs: [
      {
        question: "Can I add my own logo to private label lashes?",
        answer:
          "Yes. Your logo can be used on suitable packaging elements such as lash cards, labels or boxes depending on artwork and order details.",
      },
      {
        question: "Can I use different lash styles in one private label line?",
        answer:
          "Yes. Many brands start with a small range of natural, cat eye, wispy or volume styles so customers have clear choices.",
      },
      {
        question: "What is the MOQ for private label lashes?",
        answer:
          "MOQ is confirmed for the actual style and packaging. Confirm per-style quantities, mixed-style options and packaging requirements against your brief before quotation.",
      },
      {
        question: "Can I order private label samples first?",
        answer:
          "Yes. Samples are recommended to check the lash style, band, tray and packaging presentation before bulk production.",
      },
      {
        question: "Can you help with packaging text and layout?",
        answer:
          "We can discuss packaging layout needs such as logo position, style name, label area and basic product information. Final artwork should be confirmed before production.",
      },
    ],
  },
  {
    slug: "self-adhesive-cluster-lashes-oem",
    title: "Self-Adhesive Cluster Lashes OEM for Beauty Brands",
    description:
      "Self-adhesive cluster lashes OEM support for global beauty brands and online sellers. Discuss style mix, tray layout, private label packaging, samples and shipping.",
    eyebrow: "Self-adhesive clusters",
    h1: "Self-adhesive cluster lashes OEM for easy-use lash lines.",
    directAnswer:
      "Self-adhesive cluster lashes are designed for customers who want a quicker lash application without a separate glue step. For OEM projects, buyers usually need to confirm cluster length mix, curl, tray layout, packaging and sample performance before planning bulk production.",
    image: "/lash-flatlay-vertical.jpg",
    imageAlt: "Self-adhesive cluster lashes styled for OEM beauty product presentation",
    suitableCustomers: [
      "TikTok sellers promoting easy lash application",
      "Beauty brands testing DIY lash systems",
      "Amazon sellers building beginner-friendly lash kits",
      "Lash studios offering take-home products",
      "Wholesalers looking for trend-led lash items",
    ],
    customizableContent: [
      "Cluster length mix and curl direction",
      "Natural, cat eye, manga or volume mapping",
      "Tray layout and application guide card",
      "Private label box and logo placement",
      "Bundle set with applicator or care card",
    ],
    notes: {
      sample:
        "Samples help you check application feel, lash mapping, tray clarity and packaging presentation before bulk order.",
      packaging:
        "Packaging can be developed around beginner-friendly instructions, style naming and retail display needs depending on order details.",
      leadTime:
        "Sample preparation and bulk lead time depend on the selected style, adhesive format, packaging and order details.",
      shipping:
        "International shipping can be discussed after order size, packing method and destination are confirmed.",
    },
    process: [
      "Share the customer use case and desired lash effect.",
      "Confirm cluster map, length mix and packaging needs.",
      "Review samples for wear feel and presentation.",
      "Finalize artwork and bulk order details.",
      "Coordinate production, checking and shipment.",
    ],
    checklistTitle: "What to confirm before sampling",
    checklistItems: [
      "Confirm whether the style should be natural, fox-eye, cat-eye or glam.",
      "Decide if the tray needs mixed lengths or a single lash mapping direction.",
      "Prepare your preferred packaging level before asking for custom samples.",
      "Allow enough time to test application feel and product presentation before bulk order.",
    ],
    faqs: [
      {
        question: "Can I customize self-adhesive cluster lash styles?",
        answer:
          "Yes. Length mix, curl, density and mapping can be discussed based on your target customer and sales channel.",
      },
      {
        question: "Are self-adhesive cluster lashes suitable for TikTok sellers?",
        answer:
          "They can be a good fit because the application concept is easy to explain in short videos. The final style should match your audience and price range.",
      },
      {
        question: "Can I add private label packaging?",
        answer:
          "Yes. Logo, tray, label, box and instruction card options can be discussed depending on packaging and order details.",
      },
      {
        question: "How long do samples take?",
        answer:
          "Sample preparation depends on lash style, adhesive format, packaging request and order details.",
      },
      {
        question: "Can these be sold as a bundle set?",
        answer:
          "Yes. Bundle sets can include lash clusters, applicator, care card or other suitable items depending on your product plan.",
      },
    ],
  },
  {
    slug: "pre-glued-lashes-oem",
    title: "Pre-Glued Lashes OEM for Private Label Beauty Lines",
    description:
      "Pre-glued lashes OEM support for beauty brands, importers and online sellers. Discuss lash style, adhesive finish, private label packaging, samples, lead time and shipping.",
    eyebrow: "Pre-glued lashes",
    h1: "Pre-glued lashes OEM for simple, ready-to-wear beauty products.",
    directAnswer:
      "Pre-glued lashes are false eyelashes prepared with an adhesive strip so customers can apply them more easily. For OEM buyers, the main decisions are lash shape, band feel, adhesive finish, packaging instructions and sample confirmation before bulk production.",
    image: "/lash-tray-pink.jpg",
    imageAlt: "Pre-glued false eyelash tray for private label OEM product line",
    suitableCustomers: [
      "Retail beauty brands creating beginner-friendly lashes",
      "Importers looking for easy-use lash products",
      "Amazon sellers planning convenience-focused listings",
      "TikTok sellers demonstrating quick application",
      "Wholesalers supplying salons and beauty stores",
    ],
    customizableContent: [
      "Lash shape, length and curl",
      "Band style and adhesive presentation",
      "Instruction card and product label",
      "Private label box and logo position",
      "Single-style or multi-style set planning",
    ],
    notes: {
      sample:
        "Samples help confirm lash appearance, adhesive feel, application experience and packaging clarity.",
      packaging:
        "Packaging should explain the easy-use selling point clearly, with logo, instructions and product information arranged in a buyer-friendly way.",
      leadTime:
        "Sample and bulk timing depends on lash style, adhesive format, packaging and order details.",
      shipping:
        "Shipping can be coordinated internationally after carton details and destination are confirmed.",
    },
    process: [
      "Confirm the target channel and customer skill level.",
      "Select lash style, band direction and packaging format.",
      "Review samples for application and presentation.",
      "Finalize artwork, quantity and packing requirements.",
      "Arrange production and international shipping details.",
    ],
    checklistTitle: "Sample order preparation guide",
    checklistItems: [
      "Confirm whether your buyer expects quick application or a stronger makeup effect.",
      "Check if instructions or a simple use guide should be included in the packaging.",
      "Review the lash band, adhesive feel and final appearance before bulk approval.",
      "Share destination and quantity early so shipping and packing can be discussed.",
    ],
    faqs: [
      {
        question: "Can I customize pre-glued lash styles?",
        answer:
          "Yes. Lash shape, length, curl, band direction and packaging can be discussed based on your market needs.",
      },
      {
        question: "Can I add my own brand packaging?",
        answer:
          "Yes. Private label packaging can include logo, box, label and instruction card depending on artwork and order details.",
      },
      {
        question: "Can I order samples before bulk production?",
        answer:
          "Yes. Samples are useful for checking application feel, lash look and packaging communication.",
      },
      {
        question: "What is the MOQ for pre-glued lashes OEM?",
        answer:
          "MOQ is confirmed for the actual style and packaging. Confirm per-style quantities, mixed-style options and packaging requirements against your brief before quotation.",
      },
      {
        question: "Do you ship pre-glued lash orders internationally?",
        answer:
          "Yes. International shipping can be coordinated according to destination, carton details and preferred shipping method.",
      },
    ],
  },
  {
    slug: "cluster-lashes-wholesale",
    title: "Cluster Lashes Wholesale for B2B Buyers",
    description:
      "Cluster lashes wholesale support for beauty brands, lash studios, distributors and online sellers. Explore custom trays, private label packaging, samples and shipping details.",
    eyebrow: "Wholesale cluster lashes",
    h1: "Cluster lashes wholesale support for B2B lash buyers.",
    directAnswer:
      "Cluster lashes wholesale is suitable for buyers who need flexible DIY lash styles, salon-inspired lash mapping and repeatable product ranges. For B2B supply, the important details are style mix, tray layout, packaging level, quantity and shipping plan.",
    image: "/lash-workspace.jpg",
    imageAlt: "Cluster lashes arranged for wholesale B2B lash product planning",
    suitableCustomers: [
      "Lash studios selling retail cluster lash trays",
      "Wholesalers supplying beauty stores",
      "Distributors building local lash ranges",
      "Amazon sellers offering DIY lash extension sets",
      "Beauty brands testing cluster lash collections",
    ],
    customizableContent: [
      "Cluster size, length mix and curl",
      "Mixed trays and mapping styles",
      "Natural, cat eye, wispy or volume effects",
      "Tray label, box and logo packaging",
      "Bundle sets with applicator or care card",
    ],
    notes: {
      sample:
        "Samples help buyers check cluster softness, mapping effect, tray arrangement and packaging direction.",
      packaging:
        "Packaging can be kept simple for wholesale or developed as private label retail packaging depending on order details.",
      leadTime:
        "Lead time depends on style selection, packaging level, quantity and order details.",
      shipping:
        "International shipping can be discussed based on carton volume, destination and preferred method.",
    },
    process: [
      "Confirm wholesale channel and target customer.",
      "Select cluster maps, lengths and tray formats.",
      "Review samples or existing style references.",
      "Confirm packaging and quantity details.",
      "Coordinate production, packing and shipping.",
    ],
    checklistTitle: "Best use cases for this lash type",
    checklistItems: [
      "Use cluster lashes for DIY extension sets, salon take-home products and online selling.",
      "Plan a small but clear range rather than too many similar styles at launch.",
      "Compare natural, cat-eye and volume mapping through samples before final selection.",
      "Confirm tray labels and packaging names so wholesale buyers can reorder clearly.",
    ],
    faqs: [
      {
        question: "Can cluster lashes be sold wholesale and private label?",
        answer:
          "Yes. Cluster lashes can be discussed as wholesale stock-style products or private label packaging projects depending on your order needs.",
      },
      {
        question: "Can I mix different lengths in one tray?",
        answer:
          "Yes. Mixed-length trays can be discussed for natural, cat eye or volume mapping.",
      },
      {
        question: "What buyers are cluster lashes suitable for?",
        answer:
          "They are suitable for lash studios, online sellers, beauty brands, wholesalers and distributors serving DIY lash customers.",
      },
      {
        question: "Can I request samples first?",
        answer:
          "Yes. Samples are recommended when comparing cluster feel, curl, length mix and tray presentation.",
      },
      {
        question: "How is wholesale shipping handled?",
        answer:
          "Shipping is coordinated according to carton details, destination and your preferred method after order information is confirmed.",
      },
    ],
  },
  {
    slug: "custom-lash-packaging",
    title: "Custom Lash Packaging for Private Label Lashes",
    description:
      "Custom lash packaging support for private label false eyelashes, including lash cards, trays, labels, boxes, bundle sets, samples and international shipping details.",
    eyebrow: "Custom packaging",
    h1: "Custom lash packaging for private label lash brands.",
    directAnswer:
      "Custom lash packaging helps your false eyelash product look consistent with your brand, whether you need a lash card, tray, label, box or bundle set. The best packaging plan depends on your artwork, budget, order quantity and launch channel.",
    image: "/lash-packaging-pink.jpg",
    imageAlt: "Custom lash packaging with private label box and false eyelash tray",
    suitableCustomers: [
      "Beauty brands building a premium retail look",
      "Amazon sellers preparing clear product presentation",
      "TikTok sellers launching branded lash kits",
      "Importers needing market-specific labels",
      "Lash studios creating own-brand products",
    ],
    customizableContent: [
      "Lash card and tray presentation",
      "Box type, logo and artwork placement",
      "Style name, label and barcode area",
      "Bundle set structure and insert card",
      "Packaging samples before bulk order",
    ],
    notes: {
      sample:
        "Packaging samples help confirm material feel, print direction, logo placement and product presentation before bulk order.",
      packaging:
        "Options depend on artwork, box structure, material, print method and order details. Simple packaging is usually easier to start with.",
      leadTime:
        "Packaging sample and bulk lead time depends on packaging complexity and order details.",
      shipping:
        "Shipping should consider carton size and packaging volume, especially for box-heavy bundle sets.",
    },
    process: [
      "Share your logo, color direction and packaging reference.",
      "Confirm lash product type and required packaging parts.",
      "Review artwork layout and sample needs.",
      "Approve packaging details before bulk production.",
      "Coordinate packing and shipping after production.",
    ],
    checklistTitle: "Packaging questions to prepare",
    checklistItems: [
      "Prepare logo files, preferred colors and any reference packaging before quoting.",
      "Decide if you need lash card only, box only or a complete branded set.",
      "Confirm required product information, style name and barcode area early.",
      "Keep the first packaging brief practical if you are testing a new market.",
    ],
    faqs: [
      {
        question: "Can I make custom lash boxes?",
        answer:
          "Yes. Custom lash boxes can be discussed depending on artwork, material, box style and order details.",
      },
      {
        question: "Do I need finished artwork before asking for packaging?",
        answer:
          "Finished artwork is helpful, but you can start with logo files, color direction and reference packaging so the basic plan can be discussed.",
      },
      {
        question: "Can packaging samples be prepared?",
        answer:
          "Yes. Packaging samples can be discussed before bulk production, especially for custom boxes or bundle sets.",
      },
      {
        question: "What is the MOQ for custom lash packaging?",
        answer:
          "MOQ depends on packaging type, print method and order details. Simple label or card options may differ from fully custom box projects.",
      },
      {
        question: "Can you support packaging for bundle sets?",
        answer:
          "Yes. Bundle packaging can be discussed for lash kits, multi-style packs, applicator sets and launch collections.",
      },
    ],
  },
  {
    slug: "lash-sample-kit",
    title: "Lash Sample Kit for OEM and Private Label Buyers",
    description:
      "Lash sample kit support for OEM and private label buyers who want to review lash styles, packaging direction, samples, lead time and shipping before bulk orders.",
    eyebrow: "Sample support",
    h1: "Lash sample kit support before bulk production.",
    directAnswer:
      "A lash sample kit helps B2B buyers compare lash styles, curl, length, density, band feel and packaging ideas before placing a bulk order. It is a practical step for brands, sellers and wholesalers who want to reduce product selection risk.",
    image: "/lash-negative-space.jpg",
    imageAlt: "False eyelash sample kit flatlay for OEM and private label review",
    suitableCustomers: [
      "New beauty brands comparing lash styles",
      "TikTok sellers testing camera-friendly looks",
      "Amazon sellers preparing product photos",
      "Wholesalers selecting a repeat product range",
      "Lash studios choosing retail products",
    ],
    customizableContent: [
      "Mixed lash styles for comparison",
      "Natural, wispy, cat eye and volume directions",
      "Sample tray and packaging references",
      "Private label packaging discussion",
      "Bundle set ideas for launch planning",
    ],
    notes: {
      sample:
        "Sample kit contents depend on your target product type and available style options. Custom packaging samples may need separate confirmation.",
      packaging:
        "The sample stage can include packaging references or simple mockup direction depending on artwork and order details.",
      leadTime:
        "Sample preparation time depends on selected styles, packaging request and order details.",
      shipping:
        "Sample shipping can be arranged internationally based on destination and preferred courier or shipping method.",
    },
    process: [
      "Share your target customer and sales channel.",
      "Select sample style directions to compare.",
      "Confirm whether packaging samples are needed.",
      "Review samples and adjust the final product plan.",
      "Move to bulk quotation after sample feedback.",
    ],
    checklistTitle: "Sample order preparation guide",
    checklistItems: [
      "Choose a few different lash effects instead of several nearly identical styles.",
      "Confirm whether samples are for internal review, product photos or buyer presentation.",
      "Tell us if packaging samples are needed together with lash samples.",
      "Prepare feedback on lash look, tray presentation and packaging after sample review.",
    ],
    faqs: [
      {
        question: "Can I order a lash sample kit before deciding the final style?",
        answer:
          "Yes. A sample kit is useful when you want to compare several lash effects before choosing a product line.",
      },
      {
        question: "Can packaging be included in a sample kit?",
        answer:
          "Packaging references or custom packaging samples can be discussed depending on your artwork, packaging and order details.",
      },
      {
        question: "How long does sample preparation take?",
        answer:
          "Sample preparation depends on the lash styles, packaging request and order details.",
      },
      {
        question: "Can samples be shipped internationally?",
        answer:
          "Yes. Sample shipping can be coordinated based on your destination and preferred shipping method.",
      },
      {
        question: "Can I use samples for product photos?",
        answer:
          "Samples can help with product evaluation and early photo planning, but final listing photos should use confirmed production details whenever possible.",
      },
    ],
  },
  {
    slug: "tiktok-hot-selling-lashes",
    title: "TikTok Hot-Selling Lashes for OEM Beauty Sellers",
    description:
      "TikTok hot-selling lash style support for B2B sellers and beauty brands. Explore camera-friendly lash styles, private label packaging, samples and shipping details.",
    eyebrow: "TikTok lash styles",
    h1: "TikTok hot-selling lashes for content-led beauty sellers.",
    directAnswer:
      "TikTok hot-selling lashes are usually styles that show a clear before-and-after effect on camera, such as wispy manga lashes, wet look spikes, cat eye lifts and fluffy volume styles. For OEM sellers, the style should be paired with packaging, samples and pricing that fit the target audience.",
    image: "/lash-flatlay-vertical.jpg",
    imageAlt: "TikTok hot-selling wispy false eyelashes for OEM beauty sellers",
    suitableCustomers: [
      "TikTok Shop sellers testing visual products",
      "Influencer brands launching lash collections",
      "Beauty brands looking for trend-led styles",
      "Amazon sellers using short video content",
      "Wholesalers following social commerce demand",
    ],
    customizableContent: [
      "Wispy manga, cat eye, wet look and volume styles",
      "Lash length map and curl direction",
      "Trend-focused packaging and style naming",
      "Bundle sets for campaign launches",
      "Samples for content and product review",
    ],
    notes: {
      sample:
        "Samples help you test the camera effect, lash comfort and packaging presentation before larger order planning.",
      packaging:
        "Packaging should be clear, brandable and easy to understand in product photos or short-form video content.",
      leadTime:
        "Lead time depends on selected styles, packaging and order details. Trend-led launches should allow time for sample review.",
      shipping:
        "International shipping can be discussed according to campaign timing, destination and order size.",
    },
    process: [
      "Share your target audience and content style.",
      "Select lash looks with strong visual differences.",
      "Review samples for camera effect and comfort.",
      "Confirm packaging and bundle set direction.",
      "Plan bulk order and shipping around launch timing.",
    ],
    checklistTitle: "Common mistakes for new lash brands",
    checklistItems: [
      "Do not choose a style only because it looks dramatic in one photo.",
      "Check whether the lash effect matches your audience, pricing and content style.",
      "Plan packaging that is clear in product photos and short videos.",
      "Order samples before committing to trend-led bulk production.",
    ],
    faqs: [
      {
        question: "What lash styles work well for TikTok sellers?",
        answer:
          "Wispy manga lashes, cat eye styles, wet look spikes, natural clusters and fluffy volume styles are often considered because they show clearly on camera.",
      },
      {
        question: "Can TikTok lash styles be private label?",
        answer:
          "Yes. Logo, style name, tray, card and box packaging can be discussed depending on packaging and order details.",
      },
      {
        question: "Can I order samples for content testing?",
        answer:
          "Yes. Samples are useful for checking the camera effect, application feel and packaging before a larger launch.",
      },
      {
        question: "Can you guarantee a lash style will sell on TikTok?",
        answer:
          "No. We can suggest practical style directions, but sales depend on your audience, pricing, content, offer and market conditions.",
      },
      {
        question: "Can these styles be made into bundle sets?",
        answer:
          "Yes. Bundle sets can be discussed for multi-style packs, launch kits or lash plus accessory sets depending on order details.",
      },
    ],
  },
  {
    slug: "lash-vendor-for-beauty-brands",
    title: "Lash Vendor for Beauty Brands and Private Label Launches",
    description:
      "Lash vendor support for beauty brands needing private label false eyelashes, custom lash styles, packaging, samples, lead time planning and international shipping.",
    eyebrow: "Lash vendor",
    h1: "Lash vendor support for beauty brands building private label ranges.",
    directAnswer:
      "A lash vendor for beauty brands should help with style selection, sampling, packaging communication, order details and shipping coordination. For private label launches, the goal is to make the lash range clear, brandable and realistic to produce.",
    image: "/lash-workspace.jpg",
    imageAlt: "Lash vendor workspace for beauty brand private label false eyelash planning",
    suitableCustomers: [
      "Beauty brands building a first lash line",
      "Established brands expanding into false eyelashes",
      "Lash studios creating own-brand retail products",
      "Influencer brands preparing a launch kit",
      "Distributors sourcing branded lash ranges",
    ],
    customizableContent: [
      "Core lash collection and hero styles",
      "Brand logo, box, label and tray details",
      "Sample set for internal review",
      "Bundle set and launch kit planning",
      "Packing and shipping requirements",
    ],
    notes: {
      sample:
        "Samples help the brand team review style direction, comfort, packaging finish and product presentation before order confirmation.",
      packaging:
        "Packaging can be aligned with your brand look, but final options depend on artwork, material, structure and order details.",
      leadTime:
        "Lead time depends on sample needs, packaging complexity, quantity and order details.",
      shipping:
        "International shipping can be coordinated after the order packing details and destination are clear.",
    },
    process: [
      "Share your brand positioning and target customer.",
      "Select lash styles and packaging level.",
      "Confirm samples and artwork details.",
      "Finalize quotation, packing and order requirements.",
      "Coordinate production checks and shipping.",
    ],
    checklistTitle: "Buyer checklist",
    checklistItems: [
      "Clarify your brand position before choosing natural, glam or trend-led styles.",
      "Start with a focused collection that is easy for customers to understand.",
      "Prepare logo, packaging references and target quantity for accurate discussion.",
      "Use samples to confirm the final lash look before approving production.",
    ],
    faqs: [
      {
        question: "Can a beauty brand start with a small lash collection?",
        answer:
          "Yes. Many brands begin with a focused range of a few styles, then expand after market feedback.",
      },
      {
        question: "Can you help choose styles for my brand audience?",
        answer:
          "Yes. We can discuss suitable style directions based on your customer profile, channel and price range.",
      },
      {
        question: "Can packaging match my brand identity?",
        answer:
          "Private label packaging can be discussed around your logo, colors, box style and label needs depending on packaging and order details.",
      },
      {
        question: "Should I approve samples before ordering?",
        answer:
          "Yes. Sample review is recommended before bulk production, especially for new brand launches.",
      },
      {
        question: "Do you support international beauty brands?",
        answer:
          "Yes. We can communicate order details and shipping arrangements for global beauty buyers based on the actual project.",
      },
    ],
  },
  {
    slug: "false-eyelash-oem-faq",
    title: "False Eyelash OEM FAQ for Global Beauty Buyers",
    description:
      "False eyelash OEM FAQ for beauty brands, wholesalers, importers, TikTok sellers and Amazon sellers. Learn about customization, MOQ, samples, packaging, lead time and shipping.",
    eyebrow: "OEM FAQ",
    h1: "False eyelash OEM FAQ for global beauty buyers.",
    directAnswer:
      "False eyelash OEM buyers usually ask about customization, logo packaging, MOQ, samples, production timing and shipping before starting. The safest approach is to confirm product style, packaging and order details first, then review samples before bulk production.",
    image: "/lash-negative-space.jpg",
    imageAlt: "False eyelash OEM FAQ product flatlay for global beauty buyers",
    suitableCustomers: [
      "Beauty brands new to false eyelash OEM",
      "Wholesalers comparing private label options",
      "TikTok sellers testing trend-led lash products",
      "Amazon sellers preparing branded listings",
      "Lash studios planning own-brand retail items",
    ],
    customizableContent: [
      "Lash style, length, curl and density",
      "Logo, label, tray and box packaging",
      "Sample kit and style comparison",
      "Bundle set and launch kit planning",
      "Shipping and packing details",
    ],
    notes: {
      sample:
        "Samples are recommended before bulk production because they help confirm style, comfort, packaging and presentation.",
      packaging:
        "Private label packaging can be discussed at different levels, from simple label and card work to custom boxes and bundle sets.",
      leadTime:
        "Sample and bulk lead time depend on packaging and order details. A more accurate timeline can be discussed after the brief is clear.",
      shipping:
        "International shipping depends on destination, carton size, order quantity and selected shipping method.",
    },
    process: [
      "Clarify product type, target market and quantity.",
      "Discuss customization and packaging requirements.",
      "Prepare or select samples for review.",
      "Confirm artwork, order details and lead time.",
      "Arrange production, checking and shipping.",
    ],
    checklistTitle: "What to confirm before requesting a quote",
    checklistItems: [
      "Product type and model or reference style.",
      "Private label packaging level and logo requirements.",
      "Estimated quantity, sample needs and expected launch timing.",
      "Destination country and any packing or shipping preferences.",
    ],
    faqs: [
      {
        question: "Can I customize the lash style?",
        answer:
          "Yes. Lash shape, curl, length, density and overall style direction can be discussed based on your reference and target customer.",
      },
      {
        question: "Can I add my own logo and packaging?",
        answer:
          "Yes. Logo and private label packaging can be discussed for lash cards, trays, labels, boxes and bundle sets depending on packaging and order details.",
      },
      {
        question: "What is the MOQ for false eyelash OEM?",
        answer:
          "MOQ is confirmed for the actual style and packaging. Confirm per-style quantities, mixed-style options and packaging requirements against your brief before quotation.",
      },
      {
        question: "How long does sample preparation take?",
        answer:
          "Sample preparation depends on the style, packaging request and order details. Custom packaging samples usually need more time than simple style samples.",
      },
      {
        question: "Do you ship internationally?",
        answer:
          "Yes. Shipping can be coordinated internationally based on destination, carton details and preferred shipping method.",
      },
    ],
  },
];

export const geoTopicSlugs = geoTopics.map((topic) => topic.slug);

export function getGeoTopic(slug: string) {
  return geoTopics.find((topic) => topic.slug === slug);
}
