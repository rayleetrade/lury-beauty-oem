"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { lashStyles, materialOptions, styleFamilies, styleInquiry, type LashStyle } from "../data/catalog";
import { whatsappLink } from "../siteConfig";

export function StyleCatalog({ styles = lashStyles }: { styles?: LashStyle[] }) {
  const [family, setFamily] = useState("all");
  const [format, setFormat] = useState("all");
  const [query, setQuery] = useState("");
  const [length, setLength] = useState("all");
  const [curl, setCurl] = useState("all");
  const [material, setMaterial] = useState("To be confirmed");
  const visible = styles.filter(style => (family === "all" || style.family === family) && (format === "all" || style.format === format) && (length === "all" || style.specs?.lengths.includes(Number(length))) && (curl === "all" || style.specs?.curl === curl) && (`${style.id} ${style.name} ${style.family} ${style.format} ${style.specs?.color ?? ""} ${style.specs?.curl ?? ""} ${style.specs?.lengths.map(n => `${n}mm`).join(" ") ?? ""}`).toLowerCase().includes(query.toLowerCase().trim()));
  return <div>
    <div className="mb-8 grid gap-4 rounded-xl border border-[#eadbd2] bg-white p-5 sm:grid-cols-2 xl:grid-cols-3">
      <label className="space-y-2 text-sm font-semibold">Search styles<input className="field-control" value={query} onChange={e => setQuery(e.target.value)} placeholder="Natural, brown, 12mm, N11..." type="search" /></label>
      <label className="space-y-2 text-sm font-semibold">Style family<select className="field-control" value={family} onChange={e => setFamily(e.target.value)}><option value="all">All families</option>{styleFamilies.filter(f => styles.some(s => s.family === f.slug)).map(f => <option key={f.slug} value={f.slug}>{f.name}</option>)}</select></label>
      <label className="space-y-2 text-sm font-semibold">Lash format<select className="field-control" value={format} onChange={e => setFormat(e.target.value)}><option value="all">All formats</option>{Array.from(new Set(styles.map(s => s.format))).map(f => <option key={f}>{f}</option>)}</select></label>
      <label className="space-y-2 text-sm font-semibold">Material to request<select className="field-control" value={material} onChange={e => setMaterial(e.target.value)}><option>To be confirmed</option>{materialOptions.map(m => <option key={m.id}>{m.name}</option>)}</select></label>
      <label className="space-y-2 text-sm font-semibold">Proposed length<select className="field-control" value={length} onChange={e => setLength(e.target.value)}><option value="all">All lengths</option>{[8,10,12,14,16].map(n => <option key={n} value={n}>{n} mm</option>)}</select></label>
      <label className="space-y-2 text-sm font-semibold">Proposed curl<select className="field-control" value={curl} onChange={e => setCurl(e.target.value)}><option value="all">All curls</option>{["C","CC","D"].map(n => <option key={n}>{n}</option>)}</select></label>
    </div>
    <p className="mb-5 text-sm text-[#6b5d58]" role="status">{visible.length} design directions · Made to order · Illustrations show proposed designs; final specifications require physical sample approval.</p>
    {visible.length === 0 ? <div className="rounded-xl border border-[#eadbd2] p-8"><p>No styles match these filters.</p><button className="mt-3 underline" onClick={() => {setFamily("all");setFormat("all");setQuery("");setLength("all");setCurl("all");}}>Clear filters</button></div> : <div className="products-catalog-grid" data-design-grid>
      {visible.map(style => <article key={style.id} className="flex h-full flex-col overflow-hidden rounded-xl border border-[#eadbd2] bg-white shadow-sm">
        <div className="relative aspect-square bg-[#f1ead7]"><Image src={style.image} alt={style.slug ? `${style.id} ${style.name} original concept illustration, not a factory sample photograph` : `Representative ${style.family} family illustration`} fill sizes="(min-width:1360px) 25vw,(min-width:1024px) 33vw,(min-width:640px) 50vw,100vw" className="object-contain" /><span className="absolute left-3 top-3 rounded bg-white/95 px-3 py-2 text-xs font-bold">{style.id} · DESIGN</span></div>
        <div className="flex flex-1 flex-col p-5"><p className="text-xs uppercase tracking-wider text-[#9c6a47]">{style.format}</p><h3 className="mt-2 font-display text-2xl">{style.name}</h3><p className="mt-3 text-sm leading-6 text-[#6b5d58]">{style.description}</p>{style.specs && <div className="mt-4 rounded-md bg-[#eef0df] p-3 text-sm"><p className="text-xs font-semibold uppercase">Proposed sample specification</p><p className="mt-2">{style.specs.lengths.join(" / ")} mm · {style.specs.curl} curl · {style.specs.color}</p><p className="mt-1">{style.specs.pack}</p></div>}<p className="mt-4 text-sm font-semibold">MOQ confirmed with your quote</p><p className="mt-1 text-xs leading-5 text-[#6b5d58]">Style, mixing and packaging requirements are reviewed for your order.</p><a href={whatsappLink(styleInquiry(style,material === "To be confirmed" ? (style.specs?.fiberRequest ?? material) : material))} target="_blank" rel="noreferrer" className="mt-5 flex min-h-12 items-center justify-center rounded-md bg-[#211716] px-4 py-3 text-sm font-semibold text-white">Request this design on WhatsApp</a><Link className="mt-3 text-center text-sm underline" href={style.slug ? `/designs/${style.slug}` : `/collections/${style.family}`}>{style.slug ? "View specification & sample plan" : "Explore family & sample checklist"}</Link></div>
      </article>)}
    </div>}
  </div>;
}
