import { Switch } from "@/components/ui/switch";
import React from "react";

export default function Pricingtoggle({ enabled, setEnabled }: { enabled: boolean, setEnabled: (enabled: boolean) => void }) {
  return (
    <div>
      <div className="flex items-center">
        <span className={`font-bold mr-2 ${enabled ? "text-gray-500/60" : ""}`}>
          Monthly
        </span>
        <Switch
          checked={enabled}
          onCheckedChange={setEnabled}
          className={`${enabled ? "bg-[#54BD95]" : "bg-gray-200"
            } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span
            className={`${enabled ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
          />
        </Switch>
        <span className={`font-bold ml-2 ${enabled ? "" : "text-gray-500/60"}`}>
          Yearly
        </span>
      </div>
    </div>
  );
}
