import {
  Telescope,
  Projector,
  Lamp,
  Compass,
  Sparkles,
  Cpu,
  Gamepad2,
  Watch,
  Boxes,
  type LucideIcon,
} from "lucide-react";

export interface Category {
  slug: string;
  name: string;
  icon: LucideIcon;
  color: string;
  externalUrl?: string;
}

export const CATEGORIES: Category[] = [
  {
    slug: "teleskopi",
    name: "ტელესკოპი",
    icon: Telescope,
    color: "text-amber-400",
  },
  {
    slug: "proeqtorebi",
    name: "პროექტორები",
    icon: Projector,
    color: "text-purple-400",
  },
  {
    slug: "sanatebi",
    name: "სანათები",
    icon: Lamp,
    color: "text-yellow-400",
  },
  {
    slug: "varskvlavuri-ruka",
    name: "ვარსკვლავური რუკა",
    icon: Compass,
    color: "text-cyan-400",
  },
  {
    slug: "varskvlavis-darqmeva",
    name: "ვარსკვლავის დარქმევა",
    icon: Sparkles,
    color: "text-pink-400",
    externalUrl: "https://astroman.ge/star-registry/",
  },
  {
    slug: "teqnika",
    name: "ტექნიკა",
    icon: Cpu,
    color: "text-emerald-400",
  },
  {
    slug: "sabavshvo-satamashoebi",
    name: "საბავშვო სათამაშოები",
    icon: Gamepad2,
    color: "text-orange-400",
  },
  {
    slug: "aqsesuarebi",
    name: "აქსესუარები",
    icon: Watch,
    color: "text-blue-400",
  },
  {
    slug: "sxvadasxva",
    name: "სხვადასხვა",
    icon: Boxes,
    color: "text-indigo-400",
  },
];

