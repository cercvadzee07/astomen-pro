import { Truck, Headphones, CreditCard, Rocket } from "lucide-react";

const ITEMS = [
  { icon: Truck, title: "უფასო მიტანა", text: "უფასო მიტანა 250 ლარის ზევით" },
  { icon: Headphones, title: "24/7 დახმარება", text: "მოგვწერე FB მესენჯერში, ნებისმიერ დროს" },
  { icon: CreditCard, title: "ონლაინ გადახდა", text: "გადაიხადე ონლაინ, სწრაფად და საიმედოდ" },
  { icon: Rocket, title: "სწრაფი მიტანა", text: "სტანდარტული მიწოდება, შეკვეთიდან 2 დღეში" },
];

export default function ServiceHighlights({ className = "" }: { className?: string }) {
  return (
    <section
      className={`grid grid-cols-2 gap-4 rounded-2xl border border-white/5 bg-[#0d111d]/70 p-6 backdrop-blur-md md:grid-cols-4 ${className}`}
    >
      {ITEMS.map(({ icon: Icon, title, text }) => (
        <div key={title} className="flex items-center gap-3">
          <Icon className="h-6 w-6 shrink-0 text-yellow-400" />
          <div>
            <h4 className="text-xs font-bold text-white">{title}</h4>
            <p className="text-[10px] text-gray-400">{text}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
