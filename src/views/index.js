import { define, html, router } from "hybrids";
import List from "./list.js";

export default define({
  tag: "wjs-demo",
  stack: router(List),
  content: ({ stack }) => html`
    <template layout="column-reverse gap:2 margin:2">
      ${stack}
      <h1 layout="row center">Exchange Rates</h1>

      <small>
        <blockquote>
          Credits to the
          ${html`<a
            href="https://github.com/fawazahmed0/currency-api"
            translate="no"
          >
            <code>currency-api</code>
          </a>`}
          and
          ${html`
            <a href="https://watercss.kognise.dev/" translate="no">
              Water.css
            </a>
          `}
        </blockquote>
      </small>
    </template>
  `,
});
