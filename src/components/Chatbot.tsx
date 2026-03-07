"use client";
import { useState, useRef, useEffect } from "react";

type Message = { role: "bot" | "user"; text: string };

const BEERS: Record<string, string> = {
  "redacted": "**Redacted** — Everyday IPA, 6.5% ABV, 47 IBU. Our most popular hop-forward beer. Citrus and pine notes with a clean bitter finish. Staff pick! 🍺",
  "no equis": "**No Equis** — Mexican Lager, 5.0% ABV, 13 IBU. Light, crisp, crushable. Perfect for a hot Temecula day. Also available as El Amigo (salt & lime) and Prickly Piñatas (prickly pear).",
  "the donger": '**"The Donger"** — Hazy IPA, 6.3% ABV, 50 IBU. Juicy, tropical, and hazy. Smooth mouthfeel with notes of mango and citrus.',
  "fire crotch": "**Fire Crotch** — Triple Red IPA, 10.0% ABV, 52 IBU. Our biggest beer. Malty backbone with aggressive hop character. Sip it slow. 🔥",
  "nitro revolution": "**NITRO Revolution** — Coffee Milk Stout, 7.2% ABV, 37 IBU. Cascading nitro pour with rich coffee and chocolate flavors. A fan favorite.",
  "deception": "**Deception** — Coconut Lime Blonde Ale, 5.0% ABV, 19 IBU. Tropical and refreshing. Great starter beer for non-IPA drinkers.",
  "cucumber sour": "**Cucumber Sour** — Sour Wheat Ale, 4.0% ABV, 12 IBU. Tart, refreshing, light. Like a spa day in a glass. 🥒",
  "sticky rice": "**Sticky Rice** — Japanese Rice Lager, 5.6% ABV, 13 IBU. Ultra-clean and dry. Pairs perfectly with our pizzas.",
};

const EVENTS = [
  { date: "Fri, Mar 7", band: "The Hideout Sessions", genre: "Rock & Blues", time: "7:00 PM" },
  { date: "Sat, Mar 8", band: "Neon Avenue", genre: "Indie / Alternative", time: "7:30 PM" },
  { date: "Fri, Mar 14", band: "Whiskey Alibi", genre: "Country Rock", time: "7:00 PM" },
  { date: "Sat, Mar 15", band: "Brass & Bone", genre: "Jazz Fusion", time: "7:30 PM" },
  { date: "Fri, Mar 21", band: "Desert Volt", genre: "Psychedelic Rock", time: "7:00 PM" },
  { date: "Sat, Mar 22", band: "The Usual Suspects", genre: "Classic Rock Covers", time: "7:30 PM" },
];

function getResponse(input: string): string {
  const q = input.toLowerCase().trim();

  // Reservations
  if (q.includes("reserv") || q.includes("book") || q.includes("table") || q.includes("party") || q.includes("event space")) {
    return "🎉 We'd love to host you! For **private events & large parties**, email **events@blackmarketbrew.com** or call **951.296.5039**. Our 6,000 sqft brewery space is perfect for birthdays, corporate mixers, and celebrations. For regular dining, we're first-come first-served — no reservation needed!";
  }

  // Hours
  if (q.includes("hour") || q.includes("open") || q.includes("close") || q.includes("when")) {
    return "🕐 **Hours:**\n• Mon – Sat: 11am – 9pm\n• Sunday: 11am – 8pm\n\nWe're at **41740 Enterprise Cir. N, #109, Temecula, CA 92590**. See you soon!";
  }

  // Events / music
  if (q.includes("event") || q.includes("music") || q.includes("live") || q.includes("band") || q.includes("show") || q.includes("tonight") || q.includes("this week") || q.includes("upcoming")) {
    const eventList = EVENTS.map(e => `• **${e.date}** — ${e.band} (${e.genre}) at ${e.time}`).join("\n");
    return `🎸 **Upcoming Live Music:**\n${eventList}\n\nAll shows are **free entry**! Grab a beer and enjoy the music.`;
  }

  // Specific beer lookup
  for (const [key, info] of Object.entries(BEERS)) {
    if (q.includes(key)) return info;
  }

  // General beer questions
  if (q.includes("beer") || q.includes("tap") || q.includes("ipa") || q.includes("stout") || q.includes("lager") || q.includes("sour") || q.includes("what do you have") || q.includes("recommend") || q.includes("popular") || q.includes("best")) {
    return "🍺 We have **30+ beers** on tap! Here are some highlights:\n\n• **Redacted** — Everyday IPA (6.5%) ⭐ Staff Pick\n• **No Equis** — Mexican Lager (5.0%) — light & crushable\n• **\"The Donger\"** — Hazy IPA (6.3%) — juicy & tropical\n• **NITRO Revolution** — Coffee Milk Stout (7.2%)\n• **Cucumber Sour** — Sour Wheat (4.0%) — refreshing\n• **Fire Crotch** — Triple Red IPA (10.0%) — for the brave 🔥\n\nAsk me about any specific beer for more details! We also have **wine, ciders, hard seltzer, and kombucha**.";
  }

  // Wine
  if (q.includes("wine")) {
    return "🍷 We have a solid wine selection:\n• Chardonnay, Pinot Gris, Rosé, Sauvignon Blanc\n• Cabernet Sauvignon, Pinot Noir, Zinfandel, Montepulciano\n• **Wine flights** available (Red, White, or Mixed)\n• Plus frozen **slushies** — Strawberry, Piña Colada & Watermelon!";
  }

  // Food / menu
  if (q.includes("food") || q.includes("menu") || q.includes("pizza") || q.includes("eat") || q.includes("hungry")) {
    return "🍕 We serve **13 signature wood-fired pizzas**, salads, and small bites!\n\nPopular picks:\n• The O.G. Margherita — $14\n• The Meat Market — $18\n• White Truffle — $19 (Chef's Pick)\n• BBQ Chicken — $17\n\nPlus garlic knots, beer cheese pretzels, wings, and more. Dine-in or takeout!";
  }

  // Location
  if (q.includes("where") || q.includes("location") || q.includes("address") || q.includes("directions") || q.includes("find")) {
    return "📍 **41740 Enterprise Cir. N, #109, Temecula, CA 92590**\n\nCall us: **951.296.5039**\nEmail: **info@blackmarketbrew.com**\n\nWe're in the Enterprise Circle business park — easy parking!";
  }

  // Contact
  if (q.includes("contact") || q.includes("phone") || q.includes("email") || q.includes("call")) {
    return "📞 **Phone:** 951.296.5039\n📧 **General:** info@blackmarketbrew.com\n🎉 **Events:** events@blackmarketbrew.com\n💼 **Jobs:** jobs@blackmarketbrew.com";
  }

  // Jobs
  if (q.includes("job") || q.includes("hiring") || q.includes("work") || q.includes("career")) {
    return "💼 We're always looking for quality people! We have **serving and kitchen positions** available. Email your resume to **jobs@blackmarketbrew.com**.";
  }

  // Kegs
  if (q.includes("keg")) {
    return "🛢️ Want BMB beer for your party? Email **kegs@blackmarketbrew.com** for availability and pricing. We'll hook you up!";
  }

  // Greeting
  if (q.includes("hello") || q.includes("hi") || q.includes("hey") || q === "yo" || q.includes("sup") || q.includes("what's up")) {
    return "Hey! 👋 Welcome to Black Market Brewing. I can help you with:\n\n🍺 **Beer selections** & recommendations\n🎸 **Upcoming events** & live music\n🍕 **Food menu** & pricing\n🎉 **Reservations** & private events\n🕐 **Hours** & location\n\nWhat are you curious about?";
  }

  // Fallback
  return "Good question! I can help with:\n\n🍺 **\"What beers do you have?\"**\n🎸 **\"Any live music this week?\"**\n🍕 **\"What's on the menu?\"**\n🎉 **\"I want to book an event\"**\n🕐 **\"What are your hours?\"**\n\nTry asking one of those, or call us at **951.296.5039**!";
}

