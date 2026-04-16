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
            "An interactive digital twin framework supporting mission planning for aerial human detection and localization in complex disaster environments. The tool enables design of structured drone flight paths around damaged buildings, allowing low-altitude UAVs equipped with radar sensing to perform detailed inspections in cluttered areas. Real-time visualization of drone navigation and channel impulse response signals supports identification and localization of potential survivors, improving decision-making during time-critical search and rescue operations.",
          videoSrc: "/videos/wp4-adhl-demo.mp4",
        },
        {
          title: "UE Passive Sensing for Human Presence Detection",
          description:
            "A sensing framework that enables disaster-response drones to detect User Equipment (UE) signals as indicators of potential human presence in hazardous areas. LTE uplink signals are converted into spectrogram representations and analyzed using a deep learning model (YOLO) to distinguish between Line-of-Sight (LOS) and Non-Line-of-Sight (NLOS) channel conditions, while estimating relative distance. This joint inference supports identification of devices located in obstructed environments such as victims trapped under debris.",
          imageSrc: "/images/wp4/passive-sensing-system.png",
        }
      ]}
      futureWorkTitle="Future Work"
      futureWorkText="Future work aims to integrate Vision Language Models (VLM) to provide some sensing directionality of the received RF signal using beamforming and phased arrays. This technique should provide controllability in the direction of reception of uplink signals by adjusting the phased array parameters to narrow the reception angle and eliminate unwanted noise and interference. "
    />
  );
}