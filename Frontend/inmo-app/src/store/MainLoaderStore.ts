import {create} from 'zustand';

interface MainLoaderStoreState {
  mainLoader: boolean;
  setMainLoader: (value: boolean) => void;
}

export const useMainLoaderStore = create<MainLoaderStoreState>()(set => ({
  mainLoader: false,
  setMainLoader: value =>
    set(() => ({
      mainLoader: value,
    })),
}));
