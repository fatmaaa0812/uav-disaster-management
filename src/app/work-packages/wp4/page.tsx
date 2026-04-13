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
      videoTitle="ADHL Interactive Digital Twin for Aerial Human Detection and Localization"
      videoDescription="This demonstration presents the Aerial Human Detection and Localization (ADHL) system, an interactive digital twin tool designed to support mission planning in complex disaster environments. It enables responders to design deployment strategies for low-altitude drone crawlers, define circular inspection paths around damaged structures, and visualize navigation in real time. The system also highlights radar-based sensing outputs and channel impulse response views, helping teams search, detect, and localize potentially trapped individuals more effectively."
      videoSrc="/videos/wp4-adhl-demo.mp4"
    />
  );
}