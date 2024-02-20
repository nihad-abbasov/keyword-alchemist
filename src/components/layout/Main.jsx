"use client";

import useLoading from "../../utils/hooks/useLoading";
import { Loading } from "../Loading";

export const Main = ({ children }) => {
  const isLoading = useLoading(1500);

  return isLoading ? (
    <Loading />
  ) : (
    <main className="container mx-auto willFadeIn pt-7 md:py-10">
      {children}
    </main>
  );
};
