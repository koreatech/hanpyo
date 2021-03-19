import React from 'react';
import { RootStore } from '@/stores';

export const StoreContext = React.createContext(new RootStore());
export const StoreProvider = StoreContext.Provider;
export const useStores = (): RootStore => React.useContext(StoreContext);
