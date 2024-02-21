"use client";

import { useState } from "react";

export default function About() {
  const aboutContent = {
    title: "About",
    texts: [
      {
        id: 1,
        text: "bqwdiqdiqwdn qiwdniqwndqiuwdnqiuwidnqiwd iwqdniquwniqn iqw iqnwdiunwqi dniqud niqu dniqu nqiwd u",
      },
      {
        id: 2,
        text: "123 bqwdiqdiqwdn qiwdniqwndqiuwdnqiuwidnqiwd iwqdniquwniqn",
      },
      {
        id: 3,
        text: "456 bqwdiqdiqwdn qiwdniqwndqiuwdnqiuwidnqiwd iwqdniquwniqn",
      },
      {
        id: 4,
        text: "789 bqwdiqdiqwdn qiwdniqwndqiuwdnqiuwidnqiwd iwqdniquwniqn iqw iqnwdiunwqi dniqud niqu dniqu nqiwd u",
      },
    ],
  };

  return (
    <section className="min-h-[50vh] flex items-center">
      <article className="flex flex-col items-start justify-between gap-3 content_wrapper">
        <h1 className="text-3xl font-semibold">{aboutContent.title}</h1>
        <ul>
          {aboutContent.texts.map((t) => {
            return (
              <li key={t.id} className="mb-3">
                <p className="text-sm">{t.text}</p>
              </li>
            );
          })}
        </ul>
      </article>
    </section>
  );
}
