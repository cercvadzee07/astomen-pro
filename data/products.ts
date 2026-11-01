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



// --- დამატებითი ამოღებული პროდუქტები (275-მდე) ---
export const EXTRA_PRODUCTS: Product[] = [
  {
    "id": "p_extra_1",
    "name": "Ვარსკვლავური რუკა star map",
    "categoryName": "ვარსკვლავური რუკა",
    "categorySlug": "varskvlavuri-ruka",
    "price": 65,
    "image": "",
    "link": "https://astroman.ge/%e1%83%95%e1%83%90%e1%83%a0%e1%83%a1%e1%83%99%e1%83%95%e1%83%9a%e1%83%90%e1%83%95%e1%83%a3%e1%83%a0%e1%83%98-%e1%83%a0%e1%83%a3%e1%83%99%e1%83%90-star-map/",
    "inStock": true
  },
  {
    "id": "p_extra_2",
    "name": "Ვარსკვლავის დარქმევა star registry",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2026/09/star-registry-product.jpg",
    "link": "https://astroman.ge/%e1%83%95%e1%83%90%e1%83%a0%e1%83%a1%e1%83%99%e1%83%95%e1%83%9a%e1%83%90%e1%83%95%e1%83%98%e1%83%a1-%e1%83%93%e1%83%90%e1%83%a0%e1%83%a5%e1%83%9b%e1%83%94%e1%83%95%e1%83%90-star-registry/",
    "inStock": true
  },
  {
    "id": "p_extra_3",
    "name": "Მაგნიტური დინამიკი",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2026/01/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-02.jpg",
    "link": "https://astroman.ge/%e1%83%9b%e1%83%90%e1%83%92%e1%83%9c%e1%83%98%e1%83%a2%e1%83%a3%e1%83%a0%e1%83%98-%e1%83%93%e1%83%98%e1%83%9c%e1%83%90%e1%83%9b%e1%83%98%e1%83%99%e1%83%98/",
    "inStock": true
  },
  {
    "id": "p_extra_4",
    "name": "Projector speaker",
    "categoryName": "პროექტორები",
    "categorySlug": "proeqtorebi",
    "price": 120,
    "image": "https://astroman.ge/wp-content/uploads/2024/10/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-0222.jpg",
    "link": "https://astroman.ge/projector-speaker/",
    "inStock": true
  },
  {
    "id": "p_extra_5",
    "name": "Retro bluetooth speakerer",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2023/07/Retro-Bluetooth-Speaker-1-jpg.webp",
    "link": "https://astroman.ge/retro-bluetooth-speakerer/",
    "inStock": true
  },
  {
    "id": "p_extra_6",
    "name": "Infinity bluetooth speaker",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2024/02/Infinity-Bluetooth-Speaker-jpg.webp",
    "link": "https://astroman.ge/infinity-bluetooth-speaker/",
    "inStock": true
  },
  {
    "id": "p_extra_7",
    "name": "Foreseen 10x50 binokli",
    "categoryName": "ბინოკლები",
    "categorySlug": "binokli",
    "price": 180,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/%E1%83%91%E1%83%98%E1%83%9C%E1%83%9D%E1%83%99%E1%83%9A%E1%83%98-2.jpg",
    "link": "https://astroman.ge/foreseen-10x50-binokli/",
    "inStock": true
  },
  {
    "id": "p_extra_8",
    "name": "Binokli",
    "categoryName": "ბინოკლები",
    "categorySlug": "binokli",
    "price": 180,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/30-jpg.webp",
    "link": "https://astroman.ge/binokli/",
    "inStock": true
  },
  {
    "id": "p_extra_9",
    "name": "Robot bluetooth speaker",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A0%E1%83%9D%E1%83%91%E1%83%9D%E1%83%A2%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/robot-bluetooth-speaker/",
    "inStock": true
  },
  {
    "id": "p_extra_10",
    "name": "Telefonis adapteeri",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/%E1%83%90%E1%83%93%E1%83%90%E1%83%9E%E1%83%A2%E1%83%94%E1%83%A0%E1%83%98.jpg",
    "link": "https://astroman.ge/telefonis-adapteeri/",
    "inStock": true
  },
  {
    "id": "p_extra_11",
    "name": "Cosmonaut moon speaker lamp",
    "categoryName": "სანათები",
    "categorySlug": "sanatebi",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/Cosmonaut-Moon-Speaker-Lamp-jpg.webp",
    "link": "https://astroman.ge/cosmonaut-moon-speaker-lamp/",
    "inStock": true
  },
  {
    "id": "p_extra_12",
    "name": "National geographic microscope incl smartphone adapter",
    "categoryName": "მიკროსკოპები",
    "categorySlug": "mikroskopi",
    "price": 210,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%9B%E1%83%98%E1%83%99%E1%83%A0%E1%83%9D%E1%83%A1%E1%83%99%E1%83%9D%E1%83%9E%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/national-geographic-microscope-incl-smartphone-adapter/",
    "inStock": true
  },
  {
    "id": "p_extra_13",
    "name": "National geographic 10x25 binoculars",
    "categoryName": "ბინოკლები",
    "categorySlug": "binokli",
    "price": 180,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-7-jpg.webp",
    "link": "https://astroman.ge/national-geographic-10x25-binoculars/",
    "inStock": true
  },
  {
    "id": "p_extra_14",
    "name": "Celestron landscout",
    "categoryName": "ტელესკოპები",
    "categorySlug": "teleskopi",
    "price": 950,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/Screenshot-2026-01-27-at-14.09.38.png",
    "link": "https://astroman.ge/celestron-landscout/",
    "inStock": true
  },
  {
    "id": "p_extra_15",
    "name": "National geographic 8x42 mm binoculars",
    "categoryName": "ბინოკლები",
    "categorySlug": "binokli",
    "price": 180,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/42-jpg.webp",
    "link": "https://astroman.ge/national-geographic-8x42-mm-binoculars/",
    "inStock": true
  },
  {
    "id": "p_extra_16",
    "name": "Astronaut projector",
    "categoryName": "პროექტორები",
    "categorySlug": "proeqtorebi",
    "price": 120,
    "image": "https://astroman.ge/wp-content/uploads/2025/12/2212.jpg",
    "link": "https://astroman.ge/astronaut-projector/",
    "inStock": true
  },
  {
    "id": "p_extra_17",
    "name": "Moon wall lamp 2",
    "categoryName": "სანათები",
    "categorySlug": "sanatebi",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2025/02/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-01.jpg",
    "link": "https://astroman.ge/moon-wall-lamp-2/",
    "inStock": true
  },
  {
    "id": "p_extra_18",
    "name": "Cosmonaut projector",
    "categoryName": "პროექტორები",
    "categorySlug": "proeqtorebi",
    "price": 120,
    "image": "https://astroman.ge/wp-content/uploads/2024/03/34-1-1-scaled.webp",
    "link": "https://astroman.ge/cosmonaut-projector/",
    "inStock": true
  },
  {
    "id": "p_extra_19",
    "name": "Table lamp",
    "categoryName": "სანათები",
    "categorySlug": "sanatebi",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2024/11/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-01.jpg",
    "link": "https://astroman.ge/table-lamp/",
    "inStock": true
  },
  {
    "id": "p_extra_20",
    "name": "Proeqtori planetebi",
    "categoryName": "პროექტორები",
    "categorySlug": "proeqtorebi",
    "price": 120,
    "image": "https://astroman.ge/wp-content/uploads/2023/11/-1-jpg.webp",
    "link": "https://astroman.ge/proeqtori-planetebi/",
    "inStock": true
  },
  {
    "id": "p_extra_21",
    "name": "Projector speakercosmos",
    "categoryName": "პროექტორები",
    "categorySlug": "proeqtorebi",
    "price": 120,
    "image": "https://astroman.ge/wp-content/uploads/2024/02/-%E1%83%99%E1%83%9D%E1%83%A1%E1%83%9B%E1%83%9D%E1%83%A1%E1%83%981-jpg.webp",
    "link": "https://astroman.ge/projector-speakercosmos/",
    "inStock": true
  },
  {
    "id": "p_extra_22",
    "name": "Ufo nebula projector",
    "categoryName": "პროექტორები",
    "categorySlug": "proeqtorebi",
    "price": 120,
    "image": "https://astroman.ge/wp-content/uploads/2024/04/-02-jpg.webp",
    "link": "https://astroman.ge/ufo-nebula-projector/",
    "inStock": true
  },
  {
    "id": "p_extra_23",
    "name": "Projector earthmoon",
    "categoryName": "პროექტორები",
    "categorySlug": "proeqtorebi",
    "price": 120,
    "image": "https://astroman.ge/wp-content/uploads/2024/08/222122-02-scaled.jpg",
    "link": "https://astroman.ge/projector-earthmoon/",
    "inStock": true
  },
  {
    "id": "p_extra_24",
    "name": "Rocket projector",
    "categoryName": "პროექტორები",
    "categorySlug": "proeqtorebi",
    "price": 120,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/Rocket-Projector-jpg.webp",
    "link": "https://astroman.ge/rocket-projector/",
    "inStock": true
  },
  {
    "id": "p_extra_25",
    "name": "Nebula projector",
    "categoryName": "პროექტორები",
    "categorySlug": "proeqtorebi",
    "price": 120,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/Nebula-Projector-jpg.webp",
    "link": "https://astroman.ge/nebula-projector/",
    "inStock": true
  },
  {
    "id": "p_extra_26",
    "name": "Nebula bluetooth projector",
    "categoryName": "პროექტორები",
    "categorySlug": "proeqtorebi",
    "price": 120,
    "image": "https://astroman.ge/wp-content/uploads/2022/11/Nebula-Bluetooth-Projector-1-jpg.webp",
    "link": "https://astroman.ge/nebula-bluetooth-projector/",
    "inStock": true
  },
  {
    "id": "p_extra_27",
    "name": "Saturnis chagi grey",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%AD%E1%83%90%E1%83%A6%E1%83%98-%E1%83%9C%E1%83%90%E1%83%AA%E1%83%A0%E1%83%98%E1%83%A1%E1%83%A4%E1%83%94%E1%83%A0%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/saturnis-chagi-grey/",
    "inStock": true
  },
  {
    "id": "p_extra_28",
    "name": "Saturnis chagi black",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%AD%E1%83%90%E1%83%A6%E1%83%98-%E1%83%A8%E1%83%90%E1%83%95%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/saturnis-chagi-black/",
    "inStock": true
  },
  {
    "id": "p_extra_29",
    "name": "Proeqtori dedamiwa mtvare",
    "categoryName": "პროექტორები",
    "categorySlug": "proeqtorebi",
    "price": 120,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%93%E1%83%94%E1%83%93%E1%83%90%E1%83%9B%E1%83%98%E1%83%AC%E1%83%90-%E1%83%9B%E1%83%97%E1%83%95%E1%83%90%E1%83%A0%E1%83%94-%E1%83%A8%E1%83%90%E1%83%95%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/proeqtori-dedamiwa-mtvare/",
    "inStock": true
  },
  {
    "id": "p_extra_30",
    "name": "Starry sky projector",
    "categoryName": "პროექტორები",
    "categorySlug": "proeqtorebi",
    "price": 120,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/Starry-Sky-%E1%83%9E%E1%83%A0%E1%83%9D%E1%83%94%E1%83%A5%E1%83%A2%E1%83%9D%E1%83%A0%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/starry-sky-projector/",
    "inStock": true
  },
  {
    "id": "p_extra_31",
    "name": "Projector stars",
    "categoryName": "პროექტორები",
    "categorySlug": "proeqtorebi",
    "price": 120,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%9E%E1%83%A0%E1%83%9D%E1%83%94%E1%83%A5%E1%83%A2%E1%83%9D%E1%83%A0%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/projector-stars/",
    "inStock": true
  },
  {
    "id": "p_extra_32",
    "name": "Mzis sisteimis modeli",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%9B%E1%83%96%E1%83%98%E1%83%A1-%E1%83%A1%E1%83%98%E1%83%A1%E1%83%A2%E1%83%94%E1%83%9B%E1%83%90-%E1%83%9E%E1%83%A0%E1%83%9D%E1%83%94%E1%83%A5%E1%83%A2%E1%83%9D%E1%83%A0%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/mzis-sisteimis-modeli/",
    "inStock": true
  },
  {
    "id": "p_extra_33",
    "name": "Magidis sanati dedamiwa",
    "categoryName": "სანათები",
    "categorySlug": "sanatebi",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2023/09/-%E1%83%9B%E1%83%90%E1%83%92%E1%83%9C%E1%83%98%E1%83%A2%E1%83%A3%E1%83%A0%E1%83%98-%E1%83%A1%E1%83%90%E1%83%9C%E1%83%90%E1%83%97%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/magidis-sanati-dedamiwa/",
    "inStock": true
  },
  {
    "id": "p_extra_34",
    "name": "Magidis sanati ufo",
    "categoryName": "სანათები",
    "categorySlug": "sanatebi",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2023/11/Levitating-Ufo-jpg.webp",
    "link": "https://astroman.ge/magidis-sanati-ufo/",
    "inStock": true
  },
  {
    "id": "p_extra_35",
    "name": "Saturnis chagi",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/O1CN0196qdzn1bVlIzkiP77_1134743471.jpg_400x400.jpg",
    "link": "https://astroman.ge/saturnis-chagi/",
    "inStock": true
  },
  {
    "id": "p_extra_36",
    "name": "Levitating globe",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2026/08/levitating-globe-1.jpg",
    "link": "https://astroman.ge/levitating-globe/",
    "inStock": true
  },
  {
    "id": "p_extra_37",
    "name": "Levitating saturn lamp wood",
    "categoryName": "სანათები",
    "categorySlug": "sanatebi",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2026/08/levitating-saturn-lamp-wood-1.jpg",
    "link": "https://astroman.ge/levitating-saturn-lamp-wood/",
    "inStock": true
  },
  {
    "id": "p_extra_38",
    "name": "Levitating bulb lamp",
    "categoryName": "სანათები",
    "categorySlug": "sanatebi",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2026/08/levitating-bulb-lamp-1.jpg",
    "link": "https://astroman.ge/levitating-bulb-lamp/",
    "inStock": true
  },
  {
    "id": "p_extra_39",
    "name": "Levitating saturn lamp",
    "categoryName": "სანათები",
    "categorySlug": "sanatebi",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/Levitating-Saturn-Lamp-jpg.webp",
    "link": "https://astroman.ge/levitating-saturn-lamp/",
    "inStock": true
  },
  {
    "id": "p_extra_40",
    "name": "Black universe",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2025/12/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-02.jpg",
    "link": "https://astroman.ge/black-universe/",
    "inStock": true
  },
  {
    "id": "p_extra_41",
    "name": "Alien projector",
    "categoryName": "პროექტორები",
    "categorySlug": "proeqtorebi",
    "price": 120,
    "image": "https://astroman.ge/wp-content/uploads/2026/05/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-02.jpg",
    "link": "https://astroman.ge/alien-projector/",
    "inStock": true
  },
  {
    "id": "p_extra_42",
    "name": "Premium projector",
    "categoryName": "პროექტორები",
    "categorySlug": "proeqtorebi",
    "price": 120,
    "image": "https://astroman.ge/wp-content/uploads/2026/05/9dqtol-scaled.jpg",
    "link": "https://astroman.ge/premium-projector/",
    "inStock": true
  },
  {
    "id": "p_extra_43",
    "name": "Andromeda crystal ball 2",
    "categoryName": "სანათები",
    "categorySlug": "sanatebi",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2026/05/hit3r5-scaled.jpg",
    "link": "https://astroman.ge/andromeda-crystal-ball-2/",
    "inStock": true
  },
  {
    "id": "p_extra_44",
    "name": "Medusa crystal ball",
    "categoryName": "სანათები",
    "categorySlug": "sanatebi",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2026/05/m0y16j-scaled.jpg",
    "link": "https://astroman.ge/medusa-crystal-ball/",
    "inStock": true
  },
  {
    "id": "p_extra_45",
    "name": "Levitating galaxy lamp",
    "categoryName": "სანათები",
    "categorySlug": "sanatebi",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/Levitating-Galaxy-Lamp-jpg.webp",
    "link": "https://astroman.ge/levitating-galaxy-lamp/",
    "inStock": true
  },
  {
    "id": "p_extra_46",
    "name": "Levitating moon lamp",
    "categoryName": "სანათები",
    "categorySlug": "sanatebi",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-01-copy.jpg",
    "link": "https://astroman.ge/levitating-moon-lamp/",
    "inStock": true
  },
  {
    "id": "p_extra_47",
    "name": "Air humidifier",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2025/12/Screenshot-2025-12-12-at-13.36.25.png",
    "link": "https://astroman.ge/air-humidifier/",
    "inStock": true
  },
  {
    "id": "p_extra_48",
    "name": "Sensoruli sannati",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2025/12/222.jpg",
    "link": "https://astroman.ge/sensoruli-sannati/",
    "inStock": true
  },
  {
    "id": "p_extra_49",
    "name": "Naruto lamp",
    "categoryName": "სანათები",
    "categorySlug": "sanatebi",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2025/12/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-01.jpg",
    "link": "https://astroman.ge/naruto-lamp/",
    "inStock": true
  },
  {
    "id": "p_extra_50",
    "name": "Atomic lamp",
    "categoryName": "სანათები",
    "categorySlug": "sanatebi",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2025/12/Screenshot-2025-12-12-at-13.35.27.png",
    "link": "https://astroman.ge/atomic-lamp/",
    "inStock": true
  },
  {
    "id": "p_extra_51",
    "name": "Gulis sanati",
    "categoryName": "სანათები",
    "categorySlug": "sanatebi",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2025/11/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-01.jpg",
    "link": "https://astroman.ge/gulis-sanati/",
    "inStock": true
  },
  {
    "id": "p_extra_52",
    "name": "Კედლის სანათი კოსმონავტი",
    "categoryName": "სანათები",
    "categorySlug": "sanatebi",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2024/09/7754344.jpg",
    "link": "https://astroman.ge/%e1%83%99%e1%83%94%e1%83%93%e1%83%9a%e1%83%98%e1%83%a1-%e1%83%a1%e1%83%90%e1%83%9c%e1%83%90%e1%83%97%e1%83%98-%e1%83%99%e1%83%9d%e1%83%a1%e1%83%9b%e1%83%9d%e1%83%9c%e1%83%90%e1%83%95%e1%83%a2%e1%83%98/",
    "inStock": true
  },
  {
    "id": "p_extra_53",
    "name": "Fireplace air humidifier lamp",
    "categoryName": "სანათები",
    "categorySlug": "sanatebi",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2024/12/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-02.jpg",
    "link": "https://astroman.ge/fireplace-air-humidifier-lamp/",
    "inStock": true
  },
  {
    "id": "p_extra_54",
    "name": "Magidis sanati guli",
    "categoryName": "სანათები",
    "categorySlug": "sanatebi",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2024/09/3234123.jpg",
    "link": "https://astroman.ge/magidis-sanati-guli/",
    "inStock": true
  },
  {
    "id": "p_extra_55",
    "name": "Night lamp",
    "categoryName": "სანათები",
    "categorySlug": "sanatebi",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2025/02/111.jpg",
    "link": "https://astroman.ge/night-lamp/",
    "inStock": true
  },
  {
    "id": "p_extra_56",
    "name": "Pnaleta neptuni",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2025/05/ChatGPT-Image-Apr-29-2025-07_51_53-PM.png",
    "link": "https://astroman.ge/pnaleta-neptuni/",
    "inStock": true
  },
  {
    "id": "p_extra_57",
    "name": "Raindrop air humidifier",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2025/04/Screenshot-2025-04-28-at-16.03.54.png",
    "link": "https://astroman.ge/raindrop-air-humidifier/",
    "inStock": true
  },
  {
    "id": "p_extra_58",
    "name": "Სახლის კინოთეატრი hs9500 pro",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2024/12/hy-black-projector.jpg",
    "link": "https://astroman.ge/%e1%83%a1%e1%83%90%e1%83%ae%e1%83%9a%e1%83%98%e1%83%a1-%e1%83%99%e1%83%98%e1%83%9c%e1%83%9d%e1%83%97%e1%83%94%e1%83%90%e1%83%a2%e1%83%a0%e1%83%98-hs9500-pro/",
    "inStock": true
  },
  {
    "id": "p_extra_59",
    "name": "Moon book lamp",
    "categoryName": "სანათები",
    "categorySlug": "sanatebi",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2024/09/pixelcut-export.jpeg",
    "link": "https://astroman.ge/moon-book-lamp/",
    "inStock": true
  },
  {
    "id": "p_extra_60",
    "name": "Table lamp cosmonaut",
    "categoryName": "სანათები",
    "categorySlug": "sanatebi",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2024/09/5543324.jpg",
    "link": "https://astroman.ge/table-lamp-cosmonaut/",
    "inStock": true
  },
  {
    "id": "p_extra_61",
    "name": "Cosmonaut yoga lamp",
    "categoryName": "სანათები",
    "categorySlug": "sanatebi",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2024/04/34-1-copy-scaled.webp",
    "link": "https://astroman.ge/cosmonaut-yoga-lamp/",
    "inStock": true
  },
  {
    "id": "p_extra_62",
    "name": "Ufo air humidierr",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2024/04/223-scaled.webp",
    "link": "https://astroman.ge/ufo-air-humidierr/",
    "inStock": true
  },
  {
    "id": "p_extra_63",
    "name": "Cosmonaut moon lamp",
    "categoryName": "სანათები",
    "categorySlug": "sanatebi",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2024/06/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-01.jpg",
    "link": "https://astroman.ge/cosmonaut-moon-lamp/",
    "inStock": true
  },
  {
    "id": "p_extra_64",
    "name": "Volcano air humidifier",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2024/03/34-1-2-scaled.webp",
    "link": "https://astroman.ge/volcano-air-humidifier/",
    "inStock": true
  },
  {
    "id": "p_extra_65",
    "name": "Naxevarmtvare led",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2024/06/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-01-copy.jpg",
    "link": "https://astroman.ge/naxevarmtvare-led/",
    "inStock": true
  },
  {
    "id": "p_extra_66",
    "name": "Მაგიდის სანათი მთვარე nordic",
    "categoryName": "სანათები",
    "categorySlug": "sanatebi",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2024/09/665456.jpg",
    "link": "https://astroman.ge/%e1%83%9b%e1%83%90%e1%83%92%e1%83%98%e1%83%93%e1%83%98%e1%83%a1-%e1%83%a1%e1%83%90%e1%83%9c%e1%83%90%e1%83%97%e1%83%98-%e1%83%9b%e1%83%97%e1%83%95%e1%83%90%e1%83%a0%e1%83%94-nordic/",
    "inStock": true
  },
  {
    "id": "p_extra_67",
    "name": "Cosmonaut air humidifier",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2023/06/-%E1%83%93%E1%83%90%E1%83%9B%E1%83%90%E1%83%A2%E1%83%94%E1%83%9C%E1%83%98%E1%83%90%E1%83%9C%E1%83%94%E1%83%91%E1%83%94%E1%83%9A%E1%83%98-%E1%83%99%E1%83%9D%E1%83%A1%E1%83%9B%E1%83%9D%E1%83%9C%E1%83%90%E1%83%95%E1%83%A2%E1%83%98-2-jpg.webp",
    "link": "https://astroman.ge/cosmonaut-air-humidifier/",
    "inStock": true
  },
  {
    "id": "p_extra_68",
    "name": "Ufo lamp 2",
    "categoryName": "სანათები",
    "categorySlug": "sanatebi",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2023/06/-%E1%83%A1%E1%83%9E%E1%83%98%E1%83%9C%E1%83%94%E1%83%A0%E1%83%98-1-jpg.webp",
    "link": "https://astroman.ge/ufo-lamp-2/",
    "inStock": true
  },
  {
    "id": "p_extra_69",
    "name": "Planetebi magidis sanati",
    "categoryName": "სანათები",
    "categorySlug": "sanatebi",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2023/09/-%E1%83%A1%E1%83%90%E1%83%9C%E1%83%90%E1%83%97%E1%83%94%E1%83%91%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/planetebi-magidis-sanati/",
    "inStock": true
  },
  {
    "id": "p_extra_70",
    "name": "Moon wall lamp",
    "categoryName": "სანათები",
    "categorySlug": "sanatebi",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2023/10/-%E1%83%99%E1%83%94%E1%83%93%E1%83%9A%E1%83%98%E1%83%A1-%E1%83%A1%E1%83%90%E1%83%9C%E1%83%90%E1%83%97%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/moon-wall-lamp/",
    "inStock": true
  },
  {
    "id": "p_extra_71",
    "name": "Mzis sistemis planetebi",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2023/11/-%E1%83%A1%E1%83%98%E1%83%A1%E1%83%A2%E1%83%94%E1%83%9B%E1%83%98%E1%83%A1-%E1%83%A1%E1%83%90%E1%83%9C%E1%83%90%E1%83%97%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/mzis-sistemis-planetebi/",
    "inStock": true
  },
  {
    "id": "p_extra_72",
    "name": "Ნახევარმთვარე ვარდისფერ",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2023/12/-%E1%83%A1%E1%83%90%E1%83%9C%E1%83%90%E1%83%97%E1%83%98-1-jpg.webp",
    "link": "https://astroman.ge/%e1%83%9c%e1%83%90%e1%83%ae%e1%83%94%e1%83%95%e1%83%90%e1%83%a0%e1%83%9b%e1%83%97%e1%83%95%e1%83%90%e1%83%a0%e1%83%94-%e1%83%95%e1%83%90%e1%83%a0%e1%83%93%e1%83%98%e1%83%a1%e1%83%a4%e1%83%94%e1%83%a0/",
    "inStock": true
  },
  {
    "id": "p_extra_73",
    "name": "Moon crystal ball",
    "categoryName": "სანათები",
    "categorySlug": "sanatebi",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2022/10/Moon-Crystal-Ball-jpg.webp",
    "link": "https://astroman.ge/moon-crystal-ball/",
    "inStock": true
  },
  {
    "id": "p_extra_74",
    "name": "Solar power garden lamp",
    "categoryName": "სანათები",
    "categorySlug": "sanatebi",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/Solar-Power-Garden-Lamp-jpg.webp",
    "link": "https://astroman.ge/solar-power-garden-lamp/",
    "inStock": true
  },
  {
    "id": "p_extra_75",
    "name": "Dekoratiuli planetebi",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/10/-%E1%83%9E%E1%83%9A%E1%83%90%E1%83%9C%E1%83%94%E1%83%A2%E1%83%94%E1%83%91%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/dekoratiuli-planetebi/",
    "inStock": true
  },
  {
    "id": "p_extra_76",
    "name": "Andromeda crystal ball",
    "categoryName": "სანათები",
    "categorySlug": "sanatebi",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2023/02/-%E1%83%A1%E1%83%90%E1%83%9C%E1%83%90%E1%83%97%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/andromeda-crystal-ball/",
    "inStock": true
  },
  {
    "id": "p_extra_77",
    "name": "Mfrinavi tefshi",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2023/02/-%E1%83%97%E1%83%94%E1%83%A4%E1%83%A8%E1%83%98-%E1%83%99%E1%83%9D%E1%83%A1%E1%83%9B%E1%83%9D%E1%83%9C%E1%83%90%E1%83%95%E1%83%A2%E1%83%98%E1%83%97-jpg.webp",
    "link": "https://astroman.ge/mfrinavi-tefshi/",
    "inStock": true
  },
  {
    "id": "p_extra_78",
    "name": "Haeris damatenianebeli ufo",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2023/01/-%E1%83%93%E1%83%90%E1%83%9B%E1%83%90%E1%83%A2%E1%83%94%E1%83%9C%E1%83%98%E1%83%90%E1%83%9C%E1%83%94%E1%83%91%E1%83%94%E1%83%9A%E1%83%98-UFO-2-jpg.webp",
    "link": "https://astroman.ge/haeris-damatenianebeli-ufo/",
    "inStock": true
  },
  {
    "id": "p_extra_79",
    "name": "Feradi galaqsi sanati",
    "categoryName": "სანათები",
    "categorySlug": "sanatebi",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2023/05/%E1%83%A4%E1%83%94%E1%83%A0%E1%83%90%E1%83%93%E1%83%98-%E1%83%92%E1%83%90%E1%83%9A%E1%83%90%E1%83%A5%E1%83%A1%E1%83%98-%E1%83%A1%E1%83%90%E1%83%9C%E1%83%90%E1%83%97%E1%83%98-1.jpg",
    "link": "https://astroman.ge/feradi-galaqsi-sanati/",
    "inStock": true
  },
  {
    "id": "p_extra_80",
    "name": "Moon lamp humidifier",
    "categoryName": "სანათები",
    "categorySlug": "sanatebi",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A1%E1%83%90%E1%83%9C%E1%83%90%E1%83%97%E1%83%98-%E1%83%B0%E1%83%90%E1%83%94%E1%83%A0%E1%83%98%E1%83%A1-%E1%83%93%E1%83%90%E1%83%9B%E1%83%90%E1%83%A2%E1%83%94%E1%83%9C%E1%83%98%E1%83%90%E1%83%9C%E1%83%94%E1%83%91%E1%83%94%E1%83%9A%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/moon-lamp-humidifier/",
    "inStock": true
  },
  {
    "id": "p_extra_81",
    "name": "Moon lamp night",
    "categoryName": "სანათები",
    "categorySlug": "sanatebi",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A6%E1%83%90%E1%83%9B%E1%83%98%E1%83%A1-%E1%83%A1%E1%83%90%E1%83%9C%E1%83%90%E1%83%97%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/moon-lamp-night/",
    "inStock": true
  },
  {
    "id": "p_extra_82",
    "name": "Gamis sanati",
    "categoryName": "სანათები",
    "categorySlug": "sanatebi",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A1%E1%83%90%E1%83%9C%E1%83%90%E1%83%97%E1%83%98-%E1%83%A8%E1%83%94%E1%83%A1%E1%83%90%E1%83%94%E1%83%A0%E1%83%97%E1%83%94%E1%83%91%E1%83%94%E1%83%9A%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/gamis-sanati/",
    "inStock": true
  },
  {
    "id": "p_extra_83",
    "name": "Marsis sanati",
    "categoryName": "სანათები",
    "categorySlug": "sanatebi",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A1%E1%83%90%E1%83%9C%E1%83%90%E1%83%97%E1%83%98-15%E1%83%A1%E1%83%9B-6-jpg.webp",
    "link": "https://astroman.ge/marsis-sanati/",
    "inStock": true
  },
  {
    "id": "p_extra_84",
    "name": "Sunset lamp 2",
    "categoryName": "სანათები",
    "categorySlug": "sanatebi",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/Sunset-Lamp-2-2-jpg.webp",
    "link": "https://astroman.ge/sunset-lamp-2/",
    "inStock": true
  },
  {
    "id": "p_extra_85",
    "name": "Solar power light",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/Solar-Power-Light-1-jpg.webp",
    "link": "https://astroman.ge/solar-power-light/",
    "inStock": true
  },
  {
    "id": "p_extra_86",
    "name": "Planeta venera",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%95%E1%83%94%E1%83%9C%E1%83%94%E1%83%A0%E1%83%90-17-%E1%83%A1%E1%83%9B-jpg.webp",
    "link": "https://astroman.ge/planeta-venera/",
    "inStock": true
  },
  {
    "id": "p_extra_87",
    "name": "Cosmonaut decorative lamp",
    "categoryName": "სანათები",
    "categorySlug": "sanatebi",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%93%E1%83%94%E1%83%99%E1%83%9D%E1%83%A0%E1%83%90%E1%83%A2%E1%83%98%E1%83%A3%E1%83%9A%E1%83%98-%E1%83%A1%E1%83%90%E1%83%9C%E1%83%90%E1%83%97%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/cosmonaut-decorative-lamp/",
    "inStock": true
  },
  {
    "id": "p_extra_88",
    "name": "Მაღვიძარა რობოტი",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A0%E1%83%9D%E1%83%91%E1%83%9D%E1%83%A2%E1%83%98-6-jpg.webp",
    "link": "https://astroman.ge/%e1%83%9b%e1%83%90%e1%83%a6%e1%83%95%e1%83%98%e1%83%ab%e1%83%90%e1%83%a0%e1%83%90-%e1%83%a0%e1%83%9d%e1%83%91%e1%83%9d%e1%83%a2%e1%83%98/",
    "inStock": true
  },
  {
    "id": "p_extra_89",
    "name": "Naxevarmtvare",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A7%E1%83%95%E1%83%98%E1%83%97%E1%83%94%E1%83%9A%E1%83%98-%E1%83%A1%E1%83%90%E1%83%9C%E1%83%90%E1%83%97%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/naxevarmtvare/",
    "inStock": true
  },
  {
    "id": "p_extra_90",
    "name": "Saturn crystal ball",
    "categoryName": "სანათები",
    "categorySlug": "sanatebi",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%99%E1%83%A0%E1%83%98%E1%83%A1%E1%83%A2%E1%83%90%E1%83%9A%E1%83%A3%E1%83%A0%E1%83%98-%E1%83%A1%E1%83%90%E1%83%9C%E1%83%90%E1%83%97%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/saturn-crystal-ball/",
    "inStock": true
  },
  {
    "id": "p_extra_91",
    "name": "Solar system crystal ball",
    "categoryName": "სანათები",
    "categorySlug": "sanatebi",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%99%E1%83%A0%E1%83%98%E1%83%A1%E1%83%A2%E1%83%90%E1%83%9A%E1%83%A3%E1%83%A0%E1%83%98-%E1%83%A1%E1%83%90%E1%83%9C%E1%83%90%E1%83%97%E1%83%98%E1%83%9D-jpg.webp",
    "link": "https://astroman.ge/solar-system-crystal-ball/",
    "inStock": true
  },
  {
    "id": "p_extra_92",
    "name": "Teslas plazmuri burti",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%9E%E1%83%9A%E1%83%90%E1%83%96%E1%83%9B%E1%83%A3%E1%83%A0%E1%83%98-%E1%83%91%E1%83%A3%E1%83%A0%E1%83%97%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/teslas-plazmuri-burti/",
    "inStock": true
  },
  {
    "id": "p_extra_93",
    "name": "Mtvaris sanati 2d",
    "categoryName": "სანათები",
    "categorySlug": "sanatebi",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A1%E1%83%90%E1%83%9C%E1%83%90%E1%83%97%E1%83%98-2D-%E1%83%A1%E1%83%AE%E1%83%95%E1%83%90%E1%83%93%E1%83%90%E1%83%A1%E1%83%AE%E1%83%95%E1%83%90-%E1%83%A4%E1%83%94%E1%83%A0%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/mtvaris-sanati-2d/",
    "inStock": true
  },
  {
    "id": "p_extra_94",
    "name": "Naturebi kosmosi",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%99%E1%83%9D%E1%83%A1%E1%83%9B%E1%83%9D%E1%83%A1%E1%83%98-6-jpg.webp",
    "link": "https://astroman.ge/naturebi-kosmosi/",
    "inStock": true
  },
  {
    "id": "p_extra_95",
    "name": "Ნეონის რაკეტა",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A0%E1%83%90%E1%83%99%E1%83%94%E1%83%A2%E1%83%90-%E1%83%A1%E1%83%90%E1%83%9C%E1%83%90%E1%83%97%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/%e1%83%9c%e1%83%94%e1%83%9d%e1%83%9c%e1%83%98%e1%83%a1-%e1%83%a0%e1%83%90%e1%83%99%e1%83%94%e1%83%a2%e1%83%90/",
    "inStock": true
  },
  {
    "id": "p_extra_96",
    "name": "Usb ufo",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/USB-UFO-jpg.webp",
    "link": "https://astroman.ge/usb-ufo/",
    "inStock": true
  },
  {
    "id": "p_extra_97",
    "name": "Sunset lamp astronaut",
    "categoryName": "სანათები",
    "categorySlug": "sanatebi",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/Sunset-Lamp-astronaut-1-jpg.webp",
    "link": "https://astroman.ge/sunset-lamp-astronaut/",
    "inStock": true
  },
  {
    "id": "p_extra_98",
    "name": "Earth lampp",
    "categoryName": "სანათები",
    "categorySlug": "sanatebi",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A1%E1%83%90%E1%83%9C%E1%83%90%E1%83%97%E1%83%98-15%E1%83%A1%E1%83%9B-1-jpg.webp",
    "link": "https://astroman.ge/earth-lampp/",
    "inStock": true
  },
  {
    "id": "p_extra_99",
    "name": "Half moon lamp",
    "categoryName": "სანათები",
    "categorySlug": "sanatebi",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A1%E1%83%90%E1%83%9C%E1%83%90%E1%83%97%E1%83%98-2%E1%83%93-8-1-jpg.webp",
    "link": "https://astroman.ge/half-moon-lamp/",
    "inStock": true
  },
  {
    "id": "p_extra_100",
    "name": "Saturni feradi sanati",
    "categoryName": "სანათები",
    "categorySlug": "sanatebi",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A4%E1%83%94%E1%83%A0%E1%83%90%E1%83%93%E1%83%98-%E1%83%A1%E1%83%90%E1%83%9C%E1%83%90%E1%83%97%E1%83%98-5-jpg.webp",
    "link": "https://astroman.ge/saturni-feradi-sanati/",
    "inStock": true
  },
  {
    "id": "p_extra_101",
    "name": "Mzis sistemis sanati2d",
    "categoryName": "სანათები",
    "categorySlug": "sanatebi",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A1%E1%83%98%E1%83%A1%E1%83%A2%E1%83%94%E1%83%9B%E1%83%98%E1%83%A1-2D-%E1%83%A1%E1%83%90%E1%83%9C%E1%83%90%E1%83%97%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/mzis-sistemis-sanati2d/",
    "inStock": true
  },
  {
    "id": "p_extra_102",
    "name": "Saturnis manatobeli breloki",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%9B%E1%83%90%E1%83%9C%E1%83%90%E1%83%97%E1%83%9D%E1%83%91%E1%83%94%E1%83%9A%E1%83%98-%E1%83%91%E1%83%A0%E1%83%94%E1%83%9A%E1%83%9D%E1%83%99%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/saturnis-manatobeli-breloki/",
    "inStock": true
  },
  {
    "id": "p_extra_103",
    "name": "Mtvaris manatobeli breloki",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%9B%E1%83%90%E1%83%9C%E1%83%90%E1%83%97%E1%83%9D%E1%83%91%E1%83%94%E1%83%9A%E1%83%98-%E1%83%91%E1%83%A0%E1%83%94%E1%83%9A%E1%83%9D%E1%83%99%E1%83%98--jpg.webp",
    "link": "https://astroman.ge/mtvaris-manatobeli-breloki/",
    "inStock": true
  },
  {
    "id": "p_extra_104",
    "name": "Magidis sanati medusa",
    "categoryName": "სანათები",
    "categorySlug": "sanatebi",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A1%E1%83%90%E1%83%9C%E1%83%90%E1%83%97%E1%83%98-%E1%83%9B%E1%83%94%E1%83%93%E1%83%A3%E1%83%96%E1%83%90-jpg.webp",
    "link": "https://astroman.ge/magidis-sanati-medusa/",
    "inStock": true
  },
  {
    "id": "p_extra_105",
    "name": "Saturni feradi sanati",
    "categoryName": "სანათები",
    "categorySlug": "sanatebi",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A4%E1%83%94%E1%83%A0%E1%83%90%E1%83%93%E1%83%98-%E1%83%A1%E1%83%90%E1%83%9C%E1%83%90%E1%83%97%E1%83%98-5-jpg.webp",
    "link": "https://astroman.ge/saturni-feradi-sanati/",
    "inStock": true
  },
  {
    "id": "p_extra_106",
    "name": "Saturnis led sanati",
    "categoryName": "სანათები",
    "categorySlug": "sanatebi",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A1%E1%83%90%E1%83%9C%E1%83%90%E1%83%97%E1%83%98-%E1%83%9E%E1%83%90%E1%83%A2%E1%83%90%E1%83%A0%E1%83%90-5-jpg.webp",
    "link": "https://astroman.ge/saturnis-led-sanati/",
    "inStock": true
  },
  {
    "id": "p_extra_107",
    "name": "Naxevarmtvaris sanati",
    "categoryName": "სანათები",
    "categorySlug": "sanatebi",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A1%E1%83%90%E1%83%9C%E1%83%90%E1%83%97%E1%83%98-%E1%83%A7%E1%83%95%E1%83%98%E1%83%97%E1%83%94%E1%83%9A%E1%83%98-4-1-jpg.webp",
    "link": "https://astroman.ge/naxevarmtvaris-sanati/",
    "inStock": true
  },
  {
    "id": "p_extra_108",
    "name": "Gakaqsi sanati",
    "categoryName": "სანათები",
    "categorySlug": "sanatebi",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A1%E1%83%90%E1%83%9C%E1%83%90%E1%83%97%E1%83%98-%E1%83%9B%E1%83%A0%E1%83%92%E1%83%95%E1%83%90%E1%83%9A%E1%83%98-0-jpg.webp",
    "link": "https://astroman.ge/gakaqsi-sanati/",
    "inStock": true
  },
  {
    "id": "p_extra_109",
    "name": "Usb astronaut",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/USB-Astronaut-4-jpg.webp",
    "link": "https://astroman.ge/usb-astronaut/",
    "inStock": true
  },
  {
    "id": "p_extra_110",
    "name": "Ufo lamp",
    "categoryName": "სანათები",
    "categorySlug": "sanatebi",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%97%E1%83%94%E1%83%A4%E1%83%A8%E1%83%98-%E1%83%93%E1%83%98%E1%83%A1%E1%83%A2%E1%83%90%E1%83%9C%E1%83%AA%E1%83%98%E1%83%A3%E1%83%A0%E1%83%98-%E1%83%9B%E1%83%90%E1%83%A0%E1%83%97%E1%83%95%E1%83%98%E1%83%97-1-jpg.webp",
    "link": "https://astroman.ge/ufo-lamp/",
    "inStock": true
  },
  {
    "id": "p_extra_111",
    "name": "Moon lamp",
    "categoryName": "სანათები",
    "categorySlug": "sanatebi",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A1%E1%83%90%E1%83%9C%E1%83%90%E1%83%97%E1%83%98-3D--jpg.webp",
    "link": "https://astroman.ge/moon-lamp/",
    "inStock": true
  },
  {
    "id": "p_extra_112",
    "name": "Სპაიდერმენის სასკოლო ზურ",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2026/08/spiderman-backpack-set.jpg",
    "link": "https://astroman.ge/%e1%83%a1%e1%83%9e%e1%83%90%e1%83%98%e1%83%93%e1%83%94%e1%83%a0%e1%83%9b%e1%83%94%e1%83%9c%e1%83%98%e1%83%a1-%e1%83%a1%e1%83%90%e1%83%a1%e1%83%99%e1%83%9d%e1%83%9a%e1%83%9d-%e1%83%96%e1%83%a3%e1%83%a0/",
    "inStock": true
  },
  {
    "id": "p_extra_113",
    "name": "Eleqtro mannkana",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2024/09/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-02.jpg",
    "link": "https://astroman.ge/eleqtro-mannkana/",
    "inStock": true
  },
  {
    "id": "p_extra_114",
    "name": "3d kalami",
    "categoryName": "საბავშვო",
    "categorySlug": "sabavshvo-satamashoebi",
    "price": 55,
    "image": "https://astroman.ge/wp-content/uploads/2026/02/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-02.jpg",
    "link": "https://astroman.ge/3d-kalami/",
    "inStock": true
  },
  {
    "id": "p_extra_115",
    "name": "3d კალამი შავი",
    "categoryName": "საბავშვო",
    "categorySlug": "sabavshvo-satamashoebi",
    "price": 55,
    "image": "https://astroman.ge/wp-content/uploads/2026/02/Screenshot-2026-02-10-at-16.30.17.png",
    "link": "https://astroman.ge/3d-%e1%83%99%e1%83%90%e1%83%9a%e1%83%90%e1%83%9b%e1%83%98-%e1%83%a8%e1%83%90%e1%83%95%e1%83%98/",
    "inStock": true
  },
  {
    "id": "p_extra_116",
    "name": "School bag yellow",
    "categoryName": "საბავშვო",
    "categorySlug": "sabavshvo-satamashoebi",
    "price": 55,
    "image": "https://astroman.ge/wp-content/uploads/2024/08/yelllow-bag.jpg",
    "link": "https://astroman.ge/school-bag-yellow/",
    "inStock": true
  },
  {
    "id": "p_extra_117",
    "name": "School bag moon",
    "categoryName": "საბავშვო",
    "categorySlug": "sabavshvo-satamashoebi",
    "price": 55,
    "image": "https://astroman.ge/wp-content/uploads/2024/08/Blue-bag.jpg",
    "link": "https://astroman.ge/school-bag-moon/",
    "inStock": true
  },
  {
    "id": "p_extra_118",
    "name": "School bag spiderman",
    "categoryName": "საბავშვო",
    "categorySlug": "sabavshvo-satamashoebi",
    "price": 55,
    "image": "https://astroman.ge/wp-content/uploads/2024/08/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-02.jpg",
    "link": "https://astroman.ge/school-bag-spiderman/",
    "inStock": true
  },
  {
    "id": "p_extra_119",
    "name": "Harry potter wand",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2023/12/-%E1%83%9E%E1%83%9D%E1%83%A2%E1%83%94%E1%83%A0%E1%83%98%E1%83%A1-%E1%83%AF%E1%83%9D%E1%83%AE%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/harry-potter-wand/",
    "inStock": true
  },
  {
    "id": "p_extra_120",
    "name": "Remote helicopter 2",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2024/01/-1-jpg.webp",
    "link": "https://astroman.ge/remote-helicopter-2/",
    "inStock": true
  },
  {
    "id": "p_extra_121",
    "name": "Remote helicopter",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2024/01/-%E1%83%95%E1%83%94%E1%83%A0%E1%83%A2%E1%83%9B%E1%83%A4%E1%83%A0%E1%83%94%E1%83%9C%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/remote-helicopter/",
    "inStock": true
  },
  {
    "id": "p_extra_122",
    "name": "School bag cosmonaut",
    "categoryName": "საბავშვო",
    "categorySlug": "sabavshvo-satamashoebi",
    "price": 55,
    "image": "https://astroman.ge/wp-content/uploads/2024/08/Green-bag-2.jpg",
    "link": "https://astroman.ge/school-bag-cosmonaut/",
    "inStock": true
  },
  {
    "id": "p_extra_123",
    "name": "Penali lurji",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2023/09/-1-jpg.webp",
    "link": "https://astroman.ge/penali-lurji/",
    "inStock": true
  },
  {
    "id": "p_extra_124",
    "name": "Სასკოლო ჩანთა cosmoboy",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2023/09/-%E1%83%A9%E1%83%90%E1%83%9C%E1%83%97%E1%83%90-jpg.webp",
    "link": "https://astroman.ge/%e1%83%a1%e1%83%90%e1%83%a1%e1%83%99%e1%83%9d%e1%83%9a%e1%83%9d-%e1%83%a9%e1%83%90%e1%83%9c%e1%83%97%e1%83%90-cosmoboy/",
    "inStock": true
  },
  {
    "id": "p_extra_125",
    "name": "Mini microscope",
    "categoryName": "მიკროსკოპები",
    "categorySlug": "mikroskopi",
    "price": 210,
    "image": "https://astroman.ge/wp-content/uploads/2023/10/-%E1%83%9B%E1%83%98%E1%83%99%E1%83%A0%E1%83%9D%E1%83%A1%E1%83%99%E1%83%9D%E1%83%9E%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/mini-microscope/",
    "inStock": true
  },
  {
    "id": "p_extra_126",
    "name": "3d xis planetebi",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2023/10/-%E1%83%9E%E1%83%9A%E1%83%90%E1%83%9C%E1%83%94%E1%83%A2%E1%83%94%E1%83%91%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/3d-xis-planetebi/",
    "inStock": true
  },
  {
    "id": "p_extra_127",
    "name": "Saskolo chanta unicorn",
    "categoryName": "საბავშვო",
    "categorySlug": "sabavshvo-satamashoebi",
    "price": 55,
    "image": "https://astroman.ge/wp-content/uploads/2023/08/-%E1%83%A9%E1%83%90%E1%83%9C%E1%83%97%E1%83%90-Unicorn-1-jpg.webp",
    "link": "https://astroman.ge/saskolo-chanta-unicorn/",
    "inStock": true
  },
  {
    "id": "p_extra_128",
    "name": "Სასკოლო ჩანთა explore cosmos",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2023/08/-%E1%83%A9%E1%83%90%E1%83%9C%E1%83%97%E1%83%90-jpg.webp",
    "link": "https://astroman.ge/%e1%83%a1%e1%83%90%e1%83%a1%e1%83%99%e1%83%9d%e1%83%9a%e1%83%9d-%e1%83%a9%e1%83%90%e1%83%9c%e1%83%97%e1%83%90-explore-cosmos/",
    "inStock": true
  },
  {
    "id": "p_extra_129",
    "name": "Penali vardisferi",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2023/08/-%E1%83%9E%E1%83%94%E1%83%9C%E1%83%90%E1%83%9A%E1%83%98-89-jpg.webp",
    "link": "https://astroman.ge/penali-vardisferi/",
    "inStock": true
  },
  {
    "id": "p_extra_130",
    "name": "Სასკოლო ჩანთა astrokid",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2023/08/-jpg.webp",
    "link": "https://astroman.ge/%e1%83%a1%e1%83%90%e1%83%a1%e1%83%99%e1%83%9d%e1%83%9a%e1%83%9d-%e1%83%a9%e1%83%90%e1%83%9c%e1%83%97%e1%83%90-astrokid/",
    "inStock": true
  },
  {
    "id": "p_extra_131",
    "name": "Satleli kosmonavti",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/10/-%E1%83%99%E1%83%9D%E1%83%A1%E1%83%9B%E1%83%9D%E1%83%9C%E1%83%90%E1%83%95%E1%83%A2%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/satleli-kosmonavti/",
    "inStock": true
  },
  {
    "id": "p_extra_132",
    "name": "Solar space set 6 in one",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/11/Solar-Space-Set-jpg.webp",
    "link": "https://astroman.ge/solar-space-set-6-in-one/",
    "inStock": true
  },
  {
    "id": "p_extra_133",
    "name": "Xis satamashoebi",
    "categoryName": "საბავშვო",
    "categorySlug": "sabavshvo-satamashoebi",
    "price": 55,
    "image": "https://astroman.ge/wp-content/uploads/2022/11/-%E1%83%9E%E1%83%9A%E1%83%90%E1%83%9C%E1%83%94%E1%83%A2%E1%83%94%E1%83%91%E1%83%981-jpg.webp",
    "link": "https://astroman.ge/xis-satamashoebi/",
    "inStock": true
  },
  {
    "id": "p_extra_134",
    "name": "Xis satamasho",
    "categoryName": "საბავშვო",
    "categorySlug": "sabavshvo-satamashoebi",
    "price": 55,
    "image": "https://astroman.ge/wp-content/uploads/2022/12/-%E1%83%90%E1%83%A1%E1%83%90%E1%83%AC%E1%83%A7%E1%83%9D%E1%83%91%E1%83%98-%E1%83%93%E1%83%90%E1%83%A4%E1%83%90-jpg.webp",
    "link": "https://astroman.ge/xis-satamasho/",
    "inStock": true
  },
  {
    "id": "p_extra_135",
    "name": "Satamasho raketa",
    "categoryName": "საბავშვო",
    "categorySlug": "sabavshvo-satamashoebi",
    "price": 55,
    "image": "https://astroman.ge/wp-content/uploads/2022/12/-%E1%83%92%E1%83%90%E1%83%A1%E1%83%90%E1%83%A8%E1%83%95%E1%83%94%E1%83%91%E1%83%98-%E1%83%A0%E1%83%90%E1%83%99%E1%83%94%E1%83%A2%E1%83%90-jpg.webp",
    "link": "https://astroman.ge/satamasho-raketa/",
    "inStock": true
  },
  {
    "id": "p_extra_136",
    "name": "Vr satvale",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2023/04/-%E1%83%A0%E1%83%94%E1%83%90%E1%83%9A%E1%83%9D%E1%83%91%E1%83%98%E1%83%A1-%E1%83%A1%E1%83%90%E1%83%97%E1%83%95%E1%83%90%E1%83%9A%E1%83%94-jpg.webp",
    "link": "https://astroman.ge/vr-satvale/",
    "inStock": true
  },
  {
    "id": "p_extra_137",
    "name": "Zurgchanta 30",
    "categoryName": "საბავშვო",
    "categorySlug": "sabavshvo-satamashoebi",
    "price": 55,
    "image": "https://astroman.ge/wp-content/uploads/2023/07/-30-%E1%83%A1%E1%83%9B-%E1%83%9A%E1%83%A3%E1%83%A0%E1%83%AF%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/zurgchanta-30/",
    "inStock": true
  },
  {
    "id": "p_extra_138",
    "name": "Zurgchanta bagis",
    "categoryName": "საბავშვო",
    "categorySlug": "sabavshvo-satamashoebi",
    "price": 55,
    "image": "https://astroman.ge/wp-content/uploads/2023/07/-%E1%83%91%E1%83%90%E1%83%A6%E1%83%98%E1%83%A1-jpg.webp",
    "link": "https://astroman.ge/zurgchanta-bagis/",
    "inStock": true
  },
  {
    "id": "p_extra_139",
    "name": "Saskolo chanta astronaut",
    "categoryName": "საბავშვო",
    "categorySlug": "sabavshvo-satamashoebi",
    "price": 55,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-Astronaut-jpg.webp",
    "link": "https://astroman.ge/saskolo-chanta-astronaut/",
    "inStock": true
  },
  {
    "id": "p_extra_140",
    "name": "Kedlis saati raketa",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A1%E1%83%90%E1%83%90%E1%83%97%E1%83%98-%E1%83%A0%E1%83%90%E1%83%99%E1%83%94%E1%83%A2%E1%83%90-jpg.webp",
    "link": "https://astroman.ge/kedlis-saati-raketa/",
    "inStock": true
  },
  {
    "id": "p_extra_141",
    "name": "Kedlis saati planetebi",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A1%E1%83%90%E1%83%90%E1%83%97%E1%83%98-%E1%83%9E%E1%83%9A%E1%83%90%E1%83%9C%E1%83%94%E1%83%A2%E1%83%94%E1%83%91%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/kedlis-saati-planetebi/",
    "inStock": true
  },
  {
    "id": "p_extra_142",
    "name": "Kedlis saati marsi",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A1%E1%83%90%E1%83%90%E1%83%97%E1%83%98-%E1%83%9B%E1%83%90%E1%83%A0%E1%83%A1%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/kedlis-saati-marsi/",
    "inStock": true
  },
  {
    "id": "p_extra_143",
    "name": "Saskolo chanta cosmokid",
    "categoryName": "საბავშვო",
    "categorySlug": "sabavshvo-satamashoebi",
    "price": 55,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A9%E1%83%90%E1%83%9C%E1%83%97%E1%83%90-Cosmokid-2-jpg.webp",
    "link": "https://astroman.ge/saskolo-chanta-cosmokid/",
    "inStock": true
  },
  {
    "id": "p_extra_144",
    "name": "Saskolo chanta spaceman",
    "categoryName": "საბავშვო",
    "categorySlug": "sabavshvo-satamashoebi",
    "price": 55,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A9%E1%83%90%E1%83%9C%E1%83%97%E1%83%90-Spaceman-jpg.webp",
    "link": "https://astroman.ge/saskolo-chanta-spaceman/",
    "inStock": true
  },
  {
    "id": "p_extra_145",
    "name": "Saskolo chanta cosmo",
    "categoryName": "საბავშვო",
    "categorySlug": "sabavshvo-satamashoebi",
    "price": 55,
    "image": "https://astroman.ge/wp-content/uploads/2022/10/-%E1%83%A9%E1%83%90%E1%83%9C%E1%83%97%E1%83%90-Cosmo-jpg.webp",
    "link": "https://astroman.ge/saskolo-chanta-cosmo/",
    "inStock": true
  },
  {
    "id": "p_extra_146",
    "name": "Saskolo chanta spacegirl",
    "categoryName": "საბავშვო",
    "categorySlug": "sabavshvo-satamashoebi",
    "price": 55,
    "image": "https://astroman.ge/wp-content/uploads/2022/10/-%E1%83%A9%E1%83%90%E1%83%9C%E1%83%97%E1%83%90-Spacegirl-jpg.webp",
    "link": "https://astroman.ge/saskolo-chanta-spacegirl/",
    "inStock": true
  },
  {
    "id": "p_extra_147",
    "name": "Penali raketa",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A0%E1%83%90%E1%83%99%E1%83%94%E1%83%A2%E1%83%90-jpg.webp",
    "link": "https://astroman.ge/penali-raketa/",
    "inStock": true
  },
  {
    "id": "p_extra_148",
    "name": "Კედლის სტიკერები",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/unnamed-file.jpeg",
    "link": "https://astroman.ge/%e1%83%99%e1%83%94%e1%83%93%e1%83%9a%e1%83%98%e1%83%a1-%e1%83%a1%e1%83%a2%e1%83%98%e1%83%99%e1%83%94%e1%83%a0%e1%83%94%e1%83%91%e1%83%98/",
    "inStock": true
  },
  {
    "id": "p_extra_149",
    "name": "Cyber truck",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/Tesla-Cyber-Truck-jpg.webp",
    "link": "https://astroman.ge/cyber-truck/",
    "inStock": true
  },
  {
    "id": "p_extra_150",
    "name": "Wignebis portatuli taro",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%9E%E1%83%9D%E1%83%A0%E1%83%A2%E1%83%90%E1%83%A2%E1%83%A3%E1%83%9A%E1%83%98-%E1%83%97%E1%83%90%E1%83%A0%E1%83%9D-jpg.webp",
    "link": "https://astroman.ge/wignebis-portatuli-taro/",
    "inStock": true
  },
  {
    "id": "p_extra_151",
    "name": "Sabavshvo sasachuqre yuti",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A1%E1%83%90%E1%83%A1%E1%83%90%E1%83%A9%E1%83%A3%E1%83%A5%E1%83%A0%E1%83%94-%E1%83%9C%E1%83%90%E1%83%99%E1%83%A0%E1%83%94%E1%83%91%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/sabavshvo-sasachuqre-yuti/",
    "inStock": true
  },
  {
    "id": "p_extra_152",
    "name": "Tvirmfrinavi 2cali",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-BOEING-2-%E1%83%AA%E1%83%90%E1%83%9A%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/tvirmfrinavi-2cali/",
    "inStock": true
  },
  {
    "id": "p_extra_153",
    "name": "Balishi jupiter",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/O1CN01tdFGn31Zs5QZiUGad_4227803249.jpg_400x400.jpg",
    "link": "https://astroman.ge/balishi-jupiter/",
    "inStock": true
  },
  {
    "id": "p_extra_154",
    "name": "Space shuttle",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A8%E1%83%90%E1%83%A2%E1%83%9A%E1%83%98%E1%83%A1-%E1%83%9B%E1%83%9D%E1%83%93%E1%83%94%E1%83%9A%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/space-shuttle/",
    "inStock": true
  },
  {
    "id": "p_extra_155",
    "name": "Distanciuri tvitmfrinavi",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%9B%E1%83%90%E1%83%A0%E1%83%97%E1%83%95%E1%83%90%E1%83%93%E1%83%98-%E1%83%97%E1%83%95%E1%83%98%E1%83%97%E1%83%9B%E1%83%A4%E1%83%A0%E1%83%98%E1%83%9C%E1%83%90%E1%83%95%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/distanciuri-tvitmfrinavi/",
    "inStock": true
  },
  {
    "id": "p_extra_156",
    "name": "Balishis gadasakravi",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%92%E1%83%90%E1%83%93%E1%83%90%E1%83%A1%E1%83%90%E1%83%99%E1%83%A0%E1%83%90%E1%83%95%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/balishis-gadasakravi/",
    "inStock": true
  },
  {
    "id": "p_extra_157",
    "name": "Სათამაშო კაფსულა",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%99%E1%83%90%E1%83%A4%E1%83%A1%E1%83%A3%E1%83%9A%E1%83%90-jpg.webp",
    "link": "https://astroman.ge/%e1%83%a1%e1%83%90%e1%83%97%e1%83%90%e1%83%9b%e1%83%90%e1%83%a8%e1%83%9d-%e1%83%99%e1%83%90%e1%83%a4%e1%83%a1%e1%83%a3%e1%83%9a%e1%83%90/",
    "inStock": true
  },
  {
    "id": "p_extra_158",
    "name": "Bushtebis nakrebi",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%9C%E1%83%90%E1%83%99%E1%83%A0%E1%83%94%E1%83%91%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/bushtebis-nakrebi/",
    "inStock": true
  },
  {
    "id": "p_extra_159",
    "name": "Bushtebis nakrebi2",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%91%E1%83%A3%E1%83%A8%E1%83%A2%E1%83%94%E1%83%91%E1%83%98%E1%83%A1-%E1%83%9C%E1%83%90%E1%83%99%E1%83%A0%E1%83%94%E1%83%91%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/bushtebis-nakrebi2/",
    "inStock": true
  },
  {
    "id": "p_extra_160",
    "name": "Planetebis burtebi",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%91%E1%83%A3%E1%83%A0%E1%83%97%E1%83%94%E1%83%91%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/planetebis-burtebi/",
    "inStock": true
  },
  {
    "id": "p_extra_161",
    "name": "Kedlis saati kosmo",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A1%E1%83%90%E1%83%90%E1%83%97%E1%83%98-2-jpg.webp",
    "link": "https://astroman.ge/kedlis-saati-kosmo/",
    "inStock": true
  },
  {
    "id": "p_extra_162",
    "name": "Space kulaba",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/Space-%E1%83%A7%E1%83%A3%E1%83%9A%E1%83%90%E1%83%91%E1%83%90-jpg.webp",
    "link": "https://astroman.ge/space-kulaba/",
    "inStock": true
  },
  {
    "id": "p_extra_163",
    "name": "Mysterious space",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/Mysterious-Space-jpg.webp",
    "link": "https://astroman.ge/mysterious-space/",
    "inStock": true
  },
  {
    "id": "p_extra_164",
    "name": "Penali kosmonavti",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-02.jpg",
    "link": "https://astroman.ge/penali-kosmonavti/",
    "inStock": true
  },
  {
    "id": "p_extra_165",
    "name": "Balishi space shuttle",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-Space-1-jpg.webp",
    "link": "https://astroman.ge/balishi-space-shuttle/",
    "inStock": true
  },
  {
    "id": "p_extra_166",
    "name": "Satamasho raketa 2",
    "categoryName": "საბავშვო",
    "categorySlug": "sabavshvo-satamashoebi",
    "price": 55,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A0%E1%83%90%E1%83%99%E1%83%94%E1%83%A2%E1%83%90-%E1%83%99%E1%83%9D%E1%83%A1%E1%83%9B%E1%83%9D%E1%83%9C%E1%83%90%E1%83%95%E1%83%A2%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/satamasho-raketa-2/",
    "inStock": true
  },
  {
    "id": "p_extra_167",
    "name": "Მაგნიტური მოდელი",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%9B%E1%83%9D%E1%83%93%E1%83%94%E1%83%9A%E1%83%98-1-jpg.webp",
    "link": "https://astroman.ge/%e1%83%9b%e1%83%90%e1%83%92%e1%83%9c%e1%83%98%e1%83%a2%e1%83%a3%e1%83%a0%e1%83%98-%e1%83%9b%e1%83%9d%e1%83%93%e1%83%94%e1%83%9a%e1%83%98/",
    "inStock": true
  },
  {
    "id": "p_extra_168",
    "name": "Satamashoebi nakrebi",
    "categoryName": "საბავშვო",
    "categorySlug": "sabavshvo-satamashoebi",
    "price": 55,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%9C%E1%83%90%E1%83%99%E1%83%A0%E1%83%94%E1%83%91%E1%83%98-%E1%83%99%E1%83%9D%E1%83%A1%E1%83%9B%E1%83%9D%E1%83%A1%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/satamashoebi-nakrebi/",
    "inStock": true
  },
  {
    "id": "p_extra_169",
    "name": "Mzis sistemis modeli",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A1%E1%83%98%E1%83%A1%E1%83%A2%E1%83%94%E1%83%9B%E1%83%98%E1%83%A1-%E1%83%90%E1%83%A1%E1%83%90%E1%83%AC%E1%83%A7%E1%83%9D%E1%83%91%E1%83%98-%E1%83%9B%E1%83%9D%E1%83%93%E1%83%94%E1%83%9A%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/mzis-sistemis-modeli/",
    "inStock": true
  },
  {
    "id": "p_extra_170",
    "name": "Dedamiwis modeli",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%90%E1%83%A1%E1%83%90%E1%83%AC%E1%83%A7%E1%83%9D%E1%83%91%E1%83%98-%E1%83%9B%E1%83%9D%E1%83%93%E1%83%94%E1%83%9A%E1%83%98-1-jpg.webp",
    "link": "https://astroman.ge/dedamiwis-modeli/",
    "inStock": true
  },
  {
    "id": "p_extra_171",
    "name": "Kedlis saati kosmonavt",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A1%E1%83%90%E1%83%90%E1%83%97%E1%83%98-%E1%83%90%E1%83%A1%E1%83%A2%E1%83%A0%E1%83%9D%E1%83%9C%E1%83%90%E1%83%95%E1%83%A2%E1%83%98-1-jpg.webp",
    "link": "https://astroman.ge/kedlis-saati-kosmonavt/",
    "inStock": true
  },
  {
    "id": "p_extra_172",
    "name": "Kedlis saati 2",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A1%E1%83%90%E1%83%90%E1%83%97%E1%83%98-%E1%83%90%E1%83%A1%E1%83%A2%E1%83%A0%E1%83%9D%E1%83%9C%E1%83%90%E1%83%95%E1%83%A2%E1%83%98-%E1%83%97%E1%83%94%E1%83%97%E1%83%A0%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/kedlis-saati-2/",
    "inStock": true
  },
  {
    "id": "p_extra_173",
    "name": "Satamasho roveri",
    "categoryName": "საბავშვო",
    "categorySlug": "sabavshvo-satamashoebi",
    "price": 55,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A0%E1%83%9D%E1%83%95%E1%83%94%E1%83%A0%E1%83%98-1-jpg.webp",
    "link": "https://astroman.ge/satamasho-roveri/",
    "inStock": true
  },
  {
    "id": "p_extra_174",
    "name": "Table decoration",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2024/11/88387323.jpg",
    "link": "https://astroman.ge/table-decoration/",
    "inStock": true
  },
  {
    "id": "p_extra_175",
    "name": "Iphone case",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/10/Iphone-Case-jpg.webp",
    "link": "https://astroman.ge/iphone-case/",
    "inStock": true
  },
  {
    "id": "p_extra_176",
    "name": "Mzis sistemis samajuri",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/10/-%E1%83%9B%E1%83%96%E1%83%98%E1%83%A1-%E1%83%A1%E1%83%98%E1%83%A1%E1%83%A2%E1%83%94%E1%83%9B%E1%83%90-M-jpg.webp",
    "link": "https://astroman.ge/mzis-sistemis-samajuri/",
    "inStock": true
  },
  {
    "id": "p_extra_177",
    "name": "Binocular 8x21",
    "categoryName": "ბინოკლები",
    "categorySlug": "binokli",
    "price": 180,
    "image": "https://astroman.ge/wp-content/uploads/2025/12/Document.jpg",
    "link": "https://astroman.ge/binocular-8x21/",
    "inStock": true
  },
  {
    "id": "p_extra_178",
    "name": "Dedamiwis yelsabami",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2023/05/-%E1%83%A7%E1%83%94%E1%83%9A%E1%83%A1%E1%83%90%E1%83%91%E1%83%90%E1%83%9B%E1%83%98-2-jpg.webp",
    "link": "https://astroman.ge/dedamiwis-yelsabami/",
    "inStock": true
  },
  {
    "id": "p_extra_179",
    "name": "Სამაჯური მზის სისტემა",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2024/02/-%E1%83%9B%E1%83%96%E1%83%98%E1%83%A1-%E1%83%A1%E1%83%98%E1%83%A1%E1%83%A2%E1%83%94%E1%83%9B%E1%83%90-2-jpg.webp",
    "link": "https://astroman.ge/%e1%83%a1%e1%83%90%e1%83%9b%e1%83%90%e1%83%af%e1%83%a3%e1%83%a0%e1%83%98-%e1%83%9b%e1%83%96%e1%83%98%e1%83%a1-%e1%83%a1%e1%83%98%e1%83%a1%e1%83%a2%e1%83%94%e1%83%9b%e1%83%90/",
    "inStock": true
  },
  {
    "id": "p_extra_180",
    "name": "Breloki kosmonavti m",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%99%E1%83%9D%E1%83%A1%E1%83%9B%E1%83%9D%E1%83%9C%E1%83%90%E1%83%95%E1%83%A2%E1%83%98-M-jpg.webp",
    "link": "https://astroman.ge/breloki-kosmonavti-m/",
    "inStock": true
  },
  {
    "id": "p_extra_181",
    "name": "Yelsabami naxevarmtvare",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%9C%E1%83%90%E1%83%AE%E1%83%94%E1%83%95%E1%83%90%E1%83%A0%E1%83%9B%E1%83%97%E1%83%95%E1%83%90%E1%83%A0%E1%83%94-1-1-jpg.webp",
    "link": "https://astroman.ge/yelsabami-naxevarmtvare/",
    "inStock": true
  },
  {
    "id": "p_extra_182",
    "name": "Planetebis brelokebi",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%91%E1%83%A0%E1%83%94%E1%83%9A%E1%83%9D%E1%83%99%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/planetebis-brelokebi/",
    "inStock": true
  },
  {
    "id": "p_extra_183",
    "name": "Mzis sistemis samajuri 2",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A1%E1%83%98%E1%83%A1%E1%83%A2%E1%83%94%E1%83%9B%E1%83%98%E1%83%A1-%E1%83%A1%E1%83%90%E1%83%9B%E1%83%90%E1%83%AF%E1%83%A3%E1%83%A0%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/mzis-sistemis-samajuri-2/",
    "inStock": true
  },
  {
    "id": "p_extra_184",
    "name": "Majis saati cosmos",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A1%E1%83%90%E1%83%90%E1%83%97%E1%83%98-Cosmos-jpg.webp",
    "link": "https://astroman.ge/majis-saati-cosmos/",
    "inStock": true
  },
  {
    "id": "p_extra_185",
    "name": "Qolga",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A5%E1%83%9D%E1%83%9A%E1%83%92%E1%83%90-jpg.webp",
    "link": "https://astroman.ge/qolga/",
    "inStock": true
  },
  {
    "id": "p_extra_186",
    "name": "Saturni kosmonavti breloki",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A1%E1%83%90%E1%83%A2%E1%83%A3%E1%83%A0%E1%83%9C%E1%83%98-%E1%83%99%E1%83%9D%E1%83%A1%E1%83%9B%E1%83%9D%E1%83%9C%E1%83%90%E1%83%95%E1%83%A2%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/saturni-kosmonavti-breloki/",
    "inStock": true
  },
  {
    "id": "p_extra_187",
    "name": "Breloki kosmonavti",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%99%E1%83%9D%E1%83%A1%E1%83%9B%E1%83%9D%E1%83%9C%E1%83%90%E1%83%95%E1%83%A2%E1%83%98-3-jpg.webp",
    "link": "https://astroman.ge/breloki-kosmonavti/",
    "inStock": true
  },
  {
    "id": "p_extra_188",
    "name": "Სამაჯური 3",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%9E%E1%83%9A%E1%83%90%E1%83%9C%E1%83%94%E1%83%A2%E1%83%94%E1%83%91%E1%83%98-3-jpg.webp",
    "link": "https://astroman.ge/%e1%83%a1%e1%83%90%e1%83%9b%e1%83%90%e1%83%af%e1%83%a3%e1%83%a0%e1%83%98-3/",
    "inStock": true
  },
  {
    "id": "p_extra_189",
    "name": "Samajuri 3",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/Screenshot-2025-11-10-at-18.08.26-1.png",
    "link": "https://astroman.ge/samajuri-3/",
    "inStock": true
  },
  {
    "id": "p_extra_190",
    "name": "Samajuri 5",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%9E%E1%83%9A%E1%83%90%E1%83%9C%E1%83%94%E1%83%A2%E1%83%90-5-jpg.webp",
    "link": "https://astroman.ge/samajuri-5/",
    "inStock": true
  },
  {
    "id": "p_extra_191",
    "name": "Breloki kosmonavti lurji",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%90%E1%83%A1%E1%83%A2%E1%83%A0%E1%83%9D%E1%83%9C%E1%83%90%E1%83%95%E1%83%A2%E1%83%98-%E1%83%9A%E1%83%A3%E1%83%A0%E1%83%AF%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/breloki-kosmonavti-lurji/",
    "inStock": true
  },
  {
    "id": "p_extra_192",
    "name": "Fosforis kelsabami",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A7%E1%83%94%E1%83%9A%E1%83%A1%E1%83%90%E1%83%91%E1%83%90%E1%83%9B%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/fosforis-kelsabami/",
    "inStock": true
  },
  {
    "id": "p_extra_193",
    "name": "Varskvlavuri ruka jupiter",
    "categoryName": "ვარსკვლავური რუკა",
    "categorySlug": "varskvlavuri-ruka",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A0%E1%83%A3%E1%83%99%E1%83%90-%E1%83%95%E1%83%90%E1%83%9C-%E1%83%92%E1%83%9D%E1%83%92%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/varskvlavuri-ruka-jupiter/",
    "inStock": true
  },
  {
    "id": "p_extra_194",
    "name": "Breloki astronavti",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%90%E1%83%A1%E1%83%A2%E1%83%A0%E1%83%9D%E1%83%9C%E1%83%90%E1%83%95%E1%83%A2%E1%83%98-1-jpg.webp",
    "link": "https://astroman.ge/breloki-astronavti/",
    "inStock": true
  },
  {
    "id": "p_extra_195",
    "name": "Yelsabami saturni 4",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/H850b4346771c484abf8b430468da60e17.jpg",
    "link": "https://astroman.ge/yelsabami-saturni-4/",
    "inStock": true
  },
  {
    "id": "p_extra_196",
    "name": "Ყელსაბამი სატურნი 2",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A7%E1%83%94%E1%83%9A%E1%83%A1%E1%83%90%E1%83%91%E1%83%90%E1%83%9B%E1%83%987-jpg.webp",
    "link": "https://astroman.ge/%e1%83%a7%e1%83%94%e1%83%9a%e1%83%a1%e1%83%90%e1%83%91%e1%83%90%e1%83%9b%e1%83%98-%e1%83%a1%e1%83%90%e1%83%a2%e1%83%a3%e1%83%a0%e1%83%9c%e1%83%98-2/",
    "inStock": true
  },
  {
    "id": "p_extra_197",
    "name": "Yelsabami saturni 2",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A7%E1%83%94%E1%83%9A%E1%83%A1%E1%83%90%E1%83%91%E1%83%90%E1%83%9B%E1%83%98-45-jpg.webp",
    "link": "https://astroman.ge/yelsabami-saturni-2/",
    "inStock": true
  },
  {
    "id": "p_extra_198",
    "name": "Yelsabami saturni",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A7%E1%83%94%E1%83%9A%E1%83%A1%E1%83%90%E1%83%91%E1%83%90%E1%83%9B%E1%83%988-jpg.webp",
    "link": "https://astroman.ge/yelsabami-saturni/",
    "inStock": true
  },
  {
    "id": "p_extra_199",
    "name": "Yelsabami saturnn",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A1%E1%83%90%E1%83%9B%E1%83%90%E1%83%AF%E1%83%A3%E1%83%A0%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/yelsabami-saturnn/",
    "inStock": true
  },
  {
    "id": "p_extra_200",
    "name": "Yelsabami saturni7",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A7%E1%83%94%E1%83%9A%E1%83%A1%E1%83%90%E1%83%91%E1%83%90%E1%83%9B%E1%83%9810-jpg.webp",
    "link": "https://astroman.ge/yelsabami-saturni7/",
    "inStock": true
  },
  {
    "id": "p_extra_201",
    "name": "Star map aurora",
    "categoryName": "ვარსკვლავური რუკა",
    "categorySlug": "varskvlavuri-ruka",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A0%E1%83%A3%E1%83%99%E1%83%90-%E1%83%90%E1%83%A3%E1%83%A0%E1%83%9D%E1%83%A0%E1%83%90-jpg.webp",
    "link": "https://astroman.ge/star-map-aurora/",
    "inStock": true
  },
  {
    "id": "p_extra_202",
    "name": "Piradi ruka",
    "categoryName": "ვარსკვლავური რუკა",
    "categorySlug": "varskvlavuri-ruka",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A0%E1%83%A3%E1%83%99%E1%83%90-%E1%83%9D%E1%83%A0%E1%83%98-%E1%83%9A%E1%83%9D%E1%83%99%E1%83%90%E1%83%AA%E1%83%98%E1%83%90-jpg.webp",
    "link": "https://astroman.ge/piradi-ruka/",
    "inStock": true
  },
  {
    "id": "p_extra_203",
    "name": "Moon map",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A0%E1%83%A3%E1%83%99%E1%83%90-jpg.webp",
    "link": "https://astroman.ge/moon-map/",
    "inStock": true
  },
  {
    "id": "p_extra_204",
    "name": "Piradi ruka varskvlavebi",
    "categoryName": "ვარსკვლავური რუკა",
    "categorySlug": "varskvlavuri-ruka",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A0%E1%83%A3%E1%83%99%E1%83%90-%E1%83%9A%E1%83%A3%E1%83%A0%E1%83%AF%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/piradi-ruka-varskvlavebi/",
    "inStock": true
  },
  {
    "id": "p_extra_205",
    "name": "Piradi ruka galaxy",
    "categoryName": "ვარსკვლავური რუკა",
    "categorySlug": "varskvlavuri-ruka",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A0%E1%83%A3%E1%83%99%E1%83%90-%E1%83%92%E1%83%90%E1%83%9A%E1%83%90%E1%83%A5%E1%83%A1%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/piradi-ruka-galaxy/",
    "inStock": true
  },
  {
    "id": "p_extra_206",
    "name": "Varskvlavuri ruka nebula",
    "categoryName": "ვარსკვლავური რუკა",
    "categorySlug": "varskvlavuri-ruka",
    "price": 65,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A0%E1%83%A3%E1%83%99%E1%83%90-%E1%83%9C%E1%83%94%E1%83%91%E1%83%A3%E1%83%9A%E1%83%90-jpg.webp",
    "link": "https://astroman.ge/varskvlavuri-ruka-nebula/",
    "inStock": true
  },
  {
    "id": "p_extra_207",
    "name": "Saskolo chanta kosmonavti lurji",
    "categoryName": "საბავშვო",
    "categorySlug": "sabavshvo-satamashoebi",
    "price": 55,
    "image": "https://astroman.ge/wp-content/uploads/2026/09/blue_hero.jpg",
    "link": "https://astroman.ge/saskolo-chanta-kosmonavti-lurji/",
    "inStock": true
  },
  {
    "id": "p_extra_208",
    "name": "School bag pixel green",
    "categoryName": "საბავშვო",
    "categorySlug": "sabavshvo-satamashoebi",
    "price": 55,
    "image": "https://astroman.ge/wp-content/uploads/2026/09/pixel-green_hero.jpg",
    "link": "https://astroman.ge/school-bag-pixel-green/",
    "inStock": true
  },
  {
    "id": "p_extra_209",
    "name": "School bag blocky blue",
    "categoryName": "საბავშვო",
    "categorySlug": "sabavshvo-satamashoebi",
    "price": 55,
    "image": "https://astroman.ge/wp-content/uploads/2026/09/blocky-blue_hero.jpg",
    "link": "https://astroman.ge/school-bag-blocky-blue/",
    "inStock": true
  },
  {
    "id": "p_extra_210",
    "name": "Kosmosuri yuti",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/12/-%E1%83%A7%E1%83%A3%E1%83%97%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/kosmosuri-yuti/",
    "inStock": true
  },
  {
    "id": "p_extra_211",
    "name": "Mexsierebis barati",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2023/01/-%E1%83%91%E1%83%90%E1%83%A0%E1%83%90%E1%83%97%E1%83%98-64GB-%E1%83%99%E1%83%9D%E1%83%A1%E1%83%9B%E1%83%9D%E1%83%9C%E1%83%90%E1%83%95%E1%83%A2%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/mexsierebis-barati/",
    "inStock": true
  },
  {
    "id": "p_extra_212",
    "name": "Astronaut big box",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2023/02/Astronaut-Big-Box-jpg.webp",
    "link": "https://astroman.ge/astronaut-big-box/",
    "inStock": true
  },
  {
    "id": "p_extra_213",
    "name": "Vr glasses",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2023/04/VR-%E1%83%A1%E1%83%90%E1%83%97%E1%83%95%E1%83%90%E1%83%9A%E1%83%94-%E1%83%A7%E1%83%A3%E1%83%A0%E1%83%A1%E1%83%90%E1%83%A1%E1%83%9B%E1%83%94%E1%83%9C%E1%83%94%E1%83%91%E1%83%98%E1%83%97-jpg.webp",
    "link": "https://astroman.ge/vr-glasses/",
    "inStock": true
  },
  {
    "id": "p_extra_214",
    "name": "Balishi raketa",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2023/05/-%E1%83%A0%E1%83%90%E1%83%99%E1%83%94%E1%83%A2%E1%83%90-jpg.webp",
    "link": "https://astroman.ge/balishi-raketa/",
    "inStock": true
  },
  {
    "id": "p_extra_215",
    "name": "Kosmosuri chiqa",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2023/06/-%E1%83%AD%E1%83%98%E1%83%A5%E1%83%90-1-jpg.webp",
    "link": "https://astroman.ge/kosmosuri-chiqa/",
    "inStock": true
  },
  {
    "id": "p_extra_216",
    "name": "Termosi",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2023/09/-%E1%83%97%E1%83%94%E1%83%A0%E1%83%9B%E1%83%9D%E1%83%A1%E1%83%98-89-jpg.webp",
    "link": "https://astroman.ge/termosi/",
    "inStock": true
  },
  {
    "id": "p_extra_217",
    "name": "Იატაკის საფენი",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2023/11/-%E1%83%A1%E1%83%90%E1%83%A4%E1%83%94%E1%83%9C%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/%e1%83%98%e1%83%90%e1%83%a2%e1%83%90%e1%83%99%e1%83%98%e1%83%a1-%e1%83%a1%e1%83%90%e1%83%a4%e1%83%94%e1%83%9c%e1%83%98/",
    "inStock": true
  },
  {
    "id": "p_extra_218",
    "name": "Suratis charcho",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2024/10/00912.jpg",
    "link": "https://astroman.ge/suratis-charcho/",
    "inStock": true
  },
  {
    "id": "p_extra_219",
    "name": "Wall hang",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2024/11/88293.jpg",
    "link": "https://astroman.ge/wall-hang/",
    "inStock": true
  },
  {
    "id": "p_extra_220",
    "name": "Macivris magnitebi",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%9B%E1%83%98%E1%83%A1%E1%83%90%E1%83%99%E1%83%A0%E1%83%9D%E1%83%91%E1%83%94%E1%83%91%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/macivris-magnitebi/",
    "inStock": true
  },
  {
    "id": "p_extra_221",
    "name": "Chiqa mrgvali",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%90%E1%83%A1%E1%83%A2%E1%83%A0%E1%83%9D%E1%83%9C%E1%83%90%E1%83%95%E1%83%A2%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/chiqa-mrgvali/",
    "inStock": true
  },
  {
    "id": "p_extra_222",
    "name": "Sadgesaswaulo qudi",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%A5%E1%83%A3%E1%83%93%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/sadgesaswaulo-qudi/",
    "inStock": true
  },
  {
    "id": "p_extra_223",
    "name": "Volcano",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/Volcano-1-jpg.webp",
    "link": "https://astroman.ge/volcano/",
    "inStock": true
  },
  {
    "id": "p_extra_224",
    "name": "Cyber glasses",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/cyber-glasses-jpg.webp",
    "link": "https://astroman.ge/cyber-glasses/",
    "inStock": true
  },
  {
    "id": "p_extra_225",
    "name": "Chiqis sasachukre nakrebi",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%AD%E1%83%98%E1%83%A5%E1%83%98%E1%83%A1-%E1%83%A1%E1%83%90%E1%83%A1%E1%83%90%E1%83%A9%E1%83%A3%E1%83%A5%E1%83%A0%E1%83%94-%E1%83%9C%E1%83%90%E1%83%99%E1%83%A0%E1%83%94%E1%83%91%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/chiqis-sasachukre-nakrebi/",
    "inStock": true
  },
  {
    "id": "p_extra_226",
    "name": "Telefonis sadgami",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/10/-%E1%83%A1%E1%83%90%E1%83%93%E1%83%92%E1%83%90%E1%83%9B%E1%83%98-%E1%83%99%E1%83%9D%E1%83%A1%E1%83%9B%E1%83%9D%E1%83%9C%E1%83%90%E1%83%95%E1%83%A2%E1%83%98-jpg.webp",
    "link": "https://astroman.ge/telefonis-sadgami/",
    "inStock": true
  },
  {
    "id": "p_extra_227",
    "name": "Chiqa",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%AD%E1%83%98%E1%83%A5%E1%83%94%E1%83%91%E1%83%98-4-jpg.webp",
    "link": "https://astroman.ge/chiqa/",
    "inStock": true
  },
  {
    "id": "p_extra_228",
    "name": "Balishi mtvare",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%9B%E1%83%97%E1%83%95%E1%83%90%E1%83%A0%E1%83%94-1-jpg.webp",
    "link": "https://astroman.ge/balishi-mtvare/",
    "inStock": true
  },
  {
    "id": "p_extra_229",
    "name": "Balishi dedamitsa",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%93%E1%83%94%E1%83%93%E1%83%90%E1%83%9B%E1%83%98%E1%83%AC%E1%83%90-1-jpg.webp",
    "link": "https://astroman.ge/balishi-dedamitsa/",
    "inStock": true
  },
  {
    "id": "p_extra_230",
    "name": "Kosmosuri stikerebi",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-2-jpg.webp",
    "link": "https://astroman.ge/kosmosuri-stikerebi/",
    "inStock": true
  },
  {
    "id": "p_extra_231",
    "name": "Prizma",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-6-jpg.webp",
    "link": "https://astroman.ge/prizma/",
    "inStock": true
  },
  {
    "id": "p_extra_232",
    "name": "Ასაწყობი პაზლი დედამიწა",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/%E1%83%93%E1%83%94%E1%83%93%E1%83%90%E1%83%9B%E1%83%98%E1%83%AC%E1%83%98%E1%83%A1-%E1%83%9E%E1%83%90%E1%83%96%E1%83%9A%E1%83%98.jpg",
    "link": "https://astroman.ge/%e1%83%90%e1%83%a1%e1%83%90%e1%83%ac%e1%83%a7%e1%83%9d%e1%83%91%e1%83%98-%e1%83%9e%e1%83%90%e1%83%96%e1%83%9a%e1%83%98-%e1%83%93%e1%83%94%e1%83%93%e1%83%90%e1%83%9b%e1%83%98%e1%83%ac%e1%83%90/",
    "inStock": true
  },
  {
    "id": "p_extra_233",
    "name": "Ასაწყობი პაზლი მთვარე",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-%E1%83%90%E1%83%A1%E1%83%90%E1%83%AC%E1%83%A7%E1%83%9D%E1%83%91%E1%83%98-%E1%83%9E%E1%83%90%E1%83%96%E1%83%9A%E1%83%98-4-jpg.webp",
    "link": "https://astroman.ge/%e1%83%90%e1%83%a1%e1%83%90%e1%83%ac%e1%83%a7%e1%83%9d%e1%83%91%e1%83%98-%e1%83%9e%e1%83%90%e1%83%96%e1%83%9a%e1%83%98-%e1%83%9b%e1%83%97%e1%83%95%e1%83%90%e1%83%a0%e1%83%94/",
    "inStock": true
  },
  {
    "id": "p_extra_234",
    "name": "Bloknoti",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/-2-jpg.webp",
    "link": "https://astroman.ge/bloknoti/",
    "inStock": true
  },
  {
    "id": "p_extra_235",
    "name": "Vynil player",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2024/03/34-1-scaled.webp",
    "link": "https://astroman.ge/vynil-player/",
    "inStock": true
  },
  {
    "id": "p_extra_236",
    "name": "Visionking telescope 70mm",
    "categoryName": "ტელესკოპები",
    "categorySlug": "teleskopi",
    "price": 950,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/Visionking-Telescope-jpg.webp",
    "link": "https://astroman.ge/visionking-telescope-70mm/",
    "inStock": true
  },
  {
    "id": "p_extra_237",
    "name": "Vixen nature eye 50 360 az1 telescope",
    "categoryName": "ტელესკოპები",
    "categorySlug": "teleskopi",
    "price": 950,
    "image": "https://astroman.ge/wp-content/uploads/2024/11/778273.jpg",
    "link": "https://astroman.ge/vixen-nature-eye-50-360-az1-telescope/",
    "inStock": true
  },
  {
    "id": "p_extra_238",
    "name": "Astronomical telescope",
    "categoryName": "ტელესკოპები",
    "categorySlug": "teleskopi",
    "price": 950,
    "image": "https://astroman.ge/wp-content/uploads/2026/02/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-02-1.jpg",
    "link": "https://astroman.ge/astronomical-telescope/",
    "inStock": true
  },
  {
    "id": "p_extra_239",
    "name": "National geographic refractor telescope 70 900 ng",
    "categoryName": "ტელესკოპები",
    "categorySlug": "teleskopi",
    "price": 950,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/22122.jpg",
    "link": "https://astroman.ge/national-geographic-refractor-telescope-70-900-ng/",
    "inStock": true
  },
  {
    "id": "p_extra_240",
    "name": "Foreseen 400 70 telescope",
    "categoryName": "ტელესკოპები",
    "categorySlug": "teleskopi",
    "price": 950,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/foreseen-tescope-jpg.webp",
    "link": "https://astroman.ge/foreseen-400-70-telescope/",
    "inStock": true
  },
  {
    "id": "p_extra_241",
    "name": "National geographic 76 350 telescope",
    "categoryName": "ტელესკოპები",
    "categorySlug": "teleskopi",
    "price": 950,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/National-Geographic-jpg.webp",
    "link": "https://astroman.ge/national-geographic-76-350-telescope/",
    "inStock": true
  },
  {
    "id": "p_extra_242",
    "name": "National geographic telescope 2",
    "categoryName": "ტელესკოპები",
    "categorySlug": "teleskopi",
    "price": 950,
    "image": "https://astroman.ge/wp-content/uploads/2022/12/8878721.jpg",
    "link": "https://astroman.ge/national-geographic-telescope-2/",
    "inStock": true
  },
  {
    "id": "p_extra_243",
    "name": "Sabavshvo teleskopi",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/12/3442.jpg",
    "link": "https://astroman.ge/sabavshvo-teleskopi/",
    "inStock": true
  },
  {
    "id": "p_extra_244",
    "name": "National geographic 50 600",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2023/11/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-02.jpg",
    "link": "https://astroman.ge/national-geographic-50-600/",
    "inStock": true
  },
  {
    "id": "p_extra_245",
    "name": "Ტელესკოპი firstscope moon",
    "categoryName": "ტელესკოპები",
    "categorySlug": "teleskopi",
    "price": 950,
    "image": "https://astroman.ge/wp-content/uploads/2024/11/22.jpg",
    "link": "https://astroman.ge/%e1%83%a2%e1%83%94%e1%83%9a%e1%83%94%e1%83%a1%e1%83%99%e1%83%9d%e1%83%9e%e1%83%98-firstscope-moon/",
    "inStock": true
  },
  {
    "id": "p_extra_246",
    "name": "Bresser junior 76 300",
    "categoryName": "ტელესკოპები",
    "categorySlug": "teleskopi",
    "price": 950,
    "image": "https://astroman.ge/wp-content/uploads/2024/11/222.jpg",
    "link": "https://astroman.ge/bresser-junior-76-300/",
    "inStock": true
  },
  {
    "id": "p_extra_247",
    "name": "Travel scope 50mm",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2025/12/Document-1.jpg",
    "link": "https://astroman.ge/travel-scope-50mm/",
    "inStock": true
  },
  {
    "id": "p_extra_248",
    "name": "National geographic refractor telescope 90 900 eq3",
    "categoryName": "ტელესკოპები",
    "categorySlug": "teleskopi",
    "price": 950,
    "image": "https://astroman.ge/wp-content/uploads/2022/12/-90-jpg.webp",
    "link": "https://astroman.ge/national-geographic-refractor-telescope-90-900-eq3/",
    "inStock": true
  },
  {
    "id": "p_extra_249",
    "name": "National geographic 76700",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2024/08/0144181_national-geographic-114900-reflector-telescope-az_550.jpeg",
    "link": "https://astroman.ge/national-geographic-76700/",
    "inStock": true
  },
  {
    "id": "p_extra_250",
    "name": "Telescope foreseen",
    "categoryName": "ტელესკოპები",
    "categorySlug": "teleskopi",
    "price": 950,
    "image": "https://astroman.ge/wp-content/uploads/2024/08/Telescope.jpg",
    "link": "https://astroman.ge/telescope-foreseen/",
    "inStock": true
  },
  {
    "id": "p_extra_251",
    "name": "Celestron travel scope 70 dx",
    "categoryName": "ტელესკოპები",
    "categorySlug": "teleskopi",
    "price": 950,
    "image": "https://astroman.ge/wp-content/uploads/2024/11/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-02.jpg",
    "link": "https://astroman.ge/celestron-travel-scope-70-dx/",
    "inStock": true
  },
  {
    "id": "p_extra_252",
    "name": "National geographic refractor telescope",
    "categoryName": "ტელესკოპები",
    "categorySlug": "teleskopi",
    "price": 950,
    "image": "https://astroman.ge/wp-content/uploads/2025/11/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-02.jpg",
    "link": "https://astroman.ge/national-geographic-refractor-telescope/",
    "inStock": true
  },
  {
    "id": "p_extra_253",
    "name": "Bresser venus 76 700 az telescope",
    "categoryName": "ტელესკოპები",
    "categorySlug": "teleskopi",
    "price": 950,
    "image": "https://astroman.ge/wp-content/uploads/2025/12/2221.jpg",
    "link": "https://astroman.ge/bresser-venus-76-700-az-telescope/",
    "inStock": true
  },
  {
    "id": "p_extra_254",
    "name": "Telescope foreseen 80mm",
    "categoryName": "ტელესკოპები",
    "categorySlug": "teleskopi",
    "price": 950,
    "image": "https://astroman.ge/wp-content/uploads/2024/08/Telescope.jpg",
    "link": "https://astroman.ge/telescope-foreseen-80mm/",
    "inStock": true
  },
  {
    "id": "p_extra_255",
    "name": "Bresser sirius 70 900 az",
    "categoryName": "ტელესკოპები",
    "categorySlug": "teleskopi",
    "price": 950,
    "image": "https://astroman.ge/wp-content/uploads/2026/06/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-02-1.jpg",
    "link": "https://astroman.ge/bresser-sirius-70-900-az/",
    "inStock": true
  },
  {
    "id": "p_extra_256",
    "name": "Teleskopi avtomaturi",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2022/09/National-Geographic-Automatic-jpg.webp",
    "link": "https://astroman.ge/teleskopi-avtomaturi/",
    "inStock": true
  },
  {
    "id": "p_extra_257",
    "name": "Celestron astromaster 70az",
    "categoryName": "ტელესკოპები",
    "categorySlug": "teleskopi",
    "price": 950,
    "image": "https://astroman.ge/wp-content/uploads/2024/11/23312.jpg",
    "link": "https://astroman.ge/celestron-astromaster-70az/",
    "inStock": true
  },
  {
    "id": "p_extra_258",
    "name": "Astromaster 114eq telescope",
    "categoryName": "ტელესკოპები",
    "categorySlug": "teleskopi",
    "price": 950,
    "image": "https://astroman.ge/wp-content/uploads/2026/05/11.jpg",
    "link": "https://astroman.ge/astromaster-114eq-telescope/",
    "inStock": true
  },
  {
    "id": "p_extra_259",
    "name": "Celestron starsense explorer lt 70az",
    "categoryName": "ტელესკოპები",
    "categorySlug": "teleskopi",
    "price": 950,
    "image": "https://astroman.ge/wp-content/uploads/2026/09/celestron-starsense-explorer-lt-70az-telescope-01.jpg",
    "link": "https://astroman.ge/celestron-starsense-explorer-lt-70az/",
    "inStock": true
  },
  {
    "id": "p_extra_260",
    "name": "Starsense explorer dx 102 refractor",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2026/05/112.jpg",
    "link": "https://astroman.ge/starsense-explorer-dx-102-refractor/",
    "inStock": true
  },
  {
    "id": "p_extra_261",
    "name": "Bresser automatik 80 400 goto",
    "categoryName": "ტელესკოპები",
    "categorySlug": "teleskopi",
    "price": 950,
    "image": "https://astroman.ge/wp-content/uploads/2026/06/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-02.jpg",
    "link": "https://astroman.ge/bresser-automatik-80-400-goto/",
    "inStock": true
  },
  {
    "id": "p_extra_262",
    "name": "Celestron nexstar 90slt computerized telescope",
    "categoryName": "ტელესკოპები",
    "categorySlug": "teleskopi",
    "price": 950,
    "image": "https://astroman.ge/wp-content/uploads/2024/11/1222.jpg",
    "link": "https://astroman.ge/celestron-nexstar-90slt-computerized-telescope/",
    "inStock": true
  },
  {
    "id": "p_extra_263",
    "name": "National geographic 300x 1200x microscope",
    "categoryName": "მიკროსკოპები",
    "categorySlug": "mikroskopi",
    "price": 210,
    "image": "https://astroman.ge/wp-content/uploads/2024/11/782.jpg",
    "link": "https://astroman.ge/national-geographic-300x-1200x-microscope/",
    "inStock": true
  },
  {
    "id": "p_extra_264",
    "name": "National geographic telescope microscope set",
    "categoryName": "ტელესკოპები",
    "categorySlug": "teleskopi",
    "price": 950,
    "image": "https://astroman.ge/wp-content/uploads/2024/11/9982.jpg",
    "link": "https://astroman.ge/national-geographic-telescope-microscope-set/",
    "inStock": true
  },
  {
    "id": "p_extra_265",
    "name": "Vinrage monocular",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2025/01/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-02.jpg",
    "link": "https://astroman.ge/vinrage-monocular/",
    "inStock": true
  },
  {
    "id": "p_extra_266",
    "name": "Nexstar 4se computerized telescope",
    "categoryName": "ტელესკოპები",
    "categorySlug": "teleskopi",
    "price": 950,
    "image": "https://astroman.ge/wp-content/uploads/2025/09/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-02.jpg",
    "link": "https://astroman.ge/nexstar-4se-computerized-telescope/",
    "inStock": true
  },
  {
    "id": "p_extra_267",
    "name": "National geographic microscope set",
    "categoryName": "მიკროსკოპები",
    "categorySlug": "mikroskopi",
    "price": 210,
    "image": "https://astroman.ge/wp-content/uploads/2025/12/Screenshot-2025-12-12-at-13.36.13.png",
    "link": "https://astroman.ge/national-geographic-microscope-set/",
    "inStock": true
  },
  {
    "id": "p_extra_268",
    "name": "Starsense explorerr telescope",
    "categoryName": "ტელესკოპები",
    "categorySlug": "teleskopi",
    "price": 950,
    "image": "https://astroman.ge/wp-content/uploads/2026/05/2233.jpg",
    "link": "https://astroman.ge/starsense-explorerr-telescope/",
    "inStock": true
  },
  {
    "id": "p_extra_269",
    "name": "Nexstar 6slt computerized telescope",
    "categoryName": "ტელესკოპები",
    "categorySlug": "teleskopi",
    "price": 950,
    "image": "https://astroman.ge/wp-content/uploads/2026/05/%E1%83%91%E1%83%94%E1%83%A5%E1%83%98-02-1.jpg",
    "link": "https://astroman.ge/nexstar-6slt-computerized-telescope/",
    "inStock": true
  },
  {
    "id": "p_extra_270",
    "name": "Cosmonaut nebula projector",
    "categoryName": "პროექტორები",
    "categorySlug": "proeqtorebi",
    "price": 120,
    "image": "https://astroman.ge/wp-content/uploads/2022/12/Cosmonaut-Nebula-Projector-1-jpg.webp",
    "link": "https://astroman.ge/cosmonaut-nebula-projector/",
    "inStock": true
  },
  {
    "id": "p_extra_271",
    "name": "Usb გალაქტიკის პროექტორი",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2026/10/usb-galaqtikis-proeqtori.jpg",
    "link": "https://astroman.ge/usb-%e1%83%92%e1%83%90%e1%83%9a%e1%83%90%e1%83%a5%e1%83%a2%e1%83%98%e1%83%99%e1%83%98%e1%83%a1-%e1%83%9e%e1%83%a0%e1%83%9d%e1%83%94%e1%83%a5%e1%83%a2%e1%83%9d%e1%83%a0%e1%83%98/",
    "inStock": true
  },
  {
    "id": "p_extra_272",
    "name": "Tesla electric speaker",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2026/10/musikaluri-teslas-koci.jpg",
    "link": "https://astroman.ge/tesla-electric-speaker/",
    "inStock": true
  },
  {
    "id": "p_extra_273",
    "name": "Ქვიშის საათი ჩანჩქერი",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2026/10/qviSis-saati-lurji.jpg",
    "link": "https://astroman.ge/%e1%83%a5%e1%83%95%e1%83%98%e1%83%a8%e1%83%98%e1%83%a1-%e1%83%a1%e1%83%90%e1%83%90%e1%83%97%e1%83%98-%e1%83%a9%e1%83%90%e1%83%9c%e1%83%a9%e1%83%a5%e1%83%94%e1%83%a0%e1%83%98/",
    "inStock": true
  },
  {
    "id": "p_extra_274",
    "name": "Ქვიშის საათი ხის ჩარჩოთი",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2026/10/qvishis-saati-xis-1.jpg",
    "link": "https://astroman.ge/%e1%83%a5%e1%83%95%e1%83%98%e1%83%a8%e1%83%98%e1%83%a1-%e1%83%a1%e1%83%90%e1%83%90%e1%83%97%e1%83%98-%e1%83%ae%e1%83%98%e1%83%a1-%e1%83%a9%e1%83%90%e1%83%a0%e1%83%a9%e1%83%9d%e1%83%97%e1%83%98/",
    "inStock": true
  },
  {
    "id": "p_extra_275",
    "name": "Ნიუტონის ქანქარა",
    "categoryName": "აქსესუარები",
    "categorySlug": "aqsesuarebi",
    "price": 45,
    "image": "https://astroman.ge/wp-content/uploads/2026/10/niutonis-qanqara-n1.jpg",
    "link": "https://astroman.ge/%e1%83%9c%e1%83%98%e1%83%a3%e1%83%a2%e1%83%9d%e1%83%9c%e1%83%98%e1%83%a1-%e1%83%a5%e1%83%90%e1%83%9c%e1%83%a5%e1%83%90%e1%83%a0%e1%83%90/",
    "inStock": true
  }
];

export const ALL_PRODUCTS: Product[] = [
  ...EXTRA_PRODUCTS,
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
