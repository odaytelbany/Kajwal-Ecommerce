"use client";

import { useDraftModeEnvironment } from "next-sanity/hooks";
import { useRouter } from "next/navigation";

export function DisableDraftMode() {
    const environment = useDraftModeEnvironment();
    const router = useRouter();

    if (environment !== "live" && environment !== "unknown") {
        return null;
    }

    const handleClick = async () => {
        await fetch("/draft-mode/disable");
        router.refresh();
    };

    return (
        <button
            onClick={handleClick}
            className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 z-50 rounded-lg"
        >
            Disable Draft Mode
        </button>
    )
}