import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BookWhereInput = {
  author?: StringNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};
