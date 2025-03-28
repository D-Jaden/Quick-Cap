var e = {
		189: (e, t, o) => {
			o.d(t, { LO: () => i });
			const i = { xs: 0, sm: 640, md: 768, lg: 1024, xl: 1280, '2xl': 1536 };
		},
		615: (e, t, o) => {
			o.d(t, { A: () => i });
			class i {
				constructor(e, t, o) {
					(this.el = e),
						(this.options = t),
						(this.events = o),
						(this.el = e),
						(this.options = t),
						(this.events = {});
				}
				createCollection(e, t) {
					var o;
					e.push({
						id:
							(null === (o = null == t ? void 0 : t.el) || void 0 === o
								? void 0
								: o.id) || e.length + 1,
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
		926: (e, t, o) => {
			o.d(t, {
				JD: () => r,
				PK: () => i,
				gj: () => l,
				sH: () => n,
				wC: () => s,
				yd: () => a,
			});
			/*
			 * @version: 2.7.0
			 * @author: Preline Labs Ltd.
			 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
			 * Copyright 2024 Preline Labs Ltd.
			 */
			const i = (e) => 'true' === e,
				l = (e, t, o = '') =>
					(window.getComputedStyle(e).getPropertyValue(t) || o).replace(
						' ',
						'',
					);
			const s = (e, t) => {
					const o = e.children;
					for (let e = 0; e < o.length; e++) if (o[e] === t) return !0;
					return !1;
				},
				n = (e) => {
					if (!e) return !1;
					return (
						'none' === window.getComputedStyle(e).display || n(e.parentElement)
					);
				},
				r = (e, t, o = null) => {
					const i = new CustomEvent(e, {
						detail: { payload: o },
						bubbles: !0,
						cancelable: !0,
						composed: !1,
					});
					t.dispatchEvent(i);
				},
				a = (e, t) => {
					const o = () => {
							t(), e.removeEventListener('transitionend', o, !0);
						},
						i = window.getComputedStyle(e),
						l = i.getPropertyValue('transition-duration');
					'none' !== i.getPropertyValue('transition-property') &&
					parseFloat(l) > 0
						? e.addEventListener('transitionend', o, !0)
						: t();
				};
		},
	},
	t = {};
function o(i) {
	var l = t[i];
	if (void 0 !== l) return l.exports;
	var s = (t[i] = { exports: {} });
	return e[i](s, s.exports, o), s.exports;
}
(o.d = (e, t) => {
	for (var i in t)
		o.o(t, i) &&
			!o.o(e, i) &&
			Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
}),
	(o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t));
var i = {};
o.d(i, { A: () => d });
var l = o(926),
	s = o(189),
	n = o(615);
/*
 * HSOverlay
 * @version: 2.7.0
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */
class r extends n.A {
	constructor(e, t, o) {
		var i, n, r, a, d, c;
		super(e, t, o);
		const h = e.getAttribute('data-hs-overlay-options'),
			y = h ? JSON.parse(h) : {},
			u = Object.assign(Object.assign({}, y), t);
		if (
			((this.hiddenClass = (null == u ? void 0 : u.hiddenClass) || 'hidden'),
			(this.emulateScrollbarSpace =
				(null == u ? void 0 : u.emulateScrollbarSpace) || !1),
			(this.isClosePrev =
				null === (i = null == u ? void 0 : u.isClosePrev) || void 0 === i || i),
			(this.backdropClasses =
				null !== (n = null == u ? void 0 : u.backdropClasses) && void 0 !== n
					? n
					: 'hs-overlay-backdrop transition duration fixed inset-0 bg-gray-900 bg-opacity-50 dark:bg-opacity-80 dark:bg-neutral-900'),
			(this.backdropParent =
				'string' == typeof u.backdropParent
					? document.querySelector(u.backdropParent)
					: document.body),
			(this.backdropExtraClasses =
				null !== (r = null == u ? void 0 : u.backdropExtraClasses) &&
				void 0 !== r
					? r
					: ''),
			(this.moveOverlayToBody =
				(null == u ? void 0 : u.moveOverlayToBody) || null),
			(this.openNextOverlay = !1),
			(this.autoHide = null),
			(this.overlayId = this.el.getAttribute('data-hs-overlay')),
			(this.overlay = document.querySelector(this.overlayId)),
			(this.initContainer =
				(null === (a = this.overlay) || void 0 === a
					? void 0
					: a.parentElement) || null),
			this.overlay)
		) {
			(this.isCloseWhenClickInside = (0, l.PK)(
				(0, l.gj)(this.overlay, '--close-when-click-inside', 'false') ||
					'false',
			)),
				(this.isTabAccessibilityLimited = (0, l.PK)(
					(0, l.gj)(this.overlay, '--tab-accessibility-limited', 'true') ||
						'true',
				)),
				(this.isLayoutAffect = (0, l.PK)(
					(0, l.gj)(this.overlay, '--is-layout-affect', 'false') || 'false',
				)),
				(this.hasAutofocus = (0, l.PK)(
					(0, l.gj)(this.overlay, '--has-autofocus', 'true') || 'true',
				)),
				(this.hasAbilityToCloseOnBackdropClick = (0, l.PK)(
					this.overlay.getAttribute('data-hs-overlay-keyboard') || 'true',
				));
			const e = (0, l.gj)(this.overlay, '--auto-close'),
				t = (0, l.gj)(this.overlay, '--auto-close-equality-type');
			(this.autoClose = !isNaN(+e) && isFinite(+e) ? +e : s.LO[e] || null),
				(this.autoCloseEqualityType =
					null !== (d = t) && void 0 !== d ? d : null);
			const o = (0, l.gj)(this.overlay, '--opened');
			this.openedBreakpoint =
				(!isNaN(+o) && isFinite(+o) ? +o : s.LO[o]) || null;
		}
		(this.animationTarget =
			(null === (c = null == this ? void 0 : this.overlay) || void 0 === c
				? void 0
				: c.querySelector('.hs-overlay-animation-target')) || this.overlay),
			this.overlay && this.init();
	}
	elementClick() {
		this.overlay.classList.contains('opened') ? this.close() : this.open();
	}
	overlayClick(e) {
		e.target.id &&
			`#${e.target.id}` === this.overlayId &&
			this.isCloseWhenClickInside &&
			this.hasAbilityToCloseOnBackdropClick &&
			this.close();
	}
	backdropClick() {
		this.close();
	}
	init() {
		var e;
		if (
			(this.createCollection(window.$hsOverlayCollection, this),
			this.isLayoutAffect && this.openedBreakpoint)
		) {
			const e = r.getInstance(this.el, !0);
			r.setOpened(this.openedBreakpoint, e);
		}
		(null === (e = null == this ? void 0 : this.el) || void 0 === e
			? void 0
			: e.ariaExpanded) &&
			(this.overlay.classList.contains('opened')
				? (this.el.ariaExpanded = 'true')
				: (this.el.ariaExpanded = 'false')),
			(this.onElementClickListener = () => this.elementClick()),
			(this.onOverlayClickListener = (e) => this.overlayClick(e)),
			this.el.addEventListener('click', this.onElementClickListener),
			this.overlay.addEventListener('click', this.onOverlayClickListener);
	}
	hideAuto() {
		const e = parseInt((0, l.gj)(this.overlay, '--auto-hide', '0'));
		e &&
			(this.autoHide = setTimeout(() => {
				this.close();
			}, e));
	}
	checkTimer() {
		this.autoHide && (clearTimeout(this.autoHide), (this.autoHide = null));
	}
	buildBackdrop() {
		const e = this.overlay.classList.value.split(' '),
			t = parseInt(
				window.getComputedStyle(this.overlay).getPropertyValue('z-index'),
			),
			o = this.overlay.getAttribute('data-hs-overlay-backdrop-container') || !1;
		this.backdrop = document.createElement('div');
		let i = `${this.backdropClasses} ${this.backdropExtraClasses}`;
		const s =
				'static' !== (0, l.gj)(this.overlay, '--overlay-backdrop', 'true'),
			n = 'false' === (0, l.gj)(this.overlay, '--overlay-backdrop', 'true');
		(this.backdrop.id = `${this.overlay.id}-backdrop`),
			'style' in this.backdrop && (this.backdrop.style.zIndex = '' + (t - 1));
		for (const t of e)
			(t.startsWith('hs-overlay-backdrop-open:') ||
				t.includes(':hs-overlay-backdrop-open:')) &&
				(i += ` ${t}`);
		n ||
			(o &&
				((this.backdrop = document.querySelector(o).cloneNode(!0)),
				this.backdrop.classList.remove('hidden'),
				(i = `${this.backdrop.classList.toString()}`),
				(this.backdrop.classList.value = '')),
			s &&
				((this.onBackdropClickListener = () => this.backdropClick()),
				this.backdrop.addEventListener(
					'click',
					this.onBackdropClickListener,
					!0,
				)),
			this.backdrop.setAttribute('data-hs-overlay-backdrop-template', ''),
			this.backdropParent.appendChild(this.backdrop),
			setTimeout(() => {
				this.backdrop.classList.value = i;
			}));
	}
	destroyBackdrop() {
		const e = document.querySelector(`#${this.overlay.id}-backdrop`);
		e &&
			(this.openNextOverlay &&
				(e.style.transitionDuration =
					1.8 *
						parseFloat(
							window
								.getComputedStyle(e)
								.transitionDuration.replace(/[^\d.-]/g, ''),
						) +
					's'),
			e.classList.add('opacity-0'),
			(0, l.yd)(e, () => {
				e.remove();
			}));
	}
	focusElement() {
		const e = this.overlay.querySelector('[autofocus]');
		if (!e) return !1;
		e.focus();
	}
	getScrollbarSize() {
		let e = document.createElement('div');
		(e.style.overflow = 'scroll'),
			(e.style.width = '100px'),
			(e.style.height = '100px'),
			document.body.appendChild(e);
		let t = e.offsetWidth - e.clientWidth;
		return document.body.removeChild(e), t;
	}
	open() {
		if (!this.overlay) return !1;
		const e = document.querySelectorAll('.hs-overlay.open'),
			t = window.$hsOverlayCollection.find(
				(t) =>
					Array.from(e).includes(t.element.overlay) &&
					!t.element.isLayoutAffect,
			),
			o = document.querySelectorAll(`[data-hs-overlay="#${this.overlay.id}"]`),
			i = 'true' !== (0, l.gj)(this.overlay, '--body-scroll', 'false');
		if (this.isClosePrev && t)
			return (
				(this.openNextOverlay = !0),
				t.element.close().then(() => {
					this.open(), (this.openNextOverlay = !1);
				})
			);
		i &&
			((document.body.style.overflow = 'hidden'),
			this.emulateScrollbarSpace &&
				(document.body.style.paddingRight = `${this.getScrollbarSize()}px`)),
			this.buildBackdrop(),
			this.checkTimer(),
			this.hideAuto(),
			o.forEach((e) => {
				e.ariaExpanded && (e.ariaExpanded = 'true');
			}),
			this.overlay.classList.remove(this.hiddenClass),
			this.overlay.setAttribute('aria-overlay', 'true'),
			this.overlay.setAttribute('tabindex', '-1'),
			setTimeout(() => {
				if (this.overlay.classList.contains('opened')) return !1;
				this.overlay.classList.add('open', 'opened'),
					this.isLayoutAffect &&
						document.body.classList.add('hs-overlay-body-open'),
					this.fireEvent('open', this.el),
					(0, l.JD)('open.hs.overlay', this.el, this.el),
					this.hasAutofocus && this.focusElement();
			}, 50);
	}
	close(e = !1) {
		this.isLayoutAffect &&
			document.body.classList.remove('hs-overlay-body-open');
		const t = (e) => {
			if (this.overlay.classList.contains('open')) return !1;
			document
				.querySelectorAll(`[data-hs-overlay="#${this.overlay.id}"]`)
				.forEach((e) => {
					e.ariaExpanded && (e.ariaExpanded = 'false');
				}),
				this.overlay.classList.add(this.hiddenClass),
				this.destroyBackdrop(),
				this.fireEvent('close', this.el),
				(0, l.JD)('close.hs.overlay', this.el, this.el),
				document.querySelector('.hs-overlay.opened') ||
					((document.body.style.overflow = ''),
					this.emulateScrollbarSpace &&
						(document.body.style.paddingRight = '')),
				e(this.overlay);
		};
		return new Promise((o) => {
			if (!this.overlay) return !1;
			this.overlay.classList.remove('open', 'opened'),
				this.overlay.removeAttribute('aria-overlay'),
				this.overlay.removeAttribute('tabindex'),
				e ? t(o) : (0, l.yd)(this.animationTarget, () => t(o));
		});
	}
	destroy() {
		this.overlay.classList.remove('open', 'opened', this.hiddenClass),
			this.isLayoutAffect &&
				document.body.classList.remove('hs-overlay-body-open'),
			this.el.removeEventListener('click', this.onElementClickListener),
			this.overlay.removeEventListener('click', this.onOverlayClickListener),
			this.backdrop &&
				this.backdrop.removeEventListener(
					'click',
					this.onBackdropClickListener,
				),
			this.backdrop && (this.backdrop.remove(), (this.backdrop = null)),
			(window.$hsOverlayCollection = window.$hsOverlayCollection.filter(
				({ element: e }) => e.el !== this.el,
			));
	}
	static getInstance(e, t) {
		const o = window.$hsOverlayCollection.find(
			(t) =>
				t.element.el ===
					('string' == typeof e ? document.querySelector(e) : e) ||
				t.element.overlay ===
					('string' == typeof e ? document.querySelector(e) : e),
		);
		return o ? (t ? o : o.element.el) : null;
	}
	static autoInit() {
		window.$hsOverlayCollection ||
			((window.$hsOverlayCollection = []),
			document.addEventListener('keydown', (e) => r.accessibility(e))),
			window.$hsOverlayCollection &&
				(window.$hsOverlayCollection = window.$hsOverlayCollection.filter(
					({ element: e }) => document.contains(e.el),
				)),
			document
				.querySelectorAll('[data-hs-overlay]:not(.--prevent-on-load-init)')
				.forEach((e) => {
					window.$hsOverlayCollection.find((t) => {
						var o;
						return (
							(null === (o = null == t ? void 0 : t.element) || void 0 === o
								? void 0
								: o.el) === e
						);
					}) || new r(e);
				});
	}
	static open(e) {
		const t = window.$hsOverlayCollection.find(
			(t) =>
				t.element.el ===
					('string' == typeof e ? document.querySelector(e) : e) ||
				t.element.overlay ===
					('string' == typeof e ? document.querySelector(e) : e),
		);
		t &&
			t.element.overlay.classList.contains(t.element.hiddenClass) &&
			t.element.open();
	}
	static close(e) {
		const t = window.$hsOverlayCollection.find(
			(t) =>
				t.element.el ===
					('string' == typeof e ? document.querySelector(e) : e) ||
				t.element.overlay ===
					('string' == typeof e ? document.querySelector(e) : e),
		);
		t &&
			!t.element.overlay.classList.contains(t.element.hiddenClass) &&
			t.element.close();
	}
	static setOpened(e, t) {
		document.body.clientWidth >= e
			? (document.body.classList.add('hs-overlay-body-open'),
				t.element.overlay.classList.add('opened'))
			: t.element.close(!0);
	}
	static accessibility(e) {
		var t, o;
		const i = window.$hsOverlayCollection.filter((e) =>
				e.element.overlay.classList.contains('open'),
			),
			s = i[i.length - 1],
			n =
				null ===
					(o =
						null === (t = null == s ? void 0 : s.element) || void 0 === t
							? void 0
							: t.overlay) || void 0 === o
					? void 0
					: o.querySelectorAll(
							'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
						),
			r = [];
		(null == n ? void 0 : n.length) &&
			n.forEach((e) => {
				(0, l.sH)(e) || r.push(e);
			});
		const a = s && !e.metaKey;
		if (a && !s.element.isTabAccessibilityLimited && 'Tab' === e.code)
			return !1;
		a && r.length && 'Tab' === e.code && (e.preventDefault(), this.onTab(s)),
			a && 'Escape' === e.code && (e.preventDefault(), this.onEscape(s));
	}
	static onEscape(e) {
		e && e.element.hasAbilityToCloseOnBackdropClick && e.element.close();
	}
	static onTab(e) {
		const t = e.element.overlay,
			o = Array.from(
				t.querySelectorAll(
					'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
				),
			);
		if (0 === o.length) return !1;
		const i = t.querySelector(':focus');
		if (i) {
			let e = !1;
			for (const t of o) {
				if (e) return void t.focus();
				t === i && (e = !0);
			}
			o[0].focus();
		} else o[0].focus();
	}
	static on(e, t, o) {
		const i = window.$hsOverlayCollection.find(
			(e) =>
				e.element.el ===
					('string' == typeof t ? document.querySelector(t) : t) ||
				e.element.overlay ===
					('string' == typeof t ? document.querySelector(t) : t),
		);
		i && (i.element.events[e] = o);
	}
}
const a = () => {
	if (
		!window.$hsOverlayCollection.length ||
		!window.$hsOverlayCollection.find((e) => e.element.moveOverlayToBody)
	)
		return !1;
	window.$hsOverlayCollection
		.filter((e) => e.element.moveOverlayToBody)
		.forEach((e) => {
			const t = e.element.moveOverlayToBody,
				o = e.element.initContainer,
				i = document.querySelector('body'),
				s = e.element.overlay;
			if (!o && s) return !1;
			document.body.clientWidth <= t && !(0, l.wC)(i, s)
				? i.appendChild(s)
				: document.body.clientWidth > t && !o.contains(s) && o.appendChild(s);
		});
};
window.addEventListener('load', () => {
	r.autoInit(), a();
}),
	window.addEventListener('resize', () => {
		(() => {
			if (
				!window.$hsOverlayCollection.length ||
				!window.$hsOverlayCollection.find((e) => e.element.autoClose)
			)
				return !1;
			window.$hsOverlayCollection
				.filter((e) => e.element.autoClose)
				.forEach((e) => {
					const { autoCloseEqualityType: t, autoClose: o } = e.element;
					('less-than' === t
						? document.body.clientWidth <= o
						: document.body.clientWidth >= o) && e.element.close(!0);
				});
		})(),
			a(),
			(() => {
				if (
					!window.$hsOverlayCollection.length ||
					!window.$hsOverlayCollection.find((e) => e.element.autoClose)
				)
					return !1;
				window.$hsOverlayCollection
					.filter((e) => e.element.autoClose)
					.forEach((e) => {
						const { autoCloseEqualityType: t, autoClose: o } = e.element;
						('less-than' === t
							? document.body.clientWidth <= o
							: document.body.clientWidth >= o) && e.element.close(!0);
					});
			})(),
			(() => {
				if (
					!window.$hsOverlayCollection.length ||
					!window.$hsOverlayCollection.find((e) =>
						e.element.overlay.classList.contains('opened'),
					)
				)
					return !1;
				window.$hsOverlayCollection
					.filter((e) => e.element.overlay.classList.contains('opened'))
					.forEach((e) => {
						const t = parseInt(
								window
									.getComputedStyle(e.element.overlay)
									.getPropertyValue('z-index'),
							),
							o = document.querySelector(`#${e.element.overlay.id}-backdrop`);
						if (
							t ===
							parseInt(window.getComputedStyle(o).getPropertyValue('z-index')) +
								1
						)
							return !1;
						'style' in o && (o.style.zIndex = '' + (t - 1)),
							document.body.classList.add('hs-overlay-body-open');
					});
			})();
	}),
	'undefined' != typeof window && (window.HSOverlay = r);
const d = r;
var c = i.A;
export { c as default };
