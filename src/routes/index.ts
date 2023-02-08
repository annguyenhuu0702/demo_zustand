import { lazy } from "react";
import DefaultLayout from "../layouts/defaultLayout/defaultLayout";
import { route } from "../types/routes";

const Store = lazy(() => import("../pages/Store/store"));
const FormStore = lazy(() => import("../pages/Store/FormStore"));

export const publicRoute: route[] = [
  {
    path: "",
    element: Store,
    layout: DefaultLayout,
  },
  {
    path: "/store/add",
    element: FormStore,
    layout: DefaultLayout,
  },
];
