import { Reclam } from "@/utils/types";
import React from "react";

    interface ReclamItemProps {
        reclam: Reclam;
    }
    

function Reclamitem({reclam}: ReclamItemProps) {
    return (
        <div className="h-[16rem] px-4 py-3 flex flex-col gap-4 shadow-sm bg-[#f9f9f9] rounded-lg border-2 border-white">
          Reclamitem
        </div>
    );
}

export default Reclamitem;