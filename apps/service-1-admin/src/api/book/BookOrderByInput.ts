import { SortOrder } from "../../util/SortOrder";

export type BookOrderByInput = {
  author?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
