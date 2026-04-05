import { useEffect } from "react";

const BASE = "Ausome Heroes";

export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} | ${BASE}` : `${BASE} | Giving Every Child Wings`;
  }, [title]);
}
