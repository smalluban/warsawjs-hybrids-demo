import { store } from "hybrids";

import { api } from "./utils.js";
import Currency from "./currency.js";

export default {
  id: true,
  values: [{ currency: Currency, value: 0 }],

  [store.connect]: {
    get: async (query) => {
      const [id, date] = query.split(".");
      const [result] = await Promise.all([
        api(`/${date}/currencies/${id}.json`),
        store.resolve(store.get([Currency], date)), // prefetch currencies
      ]);

      return {
        id: query,
        values: Object.entries(result[id]).map(([cid, value]) => ({
          currency: `${cid}.${date}`,
          value,
        })),
      };
    },
  },
};
