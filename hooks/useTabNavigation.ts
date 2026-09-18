"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function useTabNavigation(defaultTab: string) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(defaultTab);

  useEffect(() => {
    const pageParam = searchParams.get("page");
    if (pageParam) {
      setActiveTab(pageParam);
    }
  }, [searchParams]);

  const changeTab = (tab: string) => {
    setActiveTab(tab);
    router.push(`?page=${tab}`);
  };

  return { activeTab, changeTab };
}
