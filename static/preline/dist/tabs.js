!(function (t, e) {
	if ('object' == typeof exports && 'object' == typeof module)
		module.exports = e();
	else if ('function' == typeof define && define.amd) define([], e);
	else {
		var n = e();
		for (var o in n) ('object' == typeof exports ? exports : t)[o] = n[o];
	}
})(self, () =>
	(() => {
		'use strict';
		var t = {
				223: (t, e) => {
					Object.defineProperty(e, '__esModule', { value: !0 }),
						(e.BREAKPOINTS =
							e.COMBO_BOX_ACCESSIBILITY_KEY_SET =
							e.SELECT_ACCESSIBILITY_KEY_SET =
							e.TABS_ACCESSIBILITY_KEY_SET =
							e.OVERLAY_ACCESSIBILITY_KEY_SET =
							e.DROPDOWN_ACCESSIBILITY_KEY_SET =
							e.POSITIONS =
								void 0),
						(e.POSITIONS = {
							auto: 'auto',
							'auto-start': 'auto-start',
							'auto-end': 'auto-end',
							top: 'top',
							'top-left': 'top-start',
							'top-right': 'top-end',
							bottom: 'bottom',
							'bottom-left': 'bottom-start',
							'bottom-right': 'bottom-end',
							right: 'right',
							'right-start': 'right-start',
							'right-end': 'right-end',
							left: 'left',
							'left-start': 'left-start',
							'left-end': 'left-end',
						}),
						(e.DROPDOWN_ACCESSIBILITY_KEY_SET = [
							'Escape',
							'ArrowUp',
							'ArrowDown',
							'ArrowRight',
							'ArrowLeft',
							'Home',
							'End',
							'Enter',
						]),
						(e.OVERLAY_ACCESSIBILITY_KEY_SET = ['Escape', 'Tab']),
						(e.TABS_ACCESSIBILITY_KEY_SET = [
							'ArrowUp',
							'ArrowLeft',
							'ArrowDown',
							'ArrowRight',
							'Home',
							'End',
						]),
						(e.SELECT_ACCESSIBILITY_KEY_SET = [
							'ArrowUp',
							'ArrowLeft',
							'ArrowDown',
							'ArrowRight',
							'Home',
							'End',
							'Escape',
							'Enter',
							'Space',
							'Tab',
						]),
						(e.COMBO_BOX_ACCESSIBILITY_KEY_SET = [
							'ArrowUp',
							'ArrowLeft',
							'ArrowDown',
							'ArrowRight',
							'Home',
							'End',
							'Escape',
							'Enter',
						]),
						(e.BREAKPOINTS = {
							xs: 0,
							sm: 640,
							md: 768,
							lg: 1024,
							xl: 1280,
							'2xl': 1536,
						});
				},
				961: (t, e) => {
					Object.defineProperty(e, '__esModule', { value: !0 });
					var n = (function () {
						function t(t, e, n) {
							(this.el = t),
								(this.options = e),
								(this.events = n),
								(this.el = t),
								(this.options = e),
								(this.events = {});
						}
						return (
							(t.prototype.createCollection = function (t, e) {
								var n;
								t.push({
									id:
										(null === (n = null == e ? void 0 : e.el) || void 0 === n
											? void 0
											: n.id) || t.length + 1,
									element: e,
								});
							}),
							(t.prototype.fireEvent = function (t, e) {
								if ((void 0 === e && (e = null), this.events.hasOwnProperty(t)))
									return this.events[t](e);
							}),
							(t.prototype.on = function (t, e) {
								this.events[t] = e;
							}),
							t
						);
					})();
					e.default = n;
				},
				166: function (t, e, n) {
					/*
					 * HSTabs
					 * @version: 2.7.0
					 * @author: Preline Labs Ltd.
					 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
					 * Copyright 2024 Preline Labs Ltd.
					 */
					var o,
						r =
							(this && this.__extends) ||
							((o = function (t, e) {
								return (
									(o =
										Object.setPrototypeOf ||
										({ __proto__: [] } instanceof Array &&
											function (t, e) {
												t.__proto__ = e;
											}) ||
										function (t, e) {
											for (var n in e)
												Object.prototype.hasOwnProperty.call(e, n) &&
													(t[n] = e[n]);
										}),
									o(t, e)
								);
							}),
							function (t, e) {
								if ('function' != typeof e && null !== e)
									throw new TypeError(
										'Class extends value ' +
											String(e) +
											' is not a constructor or null',
									);
								function n() {
									this.constructor = t;
								}
								o(t, e),
									(t.prototype =
										null === e
											? Object.create(e)
											: ((n.prototype = e.prototype), new n()));
							}),
						i =
							(this && this.__importDefault) ||
							function (t) {
								return t && t.__esModule ? t : { default: t };
							};
					Object.defineProperty(e, '__esModule', { value: !0 });
					var s = n(292),
						a = i(n(961)),
						l = n(223),
						c = (function (t) {
							function e(e, n, o) {
								var r = t.call(this, e, n, o) || this;
								return (
									(r.toggles = r.el.querySelectorAll('[data-hs-tab]')),
									(r.extraToggleId = r.el.getAttribute('data-hs-tab-select')),
									(r.extraToggle = document.querySelector(r.extraToggleId)),
									(r.current = Array.from(r.toggles).find(function (t) {
										return t.classList.contains('active');
									})),
									(r.currentContentId = r.current.getAttribute('data-hs-tab')),
									(r.currentContent = document.querySelector(
										r.currentContentId,
									)),
									(r.prev = null),
									(r.prevContentId = null),
									(r.prevContent = null),
									(r.eventType = 'click'),
									(r.onToggleClickListener = []),
									r.init(),
									r
								);
							}
							return (
								r(e, t),
								(e.prototype.toggleClick = function (t) {
									this.open(t);
								}),
								(e.prototype.extraToggleChange = function (t) {
									this.change(t);
								}),
								(e.prototype.init = function () {
									var t = this;
									this.createCollection(window.$hsTabsCollection, this),
										this.toggles.forEach(function (e) {
											t.onToggleClickListener.push({
												el: e,
												fn: function () {
													return t.toggleClick(e);
												},
											}),
												e.addEventListener(
													t.eventType,
													t.onToggleClickListener.find(function (t) {
														return t.el === e;
													}).fn,
												);
										}),
										this.extraToggle &&
											((this.onExtraToggleChangeListener = function (e) {
												return t.extraToggleChange(e);
											}),
											this.extraToggle.addEventListener(
												'change',
												this.onExtraToggleChangeListener,
											));
								}),
								(e.prototype.open = function (t) {
									var e, n;
									(this.prev = this.current),
										(this.prevContentId = this.currentContentId),
										(this.prevContent = this.currentContent),
										(this.current = t),
										(this.currentContentId =
											this.current.getAttribute('data-hs-tab')),
										(this.currentContent = document.querySelector(
											this.currentContentId,
										)),
										(null === (e = null == this ? void 0 : this.prev) ||
										void 0 === e
											? void 0
											: e.ariaSelected) && (this.prev.ariaSelected = 'false'),
										this.prev.classList.remove('active'),
										this.prevContent.classList.add('hidden'),
										(null === (n = null == this ? void 0 : this.current) ||
										void 0 === n
											? void 0
											: n.ariaSelected) && (this.current.ariaSelected = 'true'),
										this.current.classList.add('active'),
										this.currentContent.classList.remove('hidden'),
										this.fireEvent('change', {
											el: t,
											prev: this.prevContentId,
											current: this.currentContentId,
										}),
										(0, s.dispatch)('change.hs.tab', t, {
											el: t,
											prev: this.prevContentId,
											current: this.currentContentId,
										});
								}),
								(e.prototype.change = function (t) {
									var e = document.querySelector(
										'[data-hs-tab="'.concat(t.target.value, '"]'),
									);
									e && e.click();
								}),
								(e.prototype.destroy = function () {
									var t = this;
									this.toggles.forEach(function (e) {
										e.removeEventListener(
											t.eventType,
											t.onToggleClickListener.find(function (t) {
												return t.el === e;
											}).fn,
										);
									}),
										(this.onToggleClickListener = []),
										this.extraToggle &&
											this.extraToggle.removeEventListener(
												'change',
												this.onExtraToggleChangeListener,
											),
										(window.$hsTabsCollection = window.$hsTabsCollection.filter(
											function (e) {
												return e.element.el !== t.el;
											},
										));
								}),
								(e.getInstance = function (t, e) {
									var n = window.$hsTabsCollection.find(function (e) {
										return (
											e.element.el ===
											('string' == typeof t ? document.querySelector(t) : t)
										);
									});
									return n ? (e ? n : n.element) : null;
								}),
								(e.autoInit = function () {
									window.$hsTabsCollection ||
										((window.$hsTabsCollection = []),
										document.addEventListener('keydown', function (t) {
											return e.accessibility(t);
										})),
										window.$hsTabsCollection &&
											(window.$hsTabsCollection =
												window.$hsTabsCollection.filter(function (t) {
													var e = t.element;
													return document.contains(e.el);
												})),
										document
											.querySelectorAll(
												'[role="tablist"]:not(select):not(.--prevent-on-load-init)',
											)
											.forEach(function (t) {
												window.$hsTabsCollection.find(function (e) {
													var n;
													return (
														(null === (n = null == e ? void 0 : e.element) ||
														void 0 === n
															? void 0
															: n.el) === t
													);
												}) || new e(t);
											});
								}),
								(e.open = function (t) {
									var e = window.$hsTabsCollection.find(function (e) {
											return Array.from(e.element.toggles).includes(
												'string' == typeof t ? document.querySelector(t) : t,
											);
										}),
										n = Array.from(e.element.toggles).find(function (e) {
											return (
												e ===
												('string' == typeof t ? document.querySelector(t) : t)
											);
										});
									n && !n.classList.contains('active') && e.element.open(n);
								}),
								(e.accessibility = function (t) {
									var e = document.querySelector('[data-hs-tab]:focus');
									if (
										e &&
										l.TABS_ACCESSIBILITY_KEY_SET.includes(t.code) &&
										!t.metaKey
									) {
										var n = e
											.closest('[role="tablist"]')
											.getAttribute('data-hs-tabs-vertical');
										switch ((t.preventDefault(), t.code)) {
											case 'true' === n ? 'ArrowUp' : 'ArrowLeft':
												this.onArrow();
												break;
											case 'true' === n ? 'ArrowDown' : 'ArrowRight':
												this.onArrow(!1);
												break;
											case 'Home':
												this.onStartEnd();
												break;
											case 'End':
												this.onStartEnd(!1);
										}
									}
								}),
								(e.onArrow = function (t) {
									void 0 === t && (t = !0);
									var e = document
											.querySelector('[data-hs-tab]:focus')
											.closest('[role="tablist"]'),
										n = window.$hsTabsCollection.find(function (t) {
											return t.element.el === e;
										});
									if (n) {
										var o = t
												? Array.from(n.element.toggles).reverse()
												: Array.from(n.element.toggles),
											r = o.find(function (t) {
												return document.activeElement === t;
											}),
											i = o.findIndex(function (t) {
												return t === r;
											});
										o[(i = i + 1 < o.length ? i + 1 : 0)].focus(), o[i].click();
									}
								}),
								(e.onStartEnd = function (t) {
									void 0 === t && (t = !0);
									var e = document
											.querySelector('[data-hs-tab]:focus')
											.closest('[role="tablist"]'),
										n = window.$hsTabsCollection.find(function (t) {
											return t.element.el === e;
										});
									if (n) {
										var o = t
											? Array.from(n.element.toggles)
											: Array.from(n.element.toggles).reverse();
										o.length && (o[0].focus(), o[0].click());
									}
								}),
								(e.on = function (t, e, n) {
									var o = window.$hsTabsCollection.find(function (t) {
										return Array.from(t.element.toggles).includes(
											'string' == typeof e ? document.querySelector(e) : e,
										);
									});
									o && (o.element.events[t] = n);
								}),
								e
							);
						})(a.default);
					window.addEventListener('load', function () {
						c.autoInit();
					}),
						'undefined' != typeof window && (window.HSTabs = c),
						(e.default = c);
				},
				292: function (t, e) {
					/*
					 * @version: 2.7.0
					 * @author: Preline Labs Ltd.
					 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
					 * Copyright 2024 Preline Labs Ltd.
					 */
					var n = this;
					Object.defineProperty(e, '__esModule', { value: !0 }),
						(e.menuSearchHistory =
							e.classToClassList =
							e.htmlToElement =
							e.afterTransition =
							e.dispatch =
							e.debounce =
							e.isJson =
							e.isDirectChild =
							e.isFormElement =
							e.isParentOrElementHidden =
							e.isEnoughSpace =
							e.isIpadOS =
							e.isIOS =
							e.getZIndex =
							e.getClassPropertyAlt =
							e.getClassProperty =
							e.stringToBoolean =
								void 0),
						(e.getHighestZIndex = function (t) {
							var e = Number.NEGATIVE_INFINITY;
							return (
								t.forEach(function (t) {
									var n = o(t);
									'auto' !== n && (n = parseInt(n, 10)) > e && (e = n);
								}),
								e
							);
						});
					e.stringToBoolean = function (t) {
						return 'true' === t;
					};
					e.getClassProperty = function (t, e, n) {
						return (
							void 0 === n && (n = ''),
							(window.getComputedStyle(t).getPropertyValue(e) || n).replace(
								' ',
								'',
							)
						);
					};
					e.getClassPropertyAlt = function (t, e, n) {
						void 0 === n && (n = '');
						var o = '';
						return (
							t.classList.forEach(function (t) {
								t.includes(e) && (o = t);
							}),
							o.match(/:(.*)]/) ? o.match(/:(.*)]/)[1] : n
						);
					};
					var o = function (t) {
						return window.getComputedStyle(t).getPropertyValue('z-index');
					};
					e.getZIndex = o;
					e.isIOS = function () {
						return (
							!!/iPad|iPhone|iPod/.test(navigator.platform) ||
							(navigator.maxTouchPoints &&
								navigator.maxTouchPoints > 2 &&
								/MacIntel/.test(navigator.platform))
						);
					};
					e.isIpadOS = function () {
						return (
							navigator.maxTouchPoints &&
							navigator.maxTouchPoints > 2 &&
							/MacIntel/.test(navigator.platform)
						);
					};
					e.isDirectChild = function (t, e) {
						for (var n = t.children, o = 0; o < n.length; o++)
							if (n[o] === e) return !0;
						return !1;
					};
					e.isEnoughSpace = function (t, e, n, o, r) {
						void 0 === n && (n = 'auto'),
							void 0 === o && (o = 10),
							void 0 === r && (r = null);
						var i = e.getBoundingClientRect(),
							s = r ? r.getBoundingClientRect() : null,
							a = window.innerHeight,
							l = s ? i.top - s.top : i.top,
							c = (r ? s.bottom : a) - i.bottom,
							u = t.clientHeight + o;
						return 'bottom' === n
							? c >= u
							: 'top' === n
								? l >= u
								: l >= u || c >= u;
					};
					e.isFormElement = function (t) {
						return (
							t instanceof HTMLInputElement ||
							t instanceof HTMLTextAreaElement ||
							t instanceof HTMLSelectElement
						);
					};
					var r = function (t) {
						return (
							!!t &&
							('none' === window.getComputedStyle(t).display ||
								r(t.parentElement))
						);
					};
					e.isParentOrElementHidden = r;
					e.isJson = function (t) {
						if ('string' != typeof t) return !1;
						var e = t.trim()[0],
							n = t.trim().slice(-1);
						if (('{' === e && '}' === n) || ('[' === e && ']' === n))
							try {
								return JSON.parse(t), !0;
							} catch (t) {
								return !1;
							}
						return !1;
					};
					e.debounce = function (t, e) {
						var o;
						return (
							void 0 === e && (e = 200),
							function () {
								for (var r = [], i = 0; i < arguments.length; i++)
									r[i] = arguments[i];
								clearTimeout(o),
									(o = setTimeout(function () {
										t.apply(n, r);
									}, e));
							}
						);
					};
					e.dispatch = function (t, e, n) {
						void 0 === n && (n = null);
						var o = new CustomEvent(t, {
							detail: { payload: n },
							bubbles: !0,
							cancelable: !0,
							composed: !1,
						});
						e.dispatchEvent(o);
					};
					e.afterTransition = function (t, e) {
						var n = function () {
								e(), t.removeEventListener('transitionend', n, !0);
							},
							o = window.getComputedStyle(t),
							r = o.getPropertyValue('transition-duration');
						'none' !== o.getPropertyValue('transition-property') &&
						parseFloat(r) > 0
							? t.addEventListener('transitionend', n, !0)
							: e();
					};
					e.htmlToElement = function (t) {
						var e = document.createElement('template');
						return (t = t.trim()), (e.innerHTML = t), e.content.firstChild;
					};
					e.classToClassList = function (t, e, n, o) {
						void 0 === n && (n = ' '),
							void 0 === o && (o = 'add'),
							t.split(n).forEach(function (t) {
								return 'add' === o ? e.classList.add(t) : e.classList.remove(t);
							});
					};
					e.menuSearchHistory = {
						historyIndex: -1,
						addHistory: function (t) {
							this.historyIndex = t;
						},
						existsInHistory: function (t) {
							return t > this.historyIndex;
						},
						clearHistory: function () {
							this.historyIndex = -1;
						},
					};
				},
			},
			e = {};
		var n = (function n(o) {
			var r = e[o];
			if (void 0 !== r) return r.exports;
			var i = (e[o] = { exports: {} });
			return t[o].call(i.exports, i, i.exports, n), i.exports;
		})(166);
		return n;
	})(),
);
