import { unref, withCtx, createTextVNode, useSSRContext, mergeProps, createVNode, ref, onMounted, computed, openBlock, createBlock, toDisplayString, createCommentVNode, withModifiers, createSSRApp, h } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrRenderSlot, ssrLooseContain, ssrGetDynamicModelProps } from "vue/server-renderer";
import { Head, Link, useForm, createInertiaApp } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
const _sfc_main$9 = {
  __name: "Welcome",
  __ssrInlineRender: true,
  props: {
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Welcome" }, null, _parent));
      _push(`<div class="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">`);
      if (__props.canLogin) {
        _push(`<div class="hidden fixed top-0 right-0 px-6 py-4 sm:block">`);
        if (_ctx.$page.props.auth.user) {
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("dashboard"),
            class: "text-sm text-gray-700 dark:text-gray-500 underline"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Dashboard`);
              } else {
                return [
                  createTextVNode("Dashboard")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("login"),
            class: "text-sm text-gray-700 dark:text-gray-500 underline"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Log in`);
              } else {
                return [
                  createTextVNode("Log in")
                ];
              }
            }),
            _: 1
          }, _parent));
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="max-w-6xl mx-auto sm:px-6 lg:px-8"><div class="flex justify-center pt-8 sm:justify-start sm:pt-0"><svg viewBox="0 0 651 192" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-16 w-auto text-gray-700 sm:h-20"><g clip-path="url(#clip0)" fill="#EF3B2D"><path d="M248.032 44.676h-16.466v100.23h47.394v-14.748h-30.928V44.676zM337.091 87.202c-2.101-3.341-5.083-5.965-8.949-7.875-3.865-1.909-7.756-2.864-11.669-2.864-5.062 0-9.69.931-13.89 2.792-4.201 1.861-7.804 4.417-10.811 7.661-3.007 3.246-5.347 6.993-7.016 11.239-1.672 4.249-2.506 8.713-2.506 13.389 0 4.774.834 9.26 2.506 13.459 1.669 4.202 4.009 7.925 7.016 11.169 3.007 3.246 6.609 5.799 10.811 7.66 4.199 1.861 8.828 2.792 13.89 2.792 3.913 0 7.804-.955 11.669-2.863 3.866-1.908 6.849-4.533 8.949-7.875v9.021h15.607V78.182h-15.607v9.02zm-1.431 32.503c-.955 2.578-2.291 4.821-4.009 6.73-1.719 1.91-3.795 3.437-6.229 4.582-2.435 1.146-5.133 1.718-8.091 1.718-2.96 0-5.633-.572-8.019-1.718-2.387-1.146-4.438-2.672-6.156-4.582-1.719-1.909-3.032-4.152-3.938-6.73-.909-2.577-1.36-5.298-1.36-8.161 0-2.864.451-5.585 1.36-8.162.905-2.577 2.219-4.819 3.938-6.729 1.718-1.908 3.77-3.437 6.156-4.582 2.386-1.146 5.059-1.718 8.019-1.718 2.958 0 5.656.572 8.091 1.718 2.434 1.146 4.51 2.674 6.229 4.582 1.718 1.91 3.054 4.152 4.009 6.729.953 2.577 1.432 5.298 1.432 8.162-.001 2.863-.479 5.584-1.432 8.161zM463.954 87.202c-2.101-3.341-5.083-5.965-8.949-7.875-3.865-1.909-7.756-2.864-11.669-2.864-5.062 0-9.69.931-13.89 2.792-4.201 1.861-7.804 4.417-10.811 7.661-3.007 3.246-5.347 6.993-7.016 11.239-1.672 4.249-2.506 8.713-2.506 13.389 0 4.774.834 9.26 2.506 13.459 1.669 4.202 4.009 7.925 7.016 11.169 3.007 3.246 6.609 5.799 10.811 7.66 4.199 1.861 8.828 2.792 13.89 2.792 3.913 0 7.804-.955 11.669-2.863 3.866-1.908 6.849-4.533 8.949-7.875v9.021h15.607V78.182h-15.607v9.02zm-1.432 32.503c-.955 2.578-2.291 4.821-4.009 6.73-1.719 1.91-3.795 3.437-6.229 4.582-2.435 1.146-5.133 1.718-8.091 1.718-2.96 0-5.633-.572-8.019-1.718-2.387-1.146-4.438-2.672-6.156-4.582-1.719-1.909-3.032-4.152-3.938-6.73-.909-2.577-1.36-5.298-1.36-8.161 0-2.864.451-5.585 1.36-8.162.905-2.577 2.219-4.819 3.938-6.729 1.718-1.908 3.77-3.437 6.156-4.582 2.386-1.146 5.059-1.718 8.019-1.718 2.958 0 5.656.572 8.091 1.718 2.434 1.146 4.51 2.674 6.229 4.582 1.718 1.91 3.054 4.152 4.009 6.729.953 2.577 1.432 5.298 1.432 8.162 0 2.863-.479 5.584-1.432 8.161zM650.772 44.676h-15.606v100.23h15.606V44.676zM365.013 144.906h15.607V93.538h26.776V78.182h-42.383v66.724zM542.133 78.182l-19.616 51.096-19.616-51.096h-15.808l25.617 66.724h19.614l25.617-66.724h-15.808zM591.98 76.466c-19.112 0-34.239 15.706-34.239 35.079 0 21.416 14.641 35.079 36.239 35.079 12.088 0 19.806-4.622 29.234-14.688l-10.544-8.158c-.006.008-7.958 10.449-19.832 10.449-13.802 0-19.612-11.127-19.612-16.884h51.777c2.72-22.043-11.772-40.877-33.023-40.877zm-18.713 29.28c.12-1.284 1.917-16.884 18.589-16.884 16.671 0 18.697 15.598 18.813 16.884h-37.402zM184.068 43.892c-.024-.088-.073-.165-.104-.25-.058-.157-.108-.316-.191-.46-.056-.097-.137-.176-.203-.265-.087-.117-.161-.242-.265-.345-.085-.086-.194-.148-.29-.223-.109-.085-.206-.182-.327-.252l-.002-.001-.002-.002-35.648-20.524a2.971 2.971 0 00-2.964 0l-35.647 20.522-.002.002-.002.001c-.121.07-.219.167-.327.252-.096.075-.205.138-.29.223-.103.103-.178.228-.265.345-.066.089-.147.169-.203.265-.083.144-.133.304-.191.46-.031.085-.08.162-.104.25-.067.249-.103.51-.103.776v38.979l-29.706 17.103V24.493a3 3 0 00-.103-.776c-.024-.088-.073-.165-.104-.25-.058-.157-.108-.316-.191-.46-.056-.097-.137-.176-.203-.265-.087-.117-.161-.242-.265-.345-.085-.086-.194-.148-.29-.223-.109-.085-.206-.182-.327-.252l-.002-.001-.002-.002L40.098 1.396a2.971 2.971 0 00-2.964 0L1.487 21.919l-.002.002-.002.001c-.121.07-.219.167-.327.252-.096.075-.205.138-.29.223-.103.103-.178.228-.265.345-.066.089-.147.169-.203.265-.083.144-.133.304-.191.46-.031.085-.08.162-.104.25-.067.249-.103.51-.103.776v122.09c0 1.063.568 2.044 1.489 2.575l71.293 41.045c.156.089.324.143.49.202.078.028.15.074.23.095a2.98 2.98 0 001.524 0c.069-.018.132-.059.2-.083.176-.061.354-.119.519-.214l71.293-41.045a2.971 2.971 0 001.489-2.575v-38.979l34.158-19.666a2.971 2.971 0 001.489-2.575V44.666a3.075 3.075 0 00-.106-.774zM74.255 143.167l-29.648-16.779 31.136-17.926.001-.001 34.164-19.669 29.674 17.084-21.772 12.428-43.555 24.863zm68.329-76.259v33.841l-12.475-7.182-17.231-9.92V49.806l12.475 7.182 17.231 9.92zm2.97-39.335l29.693 17.095-29.693 17.095-29.693-17.095 29.693-17.095zM54.06 114.089l-12.475 7.182V46.733l17.231-9.92 12.475-7.182v74.537l-17.231 9.921zM38.614 7.398l29.693 17.095-29.693 17.095L8.921 24.493 38.614 7.398zM5.938 29.632l12.475 7.182 17.231 9.92v79.676l.001.005-.001.006c0 .114.032.221.045.333.017.146.021.294.059.434l.002.007c.032.117.094.222.14.334.051.124.088.255.156.371a.036.036 0 00.004.009c.061.105.149.191.222.288.081.105.149.22.244.314l.008.01c.084.083.19.142.284.215.106.083.202.178.32.247l.013.005.011.008 34.139 19.321v34.175L5.939 144.867V29.632h-.001zm136.646 115.235l-65.352 37.625V148.31l48.399-27.628 16.953-9.677v33.862zm35.646-61.22l-29.706 17.102V66.908l17.231-9.92 12.475-7.182v33.841z"></path></g></svg></div><div class="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow sm:rounded-lg"><div class="grid grid-cols-1 md:grid-cols-2"><div class="p-6"><div class="flex items-center"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg><div class="ml-4 text-lg leading-7 font-semibold"><a href="https://laravel.com/docs" class="underline text-gray-900 dark:text-white">Documentation</a></div></div><div class="ml-12"><div class="mt-2 text-gray-600 dark:text-gray-400 text-sm"> Laravel has wonderful, thorough documentation covering every aspect of the framework. Whether you are new to the framework or have previous experience with Laravel, we recommend reading all of the documentation from beginning to end. </div></div></div><div class="p-6 border-t border-gray-200 dark:border-gray-700 md:border-t-0 md:border-l"><div class="flex items-center"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500"><path d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg><div class="ml-4 text-lg leading-7 font-semibold"><a href="https://laracasts.com" class="underline text-gray-900 dark:text-white">Laracasts</a></div></div><div class="ml-12"><div class="mt-2 text-gray-600 dark:text-gray-400 text-sm"> Laracasts offers thousands of video tutorials on Laravel, PHP, and JavaScript development. Check them out, see for yourself, and massively level up your development skills in the process. </div></div></div><div class="p-6 border-t border-gray-200 dark:border-gray-700"><div class="flex items-center"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500"><path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg><div class="ml-4 text-lg leading-7 font-semibold"><a href="https://laravel-news.com/" class="underline text-gray-900 dark:text-white">Laravel News</a></div></div><div class="ml-12"><div class="mt-2 text-gray-600 dark:text-gray-400 text-sm"> Laravel News is a community driven portal and newsletter aggregating all of the latest and most important news in the Laravel ecosystem, including new package releases and tutorials. </div></div></div><div class="p-6 border-t border-gray-200 dark:border-gray-700 md:border-l"><div class="flex items-center"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500"><path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><div class="ml-4 text-lg leading-7 font-semibold text-gray-900 dark:text-white"> Vibrant Ecosystem </div></div><div class="ml-12"><div class="mt-2 text-gray-600 dark:text-gray-400 text-sm"> Laravel&#39;s robust library of first-party tools and libraries, such as <a href="https://forge.laravel.com" class="underline">Forge</a>, <a href="https://vapor.laravel.com" class="underline">Vapor</a>, <a href="https://nova.laravel.com" class="underline">Nova</a>, and <a href="https://envoyer.io" class="underline">Envoyer</a> help you take your projects to the next level. Pair them with powerful open source libraries like <a href="https://laravel.com/docs/billing" class="underline">Cashier</a>, <a href="https://laravel.com/docs/dusk" class="underline">Dusk</a>, <a href="https://laravel.com/docs/broadcasting" class="underline">Echo</a>, <a href="https://laravel.com/docs/horizon" class="underline">Horizon</a>, <a href="https://laravel.com/docs/sanctum" class="underline">Sanctum</a>, <a href="https://laravel.com/docs/telescope" class="underline">Telescope</a>, and more. </div></div></div></div></div><div class="flex justify-center mt-4 sm:items-center sm:justify-between"><div class="text-center text-sm text-gray-500 sm:text-left"><div class="flex items-center"><svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="-mt-px w-5 h-5 text-gray-400"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg><a href="https://laravel.bigcartel.com" class="ml-1 underline"> Shop </a><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="ml-4 -mt-px w-5 h-5 text-gray-400"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg><a href="https://github.com/sponsors/taylorotwell" class="ml-1 underline"> Sponsor </a></div></div><div class="ml-4 text-center text-sm text-gray-500 sm:text-right sm:ml-0"> Laravel v${ssrInterpolate(__props.laravelVersion)} (PHP v${ssrInterpolate(__props.phpVersion)}) </div></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Welcome.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$9
}, Symbol.toStringTag, { value: "Module" }));
const Guest_vue_vue_type_style_index_0_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$8 = {
  name: "Guest"
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "font-sans antialiased auth-bg",
    id: "wrapper"
  }, _attrs))}><div class="text-gray-700">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/Guest.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const Guest = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$7 = {
  props: {
    "theme": "primary",
    "square": false,
    "initial": false,
    "width": null,
    "height": null
  },
  name: "ApplicationLogo"
};
const colors = {
  primary: {
    square: {
      rect: "#388370",
      creasi: "white"
    },
    base: {
      creasi: "#388370"
    }
  },
  secondary: {
    square: {
      rect: "white",
      creasi: "#388370"
    },
    base: {
      creasi: "white"
    }
  }
};
console.log(colors);
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "291",
    height: "56",
    viewBox: "0 0 291 56",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path fill="#388370" d="M24.808.146C9.272.146 4.516 6.916 3.712 13.772l-3.37 27.58c-.081.876-.176 1.59-.176 2.149 0 6.296 4.92 12.117 18.604 12.117 15.536 0 20.274-6.771 21.08-13.625l.579-4.872c.16-1.354-.097-2.392-1.949-2.392h-8.284c-1.69 0-2.426.719-2.668 2.392l-.316 2.549c-.483 3.666-3.287 5.183-7.23 5.183-3.623 0-6.284-1.26-6.284-4.368 0-.24.078-.889.158-1.526l2.896-22.865c.483-3.666 3.374-5.183 7.319-5.183 3.703 0 6.213 1.274 6.213 4.143 0 .32-.078 1.03-.158 1.508l-.158.885c-.241 1.434.317 2.374 2.088 2.374h8.285c1.69 0 2.25-.7 2.492-2.374l.404-3.12c.08-.878.158-1.593.158-2.15C43.395 5.88 38.412.146 24.808.146Zm153.538 0c-15.053 0-19.466 6.77-20.272 13.626l-.491 3.986c-.08.797-.158 1.516-.158 1.994 0 4.543 3.063 8.061 6.284 9.257l11.022 4.282c2.495.956 6.266 2.407 6.266 4.958 0 .079.027.395-.053.953l-.175 1.023c-.564 3.666-3.621 5.03-7.565 5.027l-17.411-.018-5.02-42.054c-.247-1.593-.977-2.393-2.668-2.393h-8.687c-1.691 0-2.576.719-3.3 2.393l-17.13 41.049H99.98l1.527-11.961h15.305c1.69 0 2.408-.632 2.65-2.306l.72-5.824c.241-1.674-.399-2.237-2.089-2.237h-15.305l1.299-10.366h16.568c1.691 0 2.426-.632 2.668-2.305l.808-6.224c.241-1.673-.486-2.219-2.177-2.219H94.416c-1.69 0-2.408.719-2.65 2.393l-6.125 49.404c-.242 1.674.397 2.393 2.088 2.393h36.402c1.69 0 2.49-1.623 3.053-3.138l14.884-38.224 3.212 38.224c.399 2.126 1.509 3.794 4.318 3.779h22.798c15.295 0 20.45-6.771 21.255-13.625l.562-4.958c.08-.877.157-1.419.157-1.976 0-4.942-3.367-8.932-8.599-10.765L172.8 19.752c-.805-.319-2.176-.875-2.176-2.947v-.486l.087-.797c.483-3.666 2.729-5.01 6.828-5.01s7.768 1.79 5.809 4.542v.468l-.087 1.196c-.162 1.834.401 2.393 1.931 2.393h8.389c1.69 0 2.489-.72 2.65-2.393l.316-2.946c.081-.957.088-1.277.088-1.595 0-6.138-4.765-12.031-18.289-12.031ZM50.906.787c-1.69 0-2.408.719-2.65 2.393l-6.125 49.404c-.241 1.913.72 2.393 2.089 2.393h8.705c1.69 0 2.331-.719 2.492-2.393l2.177-17.612h6.125l4.897 17.612c.322 1.275.657 2.393 2.106 2.393h8.6c1.61 0 2.895-.878 2.492-2.393l-5.388-19.363c6.52-2.311 9.097-6.773 9.741-11.475l.737-6.224a19.4 19.4 0 0 0 .14-1.907C87.045 6.761 81.346.787 67.58.787H50.907Zm154.926 0c-1.691 0-2.427.719-2.668 2.393l-4.405 35.485c-.242 1.673.398 2.409 2.088 2.409h8.688c1.69 0 2.268-.736 2.51-2.41L216.45 3.18c.242-1.674-.24-2.393-1.931-2.393h-8.687ZM60.578 11.535h6.67c4.265 0 6.44 1.676 6.44 4.784 0 .24.01.715-.07 1.353l-.246 1.681c-.564 3.666-3.782 4.854-7.968 4.854h-6.46l1.634-12.672Z"></path><path fill="#B9C6C3" d="M235.172 14.484c-12.558 0-17.714 4.873-18.68 12.445l-2.009 16.258c-.08.956-.084 1.27-.084 1.588 0 6.615 5.389 10.843 16.336 10.843 12.8 0 17.953-4.86 18.596-12.431l.168-2.004c.081-1.275-.172-2.306-2.023-2.306h-7.645c-1.69 0-2.405.633-2.567 2.306l-.083.967c-.322 2.63-1.851 3.509-5.232 3.509-3.059 0-4.506-.718-4.506-2.79 0-.32.076-.877.238-2.072l1.604-12.915c.321-2.63 1.85-3.426 5.231-3.426 3.059 0 4.436.636 4.436 2.707v1.12c0 1.434.48 2.14 2.009 2.14h7.561c1.691 0 2.504-.632 2.665-2.306l.084-1.036c.08-1.036.069-1.273.069-1.671 0-6.377-4.979-10.926-16.168-10.926Zm38.35 0c-12.558 0-18.677 4.873-19.643 12.445l-2.009 16.258c-.08.717-.083 1.114-.083 1.353 0 6.775 6.354 11.078 17.382 11.078 12.719 0 18.607-4.86 19.573-12.431l2.009-16.258c.08-.797.083-1.121.083-1.52 0-6.694-6.364-10.925-17.312-10.925Zm-1.493 9.972c.199-.007.394 0 .6 0 2.656 0 5.162.555 5.162 3.025v.484l-1.772 14.103c-.322 2.71-2.657 3.59-5.957 3.59-3.059 0-5.147-.564-5.147-2.955v-.635l1.757-14.103c.302-2.466 2.38-3.403 5.357-3.509Zm-71.776 19.2c-1.69 0-2.489.716-2.65 2.39l-.809 6.616c-.242 1.674.318 2.32 2.009 2.32h8.663c1.691 0 2.325-.646 2.567-2.32l.809-6.616c.242-1.674-.235-2.39-1.925-2.39h-8.664Z"></path></svg>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ApplicationLogo.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const ApplicationLogo = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender]]);
