import { WorkPackageDetail } from "@/components/site/WorkPackageDetail";
import { workPackageDetails } from "@/data/site";

export default function WP1Page() {
  const wp = workPackageDetails.find((item) => item.slug === "wp1");

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
    />
  );
}