"use client"

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSection, useTimeOfLastClick } from "@/store/store";


export function useSectionInView(sectionName: string, threshold = 0.75) {
    const { ref, inView } = useInView({
        threshold
      });
    
      const {setActiveSectionName} = useActiveSection();

      const { timeOfLastClick} = useTimeOfLastClick();
      
      useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSectionName(sectionName);
        }
      }, [inView, setActiveSectionName, timeOfLastClick, sectionName]);

      return {
        ref
      }
}