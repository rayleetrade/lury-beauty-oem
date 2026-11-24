import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BuyerShell, BuyerIntro } from "../components/BuyerUI";
import { styleFamilies, typicalMoq } from "../data/catalog";

export const metadata: Metadata = {
  title: "Lash Style Collections | Wholesale & Private Label",
  description:
    "Browse lash style families for private label development: natural, wispy, volume, manga, cat-eye, doll, brown and mapped designs. Confirm the physical sample before ordering.",
  alternates: { canonical: "/collections" },
  openGraph: {
    title: "Lash Style Collections | Wholesale & Private Label",
    description:
      "Browse lash style families for private label development. Sample, specification and MOQ are confirmed per style.",
    url: "/collections",
  },
};

export default function CollectionsIndex() {
  return (
    <BuyerShell>
      <BuyerIntro
        eyebrow="Style families"
        title="Lash style collections for your private label brief."
      >
        <p>
          Each family groups design directions you can use to describe the look you want.
          These are development references, not a verified stock catalogue. {typicalMoq}
        </p>
      </BuyerIntro>
      <section className="buyer-section">
        <div className="buyer-wrap buyer-grid buyer-grid-three">
          {styleFamilies.map((family) => (
            <Link
              key={family.slug}
              href={`/collections/${family.slug}`}
              className="group overflow-hidden rounded-xl border border-[#eadbd2] bg-white transition hover:border-[#c9a98f]"
            >
              <div className="relative aspect-square bg-[#faf4ef]">
                <Image
                  src={family.image}
                  alt={`${family.name} lash style family illustration`}
                  fill
                  sizes="(min-width:1024px) 30vw, (min-width:640px) 45vw, 100vw"
                  className="object-contain"
                />
              </div>
              <div className="p-5">
                <h2 className="font-display text-2xl">{family.name}</h2>
                <p className="mt-2 text-sm leading-7 text-[#6b5d58]">{family.description}</p>
                <span className="mt-3 inline-block text-sm font-semibold underline">
                  View {family.name} directions
                </span>
              </div>
            </Link>
          ))}
        </div>
        <p className="mt-8 text-sm leading-7 text-[#6b5d58]">
          Prefer to browse every concept at once?{" "}
          <Link href="/design-library" className="font-semibold underline">
            Open the design library
          </Link>
          .
        </p>
      </section>
    </BuyerShell>
  );
}
