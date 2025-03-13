import { create } from "zustand";

interface ActiveSectionState {
    activeSectionName: string;
    setActiveSectionName: (activeSectionName: string) => void;
  };
  
  export const useActiveSection = create<ActiveSectionState>((set) => ({
    activeSectionName: "Home",
    setActiveSectionName: (activeSectionName: string) =>
      set({ activeSectionName: activeSectionName}),
  }));

  

  interface TimeOfLastClickState {
    timeOfLastClick: number;
    setTimeOfLastClick: (timeOfLastClick: number) => void;
  };
  
  export const useTimeOfLastClick = create<TimeOfLastClickState>((set) => ({
    timeOfLastClick: 0,
    setTimeOfLastClick: (timeOfLastClick: number) =>
      set({ timeOfLastClick: timeOfLastClick}),
  }));