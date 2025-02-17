import type { LocalStorageItem } from "./types";

export const setItem = <T>(nama: string, data: T) => {
  if (typeof window !== "undefined") {
    const item: LocalStorageItem<T> = {
      nama: nama,
      data: data
    };
    // Simpan ke localStorage
    localStorage.setItem(item.nama, JSON.stringify(item.data));
  }
};

export const getItem = <T>(nama: string): T | null => {
  if (typeof window !== "undefined") {
    // Ambil data dari localStorage
    const item = localStorage.getItem(nama);

    if (item !== null) {
      try {
        // Parsing dan mengembalikan data
        const decryptedData = JSON.parse(item);
        return decryptedData as T;
      } catch (e) {
        console.error("Failed to parse localStorage item:", e);
        return null;
      }
    } else {
      // Jika item tidak ada, kembalikan null
      return null;
    }
  }
  return null;
};