// astroman.ge-ს ორიგინალური პროდუქტების მკაცრი რუკა
const EXACT_CATEGORY_MAP: Record<string, string> = {
  // 1. ტელესკოპი
  "astronomical telescope": "teleskopi",
  "bresser automatik 80/400 goto": "teleskopi",
  "bresser junior 76/300 compact ტელესკოპი smart": "teleskopi",
  "bresser junior telescope 50/360 with tent ტელესკოპი": "teleskopi",
  "bresser sirius 70/900 az ლინზური ტელესკოპი": "teleskopi",
  "bresser venus 76/700 az telescope": "teleskopi",
  "celestron astromaster 114eq telescope": "teleskopi",
  "celestron astromaster 70az": "teleskopi",
  "celestron nexstar 6slt computerized telescope": "teleskopi",
  "celestron nexstar 90slt computerized telescope": "teleskopi",
  "celestron starsense explorer lt 70az ლინზური ტელესკოპი": "teleskopi",
  "celestron travel scope 70 dx": "teleskopi",
  "foreseen 400/70 telescope": "teleskopi",
  "national geographic 45/600 az telescope": "teleskopi",
  "national geographic 50/600 az telescope": "teleskopi",
  "national geographic 60/700 ტელესკოპი az": "teleskopi",
  "national geographic 76/350 compact telescope": "teleskopi",
  "national geographic 76/350 telescope + sunfilter + smartphone adapter":
    "teleskopi",
  "national geographic 76/700 reflector ტელესკოპი": "teleskopi",
  "national geographic automatic telescope 70 mm": "teleskopi",
  "national geographic refractor telescope 90/900 eq3": "teleskopi",
  "national geographic telescope-microscope set": "teleskopi",
  "starsense explorer dx 102 refractor": "teleskopi",
  "starsense explorer dx 130 newtonian": "teleskopi",
  "starsense explorer dx 6": "teleskopi",
  "travel scope 50mm": "teleskopi",
  "visionking telescope 70mm": "teleskopi",
  "vixen nature eye 50/360 az1 telescope": "teleskopi",
  "ტელესკოპი firstscope moon": "teleskopi",
  "ტელესკოპი foreseen 800/50": "teleskopi",
  "ტელესკოპი foreseen 80mm": "teleskopi",

  // 2. ვარსკვლავური რუკა
  "ვარსკვლავური რუკა (აურორა)": "varskvlavuri-ruka",
  "ვარსკვლავური რუკა (გალაქსი)": "varskvlavuri-ruka",
  "ვარსკვლავური რუკა (ვან გოგი)": "varskvlavuri-ruka",
  "ვარსკვლავური რუკა (ლურჯი)": "varskvlavuri-ruka",
  "ვარსკვლავური რუკა (ნებულა)": "varskvlavuri-ruka",
  "ვარსკვლავური რუკა (ორი ლოკაცია)": "varskvlavuri-ruka",
  "მთვარის რუკა": "varskvlavuri-ruka",
  "ვარსკვლავური რუკა": "varskvlavuri-ruka",

  // 3. პროექტორები
  "cosmonaut nebula projector": "proeqtorebi",
  "nebula bluetooth პროექტორი": "proeqtorebi",
  "ufo nebula projector": "proeqtorebi",
  "usb გალაქტიკის პროექტორი": "proeqtorebi",
  "ასტრონავტის პროექტორი": "proeqtorebi",
  "ვარსკვლავების პროექტორი": "proeqtorebi",
  "პროექტორი “კოსმოსი”": "proeqtorebi",
  "პროექტორი black universe": "proeqtorebi",
  "პროექტორი universe": "proeqtorebi",
  "პროექტორი დედამიწა/მთვარე": "proeqtorebi",
  "პროექტორი დინამიკი": "proeqtorebi",
  "alien projector": "proeqtorebi",
  "premium projector": "proeqtorebi",

  // 4. ტექნიკა (ოპტიკა, სპიკერები, მიკროსკოპები, გაჯეტები)
  "landscout 8x40mm porro binocular": "teqnika",
  "flow speaker": "teqnika",
  "foreseen 10x50 ბინოკლი": "teqnika",
  "infinity bluetooth speaker": "teqnika",
  "national geographic 10×25 binoculars": "teqnika",
  "national geographic 300x-1200x microscope": "teqnika",
  "national geographic 8x42 mm binoculars": "teqnika",
  "retro bluetooth speaker": "teqnika",
  "robot bluetooth speaker": "teqnika",
  "tesla electric speaker": "teqnika",
  ბინოკლი: "teqnika",
  "ვინილის დინამიკი": "teqnika",
  "ვინტაჟური მონოკლი": "teqnika",
  "ტელეფონის ადაპტერი": "teqnika",
  "binocular 8×21": "teqnika",
  "სახლის კინოთეატრი hs9500 pro": "teqnika",
  "ტესლას პლაზმური ბურთი": "teqnika",

  // 5. საბავშვო სათამაშოები
  "3d კალამი": "sabavshvo-satamashoebi",
  "3d კალამი (შავი)": "sabavshvo-satamashoebi",
  "mysterious space": "sabavshvo-satamashoebi",
  "solar space set (6 in one)": "sabavshvo-satamashoebi",
  "space ყულაბა": "sabavshvo-satamashoebi",
  "ბალიშის გადასაკრავი": "sabavshvo-satamashoebi",
  "ბაღის ჩანთა": "sabavshvo-satamashoebi",
  "ბუშტების ნაკრები": "sabavshvo-satamashoebi",
  "დისტანციურად მართვადი თვითმფრინავი su27": "sabavshvo-satamashoebi",
  "ელექტრო მანქანა mercedes benz": "sabavshvo-satamashoebi",
  "ვერტმფრენი პულტით": "sabavshvo-satamashoebi",
  "ვირტუალური რეალობის სათვალე shinecon": "sabavshvo-satamashoebi",
  "ზურგჩანთა astronaut": "sabavshvo-satamashoebi",
  "ზურგჩანთა ბაღის": "sabavshvo-satamashoebi",
  "კედლის სტიკერები": "sabavshvo-satamashoebi",
  "პენალი ვარდისფერი": "sabavshvo-satamashoebi",
  "პენალი კოსმონავტი": "sabavshvo-satamashoebi",
  "პენალი რაკეტა": "sabavshvo-satamashoebi",
  "რბილი სათამაშო კოსმონავტი": "sabavshvo-satamashoebi",
  "საბავშვო სასაჩუქრე ნაკრები": "sabavshvo-satamashoebi",
  "სადღესასწაულო ბუშტების ნაკრები": "sabavshvo-satamashoebi",
  "სათამაშო კაფსულა": "sabavshvo-satamashoebi",
  "სათამაშო მზის სისტემა (პროექტორი)": "sabavshvo-satamashoebi",
  "სათამაშო როვერი": "sabavshvo-satamashoebi",
  "სათლელი კოსმონავტი": "sabavshvo-satamashoebi",
  "სასაკოლო ჩანთა": "sabavshvo-satamashoebi",
  "სასკოლო ჩანთა astrokid": "sabavshvo-satamashoebi",
  "სასკოლო ჩანთა cosmo": "sabavshvo-satamashoebi",
  "სასკოლო ჩანთა cosmoboy": "sabavshvo-satamashoebi",
  "სასკოლო ჩანთა cosmonaut": "sabavshvo-satamashoebi",
  "სასკოლო ჩანთა spacegirl": "sabavshvo-satamashoebi",
  "სასკოლო ჩანთა spaceman": "sabavshvo-satamashoebi",
  "სასკოლო ჩანთა spiderman": "sabavshvo-satamashoebi",
  "სასკოლო ჩანთა unicorn": "sabavshvo-satamashoebi",
  "სასკოლო ჩანთა ყვითელი": "sabavshvo-satamashoebi",
  "სპაიდერმენის სასკოლო ზურგჩანთის ნაკრები (ზურგჩანთა, ლანჩბოქსი, პენალი)":
    "sabavshvo-satamashoebi",
  "სფეის შატლის მოდელი": "sabavshvo-satamashoebi",
  "წიგნების პორტატული თარო": "sabavshvo-satamashoebi",
  "ხელის მიკროსკოპი": "sabavshvo-satamashoebi",
  "ხის ასაწყობი დაფა (მზის სისტემა)": "sabavshvo-satamashoebi",
  "ხის პლანეტები": "sabavshvo-satamashoebi",
  "ჰარი პოტერის ჯოხი": "sabavshvo-satamashoebi",

  // 6. აქსესუარები
  "iphone case": "aqsesuarebi",
  "ბრელოკი ასტრონავტი": "aqsesuarebi",
  "ბრელოკი ასტრონავტი (ლურჯი)": "aqsesuarebi",
  "ბრელოკი კოსმონავტი": "aqsesuarebi",
  "ბრელოკი კოსმონავტი m": "aqsesuarebi",
  "დედამიწის ყელსაბამი": "aqsesuarebi",
  "მაგიდის დეკორატიული სადგამი": "aqsesuarebi",
  "მაჯის საათი (cosmos)": "aqsesuarebi",
  "მზის სისტემის სამაჯური": "aqsesuarebi",
  "პლანეტების ბრელოკი": "aqsesuarebi",
  სამაჯური: "aqsesuarebi",
  "სამაჯური დედამიწა": "aqsesuarebi",
  "სამაჯური მზის სისტემა": "aqsesuarebi",
  "სამაჯური მზის სისტემა (m)": "aqsesuarebi",
  "სამაჯური სატურნი/კოსმონავტი": "aqsesuarebi",
  "ფოსფორის ყელსაბამი": "aqsesuarebi",
  ყელსაბამი: "aqsesuarebi",
  "ყელსაბამი (სატურნი)": "aqsesuarebi",
  "ყელსაბამი ნახევარმთვარე": "aqsesuarebi",
  "სატურნის მანათობელი ბრელოკი": "aqsesuarebi",

  // 7. სხვადასხვა
  "astronaut big box": "sxvadasxva",
  "cyber glasses": "sxvadasxva",
  "vr glasses ყურსასმენებით": "sxvadasxva",
  "ასაწყობი პაზლი (დედამიწა)": "sxvadasxva",
  "ასაწყობი პაზლი (მთვარე)": "sxvadasxva",
  "ბალიში დედამიწა": "sxvadasxva",
  "ბალიში მთვარე": "sxvadasxva",
  "ბალიში რაკეტა": "sxvadasxva",
  ბლოკნოტი: "sxvadasxva",
  "თერმოსი (500მლ)": "sxvadasxva",
  "იატაკის საფენი": "sxvadasxva",
  "კედლის საკიდი დეკორაცია": "sxvadasxva",
  "კოსმოსური სტიკერები (50ც)": "sxvadasxva",
  "კოსმოსური ყუთი": "sxvadasxva",
  "კოსმოსური ჭიქა თავსახურით": "sxvadasxva",
  "კოსმოსური ჭიქის სასაჩუქრე ნაკრები": "sxvadasxva",
  "მაცივარზე მისაკრობი მაგნიტები": "sxvadasxva",
  "მეხსიერების ბარათი 64gb კოსმონავტი": "sxvadasxva",
  "ნიუტონის ქანქარა": "sxvadasxva",
  პრიზმა: "sxvadasxva",
  "სადღესასწაულო ქუდი": "sxvadasxva",
  "სურათის ჩარჩო": "sxvadasxva",
  "ტელეფონის სადგამი კოსმონავტი": "sxvadasxva",
  "ქვიშის საათი „ჩანჩქერი“": "sxvadasxva",
  "ქვიშის საათი ხის ჩარჩოთი": "sxvadasxva",
};

