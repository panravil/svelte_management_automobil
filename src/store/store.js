import { writable } from "svelte/store";

export const AutoMobilItems = writable([
  { brand: "AUDI", model: "A6", yearOfManufacture: 2016, image: 'https://d46-a.sdn.cz/d_46/c_img_QJ_m/ffYohC.jpeg?fl=exf|res,1024,768,1|wrm,/watermark/sbazar.png,10,10|jpg,80,,1' },
  { brand: "AUDI", model: "A7", yearOfManufacture: 2017, image: 'https://d46-a.sdn.cz/d_46/c_img_QO_u/4EhdgZ.jpeg?fl=exf|crr,1.33333,2|res,800,600,1|wrm,/watermark/sbazar.png,10,10|jpg,80,,1' },
  { brand: "AUDI", model: "A8", yearOfManufacture: 2018, image: 'https://d46-a.sdn.cz/d_46/c_img_gX_s/XqrFoG.jpeg?fl=exf|crr,1.33333,2|res,800,600,1|wrm,/watermark/sbazar.png,10,10|jpg,80,,1' },
]);
