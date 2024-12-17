import Header4 from "@/components/headers/Header4";
import Footer3 from "@/components/footers/Footer3";
import ModernCreatorProfile from "./ModernCreatorProfile"; // Client component

async function getCreatorData(slug) {
  // console.log("Fetching data for slug:", slug);
  const res = await fetch(
    `https://cms.dev80.tech/api/talent-descriptions?filters[slug][$eq]=${slug}&populate[1]=Handels.ProfileImage&populate=images&populate=BrandsCollabs`,
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
    return {
      title: "Creator not found",
    };
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
        value: attributes.Demographicsage1317,
        colorClass: "bar-color-1",
      },
      {
        title: "18-24 Years",
        value: attributes.Demographicsage1824,
        colorClass: "bar-color-2",
      },
      {
        title: "25-34 Years",
        value: attributes.Demographicsage2534,
        colorClass: "bar-color-3",
      },
      {
        title: "35-44 Years",
        value: attributes.Demographicsage3544,
        colorClass: "bar-color-4",
      },
      {
        title: "45+ Years",
        value: attributes.Demographicsage45,
        colorClass: "bar-color-1",
      },
    ],
    GenderDistribution: [
      {
        title: "Male",
        value: attributes.MaleAudience,
        colorClass: "bar-color-1",
      },
      {
        title: "Female",
        value: 100 - attributes.MaleAudience,
        colorClass: "bar-color-3",
      },
    ],

    Handel: attributes.Handels,
    Tags: attributes.Tagline.split(","),
    Phnum: attributes.TalentManagerNumber,
  };
  console.log(transformedCreator);
  return (
    <>
      <Header4 />
      <ModernCreatorProfile creator={transformedCreator} />
      <Footer3 />
    </>
  );
}
