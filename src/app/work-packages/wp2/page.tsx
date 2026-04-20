import { WorkPackageDetail } from "@/components/site/WorkPackageDetail";
import { workPackageDetails } from "@/data/site";

export default function WP2Page() {
  const wp = workPackageDetails.find((item) => item.slug === "wp2");
  if (!wp) return null;

  return (
    <WorkPackageDetail
      title={wp.title}
      shortTitle={wp.shortTitle}
      summary="WP2 develops AI-based techniques for deployment, navigation, and intelligent search in evolving post-disaster environments."
      overview="WP2 focuses on AI-driven deployment and search strategies, using reinforcement learning and visual language models to improve UAV coordination, coverage, and adaptability in complex disaster scenes."
      focusAreas={[
        "Multi-Agent RL",
        "Visual Language Models",
        "Search Optimization",
        "Dynamic Deployment",
        "Autonomous Navigation",
        "Disaster Adaptation",
      ]}
      image={wp.image}
      methodologyTitle={wp.methodologyTitle}
      workItems={[
        {
          title: "Adaptive Navigation in Changing Disaster Environments",
          description:
            "A hybrid offline–online learning framework enables UAV navigation to adapt to evolving disaster environments by selecting appropriate policies for different structural conditions without retraining.",
          imageSrc: "/images/wp2/kbs2026-framework.jpg",
        },

        {
          title: "Policy Library & Online Selection",
          description:
            "A library of pre-trained navigation policies is combined with an online selection mechanism that chooses the most suitable policy in real time based on the current environment.",
          imageSrc: "/images/wp2/kbs2026-policy-selection.png",
        },

        {
          title: "Dynamic Deployment using Multi-Agent RL",
          description:
            "A multi-agent reinforcement learning framework dynamically optimizes drone deployment in disaster environments, achieving accurate response to dynamic scenarios, 60% reduction in mission time, and 10% improvement in accuracy.",
          imageSrc: "/images/wp2/wp2-marl-deployment.jpg",
        },
        
      ]}
    />
  );
}