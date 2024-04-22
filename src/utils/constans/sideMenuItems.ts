import {
    HOME_PAGE_PATH,
    DOCUMENTATION_PAGE_PATH,
    DATAPROCESSING_PAGE_PATH,
    VISUALIZATION_PAGE_PATH,
  } from "./routes";
  
  export const sideMenuItems = [
    { id: 1, title: "Getting Started", to: HOME_PAGE_PATH },
    { id: 2, title: "Data Importing", to: DOCUMENTATION_PAGE_PATH },
    { id: 3, title: "Visualization", to: DATAPROCESSING_PAGE_PATH },
    { id: 4, title: "Comparing", to: VISUALIZATION_PAGE_PATH },
  ];