function formatText(text: string) {
  // Simple markdown: **bold** and newlines
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="text-white font-semibold">{part.slice(2, -2)}</strong>;
    }
    // Handle newlines
    return part.split("\n").map((line, j) => (
      <span key={`${i}-${j}`}>
        {j > 0 && <br />}
        {line}
      </span>
    ));
  });
}

const quickReplies = [
  "What beers do you have?",
  "Any live music?",
  "Book an event",
  "What's on the menu?",
  "Hours & location",
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hey! 👋 Welcome to Black Market Brewing. I'm here to help with beer recs, events, food, reservations — whatever you need. What's up?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const send = (text: string) => {
    const userMsg: Message = { role: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = getResponse(text);
      setMessages((prev) => [...prev, { role: "bot", text: response }]);
      setIsTyping(false);
    }, 600 + Math.random() * 800);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    send(input.trim());
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg shadow-bmb-gold/20 flex items-center justify-center transition-all duration-300 ${
          open
            ? "bg-white/10 backdrop-blur-lg rotate-0"
            : "bg-bmb-gold hover:bg-bmb-amber hover:scale-110"
        }`}
        aria-label="Chat with us"
      >
        {open ? (
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-bmb-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] bg-bmb-dark border border-white/10 rounded-2xl shadow-2xl shadow-black/50 flex flex-col overflow-hidden"
          style={{ height: "min(580px, calc(100vh - 8rem))" }}
        >
          {/* Header */}
          <div className="px-5 py-4 bg-gradient-to-r from-bmb-card to-bmb-dark border-b border-white/5 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-bmb-gold/10 border border-bmb-gold/30 flex items-center justify-center">
              <span className="text-bmb-gold text-sm">🍺</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold">BMB Assistant</p>
              <p className="text-[11px] text-bmb-muted flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Online now
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-[13px] leading-relaxed ${
                    msg.role === "user"
                      ? "bg-bmb-gold text-bmb-black rounded-br-sm"
                      : "bg-white/[0.06] text-gray-300 rounded-bl-sm border border-white/5"
                  }`}
                >
                  {formatText(msg.text)}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/[0.06] rounded-2xl rounded-bl-sm px-4 py-3 border border-white/5">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-bmb-muted animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 rounded-full bg-bmb-muted animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 rounded-full bg-bmb-muted animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Quick replies */}
          {messages.length <= 2 && (
            <div className="px-4 pb-2 flex gap-2 overflow-x-auto no-scrollbar">
              {quickReplies.map((q, i) => (
                <button
                  key={i}
                  onClick={() => send(q)}
                  className="flex-shrink-0 text-[11px] px-3 py-1.5 rounded-full border border-bmb-gold/30 text-bmb-gold hover:bg-bmb-gold/10 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="px-4 py-3 border-t border-white/5 flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about beers, events, food..."
              className="flex-1 bg-white/[0.05] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-bmb-muted focus:outline-none focus:border-bmb-gold/50 transition-colors"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="w-10 h-10 rounded-xl bg-bmb-gold text-bmb-black flex items-center justify-center hover:bg-bmb-amber transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
