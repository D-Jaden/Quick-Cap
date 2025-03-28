var e = {
		615: (e, t, i) => {
			i.d(t, { A: () => s });
			class s {
				constructor(e, t, i) {
					(this.el = e),
						(this.options = t),
						(this.events = i),
						(this.el = e),
						(this.options = t),
						(this.events = {});
				}
				createCollection(e, t) {
					var i;
					e.push({
						id:
							(null === (i = null == t ? void 0 : t.el) || void 0 === i
								? void 0
								: i.id) || e.length + 1,
						element: t,
					});
				}
				fireEvent(e, t = null) {
					if (this.events.hasOwnProperty(e)) return this.events[e](t);
				}
				on(e, t) {
					this.events[e] = t;
				}
			}
		},
		926: (e, t, i) => {
			i.d(t, { JD: () => s });
			const s = (e, t, i = null) => {
				const s = new CustomEvent(e, {
					detail: { payload: i },
					bubbles: !0,
					cancelable: !0,
					composed: !1,
				});
				t.dispatchEvent(s);
			};
		},
	},
	t = {};
function i(s) {
	var n = t[s];
	if (void 0 !== n) return n.exports;
	var l = (t[s] = { exports: {} });
	return e[s](l, l.exports, i), l.exports;
}
(i.d = (e, t) => {
	for (var s in t)
		i.o(t, s) &&
			!i.o(e, s) &&
			Object.defineProperty(e, s, { enumerable: !0, get: t[s] });
}),
	(i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t));
var s = {};
i.d(s, { A: () => r });
var n = i(926),
	l = i(615);
