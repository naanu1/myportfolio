import { create } from 'zustand';
import { ZoneType } from '@/types';

interface PortfolioState {
    activeZone: ZoneType;
    hoveredObject: string | null;
    isIntroComplete: boolean;
    setActiveZone: (zone: ZoneType) => void;
    setHoveredObject: (id: string | null) => void;
    completeIntro: () => void;
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
    activeZone: null,
    hoveredObject: null,
    isIntroComplete: false,
    setActiveZone: (zone) => set({ activeZone: zone }),
    setHoveredObject: (id) => set({ hoveredObject: id }),
    completeIntro: () => set({ isIntroComplete: true }),
}));
