"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import CatalogView from "@/components/CatalogView";

const SLUG_ALIASES: Record<string, string> = {
  // 1. Teleskoopit
  teleskopi: "teleskopi",
  telescope: "teleskopi",
  teleskopebi: "teleskopi",

  // 2. Projektorit
  proeqtorebi: "proeqtorebi",
  projector: "proeqtorebi",
  proeqtori: "proeqtorebi",

  // 3. Valaisimet
  sanatebi: "sanatebi",
  sanati: "sanatebi",
  lamp: "sanatebi",

  // 4. Tähtikartat
  "varskvlavuri-ruka": "varskvlavuri-ruka",
  ruka: "varskvlavuri-ruka",
  "star-map": "varskvlavuri-ruka",

  // 5. Tekniikka (optiikka, kaiuttimet, mikroskoopit)
  teqnika: "teqnika",
  binokli: "teqnika",
  mikroskopi: "teqnika",

  // 6. Lasten lelut ja tarvikkeet
  "sabavshvo-satamashoebi": "sabavshvo-satamashoebi",
  sabavshvo: "sabavshvo-satamashoebi",
  satamashoebi: "sabavshvo-satamashoebi",

  // 7. Asusteet
  aqsesuarebi: "aqsesuarebi",
  aksesuarebi: "aqsesuarebi",
  accessories: "aqsesuarebi",

  // 8. Sekalaista
  sxvadasxva: "sxvadasxva",
  other: "sxvadasxva",
};

const CATEGORY_TITLES: Record<string, string> = {
  teleskopi: "ტელესკოპები",
  proeqtorebi: "პროექტორები",
  sanatebi: "სანათები",
  "varskvlavuri-ruka": "ვარსკვლავური რუკა",
  teqnika: "ტექნიკა",
  "sabavshvo-satamashoebi": "საბავშვო სათამაშოები",
  aqsesuarebi: "აქსესუარები",
  sxvadasxva: "სხვადასხვა",
};

export default function CategoryDynamicPage() {
  const params = useParams();
  const rawSlug = (params?.slug as string) || "all";

  // Uudelleenohjaus ulkoiselle rekisterisivulle
  useEffect(() => {
    if (rawSlug === "varskvlavis-darqmeva" || rawSlug === "star-registry") {
      window.location.href = "https://astroman.ge/star-registry/";
    }
  }, [rawSlug]);

  if (rawSlug === "varskvlavis-darqmeva" || rawSlug === "star-registry") {
    return (
      <div className="flex min-h-[60vh] items-center justify-center text-sm text-gray-400">
        გადამისამართება Astroman Star Registry-ზე...
      </div>
    );
  }

  const normalizedSlug = SLUG_ALIASES[rawSlug] || rawSlug;
  const title = CATEGORY_TITLES[normalizedSlug] || "მაღაზია";

  return <CatalogView categorySlug={normalizedSlug} categoryTitle={title} />;
}
