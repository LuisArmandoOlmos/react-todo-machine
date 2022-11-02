import { useEffect, useState } from "react";

export const useLocalStorage = (itemName, initialValue) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [item, setItem] = useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify([]));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      } catch (error) {}
    }, 1000);
  }, []);

  const saveItem = (newItem) => {
    try {
      const stringifyNewItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifyNewItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  return {
    error,
    item,
    loading,
    saveItem,
  };
};
