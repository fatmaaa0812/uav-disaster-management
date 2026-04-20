import { WorkPackageDetail } from "@/components/site/WorkPackageDetail";
import { workPackageDetails } from "@/data/site";

export default function WP3Page() {
  const wp = workPackageDetails.find((item) => item.slug === "wp3");
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
        title: "Integrated Sensing & Communication using PPO",
        description:
          "A centralized PPO-based reinforcement learning agent jointly optimizes UAV positioning, user association, and secure communication decisions based on network state.",
        imageSrc: "/images/wp3/ppo-communication-framework.jpg",
      },

      {
        title: "Security-Aware Resource Allocation for UAV-Assisted O-RAN",
        description:
          "UAVs act as mobile relay nodes within an O-RAN architecture, where reinforcement learning dynamically optimizes power and resource allocation to balance reliability, security, and energy efficiency.",
        imageSrc: "/images/wp3/oran-uav-framework.png",
      },
    ]}
    />
  );
}