/*
 * HSTreeView
 * @version: 2.7.0
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */
class o extends l.A {
	constructor(e, t, i) {
		super(e, t, i), (this.items = []);
		const s = e.getAttribute('data-hs-tree-view'),
			n = s ? JSON.parse(s) : {},
			l = Object.assign(Object.assign({}, n), t);
		(this.controlBy = (null == l ? void 0 : l.controlBy) || 'button'),
			(this.autoSelectChildren =
				(null == l ? void 0 : l.autoSelectChildren) || !1),
			(this.isIndeterminate = (null == l ? void 0 : l.isIndeterminate) || !0),
			(this.onElementClickListener = []),
			(this.onControlChangeListener = []),
			this.init();
	}
	elementClick(e, t, i) {
		if ((e.stopPropagation(), t.classList.contains('disabled'))) return !1;
		e.metaKey || e.shiftKey || this.unselectItem(i),
			this.selectItem(t, i),
			this.fireEvent('click', { el: t, data: i }),
			(0, n.JD)('click.hs.treeView', this.el, { el: t, data: i });
	}
	controlChange(e, t) {
		this.autoSelectChildren
			? (this.selectItem(e, t),
				t.isDir && this.selectChildren(e, t),
				this.toggleParent(e))
			: this.selectItem(e, t);
	}
	init() {
		this.createCollection(window.$hsTreeViewCollection, this),
			(o.group += 1),
			this.initItems();
	}
	initItems() {
		this.el.querySelectorAll('[data-hs-tree-view-item]').forEach((e, t) => {
			var i, s;
			const n = JSON.parse(e.getAttribute('data-hs-tree-view-item'));
			e.id || (e.id = `tree-view-item-${o.group}-${t}`);
			const l = Object.assign(Object.assign({}, n), {
				id: null !== (i = n.id) && void 0 !== i ? i : e.id,
				path: this.getPath(e),
				isSelected: null !== (s = n.isSelected) && void 0 !== s && s,
			});
			this.items.push(l),
				'checkbox' === this.controlBy
					? this.controlByCheckbox(e, l)
					: this.controlByButton(e, l);
		});
	}
	controlByButton(e, t) {
		this.onElementClickListener.push({
			el: e,
			fn: (i) => this.elementClick(i, e, t),
		}),
			e.addEventListener(
				'click',
				this.onElementClickListener.find((t) => t.el === e).fn,
			);
	}
	controlByCheckbox(e, t) {
		const i = e.querySelector(`input[value="${t.value}"]`);
		i &&
			(this.onControlChangeListener.push({
				el: i,
				fn: () => this.controlChange(e, t),
			}),
			i.addEventListener(
				'change',
				this.onControlChangeListener.find((e) => e.el === i).fn,
			));
	}
	getItem(e) {
		return this.items.find((t) => t.id === e);
	}
	getPath(e) {
		var t;
		const i = [];
		let s = e.closest('[data-hs-tree-view-item]');
		for (; s; ) {
			const e = JSON.parse(s.getAttribute('data-hs-tree-view-item'));
			i.push(e.value),
				(s =
					null === (t = s.parentElement) || void 0 === t
						? void 0
						: t.closest('[data-hs-tree-view-item]'));
		}
		return i.reverse().join('/');
	}
	unselectItem(e = null) {
		let t = this.getSelectedItems();
		e && (t = t.filter((t) => t.id !== e.id)),
			t.length &&
				t.forEach((e) => {
					document.querySelector(`#${e.id}`).classList.remove('selected'),
						this.changeItemProp(e.id, 'isSelected', !1);
				});
	}
	selectItem(e, t) {
		t.isSelected
			? (e.classList.remove('selected'),
				this.changeItemProp(t.id, 'isSelected', !1))
			: (e.classList.add('selected'),
				this.changeItemProp(t.id, 'isSelected', !0));
	}
	selectChildren(e, t) {
		const i = e.querySelectorAll('[data-hs-tree-view-item]');
		Array.from(i)
			.filter((e) => !e.classList.contains('disabled'))
			.forEach((e) => {
				const i = e.id ? this.getItem(e.id) : null;
				if (!i) return !1;
				t.isSelected
					? (e.classList.add('selected'),
						this.changeItemProp(i.id, 'isSelected', !0))
					: (e.classList.remove('selected'),
						this.changeItemProp(i.id, 'isSelected', !1));
				const s = this.getItem(e.id),
					n = e.querySelector(`input[value="${s.value}"]`);
				this.isIndeterminate && (n.indeterminate = !1),
					s.isSelected ? (n.checked = !0) : (n.checked = !1);
			});
	}
	toggleParent(e) {
		var t, i;
		let s =
			null === (t = e.parentElement) || void 0 === t
				? void 0
				: t.closest('[data-hs-tree-view-item]');
		for (; s; ) {
			const e = s.querySelectorAll('[data-hs-tree-view-item]:not(.disabled)'),
				t = JSON.parse(s.getAttribute('data-hs-tree-view-item')),
				n = s.querySelector(`input[value="${t.value}"]`);
			let l = !1,
				o = 0;
			e.forEach((e) => {
				const t = this.getItem(e.id);
				t.isSelected && (o += 1), t.isSelected || (l = !0);
			}),
				l
					? (s.classList.remove('selected'),
						this.changeItemProp(s.id, 'isSelected', !1),
						(n.checked = !1))
					: (s.classList.add('selected'),
						this.changeItemProp(s.id, 'isSelected', !0),
						(n.checked = !0)),
				this.isIndeterminate &&
					(o > 0 && o < e.length
						? (n.indeterminate = !0)
						: (n.indeterminate = !1)),
				(s =
					null === (i = s.parentElement) || void 0 === i
						? void 0
						: i.closest('[data-hs-tree-view-item]'));
		}
	}
	update() {
		this.items.map((e) => {
			const t = document.querySelector(`#${e.id}`);
			return e.path !== this.getPath(t) && (e.path = this.getPath(t)), e;
		});
	}
	getSelectedItems() {
		return this.items.filter((e) => e.isSelected);
	}
	changeItemProp(e, t, i) {
		this.items.map((s) => (s.id === e && (s[t] = i), s));
	}
	destroy() {
		this.onElementClickListener.forEach(({ el: e, fn: t }) => {
			e.removeEventListener('click', t);
		}),
			this.onControlChangeListener.length &&
				this.onElementClickListener.forEach(({ el: e, fn: t }) => {
					e.removeEventListener('change', t);
				}),
			this.unselectItem(),
			(this.items = []),
			(window.$hsTreeViewCollection = window.$hsTreeViewCollection.filter(
				({ element: e }) => e.el !== this.el,
			)),
			(o.group -= 1);
	}
	static getInstance(e, t) {
		const i = window.$hsTreeViewCollection.find(
			(t) =>
				t.element.el === ('string' == typeof e ? document.querySelector(e) : e),
		);
		return i ? (t ? i : i.element.el) : null;
	}
	static autoInit() {
		window.$hsTreeViewCollection || (window.$hsTreeViewCollection = []),
			window.$hsTreeViewCollection &&
				(window.$hsTreeViewCollection = window.$hsTreeViewCollection.filter(
					({ element: e }) => document.contains(e.el),
				)),
			document
				.querySelectorAll('[data-hs-tree-view]:not(.--prevent-on-load-init)')
				.forEach((e) => {
					window.$hsTreeViewCollection.find((t) => {
						var i;
						return (
							(null === (i = null == t ? void 0 : t.element) || void 0 === i
								? void 0
								: i.el) === e
						);
					}) || new o(e);
				});
	}
	static on(e, t, i) {
		const s = window.$hsTreeViewCollection.find(
			(e) =>
				e.element.el === ('string' == typeof t ? document.querySelector(t) : t),
		);
		s && (s.element.events[e] = i);
	}
}
(o.group = 0),
	window.addEventListener('load', () => {
		o.autoInit();
	}),
	'undefined' != typeof window && (window.HSTreeView = o);
const r = o;
var c = s.A;
export { c as default };
