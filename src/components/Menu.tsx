const menuItems = [
  {
    name: "The O.G. Margherita",
    desc: "San Marzano tomato, fresh mozzarella, basil, EVOO",
    price: "$14",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80",
    tag: "Fan Favorite",
  },
  {
    name: "The Meat Market",
    desc: "Pepperoni, Italian sausage, bacon, ham, red onion",
    price: "$18",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80",
  },
  {
    name: "White Truffle",
    desc: "Truffle cream, wild mushrooms, fontina, arugula, lemon zest",
    price: "$19",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80",
    tag: "Chef's Pick",
  },
  {
    name: "BBQ Chicken",
    desc: "House BBQ sauce, smoked chicken, red onion, cilantro, gouda",
    price: "$17",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
  },
  {
    name: "Buffalo Cauliflower",
    desc: "Buffalo sauce, crispy cauliflower, blue cheese, scallions",
    price: "$16",
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&q=80",
    tag: "Vegetarian",
  },
  {
    name: "The Godfather",
    desc: "Prosciutto, burrata, hot honey, arugula, balsamic glaze",
    price: "$20",
    image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&q=80",
  },
];

const smallBites = [
  { name: "Garlic Knots", price: "$8" },
  { name: "Beer Cheese Pretzel", price: "$12" },
  { name: "Wings (6pc)", price: "$13" },
  { name: "Caesar Salad", price: "$11" },
  { name: "Loaded Fries", price: "$10" },
  { name: "Meatball Sub", price: "$14" },
];

export default function Menu() {
  return (
    <section id="menu" className="py-24 bg-bmb-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-bmb-gold mb-2">
              Wood-Fired Goodness
            </p>
            <h2 className="font-display text-4xl md:text-5xl">
              Pizza &amp; Eats
            </h2>
          </div>
          <a
            href="https://blackmarketbrew.com/uploads/documents/December-25_Temecula_Menu.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-bmb-gold hover:text-bmb-amber transition-colors underline underline-offset-4"
          >
            Download Full Menu (PDF) →
          </a>
        </div>

        {/* Pizza grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {menuItems.map((item, i) => (
            <div
              key={i}
              className="group bg-bmb-card rounded-xl overflow-hidden border border-white/5 hover:border-bmb-gold/20 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bmb-card via-transparent to-transparent" />
                {item.tag && (
                  <span className="absolute top-3 right-3 text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-bmb-gold/90 text-bmb-black font-semibold">
                    {item.tag}
                  </span>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-lg group-hover:text-bmb-gold transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-bmb-gold font-display text-lg flex-shrink-0">
                    {item.price}
                  </span>
                </div>
                <p className="text-bmb-muted text-sm mt-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Small bites row */}
        <div className="bg-bmb-card rounded-xl border border-white/5 p-8">
          <h3 className="font-display text-2xl mb-6 text-center">
            Small Bites &amp; Sides
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {smallBites.map((item, i) => (
              <div
                key={i}
                className="text-center p-4 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
              >
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-bmb-gold text-sm mt-1">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
