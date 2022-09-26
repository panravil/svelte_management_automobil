import { writable } from "svelte/store";

export const AutoMobilItems = writable([
  { brand: "AUDI", model: "A6", yearOfManufacture: 2016, status: true },
  { brand: "AUDI", model: "A7", yearOfManufacture: 2017, status: false },
  { brand: "AUDI", model: "A8", yearOfManufacture: 2018, status: false },
]);

export const selectedAuto = writable({ selected: 0 });
