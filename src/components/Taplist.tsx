"use client";
import { useState } from "react";

type Beer = {
  name: string;
  style: string;
  abv: string;
  ibu?: string;
  tag?: string;
};

const categories: { label: string; beers: Beer[] }[] = [
  {
    label: "Lagers & Pilsners",
    beers: [
      { name: '3:10 to Vienna', style: "Vienna Lager", abv: "5.2%", ibu: "25" },
      { name: "Dead Drop", style: "Czech Pilsner", abv: "4.8%", ibu: "26" },
      { name: "Good Vibrations", style: "American Pilsner", abv: "5.6%", ibu: "25" },
      { name: "No Equis", style: "Mexican Lager", abv: "5.0%", ibu: "13" },
      { name: "El Amigo", style: "Salt & Lime Mexican Lager", abv: "5.0%", ibu: "13" },
      { name: "Prickly Piñatas", style: "Prickly Pear Mexican Lager", abv: "5.0%", ibu: "13" },
      { name: "Sticky Rice", style: "Japanese Rice Lager", abv: "5.6%", ibu: "13" },
      { name: '"Out Call" Pils', style: "Hoppy Pils — Moteuka Hops", abv: "5.1%", ibu: "36" },
      { name: '"In Call" Pils', style: "Hoppy Pils — Waimea Hops", abv: "5.6%", ibu: "37" },
    ],
  },
  {
    label: "IPAs & Pale Ales",
    beers: [
      { name: "Aftermath", style: "Pale Ale", abv: "5.6%", ibu: "27" },
      { name: "Redacted", style: "Everyday IPA", abv: "6.5%", ibu: "47", tag: "Staff Pick" },
      { name: "Rye IPA", style: "IPA brewed w/ Rye Malt", abv: "7.5%", ibu: "50" },
      { name: "Into the Void", style: "Black IPA", abv: "6.5%", ibu: "50" },
      { name: '"The Donger"', style: "Hazy IPA", abv: "6.3%", ibu: "50" },
      { name: "Betelgeuse", style: "Double Hoppy Red Ale", abv: "8.0%", ibu: "60" },
      { name: "Fire Crotch", style: "Triple Red IPA", abv: "10.0%", ibu: "52", tag: "High ABV" },
    ],
  },
  {
    label: "Specialty & Nitro",
    beers: [
      { name: "Hush Hush", style: "Bavarian Hefeweizen", abv: "5.0%", ibu: "13" },
      { name: "Bow to your Sensei", style: "Cream Ale", abv: "5.0%", ibu: "10" },
      { name: "Deception", style: "Coconut Lime Blonde Ale", abv: "5.0%", ibu: "19" },
      { name: "Cucumber Sour", style: "Sour Wheat Ale", abv: "4.0%", ibu: "12" },
      { name: "NITRO Neapolitan", style: "Ice Cream Inspired", abv: "7.1%", ibu: "22", tag: "Nitro" },
      { name: "NITRO Revolution", style: "Coffee Milk Stout", abv: "7.2%", ibu: "37", tag: "Nitro" },
      { name: "NITRO Great White Buffalo", style: "White Coffee Stout", abv: "6.4%", ibu: "27", tag: "Nitro" },
      { name: "NITRO Cali Creamin", style: "Mother Earth", abv: "7.0%", ibu: "12", tag: "Nitro" },
    ],
  },
  {
    label: "Cider, Seltzer & More",
    beers: [
      { name: "Blackberry & Blueberry", style: "Julian Hard Cider", abv: "7.0%" },
      { name: "Cherry Bomb", style: "Julian Hard Cider", abv: "7.0%" },
      { name: "Apple Pie", style: "Julian Hard Cider", abv: "7.0%" },
      { name: "Mango Daydream", style: "JuneShine Hard Kombucha", abv: "6.0%" },
      { name: "Desert Cooler", style: "JuneShine Hard Kombucha", abv: "6.0%" },
      { name: "Passionfruit Guava", style: "Belching Beaver Hard Seltzer", abv: "5.5%" },
      { name: "Michelada", style: "Blended with BMB No Equis", abv: "5.0%" },
    ],
  },
  {
    label: "Wine",
    beers: [
      { name: "Chardonnay", style: "Vanilla, honeycomb & melon", abv: "14%" },
      { name: "Pinot Gris", style: "Honey, pear and apple", abv: "13.6%" },
      { name: "Rosé", style: "Strawberry and stone fruit", abv: "12.5%" },
      { name: "Sauvignon Blanc", style: "Kiwi, citrus & passion fruit", abv: "13.5%" },
      { name: "Cabernet Sauvignon", style: "Black cherry & currant", abv: "13.5%" },
      { name: "Pinot Noir", style: "Dark cherries, red currants & berries", abv: "13.5%" },
      { name: "Zinfandel", style: "Dried cherries & rich plum", abv: "12.4%" },
      { name: "Wine Flight", style: "Red, White, or Mixed", abv: "—" },
    ],
  },
];

export default function Taplist() {
  const [active, setActive] = useState(0);

  return (
    <section id="taplist" className="py-24 bg-bmb-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-bmb-gold mb-2">
            Fresh Pours
          </p>
          <h2 className="font-display text-4xl md:text-5xl">
            What&apos;s On Tap
          </h2>
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar mb-10 pb-2 justify-start md:justify-center">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex-shrink-0 px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-medium transition-all ${
                active === i
                  ? "bg-bmb-gold text-bmb-black"
                  : "bg-white/5 text-bmb-muted hover:text-white hover:bg-white/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Beer grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories[active].beers.map((beer, i) => (
            <div
              key={i}
              className="group relative bg-bmb-card rounded-xl p-5 border border-white/5 hover:border-bmb-gold/20 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-lg leading-tight group-hover:text-bmb-gold transition-colors truncate">
                    {beer.name}
                  </h3>
                  <p className="text-bmb-muted text-sm mt-1">{beer.style}</p>
                </div>
                {beer.tag && (
                  <span className="flex-shrink-0 text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-bmb-gold/10 text-bmb-gold border border-bmb-gold/20">
                    {beer.tag}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-4 mt-4 text-xs text-bmb-muted">
                <span>
                  ABV <span className="text-white font-medium">{beer.abv}</span>
                </span>
                {beer.ibu && (
                  <>
                    <span className="w-px h-3 bg-white/10" />
                    <span>
                      IBU{" "}
                      <span className="text-white font-medium">{beer.ibu}</span>
                    </span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
