"use client";

import { Suspense } from "react";
import { useTabNavigation } from "@/hooks/useTabNavigation";
import {
  Practice,
  Examples,
  LayoutExample,
  InViewExample,
  VariantsExample,
} from "./_components";

function MotionContent() {
  const { activeTab, changeTab } = useTabNavigation("examples");

  const tabs = [
    { id: "examples", label: "Examples", content: <Examples /> },
    { id: "layout", label: "Layout", content: <LayoutExample /> },
    { id: "inView", label: "InView", content: <InViewExample /> },
    {
      id: "variants",
      label: "Variants",
      content: <VariantsExample />,
    },
    { id: "practice", label: "practice", content: <Practice /> },
    { id: "opacity", label: "Opacity", content: <div>Opacity Animation</div> },
  ];

  return (
    <div className="p-8">
      {/* Tab Headers */}
      <div className="flex gap-4 mb-8 border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => changeTab(tab.id)}
            className={`px-4 py-2 transition-colors ${
              activeTab === tab.id
                ? "border-b-2 border-blue-500 text-blue-500 font-semibold"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}

function MotionPages() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MotionContent />
    </Suspense>
  );
}

export default MotionPages;
