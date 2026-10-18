"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

type Item = { id: number; name: string; loc: string; qty: number; reorder: number; max: number };

const BASE = [
  "Beef Patties", "Sesame Buns", "Fries (case)", "Chicken Fillets", "Cheese Slices", "Lettuce",
  "Tomatoes", "Pickles", "Ketchup", "Mustard", "Napkins", "Straws", "Cups 16oz", "Cups 22oz",
  "Lids", "Fry Boxes", "Burger Wraps", "Coffee Beans", "Cream Packs", "Sugar Packs",
  "Syrup Bag", "Apple Slices", "Nugget Sauce", "Cleaning Solution",
];
const LOCS = ["Walk-in", "Freezer", "Dry Storage", "Front Counter", "Drive-thru"];

// deterministic pseudo-random so server and client render the same data
function build(): Item[] {
  let s = 42;
  const rnd = () => ((s = (s * 1664525 + 1013904223) % 4294967296) / 4294967296);
  const items: Item[] = [];
  let id = 1;
  for (const loc of LOCS)
    for (const name of BASE) {
      const max = 40 + Math.floor(rnd() * 80);
      const reorder = Math.round(max * 0.25);
      const qty = Math.floor(rnd() * max * 1.05);
      items.push({ id: id++, name, loc, qty, reorder, max });
    }
  return items;
}

export default function InventoryDemo() {
  const [items, setItems] = useState<Item[]>(() => build());
  const [q, setQ] = useState("");
  const [loc, setLoc] = useState("All");
  const [lowOnly, setLowOnly] = useState(false);

  const lowCount = items.filter((i) => i.qty <= i.reorder).length;
  const rows = useMemo(
    () =>
      items
        .filter((i) => (loc === "All" || i.loc === loc) && (!lowOnly || i.qty <= i.reorder))
        .filter((i) => i.name.toLowerCase().includes(q.toLowerCase().trim()))
        .sort((a, b) => a.qty / a.max - b.qty / b.max),
    [items, q, loc, lowOnly]
  );

  const restock = (id: number) =>
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty: i.max } : i)));
  const restockAll = () =>
    setItems((prev) => prev.map((i) => (i.qty <= i.reorder ? { ...i, qty: i.max } : i)));

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-black/60 text-left">
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 truncate text-xs text-mute">Inventory demo — interactive recreation, simulated data</span>
      </div>

      <div className="space-y-4 p-4 sm:p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search 120 items…"
            aria-label="Search inventory"
            className="w-full rounded-xl border border-line bg-white/5 px-4 py-2.5 text-sm outline-none transition placeholder:text-mute focus:border-blue/70 focus:bg-white/8"
          />
          <select
            value={loc}
            onChange={(e) => setLoc(e.target.value)}
            aria-label="Filter by location"
            className="rounded-xl border border-line bg-[#111] px-3 py-2.5 text-sm outline-none focus:border-blue/70"
          >
            {["All", ...LOCS].map((l) => (
              <option key={l}>{l}</option>
            ))}
          </select>
          <button
            onClick={() => setLowOnly((v) => !v)}
            className={`whitespace-nowrap rounded-xl border px-4 py-2.5 text-sm transition ${
              lowOnly ? "border-rose/70 bg-rose/15 text-rose" : "border-line bg-white/5 text-mute hover:text-fg"
            }`}
          >
            Low stock only
          </button>
        </div>

        <div
          className={`flex flex-wrap items-center justify-between gap-3 rounded-xl px-4 py-3 text-sm ${
            lowCount ? "bg-rose/10 text-rose" : "bg-emerald-500/10 text-emerald-400"
          }`}
        >
          <span>
            {lowCount
              ? `⚠ ${lowCount} item${lowCount > 1 ? "s" : ""} below reorder level`
              : "✓ Everything is fully stocked"}
          </span>
          {lowCount > 0 && (
            <button
              onClick={restockAll}
              className="rounded-lg bg-rose px-3 py-1 text-xs font-medium text-white transition hover:brightness-110"
            >
              Restock all
            </button>
          )}
        </div>

        <div className="no-scrollbar max-h-80 space-y-1.5 overflow-y-auto pr-1">
          <AnimatePresence initial={false}>
            {rows.slice(0, 40).map((i) => {
              const low = i.qty <= i.reorder;
              return (
                <motion.div
                  layout
                  key={i.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1.5 rounded-xl bg-white/[0.03] px-4 py-3 sm:grid-cols-[1.4fr_1fr_1.2fr_auto]"
                >
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">{i.name}</p>
                    <p className="text-xs text-mute">{i.loc}</p>
                  </div>
                  <p className="hidden text-xs text-mute sm:block">
                    {i.qty} / {i.max} units
                  </p>
                  <div className="col-span-2 h-1.5 overflow-hidden rounded-full bg-white/10 sm:col-span-1">
                    <motion.div
                      animate={{ width: `${Math.min(100, (i.qty / i.max) * 100)}%` }}
                      transition={{ duration: 0.5 }}
                      className={`h-full rounded-full ${low ? "bg-rose" : "bg-gradient-to-r from-blue to-violet"}`}
                    />
                  </div>
                  <div className="col-start-2 row-start-1 sm:col-start-auto sm:row-start-auto">
                    {low ? (
                      <button
                        onClick={() => restock(i.id)}
                        className="rounded-lg border border-rose/50 px-2.5 py-1 text-xs text-rose transition hover:bg-rose/15"
                      >
                        Restock
                      </button>
                    ) : (
                      <span className="px-2.5 py-1 text-xs text-emerald-400">OK</span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
          {rows.length === 0 && <p className="py-10 text-center text-sm text-mute">No items match your search.</p>}
        </div>
        <p className="text-right text-xs text-mute">
          Showing {Math.min(rows.length, 40)} of {rows.length} matches
        </p>
      </div>
    </div>
  );
}
