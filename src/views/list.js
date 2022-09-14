import { define, html, msg, store, router } from "hybrids";

import Currency from "../store/currency.js";
import Show from "./show.js";

function clearDate(host) {
  host.date = "latest";
}

export default define({
  [router.connect]: { stack: [Show] },
  tag: "wjs-list-view",
  date: "latest",
  list: store([Currency], { id: "date" }),
  query: "",
  filtered: ({ list, query }) => {
    if (!query || !store.ready(list)) return list;
    return list.filter(
      (c) =>
        c.name.toLowerCase().includes(query) ||
        c.code.toLowerCase().includes(query)
    );
  },
  content: ({ date, query, list, filtered }) => html`
    <template layout="column gap:2">
      <div layout="row gap">
        <input
          type="date"
          value="${date}"
          onchange="${html.set("date")}"
          layout="grow"
        />
        <button
          disabled="${date === "latest"}"
          onclick="${clearDate}"
          layout="grow"
        >
          Latest
        </button>
      </div>

      <div layout="row">
        <input
          placeholder="${msg`Search`}"
          type="search"
          value="${query}"
          oninput="${html.set("query")}"
          layout="grow"
        />
      </div>

      <p>Choose a base currency:</p>

      <wjs-loader model="${list}"></wjs-loader>

      ${store.ready(list) &&
      html`
        <ul>
          ${filtered.map(
            (currency) => html`
              <li>
                <a href="${router.url(Show, { currency })}">
                  ${currency.code.toUpperCase()} - ${currency.name}
                </a>
              </li>
            `
          )}
        </ul>
      `}
    </template>
  `,
});
