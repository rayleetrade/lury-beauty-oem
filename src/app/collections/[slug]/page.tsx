import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader, SiteFooter, FloatingWhatsapp } from "../../components/SiteChrome";
import { StyleCatalog } from "../../components/StyleCatalog";
import { JsonLd } from "../../components/JsonLd";
import { lashStyles, styleFamilies, typicalMoq } from "../../data/catalog";
import { absoluteUrl, siteConfig, whatsappLink } from "../../siteConfig";
type Props = { params: Promise<{slug:string}> };
export function generateStaticParams() { return styleFamilies.map(f => ({slug:f.slug})); }
export async function generateMetadata({params}:Props):Promise<Metadata> {
  const {slug} = await params;
  const f = styleFamilies.find(f => f.slug === slug);
  if(!f) return {};
  return {title:`${f.name} Self-Adhesive Lashes | Wholesale & Private Label`,description:`${f.description} Custom material and packaging requests. MOQ is confirmed for the actual style and packaging.`,alternates:{canonical:`/collections/${slug}`},openGraph:{title:`${f.name} Self-Adhesive Lash Design Directions`,description:f.description,url:`/collections/${slug}`,images:[{url:f.image,alt:`${f.name} family style illustration`}]}};
}
export default async function CollectionPage({params}:Props) {
  const {slug}=await params;
  const f=styleFamilies.find(f => f.slug === slug);
  if(!f) notFound();
  const styles=lashStyles.filter(s => s.family === slug);
  const request=whatsappLink(`Hello Lury Beauty, I am interested in ${f.name} self-adhesive lash designs for my private label collection. My approximate quantity is to be discussed. Please confirm material options, MOQ per style, packaging and sample steps. Destination:`);
  return <main className="bg-[#fff9f6] text-[#1e1716]"><SiteHeader />
    <JsonLd data={{"@context":"https://schema.org","@type":"CollectionPage",name:`${f.name} self-adhesive lash design directions`,url:absoluteUrl(`/collections/${slug}`),description:f.description}} />
    <section className="px-4 py-14 md:px-8"><div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2"><div><nav aria-label="Breadcrumb" className="text-sm text-[#6b5d58]"><Link href="/">Home</Link> / <Link href="/design-library">Design library</Link> / {f.name}</nav><h1 className="mt-6 font-display text-5xl md:text-6xl">{f.name} self-adhesive lash designs.</h1><p className="mt-5 text-lg leading-8 text-[#6b5d58]">{f.description}</p><p className="mt-5 font-semibold">{typicalMoq}</p><p className="mt-4 text-sm leading-7 text-[#6b5d58]">Lury Beauty coordinates made-to-order lash sourcing and private label packaging from China for UK, US and Southeast Asian buyers. Confirm your style, raw material and product format before sample development.</p><a href={request} target="_blank" rel="noreferrer" className="mt-6 inline-block rounded-md bg-[#211716] px-6 py-4 font-semibold text-white">Request family quotation</a></div><figure className="rounded-xl border border-[#eadbd2] bg-white"><div className="relative aspect-square"><Image src={f.image} alt={`Representative ${f.name} family illustration`} fill priority sizes="(min-width:1024px) 50vw,100vw" className="object-contain" /></div><figcaption className="p-4 text-xs leading-5 text-[#6b5d58]">Representative style illustration, shared across this family. Exact appearance and specifications require sample approval.</figcaption></figure></div></section>
    <section className="border-y border-[#eadbd2] bg-white px-4 py-12 md:px-8"><div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2"><div><h2 className="font-display text-3xl">What to check on your sample.</h2><p className="mt-4 leading-8 text-[#6b5d58]">{f.sampleChecklist}</p></div><div><h2 className="font-display text-3xl">What your brief should specify.</h2><ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-[#6b5d58]"><li>Fiber material, finish, color, length, curl and mapping.</li><li>Cluster count or pairs per box, tray and branding.</li><li>Self-adhesive format, instructions and performance to be sampled.</li><li>Order quantity, delivery market and launch schedule.</li></ul><p className="mt-4 text-sm leading-7 text-[#6b5d58]">No separate liquid glue is proposed. Pre-applied adhesive composition and storage details are confirmed for the actual product. Wear and reuse claims must match the approved sample and available evidence.</p></div></div></section>
    <section className="px-4 py-14 md:px-8"><div className="mx-auto max-w-7xl"><h2 className="mb-6 font-display text-4xl">20 directions to start your brief.</h2><StyleCatalog styles={styles} /></div></section>
    {f.references.length > 0 && <section className="bg-white px-4 py-12 md:px-8"><div className="mx-auto max-w-7xl"><h2 className="font-display text-3xl">Retail format references.</h2><p className="mt-4 text-sm leading-7 text-[#6b5d58]">These independent retail listings show a related format available in the market. They are not our products, do not establish our specifications and do not prove a bestseller ranking.</p><ul className="mt-5 space-y-3">{f.references.map(r => <li key={r.id}><a className="text-sm underline" href={r.url} target="_blank" rel="noreferrer">{r.market}: view related retail listing</a></li>)}</ul></div></section>}
    <section className="px-4 py-12 text-center md:px-8"><p className="font-semibold">Talk to Lury Beauty about your specifications.</p><a href={request} target="_blank" rel="noreferrer" className="mt-4 inline-block underline">WhatsApp {siteConfig.whatsappDisplay}</a><div className="mt-5"><Link href="/design-library" className="font-semibold underline">Back to all 200 design concepts</Link></div></section>
    <SiteFooter /><FloatingWhatsapp /></main>;
}
