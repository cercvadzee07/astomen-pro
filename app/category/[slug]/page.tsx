"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import CatalogView from "@/components/CatalogView";

const SLUG_ALIASES: Record<string, string> = {
  sabavshvo: "sabavshvo-satamashoebi",
  "sabavshvo-satamashoebi": "sabavshvo-satamashoebi",
  satamashoebi: "sabavshvo-satamashoebi",
  sxvadasxva: "aqsesuarebi",
  aqsesuarebi: "aqsesuarebi",
  teqnika: "teqnika",
  teleskopi: "teqnika",
  binokli: "teqnika",
  mikroskopi: "teqnika",
  proeqtorebi: "teqnika",
  "varskvlavuri-ruka": "varskvlavuri-ruka",
  ruka: "varskvlavuri-ruka",
  sanatebi: "sanatebi",
};

const CATEGORY_TITLES: Record<string, string> = {
  "sabavshvo-satamashoebi": "საბავშვო სათამაშოები",
  aqsesuarebi: "აქსესუარები",
  teqnika: "ტექნიკა",
  "varskvlavuri-ruka": "ვარსკვლავური რუკა",
  sanatebi: "სანათები",
};

export default function CategoryDynamicPage() {
  const params = useParams();
  const rawSlug = (params?.slug as string) || "all";

  // როცა "varskvlavis-darqmeva"-ზე შევა, მომენტალურად გადავა astroman.ge-ზე
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
