import { create } from "zustand";

export interface Istore {
  key: string | number;
  name_store: string;
  code_store: string;
  phone: string;
  address: string;
  status: boolean;
  coordinates: string;
}

interface storeState {
  stores: Istore[];
  store: Istore | null;
  addStore: (store: Istore) => void;
  setStore: (store: Istore | null) => void;
  getStoreById: (id: string | number) => void;
  editStore: (stote: Istore) => void;
  deleteStore: (id: number | string) => void;
}

const useStoreStore = create<storeState>()((set) => ({
  stores: [
    {
      key: "1",
      code_store: "ONLINE",
      name_store: "Web Manoshop",
      address: "New York No. 1 Lake Park",
      phone: "0947836722",
      status: false,
      coordinates: "",
    },
    {
      key: "2",
      code_store: "284LTK",
      name_store: "284LTK",
      address: "London No. 1 Lake Park",
      phone: "0987656342",
      status: true,
      coordinates: "",
    },
    {
      key: "3",
      code_store: "CHLLB",
      name_store: "Luỹ Bán Bích",
      address: "Sydney No. 1 Lake Park",
      phone: "0938204249",
      status: true,
      coordinates: "",
    },
    {
      key: "4",
      code_store: "CHLLB",
      name_store: "Luỹ Bán Bích",
      address: "Sydney No. 1 Lake Park",
      phone: "0938204249",
      status: true,
      coordinates: "",
    },
  ],
  store: null,
  addStore: (store: Istore) =>
    set((state: storeState) => ({
      stores: [store, ...state.stores],
    })),
  setStore: (store: Istore | null) =>
    set(() => ({
      store: store,
    })),
  getStoreById: (id: string | number) =>
    set((state: storeState) => {
      const store = state.stores.find((item) => item.key === id);
      return {
        store,
      };
    }),

  editStore: (store: Istore) =>
    set((state: storeState) => {
      let index = state.stores.findIndex((item) => item.key === store.key);
      if (index !== -1) {
        state.stores[index] = store;
      }
      return {
        ...state,
        store: null,
      };
    }),
  deleteStore: (id: number | string) =>
    set((state: storeState) => {
      return {
        stores: state.stores.filter((item) => item.key !== id),
        store: null,
      };
    }),
}));

export default useStoreStore;
