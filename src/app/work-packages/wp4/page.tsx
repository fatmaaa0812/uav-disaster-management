import { WorkPackageDetail } from "@/components/site/WorkPackageDetail";
import { workPackageDetails } from "@/data/site";

export default function WP4Page() {
  const wp = workPackageDetails.find((item) => item.slug === "wp4");
  if (!wp) return null;

  return (
    <WorkPackageDetail
      title={wp.title}
      shortTitle={wp.shortTitle}
      summary={wp.summary}
      overview={wp.overview}
      focusAreas={wp.focusAreas}
      image={wp.image}
      methodologyTitle={wp.methodologyTitle}
      workItems={[
        {
          title: "ADHL Interactive Digital Twin",
          description:
            "We developed an interactive digital twin environment to support mission planning, circular inspection path design, and real-time visualization of low-altitude drone navigation in disaster environments.",
          videoSrc: "https://www.youtube.com/embed/Jy1Q5l90paw",
          isEmbeddedVideo: true,
        },
      ]}
       />
  );
}