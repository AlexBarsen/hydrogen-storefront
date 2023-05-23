import "/build/_shared/chunk-AUYLHJJM.js";
import {
  Heading,
  Link,
  PageHeader,
  Text,
  clsx_m_default
} from "/build/_shared/chunk-KKKQNVBW.js";
import {
  Image,
  Money
} from "/build/_shared/chunk-HQHJDE7P.js";
import {
  statusMessage
} from "/build/_shared/chunk-DS5LKGVC.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-ZWW6HFVX.js";
import "/build/_shared/chunk-4EH6BNGM.js";
import {
  useLoaderData
} from "/build/_shared/chunk-P2RVWR5F.js";
import "/build/_shared/chunk-F6XALK7G.js";
import "/build/_shared/chunk-UCEVZXH3.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/($locale).account.orders.$id.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = ({ data }) => {
  return [{ title: `Order ${data?.order?.name}` }];
};
function OrderRoute() {
  const { order, lineItems, discountValue, discountPercentage } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, { heading: "Order detail", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/account", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { color: "subtle", children: "Return to Account Overview" }, void 0, false, {
      fileName: "app/routes/($locale).account.orders.$id.tsx",
      lineNumber: 79,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).account.orders.$id.tsx",
      lineNumber: 78,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).account.orders.$id.tsx",
      lineNumber: 77,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full p-6 sm:grid-cols-1 md:p-8 lg:p-12 lg:py-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "h3", size: "lead", children: [
        "Order No. ",
        order.name
      ] }, void 0, true, {
        fileName: "app/routes/($locale).account.orders.$id.tsx",
        lineNumber: 84,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { className: "mt-2", as: "p", children: [
        "Placed on ",
        new Date(order.processedAt).toDateString()
      ] }, void 0, true, {
        fileName: "app/routes/($locale).account.orders.$id.tsx",
        lineNumber: 87,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid items-start gap-12 sm:grid-cols-1 md:grid-cols-4 md:gap-16 sm:divide-y sm:divide-gray-200", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "min-w-full my-8 divide-y divide-gray-300 md:col-span-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "align-baseline ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "th",
              {
                scope: "col",
                className: "pb-4 pl-0 pr-3 font-semibold text-left",
                children: "Product"
              },
              void 0,
              false,
              {
                fileName: "app/routes/($locale).account.orders.$id.tsx",
                lineNumber: 94,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "th",
              {
                scope: "col",
                className: "hidden px-4 pb-4 font-semibold text-right sm:table-cell md:table-cell",
                children: "Price"
              },
              void 0,
              false,
              {
                fileName: "app/routes/($locale).account.orders.$id.tsx",
                lineNumber: 100,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "th",
              {
                scope: "col",
                className: "hidden px-4 pb-4 font-semibold text-right sm:table-cell md:table-cell",
                children: "Quantity"
              },
              void 0,
              false,
              {
                fileName: "app/routes/($locale).account.orders.$id.tsx",
                lineNumber: 106,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "th",
              {
                scope: "col",
                className: "px-4 pb-4 font-semibold text-right",
                children: "Total"
              },
              void 0,
              false,
              {
                fileName: "app/routes/($locale).account.orders.$id.tsx",
                lineNumber: 112,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/($locale).account.orders.$id.tsx",
            lineNumber: 93,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/($locale).account.orders.$id.tsx",
            lineNumber: 92,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { className: "divide-y divide-gray-200", children: lineItems.map((lineItem) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "w-full py-4 pl-0 pr-3 align-top sm:align-middle max-w-0 sm:w-auto sm:max-w-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-6", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                Link,
                {
                  to: `/products/${lineItem.variant.product.handle}`,
                  children: lineItem?.variant?.image && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-24 card-image aspect-square", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    Image,
                    {
                      data: lineItem.variant.image,
                      width: 96,
                      height: 96
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/($locale).account.orders.$id.tsx",
                      lineNumber: 131,
                      columnNumber: 31
                    },
                    this
                  ) }, void 0, false, {
                    fileName: "app/routes/($locale).account.orders.$id.tsx",
                    lineNumber: 130,
                    columnNumber: 29
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "app/routes/($locale).account.orders.$id.tsx",
                  lineNumber: 126,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-col justify-center hidden lg:flex", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "p", children: lineItem.title }, void 0, false, {
                  fileName: "app/routes/($locale).account.orders.$id.tsx",
                  lineNumber: 140,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { size: "fine", className: "mt-1", as: "p", children: lineItem.variant.title }, void 0, false, {
                  fileName: "app/routes/($locale).account.orders.$id.tsx",
                  lineNumber: 141,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/($locale).account.orders.$id.tsx",
                lineNumber: 139,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", { className: "grid", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "sr-only", children: "Product" }, void 0, false, {
                  fileName: "app/routes/($locale).account.orders.$id.tsx",
                  lineNumber: 146,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "truncate lg:hidden", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { size: "copy", format: true, as: "h3", children: lineItem.title }, void 0, false, {
                    fileName: "app/routes/($locale).account.orders.$id.tsx",
                    lineNumber: 148,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { size: "fine", className: "mt-1", children: lineItem.variant.title }, void 0, false, {
                    fileName: "app/routes/($locale).account.orders.$id.tsx",
                    lineNumber: 151,
                    columnNumber: 29
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/($locale).account.orders.$id.tsx",
                  lineNumber: 147,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "sr-only", children: "Price" }, void 0, false, {
                  fileName: "app/routes/($locale).account.orders.$id.tsx",
                  lineNumber: 155,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "truncate sm:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { size: "fine", className: "mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: lineItem.variant.price }, void 0, false, {
                  fileName: "app/routes/($locale).account.orders.$id.tsx",
                  lineNumber: 158,
                  columnNumber: 31
                }, this) }, void 0, false, {
                  fileName: "app/routes/($locale).account.orders.$id.tsx",
                  lineNumber: 157,
                  columnNumber: 29
                }, this) }, void 0, false, {
                  fileName: "app/routes/($locale).account.orders.$id.tsx",
                  lineNumber: 156,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "sr-only", children: "Quantity" }, void 0, false, {
                  fileName: "app/routes/($locale).account.orders.$id.tsx",
                  lineNumber: 161,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "truncate sm:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { className: "mt-1", size: "fine", children: [
                  "Qty: ",
                  lineItem.quantity
                ] }, void 0, true, {
                  fileName: "app/routes/($locale).account.orders.$id.tsx",
                  lineNumber: 163,
                  columnNumber: 29
                }, this) }, void 0, false, {
                  fileName: "app/routes/($locale).account.orders.$id.tsx",
                  lineNumber: 162,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/($locale).account.orders.$id.tsx",
                lineNumber: 145,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/($locale).account.orders.$id.tsx",
              lineNumber: 125,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.tsx",
              lineNumber: 124,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "hidden px-3 py-4 text-right align-top sm:align-middle sm:table-cell", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: lineItem.variant.price }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.tsx",
              lineNumber: 171,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.tsx",
              lineNumber: 170,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "hidden px-3 py-4 text-right align-top sm:align-middle sm:table-cell", children: lineItem.quantity }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.tsx",
              lineNumber: 173,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-3 py-4 text-right align-top sm:align-middle sm:table-cell", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: lineItem.discountedTotalPrice }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.tsx",
              lineNumber: 178,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.tsx",
              lineNumber: 177,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.tsx",
              lineNumber: 176,
              columnNumber: 21
            }, this)
          ] }, lineItem.variant.id, true, {
            fileName: "app/routes/($locale).account.orders.$id.tsx",
            lineNumber: 123,
            columnNumber: 19
          }, this)) }, void 0, false, {
            fileName: "app/routes/($locale).account.orders.$id.tsx",
            lineNumber: 120,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tfoot", { children: [
            (discountValue && discountValue.amount || discountPercentage) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "th",
                {
                  scope: "row",
                  colSpan: 3,
                  className: "hidden pt-6 pl-6 pr-3 font-normal text-right sm:table-cell md:pl-0",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Discounts" }, void 0, false, {
                    fileName: "app/routes/($locale).account.orders.$id.tsx",
                    lineNumber: 193,
                    columnNumber: 23
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "app/routes/($locale).account.orders.$id.tsx",
                  lineNumber: 188,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "th",
                {
                  scope: "row",
                  className: "pt-6 pr-3 font-normal text-left sm:hidden",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Discounts" }, void 0, false, {
                    fileName: "app/routes/($locale).account.orders.$id.tsx",
                    lineNumber: 199,
                    columnNumber: 23
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "app/routes/($locale).account.orders.$id.tsx",
                  lineNumber: 195,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "pt-6 pl-3 pr-4 font-medium text-right text-green-700 md:pr-3", children: discountPercentage ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm", children: [
                "-",
                discountPercentage,
                "% OFF"
              ] }, void 0, true, {
                fileName: "app/routes/($locale).account.orders.$id.tsx",
                lineNumber: 203,
                columnNumber: 25
              }, this) : discountValue && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: discountValue }, void 0, false, {
                fileName: "app/routes/($locale).account.orders.$id.tsx",
                lineNumber: 207,
                columnNumber: 42
              }, this) }, void 0, false, {
                fileName: "app/routes/($locale).account.orders.$id.tsx",
                lineNumber: 201,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/($locale).account.orders.$id.tsx",
              lineNumber: 187,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "th",
                {
                  scope: "row",
                  colSpan: 3,
                  className: "hidden pt-6 pl-6 pr-3 font-normal text-right sm:table-cell md:pl-0",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Subtotal" }, void 0, false, {
                    fileName: "app/routes/($locale).account.orders.$id.tsx",
                    lineNumber: 218,
                    columnNumber: 21
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "app/routes/($locale).account.orders.$id.tsx",
                  lineNumber: 213,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "th",
                {
                  scope: "row",
                  className: "pt-6 pr-3 font-normal text-left sm:hidden",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Subtotal" }, void 0, false, {
                    fileName: "app/routes/($locale).account.orders.$id.tsx",
                    lineNumber: 224,
                    columnNumber: 21
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "app/routes/($locale).account.orders.$id.tsx",
                  lineNumber: 220,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "pt-6 pl-3 pr-4 text-right md:pr-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: order.subtotalPriceV2 }, void 0, false, {
                fileName: "app/routes/($locale).account.orders.$id.tsx",
                lineNumber: 227,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/($locale).account.orders.$id.tsx",
                lineNumber: 226,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/($locale).account.orders.$id.tsx",
              lineNumber: 212,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "th",
                {
                  scope: "row",
                  colSpan: 3,
                  className: "hidden pt-4 pl-6 pr-3 font-normal text-right sm:table-cell md:pl-0",
                  children: "Tax"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/($locale).account.orders.$id.tsx",
                  lineNumber: 231,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "th",
                {
                  scope: "row",
                  className: "pt-4 pr-3 font-normal text-left sm:hidden",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Tax" }, void 0, false, {
                    fileName: "app/routes/($locale).account.orders.$id.tsx",
                    lineNumber: 242,
                    columnNumber: 21
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "app/routes/($locale).account.orders.$id.tsx",
                  lineNumber: 238,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "pt-4 pl-3 pr-4 text-right md:pr-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: order.totalTaxV2 }, void 0, false, {
                fileName: "app/routes/($locale).account.orders.$id.tsx",
                lineNumber: 245,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/($locale).account.orders.$id.tsx",
                lineNumber: 244,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/($locale).account.orders.$id.tsx",
              lineNumber: 230,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "th",
                {
                  scope: "row",
                  colSpan: 3,
                  className: "hidden pt-4 pl-6 pr-3 font-semibold text-right sm:table-cell md:pl-0",
                  children: "Total"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/($locale).account.orders.$id.tsx",
                  lineNumber: 249,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "th",
                {
                  scope: "row",
                  className: "pt-4 pr-3 font-semibold text-left sm:hidden",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Total" }, void 0, false, {
                    fileName: "app/routes/($locale).account.orders.$id.tsx",
                    lineNumber: 260,
                    columnNumber: 21
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "app/routes/($locale).account.orders.$id.tsx",
                  lineNumber: 256,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "pt-4 pl-3 pr-4 font-semibold text-right md:pr-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: order.totalPriceV2 }, void 0, false, {
                fileName: "app/routes/($locale).account.orders.$id.tsx",
                lineNumber: 263,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/($locale).account.orders.$id.tsx",
                lineNumber: 262,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/($locale).account.orders.$id.tsx",
              lineNumber: 248,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/($locale).account.orders.$id.tsx",
            lineNumber: 184,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/($locale).account.orders.$id.tsx",
          lineNumber: 91,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sticky border-none top-nav md:my-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { size: "copy", className: "font-semibold", as: "h3", children: "Shipping Address" }, void 0, false, {
            fileName: "app/routes/($locale).account.orders.$id.tsx",
            lineNumber: 269,
            columnNumber: 15
          }, this),
          order?.shippingAddress ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "mt-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: [
              order.shippingAddress.firstName && order.shippingAddress.firstName + " ",
              order.shippingAddress.lastName
            ] }, void 0, true, {
              fileName: "app/routes/($locale).account.orders.$id.tsx",
              lineNumber: 275,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.tsx",
              lineNumber: 274,
              columnNumber: 19
            }, this),
            order?.shippingAddress?.formatted ? order.shippingAddress.formatted.map((line) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: line }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.tsx",
              lineNumber: 284,
              columnNumber: 25
            }, this) }, line, false, {
              fileName: "app/routes/($locale).account.orders.$id.tsx",
              lineNumber: 283,
              columnNumber: 23
            }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.tsx",
              lineNumber: 288,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/($locale).account.orders.$id.tsx",
            lineNumber: 273,
            columnNumber: 17
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-3", children: "No shipping address defined" }, void 0, false, {
            fileName: "app/routes/($locale).account.orders.$id.tsx",
            lineNumber: 292,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { size: "copy", className: "mt-8 font-semibold", as: "h3", children: "Status" }, void 0, false, {
            fileName: "app/routes/($locale).account.orders.$id.tsx",
            lineNumber: 294,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              className: clsx_m_default(
                `mt-3 px-3 py-1 text-xs font-medium rounded-full inline-block w-auto`,
                order.fulfillmentStatus === "FULFILLED" ? "bg-green-100 text-green-800" : "bg-primary/20 text-primary/50"
              ),
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { size: "fine", children: statusMessage(order.fulfillmentStatus) }, void 0, false, {
                fileName: "app/routes/($locale).account.orders.$id.tsx",
                lineNumber: 305,
                columnNumber: 17
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/routes/($locale).account.orders.$id.tsx",
              lineNumber: 297,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/($locale).account.orders.$id.tsx",
          lineNumber: 268,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/($locale).account.orders.$id.tsx",
        lineNumber: 90,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).account.orders.$id.tsx",
      lineNumber: 83,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).account.orders.$id.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).account.orders.$id.tsx",
    lineNumber: 76,
    columnNumber: 5
  }, this);
}
export {
  OrderRoute as default,
  meta
};
//# sourceMappingURL=/build/routes/($locale).account.orders.$id-267CAGOY.js.map
