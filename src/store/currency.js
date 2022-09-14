import { store } from "hybrids";
import { api } from "./utils.js";

export default {
  id: true,
  name: "",
  code: "",
  [store.connect]: {
    get: (query) => {
      const [id, date] = query.split(".");
      return api(`/${date}/currencies.json`).then((result) => ({
        id: { id, date },
        name: result[id],
        code: id.toUpperCase(),
      }));
    },
    list: (date) =>
      api(`/${date}/currencies.json`).then((result) =>
        Object.entries(result).map(([id, name]) => ({
          id: `${id}.${date}`,
          name,
          code: id.toUpperCase(),
        }))
      ),
  },
};
