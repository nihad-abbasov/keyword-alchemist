"use client";

import { useState } from "react";
import { AboutView } from '../../../views/AboutView';

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
    <AboutView />
  );
}
