import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { BUSINESS_VERTICALS, getEndeavourBySlug, getAllEndeavours } from "@/data/content";
import EndeavourDetailView from "@/components/EndeavourDetailView";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  return BUSINESS_VERTICALS.map((vertical) => ({
    slug: vertical.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const endeavour = getEndeavourBySlug(slug);

  if (!endeavour) {
    return {
      title: "Endeavour Not Found | Krad Global",
    };
  }

  return {
    title: `${endeavour.title} | Endeavours | Krad Global`,
    description: `${endeavour.tagline}. Operating in ${endeavour.country}. ${endeavour.shortDescription}`,
    openGraph: {
      title: `${endeavour.title} - Krad Global`,
      description: endeavour.shortDescription,
      images: [endeavour.image],
    },
  };
}

export default async function EndeavourPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const endeavour = getEndeavourBySlug(slug);

  if (!endeavour) {
    notFound();
  }

  const allEndeavours = getAllEndeavours();

  return (
    <>
      <EndeavourDetailView endeavour={endeavour} allEndeavours={allEndeavours} />
      <Footer />
    </>
  );
}
