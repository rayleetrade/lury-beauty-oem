import type { Metadata } from "next";
import { BuyerShell, BuyerIntro } from "../components/BuyerUI";
import { StyleCatalog } from "../components/StyleCatalog";
export const metadata: Metadata={title:"Concept Lash Design Library",description:"Illustrative style briefs for sample development. Not a verified stock product catalog.",robots:{index:false,follow:true},alternates:{canonical:"/design-library"}};
export default function DesignLibrary(){return <BuyerShell><BuyerIntro eyebrow="For a design discussion" title="Concepts to help describe your next lash range."><p>These illustrations and proposed specifications are development references. They do not establish a tested product, stock, MOQ or production availability. Confirm the actual sample before ordering.</p></BuyerIntro><section className="buyer-section"><div className="buyer-wrap"><StyleCatalog /></div></section></BuyerShell>;}