const __default__$1 = {
  name: "Card",
  components: ApplicationLogo
};
const _sfc_main$6 = /* @__PURE__ */ Object.assign(__default__$1, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Link), { href: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ApplicationLogo, { class: "w-20 h-20 fill-current text-gray-500" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(ApplicationLogo, { class: "w-20 h-20 fill-current text-gray-500" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Card.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "InputLabel",
  __ssrInlineRender: true,
  props: ["value"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<label${ssrRenderAttrs(mergeProps({ class: "select-none font-semibold text-md" }, _attrs))}>`);
      if (__props.value) {
        _push(`<span>${ssrInterpolate(__props.value)}</span>`);
      } else {
        _push(`<span>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</span>`);
      }
      _push(`</label>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/InputLabel.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "TextInput",
  __ssrInlineRender: true,
  props: ["modelValue"],
  emits: ["update:modelValue"],
  setup(__props, { expose }) {
    const input = ref(null);
    onMounted(() => {
      if (input.value.hasAttribute("autofocus")) {
        input.value.focus();
      }
    });
    expose({ focus: () => input.value.focus() });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<input${ssrRenderAttrs(mergeProps({
        class: "shadow border-gray-300 transition ease-in-out duration-150 disabled:bg-gray-100 readonly:bg-gray-50 focus:ring-primary focus:outline-none focus:border-primary focus-visible:ring-primary focus:ring-opacity-20 rounded px-4 py-2",
        value: __props.modelValue,
        ref_key: "input",
        ref: input
      }, _attrs))}>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/TextInput.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "PrimaryButton",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "submit"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: __props.type,
        class: "inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/PrimaryButton.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "Checkbox",
  __ssrInlineRender: true,
  props: {
    checked: {
      type: [Array, Boolean],
      default: false
    },
    value: {
      default: null
    }
  },
  emits: ["update:checked"],
  setup(__props, { emit }) {
    const props = __props;
    const proxyChecked = computed({
      get() {
        return props.checked;
      },
      set(val) {
        emit("update:checked", val);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<input${ssrRenderAttrs((_temp0 = mergeProps({
        type: "checkbox",
        value: __props.value,
        checked: Array.isArray(unref(proxyChecked)) ? ssrLooseContain(unref(proxyChecked), __props.value) : unref(proxyChecked),
        class: "shadow border-gray-300 transition ease-in-out duration-150 disabled:bg-gray-100 readonly:bg-gray-50 focus:ring-primary focus:outline-none focus:border-primary focus-visible:ring-primary focus:ring-opacity-20 rounded checked:bg-primary text-primary"
      }, _attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, unref(proxyChecked)))))}>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Checkbox.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "InputError",
  __ssrInlineRender: true,
  props: ["message"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: __props.message ? null : { display: "none" }
      }, _attrs))}><p class="text-sm text-red-600">${ssrInterpolate(__props.message)}</p></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/InputError.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __default__ = {
  methods: {
    handleSubmit() {
      console.log("oke");
    }
  },
  name: "Login",
  component: Guest,
  Card: _sfc_main$6,
  InputLabel: _sfc_main$5,
  TextInput: _sfc_main$4,
  PrimaryButton: _sfc_main$3,
  Checkbox: _sfc_main$2,
  InputError: _sfc_main$1
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  props: {
    canResetPassword: Boolean,
    status: String
  },
  setup(__props) {
    const form = useForm({
      email: "",
      password: "",
      remember: false
    });
    const submit = () => {
      form.post(route("login"), {
        onFinish: () => form.reset("password")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(Guest, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Log in" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (__props.status) {
                    _push3(`<div class="font-medium text-sm text-green-600"${_scopeId2}>${ssrInterpolate(__props.status)}</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<form class="flex flex-col gap-4"${_scopeId2}><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$5, {
                    for: "email",
                    value: "Nama Pengguna",
                    class: "font-semibold text-md"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    id: "email",
                    type: "text",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    required: "",
                    autofocus: "",
                    placeholder: "John Doe"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$1, {
                    class: "mt-2",
                    message: unref(form).errors.email
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="mt-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$5, {
                    for: "password",
                    value: "Kata Sandi"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    id: "password",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    required: "",
                    autocomplete: "current-password"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$1, {
                    class: "mt-2",
                    message: unref(form).errors.password
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="inline-flex items-center gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$2, { name: "remember" }, null, _parent3, _scopeId2));
                  _push3(`<span class="inline-flex items-center gap-2"${_scopeId2}>Ingat saya</span></div><div class="flex items-center justify-between mt-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Link), {
                    href: "",
                    class: "underline text-primary hover:text-emerald-900"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Lupa kata sandi Anda? `);
                      } else {
                        return [
                          createTextVNode(" Lupa kata sandi Anda? ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$3, {
                    class: ["inline-flex items-center font-semibold transition ease-in-out duration-150 border border-transparent rounded hover:shadow focus:ring-opacity-40 focus:outline-opacity-60 disabled:opacity-25 select-none px-4 py-2 text-white bg-emerald-700 hover:bg-emerald-600 focus:bg-emerald-600 active:bg-emerald-800 focus:outline-emerald-500 hover:border-emerald-700 focus:border-emerald-700 focus:border-emerald-900", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Masuk `);
                      } else {
                        return [
                          createTextVNode(" Masuk ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></form>`);
                } else {
                  return [
                    __props.status ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "font-medium text-sm text-green-600"
                    }, toDisplayString(__props.status), 1)) : createCommentVNode("", true),
                    createVNode("form", {
                      onSubmit: withModifiers(submit, ["prevent"]),
                      class: "flex flex-col gap-4"
                    }, [
                      createVNode("div", null, [
                        createVNode(_sfc_main$5, {
                          for: "email",
                          value: "Nama Pengguna",
                          class: "font-semibold text-md"
                        }),
                        createVNode(_sfc_main$4, {
                          id: "email",
                          type: "text",
                          class: "mt-1 block w-full",
                          modelValue: unref(form).email,
                          "onUpdate:modelValue": ($event) => unref(form).email = $event,
                          required: "",
                          autofocus: "",
                          placeholder: "John Doe"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_sfc_main$1, {
                          class: "mt-2",
                          message: unref(form).errors.email
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", { class: "mt-4" }, [
                        createVNode(_sfc_main$5, {
                          for: "password",
                          value: "Kata Sandi"
                        }),
                        createVNode(_sfc_main$4, {
                          id: "password",
                          type: "password",
                          class: "mt-1 block w-full",
                          modelValue: unref(form).password,
                          "onUpdate:modelValue": ($event) => unref(form).password = $event,
                          required: "",
                          autocomplete: "current-password"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_sfc_main$1, {
                          class: "mt-2",
                          message: unref(form).errors.password
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", { class: "inline-flex items-center gap-2" }, [
                        createVNode(_sfc_main$2, { name: "remember" }),
                        createVNode("span", { class: "inline-flex items-center gap-2" }, "Ingat saya")
                      ]),
                      createVNode("div", { class: "flex items-center justify-between mt-4" }, [
                        createVNode(unref(Link), {
                          href: "",
                          class: "underline text-primary hover:text-emerald-900"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Lupa kata sandi Anda? ")
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$3, {
                          class: ["inline-flex items-center font-semibold transition ease-in-out duration-150 border border-transparent rounded hover:shadow focus:ring-opacity-40 focus:outline-opacity-60 disabled:opacity-25 select-none px-4 py-2 text-white bg-emerald-700 hover:bg-emerald-600 focus:bg-emerald-600 active:bg-emerald-800 focus:outline-emerald-500 hover:border-emerald-700 focus:border-emerald-700 focus:border-emerald-900", { "opacity-25": unref(form).processing }],
                          disabled: unref(form).processing
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Masuk ")
                          ]),
                          _: 1
                        }, 8, ["class", "disabled"])
                      ])
                    ], 40, ["onSubmit"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Head), { title: "Log in" }),
              createVNode(_sfc_main$6, null, {
                default: withCtx(() => [
                  __props.status ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "font-medium text-sm text-green-600"
                  }, toDisplayString(__props.status), 1)) : createCommentVNode("", true),
                  createVNode("form", {
                    onSubmit: withModifiers(submit, ["prevent"]),
                    class: "flex flex-col gap-4"
                  }, [
                    createVNode("div", null, [
                      createVNode(_sfc_main$5, {
                        for: "email",
                        value: "Nama Pengguna",
                        class: "font-semibold text-md"
                      }),
                      createVNode(_sfc_main$4, {
                        id: "email",
                        type: "text",
                        class: "mt-1 block w-full",
                        modelValue: unref(form).email,
                        "onUpdate:modelValue": ($event) => unref(form).email = $event,
                        required: "",
                        autofocus: "",
                        placeholder: "John Doe"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_sfc_main$1, {
                        class: "mt-2",
                        message: unref(form).errors.email
                      }, null, 8, ["message"])
                    ]),
                    createVNode("div", { class: "mt-4" }, [
                      createVNode(_sfc_main$5, {
                        for: "password",
                        value: "Kata Sandi"
                      }),
                      createVNode(_sfc_main$4, {
                        id: "password",
                        type: "password",
                        class: "mt-1 block w-full",
                        modelValue: unref(form).password,
                        "onUpdate:modelValue": ($event) => unref(form).password = $event,
                        required: "",
                        autocomplete: "current-password"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_sfc_main$1, {
                        class: "mt-2",
                        message: unref(form).errors.password
                      }, null, 8, ["message"])
                    ]),
                    createVNode("div", { class: "inline-flex items-center gap-2" }, [
                      createVNode(_sfc_main$2, { name: "remember" }),
                      createVNode("span", { class: "inline-flex items-center gap-2" }, "Ingat saya")
                    ]),
                    createVNode("div", { class: "flex items-center justify-between mt-4" }, [
                      createVNode(unref(Link), {
                        href: "",
                        class: "underline text-primary hover:text-emerald-900"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Lupa kata sandi Anda? ")
                        ]),
                        _: 1
                      }),
                      createVNode(_sfc_main$3, {
                        class: ["inline-flex items-center font-semibold transition ease-in-out duration-150 border border-transparent rounded hover:shadow focus:ring-opacity-40 focus:outline-opacity-60 disabled:opacity-25 select-none px-4 py-2 text-white bg-emerald-700 hover:bg-emerald-600 focus:bg-emerald-600 active:bg-emerald-800 focus:outline-emerald-500 hover:border-emerald-700 focus:border-emerald-700 focus:border-emerald-900", { "opacity-25": unref(form).processing }],
                        disabled: unref(form).processing
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Masuk ")
                        ]),
                        _: 1
                      }, 8, ["class", "disabled"])
                    ])
                  ], 40, ["onSubmit"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/auth/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Welcome.vue": __vite_glob_0_0, "./Pages/auth/Login.vue": __vite_glob_0_1 });
      return pages[`./Pages/${name}.vue`];
    },
    setup({ app, props, plugin }) {
      return createSSRApp({
        render: () => h(app, props)
      }).use(plugin);
    }
  })
);
