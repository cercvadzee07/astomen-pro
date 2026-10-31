export interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  inStock: boolean;
  isSale?: boolean;
  image: string;
  images?: string[];
  categorySlug: string;
  categoryName: string;
}

export const ALL_PRODUCTS: Product[] = [
  // ==========================================
  // 1. ტექნიკა (teqnika)
  // ==========================================
  {
    id: "3d-kalami",
    name: "3d კალამი",
    price: 99,
    oldPrice: 135, // <-- დაამატე ეს ხაზი
    isSale: true, // <-- დაამატე ეს ხაზი
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2026/02/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-02.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2026/02/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-02.jpg",
      "https://astroman.ge/wp-content/uploads/2026/02/2abf9b23-c184-47c7-bf4b-6dd868fc5461.jpeg",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "3d-kalami-shavi",
    name: "3d კალამი (შავი)",
    price: 99,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2026/02/Screenshot-2026-02-10-at-16.30.17.png",
    images: [
      "https://astroman.ge/wp-content/uploads/2026/02/Screenshot-2026-02-10-at-16.30.17.png",
      "https://astroman.ge/wp-content/uploads/2026/02/Gemini_Generated_Image_koox9ckoox9ckoox.png",
      "https://astroman.ge/wp-content/uploads/2026/02/Gemini_Generated_Image_iqxb27iqxb27iqxb.png",
      "https://astroman.ge/wp-content/uploads/2026/02/ChatGPT-Image-Jan-29-2026-02_22_50-PM.png",
      "https://astroman.ge/wp-content/uploads/2026/02/4FAABCB2A5FE0368C6C58D068B33C97C.jpg",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "alien-projector",
    name: "Alien Projector",
    price: 99,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2026/05/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-02.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2026/05/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-02.jpg",
      "https://astroman.ge/wp-content/uploads/2026/05/q1s80e.jpg",
      "https://astroman.ge/wp-content/uploads/2026/05/ccq0n4.jpg",
      "https://astroman.ge/wp-content/uploads/2026/05/wmqjkd.jpg",
      "https://astroman.ge/wp-content/uploads/2026/05/opxe7s.jpg",
      "https://astroman.ge/wp-content/uploads/2026/05/fyhmqz.jpg",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "astronomical-telescope",
    name: "Astronomical Telescope",
    price: 145,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2026/02/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-02-1.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2026/02/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-02-1.jpg",
      "https://astroman.ge/wp-content/uploads/2026/02/Generated-Image-February-25-2026-3_06PM.jpg.jpeg",
      "https://astroman.ge/wp-content/uploads/2026/02/Generated-Image-February-25-2026-3_05PM.jpg.jpeg",
      "https://astroman.ge/wp-content/uploads/2026/02/Generated-Image-February-25-2026-3_03PM.jpg.jpeg",
      "https://astroman.ge/wp-content/uploads/2026/02/Generated-Image-February-25-2026-3_02PM.jpg.jpeg",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "binocular-8x21",
    name: "Binocular 8×21",
    price: 59,
    inStock: true,
    image: "https://astroman.ge/wp-content/uploads/2025/12/Document.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2025/12/Document.jpg",
      "https://astroman.ge/wp-content/uploads/2025/12/H16120ca6f69a4ad18f37b98344cb28c1d.avif",
      "https://astroman.ge/wp-content/uploads/2025/12/H374fedd2711d42bf976532512cefcb39k.avif",
      "https://astroman.ge/wp-content/uploads/2025/12/ChatGPT-Image-Dec-29-2025-11_37_07-AM.png",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "bresser-automatik-80-400-goto",
    name: "Bresser Automatik 80/400 GoTo",
    price: 2590,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2026/06/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-02.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2026/06/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-02.jpg",
      "https://astroman.ge/wp-content/uploads/2026/06/02-1.jpg",
      "https://astroman.ge/wp-content/uploads/2026/06/03-1.jpg",
      "https://astroman.ge/wp-content/uploads/2026/06/04-1.jpg",
      "https://astroman.ge/wp-content/uploads/2026/06/05-1.jpg",
      "https://astroman.ge/wp-content/uploads/2026/06/06-1.jpg",
      "https://astroman.ge/wp-content/uploads/2026/06/07-1.jpg",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "bresser-junior-76-300",
    name: "Bresser Junior 76/300 Compact ტელესკოპი SMART",
    price: 399,
    inStock: true,
    image: "https://astroman.ge/wp-content/uploads/2024/11/222.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2024/11/222.jpg",
      "https://astroman.ge/wp-content/uploads/2024/11/8843205_B_1.jpg",
      "https://astroman.ge/wp-content/uploads/2024/11/8843205_B_2.jpg",
      "https://astroman.ge/wp-content/uploads/2024/11/8843205_M_3.jpg",
      "https://astroman.ge/wp-content/uploads/2024/11/8843205_M_4.jpg",
      "https://astroman.ge/wp-content/uploads/2024/11/8843205_M_5.jpg",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "national-geographic-refractor-telescope-70-900-ng",
    name: "Bresser Junior Telescope 50/360 with tent ტელესკოპი",
    price: 494,
    inStock: true,
    image: "https://astroman.ge/wp-content/uploads/2022/09/22122.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/22122.jpg",
      "https://astroman.ge/wp-content/uploads/2022/09/8050620WXH000_M_02_v0823.jpg",
      "https://astroman.ge/wp-content/uploads/2022/09/8050620WXH000_M_03_v0823.jpg",
      "https://astroman.ge/wp-content/uploads/2022/09/8050620WXH000_M_05_v0823.jpg",
      "https://astroman.ge/wp-content/uploads/2022/09/8850620WXH000_B_1_v0823.jpg",
      "https://astroman.ge/wp-content/uploads/2022/09/8850620WXH000_P_1_v0124.jpg",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "bresser-sirius-70-900-az",
    name: "Bresser Sirius 70/900 AZ ლინზური ტელესკოპი",
    price: 1129,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2026/06/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-02-1.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2026/06/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-02-1.jpg",
      "https://astroman.ge/wp-content/uploads/2026/06/02.jpg",
      "https://astroman.ge/wp-content/uploads/2026/06/03.jpg",
      "https://astroman.ge/wp-content/uploads/2026/06/04.jpg",
      "https://astroman.ge/wp-content/uploads/2026/06/05.jpg",
      "https://astroman.ge/wp-content/uploads/2026/06/06.jpg",
      "https://astroman.ge/wp-content/uploads/2026/06/07.jpg",
      "https://astroman.ge/wp-content/uploads/2026/06/08.jpg",
      "https://astroman.ge/wp-content/uploads/2026/06/09.jpg",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "bresser-venus-76-700-az-telescope",
    name: "Bresser Venus 76/700 AZ Telescope",
    price: 1230,
    inStock: true,
    image: "https://astroman.ge/wp-content/uploads/2025/12/2221.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2025/12/2221.jpg",
      "https://astroman.ge/wp-content/uploads/2025/12/4541009_A4_800x800.jpg",
      "https://astroman.ge/wp-content/uploads/2025/12/4541009_A5_800x800.jpg",
      "https://astroman.ge/wp-content/uploads/2025/12/4541009_A10_800x800.jpg",
      "https://astroman.ge/wp-content/uploads/2025/12/4541009_D2_800x800.jpg",
      "https://astroman.ge/wp-content/uploads/2025/12/4541009_M_2019_800x800.jpg",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "astromaster-114eq-telescope",
    name: "Celestron AstroMaster 114EQ Telescope",
    price: 1599,
    inStock: true,
    image: "https://astroman.ge/wp-content/uploads/2026/05/11.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2026/05/11.jpg",
      "https://astroman.ge/wp-content/uploads/2026/05/683eb473bbb89-1748939891.png",
      "https://astroman.ge/wp-content/uploads/2026/05/683eb473dee65-1748939891.png",
      "https://astroman.ge/wp-content/uploads/2026/05/683eb4740e54f-1748939892.png",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "celestron-astromaster-70az",
    name: "Celestron AstroMaster 70AZ",
    price: 1258,
    inStock: true,
    image: "https://astroman.ge/wp-content/uploads/2024/11/23312.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2024/11/23312.jpg",
      "https://astroman.ge/wp-content/uploads/2024/11/51A2C8kPkPL._AC_SL1000_.jpg",
      "https://astroman.ge/wp-content/uploads/2024/11/22064_AstroMaster_70AZ_5_570x380@2x.jpg",
      "https://astroman.ge/wp-content/uploads/2024/11/22064_AstroMaster_70AZ_6_570x380@2x.jpg",
      "https://astroman.ge/wp-content/uploads/2024/11/1519038408_844451.jpg",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "nexstar-6slt-computerized-telescope",
    name: "Celestron NexStar 6SLT Computerized Telescope",
    price: 5869,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2026/05/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-02-1.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2026/05/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-02-1.jpg",
      "https://astroman.ge/wp-content/uploads/2026/05/683ef648a39cf-1748956744-1.png",
      "https://astroman.ge/wp-content/uploads/2026/05/683ef648cc44f-1748956744-1.jpg",
      "https://astroman.ge/wp-content/uploads/2026/05/683ef64a641ad-1748956746.png",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "celestron-nexstar-90slt-computerized-telescope",
    name: "Celestron NexStar 90SLT Computerized Telescope",
    price: 2760,
    inStock: true,
    image: "https://astroman.ge/wp-content/uploads/2024/11/1222.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2024/11/1222.jpg",
      "https://astroman.ge/wp-content/uploads/2024/11/51wtlxUmJ5L._AC_UF10001000_QL80_.jpg",
      "https://astroman.ge/wp-content/uploads/2024/11/61-3f5c-rML._AC_SX679_.jpg",
      "https://astroman.ge/wp-content/uploads/2024/11/61lKGKB9osL._AC_SL1000_.jpg",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "celestron-starsense-explorer-lt-70az",
    name: "Celestron StarSense Explorer LT 70AZ ლინზური ტელესკოპი",
    price: 1250,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2026/09/celestron-starsense-explorer-lt-70az-telescope-01.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2026/09/celestron-starsense-explorer-lt-70az-telescope-01.jpg",
      "https://astroman.ge/wp-content/uploads/2026/09/celestron-starsense-explorer-lt-70az-telescope-02.jpg",
      "https://astroman.ge/wp-content/uploads/2026/09/celestron-starsense-explorer-lt-70az-telescope-03.jpg",
      "https://astroman.ge/wp-content/uploads/2026/09/celestron-starsense-explorer-lt-70az-telescope-04.jpg",
      "https://astroman.ge/wp-content/uploads/2026/09/celestron-starsense-explorer-lt-70az-smartphone-05.jpg",
      "https://astroman.ge/wp-content/uploads/2026/09/celestron-starsense-explorer-lt-70az-app-06.jpg",
      "https://astroman.ge/wp-content/uploads/2026/09/celestron-starsense-explorer-lt-70az-phone-dock-08.jpg",
      "https://astroman.ge/wp-content/uploads/2026/09/celestron-starsense-explorer-lt-70az-eyepiece-09.jpg",
      "https://astroman.ge/wp-content/uploads/2026/09/celestron-starsense-explorer-lt-70az-accessory-tray-10.jpg",
      "https://astroman.ge/wp-content/uploads/2026/09/celestron-starsense-explorer-lt-70az-assembly-1.jpg",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "celestron-travel-scope-70-dx",
    name: "Celestron Travel Scope 70 DX",
    price: 780,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2024/11/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-02.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2024/11/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-02.jpg",
      "https://astroman.ge/wp-content/uploads/2024/11/TRAVEL-SCOPE-70-DX-PORTABLE-TELESCOPE-WITH-SMARTPHONE-ADAPTER.png",
      "https://astroman.ge/wp-content/uploads/2024/11/TRAVEL-SCOPE-70-DX-PORTABLE-TELESCOPE-WITH-SMARTPHONE-ADAPTER-1.png",
      "https://astroman.ge/wp-content/uploads/2024/11/TRAVEL-SCOPE-70-DX-PORTABLE-TELESCOPE-WITH-SMARTPHONE-ADAPTER-2.png",
      "https://astroman.ge/wp-content/uploads/2024/11/TRAVEL-SCOPE-70-DX-PORTABLE-TELESCOPE-WITH-SMARTPHONE-ADAPTER-3.png",
      "https://astroman.ge/wp-content/uploads/2024/11/TRAVEL-SCOPE-70-DX-PORTABLE-TELESCOPE-WITH-SMARTPHONE-ADAPTER-4.png",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "flow-speaker",
    name: "Flow Speaker მაგნიტური დინამიკი",
    price: 439,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2026/01/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-02.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2026/01/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-02.jpg",
      "https://astroman.ge/wp-content/uploads/2026/01/Generated-Image-January-27-2026-3_33PM.jpeg",
      "https://astroman.ge/wp-content/uploads/2026/01/Generated-Image-January-27-2026-3_26PM.jpeg",
      "https://astroman.ge/wp-content/uploads/2026/01/Generated-Image-January-27-2026-3_23PM.jpeg",
      "https://astroman.ge/wp-content/uploads/2026/01/H22aa53f67c034ad59dee691dd72b62c1Z.jpg",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "foreseen-10x50-binokli",
    name: "Foreseen 10X50 ბინოკლი",
    price: 154,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/%E1%83%91%E1%83%98%E1%83%9C%E1%83%9D%E1%83%99%E1%83%9A%E1%83%98-2.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/%E1%83%91%E1%83%98%E1%83%9C%E1%83%9D%E1%83%99%E1%83%9A%E1%83%98-2.jpg",
      "https://astroman.ge/wp-content/uploads/2022/09/He4635afd57b1469084280d2ab10441261.jpeg",
      "https://astroman.ge/wp-content/uploads/2022/09/Hd788a95855de4ca4bdc60511db92be84F.jpeg",
      "https://astroman.ge/wp-content/uploads/2022/09/Hc520d26f23774a7e890b3fbfbeed4b21B.jpeg",
      "https://astroman.ge/wp-content/uploads/2022/09/Ha2813a6912514a309eeed1143b4aec90D.jpeg",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "foreseen-400-70-telescope",
    name: "Foreseen 400/70 Telescope",
    price: 355,
    oldPrice: 549,
    isSale: true,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/foreseen-tescope.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/foreseen-tescope.webp",
      "https://astroman.ge/wp-content/uploads/2022/09/myIldBrWa1b02CMYtWyRNahHPWppLR.jpeg",
      "https://astroman.ge/wp-content/uploads/2022/09/5UPzzjnuVOPPEplWPXGcKQYEkDVZOE.jpeg",
      "https://astroman.ge/wp-content/uploads/2022/09/0xujklAA70zRRGCd6wLLZPUjO8VIbL.jpeg",
      "https://astroman.ge/wp-content/uploads/2022/09/teleskopii.webp",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "infinity-bluetooth-speaker",
    name: "Infinity Bluetooth Speaker",
    price: 140,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2024/02/Infinity-Bluetooth-Speaker.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2024/02/Infinity-Bluetooth-Speaker.webp",
      "https://astroman.ge/wp-content/uploads/2024/02/H0606e0e7b28a42a08a607e63966083b0O.webp",
      "https://astroman.ge/wp-content/uploads/2024/02/H6257cb5fb35d42c4999653dca4841be2m.webp",
      "https://astroman.ge/wp-content/uploads/2024/02/H17334e1c722343d881496839dabe16d0F.webp",
      "https://astroman.ge/wp-content/uploads/2024/02/H89812fd604634537bffc1864d871a206I.webp",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "celestron-landscout",
    name: "Landscout 8x40mm Porro Binocular",
    price: 499,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/Screenshot-2026-01-27-at-14.09.38.png",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/Screenshot-2026-01-27-at-14.09.38.png",
      "https://astroman.ge/wp-content/uploads/2022/09/Screenshot-2026-01-27-at-14.09.43.png",
      "https://astroman.ge/wp-content/uploads/2022/09/Screenshot-2026-01-27-at-14.09.48.png",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "national-geographic-10x25-binoculars",
    name: "National Geographic 10×25 Binoculars",
    price: 209,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/%E1%83%91%E1%83%98%E1%83%9C%E1%83%9D%E1%83%99%E1%83%9A%E1%83%98%E1%83%98-7.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/%E1%83%91%E1%83%98%E1%83%9C%E1%83%9D%E1%83%99%E1%83%9A%E1%83%98%E1%83%98-7.webp",
      "https://astroman.ge/wp-content/uploads/2022/09/%E1%83%91%E1%83%98%E1%83%9C%E1%83%9D%E1%83%99%E1%83%9A%E1%83%982-1.webp",
      "https://astroman.ge/wp-content/uploads/2022/09/%E1%83%91%E1%83%98%E1%83%9C%E1%83%9D%E1%83%99%E1%83%9A%E1%83%98%E1%83%90.webp",
      "https://astroman.ge/wp-content/uploads/2022/09/%E1%83%91%E1%83%98%E1%83%9C%E1%83%9D%E1%83%99%E1%83%9A%E1%83%98-1.webp",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "national-geographic-300x-1200x-microscope",
    name: "National Geographic 300x-1200x Microscope",
    price: 279,
    inStock: true,
    image: "https://astroman.ge/wp-content/uploads/2024/11/782.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2024/11/782.jpg",
      "https://astroman.ge/wp-content/uploads/2024/11/9118002_D_2.jpg",
      "https://astroman.ge/wp-content/uploads/2024/11/9118002_M1_v0824_Freisteller.jpg",
      "https://astroman.ge/wp-content/uploads/2024/11/Screenshot-2024-11-27-at-14.02.59.png",
      "https://astroman.ge/wp-content/uploads/2024/11/Screenshot-2024-11-27-at-14.03.08.png",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "national-geographic-50-600",
    name: "National Geographic 45/600 AZ Telescope",
    price: 519,
    oldPrice: 633,
    isSale: true,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2023/11/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-02.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2023/11/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-02.jpg",
      "https://astroman.ge/wp-content/uploads/2023/11/9101001_A_1_v1116.jpg",
      "https://astroman.ge/wp-content/uploads/2023/11/9101001_A_2_v1116.jpg",
      "https://astroman.ge/wp-content/uploads/2023/11/9101001_A_3_v1116.jpg",
      "https://astroman.ge/wp-content/uploads/2023/11/Screenshot-2024-11-27-at-13.22.34.png",
      "https://astroman.ge/wp-content/uploads/2024/11/Screenshot-2024-11-27-at-13.23.35.png",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "national-geographic-telescope-2",
    name: "National Geographic 50/600 AZ Telescope",
    price: 639,
    inStock: true,
    image: "https://astroman.ge/wp-content/uploads/2022/12/8878721.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/12/8878721.jpg",
      "https://astroman.ge/wp-content/uploads/2022/12/9101000_M.jpg",
      "https://astroman.ge/wp-content/uploads/2022/12/9101000_M_lores.jpg",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "national-geographic-refractor-telescope",
    name: "National Geographic 60/700 ტელესკოპი AZ",
    price: 949,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2025/11/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-02.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2025/11/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-02.jpg",
      "https://astroman.ge/wp-content/uploads/2025/11/9011100_M_02_v0124.webp",
      "https://astroman.ge/wp-content/uploads/2025/11/9011100_M_04_v0124.webp",
      "https://astroman.ge/wp-content/uploads/2025/11/9011100_M_05_v0124.webp",
      "https://astroman.ge/wp-content/uploads/2025/11/9011100_M_06_v0124.webp",
      "https://astroman.ge/wp-content/uploads/2025/11/9011100_M_07_v0124.webp",
      "https://astroman.ge/wp-content/uploads/2025/11/9011100_M_08_v0124.webp",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "sabavshvo-teleskopi",
    name: "National Geographic 76/350 Compact Telescope",
    price: 455,
    inStock: true,
    image: "https://astroman.ge/wp-content/uploads/2022/12/3442.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/12/3442.jpg",
      "https://astroman.ge/wp-content/uploads/2022/12/9015000_M_1_22621.jpg",
      "https://astroman.ge/wp-content/uploads/2022/12/9015000_M_2_22621.jpg",
      "https://astroman.ge/wp-content/uploads/2022/12/9015000_M_3_22621.jpg",
      "https://astroman.ge/wp-content/uploads/2022/12/9015000_M_4_22621.jpg",
      "https://astroman.ge/wp-content/uploads/2022/12/9015000_M_5_22621.jpg",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "national-geographic-76-350-telescope",
    name: "National Geographic 76/350 Telescope + Sunfilter + Smartphone Adapter",
    price: 844,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/National-Geographic.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/National-Geographic.webp",
      "https://astroman.ge/wp-content/uploads/2022/09/Screenshot-2023-11-17-at-15.44.24.webp",
      "https://astroman.ge/wp-content/uploads/2022/09/0130600_national-geographic-76350-telescope-sunfilter-smartphone-adapter_550.webp",
      "https://astroman.ge/wp-content/uploads/2022/09/0130601_national-geographic-76350-telescope-sunfilter-smartphone-adapter_550.webp",
      "https://astroman.ge/wp-content/uploads/2022/09/0130599_national-geographic-76350-telescope-sunfilter-smartphone-adapter_550-1.webp",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "national-geographic-76700",
    name: "National Geographic 76/700 Reflector ტელესკოპი",
    price: 813,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2024/08/0144181_national-geographic-114900-reflector-telescope-az_550.jpeg",
    images: [
      "https://astroman.ge/wp-content/uploads/2024/08/0144181_national-geographic-114900-reflector-telescope-az_550.jpeg",
      "https://astroman.ge/wp-content/uploads/2024/08/0144182_national-geographic-114900-reflector-telescope-az_550.jpeg",
      "https://astroman.ge/wp-content/uploads/2024/08/0144183_national-geographic-114900-reflector-telescope-az_550.jpeg",
      "https://astroman.ge/wp-content/uploads/2024/08/9011300_A2.jpg",
      "https://astroman.ge/wp-content/uploads/2024/08/9011300_A3.jpg",
      "https://astroman.ge/wp-content/uploads/2024/08/9011300_B.jpg",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "national-geographic-8x42-mm-binoculars",
    name: "National Geographic 8X42 mm Binoculars",
    price: 269,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/%E1%83%91%E1%83%98%E1%83%9C%E1%83%9D%E1%83%99%E1%83%9A%E1%83%9842.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/%E1%83%91%E1%83%98%E1%83%9C%E1%83%9D%E1%83%99%E1%83%9A%E1%83%9842.webp",
      "https://astroman.ge/wp-content/uploads/2022/09/7P7lOwu0pmEUIVwKlESebHJHfglUry.jpeg",
      "https://astroman.ge/wp-content/uploads/2022/09/national-geographic-9076200-binoculars-1.webp",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "teleskopi-avtomaturi",
    name: "National Geographic Automatic Telescope 70 mm",
    price: 1599,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/National-Geographic-Automatic.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/National-Geographic-Automatic.webp",
      "https://astroman.ge/wp-content/uploads/2022/09/Screenshot-2023-11-17-at-15.54.59.webp",
      "https://astroman.ge/wp-content/uploads/2022/09/Screenshot-2023-11-17-at-15.55.06.webp",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "national-geographic-refractor-telescope-90-900-eq3",
    name: "National Geographic Refractor Telescope 90/900 EQ3",
    price: 1229,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/12/%E1%83%A2%E1%83%94%E1%83%9A%E1%83%94%E1%83%A1%E1%83%99%E1%83%9D%E1%83%9E%E1%83%98-90.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/12/%E1%83%A2%E1%83%94%E1%83%9A%E1%83%94%E1%83%A1%E1%83%99%E1%83%9D%E1%83%9E%E1%83%98-90.webp",
      "https://astroman.ge/wp-content/uploads/2022/12/0130587_national-geographic-refractor-telescope-90900-eq3_550.png",
      "https://astroman.ge/wp-content/uploads/2022/12/0130586_national-geographic-refractor-telescope-90900-eq3_550.png",
      "https://astroman.ge/wp-content/uploads/2022/12/0130585_national-geographic-refractor-telescope-90900-eq3_550.png",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "national-geographic-telescope-microscope-set",
    name: "National Geographic Telescope-Microscope Set",
    price: 690,
    inStock: true,
    image: "https://astroman.ge/wp-content/uploads/2024/11/9982.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2024/11/9982.jpg",
      "https://astroman.ge/wp-content/uploads/2024/11/9118400_D_1.jpg",
      "https://astroman.ge/wp-content/uploads/2024/11/9118400_A_2_v0918.jpg",
      "https://astroman.ge/wp-content/uploads/2024/11/9118400_M_2_v0918.jpg",
      "https://astroman.ge/wp-content/uploads/2024/11/9118400_M_6_v0918.jpg",
      "https://astroman.ge/wp-content/uploads/2024/11/9118400_M_7_v0918.jpg",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "nebula-bluetooth-projector",
    name: "Nebula Bluetooth პროექტორი",
    price: 113,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/11/Nebula-Bluetooth-Projector-1.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/11/Nebula-Bluetooth-Projector-1.webp",
      "https://astroman.ge/wp-content/uploads/2022/11/Hca0fb3fcff1d428d93e19b67ab7c9fca1.webp",
      "https://astroman.ge/wp-content/uploads/2022/11/Hae48613c6b5e4f3aa267daef89300ffay.webp",
      "https://astroman.ge/wp-content/uploads/2022/11/Haaa97023d24641f0a6e2a5655cb10efan.webp",
      "https://astroman.ge/wp-content/uploads/2022/11/H9be21e4658a94f8fa47343237fceead6i.webp",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "premium-projector",
    name: "Premium Projector",
    price: 299,
    inStock: true,
    image: "https://astroman.ge/wp-content/uploads/2026/05/9dqtol.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2026/05/9dqtol.jpg",
      "https://astroman.ge/wp-content/uploads/2026/05/8ad9in.jpg",
      "https://astroman.ge/wp-content/uploads/2026/05/3q77yp.jpg",
      "https://astroman.ge/wp-content/uploads/2026/05/ztmavt.jpg",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "projector-speakercosmos",
    name: "პროექტორი “კოსმოსი”",
    price: 96,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2024/02/-%E1%83%99%E1%83%9D%E1%83%A1%E1%83%9B%E1%83%9D%E1%83%A1%E1%83%981-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2024/02/-%E1%83%99%E1%83%9D%E1%83%A1%E1%83%9B%E1%83%9D%E1%83%A1%E1%83%981-jpg.webp",
      "https://astroman.ge/wp-content/uploads/2024/02/H5dc89efa218047d3bbf8ea88514e63c6g.webp",
      "https://astroman.ge/wp-content/uploads/2024/02/Hbe680f48ecdf4f00bc5323ff4e2b49d8p.webp",
      "https://astroman.ge/wp-content/uploads/2024/02/Hd60f2060fa98474a86f9abe8f4319038Z.webp",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "black-universe",
    name: "პროექტორი Black Universe",
    price: 99,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2025/12/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-02.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2025/12/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-02.jpg",
      "https://astroman.ge/wp-content/uploads/2025/12/Generated-Image-December-09-2025-6_16PM.jpeg",
      "https://astroman.ge/wp-content/uploads/2025/12/Generated-Image-December-09-2025-6_36PM.jpeg",
      "https://astroman.ge/wp-content/uploads/2025/12/H12d9e24fc1ba4663a9d1c0d4f2ab2f8ak.jpg",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "proeqtori-planetebi",
    name: "პროექტორი Universe",
    price: 164,
    inStock: true,
    image: "https://astroman.ge/wp-content/uploads/2023/11/-1-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2023/11/-1-jpg.webp",
      "https://astroman.ge/wp-content/uploads/2023/11/H0b4b63d3272046f58debd7b91a9aa518E.jpg_720x720q50.webp",
      "https://astroman.ge/wp-content/uploads/2023/11/H3e086ab02a3242169278a8dd9484a8a26.webp",
      "https://astroman.ge/wp-content/uploads/2023/11/H6d25cfd0aede4175baebef63f25f9feft.webp",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "proeqtori-dedamiwa-mtvare",
    name: "პროექტორი დედამიწა/მთვარე",
    price: 59,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%93%E1%83%94%E1%83%93%E1%83%90%E1%83%9B%E1%83%98%E1%83%AC%E1%83%90-%E1%83%9B%E1%83%97%E1%83%95%E1%83%90%E1%83%A0%E1%83%94-%E1%83%A8%E1%83%90%E1%83%95%E1%83%98-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%93%E1%83%94%E1%83%93%E1%83%90%E1%83%9B%E1%83%98%E1%83%AC%E1%83%90-%E1%83%9B%E1%83%97%E1%83%95%E1%83%90%E1%83%A0%E1%83%94-%E1%83%A8%E1%83%90%E1%83%95%E1%83%98-jpg.webp",
      "https://astroman.ge/wp-content/uploads/2022/09/5R5ehMXg0so48iKFwJbuy3586rNlvT.webp",
      "https://astroman.ge/wp-content/uploads/2022/09/9VpNVfSgHKJqkmTrIoYuQGmmPnThL3.jpeg",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "projector-earthmoon",
    name: "პროექტორი დედამიწა/მთვარე (კომპაქტური)",
    price: 38,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2024/08/222122-02-scaled.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2024/08/222122-02-scaled.jpg",
      "https://astroman.ge/wp-content/uploads/2024/08/d1.jpg",
      "https://astroman.ge/wp-content/uploads/2024/08/d4.jpg",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "projector-speaker",
    name: "პროექტორი დინამიკი",
    price: 83,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2024/10/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-0222.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2024/10/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-0222.jpg",
      "https://astroman.ge/wp-content/uploads/2024/10/E1.jpg",
      "https://astroman.ge/wp-content/uploads/2024/10/E2.jpg",
      "https://astroman.ge/wp-content/uploads/2024/10/E3.jpg",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "retro-bluetooth-speakerer",
    name: "Retro Bluetooth Speaker",
    price: 119,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2023/07/Retro-Bluetooth-Speaker-1.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2023/07/Retro-Bluetooth-Speaker-1.webp",
      "https://astroman.ge/wp-content/uploads/2023/07/%E1%83%91%E1%83%9A%E1%83%A3%E1%83%97%E1%83%A3%E1%83%96-%E1%83%A1%E1%83%9E%E1%83%98%E1%83%99%E1%83%94%E1%83%A0%E1%83%98.webp",
      "https://astroman.ge/wp-content/uploads/2023/07/%E1%83%A1%E1%83%9E%E1%83%98%E1%83%99%E1%83%94%E1%83%A0%E1%83%98.webp",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "robot-bluetooth-speaker",
    name: "Robot Bluetooth Speaker",
    price: 79,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/%E1%83%A1%E1%83%9E%E1%83%98%E1%83%99%E1%83%94%E1%83%A0%E1%83%98-%E1%83%A0%E1%83%9D%E1%83%91%E1%83%9D%E1%83%A2%E1%83%98.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/%E1%83%A1%E1%83%9E%E1%83%98%E1%83%99%E1%83%94%E1%83%A0%E1%83%98-%E1%83%A0%E1%83%9D%E1%83%91%E1%83%9D%E1%83%A2%E1%83%98.webp",
      "https://astroman.ge/wp-content/uploads/2022/09/389150616_max.webp",
      "https://astroman.ge/wp-content/uploads/2022/09/389150626_max.webp",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "starsense-explorer-dx-102-refractor",
    name: "StarSense Explorer DX 102 Refractor",
    price: 2678,
    inStock: true,
    image: "https://astroman.ge/wp-content/uploads/2026/05/112.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2026/05/112.jpg",
      "https://astroman.ge/wp-content/uploads/2026/05/69b27ebbb31df-1773305531.jpg",
      "https://astroman.ge/wp-content/uploads/2026/05/69b27ebbd4b99-1773305531.jpg",
      "https://astroman.ge/wp-content/uploads/2026/05/69b27ebc12530-1773305532.jpg",
      "https://astroman.ge/wp-content/uploads/2026/05/69b27ebc3258e-1773305532.jpg",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "starsense-explorerr-telescope",
    name: "StarSense Explorer DX 130 Newtonian",
    price: 2999,
    inStock: true,
    image: "https://astroman.ge/wp-content/uploads/2026/05/2233.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2026/05/2233.jpg",
      "https://astroman.ge/wp-content/uploads/2026/05/69b2803815b20-1773305912.jpg",
      "https://astroman.ge/wp-content/uploads/2026/05/69b280386353d-1773305912.jpg",
      "https://astroman.ge/wp-content/uploads/2026/05/69b280387a766-1773305912.jpg",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "nexstar-4se-computerized-telescope",
    name: "StarSense Explorer DX 6",
    price: 3998,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2025/09/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-02.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2025/09/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-02.jpg",
      "https://astroman.ge/wp-content/uploads/2025/09/Screenshot-2025-09-19-at-12.55.18.png",
      "https://astroman.ge/wp-content/uploads/2025/09/Screenshot-2025-09-19-at-12.55.38.png",
      "https://astroman.ge/wp-content/uploads/2025/09/Screenshot-2025-09-19-at-12.55.31.png",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "tesla-electric-speaker",
    name: "Tesla Electric Speaker",
    price: 132,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2026/10/musikaluri-teslas-koci.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2026/10/musikaluri-teslas-koci.jpg",
      "https://astroman.ge/wp-content/uploads/2026/10/teslas-koca-1.jpg",
      "https://astroman.ge/wp-content/uploads/2026/10/teslas-koca-2.jpg",
      "https://astroman.ge/wp-content/uploads/2026/10/teslas-koca-3.jpg",
      "https://astroman.ge/wp-content/uploads/2026/10/teslas-koca-4.jpg",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "travel-scope-50mm",
    name: "Travel Scope 50mm",
    price: 659,
    inStock: true,
    image: "https://astroman.ge/wp-content/uploads/2025/12/Document-1.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2025/12/Document-1.jpg",
      "https://astroman.ge/wp-content/uploads/2025/12/50234210386_TRAVEL_SCOPE-50_2.webp",
      "https://astroman.ge/wp-content/uploads/2025/12/50234210386_TRAVEL_SCOPE-50_3.webp",
      "https://astroman.ge/wp-content/uploads/2025/12/50234210386_TRAVEL_SCOPE-50_4.webp",
      "https://astroman.ge/wp-content/uploads/2025/12/50234210386_TRAVEL_SCOPE-50_5.webp",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "ufo-nebula-projector",
    name: "UFO Nebula Projector",
    price: 183,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2024/04/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-02.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2024/04/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-02.webp",
      "https://astroman.ge/wp-content/uploads/2024/04/Screenshot-2024-04-12-at-21.23.26.webp",
      "https://astroman.ge/wp-content/uploads/2024/04/Hb7761464ccba4a34b09732c94c3c10e7k.avif",
      "https://astroman.ge/wp-content/uploads/2024/04/H1f7720c739ca40fb81e57fac1851df5aP.avif",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "usb-astronaut",
    name: "USB Astronaut",
    price: 25,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/USB-Astronaut-4.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/USB-Astronaut-4.webp",
      "https://astroman.ge/wp-content/uploads/2022/09/Hec410c9094434822ba5b045e077a9fd8p.webp",
      "https://astroman.ge/wp-content/uploads/2022/09/9J6DrMnRTPahwzh6vl3EnsIvzrqjvd.jpg",
      "https://astroman.ge/wp-content/uploads/2022/09/9Nb6P6KnvaZFbhCH0DItiAbYEVpdzl.jpg",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "usb-galaqtikis-proeqtori",
    name: "USB გალაქტიკის პროექტორი",
    price: 59,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2026/10/usb-galaqtikis-proeqtori.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2026/10/usb-galaqtikis-proeqtori.jpg",
      "https://astroman.ge/wp-content/uploads/2026/10/usb-proeqtori-1.png",
      "https://astroman.ge/wp-content/uploads/2026/10/usb-proeqtori-2.png",
      "https://astroman.ge/wp-content/uploads/2026/10/usb-proeqtori-3.png",
      "https://astroman.ge/wp-content/uploads/2026/10/usb-proeqtori-4.png",
      "https://astroman.ge/wp-content/uploads/2026/10/usb-proeqtori-5.jpg",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "visionking-telescope-70mm",
    name: "Visionking Telescope 70mm",
    price: 238,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/Visionking-Telescope.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/Visionking-Telescope.webp",
      "https://astroman.ge/wp-content/uploads/2022/09/teleskopia.webp",
      "https://astroman.ge/wp-content/uploads/2022/09/vgZ4L3eW20Q8MEYkgmqdwENm2iYGKM.jpeg",
      "https://astroman.ge/wp-content/uploads/2022/09/PlN39AQLQUCSZ27Gw4mkErYRC44Mb2.jpeg",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "vixen-nature-eye-50-360-az1-telescope",
    name: "Vixen Nature Eye 50/360 AZ1 Telescope",
    price: 299,
    inStock: true,
    image: "https://astroman.ge/wp-content/uploads/2024/11/778273.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2024/11/778273.jpg",
      "https://astroman.ge/wp-content/uploads/2024/11/X002410_01.jpg",
      "https://astroman.ge/wp-content/uploads/2024/11/X002410_02.jpg",
      "https://astroman.ge/wp-content/uploads/2024/11/X002410_03.jpg",
      "https://astroman.ge/wp-content/uploads/2024/11/X002410_04.jpg",
      "https://astroman.ge/wp-content/uploads/2024/11/X002410_06.jpg",
      "https://astroman.ge/wp-content/uploads/2024/11/X002410_07.jpg",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "vr-glasses",
    name: "VR Glasses ყურსასმენებით",
    price: 129,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2023/04/VR-%E1%83%A1%E1%83%90%E1%83%97%E1%83%95%E1%83%90%E1%83%9A%E1%83%94-%E1%83%A7%E1%83%A3%E1%83%A0%E1%83%A1%E1%83%90%E1%83%A1%E1%83%9B%E1%83%94%E1%83%9C%E1%83%94%E1%83%91%E1%83%98%E1%83%97-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2023/04/VR-%E1%83%A1%E1%83%90%E1%83%97%E1%83%95%E1%83%90%E1%83%9A%E1%83%94-%E1%83%A7%E1%83%A3%E1%83%A0%E1%83%A1%E1%83%90%E1%83%A1%E1%83%9B%E1%83%94%E1%83%9C%E1%83%94%E1%83%91%E1%83%98%E1%83%97-jpg.webp",
      "https://astroman.ge/wp-content/uploads/2022/10/Haf422c511b7d47fa8db6c0f195e63e36P.jpg_960x960.webp",
      "https://astroman.ge/wp-content/uploads/2022/10/Hfde0a1c71e8a4266b5242c97b5c8820bE.jpg_960x960.webp",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "vr-satvale",
    name: "ვირტუალური რეალობის სათვალე Shinecon",
    price: 86,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2023/04/-%E1%83%A0%E1%83%94%E1%83%90%E1%83%9A%E1%83%9D%E1%83%91%E1%83%98%E1%83%A1-%E1%83%A1%E1%83%90%E1%83%97%E1%83%95%E1%83%90%E1%83%9A%E1%83%94-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2023/04/-%E1%83%A0%E1%83%94%E1%83%90%E1%83%9A%E1%83%9D%E1%83%91%E1%83%98%E1%83%A1-%E1%83%A1%E1%83%90%E1%83%97%E1%83%95%E1%83%90%E1%83%9A%E1%83%94-jpg.webp",
      "https://astroman.ge/wp-content/uploads/2023/04/H7f9dd7b793e845d8a064335899a23738s.jpg_960x960.webp",
      "https://astroman.ge/wp-content/uploads/2023/04/H515a59a17f934834b73b0128ed56d6eeL.jpg_960x960.webp",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "mini-microscope",
    name: "ხელის მიკროსკოპი",
    price: 69,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2023/10/%E1%83%AE%E1%83%94%E1%83%9A%E1%83%98%E1%83%A1-%E1%83%9B%E1%83%98%E1%83%99%E1%83%A0%E1%83%9D%E1%83%A1%E1%83%99%E1%83%9D%E1%83%9E%E1%83%98.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2023/10/%E1%83%AE%E1%83%94%E1%83%9A%E1%83%98%E1%83%A1-%E1%83%9B%E1%83%98%E1%83%99%E1%83%A0%E1%83%9D%E1%83%A1%E1%83%99%E1%83%9D%E1%83%9E%E1%83%98.webp",
      "https://astroman.ge/wp-content/uploads/2023/10/Hfe77406e4d56402ba4801619ab57bca8l.webp",
      "https://astroman.ge/wp-content/uploads/2023/10/Hb9d1e39a29ad489aa22e22a4f228fcb1p.webp",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "telescope-foreseen",
    name: "ტელესკოპი Foreseen 800/50",
    price: 967,
    inStock: true,
    image: "https://astroman.ge/wp-content/uploads/2024/08/Telescope.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2024/08/Telescope.jpg",
      "https://astroman.ge/wp-content/uploads/2024/08/j2.jpg",
      "https://astroman.ge/wp-content/uploads/2024/08/j3.jpg",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "telescope-foreseen-80mm",
    name: "ტელესკოპი Foreseen 80mm",
    price: 967,
    inStock: true,
    image: "https://astroman.ge/wp-content/uploads/2024/08/Telescope.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2024/08/Telescope.jpg",
      "https://astroman.ge/wp-content/uploads/2024/08/j2.jpg",
      "https://astroman.ge/wp-content/uploads/2024/08/j3.jpg",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "telefonis-adapteeri",
    name: "ტელეფონის ადაპტერი",
    price: 59,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/%E1%83%90%E1%83%93%E1%83%90%E1%83%9E%E1%83%A2%E1%83%94%E1%83%A0%E1%83%98.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/%E1%83%90%E1%83%93%E1%83%90%E1%83%9E%E1%83%A2%E1%83%94%E1%83%A0%E1%83%98.jpg",
      "https://astroman.ge/wp-content/uploads/2022/09/nZhNCFYGHj9cSaEnjD0u3clWv66aOD.jpg",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "teslas-plazmuri-burti",
    name: "ტესლას პლაზმური ბურთი",
    price: 68,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%9E%E1%83%9A%E1%83%90%E1%83%96%E1%83%9B%E1%83%A3%E1%83%A0%E1%83%98-%E1%83%91%E1%83%A3%E1%83%A0%E1%83%97%E1%83%98-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%9E%E1%83%9A%E1%83%90%E1%83%96%E1%83%9B%E1%83%A3%E1%83%A0%E1%83%98-%E1%83%91%E1%83%A3%E1%83%A0%E1%83%97%E1%83%98-jpg.webp",
      "https://astroman.ge/wp-content/uploads/2022/09/4-1.webp",
      "https://astroman.ge/wp-content/uploads/2022/09/6-1.png",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "teleskopi-firstscope-moon",
    name: "ტელესკოპი FirstScope Moon",
    price: 450,
    inStock: true,
    image: "https://astroman.ge/wp-content/uploads/2024/11/22.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2024/11/22.jpg",
      "https://astroman.ge/wp-content/uploads/2024/11/61Uud2m0rL._AC_SY741_.jpg",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "home-cinema-hs9500-pro",
    name: "სახლის კინოთეატრი HS9500 Pro",
    price: 289,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2024/12/hy-black-projector.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2024/12/hy-black-projector.jpg",
      "https://astroman.ge/wp-content/uploads/2024/12/71e2L8czR6L._AC_SL1500_.jpg",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "projector-stars",
    name: "ვარსკვლავების პროექტორი",
    price: 59,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/%E1%83%95%E1%83%90%E1%83%A0%E1%83%A1%E1%83%99%E1%83%95%E1%83%9A%E1%83%90%E1%83%95%E1%83%94%E1%83%91%E1%83%98%E1%83%A1-%E1%83%9E%E1%83%A0%E1%83%9D%E1%83%94%E1%83%A5%E1%83%A2%E1%83%9D%E1%83%A0%E1%83%98.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/%E1%83%95%E1%83%90%E1%83%A0%E1%83%A1%E1%83%99%E1%83%95%E1%83%9A%E1%83%90%E1%83%95%E1%83%94%E1%83%91%E1%83%98%E1%83%A1-%E1%83%9E%E1%83%A0%E1%83%9D%E1%83%94%E1%83%A5%E1%83%A2%E1%83%9D%E1%83%A0%E1%83%98.webp",
      "https://astroman.ge/wp-content/uploads/2022/09/111521758_184343533055947_7815123886414181857_n.jpeg",
      "https://astroman.ge/wp-content/uploads/2022/09/124843059_1731727230325844_7514266226575707943_n.jpg",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },
  {
    id: "astronaut-projector",
    name: "ასტრონავტის პროექტორი",
    price: 99,
    oldPrice: 111,
    isSale: true,
    inStock: true,
    image: "https://astroman.ge/wp-content/uploads/2025/12/2212.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2025/12/2212.jpg",
      "https://astroman.ge/wp-content/uploads/2025/12/Generated-Image-December-09-2025-4_54PM.jpeg",
      "https://astroman.ge/wp-content/uploads/2025/12/Generated-Image-December-09-2025-4_57PM.jpeg",
      "https://astroman.ge/wp-content/uploads/2025/12/Generated-Image-December-09-2025-6_14PM.jpeg",
    ],
    categorySlug: "teqnika",
    categoryName: "ტექნიკა",
  },

  // ==========================================
  // 2. საბავშვო სათამაშოები (sabavshvo-satamashoebi)
  // ==========================================
  {
    id: "asatskobi-pazli-dedamitsa",
    name: "ასაწყობი პაზლი (დედამიწა)",
    price: 76,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/%E1%83%93%E1%83%94%E1%83%93%E1%83%90%E1%83%9B%E1%83%98%E1%83%AC%E1%83%98%E1%83%A1-%E1%83%9E%E1%83%90%E1%83%96%E1%83%9A%E1%83%98.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/%E1%83%93%E1%83%94%E1%83%93%E1%83%90%E1%83%9B%E1%83%98%E1%83%AC%E1%83%98%E1%83%A1-%E1%83%9E%E1%83%90%E1%83%96%E1%83%9A%E1%83%98.jpg",
      "https://astroman.ge/wp-content/uploads/2022/09/bPWqGAMqRnesVHQujY9h5NsbwNRO2V.png",
      "https://astroman.ge/wp-content/uploads/2022/09/51udzw7w9ML._AC_SL1228_.webp",
    ],
    categorySlug: "sabavshvo-satamashoebi",
    categoryName: "საბავშვო სათამაშოები",
  },
  {
    id: "asatskobi-pazli-mtvare",
    name: "ასაწყობი პაზლი (მთვარე)",
    price: 76,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/%E1%83%9B%E1%83%97%E1%83%95%E1%83%90%E1%83%A0%E1%83%94-%E1%83%90%E1%83%A1%E1%83%90%E1%83%AC%E1%83%A7%E1%83%9D%E1%83%91%E1%83%98-%E1%83%9E%E1%83%90%E1%83%96%E1%83%9A%E1%83%98-4.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/%E1%83%9B%E1%83%97%E1%83%95%E1%83%90%E1%83%A0%E1%83%94-%E1%83%90%E1%83%A1%E1%83%90%E1%83%AC%E1%83%A7%E1%83%9D%E1%83%91%E1%83%98-%E1%83%9E%E1%83%90%E1%83%96%E1%83%9A%E1%83%98-4.webp",
      "https://astroman.ge/wp-content/uploads/2022/09/CDEQZ0ngfzIdy9MVcFnpgCAPcWrWbF.jpeg",
      "https://astroman.ge/wp-content/uploads/2022/09/%E1%83%9B%E1%83%97%E1%83%95%E1%83%90%E1%83%A0%E1%83%94-%E1%83%9E%E1%83%90%E1%83%96%E1%83%9A%E1%83%982.webp",
    ],
    categorySlug: "sabavshvo-satamashoebi",
    categoryName: "საბავშვო სათამაშოები",
  },
  {
    id: "distanciuri-tvitmfrinavi",
    name: "დისტანციურად მართვადი თვითმფრინავი Su27",
    price: 136,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%9B%E1%83%90%E1%83%A0%E1%83%97%E1%83%95%E1%83%90%E1%83%93%E1%83%98-%E1%83%97%E1%83%95%E1%83%98%E1%83%97%E1%83%9B%E1%83%A4%E1%83%A0%E1%83%98%E1%83%9C%E1%83%90%E1%83%95%E1%83%98-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%9B%E1%83%90%E1%83%A0%E1%83%97%E1%83%95%E1%83%90%E1%83%93%E1%83%98-%E1%83%97%E1%83%95%E1%83%98%E1%83%97%E1%83%9B%E1%83%A4%E1%83%A0%E1%83%98%E1%83%9C%E1%83%90%E1%83%95%E1%83%98-jpg.webp",
      "https://astroman.ge/wp-content/uploads/2022/09/H516aa77443d046d099f7d8fdf0b87e02o.jpeg",
    ],
    categorySlug: "sabavshvo-satamashoebi",
    categoryName: "საბავშვო სათამაშოები",
  },
  {
    id: "remote-helicopter-2",
    name: "ვერტმფრენი პულტით",
    price: 32,
    inStock: true,
    image: "https://astroman.ge/wp-content/uploads/2024/01/-1-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2024/01/-1-jpg.webp",
      "https://astroman.ge/wp-content/uploads/2024/01/Hcac53066481b4fee8ca6341a024e65de6.webp",
    ],
    categorySlug: "sabavshvo-satamashoebi",
    categoryName: "საბავშვო სათამაშოები",
  },
  {
    id: "ufo-lamp",
    name: "მფრინავი თეფში (დისტანციური მართვით)",
    price: 29,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%97%E1%83%94%E1%83%A4%E1%83%A8%E1%83%98-%E1%83%93%E1%83%98%E1%83%A1%E1%83%A2%E1%83%90%E1%83%9C%E1%83%AA%E1%83%98%E1%83%A3%E1%83%A0%E1%83%98-%E1%83%9B%E1%83%90%E1%83%A0%E1%83%97%E1%83%95%E1%83%98%E1%83%97-1-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%97%E1%83%94%E1%83%A4%E1%83%A8%E1%83%98-%E1%83%93%E1%83%98%E1%83%A1%E1%83%A2%E1%83%90%E1%83%9C%E1%83%AA%E1%83%98%E1%83%A3%E1%83%A0%E1%83%98-%E1%83%9B%E1%83%90%E1%83%A0%E1%83%97%E1%83%95%E1%83%98%E1%83%97-1-jpg.webp",
      "https://astroman.ge/wp-content/uploads/2022/09/7W5ZK73EB1xDeT9nlB3bYDITeN5ikv.jpg",
    ],
    categorySlug: "sabavshvo-satamashoebi",
    categoryName: "საბავშვო სათამაშოები",
  },
  {
    id: "mfrinavi-tefshi",
    name: "მფრინავი თეფში კოსმონავტით",
    price: 48,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2023/02/-%E1%83%97%E1%83%94%E1%83%A4%E1%83%A8%E1%83%98-%E1%83%99%E1%83%9D%E1%83%A1%E1%83%9B%E1%83%9D%E1%83%9C%E1%83%90%E1%83%95%E1%83%A2%E1%83%98%E1%83%97-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2023/02/-%E1%83%97%E1%83%94%E1%83%A4%E1%83%A8%E1%83%98-%E1%83%99%E1%83%9D%E1%83%A1%E1%83%9B%E1%83%9D%E1%83%9C%E1%83%90%E1%83%95%E1%83%A2%E1%83%98%E1%83%97-jpg.webp",
      "https://astroman.ge/wp-content/uploads/2023/02/61CQMcVpKHL._AC_SL1500_.jpg",
    ],
    categorySlug: "sabavshvo-satamashoebi",
    categoryName: "საბავშვო სათამაშოები",
  },
  {
    id: "satamasho-kapsula",
    name: "სათამაშო კაფსულა",
    price: 48,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%99%E1%83%90%E1%83%A4%E1%83%A1%E1%83%A3%E1%83%9A%E1%83%90-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%99%E1%83%90%E1%83%A4%E1%83%A1%E1%83%A3%E1%83%9A%E1%83%90-jpg.webp",
      "https://astroman.ge/wp-content/uploads/2022/09/58fe7020-78b9-4d11-96f1-0a8a56b32a16.0ad3d89ff6e722b4cdebba58bc1ae5e6.webp",
    ],
    categorySlug: "sabavshvo-satamashoebi",
    categoryName: "საბავშვო სათამაშოები",
  },
  {
    id: "mzis-sisteimis-modeli",
    name: "სათამაშო მზის სისტემა (პროექტორი)",
    price: 61,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%9B%E1%83%96%E1%83%98%E1%83%A1-%E1%83%A1%E1%83%98%E1%83%A1%E1%83%A2%E1%83%94%E1%83%9B%E1%83%90-%E1%83%9E%E1%83%A0%E1%83%9D%E1%83%94%E1%83%A5%E1%83%A2%E1%83%9D%E1%83%A0%E1%83%98-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%9B%E1%83%96%E1%83%98%E1%83%A1-%E1%83%A1%E1%83%98%E1%83%A1%E1%83%A2%E1%83%94%E1%83%9B%E1%83%90-%E1%83%9E%E1%83%A0%E1%83%9D%E1%83%94%E1%83%A5%E1%83%A2%E1%83%9D%E1%83%A0%E1%83%98-jpg.webp",
      "https://astroman.ge/wp-content/uploads/2022/09/Hc0a39747c79a4e4ea5b0ccbe412dd275q.webp",
    ],
    categorySlug: "sabavshvo-satamashoebi",
    categoryName: "საბავშვო სათამაშოები",
  },
  {
    id: "satamasho-roveri",
    name: "სათამაშო როვერი",
    price: 66,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A0%E1%83%9D%E1%83%95%E1%83%94%E1%83%A0%E1%83%98-1-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A0%E1%83%9D%E1%83%95%E1%83%94%E1%83%A0%E1%83%98-1-jpg.webp",
      "https://astroman.ge/wp-content/uploads/2022/09/MPU6pfj5ckeBFMvEp66IOjETFrtPmj.jpeg",
    ],
    categorySlug: "sabavshvo-satamashoebi",
    categoryName: "საბავშვო სათამაშოები",
  },
  {
    id: "xis-satamasho",
    name: "ხის ასაწყობი დაფა (მზის სისტემა)",
    price: 59,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/12/-%E1%83%90%E1%83%A1%E1%83%90%E1%83%AC%E1%83%A7%E1%83%9D%E1%83%91%E1%83%98-%E1%83%93%E1%83%90%E1%83%A4%E1%83%90-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/12/-%E1%83%90%E1%83%A1%E1%83%90%E1%83%AC%E1%83%A7%E1%83%9D%E1%83%91%E1%83%98-%E1%83%93%E1%83%90%E1%83%A4%E1%83%90-jpg.webp",
      "https://astroman.ge/wp-content/uploads/2022/12/Hefc4619362d34d7c9030b1f6c4994859f.webp",
    ],
    categorySlug: "sabavshvo-satamashoebi",
    categoryName: "საბავშვო სათამაშოები",
  },
  {
    id: "xis-satamashoebi",
    name: "ხის პლანეტები",
    price: 31,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/11/-%E1%83%9E%E1%83%9A%E1%83%90%E1%83%9C%E1%83%94%E1%83%A2%E1%83%94%E1%83%91%E1%83%981-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/11/-%E1%83%9E%E1%83%9A%E1%83%90%E1%83%9C%E1%83%94%E1%83%A2%E1%83%94%E1%83%91%E1%83%981-jpg.webp",
      "https://astroman.ge/wp-content/uploads/2022/11/Main-03.jpg",
    ],
    categorySlug: "sabavshvo-satamashoebi",
    categoryName: "საბავშვო სათამაშოები",
  },
  {
    id: "balishi-jupiter",
    name: "რბილი სათამაშო კოსმონავტი",
    price: 65,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/O1CN01tdFGn31Zs5QZiUGad_4227803249.jpg_400x400.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/O1CN01tdFGn31Zs5QZiUGad_4227803249.jpg_400x400.jpg",
      "https://astroman.ge/wp-content/uploads/2022/09/Screenshot-2024-12-21-at-16.47.00.png",
    ],
    categorySlug: "sabavshvo-satamashoebi",
    categoryName: "საბავშვო სათამაშოები",
  },
  {
    id: "space-shuttle",
    name: "სფეის შატლის მოდელი",
    price: 65,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A8%E1%83%90%E1%83%A2%E1%83%9A%E1%83%98%E1%83%A1-%E1%83%9B%E1%83%9D%E1%83%93%E1%83%94%E1%83%9A%E1%83%98-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A8%E1%83%90%E1%83%A2%E1%83%9A%E1%83%98%E1%83%A1-%E1%83%9B%E1%83%9D%E1%83%93%E1%83%94%E1%83%9A%E1%83%98-jpg.webp",
    ],
    categorySlug: "sabavshvo-satamashoebi",
    categoryName: "საბავშვო სათამაშოები",
  },
  {
    id: "eleqtro-mannkana",
    name: "ელექტრო მანქანა Mercedes Benz",
    price: 977,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2024/09/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-02.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2024/09/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-02.jpg",
      "https://astroman.ge/wp-content/uploads/2024/09/56296252afcd450fe0a764a44fff52e4.jpg",
    ],
    categorySlug: "sabavshvo-satamashoebi",
    categoryName: "საბავშვო სათამაშოები",
  },
  {
    id: "solar-space-set-6-in-one",
    name: "Solar Space Set (6 in one)",
    price: 69,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/11/Solar-Space-Set.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/11/Solar-Space-Set.webp",
      "https://astroman.ge/wp-content/uploads/2022/11/305509050_5308959869230780_8458707555821693506_n.jpg",
    ],
    categorySlug: "sabavshvo-satamashoebi",
    categoryName: "საბავშვო სათამაშოები",
  },
  {
    id: "bushtebis-nakrebi",
    name: "ბუშტების ნაკრები",
    price: 31,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%9C%E1%83%90%E1%83%99%E1%83%A0%E1%83%94%E1%83%91%E1%83%98-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%9C%E1%83%90%E1%83%99%E1%83%A0%E1%83%94%E1%83%91%E1%83%98-jpg.webp",
    ],
    categorySlug: "sabavshvo-satamashoebi",
    categoryName: "საბავშვო სათამაშოები",
  },
  {
    id: "bushtebis-nakrebi2",
    name: "სადღესასწაულო ბუშტების ნაკრები",
    price: 31,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%91%E1%83%A3%E1%83%A8%E1%83%A2%E1%83%94%E1%83%91%E1%83%98%E1%83%A1-%E1%83%9C%E1%83%90%E1%83%99%E1%83%A0%E1%83%94%E1%83%91%E1%83%98-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%91%E1%83%A3%E1%83%A8%E1%83%A2%E1%83%94%E1%83%91%E1%83%98%E1%83%A1-%E1%83%9C%E1%83%90%E1%83%99%E1%83%A0%E1%83%94%E1%83%91%E1%83%98-jpg.webp",
    ],
    categorySlug: "sabavshvo-satamashoebi",
    categoryName: "საბავშვო სათამაშოები",
  },

  // ==========================================
  // 3. აქსესუარები (aqsesuarebi)
  // ==========================================
  {
    id: "zurgchanta-30",
    name: "ბაღის ჩანთა",
    price: 97,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2023/07/-30-%E1%83%A1%E1%83%9B-%E1%83%9A%E1%83%A3%E1%83%A0%E1%83%AF%E1%83%98-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2023/07/-30-%E1%83%A1%E1%83%9B-%E1%83%9A%E1%83%A3%E1%83%A0%E1%83%AF%E1%83%98-jpg.webp",
      "https://astroman.ge/wp-content/uploads/2023/07/O1CN01yiP2SS1p9gzGwnMNv_2211406985318.jpeg",
    ],
    categorySlug: "aqsesuarebi",
    categoryName: "აქსესუარები",
  },
  {
    id: "bloknoti",
    name: "ბლოკნოტი",
    price: 38,
    inStock: true,
    image: "https://astroman.ge/wp-content/uploads/2022/09/-2-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/-2-jpg.webp",
      "https://astroman.ge/wp-content/uploads/2022/09/2.png",
    ],
    categorySlug: "aqsesuarebi",
    categoryName: "აქსესუარები",
  },
  {
    id: "breloki-astronavti",
    name: "ბრელოკი ასტრონავტი",
    price: 15,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%90%E1%83%A1%E1%83%A2%E1%83%A0%E1%83%9D%E1%83%9C%E1%83%90%E1%83%95%E1%83%A2%E1%83%98-1-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%90%E1%83%A1%E1%83%A2%E1%83%A0%E1%83%9D%E1%83%9C%E1%83%90%E1%83%95%E1%83%A2%E1%83%98-1-jpg.webp",
      "https://astroman.ge/wp-content/uploads/2022/09/XT4XueL0HJEW3rdyp6NUjGRH07mgKH.webp",
    ],
    categorySlug: "aqsesuarebi",
    categoryName: "აქსესუარები",
  },
  {
    id: "breloki-kosmonavti-lurji",
    name: "ბრელოკი ასტრონავტი (ლურჯი)",
    price: 19,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%90%E1%83%A1%E1%83%A2%E1%83%A0%E1%83%9D%E1%83%9C%E1%83%90%E1%83%95%E1%83%A2%E1%83%98-%E1%83%9A%E1%83%A3%E1%83%A0%E1%83%AF%E1%83%98-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%90%E1%83%A1%E1%83%A2%E1%83%A0%E1%83%9D%E1%83%9C%E1%83%90%E1%83%95%E1%83%A2%E1%83%98-%E1%83%9A%E1%83%A3%E1%83%A0%E1%83%AF%E1%83%98-jpg.webp",
      "https://astroman.ge/wp-content/uploads/2022/09/4VEX8Pn9W17wR3E93Gh92hxkGRNI3S.webp",
    ],
    categorySlug: "aqsesuarebi",
    categoryName: "აქსესუარები",
  },
  {
    id: "breloki-kosmonavti",
    name: "ბრელოკი კოსმონავტი",
    price: 15,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%99%E1%83%9D%E1%83%A1%E1%83%9B%E1%83%9D%E1%83%9C%E1%83%90%E1%83%95%E1%83%A2%E1%83%98-3-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%99%E1%83%9D%E1%83%A1%E1%83%9B%E1%83%9D%E1%83%9C%E1%83%90%E1%83%95%E1%83%A2%E1%83%98-3-jpg.webp",
      "https://astroman.ge/wp-content/uploads/2022/09/DhI6801gBueTxbrTpbugcQOpfzpRVa.webp",
    ],
    categorySlug: "aqsesuarebi",
    categoryName: "აქსესუარები",
  },
  {
    id: "breloki-kosmonavti-m",
    name: "ბრელოკი კოსმონავტი M",
    price: 19,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%99%E1%83%9D%E1%83%A1%E1%83%9B%E1%83%9D%E1%83%9C%E1%83%90%E1%83%95%E1%83%A2%E1%83%98-M-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%99%E1%83%9D%E1%83%A1%E1%83%9B%E1%83%9D%E1%83%9C%E1%83%90%E1%83%95%E1%83%A2%E1%83%98-M-jpg.webp",
    ],
    categorySlug: "aqsesuarebi",
    categoryName: "აქსესუარები",
  },
  {
    id: "dedamiwis-yelsabami",
    name: "დედამიწის ყელსაბამი",
    price: 29,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2023/05/-%E1%83%A7%E1%83%94%E1%83%9A%E1%83%A1%E1%83%90%E1%83%91%E1%83%90%E1%83%9B%E1%83%98-2-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2023/05/-%E1%83%A7%E1%83%94%E1%83%9A%E1%83%A1%E1%83%90%E1%83%91%E1%83%90%E1%83%9B%E1%83%98-2-jpg.webp",
    ],
    categorySlug: "aqsesuarebi",
    categoryName: "აქსესუარები",
  },
  {
    id: "saskolo-chanta-astronaut",
    name: "ზურგჩანთა Astronaut",
    price: 97,
    inStock: true,
    image: "https://astroman.ge/wp-content/uploads/2022/09/-Astronaut-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/-Astronaut-jpg.webp",
      "https://astroman.ge/wp-content/uploads/2022/09/O1CN01TVILGx2LLCeDBo2Kb_734359675.jpeg",
    ],
    categorySlug: "aqsesuarebi",
    categoryName: "აქსესუარები",
  },
  {
    id: "zurgchanta-bagis",
    name: "ზურგჩანთა ბაღის",
    price: 66,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2023/07/-%E1%83%91%E1%83%90%E1%83%A6%E1%83%98%E1%83%A1-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2023/07/-%E1%83%91%E1%83%90%E1%83%A6%E1%83%98%E1%83%A1-jpg.webp",
      "https://astroman.ge/wp-content/uploads/2023/07/IMG_4947.jpg",
    ],
    categorySlug: "aqsesuarebi",
    categoryName: "აქსესუარები",
  },
  {
    id: "school-bag-pixel-green",
    name: "ზურგჩანთა მაინკრაფტი",
    price: 49,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2026/09/pixel-green_hero.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2026/09/pixel-green_hero.jpg",
    ],
    categorySlug: "aqsesuarebi",
    categoryName: "აქსესუარები",
  },
  {
    id: "school-bag-blocky-blue",
    name: "ზურგჩანთა რობლოქსი",
    price: 89,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2026/09/blocky-blue_hero.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2026/09/blocky-blue_hero.jpg",
    ],
    categorySlug: "aqsesuarebi",
    categoryName: "აქსესუარები",
  },
  {
    id: "termosi",
    name: "თერმოსი (500მლ)",
    price: 41,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2023/09/-%E1%83%97%E1%83%94%E1%83%A0%E1%83%9B%E1%83%9D%E1%83%A1%E1%83%98-89-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2023/09/-%E1%83%97%E1%83%94%E1%83%A0%E1%83%9B%E1%83%9D%E1%83%A1%E1%83%98-89-jpg.webp",
      "https://astroman.ge/wp-content/uploads/2023/09/Screenshot-2023-09-18-at-12.25.31.png",
    ],
    categorySlug: "aqsesuarebi",
    categoryName: "აქსესუარები",
  },
  {
    id: "kedlis-saati-marsi",
    name: "კედლის საათი (მარსი)",
    price: 77,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A1%E1%83%90%E1%83%90%E1%83%97%E1%83%98-%E1%83%9B%E1%83%90%E1%83%A0%E1%83%A1%E1%83%98-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A1%E1%83%90%E1%83%90%E1%83%97%E1%83%98-%E1%83%9B%E1%83%90%E1%83%A0%E1%83%A1%E1%83%98-jpg.webp",
    ],
    categorySlug: "aqsesuarebi",
    categoryName: "აქსესუარები",
  },
  {
    id: "kedlis-saati-planetebi",
    name: "კედლის საათი (პლანეტები)",
    price: 77,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A1%E1%83%90%E1%83%90%E1%83%97%E1%83%98-%E1%83%9E%E1%83%9A%E1%83%90%E1%83%9C%E1%83%94%E1%83%A2%E1%83%94%E1%83%91%E1%83%98-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A1%E1%83%90%E1%83%90%E1%83%97%E1%83%98-%E1%83%9E%E1%83%9A%E1%83%90%E1%83%9C%E1%83%94%E1%83%A2%E1%83%94%E1%83%91%E1%83%98-jpg.webp",
    ],
    categorySlug: "aqsesuarebi",
    categoryName: "აქსესუარები",
  },
  {
    id: "kedlis-saati-raketa",
    name: "კედლის საათი (რაკეტა)",
    price: 77,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A1%E1%83%90%E1%83%90%E1%83%97%E1%83%98-%E1%83%A0%E1%83%90%E1%83%99%E1%83%94%E1%83%A2%E1%83%90-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A1%E1%83%90%E1%83%90%E1%83%97%E1%83%98-%E1%83%A0%E1%83%90%E1%83%99%E1%83%94%E1%83%A2%E1%83%90-jpg.webp",
    ],
    categorySlug: "aqsesuarebi",
    categoryName: "აქსესუარები",
  },
  {
    id: "kedlis-saati-kosmonavt",
    name: "კედლის საათი ასტრონავტი",
    price: 129,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A1%E1%83%90%E1%83%90%E1%83%97%E1%83%98-%E1%83%90%E1%83%A1%E1%83%A2%E1%83%A0%E1%83%9D%E1%83%9C%E1%83%90%E1%83%95%E1%83%A2%E1%83%98-1-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A1%E1%83%90%E1%83%90%E1%83%97%E1%83%98-%E1%83%90%E1%83%A1%E1%83%A2%E1%83%A0%E1%83%9D%E1%83%9C%E1%83%90%E1%83%95%E1%83%A2%E1%83%98-1-jpg.webp",
      "https://astroman.ge/wp-content/uploads/2022/09/61wD7rqHCSL._AC_SX679_.webp",
    ],
    categorySlug: "aqsesuarebi",
    categoryName: "აქსესუარები",
  },
  {
    id: "penali-vardisferi",
    name: "პენალი ვარდისფერი",
    price: 29,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2023/08/-%E1%83%9E%E1%83%94%E1%83%9C%E1%83%90%E1%83%9A%E1%83%98-89-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2023/08/-%E1%83%9E%E1%83%94%E1%83%9C%E1%83%90%E1%83%9A%E1%83%98-89-jpg.webp",
      "https://astroman.ge/wp-content/uploads/2023/08/Screenshot-2023-07-25-at-21.56.27.png",
    ],
    categorySlug: "aqsesuarebi",
    categoryName: "აქსესუარები",
  },
  {
    id: "penali-kosmonavti",
    name: "პენალი კოსმონავტი",
    price: 24,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-02.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-02.jpg",
      "https://astroman.ge/wp-content/uploads/2022/09/O1CN01clvZno2KMHx7Xf2nK_2201487629542-1.jpeg",
    ],
    categorySlug: "aqsesuarebi",
    categoryName: "აქსესუარები",
  },
  {
    id: "penali-raketa",
    name: "პენალი რაკეტა",
    price: 24,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A0%E1%83%90%E1%83%99%E1%83%94%E1%83%A2%E1%83%90-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A0%E1%83%90%E1%83%99%E1%83%94%E1%83%A2%E1%83%90-jpg.webp",
      "https://astroman.ge/wp-content/uploads/2022/09/O1CN01Rthmqm1QQIvZ9HMiE_2014491970.jpg_430x430q90.webp",
    ],
    categorySlug: "aqsesuarebi",
    categoryName: "აქსესუარები",
  },
  {
    id: "planetebis-brelokebi",
    name: "პლანეტების ბრელოკი",
    price: 19,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%91%E1%83%A0%E1%83%94%E1%83%9A%E1%83%9D%E1%83%99%E1%83%98-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%91%E1%83%A0%E1%83%94%E1%83%9A%E1%83%9D%E1%83%99%E1%83%98-jpg.webp",
      "https://astroman.ge/wp-content/uploads/2022/09/puwReLuqKHXOc3YJLT0eeHOtRYRFzP.webp",
    ],
    categorySlug: "aqsesuarebi",
    categoryName: "აქსესუარები",
  },
  {
    id: "samajuri-3",
    name: "სამაჯური დედამიწა",
    price: 19,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/Screenshot-2025-11-10-at-18.08.26-1.png",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/Screenshot-2025-11-10-at-18.08.26-1.png",
    ],
    categorySlug: "aqsesuarebi",
    categoryName: "აქსესუარები",
  },
  {
    id: "samajuri-mzis-sistema",
    name: "სამაჯური მზის სისტემა",
    price: 39,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2024/02/-%E1%83%9B%E1%83%96%E1%83%98%E1%83%A1-%E1%83%A1%E1%83%98%E1%83%A1%E1%83%A2%E1%83%94%E1%83%9B%E1%83%90-2-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2024/02/-%E1%83%9B%E1%83%96%E1%83%98%E1%83%A1-%E1%83%A1%E1%83%98%E1%83%A1%E1%83%A2%E1%83%94%E1%83%9B%E1%83%90-2-jpg.webp",
      "https://astroman.ge/wp-content/uploads/2024/02/H0c18a0ef456340f28000fa7ce96ea367I.webp",
    ],
    categorySlug: "aqsesuarebi",
    categoryName: "აქსესუარები",
  },
  {
    id: "mzis-sistemis-samajuri-m",
    name: "სამაჯური მზის სისტემა (M)",
    price: 38,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/10/-%E1%83%9B%E1%83%96%E1%83%98%E1%83%A1-%E1%83%A1%E1%83%98%E1%83%A1%E1%83%A2%E1%83%94%E1%83%9B%E1%83%90-M-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/10/-%E1%83%9B%E1%83%96%E1%83%98%E1%83%A1-%E1%83%A1%E1%83%98%E1%83%A1%E1%83%A2%E1%83%94%E1%83%9B%E1%83%90-M-jpg.webp",
    ],
    categorySlug: "aqsesuarebi",
    categoryName: "აქსესუარები",
  },
  {
    id: "saturni-kosmonavti-breloki",
    name: "სამაჯური სატურნი/კოსმონავტი",
    price: 21,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A1%E1%83%90%E1%83%A2%E1%83%A3%E1%83%A0%E1%83%9C%E1%83%98-%E1%83%99%E1%83%9D%E1%83%A1%E1%83%9B%E1%83%9D%E1%83%9C%E1%83%90%E1%83%95%E1%83%A2%E1%83%98-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A1%E1%83%90%E1%83%A2%E1%83%A3%E1%83%A0%E1%83%9C%E1%83%98-%E1%83%99%E1%83%9D%E1%83%A1%E1%83%9B%E1%83%9D%E1%83%9C%E1%83%90%E1%83%95%E1%83%A2%E1%83%98-jpg.webp",
    ],
    categorySlug: "aqsesuarebi",
    categoryName: "აქსესუარები",
  },
  {
    id: "school-bag-moon",
    name: "სასაკოლო ჩანთა",
    price: 99,
    inStock: true,
    image: "https://astroman.ge/wp-content/uploads/2024/08/Blue-bag.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2024/08/Blue-bag.jpg",
      "https://astroman.ge/wp-content/uploads/2024/08/b3.jpg",
    ],
    categorySlug: "aqsesuarebi",
    categoryName: "აქსესუარები",
  },
  {
    id: "saskolo-chanta-kosmonavti-lurji",
    name: "სასკოლო ზურგჩანთა",
    price: 89,
    inStock: true,
    image: "https://astroman.ge/wp-content/uploads/2026/09/blue_hero.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2026/09/blue_hero.jpg",
      "https://astroman.ge/wp-content/uploads/2026/09/blue_dimensions.jpg",
    ],
    categorySlug: "aqsesuarebi",
    categoryName: "აქსესუარები",
  },
  {
    id: "saskolo-chanta-astrokid",
    name: "სასკოლო ჩანთა Astrokid",
    price: 98,
    inStock: true,
    image: "https://astroman.ge/wp-content/uploads/2023/08/-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2023/08/-jpg.webp",
      "https://astroman.ge/wp-content/uploads/2022/09/20220820_172516000_iOS.jpg",
    ],
    categorySlug: "aqsesuarebi",
    categoryName: "აქსესუარები",
  },
  {
    id: "saskolo-chanta-cosmo",
    name: "სასკოლო ჩანთა Cosmo",
    price: 112,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/10/-%E1%83%A9%E1%83%90%E1%83%9C%E1%83%97%E1%83%90-Cosmo-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/10/-%E1%83%A9%E1%83%90%E1%83%9C%E1%83%97%E1%83%90-Cosmo-jpg.webp",
    ],
    categorySlug: "aqsesuarebi",
    categoryName: "აქსესუარები",
  },
  {
    id: "saskolo-chanta-cosmoboy",
    name: "სასკოლო ჩანთა Cosmoboy",
    price: 126,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2023/09/-%E1%83%A9%E1%83%90%E1%83%9C%E1%83%97%E1%83%90-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2023/09/-%E1%83%A9%E1%83%90%E1%83%9C%E1%83%97%E1%83%90-jpg.webp",
    ],
    categorySlug: "aqsesuarebi",
    categoryName: "აქსესუარები",
  },
  {
    id: "school-bag-cosmonaut",
    name: "სასკოლო ჩანთა Cosmonaut",
    price: 119,
    inStock: true,
    image: "https://astroman.ge/wp-content/uploads/2024/08/Green-bag-2.jpg",
    images: ["https://astroman.ge/wp-content/uploads/2024/08/Green-bag-2.jpg"],
    categorySlug: "aqsesuarebi",
    categoryName: "აქსესუარები",
  },
  {
    id: "saskolo-chanta-spacegirl",
    name: "სასკოლო ჩანთა Spacegirl",
    price: 92,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/10/-%E1%83%A9%E1%83%90%E1%83%9C%E1%83%97%E1%83%90-Spacegirl-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/10/-%E1%83%A9%E1%83%90%E1%83%9C%E1%83%97%E1%83%90-Spacegirl-jpg.webp",
    ],
    categorySlug: "aqsesuarebi",
    categoryName: "აქსესუარები",
  },
  {
    id: "saskolo-chanta-spaceman",
    name: "სასკოლო ჩანთა Spaceman",
    price: 112,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A9%E1%83%90%E1%83%9C%E1%83%97%E1%83%90-Spaceman-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A9%E1%83%90%E1%83%9C%E1%83%97%E1%83%90-Spaceman-jpg.webp",
    ],
    categorySlug: "aqsesuarebi",
    categoryName: "აქსესუარები",
  },
  {
    id: "school-bag-spiderman",
    name: "სასკოლო ჩანთა Spiderman",
    price: 119,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2024/08/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-02.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2024/08/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-02.jpg",
    ],
    categorySlug: "aqsesuarebi",
    categoryName: "აქსესუარები",
  },
  {
    id: "saskolo-chanta-unicorn",
    name: "სასკოლო ჩანთა Unicorn",
    price: 146,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2023/08/-%E1%83%A9%E1%83%90%E1%83%9C%E1%83%97%E1%83%90-Unicorn-1-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2023/08/-%E1%83%A9%E1%83%90%E1%83%9C%E1%83%97%E1%83%90-Unicorn-1-jpg.webp",
    ],
    categorySlug: "aqsesuarebi",
    categoryName: "აქსესუარები",
  },
  {
    id: "school-bag-yellow",
    name: "სასკოლო ჩანთა ყვითელი",
    price: 96,
    inStock: true,
    image: "https://astroman.ge/wp-content/uploads/2024/08/yelllow-bag.jpg",
    images: ["https://astroman.ge/wp-content/uploads/2024/08/yelllow-bag.jpg"],
    categorySlug: "aqsesuarebi",
    categoryName: "აქსესუარები",
  },
  {
    id: "saturnis-manatobeli-breloki",
    name: "სატურნის მანათობელი ბრელოკი",
    price: 34,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%9B%E1%83%90%E1%83%9C%E1%83%90%E1%83%97%E1%83%9D%E1%83%91%E1%83%94%E1%83%9A%E1%83%98-%E1%83%91%E1%83%A0%E1%83%94%E1%83%9A%E1%83%9D%E1%83%99%E1%83%98-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%9B%E1%83%90%E1%83%9C%E1%83%90%E1%83%97%E1%83%9D%E1%83%91%E1%83%94%E1%83%9A%E1%83%98-%E1%83%91%E1%83%A0%E1%83%94%E1%83%9A%E1%83%9D%E1%83%99%E1%83%98-jpg.webp",
    ],
    categorySlug: "aqsesuarebi",
    categoryName: "აქსესუარები",
  },
  {
    id: "spiderman-backpack-set",
    name: "სპაიდერმენის სასკოლო ზურგჩანთის ნაკრები",
    price: 99,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2026/08/spiderman-backpack-set.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2026/08/spiderman-backpack-set.jpg",
    ],
    categorySlug: "aqsesuarebi",
    categoryName: "აქსესუარები",
  },
  {
    id: "qolga",
    name: "ქოლგა",
    price: 48,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A5%E1%83%9D%E1%83%9A%E1%83%92%E1%83%90-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A5%E1%83%9D%E1%83%9A%E1%83%92%E1%83%90-jpg.webp",
    ],
    categorySlug: "aqsesuarebi",
    categoryName: "აქსესუარები",
  },
  {
    id: "yelsabami-saturni-4",
    name: "ყელსაბამი (სატურნი)",
    price: 28,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/H850b4346771c484abf8b430468da60e17.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/H850b4346771c484abf8b430468da60e17.jpg",
    ],
    categorySlug: "aqsesuarebi",
    categoryName: "აქსესუარები",
  },
  {
    id: "yelsabami-saturni-2",
    name: "ყელსაბამი (სატურნი ვარდისფერი)",
    price: 25,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A7%E1%83%94%E1%83%9A%E1%83%A1%E1%83%90%E1%83%91%E1%83%90%E1%83%9B%E1%83%98-45-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A7%E1%83%94%E1%83%9A%E1%83%A1%E1%83%90%E1%83%91%E1%83%90%E1%83%9B%E1%83%98-45-jpg.webp",
    ],
    categorySlug: "aqsesuarebi",
    categoryName: "აქსესუარები",
  },
  {
    id: "yelsabami-saturni7",
    name: "ყელსაბამი (სატურნი ვერცხლისფერი)",
    price: 25,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A7%E1%83%94%E1%83%9A%E1%83%A1%E1%83%90%E1%83%91%E1%83%90%E1%83%9B%E1%83%9810-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A7%E1%83%94%E1%83%9A%E1%83%A1%E1%83%90%E1%83%91%E1%83%90%E1%83%9B%E1%83%9810-jpg.webp",
    ],
    categorySlug: "aqsesuarebi",
    categoryName: "აქსესუარები",
  },
  {
    id: "yelsabami-naxevarmtvare",
    name: "ყელსაბამი ნახევარმთვარე",
    price: 29,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%9C%E1%83%90%E1%83%AE%E1%83%94%E1%83%95%E1%83%90%E1%83%A0%E1%83%9B%E1%83%97%E1%83%95%E1%83%90%E1%83%A0%E1%83%94-1-1-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%9C%E1%83%90%E1%83%AE%E1%83%94%E1%83%95%E1%83%90%E1%83%A0%E1%83%9B%E1%83%97%E1%83%95%E1%83%90%E1%83%A0%E1%83%94-1-1-jpg.webp",
    ],
    categorySlug: "aqsesuarebi",
    categoryName: "აქსესუარები",
  },
  {
    id: "majis-saati-cosmos",
    name: "მაჯის საათი (Cosmos)",
    price: 45,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A1%E1%83%90%E1%83%90%E1%83%97%E1%83%98-Cosmos-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A1%E1%83%90%E1%83%90%E1%83%97%E1%83%98-Cosmos-jpg.webp",
    ],
    categorySlug: "aqsesuarebi",
    categoryName: "აქსესუარები",
  },
  {
    id: "chiqis-sasachukre-nakrebi",
    name: "კოსმოსური ჭიქის სასაჩუქრე ნაკრები",
    price: 145,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%AD%E1%83%98%E1%83%A5%E1%83%98%E1%83%A1-%E1%83%A1%E1%83%90%E1%83%A1%E1%83%90%E1%83%A9%E1%83%A3%E1%83%A5%E1%83%A0%E1%83%94-%E1%83%9C%E1%83%90%E1%83%99%E1%83%A0%E1%83%94%E1%83%91%E1%83%98-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%AD%E1%83%98%E1%83%A5%E1%83%98%E1%83%A1-%E1%83%A1%E1%83%90%E1%83%A1%E1%83%90%E1%83%A9%E1%83%A3%E1%83%A5%E1%83%A0%E1%83%94-%E1%83%9C%E1%83%90%E1%83%99%E1%83%A0%E1%83%94%E1%83%91%E1%83%98-jpg.webp",
    ],
    categorySlug: "aqsesuarebi",
    categoryName: "აქსესუარები",
  },
  {
    id: "chiqa",
    name: "ჭიქა კოსმოსური",
    price: 48,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%AD%E1%83%98%E1%83%A5%E1%83%94%E1%83%91%E1%83%98-4-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%AD%E1%83%98%E1%83%A5%E1%83%94%E1%83%91%E1%83%98-4-jpg.webp",
    ],
    categorySlug: "aqsesuarebi",
    categoryName: "აქსესუარები",
  },
  {
    id: "kosmosuri-chiqa",
    name: "კოსმოსური ჭიქა თავსახურით",
    price: 45,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2023/06/-%E1%83%AD%E1%83%98%E1%83%A5%E1%83%90-1-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2023/06/-%E1%83%AD%E1%83%98%E1%83%A5%E1%83%90-1-jpg.webp",
    ],
    categorySlug: "aqsesuarebi",
    categoryName: "აქსესუარები",
  },
  {
    id: "balishi-dedamitsa",
    name: "ბალიში დედამიწა",
    price: 42,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/%E1%83%91%E1%83%90%E1%83%9A%E1%83%98%E1%83%A8%E1%83%98-%E1%83%93%E1%83%94%E1%83%93%E1%83%90%E1%83%9B%E1%83%98%E1%83%AC%E1%83%90-1.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/%E1%83%91%E1%83%90%E1%83%9A%E1%83%98%E1%83%A8%E1%83%98-%E1%83%93%E1%83%94%E1%83%93%E1%83%90%E1%83%9B%E1%83%98%E1%83%AC%E1%83%90-1.webp",
    ],
    categorySlug: "aqsesuarebi",
    categoryName: "აქსესუარები",
  },
  {
    id: "balishi-mtvare",
    name: "ბალიში მთვარე",
    price: 41,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-02.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-02.jpg",
    ],
    categorySlug: "aqsesuarebi",
    categoryName: "აქსესუარები",
  },
  {
    id: "balishi-raketa",
    name: "ბალიში რაკეტა",
    price: 55,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2023/05/%E1%83%91%E1%83%90%E1%83%9A%E1%83%98%E1%83%A8%E1%83%98-%E1%83%A0%E1%83%90%E1%83%99%E1%83%94%E1%83%A2%E1%83%90.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2023/05/%E1%83%91%E1%83%90%E1%83%9A%E1%83%98%E1%83%A8%E1%83%98-%E1%83%A0%E1%83%90%E1%83%99%E1%83%94%E1%83%A2%E1%83%90.webp",
    ],
    categorySlug: "aqsesuarebi",
    categoryName: "აქსესუარები",
  },
  {
    id: "kosmosuri-stikerebi",
    name: "კოსმოსური სტიკერები (50ც)",
    price: 29,
    inStock: true,
    image: "https://astroman.ge/wp-content/uploads/2022/09/-2-jpg.webp",
    images: ["https://astroman.ge/wp-content/uploads/2022/09/-2-jpg.webp"],
    categorySlug: "aqsesuarebi",
    categoryName: "აქსესუარები",
  },
  {
    id: "macivris-magnitebi",
    name: "მაცივარზე მისაკრობი მაგნიტები",
    price: 10,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%9B%E1%83%98%E1%83%A1%E1%83%90%E1%83%99%E1%83%A0%E1%83%9D%E1%83%91%E1%83%94%E1%83%91%E1%83%98-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%9B%E1%83%98%E1%83%A1%E1%83%90%E1%83%99%E1%83%A0%E1%83%9D%E1%83%91%E1%83%94%E1%83%91%E1%83%98-jpg.webp",
    ],
    categorySlug: "aqsesuarebi",
    categoryName: "აქსესუარები",
  },
  {
    id: "satleli-kosmonavti",
    name: "სათლელი კოსმონავტი",
    price: 37,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/10/-%E1%83%99%E1%83%9D%E1%83%A1%E1%83%9B%E1%83%9D%E1%83%9C%E1%83%90%E1%83%95%E1%83%A2%E1%83%98-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/10/-%E1%83%99%E1%83%9D%E1%83%A1%E1%83%9B%E1%83%9D%E1%83%9C%E1%83%90%E1%83%95%E1%83%A2%E1%83%98-jpg.webp",
    ],
    categorySlug: "aqsesuarebi",
    categoryName: "აქსესუარები",
  },

  // ==========================================
  // 4. ვარსკვლავური რუკა (varskvlavuri-ruka)
  // ==========================================
  {
    id: "star-map-aurora",
    name: "ვარსკვლავური რუკა (აურორა)",
    price: 42,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A0%E1%83%A3%E1%83%99%E1%83%90-%E1%83%90%E1%83%A3%E1%83%A0%E1%83%9D%E1%83%A0%E1%83%90-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A0%E1%83%A3%E1%83%99%E1%83%90-%E1%83%90%E1%83%A3%E1%83%A0%E1%83%9D%E1%83%A0%E1%83%90-jpg.webp",
    ],
    categorySlug: "varskvlavuri-ruka",
    categoryName: "ვარსკვლავური რუკა",
  },
  {
    id: "piradi-ruka-galaxy",
    name: "ვარსკვლავური რუკა (გალაქსი)",
    price: 42,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A0%E1%83%A3%E1%83%99%E1%83%90-%E1%83%92%E1%83%90%E1%83%9A%E1%83%90%E1%83%A5%E1%83%A1%E1%83%98-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A0%E1%83%A3%E1%83%99%E1%83%90-%E1%83%92%E1%83%90%E1%83%9A%E1%83%90%E1%83%A5%E1%83%A1%E1%83%98-jpg.webp",
    ],
    categorySlug: "varskvlavuri-ruka",
    categoryName: "ვარსკვლავური რუკა",
  },
  {
    id: "varskvlavuri-ruka-jupiter",
    name: "ვარსკვლავური რუკა (ვან გოგი)",
    price: 42,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A0%E1%83%A3%E1%83%99%E1%83%90-%E1%83%95%E1%83%90%E1%83%9C-%E1%83%92%E1%83%9D%E1%83%92%E1%83%98-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A0%E1%83%A3%E1%83%99%E1%83%90-%E1%83%95%E1%83%90%E1%83%9C-%E1%83%92%E1%83%9D%E1%83%92%E1%83%98-jpg.webp",
    ],
    categorySlug: "varskvlavuri-ruka",
    categoryName: "ვარსკვლავური რუკა",
  },
  {
    id: "piradi-ruka-varskvlavebi",
    name: "ვარსკვლავური რუკა (ლურჯი)",
    price: 42,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A0%E1%83%A3%E1%83%99%E1%83%90-%E1%83%9A%E1%83%A3%E1%83%A0%E1%83%AF%E1%83%98-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A0%E1%83%A3%E1%83%99%E1%83%90-%E1%83%9A%E1%83%A3%E1%83%A0%E1%83%AF%E1%83%98-jpg.webp",
    ],
    categorySlug: "varskvlavuri-ruka",
    categoryName: "ვარსკვლავური რუკა",
  },
  {
    id: "varskvlavuri-ruka-nebula",
    name: "ვარსკვლავური რუკა (ნებულა)",
    price: 42,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A0%E1%83%A3%E1%83%99%E1%83%90-%E1%83%9C%E1%83%94%E1%83%91%E1%83%A3%E1%83%9A%E1%83%90-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A0%E1%83%A3%E1%83%99%E1%83%90-%E1%83%9C%E1%83%94%E1%83%91%E1%83%A3%E1%83%9A%E1%83%90-jpg.webp",
    ],
    categorySlug: "varskvlavuri-ruka",
    categoryName: "ვარსკვლავური რუკა",
  },
  {
    id: "piradi-ruka",
    name: "ვარსკვლავური რუკა (ორი ლოკაცია)",
    price: 70,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A0%E1%83%A3%E1%83%99%E1%83%90-%E1%83%9D%E1%83%A0%E1%83%98-%E1%83%9A%E1%83%9D%E1%83%99%E1%83%90%E1%83%AA%E1%83%98%E1%83%90-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A0%E1%83%A3%E1%83%99%E1%83%90-%E1%83%9D%E1%83%A0%E1%83%98-%E1%83%9A%E1%83%9D%E1%83%99%E1%83%90%E1%83%AA%E1%83%98%E1%83%90-jpg.webp",
    ],
    categorySlug: "varskvlavuri-ruka",
    categoryName: "ვარსკვლავური რუკა",
  },
  {
    id: "moon-map",
    name: "მთვარის რუკა",
    price: 55,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A0%E1%83%A3%E1%83%99%E1%83%90-jpg.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A0%E1%83%A3%E1%83%99%E1%83%90-jpg.webp",
    ],
    categorySlug: "varskvlavuri-ruka",
    categoryName: "ვარსკვლავური რუკა",
  },

  // ==========================================
  // 5. სანათები (sanatebi)
  // ==========================================
  {
    id: "andromeda-crystal-ball",
    name: "Andromeda Crystal Ball",
    price: 49,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2023/02/%E1%83%90%E1%83%9C%E1%83%93%E1%83%A0%E1%83%9D%E1%83%9B%E1%83%94%E1%83%93%E1%83%90%E1%83%A1-%E1%83%A1%E1%83%90%E1%83%9C%E1%83%90%E1%83%97%E1%83%98.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2023/02/%E1%83%90%E1%83%9C%E1%83%93%E1%83%A0%E1%83%9D%E1%83%9B%E1%83%94%E1%83%93%E1%83%90%E1%83%A1-%E1%83%A1%E1%83%90%E1%83%9C%E1%83%90%E1%83%97%E1%83%98.webp",
    ],
    categorySlug: "sanatebi",
    categoryName: "სანათები",
  },
  {
    id: "andromeda-crystal-ball-2",
    name: "Andromeda Crystal Ball (დიდი)",
    price: 97,
    inStock: true,
    image: "https://astroman.ge/wp-content/uploads/2026/05/hit3r5.jpg",
    images: ["https://astroman.ge/wp-content/uploads/2026/05/hit3r5.jpg"],
    categorySlug: "sanatebi",
    categoryName: "სანათები",
  },
  {
    id: "atomic-lamp",
    name: "ატომური სანათი",
    price: 59,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2025/12/Screenshot-2025-12-12-at-13.35.27.png",
    images: [
      "https://astroman.ge/wp-content/uploads/2025/12/Screenshot-2025-12-12-at-13.35.27.png",
    ],
    categorySlug: "sanatebi",
    categoryName: "სანათები",
  },
  {
    id: "gakaqsi-sanati",
    name: "გალაქსი სანათი",
    price: 48,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/%E1%83%92%E1%83%90%E1%83%9A%E1%83%90%E1%83%A5%E1%83%A1%E1%83%98-%E1%83%A1%E1%83%90%E1%83%9C%E1%83%90%E1%83%97%E1%83%98-%E1%83%9B%E1%83%A0%E1%83%92%E1%83%95%E1%83%90%E1%83%9A%E1%83%98-0.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/%E1%83%92%E1%83%90%E1%83%9A%E1%83%90%E1%83%A5%E1%83%A1%E1%83%98-%E1%83%A1%E1%83%90%E1%83%9C%E1%83%90%E1%83%97%E1%83%98-%E1%83%9B%E1%83%A0%E1%83%92%E1%83%95%E1%83%90%E1%83%9A%E1%83%98-0.webp",
    ],
    categorySlug: "sanatebi",
    categoryName: "სანათები",
  },
  {
    id: "gulis-sanati",
    name: "გულის სანათი",
    price: 38,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2025/11/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-01.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2025/11/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-01.jpg",
    ],
    categorySlug: "sanatebi",
    categoryName: "სანათები",
  },
  {
    id: "dedamiwis-magnituri-sanati",
    name: "დედამიწის მაგნიტური სანათი",
    price: 98,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2023/09/%E1%83%93%E1%83%94%E1%83%93%E1%83%90%E1%83%9B%E1%83%98%E1%83%AC%E1%83%98%E1%83%A1-%E1%83%9B%E1%83%90%E1%83%92%E1%83%9C%E1%83%98%E1%83%A2%E1%83%A3%E1%83%A0%E1%83%98-%E1%83%A1%E1%83%90%E1%83%9C%E1%83%90%E1%83%97%E1%83%98.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2023/09/%E1%83%93%E1%83%94%E1%83%93%E1%83%90%E1%83%9B%E1%83%98%E1%83%AC%E1%83%98%E1%83%A1-%E1%83%9B%E1%83%90%E1%83%92%E1%83%9C%E1%83%98%E1%83%A2%E1%83%A3%E1%83%A0%E1%83%98-%E1%83%A1%E1%83%90%E1%83%9C%E1%83%90%E1%83%97%E1%83%98.webp",
    ],
    categorySlug: "sanatebi",
    categoryName: "სანათები",
  },
  {
    id: "earth-lampp",
    name: "დედამიწის სანათი 15სმ",
    price: 99,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/%E1%83%93%E1%83%94%E1%83%93%E1%83%90%E1%83%9B%E1%83%98%E1%83%AC%E1%83%98%E1%83%A1-%E1%83%A1%E1%83%90%E1%83%9C%E1%83%90%E1%83%97%E1%83%98-15%E1%83%A1%E1%83%9B-1.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/%E1%83%93%E1%83%94%E1%83%93%E1%83%90%E1%83%9B%E1%83%98%E1%83%AC%E1%83%98%E1%83%A1-%E1%83%A1%E1%83%90%E1%83%9C%E1%83%90%E1%83%97%E1%83%98-15%E1%83%A1%E1%83%9B-1.webp",
    ],
    categorySlug: "sanatebi",
    categoryName: "სანათები",
  },
  {
    id: "levitating-bulb-lamp",
    name: "Levitating Bulb Lamp",
    price: 267,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2026/08/levitating-bulb-lamp-1.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2026/08/levitating-bulb-lamp-1.jpg",
    ],
    categorySlug: "sanatebi",
    categoryName: "სანათები",
  },
  {
    id: "levitating-galaxy-lamp",
    name: "Levitating Galaxy Lamp",
    price: 279,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/Levitating-Galaxy-Lamp.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/Levitating-Galaxy-Lamp.webp",
    ],
    categorySlug: "sanatebi",
    categoryName: "სანათები",
  },
  {
    id: "levitating-moon-lamp",
    name: "Levitating Moon Lamp",
    price: 279,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-01-copy.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-01-copy.jpg",
    ],
    categorySlug: "sanatebi",
    categoryName: "სანათები",
  },
  {
    id: "levitating-saturn-lamp",
    name: "Levitating Saturn Lamp",
    price: 279,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/Levitating-Saturn-Lamp.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/Levitating-Saturn-Lamp.webp",
    ],
    categorySlug: "sanatebi",
    categoryName: "სანათები",
  },
  {
    id: "levitating-saturn-lamp-wood",
    name: "Levitating Saturn Lamp (Wood)",
    price: 269,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2026/08/levitating-saturn-lamp-wood-1.jpg",
    images: [
      "https://astroman.ge/wp-content/uploads/2026/08/levitating-saturn-lamp-wood-1.jpg",
    ],
    categorySlug: "sanatebi",
    categoryName: "სანათები",
  },
  {
    id: "moon-book-lamp",
    name: "Moon Book Lamp",
    price: 154,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2024/09/pixelcut-export.jpeg",
    images: [
      "https://astroman.ge/wp-content/uploads/2024/09/pixelcut-export.jpeg",
    ],
    categorySlug: "sanatebi",
    categoryName: "სანათები",
  },
  {
    id: "solar-system-crystal-ball",
    name: "Moon Crystal Ball",
    price: 49,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/%E1%83%9B%E1%83%97%E1%83%95%E1%83%90%E1%83%A0%E1%83%98%E1%83%A1-%E1%83%99%E1%83%A0%E1%83%98%E1%83%A1%E1%83%A2%E1%83%90%E1%83%9A%E1%83%A3%E1%83%A0%E1%83%98-%E1%83%A1%E1%83%90%E1%83%9C%E1%83%90%E1%83%97%E1%83%98%E1%83%9D.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/%E1%83%9B%E1%83%97%E1%83%95%E1%83%90%E1%83%A0%E1%83%98%E1%83%A1-%E1%83%99%E1%83%A0%E1%83%98%E1%83%A1%E1%83%A2%E1%83%90%E1%83%9A%E1%83%A3%E1%83%A0%E1%83%98-%E1%83%A1%E1%83%90%E1%83%9C%E1%83%90%E1%83%97%E1%83%98%E1%83%9D.webp",
    ],
    categorySlug: "sanatebi",
    categoryName: "სანათები",
  },
  {
    id: "moon-wall-lamp",
    name: "Moon Wall Lamp",
    price: 128,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2023/10/%E1%83%9B%E1%83%97%E1%83%95%E1%83%90%E1%83%A0%E1%83%98%E1%83%A1-%E1%83%99%E1%83%94%E1%83%93%E1%83%9A%E1%83%98%E1%83%A1-%E1%83%A1%E1%83%90%E1%83%9C%E1%83%90%E1%83%97%E1%83%98.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2023/10/%E1%83%9B%E1%83%97%E1%83%95%E1%83%90%E1%83%A0%E1%83%98%E1%83%A1-%E1%83%99%E1%83%94%E1%83%93%E1%83%9A%E1%83%98%E1%83%A1-%E1%83%A1%E1%83%90%E1%83%9C%E1%83%90%E1%83%97%E1%83%98.webp",
    ],
    categorySlug: "sanatebi",
    categoryName: "სანათები",
  },
  {
    id: "moon-lamp",
    name: "მთვარის სანათი",
    price: 32,
    oldPrice: 45,
    isSale: true,
    inStock: true,
    image:
      "https://astroman.ge/wp-content/uploads/2022/09/%E1%83%9B%E1%83%97%E1%83%95%E1%83%90%E1%83%A0%E1%83%98%E1%83%A1-%E1%83%A1%E1%83%90%E1%83%9C%E1%83%90%E1%83%97%E1%83%98-3D-.webp",
    images: [
      "https://astroman.ge/wp-content/uploads/2022/09/%E1%83%9B%E1%83%97%E1%83%95%E1%83%90%E1%83%A0%E1%83%98%E1%83%A1-%E1%83%A1%E1%83%90%E1%83%9C%E1%83%90%E1%83%97%E1%83%98-3D-.webp",
    ],
    categorySlug: "sanatebi",
    categoryName: "სანათები",
  },
];
