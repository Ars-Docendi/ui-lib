import { Fragment as e, cloneElement as t, forwardRef as n, useEffect as r, useId as i, useRef as a, useState as o } from "react";
import { Fragment as s, jsx as c, jsxs as l } from "react/jsx-runtime";
import { createPortal as u } from "react-dom";
//#region src/utils/cx.ts
function d(...e) {
	let t = "";
	for (let n of e) n && (t = t ? `${t} ${n}` : String(n));
	return t;
}
//#endregion
//#region src/components/Button/Button.tsx
var f = {
	sm: "sz-sm",
	md: null,
	lg: "sz-lg"
}, p = n(function({ variant: e = "secondary", size: t = "md", loading: n = !1, disabled: r, leadingIcon: i, trailingIcon: a, className: o, children: s, type: u = "button", ...p }, m) {
	return /* @__PURE__ */ l("button", {
		ref: m,
		type: u,
		disabled: r || n,
		"aria-busy": n || void 0,
		className: d("adoc-btn", `v-${e}`, f[t], o),
		...p,
		children: [
			n ? /* @__PURE__ */ c("span", {
				className: "spin",
				"aria-hidden": !0
			}) : i && /* @__PURE__ */ c("span", {
				className: "adoc-ico",
				children: i
			}),
			s,
			!n && a && /* @__PURE__ */ c("span", {
				className: "adoc-ico",
				children: a
			})
		]
	});
});
//#endregion
//#region src/components/Field/Field.tsx
function m({ label: e, hint: n, error: r, required: a, wide: o, children: s, className: u, ...f }) {
	let p = i(), m = s.props.id ?? p, h = `${m}-hint`, g = `${m}-error`, _ = [r ? g : null, n && !r ? h : null].filter(Boolean).join(" ") || void 0, v = t(s, {
		id: m,
		"aria-invalid": r ? !0 : s.props["aria-invalid"],
		"aria-describedby": _ ?? s.props["aria-describedby"]
	});
	return /* @__PURE__ */ l("div", {
		className: d("adoc-field", o && "wide", u),
		...f,
		children: [
			e && /* @__PURE__ */ l("label", {
				className: "adoc-label",
				htmlFor: m,
				children: [e, a && /* @__PURE__ */ c("span", {
					className: "req",
					"aria-hidden": !0,
					children: "*"
				})]
			}),
			v,
			r ? /* @__PURE__ */ c("div", {
				id: g,
				className: "adoc-hint error",
				children: r
			}) : n ? /* @__PURE__ */ c("div", {
				id: h,
				className: "adoc-hint",
				children: n
			}) : null
		]
	});
}
//#endregion
//#region src/components/Input/Input.tsx
var h = n(function({ invalid: e, className: t, type: n = "text", ...r }, i) {
	return /* @__PURE__ */ c("input", {
		ref: i,
		type: n,
		"aria-invalid": e || r["aria-invalid"],
		className: d("adoc-input", t),
		...r
	});
}), g = n(function({ invalid: e, className: t, ...n }, r) {
	return /* @__PURE__ */ c("textarea", {
		ref: r,
		"aria-invalid": e || n["aria-invalid"],
		className: d("adoc-textarea", t),
		...n
	});
}), _ = n(function({ invalid: e, className: t, wrapClassName: n, children: r, ...i }, a) {
	return /* @__PURE__ */ c("span", {
		className: d("adoc-select-wrap", n),
		children: /* @__PURE__ */ c("select", {
			ref: a,
			"aria-invalid": e || i["aria-invalid"],
			className: d("adoc-select", t),
			...i,
			children: r
		})
	});
}), v = {
	fill: "none",
	stroke: "currentColor",
	"aria-hidden": !0
};
function y(e) {
	return /* @__PURE__ */ l("svg", {
		viewBox: "0 0 16 16",
		strokeWidth: 1.5,
		...v,
		...e,
		children: [/* @__PURE__ */ c("circle", {
			cx: "8",
			cy: "8",
			r: "6"
		}), /* @__PURE__ */ c("path", { d: "M8 5v3l2 1.5" })]
	});
}
function b(e) {
	return /* @__PURE__ */ l("svg", {
		viewBox: "0 0 16 16",
		strokeWidth: 1.5,
		...v,
		...e,
		children: [/* @__PURE__ */ c("path", { d: "M1.5 8s2.5-4.5 6.5-4.5S14.5 8 14.5 8s-2.5 4.5-6.5 4.5S1.5 8 1.5 8z" }), /* @__PURE__ */ c("circle", {
			cx: "8",
			cy: "8",
			r: "2"
		})]
	});
}
function ee(e) {
	return /* @__PURE__ */ l("svg", {
		viewBox: "0 0 16 16",
		strokeWidth: 1.5,
		...v,
		...e,
		children: [/* @__PURE__ */ c("path", { d: "M9 4l-4 4 4 4" }), /* @__PURE__ */ c("path", { d: "M5 8h7" })]
	});
}
function te(e) {
	return /* @__PURE__ */ c("svg", {
		viewBox: "0 0 16 16",
		strokeWidth: 1.7,
		...v,
		...e,
		children: /* @__PURE__ */ c("path", { d: "M3 8.5l3.5 3.5L13 5" })
	});
}
function x(e) {
	return /* @__PURE__ */ c("svg", {
		viewBox: "0 0 16 16",
		strokeWidth: 1.7,
		...v,
		...e,
		children: /* @__PURE__ */ c("path", { d: "M4 4l8 8M12 4l-8 8" })
	});
}
function S(e) {
	return /* @__PURE__ */ l("svg", {
		viewBox: "0 0 16 16",
		strokeWidth: 1.5,
		...v,
		...e,
		children: [/* @__PURE__ */ c("circle", {
			cx: "8",
			cy: "8",
			r: "6"
		}), /* @__PURE__ */ c("path", { d: "M4 12L12 4" })]
	});
}
function C(e) {
	return /* @__PURE__ */ c("svg", {
		viewBox: "0 0 16 16",
		strokeWidth: 1.5,
		...v,
		...e,
		children: /* @__PURE__ */ c("path", { d: "M3 14V3l8 4-8 4" })
	});
}
function ne(e) {
	return /* @__PURE__ */ l("svg", {
		viewBox: "0 0 20 20",
		strokeWidth: 1.5,
		...v,
		...e,
		children: [/* @__PURE__ */ c("circle", {
			cx: "10",
			cy: "10",
			r: "8"
		}), /* @__PURE__ */ c("path", { d: "M10 9v5M10 6v.5" })]
	});
}
function w(e) {
	return /* @__PURE__ */ l("svg", {
		viewBox: "0 0 20 20",
		strokeWidth: 1.7,
		...v,
		...e,
		children: [/* @__PURE__ */ c("circle", {
			cx: "10",
			cy: "10",
			r: "8"
		}), /* @__PURE__ */ c("path", { d: "M6.5 10.5L9 13l4.5-5" })]
	});
}
function T(e) {
	return /* @__PURE__ */ l("svg", {
		viewBox: "0 0 20 20",
		strokeWidth: 1.5,
		...v,
		...e,
		children: [/* @__PURE__ */ c("path", { d: "M10 2l8 14H2L10 2z" }), /* @__PURE__ */ c("path", { d: "M10 8v4M10 14v.5" })]
	});
}
function E(e) {
	return /* @__PURE__ */ l("svg", {
		viewBox: "0 0 20 20",
		strokeWidth: 1.7,
		...v,
		...e,
		children: [/* @__PURE__ */ c("circle", {
			cx: "10",
			cy: "10",
			r: "8"
		}), /* @__PURE__ */ c("path", { d: "M10 6v5M10 14v.5" })]
	});
}
function D(e) {
	return /* @__PURE__ */ c("svg", {
		viewBox: "0 0 20 20",
		strokeWidth: 1.5,
		...v,
		...e,
		children: /* @__PURE__ */ c("path", { d: "M10 2v8M6 6l4-4 4 4M3 14h14" })
	});
}
function O(e) {
	return /* @__PURE__ */ l("svg", {
		viewBox: "0 0 20 20",
		strokeWidth: 1.5,
		...v,
		...e,
		children: [/* @__PURE__ */ c("path", { d: "M5 2h7l3 3v13H5z" }), /* @__PURE__ */ c("path", { d: "M12 2v3h3" })]
	});
}
function k(e) {
	return /* @__PURE__ */ l("svg", {
		viewBox: "0 0 14 14",
		strokeWidth: 1.5,
		...v,
		...e,
		children: [/* @__PURE__ */ c("rect", {
			x: "1.5",
			y: "3",
			width: "11",
			height: "9.5",
			rx: "0.5"
		}), /* @__PURE__ */ c("path", { d: "M1.5 6h11M4.5 1.5v3M9.5 1.5v3" })]
	});
}
function A(e) {
	return /* @__PURE__ */ c("svg", {
		viewBox: "0 0 14 14",
		strokeWidth: 1.5,
		...v,
		...e,
		children: /* @__PURE__ */ c("path", { d: "M3 5.5L7 9.5l4-4" })
	});
}
function j(e) {
	return /* @__PURE__ */ c("svg", {
		viewBox: "0 0 16 16",
		strokeWidth: 2,
		...v,
		...e,
		children: /* @__PURE__ */ c("path", { d: "M3 8.5l3 3 7-7" })
	});
}
function M(e) {
	return /* @__PURE__ */ c("svg", {
		viewBox: "0 0 16 16",
		strokeWidth: 1.7,
		...v,
		...e,
		children: /* @__PURE__ */ c("path", { d: "M9 4l-4 4 4 4M5 8h7" })
	});
}
function N(e) {
	return /* @__PURE__ */ c("svg", {
		viewBox: "0 0 16 16",
		strokeWidth: 2,
		...v,
		...e,
		children: /* @__PURE__ */ c("path", { d: "M4 4l8 8M12 4l-8 8" })
	});
}
//#endregion
//#region src/components/DatePicker/DatePicker.tsx
var P = n(function({ invalid: e, className: t, wrapClassName: n, ...r }, i) {
	return /* @__PURE__ */ l("span", {
		className: d("adoc-date", n),
		children: [/* @__PURE__ */ c("input", {
			ref: i,
			type: "date",
			"aria-invalid": e || r["aria-invalid"],
			className: d("adoc-input", t),
			...r
		}), /* @__PURE__ */ c(k, { className: "cal-ico" })]
	});
});
//#endregion
//#region src/components/FileUpload/FileUpload.tsx
function F({ files: e = [], accept: t, multiple: n, disabled: r, error: i, title: s, hint: u, onFilesAdded: f, onRemove: p, className: m, id: h, name: g }) {
	let _ = a(null), [v, y] = o(!1), b = () => {
		r || _.current?.click();
	};
	return /* @__PURE__ */ l("div", {
		className: m,
		children: [/* @__PURE__ */ l("div", {
			className: d("adoc-dropzone", v && "dragging", i && "error"),
			role: "button",
			tabIndex: r ? -1 : 0,
			"aria-disabled": r || void 0,
			onClick: b,
			onKeyDown: (e) => {
				(e.key === "Enter" || e.key === " ") && (e.preventDefault(), b());
			},
			onDragOver: (e) => {
				e.preventDefault(), r || y(!0);
			},
			onDragLeave: () => y(!1),
			onDrop: (e) => {
				e.preventDefault(), y(!1), !r && e.dataTransfer.files && e.dataTransfer.files.length > 0 && f?.(e.dataTransfer.files);
			},
			children: [
				/* @__PURE__ */ c(D, { className: "ico" }),
				/* @__PURE__ */ c("div", {
					className: "title",
					children: s ?? "Hacé clic para subir o arrastrá los archivos"
				}),
				u && /* @__PURE__ */ c("div", {
					className: "sub",
					children: u
				}),
				/* @__PURE__ */ c("input", {
					ref: _,
					id: h,
					name: g,
					type: "file",
					accept: t,
					multiple: n,
					disabled: r,
					style: { display: "none" },
					onChange: (e) => {
						e.target.files && e.target.files.length > 0 && f?.(e.target.files), e.target.value = "";
					}
				})
			]
		}), e.length > 0 && /* @__PURE__ */ c("div", {
			className: "adoc-file-list",
			children: e.map((e) => {
				let t = e.status ?? "uploaded";
				return /* @__PURE__ */ l("div", {
					className: d("adoc-file-row", t !== "uploaded" && t),
					children: [
						/* @__PURE__ */ c(O, { className: "ico" }),
						/* @__PURE__ */ c("span", {
							className: "name",
							children: e.name
						}),
						e.size && /* @__PURE__ */ c("span", {
							className: "size",
							children: e.size
						}),
						p && /* @__PURE__ */ c("button", {
							type: "button",
							className: "remove",
							"aria-label": `Quitar ${e.name}`,
							onClick: () => p(e.id),
							children: "×"
						}),
						t === "uploading" && /* @__PURE__ */ c("div", {
							className: "adoc-file-progress",
							style: { width: "100%" },
							children: /* @__PURE__ */ c("i", { style: { width: `${Math.min(100, Math.max(0, e.progress ?? 0))}%` } })
						}),
						t === "error" && e.error && /* @__PURE__ */ c("div", {
							style: {
								width: "100%",
								fontSize: 12
							},
							children: e.error
						})
					]
				}, e.id);
			})
		})]
	});
}
//#endregion
//#region src/components/Checkbox/Checkbox.tsx
var I = n(function({ label: e, indeterminate: t, checked: n, disabled: i, className: o, labelClassName: s, ...u }, f) {
	let p = a(null);
	return r(() => {
		p.current && (p.current.indeterminate = !!t);
	}, [t]), /* @__PURE__ */ l("label", {
		className: d("adoc-check", n && !t && "checked", t && "indeterminate", i && "disabled", s),
		children: [
			/* @__PURE__ */ c("input", {
				ref: (e) => {
					p.current = e, typeof f == "function" ? f(e) : f && (f.current = e);
				},
				type: "checkbox",
				checked: n,
				disabled: i,
				className: o,
				...u
			}),
			/* @__PURE__ */ c("span", {
				className: "box",
				"aria-hidden": !0
			}),
			e != null && /* @__PURE__ */ c("span", { children: e })
		]
	});
}), L = n(function({ label: e, checked: t, disabled: n, className: r, labelClassName: i, ...a }, o) {
	return /* @__PURE__ */ l("label", {
		className: d("adoc-check", "adoc-radio", t && "checked", n && "disabled", i),
		children: [
			/* @__PURE__ */ c("input", {
				ref: o,
				type: "radio",
				checked: t,
				disabled: n,
				className: r,
				...a
			}),
			/* @__PURE__ */ c("span", {
				className: "box",
				"aria-hidden": !0
			}),
			e != null && /* @__PURE__ */ c("span", { children: e })
		]
	});
}), R = n(function({ label: e, checked: t, disabled: n, className: r, labelClassName: i, ...a }, o) {
	return /* @__PURE__ */ l("label", {
		className: d("adoc-toggle", t && "on", n && "disabled", i),
		children: [
			/* @__PURE__ */ c("input", {
				ref: o,
				type: "checkbox",
				role: "switch",
				checked: t,
				disabled: n,
				className: r,
				...a
			}),
			/* @__PURE__ */ c("span", {
				className: "track",
				"aria-hidden": !0
			}),
			e != null && /* @__PURE__ */ c("span", { children: e })
		]
	});
}), z = {
	pendiente: {
		label: "Pendiente",
		Icon: y
	},
	revision: {
		label: "En Revisión",
		Icon: b
	},
	devuelto: {
		label: "Devuelto",
		Icon: ee
	},
	aprobado: {
		label: "Aprobado",
		Icon: te
	},
	rechazado: {
		label: "Rechazado",
		Icon: x
	},
	cancelado: {
		label: "Cancelado",
		Icon: S
	},
	prioritario: {
		label: "Prioritario",
		Icon: C
	}
};
function B({ kind: e, label: t, showIcon: n = !0, className: r, ...i }) {
	let { label: a, Icon: o } = z[e];
	return /* @__PURE__ */ l("span", {
		className: d("adoc-badge", `s-${e}`, r),
		...i,
		children: [n && /* @__PURE__ */ c(o, { className: "ico" }), t ?? a]
	});
}
//#endregion
//#region src/components/InlineAlert/InlineAlert.tsx
var V = {
	info: ne,
	success: w,
	warning: T,
	danger: E
}, H = {
	info: "status",
	success: "status",
	warning: "alert",
	danger: "alert"
};
function U({ severity: e = "info", title: t, onClose: n, closeLabel: r = "Cerrar", children: i, className: a, role: o, ...s }) {
	let u = V[e];
	return /* @__PURE__ */ l("div", {
		role: o ?? H[e],
		className: d("adoc-alert", e, a),
		...s,
		children: [
			/* @__PURE__ */ c(u, { className: "ico" }),
			/* @__PURE__ */ l("div", {
				className: "body",
				children: [t && /* @__PURE__ */ c("b", { children: t }), i]
			}),
			n ? /* @__PURE__ */ c("button", {
				type: "button",
				className: "close",
				"aria-label": r,
				onClick: n,
				children: "×"
			}) : /* @__PURE__ */ c("span", {})
		]
	});
}
//#endregion
//#region src/components/Toast/Toast.tsx
var W = {
	default: D,
	info: D,
	success: w,
	warning: T,
	danger: E
}, G = {
	default: "status",
	info: "status",
	success: "status",
	warning: "status",
	danger: "alert"
};
function re({ severity: e = "default", title: t, meta: n, icon: r, onClose: i, closeLabel: a = "Cerrar", children: o, className: s, role: u, ...f }) {
	let p = W[e], m = e === "danger" ? "assertive" : "polite";
	return /* @__PURE__ */ l("div", {
		role: u ?? G[e],
		"aria-live": m,
		className: d("adoc-toast", e !== "default" && e, s),
		...f,
		children: [
			/* @__PURE__ */ c("span", {
				className: "ico",
				children: r ?? /* @__PURE__ */ c(p, {})
			}),
			/* @__PURE__ */ l("div", {
				className: "body",
				children: [
					t && /* @__PURE__ */ c("b", { children: t }),
					o,
					n && /* @__PURE__ */ c("div", {
						className: "meta",
						children: n
					})
				]
			}),
			i ? /* @__PURE__ */ c("button", {
				type: "button",
				className: "close",
				"aria-label": a,
				onClick: i,
				children: "×"
			}) : /* @__PURE__ */ c("span", {})
		]
	});
}
//#endregion
//#region src/components/Modal/Modal.tsx
function K({ open: e, onOpenChange: t, title: n, children: a, footer: o, closeOnEscape: s = !0, closeOnBackdrop: f = !0, closeLabel: p = "Cerrar", hideCloseButton: m = !1, className: h, "aria-label": g }) {
	let _ = i();
	return r(() => {
		if (!e || !s) return;
		let n = (e) => {
			e.key === "Escape" && t?.(!1);
		};
		return window.addEventListener("keydown", n), () => window.removeEventListener("keydown", n);
	}, [
		e,
		s,
		t
	]), r(() => {
		if (!e) return;
		let t = document.body.style.overflow;
		return document.body.style.overflow = "hidden", () => {
			document.body.style.overflow = t;
		};
	}, [e]), !e || typeof document > "u" ? null : u(/* @__PURE__ */ c("div", {
		className: "adoc-modal-stage adoc-ui",
		onMouseDown: (e) => {
			e.target === e.currentTarget && f && t?.(!1);
		},
		children: /* @__PURE__ */ l("div", {
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": n ? _ : void 0,
			"aria-label": n ? void 0 : g,
			className: d("adoc-modal", h),
			children: [
				(n || !m) && /* @__PURE__ */ l("header", { children: [n && /* @__PURE__ */ c("h4", {
					id: _,
					children: n
				}), !m && /* @__PURE__ */ c("button", {
					type: "button",
					className: "close",
					"aria-label": p,
					onClick: () => t?.(!1),
					children: "×"
				})] }),
				/* @__PURE__ */ c("div", {
					className: "body",
					children: a
				}),
				o && /* @__PURE__ */ c("footer", { children: o })
			]
		})
	}), document.body);
}
//#endregion
//#region src/components/Drawer/Drawer.tsx
function q({ open: e, onOpenChange: t, title: n, children: a, footer: o, side: s = "right", closeOnEscape: f = !0, closeOnBackdrop: p = !0, closeLabel: m = "Cerrar", hideCloseButton: h = !1, className: g, "aria-label": _ }) {
	let v = i();
	return r(() => {
		if (!e || !f) return;
		let n = (e) => {
			e.key === "Escape" && t?.(!1);
		};
		return window.addEventListener("keydown", n), () => window.removeEventListener("keydown", n);
	}, [
		e,
		f,
		t
	]), r(() => {
		if (!e) return;
		let t = document.body.style.overflow;
		return document.body.style.overflow = "hidden", () => {
			document.body.style.overflow = t;
		};
	}, [e]), !e || typeof document > "u" ? null : u(/* @__PURE__ */ c("div", {
		className: d("adoc-drawer-stage adoc-ui", s),
		onMouseDown: (e) => {
			e.target === e.currentTarget && p && t?.(!1);
		},
		children: /* @__PURE__ */ l("div", {
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": n ? v : void 0,
			"aria-label": n ? void 0 : _,
			className: d("adoc-drawer", g),
			children: [
				(n || !h) && /* @__PURE__ */ l("header", { children: [n && /* @__PURE__ */ c("h4", {
					id: v,
					children: n
				}), !h && /* @__PURE__ */ c("button", {
					type: "button",
					className: "close",
					"aria-label": m,
					onClick: () => t?.(!1),
					children: "×"
				})] }),
				/* @__PURE__ */ c("div", {
					className: "body",
					children: a
				}),
				o && /* @__PURE__ */ c("footer", { children: o })
			]
		})
	}), document.body);
}
//#endregion
//#region src/components/Tabs/Tabs.tsx
function J({ items: e, value: t, onChange: n, className: r, ...i }) {
	let a = (r) => {
		if (r.key !== "ArrowLeft" && r.key !== "ArrowRight") return;
		r.preventDefault();
		let i = e.findIndex((e) => e.id === t);
		if (i === -1) return;
		let a = r.key === "ArrowRight" ? 1 : -1;
		for (let t = 1; t <= e.length; t++) {
			let r = e[(i + a * t + e.length) % e.length];
			if (!r.disabled) {
				n(r.id);
				break;
			}
		}
	};
	return /* @__PURE__ */ c("div", {
		role: "tablist",
		className: d("adoc-tabs", r),
		...i,
		children: e.map((e) => {
			let r = e.id === t;
			return /* @__PURE__ */ l("button", {
				type: "button",
				role: "tab",
				"aria-selected": r,
				"aria-controls": `panel-${e.id}`,
				id: `tab-${e.id}`,
				tabIndex: r ? 0 : -1,
				disabled: e.disabled,
				className: d(r && "active"),
				onClick: () => n(e.id),
				onKeyDown: a,
				children: [e.label, e.count != null && /* @__PURE__ */ c("span", {
					className: "count",
					children: e.count
				})]
			}, e.id);
		})
	});
}
//#endregion
//#region src/components/Breadcrumbs/Breadcrumbs.tsx
function Y({ items: t, separator: n = "/", className: r, ...i }) {
	return /* @__PURE__ */ c("nav", {
		"aria-label": "Migas de pan",
		className: d("adoc-crumbs", r),
		...i,
		children: t.map((r, i) => {
			let a = i === t.length - 1;
			return /* @__PURE__ */ l(e, { children: [a ? /* @__PURE__ */ c("span", {
				className: "current",
				"aria-current": "page",
				children: r.label
			}) : r.href ? /* @__PURE__ */ c("a", {
				href: r.href,
				children: r.label
			}) : /* @__PURE__ */ c("span", { children: r.label }), !a && /* @__PURE__ */ c("span", {
				className: "sep",
				"aria-hidden": !0,
				children: n
			})] }, i);
		})
	});
}
//#endregion
//#region src/components/Pagination/Pagination.tsx
function X(e, t, n) {
	if (t <= 1) return [1];
	let r = t, i = Math.max(2, e - n), a = Math.min(r - 1, e + n), o = [1];
	i > 2 && o.push("…");
	for (let e = i; e <= a; e++) o.push(e);
	return a < r - 1 && o.push("…"), r > 1 && o.push(r), o;
}
function ie({ page: e, pageCount: t, onChange: n, siblingCount: r = 1, meta: i, previousLabel: a = "Anterior", nextLabel: o = "Siguiente", className: s, ...u }) {
	let f = X(e, t, r), p = e <= 1, m = e >= t;
	return /* @__PURE__ */ l("nav", {
		"aria-label": "Paginación",
		className: d("adoc-pagination", s),
		...u,
		children: [
			/* @__PURE__ */ c("button", {
				type: "button",
				className: "pg",
				disabled: p,
				onClick: () => n(Math.max(1, e - 1)),
				children: a
			}),
			/* @__PURE__ */ c("div", {
				className: "pages",
				children: f.map((t, r) => t === "…" ? /* @__PURE__ */ c("span", {
					className: "pg ellipsis",
					"aria-hidden": !0,
					children: "…"
				}, `e-${r}`) : /* @__PURE__ */ c("button", {
					type: "button",
					className: d("pg", t === e && "current"),
					"aria-current": t === e ? "page" : void 0,
					onClick: () => n(t),
					children: t
				}, t))
			}),
			/* @__PURE__ */ c("button", {
				type: "button",
				className: "pg",
				disabled: m,
				onClick: () => n(Math.min(t, e + 1)),
				children: o
			}),
			i && /* @__PURE__ */ c("span", {
				className: "meta",
				children: i
			})
		]
	});
}
//#endregion
//#region src/components/Table/Table.tsx
function ae({ className: e, children: t, ...n }) {
	return /* @__PURE__ */ c("div", {
		className: d("adoc-table-wrap", e),
		...n,
		children: t
	});
}
function oe({ left: e, right: t, children: n, className: r, ...i }) {
	return /* @__PURE__ */ c("div", {
		className: d("adoc-table-toolbar", r),
		...i,
		children: n ?? /* @__PURE__ */ l(s, { children: [/* @__PURE__ */ c("div", {
			className: "lhs",
			children: e
		}), /* @__PURE__ */ c("div", {
			className: "rhs",
			children: t
		})] })
	});
}
function se({ className: e, children: t, ...n }) {
	return /* @__PURE__ */ c("table", {
		className: d("adoc-table", e),
		...n,
		children: t
	});
}
function ce({ sort: e, onSortChange: t, className: n, children: r, ...i }) {
	let a = e !== void 0;
	return /* @__PURE__ */ l("th", {
		scope: "col",
		"aria-sort": e === "asc" ? "ascending" : e === "desc" ? "descending" : a ? "none" : void 0,
		onClick: a ? t : void 0,
		className: d(a && "sort", (e === "asc" || e === "desc") && "active", n),
		...i,
		children: [r, a && /* @__PURE__ */ c("span", {
			className: "arrow",
			"aria-hidden": !0,
			children: e === "asc" ? "▲" : e === "desc" ? "▼" : "▲"
		})]
	});
}
function le({ selected: e, className: t, children: n, ...r }) {
	return /* @__PURE__ */ c("tr", {
		className: d(e && "selected", t),
		"aria-selected": e || void 0,
		...r,
		children: n
	});
}
function ue({ numeric: e, className: t, children: n, ...r }) {
	return /* @__PURE__ */ c("td", {
		className: d(e && "num", t),
		...r,
		children: n
	});
}
function de({ className: e, ...t }) {
	return /* @__PURE__ */ c("thead", {
		className: e,
		...t
	});
}
function fe({ className: e, ...t }) {
	return /* @__PURE__ */ c("tbody", {
		className: e,
		...t
	});
}
var Z = ae;
Z.Toolbar = oe, Z.Root = se, Z.Head = de, Z.Body = fe, Z.Row = le, Z.Cell = ue, Z.HeaderCell = ce;
//#endregion
//#region src/components/DataList/DataList.tsx
function pe({ items: t, className: n, ...r }) {
	return /* @__PURE__ */ c("dl", {
		className: d("adoc-dlist", n),
		...r,
		children: t.map((t, n) => {
			let r = t.description == null || t.description === "";
			return /* @__PURE__ */ l(e, { children: [/* @__PURE__ */ c("dt", { children: t.term }), /* @__PURE__ */ c("dd", { children: r ? /* @__PURE__ */ c("span", {
				className: "empty",
				children: t.emptyLabel ?? "— sin datos —"
			}) : t.description })] }, n);
		})
	});
}
//#endregion
//#region src/components/ApprovalTimeline/ApprovalTimeline.tsx
function me({ status: e }) {
	return e === "done" ? /* @__PURE__ */ c(j, {}) : e === "returned" ? /* @__PURE__ */ c(M, {}) : e === "rejected" ? /* @__PURE__ */ c(N, {}) : null;
}
function Q({ steps: e, className: t, ...n }) {
	return /* @__PURE__ */ c("div", {
		className: d("adoc-timeline", t),
		...n,
		children: /* @__PURE__ */ c("ol", { children: e.map((e, t) => /* @__PURE__ */ l("li", {
			className: d(e.status, e.event && "event"),
			children: [
				/* @__PURE__ */ c("span", {
					className: "marker",
					children: /* @__PURE__ */ c(me, { status: e.status })
				}),
				/* @__PURE__ */ c("div", {
					className: "step-role",
					children: e.role
				}),
				/* @__PURE__ */ c("div", {
					className: "step-name",
					children: e.name
				}),
				e.meta && /* @__PURE__ */ c("div", {
					className: "step-meta",
					children: e.meta
				}),
				e.comment && /* @__PURE__ */ c("div", {
					className: "step-comment",
					children: e.comment
				})
			]
		}, t)) })
	});
}
//#endregion
//#region src/components/TrafficLight/TrafficLight.tsx
var $ = {
	green: "A tiempo",
	yellow: "Próximo a vencer",
	red: "Vencido"
};
function he({ state: e, label: t, due: n, className: r, ...i }) {
	let a = typeof t == "string" ? t : $[e];
	return /* @__PURE__ */ l("span", {
		className: d("adoc-traffic", e, r),
		role: "img",
		"aria-label": a,
		...i,
		children: [
			/* @__PURE__ */ c("span", {
				className: "dot",
				"aria-hidden": !0
			}),
			/* @__PURE__ */ c("span", { children: t ?? $[e] }),
			n && /* @__PURE__ */ c("span", {
				className: "due",
				children: n
			})
		]
	});
}
//#endregion
//#region src/components/AuditLog/AuditLog.tsx
var ge = {
	create: "creó",
	update: "actualizó",
	attach: "adjuntó",
	approve: "aprobó",
	return: "devolvió",
	reject: "rechazó"
};
function _e({ entries: e, className: t, ...n }) {
	return /* @__PURE__ */ c("div", {
		className: d("adoc-audit", t),
		...n,
		children: e.map((e, t) => /* @__PURE__ */ l("div", {
			className: "adoc-audit-entry",
			children: [
				/* @__PURE__ */ c("span", {
					className: "who",
					"aria-hidden": !0,
					children: e.initials
				}),
				/* @__PURE__ */ l("div", {
					className: "what",
					children: [
						/* @__PURE__ */ c("b", { children: e.actor }),
						" ",
						/* @__PURE__ */ c("span", {
							className: d("verb", e.verb),
							children: e.verbLabel ?? ge[e.verb]
						}),
						" ",
						e.detail
					]
				}),
				/* @__PURE__ */ c("span", {
					className: "when",
					children: e.when
				}),
				e.comment && /* @__PURE__ */ c("div", {
					className: "comment",
					children: e.comment
				})
			]
		}, e.id ?? t))
	});
}
//#endregion
//#region src/components/RoleBadge/RoleBadge.tsx
function ve({ name: e, initials: t, role: n, multi: r, onSwitchClick: i, switchLabel: a = "Cambiar de rol", className: o, ...s }) {
	return /* @__PURE__ */ l("span", {
		className: d("adoc-role-badge", r && "multi", o),
		...s,
		children: [
			/* @__PURE__ */ c("span", {
				className: "avatar",
				"aria-hidden": !0,
				children: t
			}),
			/* @__PURE__ */ c("span", { children: e }),
			/* @__PURE__ */ c("span", {
				className: "role",
				children: n
			}),
			r ? /* @__PURE__ */ c("button", {
				type: "button",
				className: "switch",
				"aria-label": a,
				onClick: i,
				children: /* @__PURE__ */ c(A, {})
			}) : /* @__PURE__ */ c(A, {
				className: "caret",
				"aria-hidden": !0
			})
		]
	});
}
//#endregion
//#region src/components/RoleBadge/RoleMenu.tsx
function ye({ heading: e = "Cambiar de rol", options: t, onSelect: n, selectedId: r, checkLabel: i = "Activo", className: a, ...o }) {
	return /* @__PURE__ */ l("div", {
		role: "menu",
		className: d("adoc-role-menu", a),
		...o,
		children: [e && /* @__PURE__ */ c("div", {
			className: "head",
			children: e
		}), t.map((e) => {
			let t = e.current ?? e.id === r;
			return /* @__PURE__ */ l("button", {
				type: "button",
				role: "menuitemradio",
				"aria-checked": t,
				disabled: e.disabled,
				className: d("opt", t && "current"),
				onClick: () => n?.(e.id),
				children: [/* @__PURE__ */ l("span", { children: [/* @__PURE__ */ c("span", {
					className: "who-r",
					children: e.name
				}), e.scope && /* @__PURE__ */ c("div", {
					className: "scope",
					children: e.scope
				})] }), t && /* @__PURE__ */ c("span", {
					className: "check",
					"aria-label": i,
					children: "✓"
				})]
			}, e.id);
		})]
	});
}
//#endregion
export { Q as ApprovalTimeline, _e as AuditLog, Y as Breadcrumbs, p as Button, I as Checkbox, pe as DataList, P as DatePicker, q as Drawer, m as Field, F as FileUpload, U as InlineAlert, h as Input, K as Modal, ie as Pagination, L as Radio, ve as RoleBadge, ye as RoleMenu, _ as Select, B as StatusBadge, Z as Table, J as Tabs, g as Textarea, re as Toast, R as Toggle, he as TrafficLight };
