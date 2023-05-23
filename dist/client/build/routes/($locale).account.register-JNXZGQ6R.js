import "/build/_shared/chunk-H4K2LKMD.js";
import {
  Link
} from "/build/_shared/chunk-Z4RHRP5A.js";
import "/build/_shared/chunk-HQHJDE7P.js";
import "/build/_shared/chunk-IRQMJ5FU.js";
import {
  getInputStyleClasses
} from "/build/_shared/chunk-DS5LKGVC.js";
import "/build/_shared/chunk-4EH6BNGM.js";
import {
  Form,
  useActionData
} from "/build/_shared/chunk-P2RVWR5F.js";
import "/build/_shared/chunk-F6XALK7G.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-ZWW6HFVX.js";
import {
  require_react
} from "/build/_shared/chunk-UCEVZXH3.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/($locale).account.register.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [{ title: "Register" }];
};
function Register() {
  const actionData = useActionData();
  const [nativeEmailError, setNativeEmailError] = (0, import_react2.useState)(null);
  const [nativePasswordError, setNativePasswordError] = (0, import_react2.useState)(
    null
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center my-24 px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-md w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl", children: "Create an Account." }, void 0, false, {
      fileName: "app/routes/($locale).account.register.tsx",
      lineNumber: 104,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Form,
      {
        method: "post",
        noValidate: true,
        className: "pt-6 pb-8 mt-4 mb-4 space-y-3",
        children: [
          actionData?.formError && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center mb-6 bg-zinc-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "m-4 text-s text-contrast", children: actionData.formError }, void 0, false, {
            fileName: "app/routes/($locale).account.register.tsx",
            lineNumber: 113,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/($locale).account.register.tsx",
            lineNumber: 112,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                className: `mb-1 ${getInputStyleClasses(nativeEmailError)}`,
                id: "email",
                name: "email",
                type: "email",
                autoComplete: "email",
                required: true,
                placeholder: "Email address",
                "aria-label": "Email address",
                autoFocus: true,
                onBlur: (event) => {
                  setNativeEmailError(
                    event.currentTarget.value.length && !event.currentTarget.validity.valid ? "Invalid email address" : null
                  );
                }
              },
              void 0,
              false,
              {
                fileName: "app/routes/($locale).account.register.tsx",
                lineNumber: 117,
                columnNumber: 13
              },
              this
            ),
            nativeEmailError && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-500 text-xs", children: [
              nativeEmailError,
              " \xA0"
            ] }, void 0, true, {
              fileName: "app/routes/($locale).account.register.tsx",
              lineNumber: 138,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/($locale).account.register.tsx",
            lineNumber: 116,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                className: `mb-1 ${getInputStyleClasses(nativePasswordError)}`,
                id: "password",
                name: "password",
                type: "password",
                autoComplete: "current-password",
                placeholder: "Password",
                "aria-label": "Password",
                minLength: 8,
                required: true,
                autoFocus: true,
                onBlur: (event) => {
                  if (event.currentTarget.validity.valid || !event.currentTarget.value.length) {
                    setNativePasswordError(null);
                  } else {
                    setNativePasswordError(
                      event.currentTarget.validity.valueMissing ? "Please enter a password" : "Passwords must be at least 8 characters"
                    );
                  }
                }
              },
              void 0,
              false,
              {
                fileName: "app/routes/($locale).account.register.tsx",
                lineNumber: 142,
                columnNumber: 13
              },
              this
            ),
            nativePasswordError && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-500 text-xs", children: [
              " ",
              nativePasswordError,
              " \xA0"
            ] }, void 0, true, {
              fileName: "app/routes/($locale).account.register.tsx",
              lineNumber: 170,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/($locale).account.register.tsx",
            lineNumber: 141,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "button",
            {
              className: "bg-primary text-contrast rounded py-2 px-4 focus:shadow-outline block w-full",
              type: "submit",
              disabled: !!(nativePasswordError || nativeEmailError),
              children: "Create Account"
            },
            void 0,
            false,
            {
              fileName: "app/routes/($locale).account.register.tsx",
              lineNumber: 177,
              columnNumber: 13
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/($locale).account.register.tsx",
            lineNumber: 176,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center mt-8 border-t border-gray-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "align-baseline text-sm mt-6", children: [
            "Already have an account? \xA0",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "inline underline", to: "/account/login", children: "Sign in" }, void 0, false, {
              fileName: "app/routes/($locale).account.register.tsx",
              lineNumber: 188,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/($locale).account.register.tsx",
            lineNumber: 186,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "app/routes/($locale).account.register.tsx",
            lineNumber: 185,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/routes/($locale).account.register.tsx",
        lineNumber: 106,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/($locale).account.register.tsx",
    lineNumber: 103,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/($locale).account.register.tsx",
    lineNumber: 102,
    columnNumber: 5
  }, this);
}
export {
  Register as default,
  meta
};
//# sourceMappingURL=/build/routes/($locale).account.register-JNXZGQ6R.js.map
