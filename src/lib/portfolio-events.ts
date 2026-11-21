import { createContext, useContext } from "react";

export interface PortfolioInteractionContextValue {
  projectTechFilter: string | null;
  setProjectTechFilter: (tech: string | null) => void;
  contactDraft: {
    subject: string;
    message?: string;
    nonce: number;
  } | null;
  requestContact: (subject: string, message?: string) => void;
  jumpToProjectsWithTech: (tech: string) => void;
}

export const PortfolioInteractionContext = createContext<PortfolioInteractionContextValue | null>(
  null,
);

export function usePortfolioInteraction() {
  const ctx = useContext(PortfolioInteractionContext);
  if (!ctx) {
    throw new Error("usePortfolioInteraction debe usarse dentro de PortfolioInteractionProvider");
  }
  return ctx;
}
