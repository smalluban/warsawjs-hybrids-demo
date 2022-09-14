import { define, html, store } from "hybrids";

export default define({
  tag: "wjs-loader",
  model: {
    value: undefined,
    observe: (host, value) => {
      host.ready = store.ready(value);
    },
  },
  ready: false,
  content: ({ model }) => html`
    <template layout="block" layout[ready]="hidden">
      ${store.pending(model) && html`<p>Loading...</p>`}
      ${store.error(model) && html`<p>${store.error(model)}</p>`}
    </template>
  `,
});
