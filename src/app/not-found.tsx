import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader, SiteFooter, FloatingWhatsapp } from "./components/SiteChrome";

export const metadata: Metadata = {
  title: { absolute: "Page not found | Lury Beauty" },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="bg-[#fff9f6] text-[#1e1716]">
      <SiteHeader />
      <section className="px-4 py-24 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9c6a47]">404</p>
          <h1 className="mt-4 font-display text-4xl md:text-5xl">This page is not here.</h1>
          <p className="mt-5 leading-8 text-[#6b5d58]">
            The link may be out of date. Start from the product references, the design library, or
            send your brief directly.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm font-semibold">
            <Link href="/" className="rounded-md bg-[#211716] px-5 py-3 text-white">Home</Link>
            <Link href="/products" className="rounded-md border border-[#d9c4b6] px-5 py-3">Products</Link>
            <Link href="/design-library" className="rounded-md border border-[#d9c4b6] px-5 py-3">Design library</Link>
            <Link href="/contact" className="rounded-md border border-[#d9c4b6] px-5 py-3">Contact</Link>
          </div>
        </div>
      </section>
      <SiteFooter />
      <FloatingWhatsapp />
    </main>
  );
}
