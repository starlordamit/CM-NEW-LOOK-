import Header4 from "@/components/headers/Header4";
import Footer3 from "@/components/footers/Footer3";
import ModernCreatorProfile from "./ModernCreatorProfile"; // Client component
import { red } from "@mui/material/colors";
import { redirect } from "next/navigation";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
// ${API_URL}
async function getCreatorData(slug) {
  // console.log("Fetching data for slug:", slug);

  const res = await fetch(
    `${API_URL}/talent-descriptions?filters[slug][$eq]=${slug}&populate[1]=Handels.ProfileImage&populate=images&populate=BrandsCollabs&populate[2]=Demographics`,
    { cache: "no-store" }
  );
  // console.log("Response status:", res.status);

  if (!res.ok) {
    // console.log("API returned an error:", await res.text());
    return null;
  }

  const json = await res.json();
  // console.log("Data received:", json);
  return json.data?.[0] || null;
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const creator = await getCreatorData(slug);

  if (!creator) {
    //redirect to talents page
    redirect("/talents");
  }

  return {
    title: `Creator | ${creator.CreatorName}`,
    description: creator.Tagline || "Showcase creator profile",
  };
}

export default async function Page({ params }) {
  const { slug } = params;
  const creator = await getCreatorData(slug);

  if (!creator) {
    return (
      <>
        <Header4 />
        <div
          style={{
            minHeight: "60vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "sans-serif",
          }}
        >
          <h2 style={{ fontSize: "2rem", color: "#333" }}>Creator not found</h2>
        </div>
        <Footer3 />
      </>
    );
  }

  // If your API doesn't return Photos, Videos, etc., you must adapt this part.
  // Here we’re assuming the API returns these arrays, or we fall back to placeholders.
  const attributes = creator;
  console.log(attributes.Demographics[0].Demographicsage1317);

  const transformedCreator = {
    CreatorName: attributes.CreatorName,
    Tagline: attributes.Tagline,
    Location: attributes.Location,
    Description: attributes.Description,
    images: attributes.images || [], // primary profile image is the first one
    socialslinks: attributes.socialslinks || "",
    Photos: attributes.Photos || [
      "/images/photo1.jpg",
      "/images/photo2.jpg",
      "/images/photo3.jpg",
      "/images/photo4.jpg",
    ],
    Videos: attributes.BrandsCollabs || [
      { thumbnail: "/images/video_thumb1.jpg", title: "Past Work 1" },
      { thumbnail: "/images/video_thumb2.jpg", title: "Past Work 2" },
    ],
    AudienceStats: [
      {
        title: "13-17 Years",
        value: attributes.Demographics[0].Demographicsage1317 || 10,
        colorClass: "bar-color-1",
      },
      {
        title: "18-24 Years",
        value: attributes.Demographics[0].Demographicsage1824 || 10,
        colorClass: "bar-color-2",
      },
      {
        title: "25-34 Years",
        value: attributes.Demographics[0].Demographicsage2534 || 10,
        colorClass: "bar-color-3",
      },
      {
        title: "35-44 Years",
        value: attributes.Demographics[0].Demographicsage3544 || 10,
        colorClass: "bar-color-4",
      },
      {
        title: "45+ Years",
        value: attributes.Demographics[0].Demographicsage45 || 10,
        colorClass: "bar-color-1",
      },
    ],
    GenderDistribution: [
      {
        title: "Male",
        value: Math.round(attributes.Demographics[0].MaleAudience) || 10,
        colorClass: "bar-color-1",
      },
      {
        title: "Female",
        value: attributes.Demographics[0].MaleAudience
          ? Math.round(100 - attributes.Demographics[0].MaleAudience)
          : 90,
        colorClass: "bar-color-3",
      },
    ],

    Handel: attributes.Handels || [],
    Tags: attributes.Tagline?.split(",") || [],
    Phnum: attributes.TalentManagerNumber || "919410464303",
  };
  // console.log(transformedCreator);
  return (
    <>
      <Header4 />
      <ModernCreatorProfile creator={transformedCreator} />
      <Footer3 />
    </>
  );
}
