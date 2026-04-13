"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { SectionHeader } from "@/components/site/SectionHeader";
import { teamMembersHome } from "@/data/site";

const groupOrder = [
  "Leadership",
  "Researchers & Postdoc",
  "Graduate Students",
  "Undergraduate Student",
  "Collaborators",
];

export function TeamPreview() {
  const [openGroups, setOpenGroups] = useState<string[]>([]);

  const grouped = groupOrder
    .map((group) => ({
      group,
      members: teamMembersHome.filter((person) => person.group === group),
    }))
    .filter((section) => section.members.length > 0);

  const toggleGroup = (group: string) => {
    setOpenGroups((prev) =>
      prev.includes(group)
        ? prev.filter((item) => item !== group)
        : [...prev, group]
    );
  };

  const leadership = grouped.find((section) => section.group === "Leadership");
  const otherGroups = grouped.filter((section) => section.group !== "Leadership");

  return (
    <section id="team" className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
      <SectionHeader
        eyebrow="Team"
        title="Project team"
        description="The project brings together leadership, researchers, graduate students, and collaborators working across architecture, AI, sensing, secure communication, and digital twin development."
        align="center"
      />

      {leadership ? (
        <div className="mt-10">
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="h-1 w-12 rounded-full bg-orange-500" />
            <h3 className="text-2xl font-semibold text-slate-900">
              {leadership.group}
            </h3>
          </div>

          <div className="flex justify-center">
            <div className="grid w-full max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {leadership.members.map((person) => (
                <a
                  key={person.name}
                  href={person.href}
                  target="_blank"
                  rel="noreferrer"
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="relative h-44 w-full bg-slate-100">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-4">
                    <h4 className="text-sm font-semibold text-slate-900">
                      {person.name}
                    </h4>
                    <p className="mt-1 text-xs leading-5 text-slate-600">
                      {person.role}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      <div className="mx-auto mt-10 max-w-5xl">
        <div className="space-y-2">
          {otherGroups.map((section) => {
            const isOpen = openGroups.includes(section.group);

            return (
              <div key={section.group} className="border-b border-slate-200">
                <button
                  type="button"
                  onClick={() => toggleGroup(section.group)}
                  className="flex items-center gap-2 py-4 text-left group"
                >
                  <ChevronDown
                    className={`h-5 w-5 text-orange-500 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />

                  <span className="text-lg font-semibold text-slate-900 transition group-hover:text-orange-500">
                    {section.group}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-6">
                      <div className="grid w-full max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                        {section.members.map((person) => (
                          <a
                            key={person.name}
                            href={person.href}
                            target="_blank"
                            rel="noreferrer"
                            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                          >
                            <div className="relative h-44 w-full bg-slate-100">
                              <Image
                                src={person.image}
                                alt={person.name}
                                fill
                                className="object-cover"
                              />
                            </div>

                            <div className="p-4">
                              <h4 className="text-sm font-semibold text-slate-900">
                                {person.name}
                              </h4>
                              <p className="mt-1 text-xs leading-5 text-slate-600">
                                {person.role}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}