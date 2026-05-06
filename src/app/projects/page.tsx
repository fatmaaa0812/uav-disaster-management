import { SectionHeader } from "@/components/site/SectionHeader";
import { SlidesViewer } from "@/components/site/SlidesViewer";

const seniorProject2 = {
  title: "RESCUE: Radar-based Emergency Swarm for Critical Under-rubble Estimation",
  subtitle:
    "Qatar University Senior Project · 2025 · Supervisor: Prof. Amr Mohammed",
  students:
    "Jeham Al-Kuwari, Sultan Al-Harami, Turki Al-Ahzam, Mohammed Al-Sada",
  slideImages: [
    "/slides/senior-project/1.png",
    "/slides/senior-project/2.png",
    "/slides/senior-project/3.png",
    "/slides/senior-project/4.png",
    "/slides/senior-project/5.png",
    "/slides/senior-project/6.png",
    "/slides/senior-project/7.png",
    "/slides/senior-project/8.png",
    "/slides/senior-project/9.png",
    "/slides/senior-project/10.png",
  ],
};

const theses = [
  {
    title:
      "Smart Path Planning for Mobile Multi-Target Visitation in UAV Missions in Stochastic and Adversarial Environments",
    author: "Noor Khial",
    institution: "Qatar University",
    supervisor: "Prof. Amr Mohamed",
    year: 2024,
    type: "M.Sc. Thesis",
  },
  {
    title:
      "Dynamic Task Allocation and Path Planning for Multi-UAV Disaster Search Using Multi-Agent Reinforcement Learning",
    author: "Malek Chabbouh",
    institution: "Qatar University",
    supervisor: "Prof. Amr Mohamed",
    year: 2026,
    type: "M.Sc. Thesis",
    status: "Expected",
  },
];