export function getMainCategorySlug(item: {
  name: string;
  categorySlug?: string;
}): string {
  const cleanName = (item.name || "").trim().toLowerCase();

  // 1. ზუსტი შედარება ბაზასთან
  if (EXACT_CATEGORY_MAP[cleanName]) {
    return EXACT_CATEGORY_MAP[cleanName];
  }

  // 2. ნაწილობრივი დამთხვევა
  for (const [key, slug] of Object.entries(EXACT_CATEGORY_MAP)) {
    if (cleanName.includes(key) || key.includes(cleanName)) {
      return slug;
    }
  }

  // 3. ვარსკვლავური რუკა
  if (cleanName.includes("რუკა") || cleanName.includes("star map")) {
    return "varskvlavuri-ruka";
  }

  // 4. პროექტორები
  if (cleanName.includes("პროექტორ") || cleanName.includes("projector")) {
    return "proeqtorebi";
  }

  // 5. ტექნიკა
  if (
    cleanName.includes("landscout") ||
    cleanName.includes("ბინოკლ") ||
    cleanName.includes("binocular") ||
    cleanName.includes("მიკროსკოპ") ||
    cleanName.includes("microscope") ||
    cleanName.includes("speaker") ||
    cleanName.includes("დინამიკი")
  ) {
    return "teqnika";
  }

  // 6. ტელესკოპი
  if (cleanName.includes("ტელესკოპ") || cleanName.includes("telescop")) {
    return "teleskopi";
  }

  // 7. სანათები
  if (
    cleanName.includes("სანათი") ||
    cleanName.includes("lamp") ||
    cleanName.includes("crystal ball") ||
    cleanName.includes("მთვარე") ||
    cleanName.includes("დამატენიანებელი")
  ) {
    return "sanatebi";
  }

  // 8. საბავშვო
  if (
    cleanName.includes("ჩანთა") ||
    cleanName.includes("პენალ") ||
    cleanName.includes("სათამაშო") ||
    cleanName.includes("კალამი")
  ) {
    return "sabavshvo-satamashoebi";
  }

  // 9. აქსესუარები
  if (
    cleanName.includes("ბრელოკ") ||
    cleanName.includes("სამაჯურ") ||
    cleanName.includes("ყელსაბამ") ||
    cleanName.includes("საათი")
  ) {
    return "aqsesuarebi";
  }

  return "sxvadasxva";
}
