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
          title: "Security-Aware Resource Allocation for UAV-Assisted O-RAN",
          description:
            "A foundational framework enabling UAVs to operate as mobile relay nodes within an O-RAN architecture to restore wireless connectivity in disaster-affected regions. The approach jointly considers spectral efficiency, transmission security, and energy consumption, which are inherently competing objectives in emergency communication systems. A reinforcement learning agent dynamically adapts power allocation and subcarrier assignment to maintain reliable and secure communication links while managing energy constraints, demonstrating effective trade-off balancing between secrecy performance and resource efficiency.",
          imageSrc: "/images/wp3/oran-uav-framework.png",
        },
      ]}
      futureWorkTitle="Future Work"
      futureWorkText="Future work extends the reinforcement learning framework by incorporating a complementary model-based optimization approach to provide an optimal benchmark under known network conditions. This unified framework will jointly address security, latency, and energy efficiency in UAV-assisted O-RAN systems, enabling rigorous comparison between optimal and adaptive solutions. The combined analysis will offer deeper insight into trade-offs between solution optimality and real-time adaptability, supporting practical deployment strategies for reliable and secure emergency communication networks."
    />
  );
}