export default function ProjectsPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Projects & Presentations"
            title="Project presentations, talks, and student projects"
            description="Conference presentations, dissemination activities, and senior project outputs developed under the project."
          />
        </div>
      </section>

      {/* Events & Talks */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="max-w-6xl">
          <div className="flex items-center gap-3">
            <div className="h-1 w-10 rounded-full bg-orange-500" />
            <h2 className="text-2xl font-semibold text-slate-900">
              Events & Talks
            </h2>
          </div>

          <div className="mt-8 border-b border-slate-200 py-10 first:pt-0 last:border-b-0">
            <div className="flex items-start gap-3">
              <div className="mt-2 h-2.5 w-2.5 rotate-45 bg-orange-500" />
              <h3 className="text-2xl font-semibold text-slate-900">
                Futuristic AI-Based Networks
              </h3>
            </div>

            <div className="mt-4 flex flex-wrap gap-6 text-sm text-slate-600">
              <p>
                <span className="font-medium text-slate-900">Event:</span> MWC
                Doha
              </p>
              <p>
                <span className="font-medium text-slate-900">Date:</span> 25–26
                November 2025
              </p>
              <p>
                <span className="font-medium text-slate-900">Presenter:</span>{" "}
                Prof. Amr Mohammed
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/slides/futuristic-ai-based-networks.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-600 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
              >
                Open slides PDF
              </a>
            </div>

            <SlidesViewer
              title="Futuristic AI-Based Networks"
              slides={[
                "/slides/mwc/1.png",
                "/slides/mwc/2.png",
                "/slides/mwc/3.png",
                "/slides/mwc/4.png",
                "/slides/mwc/5.png",
                "/slides/mwc/6.png",
                "/slides/mwc/7.png",
                "/slides/mwc/8.png",
                "/slides/mwc/9.png",
                "/slides/mwc/10.png",
                "/slides/mwc/11.png",
                "/slides/mwc/12.png",
                "/slides/mwc/13.png",
                "/slides/mwc/14.png",
                "/slides/mwc/15.png",
                "/slides/mwc/16.png",
                "/slides/mwc/17.png",
                "/slides/mwc/18.png",
                "/slides/mwc/19.png",
                "/slides/mwc/20.png",
                "/slides/mwc/21.png",
                "/slides/mwc/22.png",
                "/slides/mwc/23.png",
                "/slides/mwc/24.png",
                "/slides/mwc/25.png",
                "/slides/mwc/26.png",
                "/slides/mwc/27.png",
                "/slides/mwc/28.png",
                "/slides/mwc/29.png",
                "/slides/mwc/30.png",
                "/slides/mwc/31.png",
                "/slides/mwc/32.png",
                "/slides/mwc/33.png",
                "/slides/mwc/34.png",
                "/slides/mwc/35.png",
                "/slides/mwc/36.png",
                "/slides/mwc/37.png",
                "/slides/mwc/38.png",
                "/slides/mwc/39.png",
                "/slides/mwc/40.png",
                "/slides/mwc/41.png",
                "/slides/mwc/42.png",
                "/slides/mwc/43.png",
                "/slides/mwc/44.png",
                "/slides/mwc/45.png",
                "/slides/mwc/46.png",
                "/slides/mwc/47.png",
                "/slides/mwc/48.png",
                "/slides/mwc/49.png",
                "/slides/mwc/50.png",
                "/slides/mwc/51.png",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Separator */}
      <section className="mx-auto max-w-7xl px-6 py-1 lg:px-8">
        <div className="flex justify-center">
          <div className="h-px w-250 bg-gradient-to-r from-transparent via-orange-300 to-transparent" />
        </div>
      </section>

      {/* Senior Projects */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="max-w-6xl">
          <div className="flex items-center gap-3">
            <div className="h-1 w-10 rounded-full bg-orange-500" />
            <h2 className="text-2xl font-semibold text-slate-900">
              Senior Projects
            </h2>
          </div>

          {/* Senior Project 1 */}
          <div className="mt-8 border-b border-slate-200 py-10">
            <div className="flex items-start gap-3">
              <div className="mt-2 h-2.5 w-2.5 rotate-45 bg-orange-500" />
              <h3 className="text-2xl font-semibold text-slate-900">
                Q-SAR Drone Swarm for Disaster Management
              </h3>
            </div>

            <div className="mt-5 flex flex-wrap gap-x-8 gap-y-2 text-sm text-slate-600">
              <p>
                <span className="font-medium text-slate-900">Institution:</span>{" "}
                Qatar University
              </p>

              <p>
                <span className="font-medium text-slate-900">Year:</span> 2024
              </p>

              <p>
                <span className="font-medium text-slate-900">Supervisor:</span>{" "}
                Prof. Amr Mohamed
              </p>
              <p className="basis-full">
                <span className="font-medium text-slate-900">Students:</span>{" "}
                Assem Kanjo Alnajjar, Abdulla Mostafa, Ali Elmancy
              </p>
            </div>

            <div className="mt-8">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-orange-500">
                Demo Video
              </p>

              <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
                <div className="relative w-full pb-[56.25%]">
                  <iframe
                    src="https://www.youtube.com/embed/QRfBWPBJPi8?vq=hd1080"
                    title="Q-SAR Drone Swarm for Disaster Management"
                    className="absolute inset-0 h-full w-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Senior Project 2 */}
          <div className="border-b border-slate-200 py-10">
            <div className="flex items-start gap-3">
              <div className="mt-2 h-2.5 w-2.5 rotate-45 bg-orange-500" />
              <h3 className="text-2xl font-semibold text-slate-900">
                {seniorProject2.title}
              </h3>
            </div>

            <div className="mt-5 flex flex-wrap gap-x-8 gap-y-2 text-sm text-slate-600">
              <p>
                <span className="font-medium text-slate-900">Institution:</span>{" "}
                Qatar University
              </p>
              <p>
                <span className="font-medium text-slate-900">Year:</span> 2025
              </p>
              <p>
                <span className="font-medium text-slate-900">Supervisor:</span>{" "}
                Prof. Amr Mohamed
              </p>
              <p className="basis-full">
                <span className="font-medium text-slate-900">Students:</span>{" "}
                {seniorProject2.students}
              </p>
            </div>

            <div className="mt-8">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-orange-500">
                Motivation Video
              </p>

              <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
                <video
                  controls
                  preload="metadata"
                  className="h-[220px] w-full object-contain md:h-[300px]"
                >
                  <source src="/videos/Project_2.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            <div className="mt-10">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-orange-500">
                Final Presentation
              </p>

              <SlidesViewer
                title={seniorProject2.title}
                slides={seniorProject2.slideImages}
              />
            </div>
          </div>

          {/* Senior Project 3 */}
          <div className="py-4">
            <div className="flex items-start gap-3">
              <div className="mt-2 h-2.5 w-2.5 rotate-45 bg-orange-500" />
              <h3 className="text-2xl font-semibold text-slate-900">
                D-SCAN: Seeing Through Walls
              </h3>
            </div>

            <div className="mt-5 flex flex-wrap gap-x-8 gap-y-2 text-sm text-slate-600">
              <p>
                <span className="font-medium text-slate-900">Institution:</span>{" "}
                Qatar University
              </p>
              <p>
                <span className="font-medium text-slate-900">Year:</span> 2026
              </p>
              <p>
                <span className="font-medium text-slate-900">Supervisor:</span>{" "}
                Prof. Amr Mohamed
              </p>
            </div>

            <div className="mt-8">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-orange-500">
                Motivation Video
              </p>

              <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
                <video
                  controls
                  preload="metadata"
                  className="h-[220px] w-full object-contain md:h-[300px]"
                >
                  <source src="/videos/ProjectS252629-PitchingVideo.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
          </div>
      </section>

      {/* Separator */}
      <section className="mx-auto max-w-7xl px-6 py-1 lg:px-8">
        <div className="flex justify-center">
          <div className="h-px w-250 bg-gradient-to-r from-transparent via-orange-300 to-transparent" />
        </div>
      </section>

      {/* Theses */}
      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="max-w-6xl">

          <div className="flex items-center gap-3">
            <div className="h-1 w-10 rounded-full bg-orange-500" />
            <h2 className="text-2xl font-semibold text-slate-900">
              Theses
            </h2>
          </div>

          {theses.map((thesis) => (
            <div
              key={thesis.title}
              className="mt-5 border-b border-slate-200 py-7 last:border-b-0"
            >
              <div className="flex items-start gap-3">

                <div className="mt-2 h-2.5 w-2.5 rotate-45 bg-orange-500" />

                <h3 className="text-2xl font-semibold text-slate-900 max-w-4xl">
                  {thesis.title}
                </h3>

              </div>

              <div className="mt-5 flex flex-wrap gap-x-8 gap-y-2 text-sm text-slate-600">

                <p>
                  <span className="font-medium text-slate-900">Author:</span>{" "}
                  {thesis.author}
                </p>

                <p>
                  <span className="font-medium text-slate-900">Institution:</span>{" "}
                  {thesis.institution}
                </p>

                <p>
                  <span className="font-medium text-slate-900">Supervisor:</span>{" "}
                  {thesis.supervisor}
                </p>

                <p>
                  <span className="font-medium text-slate-900">Year:</span>{" "}
                  {thesis.year}
                </p>

                <p>
                  <span className="font-medium text-slate-900">Type:</span>{" "}
                  {thesis.type}
                </p>

              </div>

            </div>
          ))}

        </div>
      </section>
    </main>
  );
}