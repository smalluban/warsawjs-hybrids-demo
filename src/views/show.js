import { define, html, router, store } from "hybrids";

import Currency from "../store/currency.js";
import Values from "../store/values.js";

export default define({
  [router.connect]: { multiple: true },
  tag: "wjs-show-view",
  currency: store(Currency),
  values: store(Values, { id: ({ currency }) => currency.id }),
  content: ({ currency, values }) => html`
    <template layout="column gap:2">
      <p><a href="${router.backUrl()}">Back</a></p>
      <wjs-loader model="${currency}"></wjs-loader>

      ${store.ready(currency) &&
      html`
        <h2>${currency.name} ${currency.code}</h2>
        <wjs-loader model="${values}"></wjs-loader>

        ${store.ready(values) &&
        html`
          <ul>
            ${values.values.map(
              ({ currency: c, value }) =>
                store.ready(c) &&
                html`<li>
                  <a
                    href="${router.currentUrl({
                      currency: c,
                      scrollToTop: true,
                    })}"
                  >
                    ${c.code} - ${c.name}
                  </a>
                  : ${value}
                </li>`
            )}
          </ul>
        `}
      `}
    </template>
  `,
});
