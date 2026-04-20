import { WorkPackageDetail } from "@/components/site/WorkPackageDetail";
import { workPackageDetails } from "@/data/site";

export default function WP1Page() {
  const wp = workPackageDetails.find((item) => item.slug === "wp1");
  if (!wp) return null;

  return (
    <WorkPackageDetail
      title={wp.title}
      shortTitle={wp.shortTitle}
      summary="WP1 develops the core multi-drone swarm architecture and sensing framework for post-disaster management."
      overview="WP1 focuses on the system architecture, sensing integration, and coordinated swarm design for human detection in complex disaster environments."
      focusAreas={[
        "Swarm Architecture",
        "Sensor Integration",
        "Human Detection",
        "Multi-Modal Sensing",
      ]}
      image={wp.image}
      methodologyTitle={wp.methodologyTitle}
      workItems={[
      {
        title: "Multi-Modal Sensing Framework",
        description:
          "Integration of complementary sensing modalities to improve life-sign detection robustness in complex post-disaster environments.",
        imageSrc: "/images/wp1/wp1-multimodal-framework.png",
      },
      {
        title: "Passive Sensing System",
        description:
          "RF-based sensing supports victim localization by detecting mobile device signals in disaster environments.",
        imageSrc: "/images/wp1/wp1-rf-detector.png",
      },

      {
        title: "UWB/FMCW Radar Human Detection",
        description:
          "Channel Impulse Response (CIR) features extracted from UWB/FMCW radar signals enable detection of human presence under obstacles, achieving 85% accuracy using a Random Forest (RandF) classifier.",
        imageSrc: "/images/wp1/wp1-radar-cir.jpg",
      },

    ]}
    />
  );
}