(() => {
	var e = {
			666: (e, t) => {
				"use strict";
				t.__esModule = !0, t.stylesheet = t.css = void 0;
				t.stylesheet = () => {
					throw new Error("stylesheet template literal evaluated at runtime. Make sure astroturf is properly configured to compile this file")
				};
				t.css = () => {
					throw new Error("css template literal evaluated at runtime. Make sure astroturf is properly configured to compile this file")
				}
			},
			112: (e, t, n) => {
				"use strict";
				t.__esModule = !0, t.default = void 0, t.jsx = l, t.jsx2 = s, t.resolveVariants = void 0, t.varsToStyles = i;
				var a = n(294);
				t.F = a.Fragment;
				const r = ["css", "className"];
				const o = e => e ? e.filter(Boolean).join(" ") : "";

				function i(e, t) {
					if (!t || !t.length) return e.style;
					const n = Object.assign({}, e.style);
					return t.forEach((([t, a, r = ""]) => {
						const o = "function" == typeof a ? a(e) : a;
						n[`--${t}`] = `${o}${r}`
					})), n
				}

				function s(e, t, n, ...a) {
					if (n && n.css) {
						const {
							css: e,
							className: t
						} = n, a = function(e, t) {
							if (null == e) return {};
							var n, a, r = {},
								o = Object.keys(e);
							for (a = 0; a < o.length; a++) n = o[a], t.indexOf(n) >= 0 || (r[n] = e[n]);
							return r
						}(n, r), s = e[0].cls2 || e[0].cls1;
						a.style = i(a, e[1]), a.className = `${t?`${t} ${s}`:s} ${o(e[2])}`, n = a
					}
					return e(t, n, ...a)
				}

				function l(e, t, ...n) {
					return s(a.createElement, e, t, ...n)
				}
				t.resolveVariants = o, l.F = a.Fragment, l.jsx2 = s;
				var c = l;
				t.default = c
			},
			343: (e, t, n) => {
				"use strict";
				t.ZP = void 0;
				var a = n(294),
					r = n(666);
				r.css, r.stylesheet;
				var o = n(112);
				const i = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,
					s = e => (e.match(i) || []).reduce(((e, t) => e + (e ? t[0].toUpperCase() + t.slice(1) : t)), "");
				var l = function e(t, n, r) {
					const {
						displayName: i,
						attrs: l,
						vars: c,
						variants: u,
						styles: d
					} = r;
					n = n || {
						allowAs: "string" == typeof t
					};
					const h = !t.isAstroturf && n.allowAs,
						f = Object.keys(d).some((e => e !== (d.cls2 || d.cls1))),
						p = (0, a.forwardRef)(((e, n) => {
							const r = l ? l(e) : e,
								i = Object.assign({}, r, {
									ref: n
								});
							return h && delete i.as, i.style = (0, o.varsToStyles)(i, c), i.className = function(e, t, n) {
								const a = t.cls2 || t.cls1;
								let r = e.className ? `${e.className} ${a}` : a;
								return n && Object.keys(e).forEach((n => {
									const a = e[n],
										o = typeof a;
									if ("boolean" === o || null == a)
										if (t[n]) a && (r += ` ${t[n]}`), delete e[n];
										else {
											const o = s(n);
											t[o] && (a && (r += ` ${t[o]}`), delete e[n])
										}
									else if ("string" === o || "number" === o) {
										const o = `${n}-${a}`;
										if (t[o]) r += ` ${t[o]}`, delete e[n];
										else {
											const a = s(o);
											t[a] && (r += ` ${t[a]}`, delete e[n])
										}
									}
								})), r
							}(i, d, f), u && (i.className += ` ${(0,o.resolveVariants)(u)}`), (0, a.createElement)(h && r.as ? r.as : t, i)
						}));
					return p.displayName = i, p.withComponent = t => e(t, n, r), p.isAstroturf = !0, p
				};
				t.ZP = l
			},
			591: (e, t, n) => {
				"use strict";

				function a(e) {
					var t = 4553500,
						n = 9706900,
						a = 15047300,
						r = 21436800,
						o = 0;
					e < t ? o += .15 * e : o += 683025;
					e >= t && (o += e < n ? .205 * (e - t) : 1056447);
					e >= n && (o += e < a ? .26 * (e - n) : 1388504);
					e >= a && (o += e < r ? .29 * (e - a) : 6389500 * .29);
					e >= r && (o += .33 * (e - r));
					return o
				}

				function r(e) {
					return a(e) + function(e) {
						var t = 13122e3,
							n = 15746400,
							a = 20995200,
							r = 31492800,
							o = 0;
						return o += e < t ? .1 * e : 1312200, e >= t && (o += e < n ? .12 * (e - t) : 314928), e >= n && (o += e < a ? .13 * (e - n) : 682344), e >= a && (o += e < r ? .14 * (e - a) : 10497600 * .14), e >= r && (o += .15 * (e - r)), o
					}(e)
				}
				n.d(t, {
					Z: () => o
				});
				const o = {
					calculateIncomeTax: (e, t) => {
						switch (e) {
							case "AB":
							default:
								return r(t);
							case "BC":
								return a(n = t) + function(e) {
									var t = 4172500,
										n = 8345100,
										a = 9581200,
										r = 11634400,
										o = 15774800,
										i = 0;
									return i += e < t ? .0506 * e : 211128.5, e >= t && (i += e < n ? .077 * (e - t) : 321290.2), e >= n && (i += e < a ? .105 * (e - n) : 129790.5), e >= a && (i += e < r ? .1229 * (e - a) : 252338.28), e >= r && (i += e < o ? .147 * (e - r) : 4140400 * .147), e >= o && (i += .168 * (e - o)), i
								}(n);
							case "MB":
								return function(e) {
									return a(e) + function(e) {
										var t = 3338900,
											n = 7216400,
											a = 0;
										return a += e < t ? .108 * e : 360601.2, e >= t && (a += e < n ? (e - t) * .1275 : 494381.25), e >= n && (a += .174 * (e - n)), a
									}(e)
								}(t);
							case "NB":
								return function(e) {
									return a(e) + function(e) {
										var t = 4340100,
											n = 8680300,
											a = 14112200,
											r = 16077600,
											o = 0;
										return o += e < t ? e * .0968 : 420121.68, e >= t && (o += e < n ? (e - t) * .1482 : 643217.64), e >= n && (o += e < a ? (e - n) * .1652 : 897349.8800000001), e >= a && (o += e < r ? (e - a) * .1784 : 350627.36), e >= r && (o += .203 * (e - r)), o
									}(e)
								}(t);
							case "NL":
								return function(e) {
									return a(e) + function(e) {
										var t = 3792900,
											n = 7585800,
											a = 13543200,
											r = 18960400,
											o = 0;
										return o += e < t ? .087 * e : 329982.3, e >= t && (o += e < n ? .145 * (e - t) : 549970.5), e >= n && (o += e < a ? .158 * (e - n) : 941269.2), e >= a && (o += e < r ? .173 * (e - a) : 937175.6), e >= r && (o += .183 * (e - r)), o
									}(e)
								}(t);
							case "NS":
								return function(e) {
									return a(e) + function(e) {
										var t = 2959e3,
											n = 5918e3,
											a = 93e5,
											r = 15e6,
											o = 0;
										return o += e < t ? e * .0879 : 260096.1, e >= t && (o += e < n ? (e - t) * .1495 : 442370.5), e >= n && (o += e < a ? (e - n) * .1667 : 563779.3999999999), e >= a && (o += e < r ? .175 * (e - a) : 57e5 * .175), e >= r && (o += .21 * (e - r)), o
									}(e)
								}(t);
							case "NT":
								return function(e) {
									return a(e) + function(e) {
										var t = 4395700,
											n = 8791600,
											a = 14293200,
											r = 0;
										return r += e < t ? .059 * e : 259346.3, e >= t && (r += e < n ? .086 * (e - t) : 4395900 * .086), e >= n && (r += e < a ? .122 * (e - n) : 671195.2), e >= a && (r += .1405 * (e - a)), r
									}(e)
								}(t);
							case "NU":
								return function(e) {
									return a(e) + function(e) {
										var t = 4627700,
											n = 9255500,
											a = 15047300,
											r = 0;
										return r += e < t ? .04 * e : 185108, e >= t && (r += e < n ? .07 * (e - t) : 4627800 * .07), e >= n && (r += e < a ? .09 * (e - n) : 521262), e >= a && (r += .115 * (e - a)), r
									}(e)
								}(t);
							case "ON":
								return function(e) {
									return a(e) + function(e) {
										var t = 4474e3,
											n = 8948200,
											a = 15e6,
											r = 22e6,
											o = 0;
										return o += e < t ? e * .0505 : 225937, e >= t && (o += e < n ? (e - t) * .0915 : 409389.3), e >= n && (o += e < a ? (e - n) * .1116 : 675380.88), e >= a && (o += e < r ? (e - a) * .1216 : 851200), e >= r && (o += .1316 * (e - r)), o
									}(e)
								}(t);
							case "PE":
								return function(e) {
									return a(e) + function(e) {
										var t = 3198400,
											n = 6396900,
											a = 0;
										return a += e < t ? .098 * e : 313443.2, e >= t && (a += e < n ? .138 * (e - t) : 3198500 * .138), e >= n && (a += .167 * (e - n)), a
									}(e)
								}(t);
							case "QC":
								return function(e) {
									return a(e) + function(e) {
										var t = 4454500,
											n = 8908e3,
											a = 10839e3,
											r = 0;
										return r += e < t ? .15 * e : 668175, e >= t && (r += e < n ? .2 * (e - t) : 890700), e >= n && (r += e < a ? .24 * (e - n) : 463440), e >= a && (r += .2575 * (e - a)), r
									}(e)
								}(t);
							case "SK":
								return function(e) {
									return a(e) + function(e) {
										var t = 4522500,
											n = 12921400,
											a = 0;
										return a += e < t ? .105 * e : 474862.5, e >= t && (a += e < n ? .125 * (e - t) : 1049862.5), e >= n && (a += .145 * (e - n)), a
									}(e)
								}(t);
							case "YT":
								return function(e) {
									return a(e) + function(e) {
										var t = 4853500,
											n = 9706900,
											a = 15047300,
											r = 5e7,
											o = 0;
										return o += e < t ? e * .0604 : 293151.4, e >= t && (o += e < n ? .09 * (e - t) : 436806), e >= n && (o += e < a ? .109 * (e - n) : 582103.6), e >= a && (o += e < r ? .128 * (e - a) : 34952700 * .128), e >= r && (o += .15 * (e - r)), o
									}(e)
								}(t)
						}
						var n
					}
				}
			},
			273: (e, t, n) => {
				"use strict";
				n.r(t), n.d(t, {
					CountUp: () => r
				});
				var a = function() {
						return a = Object.assign || function(e) {
							for (var t, n = 1, a = arguments.length; n < a; n++)
								for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
							return e
						}, a.apply(this, arguments)
					},
					r = function() {
						function e(e, t, n) {
							var r = this;
							this.endVal = t, this.options = n, this.version = "2.8.0", this.defaults = {
								startVal: 0,
								decimalPlaces: 0,
								duration: 2,
								useEasing: !0,
								useGrouping: !0,
								useIndianSeparators: !1,
								smartEasingThreshold: 999,
								smartEasingAmount: 333,
								separator: ",",
								decimal: ".",
								prefix: "",
								suffix: "",
								enableScrollSpy: !1,
								scrollSpyDelay: 200,
								scrollSpyOnce: !1
							}, this.finalEndVal = null, this.useEasing = !0, this.countDown = !1, this.error = "", this.startVal = 0, this.paused = !0, this.once = !1, this.count = function(e) {
								r.startTime || (r.startTime = e);
								var t = e - r.startTime;
								r.remaining = r.duration - t, r.useEasing ? r.countDown ? r.frameVal = r.startVal - r.easingFn(t, 0, r.startVal - r.endVal, r.duration) : r.frameVal = r.easingFn(t, r.startVal, r.endVal - r.startVal, r.duration) : r.frameVal = r.startVal + (r.endVal - r.startVal) * (t / r.duration);
								var n = r.countDown ? r.frameVal < r.endVal : r.frameVal > r.endVal;
								r.frameVal = n ? r.endVal : r.frameVal, r.frameVal = Number(r.frameVal.toFixed(r.options.decimalPlaces)), r.printValue(r.frameVal), t < r.duration ? r.rAF = requestAnimationFrame(r.count) : null !== r.finalEndVal ? r.update(r.finalEndVal) : r.options.onCompleteCallback && r.options.onCompleteCallback()
							}, this.formatNumber = function(e) {
								var t, n, a, o, i = e < 0 ? "-" : "";
								t = Math.abs(e).toFixed(r.options.decimalPlaces);
								var s = (t += "").split(".");
								if (n = s[0], a = s.length > 1 ? r.options.decimal + s[1] : "", r.options.useGrouping) {
									o = "";
									for (var l = 3, c = 0, u = 0, d = n.length; u < d; ++u) r.options.useIndianSeparators && 4 === u && (l = 2, c = 1), 0 !== u && c % l == 0 && (o = r.options.separator + o), c++, o = n[d - u - 1] + o;
									n = o
								}
								return r.options.numerals && r.options.numerals.length && (n = n.replace(/[0-9]/g, (function(e) {
									return r.options.numerals[+e]
								})), a = a.replace(/[0-9]/g, (function(e) {
									return r.options.numerals[+e]
								}))), i + r.options.prefix + n + a + r.options.suffix
							}, this.easeOutExpo = function(e, t, n, a) {
								return n * (1 - Math.pow(2, -10 * e / a)) * 1024 / 1023 + t
							}, this.options = a(a({}, this.defaults), n), this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber, this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo, this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.endVal = this.validateValue(t), this.options.decimalPlaces = Math.max(this.options.decimalPlaces), this.resetDuration(), this.options.separator = String(this.options.separator), this.useEasing = this.options.useEasing, "" === this.options.separator && (this.options.useGrouping = !1), this.el = "string" == typeof e ? document.getElementById(e) : e, this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined", "undefined" != typeof window && this.options.enableScrollSpy && (this.error ? console.error(this.error, e) : (window.onScrollFns = window.onScrollFns || [], window.onScrollFns.push((function() {
								return r.handleScroll(r)
							})), window.onscroll = function() {
								window.onScrollFns.forEach((function(e) {
									return e()
								}))
							}, this.handleScroll(this)))
						}
						return e.prototype.handleScroll = function(e) {
							if (e && window && !e.once) {
								var t = window.innerHeight + window.scrollY,
									n = e.el.getBoundingClientRect(),
									a = n.top + window.pageYOffset,
									r = n.top + n.height + window.pageYOffset;
								r < t && r > window.scrollY && e.paused ? (e.paused = !1, setTimeout((function() {
									return e.start()
								}), e.options.scrollSpyDelay), e.options.scrollSpyOnce && (e.once = !0)) : (window.scrollY > r || a > t) && !e.paused && e.reset()
							}
						}, e.prototype.determineDirectionAndSmartEasing = function() {
							var e = this.finalEndVal ? this.finalEndVal : this.endVal;
							this.countDown = this.startVal > e;
							var t = e - this.startVal;
							if (Math.abs(t) > this.options.smartEasingThreshold && this.options.useEasing) {
								this.finalEndVal = e;
								var n = this.countDown ? 1 : -1;
								this.endVal = e + n * this.options.smartEasingAmount, this.duration = this.duration / 2
							} else this.endVal = e, this.finalEndVal = null;
							null !== this.finalEndVal ? this.useEasing = !1 : this.useEasing = this.options.useEasing
						}, e.prototype.start = function(e) {
							this.error || (this.options.onStartCallback && this.options.onStartCallback(), e && (this.options.onCompleteCallback = e), this.duration > 0 ? (this.determineDirectionAndSmartEasing(), this.paused = !1, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal))
						}, e.prototype.pauseResume = function() {
							this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused
						}, e.prototype.reset = function() {
							cancelAnimationFrame(this.rAF), this.paused = !0, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal)
						}, e.prototype.update = function(e) {
							cancelAnimationFrame(this.rAF), this.startTime = null, this.endVal = this.validateValue(e), this.endVal !== this.frameVal && (this.startVal = this.frameVal, null == this.finalEndVal && this.resetDuration(), this.finalEndVal = null, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count))
						}, e.prototype.printValue = function(e) {
							var t;
							if (this.el) {
								var n = this.formattingFn(e);
								(null === (t = this.options.plugin) || void 0 === t ? void 0 : t.render) ? this.options.plugin.render(this.el, n): "INPUT" === this.el.tagName ? this.el.value = n : "text" === this.el.tagName || "tspan" === this.el.tagName ? this.el.textContent = n : this.el.innerHTML = n
							}
						}, e.prototype.ensureNumber = function(e) {
							return "number" == typeof e && !isNaN(e)
						}, e.prototype.validateValue = function(e) {
							var t = Number(e);
							return this.ensureNumber(t) ? t : (this.error = "[CountUp] invalid start or end value: ".concat(e), null)
						}, e.prototype.resetDuration = function() {
							this.startTime = null, this.duration = 1e3 * Number(this.options.duration), this.remaining = this.duration
						}, e
					}()
			},
			703: (e, t, n) => {
				"use strict";
				var a = n(414);

				function r() {}

				function o() {}
				o.resetWarningCache = r, e.exports = function() {
					function e(e, t, n, r, o, i) {
						if (i !== a) {
							var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
							throw s.name = "Invariant Violation", s
						}
					}

					function t() {
						return e
					}
					e.isRequired = e;
					var n = {
						array: e,
						bigint: e,
						bool: e,
						func: e,
						number: e,
						object: e,
						string: e,
						symbol: e,
						any: e,
						arrayOf: t,
						element: e,
						elementType: e,
						instanceOf: t,
						node: e,
						objectOf: t,
						oneOf: t,
						oneOfType: t,
						shape: t,
						exact: t,
						checkPropTypes: o,
						resetWarningCache: r
					};
					return n.PropTypes = n, n
				}
			},
			697: (e, t, n) => {
				e.exports = n(703)()
			},
			414: e => {
				"use strict";
				e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
			},
			857: (e, t, n) => {
				"use strict";
				var a = n(294),
					r = n(273);

				function o(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var a = Object.getOwnPropertySymbols(e);
						t && (a = a.filter((function(t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable
						}))), n.push.apply(n, a)
					}
					return n
				}

				function i(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {};
						t % 2 ? o(Object(n), !0).forEach((function(t) {
							s(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
					}
					return e
				}

				function s(e, t, n) {
					return (t = function(e) {
						var t = function(e, t) {
							if ("object" != typeof e || null === e) return e;
							var n = e[Symbol.toPrimitive];
							if (void 0 !== n) {
								var a = n.call(e, t || "default");
								if ("object" != typeof a) return a;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return ("string" === t ? String : Number)(e)
						}(e, "string");
						return "symbol" == typeof t ? t : String(t)
					}(t)) in e ? Object.defineProperty(e, t, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : e[t] = n, e
				}

				function l() {
					return l = Object.assign ? Object.assign.bind() : function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
						}
						return e
					}, l.apply(this, arguments)
				}

				function c(e, t) {
					if (null == e) return {};
					var n, a, r = function(e, t) {
						if (null == e) return {};
						var n, a, r = {},
							o = Object.keys(e);
						for (a = 0; a < o.length; a++) n = o[a], t.indexOf(n) >= 0 || (r[n] = e[n]);
						return r
					}(e, t);
					if (Object.getOwnPropertySymbols) {
						var o = Object.getOwnPropertySymbols(e);
						for (a = 0; a < o.length; a++) n = o[a], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
					}
					return r
				}

				function u(e, t) {
					return function(e) {
						if (Array.isArray(e)) return e
					}(e) || function(e, t) {
						var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
						if (null != n) {
							var a, r, o, i, s = [],
								l = !0,
								c = !1;
							try {
								if (o = (n = n.call(e)).next, 0 === t) {
									if (Object(n) !== n) return;
									l = !1
								} else
									for (; !(l = (a = o.call(n)).done) && (s.push(a.value), s.length !== t); l = !0);
							} catch (e) {
								c = !0, r = e
							} finally {
								try {
									if (!l && null != n.return && (i = n.return(), Object(i) !== i)) return
								} finally {
									if (c) throw r
								}
							}
							return s
						}
					}(e, t) || function(e, t) {
						if (!e) return;
						if ("string" == typeof e) return d(e, t);
						var n = Object.prototype.toString.call(e).slice(8, -1);
						"Object" === n && e.constructor && (n = e.constructor.name);
						if ("Map" === n || "Set" === n) return Array.from(e);
						if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
					}(e, t) || function() {
						throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}

				function d(e, t) {
					(null == t || t > e.length) && (t = e.length);
					for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
					return a
				}
				var h = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? a.useLayoutEffect : a.useEffect;

				function f(e) {
					var t = a.useRef(e);
					return h((function() {
						t.current = e
					})), a.useCallback((function() {
						for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++) n[a] = arguments[a];
						return t.current.apply(void 0, n)
					}), [])
				}
				var p = ["ref", "startOnMount", "enableReinitialize", "delay", "onEnd", "onStart", "onPauseResume", "onReset", "onUpdate"],
					m = {
						decimal: ".",
						separator: ",",
						delay: null,
						prefix: "",
						suffix: "",
						duration: 2,
						start: 0,
						decimals: 0,
						startOnMount: !0,
						enableReinitialize: !0,
						useEasing: !0,
						useGrouping: !0,
						useIndianSeparators: !1
					},
					g = function(e) {
						var t = Object.fromEntries(Object.entries(e).filter((function(e) {
								return void 0 !== u(e, 2)[1]
							}))),
							n = a.useMemo((function() {
								return i(i({}, m), t)
							}), [e]),
							o = n.ref,
							s = n.startOnMount,
							l = n.enableReinitialize,
							d = n.delay,
							h = n.onEnd,
							g = n.onStart,
							y = n.onPauseResume,
							b = n.onReset,
							v = n.onUpdate,
							x = c(n, p),
							w = a.useRef(),
							T = a.useRef(),
							_ = a.useRef(!1),
							k = f((function() {
								return function(e, t) {
									var n = t.decimal,
										a = t.decimals,
										o = t.duration,
										i = t.easingFn,
										s = t.end,
										l = t.formattingFn,
										c = t.numerals,
										u = t.prefix,
										d = t.separator,
										h = t.start,
										f = t.suffix,
										p = t.useEasing,
										m = t.useGrouping,
										g = t.useIndianSeparators,
										y = t.enableScrollSpy,
										b = t.scrollSpyDelay,
										v = t.scrollSpyOnce,
										x = t.plugin;
									return new r.CountUp(e, s, {
										startVal: h,
										duration: o,
										decimal: n,
										decimalPlaces: a,
										easingFn: i,
										formattingFn: l,
										numerals: c,
										separator: d,
										prefix: u,
										suffix: f,
										plugin: x,
										useEasing: p,
										useIndianSeparators: g,
										useGrouping: m,
										enableScrollSpy: y,
										scrollSpyDelay: b,
										scrollSpyOnce: v
									})
								}("string" == typeof o ? o : o.current, x)
							})),
							P = f((function(e) {
								var t = w.current;
								if (t && !e) return t;
								var n = k();
								return w.current = n, n
							})),
							E = f((function() {
								var e = function() {
									return P(!0).start((function() {
										null == h || h({
											pauseResume: S,
											reset: C,
											start: N,
											update: M
										})
									}))
								};
								d && d > 0 ? T.current = setTimeout(e, 1e3 * d) : e(), null == g || g({
									pauseResume: S,
									reset: C,
									update: M
								})
							})),
							S = f((function() {
								P().pauseResume(), null == y || y({
									reset: C,
									start: N,
									update: M
								})
							})),
							C = f((function() {
								P().el && (T.current && clearTimeout(T.current), P().reset(), null == b || b({
									pauseResume: S,
									start: N,
									update: M
								}))
							})),
							M = f((function(e) {
								P().update(e), null == v || v({
									pauseResume: S,
									reset: C,
									start: N
								})
							})),
							N = f((function() {
								C(), E()
							})),
							$ = f((function(e) {
								s && (e && C(), E())
							}));
						return a.useEffect((function() {
							_.current ? l && $(!0) : (_.current = !0, $())
						}), [l, _, $, d, e.start, e.suffix, e.prefix, e.duration, e.separator, e.decimals, e.decimal, e.formattingFn]), a.useEffect((function() {
							return function() {
								C()
							}
						}), [C]), {
							start: N,
							pauseResume: S,
							reset: C,
							update: M,
							getCountUp: P
						}
					},
					y = ["className", "redraw", "containerProps", "children", "style"];
				t.ZP = function(e) {
					var t = e.className,
						n = e.redraw,
						r = e.containerProps,
						o = e.children,
						s = e.style,
						u = c(e, y),
						d = a.useRef(null),
						h = a.useRef(!1),
						p = g(i(i({}, u), {}, {
							ref: d,
							startOnMount: "function" != typeof o || 0 === e.delay,
							enableReinitialize: !1
						})),
						m = p.start,
						b = p.reset,
						v = p.update,
						x = p.pauseResume,
						w = p.getCountUp,
						T = f((function() {
							m()
						})),
						_ = f((function(t) {
							e.preserveValue || b(), v(t)
						})),
						k = f((function() {
							"function" != typeof e.children || d.current instanceof Element ? w() : console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.')
						}));
					a.useEffect((function() {
						k()
					}), [k]), a.useEffect((function() {
						h.current && _(e.end)
					}), [e.end, _]);
					var P = n && e;
					return a.useEffect((function() {
						n && h.current && T()
					}), [T, n, P]), a.useEffect((function() {
						!n && h.current && T()
					}), [T, n, e.start, e.suffix, e.prefix, e.duration, e.separator, e.decimals, e.decimal, e.className, e.formattingFn]), a.useEffect((function() {
						h.current = !0
					}), []), "function" == typeof o ? o({
						countUpRef: d,
						start: m,
						reset: b,
						update: v,
						pauseResume: x,
						getCountUp: w
					}) : a.createElement("span", l({
						className: t,
						ref: d,
						style: s
					}, r), void 0 !== e.start ? w().formattingFn(e.start) : "")
				}
			},
			101: (e, t, n) => {
				"use strict";
				/**
				 * @license React
				 * react-dom.production.min.js
				 *
				 * Copyright (c) Facebook, Inc. and its affiliates.
				 *
				 * This source code is licensed under the MIT license found in the
				 * LICENSE file in the root directory of this source tree.
				 */
				var a = n(294),
					r = n(840);

				function o(e) {
					for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
					return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
				}
				var i = new Set,
					s = {};

				function l(e, t) {
					c(e, t), c(e + "Capture", t)
				}

				function c(e, t) {
					for (s[e] = t, e = 0; e < t.length; e++) i.add(t[e])
				}
				var u = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement),
					d = Object.prototype.hasOwnProperty,
					h = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
					f = {},
					p = {};

				function m(e, t, n, a, r, o, i) {
					this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = a, this.attributeNamespace = r, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i
				}
				var g = {};
				"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
					g[e] = new m(e, 0, !1, e, null, !1, !1)
				})), [
					["acceptCharset", "accept-charset"],
					["className", "class"],
					["htmlFor", "for"],
					["httpEquiv", "http-equiv"]
				].forEach((function(e) {
					var t = e[0];
					g[t] = new m(t, 1, !1, e[1], null, !1, !1)
				})), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
					g[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1)
				})), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
					g[e] = new m(e, 2, !1, e, null, !1, !1)
				})), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
					g[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1)
				})), ["checked", "multiple", "muted", "selected"].forEach((function(e) {
					g[e] = new m(e, 3, !0, e, null, !1, !1)
				})), ["capture", "download"].forEach((function(e) {
					g[e] = new m(e, 4, !1, e, null, !1, !1)
				})), ["cols", "rows", "size", "span"].forEach((function(e) {
					g[e] = new m(e, 6, !1, e, null, !1, !1)
				})), ["rowSpan", "start"].forEach((function(e) {
					g[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1)
				}));
				var y = /[\-:]([a-z])/g;

				function b(e) {
					return e[1].toUpperCase()
				}

				function v(e, t, n, a) {
					var r = g.hasOwnProperty(t) ? g[t] : null;
					(null !== r ? 0 !== r.type : a || !(2 < t.length) || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && (function(e, t, n, a) {
						if (null == t || function(e, t, n, a) {
								if (null !== n && 0 === n.type) return !1;
								switch (typeof t) {
									case "function":
									case "symbol":
										return !0;
									case "boolean":
										return !a && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
									default:
										return !1
								}
							}(e, t, n, a)) return !0;
						if (a) return !1;
						if (null !== n) switch (n.type) {
							case 3:
								return !t;
							case 4:
								return !1 === t;
							case 5:
								return isNaN(t);
							case 6:
								return isNaN(t) || 1 > t
						}
						return !1
					}(t, n, r, a) && (n = null), a || null === r ? function(e) {
						return !!d.call(p, e) || !d.call(f, e) && (h.test(e) ? p[e] = !0 : (f[e] = !0, !1))
					}(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : r.mustUseProperty ? e[r.propertyName] = null === n ? 3 !== r.type && "" : n : (t = r.attributeName, a = r.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (r = r.type) || 4 === r && !0 === n ? "" : "" + n, a ? e.setAttributeNS(a, t, n) : e.setAttribute(t, n))))
				}
				"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
					var t = e.replace(y, b);
					g[t] = new m(t, 1, !1, e, null, !1, !1)
				})), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
					var t = e.replace(y, b);
					g[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
				})), ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
					var t = e.replace(y, b);
					g[t] = new m(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
				})), ["tabIndex", "crossOrigin"].forEach((function(e) {
					g[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1)
				})), g.xlinkHref = new m("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function(e) {
					g[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0)
				}));
				var x = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
					w = Symbol.for("react.element"),
					T = Symbol.for("react.portal"),
					_ = Symbol.for("react.fragment"),
					k = Symbol.for("react.strict_mode"),
					P = Symbol.for("react.profiler"),
					E = Symbol.for("react.provider"),
					S = Symbol.for("react.context"),
					C = Symbol.for("react.forward_ref"),
					M = Symbol.for("react.suspense"),
					N = Symbol.for("react.suspense_list"),
					$ = Symbol.for("react.memo"),
					A = Symbol.for("react.lazy");
				Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
				var I = Symbol.for("react.offscreen");
				Symbol.for("react.legacy_hidden"), Symbol.for("react.cache"), Symbol.for("react.tracing_marker");
				var O = Symbol.iterator;

				function R(e) {
					return null === e || "object" != typeof e ? null : "function" == typeof(e = O && e[O] || e["@@iterator"]) ? e : null
				}
				var D, F = Object.assign;

				function L(e) {
					if (void 0 === D) try {
						throw Error()
					} catch (e) {
						var t = e.stack.trim().match(/\n( *(at )?)/);
						D = t && t[1] || ""
					}
					return "\n" + D + e
				}
				var z = !1;

				function V(e, t) {
					if (!e || z) return "";
					z = !0;
					var n = Error.prepareStackTrace;
					Error.prepareStackTrace = void 0;
					try {
						if (t)
							if (t = function() {
									throw Error()
								}, Object.defineProperty(t.prototype, "props", {
									set: function() {
										throw Error()
									}
								}), "object" == typeof Reflect && Reflect.construct) {
								try {
									Reflect.construct(t, [])
								} catch (e) {
									var a = e
								}
								Reflect.construct(e, [], t)
							} else {
								try {
									t.call()
								} catch (e) {
									a = e
								}
								e.call(t.prototype)
							}
						else {
							try {
								throw Error()
							} catch (e) {
								a = e
							}
							e()
						}
					} catch (t) {
						if (t && a && "string" == typeof t.stack) {
							for (var r = t.stack.split("\n"), o = a.stack.split("\n"), i = r.length - 1, s = o.length - 1; 1 <= i && 0 <= s && r[i] !== o[s];) s--;
							for (; 1 <= i && 0 <= s; i--, s--)
								if (r[i] !== o[s]) {
									if (1 !== i || 1 !== s)
										do {
											if (i--, 0 > --s || r[i] !== o[s]) {
												var l = "\n" + r[i].replace(" at new ", " at ");
												return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l
											}
										} while (1 <= i && 0 <= s);
									break
								}
						}
					} finally {
						z = !1, Error.prepareStackTrace = n
					}
					return (e = e ? e.displayName || e.name : "") ? L(e) : ""
				}

				function B(e) {
					switch (e.tag) {
						case 5:
							return L(e.type);
						case 16:
							return L("Lazy");
						case 13:
							return L("Suspense");
						case 19:
							return L("SuspenseList");
						case 0:
						case 2:
						case 15:
							return e = V(e.type, !1);
						case 11:
							return e = V(e.type.render, !1);
						case 1:
							return e = V(e.type, !0);
						default:
							return ""
					}
				}

				function j(e) {
					if (null == e) return null;
					if ("function" == typeof e) return e.displayName || e.name || null;
					if ("string" == typeof e) return e;
					switch (e) {
						case _:
							return "Fragment";
						case T:
							return "Portal";
						case P:
							return "Profiler";
						case k:
							return "StrictMode";
						case M:
							return "Suspense";
						case N:
							return "SuspenseList"
					}
					if ("object" == typeof e) switch (e.$$typeof) {
						case S:
							return (e.displayName || "Context") + ".Consumer";
						case E:
							return (e._context.displayName || "Context") + ".Provider";
						case C:
							var t = e.render;
							return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
						case $:
							return null !== (t = e.displayName || null) ? t : j(e.type) || "Memo";
						case A:
							t = e._payload, e = e._init;
							try {
								return j(e(t))
							} catch (e) {}
					}
					return null
				}

				function H(e) {
					var t = e.type;
					switch (e.tag) {
						case 24:
							return "Cache";
						case 9:
							return (t.displayName || "Context") + ".Consumer";
						case 10:
							return (t._context.displayName || "Context") + ".Provider";
						case 18:
							return "DehydratedFragment";
						case 11:
							return e = (e = t.render).displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
						case 7:
							return "Fragment";
						case 5:
							return t;
						case 4:
							return "Portal";
						case 3:
							return "Root";
						case 6:
							return "Text";
						case 16:
							return j(t);
						case 8:
							return t === k ? "StrictMode" : "Mode";
						case 22:
							return "Offscreen";
						case 12:
							return "Profiler";
						case 21:
							return "Scope";
						case 13:
							return "Suspense";
						case 19:
							return "SuspenseList";
						case 25:
							return "TracingMarker";
						case 1:
						case 0:
						case 17:
						case 2:
						case 14:
						case 15:
							if ("function" == typeof t) return t.displayName || t.name || null;
							if ("string" == typeof t) return t
					}
					return null
				}

				function q(e) {
					switch (typeof e) {
						case "boolean":
						case "number":
						case "string":
						case "undefined":
						case "object":
							return e;
						default:
							return ""
					}
				}

				function W(e) {
					var t = e.type;
					return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
				}

				function Y(e) {
					e._valueTracker || (e._valueTracker = function(e) {
						var t = W(e) ? "checked" : "value",
							n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
							a = "" + e[t];
						if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
							var r = n.get,
								o = n.set;
							return Object.defineProperty(e, t, {
								configurable: !0,
								get: function() {
									return r.call(this)
								},
								set: function(e) {
									a = "" + e, o.call(this, e)
								}
							}), Object.defineProperty(e, t, {
								enumerable: n.enumerable
							}), {
								getValue: function() {
									return a
								},
								setValue: function(e) {
									a = "" + e
								},
								stopTracking: function() {
									e._valueTracker = null, delete e[t]
								}
							}
						}
					}(e))
				}

				function U(e) {
					if (!e) return !1;
					var t = e._valueTracker;
					if (!t) return !0;
					var n = t.getValue(),
						a = "";
					return e && (a = W(e) ? e.checked ? "true" : "false" : e.value), (e = a) !== n && (t.setValue(e), !0)
				}

				function Z(e) {
					if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
					try {
						return e.activeElement || e.body
					} catch (t) {
						return e.body
					}
				}

				function Q(e, t) {
					var n = t.checked;
					return F({}, t, {
						defaultChecked: void 0,
						defaultValue: void 0,
						value: void 0,
						checked: null != n ? n : e._wrapperState.initialChecked
					})
				}

				function G(e, t) {
					var n = null == t.defaultValue ? "" : t.defaultValue,
						a = null != t.checked ? t.checked : t.defaultChecked;
					n = q(null != t.value ? t.value : n), e._wrapperState = {
						initialChecked: a,
						initialValue: n,
						controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
					}
				}

				function X(e, t) {
					null != (t = t.checked) && v(e, "checked", t, !1)
				}

				function K(e, t) {
					X(e, t);
					var n = q(t.value),
						a = t.type;
					if (null != n) "number" === a ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
					else if ("submit" === a || "reset" === a) return void e.removeAttribute("value");
					t.hasOwnProperty("value") ? ee(e, t.type, n) : t.hasOwnProperty("defaultValue") && ee(e, t.type, q(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
				}

				function J(e, t, n) {
					if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
						var a = t.type;
						if (!("submit" !== a && "reset" !== a || void 0 !== t.value && null !== t.value)) return;
						t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
					}
					"" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
				}

				function ee(e, t, n) {
					"number" === t && Z(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
				}
				var te = Array.isArray;

				function ne(e, t, n, a) {
					if (e = e.options, t) {
						t = {};
						for (var r = 0; r < n.length; r++) t["$" + n[r]] = !0;
						for (n = 0; n < e.length; n++) r = t.hasOwnProperty("$" + e[n].value), e[n].selected !== r && (e[n].selected = r), r && a && (e[n].defaultSelected = !0)
					} else {
						for (n = "" + q(n), t = null, r = 0; r < e.length; r++) {
							if (e[r].value === n) return e[r].selected = !0, void(a && (e[r].defaultSelected = !0));
							null !== t || e[r].disabled || (t = e[r])
						}
						null !== t && (t.selected = !0)
					}
				}

				function ae(e, t) {
					if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
					return F({}, t, {
						value: void 0,
						defaultValue: void 0,
						children: "" + e._wrapperState.initialValue
					})
				}

				function re(e, t) {
					var n = t.value;
					if (null == n) {
						if (n = t.children, t = t.defaultValue, null != n) {
							if (null != t) throw Error(o(92));
							if (te(n)) {
								if (1 < n.length) throw Error(o(93));
								n = n[0]
							}
							t = n
						}
						null == t && (t = ""), n = t
					}
					e._wrapperState = {
						initialValue: q(n)
					}
				}

				function oe(e, t) {
					var n = q(t.value),
						a = q(t.defaultValue);
					null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != a && (e.defaultValue = "" + a)
				}

				function ie(e) {
					var t = e.textContent;
					t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
				}

				function se(e) {
					switch (e) {
						case "svg":
							return "http://www.w3.org/2000/svg";
						case "math":
							return "http://www.w3.org/1998/Math/MathML";
						default:
							return "http://www.w3.org/1999/xhtml"
					}
				}

				function le(e, t) {
					return null == e || "http://www.w3.org/1999/xhtml" === e ? se(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
				}
				var ce, ue, de = (ue = function(e, t) {
					if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e) e.innerHTML = t;
					else {
						for ((ce = ce || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ce.firstChild; e.firstChild;) e.removeChild(e.firstChild);
						for (; t.firstChild;) e.appendChild(t.firstChild)
					}
				}, "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, t, n, a) {
					MSApp.execUnsafeLocalFunction((function() {
						return ue(e, t)
					}))
				} : ue);

				function he(e, t) {
					if (t) {
						var n = e.firstChild;
						if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
					}
					e.textContent = t
				}
				var fe = {
						animationIterationCount: !0,
						aspectRatio: !0,
						borderImageOutset: !0,
						borderImageSlice: !0,
						borderImageWidth: !0,
						boxFlex: !0,
						boxFlexGroup: !0,
						boxOrdinalGroup: !0,
						columnCount: !0,
						columns: !0,
						flex: !0,
						flexGrow: !0,
						flexPositive: !0,
						flexShrink: !0,
						flexNegative: !0,
						flexOrder: !0,
						gridArea: !0,
						gridRow: !0,
						gridRowEnd: !0,
						gridRowSpan: !0,
						gridRowStart: !0,
						gridColumn: !0,
						gridColumnEnd: !0,
						gridColumnSpan: !0,
						gridColumnStart: !0,
						fontWeight: !0,
						lineClamp: !0,
						lineHeight: !0,
						opacity: !0,
						order: !0,
						orphans: !0,
						tabSize: !0,
						widows: !0,
						zIndex: !0,
						zoom: !0,
						fillOpacity: !0,
						floodOpacity: !0,
						stopOpacity: !0,
						strokeDasharray: !0,
						strokeDashoffset: !0,
						strokeMiterlimit: !0,
						strokeOpacity: !0,
						strokeWidth: !0
					},
					pe = ["Webkit", "ms", "Moz", "O"];

				function me(e, t, n) {
					return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || fe.hasOwnProperty(e) && fe[e] ? ("" + t).trim() : t + "px"
				}

				function ge(e, t) {
					for (var n in e = e.style, t)
						if (t.hasOwnProperty(n)) {
							var a = 0 === n.indexOf("--"),
								r = me(n, t[n], a);
							"float" === n && (n = "cssFloat"), a ? e.setProperty(n, r) : e[n] = r
						}
				}
				Object.keys(fe).forEach((function(e) {
					pe.forEach((function(t) {
						t = t + e.charAt(0).toUpperCase() + e.substring(1), fe[t] = fe[e]
					}))
				}));
				var ye = F({
					menuitem: !0
				}, {
					area: !0,
					base: !0,
					br: !0,
					col: !0,
					embed: !0,
					hr: !0,
					img: !0,
					input: !0,
					keygen: !0,
					link: !0,
					meta: !0,
					param: !0,
					source: !0,
					track: !0,
					wbr: !0
				});

				function be(e, t) {
					if (t) {
						if (ye[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(o(137, e));
						if (null != t.dangerouslySetInnerHTML) {
							if (null != t.children) throw Error(o(60));
							if ("object" != typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(o(61))
						}
						if (null != t.style && "object" != typeof t.style) throw Error(o(62))
					}
				}

				function ve(e, t) {
					if (-1 === e.indexOf("-")) return "string" == typeof t.is;
					switch (e) {
						case "annotation-xml":
						case "color-profile":
						case "font-face":
						case "font-face-src":
						case "font-face-uri":
						case "font-face-format":
						case "font-face-name":
						case "missing-glyph":
							return !1;
						default:
							return !0
					}
				}
				var xe = null;

				function we(e) {
					return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
				}
				var Te = null,
					_e = null,
					ke = null;

				function Pe(e) {
					if (e = vr(e)) {
						if ("function" != typeof Te) throw Error(o(280));
						var t = e.stateNode;
						t && (t = wr(t), Te(e.stateNode, e.type, t))
					}
				}

				function Ee(e) {
					_e ? ke ? ke.push(e) : ke = [e] : _e = e
				}

				function Se() {
					if (_e) {
						var e = _e,
							t = ke;
						if (ke = _e = null, Pe(e), t)
							for (e = 0; e < t.length; e++) Pe(t[e])
					}
				}

				function Ce(e, t) {
					return e(t)
				}

				function Me() {}
				var Ne = !1;

				function $e(e, t, n) {
					if (Ne) return e(t, n);
					Ne = !0;
					try {
						return Ce(e, t, n)
					} finally {
						Ne = !1, (null !== _e || null !== ke) && (Me(), Se())
					}
				}

				function Ae(e, t) {
					var n = e.stateNode;
					if (null === n) return null;
					var a = wr(n);
					if (null === a) return null;
					n = a[t];
					e: switch (t) {
						case "onClick":
						case "onClickCapture":
						case "onDoubleClick":
						case "onDoubleClickCapture":
						case "onMouseDown":
						case "onMouseDownCapture":
						case "onMouseMove":
						case "onMouseMoveCapture":
						case "onMouseUp":
						case "onMouseUpCapture":
						case "onMouseEnter":
							(a = !a.disabled) || (a = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !a;
							break e;
						default:
							e = !1
					}
					if (e) return null;
					if (n && "function" != typeof n) throw Error(o(231, t, typeof n));
					return n
				}
				var Ie = !1;
				if (u) try {
					var Oe = {};
					Object.defineProperty(Oe, "passive", {
						get: function() {
							Ie = !0
						}
					}), window.addEventListener("test", Oe, Oe), window.removeEventListener("test", Oe, Oe)
				} catch (ue) {
					Ie = !1
				}

				function Re(e, t, n, a, r, o, i, s, l) {
					var c = Array.prototype.slice.call(arguments, 3);
					try {
						t.apply(n, c)
					} catch (e) {
						this.onError(e)
					}
				}
				var De = !1,
					Fe = null,
					Le = !1,
					ze = null,
					Ve = {
						onError: function(e) {
							De = !0, Fe = e
						}
					};

				function Be(e, t, n, a, r, o, i, s, l) {
					De = !1, Fe = null, Re.apply(Ve, arguments)
				}

				function je(e) {
					var t = e,
						n = e;
					if (e.alternate)
						for (; t.return;) t = t.return;
					else {
						e = t;
						do {
							0 != (4098 & (t = e).flags) && (n = t.return), e = t.return
						} while (e)
					}
					return 3 === t.tag ? n : null
				}

				function He(e) {
					if (13 === e.tag) {
						var t = e.memoizedState;
						if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated
					}
					return null
				}

				function qe(e) {
					if (je(e) !== e) throw Error(o(188))
				}

				function We(e) {
					return null !== (e = function(e) {
						var t = e.alternate;
						if (!t) {
							if (null === (t = je(e))) throw Error(o(188));
							return t !== e ? null : e
						}
						for (var n = e, a = t;;) {
							var r = n.return;
							if (null === r) break;
							var i = r.alternate;
							if (null === i) {
								if (null !== (a = r.return)) {
									n = a;
									continue
								}
								break
							}
							if (r.child === i.child) {
								for (i = r.child; i;) {
									if (i === n) return qe(r), e;
									if (i === a) return qe(r), t;
									i = i.sibling
								}
								throw Error(o(188))
							}
							if (n.return !== a.return) n = r, a = i;
							else {
								for (var s = !1, l = r.child; l;) {
									if (l === n) {
										s = !0, n = r, a = i;
										break
									}
									if (l === a) {
										s = !0, a = r, n = i;
										break
									}
									l = l.sibling
								}
								if (!s) {
									for (l = i.child; l;) {
										if (l === n) {
											s = !0, n = i, a = r;
											break
										}
										if (l === a) {
											s = !0, a = i, n = r;
											break
										}
										l = l.sibling
									}
									if (!s) throw Error(o(189))
								}
							}
							if (n.alternate !== a) throw Error(o(190))
						}
						if (3 !== n.tag) throw Error(o(188));
						return n.stateNode.current === n ? e : t
					}(e)) ? Ye(e) : null
				}

				function Ye(e) {
					if (5 === e.tag || 6 === e.tag) return e;
					for (e = e.child; null !== e;) {
						var t = Ye(e);
						if (null !== t) return t;
						e = e.sibling
					}
					return null
				}
				var Ue = r.unstable_scheduleCallback,
					Ze = r.unstable_cancelCallback,
					Qe = r.unstable_shouldYield,
					Ge = r.unstable_requestPaint,
					Xe = r.unstable_now,
					Ke = r.unstable_getCurrentPriorityLevel,
					Je = r.unstable_ImmediatePriority,
					et = r.unstable_UserBlockingPriority,
					tt = r.unstable_NormalPriority,
					nt = r.unstable_LowPriority,
					at = r.unstable_IdlePriority,
					rt = null,
					ot = null;
				var it = Math.clz32 ? Math.clz32 : function(e) {
						return e >>>= 0, 0 === e ? 32 : 31 - (st(e) / lt | 0) | 0
					},
					st = Math.log,
					lt = Math.LN2;
				var ct = 64,
					ut = 4194304;

				function dt(e) {
					switch (e & -e) {
						case 1:
							return 1;
						case 2:
							return 2;
						case 4:
							return 4;
						case 8:
							return 8;
						case 16:
							return 16;
						case 32:
							return 32;
						case 64:
						case 128:
						case 256:
						case 512:
						case 1024:
						case 2048:
						case 4096:
						case 8192:
						case 16384:
						case 32768:
						case 65536:
						case 131072:
						case 262144:
						case 524288:
						case 1048576:
						case 2097152:
							return 4194240 & e;
						case 4194304:
						case 8388608:
						case 16777216:
						case 33554432:
						case 67108864:
							return 130023424 & e;
						case 134217728:
							return 134217728;
						case 268435456:
							return 268435456;
						case 536870912:
							return 536870912;
						case 1073741824:
							return 1073741824;
						default:
							return e
					}
				}

				function ht(e, t) {
					var n = e.pendingLanes;
					if (0 === n) return 0;
					var a = 0,
						r = e.suspendedLanes,
						o = e.pingedLanes,
						i = 268435455 & n;
					if (0 !== i) {
						var s = i & ~r;
						0 !== s ? a = dt(s) : 0 !== (o &= i) && (a = dt(o))
					} else 0 !== (i = n & ~r) ? a = dt(i) : 0 !== o && (a = dt(o));
					if (0 === a) return 0;
					if (0 !== t && t !== a && 0 == (t & r) && ((r = a & -a) >= (o = t & -t) || 16 === r && 0 != (4194240 & o))) return t;
					if (0 != (4 & a) && (a |= 16 & n), 0 !== (t = e.entangledLanes))
						for (e = e.entanglements, t &= a; 0 < t;) r = 1 << (n = 31 - it(t)), a |= e[n], t &= ~r;
					return a
				}

				function ft(e, t) {
					switch (e) {
						case 1:
						case 2:
						case 4:
							return t + 250;
						case 8:
						case 16:
						case 32:
						case 64:
						case 128:
						case 256:
						case 512:
						case 1024:
						case 2048:
						case 4096:
						case 8192:
						case 16384:
						case 32768:
						case 65536:
						case 131072:
						case 262144:
						case 524288:
						case 1048576:
						case 2097152:
							return t + 5e3;
						default:
							return -1
					}
				}

				function pt(e) {
					return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
				}

				function mt() {
					var e = ct;
					return 0 == (4194240 & (ct <<= 1)) && (ct = 64), e
				}

				function gt(e) {
					for (var t = [], n = 0; 31 > n; n++) t.push(e);
					return t
				}

				function yt(e, t, n) {
					e.pendingLanes |= t, 536870912 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[t = 31 - it(t)] = n
				}

				function bt(e, t) {
					var n = e.entangledLanes |= t;
					for (e = e.entanglements; n;) {
						var a = 31 - it(n),
							r = 1 << a;
						r & t | e[a] & t && (e[a] |= t), n &= ~r
					}
				}
				var vt = 0;

				function xt(e) {
					return 1 < (e &= -e) ? 4 < e ? 0 != (268435455 & e) ? 16 : 536870912 : 4 : 1
				}
				var wt, Tt, _t, kt, Pt, Et = !1,
					St = [],
					Ct = null,
					Mt = null,
					Nt = null,
					$t = new Map,
					At = new Map,
					It = [],
					Ot = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

				function Rt(e, t) {
					switch (e) {
						case "focusin":
						case "focusout":
							Ct = null;
							break;
						case "dragenter":
						case "dragleave":
							Mt = null;
							break;
						case "mouseover":
						case "mouseout":
							Nt = null;
							break;
						case "pointerover":
						case "pointerout":
							$t.delete(t.pointerId);
							break;
						case "gotpointercapture":
						case "lostpointercapture":
							At.delete(t.pointerId)
					}
				}

				function Dt(e, t, n, a, r, o) {
					return null === e || e.nativeEvent !== o ? (e = {
						blockedOn: t,
						domEventName: n,
						eventSystemFlags: a,
						nativeEvent: o,
						targetContainers: [r]
					}, null !== t && (null !== (t = vr(t)) && Tt(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, null !== r && -1 === t.indexOf(r) && t.push(r), e)
				}

				function Ft(e) {
					var t = br(e.target);
					if (null !== t) {
						var n = je(t);
						if (null !== n)
							if (13 === (t = n.tag)) {
								if (null !== (t = He(n))) return e.blockedOn = t, void Pt(e.priority, (function() {
									_t(n)
								}))
							} else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) return void(e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
					}
					e.blockedOn = null
				}

				function Lt(e) {
					if (null !== e.blockedOn) return !1;
					for (var t = e.targetContainers; 0 < t.length;) {
						var n = Qt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
						if (null !== n) return null !== (t = vr(n)) && Tt(t), e.blockedOn = n, !1;
						var a = new(n = e.nativeEvent).constructor(n.type, n);
						xe = a, n.target.dispatchEvent(a), xe = null, t.shift()
					}
					return !0
				}

				function zt(e, t, n) {
					Lt(e) && n.delete(t)
				}

				function Vt() {
					Et = !1, null !== Ct && Lt(Ct) && (Ct = null), null !== Mt && Lt(Mt) && (Mt = null), null !== Nt && Lt(Nt) && (Nt = null), $t.forEach(zt), At.forEach(zt)
				}

				function Bt(e, t) {
					e.blockedOn === t && (e.blockedOn = null, Et || (Et = !0, r.unstable_scheduleCallback(r.unstable_NormalPriority, Vt)))
				}

				function jt(e) {
					function t(t) {
						return Bt(t, e)
					}
					if (0 < St.length) {
						Bt(St[0], e);
						for (var n = 1; n < St.length; n++) {
							var a = St[n];
							a.blockedOn === e && (a.blockedOn = null)
						}
					}
					for (null !== Ct && Bt(Ct, e), null !== Mt && Bt(Mt, e), null !== Nt && Bt(Nt, e), $t.forEach(t), At.forEach(t), n = 0; n < It.length; n++)(a = It[n]).blockedOn === e && (a.blockedOn = null);
					for (; 0 < It.length && null === (n = It[0]).blockedOn;) Ft(n), null === n.blockedOn && It.shift()
				}
				var Ht = x.ReactCurrentBatchConfig,
					qt = !0;

				function Wt(e, t, n, a) {
					var r = vt,
						o = Ht.transition;
					Ht.transition = null;
					try {
						vt = 1, Ut(e, t, n, a)
					} finally {
						vt = r, Ht.transition = o
					}
				}

				function Yt(e, t, n, a) {
					var r = vt,
						o = Ht.transition;
					Ht.transition = null;
					try {
						vt = 4, Ut(e, t, n, a)
					} finally {
						vt = r, Ht.transition = o
					}
				}

				function Ut(e, t, n, a) {
					if (qt) {
						var r = Qt(e, t, n, a);
						if (null === r) qa(e, t, a, Zt, n), Rt(e, a);
						else if (function(e, t, n, a, r) {
								switch (t) {
									case "focusin":
										return Ct = Dt(Ct, e, t, n, a, r), !0;
									case "dragenter":
										return Mt = Dt(Mt, e, t, n, a, r), !0;
									case "mouseover":
										return Nt = Dt(Nt, e, t, n, a, r), !0;
									case "pointerover":
										var o = r.pointerId;
										return $t.set(o, Dt($t.get(o) || null, e, t, n, a, r)), !0;
									case "gotpointercapture":
										return o = r.pointerId, At.set(o, Dt(At.get(o) || null, e, t, n, a, r)), !0
								}
								return !1
							}(r, e, t, n, a)) a.stopPropagation();
						else if (Rt(e, a), 4 & t && -1 < Ot.indexOf(e)) {
							for (; null !== r;) {
								var o = vr(r);
								if (null !== o && wt(o), null === (o = Qt(e, t, n, a)) && qa(e, t, a, Zt, n), o === r) break;
								r = o
							}
							null !== r && a.stopPropagation()
						} else qa(e, t, a, null, n)
					}
				}
				var Zt = null;

				function Qt(e, t, n, a) {
					if (Zt = null, null !== (e = br(e = we(a))))
						if (null === (t = je(e))) e = null;
						else if (13 === (n = t.tag)) {
						if (null !== (e = He(t))) return e;
						e = null
					} else if (3 === n) {
						if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
						e = null
					} else t !== e && (e = null);
					return Zt = e, null
				}

				function Gt(e) {
					switch (e) {
						case "cancel":
						case "click":
						case "close":
						case "contextmenu":
						case "copy":
						case "cut":
						case "auxclick":
						case "dblclick":
						case "dragend":
						case "dragstart":
						case "drop":
						case "focusin":
						case "focusout":
						case "input":
						case "invalid":
						case "keydown":
						case "keypress":
						case "keyup":
						case "mousedown":
						case "mouseup":
						case "paste":
						case "pause":
						case "play":
						case "pointercancel":
						case "pointerdown":
						case "pointerup":
						case "ratechange":
						case "reset":
						case "resize":
						case "seeked":
						case "submit":
						case "touchcancel":
						case "touchend":
						case "touchstart":
						case "volumechange":
						case "change":
						case "selectionchange":
						case "textInput":
						case "compositionstart":
						case "compositionend":
						case "compositionupdate":
						case "beforeblur":
						case "afterblur":
						case "beforeinput":
						case "blur":
						case "fullscreenchange":
						case "focus":
						case "hashchange":
						case "popstate":
						case "select":
						case "selectstart":
							return 1;
						case "drag":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "mousemove":
						case "mouseout":
						case "mouseover":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "scroll":
						case "toggle":
						case "touchmove":
						case "wheel":
						case "mouseenter":
						case "mouseleave":
						case "pointerenter":
						case "pointerleave":
							return 4;
						case "message":
							switch (Ke()) {
								case Je:
									return 1;
								case et:
									return 4;
								case tt:
								case nt:
									return 16;
								case at:
									return 536870912;
								default:
									return 16
							}
						default:
							return 16
					}
				}
				var Xt = null,
					Kt = null,
					Jt = null;

				function en() {
					if (Jt) return Jt;
					var e, t, n = Kt,
						a = n.length,
						r = "value" in Xt ? Xt.value : Xt.textContent,
						o = r.length;
					for (e = 0; e < a && n[e] === r[e]; e++);
					var i = a - e;
					for (t = 1; t <= i && n[a - t] === r[o - t]; t++);
					return Jt = r.slice(e, 1 < t ? 1 - t : void 0)
				}

				function tn(e) {
					var t = e.keyCode;
					return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
				}

				function nn() {
					return !0
				}

				function an() {
					return !1
				}

				function rn(e) {
					function t(t, n, a, r, o) {
						for (var i in this._reactName = t, this._targetInst = a, this.type = n, this.nativeEvent = r, this.target = o, this.currentTarget = null, e) e.hasOwnProperty(i) && (t = e[i], this[i] = t ? t(r) : r[i]);
						return this.isDefaultPrevented = (null != r.defaultPrevented ? r.defaultPrevented : !1 === r.returnValue) ? nn : an, this.isPropagationStopped = an, this
					}
					return F(t.prototype, {
						preventDefault: function() {
							this.defaultPrevented = !0;
							var e = this.nativeEvent;
							e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = nn)
						},
						stopPropagation: function() {
							var e = this.nativeEvent;
							e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = nn)
						},
						persist: function() {},
						isPersistent: nn
					}), t
				}
				var on, sn, ln, cn = {
						eventPhase: 0,
						bubbles: 0,
						cancelable: 0,
						timeStamp: function(e) {
							return e.timeStamp || Date.now()
						},
						defaultPrevented: 0,
						isTrusted: 0
					},
					un = rn(cn),
					dn = F({}, cn, {
						view: 0,
						detail: 0
					}),
					hn = rn(dn),
					fn = F({}, dn, {
						screenX: 0,
						screenY: 0,
						clientX: 0,
						clientY: 0,
						pageX: 0,
						pageY: 0,
						ctrlKey: 0,
						shiftKey: 0,
						altKey: 0,
						metaKey: 0,
						getModifierState: Pn,
						button: 0,
						buttons: 0,
						relatedTarget: function(e) {
							return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
						},
						movementX: function(e) {
							return "movementX" in e ? e.movementX : (e !== ln && (ln && "mousemove" === e.type ? (on = e.screenX - ln.screenX, sn = e.screenY - ln.screenY) : sn = on = 0, ln = e), on)
						},
						movementY: function(e) {
							return "movementY" in e ? e.movementY : sn
						}
					}),
					pn = rn(fn),
					mn = rn(F({}, fn, {
						dataTransfer: 0
					})),
					gn = rn(F({}, dn, {
						relatedTarget: 0
					})),
					yn = rn(F({}, cn, {
						animationName: 0,
						elapsedTime: 0,
						pseudoElement: 0
					})),
					bn = F({}, cn, {
						clipboardData: function(e) {
							return "clipboardData" in e ? e.clipboardData : window.clipboardData
						}
					}),
					vn = rn(bn),
					xn = rn(F({}, cn, {
						data: 0
					})),
					wn = {
						Esc: "Escape",
						Spacebar: " ",
						Left: "ArrowLeft",
						Up: "ArrowUp",
						Right: "ArrowRight",
						Down: "ArrowDown",
						Del: "Delete",
						Win: "OS",
						Menu: "ContextMenu",
						Apps: "ContextMenu",
						Scroll: "ScrollLock",
						MozPrintableKey: "Unidentified"
					},
					Tn = {
						8: "Backspace",
						9: "Tab",
						12: "Clear",
						13: "Enter",
						16: "Shift",
						17: "Control",
						18: "Alt",
						19: "Pause",
						20: "CapsLock",
						27: "Escape",
						32: " ",
						33: "PageUp",
						34: "PageDown",
						35: "End",
						36: "Home",
						37: "ArrowLeft",
						38: "ArrowUp",
						39: "ArrowRight",
						40: "ArrowDown",
						45: "Insert",
						46: "Delete",
						112: "F1",
						113: "F2",
						114: "F3",
						115: "F4",
						116: "F5",
						117: "F6",
						118: "F7",
						119: "F8",
						120: "F9",
						121: "F10",
						122: "F11",
						123: "F12",
						144: "NumLock",
						145: "ScrollLock",
						224: "Meta"
					},
					_n = {
						Alt: "altKey",
						Control: "ctrlKey",
						Meta: "metaKey",
						Shift: "shiftKey"
					};

				function kn(e) {
					var t = this.nativeEvent;
					return t.getModifierState ? t.getModifierState(e) : !!(e = _n[e]) && !!t[e]
				}

				function Pn() {
					return kn
				}
				var En = F({}, dn, {
						key: function(e) {
							if (e.key) {
								var t = wn[e.key] || e.key;
								if ("Unidentified" !== t) return t
							}
							return "keypress" === e.type ? 13 === (e = tn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? Tn[e.keyCode] || "Unidentified" : ""
						},
						code: 0,
						location: 0,
						ctrlKey: 0,
						shiftKey: 0,
						altKey: 0,
						metaKey: 0,
						repeat: 0,
						locale: 0,
						getModifierState: Pn,
						charCode: function(e) {
							return "keypress" === e.type ? tn(e) : 0
						},
						keyCode: function(e) {
							return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
						},
						which: function(e) {
							return "keypress" === e.type ? tn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
						}
					}),
					Sn = rn(En),
					Cn = rn(F({}, fn, {
						pointerId: 0,
						width: 0,
						height: 0,
						pressure: 0,
						tangentialPressure: 0,
						tiltX: 0,
						tiltY: 0,
						twist: 0,
						pointerType: 0,
						isPrimary: 0
					})),
					Mn = rn(F({}, dn, {
						touches: 0,
						targetTouches: 0,
						changedTouches: 0,
						altKey: 0,
						metaKey: 0,
						ctrlKey: 0,
						shiftKey: 0,
						getModifierState: Pn
					})),
					Nn = rn(F({}, cn, {
						propertyName: 0,
						elapsedTime: 0,
						pseudoElement: 0
					})),
					$n = F({}, fn, {
						deltaX: function(e) {
							return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
						},
						deltaY: function(e) {
							return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
						},
						deltaZ: 0,
						deltaMode: 0
					}),
					An = rn($n),
					In = [9, 13, 27, 32],
					On = u && "CompositionEvent" in window,
					Rn = null;
				u && "documentMode" in document && (Rn = document.documentMode);
				var Dn = u && "TextEvent" in window && !Rn,
					Fn = u && (!On || Rn && 8 < Rn && 11 >= Rn),
					Ln = String.fromCharCode(32),
					zn = !1;

				function Vn(e, t) {
					switch (e) {
						case "keyup":
							return -1 !== In.indexOf(t.keyCode);
						case "keydown":
							return 229 !== t.keyCode;
						case "keypress":
						case "mousedown":
						case "focusout":
							return !0;
						default:
							return !1
					}
				}

				function Bn(e) {
					return "object" == typeof(e = e.detail) && "data" in e ? e.data : null
				}
				var jn = !1;
				var Hn = {
					color: !0,
					date: !0,
					datetime: !0,
					"datetime-local": !0,
					email: !0,
					month: !0,
					number: !0,
					password: !0,
					range: !0,
					search: !0,
					tel: !0,
					text: !0,
					time: !0,
					url: !0,
					week: !0
				};

				function qn(e) {
					var t = e && e.nodeName && e.nodeName.toLowerCase();
					return "input" === t ? !!Hn[e.type] : "textarea" === t
				}

				function Wn(e, t, n, a) {
					Ee(a), 0 < (t = Ya(t, "onChange")).length && (n = new un("onChange", "change", null, n, a), e.push({
						event: n,
						listeners: t
					}))
				}
				var Yn = null,
					Un = null;

				function Zn(e) {
					La(e, 0)
				}

				function Qn(e) {
					if (U(xr(e))) return e
				}

				function Gn(e, t) {
					if ("change" === e) return t
				}
				var Xn = !1;
				if (u) {
					var Kn;
					if (u) {
						var Jn = "oninput" in document;
						if (!Jn) {
							var ea = document.createElement("div");
							ea.setAttribute("oninput", "return;"), Jn = "function" == typeof ea.oninput
						}
						Kn = Jn
					} else Kn = !1;
					Xn = Kn && (!document.documentMode || 9 < document.documentMode)
				}

				function ta() {
					Yn && (Yn.detachEvent("onpropertychange", na), Un = Yn = null)
				}

				function na(e) {
					if ("value" === e.propertyName && Qn(Un)) {
						var t = [];
						Wn(t, Un, e, we(e)), $e(Zn, t)
					}
				}

				function aa(e, t, n) {
					"focusin" === e ? (ta(), Un = n, (Yn = t).attachEvent("onpropertychange", na)) : "focusout" === e && ta()
				}

				function ra(e) {
					if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Qn(Un)
				}

				function oa(e, t) {
					if ("click" === e) return Qn(t)
				}

				function ia(e, t) {
					if ("input" === e || "change" === e) return Qn(t)
				}
				var sa = "function" == typeof Object.is ? Object.is : function(e, t) {
					return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
				};

				function la(e, t) {
					if (sa(e, t)) return !0;
					if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
					var n = Object.keys(e),
						a = Object.keys(t);
					if (n.length !== a.length) return !1;
					for (a = 0; a < n.length; a++) {
						var r = n[a];
						if (!d.call(t, r) || !sa(e[r], t[r])) return !1
					}
					return !0
				}

				function ca(e) {
					for (; e && e.firstChild;) e = e.firstChild;
					return e
				}

				function ua(e, t) {
					var n, a = ca(e);
					for (e = 0; a;) {
						if (3 === a.nodeType) {
							if (n = e + a.textContent.length, e <= t && n >= t) return {
								node: a,
								offset: t - e
							};
							e = n
						}
						e: {
							for (; a;) {
								if (a.nextSibling) {
									a = a.nextSibling;
									break e
								}
								a = a.parentNode
							}
							a = void 0
						}
						a = ca(a)
					}
				}

				function da(e, t) {
					return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? da(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
				}

				function ha() {
					for (var e = window, t = Z(); t instanceof e.HTMLIFrameElement;) {
						try {
							var n = "string" == typeof t.contentWindow.location.href
						} catch (e) {
							n = !1
						}
						if (!n) break;
						t = Z((e = t.contentWindow).document)
					}
					return t
				}

				function fa(e) {
					var t = e && e.nodeName && e.nodeName.toLowerCase();
					return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
				}

				function pa(e) {
					var t = ha(),
						n = e.focusedElem,
						a = e.selectionRange;
					if (t !== n && n && n.ownerDocument && da(n.ownerDocument.documentElement, n)) {
						if (null !== a && fa(n))
							if (t = a.start, void 0 === (e = a.end) && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
							else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) {
							e = e.getSelection();
							var r = n.textContent.length,
								o = Math.min(a.start, r);
							a = void 0 === a.end ? o : Math.min(a.end, r), !e.extend && o > a && (r = a, a = o, o = r), r = ua(n, o);
							var i = ua(n, a);
							r && i && (1 !== e.rangeCount || e.anchorNode !== r.node || e.anchorOffset !== r.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && ((t = t.createRange()).setStart(r.node, r.offset), e.removeAllRanges(), o > a ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)))
						}
						for (t = [], e = n; e = e.parentNode;) 1 === e.nodeType && t.push({
							element: e,
							left: e.scrollLeft,
							top: e.scrollTop
						});
						for ("function" == typeof n.focus && n.focus(), n = 0; n < t.length; n++)(e = t[n]).element.scrollLeft = e.left, e.element.scrollTop = e.top
					}
				}
				var ma = u && "documentMode" in document && 11 >= document.documentMode,
					ga = null,
					ya = null,
					ba = null,
					va = !1;

				function xa(e, t, n) {
					var a = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
					va || null == ga || ga !== Z(a) || ("selectionStart" in (a = ga) && fa(a) ? a = {
						start: a.selectionStart,
						end: a.selectionEnd
					} : a = {
						anchorNode: (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection()).anchorNode,
						anchorOffset: a.anchorOffset,
						focusNode: a.focusNode,
						focusOffset: a.focusOffset
					}, ba && la(ba, a) || (ba = a, 0 < (a = Ya(ya, "onSelect")).length && (t = new un("onSelect", "select", null, t, n), e.push({
						event: t,
						listeners: a
					}), t.target = ga)))
				}

				function wa(e, t) {
					var n = {};
					return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
				}
				var Ta = {
						animationend: wa("Animation", "AnimationEnd"),
						animationiteration: wa("Animation", "AnimationIteration"),
						animationstart: wa("Animation", "AnimationStart"),
						transitionend: wa("Transition", "TransitionEnd")
					},
					_a = {},
					ka = {};

				function Pa(e) {
					if (_a[e]) return _a[e];
					if (!Ta[e]) return e;
					var t, n = Ta[e];
					for (t in n)
						if (n.hasOwnProperty(t) && t in ka) return _a[e] = n[t];
					return e
				}
				u && (ka = document.createElement("div").style, "AnimationEvent" in window || (delete Ta.animationend.animation, delete Ta.animationiteration.animation, delete Ta.animationstart.animation), "TransitionEvent" in window || delete Ta.transitionend.transition);
				var Ea = Pa("animationend"),
					Sa = Pa("animationiteration"),
					Ca = Pa("animationstart"),
					Ma = Pa("transitionend"),
					Na = new Map,
					$a = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

				function Aa(e, t) {
					Na.set(e, t), l(t, [e])
				}
				for (var Ia = 0; Ia < $a.length; Ia++) {
					var Oa = $a[Ia];
					Aa(Oa.toLowerCase(), "on" + (Oa[0].toUpperCase() + Oa.slice(1)))
				}
				Aa(Ea, "onAnimationEnd"), Aa(Sa, "onAnimationIteration"), Aa(Ca, "onAnimationStart"), Aa("dblclick", "onDoubleClick"), Aa("focusin", "onFocus"), Aa("focusout", "onBlur"), Aa(Ma, "onTransitionEnd"), c("onMouseEnter", ["mouseout", "mouseover"]), c("onMouseLeave", ["mouseout", "mouseover"]), c("onPointerEnter", ["pointerout", "pointerover"]), c("onPointerLeave", ["pointerout", "pointerover"]), l("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), l("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), l("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
				var Ra = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
					Da = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ra));

				function Fa(e, t, n) {
					var a = e.type || "unknown-event";
					e.currentTarget = n,
						function(e, t, n, a, r, i, s, l, c) {
							if (Be.apply(this, arguments), De) {
								if (!De) throw Error(o(198));
								var u = Fe;
								De = !1, Fe = null, Le || (Le = !0, ze = u)
							}
						}(a, t, void 0, e), e.currentTarget = null
				}

				function La(e, t) {
					t = 0 != (4 & t);
					for (var n = 0; n < e.length; n++) {
						var a = e[n],
							r = a.event;
						a = a.listeners;
						e: {
							var o = void 0;
							if (t)
								for (var i = a.length - 1; 0 <= i; i--) {
									var s = a[i],
										l = s.instance,
										c = s.currentTarget;
									if (s = s.listener, l !== o && r.isPropagationStopped()) break e;
									Fa(r, s, c), o = l
								} else
									for (i = 0; i < a.length; i++) {
										if (l = (s = a[i]).instance, c = s.currentTarget, s = s.listener, l !== o && r.isPropagationStopped()) break e;
										Fa(r, s, c), o = l
									}
						}
					}
					if (Le) throw e = ze, Le = !1, ze = null, e
				}

				function za(e, t) {
					var n = t[mr];
					void 0 === n && (n = t[mr] = new Set);
					var a = e + "__bubble";
					n.has(a) || (Ha(t, e, 2, !1), n.add(a))
				}

				function Va(e, t, n) {
					var a = 0;
					t && (a |= 4), Ha(n, e, a, t)
				}
				var Ba = "_reactListening" + Math.random().toString(36).slice(2);

				function ja(e) {
					if (!e[Ba]) {
						e[Ba] = !0, i.forEach((function(t) {
							"selectionchange" !== t && (Da.has(t) || Va(t, !1, e), Va(t, !0, e))
						}));
						var t = 9 === e.nodeType ? e : e.ownerDocument;
						null === t || t[Ba] || (t[Ba] = !0, Va("selectionchange", !1, t))
					}
				}

				function Ha(e, t, n, a) {
					switch (Gt(t)) {
						case 1:
							var r = Wt;
							break;
						case 4:
							r = Yt;
							break;
						default:
							r = Ut
					}
					n = r.bind(null, t, n, e), r = void 0, !Ie || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (r = !0), a ? void 0 !== r ? e.addEventListener(t, n, {
						capture: !0,
						passive: r
					}) : e.addEventListener(t, n, !0) : void 0 !== r ? e.addEventListener(t, n, {
						passive: r
					}) : e.addEventListener(t, n, !1)
				}

				function qa(e, t, n, a, r) {
					var o = a;
					if (0 == (1 & t) && 0 == (2 & t) && null !== a) e: for (;;) {
						if (null === a) return;
						var i = a.tag;
						if (3 === i || 4 === i) {
							var s = a.stateNode.containerInfo;
							if (s === r || 8 === s.nodeType && s.parentNode === r) break;
							if (4 === i)
								for (i = a.return; null !== i;) {
									var l = i.tag;
									if ((3 === l || 4 === l) && ((l = i.stateNode.containerInfo) === r || 8 === l.nodeType && l.parentNode === r)) return;
									i = i.return
								}
							for (; null !== s;) {
								if (null === (i = br(s))) return;
								if (5 === (l = i.tag) || 6 === l) {
									a = o = i;
									continue e
								}
								s = s.parentNode
							}
						}
						a = a.return
					}
					$e((function() {
						var a = o,
							r = we(n),
							i = [];
						e: {
							var s = Na.get(e);
							if (void 0 !== s) {
								var l = un,
									c = e;
								switch (e) {
									case "keypress":
										if (0 === tn(n)) break e;
									case "keydown":
									case "keyup":
										l = Sn;
										break;
									case "focusin":
										c = "focus", l = gn;
										break;
									case "focusout":
										c = "blur", l = gn;
										break;
									case "beforeblur":
									case "afterblur":
										l = gn;
										break;
									case "click":
										if (2 === n.button) break e;
									case "auxclick":
									case "dblclick":
									case "mousedown":
									case "mousemove":
									case "mouseup":
									case "mouseout":
									case "mouseover":
									case "contextmenu":
										l = pn;
										break;
									case "drag":
									case "dragend":
									case "dragenter":
									case "dragexit":
									case "dragleave":
									case "dragover":
									case "dragstart":
									case "drop":
										l = mn;
										break;
									case "touchcancel":
									case "touchend":
									case "touchmove":
									case "touchstart":
										l = Mn;
										break;
									case Ea:
									case Sa:
									case Ca:
										l = yn;
										break;
									case Ma:
										l = Nn;
										break;
									case "scroll":
										l = hn;
										break;
									case "wheel":
										l = An;
										break;
									case "copy":
									case "cut":
									case "paste":
										l = vn;
										break;
									case "gotpointercapture":
									case "lostpointercapture":
									case "pointercancel":
									case "pointerdown":
									case "pointermove":
									case "pointerout":
									case "pointerover":
									case "pointerup":
										l = Cn
								}
								var u = 0 != (4 & t),
									d = !u && "scroll" === e,
									h = u ? null !== s ? s + "Capture" : null : s;
								u = [];
								for (var f, p = a; null !== p;) {
									var m = (f = p).stateNode;
									if (5 === f.tag && null !== m && (f = m, null !== h && (null != (m = Ae(p, h)) && u.push(Wa(p, m, f)))), d) break;
									p = p.return
								}
								0 < u.length && (s = new l(s, c, null, n, r), i.push({
									event: s,
									listeners: u
								}))
							}
						}
						if (0 == (7 & t)) {
							if (l = "mouseout" === e || "pointerout" === e, (!(s = "mouseover" === e || "pointerover" === e) || n === xe || !(c = n.relatedTarget || n.fromElement) || !br(c) && !c[pr]) && (l || s) && (s = r.window === r ? r : (s = r.ownerDocument) ? s.defaultView || s.parentWindow : window, l ? (l = a, null !== (c = (c = n.relatedTarget || n.toElement) ? br(c) : null) && (c !== (d = je(c)) || 5 !== c.tag && 6 !== c.tag) && (c = null)) : (l = null, c = a), l !== c)) {
								if (u = pn, m = "onMouseLeave", h = "onMouseEnter", p = "mouse", "pointerout" !== e && "pointerover" !== e || (u = Cn, m = "onPointerLeave", h = "onPointerEnter", p = "pointer"), d = null == l ? s : xr(l), f = null == c ? s : xr(c), (s = new u(m, p + "leave", l, n, r)).target = d, s.relatedTarget = f, m = null, br(r) === a && ((u = new u(h, p + "enter", c, n, r)).target = f, u.relatedTarget = d, m = u), d = m, l && c) e: {
									for (h = c, p = 0, f = u = l; f; f = Ua(f)) p++;
									for (f = 0, m = h; m; m = Ua(m)) f++;
									for (; 0 < p - f;) u = Ua(u),
									p--;
									for (; 0 < f - p;) h = Ua(h),
									f--;
									for (; p--;) {
										if (u === h || null !== h && u === h.alternate) break e;
										u = Ua(u), h = Ua(h)
									}
									u = null
								}
								else u = null;
								null !== l && Za(i, s, l, u, !1), null !== c && null !== d && Za(i, d, c, u, !0)
							}
							if ("select" === (l = (s = a ? xr(a) : window).nodeName && s.nodeName.toLowerCase()) || "input" === l && "file" === s.type) var g = Gn;
							else if (qn(s))
								if (Xn) g = ia;
								else {
									g = ra;
									var y = aa
								}
							else(l = s.nodeName) && "input" === l.toLowerCase() && ("checkbox" === s.type || "radio" === s.type) && (g = oa);
							switch (g && (g = g(e, a)) ? Wn(i, g, n, r) : (y && y(e, s, a), "focusout" === e && (y = s._wrapperState) && y.controlled && "number" === s.type && ee(s, "number", s.value)), y = a ? xr(a) : window, e) {
								case "focusin":
									(qn(y) || "true" === y.contentEditable) && (ga = y, ya = a, ba = null);
									break;
								case "focusout":
									ba = ya = ga = null;
									break;
								case "mousedown":
									va = !0;
									break;
								case "contextmenu":
								case "mouseup":
								case "dragend":
									va = !1, xa(i, n, r);
									break;
								case "selectionchange":
									if (ma) break;
								case "keydown":
								case "keyup":
									xa(i, n, r)
							}
							var b;
							if (On) e: {
								switch (e) {
									case "compositionstart":
										var v = "onCompositionStart";
										break e;
									case "compositionend":
										v = "onCompositionEnd";
										break e;
									case "compositionupdate":
										v = "onCompositionUpdate";
										break e
								}
								v = void 0
							}
							else jn ? Vn(e, n) && (v = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (v = "onCompositionStart");
							v && (Fn && "ko" !== n.locale && (jn || "onCompositionStart" !== v ? "onCompositionEnd" === v && jn && (b = en()) : (Kt = "value" in (Xt = r) ? Xt.value : Xt.textContent, jn = !0)), 0 < (y = Ya(a, v)).length && (v = new xn(v, e, null, n, r), i.push({
								event: v,
								listeners: y
							}), b ? v.data = b : null !== (b = Bn(n)) && (v.data = b))), (b = Dn ? function(e, t) {
								switch (e) {
									case "compositionend":
										return Bn(t);
									case "keypress":
										return 32 !== t.which ? null : (zn = !0, Ln);
									case "textInput":
										return (e = t.data) === Ln && zn ? null : e;
									default:
										return null
								}
							}(e, n) : function(e, t) {
								if (jn) return "compositionend" === e || !On && Vn(e, t) ? (e = en(), Jt = Kt = Xt = null, jn = !1, e) : null;
								switch (e) {
									case "paste":
									default:
										return null;
									case "keypress":
										if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
											if (t.char && 1 < t.char.length) return t.char;
											if (t.which) return String.fromCharCode(t.which)
										}
										return null;
									case "compositionend":
										return Fn && "ko" !== t.locale ? null : t.data
								}
							}(e, n)) && (0 < (a = Ya(a, "onBeforeInput")).length && (r = new xn("onBeforeInput", "beforeinput", null, n, r), i.push({
								event: r,
								listeners: a
							}), r.data = b))
						}
						La(i, t)
					}))
				}

				function Wa(e, t, n) {
					return {
						instance: e,
						listener: t,
						currentTarget: n
					}
				}

				function Ya(e, t) {
					for (var n = t + "Capture", a = []; null !== e;) {
						var r = e,
							o = r.stateNode;
						5 === r.tag && null !== o && (r = o, null != (o = Ae(e, n)) && a.unshift(Wa(e, o, r)), null != (o = Ae(e, t)) && a.push(Wa(e, o, r))), e = e.return
					}
					return a
				}

				function Ua(e) {
					if (null === e) return null;
					do {
						e = e.return
					} while (e && 5 !== e.tag);
					return e || null
				}

				function Za(e, t, n, a, r) {
					for (var o = t._reactName, i = []; null !== n && n !== a;) {
						var s = n,
							l = s.alternate,
							c = s.stateNode;
						if (null !== l && l === a) break;
						5 === s.tag && null !== c && (s = c, r ? null != (l = Ae(n, o)) && i.unshift(Wa(n, l, s)) : r || null != (l = Ae(n, o)) && i.push(Wa(n, l, s))), n = n.return
					}
					0 !== i.length && e.push({
						event: t,
						listeners: i
					})
				}
				var Qa = /\r\n?/g,
					Ga = /\u0000|\uFFFD/g;

				function Xa(e) {
					return ("string" == typeof e ? e : "" + e).replace(Qa, "\n").replace(Ga, "")
				}

				function Ka(e, t, n) {
					if (t = Xa(t), Xa(e) !== t && n) throw Error(o(425))
				}

				function Ja() {}
				var er = null,
					tr = null;

				function nr(e, t) {
					return "textarea" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
				}
				var ar = "function" == typeof setTimeout ? setTimeout : void 0,
					rr = "function" == typeof clearTimeout ? clearTimeout : void 0,
					or = "function" == typeof Promise ? Promise : void 0,
					ir = "function" == typeof queueMicrotask ? queueMicrotask : void 0 !== or ? function(e) {
						return or.resolve(null).then(e).catch(sr)
					} : ar;

				function sr(e) {
					setTimeout((function() {
						throw e
					}))
				}

				function lr(e, t) {
					var n = t,
						a = 0;
					do {
						var r = n.nextSibling;
						if (e.removeChild(n), r && 8 === r.nodeType)
							if ("/$" === (n = r.data)) {
								if (0 === a) return e.removeChild(r), void jt(t);
								a--
							} else "$" !== n && "$?" !== n && "$!" !== n || a++;
						n = r
					} while (n);
					jt(t)
				}

				function cr(e) {
					for (; null != e; e = e.nextSibling) {
						var t = e.nodeType;
						if (1 === t || 3 === t) break;
						if (8 === t) {
							if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
							if ("/$" === t) return null
						}
					}
					return e
				}

				function ur(e) {
					e = e.previousSibling;
					for (var t = 0; e;) {
						if (8 === e.nodeType) {
							var n = e.data;
							if ("$" === n || "$!" === n || "$?" === n) {
								if (0 === t) return e;
								t--
							} else "/$" === n && t++
						}
						e = e.previousSibling
					}
					return null
				}
				var dr = Math.random().toString(36).slice(2),
					hr = "__reactFiber$" + dr,
					fr = "__reactProps$" + dr,
					pr = "__reactContainer$" + dr,
					mr = "__reactEvents$" + dr,
					gr = "__reactListeners$" + dr,
					yr = "__reactHandles$" + dr;

				function br(e) {
					var t = e[hr];
					if (t) return t;
					for (var n = e.parentNode; n;) {
						if (t = n[pr] || n[hr]) {
							if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
								for (e = ur(e); null !== e;) {
									if (n = e[hr]) return n;
									e = ur(e)
								}
							return t
						}
						n = (e = n).parentNode
					}
					return null
				}

				function vr(e) {
					return !(e = e[hr] || e[pr]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
				}

				function xr(e) {
					if (5 === e.tag || 6 === e.tag) return e.stateNode;
					throw Error(o(33))
				}

				function wr(e) {
					return e[fr] || null
				}
				var Tr = [],
					_r = -1;

				function kr(e) {
					return {
						current: e
					}
				}

				function Pr(e) {
					0 > _r || (e.current = Tr[_r], Tr[_r] = null, _r--)
				}

				function Er(e, t) {
					_r++, Tr[_r] = e.current, e.current = t
				}
				var Sr = {},
					Cr = kr(Sr),
					Mr = kr(!1),
					Nr = Sr;

				function $r(e, t) {
					var n = e.type.contextTypes;
					if (!n) return Sr;
					var a = e.stateNode;
					if (a && a.__reactInternalMemoizedUnmaskedChildContext === t) return a.__reactInternalMemoizedMaskedChildContext;
					var r, o = {};
					for (r in n) o[r] = t[r];
					return a && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
				}

				function Ar(e) {
					return null != (e = e.childContextTypes)
				}

				function Ir() {
					Pr(Mr), Pr(Cr)
				}

				function Or(e, t, n) {
					if (Cr.current !== Sr) throw Error(o(168));
					Er(Cr, t), Er(Mr, n)
				}

				function Rr(e, t, n) {
					var a = e.stateNode;
					if (t = t.childContextTypes, "function" != typeof a.getChildContext) return n;
					for (var r in a = a.getChildContext())
						if (!(r in t)) throw Error(o(108, H(e) || "Unknown", r));
					return F({}, n, a)
				}

				function Dr(e) {
					return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Sr, Nr = Cr.current, Er(Cr, e), Er(Mr, Mr.current), !0
				}

				function Fr(e, t, n) {
					var a = e.stateNode;
					if (!a) throw Error(o(169));
					n ? (e = Rr(e, t, Nr), a.__reactInternalMemoizedMergedChildContext = e, Pr(Mr), Pr(Cr), Er(Cr, e)) : Pr(Mr), Er(Mr, n)
				}
				var Lr = null,
					zr = !1,
					Vr = !1;

				function Br(e) {
					null === Lr ? Lr = [e] : Lr.push(e)
				}

				function jr() {
					if (!Vr && null !== Lr) {
						Vr = !0;
						var e = 0,
							t = vt;
						try {
							var n = Lr;
							for (vt = 1; e < n.length; e++) {
								var a = n[e];
								do {
									a = a(!0)
								} while (null !== a)
							}
							Lr = null, zr = !1
						} catch (t) {
							throw null !== Lr && (Lr = Lr.slice(e + 1)), Ue(Je, jr), t
						} finally {
							vt = t, Vr = !1
						}
					}
					return null
				}
				var Hr = [],
					qr = 0,
					Wr = null,
					Yr = 0,
					Ur = [],
					Zr = 0,
					Qr = null,
					Gr = 1,
					Xr = "";

				function Kr(e, t) {
					Hr[qr++] = Yr, Hr[qr++] = Wr, Wr = e, Yr = t
				}

				function Jr(e, t, n) {
					Ur[Zr++] = Gr, Ur[Zr++] = Xr, Ur[Zr++] = Qr, Qr = e;
					var a = Gr;
					e = Xr;
					var r = 32 - it(a) - 1;
					a &= ~(1 << r), n += 1;
					var o = 32 - it(t) + r;
					if (30 < o) {
						var i = r - r % 5;
						o = (a & (1 << i) - 1).toString(32), a >>= i, r -= i, Gr = 1 << 32 - it(t) + r | n << r | a, Xr = o + e
					} else Gr = 1 << o | n << r | a, Xr = e
				}

				function eo(e) {
					null !== e.return && (Kr(e, 1), Jr(e, 1, 0))
				}

				function to(e) {
					for (; e === Wr;) Wr = Hr[--qr], Hr[qr] = null, Yr = Hr[--qr], Hr[qr] = null;
					for (; e === Qr;) Qr = Ur[--Zr], Ur[Zr] = null, Xr = Ur[--Zr], Ur[Zr] = null, Gr = Ur[--Zr], Ur[Zr] = null
				}
				var no = null,
					ao = null,
					ro = !1,
					oo = null;

				function io(e, t) {
					var n = Ac(5, null, null, 0);
					n.elementType = "DELETED", n.stateNode = t, n.return = e, null === (t = e.deletions) ? (e.deletions = [n], e.flags |= 16) : t.push(n)
				}

				function so(e, t) {
					switch (e.tag) {
						case 5:
							var n = e.type;
							return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, no = e, ao = cr(t.firstChild), !0);
						case 6:
							return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, no = e, ao = null, !0);
						case 13:
							return null !== (t = 8 !== t.nodeType ? null : t) && (n = null !== Qr ? {
								id: Gr,
								overflow: Xr
							} : null, e.memoizedState = {
								dehydrated: t,
								treeContext: n,
								retryLane: 1073741824
							}, (n = Ac(18, null, null, 0)).stateNode = t, n.return = e, e.child = n, no = e, ao = null, !0);
						default:
							return !1
					}
				}

				function lo(e) {
					return 0 != (1 & e.mode) && 0 == (128 & e.flags)
				}

				function co(e) {
					if (ro) {
						var t = ao;
						if (t) {
							var n = t;
							if (!so(e, t)) {
								if (lo(e)) throw Error(o(418));
								t = cr(n.nextSibling);
								var a = no;
								t && so(e, t) ? io(a, n) : (e.flags = -4097 & e.flags | 2, ro = !1, no = e)
							}
						} else {
							if (lo(e)) throw Error(o(418));
							e.flags = -4097 & e.flags | 2, ro = !1, no = e
						}
					}
				}

				function uo(e) {
					for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
					no = e
				}

				function ho(e) {
					if (e !== no) return !1;
					if (!ro) return uo(e), ro = !0, !1;
					var t;
					if ((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !nr(e.type, e.memoizedProps)), t && (t = ao)) {
						if (lo(e)) throw fo(), Error(o(418));
						for (; t;) io(e, t), t = cr(t.nextSibling)
					}
					if (uo(e), 13 === e.tag) {
						if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(o(317));
						e: {
							for (e = e.nextSibling, t = 0; e;) {
								if (8 === e.nodeType) {
									var n = e.data;
									if ("/$" === n) {
										if (0 === t) {
											ao = cr(e.nextSibling);
											break e
										}
										t--
									} else "$" !== n && "$!" !== n && "$?" !== n || t++
								}
								e = e.nextSibling
							}
							ao = null
						}
					} else ao = no ? cr(e.stateNode.nextSibling) : null;
					return !0
				}

				function fo() {
					for (var e = ao; e;) e = cr(e.nextSibling)
				}

				function po() {
					ao = no = null, ro = !1
				}

				function mo(e) {
					null === oo ? oo = [e] : oo.push(e)
				}
				var go = x.ReactCurrentBatchConfig;

				function yo(e, t) {
					if (e && e.defaultProps) {
						for (var n in t = F({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
						return t
					}
					return t
				}
				var bo = kr(null),
					vo = null,
					xo = null,
					wo = null;

				function To() {
					wo = xo = vo = null
				}

				function _o(e) {
					var t = bo.current;
					Pr(bo), e._currentValue = t
				}

				function ko(e, t, n) {
					for (; null !== e;) {
						var a = e.alternate;
						if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== a && (a.childLanes |= t)) : null !== a && (a.childLanes & t) !== t && (a.childLanes |= t), e === n) break;
						e = e.return
					}
				}

				function Po(e, t) {
					vo = e, wo = xo = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 != (e.lanes & t) && (xs = !0), e.firstContext = null)
				}

				function Eo(e) {
					var t = e._currentValue;
					if (wo !== e)
						if (e = {
								context: e,
								memoizedValue: t,
								next: null
							}, null === xo) {
							if (null === vo) throw Error(o(308));
							xo = e, vo.dependencies = {
								lanes: 0,
								firstContext: e
							}
						} else xo = xo.next = e;
					return t
				}
				var So = null;

				function Co(e) {
					null === So ? So = [e] : So.push(e)
				}

				function Mo(e, t, n, a) {
					var r = t.interleaved;
					return null === r ? (n.next = n, Co(t)) : (n.next = r.next, r.next = n), t.interleaved = n, No(e, a)
				}

				function No(e, t) {
					e.lanes |= t;
					var n = e.alternate;
					for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;) e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return;
					return 3 === n.tag ? n.stateNode : null
				}
				var $o = !1;

				function Ao(e) {
					e.updateQueue = {
						baseState: e.memoizedState,
						firstBaseUpdate: null,
						lastBaseUpdate: null,
						shared: {
							pending: null,
							interleaved: null,
							lanes: 0
						},
						effects: null
					}
				}

				function Io(e, t) {
					e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
						baseState: e.baseState,
						firstBaseUpdate: e.firstBaseUpdate,
						lastBaseUpdate: e.lastBaseUpdate,
						shared: e.shared,
						effects: e.effects
					})
				}

				function Oo(e, t) {
					return {
						eventTime: e,
						lane: t,
						tag: 0,
						payload: null,
						callback: null,
						next: null
					}
				}

				function Ro(e, t, n) {
					var a = e.updateQueue;
					if (null === a) return null;
					if (a = a.shared, 0 != (2 & Ml)) {
						var r = a.pending;
						return null === r ? t.next = t : (t.next = r.next, r.next = t), a.pending = t, No(e, n)
					}
					return null === (r = a.interleaved) ? (t.next = t, Co(a)) : (t.next = r.next, r.next = t), a.interleaved = t, No(e, n)
				}

				function Do(e, t, n) {
					if (null !== (t = t.updateQueue) && (t = t.shared, 0 != (4194240 & n))) {
						var a = t.lanes;
						n |= a &= e.pendingLanes, t.lanes = n, bt(e, n)
					}
				}

				function Fo(e, t) {
					var n = e.updateQueue,
						a = e.alternate;
					if (null !== a && n === (a = a.updateQueue)) {
						var r = null,
							o = null;
						if (null !== (n = n.firstBaseUpdate)) {
							do {
								var i = {
									eventTime: n.eventTime,
									lane: n.lane,
									tag: n.tag,
									payload: n.payload,
									callback: n.callback,
									next: null
								};
								null === o ? r = o = i : o = o.next = i, n = n.next
							} while (null !== n);
							null === o ? r = o = t : o = o.next = t
						} else r = o = t;
						return n = {
							baseState: a.baseState,
							firstBaseUpdate: r,
							lastBaseUpdate: o,
							shared: a.shared,
							effects: a.effects
						}, void(e.updateQueue = n)
					}
					null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
				}

				function Lo(e, t, n, a) {
					var r = e.updateQueue;
					$o = !1;
					var o = r.firstBaseUpdate,
						i = r.lastBaseUpdate,
						s = r.shared.pending;
					if (null !== s) {
						r.shared.pending = null;
						var l = s,
							c = l.next;
						l.next = null, null === i ? o = c : i.next = c, i = l;
						var u = e.alternate;
						null !== u && ((s = (u = u.updateQueue).lastBaseUpdate) !== i && (null === s ? u.firstBaseUpdate = c : s.next = c, u.lastBaseUpdate = l))
					}
					if (null !== o) {
						var d = r.baseState;
						for (i = 0, u = c = l = null, s = o;;) {
							var h = s.lane,
								f = s.eventTime;
							if ((a & h) === h) {
								null !== u && (u = u.next = {
									eventTime: f,
									lane: 0,
									tag: s.tag,
									payload: s.payload,
									callback: s.callback,
									next: null
								});
								e: {
									var p = e,
										m = s;
									switch (h = t, f = n, m.tag) {
										case 1:
											if ("function" == typeof(p = m.payload)) {
												d = p.call(f, d, h);
												break e
											}
											d = p;
											break e;
										case 3:
											p.flags = -65537 & p.flags | 128;
										case 0:
											if (null == (h = "function" == typeof(p = m.payload) ? p.call(f, d, h) : p)) break e;
											d = F({}, d, h);
											break e;
										case 2:
											$o = !0
									}
								}
								null !== s.callback && 0 !== s.lane && (e.flags |= 64, null === (h = r.effects) ? r.effects = [s] : h.push(s))
							} else f = {
								eventTime: f,
								lane: h,
								tag: s.tag,
								payload: s.payload,
								callback: s.callback,
								next: null
							}, null === u ? (c = u = f, l = d) : u = u.next = f, i |= h;
							if (null === (s = s.next)) {
								if (null === (s = r.shared.pending)) break;
								s = (h = s).next, h.next = null, r.lastBaseUpdate = h, r.shared.pending = null
							}
						}
						if (null === u && (l = d), r.baseState = l, r.firstBaseUpdate = c, r.lastBaseUpdate = u, null !== (t = r.shared.interleaved)) {
							r = t;
							do {
								i |= r.lane, r = r.next
							} while (r !== t)
						} else null === o && (r.shared.lanes = 0);
						Fl |= i, e.lanes = i, e.memoizedState = d
					}
				}

				function zo(e, t, n) {
					if (e = t.effects, t.effects = null, null !== e)
						for (t = 0; t < e.length; t++) {
							var a = e[t],
								r = a.callback;
							if (null !== r) {
								if (a.callback = null, a = n, "function" != typeof r) throw Error(o(191, r));
								r.call(a)
							}
						}
				}
				var Vo = (new a.Component).refs;

				function Bo(e, t, n, a) {
					n = null == (n = n(a, t = e.memoizedState)) ? t : F({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n)
				}
				var jo = {
					isMounted: function(e) {
						return !!(e = e._reactInternals) && je(e) === e
					},
					enqueueSetState: function(e, t, n) {
						e = e._reactInternals;
						var a = tc(),
							r = nc(e),
							o = Oo(a, r);
						o.payload = t, null != n && (o.callback = n), null !== (t = Ro(e, o, r)) && (ac(t, e, r, a), Do(t, e, r))
					},
					enqueueReplaceState: function(e, t, n) {
						e = e._reactInternals;
						var a = tc(),
							r = nc(e),
							o = Oo(a, r);
						o.tag = 1, o.payload = t, null != n && (o.callback = n), null !== (t = Ro(e, o, r)) && (ac(t, e, r, a), Do(t, e, r))
					},
					enqueueForceUpdate: function(e, t) {
						e = e._reactInternals;
						var n = tc(),
							a = nc(e),
							r = Oo(n, a);
						r.tag = 2, null != t && (r.callback = t), null !== (t = Ro(e, r, a)) && (ac(t, e, a, n), Do(t, e, a))
					}
				};

				function Ho(e, t, n, a, r, o, i) {
					return "function" == typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(a, o, i) : !t.prototype || !t.prototype.isPureReactComponent || (!la(n, a) || !la(r, o))
				}

				function qo(e, t, n) {
					var a = !1,
						r = Sr,
						o = t.contextType;
					return "object" == typeof o && null !== o ? o = Eo(o) : (r = Ar(t) ? Nr : Cr.current, o = (a = null != (a = t.contextTypes)) ? $r(e, r) : Sr), t = new t(n, o), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = jo, e.stateNode = t, t._reactInternals = e, a && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = r, e.__reactInternalMemoizedMaskedChildContext = o), t
				}

				function Wo(e, t, n, a) {
					e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, a), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, a), t.state !== e && jo.enqueueReplaceState(t, t.state, null)
				}

				function Yo(e, t, n, a) {
					var r = e.stateNode;
					r.props = n, r.state = e.memoizedState, r.refs = Vo, Ao(e);
					var o = t.contextType;
					"object" == typeof o && null !== o ? r.context = Eo(o) : (o = Ar(t) ? Nr : Cr.current, r.context = $r(e, o)), r.state = e.memoizedState, "function" == typeof(o = t.getDerivedStateFromProps) && (Bo(e, t, o, n), r.state = e.memoizedState), "function" == typeof t.getDerivedStateFromProps || "function" == typeof r.getSnapshotBeforeUpdate || "function" != typeof r.UNSAFE_componentWillMount && "function" != typeof r.componentWillMount || (t = r.state, "function" == typeof r.componentWillMount && r.componentWillMount(), "function" == typeof r.UNSAFE_componentWillMount && r.UNSAFE_componentWillMount(), t !== r.state && jo.enqueueReplaceState(r, r.state, null), Lo(e, n, r, a), r.state = e.memoizedState), "function" == typeof r.componentDidMount && (e.flags |= 4194308)
				}

				function Uo(e, t, n) {
					if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
						if (n._owner) {
							if (n = n._owner) {
								if (1 !== n.tag) throw Error(o(309));
								var a = n.stateNode
							}
							if (!a) throw Error(o(147, e));
							var r = a,
								i = "" + e;
							return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === i ? t.ref : (t = function(e) {
								var t = r.refs;
								t === Vo && (t = r.refs = {}), null === e ? delete t[i] : t[i] = e
							}, t._stringRef = i, t)
						}
						if ("string" != typeof e) throw Error(o(284));
						if (!n._owner) throw Error(o(290, e))
					}
					return e
				}

				function Zo(e, t) {
					throw e = Object.prototype.toString.call(t), Error(o(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
				}

				function Qo(e) {
					return (0, e._init)(e._payload)
				}

				function Go(e) {
					function t(t, n) {
						if (e) {
							var a = t.deletions;
							null === a ? (t.deletions = [n], t.flags |= 16) : a.push(n)
						}
					}

					function n(n, a) {
						if (!e) return null;
						for (; null !== a;) t(n, a), a = a.sibling;
						return null
					}

					function a(e, t) {
						for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
						return e
					}

					function r(e, t) {
						return (e = Oc(e, t)).index = 0, e.sibling = null, e
					}

					function i(t, n, a) {
						return t.index = a, e ? null !== (a = t.alternate) ? (a = a.index) < n ? (t.flags |= 2, n) : a : (t.flags |= 2, n) : (t.flags |= 1048576, n)
					}

					function s(t) {
						return e && null === t.alternate && (t.flags |= 2), t
					}

					function l(e, t, n, a) {
						return null === t || 6 !== t.tag ? ((t = Lc(n, e.mode, a)).return = e, t) : ((t = r(t, n)).return = e, t)
					}

					function c(e, t, n, a) {
						var o = n.type;
						return o === _ ? d(e, t, n.props.children, a, n.key) : null !== t && (t.elementType === o || "object" == typeof o && null !== o && o.$$typeof === A && Qo(o) === t.type) ? ((a = r(t, n.props)).ref = Uo(e, t, n), a.return = e, a) : ((a = Rc(n.type, n.key, n.props, null, e.mode, a)).ref = Uo(e, t, n), a.return = e, a)
					}

					function u(e, t, n, a) {
						return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = zc(n, e.mode, a)).return = e, t) : ((t = r(t, n.children || [])).return = e, t)
					}

					function d(e, t, n, a, o) {
						return null === t || 7 !== t.tag ? ((t = Dc(n, e.mode, a, o)).return = e, t) : ((t = r(t, n)).return = e, t)
					}

					function h(e, t, n) {
						if ("string" == typeof t && "" !== t || "number" == typeof t) return (t = Lc("" + t, e.mode, n)).return = e, t;
						if ("object" == typeof t && null !== t) {
							switch (t.$$typeof) {
								case w:
									return (n = Rc(t.type, t.key, t.props, null, e.mode, n)).ref = Uo(e, null, t), n.return = e, n;
								case T:
									return (t = zc(t, e.mode, n)).return = e, t;
								case A:
									return h(e, (0, t._init)(t._payload), n)
							}
							if (te(t) || R(t)) return (t = Dc(t, e.mode, n, null)).return = e, t;
							Zo(e, t)
						}
						return null
					}

					function f(e, t, n, a) {
						var r = null !== t ? t.key : null;
						if ("string" == typeof n && "" !== n || "number" == typeof n) return null !== r ? null : l(e, t, "" + n, a);
						if ("object" == typeof n && null !== n) {
							switch (n.$$typeof) {
								case w:
									return n.key === r ? c(e, t, n, a) : null;
								case T:
									return n.key === r ? u(e, t, n, a) : null;
								case A:
									return f(e, t, (r = n._init)(n._payload), a)
							}
							if (te(n) || R(n)) return null !== r ? null : d(e, t, n, a, null);
							Zo(e, n)
						}
						return null
					}

					function p(e, t, n, a, r) {
						if ("string" == typeof a && "" !== a || "number" == typeof a) return l(t, e = e.get(n) || null, "" + a, r);
						if ("object" == typeof a && null !== a) {
							switch (a.$$typeof) {
								case w:
									return c(t, e = e.get(null === a.key ? n : a.key) || null, a, r);
								case T:
									return u(t, e = e.get(null === a.key ? n : a.key) || null, a, r);
								case A:
									return p(e, t, n, (0, a._init)(a._payload), r)
							}
							if (te(a) || R(a)) return d(t, e = e.get(n) || null, a, r, null);
							Zo(t, a)
						}
						return null
					}

					function m(r, o, s, l) {
						for (var c = null, u = null, d = o, m = o = 0, g = null; null !== d && m < s.length; m++) {
							d.index > m ? (g = d, d = null) : g = d.sibling;
							var y = f(r, d, s[m], l);
							if (null === y) {
								null === d && (d = g);
								break
							}
							e && d && null === y.alternate && t(r, d), o = i(y, o, m), null === u ? c = y : u.sibling = y, u = y, d = g
						}
						if (m === s.length) return n(r, d), ro && Kr(r, m), c;
						if (null === d) {
							for (; m < s.length; m++) null !== (d = h(r, s[m], l)) && (o = i(d, o, m), null === u ? c = d : u.sibling = d, u = d);
							return ro && Kr(r, m), c
						}
						for (d = a(r, d); m < s.length; m++) null !== (g = p(d, r, m, s[m], l)) && (e && null !== g.alternate && d.delete(null === g.key ? m : g.key), o = i(g, o, m), null === u ? c = g : u.sibling = g, u = g);
						return e && d.forEach((function(e) {
							return t(r, e)
						})), ro && Kr(r, m), c
					}

					function g(r, s, l, c) {
						var u = R(l);
						if ("function" != typeof u) throw Error(o(150));
						if (null == (l = u.call(l))) throw Error(o(151));
						for (var d = u = null, m = s, g = s = 0, y = null, b = l.next(); null !== m && !b.done; g++, b = l.next()) {
							m.index > g ? (y = m, m = null) : y = m.sibling;
							var v = f(r, m, b.value, c);
							if (null === v) {
								null === m && (m = y);
								break
							}
							e && m && null === v.alternate && t(r, m), s = i(v, s, g), null === d ? u = v : d.sibling = v, d = v, m = y
						}
						if (b.done) return n(r, m), ro && Kr(r, g), u;
						if (null === m) {
							for (; !b.done; g++, b = l.next()) null !== (b = h(r, b.value, c)) && (s = i(b, s, g), null === d ? u = b : d.sibling = b, d = b);
							return ro && Kr(r, g), u
						}
						for (m = a(r, m); !b.done; g++, b = l.next()) null !== (b = p(m, r, g, b.value, c)) && (e && null !== b.alternate && m.delete(null === b.key ? g : b.key), s = i(b, s, g), null === d ? u = b : d.sibling = b, d = b);
						return e && m.forEach((function(e) {
							return t(r, e)
						})), ro && Kr(r, g), u
					}
					return function e(a, o, i, l) {
						if ("object" == typeof i && null !== i && i.type === _ && null === i.key && (i = i.props.children), "object" == typeof i && null !== i) {
							switch (i.$$typeof) {
								case w:
									e: {
										for (var c = i.key, u = o; null !== u;) {
											if (u.key === c) {
												if ((c = i.type) === _) {
													if (7 === u.tag) {
														n(a, u.sibling), (o = r(u, i.props.children)).return = a, a = o;
														break e
													}
												} else if (u.elementType === c || "object" == typeof c && null !== c && c.$$typeof === A && Qo(c) === u.type) {
													n(a, u.sibling), (o = r(u, i.props)).ref = Uo(a, u, i), o.return = a, a = o;
													break e
												}
												n(a, u);
												break
											}
											t(a, u), u = u.sibling
										}
										i.type === _ ? ((o = Dc(i.props.children, a.mode, l, i.key)).return = a, a = o) : ((l = Rc(i.type, i.key, i.props, null, a.mode, l)).ref = Uo(a, o, i), l.return = a, a = l)
									}
									return s(a);
								case T:
									e: {
										for (u = i.key; null !== o;) {
											if (o.key === u) {
												if (4 === o.tag && o.stateNode.containerInfo === i.containerInfo && o.stateNode.implementation === i.implementation) {
													n(a, o.sibling), (o = r(o, i.children || [])).return = a, a = o;
													break e
												}
												n(a, o);
												break
											}
											t(a, o), o = o.sibling
										}(o = zc(i, a.mode, l)).return = a,
										a = o
									}
									return s(a);
								case A:
									return e(a, o, (u = i._init)(i._payload), l)
							}
							if (te(i)) return m(a, o, i, l);
							if (R(i)) return g(a, o, i, l);
							Zo(a, i)
						}
						return "string" == typeof i && "" !== i || "number" == typeof i ? (i = "" + i, null !== o && 6 === o.tag ? (n(a, o.sibling), (o = r(o, i)).return = a, a = o) : (n(a, o), (o = Lc(i, a.mode, l)).return = a, a = o), s(a)) : n(a, o)
					}
				}
				var Xo = Go(!0),
					Ko = Go(!1),
					Jo = {},
					ei = kr(Jo),
					ti = kr(Jo),
					ni = kr(Jo);

				function ai(e) {
					if (e === Jo) throw Error(o(174));
					return e
				}

				function ri(e, t) {
					switch (Er(ni, t), Er(ti, e), Er(ei, Jo), e = t.nodeType) {
						case 9:
						case 11:
							t = (t = t.documentElement) ? t.namespaceURI : le(null, "");
							break;
						default:
							t = le(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
					}
					Pr(ei), Er(ei, t)
				}

				function oi() {
					Pr(ei), Pr(ti), Pr(ni)
				}

				function ii(e) {
					ai(ni.current);
					var t = ai(ei.current),
						n = le(t, e.type);
					t !== n && (Er(ti, e), Er(ei, n))
				}

				function si(e) {
					ti.current === e && (Pr(ei), Pr(ti))
				}
				var li = kr(0);

				function ci(e) {
					for (var t = e; null !== t;) {
						if (13 === t.tag) {
							var n = t.memoizedState;
							if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t
						} else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
							if (0 != (128 & t.flags)) return t
						} else if (null !== t.child) {
							t.child.return = t, t = t.child;
							continue
						}
						if (t === e) break;
						for (; null === t.sibling;) {
							if (null === t.return || t.return === e) return null;
							t = t.return
						}
						t.sibling.return = t.return, t = t.sibling
					}
					return null
				}
				var ui = [];

				function di() {
					for (var e = 0; e < ui.length; e++) ui[e]._workInProgressVersionPrimary = null;
					ui.length = 0
				}
				var hi = x.ReactCurrentDispatcher,
					fi = x.ReactCurrentBatchConfig,
					pi = 0,
					mi = null,
					gi = null,
					yi = null,
					bi = !1,
					vi = !1,
					xi = 0,
					wi = 0;

				function Ti() {
					throw Error(o(321))
				}

				function _i(e, t) {
					if (null === t) return !1;
					for (var n = 0; n < t.length && n < e.length; n++)
						if (!sa(e[n], t[n])) return !1;
					return !0
				}

				function ki(e, t, n, a, r, i) {
					if (pi = i, mi = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, hi.current = null === e || null === e.memoizedState ? ss : ls, e = n(a, r), vi) {
						i = 0;
						do {
							if (vi = !1, xi = 0, 25 <= i) throw Error(o(301));
							i += 1, yi = gi = null, t.updateQueue = null, hi.current = cs, e = n(a, r)
						} while (vi)
					}
					if (hi.current = is, t = null !== gi && null !== gi.next, pi = 0, yi = gi = mi = null, bi = !1, t) throw Error(o(300));
					return e
				}

				function Pi() {
					var e = 0 !== xi;
					return xi = 0, e
				}

				function Ei() {
					var e = {
						memoizedState: null,
						baseState: null,
						baseQueue: null,
						queue: null,
						next: null
					};
					return null === yi ? mi.memoizedState = yi = e : yi = yi.next = e, yi
				}

				function Si() {
					if (null === gi) {
						var e = mi.alternate;
						e = null !== e ? e.memoizedState : null
					} else e = gi.next;
					var t = null === yi ? mi.memoizedState : yi.next;
					if (null !== t) yi = t, gi = e;
					else {
						if (null === e) throw Error(o(310));
						e = {
							memoizedState: (gi = e).memoizedState,
							baseState: gi.baseState,
							baseQueue: gi.baseQueue,
							queue: gi.queue,
							next: null
						}, null === yi ? mi.memoizedState = yi = e : yi = yi.next = e
					}
					return yi
				}

				function Ci(e, t) {
					return "function" == typeof t ? t(e) : t
				}

				function Mi(e) {
					var t = Si(),
						n = t.queue;
					if (null === n) throw Error(o(311));
					n.lastRenderedReducer = e;
					var a = gi,
						r = a.baseQueue,
						i = n.pending;
					if (null !== i) {
						if (null !== r) {
							var s = r.next;
							r.next = i.next, i.next = s
						}
						a.baseQueue = r = i, n.pending = null
					}
					if (null !== r) {
						i = r.next, a = a.baseState;
						var l = s = null,
							c = null,
							u = i;
						do {
							var d = u.lane;
							if ((pi & d) === d) null !== c && (c = c.next = {
								lane: 0,
								action: u.action,
								hasEagerState: u.hasEagerState,
								eagerState: u.eagerState,
								next: null
							}), a = u.hasEagerState ? u.eagerState : e(a, u.action);
							else {
								var h = {
									lane: d,
									action: u.action,
									hasEagerState: u.hasEagerState,
									eagerState: u.eagerState,
									next: null
								};
								null === c ? (l = c = h, s = a) : c = c.next = h, mi.lanes |= d, Fl |= d
							}
							u = u.next
						} while (null !== u && u !== i);
						null === c ? s = a : c.next = l, sa(a, t.memoizedState) || (xs = !0), t.memoizedState = a, t.baseState = s, t.baseQueue = c, n.lastRenderedState = a
					}
					if (null !== (e = n.interleaved)) {
						r = e;
						do {
							i = r.lane, mi.lanes |= i, Fl |= i, r = r.next
						} while (r !== e)
					} else null === r && (n.lanes = 0);
					return [t.memoizedState, n.dispatch]
				}

				function Ni(e) {
					var t = Si(),
						n = t.queue;
					if (null === n) throw Error(o(311));
					n.lastRenderedReducer = e;
					var a = n.dispatch,
						r = n.pending,
						i = t.memoizedState;
					if (null !== r) {
						n.pending = null;
						var s = r = r.next;
						do {
							i = e(i, s.action), s = s.next
						} while (s !== r);
						sa(i, t.memoizedState) || (xs = !0), t.memoizedState = i, null === t.baseQueue && (t.baseState = i), n.lastRenderedState = i
					}
					return [i, a]
				}

				function $i() {}

				function Ai(e, t) {
					var n = mi,
						a = Si(),
						r = t(),
						i = !sa(a.memoizedState, r);
					if (i && (a.memoizedState = r, xs = !0), a = a.queue, qi(Ri.bind(null, n, a, e), [e]), a.getSnapshot !== t || i || null !== yi && 1 & yi.memoizedState.tag) {
						if (n.flags |= 2048, zi(9, Oi.bind(null, n, a, r, t), void 0, null), null === Nl) throw Error(o(349));
						0 != (30 & pi) || Ii(n, t, r)
					}
					return r
				}

				function Ii(e, t, n) {
					e.flags |= 16384, e = {
						getSnapshot: t,
						value: n
					}, null === (t = mi.updateQueue) ? (t = {
						lastEffect: null,
						stores: null
					}, mi.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
				}

				function Oi(e, t, n, a) {
					t.value = n, t.getSnapshot = a, Di(t) && Fi(e)
				}

				function Ri(e, t, n) {
					return n((function() {
						Di(t) && Fi(e)
					}))
				}

				function Di(e) {
					var t = e.getSnapshot;
					e = e.value;
					try {
						var n = t();
						return !sa(e, n)
					} catch (e) {
						return !0
					}
				}

				function Fi(e) {
					var t = No(e, 1);
					null !== t && ac(t, e, 1, -1)
				}

				function Li(e) {
					var t = Ei();
					return "function" == typeof e && (e = e()), t.memoizedState = t.baseState = e, e = {
						pending: null,
						interleaved: null,
						lanes: 0,
						dispatch: null,
						lastRenderedReducer: Ci,
						lastRenderedState: e
					}, t.queue = e, e = e.dispatch = ns.bind(null, mi, e), [t.memoizedState, e]
				}

				function zi(e, t, n, a) {
					return e = {
						tag: e,
						create: t,
						destroy: n,
						deps: a,
						next: null
					}, null === (t = mi.updateQueue) ? (t = {
						lastEffect: null,
						stores: null
					}, mi.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (a = n.next, n.next = e, e.next = a, t.lastEffect = e), e
				}

				function Vi() {
					return Si().memoizedState
				}

				function Bi(e, t, n, a) {
					var r = Ei();
					mi.flags |= e, r.memoizedState = zi(1 | t, n, void 0, void 0 === a ? null : a)
				}

				function ji(e, t, n, a) {
					var r = Si();
					a = void 0 === a ? null : a;
					var o = void 0;
					if (null !== gi) {
						var i = gi.memoizedState;
						if (o = i.destroy, null !== a && _i(a, i.deps)) return void(r.memoizedState = zi(t, n, o, a))
					}
					mi.flags |= e, r.memoizedState = zi(1 | t, n, o, a)
				}

				function Hi(e, t) {
					return Bi(8390656, 8, e, t)
				}

				function qi(e, t) {
					return ji(2048, 8, e, t)
				}

				function Wi(e, t) {
					return ji(4, 2, e, t)
				}

				function Yi(e, t) {
					return ji(4, 4, e, t)
				}

				function Ui(e, t) {
					return "function" == typeof t ? (e = e(), t(e), function() {
						t(null)
					}) : null != t ? (e = e(), t.current = e, function() {
						t.current = null
					}) : void 0
				}

				function Zi(e, t, n) {
					return n = null != n ? n.concat([e]) : null, ji(4, 4, Ui.bind(null, t, e), n)
				}

				function Qi() {}

				function Gi(e, t) {
					var n = Si();
					t = void 0 === t ? null : t;
					var a = n.memoizedState;
					return null !== a && null !== t && _i(t, a[1]) ? a[0] : (n.memoizedState = [e, t], e)
				}

				function Xi(e, t) {
					var n = Si();
					t = void 0 === t ? null : t;
					var a = n.memoizedState;
					return null !== a && null !== t && _i(t, a[1]) ? a[0] : (e = e(), n.memoizedState = [e, t], e)
				}

				function Ki(e, t, n) {
					return 0 == (21 & pi) ? (e.baseState && (e.baseState = !1, xs = !0), e.memoizedState = n) : (sa(n, t) || (n = mt(), mi.lanes |= n, Fl |= n, e.baseState = !0), t)
				}

				function Ji(e, t) {
					var n = vt;
					vt = 0 !== n && 4 > n ? n : 4, e(!0);
					var a = fi.transition;
					fi.transition = {};
					try {
						e(!1), t()
					} finally {
						vt = n, fi.transition = a
					}
				}

				function es() {
					return Si().memoizedState
				}

				function ts(e, t, n) {
					var a = nc(e);
					if (n = {
							lane: a,
							action: n,
							hasEagerState: !1,
							eagerState: null,
							next: null
						}, as(e)) rs(t, n);
					else if (null !== (n = Mo(e, t, n, a))) {
						ac(n, e, a, tc()), os(n, t, a)
					}
				}

				function ns(e, t, n) {
					var a = nc(e),
						r = {
							lane: a,
							action: n,
							hasEagerState: !1,
							eagerState: null,
							next: null
						};
					if (as(e)) rs(t, r);
					else {
						var o = e.alternate;
						if (0 === e.lanes && (null === o || 0 === o.lanes) && null !== (o = t.lastRenderedReducer)) try {
							var i = t.lastRenderedState,
								s = o(i, n);
							if (r.hasEagerState = !0, r.eagerState = s, sa(s, i)) {
								var l = t.interleaved;
								return null === l ? (r.next = r, Co(t)) : (r.next = l.next, l.next = r), void(t.interleaved = r)
							}
						} catch (e) {}
						null !== (n = Mo(e, t, r, a)) && (ac(n, e, a, r = tc()), os(n, t, a))
					}
				}

				function as(e) {
					var t = e.alternate;
					return e === mi || null !== t && t === mi
				}

				function rs(e, t) {
					vi = bi = !0;
					var n = e.pending;
					null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
				}

				function os(e, t, n) {
					if (0 != (4194240 & n)) {
						var a = t.lanes;
						n |= a &= e.pendingLanes, t.lanes = n, bt(e, n)
					}
				}
				var is = {
						readContext: Eo,
						useCallback: Ti,
						useContext: Ti,
						useEffect: Ti,
						useImperativeHandle: Ti,
						useInsertionEffect: Ti,
						useLayoutEffect: Ti,
						useMemo: Ti,
						useReducer: Ti,
						useRef: Ti,
						useState: Ti,
						useDebugValue: Ti,
						useDeferredValue: Ti,
						useTransition: Ti,
						useMutableSource: Ti,
						useSyncExternalStore: Ti,
						useId: Ti,
						unstable_isNewReconciler: !1
					},
					ss = {
						readContext: Eo,
						useCallback: function(e, t) {
							return Ei().memoizedState = [e, void 0 === t ? null : t], e
						},
						useContext: Eo,
						useEffect: Hi,
						useImperativeHandle: function(e, t, n) {
							return n = null != n ? n.concat([e]) : null, Bi(4194308, 4, Ui.bind(null, t, e), n)
						},
						useLayoutEffect: function(e, t) {
							return Bi(4194308, 4, e, t)
						},
						useInsertionEffect: function(e, t) {
							return Bi(4, 2, e, t)
						},
						useMemo: function(e, t) {
							var n = Ei();
							return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
						},
						useReducer: function(e, t, n) {
							var a = Ei();
							return t = void 0 !== n ? n(t) : t, a.memoizedState = a.baseState = t, e = {
								pending: null,
								interleaved: null,
								lanes: 0,
								dispatch: null,
								lastRenderedReducer: e,
								lastRenderedState: t
							}, a.queue = e, e = e.dispatch = ts.bind(null, mi, e), [a.memoizedState, e]
						},
						useRef: function(e) {
							return e = {
								current: e
							}, Ei().memoizedState = e
						},
						useState: Li,
						useDebugValue: Qi,
						useDeferredValue: function(e) {
							return Ei().memoizedState = e
						},
						useTransition: function() {
							var e = Li(!1),
								t = e[0];
							return e = Ji.bind(null, e[1]), Ei().memoizedState = e, [t, e]
						},
						useMutableSource: function() {},
						useSyncExternalStore: function(e, t, n) {
							var a = mi,
								r = Ei();
							if (ro) {
								if (void 0 === n) throw Error(o(407));
								n = n()
							} else {
								if (n = t(), null === Nl) throw Error(o(349));
								0 != (30 & pi) || Ii(a, t, n)
							}
							r.memoizedState = n;
							var i = {
								value: n,
								getSnapshot: t
							};
							return r.queue = i, Hi(Ri.bind(null, a, i, e), [e]), a.flags |= 2048, zi(9, Oi.bind(null, a, i, n, t), void 0, null), n
						},
						useId: function() {
							var e = Ei(),
								t = Nl.identifierPrefix;
							if (ro) {
								var n = Xr;
								t = ":" + t + "R" + (n = (Gr & ~(1 << 32 - it(Gr) - 1)).toString(32) + n), 0 < (n = xi++) && (t += "H" + n.toString(32)), t += ":"
							} else t = ":" + t + "r" + (n = wi++).toString(32) + ":";
							return e.memoizedState = t
						},
						unstable_isNewReconciler: !1
					},
					ls = {
						readContext: Eo,
						useCallback: Gi,
						useContext: Eo,
						useEffect: qi,
						useImperativeHandle: Zi,
						useInsertionEffect: Wi,
						useLayoutEffect: Yi,
						useMemo: Xi,
						useReducer: Mi,
						useRef: Vi,
						useState: function() {
							return Mi(Ci)
						},
						useDebugValue: Qi,
						useDeferredValue: function(e) {
							return Ki(Si(), gi.memoizedState, e)
						},
						useTransition: function() {
							return [Mi(Ci)[0], Si().memoizedState]
						},
						useMutableSource: $i,
						useSyncExternalStore: Ai,
						useId: es,
						unstable_isNewReconciler: !1
					},
					cs = {
						readContext: Eo,
						useCallback: Gi,
						useContext: Eo,
						useEffect: qi,
						useImperativeHandle: Zi,
						useInsertionEffect: Wi,
						useLayoutEffect: Yi,
						useMemo: Xi,
						useReducer: Ni,
						useRef: Vi,
						useState: function() {
							return Ni(Ci)
						},
						useDebugValue: Qi,
						useDeferredValue: function(e) {
							var t = Si();
							return null === gi ? t.memoizedState = e : Ki(t, gi.memoizedState, e)
						},
						useTransition: function() {
							return [Ni(Ci)[0], Si().memoizedState]
						},
						useMutableSource: $i,
						useSyncExternalStore: Ai,
						useId: es,
						unstable_isNewReconciler: !1
					};

				function us(e, t) {
					try {
						var n = "",
							a = t;
						do {
							n += B(a), a = a.return
						} while (a);
						var r = n
					} catch (e) {
						r = "\nError generating stack: " + e.message + "\n" + e.stack
					}
					return {
						value: e,
						source: t,
						stack: r,
						digest: null
					}
				}

				function ds(e, t, n) {
					return {
						value: e,
						source: null,
						stack: null != n ? n : null,
						digest: null != t ? t : null
					}
				}

				function hs(e, t) {
					try {
						console.error(t.value)
					} catch (e) {
						setTimeout((function() {
							throw e
						}))
					}
				}
				var fs = "function" == typeof WeakMap ? WeakMap : Map;

				function ps(e, t, n) {
					(n = Oo(-1, n)).tag = 3, n.payload = {
						element: null
					};
					var a = t.value;
					return n.callback = function() {
						Wl || (Wl = !0, Yl = a), hs(0, t)
					}, n
				}

				function ms(e, t, n) {
					(n = Oo(-1, n)).tag = 3;
					var a = e.type.getDerivedStateFromError;
					if ("function" == typeof a) {
						var r = t.value;
						n.payload = function() {
							return a(r)
						}, n.callback = function() {
							hs(0, t)
						}
					}
					var o = e.stateNode;
					return null !== o && "function" == typeof o.componentDidCatch && (n.callback = function() {
						hs(0, t), "function" != typeof a && (null === Ul ? Ul = new Set([this]) : Ul.add(this));
						var e = t.stack;
						this.componentDidCatch(t.value, {
							componentStack: null !== e ? e : ""
						})
					}), n
				}

				function gs(e, t, n) {
					var a = e.pingCache;
					if (null === a) {
						a = e.pingCache = new fs;
						var r = new Set;
						a.set(t, r)
					} else void 0 === (r = a.get(t)) && (r = new Set, a.set(t, r));
					r.has(n) || (r.add(n), e = Ec.bind(null, e, t, n), t.then(e, e))
				}

				function ys(e) {
					do {
						var t;
						if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t) return e;
						e = e.return
					} while (null !== e);
					return null
				}

				function bs(e, t, n, a, r) {
					return 0 == (1 & e.mode) ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, 1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = Oo(-1, 1)).tag = 2, Ro(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = r, e)
				}
				var vs = x.ReactCurrentOwner,
					xs = !1;

				function ws(e, t, n, a) {
					t.child = null === e ? Ko(t, null, n, a) : Xo(t, e.child, n, a)
				}

				function Ts(e, t, n, a, r) {
					n = n.render;
					var o = t.ref;
					return Po(t, r), a = ki(e, t, n, a, o, r), n = Pi(), null === e || xs ? (ro && n && eo(t), t.flags |= 1, ws(e, t, a, r), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~r, Ws(e, t, r))
				}

				function _s(e, t, n, a, r) {
					if (null === e) {
						var o = n.type;
						return "function" != typeof o || Ic(o) || void 0 !== o.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Rc(n.type, null, a, t, t.mode, r)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = o, ks(e, t, o, a, r))
					}
					if (o = e.child, 0 == (e.lanes & r)) {
						var i = o.memoizedProps;
						if ((n = null !== (n = n.compare) ? n : la)(i, a) && e.ref === t.ref) return Ws(e, t, r)
					}
					return t.flags |= 1, (e = Oc(o, a)).ref = t.ref, e.return = t, t.child = e
				}

				function ks(e, t, n, a, r) {
					if (null !== e) {
						var o = e.memoizedProps;
						if (la(o, a) && e.ref === t.ref) {
							if (xs = !1, t.pendingProps = a = o, 0 == (e.lanes & r)) return t.lanes = e.lanes, Ws(e, t, r);
							0 != (131072 & e.flags) && (xs = !0)
						}
					}
					return Ss(e, t, n, a, r)
				}

				function Ps(e, t, n) {
					var a = t.pendingProps,
						r = a.children,
						o = null !== e ? e.memoizedState : null;
					if ("hidden" === a.mode)
						if (0 == (1 & t.mode)) t.memoizedState = {
							baseLanes: 0,
							cachePool: null,
							transitions: null
						}, Er(Ol, Il), Il |= n;
						else {
							if (0 == (1073741824 & n)) return e = null !== o ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
								baseLanes: e,
								cachePool: null,
								transitions: null
							}, t.updateQueue = null, Er(Ol, Il), Il |= e, null;
							t.memoizedState = {
								baseLanes: 0,
								cachePool: null,
								transitions: null
							}, a = null !== o ? o.baseLanes : n, Er(Ol, Il), Il |= a
						}
					else null !== o ? (a = o.baseLanes | n, t.memoizedState = null) : a = n, Er(Ol, Il), Il |= a;
					return ws(e, t, r, n), t.child
				}

				function Es(e, t) {
					var n = t.ref;
					(null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
				}

				function Ss(e, t, n, a, r) {
					var o = Ar(n) ? Nr : Cr.current;
					return o = $r(t, o), Po(t, r), n = ki(e, t, n, a, o, r), a = Pi(), null === e || xs ? (ro && a && eo(t), t.flags |= 1, ws(e, t, n, r), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~r, Ws(e, t, r))
				}

				function Cs(e, t, n, a, r) {
					if (Ar(n)) {
						var o = !0;
						Dr(t)
					} else o = !1;
					if (Po(t, r), null === t.stateNode) qs(e, t), qo(t, n, a), Yo(t, n, a, r), a = !0;
					else if (null === e) {
						var i = t.stateNode,
							s = t.memoizedProps;
						i.props = s;
						var l = i.context,
							c = n.contextType;
						"object" == typeof c && null !== c ? c = Eo(c) : c = $r(t, c = Ar(n) ? Nr : Cr.current);
						var u = n.getDerivedStateFromProps,
							d = "function" == typeof u || "function" == typeof i.getSnapshotBeforeUpdate;
						d || "function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps || (s !== a || l !== c) && Wo(t, i, a, c), $o = !1;
						var h = t.memoizedState;
						i.state = h, Lo(t, a, i, r), l = t.memoizedState, s !== a || h !== l || Mr.current || $o ? ("function" == typeof u && (Bo(t, n, u, a), l = t.memoizedState), (s = $o || Ho(t, n, s, a, h, l, c)) ? (d || "function" != typeof i.UNSAFE_componentWillMount && "function" != typeof i.componentWillMount || ("function" == typeof i.componentWillMount && i.componentWillMount(), "function" == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount()), "function" == typeof i.componentDidMount && (t.flags |= 4194308)) : ("function" == typeof i.componentDidMount && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = l), i.props = a, i.state = l, i.context = c, a = s) : ("function" == typeof i.componentDidMount && (t.flags |= 4194308), a = !1)
					} else {
						i = t.stateNode, Io(e, t), s = t.memoizedProps, c = t.type === t.elementType ? s : yo(t.type, s), i.props = c, d = t.pendingProps, h = i.context, "object" == typeof(l = n.contextType) && null !== l ? l = Eo(l) : l = $r(t, l = Ar(n) ? Nr : Cr.current);
						var f = n.getDerivedStateFromProps;
						(u = "function" == typeof f || "function" == typeof i.getSnapshotBeforeUpdate) || "function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps || (s !== d || h !== l) && Wo(t, i, a, l), $o = !1, h = t.memoizedState, i.state = h, Lo(t, a, i, r);
						var p = t.memoizedState;
						s !== d || h !== p || Mr.current || $o ? ("function" == typeof f && (Bo(t, n, f, a), p = t.memoizedState), (c = $o || Ho(t, n, c, a, h, p, l) || !1) ? (u || "function" != typeof i.UNSAFE_componentWillUpdate && "function" != typeof i.componentWillUpdate || ("function" == typeof i.componentWillUpdate && i.componentWillUpdate(a, p, l), "function" == typeof i.UNSAFE_componentWillUpdate && i.UNSAFE_componentWillUpdate(a, p, l)), "function" == typeof i.componentDidUpdate && (t.flags |= 4), "function" == typeof i.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" != typeof i.componentDidUpdate || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), "function" != typeof i.getSnapshotBeforeUpdate || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = p), i.props = a, i.state = p, i.context = l, a = c) : ("function" != typeof i.componentDidUpdate || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), "function" != typeof i.getSnapshotBeforeUpdate || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), a = !1)
					}
					return Ms(e, t, n, a, o, r)
				}

				function Ms(e, t, n, a, r, o) {
					Es(e, t);
					var i = 0 != (128 & t.flags);
					if (!a && !i) return r && Fr(t, n, !1), Ws(e, t, o);
					a = t.stateNode, vs.current = t;
					var s = i && "function" != typeof n.getDerivedStateFromError ? null : a.render();
					return t.flags |= 1, null !== e && i ? (t.child = Xo(t, e.child, null, o), t.child = Xo(t, null, s, o)) : ws(e, t, s, o), t.memoizedState = a.state, r && Fr(t, n, !0), t.child
				}

				function Ns(e) {
					var t = e.stateNode;
					t.pendingContext ? Or(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Or(0, t.context, !1), ri(e, t.containerInfo)
				}

				function $s(e, t, n, a, r) {
					return po(), mo(r), t.flags |= 256, ws(e, t, n, a), t.child
				}
				var As, Is, Os, Rs, Ds = {
					dehydrated: null,
					treeContext: null,
					retryLane: 0
				};

				function Fs(e) {
					return {
						baseLanes: e,
						cachePool: null,
						transitions: null
					}
				}

				function Ls(e, t, n) {
					var a, r = t.pendingProps,
						i = li.current,
						s = !1,
						l = 0 != (128 & t.flags);
					if ((a = l) || (a = (null === e || null !== e.memoizedState) && 0 != (2 & i)), a ? (s = !0, t.flags &= -129) : null !== e && null === e.memoizedState || (i |= 1), Er(li, 1 & i), null === e) return co(t), null !== (e = t.memoizedState) && null !== (e = e.dehydrated) ? (0 == (1 & t.mode) ? t.lanes = 1 : "$!" === e.data ? t.lanes = 8 : t.lanes = 1073741824, null) : (l = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, l = {
						mode: "hidden",
						children: l
					}, 0 == (1 & r) && null !== s ? (s.childLanes = 0, s.pendingProps = l) : s = Fc(l, r, 0, null), e = Dc(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = Fs(n), t.memoizedState = Ds, e) : zs(t, l));
					if (null !== (i = e.memoizedState) && null !== (a = i.dehydrated)) return function(e, t, n, a, r, i, s) {
						if (n) return 256 & t.flags ? (t.flags &= -257, Vs(e, t, s, a = ds(Error(o(422))))) : null !== t.memoizedState ? (t.child = e.child, t.flags |= 128, null) : (i = a.fallback, r = t.mode, a = Fc({
							mode: "visible",
							children: a.children
						}, r, 0, null), (i = Dc(i, r, s, null)).flags |= 2, a.return = t, i.return = t, a.sibling = i, t.child = a, 0 != (1 & t.mode) && Xo(t, e.child, null, s), t.child.memoizedState = Fs(s), t.memoizedState = Ds, i);
						if (0 == (1 & t.mode)) return Vs(e, t, s, null);
						if ("$!" === r.data) {
							if (a = r.nextSibling && r.nextSibling.dataset) var l = a.dgst;
							return a = l, Vs(e, t, s, a = ds(i = Error(o(419)), a, void 0))
						}
						if (l = 0 != (s & e.childLanes), xs || l) {
							if (null !== (a = Nl)) {
								switch (s & -s) {
									case 4:
										r = 2;
										break;
									case 16:
										r = 8;
										break;
									case 64:
									case 128:
									case 256:
									case 512:
									case 1024:
									case 2048:
									case 4096:
									case 8192:
									case 16384:
									case 32768:
									case 65536:
									case 131072:
									case 262144:
									case 524288:
									case 1048576:
									case 2097152:
									case 4194304:
									case 8388608:
									case 16777216:
									case 33554432:
									case 67108864:
										r = 32;
										break;
									case 536870912:
										r = 268435456;
										break;
									default:
										r = 0
								}
								0 !== (r = 0 != (r & (a.suspendedLanes | s)) ? 0 : r) && r !== i.retryLane && (i.retryLane = r, No(e, r), ac(a, e, r, -1))
							}
							return gc(), Vs(e, t, s, a = ds(Error(o(421))))
						}
						return "$?" === r.data ? (t.flags |= 128, t.child = e.child, t = Cc.bind(null, e), r._reactRetry = t, null) : (e = i.treeContext, ao = cr(r.nextSibling), no = t, ro = !0, oo = null, null !== e && (Ur[Zr++] = Gr, Ur[Zr++] = Xr, Ur[Zr++] = Qr, Gr = e.id, Xr = e.overflow, Qr = t), t = zs(t, a.children), t.flags |= 4096, t)
					}(e, t, l, r, a, i, n);
					if (s) {
						s = r.fallback, l = t.mode, a = (i = e.child).sibling;
						var c = {
							mode: "hidden",
							children: r.children
						};
						return 0 == (1 & l) && t.child !== i ? ((r = t.child).childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = Oc(i, c)).subtreeFlags = 14680064 & i.subtreeFlags, null !== a ? s = Oc(a, s) : (s = Dc(s, l, n, null)).flags |= 2, s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, l = null === (l = e.child.memoizedState) ? Fs(n) : {
							baseLanes: l.baseLanes | n,
							cachePool: null,
							transitions: l.transitions
						}, s.memoizedState = l, s.childLanes = e.childLanes & ~n, t.memoizedState = Ds, r
					}
					return e = (s = e.child).sibling, r = Oc(s, {
						mode: "visible",
						children: r.children
					}), 0 == (1 & t.mode) && (r.lanes = n), r.return = t, r.sibling = null, null !== e && (null === (n = t.deletions) ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
				}

				function zs(e, t) {
					return (t = Fc({
						mode: "visible",
						children: t
					}, e.mode, 0, null)).return = e, e.child = t
				}

				function Vs(e, t, n, a) {
					return null !== a && mo(a), Xo(t, e.child, null, n), (e = zs(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e
				}

				function Bs(e, t, n) {
					e.lanes |= t;
					var a = e.alternate;
					null !== a && (a.lanes |= t), ko(e.return, t, n)
				}

				function js(e, t, n, a, r) {
					var o = e.memoizedState;
					null === o ? e.memoizedState = {
						isBackwards: t,
						rendering: null,
						renderingStartTime: 0,
						last: a,
						tail: n,
						tailMode: r
					} : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = a, o.tail = n, o.tailMode = r)
				}

				function Hs(e, t, n) {
					var a = t.pendingProps,
						r = a.revealOrder,
						o = a.tail;
					if (ws(e, t, a.children, n), 0 != (2 & (a = li.current))) a = 1 & a | 2, t.flags |= 128;
					else {
						if (null !== e && 0 != (128 & e.flags)) e: for (e = t.child; null !== e;) {
							if (13 === e.tag) null !== e.memoizedState && Bs(e, n, t);
							else if (19 === e.tag) Bs(e, n, t);
							else if (null !== e.child) {
								e.child.return = e, e = e.child;
								continue
							}
							if (e === t) break e;
							for (; null === e.sibling;) {
								if (null === e.return || e.return === t) break e;
								e = e.return
							}
							e.sibling.return = e.return, e = e.sibling
						}
						a &= 1
					}
					if (Er(li, a), 0 == (1 & t.mode)) t.memoizedState = null;
					else switch (r) {
						case "forwards":
							for (n = t.child, r = null; null !== n;) null !== (e = n.alternate) && null === ci(e) && (r = n), n = n.sibling;
							null === (n = r) ? (r = t.child, t.child = null) : (r = n.sibling, n.sibling = null), js(t, !1, r, n, o);
							break;
						case "backwards":
							for (n = null, r = t.child, t.child = null; null !== r;) {
								if (null !== (e = r.alternate) && null === ci(e)) {
									t.child = r;
									break
								}
								e = r.sibling, r.sibling = n, n = r, r = e
							}
							js(t, !0, n, null, o);
							break;
						case "together":
							js(t, !1, null, null, void 0);
							break;
						default:
							t.memoizedState = null
					}
					return t.child
				}

				function qs(e, t) {
					0 == (1 & t.mode) && null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2)
				}

				function Ws(e, t, n) {
					if (null !== e && (t.dependencies = e.dependencies), Fl |= t.lanes, 0 == (n & t.childLanes)) return null;
					if (null !== e && t.child !== e.child) throw Error(o(153));
					if (null !== t.child) {
						for (n = Oc(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Oc(e, e.pendingProps)).return = t;
						n.sibling = null
					}
					return t.child
				}

				function Ys(e, t) {
					if (!ro) switch (e.tailMode) {
						case "hidden":
							t = e.tail;
							for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
							null === n ? e.tail = null : n.sibling = null;
							break;
						case "collapsed":
							n = e.tail;
							for (var a = null; null !== n;) null !== n.alternate && (a = n), n = n.sibling;
							null === a ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : a.sibling = null
					}
				}

				function Us(e) {
					var t = null !== e.alternate && e.alternate.child === e.child,
						n = 0,
						a = 0;
					if (t)
						for (var r = e.child; null !== r;) n |= r.lanes | r.childLanes, a |= 14680064 & r.subtreeFlags, a |= 14680064 & r.flags, r.return = e, r = r.sibling;
					else
						for (r = e.child; null !== r;) n |= r.lanes | r.childLanes, a |= r.subtreeFlags, a |= r.flags, r.return = e, r = r.sibling;
					return e.subtreeFlags |= a, e.childLanes = n, t
				}

				function Zs(e, t, n) {
					var a = t.pendingProps;
					switch (to(t), t.tag) {
						case 2:
						case 16:
						case 15:
						case 0:
						case 11:
						case 7:
						case 8:
						case 12:
						case 9:
						case 14:
							return Us(t), null;
						case 1:
						case 17:
							return Ar(t.type) && Ir(), Us(t), null;
						case 3:
							return a = t.stateNode, oi(), Pr(Mr), Pr(Cr), di(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), null !== e && null !== e.child || (ho(t) ? t.flags |= 4 : null === e || e.memoizedState.isDehydrated && 0 == (256 & t.flags) || (t.flags |= 1024, null !== oo && (sc(oo), oo = null))), Is(e, t), Us(t), null;
						case 5:
							si(t);
							var r = ai(ni.current);
							if (n = t.type, null !== e && null != t.stateNode) Os(e, t, n, a, r), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
							else {
								if (!a) {
									if (null === t.stateNode) throw Error(o(166));
									return Us(t), null
								}
								if (e = ai(ei.current), ho(t)) {
									a = t.stateNode, n = t.type;
									var i = t.memoizedProps;
									switch (a[hr] = t, a[fr] = i, e = 0 != (1 & t.mode), n) {
										case "dialog":
											za("cancel", a), za("close", a);
											break;
										case "iframe":
										case "object":
										case "embed":
											za("load", a);
											break;
										case "video":
										case "audio":
											for (r = 0; r < Ra.length; r++) za(Ra[r], a);
											break;
										case "source":
											za("error", a);
											break;
										case "img":
										case "image":
										case "link":
											za("error", a), za("load", a);
											break;
										case "details":
											za("toggle", a);
											break;
										case "input":
											G(a, i), za("invalid", a);
											break;
										case "select":
											a._wrapperState = {
												wasMultiple: !!i.multiple
											}, za("invalid", a);
											break;
										case "textarea":
											re(a, i), za("invalid", a)
									}
									for (var l in be(n, i), r = null, i)
										if (i.hasOwnProperty(l)) {
											var c = i[l];
											"children" === l ? "string" == typeof c ? a.textContent !== c && (!0 !== i.suppressHydrationWarning && Ka(a.textContent, c, e), r = ["children", c]) : "number" == typeof c && a.textContent !== "" + c && (!0 !== i.suppressHydrationWarning && Ka(a.textContent, c, e), r = ["children", "" + c]) : s.hasOwnProperty(l) && null != c && "onScroll" === l && za("scroll", a)
										} switch (n) {
										case "input":
											Y(a), J(a, i, !0);
											break;
										case "textarea":
											Y(a), ie(a);
											break;
										case "select":
										case "option":
											break;
										default:
											"function" == typeof i.onClick && (a.onclick = Ja)
									}
									a = r, t.updateQueue = a, null !== a && (t.flags |= 4)
								} else {
									l = 9 === r.nodeType ? r : r.ownerDocument, "http://www.w3.org/1999/xhtml" === e && (e = se(n)), "http://www.w3.org/1999/xhtml" === e ? "script" === n ? ((e = l.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" == typeof a.is ? e = l.createElement(n, {
										is: a.is
									}) : (e = l.createElement(n), "select" === n && (l = e, a.multiple ? l.multiple = !0 : a.size && (l.size = a.size))) : e = l.createElementNS(e, n), e[hr] = t, e[fr] = a, As(e, t, !1, !1), t.stateNode = e;
									e: {
										switch (l = ve(n, a), n) {
											case "dialog":
												za("cancel", e), za("close", e), r = a;
												break;
											case "iframe":
											case "object":
											case "embed":
												za("load", e), r = a;
												break;
											case "video":
											case "audio":
												for (r = 0; r < Ra.length; r++) za(Ra[r], e);
												r = a;
												break;
											case "source":
												za("error", e), r = a;
												break;
											case "img":
											case "image":
											case "link":
												za("error", e), za("load", e), r = a;
												break;
											case "details":
												za("toggle", e), r = a;
												break;
											case "input":
												G(e, a), r = Q(e, a), za("invalid", e);
												break;
											case "option":
											default:
												r = a;
												break;
											case "select":
												e._wrapperState = {
													wasMultiple: !!a.multiple
												}, r = F({}, a, {
													value: void 0
												}), za("invalid", e);
												break;
											case "textarea":
												re(e, a), r = ae(e, a), za("invalid", e)
										}
										for (i in be(n, r), c = r)
											if (c.hasOwnProperty(i)) {
												var u = c[i];
												"style" === i ? ge(e, u) : "dangerouslySetInnerHTML" === i ? null != (u = u ? u.__html : void 0) && de(e, u) : "children" === i ? "string" == typeof u ? ("textarea" !== n || "" !== u) && he(e, u) : "number" == typeof u && he(e, "" + u) : "suppressContentEditableWarning" !== i && "suppressHydrationWarning" !== i && "autoFocus" !== i && (s.hasOwnProperty(i) ? null != u && "onScroll" === i && za("scroll", e) : null != u && v(e, i, u, l))
											} switch (n) {
											case "input":
												Y(e), J(e, a, !1);
												break;
											case "textarea":
												Y(e), ie(e);
												break;
											case "option":
												null != a.value && e.setAttribute("value", "" + q(a.value));
												break;
											case "select":
												e.multiple = !!a.multiple, null != (i = a.value) ? ne(e, !!a.multiple, i, !1) : null != a.defaultValue && ne(e, !!a.multiple, a.defaultValue, !0);
												break;
											default:
												"function" == typeof r.onClick && (e.onclick = Ja)
										}
										switch (n) {
											case "button":
											case "input":
											case "select":
											case "textarea":
												a = !!a.autoFocus;
												break e;
											case "img":
												a = !0;
												break e;
											default:
												a = !1
										}
									}
									a && (t.flags |= 4)
								}
								null !== t.ref && (t.flags |= 512, t.flags |= 2097152)
							}
							return Us(t), null;
						case 6:
							if (e && null != t.stateNode) Rs(e, t, e.memoizedProps, a);
							else {
								if ("string" != typeof a && null === t.stateNode) throw Error(o(166));
								if (n = ai(ni.current), ai(ei.current), ho(t)) {
									if (a = t.stateNode, n = t.memoizedProps, a[hr] = t, (i = a.nodeValue !== n) && null !== (e = no)) switch (e.tag) {
										case 3:
											Ka(a.nodeValue, n, 0 != (1 & e.mode));
											break;
										case 5:
											!0 !== e.memoizedProps.suppressHydrationWarning && Ka(a.nodeValue, n, 0 != (1 & e.mode))
									}
									i && (t.flags |= 4)
								} else(a = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(a))[hr] = t, t.stateNode = a
							}
							return Us(t), null;
						case 13:
							if (Pr(li), a = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
								if (ro && null !== ao && 0 != (1 & t.mode) && 0 == (128 & t.flags)) fo(), po(), t.flags |= 98560, i = !1;
								else if (i = ho(t), null !== a && null !== a.dehydrated) {
									if (null === e) {
										if (!i) throw Error(o(318));
										if (!(i = null !== (i = t.memoizedState) ? i.dehydrated : null)) throw Error(o(317));
										i[hr] = t
									} else po(), 0 == (128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
									Us(t), i = !1
								} else null !== oo && (sc(oo), oo = null), i = !0;
								if (!i) return 65536 & t.flags ? t : null
							}
							return 0 != (128 & t.flags) ? (t.lanes = n, t) : ((a = null !== a) !== (null !== e && null !== e.memoizedState) && a && (t.child.flags |= 8192, 0 != (1 & t.mode) && (null === e || 0 != (1 & li.current) ? 0 === Rl && (Rl = 3) : gc())), null !== t.updateQueue && (t.flags |= 4), Us(t), null);
						case 4:
							return oi(), Is(e, t), null === e && ja(t.stateNode.containerInfo), Us(t), null;
						case 10:
							return _o(t.type._context), Us(t), null;
						case 19:
							if (Pr(li), null === (i = t.memoizedState)) return Us(t), null;
							if (a = 0 != (128 & t.flags), null === (l = i.rendering))
								if (a) Ys(i, !1);
								else {
									if (0 !== Rl || null !== e && 0 != (128 & e.flags))
										for (e = t.child; null !== e;) {
											if (null !== (l = ci(e))) {
												for (t.flags |= 128, Ys(i, !1), null !== (a = l.updateQueue) && (t.updateQueue = a, t.flags |= 4), t.subtreeFlags = 0, a = n, n = t.child; null !== n;) e = a, (i = n).flags &= 14680066, null === (l = i.alternate) ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = l.childLanes, i.lanes = l.lanes, i.child = l.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = l.memoizedProps, i.memoizedState = l.memoizedState, i.updateQueue = l.updateQueue, i.type = l.type, e = l.dependencies, i.dependencies = null === e ? null : {
													lanes: e.lanes,
													firstContext: e.firstContext
												}), n = n.sibling;
												return Er(li, 1 & li.current | 2), t.child
											}
											e = e.sibling
										}
									null !== i.tail && Xe() > Hl && (t.flags |= 128, a = !0, Ys(i, !1), t.lanes = 4194304)
								}
							else {
								if (!a)
									if (null !== (e = ci(l))) {
										if (t.flags |= 128, a = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), Ys(i, !0), null === i.tail && "hidden" === i.tailMode && !l.alternate && !ro) return Us(t), null
									} else 2 * Xe() - i.renderingStartTime > Hl && 1073741824 !== n && (t.flags |= 128, a = !0, Ys(i, !1), t.lanes = 4194304);
								i.isBackwards ? (l.sibling = t.child, t.child = l) : (null !== (n = i.last) ? n.sibling = l : t.child = l, i.last = l)
							}
							return null !== i.tail ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Xe(), t.sibling = null, n = li.current, Er(li, a ? 1 & n | 2 : 1 & n), t) : (Us(t), null);
						case 22:
						case 23:
							return hc(), a = null !== t.memoizedState, null !== e && null !== e.memoizedState !== a && (t.flags |= 8192), a && 0 != (1 & t.mode) ? 0 != (1073741824 & Il) && (Us(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : Us(t), null;
						case 24:
						case 25:
							return null
					}
					throw Error(o(156, t.tag))
				}

				function Qs(e, t) {
					switch (to(t), t.tag) {
						case 1:
							return Ar(t.type) && Ir(), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
						case 3:
							return oi(), Pr(Mr), Pr(Cr), di(), 0 != (65536 & (e = t.flags)) && 0 == (128 & e) ? (t.flags = -65537 & e | 128, t) : null;
						case 5:
							return si(t), null;
						case 13:
							if (Pr(li), null !== (e = t.memoizedState) && null !== e.dehydrated) {
								if (null === t.alternate) throw Error(o(340));
								po()
							}
							return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
						case 19:
							return Pr(li), null;
						case 4:
							return oi(), null;
						case 10:
							return _o(t.type._context), null;
						case 22:
						case 23:
							return hc(), null;
						default:
							return null
					}
				}
				As = function(e, t) {
					for (var n = t.child; null !== n;) {
						if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
						else if (4 !== n.tag && null !== n.child) {
							n.child.return = n, n = n.child;
							continue
						}
						if (n === t) break;
						for (; null === n.sibling;) {
							if (null === n.return || n.return === t) return;
							n = n.return
						}
						n.sibling.return = n.return, n = n.sibling
					}
				}, Is = function() {}, Os = function(e, t, n, a) {
					var r = e.memoizedProps;
					if (r !== a) {
						e = t.stateNode, ai(ei.current);
						var o, i = null;
						switch (n) {
							case "input":
								r = Q(e, r), a = Q(e, a), i = [];
								break;
							case "select":
								r = F({}, r, {
									value: void 0
								}), a = F({}, a, {
									value: void 0
								}), i = [];
								break;
							case "textarea":
								r = ae(e, r), a = ae(e, a), i = [];
								break;
							default:
								"function" != typeof r.onClick && "function" == typeof a.onClick && (e.onclick = Ja)
						}
						for (u in be(n, a), n = null, r)
							if (!a.hasOwnProperty(u) && r.hasOwnProperty(u) && null != r[u])
								if ("style" === u) {
									var l = r[u];
									for (o in l) l.hasOwnProperty(o) && (n || (n = {}), n[o] = "")
								} else "dangerouslySetInnerHTML" !== u && "children" !== u && "suppressContentEditableWarning" !== u && "suppressHydrationWarning" !== u && "autoFocus" !== u && (s.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
						for (u in a) {
							var c = a[u];
							if (l = null != r ? r[u] : void 0, a.hasOwnProperty(u) && c !== l && (null != c || null != l))
								if ("style" === u)
									if (l) {
										for (o in l) !l.hasOwnProperty(o) || c && c.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
										for (o in c) c.hasOwnProperty(o) && l[o] !== c[o] && (n || (n = {}), n[o] = c[o])
									} else n || (i || (i = []), i.push(u, n)), n = c;
							else "dangerouslySetInnerHTML" === u ? (c = c ? c.__html : void 0, l = l ? l.__html : void 0, null != c && l !== c && (i = i || []).push(u, c)) : "children" === u ? "string" != typeof c && "number" != typeof c || (i = i || []).push(u, "" + c) : "suppressContentEditableWarning" !== u && "suppressHydrationWarning" !== u && (s.hasOwnProperty(u) ? (null != c && "onScroll" === u && za("scroll", e), i || l === c || (i = [])) : (i = i || []).push(u, c))
						}
						n && (i = i || []).push("style", n);
						var u = i;
						(t.updateQueue = u) && (t.flags |= 4)
					}
				}, Rs = function(e, t, n, a) {
					n !== a && (t.flags |= 4)
				};
				var Gs = !1,
					Xs = !1,
					Ks = "function" == typeof WeakSet ? WeakSet : Set,
					Js = null;

				function el(e, t) {
					var n = e.ref;
					if (null !== n)
						if ("function" == typeof n) try {
							n(null)
						} catch (n) {
							Pc(e, t, n)
						} else n.current = null
				}

				function tl(e, t, n) {
					try {
						n()
					} catch (n) {
						Pc(e, t, n)
					}
				}
				var nl = !1;

				function al(e, t, n) {
					var a = t.updateQueue;
					if (null !== (a = null !== a ? a.lastEffect : null)) {
						var r = a = a.next;
						do {
							if ((r.tag & e) === e) {
								var o = r.destroy;
								r.destroy = void 0, void 0 !== o && tl(t, n, o)
							}
							r = r.next
						} while (r !== a)
					}
				}

				function rl(e, t) {
					if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
						var n = t = t.next;
						do {
							if ((n.tag & e) === e) {
								var a = n.create;
								n.destroy = a()
							}
							n = n.next
						} while (n !== t)
					}
				}

				function ol(e) {
					var t = e.ref;
					if (null !== t) {
						var n = e.stateNode;
						e.tag, e = n, "function" == typeof t ? t(e) : t.current = e
					}
				}

				function il(e) {
					var t = e.alternate;
					null !== t && (e.alternate = null, il(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && (null !== (t = e.stateNode) && (delete t[hr], delete t[fr], delete t[mr], delete t[gr], delete t[yr])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
				}

				function sl(e) {
					return 5 === e.tag || 3 === e.tag || 4 === e.tag
				}

				function ll(e) {
					e: for (;;) {
						for (; null === e.sibling;) {
							if (null === e.return || sl(e.return)) return null;
							e = e.return
						}
						for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
							if (2 & e.flags) continue e;
							if (null === e.child || 4 === e.tag) continue e;
							e.child.return = e, e = e.child
						}
						if (!(2 & e.flags)) return e.stateNode
					}
				}

				function cl(e, t, n) {
					var a = e.tag;
					if (5 === a || 6 === a) e = e.stateNode, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = Ja));
					else if (4 !== a && null !== (e = e.child))
						for (cl(e, t, n), e = e.sibling; null !== e;) cl(e, t, n), e = e.sibling
				}

				function ul(e, t, n) {
					var a = e.tag;
					if (5 === a || 6 === a) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
					else if (4 !== a && null !== (e = e.child))
						for (ul(e, t, n), e = e.sibling; null !== e;) ul(e, t, n), e = e.sibling
				}
				var dl = null,
					hl = !1;

				function fl(e, t, n) {
					for (n = n.child; null !== n;) pl(e, t, n), n = n.sibling
				}

				function pl(e, t, n) {
					if (ot && "function" == typeof ot.onCommitFiberUnmount) try {
						ot.onCommitFiberUnmount(rt, n)
					} catch (e) {}
					switch (n.tag) {
						case 5:
							Xs || el(n, t);
						case 6:
							var a = dl,
								r = hl;
							dl = null, fl(e, t, n), hl = r, null !== (dl = a) && (hl ? (e = dl, n = n.stateNode, 8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : dl.removeChild(n.stateNode));
							break;
						case 18:
							null !== dl && (hl ? (e = dl, n = n.stateNode, 8 === e.nodeType ? lr(e.parentNode, n) : 1 === e.nodeType && lr(e, n), jt(e)) : lr(dl, n.stateNode));
							break;
						case 4:
							a = dl, r = hl, dl = n.stateNode.containerInfo, hl = !0, fl(e, t, n), dl = a, hl = r;
							break;
						case 0:
						case 11:
						case 14:
						case 15:
							if (!Xs && (null !== (a = n.updateQueue) && null !== (a = a.lastEffect))) {
								r = a = a.next;
								do {
									var o = r,
										i = o.destroy;
									o = o.tag, void 0 !== i && (0 != (2 & o) || 0 != (4 & o)) && tl(n, t, i), r = r.next
								} while (r !== a)
							}
							fl(e, t, n);
							break;
						case 1:
							if (!Xs && (el(n, t), "function" == typeof(a = n.stateNode).componentWillUnmount)) try {
								a.props = n.memoizedProps, a.state = n.memoizedState, a.componentWillUnmount()
							} catch (e) {
								Pc(n, t, e)
							}
							fl(e, t, n);
							break;
						case 21:
							fl(e, t, n);
							break;
						case 22:
							1 & n.mode ? (Xs = (a = Xs) || null !== n.memoizedState, fl(e, t, n), Xs = a) : fl(e, t, n);
							break;
						default:
							fl(e, t, n)
					}
				}

				function ml(e) {
					var t = e.updateQueue;
					if (null !== t) {
						e.updateQueue = null;
						var n = e.stateNode;
						null === n && (n = e.stateNode = new Ks), t.forEach((function(t) {
							var a = Mc.bind(null, e, t);
							n.has(t) || (n.add(t), t.then(a, a))
						}))
					}
				}

				function gl(e, t) {
					var n = t.deletions;
					if (null !== n)
						for (var a = 0; a < n.length; a++) {
							var r = n[a];
							try {
								var i = e,
									s = t,
									l = s;
								e: for (; null !== l;) {
									switch (l.tag) {
										case 5:
											dl = l.stateNode, hl = !1;
											break e;
										case 3:
										case 4:
											dl = l.stateNode.containerInfo, hl = !0;
											break e
									}
									l = l.return
								}
								if (null === dl) throw Error(o(160));
								pl(i, s, r), dl = null, hl = !1;
								var c = r.alternate;
								null !== c && (c.return = null), r.return = null
							} catch (e) {
								Pc(r, t, e)
							}
						}
					if (12854 & t.subtreeFlags)
						for (t = t.child; null !== t;) yl(t, e), t = t.sibling
				}

				function yl(e, t) {
					var n = e.alternate,
						a = e.flags;
					switch (e.tag) {
						case 0:
						case 11:
						case 14:
						case 15:
							if (gl(t, e), bl(e), 4 & a) {
								try {
									al(3, e, e.return), rl(3, e)
								} catch (t) {
									Pc(e, e.return, t)
								}
								try {
									al(5, e, e.return)
								} catch (t) {
									Pc(e, e.return, t)
								}
							}
							break;
						case 1:
							gl(t, e), bl(e), 512 & a && null !== n && el(n, n.return);
							break;
						case 5:
							if (gl(t, e), bl(e), 512 & a && null !== n && el(n, n.return), 32 & e.flags) {
								var r = e.stateNode;
								try {
									he(r, "")
								} catch (t) {
									Pc(e, e.return, t)
								}
							}
							if (4 & a && null != (r = e.stateNode)) {
								var i = e.memoizedProps,
									s = null !== n ? n.memoizedProps : i,
									l = e.type,
									c = e.updateQueue;
								if (e.updateQueue = null, null !== c) try {
									"input" === l && "radio" === i.type && null != i.name && X(r, i), ve(l, s);
									var u = ve(l, i);
									for (s = 0; s < c.length; s += 2) {
										var d = c[s],
											h = c[s + 1];
										"style" === d ? ge(r, h) : "dangerouslySetInnerHTML" === d ? de(r, h) : "children" === d ? he(r, h) : v(r, d, h, u)
									}
									switch (l) {
										case "input":
											K(r, i);
											break;
										case "textarea":
											oe(r, i);
											break;
										case "select":
											var f = r._wrapperState.wasMultiple;
											r._wrapperState.wasMultiple = !!i.multiple;
											var p = i.value;
											null != p ? ne(r, !!i.multiple, p, !1) : f !== !!i.multiple && (null != i.defaultValue ? ne(r, !!i.multiple, i.defaultValue, !0) : ne(r, !!i.multiple, i.multiple ? [] : "", !1))
									}
									r[fr] = i
								} catch (t) {
									Pc(e, e.return, t)
								}
							}
							break;
						case 6:
							if (gl(t, e), bl(e), 4 & a) {
								if (null === e.stateNode) throw Error(o(162));
								r = e.stateNode, i = e.memoizedProps;
								try {
									r.nodeValue = i
								} catch (t) {
									Pc(e, e.return, t)
								}
							}
							break;
						case 3:
							if (gl(t, e), bl(e), 4 & a && null !== n && n.memoizedState.isDehydrated) try {
								jt(t.containerInfo)
							} catch (t) {
								Pc(e, e.return, t)
							}
							break;
						case 4:
						default:
							gl(t, e), bl(e);
							break;
						case 13:
							gl(t, e), bl(e), 8192 & (r = e.child).flags && (i = null !== r.memoizedState, r.stateNode.isHidden = i, !i || null !== r.alternate && null !== r.alternate.memoizedState || (jl = Xe())), 4 & a && ml(e);
							break;
						case 22:
							if (d = null !== n && null !== n.memoizedState, 1 & e.mode ? (Xs = (u = Xs) || d, gl(t, e), Xs = u) : gl(t, e), bl(e), 8192 & a) {
								if (u = null !== e.memoizedState, (e.stateNode.isHidden = u) && !d && 0 != (1 & e.mode))
									for (Js = e, d = e.child; null !== d;) {
										for (h = Js = d; null !== Js;) {
											switch (p = (f = Js).child, f.tag) {
												case 0:
												case 11:
												case 14:
												case 15:
													al(4, f, f.return);
													break;
												case 1:
													el(f, f.return);
													var m = f.stateNode;
													if ("function" == typeof m.componentWillUnmount) {
														a = f, n = f.return;
														try {
															t = a, m.props = t.memoizedProps, m.state = t.memoizedState, m.componentWillUnmount()
														} catch (e) {
															Pc(a, n, e)
														}
													}
													break;
												case 5:
													el(f, f.return);
													break;
												case 22:
													if (null !== f.memoizedState) {
														Tl(h);
														continue
													}
											}
											null !== p ? (p.return = f, Js = p) : Tl(h)
										}
										d = d.sibling
									}
								e: for (d = null, h = e;;) {
									if (5 === h.tag) {
										if (null === d) {
											d = h;
											try {
												r = h.stateNode, u ? "function" == typeof(i = r.style).setProperty ? i.setProperty("display", "none", "important") : i.display = "none" : (l = h.stateNode, s = null != (c = h.memoizedProps.style) && c.hasOwnProperty("display") ? c.display : null, l.style.display = me("display", s))
											} catch (t) {
												Pc(e, e.return, t)
											}
										}
									} else if (6 === h.tag) {
										if (null === d) try {
											h.stateNode.nodeValue = u ? "" : h.memoizedProps
										} catch (t) {
											Pc(e, e.return, t)
										}
									} else if ((22 !== h.tag && 23 !== h.tag || null === h.memoizedState || h === e) && null !== h.child) {
										h.child.return = h, h = h.child;
										continue
									}
									if (h === e) break e;
									for (; null === h.sibling;) {
										if (null === h.return || h.return === e) break e;
										d === h && (d = null), h = h.return
									}
									d === h && (d = null), h.sibling.return = h.return, h = h.sibling
								}
							}
							break;
						case 19:
							gl(t, e), bl(e), 4 & a && ml(e);
						case 21:
					}
				}

				function bl(e) {
					var t = e.flags;
					if (2 & t) {
						try {
							e: {
								for (var n = e.return; null !== n;) {
									if (sl(n)) {
										var a = n;
										break e
									}
									n = n.return
								}
								throw Error(o(160))
							}
							switch (a.tag) {
								case 5:
									var r = a.stateNode;
									32 & a.flags && (he(r, ""), a.flags &= -33), ul(e, ll(e), r);
									break;
								case 3:
								case 4:
									var i = a.stateNode.containerInfo;
									cl(e, ll(e), i);
									break;
								default:
									throw Error(o(161))
							}
						}
						catch (t) {
							Pc(e, e.return, t)
						}
						e.flags &= -3
					}
					4096 & t && (e.flags &= -4097)
				}

				function vl(e, t, n) {
					Js = e, xl(e, t, n)
				}

				function xl(e, t, n) {
					for (var a = 0 != (1 & e.mode); null !== Js;) {
						var r = Js,
							o = r.child;
						if (22 === r.tag && a) {
							var i = null !== r.memoizedState || Gs;
							if (!i) {
								var s = r.alternate,
									l = null !== s && null !== s.memoizedState || Xs;
								s = Gs;
								var c = Xs;
								if (Gs = i, (Xs = l) && !c)
									for (Js = r; null !== Js;) l = (i = Js).child, 22 === i.tag && null !== i.memoizedState ? _l(r) : null !== l ? (l.return = i, Js = l) : _l(r);
								for (; null !== o;) Js = o, xl(o, t, n), o = o.sibling;
								Js = r, Gs = s, Xs = c
							}
							wl(e)
						} else 0 != (8772 & r.subtreeFlags) && null !== o ? (o.return = r, Js = o) : wl(e)
					}
				}

				function wl(e) {
					for (; null !== Js;) {
						var t = Js;
						if (0 != (8772 & t.flags)) {
							var n = t.alternate;
							try {
								if (0 != (8772 & t.flags)) switch (t.tag) {
									case 0:
									case 11:
									case 15:
										Xs || rl(5, t);
										break;
									case 1:
										var a = t.stateNode;
										if (4 & t.flags && !Xs)
											if (null === n) a.componentDidMount();
											else {
												var r = t.elementType === t.type ? n.memoizedProps : yo(t.type, n.memoizedProps);
												a.componentDidUpdate(r, n.memoizedState, a.__reactInternalSnapshotBeforeUpdate)
											} var i = t.updateQueue;
										null !== i && zo(t, i, a);
										break;
									case 3:
										var s = t.updateQueue;
										if (null !== s) {
											if (n = null, null !== t.child) switch (t.child.tag) {
												case 5:
												case 1:
													n = t.child.stateNode
											}
											zo(t, s, n)
										}
										break;
									case 5:
										var l = t.stateNode;
										if (null === n && 4 & t.flags) {
											n = l;
											var c = t.memoizedProps;
											switch (t.type) {
												case "button":
												case "input":
												case "select":
												case "textarea":
													c.autoFocus && n.focus();
													break;
												case "img":
													c.src && (n.src = c.src)
											}
										}
										break;
									case 6:
									case 4:
									case 12:
									case 19:
									case 17:
									case 21:
									case 22:
									case 23:
									case 25:
										break;
									case 13:
										if (null === t.memoizedState) {
											var u = t.alternate;
											if (null !== u) {
												var d = u.memoizedState;
												if (null !== d) {
													var h = d.dehydrated;
													null !== h && jt(h)
												}
											}
										}
										break;
									default:
										throw Error(o(163))
								}
								Xs || 512 & t.flags && ol(t)
							} catch (e) {
								Pc(t, t.return, e)
							}
						}
						if (t === e) {
							Js = null;
							break
						}
						if (null !== (n = t.sibling)) {
							n.return = t.return, Js = n;
							break
						}
						Js = t.return
					}
				}

				function Tl(e) {
					for (; null !== Js;) {
						var t = Js;
						if (t === e) {
							Js = null;
							break
						}
						var n = t.sibling;
						if (null !== n) {
							n.return = t.return, Js = n;
							break
						}
						Js = t.return
					}
				}

				function _l(e) {
					for (; null !== Js;) {
						var t = Js;
						try {
							switch (t.tag) {
								case 0:
								case 11:
								case 15:
									var n = t.return;
									try {
										rl(4, t)
									} catch (e) {
										Pc(t, n, e)
									}
									break;
								case 1:
									var a = t.stateNode;
									if ("function" == typeof a.componentDidMount) {
										var r = t.return;
										try {
											a.componentDidMount()
										} catch (e) {
											Pc(t, r, e)
										}
									}
									var o = t.return;
									try {
										ol(t)
									} catch (e) {
										Pc(t, o, e)
									}
									break;
								case 5:
									var i = t.return;
									try {
										ol(t)
									} catch (e) {
										Pc(t, i, e)
									}
							}
						} catch (e) {
							Pc(t, t.return, e)
						}
						if (t === e) {
							Js = null;
							break
						}
						var s = t.sibling;
						if (null !== s) {
							s.return = t.return, Js = s;
							break
						}
						Js = t.return
					}
				}
				var kl, Pl = Math.ceil,
					El = x.ReactCurrentDispatcher,
					Sl = x.ReactCurrentOwner,
					Cl = x.ReactCurrentBatchConfig,
					Ml = 0,
					Nl = null,
					$l = null,
					Al = 0,
					Il = 0,
					Ol = kr(0),
					Rl = 0,
					Dl = null,
					Fl = 0,
					Ll = 0,
					zl = 0,
					Vl = null,
					Bl = null,
					jl = 0,
					Hl = 1 / 0,
					ql = null,
					Wl = !1,
					Yl = null,
					Ul = null,
					Zl = !1,
					Ql = null,
					Gl = 0,
					Xl = 0,
					Kl = null,
					Jl = -1,
					ec = 0;

				function tc() {
					return 0 != (6 & Ml) ? Xe() : -1 !== Jl ? Jl : Jl = Xe()
				}

				function nc(e) {
					return 0 == (1 & e.mode) ? 1 : 0 != (2 & Ml) && 0 !== Al ? Al & -Al : null !== go.transition ? (0 === ec && (ec = mt()), ec) : 0 !== (e = vt) ? e : e = void 0 === (e = window.event) ? 16 : Gt(e.type)
				}

				function ac(e, t, n, a) {
					if (50 < Xl) throw Xl = 0, Kl = null, Error(o(185));
					yt(e, n, a), 0 != (2 & Ml) && e === Nl || (e === Nl && (0 == (2 & Ml) && (Ll |= n), 4 === Rl && lc(e, Al)), rc(e, a), 1 === n && 0 === Ml && 0 == (1 & t.mode) && (Hl = Xe() + 500, zr && jr()))
				}

				function rc(e, t) {
					var n = e.callbackNode;
					! function(e, t) {
						for (var n = e.suspendedLanes, a = e.pingedLanes, r = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
							var i = 31 - it(o),
								s = 1 << i,
								l = r[i]; - 1 === l ? 0 != (s & n) && 0 == (s & a) || (r[i] = ft(s, t)) : l <= t && (e.expiredLanes |= s), o &= ~s
						}
					}(e, t);
					var a = ht(e, e === Nl ? Al : 0);
					if (0 === a) null !== n && Ze(n), e.callbackNode = null, e.callbackPriority = 0;
					else if (t = a & -a, e.callbackPriority !== t) {
						if (null != n && Ze(n), 1 === t) 0 === e.tag ? function(e) {
							zr = !0, Br(e)
						}(cc.bind(null, e)) : Br(cc.bind(null, e)), ir((function() {
							0 == (6 & Ml) && jr()
						})), n = null;
						else {
							switch (xt(a)) {
								case 1:
									n = Je;
									break;
								case 4:
									n = et;
									break;
								case 16:
								default:
									n = tt;
									break;
								case 536870912:
									n = at
							}
							n = Nc(n, oc.bind(null, e))
						}
						e.callbackPriority = t, e.callbackNode = n
					}
				}

				function oc(e, t) {
					if (Jl = -1, ec = 0, 0 != (6 & Ml)) throw Error(o(327));
					var n = e.callbackNode;
					if (_c() && e.callbackNode !== n) return null;
					var a = ht(e, e === Nl ? Al : 0);
					if (0 === a) return null;
					if (0 != (30 & a) || 0 != (a & e.expiredLanes) || t) t = yc(e, a);
					else {
						t = a;
						var r = Ml;
						Ml |= 2;
						var i = mc();
						for (Nl === e && Al === t || (ql = null, Hl = Xe() + 500, fc(e, t));;) try {
							vc();
							break
						} catch (t) {
							pc(e, t)
						}
						To(), El.current = i, Ml = r, null !== $l ? t = 0 : (Nl = null, Al = 0, t = Rl)
					}
					if (0 !== t) {
						if (2 === t && (0 !== (r = pt(e)) && (a = r, t = ic(e, r))), 1 === t) throw n = Dl, fc(e, 0), lc(e, a), rc(e, Xe()), n;
						if (6 === t) lc(e, a);
						else {
							if (r = e.current.alternate, 0 == (30 & a) && ! function(e) {
									for (var t = e;;) {
										if (16384 & t.flags) {
											var n = t.updateQueue;
											if (null !== n && null !== (n = n.stores))
												for (var a = 0; a < n.length; a++) {
													var r = n[a],
														o = r.getSnapshot;
													r = r.value;
													try {
														if (!sa(o(), r)) return !1
													} catch (e) {
														return !1
													}
												}
										}
										if (n = t.child, 16384 & t.subtreeFlags && null !== n) n.return = t, t = n;
										else {
											if (t === e) break;
											for (; null === t.sibling;) {
												if (null === t.return || t.return === e) return !0;
												t = t.return
											}
											t.sibling.return = t.return, t = t.sibling
										}
									}
									return !0
								}(r) && (2 === (t = yc(e, a)) && (0 !== (i = pt(e)) && (a = i, t = ic(e, i))), 1 === t)) throw n = Dl, fc(e, 0), lc(e, a), rc(e, Xe()), n;
							switch (e.finishedWork = r, e.finishedLanes = a, t) {
								case 0:
								case 1:
									throw Error(o(345));
								case 2:
								case 5:
									Tc(e, Bl, ql);
									break;
								case 3:
									if (lc(e, a), (130023424 & a) === a && 10 < (t = jl + 500 - Xe())) {
										if (0 !== ht(e, 0)) break;
										if (((r = e.suspendedLanes) & a) !== a) {
											tc(), e.pingedLanes |= e.suspendedLanes & r;
											break
										}
										e.timeoutHandle = ar(Tc.bind(null, e, Bl, ql), t);
										break
									}
									Tc(e, Bl, ql);
									break;
								case 4:
									if (lc(e, a), (4194240 & a) === a) break;
									for (t = e.eventTimes, r = -1; 0 < a;) {
										var s = 31 - it(a);
										i = 1 << s, (s = t[s]) > r && (r = s), a &= ~i
									}
									if (a = r, 10 < (a = (120 > (a = Xe() - a) ? 120 : 480 > a ? 480 : 1080 > a ? 1080 : 1920 > a ? 1920 : 3e3 > a ? 3e3 : 4320 > a ? 4320 : 1960 * Pl(a / 1960)) - a)) {
										e.timeoutHandle = ar(Tc.bind(null, e, Bl, ql), a);
										break
									}
									Tc(e, Bl, ql);
									break;
								default:
									throw Error(o(329))
							}
						}
					}
					return rc(e, Xe()), e.callbackNode === n ? oc.bind(null, e) : null
				}

				function ic(e, t) {
					var n = Vl;
					return e.current.memoizedState.isDehydrated && (fc(e, t).flags |= 256), 2 !== (e = yc(e, t)) && (t = Bl, Bl = n, null !== t && sc(t)), e
				}

				function sc(e) {
					null === Bl ? Bl = e : Bl.push.apply(Bl, e)
				}

				function lc(e, t) {
					for (t &= ~zl, t &= ~Ll, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
						var n = 31 - it(t),
							a = 1 << n;
						e[n] = -1, t &= ~a
					}
				}

				function cc(e) {
					if (0 != (6 & Ml)) throw Error(o(327));
					_c();
					var t = ht(e, 0);
					if (0 == (1 & t)) return rc(e, Xe()), null;
					var n = yc(e, t);
					if (0 !== e.tag && 2 === n) {
						var a = pt(e);
						0 !== a && (t = a, n = ic(e, a))
					}
					if (1 === n) throw n = Dl, fc(e, 0), lc(e, t), rc(e, Xe()), n;
					if (6 === n) throw Error(o(345));
					return e.finishedWork = e.current.alternate, e.finishedLanes = t, Tc(e, Bl, ql), rc(e, Xe()), null
				}

				function uc(e, t) {
					var n = Ml;
					Ml |= 1;
					try {
						return e(t)
					} finally {
						0 === (Ml = n) && (Hl = Xe() + 500, zr && jr())
					}
				}

				function dc(e) {
					null !== Ql && 0 === Ql.tag && 0 == (6 & Ml) && _c();
					var t = Ml;
					Ml |= 1;
					var n = Cl.transition,
						a = vt;
					try {
						if (Cl.transition = null, vt = 1, e) return e()
					} finally {
						vt = a, Cl.transition = n, 0 == (6 & (Ml = t)) && jr()
					}
				}

				function hc() {
					Il = Ol.current, Pr(Ol)
				}

				function fc(e, t) {
					e.finishedWork = null, e.finishedLanes = 0;
					var n = e.timeoutHandle;
					if (-1 !== n && (e.timeoutHandle = -1, rr(n)), null !== $l)
						for (n = $l.return; null !== n;) {
							var a = n;
							switch (to(a), a.tag) {
								case 1:
									null != (a = a.type.childContextTypes) && Ir();
									break;
								case 3:
									oi(), Pr(Mr), Pr(Cr), di();
									break;
								case 5:
									si(a);
									break;
								case 4:
									oi();
									break;
								case 13:
								case 19:
									Pr(li);
									break;
								case 10:
									_o(a.type._context);
									break;
								case 22:
								case 23:
									hc()
							}
							n = n.return
						}
					if (Nl = e, $l = e = Oc(e.current, null), Al = Il = t, Rl = 0, Dl = null, zl = Ll = Fl = 0, Bl = Vl = null, null !== So) {
						for (t = 0; t < So.length; t++)
							if (null !== (a = (n = So[t]).interleaved)) {
								n.interleaved = null;
								var r = a.next,
									o = n.pending;
								if (null !== o) {
									var i = o.next;
									o.next = r, a.next = i
								}
								n.pending = a
							} So = null
					}
					return e
				}

				function pc(e, t) {
					for (;;) {
						var n = $l;
						try {
							if (To(), hi.current = is, bi) {
								for (var a = mi.memoizedState; null !== a;) {
									var r = a.queue;
									null !== r && (r.pending = null), a = a.next
								}
								bi = !1
							}
							if (pi = 0, yi = gi = mi = null, vi = !1, xi = 0, Sl.current = null, null === n || null === n.return) {
								Rl = 1, Dl = t, $l = null;
								break
							}
							e: {
								var i = e,
									s = n.return,
									l = n,
									c = t;
								if (t = Al, l.flags |= 32768, null !== c && "object" == typeof c && "function" == typeof c.then) {
									var u = c,
										d = l,
										h = d.tag;
									if (0 == (1 & d.mode) && (0 === h || 11 === h || 15 === h)) {
										var f = d.alternate;
										f ? (d.updateQueue = f.updateQueue, d.memoizedState = f.memoizedState, d.lanes = f.lanes) : (d.updateQueue = null, d.memoizedState = null)
									}
									var p = ys(s);
									if (null !== p) {
										p.flags &= -257, bs(p, s, l, 0, t), 1 & p.mode && gs(i, u, t), c = u;
										var m = (t = p).updateQueue;
										if (null === m) {
											var g = new Set;
											g.add(c), t.updateQueue = g
										} else m.add(c);
										break e
									}
									if (0 == (1 & t)) {
										gs(i, u, t), gc();
										break e
									}
									c = Error(o(426))
								} else if (ro && 1 & l.mode) {
									var y = ys(s);
									if (null !== y) {
										0 == (65536 & y.flags) && (y.flags |= 256), bs(y, s, l, 0, t), mo(us(c, l));
										break e
									}
								}
								i = c = us(c, l),
								4 !== Rl && (Rl = 2),
								null === Vl ? Vl = [i] : Vl.push(i),
								i = s;do {
									switch (i.tag) {
										case 3:
											i.flags |= 65536, t &= -t, i.lanes |= t, Fo(i, ps(0, c, t));
											break e;
										case 1:
											l = c;
											var b = i.type,
												v = i.stateNode;
											if (0 == (128 & i.flags) && ("function" == typeof b.getDerivedStateFromError || null !== v && "function" == typeof v.componentDidCatch && (null === Ul || !Ul.has(v)))) {
												i.flags |= 65536, t &= -t, i.lanes |= t, Fo(i, ms(i, l, t));
												break e
											}
									}
									i = i.return
								} while (null !== i)
							}
							wc(n)
						} catch (e) {
							t = e, $l === n && null !== n && ($l = n = n.return);
							continue
						}
						break
					}
				}

				function mc() {
					var e = El.current;
					return El.current = is, null === e ? is : e
				}

				function gc() {
					0 !== Rl && 3 !== Rl && 2 !== Rl || (Rl = 4), null === Nl || 0 == (268435455 & Fl) && 0 == (268435455 & Ll) || lc(Nl, Al)
				}

				function yc(e, t) {
					var n = Ml;
					Ml |= 2;
					var a = mc();
					for (Nl === e && Al === t || (ql = null, fc(e, t));;) try {
						bc();
						break
					} catch (t) {
						pc(e, t)
					}
					if (To(), Ml = n, El.current = a, null !== $l) throw Error(o(261));
					return Nl = null, Al = 0, Rl
				}

				function bc() {
					for (; null !== $l;) xc($l)
				}

				function vc() {
					for (; null !== $l && !Qe();) xc($l)
				}

				function xc(e) {
					var t = kl(e.alternate, e, Il);
					e.memoizedProps = e.pendingProps, null === t ? wc(e) : $l = t, Sl.current = null
				}

				function wc(e) {
					var t = e;
					do {
						var n = t.alternate;
						if (e = t.return, 0 == (32768 & t.flags)) {
							if (null !== (n = Zs(n, t, Il))) return void($l = n)
						} else {
							if (null !== (n = Qs(n, t))) return n.flags &= 32767, void($l = n);
							if (null === e) return Rl = 6, void($l = null);
							e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null
						}
						if (null !== (t = t.sibling)) return void($l = t);
						$l = t = e
					} while (null !== t);
					0 === Rl && (Rl = 5)
				}

				function Tc(e, t, n) {
					var a = vt,
						r = Cl.transition;
					try {
						Cl.transition = null, vt = 1,
							function(e, t, n, a) {
								do {
									_c()
								} while (null !== Ql);
								if (0 != (6 & Ml)) throw Error(o(327));
								n = e.finishedWork;
								var r = e.finishedLanes;
								if (null === n) return null;
								if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(o(177));
								e.callbackNode = null, e.callbackPriority = 0;
								var i = n.lanes | n.childLanes;
								if (function(e, t) {
										var n = e.pendingLanes & ~t;
										e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
										var a = e.eventTimes;
										for (e = e.expirationTimes; 0 < n;) {
											var r = 31 - it(n),
												o = 1 << r;
											t[r] = 0, a[r] = -1, e[r] = -1, n &= ~o
										}
									}(e, i), e === Nl && ($l = Nl = null, Al = 0), 0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags) || Zl || (Zl = !0, Nc(tt, (function() {
										return _c(), null
									}))), i = 0 != (15990 & n.flags), 0 != (15990 & n.subtreeFlags) || i) {
									i = Cl.transition, Cl.transition = null;
									var s = vt;
									vt = 1;
									var l = Ml;
									Ml |= 4, Sl.current = null,
										function(e, t) {
											if (er = qt, fa(e = ha())) {
												if ("selectionStart" in e) var n = {
													start: e.selectionStart,
													end: e.selectionEnd
												};
												else e: {
													var a = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
													if (a && 0 !== a.rangeCount) {
														n = a.anchorNode;
														var r = a.anchorOffset,
															i = a.focusNode;
														a = a.focusOffset;
														try {
															n.nodeType, i.nodeType
														} catch (e) {
															n = null;
															break e
														}
														var s = 0,
															l = -1,
															c = -1,
															u = 0,
															d = 0,
															h = e,
															f = null;
														t: for (;;) {
															for (var p; h !== n || 0 !== r && 3 !== h.nodeType || (l = s + r), h !== i || 0 !== a && 3 !== h.nodeType || (c = s + a), 3 === h.nodeType && (s += h.nodeValue.length), null !== (p = h.firstChild);) f = h, h = p;
															for (;;) {
																if (h === e) break t;
																if (f === n && ++u === r && (l = s), f === i && ++d === a && (c = s), null !== (p = h.nextSibling)) break;
																f = (h = f).parentNode
															}
															h = p
														}
														n = -1 === l || -1 === c ? null : {
															start: l,
															end: c
														}
													} else n = null
												}
												n = n || {
													start: 0,
													end: 0
												}
											} else n = null;
											for (tr = {
													focusedElem: e,
													selectionRange: n
												}, qt = !1, Js = t; null !== Js;)
												if (e = (t = Js).child, 0 != (1028 & t.subtreeFlags) && null !== e) e.return = t, Js = e;
												else
													for (; null !== Js;) {
														t = Js;
														try {
															var m = t.alternate;
															if (0 != (1024 & t.flags)) switch (t.tag) {
																case 0:
																case 11:
																case 15:
																case 5:
																case 6:
																case 4:
																case 17:
																	break;
																case 1:
																	if (null !== m) {
																		var g = m.memoizedProps,
																			y = m.memoizedState,
																			b = t.stateNode,
																			v = b.getSnapshotBeforeUpdate(t.elementType === t.type ? g : yo(t.type, g), y);
																		b.__reactInternalSnapshotBeforeUpdate = v
																	}
																	break;
																case 3:
																	var x = t.stateNode.containerInfo;
																	1 === x.nodeType ? x.textContent = "" : 9 === x.nodeType && x.documentElement && x.removeChild(x.documentElement);
																	break;
																default:
																	throw Error(o(163))
															}
														} catch (e) {
															Pc(t, t.return, e)
														}
														if (null !== (e = t.sibling)) {
															e.return = t.return, Js = e;
															break
														}
														Js = t.return
													}
											m = nl, nl = !1
										}(e, n), yl(n, e), pa(tr), qt = !!er, tr = er = null, e.current = n, vl(n, e, r), Ge(), Ml = l, vt = s, Cl.transition = i
								} else e.current = n;
								if (Zl && (Zl = !1, Ql = e, Gl = r), i = e.pendingLanes, 0 === i && (Ul = null), function(e) {
										if (ot && "function" == typeof ot.onCommitFiberRoot) try {
											ot.onCommitFiberRoot(rt, e, void 0, 128 == (128 & e.current.flags))
										} catch (e) {}
									}(n.stateNode), rc(e, Xe()), null !== t)
									for (a = e.onRecoverableError, n = 0; n < t.length; n++) r = t[n], a(r.value, {
										componentStack: r.stack,
										digest: r.digest
									});
								if (Wl) throw Wl = !1, e = Yl, Yl = null, e;
								0 != (1 & Gl) && 0 !== e.tag && _c(), i = e.pendingLanes, 0 != (1 & i) ? e === Kl ? Xl++ : (Xl = 0, Kl = e) : Xl = 0, jr()
							}(e, t, n, a)
					} finally {
						Cl.transition = r, vt = a
					}
					return null
				}

				function _c() {
					if (null !== Ql) {
						var e = xt(Gl),
							t = Cl.transition,
							n = vt;
						try {
							if (Cl.transition = null, vt = 16 > e ? 16 : e, null === Ql) var a = !1;
							else {
								if (e = Ql, Ql = null, Gl = 0, 0 != (6 & Ml)) throw Error(o(331));
								var r = Ml;
								for (Ml |= 4, Js = e.current; null !== Js;) {
									var i = Js,
										s = i.child;
									if (0 != (16 & Js.flags)) {
										var l = i.deletions;
										if (null !== l) {
											for (var c = 0; c < l.length; c++) {
												var u = l[c];
												for (Js = u; null !== Js;) {
													var d = Js;
													switch (d.tag) {
														case 0:
														case 11:
														case 15:
															al(8, d, i)
													}
													var h = d.child;
													if (null !== h) h.return = d, Js = h;
													else
														for (; null !== Js;) {
															var f = (d = Js).sibling,
																p = d.return;
															if (il(d), d === u) {
																Js = null;
																break
															}
															if (null !== f) {
																f.return = p, Js = f;
																break
															}
															Js = p
														}
												}
											}
											var m = i.alternate;
											if (null !== m) {
												var g = m.child;
												if (null !== g) {
													m.child = null;
													do {
														var y = g.sibling;
														g.sibling = null, g = y
													} while (null !== g)
												}
											}
											Js = i
										}
									}
									if (0 != (2064 & i.subtreeFlags) && null !== s) s.return = i, Js = s;
									else e: for (; null !== Js;) {
										if (0 != (2048 & (i = Js).flags)) switch (i.tag) {
											case 0:
											case 11:
											case 15:
												al(9, i, i.return)
										}
										var b = i.sibling;
										if (null !== b) {
											b.return = i.return, Js = b;
											break e
										}
										Js = i.return
									}
								}
								var v = e.current;
								for (Js = v; null !== Js;) {
									var x = (s = Js).child;
									if (0 != (2064 & s.subtreeFlags) && null !== x) x.return = s, Js = x;
									else e: for (s = v; null !== Js;) {
										if (0 != (2048 & (l = Js).flags)) try {
											switch (l.tag) {
												case 0:
												case 11:
												case 15:
													rl(9, l)
											}
										} catch (e) {
											Pc(l, l.return, e)
										}
										if (l === s) {
											Js = null;
											break e
										}
										var w = l.sibling;
										if (null !== w) {
											w.return = l.return, Js = w;
											break e
										}
										Js = l.return
									}
								}
								if (Ml = r, jr(), ot && "function" == typeof ot.onPostCommitFiberRoot) try {
									ot.onPostCommitFiberRoot(rt, e)
								} catch (e) {}
								a = !0
							}
							return a
						} finally {
							vt = n, Cl.transition = t
						}
					}
					return !1
				}

				function kc(e, t, n) {
					e = Ro(e, t = ps(0, t = us(n, t), 1), 1), t = tc(), null !== e && (yt(e, 1, t), rc(e, t))
				}

				function Pc(e, t, n) {
					if (3 === e.tag) kc(e, e, n);
					else
						for (; null !== t;) {
							if (3 === t.tag) {
								kc(t, e, n);
								break
							}
							if (1 === t.tag) {
								var a = t.stateNode;
								if ("function" == typeof t.type.getDerivedStateFromError || "function" == typeof a.componentDidCatch && (null === Ul || !Ul.has(a))) {
									t = Ro(t, e = ms(t, e = us(n, e), 1), 1), e = tc(), null !== t && (yt(t, 1, e), rc(t, e));
									break
								}
							}
							t = t.return
						}
				}

				function Ec(e, t, n) {
					var a = e.pingCache;
					null !== a && a.delete(t), t = tc(), e.pingedLanes |= e.suspendedLanes & n, Nl === e && (Al & n) === n && (4 === Rl || 3 === Rl && (130023424 & Al) === Al && 500 > Xe() - jl ? fc(e, 0) : zl |= n), rc(e, t)
				}

				function Sc(e, t) {
					0 === t && (0 == (1 & e.mode) ? t = 1 : (t = ut, 0 == (130023424 & (ut <<= 1)) && (ut = 4194304)));
					var n = tc();
					null !== (e = No(e, t)) && (yt(e, t, n), rc(e, n))
				}

				function Cc(e) {
					var t = e.memoizedState,
						n = 0;
					null !== t && (n = t.retryLane), Sc(e, n)
				}

				function Mc(e, t) {
					var n = 0;
					switch (e.tag) {
						case 13:
							var a = e.stateNode,
								r = e.memoizedState;
							null !== r && (n = r.retryLane);
							break;
						case 19:
							a = e.stateNode;
							break;
						default:
							throw Error(o(314))
					}
					null !== a && a.delete(t), Sc(e, n)
				}

				function Nc(e, t) {
					return Ue(e, t)
				}

				function $c(e, t, n, a) {
					this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
				}

				function Ac(e, t, n, a) {
					return new $c(e, t, n, a)
				}

				function Ic(e) {
					return !(!(e = e.prototype) || !e.isReactComponent)
				}

				function Oc(e, t) {
					var n = e.alternate;
					return null === n ? ((n = Ac(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
						lanes: t.lanes,
						firstContext: t.firstContext
					}, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
				}

				function Rc(e, t, n, a, r, i) {
					var s = 2;
					if (a = e, "function" == typeof e) Ic(e) && (s = 1);
					else if ("string" == typeof e) s = 5;
					else e: switch (e) {
						case _:
							return Dc(n.children, r, i, t);
						case k:
							s = 8, r |= 8;
							break;
						case P:
							return (e = Ac(12, n, t, 2 | r)).elementType = P, e.lanes = i, e;
						case M:
							return (e = Ac(13, n, t, r)).elementType = M, e.lanes = i, e;
						case N:
							return (e = Ac(19, n, t, r)).elementType = N, e.lanes = i, e;
						case I:
							return Fc(n, r, i, t);
						default:
							if ("object" == typeof e && null !== e) switch (e.$$typeof) {
								case E:
									s = 10;
									break e;
								case S:
									s = 9;
									break e;
								case C:
									s = 11;
									break e;
								case $:
									s = 14;
									break e;
								case A:
									s = 16, a = null;
									break e
							}
							throw Error(o(130, null == e ? e : typeof e, ""))
					}
					return (t = Ac(s, n, t, r)).elementType = e, t.type = a, t.lanes = i, t
				}

				function Dc(e, t, n, a) {
					return (e = Ac(7, e, a, t)).lanes = n, e
				}

				function Fc(e, t, n, a) {
					return (e = Ac(22, e, a, t)).elementType = I, e.lanes = n, e.stateNode = {
						isHidden: !1
					}, e
				}

				function Lc(e, t, n) {
					return (e = Ac(6, e, null, t)).lanes = n, e
				}

				function zc(e, t, n) {
					return (t = Ac(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
						containerInfo: e.containerInfo,
						pendingChildren: null,
						implementation: e.implementation
					}, t
				}

				function Vc(e, t, n, a, r) {
					this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = gt(0), this.expirationTimes = gt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = gt(0), this.identifierPrefix = a, this.onRecoverableError = r, this.mutableSourceEagerHydrationData = null
				}

				function Bc(e, t, n, a, r, o, i, s, l) {
					return e = new Vc(e, t, n, s, l), 1 === t ? (t = 1, !0 === o && (t |= 8)) : t = 0, o = Ac(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
						element: a,
						isDehydrated: n,
						cache: null,
						transitions: null,
						pendingSuspenseBoundaries: null
					}, Ao(o), e
				}

				function jc(e) {
					if (!e) return Sr;
					e: {
						if (je(e = e._reactInternals) !== e || 1 !== e.tag) throw Error(o(170));
						var t = e;do {
							switch (t.tag) {
								case 3:
									t = t.stateNode.context;
									break e;
								case 1:
									if (Ar(t.type)) {
										t = t.stateNode.__reactInternalMemoizedMergedChildContext;
										break e
									}
							}
							t = t.return
						} while (null !== t);
						throw Error(o(171))
					}
					if (1 === e.tag) {
						var n = e.type;
						if (Ar(n)) return Rr(e, n, t)
					}
					return t
				}

				function Hc(e, t, n, a, r, o, i, s, l) {
					return (e = Bc(n, a, !0, e, 0, o, 0, s, l)).context = jc(null), n = e.current, (o = Oo(a = tc(), r = nc(n))).callback = null != t ? t : null, Ro(n, o, r), e.current.lanes = r, yt(e, r, a), rc(e, a), e
				}

				function qc(e, t, n, a) {
					var r = t.current,
						o = tc(),
						i = nc(r);
					return n = jc(n), null === t.context ? t.context = n : t.pendingContext = n, (t = Oo(o, i)).payload = {
						element: e
					}, null !== (a = void 0 === a ? null : a) && (t.callback = a), null !== (e = Ro(r, t, i)) && (ac(e, r, i, o), Do(e, r, i)), i
				}

				function Wc(e) {
					return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null
				}

				function Yc(e, t) {
					if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
						var n = e.retryLane;
						e.retryLane = 0 !== n && n < t ? n : t
					}
				}

				function Uc(e, t) {
					Yc(e, t), (e = e.alternate) && Yc(e, t)
				}
				kl = function(e, t, n) {
					if (null !== e)
						if (e.memoizedProps !== t.pendingProps || Mr.current) xs = !0;
						else {
							if (0 == (e.lanes & n) && 0 == (128 & t.flags)) return xs = !1,
								function(e, t, n) {
									switch (t.tag) {
										case 3:
											Ns(t), po();
											break;
										case 5:
											ii(t);
											break;
										case 1:
											Ar(t.type) && Dr(t);
											break;
										case 4:
											ri(t, t.stateNode.containerInfo);
											break;
										case 10:
											var a = t.type._context,
												r = t.memoizedProps.value;
											Er(bo, a._currentValue), a._currentValue = r;
											break;
										case 13:
											if (null !== (a = t.memoizedState)) return null !== a.dehydrated ? (Er(li, 1 & li.current), t.flags |= 128, null) : 0 != (n & t.child.childLanes) ? Ls(e, t, n) : (Er(li, 1 & li.current), null !== (e = Ws(e, t, n)) ? e.sibling : null);
											Er(li, 1 & li.current);
											break;
										case 19:
											if (a = 0 != (n & t.childLanes), 0 != (128 & e.flags)) {
												if (a) return Hs(e, t, n);
												t.flags |= 128
											}
											if (null !== (r = t.memoizedState) && (r.rendering = null, r.tail = null, r.lastEffect = null), Er(li, li.current), a) break;
											return null;
										case 22:
										case 23:
											return t.lanes = 0, Ps(e, t, n)
									}
									return Ws(e, t, n)
								}(e, t, n);
							xs = 0 != (131072 & e.flags)
						}
					else xs = !1, ro && 0 != (1048576 & t.flags) && Jr(t, Yr, t.index);
					switch (t.lanes = 0, t.tag) {
						case 2:
							var a = t.type;
							qs(e, t), e = t.pendingProps;
							var r = $r(t, Cr.current);
							Po(t, n), r = ki(null, t, a, e, r, n);
							var i = Pi();
							return t.flags |= 1, "object" == typeof r && null !== r && "function" == typeof r.render && void 0 === r.$$typeof ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ar(a) ? (i = !0, Dr(t)) : i = !1, t.memoizedState = null !== r.state && void 0 !== r.state ? r.state : null, Ao(t), r.updater = jo, t.stateNode = r, r._reactInternals = t, Yo(t, a, e, n), t = Ms(null, t, a, !0, i, n)) : (t.tag = 0, ro && i && eo(t), ws(null, t, r, n), t = t.child), t;
						case 16:
							a = t.elementType;
							e: {
								switch (qs(e, t), e = t.pendingProps, a = (r = a._init)(a._payload), t.type = a, r = t.tag = function(e) {
										if ("function" == typeof e) return Ic(e) ? 1 : 0;
										if (null != e) {
											if ((e = e.$$typeof) === C) return 11;
											if (e === $) return 14
										}
										return 2
									}(a), e = yo(a, e), r) {
									case 0:
										t = Ss(null, t, a, e, n);
										break e;
									case 1:
										t = Cs(null, t, a, e, n);
										break e;
									case 11:
										t = Ts(null, t, a, e, n);
										break e;
									case 14:
										t = _s(null, t, a, yo(a.type, e), n);
										break e
								}
								throw Error(o(306, a, ""))
							}
							return t;
						case 0:
							return a = t.type, r = t.pendingProps, Ss(e, t, a, r = t.elementType === a ? r : yo(a, r), n);
						case 1:
							return a = t.type, r = t.pendingProps, Cs(e, t, a, r = t.elementType === a ? r : yo(a, r), n);
						case 3:
							e: {
								if (Ns(t), null === e) throw Error(o(387));a = t.pendingProps,
								r = (i = t.memoizedState).element,
								Io(e, t),
								Lo(t, a, null, n);
								var s = t.memoizedState;
								if (a = s.element, i.isDehydrated) {
									if (i = {
											element: a,
											isDehydrated: !1,
											cache: s.cache,
											pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
											transitions: s.transitions
										}, t.updateQueue.baseState = i, t.memoizedState = i, 256 & t.flags) {
										t = $s(e, t, a, n, r = us(Error(o(423)), t));
										break e
									}
									if (a !== r) {
										t = $s(e, t, a, n, r = us(Error(o(424)), t));
										break e
									}
									for (ao = cr(t.stateNode.containerInfo.firstChild), no = t, ro = !0, oo = null, n = Ko(t, null, a, n), t.child = n; n;) n.flags = -3 & n.flags | 4096, n = n.sibling
								} else {
									if (po(), a === r) {
										t = Ws(e, t, n);
										break e
									}
									ws(e, t, a, n)
								}
								t = t.child
							}
							return t;
						case 5:
							return ii(t), null === e && co(t), a = t.type, r = t.pendingProps, i = null !== e ? e.memoizedProps : null, s = r.children, nr(a, r) ? s = null : null !== i && nr(a, i) && (t.flags |= 32), Es(e, t), ws(e, t, s, n), t.child;
						case 6:
							return null === e && co(t), null;
						case 13:
							return Ls(e, t, n);
						case 4:
							return ri(t, t.stateNode.containerInfo), a = t.pendingProps, null === e ? t.child = Xo(t, null, a, n) : ws(e, t, a, n), t.child;
						case 11:
							return a = t.type, r = t.pendingProps, Ts(e, t, a, r = t.elementType === a ? r : yo(a, r), n);
						case 7:
							return ws(e, t, t.pendingProps, n), t.child;
						case 8:
						case 12:
							return ws(e, t, t.pendingProps.children, n), t.child;
						case 10:
							e: {
								if (a = t.type._context, r = t.pendingProps, i = t.memoizedProps, s = r.value, Er(bo, a._currentValue), a._currentValue = s, null !== i)
									if (sa(i.value, s)) {
										if (i.children === r.children && !Mr.current) {
											t = Ws(e, t, n);
											break e
										}
									} else
										for (null !== (i = t.child) && (i.return = t); null !== i;) {
											var l = i.dependencies;
											if (null !== l) {
												s = i.child;
												for (var c = l.firstContext; null !== c;) {
													if (c.context === a) {
														if (1 === i.tag) {
															(c = Oo(-1, n & -n)).tag = 2;
															var u = i.updateQueue;
															if (null !== u) {
																var d = (u = u.shared).pending;
																null === d ? c.next = c : (c.next = d.next, d.next = c), u.pending = c
															}
														}
														i.lanes |= n, null !== (c = i.alternate) && (c.lanes |= n), ko(i.return, n, t), l.lanes |= n;
														break
													}
													c = c.next
												}
											} else if (10 === i.tag) s = i.type === t.type ? null : i.child;
											else if (18 === i.tag) {
												if (null === (s = i.return)) throw Error(o(341));
												s.lanes |= n, null !== (l = s.alternate) && (l.lanes |= n), ko(s, n, t), s = i.sibling
											} else s = i.child;
											if (null !== s) s.return = i;
											else
												for (s = i; null !== s;) {
													if (s === t) {
														s = null;
														break
													}
													if (null !== (i = s.sibling)) {
														i.return = s.return, s = i;
														break
													}
													s = s.return
												}
											i = s
										}
								ws(e, t, r.children, n),
								t = t.child
							}
							return t;
						case 9:
							return r = t.type, a = t.pendingProps.children, Po(t, n), a = a(r = Eo(r)), t.flags |= 1, ws(e, t, a, n), t.child;
						case 14:
							return r = yo(a = t.type, t.pendingProps), _s(e, t, a, r = yo(a.type, r), n);
						case 15:
							return ks(e, t, t.type, t.pendingProps, n);
						case 17:
							return a = t.type, r = t.pendingProps, r = t.elementType === a ? r : yo(a, r), qs(e, t), t.tag = 1, Ar(a) ? (e = !0, Dr(t)) : e = !1, Po(t, n), qo(t, a, r), Yo(t, a, r, n), Ms(null, t, a, !0, e, n);
						case 19:
							return Hs(e, t, n);
						case 22:
							return Ps(e, t, n)
					}
					throw Error(o(156, t.tag))
				};
				var Zc = "function" == typeof reportError ? reportError : function(e) {
					console.error(e)
				};

				function Qc(e) {
					this._internalRoot = e
				}

				function Gc(e) {
					this._internalRoot = e
				}

				function Xc(e) {
					return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
				}

				function Kc(e) {
					return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
				}

				function Jc() {}

				function eu(e, t, n, a, r) {
					var o = n._reactRootContainer;
					if (o) {
						var i = o;
						if ("function" == typeof r) {
							var s = r;
							r = function() {
								var e = Wc(i);
								s.call(e)
							}
						}
						qc(t, i, e, r)
					} else i = function(e, t, n, a, r) {
						if (r) {
							if ("function" == typeof a) {
								var o = a;
								a = function() {
									var e = Wc(i);
									o.call(e)
								}
							}
							var i = Hc(t, a, e, 0, null, !1, 0, "", Jc);
							return e._reactRootContainer = i, e[pr] = i.current, ja(8 === e.nodeType ? e.parentNode : e), dc(), i
						}
						for (; r = e.lastChild;) e.removeChild(r);
						if ("function" == typeof a) {
							var s = a;
							a = function() {
								var e = Wc(l);
								s.call(e)
							}
						}
						var l = Bc(e, 0, !1, null, 0, !1, 0, "", Jc);
						return e._reactRootContainer = l, e[pr] = l.current, ja(8 === e.nodeType ? e.parentNode : e), dc((function() {
							qc(t, l, n, a)
						})), l
					}(n, t, e, r, a);
					return Wc(i)
				}
				Gc.prototype.render = Qc.prototype.render = function(e) {
					var t = this._internalRoot;
					if (null === t) throw Error(o(409));
					qc(e, t, null, null)
				}, Gc.prototype.unmount = Qc.prototype.unmount = function() {
					var e = this._internalRoot;
					if (null !== e) {
						this._internalRoot = null;
						var t = e.containerInfo;
						dc((function() {
							qc(null, e, null, null)
						})), t[pr] = null
					}
				}, Gc.prototype.unstable_scheduleHydration = function(e) {
					if (e) {
						var t = kt();
						e = {
							blockedOn: null,
							target: e,
							priority: t
						};
						for (var n = 0; n < It.length && 0 !== t && t < It[n].priority; n++);
						It.splice(n, 0, e), 0 === n && Ft(e)
					}
				}, wt = function(e) {
					switch (e.tag) {
						case 3:
							var t = e.stateNode;
							if (t.current.memoizedState.isDehydrated) {
								var n = dt(t.pendingLanes);
								0 !== n && (bt(t, 1 | n), rc(t, Xe()), 0 == (6 & Ml) && (Hl = Xe() + 500, jr()))
							}
							break;
						case 13:
							dc((function() {
								var t = No(e, 1);
								if (null !== t) {
									var n = tc();
									ac(t, e, 1, n)
								}
							})), Uc(e, 1)
					}
				}, Tt = function(e) {
					if (13 === e.tag) {
						var t = No(e, 134217728);
						if (null !== t) ac(t, e, 134217728, tc());
						Uc(e, 134217728)
					}
				}, _t = function(e) {
					if (13 === e.tag) {
						var t = nc(e),
							n = No(e, t);
						if (null !== n) ac(n, e, t, tc());
						Uc(e, t)
					}
				}, kt = function() {
					return vt
				}, Pt = function(e, t) {
					var n = vt;
					try {
						return vt = e, t()
					} finally {
						vt = n
					}
				}, Te = function(e, t, n) {
					switch (t) {
						case "input":
							if (K(e, n), t = n.name, "radio" === n.type && null != t) {
								for (n = e; n.parentNode;) n = n.parentNode;
								for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
									var a = n[t];
									if (a !== e && a.form === e.form) {
										var r = wr(a);
										if (!r) throw Error(o(90));
										U(a), K(a, r)
									}
								}
							}
							break;
						case "textarea":
							oe(e, n);
							break;
						case "select":
							null != (t = n.value) && ne(e, !!n.multiple, t, !1)
					}
				}, Ce = uc, Me = dc;
				var tu = {
						usingClientEntryPoint: !1,
						Events: [vr, xr, wr, Ee, Se, uc]
					},
					nu = {
						findFiberByHostInstance: br,
						bundleType: 0,
						version: "18.2.0",
						rendererPackageName: "react-dom"
					},
					au = {
						bundleType: nu.bundleType,
						version: nu.version,
						rendererPackageName: nu.rendererPackageName,
						rendererConfig: nu.rendererConfig,
						overrideHookState: null,
						overrideHookStateDeletePath: null,
						overrideHookStateRenamePath: null,
						overrideProps: null,
						overridePropsDeletePath: null,
						overridePropsRenamePath: null,
						setErrorHandler: null,
						setSuspenseHandler: null,
						scheduleUpdate: null,
						currentDispatcherRef: x.ReactCurrentDispatcher,
						findHostInstanceByFiber: function(e) {
							return null === (e = We(e)) ? null : e.stateNode
						},
						findFiberByHostInstance: nu.findFiberByHostInstance || function() {
							return null
						},
						findHostInstancesForRefresh: null,
						scheduleRefresh: null,
						scheduleRoot: null,
						setRefreshHandler: null,
						getCurrentFiber: null,
						reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
					};
				if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
					var ru = __REACT_DEVTOOLS_GLOBAL_HOOK__;
					if (!ru.isDisabled && ru.supportsFiber) try {
						rt = ru.inject(au), ot = ru
					} catch (ue) {}
				}
				t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tu, t.createPortal = function(e, t) {
					var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
					if (!Xc(t)) throw Error(o(200));
					return function(e, t, n) {
						var a = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
						return {
							$$typeof: T,
							key: null == a ? null : "" + a,
							children: e,
							containerInfo: t,
							implementation: n
						}
					}(e, t, null, n)
				}, t.createRoot = function(e, t) {
					if (!Xc(e)) throw Error(o(299));
					var n = !1,
						a = "",
						r = Zc;
					return null != t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (a = t.identifierPrefix), void 0 !== t.onRecoverableError && (r = t.onRecoverableError)), t = Bc(e, 1, !1, null, 0, n, 0, a, r), e[pr] = t.current, ja(8 === e.nodeType ? e.parentNode : e), new Qc(t)
				}, t.findDOMNode = function(e) {
					if (null == e) return null;
					if (1 === e.nodeType) return e;
					var t = e._reactInternals;
					if (void 0 === t) {
						if ("function" == typeof e.render) throw Error(o(188));
						throw e = Object.keys(e).join(","), Error(o(268, e))
					}
					return e = null === (e = We(t)) ? null : e.stateNode
				}, t.flushSync = function(e) {
					return dc(e)
				}, t.hydrate = function(e, t, n) {
					if (!Kc(t)) throw Error(o(200));
					return eu(null, e, t, !0, n)
				}, t.hydrateRoot = function(e, t, n) {
					if (!Xc(e)) throw Error(o(405));
					var a = null != n && n.hydratedSources || null,
						r = !1,
						i = "",
						s = Zc;
					if (null != n && (!0 === n.unstable_strictMode && (r = !0), void 0 !== n.identifierPrefix && (i = n.identifierPrefix), void 0 !== n.onRecoverableError && (s = n.onRecoverableError)), t = Hc(t, null, e, 1, null != n ? n : null, r, 0, i, s), e[pr] = t.current, ja(e), a)
						for (e = 0; e < a.length; e++) r = (r = (n = a[e])._getVersion)(n._source), null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [n, r] : t.mutableSourceEagerHydrationData.push(n, r);
					return new Gc(t)
				}, t.render = function(e, t, n) {
					if (!Kc(t)) throw Error(o(200));
					return eu(null, e, t, !1, n)
				}, t.unmountComponentAtNode = function(e) {
					if (!Kc(e)) throw Error(o(40));
					return !!e._reactRootContainer && (dc((function() {
						eu(null, null, e, !1, (function() {
							e._reactRootContainer = null, e[pr] = null
						}))
					})), !0)
				}, t.unstable_batchedUpdates = uc, t.unstable_renderSubtreeIntoContainer = function(e, t, n, a) {
					if (!Kc(n)) throw Error(o(200));
					if (null == e || void 0 === e._reactInternals) throw Error(o(38));
					return eu(e, t, n, !1, a)
				}, t.version = "18.2.0-next-9e3b772b8-20220608"
			},
			935: (e, t, n) => {
				"use strict";
				! function e() {
					if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
						__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
					} catch (e) {
						console.error(e)
					}
				}(), e.exports = n(101)
			},
			39: function(e, t, n) {
				"use strict";
				var a, r = this && this.__extends || (a = function(e, t) {
						return a = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(e, t) {
							e.__proto__ = t
						} || function(e, t) {
							for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
						}, a(e, t)
					}, function(e, t) {
						if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

						function n() {
							this.constructor = e
						}
						a(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
					}),
					o = this && this.__createBinding || (Object.create ? function(e, t, n, a) {
						void 0 === a && (a = n);
						var r = Object.getOwnPropertyDescriptor(t, n);
						r && !("get" in r ? !t.__esModule : r.writable || r.configurable) || (r = {
							enumerable: !0,
							get: function() {
								return t[n]
							}
						}), Object.defineProperty(e, a, r)
					} : function(e, t, n, a) {
						void 0 === a && (a = n), e[a] = t[n]
					}),
					i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
						Object.defineProperty(e, "default", {
							enumerable: !0,
							value: t
						})
					} : function(e, t) {
						e.default = t
					}),
					s = this && this.__importStar || function(e) {
						if (e && e.__esModule) return e;
						var t = {};
						if (null != e)
							for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && o(t, e, n);
						return i(t, e), t
					},
					l = this && this.__spreadArray || function(e, t, n) {
						if (n || 2 === arguments.length)
							for (var a, r = 0, o = t.length; r < o; r++) !a && r in t || (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
						return e.concat(a || Array.prototype.slice.call(t))
					};
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var c = s(n(294)),
					u = n(826),
					d = n(234),
					h = ["ArrowRight", "ArrowUp", "k", "PageUp"],
					f = ["ArrowLeft", "ArrowDown", "j", "PageDown"],
					p = function(e) {
						function t(t) {
							var n = e.call(this, t) || this;
							if (n.trackRef = c.createRef(), n.thumbRefs = [], n.state = {
									draggedTrackPos: [-1, -1],
									draggedThumbIndex: -1,
									thumbZIndexes: new Array(n.props.values.length).fill(0).map((function(e, t) {
										return t
									})),
									isChanged: !1,
									markOffsets: []
								}, n.getOffsets = function() {
									var e = n.props,
										t = e.direction,
										a = e.values,
										r = e.min,
										o = e.max,
										i = n.trackRef.current,
										s = i.getBoundingClientRect(),
										l = (0, u.getPaddingAndBorder)(i);
									return n.getThumbs().map((function(e, n) {
										var i = {
												x: 0,
												y: 0
											},
											c = e.getBoundingClientRect(),
											h = (0, u.getMargin)(e);
										switch (t) {
											case d.Direction.Right:
												return i.x = -1 * (h.left + l.left), i.y = -1 * ((c.height - s.height) / 2 + l.top), i.x += s.width * (0, u.relativeValue)(a[n], r, o) - c.width / 2, i;
											case d.Direction.Left:
												return i.x = -1 * (h.right + l.right), i.y = -1 * ((c.height - s.height) / 2 + l.top), i.x += s.width - s.width * (0, u.relativeValue)(a[n], r, o) - c.width / 2, i;
											case d.Direction.Up:
												return i.x = -1 * ((c.width - s.width) / 2 + h.left + l.left), i.y = -l.left, i.y += s.height - s.height * (0, u.relativeValue)(a[n], r, o) - c.height / 2, i;
											case d.Direction.Down:
												return i.x = -1 * ((c.width - s.width) / 2 + h.left + l.left), i.y = -l.left, i.y += s.height * (0, u.relativeValue)(a[n], r, o) - c.height / 2, i;
											default:
												return (0, u.assertUnreachable)(t)
										}
									}))
								}, n.getThumbs = function() {
									return n.trackRef && n.trackRef.current ? Array.from(n.trackRef.current.children).filter((function(e) {
										return e.hasAttribute("aria-valuenow")
									})) : (console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"), [])
								}, n.getTargetIndex = function(e) {
									return n.getThumbs().findIndex((function(t) {
										return t === e.target || t.contains(e.target)
									}))
								}, n.addTouchEvents = function(e) {
									document.addEventListener("touchmove", n.schdOnTouchMove, {
										passive: !1
									}), document.addEventListener("touchend", n.schdOnEnd, {
										passive: !1
									}), document.addEventListener("touchcancel", n.schdOnEnd, {
										passive: !1
									})
								}, n.addMouseEvents = function(e) {
									document.addEventListener("mousemove", n.schdOnMouseMove), document.addEventListener("mouseup", n.schdOnEnd)
								}, n.onMouseDownTrack = function(e) {
									var t;
									if (0 === e.button)
										if (e.persist(), e.preventDefault(), n.addMouseEvents(e.nativeEvent), n.props.values.length > 1 && n.props.draggableTrack) {
											if (n.thumbRefs.some((function(t) {
													var n;
													return null === (n = t.current) || void 0 === n ? void 0 : n.contains(e.target)
												}))) return;
											n.setState({
												draggedTrackPos: [e.clientX, e.clientY]
											}, (function() {
												return n.onMove(e.clientX, e.clientY)
											}))
										} else {
											var a = (0, u.getClosestThumbIndex)(n.thumbRefs.map((function(e) {
												return e.current
											})), e.clientX, e.clientY, n.props.direction);
											null === (t = n.thumbRefs[a].current) || void 0 === t || t.focus(), n.setState({
												draggedThumbIndex: a
											}, (function() {
												return n.onMove(e.clientX, e.clientY)
											}))
										}
								}, n.onResize = function() {
									(0, u.translateThumbs)(n.getThumbs(), n.getOffsets(), n.props.rtl), n.calculateMarkOffsets()
								}, n.onTouchStartTrack = function(e) {
									var t;
									if (e.persist(), n.addTouchEvents(e.nativeEvent), n.props.values.length > 1 && n.props.draggableTrack) {
										if (n.thumbRefs.some((function(t) {
												var n;
												return null === (n = t.current) || void 0 === n ? void 0 : n.contains(e.target)
											}))) return;
										n.setState({
											draggedTrackPos: [e.touches[0].clientX, e.touches[0].clientY]
										}, (function() {
											return n.onMove(e.touches[0].clientX, e.touches[0].clientY)
										}))
									} else {
										var a = (0, u.getClosestThumbIndex)(n.thumbRefs.map((function(e) {
											return e.current
										})), e.touches[0].clientX, e.touches[0].clientY, n.props.direction);
										null === (t = n.thumbRefs[a].current) || void 0 === t || t.focus(), n.setState({
											draggedThumbIndex: a
										}, (function() {
											return n.onMove(e.touches[0].clientX, e.touches[0].clientY)
										}))
									}
								}, n.onMouseOrTouchStart = function(e) {
									if (!n.props.disabled) {
										var t = (0, u.isTouchEvent)(e);
										if (t || 0 === e.button) {
											var a = n.getTargetIndex(e); - 1 !== a && (t ? n.addTouchEvents(e) : n.addMouseEvents(e), n.setState({
												draggedThumbIndex: a,
												thumbZIndexes: n.state.thumbZIndexes.map((function(e, t) {
													return t === a ? Math.max.apply(Math, n.state.thumbZIndexes) : e <= n.state.thumbZIndexes[a] ? e : e - 1
												}))
											}))
										}
									}
								}, n.onMouseMove = function(e) {
									e.preventDefault(), n.onMove(e.clientX, e.clientY)
								}, n.onTouchMove = function(e) {
									e.preventDefault(), n.onMove(e.touches[0].clientX, e.touches[0].clientY)
								}, n.onKeyDown = function(e) {
									var t = n.props,
										a = t.values,
										r = t.onChange,
										o = t.step,
										i = t.rtl,
										s = t.direction,
										l = n.state.isChanged,
										c = n.getTargetIndex(e.nativeEvent),
										p = i || s === d.Direction.Left || s === d.Direction.Down ? -1 : 1; - 1 !== c && (h.includes(e.key) ? (e.preventDefault(), n.setState({
										draggedThumbIndex: c,
										isChanged: !0
									}), r((0, u.replaceAt)(a, c, n.normalizeValue(a[c] + p * ("PageUp" === e.key ? 10 * o : o), c)))) : f.includes(e.key) ? (e.preventDefault(), n.setState({
										draggedThumbIndex: c,
										isChanged: !0
									}), r((0, u.replaceAt)(a, c, n.normalizeValue(a[c] - p * ("PageDown" === e.key ? 10 * o : o), c)))) : "Tab" === e.key ? n.setState({
										draggedThumbIndex: -1
									}, (function() {
										l && n.fireOnFinalChange()
									})) : l && n.fireOnFinalChange())
								}, n.onKeyUp = function(e) {
									var t = n.state.isChanged;
									n.setState({
										draggedThumbIndex: -1
									}, (function() {
										t && n.fireOnFinalChange()
									}))
								}, n.onMove = function(e, t) {
									var a = n.state,
										r = a.draggedThumbIndex,
										o = a.draggedTrackPos,
										i = n.props,
										s = i.direction,
										l = i.min,
										c = i.max,
										h = i.onChange,
										f = i.values,
										p = i.step,
										m = i.rtl;
									if (-1 === r && -1 === o[0] && -1 === o[1]) return null;
									var g = n.trackRef.current;
									if (!g) return null;
									var y = g.getBoundingClientRect(),
										b = (0, u.isVertical)(s) ? y.height : y.width;
									if (-1 !== o[0] && -1 !== o[1]) {
										var v = e - o[0],
											x = t - o[1],
											w = 0;
										switch (s) {
											case d.Direction.Right:
											case d.Direction.Left:
												w = v / b * (c - l);
												break;
											case d.Direction.Down:
											case d.Direction.Up:
												w = x / b * (c - l);
												break;
											default:
												(0, u.assertUnreachable)(s)
										}
										if (m && (w *= -1), Math.abs(w) >= p / 2) {
											for (var T = 0; T < n.thumbRefs.length; T++) {
												if (f[T] === c && 1 === Math.sign(w) || f[T] === l && -1 === Math.sign(w)) return;
												var _ = f[T] + w;
												_ > c ? w = c - f[T] : _ < l && (w = l - f[T])
											}
											var k = f.slice(0);
											for (T = 0; T < n.thumbRefs.length; T++) k = (0, u.replaceAt)(k, T, n.normalizeValue(f[T] + w, T));
											n.setState({
												draggedTrackPos: [e, t]
											}), h(k)
										}
									} else {
										var P = 0;
										switch (s) {
											case d.Direction.Right:
												P = (e - y.left) / b * (c - l) + l;
												break;
											case d.Direction.Left:
												P = (b - (e - y.left)) / b * (c - l) + l;
												break;
											case d.Direction.Down:
												P = (t - y.top) / b * (c - l) + l;
												break;
											case d.Direction.Up:
												P = (b - (t - y.top)) / b * (c - l) + l;
												break;
											default:
												(0, u.assertUnreachable)(s)
										}
										m && (P = c + l - P), Math.abs(f[r] - P) >= p / 2 && h((0, u.replaceAt)(f, r, n.normalizeValue(P, r)))
									}
								}, n.normalizeValue = function(e, t) {
									var a = n.props,
										r = a.min,
										o = a.max,
										i = a.step,
										s = a.allowOverlap,
										l = a.values;
									return (0, u.normalizeValue)(e, t, r, o, i, s, l)
								}, n.onEnd = function(e) {
									if (e.preventDefault(), document.removeEventListener("mousemove", n.schdOnMouseMove), document.removeEventListener("touchmove", n.schdOnTouchMove), document.removeEventListener("mouseup", n.schdOnEnd), document.removeEventListener("touchend", n.schdOnEnd), document.removeEventListener("touchcancel", n.schdOnEnd), -1 === n.state.draggedThumbIndex && -1 === n.state.draggedTrackPos[0] && -1 === n.state.draggedTrackPos[1]) return null;
									n.setState({
										draggedThumbIndex: -1,
										draggedTrackPos: [-1, -1]
									}, (function() {
										n.fireOnFinalChange()
									}))
								}, n.fireOnFinalChange = function() {
									n.setState({
										isChanged: !1
									});
									var e = n.props,
										t = e.onFinalChange,
										a = e.values;
									t && t(a)
								}, n.updateMarkRefs = function(e) {
									if (!e.renderMark) return n.numOfMarks = void 0, void(n.markRefs = void 0);
									n.numOfMarks = (e.max - e.min) / n.props.step, n.markRefs = [];
									for (var t = 0; t < n.numOfMarks + 1; t++) n.markRefs[t] = c.createRef()
								}, n.calculateMarkOffsets = function() {
									if (n.props.renderMark && n.trackRef && n.numOfMarks && n.markRefs && null !== n.trackRef.current) {
										for (var e = window.getComputedStyle(n.trackRef.current), t = parseInt(e.width, 10), a = parseInt(e.height, 10), r = parseInt(e.paddingLeft, 10), o = parseInt(e.paddingTop, 10), i = [], s = 0; s < n.numOfMarks + 1; s++) {
											var l = 9999,
												c = 9999;
											if (n.markRefs[s].current) {
												var u = n.markRefs[s].current.getBoundingClientRect();
												l = u.height, c = u.width
											}
											n.props.direction === d.Direction.Left || n.props.direction === d.Direction.Right ? i.push([Math.round(t / n.numOfMarks * s + r - c / 2), -Math.round((l - a) / 2)]) : i.push([Math.round(a / n.numOfMarks * s + o - l / 2), -Math.round((c - t) / 2)])
										}
										n.setState({
											markOffsets: i
										})
									}
								}, 0 === t.step) throw new Error('"step" property should be a positive number');
							return n.schdOnMouseMove = (0, u.schd)(n.onMouseMove), n.schdOnTouchMove = (0, u.schd)(n.onTouchMove), n.schdOnEnd = (0, u.schd)(n.onEnd), n.thumbRefs = t.values.map((function() {
								return c.createRef()
							})), n.updateMarkRefs(t), n
						}
						return r(t, e), t.prototype.componentDidMount = function() {
							var e = this,
								t = this.props,
								n = t.values,
								a = t.min,
								r = t.step;
							this.resizeObserver = window.ResizeObserver ? new window.ResizeObserver(this.onResize) : {
								observe: function() {
									return window.addEventListener("resize", e.onResize)
								},
								unobserve: function() {
									return window.removeEventListener("resize", e.onResize)
								}
							}, document.addEventListener("touchstart", this.onMouseOrTouchStart, {
								passive: !1
							}), document.addEventListener("mousedown", this.onMouseOrTouchStart, {
								passive: !1
							}), !this.props.allowOverlap && (0, u.checkInitialOverlap)(this.props.values), this.props.values.forEach((function(t) {
								return (0, u.checkBoundaries)(t, e.props.min, e.props.max)
							})), this.resizeObserver.observe(this.trackRef.current), (0, u.translateThumbs)(this.getThumbs(), this.getOffsets(), this.props.rtl), this.calculateMarkOffsets(), n.forEach((function(e) {
								(0, u.isStepDivisible)(a, e, r) || console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")
							}))
						}, t.prototype.componentDidUpdate = function(e, t) {
							var n = this.props,
								a = n.max,
								r = n.min,
								o = n.step,
								i = n.values,
								s = n.rtl;
							e.max === a && e.min === r && e.step === o || this.updateMarkRefs(this.props), (0, u.translateThumbs)(this.getThumbs(), this.getOffsets(), s), e.max === a && e.min === r && e.step === o && t.markOffsets.length === this.state.markOffsets.length || (this.calculateMarkOffsets(), i.forEach((function(e) {
								(0, u.isStepDivisible)(r, e, o) || console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")
							})))
						}, t.prototype.componentWillUnmount = function() {
							document.removeEventListener("mousedown", this.onMouseOrTouchStart, {
								passive: !1
							}), document.removeEventListener("mousemove", this.schdOnMouseMove), document.removeEventListener("touchmove", this.schdOnTouchMove), document.removeEventListener("touchstart", this.onMouseOrTouchStart), document.removeEventListener("mouseup", this.schdOnEnd), document.removeEventListener("touchend", this.schdOnEnd), this.resizeObserver.unobserve(this.trackRef.current)
						}, t.prototype.render = function() {
							var e = this,
								t = this.props,
								n = t.renderTrack,
								a = t.renderThumb,
								r = t.renderMark,
								o = void 0 === r ? function() {
									return null
								} : r,
								i = t.values,
								s = t.min,
								c = t.max,
								h = t.allowOverlap,
								f = t.disabled,
								p = this.state,
								m = p.draggedThumbIndex,
								g = p.thumbZIndexes,
								y = p.markOffsets;
							return n({
								props: {
									style: {
										transform: "scale(1)",
										cursor: m > -1 ? "grabbing" : this.props.draggableTrack ? (0, u.isVertical)(this.props.direction) ? "ns-resize" : "ew-resize" : 1 !== i.length || f ? "inherit" : "pointer"
									},
									onMouseDown: f ? u.voidFn : this.onMouseDownTrack,
									onTouchStart: f ? u.voidFn : this.onTouchStartTrack,
									ref: this.trackRef
								},
								isDragged: this.state.draggedThumbIndex > -1,
								disabled: f,
								children: l(l([], y.map((function(t, n, a) {
									return o({
										props: {
											style: e.props.direction === d.Direction.Left || e.props.direction === d.Direction.Right ? {
												position: "absolute",
												left: "".concat(t[0], "px"),
												marginTop: "".concat(t[1], "px")
											} : {
												position: "absolute",
												top: "".concat(t[0], "px"),
												marginLeft: "".concat(t[1], "px")
											},
											key: "mark".concat(n),
											ref: e.markRefs[n]
										},
										index: n
									})
								})), !0), i.map((function(t, n) {
									var r = e.state.draggedThumbIndex === n;
									return a({
										index: n,
										value: t,
										isDragged: r,
										props: {
											style: {
												position: "absolute",
												zIndex: g[n],
												cursor: f ? "inherit" : r ? "grabbing" : "grab",
												userSelect: "none",
												touchAction: "none",
												WebkitUserSelect: "none",
												MozUserSelect: "none",
												msUserSelect: "none"
											},
											key: n,
											tabIndex: f ? void 0 : 0,
											"aria-valuemax": h ? c : i[n + 1] || c,
											"aria-valuemin": h ? s : i[n - 1] || s,
											"aria-valuenow": t,
											draggable: !1,
											ref: e.thumbRefs[n],
											role: "slider",
											onKeyDown: f ? u.voidFn : e.onKeyDown,
											onKeyUp: f ? u.voidFn : e.onKeyUp
										}
									})
								})), !0)
							})
						}, t.defaultProps = {
							step: 1,
							direction: d.Direction.Right,
							rtl: !1,
							disabled: !1,
							allowOverlap: !1,
							draggableTrack: !1,
							min: 0,
							max: 100
						}, t
					}(c.Component);
				t.default = p
			},
			398: function(e, t, n) {
				"use strict";
				var a = this && this.__importDefault || function(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				};
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.checkValuesAgainstBoundaries = t.relativeValue = t.useThumbOverlap = t.Direction = t.getTrackBackground = t.Range = void 0;
				var r = a(n(39));
				t.Range = r.default;
				var o = n(826);
				Object.defineProperty(t, "getTrackBackground", {
					enumerable: !0,
					get: function() {
						return o.getTrackBackground
					}
				}), Object.defineProperty(t, "useThumbOverlap", {
					enumerable: !0,
					get: function() {
						return o.useThumbOverlap
					}
				}), Object.defineProperty(t, "relativeValue", {
					enumerable: !0,
					get: function() {
						return o.relativeValue
					}
				}), Object.defineProperty(t, "checkValuesAgainstBoundaries", {
					enumerable: !0,
					get: function() {
						return o.checkValuesAgainstBoundaries
					}
				});
				var i = n(234);
				Object.defineProperty(t, "Direction", {
					enumerable: !0,
					get: function() {
						return i.Direction
					}
				})
			},
			234: (e, t) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
						value: !0
					}), t.Direction = void 0,
					function(e) {
						e.Right = "to right", e.Left = "to left", e.Down = "to bottom", e.Up = "to top"
					}(t.Direction || (t.Direction = {}))
			},
			826: function(e, t, n) {
				"use strict";
				var a = this && this.__spreadArray || function(e, t, n) {
					if (n || 2 === arguments.length)
						for (var a, r = 0, o = t.length; r < o; r++) !a && r in t || (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
					return e.concat(a || Array.prototype.slice.call(t))
				};
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.useThumbOverlap = t.assertUnreachable = t.voidFn = t.getTrackBackground = t.replaceAt = t.schd = t.translate = t.getClosestThumbIndex = t.translateThumbs = t.getPaddingAndBorder = t.getMargin = t.checkInitialOverlap = t.checkValuesAgainstBoundaries = t.checkBoundaries = t.isVertical = t.relativeValue = t.normalizeValue = t.isStepDivisible = t.isTouchEvent = t.getStepDecimals = void 0;
				var r = n(294),
					o = n(234);

				function i(e) {
					return e === o.Direction.Up || e === o.Direction.Down
				}

				function s(e, t, n) {
					e.style.transform = "translate(".concat(t, "px, ").concat(n, "px)")
				}
				t.getStepDecimals = function(e) {
					var t = e.toString().split(".")[1];
					return t ? t.length : 0
				}, t.isTouchEvent = function(e) {
					return e.touches && e.touches.length || e.changedTouches && e.changedTouches.length
				}, t.isStepDivisible = function(e, t, n) {
					var a = Number(((t - e) / n).toFixed(8));
					return parseInt(a.toString(), 10) === a
				}, t.normalizeValue = function(e, n, a, r, o, i, s) {
					var l = 1e11;
					if (e = Math.round(e * l) / l, !i) {
						var c = s[n - 1],
							u = s[n + 1];
						if (c && c > e) return c;
						if (u && u < e) return u
					}
					if (e > r) return r;
					if (e < a) return a;
					var d = Math.floor(e * l - a * l) % Math.floor(o * l),
						h = Math.floor(e * l - Math.abs(d)),
						f = 0 === d ? e : h / l,
						p = Math.abs(d / l) < o / 2 ? f : f + o,
						m = (0, t.getStepDecimals)(o);
					return parseFloat(p.toFixed(m))
				}, t.relativeValue = function(e, t, n) {
					return (e - t) / (n - t)
				}, t.isVertical = i, t.checkBoundaries = function(e, t, n) {
					if (t >= n) throw new RangeError("min (".concat(t, ") is equal/bigger than max (").concat(n, ")"));
					if (e < t) throw new RangeError("value (".concat(e, ") is smaller than min (").concat(t, ")"));
					if (e > n) throw new RangeError("value (".concat(e, ") is bigger than max (").concat(n, ")"))
				}, t.checkValuesAgainstBoundaries = function(e, t, n) {
					return e < t ? t : e > n ? n : e
				}, t.checkInitialOverlap = function(e) {
					if (!(e.length < 2 || e.slice(1).every((function(t, n) {
							return e[n] <= t
						})))) throw new RangeError("values={[".concat(e, "]} needs to be sorted when allowOverlap={false}"))
				}, t.getMargin = function(e) {
					var t = window.getComputedStyle(e);
					return {
						top: parseInt(t["margin-top"], 10),
						bottom: parseInt(t["margin-bottom"], 10),
						left: parseInt(t["margin-left"], 10),
						right: parseInt(t["margin-right"], 10)
					}
				}, t.getPaddingAndBorder = function(e) {
					var t = window.getComputedStyle(e);
					return {
						top: parseInt(t["padding-top"], 10) + parseInt(t["border-top-width"], 10),
						bottom: parseInt(t["padding-bottom"], 10) + parseInt(t["border-bottom-width"], 10),
						left: parseInt(t["padding-left"], 10) + parseInt(t["border-left-width"], 10),
						right: parseInt(t["padding-right"], 10) + parseInt(t["border-right-width"], 10)
					}
				}, t.translateThumbs = function(e, t, n) {
					var a = n ? -1 : 1;
					e.forEach((function(e, n) {
						return s(e, a * t[n].x, t[n].y)
					}))
				}, t.getClosestThumbIndex = function(e, t, n, a) {
					for (var r = 0, o = c(e[0], t, n, a), i = 1; i < e.length; i++) {
						var s = c(e[i], t, n, a);
						s < o && (o = s, r = i)
					}
					return r
				}, t.translate = s;
				t.schd = function(e) {
					var t = [],
						n = null;
					return function() {
						for (var a = [], r = 0; r < arguments.length; r++) a[r] = arguments[r];
						t = a, n || (n = requestAnimationFrame((function() {
							n = null, e.apply(void 0, t)
						})))
					}
				}, t.replaceAt = function(e, t, n) {
					var a = e.slice(0);
					return a[t] = n, a
				}, t.getTrackBackground = function(e) {
					var t = e.values,
						n = e.colors,
						a = e.min,
						r = e.max,
						i = e.direction,
						s = void 0 === i ? o.Direction.Right : i,
						l = e.rtl,
						c = void 0 !== l && l;
					c && s === o.Direction.Right ? s = o.Direction.Left : c && o.Direction.Left && (s = o.Direction.Right);
					var u = t.slice(0).sort((function(e, t) {
						return e - t
					})).map((function(e) {
						return (e - a) / (r - a) * 100
					})).reduce((function(e, t, a) {
						return "".concat(e, ", ").concat(n[a], " ").concat(t, "%, ").concat(n[a + 1], " ").concat(t, "%")
					}), "");
					return "linear-gradient(".concat(s, ", ").concat(n[0], " 0%").concat(u, ", ").concat(n[n.length - 1], " 100%)")
				}, t.voidFn = function() {}, t.assertUnreachable = function(e) {
					throw new Error("Didn't expect to get here")
				};
				var l = function(e, t, n, r, o) {
					return void 0 === o && (o = function(e) {
						return e
					}), Math.ceil(a([e], Array.from(e.children), !0).reduce((function(e, a) {
						var i = Math.ceil(a.getBoundingClientRect().width);
						if (a.innerText && a.innerText.includes(n) && 0 === a.childElementCount) {
							var s = a.cloneNode(!0);
							s.innerHTML = o(t.toFixed(r)), s.style.visibility = "hidden", document.body.appendChild(s), i = Math.ceil(s.getBoundingClientRect().width), document.body.removeChild(s)
						}
						return i > e ? i : e
					}), e.getBoundingClientRect().width))
				};

				function c(e, t, n, a) {
					var r = e.getBoundingClientRect(),
						o = r.left,
						s = r.top,
						l = r.width,
						c = r.height;
					return i(a) ? Math.abs(n - (s + c / 2)) : Math.abs(t - (o + l / 2))
				}
				t.useThumbOverlap = function(e, n, o, i, s, c) {
					void 0 === i && (i = .1), void 0 === s && (s = " - "), void 0 === c && (c = function(e) {
						return e
					});
					var u = (0, t.getStepDecimals)(i),
						d = (0, r.useState)({}),
						h = d[0],
						f = d[1],
						p = (0, r.useState)(c(n[o].toFixed(u))),
						m = p[0],
						g = p[1];
					return (0, r.useEffect)((function() {
						if (e) {
							var t = e.getThumbs();
							if (t.length < 1) return;
							var r = {},
								i = e.getOffsets(),
								d = function(e, t, n, r, o, i, s) {
									void 0 === s && (s = function(e) {
										return e
									});
									var c = [],
										u = function(e) {
											var d = l(n[e], r[e], o, i, s),
												h = t[e].x;
											t.forEach((function(t, f) {
												var p = t.x,
													m = l(n[f], r[f], o, i, s);
												e !== f && (h >= p && h <= p + m || h + d >= p && h + d <= p + m) && (c.includes(f) || (c.push(e), c.push(f), c = a(a([], c, !0), [e, f], !1), u(f)))
											}))
										};
									return u(e), Array.from(new Set(c.sort()))
								}(o, i, t, n, s, u, c),
								h = c(n[o].toFixed(u));
							if (d.length) {
								var p = d.reduce((function(e, t, n, r) {
									return e.length ? a(a([], e, !0), [i[r[n]].x], !1) : [i[r[n]].x]
								}), []);
								if (Math.min.apply(Math, p) === i[o].x) {
									var m = [];
									d.forEach((function(e) {
										m.push(n[e].toFixed(u))
									})), h = Array.from(new Set(m.sort((function(e, t) {
										return parseFloat(e) - parseFloat(t)
									})))).map(c).join(s);
									var y = Math.min.apply(Math, p),
										b = Math.max.apply(Math, p),
										v = t[d[p.indexOf(b)]].getBoundingClientRect().width;
									r.left = "".concat(Math.abs(y - (b + v)) / 2, "px"), r.transform = "translate(-50%, 0)"
								} else r.visibility = "hidden"
							}
							g(h), f(r)
						}
					}), [e, n]), [m, h]
				}
			},
			408: (e, t) => {
				"use strict";
				/**
				 * @license React
				 * react.production.min.js
				 *
				 * Copyright (c) Facebook, Inc. and its affiliates.
				 *
				 * This source code is licensed under the MIT license found in the
				 * LICENSE file in the root directory of this source tree.
				 */
				var n = Symbol.for("react.element"),
					a = Symbol.for("react.portal"),
					r = Symbol.for("react.fragment"),
					o = Symbol.for("react.strict_mode"),
					i = Symbol.for("react.profiler"),
					s = Symbol.for("react.provider"),
					l = Symbol.for("react.context"),
					c = Symbol.for("react.forward_ref"),
					u = Symbol.for("react.suspense"),
					d = Symbol.for("react.memo"),
					h = Symbol.for("react.lazy"),
					f = Symbol.iterator;
				var p = {
						isMounted: function() {
							return !1
						},
						enqueueForceUpdate: function() {},
						enqueueReplaceState: function() {},
						enqueueSetState: function() {}
					},
					m = Object.assign,
					g = {};

				function y(e, t, n) {
					this.props = e, this.context = t, this.refs = g, this.updater = n || p
				}

				function b() {}

				function v(e, t, n) {
					this.props = e, this.context = t, this.refs = g, this.updater = n || p
				}
				y.prototype.isReactComponent = {}, y.prototype.setState = function(e, t) {
					if ("object" != typeof e && "function" != typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
					this.updater.enqueueSetState(this, e, t, "setState")
				}, y.prototype.forceUpdate = function(e) {
					this.updater.enqueueForceUpdate(this, e, "forceUpdate")
				}, b.prototype = y.prototype;
				var x = v.prototype = new b;
				x.constructor = v, m(x, y.prototype), x.isPureReactComponent = !0;
				var w = Array.isArray,
					T = Object.prototype.hasOwnProperty,
					_ = {
						current: null
					},
					k = {
						key: !0,
						ref: !0,
						__self: !0,
						__source: !0
					};

				function P(e, t, a) {
					var r, o = {},
						i = null,
						s = null;
					if (null != t)
						for (r in void 0 !== t.ref && (s = t.ref), void 0 !== t.key && (i = "" + t.key), t) T.call(t, r) && !k.hasOwnProperty(r) && (o[r] = t[r]);
					var l = arguments.length - 2;
					if (1 === l) o.children = a;
					else if (1 < l) {
						for (var c = Array(l), u = 0; u < l; u++) c[u] = arguments[u + 2];
						o.children = c
					}
					if (e && e.defaultProps)
						for (r in l = e.defaultProps) void 0 === o[r] && (o[r] = l[r]);
					return {
						$$typeof: n,
						type: e,
						key: i,
						ref: s,
						props: o,
						_owner: _.current
					}
				}

				function E(e) {
					return "object" == typeof e && null !== e && e.$$typeof === n
				}
				var S = /\/+/g;

				function C(e, t) {
					return "object" == typeof e && null !== e && null != e.key ? function(e) {
						var t = {
							"=": "=0",
							":": "=2"
						};
						return "$" + e.replace(/[=:]/g, (function(e) {
							return t[e]
						}))
					}("" + e.key) : t.toString(36)
				}

				function M(e, t, r, o, i) {
					var s = typeof e;
					"undefined" !== s && "boolean" !== s || (e = null);
					var l = !1;
					if (null === e) l = !0;
					else switch (s) {
						case "string":
						case "number":
							l = !0;
							break;
						case "object":
							switch (e.$$typeof) {
								case n:
								case a:
									l = !0
							}
					}
					if (l) return i = i(l = e), e = "" === o ? "." + C(l, 0) : o, w(i) ? (r = "", null != e && (r = e.replace(S, "$&/") + "/"), M(i, t, r, "", (function(e) {
						return e
					}))) : null != i && (E(i) && (i = function(e, t) {
						return {
							$$typeof: n,
							type: e.type,
							key: t,
							ref: e.ref,
							props: e.props,
							_owner: e._owner
						}
					}(i, r + (!i.key || l && l.key === i.key ? "" : ("" + i.key).replace(S, "$&/") + "/") + e)), t.push(i)), 1;
					if (l = 0, o = "" === o ? "." : o + ":", w(e))
						for (var c = 0; c < e.length; c++) {
							var u = o + C(s = e[c], c);
							l += M(s, t, r, u, i)
						} else if (u = function(e) {
								return null === e || "object" != typeof e ? null : "function" == typeof(e = f && e[f] || e["@@iterator"]) ? e : null
							}(e), "function" == typeof u)
							for (e = u.call(e), c = 0; !(s = e.next()).done;) l += M(s = s.value, t, r, u = o + C(s, c++), i);
						else if ("object" === s) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
					return l
				}

				function N(e, t, n) {
					if (null == e) return e;
					var a = [],
						r = 0;
					return M(e, a, "", "", (function(e) {
						return t.call(n, e, r++)
					})), a
				}

				function $(e) {
					if (-1 === e._status) {
						var t = e._result;
						(t = t()).then((function(t) {
							0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t)
						}), (function(t) {
							0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t)
						})), -1 === e._status && (e._status = 0, e._result = t)
					}
					if (1 === e._status) return e._result.default;
					throw e._result
				}
				var A = {
						current: null
					},
					I = {
						transition: null
					},
					O = {
						ReactCurrentDispatcher: A,
						ReactCurrentBatchConfig: I,
						ReactCurrentOwner: _
					};
				t.Children = {
					map: N,
					forEach: function(e, t, n) {
						N(e, (function() {
							t.apply(this, arguments)
						}), n)
					},
					count: function(e) {
						var t = 0;
						return N(e, (function() {
							t++
						})), t
					},
					toArray: function(e) {
						return N(e, (function(e) {
							return e
						})) || []
					},
					only: function(e) {
						if (!E(e)) throw Error("React.Children.only expected to receive a single React element child.");
						return e
					}
				}, t.Component = y, t.Fragment = r, t.Profiler = i, t.PureComponent = v, t.StrictMode = o, t.Suspense = u, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O, t.cloneElement = function(e, t, a) {
					if (null == e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
					var r = m({}, e.props),
						o = e.key,
						i = e.ref,
						s = e._owner;
					if (null != t) {
						if (void 0 !== t.ref && (i = t.ref, s = _.current), void 0 !== t.key && (o = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
						for (c in t) T.call(t, c) && !k.hasOwnProperty(c) && (r[c] = void 0 === t[c] && void 0 !== l ? l[c] : t[c])
					}
					var c = arguments.length - 2;
					if (1 === c) r.children = a;
					else if (1 < c) {
						l = Array(c);
						for (var u = 0; u < c; u++) l[u] = arguments[u + 2];
						r.children = l
					}
					return {
						$$typeof: n,
						type: e.type,
						key: o,
						ref: i,
						props: r,
						_owner: s
					}
				}, t.createContext = function(e) {
					return (e = {
						$$typeof: l,
						_currentValue: e,
						_currentValue2: e,
						_threadCount: 0,
						Provider: null,
						Consumer: null,
						_defaultValue: null,
						_globalName: null
					}).Provider = {
						$$typeof: s,
						_context: e
					}, e.Consumer = e
				}, t.createElement = P, t.createFactory = function(e) {
					var t = P.bind(null, e);
					return t.type = e, t
				}, t.createRef = function() {
					return {
						current: null
					}
				}, t.forwardRef = function(e) {
					return {
						$$typeof: c,
						render: e
					}
				}, t.isValidElement = E, t.lazy = function(e) {
					return {
						$$typeof: h,
						_payload: {
							_status: -1,
							_result: e
						},
						_init: $
					}
				}, t.memo = function(e, t) {
					return {
						$$typeof: d,
						type: e,
						compare: void 0 === t ? null : t
					}
				}, t.startTransition = function(e) {
					var t = I.transition;
					I.transition = {};
					try {
						e()
					} finally {
						I.transition = t
					}
				}, t.unstable_act = function() {
					throw Error("act(...) is not supported in production builds of React.")
				}, t.useCallback = function(e, t) {
					return A.current.useCallback(e, t)
				}, t.useContext = function(e) {
					return A.current.useContext(e)
				}, t.useDebugValue = function() {}, t.useDeferredValue = function(e) {
					return A.current.useDeferredValue(e)
				}, t.useEffect = function(e, t) {
					return A.current.useEffect(e, t)
				}, t.useId = function() {
					return A.current.useId()
				}, t.useImperativeHandle = function(e, t, n) {
					return A.current.useImperativeHandle(e, t, n)
				}, t.useInsertionEffect = function(e, t) {
					return A.current.useInsertionEffect(e, t)
				}, t.useLayoutEffect = function(e, t) {
					return A.current.useLayoutEffect(e, t)
				}, t.useMemo = function(e, t) {
					return A.current.useMemo(e, t)
				}, t.useReducer = function(e, t, n) {
					return A.current.useReducer(e, t, n)
				}, t.useRef = function(e) {
					return A.current.useRef(e)
				}, t.useState = function(e) {
					return A.current.useState(e)
				}, t.useSyncExternalStore = function(e, t, n) {
					return A.current.useSyncExternalStore(e, t, n)
				}, t.useTransition = function() {
					return A.current.useTransition()
				}, t.version = "18.2.0"
			},
			294: (e, t, n) => {
				"use strict";
				e.exports = n(408)
			},
			53: (e, t) => {
				"use strict";
				/**
				 * @license React
				 * scheduler.production.min.js
				 *
				 * Copyright (c) Facebook, Inc. and its affiliates.
				 *
				 * This source code is licensed under the MIT license found in the
				 * LICENSE file in the root directory of this source tree.
				 */
				function n(e, t) {
					var n = e.length;
					e.push(t);
					e: for (; 0 < n;) {
						var a = n - 1 >>> 1,
							r = e[a];
						if (!(0 < o(r, t))) break e;
						e[a] = t, e[n] = r, n = a
					}
				}

				function a(e) {
					return 0 === e.length ? null : e[0]
				}

				function r(e) {
					if (0 === e.length) return null;
					var t = e[0],
						n = e.pop();
					if (n !== t) {
						e[0] = n;
						e: for (var a = 0, r = e.length, i = r >>> 1; a < i;) {
							var s = 2 * (a + 1) - 1,
								l = e[s],
								c = s + 1,
								u = e[c];
							if (0 > o(l, n)) c < r && 0 > o(u, l) ? (e[a] = u, e[c] = n, a = c) : (e[a] = l, e[s] = n, a = s);
							else {
								if (!(c < r && 0 > o(u, n))) break e;
								e[a] = u, e[c] = n, a = c
							}
						}
					}
					return t
				}

				function o(e, t) {
					var n = e.sortIndex - t.sortIndex;
					return 0 !== n ? n : e.id - t.id
				}
				if ("object" == typeof performance && "function" == typeof performance.now) {
					var i = performance;
					t.unstable_now = function() {
						return i.now()
					}
				} else {
					var s = Date,
						l = s.now();
					t.unstable_now = function() {
						return s.now() - l
					}
				}
				var c = [],
					u = [],
					d = 1,
					h = null,
					f = 3,
					p = !1,
					m = !1,
					g = !1,
					y = "function" == typeof setTimeout ? setTimeout : null,
					b = "function" == typeof clearTimeout ? clearTimeout : null,
					v = "undefined" != typeof setImmediate ? setImmediate : null;

				function x(e) {
					for (var t = a(u); null !== t;) {
						if (null === t.callback) r(u);
						else {
							if (!(t.startTime <= e)) break;
							r(u), t.sortIndex = t.expirationTime, n(c, t)
						}
						t = a(u)
					}
				}

				function w(e) {
					if (g = !1, x(e), !m)
						if (null !== a(c)) m = !0, I(T);
						else {
							var t = a(u);
							null !== t && O(w, t.startTime - e)
						}
				}

				function T(e, n) {
					m = !1, g && (g = !1, b(E), E = -1), p = !0;
					var o = f;
					try {
						for (x(n), h = a(c); null !== h && (!(h.expirationTime > n) || e && !M());) {
							var i = h.callback;
							if ("function" == typeof i) {
								h.callback = null, f = h.priorityLevel;
								var s = i(h.expirationTime <= n);
								n = t.unstable_now(), "function" == typeof s ? h.callback = s : h === a(c) && r(c), x(n)
							} else r(c);
							h = a(c)
						}
						if (null !== h) var l = !0;
						else {
							var d = a(u);
							null !== d && O(w, d.startTime - n), l = !1
						}
						return l
					} finally {
						h = null, f = o, p = !1
					}
				}
				"undefined" != typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
				var _, k = !1,
					P = null,
					E = -1,
					S = 5,
					C = -1;

				function M() {
					return !(t.unstable_now() - C < S)
				}

				function N() {
					if (null !== P) {
						var e = t.unstable_now();
						C = e;
						var n = !0;
						try {
							n = P(!0, e)
						} finally {
							n ? _() : (k = !1, P = null)
						}
					} else k = !1
				}
				if ("function" == typeof v) _ = function() {
					v(N)
				};
				else if ("undefined" != typeof MessageChannel) {
					var $ = new MessageChannel,
						A = $.port2;
					$.port1.onmessage = N, _ = function() {
						A.postMessage(null)
					}
				} else _ = function() {
					y(N, 0)
				};

				function I(e) {
					P = e, k || (k = !0, _())
				}

				function O(e, n) {
					E = y((function() {
						e(t.unstable_now())
					}), n)
				}
				t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(e) {
					e.callback = null
				}, t.unstable_continueExecution = function() {
					m || p || (m = !0, I(T))
				}, t.unstable_forceFrameRate = function(e) {
					0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : S = 0 < e ? Math.floor(1e3 / e) : 5
				}, t.unstable_getCurrentPriorityLevel = function() {
					return f
				}, t.unstable_getFirstCallbackNode = function() {
					return a(c)
				}, t.unstable_next = function(e) {
					switch (f) {
						case 1:
						case 2:
						case 3:
							var t = 3;
							break;
						default:
							t = f
					}
					var n = f;
					f = t;
					try {
						return e()
					} finally {
						f = n
					}
				}, t.unstable_pauseExecution = function() {}, t.unstable_requestPaint = function() {}, t.unstable_runWithPriority = function(e, t) {
					switch (e) {
						case 1:
						case 2:
						case 3:
						case 4:
						case 5:
							break;
						default:
							e = 3
					}
					var n = f;
					f = e;
					try {
						return t()
					} finally {
						f = n
					}
				}, t.unstable_scheduleCallback = function(e, r, o) {
					var i = t.unstable_now();
					switch ("object" == typeof o && null !== o ? o = "number" == typeof(o = o.delay) && 0 < o ? i + o : i : o = i, e) {
						case 1:
							var s = -1;
							break;
						case 2:
							s = 250;
							break;
						case 5:
							s = 1073741823;
							break;
						case 4:
							s = 1e4;
							break;
						default:
							s = 5e3
					}
					return e = {
						id: d++,
						callback: r,
						priorityLevel: e,
						startTime: o,
						expirationTime: s = o + s,
						sortIndex: -1
					}, o > i ? (e.sortIndex = o, n(u, e), null === a(c) && e === a(u) && (g ? (b(E), E = -1) : g = !0, O(w, o - i))) : (e.sortIndex = s, n(c, e), m || p || (m = !0, I(T))), e
				}, t.unstable_shouldYield = M, t.unstable_wrapCallback = function(e) {
					var t = f;
					return function() {
						var n = f;
						f = t;
						try {
							return e.apply(this, arguments)
						} finally {
							f = n
						}
					}
				}
			},
			840: (e, t, n) => {
				"use strict";
				e.exports = n(53)
			}
		},
		t = {};

	function n(a) {
		var r = t[a];
		if (void 0 !== r) return r.exports;
		var o = t[a] = {
			exports: {}
		};
		return e[a].call(o.exports, o, o.exports, n), o.exports
	}
	n.n = e => {
		var t = e && e.__esModule ? () => e.default : () => e;
		return n.d(t, {
			a: t
		}), t
	}, n.d = (e, t) => {
		for (var a in t) n.o(t, a) && !n.o(e, a) && Object.defineProperty(e, a, {
			enumerable: !0,
			get: t[a]
		})
	}, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = e => {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, (() => {
		"use strict";
		var e = n(294),
			t = n(935),
			a = n(697),
			r = n.n(a),
			o = {
				color: void 0,
				size: void 0,
				className: void 0,
				style: void 0,
				attr: void 0
			},
			i = e.createContext && e.createContext(o),
			s = function() {
				return s = Object.assign || function(e) {
					for (var t, n = 1, a = arguments.length; n < a; n++)
						for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
					return e
				}, s.apply(this, arguments)
			},
			l = function(e, t) {
				var n = {};
				for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (a = Object.getOwnPropertySymbols(e); r < a.length; r++) t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]])
				}
				return n
			};

		function c(t) {
			return t && t.map((function(t, n) {
				return e.createElement(t.tag, s({
					key: n
				}, t.attr), c(t.child))
			}))
		}

		function u(t) {
			return function(n) {
				return e.createElement(d, s({
					attr: s({}, t.attr)
				}, n), c(t.child))
			}
		}

		function d(t) {
			var n = function(n) {
				var a, r = t.attr,
					o = t.size,
					i = t.title,
					c = l(t, ["attr", "size", "title"]),
					u = o || n.size || "1em";
				return n.className && (a = n.className), t.className && (a = (a ? a + " " : "") + t.className), e.createElement("svg", s({
					stroke: "currentColor",
					fill: "currentColor",
					strokeWidth: "0"
				}, n.attr, r, c, {
					className: a,
					style: s(s({
						color: t.color || n.color
					}, n.style), t.style),
					height: u,
					width: u,
					xmlns: "http://www.w3.org/2000/svg"
				}), i && e.createElement("title", null, i), t.children)
			};
			return void 0 !== i ? e.createElement(i.Consumer, null, (function(e) {
				return n(e)
			})) : n(o)
		}

		function h(e) {
			return u({
				tag: "svg",
				attr: {
					viewBox: "0 0 24 24"
				},
				child: [{
					tag: "path",
					attr: {
						d: "M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
					}
				}]
			})(e)
		}

		function f(e) {
			return u({
				tag: "svg",
				attr: {
					viewBox: "0 0 24 24"
				},
				child: [{
					tag: "path",
					attr: {
						d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10.5858L14.8284 7.75736L16.2426 9.17157L13.4142 12L16.2426 14.8284L14.8284 16.2426L12 13.4142L9.17157 16.2426L7.75736 14.8284L10.5858 12L7.75736 9.17157L9.17157 7.75736L12 10.5858Z"
					}
				}]
			})(e)
		}
		var p = n(343),
			m = n(857);
		const g = (0, p.ZP)("div", null, {
				displayName: "ResultItem",
				styles: {
					cls1: "cls1-2666040715",
					cls2: "cls2-9530780146 cls1-2666040715"
				}
			}),
			y = (0, p.ZP)("span", null, {
				displayName: "Amount",
				styles: {
					cls1: "cls1-8001964025",
					cls2: "cls2-1392650414 cls1-8001964025"
				}
			}),
			b = ({
				className: t,
				results: n,
				useCompactView: a = !1,
				translator: r
			}) => {
				const {
					paymentPerPeriod: o,
					acceleratedPayment: i,
					totalCost: s,
					interestPaid: l,
					mortgageInsurance: c,
					additionalPaymentSavings: u,
					frequency: d
				} = n, h = a ? "block" : "inline-block", f = r.getLanguage();
				return e.createElement("div", {
					className: t
				}, e.createElement(g, null, e.createElement("p", {
					className: "calc-results-title"
				}, "fr" === f ? `${r.getText("Payment")} ${r.getText(d)}:` : `${r.getText(d)} payment:`), "fr" === f ? e.createElement("div", {
					className: "calc-big-label"
				}, o ? e.createElement(m.ZP, {
					preserveValue: !0,
					end: o + i,
					duration: .5,
					separator: " "
				}) : 0, " $") : e.createElement("div", {
					className: "calc-big-label"
				}, "$ ", o ? e.createElement(m.ZP, {
					preserveValue: !0,
					end: o + i,
					duration: .5,
					separator: ","
				}) : 0)), u > 0 ? e.createElement(g, null, e.createElement("div", {
					className: "calc-heading-result"
				}, e.createElement("strong", null, r.getText("Additional Payment Savings")), ":", " ", "fr" === f ? e.createElement(y, {
					style: {
						display: h
					}
				}, e.createElement(m.ZP, {
					preserveValue: !0,
					end: u,
					decimals: 2,
					duration: .5,
					separator: " "
				}), " $") : e.createElement(y, {
					style: {
						display: h
					}
				}, "$ ", e.createElement(m.ZP, {
					preserveValue: !0,
					end: u,
					decimals: 2,
					duration: .5,
					separator: ","
				})))) : null, e.createElement(g, null, e.createElement("div", {
					className: "calc-heading-result"
				}, r.getText("Total Cost of Loan: "), "fr" === f ? e.createElement(y, {
					style: {
						display: h
					}
				}, s ? e.createElement(m.ZP, {
					preserveValue: !0,
					end: s,
					duration: .5,
					separator: " "
				}) : 0, " $") : e.createElement(y, {
					style: {
						display: h
					}
				}, "$ ", s ? e.createElement(m.ZP, {
					preserveValue: !0,
					end: s,
					duration: .5,
					separator: ","
				}) : 0), " ")), e.createElement(g, null, e.createElement("div", {
					className: "calc-heading-result"
				}, r.getText("Total Interest Paid: "), "fr" === f ? e.createElement(y, {
					style: {
						display: h
					}
				}, l ? e.createElement(m.ZP, {
					preserveValue: !0,
					end: l,
					duration: .5,
					separator: " "
				}) : 0, " $") : e.createElement(y, {
					style: {
						display: h
					}
				}, "$ ", l ? e.createElement(m.ZP, {
					preserveValue: !0,
					end: l,
					duration: .5,
					separator: ","
				}) : 0), " ")), e.createElement(g, null, e.createElement("div", {
					className: "calc-heading-result"
				}, r.getText("Mortgage Insurance: "), "fr" === f ? e.createElement(y, {
					style: {
						display: h
					}
				}, c ? e.createElement(e.Fragment, null, e.createElement(m.ZP, {
					preserveValue: !0,
					end: c,
					duration: .5,
					separator: " "
				}), " $") : "N/A") : e.createElement(y, {
					style: {
						display: h
					}
				}, c ? e.createElement(e.Fragment, null, "$ ", e.createElement(m.ZP, {
					preserveValue: !0,
					end: c,
					duration: .5,
					separator: ","
				})) : "N/A"))))
			};
		b.propTypes = {
			className: r().string,
			results: r().object,
			useCompactView: r().bool,
			translator: r().object
		};
		const v = (0, p.ZP)(b, null, {
			displayName: "OutputValues",
			styles: {
				cls1: "cls1-202235814",
				cls2: "cls2-2201174267 cls1-202235814"
			}
		});

		function x() {
			return x = Object.assign ? Object.assign.bind() : function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
				}
				return e
			}, x.apply(this, arguments)
		}
		const w = ({
			className: t,
			children: n
		}) => e.createElement("div", {
			className: t
		}, n);
		w.propTypes = {
			className: r().string,
			children: r().oneOfType([r().arrayOf(r().node), r().node])
		};
		const T = (0, p.ZP)(w, null, {
				displayName: "Field",
				styles: {
					cls1: "cls1-129787742",
					cls2: "cls2-9633700676 cls1-129787742"
				}
			}),
			_ = ({
				className: t,
				children: n,
				style: a = {}
			}) => e.createElement("label", {
				style: a,
				className: t
			}, n);
		_.propTypes = {
			className: r().string,
			style: r().object,
			children: r().oneOfType([r().arrayOf(r().node), r().node])
		};
		const k = (0, p.ZP)(_, null, {
				displayName: "Label",
				styles: {
					cls1: "cls1-2913536494",
					cls2: "cls2-5896227012 cls1-2913536494"
				}
			}),
			P = ({
				className: t,
				label: n,
				name: a,
				value: r,
				placeholder: o,
				onChange: i,
				autoFocus: s = !1,
				disabled: l = !1,
				type: c = "text",
				...u
			}) => e.createElement(T, null, e.createElement(k, null, n), e.createElement("input", x({
				name: a,
				value: r,
				placeholder: o,
				onChange: i,
				autoFocus: s,
				disabled: l,
				type: c,
				className: t
			}, u)));
		P.propTypes = {
			className: r().string,
			label: r().string,
			name: r().string.isRequired,
			defaultValue: r().any,
			placeholder: r().string,
			onChange: r().func,
			autoFocus: r().bool,
			disabled: r().bool,
			type: r().string
		};
		const E = (0, p.ZP)(P, null, {
				displayName: "Input",
				styles: {
					cls1: "cls1-9020573998",
					cls2: "cls2-4875907652 cls1-9020573998"
				}
			}),
			S = e => `calc-${e}`,
			C = () => {
				try {
					return window.self !== window.top
				} catch (e) {
					return !0
				}
			},
			M = (t, n = []) => {
				const [a, r] = (0, e.useState)((() => {
					const e = n.reduce(((e, t) => {
						const n = !C() && window.sessionStorage.getItem(S(t));
						return n ? {
							...e,
							[t]: JSON.parse(n)
						} : e
					}), {});
					return {
						...t,
						...e
					}
				}));
				return [a, e => {
					const {
						name: t,
						value: o
					} = e.target;
					n.includes(t) && !C() && (o ? window.sessionStorage.setItem(S(t), JSON.stringify(o)) : window.sessionStorage.removeItem(S(t))), r({
						...a,
						[t]: o
					})
				}]
			},
			N = () => {
				const t = "object" == typeof window;

				function n() {
					return {
						width: t ? window.innerWidth : void 0,
						height: t ? window.innerHeight : void 0
					}
				}
				const [a, r] = (0, e.useState)(n);
				return (0, e.useEffect)((() => {
					if (!t) return !1;

					function e() {
						r(n())
					}
					return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
				}), []), a
			},
			$ = (t, n) => {
				const a = e => {
					t.current && !t.current.contains(e.target) && n()
				};
				(0, e.useEffect)((() => (document.addEventListener("mousedown", a), () => {
					document.removeEventListener("mousedown", a)
				})))
			},
			A = (0, p.ZP)("div", null, {
				displayName: "ButtonWrapper",
				styles: {
					cls1: "cls1-5178817907",
					cls2: "cls2-210773977 cls1-5178817907"
				}
			}),
			I = (0, p.ZP)("button", null, {
				displayName: "CancelButton",
				styles: {
					cls1: "cls1-7624561548",
					cls2: "cls2-8109899646 cls1-7624561548 cls2-8611247320"
				}
			}),
			O = (0, p.ZP)("div", null, {
				displayName: "ModalContainer",
				styles: {
					cls1: "cls1-6502799811",
					cls2: "cls2-1426204169 cls1-6502799811"
				}
			}),
			R = (0, p.ZP)("div", null, {
				displayName: "ModalBody",
				styles: {
					cls1: "cls1-1951342979",
					cls2: "cls2-2140961714 cls1-1951342979 cls2-7563380927 cls2-721497410 cls2-6937711697"
				}
			}),
			D = {
				casl: "casl-9243845927"
			},
			F = ({
				toggle: t,
				onClose: n,
				onSubmit: a,
				config: r,
				site: o,
				translator: i,
				calcName: s
			}) => {
				const {
					ajaxUrl: l,
					ajaxNonce: c
				} = r, u = (0, e.useRef)(), [d, h] = (0, e.useState)(""), [f, p] = (0, e.useState)(""), [m, g] = (0, e.useState)(!1), [y, b] = (0, e.useState)("");
				$(u, (() => {
					n()
				}));
				const v = async e => {
					const t = Object.entries(e).reduce(((e, [t, n]) => [...e, `${t}=${encodeURIComponent(n)}`]), []).join("&"),
						n = await fetch(l, {
							method: "POST",
							headers: {
								"Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
							},
							body: [t, `brokerCode=${o&&o.broker_code?o.broker_code:""}`, "action=m3-boss-calculator-form", `_wpnonce=${c}`].join("&"),
							cache: "no-cache",
							credentials: "same-origin"
						}),
						r = await n.json();
					r.success ? a(y) : r.data && r.data.error ? alert(r.data.error) : alert(i.getText("Error submitting contact information"))
				};
				return e.createElement(e.Fragment, null, t ? e.createElement(O, null, e.createElement(R, {
					ref: u
				}, e.createElement("span", null, i.getText("Please enter your information to receive your results!")), e.createElement(E, {
					id: "lead-first-name",
					name: "firstName",
					placeholder: i.getText("First Name"),
					onChange: e => h(e.target.value)
				}), e.createElement(E, {
					id: "lead-last-name",
					name: "lastName",
					placeholder: i.getText("Last Name"),
					onChange: e => p(e.target.value)
				}), e.createElement(E, {
					id: "lead-email",
					name: "email",
					placeholder: i.getText("Email"),
					onChange: e => b(e.target.value)
				}), e.createElement("div", {
					className: D.casl
				}, e.createElement("label", null), e.createElement("input", {
					type: "checkbox",
					name: "caslConsent",
					onClick: () => g(!m)
				}), " ", i.getText(`I consent to receiving communications from ${l.includes("mortgagealliance")?"Mortgage Alliance":l.includes("multi-prets")?"Multi-Prêts":l.includes("invis")?"INVIS":l.includes("migroup")||l.includes("mortgageintelligence")||l.includes("intelligencehypothecaire")?"Mortgage Intelligence":""}, affiliated companies and authorized agents. You can withdraw your consent at any time by unsubscribing.`)), e.createElement(A, null, e.createElement("button", {
					disabled: !(d && f && y && m),
					className: "button",
					onClick: () => {
						window.localStorage.setItem("email", y), d && f ? y ? m ? (g(!1), n(), v({
							firstName: d,
							lastName: f,
							email: y,
							casl: m,
							noCaptcha: !0,
							calcName: s
						})) : alert(i.getText("You must consent to the terms")) : alert(i.getText("Enter an email address")) : alert(i.getText("Enter a first and last name"))
					}
				}, i.getText("Send Email")), e.createElement(I, {
					className: "button",
					onClick: n
				}, i.getText("Cancel"))))) : e.createElement(e.Fragment, null))
			};
		F.propTypes = {
			toggle: r().bool,
			onClose: r().func,
			onSubmit: r().func,
			site: r().object,
			translator: r().object,
			calcName: r().string
		};
		const L = F;

		function z() {}

		function V(e) {
			return !!(e || "").match(/\d/)
		}

		function B(e) {
			return null == e
		}

		function j(e) {
			return e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
		}

		function H(e, t) {
			void 0 === t && (t = !0);
			var n = "-" === e[0],
				a = n && t,
				r = (e = e.replace("-", "")).split(".");
			return {
				beforeDecimal: r[0],
				afterDecimal: r[1] || "",
				hasNagation: n,
				addNegation: a
			}
		}

		function q(e, t, n) {
			for (var a = "", r = n ? "0" : "", o = 0; o <= t - 1; o++) a += e[o] || r;
			return a
		}

		function W(e, t) {
			return Array(t + 1).join(e)
		}

		function Y(e, t) {
			if (e.value = e.value, null !== e) {
				if (e.createTextRange) {
					var n = e.createTextRange();
					return n.move("character", t), n.select(), !0
				}
				return e.selectionStart || 0 === e.selectionStart ? (e.focus(), e.setSelectionRange(t, t), !0) : (e.focus(), !1)
			}
		}

		function U(e, t, n) {
			return Math.min(Math.max(e, t), n)
		}

		function Z(e) {
			return Math.max(e.selectionStart, e.selectionEnd)
		}
		var Q = {
				displayType: "input",
				decimalSeparator: ".",
				thousandsGroupStyle: "thousand",
				fixedDecimalScale: !1,
				prefix: "",
				suffix: "",
				allowNegative: !0,
				allowEmptyFormatting: !1,
				allowLeadingZeros: !1,
				isNumericString: !1,
				type: "text",
				onValueChange: z,
				onChange: z,
				onKeyDown: z,
				onMouseUp: z,
				onFocus: z,
				onBlur: z,
				isAllowed: function() {
					return !0
				}
			},
			G = function(t) {
				function n(e) {
					t.call(this, e);
					var n = e.defaultValue;
					this.validateProps();
					var a = this.formatValueProp(n);
					this.state = {
						value: a,
						numAsString: this.removeFormatting(a),
						mounted: !1
					}, this.selectionBeforeInput = {
						selectionStart: 0,
						selectionEnd: 0
					}, this.onChange = this.onChange.bind(this), this.onKeyDown = this.onKeyDown.bind(this), this.onMouseUp = this.onMouseUp.bind(this), this.onFocus = this.onFocus.bind(this), this.onBlur = this.onBlur.bind(this)
				}
				return t && (n.__proto__ = t), n.prototype = Object.create(t && t.prototype), n.prototype.constructor = n, n.prototype.componentDidMount = function() {
					this.setState({
						mounted: !0
					})
				}, n.prototype.componentDidUpdate = function(e) {
					this.updateValueIfRequired(e)
				}, n.prototype.componentWillUnmount = function() {
					clearTimeout(this.focusTimeout), clearTimeout(this.caretPositionTimeout)
				}, n.prototype.updateValueIfRequired = function(e) {
					var t = this,
						n = t.props,
						a = t.state,
						r = t.focusedElm,
						o = a.value,
						i = a.numAsString;
					if (void 0 === i && (i = ""), e !== n) {
						this.validateProps();
						var s = this.formatNumString(i),
							l = B(n.value) ? s : this.formatValueProp(),
							c = this.removeFormatting(l),
							u = parseFloat(c),
							d = parseFloat(i);
						(isNaN(u) && isNaN(d) || u === d) && s === o && (null !== r || l === o) || this.updateValue({
							formattedValue: l,
							numAsString: c,
							input: r,
							source: "prop",
							event: null
						})
					}
				}, n.prototype.getFloatString = function(e) {
					void 0 === e && (e = "");
					var t = this.props.decimalScale,
						n = this.getSeparators().decimalSeparator,
						a = this.getNumberRegex(!0),
						r = "-" === e[0];
					r && (e = e.replace("-", "")), n && 0 === t && (e = e.split(n)[0]);
					var o = (e = (e.match(a) || []).join("").replace(n, ".")).indexOf(".");
					return -1 !== o && (e = e.substring(0, o) + "." + e.substring(o + 1, e.length).replace(new RegExp(j(n), "g"), "")), r && (e = "-" + e), e
				}, n.prototype.getNumberRegex = function(e, t) {
					var n = this.props,
						a = n.format,
						r = n.decimalScale,
						o = n.customNumerals,
						i = this.getSeparators().decimalSeparator;
					return new RegExp("[0-9" + (o ? o.join("") : "") + "]" + (!i || 0 === r || t || a ? "" : "|" + j(i)), e ? "g" : void 0)
				}, n.prototype.getSeparators = function() {
					var e = this.props.decimalSeparator,
						t = this.props,
						n = t.thousandSeparator,
						a = t.allowedDecimalSeparators;
					return !0 === n && (n = ","), a || (a = [e, "."]), {
						decimalSeparator: e,
						thousandSeparator: n,
						allowedDecimalSeparators: a
					}
				}, n.prototype.getMaskAtIndex = function(e) {
					var t = this.props.mask;
					return void 0 === t && (t = " "), "string" == typeof t ? t : t[e] || " "
				}, n.prototype.getValueObject = function(e, t) {
					var n = parseFloat(t);
					return {
						formattedValue: e,
						value: t,
						floatValue: isNaN(n) ? void 0 : n
					}
				}, n.prototype.validateProps = function() {
					var e = this.props.mask,
						t = this.getSeparators(),
						n = t.decimalSeparator,
						a = t.thousandSeparator;
					if (n === a) throw new Error("\n          Decimal separator can't be same as thousand separator.\n          thousandSeparator: " + a + ' (thousandSeparator = {true} is same as thousandSeparator = ",")\n          decimalSeparator: ' + n + " (default value for decimalSeparator is .)\n       ");
					if (e && ("string" === e ? e : e.toString()).match(/\d/g)) throw new Error("\n          Mask " + e + " should not contain numeric character;\n        ")
				}, n.prototype.setPatchedCaretPosition = function(e, t, n) {
					Y(e, t), this.caretPositionTimeout = setTimeout((function() {
						e.value === n && Y(e, t)
					}), 0)
				}, n.prototype.correctCaretPosition = function(e, t, n) {
					var a = this.props,
						r = a.prefix,
						o = a.suffix,
						i = a.format;
					if ("" === e) return 0;
					if (t = U(t, 0, e.length), !i) {
						var s = "-" === e[0];
						return U(t, r.length + (s ? 1 : 0), e.length - o.length)
					}
					if ("function" == typeof i) return t;
					if ("#" === i[t] && V(e[t])) return t;
					if ("#" === i[t - 1] && V(e[t - 1])) return t;
					var l = i.indexOf("#");
					t = U(t, l, i.lastIndexOf("#") + 1);
					for (var c = i.substring(t, i.length).indexOf("#"), u = t, d = t + (-1 === c ? 0 : c); u > l && ("#" !== i[u] || !V(e[u]));) u -= 1;
					return !V(e[d]) || "left" === n && t !== l || t - u < d - t ? V(e[u]) ? u + 1 : u : d
				}, n.prototype.getCaretPosition = function(e, t, n) {
					var a, r, o = this.props.format,
						i = this.state.value,
						s = this.getNumberRegex(!0),
						l = (e.match(s) || []).join(""),
						c = (t.match(s) || []).join("");
					for (a = 0, r = 0; r < n; r++) {
						var u = e[r] || "",
							d = t[a] || "";
						if ((u.match(s) || u === d) && ("0" !== u || !d.match(s) || "0" === d || l.length === c.length)) {
							for (; u !== t[a] && a < t.length;) a++;
							a++
						}
					}
					return "string" != typeof o || i || (a = t.length), a = this.correctCaretPosition(t, a)
				}, n.prototype.removePrefixAndSuffix = function(e) {
					var t = this.props,
						n = t.format,
						a = t.prefix,
						r = t.suffix;
					if (!n && e) {
						var o = "-" === e[0];
						o && (e = e.substring(1, e.length));
						var i = (e = a && 0 === e.indexOf(a) ? e.substring(a.length, e.length) : e).lastIndexOf(r);
						e = r && -1 !== i && i === e.length - r.length ? e.substring(0, i) : e, o && (e = "-" + e)
					}
					return e
				}, n.prototype.removePatternFormatting = function(e) {
					for (var t = this.props.format.split("#").filter((function(e) {
							return "" !== e
						})), n = 0, a = "", r = 0, o = t.length; r <= o; r++) {
						var i = t[r] || "",
							s = r === o ? e.length : e.indexOf(i, n);
						if (-1 === s) {
							a = e;
							break
						}
						a += e.substring(n, s), n = s + i.length
					}
					return (a.match(this.getNumberRegex(!0)) || []).join("")
				}, n.prototype.removeFormatting = function(e) {
					var t = this.props,
						n = t.format,
						a = t.removeFormatting;
					return e ? (n ? e = "string" == typeof n ? this.removePatternFormatting(e) : "function" == typeof a ? a(e) : (e.match(this.getNumberRegex(!0)) || []).join("") : (e = this.removePrefixAndSuffix(e), e = this.getFloatString(e)), e) : e
				}, n.prototype.formatWithPattern = function(e) {
					for (var t = this.props.format, n = 0, a = t.split(""), r = 0, o = t.length; r < o; r++) "#" === t[r] && (a[r] = e[n] || this.getMaskAtIndex(n), n += 1);
					return a.join("")
				}, n.prototype.formatAsNumber = function(e) {
					var t = this.props,
						n = t.decimalScale,
						a = t.fixedDecimalScale,
						r = t.prefix,
						o = t.suffix,
						i = t.allowNegative,
						s = t.thousandsGroupStyle,
						l = this.getSeparators(),
						c = l.thousandSeparator,
						u = l.decimalSeparator,
						d = -1 !== e.indexOf(".") || n && a,
						h = H(e, i),
						f = h.beforeDecimal,
						p = h.afterDecimal,
						m = h.addNegation;
					return void 0 !== n && (p = q(p, n, a)), c && (f = function(e, t, n) {
						var a = function(e) {
								switch (e) {
									case "lakh":
										return /(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;
									case "wan":
										return /(\d)(?=(\d{4})+(?!\d))/g;
									default:
										return /(\d)(?=(\d{3})+(?!\d))/g
								}
							}(n),
							r = e.search(/[1-9]/);
						return r = -1 === r ? e.length : r, e.substring(0, r) + e.substring(r, e.length).replace(a, "$1" + t)
					}(f, c, s)), r && (f = r + f), o && (p += o), m && (f = "-" + f), e = f + (d && u || "") + p
				}, n.prototype.formatNumString = function(e) {
					void 0 === e && (e = "");
					var t = this.props,
						n = t.format,
						a = t.allowEmptyFormatting,
						r = t.customNumerals,
						o = e;
					if (r && 10 === r.length) {
						var i = new RegExp("[" + r.join("") + "]", "g");
						o = e.replace(i, (function(e) {
							return r.indexOf(e).toString()
						}))
					}
					return o = "" !== e || a ? "-" !== e || n ? "string" == typeof n ? this.formatWithPattern(o) : "function" == typeof n ? n(o) : this.formatAsNumber(o) : "-" : ""
				}, n.prototype.formatValueProp = function(e) {
					var t = this.props,
						n = t.format,
						a = t.decimalScale,
						r = t.fixedDecimalScale,
						o = t.allowEmptyFormatting,
						i = this.props,
						s = i.value,
						l = i.isNumericString,
						c = !(s = B(s) ? e : s) && 0 !== s;
					return c && o && (s = ""), c && !o ? "" : ("number" == typeof s && (s = function(e) {
						var t = "-" === (e += "")[0] ? "-" : "";
						t && (e = e.substring(1));
						var n = e.split(/[eE]/g),
							a = n[0],
							r = n[1];
						if (!(r = Number(r))) return t + a;
						var o = 1 + r,
							i = (a = a.replace(".", "")).length;
						return o < 0 ? a = "0." + W("0", Math.abs(o)) + a : o >= i ? a += W("0", o - i) : a = (a.substring(0, o) || "0") + "." + a.substring(o), t + a
					}(s), l = !0), "Infinity" === s && l && (s = ""), l && !n && "number" == typeof a && (s = function(e, t, n) {
						if (-1 !== ["", "-"].indexOf(e)) return e;
						var a = -1 !== e.indexOf(".") && t,
							r = H(e),
							o = r.beforeDecimal,
							i = r.afterDecimal,
							s = r.hasNagation,
							l = parseFloat("0." + (i || "0")),
							c = (i.length <= t ? "0." + i : l.toFixed(t)).split(".");
						return (s ? "-" : "") + o.split("").reverse().reduce((function(e, t, n) {
							return e.length > n ? (Number(e[0]) + Number(t)).toString() + e.substring(1, e.length) : t + e
						}), c[0]) + (a ? "." : "") + q(c[1] || "", Math.min(t, i.length), n)
					}(s, a, r)), l ? this.formatNumString(s) : this.formatInput(s))
				}, n.prototype.formatNegation = function(e) {
					void 0 === e && (e = "");
					var t = this.props.allowNegative,
						n = new RegExp("(-)"),
						a = new RegExp("(-)(.)*(-)"),
						r = n.test(e),
						o = a.test(e);
					return e = e.replace(/-/g, ""), r && !o && t && (e = "-" + e), e
				}, n.prototype.formatInput = function(e) {
					return void 0 === e && (e = ""), this.props.format || (e = this.removePrefixAndSuffix(e), e = this.formatNegation(e)), e = this.removeFormatting(e), this.formatNumString(e)
				}, n.prototype.isCharacterAFormat = function(e, t) {
					var n = this.props,
						a = n.format,
						r = n.prefix,
						o = n.suffix,
						i = n.decimalScale,
						s = n.fixedDecimalScale,
						l = this.getSeparators().decimalSeparator;
					return "string" == typeof a && "#" !== a[e] || !(a || !(e < r.length || e >= t.length - o.length || i && s && t[e] === l))
				}, n.prototype.correctInputValue = function(e, t, n) {
					var a = this,
						r = this.props,
						o = r.format,
						i = r.allowNegative,
						s = r.prefix,
						l = r.suffix,
						c = r.decimalScale,
						u = this.getSeparators(),
						d = u.allowedDecimalSeparators,
						h = u.decimalSeparator,
						f = this.state.numAsString || "",
						p = this.selectionBeforeInput,
						m = p.selectionStart,
						g = p.selectionEnd,
						y = function(e, t) {
							for (var n = 0, a = 0, r = e.length, o = t.length; e[n] === t[n] && n < r;) n++;
							for (; e[r - 1 - a] === t[o - 1 - a] && o - a > n && r - a > n;) a++;
							return {
								start: n,
								end: r - a
							}
						}(t, n),
						b = y.start,
						v = y.end;
					if (!o && b === v && -1 !== d.indexOf(n[m])) {
						var x = 0 === c ? "" : h;
						return n.substr(0, m) + x + n.substr(m + 1, n.length)
					}
					var w = o ? 0 : s.length,
						T = t.length - (o ? 0 : l.length);
					if (n.length > t.length || !n.length || b === v || 0 === m && g === t.length || 0 === b && v === t.length || m === w && g === T) return n;
					var _ = t.substr(b, v - b);
					if (!![].concat(_).find((function(e, n) {
							return a.isCharacterAFormat(n + b, t)
						}))) {
						var k = t.substr(b),
							P = {},
							E = [];
						[].concat(k).forEach((function(e, n) {
							a.isCharacterAFormat(n + b, t) ? P[n] = e : n > _.length - 1 && E.push(e)
						})), Object.keys(P).forEach((function(e) {
							E.length > e ? E.splice(e, 0, P[e]) : E.push(P[e])
						})), n = t.substr(0, b) + E.join("")
					}
					if (!o) {
						var S = this.removeFormatting(n),
							C = H(S, i),
							M = C.beforeDecimal,
							N = C.afterDecimal,
							$ = C.addNegation,
							A = e < n.indexOf(h) + 1;
						if (S.length < f.length && A && "" === M && !parseFloat(N)) return $ ? "-" : ""
					}
					return n
				}, n.prototype.updateValue = function(e) {
					var t = e.formattedValue,
						n = e.input,
						a = e.setCaretPosition;
					void 0 === a && (a = !0);
					var r = e.source,
						o = e.event,
						i = e.numAsString,
						s = e.caretPos,
						l = this.props.onValueChange,
						c = this.state.value;
					if (n) {
						if (void 0 === s && a) {
							var u = e.inputValue || n.value,
								d = Z(n);
							n.value = t, s = this.getCaretPosition(u, t, d)
						}
						n.value = t, a && this.setPatchedCaretPosition(n, s, t)
					}
					void 0 === i && (i = this.removeFormatting(t)), t !== c && (this.setState({
						value: t,
						numAsString: i
					}), l(this.getValueObject(t, i), {
						event: o,
						source: r
					}))
				}, n.prototype.onChange = function(e) {
					var t = e.target,
						n = t.value,
						a = this.state,
						r = this.props,
						o = r.isAllowed,
						i = a.value || "",
						s = Z(t);
					n = this.correctInputValue(s, i, n);
					var l = this.formatInput(n) || "",
						c = this.removeFormatting(l),
						u = o(this.getValueObject(l, c));
					u || (l = i), this.updateValue({
						formattedValue: l,
						numAsString: c,
						inputValue: n,
						input: t,
						event: e,
						source: "event"
					}), u && r.onChange(e)
				}, n.prototype.onBlur = function(e) {
					var t = this.props,
						n = this.state,
						a = t.format,
						r = t.onBlur,
						o = t.allowLeadingZeros,
						i = n.numAsString,
						s = n.value;
					if (this.focusedElm = null, clearTimeout(this.focusTimeout), clearTimeout(this.caretPositionTimeout), !a) {
						isNaN(parseFloat(i)) && (i = ""), o || (i = function(e) {
							if (!e) return e;
							var t = "-" === e[0];
							t && (e = e.substring(1, e.length));
							var n = e.split("."),
								a = n[0].replace(/^0+/, "") || "0",
								r = n[1] || "";
							return (t ? "-" : "") + a + (r ? "." + r : "")
						}(i));
						var l = this.formatNumString(i);
						if (l !== s) return this.updateValue({
							formattedValue: l,
							numAsString: i,
							input: e.target,
							setCaretPosition: !1,
							event: e,
							source: "event"
						}), void r(e)
					}
					r(e)
				}, n.prototype.onKeyDown = function(e) {
					var t, n = e.target,
						a = e.key,
						r = n.selectionStart,
						o = n.selectionEnd,
						i = n.value;
					void 0 === i && (i = "");
					var s = this.props,
						l = s.decimalScale,
						c = s.fixedDecimalScale,
						u = s.prefix,
						d = s.suffix,
						h = s.format,
						f = s.onKeyDown,
						p = void 0 !== l && c,
						m = this.getNumberRegex(!1, p),
						g = new RegExp("-"),
						y = "string" == typeof h;
					if (this.selectionBeforeInput = {
							selectionStart: r,
							selectionEnd: o
						}, "ArrowLeft" === a || "Backspace" === a ? t = r - 1 : "ArrowRight" === a ? t = r + 1 : "Delete" === a && (t = r), void 0 !== t && r === o) {
						var b = t,
							v = y ? h.indexOf("#") : u.length,
							x = y ? h.lastIndexOf("#") + 1 : i.length - d.length;
						if ("ArrowLeft" === a || "ArrowRight" === a) {
							var w = "ArrowLeft" === a ? "left" : "right";
							b = this.correctCaretPosition(i, t, w)
						} else if ("Delete" !== a || m.test(i[t]) || g.test(i[t])) {
							if ("Backspace" === a && !m.test(i[t]))
								if (r <= v + 1 && "-" === i[0] && void 0 === h) {
									var T = i.substring(1);
									this.updateValue({
										formattedValue: T,
										caretPos: b,
										input: n,
										event: e,
										source: "event"
									})
								} else if (!g.test(i[t])) {
								for (; !m.test(i[b - 1]) && b > v;) b--;
								b = this.correctCaretPosition(i, b, "left")
							}
						} else
							for (; !m.test(i[b]) && b < x;) b++;
						(b !== t || t < v || t > x) && (e.preventDefault(), this.setPatchedCaretPosition(n, b, i)), e.isUnitTestRun && this.setPatchedCaretPosition(n, b, i), f(e)
					} else f(e)
				}, n.prototype.onMouseUp = function(e) {
					var t = e.target,
						n = t.selectionStart,
						a = t.selectionEnd,
						r = t.value;
					if (void 0 === r && (r = ""), n === a) {
						var o = this.correctCaretPosition(r, n);
						o !== n && this.setPatchedCaretPosition(t, o, r)
					}
					this.props.onMouseUp(e)
				}, n.prototype.onFocus = function(e) {
					var t = this;
					e.persist(), this.focusedElm = e.target, this.focusTimeout = setTimeout((function() {
						var n = e.target,
							a = n.selectionStart,
							r = n.selectionEnd,
							o = n.value;
						void 0 === o && (o = "");
						var i = t.correctCaretPosition(o, a);
						i === a || 0 === a && r === o.length || t.setPatchedCaretPosition(n, i, o), t.props.onFocus(e)
					}), 0)
				}, n.prototype.render = function() {
					var t = this.props,
						n = t.type,
						a = t.displayType,
						r = t.customInput,
						o = t.renderText,
						i = t.getInputRef,
						s = t.format,
						l = (t.thousandSeparator, t.decimalSeparator, t.allowedDecimalSeparators, t.thousandsGroupStyle, t.decimalScale, t.fixedDecimalScale, t.prefix, t.suffix, t.removeFormatting, t.mask, t.defaultValue, t.isNumericString, t.allowNegative, t.allowEmptyFormatting, t.allowLeadingZeros, t.onValueChange, t.isAllowed, t.customNumerals, t.onChange, t.onKeyDown, t.onMouseUp, t.onFocus, t.onBlur, t.value, function(e, t) {
							var n = {};
							for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && -1 === t.indexOf(a) && (n[a] = e[a]);
							return n
						}(t, ["type", "displayType", "customInput", "renderText", "getInputRef", "format", "thousandSeparator", "decimalSeparator", "allowedDecimalSeparators", "thousandsGroupStyle", "decimalScale", "fixedDecimalScale", "prefix", "suffix", "removeFormatting", "mask", "defaultValue", "isNumericString", "allowNegative", "allowEmptyFormatting", "allowLeadingZeros", "onValueChange", "isAllowed", "customNumerals", "onChange", "onKeyDown", "onMouseUp", "onFocus", "onBlur", "value"])),
						c = this.state,
						u = c.value,
						d = c.mounted && function(e) {
							return e || "undefined" != typeof navigator && !(navigator.platform && /iPhone|iPod/.test(navigator.platform))
						}(s) ? "numeric" : void 0,
						h = Object.assign({
							inputMode: d
						}, l, {
							type: n,
							value: u,
							onChange: this.onChange,
							onKeyDown: this.onKeyDown,
							onMouseUp: this.onMouseUp,
							onFocus: this.onFocus,
							onBlur: this.onBlur
						});
					if ("text" === a) return o ? o(u, l) || null : e.createElement("span", Object.assign({}, l, {
						ref: i
					}), u);
					if (r) {
						var f = r;
						return e.createElement(f, Object.assign({}, h, {
							ref: i
						}))
					}
					return e.createElement("input", Object.assign({}, h, {
						ref: i
					}))
				}, n
			}(e.Component);
		G.defaultProps = Q;
		const X = G,
			K = ({
				children: t,
				className: n
			}) => t ? e.createElement("p", {
				className: `calc-help-message ${n}`
			}, t) : null;
		K.propTypes = {
			children: r().oneOfType([r().arrayOf(r().node), r().node]),
			className: r().string
		};
		const J = K,
			ee = ({
				className: t,
				label: n,
				name: a,
				defaultValue: r,
				options: o = [],
				onChange: i,
				autoFocus: s = !1,
				disabled: l = !1,
				showHelp: c = !1,
				helpText: u,
				style: d = {}
			}) => {
				const [h, f] = (0, e.useState)(!1);
				return e.createElement(T, null, e.createElement(k, null, n), e.createElement("select", {
					name: a,
					value: r,
					onChange: i,
					disabled: l,
					autoFocus: s,
					className: t,
					onFocus: () => f(!0),
					onBlur: () => f(!1),
					style: d
				}, Object.entries(o).map((([t, n]) => e.createElement("option", {
					key: `${n}${t}`,
					value: n
				}, t)))), h && c && e.createElement(J, null, u))
			};
		ee.propTypes = {
			className: r().string,
			label: r().string,
			name: r().string.isRequired,
			defaultValue: r().any,
			options: r().object,
			onChange: r().func,
			autoFocus: r().bool,
			disabled: r().bool,
			showHelp: r().bool,
			helpText: r().string,
			style: r().object
		};
		const te = (0, p.ZP)(ee, null, {
				displayName: "Select",
				styles: {
					cls1: "cls1-2970606384",
					cls2: "cls2-6630067920 cls1-2970606384"
				}
			}),
			ne = (0, p.ZP)("div", null, {
				displayName: "ButtonWrapper",
				styles: {
					cls1: "cls1-2339993045",
					cls2: "cls2-2799963994 cls1-2339993045"
				}
			}),
			ae = (0, p.ZP)("button", null, {
				displayName: "CancelButton",
				styles: {
					cls1: "cls1-9850073663",
					cls2: "cls2-9543674027 cls1-9850073663 cls2-1817046585"
				}
			}),
			re = (0, p.ZP)("div", null, {
				displayName: "ModalContainer",
				styles: {
					cls1: "cls1-3734692827",
					cls2: "cls2-621243533 cls1-3734692827"
				}
			}),
			oe = (0, p.ZP)("div", null, {
				displayName: "ModalBody",
				styles: {
					cls1: "cls1-9123534094",
					cls2: "cls2-429196347 cls1-9123534094 cls2-7363015855 cls2-1921585527 cls2-1902399752 cls2-6815851554 cls2-8128209481"
				}
			}),
			ie = {
				casl: "casl-2260099606"
			},
			se = ({
				toggle: t,
				onClose: n,
				config: a,
				site: r,
				translator: o
			}) => {
				const {
					ajaxUrl: i,
					ajaxNonce: s
				} = a, l = (0, e.useRef)(), [c, u] = (0, e.useState)(""), [d, h] = (0, e.useState)(""), [f, p] = (0, e.useState)(!1), [m, g] = (0, e.useState)(""), [y, b] = (0, e.useState)(""), [v, x] = (0, e.useState)(2), [w, T] = (0, e.useState)(""), [_, k] = (0, e.useState)(""), [P, S] = (0, e.useState)(!1);
				$(l, (() => {
					b(""), n()
				}));
				const C = async e => {
					const t = Object.entries(e).reduce(((e, [t, n]) => [...e, `${t}=${encodeURIComponent(n)}`]), []).join("&"),
						a = await fetch(i, {
							method: "POST",
							headers: {
								"Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
							},
							body: [t, `brokerCode=${r&&r.broker_code?r.broker_code:""}`, "action=m3-boss-contact-form", `_wpnonce=${s}`].join("&"),
							cache: "no-cache",
							credentials: "same-origin"
						}),
						l = await a.json();
					l.success ? (p(!1), S(!1), n()) : l.data && l.data.error ? (alert(l.data.error), S(!1)) : (alert(o.getText("Error submitting contact information")), S(!1))
				};
				return e.createElement(e.Fragment, null, t ? e.createElement(re, null, e.createElement(oe, {
					ref: l
				}, e.createElement(E, {
					id: "b-lead-first-name",
					name: "firstName",
					placeholder: o.getText("First Name"),
					onChange: e => u(e.target.value)
				}), e.createElement(E, {
					id: "b-lead-last-name",
					name: "lastName",
					placeholder: o.getText("Last Name"),
					onChange: e => h(e.target.value)
				}), e.createElement(E, {
					id: "b-lead-email",
					name: "email",
					placeholder: o.getText("Email"),
					onChange: e => g(e.target.value)
				}), e.createElement(X, {
					id: "b-lead-phone",
					type: "tel",
					name: "phone",
					format: "+1 (###) ###-####",
					onChange: e => b(e.target.value),
					placeholder: o.getText("Phone Number"),
					style: {
						width: "100%"
					}
				}), e.createElement(te, {
					name: "phoneType",
					onChange: e => x(e.target.value),
					defaultValue: v,
					options: {
						[o.getText("Mobile")]: 2,
						[o.getText("Work")]: 3,
						[o.getText("Residential")]: 1
					},
					style: {
						margin: "0.75rem auto -0.75rem auto"
					}
				}), e.createElement(E, {
					id: "b-lead-zip",
					name: "postalCode",
					placeholder: o.getText("Postal Code"),
					onChange: e => T(e.target.value),
					pattern: "^[A-Za-z0-9]{3}\\s?[A-Za-z0-9]{3}$",
					minLength: "6",
					maxLength: "7"
				}), e.createElement("textarea", {
					id: "b-lead-comments",
					name: "comments",
					placeholder: o.getText("Comments"),
					rows: "1",
					onChange: e => k(e.target.value),
					style: {
						marginBottom: "1rem"
					}
				}), e.createElement("div", {
					className: ie.casl
				}, e.createElement("label", null), e.createElement("input", {
					type: "checkbox",
					name: "caslConsent",
					value: f,
					onChange: () => p(!f)
				}), o.getText(`I consent to receiving communications from ${i.includes("mortgagealliance")?"Mortgage Alliance":i.includes("multi-prets")?"Multi-Prêts":i.includes("invis")?"INVIS":i.includes("migroup")||i.includes("mortgageintelligence")||i.includes("intelligencehypothecaire")?"Mortgage Intelligence":""}, affiliated companies and authorized agents. You can withdraw your consent at any time by unsubscribing.`)), e.createElement(ne, null, e.createElement("button", {
					disabled: !c || !d || !m || !y || !w || !f || P,
					className: "button",
					onClick: () => {
						window.localStorage.setItem("email", m), c && d ? m ? y ? w ? f ? (S(!0), C({
							firstName: c,
							lastName: d,
							email: m,
							phone: y.replace(/[^0-9]/g, ""),
							phoneType: v,
							postalCode: w,
							comments: _,
							casl: f,
							noCaptcha: !0
						})) : alert(o.getText("You must consent to the terms")) : alert(o.getText("Enter a postal code")) : alert(o.getText("Enter a phone number")) : alert(o.getText("Enter an email address")) : alert(o.getText("Enter a first and last name"))
					}
				}, o.getText("Submit")), e.createElement(ae, {
					className: "button",
					onClick: n
				}, o.getText("Cancel"))))) : e.createElement(e.Fragment, null))
			};
		se.propTypes = {
			toggle: r().bool,
			onClose: r().func,
			site: r().object,
			translator: r().object
		};
		const le = se,
			ce = {
				bottomcta: "bottomcta-9351288590 bottomcta-7471006459 bottomcta-5368169365"
			},
			ue = ({
				site: t,
				onClick: n,
				config: a,
				translator: r,
				calcName: o
			}) => {
				const [i, s] = (0, e.useState)(!1), [l, c] = (0, e.useState)(!1);
				return e.createElement(e.Fragment, null, e.createElement("div", {
					className: ce.bottomcta
				}, t ? e.createElement("a", {
					className: "button",
					onClick: () => c(!0)
				}, r.getText("Contact "), t.display_name) : e.createElement(e.Fragment, null), e.createElement("a", {
					className: "button",
					onClick: () => s(!0)
				}, r.getText("Send me a copy"))), e.createElement(L, {
					toggle: i,
					onSubmit: n,
					onClose: () => s(!1),
					config: a,
					site: t,
					translator: r,
					calcName: o
				}), e.createElement(le, {
					toggle: l,
					onClose: () => c(!1),
					config: a,
					site: t,
					translator: r
				}))
			};
		ue.propTypes = {
			site: r().object,
			onClick: r().func,
			config: r().object,
			translator: r().object,
			calcName: r().string
		};
		const de = (0, p.ZP)(ue, null, {
				displayName: "BottomCta",
				styles: {
					cls1: "cls1-2454782422",
					cls2: "cls2-4577442773 cls1-2454782422"
				}
			}),
			he = {
				text: "text-2460846476",
				"help-switch": "help-switch-1477678306",
				switch: "switch-528521643 switch-3274936059 switch-3206283468 switch-7402055006 switch-9043450969 switch-4478823038 switch-7897245126 switch-9187017979",
				"switch-btn": "switch-btn-5082399678 switch-btn-1557069978 switch-btn-8482698516 switch-btn-5269451999 switch-btn-8974926553 switch-btn-3804231055 switch-btn-1199832655"
			},
			fe = ({
				text: t,
				name: n,
				onChange: a,
				label: r = "Guided Calculator",
				translator: o
			}) => e.createElement(T, null, e.createElement(k, {
				style: {
					display: "inline-block"
				}
			}, o.getText(r), e.createElement("span", {
				className: he["help-switch"]
			}, e.createElement("input", {
				className: he.switch,
				name: n,
				id: n,
				onChange: a,
				type: "checkbox"
			}), e.createElement("label", {
				className: he["switch-btn"],
				htmlFor: n
			}))), e.createElement("p", {
				className: he.text
			}, o.getText(t)));
		fe.propTypes = {
			name: r().string.isRequired,
			text: r().string,
			onChange: r().func,
			translator: r().object
		};
		const pe = (0, p.ZP)(fe, null, {
				displayName: "HelpSwitch",
				styles: {
					cls1: "cls1-7449684965",
					cls2: "cls2-4439559149 cls1-7449684965"
				}
			}),
			me = ({
				name: t,
				min: n,
				max: a,
				label: r,
				value: o,
				onChange: i,
				showHelp: s = !1,
				helpText: l,
				className: c
			}) => {
				const [u, d] = (0, e.useState)(!1);
				return e.createElement(T, null, e.createElement(k, null, r), e.createElement(X, {
					className: c,
					allowNegative: !1,
					value: o,
					decimalScale: "0",
					onValueChange: ({
						floatValue: e
					}) => {
						i({
							target: {
								name: t,
								value: e
							}
						})
					},
					isAllowed: ({
						floatValue: e
					}) => void 0 === e || e >= n && e <= a,
					onFocus: () => d(!0),
					onBlur: () => d(!1)
				}), u && s && e.createElement(J, null, l))
			};
		me.propTypes = {
			showHelp: r().bool,
			helpText: r().string,
			onChange: r().func,
			className: r().string
		};
		const ge = (e, t) => e.find((({
				province: e
			}) => e === t)),
			ye = {
				rate: "rate-9027884094",
				province: "province-6900941883",
				"province-rate": "province-rate-2869230652"
			},
			be = ({
				name: t,
				label: n,
				min: a = 0,
				max: r = 100,
				decimalScale: o = 2,
				placeholder: i,
				value: s,
				rates: l,
				onChange: c,
				showHelp: u = !1,
				helpText: d,
				className: h,
				useCompactView: f = !1,
				translator: p
			}) => {
				const [m, g] = (0, e.useState)(s), [y] = (0, e.useState)(l.ours.map((({
					province: e
				}) => e)));
				const {
					rate: b,
					rateType: v,
					province: x,
					provinceRate: w
				} = m, [_, P] = (0, e.useState)(ge(l.ours, x || y[0]));
				(0, e.useEffect)((() => {
					c({
						target: {
							name: t,
							value: m
						}
					})
				}), [b, v, x, w]);
				const [E, S] = (0, e.useState)(!1), C = f ? {
					width: "100%",
					margin: "0 0 0.5rem"
				} : {}, M = !!b && ![_.fixed1Yr, _.fixed2Yr, _.fixed3Yr, _.fixed4Yr, _.fixed5Yr, _.fixed7Yr, _.fixed10Yr, _.open1Yr, _.variable5Yr].includes(parseFloat(b));
				return e.createElement(T, null, e.createElement(k, null, p.getText(n)), e.createElement(X, {
					suffix: " %",
					allowNegative: !1,
					decimalScale: o,
					placeholder: p.getText(i),
					value: b,
					isAllowed: ({
						floatValue: e
					}) => void 0 === e || e >= a && e <= r,
					onValueChange: ({
						floatValue: e
					}) => g({
						...m,
						rate: e
					}),
					className: ye.rate,
					onFocus: () => S(!0),
					onBlur: () => S(!1)
				}), b && M ? "" : e.createElement("div", {
					className: h
				}, e.createElement("select", {
					name: "province",
					value: x,
					onChange: ({
						target: {
							value: e
						}
					}) => {
						const t = ge(l.ours, e);
						P(t), g({
							...m,
							province: e,
							provinceRate: t.fixed1Yr,
							rate: t.fixed1Yr
						})
					},
					onFocus: () => S(!0),
					onBlur: () => S(!1),
					className: ye.province,
					style: C
				}, y.map((t => e.createElement("option", {
					key: t,
					value: t
				}, t)))), e.createElement("select", {
					name: "rate",
					value: w,
					onChange: ({
						target: {
							value: e
						}
					}) => {
						const [t, n] = e.split(",");
						g({
							...m,
							rate: parseFloat(t),
							rateType: n,
							provinceRate: e
						})
					},
					onFocus: () => S(!0),
					onBlur: () => S(!1),
					className: ye["province-rate"],
					style: C
				}, e.createElement("option", {
					key: "fixed1Yr",
					value: [_.fixed1Yr, "fixed", 1]
				}, _.fixed1Yr, " % – ", p.getText("1yr closed fixed")), e.createElement("option", {
					key: "fixed2Yr",
					value: [_.fixed2Yr, "fixed", 2]
				}, _.fixed2Yr, " % – 2", p.getText("yr closed fixed")), e.createElement("option", {
					key: "fixed3Yr",
					value: [_.fixed3Yr, "fixed", 3]
				}, _.fixed3Yr, " % – 3", p.getText("yr closed fixed")), e.createElement("option", {
					key: "fixed4Yr",
					value: [_.fixed4Yr, "fixed", 4]
				}, _.fixed4Yr, " % – 4", p.getText("yr closed fixed")), e.createElement("option", {
					key: "fixed5Yr",
					value: [_.fixed5Yr, "fixed", 5]
				}, _.fixed5Yr, " % – 5", p.getText("yr closed fixed")), e.createElement("option", {
					key: "fixed7Yr",
					value: [_.fixed7Yr, "fixed", 7]
				}, _.fixed7Yr, " % – 7", p.getText("yr closed fixed")), e.createElement("option", {
					key: "fixed10Yr",
					value: [_.fixed10Yr, "fixed", 10]
				}, _.fixed10Yr, " % – 10", p.getText("yr closed fixed")), e.createElement("option", {
					key: "open1Yr",
					value: [_.open1Yr, "fixed", 1]
				}, _.open1Yr, " % – 1", p.getText("yr open fixed")), e.createElement("option", {
					key: "variable5Yr",
					value: [_.variable5Yr, "variable", 5]
				}, _.variable5Yr, " % – 5", p.getText("yr variable")))), E && u && e.createElement(J, null, p.getText(d)))
			};
		be.propTypes = {
			showHelp: r().bool,
			helpText: r().string,
			onChange: r().func,
			className: r().string,
			rates: r().object,
			placeholder: r().string,
			value: r().object,
			useCompactView: r().bool,
			translator: r().object
		};
		const ve = (0, p.ZP)(be, null, {
				displayName: "InterestRateInput",
				styles: {
					cls1: "cls1-128859165",
					cls2: "cls2-6595746288 cls1-128859165"
				}
			}),
			xe = ({
				name: t,
				label: n,
				value: a,
				onChange: r,
				showHelp: o = !1,
				helpText: i,
				className: s,
				readOnly: l,
				onBlur: c,
				text: u,
				translator: d
			}) => {
				const h = ({
						floatValue: e
					}) => {
						r({
							target: {
								name: t,
								value: e
							}
						})
					},
					[f, p] = (0, e.useState)(!1);
				return e.createElement(T, null, e.createElement(k, null, d.getText(n)), "fr" === d.getLanguage() ? e.createElement(X, {
					suffix: " $",
					allowNegative: !1,
					thousandSeparator: " ",
					value: a,
					decimalScale: "0",
					onValueChange: h,
					className: s,
					readOnly: l,
					onFocus: () => p(!0),
					onBlur: e => {
						p(!1), c && c(e)
					}
				}) : e.createElement(X, {
					prefix: "$ ",
					allowNegative: !1,
					thousandSeparator: !0,
					value: a,
					decimalScale: "0",
					onValueChange: h,
					className: s,
					readOnly: l,
					onFocus: () => p(!0),
					onBlur: e => {
						p(!1), c && c(e)
					}
				}), f && o && e.createElement(J, null, d.getText(i)), e.createElement("span", {
					style: {
						color: "red",
						fontSize: "0.8em"
					}
				}, d.getText(u)))
			};
		xe.propTypes = {
			showHelp: r().bool,
			helpText: r().string,
			onChange: r().func,
			className: r().string,
			onBlur: r().func
		};
		const we = (0, p.ZP)(xe, null, {
				displayName: "MoneyInput",
				styles: {
					cls1: "cls1-6781565197",
					cls2: "cls2-4106209182 cls1-6781565197"
				}
			}),
			Te = ({
				name: t,
				min: n,
				max: a,
				label: r,
				placeholder: o,
				value: i,
				onChange: s,
				showHelp: l = !1,
				helpText: c,
				className: u
			}) => {
				const [d, h] = (0, e.useState)(!1);
				return e.createElement(T, null, e.createElement(k, null, r), e.createElement(X, {
					className: u,
					allowNegative: !1,
					value: i,
					onValueChange: ({
						value: e
					}) => {
						s({
							target: {
								name: t,
								value: e
							}
						})
					},
					format: "##/####",
					placeholder: o,
					onFocus: () => h(!0),
					onBlur: () => h(!1)
				}), d && l && e.createElement(J, null, c))
			};
		Te.propTypes = {
			showHelp: r().bool,
			helpText: r().string,
			onChange: r().func,
			placeholder: r().string,
			className: r().string
		};
		const _e = {
				Monthly: 12,
				"Semi-Monthly": 24,
				"Accelerated Weekly": 52,
				"Accelerated Bi-Weekly": 26,
				Weekly: 52,
				"Bi-Weekly": 26
			},
			ke = ({
				defaultValue: t,
				onChange: n = (() => {}),
				translator: a
			}) => {
				const r = Object.keys(_e).reduce(((e, t) => ({
					...e,
					[a.getText(t)]: t
				})), {});
				return e.createElement(te, {
					label: a.getText("Payment Frequency"),
					name: "paymentFrequency",
					onChange: ({
						target: {
							value: e
						}
					}) => {
						n({
							target: {
								name: "paymentFrequency",
								value: {
									frequency: e,
									numPaymentsPerYear: _e[e]
								}
							}
						})
					},
					defaultValue: t,
					options: r
				})
			};
		ke.propTypes = {
			defaultValue: r().string,
			onChange: r().func,
			translator: r().object
		};
		const Pe = ke,
			Ee = ({
				name: t,
				label: n,
				min: a = 0,
				max: r = 100,
				decimalScale: o = 2,
				value: i,
				onChange: s,
				showHelp: l = !1,
				helpText: c,
				className: u,
				onBlur: d
			}) => {
				const [h, f] = (0, e.useState)(!1);
				return e.createElement(T, null, e.createElement(k, null, n), e.createElement(X, {
					suffix: " %",
					allowNegative: !1,
					decimalScale: o,
					value: i,
					isAllowed: ({
						floatValue: e
					}) => void 0 === e || e >= a && e <= r,
					onValueChange: ({
						floatValue: e
					}) => {
						s({
							target: {
								name: t,
								value: e
							}
						})
					},
					className: u,
					onFocus: () => f(!0),
					onBlur: e => {
						f(!1), d && d(e)
					}
				}), h && l && e.createElement(J, null, c))
			};
		Ee.propTypes = {
			showHelp: r().bool,
			helpText: r().string,
			onChange: r().func,
			className: r().string,
			onBlur: r().func
		};
		const Se = (0, p.ZP)(Ee, null, {
				displayName: "PercentageInput",
				styles: {
					cls1: "cls1-5095816832",
					cls2: "cls2-9448225068 cls1-5095816832"
				}
			}),
			Ce = ({
				site: t,
				showPrequal: n = !1,
				translator: a
			}) => {
				const r = a.getLanguage(),
					o = t && t.long_form_url || "https://www.mortgageboss.ca/leadgeneration/add_lead.aspx?Agent_ID=18";
				return e.createElement("div", {
					className: "calc-topcta"
				}, e.createElement("p", null, a.getText("We can help you lock in your best rate")), !n || t && !t.has_prequal_enabled ? "" : e.createElement("a", {
					className: "button",
					href: `https://yourmortgagemarket.com/${r}/Mortgage-Market/Landing-Page-${r}?leadDealId=TMAC${t&&t.broker_code?`&brokerCode=${t.broker_code}`:""}`,
					target: "_blank"
				}, a.getText("Get Prequalified Now")), e.createElement("a", {
					className: "button",
					href: o,
					target: "_blank"
				}, a.getText("Apply Now")))
			};
		Ce.propTypes = {
			site: r().object,
			showPrequal: r().bool,
			translator: r().object
		};
		const Me = Ce,
			Ne = (e, t = "", n = 0) => "fr" === t ? `${parseInt(e).toFixed(n).replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1 ")} $` : `$ ${parseInt(e).toFixed(n).replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,")}`,
			$e = (e, t, n) => 1 === e ? t : n,
			Ae = e => {
				if (e >= 1e6) return 20;
				if (e > 5e5) {
					return 100 * (25e3 + .1 * (e - 5e5)) / e
				}
				return 5
			},
			Ie = e => Math.round(Ae(e) / 100 * e),
			Oe = e => Math.round(.8 * e),
			Re = ({
				additionalPaymentType: e,
				year: t,
				yearOfAdditionalPayment: n,
				additionalPaymentStartingYear: a,
				payment: r,
				numPaymentsPerYear: o
			}) => {
				if ("once" === e && t === n && r === o) return !0;
				if ("increase" === e) {
					if (t === a && r === o) return !0;
					if (t > a) return !0
				} else {
					if ("yearly" === e && r === o) return !0;
					if ("semi-annually" === e) {
						if (r % Math.floor(o / 2) == 0) return !0
					} else if ("quarterly" === e) {
						if (r % Math.floor(o / 4) == 0) return !0
					}
				}
				return !1
			},
			De = {
				"down-payment-toggle": "down-payment-toggle-6302339202",
				toggle: "toggle-6570009192"
			},
			Fe = ({
				fields: t,
				className: n,
				onChange: a,
				rates: r,
				showHelp: o = !1,
				useCompactView: i = !1,
				config: {
					defaultRatesProvince: s
				},
				translator: l
			}) => {
				const [c, u] = (0, e.useState)("$"), [d, h] = M({
					homePrice: 35e4,
					downPaymentDollars: 7e4,
					downPaymentPercentage: 20,
					downPaymentInput: c,
					termInYears: 25,
					interest: {
						rate: r.ours[0].fixed1Yr,
						rateType: "fixed",
						province: s
					},
					paymentFrequency: {
						frequency: "Monthly",
						numPaymentsPerYear: 12
					},
					closingCosts: 5e3,
					additionalPaymentType: "none",
					yearOfAdditionalPayment: 0,
					additionalPaymentStartingYear: 0,
					additionalPaymentAmount: 0,
					...t
				}, ["homePrice", "downPaymentDollars", "termInYears", "interest", "paymentFrequency", "closingCosts"]), f = Ie(d.homePrice), p = Oe(d.homePrice), m = Ae(d.homePrice), g = (d.homePrice, 80), y = d.downPaymentDollars / d.homePrice < .2 || d.downPaymentPercentage < 20 ? [1, 2, 3, 4, 5, 7, 10, 15, 20, 25] : [1, 2, 3, 4, 5, 7, 10, 15, 20, 25, 30];
				(0, e.useEffect)((() => {
					a({
						...d,
						downPaymentInput: c
					})
				}), [...Object.values(d), c]);
				return e.createElement("div", {
					className: n
				}, e.createElement(we, {
					label: "Home Price",
					name: "homePrice",
					value: d.homePrice,
					placeholder: "Home price in $",
					onChange: h,
					helpText: "Have you found a place you like? Type in the price. If you haven’t found somewhere yet, put in what you expect the home to cost.",
					showHelp: o,
					translator: l
				}), e.createElement("div", {
					className: De["down-payment-toggle"]
				}, e.createElement("a", {
					onClick: () => {
						return h("$" === (e = "$" === c ? "%" : "$") ? {
							target: {
								name: "downPaymentDollars",
								value: d.homePrice * (d.downPaymentPercentage / 100)
							}
						} : {
							target: {
								name: "downPaymentPercentage",
								value: 100 * d.downPaymentDollars / d.homePrice
							}
						}), void u(e);
						var e
					},
					className: De.toggle
				}, l.getText("Switch to "), "$" === c ? "%" : "$"), "$" === c ? e.createElement(we, {
					label: "Down Payment ($)",
					name: "downPaymentDollars",
					value: d.downPaymentDollars,
					placeholder: "Down payment in $",
					onBlur: e => {
						const t = parseInt(e.target.value.replace(/[^\d]/g, ""));
						return t < f ? h({
							target: {
								name: "downPaymentDollars",
								value: f
							}
						}) : t > p ? h({
							target: {
								name: "downPaymentDollars",
								value: p
							}
						}) : void 0
					},
					onChange: h,
					helpText: "This helps you determine how much you can put down towards the price of the home when you buy. Write in how much you will have to spend. Make sure it is at least 5% of the price of the home.",
					showHelp: o,
					translator: l
				}) : e.createElement(Se, {
					label: l.getText("Down Payment (%)"),
					name: "downPaymentPercentage",
					value: d.downPaymentPercentage,
					placeholder: l.getText("Down payment %"),
					onBlur: e => {
						const t = parseFloat(e.target.value.replace(/[^\d\.]/g, ""));
						return t < m ? h({
							target: {
								name: "downPaymentPercentage",
								value: m
							}
						}) : t > g ? h({
							target: {
								name: "downPaymentPercentage",
								value: g
							}
						}) : void 0
					},
					onChange: h,
					helpText: l.getText("This helps you determine how much you can put down towards the price of the home when you buy. Write in how much you will have to spend. Make sure it is at least 5% of the price of the home."),
					showHelp: o
				})), e.createElement(te, {
					label: l.getText("Amortization"),
					name: "termInYears",
					defaultValue: d.termInYears,
					options: y.reduce(((e, t) => t && {
						...e,
						[`${t} ${1===t?`${l.getText("year")}`:`${l.getText("years")}`}`]: t
					}), {}),
					onChange: h,
					helpText: l.getText("This helps you decide how long you want to pay the loan back. The longer the amount of time, the less the monthly payment (but the higher the interest)."),
					showHelp: o
				}), e.createElement(ve, {
					label: "Interest Rate (%)",
					name: "interest",
					rates: r,
					value: d.interest,
					placeholder: "Interest rate in %",
					onChange: h,
					helpText: "We’ve included the average rate, but you can use the Rates page or Pre-qualification to gain a better understanding of what you may qualify for.",
					showHelp: o,
					useCompactView: i,
					translator: l
				}), e.createElement(Pe, {
					defaultValue: d.paymentFrequency.frequency,
					onChange: e => {
						h(e)
					},
					translator: l
				}), e.createElement(we, {
					label: "Closing Costs",
					name: "closingCosts",
					value: d.closingCosts,
					placeholder: "Closing costs in $",
					onChange: h,
					helpText: "Getting the mortgage is not all. You will need some cash in hand to cover other expenditures related to the purchase of a new home.",
					showHelp: o,
					translator: l
				}), e.createElement(te, {
					label: l.getText("Additional Payment"),
					name: "additionalPaymentType",
					onChange: h,
					defaultValue: d.additionalPaymentType,
					options: {
						[l.getText("None")]: "none",
						[l.getText("One-time payment")]: "once",
						[l.getText("Increase payments")]: "increase",
						[l.getText("Yearly")]: "yearly",
						[l.getText("Semi-annually")]: "semi-annually",
						[l.getText("Quarterly")]: "quarterly"
					}
				}), "once" === d.additionalPaymentType ? e.createElement(te, {
					label: l.getText("Year of Payment"),
					name: "yearOfAdditionalPayment",
					defaultValue: d.yearOfAdditionalPayment,
					options: Array(25).fill().map(((e, t) => t + 1)).reduce(((e, t) => t && {
						...e,
						[`${l.getText("Year")} ${t}`]: t
					}), {
						[l.getText("First Payment")]: 0
					}),
					onChange: h
				}) : "", "increase" === d.additionalPaymentType ? e.createElement(te, {
					label: l.getText("Starting in Year"),
					name: "additionalPaymentStartingYear",
					defaultValue: d.additionalPaymentStartingYear,
					options: Array(25).fill().map(((e, t) => t + 1)).reduce(((e, t) => t && {
						...e,
						[`${l.getText("Year")} ${t}`]: t
					}), {
						[l.getText("First Payment")]: 0
					}),
					onChange: h
				}) : "", "none" !== d.additionalPaymentType ? e.createElement(we, {
					label: "Additional Payment Amount",
					name: "additionalPaymentAmount",
					value: d.additionalPaymentAmount,
					placeholder: "Additional payment in $",
					onChange: h,
					translator: l
				}) : "")
			};
		Fe.propTypes = {
			fields: r().object,
			onChange: r().func,
			className: r().string,
			rates: r().object,
			showHelp: r().bool,
			useCompactView: r().bool,
			translator: r().object
		};
		const Le = Fe,
			ze = {
				"remove-scenario": "remove-scenario-338256761"
			},
			Ve = (0, p.ZP)("div", null, {
				displayName: "ScenarioTag",
				styles: {
					cls1: "cls1-5166685484",
					cls2: "cls2-5300378036 cls1-5166685484"
				}
			}),
			Be = ({
				fields: t,
				results: n,
				onChange: a,
				onRemove: r,
				scenarioCount: o,
				showHelp: i,
				index: s,
				rates: l,
				config: c,
				translator: u
			}) => e.createElement("div", {
				className: "calc-results",
				style: {
					padding: "1rem 1rem 0.5rem 1rem"
				}
			}, o > 1 ? e.createElement(Ve, null, u.getText("Scenario"), " ", s + 1, ":", s > 0 ? e.createElement("span", {
				className: ze["remove-scenario"],
				onClick: r
			}, e.createElement(f, {
				size: "1rem"
			})) : null) : null, e.createElement(v, {
				results: n,
				useCompactView: 4 === o,
				translator: u
			}), e.createElement(Le, {
				fields: t,
				onChange: a,
				useCompactView: 4 === o,
				rates: l,
				showHelp: i,
				config: c,
				translator: u
			}));
		Be.propTypes = {
			fields: r().object,
			results: r().object,
			onChange: r().func,
			onRemove: r().func,
			scenarioCount: r().number,
			showHelp: r().bool,
			index: r().number,
			rates: r().object,
			translator: r().object
		};
		const je = Be;
		const He = "undefined" == typeof window ? function(e) {
			return e()
		} : window.requestAnimationFrame;

		function qe(e, t, n) {
			const a = n || (e => Array.prototype.slice.call(e));
			let r = !1,
				o = [];
			return function(...n) {
				o = a(n), r || (r = !0, He.call(window, (() => {
					r = !1, e.apply(t, o)
				})))
			}
		}
		const We = e => "start" === e ? "left" : "end" === e ? "right" : "center",
			Ye = (e, t, n) => "start" === e ? t : "end" === e ? n : (t + n) / 2;

		function Ue() {}
		const Ze = function() {
			let e = 0;
			return function() {
				return e++
			}
		}();

		function Qe(e) {
			return null == e
		}

		function Ge(e) {
			if (Array.isArray && Array.isArray(e)) return !0;
			const t = Object.prototype.toString.call(e);
			return "[object" === t.substr(0, 7) && "Array]" === t.substr(-6)
		}

		function Xe(e) {
			return null !== e && "[object Object]" === Object.prototype.toString.call(e)
		}
		const Ke = e => ("number" == typeof e || e instanceof Number) && isFinite(+e);

		function Je(e, t) {
			return Ke(e) ? e : t
		}

		function et(e, t) {
			return void 0 === e ? t : e
		}
		const tt = (e, t) => "string" == typeof e && e.endsWith("%") ? parseFloat(e) / 100 * t : +e;

		function nt(e, t, n) {
			if (e && "function" == typeof e.call) return e.apply(n, t)
		}

		function at(e, t, n, a) {
			let r, o, i;
			if (Ge(e))
				if (o = e.length, a)
					for (r = o - 1; r >= 0; r--) t.call(n, e[r], r);
				else
					for (r = 0; r < o; r++) t.call(n, e[r], r);
			else if (Xe(e))
				for (i = Object.keys(e), o = i.length, r = 0; r < o; r++) t.call(n, e[i[r]], i[r])
		}

		function rt(e, t) {
			let n, a, r, o;
			if (!e || !t || e.length !== t.length) return !1;
			for (n = 0, a = e.length; n < a; ++n)
				if (r = e[n], o = t[n], r.datasetIndex !== o.datasetIndex || r.index !== o.index) return !1;
			return !0
		}

		function ot(e) {
			if (Ge(e)) return e.map(ot);
			if (Xe(e)) {
				const t = Object.create(null),
					n = Object.keys(e),
					a = n.length;
				let r = 0;
				for (; r < a; ++r) t[n[r]] = ot(e[n[r]]);
				return t
			}
			return e
		}

		function it(e) {
			return -1 === ["__proto__", "prototype", "constructor"].indexOf(e)
		}

		function st(e, t, n, a) {
			if (!it(e)) return;
			const r = t[e],
				o = n[e];
			Xe(r) && Xe(o) ? lt(r, o, a) : t[e] = ot(o)
		}

		function lt(e, t, n) {
			const a = Ge(t) ? t : [t],
				r = a.length;
			if (!Xe(e)) return e;
			const o = (n = n || {}).merger || st;
			for (let i = 0; i < r; ++i) {
				if (!Xe(t = a[i])) continue;
				const r = Object.keys(t);
				for (let a = 0, i = r.length; a < i; ++a) o(r[a], e, t, n)
			}
			return e
		}

		function ct(e, t) {
			return lt(e, t, {
				merger: ut
			})
		}

		function ut(e, t, n) {
			if (!it(e)) return;
			const a = t[e],
				r = n[e];
			Xe(a) && Xe(r) ? ct(a, r) : Object.prototype.hasOwnProperty.call(t, e) || (t[e] = ot(r))
		}
		const dt = ".";

		function ht(e, t) {
			const n = e.indexOf(dt, t);
			return -1 === n ? e.length : n
		}

		function ft(e, t) {
			if ("" === t) return e;
			let n = 0,
				a = ht(t, n);
			for (; e && a > n;) e = e[t.substr(n, a - n)], n = a + 1, a = ht(t, n);
			return e
		}

		function pt(e) {
			return e.charAt(0).toUpperCase() + e.slice(1)
		}
		const mt = e => void 0 !== e,
			gt = e => "function" == typeof e,
			yt = Math.PI,
			bt = 2 * yt,
			vt = bt + yt,
			xt = Number.POSITIVE_INFINITY,
			wt = yt / 180,
			Tt = yt / 2,
			_t = yt / 4,
			kt = 2 * yt / 3,
			Pt = Math.log10,
			Et = Math.sign;

		function St(e) {
			const t = Math.round(e);
			e = Mt(e, t, e / 1e3) ? t : e;
			const n = Math.pow(10, Math.floor(Pt(e))),
				a = e / n;
			return (a <= 1 ? 1 : a <= 2 ? 2 : a <= 5 ? 5 : 10) * n
		}

		function Ct(e) {
			return !isNaN(parseFloat(e)) && isFinite(e)
		}

		function Mt(e, t, n) {
			return Math.abs(e - t) < n
		}

		function Nt(e, t, n) {
			let a, r, o;
			for (a = 0, r = e.length; a < r; a++) o = e[a][n], isNaN(o) || (t.min = Math.min(t.min, o), t.max = Math.max(t.max, o))
		}

		function $t(e) {
			return e * (yt / 180)
		}

		function At(e) {
			return e * (180 / yt)
		}

		function It(e) {
			if (!Ke(e)) return;
			let t = 1,
				n = 0;
			for (; Math.round(e * t) / t !== e;) t *= 10, n++;
			return n
		}

		function Ot(e, t) {
			return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
		}

		function Rt(e, t) {
			return (e - t + vt) % bt - yt
		}

		function Dt(e) {
			return (e % bt + bt) % bt
		}

		function Ft(e, t, n, a) {
			const r = Dt(e),
				o = Dt(t),
				i = Dt(n),
				s = Dt(o - r),
				l = Dt(i - r),
				c = Dt(r - o),
				u = Dt(r - i);
			return r === o || r === i || a && o === i || s > l && c < u
		}

		function Lt(e, t, n) {
			return Math.max(t, Math.min(n, e))
		}
		const zt = e => 0 === e || 1 === e,
			Vt = (e, t, n) => -Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * bt / n),
			Bt = (e, t, n) => Math.pow(2, -10 * e) * Math.sin((e - t) * bt / n) + 1,
			jt = {
				linear: e => e,
				easeInQuad: e => e * e,
				easeOutQuad: e => -e * (e - 2),
				easeInOutQuad: e => (e /= .5) < 1 ? .5 * e * e : -.5 * (--e * (e - 2) - 1),
				easeInCubic: e => e * e * e,
				easeOutCubic: e => (e -= 1) * e * e + 1,
				easeInOutCubic: e => (e /= .5) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2),
				easeInQuart: e => e * e * e * e,
				easeOutQuart: e => -((e -= 1) * e * e * e - 1),
				easeInOutQuart: e => (e /= .5) < 1 ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2),
				easeInQuint: e => e * e * e * e * e,
				easeOutQuint: e => (e -= 1) * e * e * e * e + 1,
				easeInOutQuint: e => (e /= .5) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2),
				easeInSine: e => 1 - Math.cos(e * Tt),
				easeOutSine: e => Math.sin(e * Tt),
				easeInOutSine: e => -.5 * (Math.cos(yt * e) - 1),
				easeInExpo: e => 0 === e ? 0 : Math.pow(2, 10 * (e - 1)),
				easeOutExpo: e => 1 === e ? 1 : 1 - Math.pow(2, -10 * e),
				easeInOutExpo: e => zt(e) ? e : e < .5 ? .5 * Math.pow(2, 10 * (2 * e - 1)) : .5 * (2 - Math.pow(2, -10 * (2 * e - 1))),
				easeInCirc: e => e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1),
				easeOutCirc: e => Math.sqrt(1 - (e -= 1) * e),
				easeInOutCirc: e => (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1),
				easeInElastic: e => zt(e) ? e : Vt(e, .075, .3),
				easeOutElastic: e => zt(e) ? e : Bt(e, .075, .3),
				easeInOutElastic(e) {
					const t = .1125;
					return zt(e) ? e : e < .5 ? .5 * Vt(2 * e, t, .45) : .5 + .5 * Bt(2 * e - 1, t, .45)
				},
				easeInBack(e) {
					const t = 1.70158;
					return e * e * ((t + 1) * e - t)
				},
				easeOutBack(e) {
					const t = 1.70158;
					return (e -= 1) * e * ((t + 1) * e + t) + 1
				},
				easeInOutBack(e) {
					let t = 1.70158;
					return (e /= .5) < 1 ? e * e * ((1 + (t *= 1.525)) * e - t) * .5 : .5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2)
				},
				easeInBounce: e => 1 - jt.easeOutBounce(1 - e),
				easeOutBounce(e) {
					const t = 7.5625,
						n = 2.75;
					return e < 1 / n ? t * e * e : e < 2 / n ? t * (e -= 1.5 / n) * e + .75 : e < 2.5 / n ? t * (e -= 2.25 / n) * e + .9375 : t * (e -= 2.625 / n) * e + .984375
				},
				easeInOutBounce: e => e < .5 ? .5 * jt.easeInBounce(2 * e) : .5 * jt.easeOutBounce(2 * e - 1) + .5
			},
			Ht = {
				0: 0,
				1: 1,
				2: 2,
				3: 3,
				4: 4,
				5: 5,
				6: 6,
				7: 7,
				8: 8,
				9: 9,
				A: 10,
				B: 11,
				C: 12,
				D: 13,
				E: 14,
				F: 15,
				a: 10,
				b: 11,
				c: 12,
				d: 13,
				e: 14,
				f: 15
			},
			qt = "0123456789ABCDEF",
			Wt = e => qt[15 & e],
			Yt = e => qt[(240 & e) >> 4] + qt[15 & e],
			Ut = e => (240 & e) >> 4 == (15 & e);

		function Zt(e) {
			var t = function(e) {
				return Ut(e.r) && Ut(e.g) && Ut(e.b) && Ut(e.a)
			}(e) ? Wt : Yt;
			return e ? "#" + t(e.r) + t(e.g) + t(e.b) + (e.a < 255 ? t(e.a) : "") : e
		}

		function Qt(e) {
			return e + .5 | 0
		}
		const Gt = (e, t, n) => Math.max(Math.min(e, n), t);

		function Xt(e) {
			return Gt(Qt(2.55 * e), 0, 255)
		}

		function Kt(e) {
			return Gt(Qt(255 * e), 0, 255)
		}

		function Jt(e) {
			return Gt(Qt(e / 2.55) / 100, 0, 1)
		}

		function en(e) {
			return Gt(Qt(100 * e), 0, 100)
		}
		const tn = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
		const nn = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;

		function an(e, t, n) {
			const a = t * Math.min(n, 1 - n),
				r = (t, r = (t + e / 30) % 12) => n - a * Math.max(Math.min(r - 3, 9 - r, 1), -1);
			return [r(0), r(8), r(4)]
		}

		function rn(e, t, n) {
			const a = (a, r = (a + e / 60) % 6) => n - n * t * Math.max(Math.min(r, 4 - r, 1), 0);
			return [a(5), a(3), a(1)]
		}

		function on(e, t, n) {
			const a = an(e, 1, .5);
			let r;
			for (t + n > 1 && (r = 1 / (t + n), t *= r, n *= r), r = 0; r < 3; r++) a[r] *= 1 - t - n, a[r] += t;
			return a
		}

		function sn(e) {
			const t = e.r / 255,
				n = e.g / 255,
				a = e.b / 255,
				r = Math.max(t, n, a),
				o = Math.min(t, n, a),
				i = (r + o) / 2;
			let s, l, c;
			return r !== o && (c = r - o, l = i > .5 ? c / (2 - r - o) : c / (r + o), s = r === t ? (n - a) / c + (n < a ? 6 : 0) : r === n ? (a - t) / c + 2 : (t - n) / c + 4, s = 60 * s + .5), [0 | s, l || 0, i]
		}

		function ln(e, t, n, a) {
			return (Array.isArray(t) ? e(t[0], t[1], t[2]) : e(t, n, a)).map(Kt)
		}

		function cn(e, t, n) {
			return ln(an, e, t, n)
		}

		function un(e) {
			return (e % 360 + 360) % 360
		}

		function dn(e) {
			const t = nn.exec(e);
			let n, a = 255;
			if (!t) return;
			t[5] !== n && (a = t[6] ? Xt(+t[5]) : Kt(+t[5]));
			const r = un(+t[2]),
				o = +t[3] / 100,
				i = +t[4] / 100;
			return n = "hwb" === t[1] ? function(e, t, n) {
				return ln(on, e, t, n)
			}(r, o, i) : "hsv" === t[1] ? function(e, t, n) {
				return ln(rn, e, t, n)
			}(r, o, i) : cn(r, o, i), {
				r: n[0],
				g: n[1],
				b: n[2],
				a
			}
		}
		const hn = {
				x: "dark",
				Z: "light",
				Y: "re",
				X: "blu",
				W: "gr",
				V: "medium",
				U: "slate",
				A: "ee",
				T: "ol",
				S: "or",
				B: "ra",
				C: "lateg",
				D: "ights",
				R: "in",
				Q: "turquois",
				E: "hi",
				P: "ro",
				O: "al",
				N: "le",
				M: "de",
				L: "yello",
				F: "en",
				K: "ch",
				G: "arks",
				H: "ea",
				I: "ightg",
				J: "wh"
			},
			fn = {
				OiceXe: "f0f8ff",
				antiquewEte: "faebd7",
				aqua: "ffff",
				aquamarRe: "7fffd4",
				azuY: "f0ffff",
				beige: "f5f5dc",
				bisque: "ffe4c4",
				black: "0",
				blanKedOmond: "ffebcd",
				Xe: "ff",
				XeviTet: "8a2be2",
				bPwn: "a52a2a",
				burlywood: "deb887",
				caMtXe: "5f9ea0",
				KartYuse: "7fff00",
				KocTate: "d2691e",
				cSO: "ff7f50",
				cSnflowerXe: "6495ed",
				cSnsilk: "fff8dc",
				crimson: "dc143c",
				cyan: "ffff",
				xXe: "8b",
				xcyan: "8b8b",
				xgTMnPd: "b8860b",
				xWay: "a9a9a9",
				xgYF: "6400",
				xgYy: "a9a9a9",
				xkhaki: "bdb76b",
				xmagFta: "8b008b",
				xTivegYF: "556b2f",
				xSange: "ff8c00",
				xScEd: "9932cc",
				xYd: "8b0000",
				xsOmon: "e9967a",
				xsHgYF: "8fbc8f",
				xUXe: "483d8b",
				xUWay: "2f4f4f",
				xUgYy: "2f4f4f",
				xQe: "ced1",
				xviTet: "9400d3",
				dAppRk: "ff1493",
				dApskyXe: "bfff",
				dimWay: "696969",
				dimgYy: "696969",
				dodgerXe: "1e90ff",
				fiYbrick: "b22222",
				flSOwEte: "fffaf0",
				foYstWAn: "228b22",
				fuKsia: "ff00ff",
				gaRsbSo: "dcdcdc",
				ghostwEte: "f8f8ff",
				gTd: "ffd700",
				gTMnPd: "daa520",
				Way: "808080",
				gYF: "8000",
				gYFLw: "adff2f",
				gYy: "808080",
				honeyMw: "f0fff0",
				hotpRk: "ff69b4",
				RdianYd: "cd5c5c",
				Rdigo: "4b0082",
				ivSy: "fffff0",
				khaki: "f0e68c",
				lavFMr: "e6e6fa",
				lavFMrXsh: "fff0f5",
				lawngYF: "7cfc00",
				NmoncEffon: "fffacd",
				ZXe: "add8e6",
				ZcSO: "f08080",
				Zcyan: "e0ffff",
				ZgTMnPdLw: "fafad2",
				ZWay: "d3d3d3",
				ZgYF: "90ee90",
				ZgYy: "d3d3d3",
				ZpRk: "ffb6c1",
				ZsOmon: "ffa07a",
				ZsHgYF: "20b2aa",
				ZskyXe: "87cefa",
				ZUWay: "778899",
				ZUgYy: "778899",
				ZstAlXe: "b0c4de",
				ZLw: "ffffe0",
				lime: "ff00",
				limegYF: "32cd32",
				lRF: "faf0e6",
				magFta: "ff00ff",
				maPon: "800000",
				VaquamarRe: "66cdaa",
				VXe: "cd",
				VScEd: "ba55d3",
				VpurpN: "9370db",
				VsHgYF: "3cb371",
				VUXe: "7b68ee",
				VsprRggYF: "fa9a",
				VQe: "48d1cc",
				VviTetYd: "c71585",
				midnightXe: "191970",
				mRtcYam: "f5fffa",
				mistyPse: "ffe4e1",
				moccasR: "ffe4b5",
				navajowEte: "ffdead",
				navy: "80",
				Tdlace: "fdf5e6",
				Tive: "808000",
				TivedBb: "6b8e23",
				Sange: "ffa500",
				SangeYd: "ff4500",
				ScEd: "da70d6",
				pOegTMnPd: "eee8aa",
				pOegYF: "98fb98",
				pOeQe: "afeeee",
				pOeviTetYd: "db7093",
				papayawEp: "ffefd5",
				pHKpuff: "ffdab9",
				peru: "cd853f",
				pRk: "ffc0cb",
				plum: "dda0dd",
				powMrXe: "b0e0e6",
				purpN: "800080",
				YbeccapurpN: "663399",
				Yd: "ff0000",
				Psybrown: "bc8f8f",
				PyOXe: "4169e1",
				saddNbPwn: "8b4513",
				sOmon: "fa8072",
				sandybPwn: "f4a460",
				sHgYF: "2e8b57",
				sHshell: "fff5ee",
				siFna: "a0522d",
				silver: "c0c0c0",
				skyXe: "87ceeb",
				UXe: "6a5acd",
				UWay: "708090",
				UgYy: "708090",
				snow: "fffafa",
				sprRggYF: "ff7f",
				stAlXe: "4682b4",
				tan: "d2b48c",
				teO: "8080",
				tEstN: "d8bfd8",
				tomato: "ff6347",
				Qe: "40e0d0",
				viTet: "ee82ee",
				JHt: "f5deb3",
				wEte: "ffffff",
				wEtesmoke: "f5f5f5",
				Lw: "ffff00",
				LwgYF: "9acd32"
			};
		let pn;

		function mn(e) {
			pn || (pn = function() {
				const e = {},
					t = Object.keys(fn),
					n = Object.keys(hn);
				let a, r, o, i, s;
				for (a = 0; a < t.length; a++) {
					for (i = s = t[a], r = 0; r < n.length; r++) o = n[r], s = s.replace(o, hn[o]);
					o = parseInt(fn[i], 16), e[s] = [o >> 16 & 255, o >> 8 & 255, 255 & o]
				}
				return e
			}(), pn.transparent = [0, 0, 0, 0]);
			const t = pn[e.toLowerCase()];
			return t && {
				r: t[0],
				g: t[1],
				b: t[2],
				a: 4 === t.length ? t[3] : 255
			}
		}

		function gn(e, t, n) {
			if (e) {
				let a = sn(e);
				a[t] = Math.max(0, Math.min(a[t] + a[t] * n, 0 === t ? 360 : 1)), a = cn(a), e.r = a[0], e.g = a[1], e.b = a[2]
			}
		}

		function yn(e, t) {
			return e ? Object.assign(t || {}, e) : e
		}

		function bn(e) {
			var t = {
				r: 0,
				g: 0,
				b: 0,
				a: 255
			};
			return Array.isArray(e) ? e.length >= 3 && (t = {
				r: e[0],
				g: e[1],
				b: e[2],
				a: 255
			}, e.length > 3 && (t.a = Kt(e[3]))) : (t = yn(e, {
				r: 0,
				g: 0,
				b: 0,
				a: 1
			})).a = Kt(t.a), t
		}

		function vn(e) {
			return "r" === e.charAt(0) ? function(e) {
				const t = tn.exec(e);
				let n, a, r, o = 255;
				if (t) {
					if (t[7] !== n) {
						const e = +t[7];
						o = 255 & (t[8] ? Xt(e) : 255 * e)
					}
					return n = +t[1], a = +t[3], r = +t[5], n = 255 & (t[2] ? Xt(n) : n), a = 255 & (t[4] ? Xt(a) : a), r = 255 & (t[6] ? Xt(r) : r), {
						r: n,
						g: a,
						b: r,
						a: o
					}
				}
			}(e) : dn(e)
		}
		class xn {
			constructor(e) {
				if (e instanceof xn) return e;
				const t = typeof e;
				let n;
				var a, r, o;
				"object" === t ? n = bn(e) : "string" === t && (o = (a = e).length, "#" === a[0] && (4 === o || 5 === o ? r = {
					r: 255 & 17 * Ht[a[1]],
					g: 255 & 17 * Ht[a[2]],
					b: 255 & 17 * Ht[a[3]],
					a: 5 === o ? 17 * Ht[a[4]] : 255
				} : 7 !== o && 9 !== o || (r = {
					r: Ht[a[1]] << 4 | Ht[a[2]],
					g: Ht[a[3]] << 4 | Ht[a[4]],
					b: Ht[a[5]] << 4 | Ht[a[6]],
					a: 9 === o ? Ht[a[7]] << 4 | Ht[a[8]] : 255
				})), n = r || mn(e) || vn(e)), this._rgb = n, this._valid = !!n
			}
			get valid() {
				return this._valid
			}
			get rgb() {
				var e = yn(this._rgb);
				return e && (e.a = Jt(e.a)), e
			}
			set rgb(e) {
				this._rgb = bn(e)
			}
			rgbString() {
				return this._valid ? (e = this._rgb) && (e.a < 255 ? `rgba(${e.r}, ${e.g}, ${e.b}, ${Jt(e.a)})` : `rgb(${e.r}, ${e.g}, ${e.b})`) : this._rgb;
				var e
			}
			hexString() {
				return this._valid ? Zt(this._rgb) : this._rgb
			}
			hslString() {
				return this._valid ? function(e) {
					if (!e) return;
					const t = sn(e),
						n = t[0],
						a = en(t[1]),
						r = en(t[2]);
					return e.a < 255 ? `hsla(${n}, ${a}%, ${r}%, ${Jt(e.a)})` : `hsl(${n}, ${a}%, ${r}%)`
				}(this._rgb) : this._rgb
			}
			mix(e, t) {
				const n = this;
				if (e) {
					const a = n.rgb,
						r = e.rgb;
					let o;
					const i = t === o ? .5 : t,
						s = 2 * i - 1,
						l = a.a - r.a,
						c = ((s * l == -1 ? s : (s + l) / (1 + s * l)) + 1) / 2;
					o = 1 - c, a.r = 255 & c * a.r + o * r.r + .5, a.g = 255 & c * a.g + o * r.g + .5, a.b = 255 & c * a.b + o * r.b + .5, a.a = i * a.a + (1 - i) * r.a, n.rgb = a
				}
				return n
			}
			clone() {
				return new xn(this.rgb)
			}
			alpha(e) {
				return this._rgb.a = Kt(e), this
			}
			clearer(e) {
				return this._rgb.a *= 1 - e, this
			}
			greyscale() {
				const e = this._rgb,
					t = Qt(.3 * e.r + .59 * e.g + .11 * e.b);
				return e.r = e.g = e.b = t, this
			}
			opaquer(e) {
				return this._rgb.a *= 1 + e, this
			}
			negate() {
				const e = this._rgb;
				return e.r = 255 - e.r, e.g = 255 - e.g, e.b = 255 - e.b, this
			}
			lighten(e) {
				return gn(this._rgb, 2, e), this
			}
			darken(e) {
				return gn(this._rgb, 2, -e), this
			}
			saturate(e) {
				return gn(this._rgb, 1, e), this
			}
			desaturate(e) {
				return gn(this._rgb, 1, -e), this
			}
			rotate(e) {
				return function(e, t) {
					var n = sn(e);
					n[0] = un(n[0] + t), n = cn(n), e.r = n[0], e.g = n[1], e.b = n[2]
				}(this._rgb, e), this
			}
		}

		function wn(e) {
			return new xn(e)
		}
		const Tn = e => e instanceof CanvasGradient || e instanceof CanvasPattern;

		function _n(e) {
			return Tn(e) ? e : wn(e)
		}

		function kn(e) {
			return Tn(e) ? e : wn(e).saturate(.5).darken(.1).hexString()
		}
		const Pn = Object.create(null),
			En = Object.create(null);

		function Sn(e, t) {
			if (!t) return e;
			const n = t.split(".");
			for (let t = 0, a = n.length; t < a; ++t) {
				const a = n[t];
				e = e[a] || (e[a] = Object.create(null))
			}
			return e
		}

		function Cn(e, t, n) {
			return "string" == typeof t ? lt(Sn(e, t), n) : lt(Sn(e, ""), t)
		}
		var Mn = new class {
			constructor(e) {
				this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = e => e.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = ["mousemove", "mouseout", "click", "touchstart", "touchmove"], this.font = {
					family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
					size: 12,
					style: "normal",
					lineHeight: 1.2,
					weight: null
				}, this.hover = {}, this.hoverBackgroundColor = (e, t) => kn(t.backgroundColor), this.hoverBorderColor = (e, t) => kn(t.borderColor), this.hoverColor = (e, t) => kn(t.color), this.indexAxis = "x", this.interaction = {
					mode: "nearest",
					intersect: !0
				}, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.describe(e)
			}
			set(e, t) {
				return Cn(this, e, t)
			}
			get(e) {
				return Sn(this, e)
			}
			describe(e, t) {
				return Cn(En, e, t)
			}
			override(e, t) {
				return Cn(Pn, e, t)
			}
			route(e, t, n, a) {
				const r = Sn(this, e),
					o = Sn(this, n),
					i = "_" + t;
				Object.defineProperties(r, {
					[i]: {
						value: r[t],
						writable: !0
					},
					[t]: {
						enumerable: !0,
						get() {
							const e = this[i],
								t = o[a];
							return Xe(e) ? Object.assign({}, t, e) : et(e, t)
						},
						set(e) {
							this[i] = e
						}
					}
				})
			}
		}({
			_scriptable: e => !e.startsWith("on"),
			_indexable: e => "events" !== e,
			hover: {
				_fallback: "interaction"
			},
			interaction: {
				_scriptable: !1,
				_indexable: !1
			}
		});

		function Nn(e, t, n, a, r) {
			let o = t[r];
			return o || (o = t[r] = e.measureText(r).width, n.push(r)), o > a && (a = o), a
		}

		function $n(e, t, n, a) {
			let r = (a = a || {}).data = a.data || {},
				o = a.garbageCollect = a.garbageCollect || [];
			a.font !== t && (r = a.data = {}, o = a.garbageCollect = [], a.font = t), e.save(), e.font = t;
			let i = 0;
			const s = n.length;
			let l, c, u, d, h;
			for (l = 0; l < s; l++)
				if (d = n[l], null != d && !0 !== Ge(d)) i = Nn(e, r, o, i, d);
				else if (Ge(d))
				for (c = 0, u = d.length; c < u; c++) h = d[c], null == h || Ge(h) || (i = Nn(e, r, o, i, h));
			e.restore();
			const f = o.length / 2;
			if (f > n.length) {
				for (l = 0; l < f; l++) delete r[o[l]];
				o.splice(0, f)
			}
			return i
		}

		function An(e, t, n) {
			const a = e.currentDevicePixelRatio,
				r = 0 !== n ? Math.max(n / 2, .5) : 0;
			return Math.round((t - r) * a) / a + r
		}

		function In(e, t) {
			(t = t || e.getContext("2d")).save(), t.resetTransform(), t.clearRect(0, 0, e.width, e.height), t.restore()
		}

		function On(e, t, n, a) {
			let r, o, i, s, l;
			const c = t.pointStyle,
				u = t.rotation,
				d = t.radius;
			let h = (u || 0) * wt;
			if (c && "object" == typeof c && (r = c.toString(), "[object HTMLImageElement]" === r || "[object HTMLCanvasElement]" === r)) return e.save(), e.translate(n, a), e.rotate(h), e.drawImage(c, -c.width / 2, -c.height / 2, c.width, c.height), void e.restore();
			if (!(isNaN(d) || d <= 0)) {
				switch (e.beginPath(), c) {
					default:
						e.arc(n, a, d, 0, bt), e.closePath();
						break;
					case "triangle":
						e.moveTo(n + Math.sin(h) * d, a - Math.cos(h) * d), h += kt, e.lineTo(n + Math.sin(h) * d, a - Math.cos(h) * d), h += kt, e.lineTo(n + Math.sin(h) * d, a - Math.cos(h) * d), e.closePath();
						break;
					case "rectRounded":
						l = .516 * d, s = d - l, o = Math.cos(h + _t) * s, i = Math.sin(h + _t) * s, e.arc(n - o, a - i, l, h - yt, h - Tt), e.arc(n + i, a - o, l, h - Tt, h), e.arc(n + o, a + i, l, h, h + Tt), e.arc(n - i, a + o, l, h + Tt, h + yt), e.closePath();
						break;
					case "rect":
						if (!u) {
							s = Math.SQRT1_2 * d, e.rect(n - s, a - s, 2 * s, 2 * s);
							break
						}
						h += _t;
					case "rectRot":
						o = Math.cos(h) * d, i = Math.sin(h) * d, e.moveTo(n - o, a - i), e.lineTo(n + i, a - o), e.lineTo(n + o, a + i), e.lineTo(n - i, a + o), e.closePath();
						break;
					case "crossRot":
						h += _t;
					case "cross":
						o = Math.cos(h) * d, i = Math.sin(h) * d, e.moveTo(n - o, a - i), e.lineTo(n + o, a + i), e.moveTo(n + i, a - o), e.lineTo(n - i, a + o);
						break;
					case "star":
						o = Math.cos(h) * d, i = Math.sin(h) * d, e.moveTo(n - o, a - i), e.lineTo(n + o, a + i), e.moveTo(n + i, a - o), e.lineTo(n - i, a + o), h += _t, o = Math.cos(h) * d, i = Math.sin(h) * d, e.moveTo(n - o, a - i), e.lineTo(n + o, a + i), e.moveTo(n + i, a - o), e.lineTo(n - i, a + o);
						break;
					case "line":
						o = Math.cos(h) * d, i = Math.sin(h) * d, e.moveTo(n - o, a - i), e.lineTo(n + o, a + i);
						break;
					case "dash":
						e.moveTo(n, a), e.lineTo(n + Math.cos(h) * d, a + Math.sin(h) * d)
				}
				e.fill(), t.borderWidth > 0 && e.stroke()
			}
		}

		function Rn(e, t, n) {
			return n = n || .5, e && t && e.x > t.left - n && e.x < t.right + n && e.y > t.top - n && e.y < t.bottom + n
		}

		function Dn(e, t) {
			e.save(), e.beginPath(), e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), e.clip()
		}

		function Fn(e) {
			e.restore()
		}

		function Ln(e, t, n, a, r) {
			if (!t) return e.lineTo(n.x, n.y);
			if ("middle" === r) {
				const a = (t.x + n.x) / 2;
				e.lineTo(a, t.y), e.lineTo(a, n.y)
			} else "after" === r != !!a ? e.lineTo(t.x, n.y) : e.lineTo(n.x, t.y);
			e.lineTo(n.x, n.y)
		}

		function zn(e, t, n, a) {
			if (!t) return e.lineTo(n.x, n.y);
			e.bezierCurveTo(a ? t.cp1x : t.cp2x, a ? t.cp1y : t.cp2y, a ? n.cp2x : n.cp1x, a ? n.cp2y : n.cp1y, n.x, n.y)
		}

		function Vn(e, t, n, a, r, o = {}) {
			const i = Ge(t) ? t : [t],
				s = o.strokeWidth > 0 && "" !== o.strokeColor;
			let l, c;
			for (e.save(), e.font = r.string, function(e, t) {
					t.translation && e.translate(t.translation[0], t.translation[1]);
					Qe(t.rotation) || e.rotate(t.rotation);
					t.color && (e.fillStyle = t.color);
					t.textAlign && (e.textAlign = t.textAlign);
					t.textBaseline && (e.textBaseline = t.textBaseline)
				}(e, o), l = 0; l < i.length; ++l) c = i[l], s && (o.strokeColor && (e.strokeStyle = o.strokeColor), Qe(o.strokeWidth) || (e.lineWidth = o.strokeWidth), e.strokeText(c, n, a, o.maxWidth)), e.fillText(c, n, a, o.maxWidth), Bn(e, n, a, c, o), a += r.lineHeight;
			e.restore()
		}

		function Bn(e, t, n, a, r) {
			if (r.strikethrough || r.underline) {
				const o = e.measureText(a),
					i = t - o.actualBoundingBoxLeft,
					s = t + o.actualBoundingBoxRight,
					l = n - o.actualBoundingBoxAscent,
					c = n + o.actualBoundingBoxDescent,
					u = r.strikethrough ? (l + c) / 2 : c;
				e.strokeStyle = e.fillStyle, e.beginPath(), e.lineWidth = r.decorationWidth || 2, e.moveTo(i, u), e.lineTo(s, u), e.stroke()
			}
		}

		function jn(e, t) {
			const {
				x: n,
				y: a,
				w: r,
				h: o,
				radius: i
			} = t;
			e.arc(n + i.topLeft, a + i.topLeft, i.topLeft, -Tt, yt, !0), e.lineTo(n, a + o - i.bottomLeft), e.arc(n + i.bottomLeft, a + o - i.bottomLeft, i.bottomLeft, yt, Tt, !0), e.lineTo(n + r - i.bottomRight, a + o), e.arc(n + r - i.bottomRight, a + o - i.bottomRight, i.bottomRight, Tt, 0, !0), e.lineTo(n + r, a + i.topRight), e.arc(n + r - i.topRight, a + i.topRight, i.topRight, 0, -Tt, !0), e.lineTo(n + i.topLeft, a)
		}
		const Hn = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),
			qn = new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);

		function Wn(e, t) {
			const n = ("" + e).match(Hn);
			if (!n || "normal" === n[1]) return 1.2 * t;
			switch (e = +n[2], n[3]) {
				case "px":
					return e;
				case "%":
					e /= 100
			}
			return t * e
		}
		const Yn = e => +e || 0;

		function Un(e, t) {
			const n = {},
				a = Xe(t),
				r = a ? Object.keys(t) : t,
				o = Xe(e) ? a ? n => et(e[n], e[t[n]]) : t => e[t] : () => e;
			for (const e of r) n[e] = Yn(o(e));
			return n
		}

		function Zn(e) {
			return Un(e, {
				top: "y",
				right: "x",
				bottom: "y",
				left: "x"
			})
		}

		function Qn(e) {
			return Un(e, ["topLeft", "topRight", "bottomLeft", "bottomRight"])
		}

		function Gn(e) {
			const t = Zn(e);
			return t.width = t.left + t.right, t.height = t.top + t.bottom, t
		}

		function Xn(e, t) {
			e = e || {}, t = t || Mn.font;
			let n = et(e.size, t.size);
			"string" == typeof n && (n = parseInt(n, 10));
			let a = et(e.style, t.style);
			a && !("" + a).match(qn) && (console.warn('Invalid font style specified: "' + a + '"'), a = "");
			const r = {
				family: et(e.family, t.family),
				lineHeight: Wn(et(e.lineHeight, t.lineHeight), n),
				size: n,
				style: a,
				weight: et(e.weight, t.weight),
				string: ""
			};
			return r.string = function(e) {
				return !e || Qe(e.size) || Qe(e.family) ? null : (e.style ? e.style + " " : "") + (e.weight ? e.weight + " " : "") + e.size + "px " + e.family
			}(r), r
		}

		function Kn(e, t, n, a) {
			let r, o, i, s = !0;
			for (r = 0, o = e.length; r < o; ++r)
				if (i = e[r], void 0 !== i && (void 0 !== t && "function" == typeof i && (i = i(t), s = !1), void 0 !== n && Ge(i) && (i = i[n % i.length], s = !1), void 0 !== i)) return a && !s && (a.cacheable = !1), i
		}

		function Jn(e, t, n) {
			n = n || (n => e[n] < t);
			let a, r = e.length - 1,
				o = 0;
			for (; r - o > 1;) a = o + r >> 1, n(a) ? o = a : r = a;
			return {
				lo: o,
				hi: r
			}
		}
		const ea = (e, t, n) => Jn(e, n, (a => e[a][t] < n)),
			ta = (e, t, n) => Jn(e, n, (a => e[a][t] >= n));
		const na = ["push", "pop", "shift", "splice", "unshift"];

		function aa(e, t) {
			const n = e._chartjs;
			if (!n) return;
			const a = n.listeners,
				r = a.indexOf(t); - 1 !== r && a.splice(r, 1), a.length > 0 || (na.forEach((t => {
				delete e[t]
			})), delete e._chartjs)
		}

		function ra(e) {
			const t = new Set;
			let n, a;
			for (n = 0, a = e.length; n < a; ++n) t.add(e[n]);
			return t.size === a ? e : Array.from(t)
		}

		function oa(e, t = [""], n = e, a, r = (() => e[0])) {
			mt(a) || (a = ga("_fallback", e));
			const o = {
				[Symbol.toStringTag]: "Object",
				_cacheable: !0,
				_scopes: e,
				_rootScopes: n,
				_fallback: a,
				_getTarget: r,
				override: r => oa([r, ...e], t, n, a)
			};
			return new Proxy(o, {
				deleteProperty: (t, n) => (delete t[n], delete t._keys, delete e[0][n], !0),
				get: (n, a) => ua(n, a, (() => function(e, t, n, a) {
					let r;
					for (const o of t)
						if (r = ga(la(o, e), n), mt(r)) return ca(e, r) ? pa(n, a, e, r) : r
				}(a, t, e, n))),
				getOwnPropertyDescriptor: (e, t) => Reflect.getOwnPropertyDescriptor(e._scopes[0], t),
				getPrototypeOf: () => Reflect.getPrototypeOf(e[0]),
				has: (e, t) => ya(e).includes(t),
				ownKeys: e => ya(e),
				set: (e, t, n) => ((e._storage || (e._storage = r()))[t] = n, delete e[t], delete e._keys, !0)
			})
		}

		function ia(e, t, n, a) {
			const r = {
				_cacheable: !1,
				_proxy: e,
				_context: t,
				_subProxy: n,
				_stack: new Set,
				_descriptors: sa(e, a),
				setContext: t => ia(e, t, n, a),
				override: r => ia(e.override(r), t, n, a)
			};
			return new Proxy(r, {
				deleteProperty: (t, n) => (delete t[n], delete e[n], !0),
				get: (e, t, n) => ua(e, t, (() => function(e, t, n) {
					const {
						_proxy: a,
						_context: r,
						_subProxy: o,
						_descriptors: i
					} = e;
					let s = a[t];
					gt(s) && i.isScriptable(t) && (s = function(e, t, n, a) {
						const {
							_proxy: r,
							_context: o,
							_subProxy: i,
							_stack: s
						} = n;
						if (s.has(e)) throw new Error("Recursion detected: " + Array.from(s).join("->") + "->" + e);
						s.add(e), t = t(o, i || a), s.delete(e), Xe(t) && (t = pa(r._scopes, r, e, t));
						return t
					}(t, s, e, n));
					Ge(s) && s.length && (s = function(e, t, n, a) {
						const {
							_proxy: r,
							_context: o,
							_subProxy: i,
							_descriptors: s
						} = n;
						if (mt(o.index) && a(e)) t = t[o.index % t.length];
						else if (Xe(t[0])) {
							const n = t,
								a = r._scopes.filter((e => e !== n));
							t = [];
							for (const l of n) {
								const n = pa(a, r, e, l);
								t.push(ia(n, o, i && i[e], s))
							}
						}
						return t
					}(t, s, e, i.isIndexable));
					ca(t, s) && (s = ia(s, r, o && o[t], i));
					return s
				}(e, t, n))),
				getOwnPropertyDescriptor: (t, n) => t._descriptors.allKeys ? Reflect.has(e, n) ? {
					enumerable: !0,
					configurable: !0
				} : void 0 : Reflect.getOwnPropertyDescriptor(e, n),
				getPrototypeOf: () => Reflect.getPrototypeOf(e),
				has: (t, n) => Reflect.has(e, n),
				ownKeys: () => Reflect.ownKeys(e),
				set: (t, n, a) => (e[n] = a, delete t[n], !0)
			})
		}

		function sa(e, t = {
			scriptable: !0,
			indexable: !0
		}) {
			const {
				_scriptable: n = t.scriptable,
				_indexable: a = t.indexable,
				_allKeys: r = t.allKeys
			} = e;
			return {
				allKeys: r,
				scriptable: n,
				indexable: a,
				isScriptable: gt(n) ? n : () => n,
				isIndexable: gt(a) ? a : () => a
			}
		}
		const la = (e, t) => e ? e + pt(t) : t,
			ca = (e, t) => Xe(t) && "adapters" !== e;

		function ua(e, t, n) {
			let a = e[t];
			return mt(a) || (a = n(), mt(a) && (e[t] = a)), a
		}

		function da(e, t, n) {
			return gt(e) ? e(t, n) : e
		}
		const ha = (e, t) => !0 === e ? t : "string" == typeof e ? ft(t, e) : void 0;

		function fa(e, t, n, a) {
			for (const r of t) {
				const t = ha(n, r);
				if (t) {
					e.add(t);
					const r = da(t._fallback, n, t);
					if (mt(r) && r !== n && r !== a) return r
				} else if (!1 === t && mt(a) && n !== a) return null
			}
			return !1
		}

		function pa(e, t, n, a) {
			const r = t._rootScopes,
				o = da(t._fallback, n, a),
				i = [...e, ...r],
				s = new Set;
			s.add(a);
			let l = ma(s, i, n, o || n);
			return null !== l && ((!mt(o) || o === n || (l = ma(s, i, o, l), null !== l)) && oa(Array.from(s), [""], r, o, (() => function(e, t, n) {
				const a = e._getTarget();
				t in a || (a[t] = {});
				const r = a[t];
				if (Ge(r) && Xe(n)) return n;
				return r
			}(t, n, a))))
		}

		function ma(e, t, n, a) {
			for (; n;) n = fa(e, t, n, a);
			return n
		}

		function ga(e, t) {
			for (const n of t) {
				if (!n) continue;
				const t = n[e];
				if (mt(t)) return t
			}
		}

		function ya(e) {
			let t = e._keys;
			return t || (t = e._keys = function(e) {
				const t = new Set;
				for (const n of e)
					for (const e of Object.keys(n).filter((e => !e.startsWith("_")))) t.add(e);
				return Array.from(t)
			}(e._scopes)), t
		}
		const ba = Number.EPSILON || 1e-14,
			va = (e, t) => t < e.length && !e[t].skip && e[t],
			xa = e => "x" === e ? "y" : "x";

		function wa(e, t, n, a) {
			const r = e.skip ? t : e,
				o = t,
				i = n.skip ? t : n,
				s = Ot(o, r),
				l = Ot(i, o);
			let c = s / (s + l),
				u = l / (s + l);
			c = isNaN(c) ? 0 : c, u = isNaN(u) ? 0 : u;
			const d = a * c,
				h = a * u;
			return {
				previous: {
					x: o.x - d * (i.x - r.x),
					y: o.y - d * (i.y - r.y)
				},
				next: {
					x: o.x + h * (i.x - r.x),
					y: o.y + h * (i.y - r.y)
				}
			}
		}

		function Ta(e, t = "x") {
			const n = xa(t),
				a = e.length,
				r = Array(a).fill(0),
				o = Array(a);
			let i, s, l, c = va(e, 0);
			for (i = 0; i < a; ++i)
				if (s = l, l = c, c = va(e, i + 1), l) {
					if (c) {
						const e = c[t] - l[t];
						r[i] = 0 !== e ? (c[n] - l[n]) / e : 0
					}
					o[i] = s ? c ? Et(r[i - 1]) !== Et(r[i]) ? 0 : (r[i - 1] + r[i]) / 2 : r[i - 1] : r[i]
				}!
			function(e, t, n) {
				const a = e.length;
				let r, o, i, s, l, c = va(e, 0);
				for (let u = 0; u < a - 1; ++u) l = c, c = va(e, u + 1), l && c && (Mt(t[u], 0, ba) ? n[u] = n[u + 1] = 0 : (r = n[u] / t[u], o = n[u + 1] / t[u], s = Math.pow(r, 2) + Math.pow(o, 2), s <= 9 || (i = 3 / Math.sqrt(s), n[u] = r * i * t[u], n[u + 1] = o * i * t[u])))
			}(e, r, o),
			function(e, t, n = "x") {
				const a = xa(n),
					r = e.length;
				let o, i, s, l = va(e, 0);
				for (let c = 0; c < r; ++c) {
					if (i = s, s = l, l = va(e, c + 1), !s) continue;
					const r = s[n],
						u = s[a];
					i && (o = (r - i[n]) / 3, s[`cp1${n}`] = r - o, s[`cp1${a}`] = u - o * t[c]), l && (o = (l[n] - r) / 3, s[`cp2${n}`] = r + o, s[`cp2${a}`] = u + o * t[c])
				}
			}(e, o, t)
		}

		function _a(e, t, n) {
			return Math.max(Math.min(e, n), t)
		}

		function ka(e, t, n, a, r) {
			let o, i, s, l;
			if (t.spanGaps && (e = e.filter((e => !e.skip))), "monotone" === t.cubicInterpolationMode) Ta(e, r);
			else {
				let n = a ? e[e.length - 1] : e[0];
				for (o = 0, i = e.length; o < i; ++o) s = e[o], l = wa(n, s, e[Math.min(o + 1, i - (a ? 0 : 1)) % i], t.tension), s.cp1x = l.previous.x, s.cp1y = l.previous.y, s.cp2x = l.next.x, s.cp2y = l.next.y, n = s
			}
			t.capBezierPoints && function(e, t) {
				let n, a, r, o, i, s = Rn(e[0], t);
				for (n = 0, a = e.length; n < a; ++n) i = o, o = s, s = n < a - 1 && Rn(e[n + 1], t), o && (r = e[n], i && (r.cp1x = _a(r.cp1x, t.left, t.right), r.cp1y = _a(r.cp1y, t.top, t.bottom)), s && (r.cp2x = _a(r.cp2x, t.left, t.right), r.cp2y = _a(r.cp2y, t.top, t.bottom)))
			}(e, n)
		}

		function Pa() {
			return "undefined" != typeof window && "undefined" != typeof document
		}

		function Ea(e) {
			let t = e.parentNode;
			return t && "[object ShadowRoot]" === t.toString() && (t = t.host), t
		}

		function Sa(e, t, n) {
			let a;
			return "string" == typeof e ? (a = parseInt(e, 10), -1 !== e.indexOf("%") && (a = a / 100 * t.parentNode[n])) : a = e, a
		}
		const Ca = e => window.getComputedStyle(e, null);
		const Ma = ["top", "right", "bottom", "left"];

		function Na(e, t, n) {
			const a = {};
			n = n ? "-" + n : "";
			for (let r = 0; r < 4; r++) {
				const o = Ma[r];
				a[o] = parseFloat(e[t + "-" + o + n]) || 0
			}
			return a.width = a.left + a.right, a.height = a.top + a.bottom, a
		}
		const $a = (e, t, n) => (e > 0 || t > 0) && (!n || !n.shadowRoot);

		function Aa(e, t) {
			const {
				canvas: n,
				currentDevicePixelRatio: a
			} = t, r = Ca(n), o = "border-box" === r.boxSizing, i = Na(r, "padding"), s = Na(r, "border", "width"), {
				x: l,
				y: c,
				box: u
			} = function(e, t) {
				const n = e.native || e,
					a = n.touches,
					r = a && a.length ? a[0] : n,
					{
						offsetX: o,
						offsetY: i
					} = r;
				let s, l, c = !1;
				if ($a(o, i, n.target)) s = o, l = i;
				else {
					const e = t.getBoundingClientRect();
					s = r.clientX - e.left, l = r.clientY - e.top, c = !0
				}
				return {
					x: s,
					y: l,
					box: c
				}
			}(e, n), d = i.left + (u && s.left), h = i.top + (u && s.top);
			let {
				width: f,
				height: p
			} = t;
			return o && (f -= i.width + s.width, p -= i.height + s.height), {
				x: Math.round((l - d) / f * n.width / a),
				y: Math.round((c - h) / p * n.height / a)
			}
		}
		const Ia = e => Math.round(10 * e) / 10;

		function Oa(e, t, n, a) {
			const r = Ca(e),
				o = Na(r, "margin"),
				i = Sa(r.maxWidth, e, "clientWidth") || xt,
				s = Sa(r.maxHeight, e, "clientHeight") || xt,
				l = function(e, t, n) {
					let a, r;
					if (void 0 === t || void 0 === n) {
						const o = Ea(e);
						if (o) {
							const e = o.getBoundingClientRect(),
								i = Ca(o),
								s = Na(i, "border", "width"),
								l = Na(i, "padding");
							t = e.width - l.width - s.width, n = e.height - l.height - s.height, a = Sa(i.maxWidth, o, "clientWidth"), r = Sa(i.maxHeight, o, "clientHeight")
						} else t = e.clientWidth, n = e.clientHeight
					}
					return {
						width: t,
						height: n,
						maxWidth: a || xt,
						maxHeight: r || xt
					}
				}(e, t, n);
			let {
				width: c,
				height: u
			} = l;
			if ("content-box" === r.boxSizing) {
				const e = Na(r, "border", "width"),
					t = Na(r, "padding");
				c -= t.width + e.width, u -= t.height + e.height
			}
			return c = Math.max(0, c - o.width), u = Math.max(0, a ? Math.floor(c / a) : u - o.height), c = Ia(Math.min(c, i, l.maxWidth)), u = Ia(Math.min(u, s, l.maxHeight)), c && !u && (u = Ia(c / 2)), {
				width: c,
				height: u
			}
		}

		function Ra(e, t, n) {
			const a = t || 1,
				r = Math.floor(e.height * a),
				o = Math.floor(e.width * a);
			e.height = r / a, e.width = o / a;
			const i = e.canvas;
			return i.style && (n || !i.style.height && !i.style.width) && (i.style.height = `${e.height}px`, i.style.width = `${e.width}px`), (e.currentDevicePixelRatio !== a || i.height !== r || i.width !== o) && (e.currentDevicePixelRatio = a, i.height = r, i.width = o, e.ctx.setTransform(a, 0, 0, a, 0, 0), !0)
		}
		const Da = function() {
			let e = !1;
			try {
				const t = {
					get passive() {
						return e = !0, !1
					}
				};
				window.addEventListener("test", null, t), window.removeEventListener("test", null, t)
			} catch (e) {}
			return e
		}();

		function Fa(e, t) {
			const n = function(e, t) {
					return Ca(e).getPropertyValue(t)
				}(e, t),
				a = n && n.match(/^(\d+)(\.\d+)?px$/);
			return a ? +a[1] : void 0
		}

		function La(e, t, n, a) {
			return {
				x: e.x + n * (t.x - e.x),
				y: e.y + n * (t.y - e.y)
			}
		}

		function za(e, t, n, a) {
			return {
				x: e.x + n * (t.x - e.x),
				y: "middle" === a ? n < .5 ? e.y : t.y : "after" === a ? n < 1 ? e.y : t.y : n > 0 ? t.y : e.y
			}
		}

		function Va(e, t, n, a) {
			const r = {
					x: e.cp2x,
					y: e.cp2y
				},
				o = {
					x: t.cp1x,
					y: t.cp1y
				},
				i = La(e, r, n),
				s = La(r, o, n),
				l = La(o, t, n),
				c = La(i, s, n),
				u = La(s, l, n);
			return La(c, u, n)
		}
		const Ba = new Map;

		function ja(e, t, n) {
			return function(e, t) {
				t = t || {};
				const n = e + JSON.stringify(t);
				let a = Ba.get(n);
				return a || (a = new Intl.NumberFormat(e, t), Ba.set(n, a)), a
			}(t, n).format(e)
		}

		function Ha(e, t, n) {
			return e ? function(e, t) {
				return {
					x: n => e + e + t - n,
					setWidth(e) {
						t = e
					},
					textAlign: e => "center" === e ? e : "right" === e ? "left" : "right",
					xPlus: (e, t) => e - t,
					leftForLtr: (e, t) => e - t
				}
			}(t, n) : {
				x: e => e,
				setWidth(e) {},
				textAlign: e => e,
				xPlus: (e, t) => e + t,
				leftForLtr: (e, t) => e
			}
		}

		function qa(e, t) {
			let n, a;
			"ltr" !== t && "rtl" !== t || (n = e.canvas.style, a = [n.getPropertyValue("direction"), n.getPropertyPriority("direction")], n.setProperty("direction", t, "important"), e.prevTextDirection = a)
		}

		function Wa(e, t) {
			void 0 !== t && (delete e.prevTextDirection, e.canvas.style.setProperty("direction", t[0], t[1]))
		}

		function Ya(e) {
			return "angle" === e ? {
				between: Ft,
				compare: Rt,
				normalize: Dt
			} : {
				between: (e, t, n) => e >= Math.min(t, n) && e <= Math.max(n, t),
				compare: (e, t) => e - t,
				normalize: e => e
			}
		}

		function Ua({
			start: e,
			end: t,
			count: n,
			loop: a,
			style: r
		}) {
			return {
				start: e % n,
				end: t % n,
				loop: a && (t - e + 1) % n == 0,
				style: r
			}
		}

		function Za(e, t, n) {
			if (!n) return [e];
			const {
				property: a,
				start: r,
				end: o
			} = n, i = t.length, {
				compare: s,
				between: l,
				normalize: c
			} = Ya(a), {
				start: u,
				end: d,
				loop: h,
				style: f
			} = function(e, t, n) {
				const {
					property: a,
					start: r,
					end: o
				} = n, {
					between: i,
					normalize: s
				} = Ya(a), l = t.length;
				let c, u, {
					start: d,
					end: h,
					loop: f
				} = e;
				if (f) {
					for (d += l, h += l, c = 0, u = l; c < u && i(s(t[d % l][a]), r, o); ++c) d--, h--;
					d %= l, h %= l
				}
				return h < d && (h += l), {
					start: d,
					end: h,
					loop: f,
					style: e.style
				}
			}(e, t, n), p = [];
			let m, g, y, b = !1,
				v = null;
			const x = () => b || l(r, y, m) && 0 !== s(r, y),
				w = () => !b || 0 === s(o, m) || l(o, y, m);
			for (let e = u, n = u; e <= d; ++e) g = t[e % i], g.skip || (m = c(g[a]), m !== y && (b = l(m, r, o), null === v && x() && (v = 0 === s(m, r) ? e : n), null !== v && w() && (p.push(Ua({
				start: v,
				end: e,
				loop: h,
				count: i,
				style: f
			})), v = null), n = e, y = m));
			return null !== v && p.push(Ua({
				start: v,
				end: d,
				loop: h,
				count: i,
				style: f
			})), p
		}

		function Qa(e, t) {
			const n = [],
				a = e.segments;
			for (let r = 0; r < a.length; r++) {
				const o = Za(a[r], e.points, t);
				o.length && n.push(...o)
			}
			return n
		}

		function Ga(e, t, n, a) {
			return a && a.setContext && n ? function(e, t, n, a) {
				const r = Xa(e.options),
					o = n.length,
					i = [];
				let s = t[0].start,
					l = s;
				for (const c of t) {
					let t, u = r,
						d = n[s % o];
					for (l = s + 1; l <= c.end; l++) {
						const r = n[l % o];
						t = Xa(a.setContext({
							type: "segment",
							p0: d,
							p1: r,
							p0DataIndex: (l - 1) % o,
							p1DataIndex: l % o,
							datasetIndex: e._datasetIndex
						})), Ka(t, u) && (i.push({
							start: s,
							end: l - 1,
							loop: c.loop,
							style: u
						}), u = t, s = l - 1), d = r, u = t
					}
					s < l - 1 && (i.push({
						start: s,
						end: l - 1,
						loop: c.loop,
						style: t
					}), s = l - 1)
				}
				return i
			}(e, t, n, a) : t
		}

		function Xa(e) {
			return {
				backgroundColor: e.backgroundColor,
				borderCapStyle: e.borderCapStyle,
				borderDash: e.borderDash,
				borderDashOffset: e.borderDashOffset,
				borderJoinStyle: e.borderJoinStyle,
				borderWidth: e.borderWidth,
				borderColor: e.borderColor
			}
		}

		function Ka(e, t) {
			return t && JSON.stringify(e) !== JSON.stringify(t)
		}
		var Ja = new
		/*!
		 * Chart.js v3.5.0
		 * https://www.chartjs.org
		 * (c) 2021 Chart.js Contributors
		 * Released under the MIT License
		 */
		class {
			constructor() {
				this._request = null, this._charts = new Map, this._running = !1, this._lastDate = void 0
			}
			_notify(e, t, n, a) {
				const r = t.listeners[a],
					o = t.duration;
				r.forEach((a => a({
					chart: e,
					initial: t.initial,
					numSteps: o,
					currentStep: Math.min(n - t.start, o)
				})))
			}
			_refresh() {
				const e = this;
				e._request || (e._running = !0, e._request = He.call(window, (() => {
					e._update(), e._request = null, e._running && e._refresh()
				})))
			}
			_update(e = Date.now()) {
				const t = this;
				let n = 0;
				t._charts.forEach(((a, r) => {
					if (!a.running || !a.items.length) return;
					const o = a.items;
					let i, s = o.length - 1,
						l = !1;
					for (; s >= 0; --s) i = o[s], i._active ? (i._total > a.duration && (a.duration = i._total), i.tick(e), l = !0) : (o[s] = o[o.length - 1], o.pop());
					l && (r.draw(), t._notify(r, a, e, "progress")), o.length || (a.running = !1, t._notify(r, a, e, "complete"), a.initial = !1), n += o.length
				})), t._lastDate = e, 0 === n && (t._running = !1)
			}
			_getAnims(e) {
				const t = this._charts;
				let n = t.get(e);
				return n || (n = {
					running: !1,
					initial: !0,
					items: [],
					listeners: {
						complete: [],
						progress: []
					}
				}, t.set(e, n)), n
			}
			listen(e, t, n) {
				this._getAnims(e).listeners[t].push(n)
			}
			add(e, t) {
				t && t.length && this._getAnims(e).items.push(...t)
			}
			has(e) {
				return this._getAnims(e).items.length > 0
			}
			start(e) {
				const t = this._charts.get(e);
				t && (t.running = !0, t.start = Date.now(), t.duration = t.items.reduce(((e, t) => Math.max(e, t._duration)), 0), this._refresh())
			}
			running(e) {
				if (!this._running) return !1;
				const t = this._charts.get(e);
				return !!(t && t.running && t.items.length)
			}
			stop(e) {
				const t = this._charts.get(e);
				if (!t || !t.items.length) return;
				const n = t.items;
				let a = n.length - 1;
				for (; a >= 0; --a) n[a].cancel();
				t.items = [], this._notify(e, t, Date.now(), "complete")
			}
			remove(e) {
				return this._charts.delete(e)
			}
		};
		const er = "transparent",
			tr = {
				boolean: (e, t, n) => n > .5 ? t : e,
				color(e, t, n) {
					const a = _n(e || er),
						r = a.valid && _n(t || er);
					return r && r.valid ? r.mix(a, n).hexString() : t
				},
				number: (e, t, n) => e + (t - e) * n
			};
		class nr {
			constructor(e, t, n, a) {
				const r = t[n];
				a = Kn([e.to, a, r, e.from]);
				const o = Kn([e.from, r, a]);
				this._active = !0, this._fn = e.fn || tr[e.type || typeof o], this._easing = jt[e.easing] || jt.linear, this._start = Math.floor(Date.now() + (e.delay || 0)), this._duration = this._total = Math.floor(e.duration), this._loop = !!e.loop, this._target = t, this._prop = n, this._from = o, this._to = a, this._promises = void 0
			}
			active() {
				return this._active
			}
			update(e, t, n) {
				const a = this;
				if (a._active) {
					a._notify(!1);
					const r = a._target[a._prop],
						o = n - a._start,
						i = a._duration - o;
					a._start = n, a._duration = Math.floor(Math.max(i, e.duration)), a._total += o, a._loop = !!e.loop, a._to = Kn([e.to, t, r, e.from]), a._from = Kn([e.from, r, t])
				}
			}
			cancel() {
				const e = this;
				e._active && (e.tick(Date.now()), e._active = !1, e._notify(!1))
			}
			tick(e) {
				const t = this,
					n = e - t._start,
					a = t._duration,
					r = t._prop,
					o = t._from,
					i = t._loop,
					s = t._to;
				let l;
				if (t._active = o !== s && (i || n < a), !t._active) return t._target[r] = s, void t._notify(!0);
				n < 0 ? t._target[r] = o : (l = n / a % 2, l = i && l > 1 ? 2 - l : l, l = t._easing(Math.min(1, Math.max(0, l))), t._target[r] = t._fn(o, s, l))
			}
			wait() {
				const e = this._promises || (this._promises = []);
				return new Promise(((t, n) => {
					e.push({
						res: t,
						rej: n
					})
				}))
			}
			_notify(e) {
				const t = e ? "res" : "rej",
					n = this._promises || [];
				for (let e = 0; e < n.length; e++) n[e][t]()
			}
		}
		Mn.set("animation", {
			delay: void 0,
			duration: 1e3,
			easing: "easeOutQuart",
			fn: void 0,
			from: void 0,
			loop: void 0,
			to: void 0,
			type: void 0
		});
		const ar = Object.keys(Mn.animation);
		Mn.describe("animation", {
			_fallback: !1,
			_indexable: !1,
			_scriptable: e => "onProgress" !== e && "onComplete" !== e && "fn" !== e
		}), Mn.set("animations", {
			colors: {
				type: "color",
				properties: ["color", "borderColor", "backgroundColor"]
			},
			numbers: {
				type: "number",
				properties: ["x", "y", "borderWidth", "radius", "tension"]
			}
		}), Mn.describe("animations", {
			_fallback: "animation"
		}), Mn.set("transitions", {
			active: {
				animation: {
					duration: 400
				}
			},
			resize: {
				animation: {
					duration: 0
				}
			},
			show: {
				animations: {
					colors: {
						from: "transparent"
					},
					visible: {
						type: "boolean",
						duration: 0
					}
				}
			},
			hide: {
				animations: {
					colors: {
						to: "transparent"
					},
					visible: {
						type: "boolean",
						easing: "linear",
						fn: e => 0 | e
					}
				}
			}
		});
		class rr {
			constructor(e, t) {
				this._chart = e, this._properties = new Map, this.configure(t)
			}
			configure(e) {
				if (!Xe(e)) return;
				const t = this._properties;
				Object.getOwnPropertyNames(e).forEach((n => {
					const a = e[n];
					if (!Xe(a)) return;
					const r = {};
					for (const e of ar) r[e] = a[e];
					(Ge(a.properties) && a.properties || [n]).forEach((e => {
						e !== n && t.has(e) || t.set(e, r)
					}))
				}))
			}
			_animateOptions(e, t) {
				const n = t.options,
					a = function(e, t) {
						if (!t) return;
						let n = e.options;
						if (!n) return void(e.options = t);
						n.$shared && (e.options = n = Object.assign({}, n, {
							$shared: !1,
							$animations: {}
						}));
						return n
					}(e, n);
				if (!a) return [];
				const r = this._createAnimations(a, n);
				return n.$shared && function(e, t) {
					const n = [],
						a = Object.keys(t);
					for (let t = 0; t < a.length; t++) {
						const r = e[a[t]];
						r && r.active() && n.push(r.wait())
					}
					return Promise.all(n)
				}(e.options.$animations, n).then((() => {
					e.options = n
				}), (() => {})), r
			}
			_createAnimations(e, t) {
				const n = this._properties,
					a = [],
					r = e.$animations || (e.$animations = {}),
					o = Object.keys(t),
					i = Date.now();
				let s;
				for (s = o.length - 1; s >= 0; --s) {
					const l = o[s];
					if ("$" === l.charAt(0)) continue;
					if ("options" === l) {
						a.push(...this._animateOptions(e, t));
						continue
					}
					const c = t[l];
					let u = r[l];
					const d = n.get(l);
					if (u) {
						if (d && u.active()) {
							u.update(d, c, i);
							continue
						}
						u.cancel()
					}
					d && d.duration ? (r[l] = u = new nr(d, e, l, c), a.push(u)) : e[l] = c
				}
				return a
			}
			update(e, t) {
				if (0 === this._properties.size) return void Object.assign(e, t);
				const n = this._createAnimations(e, t);
				return n.length ? (Ja.add(this._chart, n), !0) : void 0
			}
		}

		function or(e, t) {
			const n = e && e.options || {},
				a = n.reverse,
				r = void 0 === n.min ? t : 0,
				o = void 0 === n.max ? t : 0;
			return {
				start: a ? o : r,
				end: a ? r : o
			}
		}

		function ir(e, t) {
			const n = [],
				a = e._getSortedDatasetMetas(t);
			let r, o;
			for (r = 0, o = a.length; r < o; ++r) n.push(a[r].index);
			return n
		}

		function sr(e, t, n, a) {
			const r = e.keys,
				o = "single" === a.mode;
			let i, s, l, c;
			if (null !== t) {
				for (i = 0, s = r.length; i < s; ++i) {
					if (l = +r[i], l === n) {
						if (a.all) continue;
						break
					}
					c = e.values[l], Ke(c) && (o || 0 === t || Et(t) === Et(c)) && (t += c)
				}
				return t
			}
		}

		function lr(e, t) {
			const n = e && e.options.stacked;
			return n || void 0 === n && void 0 !== t.stack
		}

		function cr(e, t, n) {
			const a = e[t] || (e[t] = {});
			return a[n] || (a[n] = {})
		}

		function ur(e, t, n) {
			for (const a of t.getMatchingVisibleMetas("bar").reverse()) {
				const t = e[a.index];
				if (n && t > 0 || !n && t < 0) return a.index
			}
			return null
		}

		function dr(e, t) {
			const {
				chart: n,
				_cachedMeta: a
			} = e, r = n._stacks || (n._stacks = {}), {
				iScale: o,
				vScale: i,
				index: s
			} = a, l = o.axis, c = i.axis, u = function(e, t, n) {
				return `${e.id}.${t.id}.${n.stack||n.type}`
			}(o, i, a), d = t.length;
			let h;
			for (let e = 0; e < d; ++e) {
				const n = t[e],
					{
						[l]: a,
						[c]: o
					} = n;
				h = (n._stacks || (n._stacks = {}))[c] = cr(r, u, a), h[s] = o, h._top = ur(h, i, !0), h._bottom = ur(h, i, !1)
			}
		}

		function hr(e, t) {
			const n = e.scales;
			return Object.keys(n).filter((e => n[e].axis === t)).shift()
		}

		function fr(e, t) {
			const n = e.controller.index,
				a = e.vScale && e.vScale.axis;
			if (a) {
				t = t || e._parsed;
				for (const e of t) {
					const t = e._stacks;
					if (!t || void 0 === t[a] || void 0 === t[a][n]) return;
					delete t[a][n]
				}
			}
		}
		const pr = e => "reset" === e || "none" === e,
			mr = (e, t) => t ? e : Object.assign({}, e);
		class gr {
			constructor(e, t) {
				this.chart = e, this._ctx = e.ctx, this.index = t, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.$context = void 0, this._syncList = [], this.initialize()
			}
			initialize() {
				const e = this,
					t = e._cachedMeta;
				e.configure(), e.linkScales(), t._stacked = lr(t.vScale, t), e.addElements()
			}
			updateIndex(e) {
				this.index !== e && fr(this._cachedMeta), this.index = e
			}
			linkScales() {
				const e = this,
					t = e.chart,
					n = e._cachedMeta,
					a = e.getDataset(),
					r = (e, t, n, a) => "x" === e ? t : "r" === e ? a : n,
					o = n.xAxisID = et(a.xAxisID, hr(t, "x")),
					i = n.yAxisID = et(a.yAxisID, hr(t, "y")),
					s = n.rAxisID = et(a.rAxisID, hr(t, "r")),
					l = n.indexAxis,
					c = n.iAxisID = r(l, o, i, s),
					u = n.vAxisID = r(l, i, o, s);
				n.xScale = e.getScaleForId(o), n.yScale = e.getScaleForId(i), n.rScale = e.getScaleForId(s), n.iScale = e.getScaleForId(c), n.vScale = e.getScaleForId(u)
			}
			getDataset() {
				return this.chart.data.datasets[this.index]
			}
			getMeta() {
				return this.chart.getDatasetMeta(this.index)
			}
			getScaleForId(e) {
				return this.chart.scales[e]
			}
			_getOtherScale(e) {
				const t = this._cachedMeta;
				return e === t.iScale ? t.vScale : t.iScale
			}
			reset() {
				this._update("reset")
			}
			_destroy() {
				const e = this._cachedMeta;
				this._data && aa(this._data, this), e._stacked && fr(e)
			}
			_dataCheck() {
				const e = this,
					t = e.getDataset(),
					n = t.data || (t.data = []),
					a = e._data;
				if (Xe(n)) e._data = function(e) {
					const t = Object.keys(e),
						n = new Array(t.length);
					let a, r, o;
					for (a = 0, r = t.length; a < r; ++a) o = t[a], n[a] = {
						x: o,
						y: e[o]
					};
					return n
				}(n);
				else if (a !== n) {
					if (a) {
						aa(a, e);
						const t = e._cachedMeta;
						fr(t), t._parsed = []
					}
					n && Object.isExtensible(n) && (o = e, (r = n)._chartjs ? r._chartjs.listeners.push(o) : (Object.defineProperty(r, "_chartjs", {
						configurable: !0,
						enumerable: !1,
						value: {
							listeners: [o]
						}
					}), na.forEach((e => {
						const t = "_onData" + pt(e),
							n = r[e];
						Object.defineProperty(r, e, {
							configurable: !0,
							enumerable: !1,
							value(...e) {
								const a = n.apply(this, e);
								return r._chartjs.listeners.forEach((n => {
									"function" == typeof n[t] && n[t](...e)
								})), a
							}
						})
					})))), e._syncList = [], e._data = n
				}
				var r, o
			}
			addElements() {
				const e = this,
					t = e._cachedMeta;
				e._dataCheck(), e.datasetElementType && (t.dataset = new e.datasetElementType)
			}
			buildOrUpdateElements(e) {
				const t = this,
					n = t._cachedMeta,
					a = t.getDataset();
				let r = !1;
				t._dataCheck();
				const o = n._stacked;
				n._stacked = lr(n.vScale, n), n.stack !== a.stack && (r = !0, fr(n), n.stack = a.stack), t._resyncElements(e), (r || o !== n._stacked) && dr(t, n._parsed)
			}
			configure() {
				const e = this,
					t = e.chart.config,
					n = t.datasetScopeKeys(e._type),
					a = t.getOptionScopes(e.getDataset(), n, !0);
				e.options = t.createResolver(a, e.getContext()), e._parsing = e.options.parsing
			}
			parse(e, t) {
				const n = this,
					{
						_cachedMeta: a,
						_data: r
					} = n,
					{
						iScale: o,
						_stacked: i
					} = a,
					s = o.axis;
				let l, c, u, d = 0 === e && t === r.length || a._sorted,
					h = e > 0 && a._parsed[e - 1];
				if (!1 === n._parsing) a._parsed = r, a._sorted = !0, u = r;
				else {
					u = Ge(r[e]) ? n.parseArrayData(a, r, e, t) : Xe(r[e]) ? n.parseObjectData(a, r, e, t) : n.parsePrimitiveData(a, r, e, t);
					const o = () => null === c[s] || h && c[s] < h[s];
					for (l = 0; l < t; ++l) a._parsed[l + e] = c = u[l], d && (o() && (d = !1), h = c);
					a._sorted = d
				}
				i && dr(n, u)
			}
			parsePrimitiveData(e, t, n, a) {
				const {
					iScale: r,
					vScale: o
				} = e, i = r.axis, s = o.axis, l = r.getLabels(), c = r === o, u = new Array(a);
				let d, h, f;
				for (d = 0, h = a; d < h; ++d) f = d + n, u[d] = {
					[i]: c || r.parse(l[f], f),
					[s]: o.parse(t[f], f)
				};
				return u
			}
			parseArrayData(e, t, n, a) {
				const {
					xScale: r,
					yScale: o
				} = e, i = new Array(a);
				let s, l, c, u;
				for (s = 0, l = a; s < l; ++s) c = s + n, u = t[c], i[s] = {
					x: r.parse(u[0], c),
					y: o.parse(u[1], c)
				};
				return i
			}
			parseObjectData(e, t, n, a) {
				const {
					xScale: r,
					yScale: o
				} = e, {
					xAxisKey: i = "x",
					yAxisKey: s = "y"
				} = this._parsing, l = new Array(a);
				let c, u, d, h;
				for (c = 0, u = a; c < u; ++c) d = c + n, h = t[d], l[c] = {
					x: r.parse(ft(h, i), d),
					y: o.parse(ft(h, s), d)
				};
				return l
			}
			getParsed(e) {
				return this._cachedMeta._parsed[e]
			}
			getDataElement(e) {
				return this._cachedMeta.data[e]
			}
			applyStack(e, t, n) {
				const a = this.chart,
					r = this._cachedMeta,
					o = t[e.axis];
				return sr({
					keys: ir(a, !0),
					values: t._stacks[e.axis]
				}, o, r.index, {
					mode: n
				})
			}
			updateRangeFromParsed(e, t, n, a) {
				const r = n[t.axis];
				let o = null === r ? NaN : r;
				const i = a && n._stacks[t.axis];
				a && i && (a.values = i, e.min = Math.min(e.min, o), e.max = Math.max(e.max, o), o = sr(a, r, this._cachedMeta.index, {
					all: !0
				})), e.min = Math.min(e.min, o), e.max = Math.max(e.max, o)
			}
			getMinMax(e, t) {
				const n = this,
					a = n._cachedMeta,
					r = a._parsed,
					o = a._sorted && e === a.iScale,
					i = r.length,
					s = n._getOtherScale(e),
					l = t && a._stacked && {
						keys: ir(n.chart, !0),
						values: null
					},
					c = {
						min: Number.POSITIVE_INFINITY,
						max: Number.NEGATIVE_INFINITY
					},
					{
						min: u,
						max: d
					} = function(e) {
						const {
							min: t,
							max: n,
							minDefined: a,
							maxDefined: r
						} = e.getUserBounds();
						return {
							min: a ? t : Number.NEGATIVE_INFINITY,
							max: r ? n : Number.POSITIVE_INFINITY
						}
					}(s);
				let h, f, p, m;

				function g() {
					return p = r[h], f = p[e.axis], m = p[s.axis], !Ke(f) || u > m || d < m
				}
				for (h = 0; h < i && (g() || (n.updateRangeFromParsed(c, e, p, l), !o)); ++h);
				if (o)
					for (h = i - 1; h >= 0; --h)
						if (!g()) {
							n.updateRangeFromParsed(c, e, p, l);
							break
						} return c
			}
			getAllParsedValues(e) {
				const t = this._cachedMeta._parsed,
					n = [];
				let a, r, o;
				for (a = 0, r = t.length; a < r; ++a) o = t[a][e.axis], Ke(o) && n.push(o);
				return n
			}
			getMaxOverflow() {
				return !1
			}
			getLabelAndValue(e) {
				const t = this._cachedMeta,
					n = t.iScale,
					a = t.vScale,
					r = this.getParsed(e);
				return {
					label: n ? "" + n.getLabelForValue(r[n.axis]) : "",
					value: a ? "" + a.getLabelForValue(r[a.axis]) : ""
				}
			}
			_update(e) {
				const t = this,
					n = t._cachedMeta;
				t.configure(), t._cachedDataOpts = {}, t.update(e || "default"), n._clip = function(e) {
					let t, n, a, r;
					return Xe(e) ? (t = e.top, n = e.right, a = e.bottom, r = e.left) : t = n = a = r = e, {
						top: t,
						right: n,
						bottom: a,
						left: r,
						disabled: !1 === e
					}
				}(et(t.options.clip, function(e, t, n) {
					if (!1 === n) return !1;
					const a = or(e, n),
						r = or(t, n);
					return {
						top: r.end,
						right: a.end,
						bottom: r.start,
						left: a.start
					}
				}(n.xScale, n.yScale, t.getMaxOverflow())))
			}
			update(e) {}
			draw() {
				const e = this,
					t = e._ctx,
					n = e.chart,
					a = e._cachedMeta,
					r = a.data || [],
					o = n.chartArea,
					i = [],
					s = e._drawStart || 0,
					l = e._drawCount || r.length - s;
				let c;
				for (a.dataset && a.dataset.draw(t, o, s, l), c = s; c < s + l; ++c) {
					const e = r[c];
					e.hidden || (e.active ? i.push(e) : e.draw(t, o))
				}
				for (c = 0; c < i.length; ++c) i[c].draw(t, o)
			}
			getStyle(e, t) {
				const n = t ? "active" : "default";
				return void 0 === e && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(n) : this.resolveDataElementOptions(e || 0, n)
			}
			getContext(e, t, n) {
				const a = this,
					r = a.getDataset();
				let o;
				if (e >= 0 && e < a._cachedMeta.data.length) {
					const t = a._cachedMeta.data[e];
					o = t.$context || (t.$context = function(e, t, n) {
						return Object.assign(Object.create(e), {
							active: !1,
							dataIndex: t,
							parsed: void 0,
							raw: void 0,
							element: n,
							index: t,
							mode: "default",
							type: "data"
						})
					}(a.getContext(), e, t)), o.parsed = a.getParsed(e), o.raw = r.data[e], o.index = o.dataIndex = e
				} else o = a.$context || (a.$context = function(e, t) {
					return Object.assign(Object.create(e), {
						active: !1,
						dataset: void 0,
						datasetIndex: t,
						index: t,
						mode: "default",
						type: "dataset"
					})
				}(a.chart.getContext(), a.index)), o.dataset = r, o.index = o.datasetIndex = a.index;
				return o.active = !!t, o.mode = n, o
			}
			resolveDatasetElementOptions(e) {
				return this._resolveElementOptions(this.datasetElementType.id, e)
			}
			resolveDataElementOptions(e, t) {
				return this._resolveElementOptions(this.dataElementType.id, t, e)
			}
			_resolveElementOptions(e, t = "default", n) {
				const a = this,
					r = "active" === t,
					o = a._cachedDataOpts,
					i = e + "-" + t,
					s = o[i],
					l = a.enableOptionSharing && mt(n);
				if (s) return mr(s, l);
				const c = a.chart.config,
					u = c.datasetElementScopeKeys(a._type, e),
					d = r ? [`${e}Hover`, "hover", e, ""] : [e, ""],
					h = c.getOptionScopes(a.getDataset(), u),
					f = Object.keys(Mn.elements[e]),
					p = c.resolveNamedOptions(h, f, (() => a.getContext(n, r)), d);
				return p.$shared && (p.$shared = l, o[i] = Object.freeze(mr(p, l))), p
			}
			_resolveAnimations(e, t, n) {
				const a = this,
					r = a.chart,
					o = a._cachedDataOpts,
					i = `animation-${t}`,
					s = o[i];
				if (s) return s;
				let l;
				if (!1 !== r.options.animation) {
					const r = a.chart.config,
						o = r.datasetAnimationScopeKeys(a._type, t),
						i = r.getOptionScopes(a.getDataset(), o);
					l = r.createResolver(i, a.getContext(e, n, t))
				}
				const c = new rr(r, l && l.animations);
				return l && l._cacheable && (o[i] = Object.freeze(c)), c
			}
			getSharedOptions(e) {
				if (e.$shared) return this._sharedOptions || (this._sharedOptions = Object.assign({}, e))
			}
			includeOptions(e, t) {
				return !t || pr(e) || this.chart._animationsDisabled
			}
			updateElement(e, t, n, a) {
				pr(a) ? Object.assign(e, n) : this._resolveAnimations(t, a).update(e, n)
			}
			updateSharedOptions(e, t, n) {
				e && !pr(t) && this._resolveAnimations(void 0, t).update(e, n)
			}
			_setStyle(e, t, n, a) {
				e.active = a;
				const r = this.getStyle(t, a);
				this._resolveAnimations(t, n, a).update(e, {
					options: !a && this.getSharedOptions(r) || r
				})
			}
			removeHoverStyle(e, t, n) {
				this._setStyle(e, n, "active", !1)
			}
			setHoverStyle(e, t, n) {
				this._setStyle(e, n, "active", !0)
			}
			_removeDatasetHoverStyle() {
				const e = this._cachedMeta.dataset;
				e && this._setStyle(e, void 0, "active", !1)
			}
			_setDatasetHoverStyle() {
				const e = this._cachedMeta.dataset;
				e && this._setStyle(e, void 0, "active", !0)
			}
			_resyncElements(e) {
				const t = this,
					n = t._data,
					a = t._cachedMeta.data;
				for (const [e, n, a] of t._syncList) t[e](n, a);
				t._syncList = [];
				const r = a.length,
					o = n.length,
					i = Math.min(o, r);
				i && t.parse(0, i), o > r ? t._insertElements(r, o - r, e) : o < r && t._removeElements(o, r - o)
			}
			_insertElements(e, t, n = !0) {
				const a = this,
					r = a._cachedMeta,
					o = r.data,
					i = e + t;
				let s;
				const l = e => {
					for (e.length += t, s = e.length - 1; s >= i; s--) e[s] = e[s - t]
				};
				for (l(o), s = e; s < i; ++s) o[s] = new a.dataElementType;
				a._parsing && l(r._parsed), a.parse(e, t), n && a.updateElements(o, e, t, "reset")
			}
			updateElements(e, t, n, a) {}
			_removeElements(e, t) {
				const n = this._cachedMeta;
				if (this._parsing) {
					const a = n._parsed.splice(e, t);
					n._stacked && fr(n, a)
				}
				n.data.splice(e, t)
			}
			_onDataPush() {
				const e = arguments.length;
				this._syncList.push(["_insertElements", this.getDataset().data.length - e, e])
			}
			_onDataPop() {
				this._syncList.push(["_removeElements", this._cachedMeta.data.length - 1, 1])
			}
			_onDataShift() {
				this._syncList.push(["_removeElements", 0, 1])
			}
			_onDataSplice(e, t) {
				this._syncList.push(["_removeElements", e, t]), this._syncList.push(["_insertElements", e, arguments.length - 2])
			}
			_onDataUnshift() {
				this._syncList.push(["_insertElements", 0, arguments.length])
			}
		}

		function yr(e) {
			const t = function(e) {
				if (!e._cache.$bar) {
					const t = e.getMatchingVisibleMetas("bar");
					let n = [];
					for (let a = 0, r = t.length; a < r; a++) n = n.concat(t[a].controller.getAllParsedValues(e));
					e._cache.$bar = ra(n.sort(((e, t) => e - t)))
				}
				return e._cache.$bar
			}(e);
			let n, a, r, o, i = e._length;
			const s = () => {
				32767 !== r && -32768 !== r && (mt(o) && (i = Math.min(i, Math.abs(r - o) || i)), o = r)
			};
			for (n = 0, a = t.length; n < a; ++n) r = e.getPixelForValue(t[n]), s();
			for (o = void 0, n = 0, a = e.ticks.length; n < a; ++n) r = e.getPixelForTick(n), s();
			return i
		}

		function br(e, t, n, a) {
			return Ge(e) ? function(e, t, n, a) {
				const r = n.parse(e[0], a),
					o = n.parse(e[1], a),
					i = Math.min(r, o),
					s = Math.max(r, o);
				let l = i,
					c = s;
				Math.abs(i) > Math.abs(s) && (l = s, c = i), t[n.axis] = c, t._custom = {
					barStart: l,
					barEnd: c,
					start: r,
					end: o,
					min: i,
					max: s
				}
			}(e, t, n, a) : t[n.axis] = n.parse(e, a), t
		}

		function vr(e, t, n, a) {
			const r = e.iScale,
				o = e.vScale,
				i = r.getLabels(),
				s = r === o,
				l = [];
			let c, u, d, h;
			for (c = n, u = n + a; c < u; ++c) h = t[c], d = {}, d[r.axis] = s || r.parse(i[c], c), l.push(br(h, d, o, c));
			return l
		}

		function xr(e) {
			return e && void 0 !== e.barStart && void 0 !== e.barEnd
		}

		function wr(e, t, n, a) {
			let r = t.borderSkipped;
			const o = {};
			if (!r) return void(e.borderSkipped = o);
			const {
				start: i,
				end: s,
				reverse: l,
				top: c,
				bottom: u
			} = function(e) {
				let t, n, a, r, o;
				return e.horizontal ? (t = e.base > e.x, n = "left", a = "right") : (t = e.base < e.y, n = "bottom", a = "top"), t ? (r = "end", o = "start") : (r = "start", o = "end"), {
					start: n,
					end: a,
					reverse: t,
					top: r,
					bottom: o
				}
			}(e);
			"middle" === r && n && (e.enableBorderRadius = !0, (n._top || 0) === a ? r = c : (n._bottom || 0) === a ? r = u : (o[Tr(u, i, s, l)] = !0, r = c)), o[Tr(r, i, s, l)] = !0, e.borderSkipped = o
		}

		function Tr(e, t, n, a) {
			var r, o, i;
			return a ? (i = n, e = _r(e = (r = e) === (o = t) ? i : r === i ? o : r, n, t)) : e = _r(e, t, n), e
		}

		function _r(e, t, n) {
			return "start" === e ? t : "end" === e ? n : e
		}
		gr.defaults = {}, gr.prototype.datasetElementType = null, gr.prototype.dataElementType = null;
		class kr extends gr {
			parsePrimitiveData(e, t, n, a) {
				return vr(e, t, n, a)
			}
			parseArrayData(e, t, n, a) {
				return vr(e, t, n, a)
			}
			parseObjectData(e, t, n, a) {
				const {
					iScale: r,
					vScale: o
				} = e, {
					xAxisKey: i = "x",
					yAxisKey: s = "y"
				} = this._parsing, l = "x" === r.axis ? i : s, c = "x" === o.axis ? i : s, u = [];
				let d, h, f, p;
				for (d = n, h = n + a; d < h; ++d) p = t[d], f = {}, f[r.axis] = r.parse(ft(p, l), d), u.push(br(ft(p, c), f, o, d));
				return u
			}
			updateRangeFromParsed(e, t, n, a) {
				super.updateRangeFromParsed(e, t, n, a);
				const r = n._custom;
				r && t === this._cachedMeta.vScale && (e.min = Math.min(e.min, r.min), e.max = Math.max(e.max, r.max))
			}
			getMaxOverflow() {
				return 0
			}
			getLabelAndValue(e) {
				const t = this._cachedMeta,
					{
						iScale: n,
						vScale: a
					} = t,
					r = this.getParsed(e),
					o = r._custom,
					i = xr(o) ? "[" + o.start + ", " + o.end + "]" : "" + a.getLabelForValue(r[a.axis]);
				return {
					label: "" + n.getLabelForValue(r[n.axis]),
					value: i
				}
			}
			initialize() {
				const e = this;
				e.enableOptionSharing = !0, super.initialize();
				e._cachedMeta.stack = e.getDataset().stack
			}
			update(e) {
				const t = this._cachedMeta;
				this.updateElements(t.data, 0, t.data.length, e)
			}
			updateElements(e, t, n, a) {
				const r = this,
					o = "reset" === a,
					{
						index: i,
						_cachedMeta: {
							vScale: s
						}
					} = r,
					l = s.getBasePixel(),
					c = s.isHorizontal(),
					u = r._getRuler(),
					d = r.resolveDataElementOptions(t, a),
					h = r.getSharedOptions(d),
					f = r.includeOptions(a, h);
				r.updateSharedOptions(h, a, d);
				for (let d = t; d < t + n; d++) {
					const t = r.getParsed(d),
						n = o || Qe(t[s.axis]) ? {
							base: l,
							head: l
						} : r._calculateBarValuePixels(d),
						p = r._calculateBarIndexPixels(d, u),
						m = (t._stacks || {})[s.axis],
						g = {
							horizontal: c,
							base: n.base,
							enableBorderRadius: !m || xr(t._custom) || i === m._top || i === m._bottom,
							x: c ? n.head : p.center,
							y: c ? p.center : n.head,
							height: c ? p.size : Math.abs(n.size),
							width: c ? Math.abs(n.size) : p.size
						};
					f && (g.options = h || r.resolveDataElementOptions(d, e[d].active ? "active" : a)), wr(g, g.options || e[d].options, m, i), r.updateElement(e[d], d, g, a)
				}
			}
			_getStacks(e, t) {
				const n = this._cachedMeta.iScale,
					a = n.getMatchingVisibleMetas(this._type),
					r = n.options.stacked,
					o = a.length,
					i = [];
				let s, l;
				for (s = 0; s < o; ++s)
					if (l = a[s], l.controller.options.grouped) {
						if (void 0 !== t) {
							const e = l.controller.getParsed(t)[l.controller._cachedMeta.vScale.axis];
							if (Qe(e) || isNaN(e)) continue
						}
						if ((!1 === r || -1 === i.indexOf(l.stack) || void 0 === r && void 0 === l.stack) && i.push(l.stack), l.index === e) break
					} return i.length || i.push(void 0), i
			}
			_getStackCount(e) {
				return this._getStacks(void 0, e).length
			}
			_getStackIndex(e, t, n) {
				const a = this._getStacks(e, n),
					r = void 0 !== t ? a.indexOf(t) : -1;
				return -1 === r ? a.length - 1 : r
			}
			_getRuler() {
				const e = this,
					t = e.options,
					n = e._cachedMeta,
					a = n.iScale,
					r = [];
				let o, i;
				for (o = 0, i = n.data.length; o < i; ++o) r.push(a.getPixelForValue(e.getParsed(o)[a.axis], o));
				const s = t.barThickness;
				return {
					min: s || yr(a),
					pixels: r,
					start: a._startPixel,
					end: a._endPixel,
					stackCount: e._getStackCount(),
					scale: a,
					grouped: t.grouped,
					ratio: s ? 1 : t.categoryPercentage * t.barPercentage
				}
			}
			_calculateBarValuePixels(e) {
				const t = this,
					{
						_cachedMeta: {
							vScale: n,
							_stacked: a
						},
						options: {
							base: r,
							minBarLength: o
						}
					} = t,
					i = r || 0,
					s = t.getParsed(e),
					l = s._custom,
					c = xr(l);
				let u, d, h = s[n.axis],
					f = 0,
					p = a ? t.applyStack(n, s, a) : h;
				p !== h && (f = p - h, p = h), c && (h = l.barStart, p = l.barEnd - l.barStart, 0 !== h && Et(h) !== Et(l.barEnd) && (f = 0), f += h);
				const m = Qe(r) || c ? f : r;
				let g = n.getPixelForValue(m);
				if (u = t.chart.getDataVisibility(e) ? n.getPixelForValue(f + p) : g, d = u - g, Math.abs(d) < o && (d = function(e, t, n) {
						return 0 !== e ? Et(e) : (t.isHorizontal() ? 1 : -1) * (t.min >= n ? 1 : -1)
					}(d, n, i) * o, h === i && (g -= d / 2), u = g + d), g === n.getPixelForValue(i)) {
					const e = Et(d) * n.getLineWidthForValue(i) / 2;
					g += e, d -= e
				}
				return {
					size: d,
					base: g,
					head: u,
					center: u + d / 2
				}
			}
			_calculateBarIndexPixels(e, t) {
				const n = this,
					a = t.scale,
					r = n.options,
					o = r.skipNull,
					i = et(r.maxBarThickness, 1 / 0);
				let s, l;
				if (t.grouped) {
					const a = o ? n._getStackCount(e) : t.stackCount,
						c = "flex" === r.barThickness ? function(e, t, n, a) {
							const r = t.pixels,
								o = r[e];
							let i = e > 0 ? r[e - 1] : null,
								s = e < r.length - 1 ? r[e + 1] : null;
							const l = n.categoryPercentage;
							null === i && (i = o - (null === s ? t.end - t.start : s - o)), null === s && (s = o + o - i);
							const c = o - (o - Math.min(i, s)) / 2 * l;
							return {
								chunk: Math.abs(s - i) / 2 * l / a,
								ratio: n.barPercentage,
								start: c
							}
						}(e, t, r, a) : function(e, t, n, a) {
							const r = n.barThickness;
							let o, i;
							return Qe(r) ? (o = t.min * n.categoryPercentage, i = n.barPercentage) : (o = r * a, i = 1), {
								chunk: o / a,
								ratio: i,
								start: t.pixels[e] - o / 2
							}
						}(e, t, r, a),
						u = n._getStackIndex(n.index, n._cachedMeta.stack, o ? e : void 0);
					s = c.start + c.chunk * u + c.chunk / 2, l = Math.min(i, c.chunk * c.ratio)
				} else s = a.getPixelForValue(n.getParsed(e)[a.axis], e), l = Math.min(i, t.min * t.ratio);
				return {
					base: s - l / 2,
					head: s + l / 2,
					center: s,
					size: l
				}
			}
			draw() {
				const e = this,
					t = e._cachedMeta,
					n = t.vScale,
					a = t.data,
					r = a.length;
				let o = 0;
				for (; o < r; ++o) null !== e.getParsed(o)[n.axis] && a[o].draw(e._ctx)
			}
		}
		kr.id = "bar", kr.defaults = {
			datasetElementType: !1,
			dataElementType: "bar",
			categoryPercentage: .8,
			barPercentage: .9,
			grouped: !0,
			animations: {
				numbers: {
					type: "number",
					properties: ["x", "y", "base", "width", "height"]
				}
			}
		}, kr.overrides = {
			interaction: {
				mode: "index"
			},
			scales: {
				_index_: {
					type: "category",
					offset: !0,
					grid: {
						offset: !0
					}
				},
				_value_: {
					type: "linear",
					beginAtZero: !0
				}
			}
		};
		class Pr extends gr {
			initialize() {
				this.enableOptionSharing = !0, super.initialize()
			}
			parseObjectData(e, t, n, a) {
				const {
					xScale: r,
					yScale: o
				} = e, {
					xAxisKey: i = "x",
					yAxisKey: s = "y"
				} = this._parsing, l = [];
				let c, u, d;
				for (c = n, u = n + a; c < u; ++c) d = t[c], l.push({
					x: r.parse(ft(d, i), c),
					y: o.parse(ft(d, s), c),
					_custom: d && d.r && +d.r
				});
				return l
			}
			getMaxOverflow() {
				const {
					data: e,
					_parsed: t
				} = this._cachedMeta;
				let n = 0;
				for (let a = e.length - 1; a >= 0; --a) n = Math.max(n, e[a].size() / 2, t[a]._custom);
				return n > 0 && n
			}
			getLabelAndValue(e) {
				const t = this._cachedMeta,
					{
						xScale: n,
						yScale: a
					} = t,
					r = this.getParsed(e),
					o = n.getLabelForValue(r.x),
					i = a.getLabelForValue(r.y),
					s = r._custom;
				return {
					label: t.label,
					value: "(" + o + ", " + i + (s ? ", " + s : "") + ")"
				}
			}
			update(e) {
				const t = this._cachedMeta.data;
				this.updateElements(t, 0, t.length, e)
			}
			updateElements(e, t, n, a) {
				const r = this,
					o = "reset" === a,
					{
						iScale: i,
						vScale: s
					} = r._cachedMeta,
					l = r.resolveDataElementOptions(t, a),
					c = r.getSharedOptions(l),
					u = r.includeOptions(a, c),
					d = i.axis,
					h = s.axis;
				for (let l = t; l < t + n; l++) {
					const t = e[l],
						n = !o && r.getParsed(l),
						c = {},
						f = c[d] = o ? i.getPixelForDecimal(.5) : i.getPixelForValue(n[d]),
						p = c[h] = o ? s.getBasePixel() : s.getPixelForValue(n[h]);
					c.skip = isNaN(f) || isNaN(p), u && (c.options = r.resolveDataElementOptions(l, t.active ? "active" : a), o && (c.options.radius = 0)), r.updateElement(t, l, c, a)
				}
				r.updateSharedOptions(c, a, l)
			}
			resolveDataElementOptions(e, t) {
				const n = this.getParsed(e);
				let a = super.resolveDataElementOptions(e, t);
				a.$shared && (a = Object.assign({}, a, {
					$shared: !1
				}));
				const r = a.radius;
				return "active" !== t && (a.radius = 0), a.radius += et(n && n._custom, r), a
			}
		}
		Pr.id = "bubble", Pr.defaults = {
			datasetElementType: !1,
			dataElementType: "point",
			animations: {
				numbers: {
					type: "number",
					properties: ["x", "y", "borderWidth", "radius"]
				}
			}
		}, Pr.overrides = {
			scales: {
				x: {
					type: "linear"
				},
				y: {
					type: "linear"
				}
			},
			plugins: {
				tooltip: {
					callbacks: {
						title: () => ""
					}
				}
			}
		};
		class Er extends gr {
			constructor(e, t) {
				super(e, t), this.enableOptionSharing = !0, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0
			}
			linkScales() {}
			parse(e, t) {
				const n = this.getDataset().data,
					a = this._cachedMeta;
				let r, o;
				for (r = e, o = e + t; r < o; ++r) a._parsed[r] = +n[r]
			}
			_getRotation() {
				return $t(this.options.rotation - 90)
			}
			_getCircumference() {
				return $t(this.options.circumference)
			}
			_getRotationExtents() {
				let e = bt,
					t = -bt;
				const n = this;
				for (let a = 0; a < n.chart.data.datasets.length; ++a)
					if (n.chart.isDatasetVisible(a)) {
						const r = n.chart.getDatasetMeta(a).controller,
							o = r._getRotation(),
							i = r._getCircumference();
						e = Math.min(e, o), t = Math.max(t, o + i)
					} return {
					rotation: e,
					circumference: t - e
				}
			}
			update(e) {
				const t = this,
					n = t.chart,
					{
						chartArea: a
					} = n,
					r = t._cachedMeta,
					o = r.data,
					i = t.getMaxBorderWidth() + t.getMaxOffset(o) + t.options.spacing,
					s = Math.max((Math.min(a.width, a.height) - i) / 2, 0),
					l = Math.min((c = t.options.cutout, u = s, "string" == typeof c && c.endsWith("%") ? parseFloat(c) / 100 : c / u), 1);
				var c, u;
				const d = t._getRingWeight(t.index),
					{
						circumference: h,
						rotation: f
					} = t._getRotationExtents(),
					{
						ratioX: p,
						ratioY: m,
						offsetX: g,
						offsetY: y
					} = function(e, t, n) {
						let a = 1,
							r = 1,
							o = 0,
							i = 0;
						if (t < bt) {
							const s = e,
								l = s + t,
								c = Math.cos(s),
								u = Math.sin(s),
								d = Math.cos(l),
								h = Math.sin(l),
								f = (e, t, a) => Ft(e, s, l, !0) ? 1 : Math.max(t, t * n, a, a * n),
								p = (e, t, a) => Ft(e, s, l, !0) ? -1 : Math.min(t, t * n, a, a * n),
								m = f(0, c, d),
								g = f(Tt, u, h),
								y = p(yt, c, d),
								b = p(yt + Tt, u, h);
							a = (m - y) / 2, r = (g - b) / 2, o = -(m + y) / 2, i = -(g + b) / 2
						}
						return {
							ratioX: a,
							ratioY: r,
							offsetX: o,
							offsetY: i
						}
					}(f, h, l),
					b = (a.width - i) / p,
					v = (a.height - i) / m,
					x = Math.max(Math.min(b, v) / 2, 0),
					w = tt(t.options.radius, x),
					T = (w - Math.max(w * l, 0)) / t._getVisibleDatasetWeightTotal();
				t.offsetX = g * w, t.offsetY = y * w, r.total = t.calculateTotal(), t.outerRadius = w - T * t._getRingWeightOffset(t.index), t.innerRadius = Math.max(t.outerRadius - T * d, 0), t.updateElements(o, 0, o.length, e)
			}
			_circumference(e, t) {
				const n = this,
					a = n.options,
					r = n._cachedMeta,
					o = n._getCircumference();
				return t && a.animation.animateRotate || !this.chart.getDataVisibility(e) || null === r._parsed[e] || r.data[e].hidden ? 0 : n.calculateCircumference(r._parsed[e] * o / bt)
			}
			updateElements(e, t, n, a) {
				const r = this,
					o = "reset" === a,
					i = r.chart,
					s = i.chartArea,
					l = i.options.animation,
					c = (s.left + s.right) / 2,
					u = (s.top + s.bottom) / 2,
					d = o && l.animateScale,
					h = d ? 0 : r.innerRadius,
					f = d ? 0 : r.outerRadius,
					p = r.resolveDataElementOptions(t, a),
					m = r.getSharedOptions(p),
					g = r.includeOptions(a, m);
				let y, b = r._getRotation();
				for (y = 0; y < t; ++y) b += r._circumference(y, o);
				for (y = t; y < t + n; ++y) {
					const t = r._circumference(y, o),
						n = e[y],
						i = {
							x: c + r.offsetX,
							y: u + r.offsetY,
							startAngle: b,
							endAngle: b + t,
							circumference: t,
							outerRadius: f,
							innerRadius: h
						};
					g && (i.options = m || r.resolveDataElementOptions(y, n.active ? "active" : a)), b += t, r.updateElement(n, y, i, a)
				}
				r.updateSharedOptions(m, a, p)
			}
			calculateTotal() {
				const e = this._cachedMeta,
					t = e.data;
				let n, a = 0;
				for (n = 0; n < t.length; n++) {
					const r = e._parsed[n];
					null === r || isNaN(r) || !this.chart.getDataVisibility(n) || t[n].hidden || (a += Math.abs(r))
				}
				return a
			}
			calculateCircumference(e) {
				const t = this._cachedMeta.total;
				return t > 0 && !isNaN(e) ? bt * (Math.abs(e) / t) : 0
			}
			getLabelAndValue(e) {
				const t = this._cachedMeta,
					n = this.chart,
					a = n.data.labels || [],
					r = ja(t._parsed[e], n.options.locale);
				return {
					label: a[e] || "",
					value: r
				}
			}
			getMaxBorderWidth(e) {
				const t = this;
				let n = 0;
				const a = t.chart;
				let r, o, i, s, l;
				if (!e)
					for (r = 0, o = a.data.datasets.length; r < o; ++r)
						if (a.isDatasetVisible(r)) {
							i = a.getDatasetMeta(r), e = i.data, s = i.controller, s !== t && s.configure();
							break
						} if (!e) return 0;
				for (r = 0, o = e.length; r < o; ++r) l = s.resolveDataElementOptions(r), "inner" !== l.borderAlign && (n = Math.max(n, l.borderWidth || 0, l.hoverBorderWidth || 0));
				return n
			}
			getMaxOffset(e) {
				let t = 0;
				for (let n = 0, a = e.length; n < a; ++n) {
					const e = this.resolveDataElementOptions(n);
					t = Math.max(t, e.offset || 0, e.hoverOffset || 0)
				}
				return t
			}
			_getRingWeightOffset(e) {
				let t = 0;
				for (let n = 0; n < e; ++n) this.chart.isDatasetVisible(n) && (t += this._getRingWeight(n));
				return t
			}
			_getRingWeight(e) {
				return Math.max(et(this.chart.data.datasets[e].weight, 1), 0)
			}
			_getVisibleDatasetWeightTotal() {
				return this._getRingWeightOffset(this.chart.data.datasets.length) || 1
			}
		}
		Er.id = "doughnut", Er.defaults = {
			datasetElementType: !1,
			dataElementType: "arc",
			animation: {
				animateRotate: !0,
				animateScale: !1
			},
			animations: {
				numbers: {
					type: "number",
					properties: ["circumference", "endAngle", "innerRadius", "outerRadius", "startAngle", "x", "y", "offset", "borderWidth", "spacing"]
				}
			},
			cutout: "50%",
			rotation: 0,
			circumference: 360,
			radius: "100%",
			spacing: 0,
			indexAxis: "r"
		}, Er.descriptors = {
			_scriptable: e => "spacing" !== e,
			_indexable: e => "spacing" !== e
		}, Er.overrides = {
			aspectRatio: 1,
			plugins: {
				legend: {
					labels: {
						generateLabels(e) {
							const t = e.data;
							if (t.labels.length && t.datasets.length) {
								const {
									labels: {
										pointStyle: n
									}
								} = e.legend.options;
								return t.labels.map(((t, a) => {
									const r = e.getDatasetMeta(0).controller.getStyle(a);
									return {
										text: t,
										fillStyle: r.backgroundColor,
										strokeStyle: r.borderColor,
										lineWidth: r.borderWidth,
										pointStyle: n,
										hidden: !e.getDataVisibility(a),
										index: a
									}
								}))
							}
							return []
						}
					},
					onClick(e, t, n) {
						n.chart.toggleDataVisibility(t.index), n.chart.update()
					}
				},
				tooltip: {
					callbacks: {
						title: () => "",
						label(e) {
							let t = e.label;
							const n = ": " + e.formattedValue;
							return Ge(t) ? (t = t.slice(), t[0] += n) : t += n, t
						}
					}
				}
			}
		};
		class Sr extends gr {
			initialize() {
				this.enableOptionSharing = !0, super.initialize()
			}
			update(e) {
				const t = this,
					n = t._cachedMeta,
					{
						dataset: a,
						data: r = [],
						_dataset: o
					} = n,
					i = t.chart._animationsDisabled;
				let {
					start: s,
					count: l
				} = function(e, t, n) {
					const a = t.length;
					let r = 0,
						o = a;
					if (e._sorted) {
						const {
							iScale: i,
							_parsed: s
						} = e, l = i.axis, {
							min: c,
							max: u,
							minDefined: d,
							maxDefined: h
						} = i.getUserBounds();
						d && (r = Lt(Math.min(ea(s, i.axis, c).lo, n ? a : ea(t, l, i.getPixelForValue(c)).lo), 0, a - 1)), o = h ? Lt(Math.max(ea(s, i.axis, u).hi + 1, n ? 0 : ea(t, l, i.getPixelForValue(u)).hi + 1), r, a) - r : a - r
					}
					return {
						start: r,
						count: o
					}
				}(n, r, i);
				t._drawStart = s, t._drawCount = l,
					function(e) {
						const {
							xScale: t,
							yScale: n,
							_scaleRanges: a
						} = e, r = {
							xmin: t.min,
							xmax: t.max,
							ymin: n.min,
							ymax: n.max
						};
						if (!a) return e._scaleRanges = r, !0;
						const o = a.xmin !== t.min || a.xmax !== t.max || a.ymin !== n.min || a.ymax !== n.max;
						return Object.assign(a, r), o
					}(n) && (s = 0, l = r.length), a._datasetIndex = t.index, a._decimated = !!o._decimated, a.points = r;
				const c = t.resolveDatasetElementOptions(e);
				t.options.showLine || (c.borderWidth = 0), c.segment = t.options.segment, t.updateElement(a, void 0, {
					animated: !i,
					options: c
				}, e), t.updateElements(r, s, l, e)
			}
			updateElements(e, t, n, a) {
				const r = this,
					o = "reset" === a,
					{
						iScale: i,
						vScale: s,
						_stacked: l
					} = r._cachedMeta,
					c = r.resolveDataElementOptions(t, a),
					u = r.getSharedOptions(c),
					d = r.includeOptions(a, u),
					h = i.axis,
					f = s.axis,
					p = r.options.spanGaps,
					m = Ct(p) ? p : Number.POSITIVE_INFINITY,
					g = r.chart._animationsDisabled || o || "none" === a;
				let y = t > 0 && r.getParsed(t - 1);
				for (let c = t; c < t + n; ++c) {
					const t = e[c],
						n = r.getParsed(c),
						p = g ? t : {},
						b = Qe(n[f]),
						v = p[h] = i.getPixelForValue(n[h], c),
						x = p[f] = o || b ? s.getBasePixel() : s.getPixelForValue(l ? r.applyStack(s, n, l) : n[f], c);
					p.skip = isNaN(v) || isNaN(x) || b, p.stop = c > 0 && n[h] - y[h] > m, p.parsed = n, d && (p.options = u || r.resolveDataElementOptions(c, t.active ? "active" : a)), g || r.updateElement(t, c, p, a), y = n
				}
				r.updateSharedOptions(u, a, c)
			}
			getMaxOverflow() {
				const e = this,
					t = e._cachedMeta,
					n = t.dataset,
					a = n.options && n.options.borderWidth || 0,
					r = t.data || [];
				if (!r.length) return a;
				const o = r[0].size(e.resolveDataElementOptions(0)),
					i = r[r.length - 1].size(e.resolveDataElementOptions(r.length - 1));
				return Math.max(a, o, i) / 2
			}
			draw() {
				const e = this._cachedMeta;
				e.dataset.updateControlPoints(this.chart.chartArea, e.iScale.axis), super.draw()
			}
		}
		Sr.id = "line", Sr.defaults = {
			datasetElementType: "line",
			dataElementType: "point",
			showLine: !0,
			spanGaps: !1
		}, Sr.overrides = {
			scales: {
				_index_: {
					type: "category"
				},
				_value_: {
					type: "linear"
				}
			}
		};
		class Cr extends gr {
			constructor(e, t) {
				super(e, t), this.innerRadius = void 0, this.outerRadius = void 0
			}
			getLabelAndValue(e) {
				const t = this._cachedMeta,
					n = this.chart,
					a = n.data.labels || [],
					r = ja(t._parsed[e].r, n.options.locale);
				return {
					label: a[e] || "",
					value: r
				}
			}
			update(e) {
				const t = this._cachedMeta.data;
				this._updateRadius(), this.updateElements(t, 0, t.length, e)
			}
			_updateRadius() {
				const e = this,
					t = e.chart,
					n = t.chartArea,
					a = t.options,
					r = Math.min(n.right - n.left, n.bottom - n.top),
					o = Math.max(r / 2, 0),
					i = (o - Math.max(a.cutoutPercentage ? o / 100 * a.cutoutPercentage : 1, 0)) / t.getVisibleDatasetCount();
				e.outerRadius = o - i * e.index, e.innerRadius = e.outerRadius - i
			}
			updateElements(e, t, n, a) {
				const r = this,
					o = "reset" === a,
					i = r.chart,
					s = r.getDataset(),
					l = i.options.animation,
					c = r._cachedMeta.rScale,
					u = c.xCenter,
					d = c.yCenter,
					h = c.getIndexAngle(0) - .5 * yt;
				let f, p = h;
				const m = 360 / r.countVisibleElements();
				for (f = 0; f < t; ++f) p += r._computeAngle(f, a, m);
				for (f = t; f < t + n; f++) {
					const t = e[f];
					let n = p,
						g = p + r._computeAngle(f, a, m),
						y = i.getDataVisibility(f) ? c.getDistanceFromCenterForValue(s.data[f]) : 0;
					p = g, o && (l.animateScale && (y = 0), l.animateRotate && (n = g = h));
					const b = {
						x: u,
						y: d,
						innerRadius: 0,
						outerRadius: y,
						startAngle: n,
						endAngle: g,
						options: r.resolveDataElementOptions(f, t.active ? "active" : a)
					};
					r.updateElement(t, f, b, a)
				}
			}
			countVisibleElements() {
				const e = this.getDataset(),
					t = this._cachedMeta;
				let n = 0;
				return t.data.forEach(((t, a) => {
					!isNaN(e.data[a]) && this.chart.getDataVisibility(a) && n++
				})), n
			}
			_computeAngle(e, t, n) {
				return this.chart.getDataVisibility(e) ? $t(this.resolveDataElementOptions(e, t).angle || n) : 0
			}
		}
		Cr.id = "polarArea", Cr.defaults = {
			dataElementType: "arc",
			animation: {
				animateRotate: !0,
				animateScale: !0
			},
			animations: {
				numbers: {
					type: "number",
					properties: ["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"]
				}
			},
			indexAxis: "r",
			startAngle: 0
		}, Cr.overrides = {
			aspectRatio: 1,
			plugins: {
				legend: {
					labels: {
						generateLabels(e) {
							const t = e.data;
							if (t.labels.length && t.datasets.length) {
								const {
									labels: {
										pointStyle: n
									}
								} = e.legend.options;
								return t.labels.map(((t, a) => {
									const r = e.getDatasetMeta(0).controller.getStyle(a);
									return {
										text: t,
										fillStyle: r.backgroundColor,
										strokeStyle: r.borderColor,
										lineWidth: r.borderWidth,
										pointStyle: n,
										hidden: !e.getDataVisibility(a),
										index: a
									}
								}))
							}
							return []
						}
					},
					onClick(e, t, n) {
						n.chart.toggleDataVisibility(t.index), n.chart.update()
					}
				},
				tooltip: {
					callbacks: {
						title: () => "",
						label: e => e.chart.data.labels[e.dataIndex] + ": " + e.formattedValue
					}
				}
			},
			scales: {
				r: {
					type: "radialLinear",
					angleLines: {
						display: !1
					},
					beginAtZero: !0,
					grid: {
						circular: !0
					},
					pointLabels: {
						display: !1
					},
					startAngle: 0
				}
			}
		};
		class Mr extends Er {}
		Mr.id = "pie", Mr.defaults = {
			cutout: 0,
			rotation: 0,
			circumference: 360,
			radius: "100%"
		};
		class Nr extends gr {
			getLabelAndValue(e) {
				const t = this._cachedMeta.vScale,
					n = this.getParsed(e);
				return {
					label: t.getLabels()[e],
					value: "" + t.getLabelForValue(n[t.axis])
				}
			}
			update(e) {
				const t = this,
					n = t._cachedMeta,
					a = n.dataset,
					r = n.data || [],
					o = n.iScale.getLabels();
				if (a.points = r, "resize" !== e) {
					const n = t.resolveDatasetElementOptions(e);
					t.options.showLine || (n.borderWidth = 0);
					const i = {
						_loop: !0,
						_fullLoop: o.length === r.length,
						options: n
					};
					t.updateElement(a, void 0, i, e)
				}
				t.updateElements(r, 0, r.length, e)
			}
			updateElements(e, t, n, a) {
				const r = this,
					o = r.getDataset(),
					i = r._cachedMeta.rScale,
					s = "reset" === a;
				for (let l = t; l < t + n; l++) {
					const t = e[l],
						n = r.resolveDataElementOptions(l, t.active ? "active" : a),
						c = i.getPointPositionForValue(l, o.data[l]),
						u = s ? i.xCenter : c.x,
						d = s ? i.yCenter : c.y,
						h = {
							x: u,
							y: d,
							angle: c.angle,
							skip: isNaN(u) || isNaN(d),
							options: n
						};
					r.updateElement(t, l, h, a)
				}
			}
		}
		Nr.id = "radar", Nr.defaults = {
			datasetElementType: "line",
			dataElementType: "point",
			indexAxis: "r",
			showLine: !0,
			elements: {
				line: {
					fill: "start"
				}
			}
		}, Nr.overrides = {
			aspectRatio: 1,
			scales: {
				r: {
					type: "radialLinear"
				}
			}
		};
		class $r extends Sr {}
		$r.id = "scatter", $r.defaults = {
			showLine: !1,
			fill: !1
		}, $r.overrides = {
			interaction: {
				mode: "point"
			},
			plugins: {
				tooltip: {
					callbacks: {
						title: () => "",
						label: e => "(" + e.label + ", " + e.formattedValue + ")"
					}
				}
			},
			scales: {
				x: {
					type: "linear"
				},
				y: {
					type: "linear"
				}
			}
		};
		var Ar = Object.freeze({
			__proto__: null,
			BarController: kr,
			BubbleController: Pr,
			DoughnutController: Er,
			LineController: Sr,
			PolarAreaController: Cr,
			PieController: Mr,
			RadarController: Nr,
			ScatterController: $r
		});

		function Ir() {
			throw new Error("This method is not implemented: Check that a complete date adapter is provided.")
		}
		class Or {
			constructor(e) {
				this.options = e || {}
			}
			formats() {
				return Ir()
			}
			parse(e, t) {
				return Ir()
			}
			format(e, t) {
				return Ir()
			}
			add(e, t, n) {
				return Ir()
			}
			diff(e, t, n) {
				return Ir()
			}
			startOf(e, t, n) {
				return Ir()
			}
			endOf(e, t) {
				return Ir()
			}
		}
		Or.override = function(e) {
			Object.assign(Or.prototype, e)
		};
		var Rr = {
			_date: Or
		};

		function Dr(e, t) {
			return "native" in e ? {
				x: e.x,
				y: e.y
			} : Aa(e, t)
		}

		function Fr(e, t, n, a) {
			const {
				controller: r,
				data: o,
				_sorted: i
			} = e, s = r._cachedMeta.iScale;
			if (s && t === s.axis && i && o.length) {
				const e = s._reversePixels ? ta : ea;
				if (!a) return e(o, t, n);
				if (r._sharedOptions) {
					const a = o[0],
						r = "function" == typeof a.getRange && a.getRange(t);
					if (r) {
						const a = e(o, t, n - r),
							i = e(o, t, n + r);
						return {
							lo: a.lo,
							hi: i.hi
						}
					}
				}
			}
			return {
				lo: 0,
				hi: o.length - 1
			}
		}

		function Lr(e, t, n, a, r) {
			const o = e.getSortedVisibleDatasetMetas(),
				i = n[t];
			for (let e = 0, n = o.length; e < n; ++e) {
				const {
					index: n,
					data: s
				} = o[e], {
					lo: l,
					hi: c
				} = Fr(o[e], t, i, r);
				for (let e = l; e <= c; ++e) {
					const t = s[e];
					t.skip || a(t, n, e)
				}
			}
		}

		function zr(e, t, n, a) {
			const r = [];
			if (!Rn(t, e.chartArea, e._minPadding)) return r;
			return Lr(e, n, t, (function(e, n, o) {
				e.inRange(t.x, t.y, a) && r.push({
					element: e,
					datasetIndex: n,
					index: o
				})
			}), !0), r
		}

		function Vr(e, t, n, a, r) {
			const o = function(e) {
				const t = -1 !== e.indexOf("x"),
					n = -1 !== e.indexOf("y");
				return function(e, a) {
					const r = t ? Math.abs(e.x - a.x) : 0,
						o = n ? Math.abs(e.y - a.y) : 0;
					return Math.sqrt(Math.pow(r, 2) + Math.pow(o, 2))
				}
			}(n);
			let i = Number.POSITIVE_INFINITY,
				s = [];
			if (!Rn(t, e.chartArea, e._minPadding)) return s;
			return Lr(e, n, t, (function(n, l, c) {
				if (a && !n.inRange(t.x, t.y, r)) return;
				const u = n.getCenterPoint(r);
				if (!Rn(u, e.chartArea, e._minPadding) && !n.inRange(t.x, t.y, r)) return;
				const d = o(t, u);
				d < i ? (s = [{
					element: n,
					datasetIndex: l,
					index: c
				}], i = d) : d === i && s.push({
					element: n,
					datasetIndex: l,
					index: c
				})
			})), s
		}

		function Br(e, t, n, a) {
			const r = Dr(t, e),
				o = [],
				i = n.axis,
				s = "x" === i ? "inXRange" : "inYRange";
			let l = !1;
			return function(e, t) {
				const n = e.getSortedVisibleDatasetMetas();
				let a, r, o;
				for (let e = 0, i = n.length; e < i; ++e) {
					({
						index: a,
						data: r
					} = n[e]);
					for (let e = 0, n = r.length; e < n; ++e) o = r[e], o.skip || t(o, a, e)
				}
			}(e, ((e, t, n) => {
				e[s](r[i], a) && o.push({
					element: e,
					datasetIndex: t,
					index: n
				}), e.inRange(r.x, r.y, a) && (l = !0)
			})), n.intersect && !l ? [] : o
		}
		var jr = {
			modes: {
				index(e, t, n, a) {
					const r = Dr(t, e),
						o = n.axis || "x",
						i = n.intersect ? zr(e, r, o, a) : Vr(e, r, o, !1, a),
						s = [];
					return i.length ? (e.getSortedVisibleDatasetMetas().forEach((e => {
						const t = i[0].index,
							n = e.data[t];
						n && !n.skip && s.push({
							element: n,
							datasetIndex: e.index,
							index: t
						})
					})), s) : []
				},
				dataset(e, t, n, a) {
					const r = Dr(t, e),
						o = n.axis || "xy";
					let i = n.intersect ? zr(e, r, o, a) : Vr(e, r, o, !1, a);
					if (i.length > 0) {
						const t = i[0].datasetIndex,
							n = e.getDatasetMeta(t).data;
						i = [];
						for (let e = 0; e < n.length; ++e) i.push({
							element: n[e],
							datasetIndex: t,
							index: e
						})
					}
					return i
				},
				point: (e, t, n, a) => zr(e, Dr(t, e), n.axis || "xy", a),
				nearest: (e, t, n, a) => Vr(e, Dr(t, e), n.axis || "xy", n.intersect, a),
				x: (e, t, n, a) => (n.axis = "x", Br(e, t, n, a)),
				y: (e, t, n, a) => (n.axis = "y", Br(e, t, n, a))
			}
		};
		const Hr = ["left", "top", "right", "bottom"];

		function qr(e, t) {
			return e.filter((e => e.pos === t))
		}

		function Wr(e, t) {
			return e.filter((e => -1 === Hr.indexOf(e.pos) && e.box.axis === t))
		}

		function Yr(e, t) {
			return e.sort(((e, n) => {
				const a = t ? n : e,
					r = t ? e : n;
				return a.weight === r.weight ? a.index - r.index : a.weight - r.weight
			}))
		}

		function Ur(e, t) {
			const n = function(e) {
					const t = {};
					for (const n of e) {
						const {
							stack: e,
							pos: a,
							stackWeight: r
						} = n;
						if (!e || !Hr.includes(a)) continue;
						const o = t[e] || (t[e] = {
							count: 0,
							placed: 0,
							weight: 0,
							size: 0
						});
						o.count++, o.weight += r
					}
					return t
				}(e),
				{
					vBoxMaxWidth: a,
					hBoxMaxHeight: r
				} = t;
			let o, i, s;
			for (o = 0, i = e.length; o < i; ++o) {
				s = e[o];
				const {
					fullSize: i
				} = s.box, l = n[s.stack], c = l && s.stackWeight / l.weight;
				s.horizontal ? (s.width = c ? c * a : i && t.availableWidth, s.height = r) : (s.width = a, s.height = c ? c * r : i && t.availableHeight)
			}
			return n
		}

		function Zr(e, t, n, a) {
			return Math.max(e[n], t[n]) + Math.max(e[a], t[a])
		}

		function Qr(e, t) {
			e.top = Math.max(e.top, t.top), e.left = Math.max(e.left, t.left), e.bottom = Math.max(e.bottom, t.bottom), e.right = Math.max(e.right, t.right)
		}

		function Gr(e, t, n, a) {
			const {
				pos: r,
				box: o
			} = n, i = e.maxPadding;
			if (!Xe(r)) {
				n.size && (e[r] -= n.size);
				const t = a[n.stack] || {
					size: 0,
					count: 1
				};
				t.size = Math.max(t.size, n.horizontal ? o.height : o.width), n.size = t.size / t.count, e[r] += n.size
			}
			o.getPadding && Qr(i, o.getPadding());
			const s = Math.max(0, t.outerWidth - Zr(i, e, "left", "right")),
				l = Math.max(0, t.outerHeight - Zr(i, e, "top", "bottom")),
				c = s !== e.w,
				u = l !== e.h;
			return e.w = s, e.h = l, n.horizontal ? {
				same: c,
				other: u
			} : {
				same: u,
				other: c
			}
		}

		function Xr(e, t) {
			const n = t.maxPadding;

			function a(e) {
				const a = {
					left: 0,
					top: 0,
					right: 0,
					bottom: 0
				};
				return e.forEach((e => {
					a[e] = Math.max(t[e], n[e])
				})), a
			}
			return a(e ? ["left", "right"] : ["top", "bottom"])
		}

		function Kr(e, t, n, a) {
			const r = [];
			let o, i, s, l, c, u;
			for (o = 0, i = e.length, c = 0; o < i; ++o) {
				s = e[o], l = s.box, l.update(s.width || t.w, s.height || t.h, Xr(s.horizontal, t));
				const {
					same: i,
					other: d
				} = Gr(t, n, s, a);
				c |= i && r.length, u = u || d, l.fullSize || r.push(s)
			}
			return c && Kr(r, t, n, a) || u
		}

		function Jr(e, t, n, a, r) {
			e.top = n, e.left = t, e.right = t + a, e.bottom = n + r, e.width = a, e.height = r
		}

		function eo(e, t, n, a) {
			const r = n.padding;
			let {
				x: o,
				y: i
			} = t;
			for (const s of e) {
				const e = s.box,
					l = a[s.stack] || {
						count: 1,
						placed: 0,
						weight: 1
					},
					c = s.stackWeight / l.weight || 1;
				if (s.horizontal) {
					const a = t.w * c,
						o = l.size || e.height;
					mt(l.start) && (i = l.start), e.fullSize ? Jr(e, r.left, i, n.outerWidth - r.right - r.left, o) : Jr(e, t.left + l.placed, i, a, o), l.start = i, l.placed += a, i = e.bottom
				} else {
					const a = t.h * c,
						i = l.size || e.width;
					mt(l.start) && (o = l.start), e.fullSize ? Jr(e, o, r.top, i, n.outerHeight - r.bottom - r.top) : Jr(e, o, t.top + l.placed, i, a), l.start = o, l.placed += a, o = e.right
				}
			}
			t.x = o, t.y = i
		}
		Mn.set("layout", {
			padding: {
				top: 0,
				right: 0,
				bottom: 0,
				left: 0
			}
		});
		var to = {
			addBox(e, t) {
				e.boxes || (e.boxes = []), t.fullSize = t.fullSize || !1, t.position = t.position || "top", t.weight = t.weight || 0, t._layers = t._layers || function() {
					return [{
						z: 0,
						draw(e) {
							t.draw(e)
						}
					}]
				}, e.boxes.push(t)
			},
			removeBox(e, t) {
				const n = e.boxes ? e.boxes.indexOf(t) : -1; - 1 !== n && e.boxes.splice(n, 1)
			},
			configure(e, t, n) {
				t.fullSize = n.fullSize, t.position = n.position, t.weight = n.weight
			},
			update(e, t, n, a) {
				if (!e) return;
				const r = Gn(e.options.layout.padding),
					o = Math.max(t - r.width, 0),
					i = Math.max(n - r.height, 0),
					s = function(e) {
						const t = function(e) {
								const t = [];
								let n, a, r, o, i, s;
								for (n = 0, a = (e || []).length; n < a; ++n) r = e[n], ({
									position: o,
									options: {
										stack: i,
										stackWeight: s = 1
									}
								} = r), t.push({
									index: n,
									box: r,
									pos: o,
									horizontal: r.isHorizontal(),
									weight: r.weight,
									stack: i && o + i,
									stackWeight: s
								});
								return t
							}(e),
							n = Yr(t.filter((e => e.box.fullSize)), !0),
							a = Yr(qr(t, "left"), !0),
							r = Yr(qr(t, "right")),
							o = Yr(qr(t, "top"), !0),
							i = Yr(qr(t, "bottom")),
							s = Wr(t, "x"),
							l = Wr(t, "y");
						return {
							fullSize: n,
							leftAndTop: a.concat(o),
							rightAndBottom: r.concat(l).concat(i).concat(s),
							chartArea: qr(t, "chartArea"),
							vertical: a.concat(r).concat(l),
							horizontal: o.concat(i).concat(s)
						}
					}(e.boxes),
					l = s.vertical,
					c = s.horizontal;
				at(e.boxes, (e => {
					"function" == typeof e.beforeLayout && e.beforeLayout()
				}));
				const u = l.reduce(((e, t) => t.box.options && !1 === t.box.options.display ? e : e + 1), 0) || 1,
					d = Object.freeze({
						outerWidth: t,
						outerHeight: n,
						padding: r,
						availableWidth: o,
						availableHeight: i,
						vBoxMaxWidth: o / 2 / u,
						hBoxMaxHeight: i / 2
					}),
					h = Object.assign({}, r);
				Qr(h, Gn(a));
				const f = Object.assign({
						maxPadding: h,
						w: o,
						h: i,
						x: r.left,
						y: r.top
					}, r),
					p = Ur(l.concat(c), d);
				Kr(s.fullSize, f, d, p), Kr(l, f, d, p), Kr(c, f, d, p) && Kr(l, f, d, p),
					function(e) {
						const t = e.maxPadding;

						function n(n) {
							const a = Math.max(t[n] - e[n], 0);
							return e[n] += a, a
						}
						e.y += n("top"), e.x += n("left"), n("right"), n("bottom")
					}(f), eo(s.leftAndTop, f, d, p), f.x += f.w, f.y += f.h, eo(s.rightAndBottom, f, d, p), e.chartArea = {
						left: f.left,
						top: f.top,
						right: f.left + f.w,
						bottom: f.top + f.h,
						height: f.h,
						width: f.w
					}, at(s.chartArea, (t => {
						const n = t.box;
						Object.assign(n, e.chartArea), n.update(f.w, f.h)
					}))
			}
		};
		class no {
			acquireContext(e, t) {}
			releaseContext(e) {
				return !1
			}
			addEventListener(e, t, n) {}
			removeEventListener(e, t, n) {}
			getDevicePixelRatio() {
				return 1
			}
			getMaximumSize(e, t, n, a) {
				return t = Math.max(0, t || e.width), n = n || e.height, {
					width: t,
					height: Math.max(0, a ? Math.floor(t / a) : n)
				}
			}
			isAttached(e) {
				return !0
			}
		}
		class ao extends no {
			acquireContext(e) {
				return e && e.getContext && e.getContext("2d") || null
			}
		}
		const ro = "$chartjs",
			oo = {
				touchstart: "mousedown",
				touchmove: "mousemove",
				touchend: "mouseup",
				pointerenter: "mouseenter",
				pointerdown: "mousedown",
				pointermove: "mousemove",
				pointerup: "mouseup",
				pointerleave: "mouseout",
				pointerout: "mouseout"
			},
			io = e => null === e || "" === e;
		const so = !!Da && {
			passive: !0
		};

		function lo(e, t, n) {
			e.canvas.removeEventListener(t, n, so)
		}

		function co(e, t, n) {
			const a = e.canvas,
				r = a && Ea(a) || a,
				o = new MutationObserver((e => {
					const t = Ea(r);
					e.forEach((e => {
						for (let a = 0; a < e.addedNodes.length; a++) {
							const o = e.addedNodes[a];
							o !== r && o !== t || n(e.target)
						}
					}))
				}));
			return o.observe(document, {
				childList: !0,
				subtree: !0
			}), o
		}

		function uo(e, t, n) {
			const a = e.canvas,
				r = a && Ea(a);
			if (!r) return;
			const o = new MutationObserver((e => {
				e.forEach((e => {
					for (let t = 0; t < e.removedNodes.length; t++)
						if (e.removedNodes[t] === a) {
							n();
							break
						}
				}))
			}));
			return o.observe(r, {
				childList: !0
			}), o
		}
		const ho = new Map;
		let fo = 0;

		function po() {
			const e = window.devicePixelRatio;
			e !== fo && (fo = e, ho.forEach(((t, n) => {
				n.currentDevicePixelRatio !== e && t()
			})))
		}

		function mo(e, t, n) {
			const a = e.canvas,
				r = a && Ea(a);
			if (!r) return;
			const o = qe(((e, t) => {
					const a = r.clientWidth;
					n(e, t), a < r.clientWidth && n()
				}), window),
				i = new ResizeObserver((e => {
					const t = e[0],
						n = t.contentRect.width,
						a = t.contentRect.height;
					0 === n && 0 === a || o(n, a)
				}));
			return i.observe(r),
				function(e, t) {
					ho.size || window.addEventListener("resize", po), ho.set(e, t)
				}(e, o), i
		}

		function go(e, t, n) {
			n && n.disconnect(), "resize" === t && function(e) {
				ho.delete(e), ho.size || window.removeEventListener("resize", po)
			}(e)
		}

		function yo(e, t, n) {
			const a = e.canvas,
				r = qe((t => {
					null !== e.ctx && n(function(e, t) {
						const n = oo[e.type] || e.type,
							{
								x: a,
								y: r
							} = Aa(e, t);
						return {
							type: n,
							chart: t,
							native: e,
							x: void 0 !== a ? a : null,
							y: void 0 !== r ? r : null
						}
					}(t, e))
				}), e, (e => {
					const t = e[0];
					return [t, t.offsetX, t.offsetY]
				}));
			return function(e, t, n) {
				e.addEventListener(t, n, so)
			}(a, t, r), r
		}
		class bo extends no {
			acquireContext(e, t) {
				const n = e && e.getContext && e.getContext("2d");
				return n && n.canvas === e ? (function(e, t) {
					const n = e.style,
						a = e.getAttribute("height"),
						r = e.getAttribute("width");
					if (e[ro] = {
							initial: {
								height: a,
								width: r,
								style: {
									display: n.display,
									height: n.height,
									width: n.width
								}
							}
						}, n.display = n.display || "block", n.boxSizing = n.boxSizing || "border-box", io(r)) {
						const t = Fa(e, "width");
						void 0 !== t && (e.width = t)
					}
					if (io(a))
						if ("" === e.style.height) e.height = e.width / (t || 2);
						else {
							const t = Fa(e, "height");
							void 0 !== t && (e.height = t)
						}
				}(e, t), n) : null
			}
			releaseContext(e) {
				const t = e.canvas;
				if (!t[ro]) return !1;
				const n = t[ro].initial;
				["height", "width"].forEach((e => {
					const a = n[e];
					Qe(a) ? t.removeAttribute(e) : t.setAttribute(e, a)
				}));
				const a = n.style || {};
				return Object.keys(a).forEach((e => {
					t.style[e] = a[e]
				})), t.width = t.width, delete t[ro], !0
			}
			addEventListener(e, t, n) {
				this.removeEventListener(e, t);
				const a = e.$proxies || (e.$proxies = {}),
					r = {
						attach: co,
						detach: uo,
						resize: mo
					} [t] || yo;
				a[t] = r(e, t, n)
			}
			removeEventListener(e, t) {
				const n = e.$proxies || (e.$proxies = {}),
					a = n[t];
				if (!a) return;
				({
					attach: go,
					detach: go,
					resize: go
				} [t] || lo)(e, t, a), n[t] = void 0
			}
			getDevicePixelRatio() {
				return window.devicePixelRatio
			}
			getMaximumSize(e, t, n, a) {
				return Oa(e, t, n, a)
			}
			isAttached(e) {
				const t = Ea(e);
				return !(!t || !t.isConnected)
			}
		}
		class vo {
			constructor() {
				this.x = void 0, this.y = void 0, this.active = !1, this.options = void 0, this.$animations = void 0
			}
			tooltipPosition(e) {
				const {
					x: t,
					y: n
				} = this.getProps(["x", "y"], e);
				return {
					x: t,
					y: n
				}
			}
			hasValue() {
				return Ct(this.x) && Ct(this.y)
			}
			getProps(e, t) {
				const n = this,
					a = this.$animations;
				if (!t || !a) return n;
				const r = {};
				return e.forEach((e => {
					r[e] = a[e] && a[e].active() ? a[e]._to : n[e]
				})), r
			}
		}
		vo.defaults = {}, vo.defaultRoutes = void 0;
		const xo = {
			values: e => Ge(e) ? e : "" + e,
			numeric(e, t, n) {
				if (0 === e) return "0";
				const a = this.chart.options.locale;
				let r, o = e;
				if (n.length > 1) {
					const t = Math.max(Math.abs(n[0].value), Math.abs(n[n.length - 1].value));
					(t < 1e-4 || t > 1e15) && (r = "scientific"), o = function(e, t) {
						let n = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
						Math.abs(n) >= 1 && e !== Math.floor(e) && (n = e - Math.floor(e));
						return n
					}(e, n)
				}
				const i = Pt(Math.abs(o)),
					s = Math.max(Math.min(-1 * Math.floor(i), 20), 0),
					l = {
						notation: r,
						minimumFractionDigits: s,
						maximumFractionDigits: s
					};
				return Object.assign(l, this.options.ticks.format), ja(e, a, l)
			},
			logarithmic(e, t, n) {
				if (0 === e) return "0";
				const a = e / Math.pow(10, Math.floor(Pt(e)));
				return 1 === a || 2 === a || 5 === a ? xo.numeric.call(this, e, t, n) : ""
			}
		};
		var wo = {
			formatters: xo
		};

		function To(e, t) {
			const n = e.options.ticks,
				a = n.maxTicksLimit || function(e) {
					const t = e.options.offset,
						n = e._tickSize(),
						a = e._length / n + (t ? 0 : 1),
						r = e._maxLength / n;
					return Math.floor(Math.min(a, r))
				}(e),
				r = n.major.enabled ? function(e) {
					const t = [];
					let n, a;
					for (n = 0, a = e.length; n < a; n++) e[n].major && t.push(n);
					return t
				}(t) : [],
				o = r.length,
				i = r[0],
				s = r[o - 1],
				l = [];
			if (o > a) return function(e, t, n, a) {
				let r, o = 0,
					i = n[0];
				for (a = Math.ceil(a), r = 0; r < e.length; r++) r === i && (t.push(e[r]), o++, i = n[o * a])
			}(t, l, r, o / a), l;
			const c = function(e, t, n) {
				const a = function(e) {
						const t = e.length;
						let n, a;
						if (t < 2) return !1;
						for (a = e[0], n = 1; n < t; ++n)
							if (e[n] - e[n - 1] !== a) return !1;
						return a
					}(e),
					r = t.length / n;
				if (!a) return Math.max(r, 1);
				const o = function(e) {
					const t = [],
						n = Math.sqrt(e);
					let a;
					for (a = 1; a < n; a++) e % a == 0 && (t.push(a), t.push(e / a));
					return n === (0 | n) && t.push(n), t.sort(((e, t) => e - t)).pop(), t
				}(a);
				for (let e = 0, t = o.length - 1; e < t; e++) {
					const t = o[e];
					if (t > r) return t
				}
				return Math.max(r, 1)
			}(r, t, a);
			if (o > 0) {
				let e, n;
				const a = o > 1 ? Math.round((s - i) / (o - 1)) : null;
				for (_o(t, l, c, Qe(a) ? 0 : i - a, i), e = 0, n = o - 1; e < n; e++) _o(t, l, c, r[e], r[e + 1]);
				return _o(t, l, c, s, Qe(a) ? t.length : s + a), l
			}
			return _o(t, l, c), l
		}

		function _o(e, t, n, a, r) {
			const o = et(a, 0),
				i = Math.min(et(r, e.length), e.length);
			let s, l, c, u = 0;
			for (n = Math.ceil(n), r && (s = r - a, n = s / Math.floor(s / n)), c = o; c < 0;) u++, c = Math.round(o + u * n);
			for (l = Math.max(o, 0); l < i; l++) l === c && (t.push(e[l]), u++, c = Math.round(o + u * n))
		}
		Mn.set("scale", {
			display: !0,
			offset: !1,
			reverse: !1,
			beginAtZero: !1,
			bounds: "ticks",
			grace: 0,
			grid: {
				display: !0,
				lineWidth: 1,
				drawBorder: !0,
				drawOnChartArea: !0,
				drawTicks: !0,
				tickLength: 8,
				tickWidth: (e, t) => t.lineWidth,
				tickColor: (e, t) => t.color,
				offset: !1,
				borderDash: [],
				borderDashOffset: 0,
				borderWidth: 1
			},
			title: {
				display: !1,
				text: "",
				padding: {
					top: 4,
					bottom: 4
				}
			},
			ticks: {
				minRotation: 0,
				maxRotation: 50,
				mirror: !1,
				textStrokeWidth: 0,
				textStrokeColor: "",
				padding: 3,
				display: !0,
				autoSkip: !0,
				autoSkipPadding: 3,
				labelOffset: 0,
				callback: wo.formatters.values,
				minor: {},
				major: {},
				align: "center",
				crossAlign: "near",
				showLabelBackdrop: !1,
				backdropColor: "rgba(255, 255, 255, 0.75)",
				backdropPadding: 2
			}
		}), Mn.route("scale.ticks", "color", "", "color"), Mn.route("scale.grid", "color", "", "borderColor"), Mn.route("scale.grid", "borderColor", "", "borderColor"), Mn.route("scale.title", "color", "", "color"), Mn.describe("scale", {
			_fallback: !1,
			_scriptable: e => !e.startsWith("before") && !e.startsWith("after") && "callback" !== e && "parser" !== e,
			_indexable: e => "borderDash" !== e && "tickBorderDash" !== e
		}), Mn.describe("scales", {
			_fallback: "scale"
		}), Mn.describe("scale.ticks", {
			_scriptable: e => "backdropPadding" !== e && "callback" !== e,
			_indexable: e => "backdropPadding" !== e
		});
		const ko = (e, t, n) => "top" === t || "left" === t ? e[t] + n : e[t] - n;

		function Po(e, t) {
			const n = [],
				a = e.length / t,
				r = e.length;
			let o = 0;
			for (; o < r; o += a) n.push(e[Math.floor(o)]);
			return n
		}

		function Eo(e, t, n) {
			const a = e.ticks.length,
				r = Math.min(t, a - 1),
				o = e._startPixel,
				i = e._endPixel,
				s = 1e-6;
			let l, c = e.getPixelForTick(r);
			if (!(n && (l = 1 === a ? Math.max(c - o, i - c) : 0 === t ? (e.getPixelForTick(1) - c) / 2 : (c - e.getPixelForTick(r - 1)) / 2, c += r < t ? l : -l, c < o - s || c > i + s))) return c
		}

		function So(e) {
			return e.drawTicks ? e.tickLength : 0
		}

		function Co(e, t) {
			if (!e.display) return 0;
			const n = Xn(e.font, t),
				a = Gn(e.padding);
			return (Ge(e.text) ? e.text.length : 1) * n.lineHeight + a.height
		}

		function Mo(e, t, n) {
			let a = We(e);
			return (n && "right" !== t || !n && "right" === t) && (a = (e => "left" === e ? "right" : "right" === e ? "left" : e)(a)), a
		}
		class No extends vo {
			constructor(e) {
				super(), this.id = e.id, this.type = e.type, this.options = void 0, this.ctx = e.ctx, this.chart = e.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = {
					left: 0,
					right: 0,
					top: 0,
					bottom: 0
				}, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = !1, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = !1, this.$context = void 0
			}
			init(e) {
				const t = this;
				t.options = e.setContext(t.getContext()), t.axis = e.axis, t._userMin = t.parse(e.min), t._userMax = t.parse(e.max), t._suggestedMin = t.parse(e.suggestedMin), t._suggestedMax = t.parse(e.suggestedMax)
			}
			parse(e, t) {
				return e
			}
			getUserBounds() {
				let {
					_userMin: e,
					_userMax: t,
					_suggestedMin: n,
					_suggestedMax: a
				} = this;
				return e = Je(e, Number.POSITIVE_INFINITY), t = Je(t, Number.NEGATIVE_INFINITY), n = Je(n, Number.POSITIVE_INFINITY), a = Je(a, Number.NEGATIVE_INFINITY), {
					min: Je(e, n),
					max: Je(t, a),
					minDefined: Ke(e),
					maxDefined: Ke(t)
				}
			}
			getMinMax(e) {
				const t = this;
				let n, {
					min: a,
					max: r,
					minDefined: o,
					maxDefined: i
				} = t.getUserBounds();
				if (o && i) return {
					min: a,
					max: r
				};
				const s = t.getMatchingVisibleMetas();
				for (let l = 0, c = s.length; l < c; ++l) n = s[l].controller.getMinMax(t, e), o || (a = Math.min(a, n.min)), i || (r = Math.max(r, n.max));
				return {
					min: Je(a, Je(r, a)),
					max: Je(r, Je(a, r))
				}
			}
			getPadding() {
				const e = this;
				return {
					left: e.paddingLeft || 0,
					top: e.paddingTop || 0,
					right: e.paddingRight || 0,
					bottom: e.paddingBottom || 0
				}
			}
			getTicks() {
				return this.ticks
			}
			getLabels() {
				const e = this.chart.data;
				return this.options.labels || (this.isHorizontal() ? e.xLabels : e.yLabels) || e.labels || []
			}
			beforeLayout() {
				this._cache = {}, this._dataLimitsCached = !1
			}
			beforeUpdate() {
				nt(this.options.beforeUpdate, [this])
			}
			update(e, t, n) {
				const a = this,
					r = a.options.ticks,
					o = r.sampleSize;
				a.beforeUpdate(), a.maxWidth = e, a.maxHeight = t, a._margins = n = Object.assign({
					left: 0,
					right: 0,
					top: 0,
					bottom: 0
				}, n), a.ticks = null, a._labelSizes = null, a._gridLineItems = null, a._labelItems = null, a.beforeSetDimensions(), a.setDimensions(), a.afterSetDimensions(), a._maxLength = a.isHorizontal() ? a.width + n.left + n.right : a.height + n.top + n.bottom, a._dataLimitsCached || (a.beforeDataLimits(), a.determineDataLimits(), a.afterDataLimits(), a._range = function(e, t) {
					const {
						min: n,
						max: a
					} = e;
					return {
						min: n - Math.abs(tt(t, n)),
						max: a + tt(t, a)
					}
				}(a, a.options.grace), a._dataLimitsCached = !0), a.beforeBuildTicks(), a.ticks = a.buildTicks() || [], a.afterBuildTicks();
				const i = o < a.ticks.length;
				a._convertTicksToLabels(i ? Po(a.ticks, o) : a.ticks), a.configure(), a.beforeCalculateLabelRotation(), a.calculateLabelRotation(), a.afterCalculateLabelRotation(), r.display && (r.autoSkip || "auto" === r.source) && (a.ticks = To(a, a.ticks), a._labelSizes = null), i && a._convertTicksToLabels(a.ticks), a.beforeFit(), a.fit(), a.afterFit(), a.afterUpdate()
			}
			configure() {
				const e = this;
				let t, n, a = e.options.reverse;
				e.isHorizontal() ? (t = e.left, n = e.right) : (t = e.top, n = e.bottom, a = !a), e._startPixel = t, e._endPixel = n, e._reversePixels = a, e._length = n - t, e._alignToPixels = e.options.alignToPixels
			}
			afterUpdate() {
				nt(this.options.afterUpdate, [this])
			}
			beforeSetDimensions() {
				nt(this.options.beforeSetDimensions, [this])
			}
			setDimensions() {
				const e = this;
				e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0
			}
			afterSetDimensions() {
				nt(this.options.afterSetDimensions, [this])
			}
			_callHooks(e) {
				const t = this;
				t.chart.notifyPlugins(e, t.getContext()), nt(t.options[e], [t])
			}
			beforeDataLimits() {
				this._callHooks("beforeDataLimits")
			}
			determineDataLimits() {}
			afterDataLimits() {
				this._callHooks("afterDataLimits")
			}
			beforeBuildTicks() {
				this._callHooks("beforeBuildTicks")
			}
			buildTicks() {
				return []
			}
			afterBuildTicks() {
				this._callHooks("afterBuildTicks")
			}
			beforeTickToLabelConversion() {
				nt(this.options.beforeTickToLabelConversion, [this])
			}
			generateTickLabels(e) {
				const t = this,
					n = t.options.ticks;
				let a, r, o;
				for (a = 0, r = e.length; a < r; a++) o = e[a], o.label = nt(n.callback, [o.value, a, e], t)
			}
			afterTickToLabelConversion() {
				nt(this.options.afterTickToLabelConversion, [this])
			}
			beforeCalculateLabelRotation() {
				nt(this.options.beforeCalculateLabelRotation, [this])
			}
			calculateLabelRotation() {
				const e = this,
					t = e.options,
					n = t.ticks,
					a = e.ticks.length,
					r = n.minRotation || 0,
					o = n.maxRotation;
				let i, s, l, c = r;
				if (!e._isVisible() || !n.display || r >= o || a <= 1 || !e.isHorizontal()) return void(e.labelRotation = r);
				const u = e._getLabelSizes(),
					d = u.widest.width,
					h = u.highest.height,
					f = Lt(e.chart.width - d, 0, e.maxWidth);
				i = t.offset ? e.maxWidth / a : f / (a - 1), d + 6 > i && (i = f / (a - (t.offset ? .5 : 1)), s = e.maxHeight - So(t.grid) - n.padding - Co(t.title, e.chart.options.font), l = Math.sqrt(d * d + h * h), c = At(Math.min(Math.asin(Lt((u.highest.height + 6) / i, -1, 1)), Math.asin(Lt(s / l, -1, 1)) - Math.asin(Lt(h / l, -1, 1)))), c = Math.max(r, Math.min(o, c))), e.labelRotation = c
			}
			afterCalculateLabelRotation() {
				nt(this.options.afterCalculateLabelRotation, [this])
			}
			beforeFit() {
				nt(this.options.beforeFit, [this])
			}
			fit() {
				const e = this,
					t = {
						width: 0,
						height: 0
					},
					{
						chart: n,
						options: {
							ticks: a,
							title: r,
							grid: o
						}
					} = e,
					i = e._isVisible(),
					s = e.isHorizontal();
				if (i) {
					const i = Co(r, n.options.font);
					if (s ? (t.width = e.maxWidth, t.height = So(o) + i) : (t.height = e.maxHeight, t.width = So(o) + i), a.display && e.ticks.length) {
						const {
							first: n,
							last: r,
							widest: o,
							highest: i
						} = e._getLabelSizes(), l = 2 * a.padding, c = $t(e.labelRotation), u = Math.cos(c), d = Math.sin(c);
						if (s) {
							const n = a.mirror ? 0 : d * o.width + u * i.height;
							t.height = Math.min(e.maxHeight, t.height + n + l)
						} else {
							const n = a.mirror ? 0 : u * o.width + d * i.height;
							t.width = Math.min(e.maxWidth, t.width + n + l)
						}
						e._calculatePadding(n, r, d, u)
					}
				}
				e._handleMargins(), s ? (e.width = e._length = n.width - e._margins.left - e._margins.right, e.height = t.height) : (e.width = t.width, e.height = e._length = n.height - e._margins.top - e._margins.bottom)
			}
			_calculatePadding(e, t, n, a) {
				const r = this,
					{
						ticks: {
							align: o,
							padding: i
						},
						position: s
					} = r.options,
					l = 0 !== r.labelRotation,
					c = "top" !== s && "x" === r.axis;
				if (r.isHorizontal()) {
					const s = r.getPixelForTick(0) - r.left,
						u = r.right - r.getPixelForTick(r.ticks.length - 1);
					let d = 0,
						h = 0;
					l ? c ? (d = a * e.width, h = n * t.height) : (d = n * e.height, h = a * t.width) : "start" === o ? h = t.width : "end" === o ? d = e.width : (d = e.width / 2, h = t.width / 2), r.paddingLeft = Math.max((d - s + i) * r.width / (r.width - s), 0), r.paddingRight = Math.max((h - u + i) * r.width / (r.width - u), 0)
				} else {
					let n = t.height / 2,
						a = e.height / 2;
					"start" === o ? (n = 0, a = e.height) : "end" === o && (n = t.height, a = 0), r.paddingTop = n + i, r.paddingBottom = a + i
				}
			}
			_handleMargins() {
				const e = this;
				e._margins && (e._margins.left = Math.max(e.paddingLeft, e._margins.left), e._margins.top = Math.max(e.paddingTop, e._margins.top), e._margins.right = Math.max(e.paddingRight, e._margins.right), e._margins.bottom = Math.max(e.paddingBottom, e._margins.bottom))
			}
			afterFit() {
				nt(this.options.afterFit, [this])
			}
			isHorizontal() {
				const {
					axis: e,
					position: t
				} = this.options;
				return "top" === t || "bottom" === t || "x" === e
			}
			isFullSize() {
				return this.options.fullSize
			}
			_convertTicksToLabels(e) {
				const t = this;
				let n, a;
				for (t.beforeTickToLabelConversion(), t.generateTickLabels(e), n = 0, a = e.length; n < a; n++) Qe(e[n].label) && (e.splice(n, 1), a--, n--);
				t.afterTickToLabelConversion()
			}
			_getLabelSizes() {
				const e = this;
				let t = e._labelSizes;
				if (!t) {
					const n = e.options.ticks.sampleSize;
					let a = e.ticks;
					n < a.length && (a = Po(a, n)), e._labelSizes = t = e._computeLabelSizes(a, a.length)
				}
				return t
			}
			_computeLabelSizes(e, t) {
				const {
					ctx: n,
					_longestTextCache: a
				} = this, r = [], o = [];
				let i, s, l, c, u, d, h, f, p, m, g, y = 0,
					b = 0;
				for (i = 0; i < t; ++i) {
					if (c = e[i].label, u = this._resolveTickFontOptions(i), n.font = d = u.string, h = a[d] = a[d] || {
							data: {},
							gc: []
						}, f = u.lineHeight, p = m = 0, Qe(c) || Ge(c)) {
						if (Ge(c))
							for (s = 0, l = c.length; s < l; ++s) g = c[s], Qe(g) || Ge(g) || (p = Nn(n, h.data, h.gc, p, g), m += f)
					} else p = Nn(n, h.data, h.gc, p, c), m = f;
					r.push(p), o.push(m), y = Math.max(p, y), b = Math.max(m, b)
				}! function(e, t) {
					at(e, (e => {
						const n = e.gc,
							a = n.length / 2;
						let r;
						if (a > t) {
							for (r = 0; r < a; ++r) delete e.data[n[r]];
							n.splice(0, a)
						}
					}))
				}(a, t);
				const v = r.indexOf(y),
					x = o.indexOf(b),
					w = e => ({
						width: r[e] || 0,
						height: o[e] || 0
					});
				return {
					first: w(0),
					last: w(t - 1),
					widest: w(v),
					highest: w(x),
					widths: r,
					heights: o
				}
			}
			getLabelForValue(e) {
				return e
			}
			getPixelForValue(e, t) {
				return NaN
			}
			getValueForPixel(e) {}
			getPixelForTick(e) {
				const t = this.ticks;
				return e < 0 || e > t.length - 1 ? null : this.getPixelForValue(t[e].value)
			}
			getPixelForDecimal(e) {
				const t = this;
				t._reversePixels && (e = 1 - e);
				const n = t._startPixel + e * t._length;
				return Lt(t._alignToPixels ? An(t.chart, n, 0) : n, -32768, 32767)
			}
			getDecimalForPixel(e) {
				const t = (e - this._startPixel) / this._length;
				return this._reversePixels ? 1 - t : t
			}
			getBasePixel() {
				return this.getPixelForValue(this.getBaseValue())
			}
			getBaseValue() {
				const {
					min: e,
					max: t
				} = this;
				return e < 0 && t < 0 ? t : e > 0 && t > 0 ? e : 0
			}
			getContext(e) {
				const t = this,
					n = t.ticks || [];
				if (e >= 0 && e < n.length) {
					const a = n[e];
					return a.$context || (a.$context = function(e, t, n) {
						return Object.assign(Object.create(e), {
							tick: n,
							index: t,
							type: "tick"
						})
					}(t.getContext(), e, a))
				}
				return t.$context || (t.$context = (a = t.chart.getContext(), r = t, Object.assign(Object.create(a), {
					scale: r,
					type: "scale"
				})));
				var a, r
			}
			_tickSize() {
				const e = this,
					t = e.options.ticks,
					n = $t(e.labelRotation),
					a = Math.abs(Math.cos(n)),
					r = Math.abs(Math.sin(n)),
					o = e._getLabelSizes(),
					i = t.autoSkipPadding || 0,
					s = o ? o.widest.width + i : 0,
					l = o ? o.highest.height + i : 0;
				return e.isHorizontal() ? l * a > s * r ? s / a : l / r : l * r < s * a ? l / a : s / r
			}
			_isVisible() {
				const e = this.options.display;
				return "auto" !== e ? !!e : this.getMatchingVisibleMetas().length > 0
			}
			_computeGridLineItems(e) {
				const t = this,
					n = t.axis,
					a = t.chart,
					r = t.options,
					{
						grid: o,
						position: i
					} = r,
					s = o.offset,
					l = t.isHorizontal(),
					c = t.ticks.length + (s ? 1 : 0),
					u = So(o),
					d = [],
					h = o.setContext(t.getContext()),
					f = h.drawBorder ? h.borderWidth : 0,
					p = f / 2,
					m = function(e) {
						return An(a, e, f)
					};
				let g, y, b, v, x, w, T, _, k, P, E, S;
				if ("top" === i) g = m(t.bottom), w = t.bottom - u, _ = g - p, P = m(e.top) + p, S = e.bottom;
				else if ("bottom" === i) g = m(t.top), P = e.top, S = m(e.bottom) - p, w = g + p, _ = t.top + u;
				else if ("left" === i) g = m(t.right), x = t.right - u, T = g - p, k = m(e.left) + p, E = e.right;
				else if ("right" === i) g = m(t.left), k = e.left, E = m(e.right) - p, x = g + p, T = t.left + u;
				else if ("x" === n) {
					if ("center" === i) g = m((e.top + e.bottom) / 2 + .5);
					else if (Xe(i)) {
						const e = Object.keys(i)[0],
							n = i[e];
						g = m(t.chart.scales[e].getPixelForValue(n))
					}
					P = e.top, S = e.bottom, w = g + p, _ = w + u
				} else if ("y" === n) {
					if ("center" === i) g = m((e.left + e.right) / 2);
					else if (Xe(i)) {
						const e = Object.keys(i)[0],
							n = i[e];
						g = m(t.chart.scales[e].getPixelForValue(n))
					}
					x = g - p, T = x - u, k = e.left, E = e.right
				}
				const C = et(r.ticks.maxTicksLimit, c),
					M = Math.max(1, Math.ceil(c / C));
				for (y = 0; y < c; y += M) {
					const e = o.setContext(t.getContext(y)),
						n = e.lineWidth,
						r = e.color,
						i = o.borderDash || [],
						c = e.borderDashOffset,
						u = e.tickWidth,
						h = e.tickColor,
						f = e.tickBorderDash || [],
						p = e.tickBorderDashOffset;
					b = Eo(t, y, s), void 0 !== b && (v = An(a, b, n), l ? x = T = k = E = v : w = _ = P = S = v, d.push({
						tx1: x,
						ty1: w,
						tx2: T,
						ty2: _,
						x1: k,
						y1: P,
						x2: E,
						y2: S,
						width: n,
						color: r,
						borderDash: i,
						borderDashOffset: c,
						tickWidth: u,
						tickColor: h,
						tickBorderDash: f,
						tickBorderDashOffset: p
					}))
				}
				return t._ticksLength = c, t._borderValue = g, d
			}
			_computeLabelItems(e) {
				const t = this,
					n = t.axis,
					a = t.options,
					{
						position: r,
						ticks: o
					} = a,
					i = t.isHorizontal(),
					s = t.ticks,
					{
						align: l,
						crossAlign: c,
						padding: u,
						mirror: d
					} = o,
					h = So(a.grid),
					f = h + u,
					p = d ? -u : f,
					m = -$t(t.labelRotation),
					g = [];
				let y, b, v, x, w, T, _, k, P, E, S, C, M = "middle";
				if ("top" === r) T = t.bottom - p, _ = t._getXAxisLabelAlignment();
				else if ("bottom" === r) T = t.top + p, _ = t._getXAxisLabelAlignment();
				else if ("left" === r) {
					const e = t._getYAxisLabelAlignment(h);
					_ = e.textAlign, w = e.x
				} else if ("right" === r) {
					const e = t._getYAxisLabelAlignment(h);
					_ = e.textAlign, w = e.x
				} else if ("x" === n) {
					if ("center" === r) T = (e.top + e.bottom) / 2 + f;
					else if (Xe(r)) {
						const e = Object.keys(r)[0],
							n = r[e];
						T = t.chart.scales[e].getPixelForValue(n) + f
					}
					_ = t._getXAxisLabelAlignment()
				} else if ("y" === n) {
					if ("center" === r) w = (e.left + e.right) / 2 - f;
					else if (Xe(r)) {
						const e = Object.keys(r)[0],
							n = r[e];
						w = t.chart.scales[e].getPixelForValue(n)
					}
					_ = t._getYAxisLabelAlignment(h).textAlign
				}
				"y" === n && ("start" === l ? M = "top" : "end" === l && (M = "bottom"));
				const N = t._getLabelSizes();
				for (y = 0, b = s.length; y < b; ++y) {
					v = s[y], x = v.label;
					const e = o.setContext(t.getContext(y));
					k = t.getPixelForTick(y) + o.labelOffset, P = t._resolveTickFontOptions(y), E = P.lineHeight, S = Ge(x) ? x.length : 1;
					const n = S / 2,
						a = e.color,
						l = e.textStrokeColor,
						u = e.textStrokeWidth;
					let h;
					if (i ? (w = k, C = "top" === r ? "near" === c || 0 !== m ? -S * E + E / 2 : "center" === c ? -N.highest.height / 2 - n * E + E : -N.highest.height + E / 2 : "near" === c || 0 !== m ? E / 2 : "center" === c ? N.highest.height / 2 - n * E : N.highest.height - S * E, d && (C *= -1)) : (T = k, C = (1 - S) * E / 2), e.showLabelBackdrop) {
						const t = Gn(e.backdropPadding),
							n = N.heights[y],
							a = N.widths[y];
						let r = T + C - t.top,
							o = w - t.left;
						switch (M) {
							case "middle":
								r -= n / 2;
								break;
							case "bottom":
								r -= n
						}
						switch (_) {
							case "center":
								o -= a / 2;
								break;
							case "right":
								o -= a
						}
						h = {
							left: o,
							top: r,
							width: a + t.width,
							height: n + t.height,
							color: e.backdropColor
						}
					}
					g.push({
						rotation: m,
						label: x,
						font: P,
						color: a,
						strokeColor: l,
						strokeWidth: u,
						textOffset: C,
						textAlign: _,
						textBaseline: M,
						translation: [w, T],
						backdrop: h
					})
				}
				return g
			}
			_getXAxisLabelAlignment() {
				const {
					position: e,
					ticks: t
				} = this.options;
				if (-$t(this.labelRotation)) return "top" === e ? "left" : "right";
				let n = "center";
				return "start" === t.align ? n = "left" : "end" === t.align && (n = "right"), n
			}
			_getYAxisLabelAlignment(e) {
				const t = this,
					{
						position: n,
						ticks: {
							crossAlign: a,
							mirror: r,
							padding: o
						}
					} = t.options,
					i = e + o,
					s = t._getLabelSizes().widest.width;
				let l, c;
				return "left" === n ? r ? (l = "left", c = t.right + o) : (c = t.right - i, "near" === a ? l = "right" : "center" === a ? (l = "center", c -= s / 2) : (l = "left", c = t.left)) : "right" === n ? r ? (l = "right", c = t.left + o) : (c = t.left + i, "near" === a ? l = "left" : "center" === a ? (l = "center", c += s / 2) : (l = "right", c = t.right)) : l = "right", {
					textAlign: l,
					x: c
				}
			}
			_computeLabelArea() {
				const e = this;
				if (e.options.ticks.mirror) return;
				const t = e.chart,
					n = e.options.position;
				return "left" === n || "right" === n ? {
					top: 0,
					left: e.left,
					bottom: t.height,
					right: e.right
				} : "top" === n || "bottom" === n ? {
					top: e.top,
					left: 0,
					bottom: e.bottom,
					right: t.width
				} : void 0
			}
			drawBackground() {
				const {
					ctx: e,
					options: {
						backgroundColor: t
					},
					left: n,
					top: a,
					width: r,
					height: o
				} = this;
				t && (e.save(), e.fillStyle = t, e.fillRect(n, a, r, o), e.restore())
			}
			getLineWidthForValue(e) {
				const t = this,
					n = t.options.grid;
				if (!t._isVisible() || !n.display) return 0;
				const a = t.ticks.findIndex((t => t.value === e));
				if (a >= 0) {
					return n.setContext(t.getContext(a)).lineWidth
				}
				return 0
			}
			drawGrid(e) {
				const t = this,
					n = t.options.grid,
					a = t.ctx,
					r = t._gridLineItems || (t._gridLineItems = t._computeGridLineItems(e));
				let o, i;
				const s = (e, t, n) => {
					n.width && n.color && (a.save(), a.lineWidth = n.width, a.strokeStyle = n.color, a.setLineDash(n.borderDash || []), a.lineDashOffset = n.borderDashOffset, a.beginPath(), a.moveTo(e.x, e.y), a.lineTo(t.x, t.y), a.stroke(), a.restore())
				};
				if (n.display)
					for (o = 0, i = r.length; o < i; ++o) {
						const e = r[o];
						n.drawOnChartArea && s({
							x: e.x1,
							y: e.y1
						}, {
							x: e.x2,
							y: e.y2
						}, e), n.drawTicks && s({
							x: e.tx1,
							y: e.ty1
						}, {
							x: e.tx2,
							y: e.ty2
						}, {
							color: e.tickColor,
							width: e.tickWidth,
							borderDash: e.tickBorderDash,
							borderDashOffset: e.tickBorderDashOffset
						})
					}
			}
			drawBorder() {
				const e = this,
					{
						chart: t,
						ctx: n,
						options: {
							grid: a
						}
					} = e,
					r = a.setContext(e.getContext()),
					o = a.drawBorder ? r.borderWidth : 0;
				if (!o) return;
				const i = a.setContext(e.getContext(0)).lineWidth,
					s = e._borderValue;
				let l, c, u, d;
				e.isHorizontal() ? (l = An(t, e.left, o) - o / 2, c = An(t, e.right, i) + i / 2, u = d = s) : (u = An(t, e.top, o) - o / 2, d = An(t, e.bottom, i) + i / 2, l = c = s), n.save(), n.lineWidth = r.borderWidth, n.strokeStyle = r.borderColor, n.beginPath(), n.moveTo(l, u), n.lineTo(c, d), n.stroke(), n.restore()
			}
			drawLabels(e) {
				const t = this;
				if (!t.options.ticks.display) return;
				const n = t.ctx,
					a = t._computeLabelArea();
				a && Dn(n, a);
				const r = t._labelItems || (t._labelItems = t._computeLabelItems(e));
				let o, i;
				for (o = 0, i = r.length; o < i; ++o) {
					const e = r[o],
						t = e.font,
						a = e.label;
					e.backdrop && (n.fillStyle = e.backdrop.color, n.fillRect(e.backdrop.left, e.backdrop.top, e.backdrop.width, e.backdrop.height)), Vn(n, a, 0, e.textOffset, t, e)
				}
				a && Fn(n)
			}
			drawTitle() {
				const {
					ctx: e,
					options: {
						position: t,
						title: n,
						reverse: a
					}
				} = this;
				if (!n.display) return;
				const r = Xn(n.font),
					o = Gn(n.padding),
					i = n.align;
				let s = r.lineHeight / 2;
				"bottom" === t || "center" === t || Xe(t) ? (s += o.bottom, Ge(n.text) && (s += r.lineHeight * (n.text.length - 1))) : s += o.top;
				const {
					titleX: l,
					titleY: c,
					maxWidth: u,
					rotation: d
				} = function(e, t, n, a) {
					const {
						top: r,
						left: o,
						bottom: i,
						right: s,
						chart: l
					} = e, {
						chartArea: c,
						scales: u
					} = l;
					let d, h, f, p = 0;
					const m = i - r,
						g = s - o;
					if (e.isHorizontal()) {
						if (h = Ye(a, o, s), Xe(n)) {
							const e = Object.keys(n)[0],
								a = n[e];
							f = u[e].getPixelForValue(a) + m - t
						} else f = "center" === n ? (c.bottom + c.top) / 2 + m - t : ko(e, n, t);
						d = s - o
					} else {
						if (Xe(n)) {
							const e = Object.keys(n)[0],
								a = n[e];
							h = u[e].getPixelForValue(a) - g + t
						} else h = "center" === n ? (c.left + c.right) / 2 - g + t : ko(e, n, t);
						f = Ye(a, i, r), p = "left" === n ? -Tt : Tt
					}
					return {
						titleX: h,
						titleY: f,
						maxWidth: d,
						rotation: p
					}
				}(this, s, t, i);
				Vn(e, n.text, 0, 0, r, {
					color: n.color,
					maxWidth: u,
					rotation: d,
					textAlign: Mo(i, t, a),
					textBaseline: "middle",
					translation: [l, c]
				})
			}
			draw(e) {
				const t = this;
				t._isVisible() && (t.drawBackground(), t.drawGrid(e), t.drawBorder(), t.drawTitle(), t.drawLabels(e))
			}
			_layers() {
				const e = this,
					t = e.options,
					n = t.ticks && t.ticks.z || 0,
					a = et(t.grid && t.grid.z, -1);
				return e._isVisible() && e.draw === No.prototype.draw ? [{
					z: a,
					draw(t) {
						e.drawBackground(), e.drawGrid(t), e.drawTitle()
					}
				}, {
					z: a + 1,
					draw() {
						e.drawBorder()
					}
				}, {
					z: n,
					draw(t) {
						e.drawLabels(t)
					}
				}] : [{
					z: n,
					draw(t) {
						e.draw(t)
					}
				}]
			}
			getMatchingVisibleMetas(e) {
				const t = this,
					n = t.chart.getSortedVisibleDatasetMetas(),
					a = t.axis + "AxisID",
					r = [];
				let o, i;
				for (o = 0, i = n.length; o < i; ++o) {
					const i = n[o];
					i[a] !== t.id || e && i.type !== e || r.push(i)
				}
				return r
			}
			_resolveTickFontOptions(e) {
				return Xn(this.options.ticks.setContext(this.getContext(e)).font)
			}
			_maxDigits() {
				const e = this,
					t = e._resolveTickFontOptions(0).lineHeight;
				return (e.isHorizontal() ? e.width : e.height) / t
			}
		}
		class $o {
			constructor(e, t, n) {
				this.type = e, this.scope = t, this.override = n, this.items = Object.create(null)
			}
			isForType(e) {
				return Object.prototype.isPrototypeOf.call(this.type.prototype, e.prototype)
			}
			register(e) {
				const t = this,
					n = Object.getPrototypeOf(e);
				let a;
				(function(e) {
					return "id" in e && "defaults" in e
				})(n) && (a = t.register(n));
				const r = t.items,
					o = e.id,
					i = t.scope + "." + o;
				if (!o) throw new Error("class does not have id: " + e);
				return o in r || (r[o] = e, function(e, t, n) {
					const a = lt(Object.create(null), [n ? Mn.get(n) : {}, Mn.get(t), e.defaults]);
					Mn.set(t, a), e.defaultRoutes && function(e, t) {
						Object.keys(t).forEach((n => {
							const a = n.split("."),
								r = a.pop(),
								o = [e].concat(a).join("."),
								i = t[n].split("."),
								s = i.pop(),
								l = i.join(".");
							Mn.route(o, r, l, s)
						}))
					}(t, e.defaultRoutes);
					e.descriptors && Mn.describe(t, e.descriptors)
				}(e, i, a), t.override && Mn.override(e.id, e.overrides)), i
			}
			get(e) {
				return this.items[e]
			}
			unregister(e) {
				const t = this.items,
					n = e.id,
					a = this.scope;
				n in t && delete t[n], a && n in Mn[a] && (delete Mn[a][n], this.override && delete Pn[n])
			}
		}
		var Ao = new class {
			constructor() {
				this.controllers = new $o(gr, "datasets", !0), this.elements = new $o(vo, "elements"), this.plugins = new $o(Object, "plugins"), this.scales = new $o(No, "scales"), this._typedRegistries = [this.controllers, this.scales, this.elements]
			}
			add(...e) {
				this._each("register", e)
			}
			remove(...e) {
				this._each("unregister", e)
			}
			addControllers(...e) {
				this._each("register", e, this.controllers)
			}
			addElements(...e) {
				this._each("register", e, this.elements)
			}
			addPlugins(...e) {
				this._each("register", e, this.plugins)
			}
			addScales(...e) {
				this._each("register", e, this.scales)
			}
			getController(e) {
				return this._get(e, this.controllers, "controller")
			}
			getElement(e) {
				return this._get(e, this.elements, "element")
			}
			getPlugin(e) {
				return this._get(e, this.plugins, "plugin")
			}
			getScale(e) {
				return this._get(e, this.scales, "scale")
			}
			removeControllers(...e) {
				this._each("unregister", e, this.controllers)
			}
			removeElements(...e) {
				this._each("unregister", e, this.elements)
			}
			removePlugins(...e) {
				this._each("unregister", e, this.plugins)
			}
			removeScales(...e) {
				this._each("unregister", e, this.scales)
			}
			_each(e, t, n) {
				const a = this;
				[...t].forEach((t => {
					const r = n || a._getRegistryForType(t);
					n || r.isForType(t) || r === a.plugins && t.id ? a._exec(e, r, t) : at(t, (t => {
						const r = n || a._getRegistryForType(t);
						a._exec(e, r, t)
					}))
				}))
			}
			_exec(e, t, n) {
				const a = pt(e);
				nt(n["before" + a], [], n), t[e](n), nt(n["after" + a], [], n)
			}
			_getRegistryForType(e) {
				for (let t = 0; t < this._typedRegistries.length; t++) {
					const n = this._typedRegistries[t];
					if (n.isForType(e)) return n
				}
				return this.plugins
			}
			_get(e, t, n) {
				const a = t.get(e);
				if (void 0 === a) throw new Error('"' + e + '" is not a registered ' + n + ".");
				return a
			}
		};
		class Io {
			constructor() {
				this._init = []
			}
			notify(e, t, n, a) {
				const r = this;
				"beforeInit" === t && (r._init = r._createDescriptors(e, !0), r._notify(r._init, e, "install"));
				const o = a ? r._descriptors(e).filter(a) : r._descriptors(e),
					i = r._notify(o, e, t, n);
				return "destroy" === t && (r._notify(o, e, "stop"), r._notify(r._init, e, "uninstall")), i
			}
			_notify(e, t, n, a) {
				a = a || {};
				for (const r of e) {
					const e = r.plugin;
					if (!1 === nt(e[n], [t, a, r.options], e) && a.cancelable) return !1
				}
				return !0
			}
			invalidate() {
				Qe(this._cache) || (this._oldCache = this._cache, this._cache = void 0)
			}
			_descriptors(e) {
				if (this._cache) return this._cache;
				const t = this._cache = this._createDescriptors(e);
				return this._notifyStateChanges(e), t
			}
			_createDescriptors(e, t) {
				const n = e && e.config,
					a = et(n.options && n.options.plugins, {}),
					r = function(e) {
						const t = [],
							n = Object.keys(Ao.plugins.items);
						for (let e = 0; e < n.length; e++) t.push(Ao.getPlugin(n[e]));
						const a = e.plugins || [];
						for (let e = 0; e < a.length; e++) {
							const n = a[e]; - 1 === t.indexOf(n) && t.push(n)
						}
						return t
					}(n);
				return !1 !== a || t ? function(e, t, n, a) {
					const r = [],
						o = e.getContext();
					for (let i = 0; i < t.length; i++) {
						const s = t[i],
							l = Oo(n[s.id], a);
						null !== l && r.push({
							plugin: s,
							options: Ro(e.config, s, l, o)
						})
					}
					return r
				}(e, r, a, t) : []
			}
			_notifyStateChanges(e) {
				const t = this._oldCache || [],
					n = this._cache,
					a = (e, t) => e.filter((e => !t.some((t => e.plugin.id === t.plugin.id))));
				this._notify(a(t, n), e, "stop"), this._notify(a(n, t), e, "start")
			}
		}

		function Oo(e, t) {
			return t || !1 !== e ? !0 === e ? {} : e : null
		}

		function Ro(e, t, n, a) {
			const r = e.pluginScopeKeys(t),
				o = e.getOptionScopes(n, r);
			return e.createResolver(o, a, [""], {
				scriptable: !1,
				indexable: !1,
				allKeys: !0
			})
		}

		function Do(e, t) {
			const n = Mn.datasets[e] || {};
			return ((t.datasets || {})[e] || {}).indexAxis || t.indexAxis || n.indexAxis || "x"
		}

		function Fo(e, t) {
			return "x" === e || "y" === e ? e : t.axis || ("top" === (n = t.position) || "bottom" === n ? "x" : "left" === n || "right" === n ? "y" : void 0) || e.charAt(0).toLowerCase();
			var n
		}

		function Lo(e) {
			const t = e.options || (e.options = {});
			t.plugins = et(t.plugins, {}), t.scales = function(e, t) {
				const n = Pn[e.type] || {
						scales: {}
					},
					a = t.scales || {},
					r = Do(e.type, t),
					o = Object.create(null),
					i = Object.create(null);
				return Object.keys(a).forEach((e => {
					const t = a[e],
						s = Fo(e, t),
						l = function(e, t) {
							return e === t ? "_index_" : "_value_"
						}(s, r),
						c = n.scales || {};
					o[s] = o[s] || e, i[e] = ct(Object.create(null), [{
						axis: s
					}, t, c[s], c[l]])
				})), e.data.datasets.forEach((n => {
					const r = n.type || e.type,
						s = n.indexAxis || Do(r, t),
						l = (Pn[r] || {}).scales || {};
					Object.keys(l).forEach((e => {
						const t = function(e, t) {
								let n = e;
								return "_index_" === e ? n = t : "_value_" === e && (n = "x" === t ? "y" : "x"), n
							}(e, s),
							r = n[t + "AxisID"] || o[t] || t;
						i[r] = i[r] || Object.create(null), ct(i[r], [{
							axis: t
						}, a[r], l[e]])
					}))
				})), Object.keys(i).forEach((e => {
					const t = i[e];
					ct(t, [Mn.scales[t.type], Mn.scale])
				})), i
			}(e, t)
		}

		function zo(e) {
			return (e = e || {}).datasets = e.datasets || [], e.labels = e.labels || [], e
		}
		const Vo = new Map,
			Bo = new Set;

		function jo(e, t) {
			let n = Vo.get(e);
			return n || (n = t(), Vo.set(e, n), Bo.add(n)), n
		}
		const Ho = (e, t, n) => {
			const a = ft(t, n);
			void 0 !== a && e.add(a)
		};
		class qo {
			constructor(e) {
				this._config = function(e) {
					return (e = e || {}).data = zo(e.data), Lo(e), e
				}(e), this._scopeCache = new Map, this._resolverCache = new Map
			}
			get platform() {
				return this._config.platform
			}
			get type() {
				return this._config.type
			}
			set type(e) {
				this._config.type = e
			}
			get data() {
				return this._config.data
			}
			set data(e) {
				this._config.data = zo(e)
			}
			get options() {
				return this._config.options
			}
			set options(e) {
				this._config.options = e
			}
			get plugins() {
				return this._config.plugins
			}
			update() {
				const e = this._config;
				this.clearCache(), Lo(e)
			}
			clearCache() {
				this._scopeCache.clear(), this._resolverCache.clear()
			}
			datasetScopeKeys(e) {
				return jo(e, (() => [
					[`datasets.${e}`, ""]
				]))
			}
			datasetAnimationScopeKeys(e, t) {
				return jo(`${e}.transition.${t}`, (() => [
					[`datasets.${e}.transitions.${t}`, `transitions.${t}`],
					[`datasets.${e}`, ""]
				]))
			}
			datasetElementScopeKeys(e, t) {
				return jo(`${e}-${t}`, (() => [
					[`datasets.${e}.elements.${t}`, `datasets.${e}`, `elements.${t}`, ""]
				]))
			}
			pluginScopeKeys(e) {
				const t = e.id;
				return jo(`${this.type}-plugin-${t}`, (() => [
					[`plugins.${t}`, ...e.additionalOptionScopes || []]
				]))
			}
			_cachedScopes(e, t) {
				const n = this._scopeCache;
				let a = n.get(e);
				return a && !t || (a = new Map, n.set(e, a)), a
			}
			getOptionScopes(e, t, n) {
				const {
					options: a,
					type: r
				} = this, o = this._cachedScopes(e, n), i = o.get(t);
				if (i) return i;
				const s = new Set;
				t.forEach((t => {
					e && (s.add(e), t.forEach((t => Ho(s, e, t)))), t.forEach((e => Ho(s, a, e))), t.forEach((e => Ho(s, Pn[r] || {}, e))), t.forEach((e => Ho(s, Mn, e))), t.forEach((e => Ho(s, En, e)))
				}));
				const l = Array.from(s);
				return 0 === l.length && l.push(Object.create(null)), Bo.has(t) && o.set(t, l), l
			}
			chartOptionScopes() {
				const {
					options: e,
					type: t
				} = this;
				return [e, Pn[t] || {}, Mn.datasets[t] || {}, {
					type: t
				}, Mn, En]
			}
			resolveNamedOptions(e, t, n, a = [""]) {
				const r = {
						$shared: !0
					},
					{
						resolver: o,
						subPrefixes: i
					} = Wo(this._resolverCache, e, a);
				let s = o;
				if (function(e, t) {
						const {
							isScriptable: n,
							isIndexable: a
						} = sa(e);
						for (const r of t)
							if (n(r) && gt(e[r]) || a(r) && Ge(e[r])) return !0;
						return !1
					}(o, t)) {
					r.$shared = !1;
					s = ia(o, n = gt(n) ? n() : n, this.createResolver(e, n, i))
				}
				for (const e of t) r[e] = s[e];
				return r
			}
			createResolver(e, t, n = [""], a) {
				const {
					resolver: r
				} = Wo(this._resolverCache, e, n);
				return Xe(t) ? ia(r, t, void 0, a) : r
			}
		}

		function Wo(e, t, n) {
			let a = e.get(t);
			a || (a = new Map, e.set(t, a));
			const r = n.join();
			let o = a.get(r);
			if (!o) {
				o = {
					resolver: oa(t, n),
					subPrefixes: n.filter((e => !e.toLowerCase().includes("hover")))
				}, a.set(r, o)
			}
			return o
		}
		const Yo = ["top", "bottom", "left", "right", "chartArea"];

		function Uo(e, t) {
			return "top" === e || "bottom" === e || -1 === Yo.indexOf(e) && "x" === t
		}

		function Zo(e, t) {
			return function(n, a) {
				return n[e] === a[e] ? n[t] - a[t] : n[e] - a[e]
			}
		}

		function Qo(e) {
			const t = e.chart,
				n = t.options.animation;
			t.notifyPlugins("afterRender"), nt(n && n.onComplete, [e], t)
		}

		function Go(e) {
			const t = e.chart,
				n = t.options.animation;
			nt(n && n.onProgress, [e], t)
		}

		function Xo(e) {
			return Pa() && "string" == typeof e ? e = document.getElementById(e) : e && e.length && (e = e[0]), e && e.canvas && (e = e.canvas), e
		}
		const Ko = {},
			Jo = e => {
				const t = Xo(e);
				return Object.values(Ko).filter((e => e.canvas === t)).pop()
			};
		class ei {
			constructor(e, t) {
				const n = this,
					a = this.config = new qo(t),
					r = Xo(e),
					o = Jo(r);
				if (o) throw new Error("Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas can be reused.");
				const i = a.createResolver(a.chartOptionScopes(), n.getContext());
				this.platform = new(a.platform || function(e) {
					return !Pa() || "undefined" != typeof OffscreenCanvas && e instanceof OffscreenCanvas ? ao : bo
				}(r));
				const s = n.platform.acquireContext(r, i.aspectRatio),
					l = s && s.canvas,
					c = l && l.height,
					u = l && l.width;
				this.id = Ze(), this.ctx = s, this.canvas = l, this.width = u, this.height = c, this._options = i, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this.scale = void 0, this._plugins = new Io, this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = function(e, t) {
					let n;
					return function() {
						return t ? (clearTimeout(n), n = setTimeout(e, t)) : e(), t
					}
				}((() => this.update("resize")), i.resizeDelay || 0), Ko[n.id] = n, s && l ? (Ja.listen(n, "complete", Qo), Ja.listen(n, "progress", Go), n._initialize(), n.attached && n.update()) : console.error("Failed to create chart: can't acquire context from the given item")
			}
			get aspectRatio() {
				const {
					options: {
						aspectRatio: e,
						maintainAspectRatio: t
					},
					width: n,
					height: a,
					_aspectRatio: r
				} = this;
				return Qe(e) ? t && r ? r : a ? n / a : null : e
			}
			get data() {
				return this.config.data
			}
			set data(e) {
				this.config.data = e
			}
			get options() {
				return this._options
			}
			set options(e) {
				this.config.options = e
			}
			_initialize() {
				const e = this;
				return e.notifyPlugins("beforeInit"), e.options.responsive ? e.resize() : Ra(e, e.options.devicePixelRatio), e.bindEvents(), e.notifyPlugins("afterInit"), e
			}
			clear() {
				return In(this.canvas, this.ctx), this
			}
			stop() {
				return Ja.stop(this), this
			}
			resize(e, t) {
				Ja.running(this) ? this._resizeBeforeDraw = {
					width: e,
					height: t
				} : this._resize(e, t)
			}
			_resize(e, t) {
				const n = this,
					a = n.options,
					r = n.canvas,
					o = a.maintainAspectRatio && n.aspectRatio,
					i = n.platform.getMaximumSize(r, e, t, o),
					s = a.devicePixelRatio || n.platform.getDevicePixelRatio();
				n.width = i.width, n.height = i.height, n._aspectRatio = n.aspectRatio, Ra(n, s, !0) && (n.notifyPlugins("resize", {
					size: i
				}), nt(a.onResize, [n, i], n), n.attached && n._doResize() && n.render())
			}
			ensureScalesHaveIDs() {
				at(this.options.scales || {}, ((e, t) => {
					e.id = t
				}))
			}
			buildOrUpdateScales() {
				const e = this,
					t = e.options,
					n = t.scales,
					a = e.scales,
					r = Object.keys(a).reduce(((e, t) => (e[t] = !1, e)), {});
				let o = [];
				n && (o = o.concat(Object.keys(n).map((e => {
					const t = n[e],
						a = Fo(e, t),
						r = "r" === a,
						o = "x" === a;
					return {
						options: t,
						dposition: r ? "chartArea" : o ? "bottom" : "left",
						dtype: r ? "radialLinear" : o ? "category" : "linear"
					}
				})))), at(o, (n => {
					const o = n.options,
						i = o.id,
						s = Fo(i, o),
						l = et(o.type, n.dtype);
					void 0 !== o.position && Uo(o.position, s) === Uo(n.dposition) || (o.position = n.dposition), r[i] = !0;
					let c = null;
					if (i in a && a[i].type === l) c = a[i];
					else {
						c = new(Ao.getScale(l))({
							id: i,
							type: l,
							ctx: e.ctx,
							chart: e
						}), a[c.id] = c
					}
					c.init(o, t)
				})), at(r, ((e, t) => {
					e || delete a[t]
				})), at(a, (t => {
					to.configure(e, t, t.options), to.addBox(e, t)
				}))
			}
			_updateMetasets() {
				const e = this,
					t = e._metasets,
					n = e.data.datasets.length,
					a = t.length;
				if (t.sort(((e, t) => e.index - t.index)), a > n) {
					for (let t = n; t < a; ++t) e._destroyDatasetMeta(t);
					t.splice(n, a - n)
				}
				e._sortedMetasets = t.slice(0).sort(Zo("order", "index"))
			}
			_removeUnreferencedMetasets() {
				const e = this,
					{
						_metasets: t,
						data: {
							datasets: n
						}
					} = e;
				t.length > n.length && delete e._stacks, t.forEach(((t, a) => {
					0 === n.filter((e => e === t._dataset)).length && e._destroyDatasetMeta(a)
				}))
			}
			buildOrUpdateControllers() {
				const e = this,
					t = [],
					n = e.data.datasets;
				let a, r;
				for (e._removeUnreferencedMetasets(), a = 0, r = n.length; a < r; a++) {
					const r = n[a];
					let o = e.getDatasetMeta(a);
					const i = r.type || e.config.type;
					if (o.type && o.type !== i && (e._destroyDatasetMeta(a), o = e.getDatasetMeta(a)), o.type = i, o.indexAxis = r.indexAxis || Do(i, e.options), o.order = r.order || 0, o.index = a, o.label = "" + r.label, o.visible = e.isDatasetVisible(a), o.controller) o.controller.updateIndex(a), o.controller.linkScales();
					else {
						const n = Ao.getController(i),
							{
								datasetElementType: r,
								dataElementType: s
							} = Mn.datasets[i];
						Object.assign(n.prototype, {
							dataElementType: Ao.getElement(s),
							datasetElementType: r && Ao.getElement(r)
						}), o.controller = new n(e, a), t.push(o.controller)
					}
				}
				return e._updateMetasets(), t
			}
			_resetElements() {
				const e = this;
				at(e.data.datasets, ((t, n) => {
					e.getDatasetMeta(n).controller.reset()
				}), e)
			}
			reset() {
				this._resetElements(), this.notifyPlugins("reset")
			}
			update(e) {
				const t = this,
					n = t.config;
				n.update(), t._options = n.createResolver(n.chartOptionScopes(), t.getContext()), at(t.scales, (e => {
					to.removeBox(t, e)
				}));
				const a = t._animationsDisabled = !t.options.animation;
				t.ensureScalesHaveIDs(), t.buildOrUpdateScales();
				if (((e, t) => {
						if (e.size !== t.size) return !1;
						for (const n of e)
							if (!t.has(n)) return !1;
						return !0
					})(new Set(Object.keys(t._listeners)), new Set(t.options.events)) && !!this._responsiveListeners === t.options.responsive || (t.unbindEvents(), t.bindEvents()), t._plugins.invalidate(), !1 === t.notifyPlugins("beforeUpdate", {
						mode: e,
						cancelable: !0
					})) return;
				const r = t.buildOrUpdateControllers();
				t.notifyPlugins("beforeElementsUpdate");
				let o = 0;
				for (let e = 0, n = t.data.datasets.length; e < n; e++) {
					const {
						controller: n
					} = t.getDatasetMeta(e), i = !a && -1 === r.indexOf(n);
					n.buildOrUpdateElements(i), o = Math.max(+n.getMaxOverflow(), o)
				}
				t._minPadding = o, t._updateLayout(o), a || at(r, (e => {
					e.reset()
				})), t._updateDatasets(e), t.notifyPlugins("afterUpdate", {
					mode: e
				}), t._layers.sort(Zo("z", "_idx")), t._lastEvent && t._eventHandler(t._lastEvent, !0), t.render()
			}
			_updateLayout(e) {
				const t = this;
				if (!1 === t.notifyPlugins("beforeLayout", {
						cancelable: !0
					})) return;
				to.update(t, t.width, t.height, e);
				const n = t.chartArea,
					a = n.width <= 0 || n.height <= 0;
				t._layers = [], at(t.boxes, (e => {
					a && "chartArea" === e.position || (e.configure && e.configure(), t._layers.push(...e._layers()))
				}), t), t._layers.forEach(((e, t) => {
					e._idx = t
				})), t.notifyPlugins("afterLayout")
			}
			_updateDatasets(e) {
				const t = this,
					n = "function" == typeof e;
				if (!1 !== t.notifyPlugins("beforeDatasetsUpdate", {
						mode: e,
						cancelable: !0
					})) {
					for (let a = 0, r = t.data.datasets.length; a < r; ++a) t._updateDataset(a, n ? e({
						datasetIndex: a
					}) : e);
					t.notifyPlugins("afterDatasetsUpdate", {
						mode: e
					})
				}
			}
			_updateDataset(e, t) {
				const n = this,
					a = n.getDatasetMeta(e),
					r = {
						meta: a,
						index: e,
						mode: t,
						cancelable: !0
					};
				!1 !== n.notifyPlugins("beforeDatasetUpdate", r) && (a.controller._update(t), r.cancelable = !1, n.notifyPlugins("afterDatasetUpdate", r))
			}
			render() {
				const e = this;
				!1 !== e.notifyPlugins("beforeRender", {
					cancelable: !0
				}) && (Ja.has(e) ? e.attached && !Ja.running(e) && Ja.start(e) : (e.draw(), Qo({
					chart: e
				})))
			}
			draw() {
				const e = this;
				let t;
				if (e._resizeBeforeDraw) {
					const {
						width: t,
						height: n
					} = e._resizeBeforeDraw;
					e._resize(t, n), e._resizeBeforeDraw = null
				}
				if (e.clear(), e.width <= 0 || e.height <= 0) return;
				if (!1 === e.notifyPlugins("beforeDraw", {
						cancelable: !0
					})) return;
				const n = e._layers;
				for (t = 0; t < n.length && n[t].z <= 0; ++t) n[t].draw(e.chartArea);
				for (e._drawDatasets(); t < n.length; ++t) n[t].draw(e.chartArea);
				e.notifyPlugins("afterDraw")
			}
			_getSortedDatasetMetas(e) {
				const t = this._sortedMetasets,
					n = [];
				let a, r;
				for (a = 0, r = t.length; a < r; ++a) {
					const r = t[a];
					e && !r.visible || n.push(r)
				}
				return n
			}
			getSortedVisibleDatasetMetas() {
				return this._getSortedDatasetMetas(!0)
			}
			_drawDatasets() {
				const e = this;
				if (!1 === e.notifyPlugins("beforeDatasetsDraw", {
						cancelable: !0
					})) return;
				const t = e.getSortedVisibleDatasetMetas();
				for (let n = t.length - 1; n >= 0; --n) e._drawDataset(t[n]);
				e.notifyPlugins("afterDatasetsDraw")
			}
			_drawDataset(e) {
				const t = this,
					n = t.ctx,
					a = e._clip,
					r = !a.disabled,
					o = t.chartArea,
					i = {
						meta: e,
						index: e.index,
						cancelable: !0
					};
				!1 !== t.notifyPlugins("beforeDatasetDraw", i) && (r && Dn(n, {
					left: !1 === a.left ? 0 : o.left - a.left,
					right: !1 === a.right ? t.width : o.right + a.right,
					top: !1 === a.top ? 0 : o.top - a.top,
					bottom: !1 === a.bottom ? t.height : o.bottom + a.bottom
				}), e.controller.draw(), r && Fn(n), i.cancelable = !1, t.notifyPlugins("afterDatasetDraw", i))
			}
			getElementsAtEventForMode(e, t, n, a) {
				const r = jr.modes[t];
				return "function" == typeof r ? r(this, e, n, a) : []
			}
			getDatasetMeta(e) {
				const t = this.data.datasets[e],
					n = this._metasets;
				let a = n.filter((e => e && e._dataset === t)).pop();
				return a || (a = {
					type: null,
					data: [],
					dataset: null,
					controller: null,
					hidden: null,
					xAxisID: null,
					yAxisID: null,
					order: t && t.order || 0,
					index: e,
					_dataset: t,
					_parsed: [],
					_sorted: !1
				}, n.push(a)), a
			}
			getContext() {
				return this.$context || (this.$context = {
					chart: this,
					type: "chart"
				})
			}
			getVisibleDatasetCount() {
				return this.getSortedVisibleDatasetMetas().length
			}
			isDatasetVisible(e) {
				const t = this.data.datasets[e];
				if (!t) return !1;
				const n = this.getDatasetMeta(e);
				return "boolean" == typeof n.hidden ? !n.hidden : !t.hidden
			}
			setDatasetVisibility(e, t) {
				this.getDatasetMeta(e).hidden = !t
			}
			toggleDataVisibility(e) {
				this._hiddenIndices[e] = !this._hiddenIndices[e]
			}
			getDataVisibility(e) {
				return !this._hiddenIndices[e]
			}
			_updateVisibility(e, t, n) {
				const a = this,
					r = n ? "show" : "hide",
					o = a.getDatasetMeta(e),
					i = o.controller._resolveAnimations(void 0, r);
				mt(t) ? (o.data[t].hidden = !n, a.update()) : (a.setDatasetVisibility(e, n), i.update(o, {
					visible: n
				}), a.update((t => t.datasetIndex === e ? r : void 0)))
			}
			hide(e, t) {
				this._updateVisibility(e, t, !1)
			}
			show(e, t) {
				this._updateVisibility(e, t, !0)
			}
			_destroyDatasetMeta(e) {
				const t = this,
					n = t._metasets && t._metasets[e];
				n && n.controller && (n.controller._destroy(), delete t._metasets[e])
			}
			destroy() {
				const e = this,
					{
						canvas: t,
						ctx: n
					} = e;
				let a, r;
				for (e.stop(), Ja.remove(e), a = 0, r = e.data.datasets.length; a < r; ++a) e._destroyDatasetMeta(a);
				e.config.clearCache(), t && (e.unbindEvents(), In(t, n), e.platform.releaseContext(n), e.canvas = null, e.ctx = null), e.notifyPlugins("destroy"), delete Ko[e.id]
			}
			toBase64Image(...e) {
				return this.canvas.toDataURL(...e)
			}
			bindEvents() {
				this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0
			}
			bindUserEvents() {
				const e = this,
					t = e._listeners,
					n = e.platform,
					a = function(t, n, a) {
						t.offsetX = n, t.offsetY = a, e._eventHandler(t)
					};
				at(e.options.events, (r => ((a, r) => {
					n.addEventListener(e, a, r), t[a] = r
				})(r, a)))
			}
			bindResponsiveEvents() {
				const e = this;
				e._responsiveListeners || (e._responsiveListeners = {});
				const t = e._responsiveListeners,
					n = e.platform,
					a = (a, r) => {
						n.addEventListener(e, a, r), t[a] = r
					},
					r = (a, r) => {
						t[a] && (n.removeEventListener(e, a, r), delete t[a])
					},
					o = (t, n) => {
						e.canvas && e.resize(t, n)
					};
				let i;
				const s = () => {
					r("attach", s), e.attached = !0, e.resize(), a("resize", o), a("detach", i)
				};
				i = () => {
					e.attached = !1, r("resize", o), a("attach", s)
				}, n.isAttached(e.canvas) ? s() : i()
			}
			unbindEvents() {
				const e = this;
				at(e._listeners, ((t, n) => {
					e.platform.removeEventListener(e, n, t)
				})), e._listeners = {}, at(e._responsiveListeners, ((t, n) => {
					e.platform.removeEventListener(e, n, t)
				})), e._responsiveListeners = void 0
			}
			updateHoverStyle(e, t, n) {
				const a = n ? "set" : "remove";
				let r, o, i, s;
				for ("dataset" === t && (r = this.getDatasetMeta(e[0].datasetIndex), r.controller["_" + a + "DatasetHoverStyle"]()), i = 0, s = e.length; i < s; ++i) {
					o = e[i];
					const t = o && this.getDatasetMeta(o.datasetIndex).controller;
					t && t[a + "HoverStyle"](o.element, o.datasetIndex, o.index)
				}
			}
			getActiveElements() {
				return this._active || []
			}
			setActiveElements(e) {
				const t = this,
					n = t._active || [],
					a = e.map((({
						datasetIndex: e,
						index: n
					}) => {
						const a = t.getDatasetMeta(e);
						if (!a) throw new Error("No dataset found at index " + e);
						return {
							datasetIndex: e,
							element: a.data[n],
							index: n
						}
					}));
				!rt(a, n) && (t._active = a, t._updateHoverStyles(a, n))
			}
			notifyPlugins(e, t, n) {
				return this._plugins.notify(this, e, t, n)
			}
			_updateHoverStyles(e, t, n) {
				const a = this,
					r = a.options.hover,
					o = (e, t) => e.filter((e => !t.some((t => e.datasetIndex === t.datasetIndex && e.index === t.index)))),
					i = o(t, e),
					s = n ? e : o(e, t);
				i.length && a.updateHoverStyle(i, r.mode, !1), s.length && r.mode && a.updateHoverStyle(s, r.mode, !0)
			}
			_eventHandler(e, t) {
				const n = this,
					a = {
						event: e,
						replay: t,
						cancelable: !0
					},
					r = t => (t.options.events || this.options.events).includes(e.type);
				if (!1 === n.notifyPlugins("beforeEvent", a, r)) return;
				const o = n._handleEvent(e, t);
				return a.cancelable = !1, n.notifyPlugins("afterEvent", a, r), (o || a.changed) && n.render(), n
			}
			_handleEvent(e, t) {
				const n = this,
					{
						_active: a = [],
						options: r
					} = n,
					o = r.hover,
					i = t;
				let s = [],
					l = !1,
					c = null;
				return "mouseout" !== e.type && (s = n.getElementsAtEventForMode(e, o.mode, o, i), c = "click" === e.type ? n._lastEvent : e), n._lastEvent = null, Rn(e, n.chartArea, n._minPadding) && (nt(r.onHover, [e, s, n], n), "mouseup" !== e.type && "click" !== e.type && "contextmenu" !== e.type || nt(r.onClick, [e, s, n], n)), l = !rt(s, a), (l || t) && (n._active = s, n._updateHoverStyles(s, a, t)), n._lastEvent = c, l
			}
		}
		const ti = () => at(ei.instances, (e => e._plugins.invalidate())),
			ni = !0;

		function ai(e, t, n) {
			const {
				startAngle: a,
				pixelMargin: r,
				x: o,
				y: i,
				outerRadius: s,
				innerRadius: l
			} = t;
			let c = r / s;
			e.beginPath(), e.arc(o, i, s, a - c, n + c), l > r ? (c = r / l, e.arc(o, i, l, n + c, a - c, !0)) : e.arc(o, i, r, n + Tt, a - Tt), e.closePath(), e.clip()
		}

		function ri(e, t, n, a) {
			const r = Un(e.options.borderRadius, ["outerStart", "outerEnd", "innerStart", "innerEnd"]);
			const o = (n - t) / 2,
				i = Math.min(o, a * t / 2),
				s = e => {
					const t = (n - Math.min(o, e)) * a / 2;
					return Lt(e, 0, Math.min(o, t))
				};
			return {
				outerStart: s(r.outerStart),
				outerEnd: s(r.outerEnd),
				innerStart: Lt(r.innerStart, 0, i),
				innerEnd: Lt(r.innerEnd, 0, i)
			}
		}

		function oi(e, t, n, a) {
			return {
				x: n + e * Math.cos(t),
				y: a + e * Math.sin(t)
			}
		}

		function ii(e, t, n, a, r) {
			const {
				x: o,
				y: i,
				startAngle: s,
				pixelMargin: l,
				innerRadius: c
			} = t, u = Math.max(t.outerRadius + a + n - l, 0), d = c > 0 ? c + a + n + l : 0;
			let h = 0;
			const f = r - s;
			if (a) {
				const e = ((c > 0 ? c - a : 0) + (u > 0 ? u - a : 0)) / 2;
				h = (f - (0 !== e ? f * e / (e + a) : f)) / 2
			}
			const p = (f - Math.max(.001, f * u - n / yt) / u) / 2,
				m = s + p + h,
				g = r - p - h,
				{
					outerStart: y,
					outerEnd: b,
					innerStart: v,
					innerEnd: x
				} = ri(t, d, u, g - m),
				w = u - y,
				T = u - b,
				_ = m + y / w,
				k = g - b / T,
				P = d + v,
				E = d + x,
				S = m + v / P,
				C = g - x / E;
			if (e.beginPath(), e.arc(o, i, u, _, k), b > 0) {
				const t = oi(T, k, o, i);
				e.arc(t.x, t.y, b, k, g + Tt)
			}
			const M = oi(E, g, o, i);
			if (e.lineTo(M.x, M.y), x > 0) {
				const t = oi(E, C, o, i);
				e.arc(t.x, t.y, x, g + Tt, C + Math.PI)
			}
			if (e.arc(o, i, d, g - x / d, m + v / d, !0), v > 0) {
				const t = oi(P, S, o, i);
				e.arc(t.x, t.y, v, S + Math.PI, m - Tt)
			}
			const N = oi(w, m, o, i);
			if (e.lineTo(N.x, N.y), y > 0) {
				const t = oi(w, _, o, i);
				e.arc(t.x, t.y, y, m - Tt, _)
			}
			e.closePath()
		}

		function si(e, t, n, a, r) {
			const {
				options: o
			} = t, i = "inner" === o.borderAlign;
			o.borderWidth && (i ? (e.lineWidth = 2 * o.borderWidth, e.lineJoin = "round") : (e.lineWidth = o.borderWidth, e.lineJoin = "bevel"), t.fullCircles && function(e, t, n) {
				const {
					x: a,
					y: r,
					startAngle: o,
					pixelMargin: i,
					fullCircles: s
				} = t, l = Math.max(t.outerRadius - i, 0), c = t.innerRadius + i;
				let u;
				for (n && ai(e, t, o + bt), e.beginPath(), e.arc(a, r, c, o + bt, o, !0), u = 0; u < s; ++u) e.stroke();
				for (e.beginPath(), e.arc(a, r, l, o, o + bt), u = 0; u < s; ++u) e.stroke()
			}(e, t, i), i && ai(e, t, r), ii(e, t, n, a, r), e.stroke())
		}
		Object.defineProperties(ei, {
			defaults: {
				enumerable: ni,
				value: Mn
			},
			instances: {
				enumerable: ni,
				value: Ko
			},
			overrides: {
				enumerable: ni,
				value: Pn
			},
			registry: {
				enumerable: ni,
				value: Ao
			},
			version: {
				enumerable: ni,
				value: "3.5.0"
			},
			getChart: {
				enumerable: ni,
				value: Jo
			},
			register: {
				enumerable: ni,
				value: (...e) => {
					Ao.add(...e), ti()
				}
			},
			unregister: {
				enumerable: ni,
				value: (...e) => {
					Ao.remove(...e), ti()
				}
			}
		});
		class li extends vo {
			constructor(e) {
				super(), this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, e && Object.assign(this, e)
			}
			inRange(e, t, n) {
				const a = this.getProps(["x", "y"], n),
					{
						angle: r,
						distance: o
					} = function(e, t) {
						const n = t.x - e.x,
							a = t.y - e.y,
							r = Math.sqrt(n * n + a * a);
						let o = Math.atan2(a, n);
						return o < -.5 * yt && (o += bt), {
							angle: o,
							distance: r
						}
					}(a, {
						x: e,
						y: t
					}),
					{
						startAngle: i,
						endAngle: s,
						innerRadius: l,
						outerRadius: c,
						circumference: u
					} = this.getProps(["startAngle", "endAngle", "innerRadius", "outerRadius", "circumference"], n),
					d = this.options.spacing / 2;
				return (u >= bt || Ft(r, i, s)) && (o >= l + d && o <= c + d)
			}
			getCenterPoint(e) {
				const {
					x: t,
					y: n,
					startAngle: a,
					endAngle: r,
					innerRadius: o,
					outerRadius: i
				} = this.getProps(["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius", "circumference"], e), {
					offset: s,
					spacing: l
				} = this.options, c = (a + r) / 2, u = (o + i + l + s) / 2;
				return {
					x: t + Math.cos(c) * u,
					y: n + Math.sin(c) * u
				}
			}
			tooltipPosition(e) {
				return this.getCenterPoint(e)
			}
			draw(e) {
				const t = this,
					{
						options: n,
						circumference: a
					} = t,
					r = (n.offset || 0) / 2,
					o = (n.spacing || 0) / 2;
				if (t.pixelMargin = "inner" === n.borderAlign ? .33 : 0, t.fullCircles = a > bt ? Math.floor(a / bt) : 0, 0 === a || t.innerRadius < 0 || t.outerRadius < 0) return;
				e.save();
				let i = 0;
				if (r) {
					i = r / 2;
					const n = (t.startAngle + t.endAngle) / 2;
					e.translate(Math.cos(n) * i, Math.sin(n) * i), t.circumference >= yt && (i = r)
				}
				e.fillStyle = n.backgroundColor, e.strokeStyle = n.borderColor;
				const s = function(e, t, n, a) {
					const {
						fullCircles: r,
						startAngle: o,
						circumference: i
					} = t;
					let s = t.endAngle;
					if (r) {
						ii(e, t, n, a, o + bt);
						for (let t = 0; t < r; ++t) e.fill();
						isNaN(i) || (s = o + i % bt, i % bt == 0 && (s += bt))
					}
					return ii(e, t, n, a, s), e.fill(), s
				}(e, t, i, o);
				si(e, t, i, o, s), e.restore()
			}
		}

		function ci(e, t, n = t) {
			e.lineCap = et(n.borderCapStyle, t.borderCapStyle), e.setLineDash(et(n.borderDash, t.borderDash)), e.lineDashOffset = et(n.borderDashOffset, t.borderDashOffset), e.lineJoin = et(n.borderJoinStyle, t.borderJoinStyle), e.lineWidth = et(n.borderWidth, t.borderWidth), e.strokeStyle = et(n.borderColor, t.borderColor)
		}

		function ui(e, t, n) {
			e.lineTo(n.x, n.y)
		}

		function di(e, t, n = {}) {
			const a = e.length,
				{
					start: r = 0,
					end: o = a - 1
				} = n,
				{
					start: i,
					end: s
				} = t,
				l = Math.max(r, i),
				c = Math.min(o, s),
				u = r < i && o < i || r > s && o > s;
			return {
				count: a,
				start: l,
				loop: t.loop,
				ilen: c < l && !u ? a + c - l : c - l
			}
		}

		function hi(e, t, n, a) {
			const {
				points: r,
				options: o
			} = t, {
				count: i,
				start: s,
				loop: l,
				ilen: c
			} = di(r, n, a), u = function(e) {
				return e.stepped ? Ln : e.tension || "monotone" === e.cubicInterpolationMode ? zn : ui
			}(o);
			let d, h, f, {
				move: p = !0,
				reverse: m
			} = a || {};
			for (d = 0; d <= c; ++d) h = r[(s + (m ? c - d : d)) % i], h.skip || (p ? (e.moveTo(h.x, h.y), p = !1) : u(e, f, h, m, o.stepped), f = h);
			return l && (h = r[(s + (m ? c : 0)) % i], u(e, f, h, m, o.stepped)), !!l
		}

		function fi(e, t, n, a) {
			const r = t.points,
				{
					count: o,
					start: i,
					ilen: s
				} = di(r, n, a),
				{
					move: l = !0,
					reverse: c
				} = a || {};
			let u, d, h, f, p, m, g = 0,
				y = 0;
			const b = e => (i + (c ? s - e : e)) % o,
				v = () => {
					f !== p && (e.lineTo(g, p), e.lineTo(g, f), e.lineTo(g, m))
				};
			for (l && (d = r[b(0)], e.moveTo(d.x, d.y)), u = 0; u <= s; ++u) {
				if (d = r[b(u)], d.skip) continue;
				const t = d.x,
					n = d.y,
					a = 0 | t;
				a === h ? (n < f ? f = n : n > p && (p = n), g = (y * g + t) / ++y) : (v(), e.lineTo(t, n), h = a, y = 0, f = p = n), m = n
			}
			v()
		}

		function pi(e) {
			const t = e.options,
				n = t.borderDash && t.borderDash.length;
			return !(e._decimated || e._loop || t.tension || "monotone" === t.cubicInterpolationMode || t.stepped || n) ? fi : hi
		}
		li.id = "arc", li.defaults = {
			borderAlign: "center",
			borderColor: "#fff",
			borderRadius: 0,
			borderWidth: 2,
			offset: 0,
			spacing: 0,
			angle: void 0
		}, li.defaultRoutes = {
			backgroundColor: "backgroundColor"
		};
		const mi = "function" == typeof Path2D;

		function gi(e, t, n, a) {
			mi && 1 === t.segments.length ? function(e, t, n, a) {
				let r = t._path;
				r || (r = t._path = new Path2D, t.path(r, n, a) && r.closePath()), ci(e, t.options), e.stroke(r)
			}(e, t, n, a) : function(e, t, n, a) {
				const {
					segments: r,
					options: o
				} = t, i = pi(t);
				for (const s of r) ci(e, o, s.style), e.beginPath(), i(e, t, s, {
					start: n,
					end: n + a - 1
				}) && e.closePath(), e.stroke()
			}(e, t, n, a)
		}
		class yi extends vo {
			constructor(e) {
				super(), this.animated = !0, this.options = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, e && Object.assign(this, e)
			}
			updateControlPoints(e, t) {
				const n = this,
					a = n.options;
				if ((a.tension || "monotone" === a.cubicInterpolationMode) && !a.stepped && !n._pointsUpdated) {
					const r = a.spanGaps ? n._loop : n._fullLoop;
					ka(n._points, a, e, r, t), n._pointsUpdated = !0
				}
			}
			set points(e) {
				const t = this;
				t._points = e, delete t._segments, delete t._path, t._pointsUpdated = !1
			}
			get points() {
				return this._points
			}
			get segments() {
				return this._segments || (this._segments = function(e, t) {
					const n = e.points,
						a = e.options.spanGaps,
						r = n.length;
					if (!r) return [];
					const o = !!e._loop,
						{
							start: i,
							end: s
						} = function(e, t, n, a) {
							let r = 0,
								o = t - 1;
							if (n && !a)
								for (; r < t && !e[r].skip;) r++;
							for (; r < t && e[r].skip;) r++;
							for (r %= t, n && (o += r); o > r && e[o % t].skip;) o--;
							return o %= t, {
								start: r,
								end: o
							}
						}(n, r, o, a);
					return Ga(e, !0 === a ? [{
						start: i,
						end: s,
						loop: o
					}] : function(e, t, n, a) {
						const r = e.length,
							o = [];
						let i, s = t,
							l = e[t];
						for (i = t + 1; i <= n; ++i) {
							const n = e[i % r];
							n.skip || n.stop ? l.skip || (a = !1, o.push({
								start: t % r,
								end: (i - 1) % r,
								loop: a
							}), t = s = n.stop ? i : null) : (s = i, l.skip && (t = i)), l = n
						}
						return null !== s && o.push({
							start: t % r,
							end: s % r,
							loop: a
						}), o
					}(n, i, s < i ? s + r : s, !!e._fullLoop && 0 === i && s === r - 1), n, t)
				}(this, this.options.segment))
			}
			first() {
				const e = this.segments,
					t = this.points;
				return e.length && t[e[0].start]
			}
			last() {
				const e = this.segments,
					t = this.points,
					n = e.length;
				return n && t[e[n - 1].end]
			}
			interpolate(e, t) {
				const n = this,
					a = n.options,
					r = e[t],
					o = n.points,
					i = Qa(n, {
						property: t,
						start: r,
						end: r
					});
				if (!i.length) return;
				const s = [],
					l = function(e) {
						return e.stepped ? za : e.tension || "monotone" === e.cubicInterpolationMode ? Va : La
					}(a);
				let c, u;
				for (c = 0, u = i.length; c < u; ++c) {
					const {
						start: n,
						end: u
					} = i[c], d = o[n], h = o[u];
					if (d === h) {
						s.push(d);
						continue
					}
					const f = l(d, h, Math.abs((r - d[t]) / (h[t] - d[t])), a.stepped);
					f[t] = e[t], s.push(f)
				}
				return 1 === s.length ? s[0] : s
			}
			pathSegment(e, t, n) {
				return pi(this)(e, this, t, n)
			}
			path(e, t, n) {
				const a = this,
					r = a.segments,
					o = pi(a);
				let i = a._loop;
				t = t || 0, n = n || a.points.length - t;
				for (const s of r) i &= o(e, a, s, {
					start: t,
					end: t + n - 1
				});
				return !!i
			}
			draw(e, t, n, a) {
				const r = this,
					o = r.options || {};
				(r.points || []).length && o.borderWidth && (e.save(), gi(e, r, n, a), e.restore(), r.animated && (r._pointsUpdated = !1, r._path = void 0))
			}
		}

		function bi(e, t, n, a) {
			const r = e.options,
				{
					[n]: o
				} = e.getProps([n], a);
			return Math.abs(t - o) < r.radius + r.hitRadius
		}
		yi.id = "line", yi.defaults = {
			borderCapStyle: "butt",
			borderDash: [],
			borderDashOffset: 0,
			borderJoinStyle: "miter",
			borderWidth: 3,
			capBezierPoints: !0,
			cubicInterpolationMode: "default",
			fill: !1,
			spanGaps: !1,
			stepped: !1,
			tension: 0
		}, yi.defaultRoutes = {
			backgroundColor: "backgroundColor",
			borderColor: "borderColor"
		}, yi.descriptors = {
			_scriptable: !0,
			_indexable: e => "borderDash" !== e && "fill" !== e
		};
		class vi extends vo {
			constructor(e) {
				super(), this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, e && Object.assign(this, e)
			}
			inRange(e, t, n) {
				const a = this.options,
					{
						x: r,
						y: o
					} = this.getProps(["x", "y"], n);
				return Math.pow(e - r, 2) + Math.pow(t - o, 2) < Math.pow(a.hitRadius + a.radius, 2)
			}
			inXRange(e, t) {
				return bi(this, e, "x", t)
			}
			inYRange(e, t) {
				return bi(this, e, "y", t)
			}
			getCenterPoint(e) {
				const {
					x: t,
					y: n
				} = this.getProps(["x", "y"], e);
				return {
					x: t,
					y: n
				}
			}
			size(e) {
				let t = (e = e || this.options || {}).radius || 0;
				t = Math.max(t, t && e.hoverRadius || 0);
				return 2 * (t + (t && e.borderWidth || 0))
			}
			draw(e, t) {
				const n = this,
					a = n.options;
				n.skip || a.radius < .1 || !Rn(n, t, n.size(a) / 2) || (e.strokeStyle = a.borderColor, e.lineWidth = a.borderWidth, e.fillStyle = a.backgroundColor, On(e, a, n.x, n.y))
			}
			getRange() {
				const e = this.options || {};
				return e.radius + e.hitRadius
			}
		}

		function xi(e, t) {
			const {
				x: n,
				y: a,
				base: r,
				width: o,
				height: i
			} = e.getProps(["x", "y", "base", "width", "height"], t);
			let s, l, c, u, d;
			return e.horizontal ? (d = i / 2, s = Math.min(n, r), l = Math.max(n, r), c = a - d, u = a + d) : (d = o / 2, s = n - d, l = n + d, c = Math.min(a, r), u = Math.max(a, r)), {
				left: s,
				top: c,
				right: l,
				bottom: u
			}
		}

		function wi(e, t, n, a) {
			return e ? 0 : Lt(t, n, a)
		}

		function Ti(e) {
			const t = xi(e),
				n = t.right - t.left,
				a = t.bottom - t.top,
				r = function(e, t, n) {
					const a = e.options.borderWidth,
						r = e.borderSkipped,
						o = Zn(a);
					return {
						t: wi(r.top, o.top, 0, n),
						r: wi(r.right, o.right, 0, t),
						b: wi(r.bottom, o.bottom, 0, n),
						l: wi(r.left, o.left, 0, t)
					}
				}(e, n / 2, a / 2),
				o = function(e, t, n) {
					const {
						enableBorderRadius: a
					} = e.getProps(["enableBorderRadius"]), r = e.options.borderRadius, o = Qn(r), i = Math.min(t, n), s = e.borderSkipped, l = a || Xe(r);
					return {
						topLeft: wi(!l || s.top || s.left, o.topLeft, 0, i),
						topRight: wi(!l || s.top || s.right, o.topRight, 0, i),
						bottomLeft: wi(!l || s.bottom || s.left, o.bottomLeft, 0, i),
						bottomRight: wi(!l || s.bottom || s.right, o.bottomRight, 0, i)
					}
				}(e, n / 2, a / 2);
			return {
				outer: {
					x: t.left,
					y: t.top,
					w: n,
					h: a,
					radius: o
				},
				inner: {
					x: t.left + r.l,
					y: t.top + r.t,
					w: n - r.l - r.r,
					h: a - r.t - r.b,
					radius: {
						topLeft: Math.max(0, o.topLeft - Math.max(r.t, r.l)),
						topRight: Math.max(0, o.topRight - Math.max(r.t, r.r)),
						bottomLeft: Math.max(0, o.bottomLeft - Math.max(r.b, r.l)),
						bottomRight: Math.max(0, o.bottomRight - Math.max(r.b, r.r))
					}
				}
			}
		}

		function _i(e, t, n, a) {
			const r = null === t,
				o = null === n,
				i = e && !(r && o) && xi(e, a);
			return i && (r || t >= i.left && t <= i.right) && (o || n >= i.top && n <= i.bottom)
		}

		function ki(e, t) {
			e.rect(t.x, t.y, t.w, t.h)
		}

		function Pi(e, t, n = {}) {
			const a = e.x !== n.x ? -t : 0,
				r = e.y !== n.y ? -t : 0,
				o = (e.x + e.w !== n.x + n.w ? t : 0) - a,
				i = (e.y + e.h !== n.y + n.h ? t : 0) - r;
			return {
				x: e.x + a,
				y: e.y + r,
				w: e.w + o,
				h: e.h + i,
				radius: e.radius
			}
		}
		vi.id = "point", vi.defaults = {
			borderWidth: 1,
			hitRadius: 1,
			hoverBorderWidth: 1,
			hoverRadius: 4,
			pointStyle: "circle",
			radius: 3,
			rotation: 0
		}, vi.defaultRoutes = {
			backgroundColor: "backgroundColor",
			borderColor: "borderColor"
		};
		class Ei extends vo {
			constructor(e) {
				super(), this.options = void 0, this.horizontal = void 0, this.base = void 0, this.width = void 0, this.height = void 0, e && Object.assign(this, e)
			}
			draw(e) {
				const t = this.options,
					{
						inner: n,
						outer: a
					} = Ti(this),
					r = (o = a.radius).topLeft || o.topRight || o.bottomLeft || o.bottomRight ? jn : ki;
				var o;
				const i = .33;
				e.save(), a.w === n.w && a.h === n.h || (e.beginPath(), r(e, Pi(a, i, n)), e.clip(), r(e, Pi(n, -.33, a)), e.fillStyle = t.borderColor, e.fill("evenodd")), e.beginPath(), r(e, Pi(n, i, a)), e.fillStyle = t.backgroundColor, e.fill(), e.restore()
			}
			inRange(e, t, n) {
				return _i(this, e, t, n)
			}
			inXRange(e, t) {
				return _i(this, e, null, t)
			}
			inYRange(e, t) {
				return _i(this, null, e, t)
			}
			getCenterPoint(e) {
				const {
					x: t,
					y: n,
					base: a,
					horizontal: r
				} = this.getProps(["x", "y", "base", "horizontal"], e);
				return {
					x: r ? (t + a) / 2 : t,
					y: r ? n : (n + a) / 2
				}
			}
			getRange(e) {
				return "x" === e ? this.width / 2 : this.height / 2
			}
		}
		Ei.id = "bar", Ei.defaults = {
			borderSkipped: "start",
			borderWidth: 0,
			borderRadius: 0,
			enableBorderRadius: !0,
			pointStyle: void 0
		}, Ei.defaultRoutes = {
			backgroundColor: "backgroundColor",
			borderColor: "borderColor"
		};
		var Si = Object.freeze({
			__proto__: null,
			ArcElement: li,
			LineElement: yi,
			PointElement: vi,
			BarElement: Ei
		});

		function Ci(e) {
			if (e._decimated) {
				const t = e._data;
				delete e._decimated, delete e._data, Object.defineProperty(e, "data", {
					value: t
				})
			}
		}

		function Mi(e) {
			e.data.datasets.forEach((e => {
				Ci(e)
			}))
		}
		var Ni = {
			id: "decimation",
			defaults: {
				algorithm: "min-max",
				enabled: !1
			},
			beforeElementsUpdate: (e, t, n) => {
				if (!n.enabled) return void Mi(e);
				const a = e.width;
				e.data.datasets.forEach(((t, r) => {
					const {
						_data: o,
						indexAxis: i
					} = t, s = e.getDatasetMeta(r), l = o || t.data;
					if ("y" === Kn([i, e.options.indexAxis])) return;
					if ("line" !== s.type) return;
					const c = e.scales[s.xAxisID];
					if ("linear" !== c.type && "time" !== c.type) return;
					if (e.options.parsing) return;
					let {
						start: u,
						count: d
					} = function(e, t) {
						const n = t.length;
						let a, r = 0;
						const {
							iScale: o
						} = e, {
							min: i,
							max: s,
							minDefined: l,
							maxDefined: c
						} = o.getUserBounds();
						return l && (r = Lt(ea(t, o.axis, i).lo, 0, n - 1)), a = c ? Lt(ea(t, o.axis, s).hi + 1, r, n) - r : n - r, {
							start: r,
							count: a
						}
					}(s, l);
					if (d <= (n.threshold || 4 * a)) return void Ci(t);
					let h;
					switch (Qe(o) && (t._data = l, delete t.data, Object.defineProperty(t, "data", {
							configurable: !0,
							enumerable: !0,
							get: function() {
								return this._decimated
							},
							set: function(e) {
								this._data = e
							}
						})), n.algorithm) {
						case "lttb":
							h = function(e, t, n, a, r) {
								const o = r.samples || a;
								if (o >= n) return e.slice(t, t + n);
								const i = [],
									s = (n - 2) / (o - 2);
								let l = 0;
								const c = t + n - 1;
								let u, d, h, f, p, m = t;
								for (i[l++] = e[m], u = 0; u < o - 2; u++) {
									let a, r = 0,
										o = 0;
									const c = Math.floor((u + 1) * s) + 1 + t,
										g = Math.min(Math.floor((u + 2) * s) + 1, n) + t,
										y = g - c;
									for (a = c; a < g; a++) r += e[a].x, o += e[a].y;
									r /= y, o /= y;
									const b = Math.floor(u * s) + 1 + t,
										v = Math.min(Math.floor((u + 1) * s) + 1, n) + t,
										{
											x,
											y: w
										} = e[m];
									for (h = f = -1, a = b; a < v; a++) f = .5 * Math.abs((x - r) * (e[a].y - w) - (x - e[a].x) * (o - w)), f > h && (h = f, d = e[a], p = a);
									i[l++] = d, m = p
								}
								return i[l++] = e[c], i
							}(l, u, d, a, n);
							break;
						case "min-max":
							h = function(e, t, n, a) {
								let r, o, i, s, l, c, u, d, h, f, p = 0,
									m = 0;
								const g = [],
									y = t + n - 1,
									b = e[t].x,
									v = e[y].x - b;
								for (r = t; r < t + n; ++r) {
									o = e[r], i = (o.x - b) / v * a, s = o.y;
									const t = 0 | i;
									if (t === l) s < h ? (h = s, c = r) : s > f && (f = s, u = r), p = (m * p + o.x) / ++m;
									else {
										const n = r - 1;
										if (!Qe(c) && !Qe(u)) {
											const t = Math.min(c, u),
												a = Math.max(c, u);
											t !== d && t !== n && g.push({
												...e[t],
												x: p
											}), a !== d && a !== n && g.push({
												...e[a],
												x: p
											})
										}
										r > 0 && n !== d && g.push(e[n]), g.push(o), l = t, m = 0, h = f = s, c = u = d = r
									}
								}
								return g
							}(l, u, d, a);
							break;
						default:
							throw new Error(`Unsupported decimation algorithm '${n.algorithm}'`)
					}
					t._decimated = h
				}))
			},
			destroy(e) {
				Mi(e)
			}
		};

		function $i(e, t, n) {
			const a = function(e) {
				const t = e.options,
					n = t.fill;
				let a = et(n && n.target, n);
				return void 0 === a && (a = !!t.backgroundColor), !1 !== a && null !== a && (!0 === a ? "origin" : a)
			}(e);
			if (Xe(a)) return !isNaN(a.value) && a;
			let r = parseFloat(a);
			return Ke(r) && Math.floor(r) === r ? ("-" !== a[0] && "+" !== a[0] || (r = t + r), !(r === t || r < 0 || r >= n) && r) : ["origin", "start", "end", "stack", "shape"].indexOf(a) >= 0 && a
		}
		class Ai {
			constructor(e) {
				this.x = e.x, this.y = e.y, this.radius = e.radius
			}
			pathSegment(e, t, n) {
				const {
					x: a,
					y: r,
					radius: o
				} = this;
				return t = t || {
					start: 0,
					end: bt
				}, e.arc(a, r, o, t.end, t.start, !0), !n.bounds
			}
			interpolate(e) {
				const {
					x: t,
					y: n,
					radius: a
				} = this, r = e.angle;
				return {
					x: t + Math.cos(r) * a,
					y: n + Math.sin(r) * a,
					angle: r
				}
			}
		}

		function Ii(e) {
			return (e.scale || {}).getPointPositionForValue ? function(e) {
				const {
					scale: t,
					fill: n
				} = e, a = t.options, r = t.getLabels().length, o = [], i = a.reverse ? t.max : t.min, s = a.reverse ? t.min : t.max;
				let l, c, u;
				if (u = "start" === n ? i : "end" === n ? s : Xe(n) ? n.value : t.getBaseValue(), a.grid.circular) return c = t.getPointPositionForValue(0, i), new Ai({
					x: c.x,
					y: c.y,
					radius: t.getDistanceFromCenterForValue(u)
				});
				for (l = 0; l < r; ++l) o.push(t.getPointPositionForValue(l, u));
				return o
			}(e) : function(e) {
				const {
					scale: t = {},
					fill: n
				} = e;
				let a, r = null;
				return "start" === n ? r = t.bottom : "end" === n ? r = t.top : Xe(n) ? r = t.getPixelForValue(n.value) : t.getBasePixel && (r = t.getBasePixel()), Ke(r) ? (a = t.isHorizontal(), {
					x: a ? r : null,
					y: a ? null : r
				}) : null
			}(e)
		}

		function Oi(e, t, n) {
			for (; t > e; t--) {
				const e = n[t];
				if (!isNaN(e.x) && !isNaN(e.y)) break
			}
			return t
		}

		function Ri(e) {
			const {
				chart: t,
				scale: n,
				index: a,
				line: r
			} = e, o = [], i = r.segments, s = r.points, l = function(e, t) {
				const n = [],
					a = e.getSortedVisibleDatasetMetas();
				for (let e = 0; e < a.length; e++) {
					const r = a[e];
					if (r.index === t) break;
					Di(r) && n.unshift(r.dataset)
				}
				return n
			}(t, a);
			l.push(zi({
				x: null,
				y: n.bottom
			}, r));
			for (let e = 0; e < i.length; e++) {
				const t = i[e];
				for (let e = t.start; e <= t.end; e++) Fi(o, s[e], l)
			}
			return new yi({
				points: o,
				options: {}
			})
		}
		const Di = e => "line" === e.type && !e.hidden;

		function Fi(e, t, n) {
			const a = [];
			for (let r = 0; r < n.length; r++) {
				const o = n[r],
					{
						first: i,
						last: s,
						point: l
					} = Li(o, t, "x");
				if (!(!l || i && s))
					if (i) a.unshift(l);
					else if (e.push(l), !s) break
			}
			e.push(...a)
		}

		function Li(e, t, n) {
			const a = e.interpolate(t, n);
			if (!a) return {};
			const r = a[n],
				o = e.segments,
				i = e.points;
			let s = !1,
				l = !1;
			for (let e = 0; e < o.length; e++) {
				const t = o[e],
					a = i[t.start][n],
					c = i[t.end][n];
				if (r >= a && r <= c) {
					s = r === a, l = r === c;
					break
				}
			}
			return {
				first: s,
				last: l,
				point: a
			}
		}

		function zi(e, t) {
			let n = [],
				a = !1;
			return Ge(e) ? (a = !0, n = e) : n = function(e, t) {
				const {
					x: n = null,
					y: a = null
				} = e || {}, r = t.points, o = [];
				return t.segments.forEach((({
					start: e,
					end: t
				}) => {
					t = Oi(e, t, r);
					const i = r[e],
						s = r[t];
					null !== a ? (o.push({
						x: i.x,
						y: a
					}), o.push({
						x: s.x,
						y: a
					})) : null !== n && (o.push({
						x: n,
						y: i.y
					}), o.push({
						x: n,
						y: s.y
					}))
				})), o
			}(e, t), n.length ? new yi({
				points: n,
				options: {
					tension: 0
				},
				_loop: a,
				_fullLoop: a
			}) : null
		}

		function Vi(e, t, n) {
			let a = e[t].fill;
			const r = [t];
			let o;
			if (!n) return a;
			for (; !1 !== a && -1 === r.indexOf(a);) {
				if (!Ke(a)) return a;
				if (o = e[a], !o) return !1;
				if (o.visible) return a;
				r.push(a), a = o.fill
			}
			return !1
		}

		function Bi(e, t, n) {
			e.beginPath(), t.path(e), e.lineTo(t.last().x, n), e.lineTo(t.first().x, n), e.closePath(), e.clip()
		}

		function ji(e, t, n, a) {
			if (a) return;
			let r = t[e],
				o = n[e];
			return "angle" === e && (r = Dt(r), o = Dt(o)), {
				property: e,
				start: r,
				end: o
			}
		}

		function Hi(e, t, n, a) {
			return e && t ? a(e[n], t[n]) : e ? e[n] : t ? t[n] : 0
		}

		function qi(e, t, n) {
			const {
				top: a,
				bottom: r
			} = t.chart.chartArea, {
				property: o,
				start: i,
				end: s
			} = n || {};
			"x" === o && (e.beginPath(), e.rect(i, a, s - i, r - a), e.clip())
		}

		function Wi(e, t, n, a) {
			const r = t.interpolate(n, a);
			r && e.lineTo(r.x, r.y)
		}

		function Yi(e, t) {
			const {
				line: n,
				target: a,
				property: r,
				color: o,
				scale: i
			} = t, s = function(e, t, n) {
				const a = e.segments,
					r = e.points,
					o = t.points,
					i = [];
				for (const e of a) {
					let {
						start: a,
						end: s
					} = e;
					s = Oi(a, s, r);
					const l = ji(n, r[a], r[s], e.loop);
					if (!t.segments) {
						i.push({
							source: e,
							target: l,
							start: r[a],
							end: r[s]
						});
						continue
					}
					const c = Qa(t, l);
					for (const t of c) {
						const a = ji(n, o[t.start], o[t.end], t.loop),
							s = Za(e, r, a);
						for (const e of s) i.push({
							source: e,
							target: t,
							start: {
								[n]: Hi(l, a, "start", Math.max)
							},
							end: {
								[n]: Hi(l, a, "end", Math.min)
							}
						})
					}
				}
				return i
			}(n, a, r);
			for (const {
					source: t,
					target: l,
					start: c,
					end: u
				}
				of s) {
				const {
					style: {
						backgroundColor: s = o
					} = {}
				} = t, d = !0 !== a;
				e.save(), e.fillStyle = s, qi(e, i, d && ji(r, c, u)), e.beginPath();
				const h = !!n.pathSegment(e, t);
				let f;
				if (d) {
					h ? e.closePath() : Wi(e, a, u, r);
					const t = !!a.pathSegment(e, l, {
						move: h,
						reverse: !0
					});
					f = h && t, f || Wi(e, a, c, r)
				}
				e.closePath(), e.fill(f ? "evenodd" : "nonzero"), e.restore()
			}
		}

		function Ui(e, t, n) {
			const a = function(e) {
					const {
						chart: t,
						fill: n,
						line: a
					} = e;
					if (Ke(n)) return function(e, t) {
						const n = e.getDatasetMeta(t);
						return n && e.isDatasetVisible(t) ? n.dataset : null
					}(t, n);
					if ("stack" === n) return Ri(e);
					if ("shape" === n) return !0;
					const r = Ii(e);
					return r instanceof Ai ? r : zi(r, a)
				}(t),
				{
					line: r,
					scale: o,
					axis: i
				} = t,
				s = r.options,
				l = s.fill,
				c = s.backgroundColor,
				{
					above: u = c,
					below: d = c
				} = l || {};
			a && r.points.length && (Dn(e, n), function(e, t) {
				const {
					line: n,
					target: a,
					above: r,
					below: o,
					area: i,
					scale: s
				} = t, l = n._loop ? "angle" : t.axis;
				e.save(), "x" === l && o !== r && (Bi(e, a, i.top), Yi(e, {
					line: n,
					target: a,
					color: r,
					scale: s,
					property: l
				}), e.restore(), e.save(), Bi(e, a, i.bottom)), Yi(e, {
					line: n,
					target: a,
					color: o,
					scale: s,
					property: l
				}), e.restore()
			}(e, {
				line: r,
				target: a,
				above: u,
				below: d,
				area: n,
				scale: o,
				axis: i
			}), Fn(e))
		}
		var Zi = {
			id: "filler",
			afterDatasetsUpdate(e, t, n) {
				const a = (e.data.datasets || []).length,
					r = [];
				let o, i, s, l;
				for (i = 0; i < a; ++i) o = e.getDatasetMeta(i), s = o.dataset, l = null, s && s.options && s instanceof yi && (l = {
					visible: e.isDatasetVisible(i),
					index: i,
					fill: $i(s, i, a),
					chart: e,
					axis: o.controller.options.indexAxis,
					scale: o.vScale,
					line: s
				}), o.$filler = l, r.push(l);
				for (i = 0; i < a; ++i) l = r[i], l && !1 !== l.fill && (l.fill = Vi(r, i, n.propagate))
			},
			beforeDraw(e, t, n) {
				const a = "beforeDraw" === n.drawTime,
					r = e.getSortedVisibleDatasetMetas(),
					o = e.chartArea;
				for (let t = r.length - 1; t >= 0; --t) {
					const n = r[t].$filler;
					n && (n.line.updateControlPoints(o, n.axis), a && Ui(e.ctx, n, o))
				}
			},
			beforeDatasetsDraw(e, t, n) {
				if ("beforeDatasetsDraw" !== n.drawTime) return;
				const a = e.getSortedVisibleDatasetMetas();
				for (let t = a.length - 1; t >= 0; --t) {
					const n = a[t].$filler;
					n && Ui(e.ctx, n, e.chartArea)
				}
			},
			beforeDatasetDraw(e, t, n) {
				const a = t.meta.$filler;
				a && !1 !== a.fill && "beforeDatasetDraw" === n.drawTime && Ui(e.ctx, a, e.chartArea)
			},
			defaults: {
				propagate: !0,
				drawTime: "beforeDatasetDraw"
			}
		};
		const Qi = (e, t) => {
			let {
				boxHeight: n = t,
				boxWidth: a = t
			} = e;
			return e.usePointStyle && (n = Math.min(n, t), a = Math.min(a, t)), {
				boxWidth: a,
				boxHeight: n,
				itemHeight: Math.max(t, n)
			}
		};
		class Gi extends vo {
			constructor(e) {
				super(), this._added = !1, this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1, this.chart = e.chart, this.options = e.options, this.ctx = e.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this._margins = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0
			}
			update(e, t, n) {
				const a = this;
				a.maxWidth = e, a.maxHeight = t, a._margins = n, a.setDimensions(), a.buildLabels(), a.fit()
			}
			setDimensions() {
				const e = this;
				e.isHorizontal() ? (e.width = e.maxWidth, e.left = e._margins.left, e.right = e.width) : (e.height = e.maxHeight, e.top = e._margins.top, e.bottom = e.height)
			}
			buildLabels() {
				const e = this,
					t = e.options.labels || {};
				let n = nt(t.generateLabels, [e.chart], e) || [];
				t.filter && (n = n.filter((n => t.filter(n, e.chart.data)))), t.sort && (n = n.sort(((n, a) => t.sort(n, a, e.chart.data)))), e.options.reverse && n.reverse(), e.legendItems = n
			}
			fit() {
				const e = this,
					{
						options: t,
						ctx: n
					} = e;
				if (!t.display) return void(e.width = e.height = 0);
				const a = t.labels,
					r = Xn(a.font),
					o = r.size,
					i = e._computeTitleHeight(),
					{
						boxWidth: s,
						itemHeight: l
					} = Qi(a, o);
				let c, u;
				n.font = r.string, e.isHorizontal() ? (c = e.maxWidth, u = e._fitRows(i, o, s, l) + 10) : (u = e.maxHeight, c = e._fitCols(i, o, s, l) + 10), e.width = Math.min(c, t.maxWidth || e.maxWidth), e.height = Math.min(u, t.maxHeight || e.maxHeight)
			}
			_fitRows(e, t, n, a) {
				const r = this,
					{
						ctx: o,
						maxWidth: i,
						options: {
							labels: {
								padding: s
							}
						}
					} = r,
					l = r.legendHitBoxes = [],
					c = r.lineWidths = [0],
					u = a + s;
				let d = e;
				o.textAlign = "left", o.textBaseline = "middle";
				let h = -1,
					f = -u;
				return r.legendItems.forEach(((e, r) => {
					const p = n + t / 2 + o.measureText(e.text).width;
					(0 === r || c[c.length - 1] + p + 2 * s > i) && (d += u, c[c.length - (r > 0 ? 0 : 1)] = 0, f += u, h++), l[r] = {
						left: 0,
						top: f,
						row: h,
						width: p,
						height: a
					}, c[c.length - 1] += p + s
				})), d
			}
			_fitCols(e, t, n, a) {
				const r = this,
					{
						ctx: o,
						maxHeight: i,
						options: {
							labels: {
								padding: s
							}
						}
					} = r,
					l = r.legendHitBoxes = [],
					c = r.columnSizes = [],
					u = i - e;
				let d = s,
					h = 0,
					f = 0,
					p = 0,
					m = 0;
				return r.legendItems.forEach(((e, r) => {
					const i = n + t / 2 + o.measureText(e.text).width;
					r > 0 && f + a + 2 * s > u && (d += h + s, c.push({
						width: h,
						height: f
					}), p += h + s, m++, h = f = 0), l[r] = {
						left: p,
						top: f,
						col: m,
						width: i,
						height: a
					}, h = Math.max(h, i), f += a + s
				})), d += h, c.push({
					width: h,
					height: f
				}), d
			}
			adjustHitBoxes() {
				const e = this;
				if (!e.options.display) return;
				const t = e._computeTitleHeight(),
					{
						legendHitBoxes: n,
						options: {
							align: a,
							labels: {
								padding: r
							},
							rtl: o
						}
					} = e,
					i = Ha(o, e.left, e.width);
				if (this.isHorizontal()) {
					let o = 0,
						s = Ye(a, e.left + r, e.right - e.lineWidths[o]);
					for (const l of n) o !== l.row && (o = l.row, s = Ye(a, e.left + r, e.right - e.lineWidths[o])), l.top += e.top + t + r, l.left = i.leftForLtr(i.x(s), l.width), s += l.width + r
				} else {
					let o = 0,
						s = Ye(a, e.top + t + r, e.bottom - e.columnSizes[o].height);
					for (const l of n) l.col !== o && (o = l.col, s = Ye(a, e.top + t + r, e.bottom - e.columnSizes[o].height)), l.top = s, l.left += e.left + r, l.left = i.leftForLtr(i.x(l.left), l.width), s += l.height + r
				}
			}
			isHorizontal() {
				return "top" === this.options.position || "bottom" === this.options.position
			}
			draw() {
				const e = this;
				if (e.options.display) {
					const t = e.ctx;
					Dn(t, e), e._draw(), Fn(t)
				}
			}
			_draw() {
				const e = this,
					{
						options: t,
						columnSizes: n,
						lineWidths: a,
						ctx: r
					} = e,
					{
						align: o,
						labels: i
					} = t,
					s = Mn.color,
					l = Ha(t.rtl, e.left, e.width),
					c = Xn(i.font),
					{
						color: u,
						padding: d
					} = i,
					h = c.size,
					f = h / 2;
				let p;
				e.drawTitle(), r.textAlign = l.textAlign("left"), r.textBaseline = "middle", r.lineWidth = .5, r.font = c.string;
				const {
					boxWidth: m,
					boxHeight: g,
					itemHeight: y
				} = Qi(i, h), b = e.isHorizontal(), v = this._computeTitleHeight();
				p = b ? {
					x: Ye(o, e.left + d, e.right - a[0]),
					y: e.top + d + v,
					line: 0
				} : {
					x: e.left + d,
					y: Ye(o, e.top + v + d, e.bottom - n[0].height),
					line: 0
				}, qa(e.ctx, t.textDirection);
				const x = y + d;
				e.legendItems.forEach(((w, T) => {
					r.strokeStyle = w.fontColor || u, r.fillStyle = w.fontColor || u;
					const _ = r.measureText(w.text).width,
						k = l.textAlign(w.textAlign || (w.textAlign = i.textAlign)),
						P = m + f + _;
					let E = p.x,
						S = p.y;
					l.setWidth(e.width), b ? T > 0 && E + P + d > e.right && (S = p.y += x, p.line++, E = p.x = Ye(o, e.left + d, e.right - a[p.line])) : T > 0 && S + x > e.bottom && (E = p.x = E + n[p.line].width + d, p.line++, S = p.y = Ye(o, e.top + v + d, e.bottom - n[p.line].height));
					! function(e, t, n) {
						if (isNaN(m) || m <= 0 || isNaN(g) || g < 0) return;
						r.save();
						const a = et(n.lineWidth, 1);
						if (r.fillStyle = et(n.fillStyle, s), r.lineCap = et(n.lineCap, "butt"), r.lineDashOffset = et(n.lineDashOffset, 0), r.lineJoin = et(n.lineJoin, "miter"), r.lineWidth = a, r.strokeStyle = et(n.strokeStyle, s), r.setLineDash(et(n.lineDash, [])), i.usePointStyle) {
							const o = {
									radius: m * Math.SQRT2 / 2,
									pointStyle: n.pointStyle,
									rotation: n.rotation,
									borderWidth: a
								},
								i = l.xPlus(e, m / 2);
							On(r, o, i, t + f)
						} else {
							const o = t + Math.max((h - g) / 2, 0),
								i = l.leftForLtr(e, m),
								s = Qn(n.borderRadius);
							r.beginPath(), Object.values(s).some((e => 0 !== e)) ? jn(r, {
								x: i,
								y: o,
								w: m,
								h: g,
								radius: s
							}) : r.rect(i, o, m, g), r.fill(), 0 !== a && r.stroke()
						}
						r.restore()
					}(l.x(E), S, w), E = ((e, t, n, a) => e === (a ? "left" : "right") ? n : "center" === e ? (t + n) / 2 : t)(k, E + m + f, b ? E + P : e.right, t.rtl),
						function(e, t, n) {
							Vn(r, n.text, e, t + y / 2, c, {
								strikethrough: n.hidden,
								textAlign: l.textAlign(n.textAlign)
							})
						}(l.x(E), S, w), b ? p.x += P + d : p.y += x
				})), Wa(e.ctx, t.textDirection)
			}
			drawTitle() {
				const e = this,
					t = e.options,
					n = t.title,
					a = Xn(n.font),
					r = Gn(n.padding);
				if (!n.display) return;
				const o = Ha(t.rtl, e.left, e.width),
					i = e.ctx,
					s = n.position,
					l = a.size / 2,
					c = r.top + l;
				let u, d = e.left,
					h = e.width;
				if (this.isHorizontal()) h = Math.max(...e.lineWidths), u = e.top + c, d = Ye(t.align, d, e.right - h);
				else {
					const n = e.columnSizes.reduce(((e, t) => Math.max(e, t.height)), 0);
					u = c + Ye(t.align, e.top, e.bottom - n - t.labels.padding - e._computeTitleHeight())
				}
				const f = Ye(s, d, d + h);
				i.textAlign = o.textAlign(We(s)), i.textBaseline = "middle", i.strokeStyle = n.color, i.fillStyle = n.color, i.font = a.string, Vn(i, n.text, f, u, a)
			}
			_computeTitleHeight() {
				const e = this.options.title,
					t = Xn(e.font),
					n = Gn(e.padding);
				return e.display ? t.lineHeight + n.height : 0
			}
			_getLegendItemAt(e, t) {
				const n = this;
				let a, r, o;
				if (e >= n.left && e <= n.right && t >= n.top && t <= n.bottom)
					for (o = n.legendHitBoxes, a = 0; a < o.length; ++a)
						if (r = o[a], e >= r.left && e <= r.left + r.width && t >= r.top && t <= r.top + r.height) return n.legendItems[a];
				return null
			}
			handleEvent(e) {
				const t = this,
					n = t.options;
				if (! function(e, t) {
						if ("mousemove" === e && (t.onHover || t.onLeave)) return !0;
						if (t.onClick && ("click" === e || "mouseup" === e)) return !0;
						return !1
					}(e.type, n)) return;
				const a = t._getLegendItemAt(e.x, e.y);
				if ("mousemove" === e.type) {
					const i = t._hoveredItem,
						s = (o = a, null !== (r = i) && null !== o && r.datasetIndex === o.datasetIndex && r.index === o.index);
					i && !s && nt(n.onLeave, [e, i, t], t), t._hoveredItem = a, a && !s && nt(n.onHover, [e, a, t], t)
				} else a && nt(n.onClick, [e, a, t], t);
				var r, o
			}
		}
		var Xi = {
			id: "legend",
			_element: Gi,
			start(e, t, n) {
				const a = e.legend = new Gi({
					ctx: e.ctx,
					options: n,
					chart: e
				});
				to.configure(e, a, n), to.addBox(e, a)
			},
			stop(e) {
				to.removeBox(e, e.legend), delete e.legend
			},
			beforeUpdate(e, t, n) {
				const a = e.legend;
				to.configure(e, a, n), a.options = n
			},
			afterUpdate(e) {
				const t = e.legend;
				t.buildLabels(), t.adjustHitBoxes()
			},
			afterEvent(e, t) {
				t.replay || e.legend.handleEvent(t.event)
			},
			defaults: {
				display: !0,
				position: "top",
				align: "center",
				fullSize: !0,
				reverse: !1,
				weight: 1e3,
				onClick(e, t, n) {
					const a = t.datasetIndex,
						r = n.chart;
					r.isDatasetVisible(a) ? (r.hide(a), t.hidden = !0) : (r.show(a), t.hidden = !1)
				},
				onHover: null,
				onLeave: null,
				labels: {
					color: e => e.chart.options.color,
					boxWidth: 40,
					padding: 10,
					generateLabels(e) {
						const t = e.data.datasets,
							{
								labels: {
									usePointStyle: n,
									pointStyle: a,
									textAlign: r,
									color: o
								}
							} = e.legend.options;
						return e._getSortedDatasetMetas().map((e => {
							const i = e.controller.getStyle(n ? 0 : void 0),
								s = Gn(i.borderWidth);
							return {
								text: t[e.index].label,
								fillStyle: i.backgroundColor,
								fontColor: o,
								hidden: !e.visible,
								lineCap: i.borderCapStyle,
								lineDash: i.borderDash,
								lineDashOffset: i.borderDashOffset,
								lineJoin: i.borderJoinStyle,
								lineWidth: (s.width + s.height) / 4,
								strokeStyle: i.borderColor,
								pointStyle: a || i.pointStyle,
								rotation: i.rotation,
								textAlign: r || i.textAlign,
								borderRadius: 0,
								datasetIndex: e.index
							}
						}), this)
					}
				},
				title: {
					color: e => e.chart.options.color,
					display: !1,
					position: "center",
					text: ""
				}
			},
			descriptors: {
				_scriptable: e => !e.startsWith("on"),
				labels: {
					_scriptable: e => !["generateLabels", "filter", "sort"].includes(e)
				}
			}
		};
		class Ki extends vo {
			constructor(e) {
				super(), this.chart = e.chart, this.options = e.options, this.ctx = e.ctx, this._padding = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0
			}
			update(e, t) {
				const n = this,
					a = n.options;
				if (n.left = 0, n.top = 0, !a.display) return void(n.width = n.height = n.right = n.bottom = 0);
				n.width = n.right = e, n.height = n.bottom = t;
				const r = Ge(a.text) ? a.text.length : 1;
				n._padding = Gn(a.padding);
				const o = r * Xn(a.font).lineHeight + n._padding.height;
				n.isHorizontal() ? n.height = o : n.width = o
			}
			isHorizontal() {
				const e = this.options.position;
				return "top" === e || "bottom" === e
			}
			_drawArgs(e) {
				const {
					top: t,
					left: n,
					bottom: a,
					right: r,
					options: o
				} = this, i = o.align;
				let s, l, c, u = 0;
				return this.isHorizontal() ? (l = Ye(i, n, r), c = t + e, s = r - n) : ("left" === o.position ? (l = n + e, c = Ye(i, a, t), u = -.5 * yt) : (l = r - e, c = Ye(i, t, a), u = .5 * yt), s = a - t), {
					titleX: l,
					titleY: c,
					maxWidth: s,
					rotation: u
				}
			}
			draw() {
				const e = this,
					t = e.ctx,
					n = e.options;
				if (!n.display) return;
				const a = Xn(n.font),
					r = a.lineHeight / 2 + e._padding.top,
					{
						titleX: o,
						titleY: i,
						maxWidth: s,
						rotation: l
					} = e._drawArgs(r);
				Vn(t, n.text, 0, 0, a, {
					color: n.color,
					maxWidth: s,
					rotation: l,
					textAlign: We(n.align),
					textBaseline: "middle",
					translation: [o, i]
				})
			}
		}
		var Ji = {
			id: "title",
			_element: Ki,
			start(e, t, n) {
				! function(e, t) {
					const n = new Ki({
						ctx: e.ctx,
						options: t,
						chart: e
					});
					to.configure(e, n, t), to.addBox(e, n), e.titleBlock = n
				}(e, n)
			},
			stop(e) {
				const t = e.titleBlock;
				to.removeBox(e, t), delete e.titleBlock
			},
			beforeUpdate(e, t, n) {
				const a = e.titleBlock;
				to.configure(e, a, n), a.options = n
			},
			defaults: {
				align: "center",
				display: !1,
				font: {
					weight: "bold"
				},
				fullSize: !0,
				padding: 10,
				position: "top",
				text: "",
				weight: 2e3
			},
			defaultRoutes: {
				color: "color"
			},
			descriptors: {
				_scriptable: !0,
				_indexable: !1
			}
		};
		const es = new WeakMap;
		var ts = {
			id: "subtitle",
			start(e, t, n) {
				const a = new Ki({
					ctx: e.ctx,
					options: n,
					chart: e
				});
				to.configure(e, a, n), to.addBox(e, a), es.set(e, a)
			},
			stop(e) {
				to.removeBox(e, es.get(e)), es.delete(e)
			},
			beforeUpdate(e, t, n) {
				const a = es.get(e);
				to.configure(e, a, n), a.options = n
			},
			defaults: {
				align: "center",
				display: !1,
				font: {
					weight: "normal"
				},
				fullSize: !0,
				padding: 0,
				position: "top",
				text: "",
				weight: 1500
			},
			defaultRoutes: {
				color: "color"
			},
			descriptors: {
				_scriptable: !0,
				_indexable: !1
			}
		};
		const ns = {
			average(e) {
				if (!e.length) return !1;
				let t, n, a = 0,
					r = 0,
					o = 0;
				for (t = 0, n = e.length; t < n; ++t) {
					const n = e[t].element;
					if (n && n.hasValue()) {
						const e = n.tooltipPosition();
						a += e.x, r += e.y, ++o
					}
				}
				return {
					x: a / o,
					y: r / o
				}
			},
			nearest(e, t) {
				if (!e.length) return !1;
				let n, a, r, o = t.x,
					i = t.y,
					s = Number.POSITIVE_INFINITY;
				for (n = 0, a = e.length; n < a; ++n) {
					const a = e[n].element;
					if (a && a.hasValue()) {
						const e = Ot(t, a.getCenterPoint());
						e < s && (s = e, r = a)
					}
				}
				if (r) {
					const e = r.tooltipPosition();
					o = e.x, i = e.y
				}
				return {
					x: o,
					y: i
				}
			}
		};

		function as(e, t) {
			return t && (Ge(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e
		}

		function rs(e) {
			return ("string" == typeof e || e instanceof String) && e.indexOf("\n") > -1 ? e.split("\n") : e
		}

		function os(e, t) {
			const {
				element: n,
				datasetIndex: a,
				index: r
			} = t, o = e.getDatasetMeta(a).controller, {
				label: i,
				value: s
			} = o.getLabelAndValue(r);
			return {
				chart: e,
				label: i,
				parsed: o.getParsed(r),
				raw: e.data.datasets[a].data[r],
				formattedValue: s,
				dataset: o.getDataset(),
				dataIndex: r,
				datasetIndex: a,
				element: n
			}
		}

		function is(e, t) {
			const n = e._chart.ctx,
				{
					body: a,
					footer: r,
					title: o
				} = e,
				{
					boxWidth: i,
					boxHeight: s
				} = t,
				l = Xn(t.bodyFont),
				c = Xn(t.titleFont),
				u = Xn(t.footerFont),
				d = o.length,
				h = r.length,
				f = a.length,
				p = Gn(t.padding);
			let m = p.height,
				g = 0,
				y = a.reduce(((e, t) => e + t.before.length + t.lines.length + t.after.length), 0);
			if (y += e.beforeBody.length + e.afterBody.length, d && (m += d * c.lineHeight + (d - 1) * t.titleSpacing + t.titleMarginBottom), y) {
				m += f * (t.displayColors ? Math.max(s, l.lineHeight) : l.lineHeight) + (y - f) * l.lineHeight + (y - 1) * t.bodySpacing
			}
			h && (m += t.footerMarginTop + h * u.lineHeight + (h - 1) * t.footerSpacing);
			let b = 0;
			const v = function(e) {
				g = Math.max(g, n.measureText(e).width + b)
			};
			return n.save(), n.font = c.string, at(e.title, v), n.font = l.string, at(e.beforeBody.concat(e.afterBody), v), b = t.displayColors ? i + 2 : 0, at(a, (e => {
				at(e.before, v), at(e.lines, v), at(e.after, v)
			})), b = 0, n.font = u.string, at(e.footer, v), n.restore(), g += p.width, {
				width: g,
				height: m
			}
		}

		function ss(e, t, n, a) {
			const {
				x: r,
				width: o
			} = n, {
				width: i,
				chartArea: {
					left: s,
					right: l
				}
			} = e;
			let c = "center";
			return "center" === a ? c = r <= (s + l) / 2 ? "left" : "right" : r <= o / 2 ? c = "left" : r >= i - o / 2 && (c = "right"),
				function(e, t, n, a) {
					const {
						x: r,
						width: o
					} = a, i = n.caretSize + n.caretPadding;
					return "left" === e && r + o + i > t.width || "right" === e && r - o - i < 0 || void 0
				}(c, e, t, n) && (c = "center"), c
		}

		function ls(e, t, n) {
			const a = t.yAlign || function(e, t) {
				const {
					y: n,
					height: a
				} = t;
				return n < a / 2 ? "top" : n > e.height - a / 2 ? "bottom" : "center"
			}(e, n);
			return {
				xAlign: t.xAlign || ss(e, t, n, a),
				yAlign: a
			}
		}

		function cs(e, t, n, a) {
			const {
				caretSize: r,
				caretPadding: o,
				cornerRadius: i
			} = e, {
				xAlign: s,
				yAlign: l
			} = n, c = r + o, u = i + o;
			let d = function(e, t) {
				let {
					x: n,
					width: a
				} = e;
				return "right" === t ? n -= a : "center" === t && (n -= a / 2), n
			}(t, s);
			const h = function(e, t, n) {
				let {
					y: a,
					height: r
				} = e;
				return "top" === t ? a += n : a -= "bottom" === t ? r + n : r / 2, a
			}(t, l, c);
			return "center" === l ? "left" === s ? d += c : "right" === s && (d -= c) : "left" === s ? d -= u : "right" === s && (d += u), {
				x: Lt(d, 0, a.width - t.width),
				y: Lt(h, 0, a.height - t.height)
			}
		}

		function us(e, t, n) {
			const a = Gn(n.padding);
			return "center" === t ? e.x + e.width / 2 : "right" === t ? e.x + e.width - a.right : e.x + a.left
		}

		function ds(e) {
			return as([], rs(e))
		}

		function hs(e, t) {
			const n = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
			return n ? e.override(n) : e
		}
		class fs extends vo {
			constructor(e) {
				super(), this.opacity = 0, this._active = [], this._chart = e._chart, this._eventPosition = void 0, this._size = void 0, this._cachedAnimations = void 0, this._tooltipItems = [], this.$animations = void 0, this.$context = void 0, this.options = e.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0
			}
			initialize(e) {
				this.options = e, this._cachedAnimations = void 0, this.$context = void 0
			}
			_resolveAnimations() {
				const e = this,
					t = e._cachedAnimations;
				if (t) return t;
				const n = e._chart,
					a = e.options.setContext(e.getContext()),
					r = a.enabled && n.options.animation && a.animations,
					o = new rr(e._chart, r);
				return r._cacheable && (e._cachedAnimations = Object.freeze(o)), o
			}
			getContext() {
				const e = this;
				return e.$context || (e.$context = (t = e._chart.getContext(), n = e, a = e._tooltipItems, Object.assign(Object.create(t), {
					tooltip: n,
					tooltipItems: a,
					type: "tooltip"
				})));
				var t, n, a
			}
			getTitle(e, t) {
				const n = this,
					{
						callbacks: a
					} = t,
					r = a.beforeTitle.apply(n, [e]),
					o = a.title.apply(n, [e]),
					i = a.afterTitle.apply(n, [e]);
				let s = [];
				return s = as(s, rs(r)), s = as(s, rs(o)), s = as(s, rs(i)), s
			}
			getBeforeBody(e, t) {
				return ds(t.callbacks.beforeBody.apply(this, [e]))
			}
			getBody(e, t) {
				const n = this,
					{
						callbacks: a
					} = t,
					r = [];
				return at(e, (e => {
					const t = {
							before: [],
							lines: [],
							after: []
						},
						o = hs(a, e);
					as(t.before, rs(o.beforeLabel.call(n, e))), as(t.lines, o.label.call(n, e)), as(t.after, rs(o.afterLabel.call(n, e))), r.push(t)
				})), r
			}
			getAfterBody(e, t) {
				return ds(t.callbacks.afterBody.apply(this, [e]))
			}
			getFooter(e, t) {
				const n = this,
					{
						callbacks: a
					} = t,
					r = a.beforeFooter.apply(n, [e]),
					o = a.footer.apply(n, [e]),
					i = a.afterFooter.apply(n, [e]);
				let s = [];
				return s = as(s, rs(r)), s = as(s, rs(o)), s = as(s, rs(i)), s
			}
			_createItems(e) {
				const t = this,
					n = t._active,
					a = t._chart.data,
					r = [],
					o = [],
					i = [];
				let s, l, c = [];
				for (s = 0, l = n.length; s < l; ++s) c.push(os(t._chart, n[s]));
				return e.filter && (c = c.filter(((t, n, r) => e.filter(t, n, r, a)))), e.itemSort && (c = c.sort(((t, n) => e.itemSort(t, n, a)))), at(c, (n => {
					const a = hs(e.callbacks, n);
					r.push(a.labelColor.call(t, n)), o.push(a.labelPointStyle.call(t, n)), i.push(a.labelTextColor.call(t, n))
				})), t.labelColors = r, t.labelPointStyles = o, t.labelTextColors = i, t.dataPoints = c, c
			}
			update(e, t) {
				const n = this,
					a = n.options.setContext(n.getContext()),
					r = n._active;
				let o, i = [];
				if (r.length) {
					const e = ns[a.position].call(n, r, n._eventPosition);
					i = n._createItems(a), n.title = n.getTitle(i, a), n.beforeBody = n.getBeforeBody(i, a), n.body = n.getBody(i, a), n.afterBody = n.getAfterBody(i, a), n.footer = n.getFooter(i, a);
					const t = n._size = is(n, a),
						s = Object.assign({}, e, t),
						l = ls(n._chart, a, s),
						c = cs(a, s, l, n._chart);
					n.xAlign = l.xAlign, n.yAlign = l.yAlign, o = {
						opacity: 1,
						x: c.x,
						y: c.y,
						width: t.width,
						height: t.height,
						caretX: e.x,
						caretY: e.y
					}
				} else 0 !== n.opacity && (o = {
					opacity: 0
				});
				n._tooltipItems = i, n.$context = void 0, o && n._resolveAnimations().update(n, o), e && a.external && a.external.call(n, {
					chart: n._chart,
					tooltip: n,
					replay: t
				})
			}
			drawCaret(e, t, n, a) {
				const r = this.getCaretPosition(e, n, a);
				t.lineTo(r.x1, r.y1), t.lineTo(r.x2, r.y2), t.lineTo(r.x3, r.y3)
			}
			getCaretPosition(e, t, n) {
				const {
					xAlign: a,
					yAlign: r
				} = this, {
					cornerRadius: o,
					caretSize: i
				} = n, {
					x: s,
					y: l
				} = e, {
					width: c,
					height: u
				} = t;
				let d, h, f, p, m, g;
				return "center" === r ? (m = l + u / 2, "left" === a ? (d = s, h = d - i, p = m + i, g = m - i) : (d = s + c, h = d + i, p = m - i, g = m + i), f = d) : (h = "left" === a ? s + o + i : "right" === a ? s + c - o - i : this.caretX, "top" === r ? (p = l, m = p - i, d = h - i, f = h + i) : (p = l + u, m = p + i, d = h + i, f = h - i), g = p), {
					x1: d,
					x2: h,
					x3: f,
					y1: p,
					y2: m,
					y3: g
				}
			}
			drawTitle(e, t, n) {
				const a = this,
					r = a.title,
					o = r.length;
				let i, s, l;
				if (o) {
					const c = Ha(n.rtl, a.x, a.width);
					for (e.x = us(a, n.titleAlign, n), t.textAlign = c.textAlign(n.titleAlign), t.textBaseline = "middle", i = Xn(n.titleFont), s = n.titleSpacing, t.fillStyle = n.titleColor, t.font = i.string, l = 0; l < o; ++l) t.fillText(r[l], c.x(e.x), e.y + i.lineHeight / 2), e.y += i.lineHeight + s, l + 1 === o && (e.y += n.titleMarginBottom - s)
				}
			}
			_drawColorBox(e, t, n, a, r) {
				const o = this,
					i = o.labelColors[n],
					s = o.labelPointStyles[n],
					{
						boxHeight: l,
						boxWidth: c
					} = r,
					u = Xn(r.bodyFont),
					d = us(o, "left", r),
					h = a.x(d),
					f = l < u.lineHeight ? (u.lineHeight - l) / 2 : 0,
					p = t.y + f;
				if (r.usePointStyle) {
					const t = {
							radius: Math.min(c, l) / 2,
							pointStyle: s.pointStyle,
							rotation: s.rotation,
							borderWidth: 1
						},
						n = a.leftForLtr(h, c) + c / 2,
						o = p + l / 2;
					e.strokeStyle = r.multiKeyBackground, e.fillStyle = r.multiKeyBackground, On(e, t, n, o), e.strokeStyle = i.borderColor, e.fillStyle = i.backgroundColor, On(e, t, n, o)
				} else {
					e.lineWidth = i.borderWidth || 1, e.strokeStyle = i.borderColor, e.setLineDash(i.borderDash || []), e.lineDashOffset = i.borderDashOffset || 0;
					const t = a.leftForLtr(h, c),
						n = a.leftForLtr(a.xPlus(h, 1), c - 2),
						o = Qn(i.borderRadius);
					Object.values(o).some((e => 0 !== e)) ? (e.beginPath(), e.fillStyle = r.multiKeyBackground, jn(e, {
						x: t,
						y: p,
						w: c,
						h: l,
						radius: o
					}), e.fill(), e.stroke(), e.fillStyle = i.backgroundColor, e.beginPath(), jn(e, {
						x: n,
						y: p + 1,
						w: c - 2,
						h: l - 2,
						radius: o
					}), e.fill()) : (e.fillStyle = r.multiKeyBackground, e.fillRect(t, p, c, l), e.strokeRect(t, p, c, l), e.fillStyle = i.backgroundColor, e.fillRect(n, p + 1, c - 2, l - 2))
				}
				e.fillStyle = o.labelTextColors[n]
			}
			drawBody(e, t, n) {
				const a = this,
					{
						body: r
					} = a,
					{
						bodySpacing: o,
						bodyAlign: i,
						displayColors: s,
						boxHeight: l,
						boxWidth: c
					} = n,
					u = Xn(n.bodyFont);
				let d = u.lineHeight,
					h = 0;
				const f = Ha(n.rtl, a.x, a.width),
					p = function(n) {
						t.fillText(n, f.x(e.x + h), e.y + d / 2), e.y += d + o
					},
					m = f.textAlign(i);
				let g, y, b, v, x, w, T;
				for (t.textAlign = i, t.textBaseline = "middle", t.font = u.string, e.x = us(a, m, n), t.fillStyle = n.bodyColor, at(a.beforeBody, p), h = s && "right" !== m ? "center" === i ? c / 2 + 1 : c + 2 : 0, v = 0, w = r.length; v < w; ++v) {
					for (g = r[v], y = a.labelTextColors[v], t.fillStyle = y, at(g.before, p), b = g.lines, s && b.length && (a._drawColorBox(t, e, v, f, n), d = Math.max(u.lineHeight, l)), x = 0, T = b.length; x < T; ++x) p(b[x]), d = u.lineHeight;
					at(g.after, p)
				}
				h = 0, d = u.lineHeight, at(a.afterBody, p), e.y -= o
			}
			drawFooter(e, t, n) {
				const a = this,
					r = a.footer,
					o = r.length;
				let i, s;
				if (o) {
					const l = Ha(n.rtl, a.x, a.width);
					for (e.x = us(a, n.footerAlign, n), e.y += n.footerMarginTop, t.textAlign = l.textAlign(n.footerAlign), t.textBaseline = "middle", i = Xn(n.footerFont), t.fillStyle = n.footerColor, t.font = i.string, s = 0; s < o; ++s) t.fillText(r[s], l.x(e.x), e.y + i.lineHeight / 2), e.y += i.lineHeight + n.footerSpacing
				}
			}
			drawBackground(e, t, n, a) {
				const {
					xAlign: r,
					yAlign: o
				} = this, {
					x: i,
					y: s
				} = e, {
					width: l,
					height: c
				} = n, u = a.cornerRadius;
				t.fillStyle = a.backgroundColor, t.strokeStyle = a.borderColor, t.lineWidth = a.borderWidth, t.beginPath(), t.moveTo(i + u, s), "top" === o && this.drawCaret(e, t, n, a), t.lineTo(i + l - u, s), t.quadraticCurveTo(i + l, s, i + l, s + u), "center" === o && "right" === r && this.drawCaret(e, t, n, a), t.lineTo(i + l, s + c - u), t.quadraticCurveTo(i + l, s + c, i + l - u, s + c), "bottom" === o && this.drawCaret(e, t, n, a), t.lineTo(i + u, s + c), t.quadraticCurveTo(i, s + c, i, s + c - u), "center" === o && "left" === r && this.drawCaret(e, t, n, a), t.lineTo(i, s + u), t.quadraticCurveTo(i, s, i + u, s), t.closePath(), t.fill(), a.borderWidth > 0 && t.stroke()
			}
			_updateAnimationTarget(e) {
				const t = this,
					n = t._chart,
					a = t.$animations,
					r = a && a.x,
					o = a && a.y;
				if (r || o) {
					const a = ns[e.position].call(t, t._active, t._eventPosition);
					if (!a) return;
					const i = t._size = is(t, e),
						s = Object.assign({}, a, t._size),
						l = ls(n, e, s),
						c = cs(e, s, l, n);
					r._to === c.x && o._to === c.y || (t.xAlign = l.xAlign, t.yAlign = l.yAlign, t.width = i.width, t.height = i.height, t.caretX = a.x, t.caretY = a.y, t._resolveAnimations().update(t, c))
				}
			}
			draw(e) {
				const t = this,
					n = t.options.setContext(t.getContext());
				let a = t.opacity;
				if (!a) return;
				t._updateAnimationTarget(n);
				const r = {
						width: t.width,
						height: t.height
					},
					o = {
						x: t.x,
						y: t.y
					};
				a = Math.abs(a) < .001 ? 0 : a;
				const i = Gn(n.padding),
					s = t.title.length || t.beforeBody.length || t.body.length || t.afterBody.length || t.footer.length;
				n.enabled && s && (e.save(), e.globalAlpha = a, t.drawBackground(o, e, r, n), qa(e, n.textDirection), o.y += i.top, t.drawTitle(o, e, n), t.drawBody(o, e, n), t.drawFooter(o, e, n), Wa(e, n.textDirection), e.restore())
			}
			getActiveElements() {
				return this._active || []
			}
			setActiveElements(e, t) {
				const n = this,
					a = n._active,
					r = e.map((({
						datasetIndex: e,
						index: t
					}) => {
						const a = n._chart.getDatasetMeta(e);
						if (!a) throw new Error("Cannot find a dataset at index " + e);
						return {
							datasetIndex: e,
							element: a.data[t],
							index: t
						}
					})),
					o = !rt(a, r),
					i = n._positionChanged(r, t);
				(o || i) && (n._active = r, n._eventPosition = t, n.update(!0))
			}
			handleEvent(e, t) {
				const n = this,
					a = n.options,
					r = n._active || [];
				let o = !1,
					i = [];
				"mouseout" !== e.type && (i = n._chart.getElementsAtEventForMode(e, a.mode, a, t), a.reverse && i.reverse());
				const s = n._positionChanged(i, e);
				return o = t || !rt(i, r) || s, o && (n._active = i, (a.enabled || a.external) && (n._eventPosition = {
					x: e.x,
					y: e.y
				}, n.update(!0, t))), o
			}
			_positionChanged(e, t) {
				const {
					caretX: n,
					caretY: a,
					options: r
				} = this, o = ns[r.position].call(this, e, t);
				return !1 !== o && (n !== o.x || a !== o.y)
			}
		}
		fs.positioners = ns;
		var ps = {
				id: "tooltip",
				_element: fs,
				positioners: ns,
				afterInit(e, t, n) {
					n && (e.tooltip = new fs({
						_chart: e,
						options: n
					}))
				},
				beforeUpdate(e, t, n) {
					e.tooltip && e.tooltip.initialize(n)
				},
				reset(e, t, n) {
					e.tooltip && e.tooltip.initialize(n)
				},
				afterDraw(e) {
					const t = e.tooltip,
						n = {
							tooltip: t
						};
					!1 !== e.notifyPlugins("beforeTooltipDraw", n) && (t && t.draw(e.ctx), e.notifyPlugins("afterTooltipDraw", n))
				},
				afterEvent(e, t) {
					if (e.tooltip) {
						const n = t.replay;
						e.tooltip.handleEvent(t.event, n) && (t.changed = !0)
					}
				},
				defaults: {
					enabled: !0,
					external: null,
					position: "average",
					backgroundColor: "rgba(0,0,0,0.8)",
					titleColor: "#fff",
					titleFont: {
						weight: "bold"
					},
					titleSpacing: 2,
					titleMarginBottom: 6,
					titleAlign: "left",
					bodyColor: "#fff",
					bodySpacing: 2,
					bodyFont: {},
					bodyAlign: "left",
					footerColor: "#fff",
					footerSpacing: 2,
					footerMarginTop: 6,
					footerFont: {
						weight: "bold"
					},
					footerAlign: "left",
					padding: 6,
					caretPadding: 2,
					caretSize: 5,
					cornerRadius: 6,
					boxHeight: (e, t) => t.bodyFont.size,
					boxWidth: (e, t) => t.bodyFont.size,
					multiKeyBackground: "#fff",
					displayColors: !0,
					borderColor: "rgba(0,0,0,0)",
					borderWidth: 0,
					animation: {
						duration: 400,
						easing: "easeOutQuart"
					},
					animations: {
						numbers: {
							type: "number",
							properties: ["x", "y", "width", "height", "caretX", "caretY"]
						},
						opacity: {
							easing: "linear",
							duration: 200
						}
					},
					callbacks: {
						beforeTitle: Ue,
						title(e) {
							if (e.length > 0) {
								const t = e[0],
									n = t.chart.data.labels,
									a = n ? n.length : 0;
								if (this && this.options && "dataset" === this.options.mode) return t.dataset.label || "";
								if (t.label) return t.label;
								if (a > 0 && t.dataIndex < a) return n[t.dataIndex]
							}
							return ""
						},
						afterTitle: Ue,
						beforeBody: Ue,
						beforeLabel: Ue,
						label(e) {
							if (this && this.options && "dataset" === this.options.mode) return e.label + ": " + e.formattedValue || e.formattedValue;
							let t = e.dataset.label || "";
							t && (t += ": ");
							const n = e.formattedValue;
							return Qe(n) || (t += n), t
						},
						labelColor(e) {
							const t = e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);
							return {
								borderColor: t.borderColor,
								backgroundColor: t.backgroundColor,
								borderWidth: t.borderWidth,
								borderDash: t.borderDash,
								borderDashOffset: t.borderDashOffset,
								borderRadius: 0
							}
						},
						labelTextColor() {
							return this.options.bodyColor
						},
						labelPointStyle(e) {
							const t = e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);
							return {
								pointStyle: t.pointStyle,
								rotation: t.rotation
							}
						},
						afterLabel: Ue,
						afterBody: Ue,
						beforeFooter: Ue,
						footer: Ue,
						afterFooter: Ue
					}
				},
				defaultRoutes: {
					bodyFont: "font",
					footerFont: "font",
					titleFont: "font"
				},
				descriptors: {
					_scriptable: e => "filter" !== e && "itemSort" !== e && "external" !== e,
					_indexable: !1,
					callbacks: {
						_scriptable: !1,
						_indexable: !1
					},
					animation: {
						_fallback: !1
					},
					animations: {
						_fallback: "animation"
					}
				},
				additionalOptionScopes: ["interaction"]
			},
			ms = Object.freeze({
				__proto__: null,
				Decimation: Ni,
				Filler: Zi,
				Legend: Xi,
				SubTitle: ts,
				Title: Ji,
				Tooltip: ps
			});

		function gs(e, t, n) {
			const a = e.indexOf(t);
			if (-1 === a) return ((e, t, n) => "string" == typeof t ? e.push(t) - 1 : isNaN(t) ? null : n)(e, t, n);
			return a !== e.lastIndexOf(t) ? n : a
		}
		class ys extends No {
			constructor(e) {
				super(e), this._startValue = void 0, this._valueRange = 0
			}
			parse(e, t) {
				if (Qe(e)) return null;
				const n = this.getLabels();
				return ((e, t) => null === e ? null : Lt(Math.round(e), 0, t))(t = isFinite(t) && n[t] === e ? t : gs(n, e, et(t, e)), n.length - 1)
			}
			determineDataLimits() {
				const e = this,
					{
						minDefined: t,
						maxDefined: n
					} = e.getUserBounds();
				let {
					min: a,
					max: r
				} = e.getMinMax(!0);
				"ticks" === e.options.bounds && (t || (a = 0), n || (r = e.getLabels().length - 1)), e.min = a, e.max = r
			}
			buildTicks() {
				const e = this,
					t = e.min,
					n = e.max,
					a = e.options.offset,
					r = [];
				let o = e.getLabels();
				o = 0 === t && n === o.length - 1 ? o : o.slice(t, n + 1), e._valueRange = Math.max(o.length - (a ? 0 : 1), 1), e._startValue = e.min - (a ? .5 : 0);
				for (let e = t; e <= n; e++) r.push({
					value: e
				});
				return r
			}
			getLabelForValue(e) {
				const t = this.getLabels();
				return e >= 0 && e < t.length ? t[e] : e
			}
			configure() {
				const e = this;
				super.configure(), e.isHorizontal() || (e._reversePixels = !e._reversePixels)
			}
			getPixelForValue(e) {
				const t = this;
				return "number" != typeof e && (e = t.parse(e)), null === e ? NaN : t.getPixelForDecimal((e - t._startValue) / t._valueRange)
			}
			getPixelForTick(e) {
				const t = this.ticks;
				return e < 0 || e > t.length - 1 ? null : this.getPixelForValue(t[e].value)
			}
			getValueForPixel(e) {
				const t = this;
				return Math.round(t._startValue + t.getDecimalForPixel(e) * t._valueRange)
			}
			getBasePixel() {
				return this.bottom
			}
		}

		function bs(e, t) {
			const n = [],
				{
					bounds: a,
					step: r,
					min: o,
					max: i,
					precision: s,
					count: l,
					maxTicks: c,
					maxDigits: u,
					includeBounds: d
				} = e,
				h = r || 1,
				f = c - 1,
				{
					min: p,
					max: m
				} = t,
				g = !Qe(o),
				y = !Qe(i),
				b = !Qe(l),
				v = (m - p) / (u + 1);
			let x, w, T, _, k = St((m - p) / f / h) * h;
			if (k < 1e-14 && !g && !y) return [{
				value: p
			}, {
				value: m
			}];
			_ = Math.ceil(m / k) - Math.floor(p / k), _ > f && (k = St(_ * k / f / h) * h), Qe(s) || (x = Math.pow(10, s), k = Math.ceil(k * x) / x), "ticks" === a ? (w = Math.floor(p / k) * k, T = Math.ceil(m / k) * k) : (w = p, T = m), g && y && r && function(e, t) {
				const n = Math.round(e);
				return n - t <= e && n + t >= e
			}((i - o) / r, k / 1e3) ? (_ = Math.round(Math.min((i - o) / k, c)), k = (i - o) / _, w = o, T = i) : b ? (w = g ? o : w, T = y ? i : T, _ = l - 1, k = (T - w) / _) : (_ = (T - w) / k, _ = Mt(_, Math.round(_), k / 1e3) ? Math.round(_) : Math.ceil(_));
			const P = Math.max(It(k), It(w));
			x = Math.pow(10, Qe(s) ? P : s), w = Math.round(w * x) / x, T = Math.round(T * x) / x;
			let E = 0;
			for (g && (d && w !== o ? (n.push({
					value: o
				}), w < o && E++, Mt(Math.round((w + E * k) * x) / x, o, vs(o, v, e)) && E++) : w < o && E++); E < _; ++E) n.push({
				value: Math.round((w + E * k) * x) / x
			});
			return y && d && T !== i ? Mt(n[n.length - 1].value, i, vs(i, v, e)) ? n[n.length - 1].value = i : n.push({
				value: i
			}) : y && T !== i || n.push({
				value: T
			}), n
		}

		function vs(e, t, {
			horizontal: n,
			minRotation: a
		}) {
			const r = $t(a),
				o = (n ? Math.sin(r) : Math.cos(r)) || .001,
				i = .75 * t * ("" + e).length;
			return Math.min(t / o, i)
		}
		ys.id = "category", ys.defaults = {
			ticks: {
				callback: ys.prototype.getLabelForValue
			}
		};
		class xs extends No {
			constructor(e) {
				super(e), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0
			}
			parse(e, t) {
				return Qe(e) || ("number" == typeof e || e instanceof Number) && !isFinite(+e) ? null : +e
			}
			handleTickRangeOptions() {
				const e = this,
					{
						beginAtZero: t
					} = e.options,
					{
						minDefined: n,
						maxDefined: a
					} = e.getUserBounds();
				let {
					min: r,
					max: o
				} = e;
				const i = e => r = n ? r : e,
					s = e => o = a ? o : e;
				if (t) {
					const e = Et(r),
						t = Et(o);
					e < 0 && t < 0 ? s(0) : e > 0 && t > 0 && i(0)
				}
				if (r === o) {
					let e = 1;
					(o >= Number.MAX_SAFE_INTEGER || r <= Number.MIN_SAFE_INTEGER) && (e = Math.abs(.05 * o)), s(o + e), t || i(r - e)
				}
				e.min = r, e.max = o
			}
			getTickLimit() {
				const e = this,
					t = e.options.ticks;
				let n, {
					maxTicksLimit: a,
					stepSize: r
				} = t;
				return r ? n = Math.ceil(e.max / r) - Math.floor(e.min / r) + 1 : (n = e.computeTickLimit(), a = a || 11), a && (n = Math.min(a, n)), n
			}
			computeTickLimit() {
				return Number.POSITIVE_INFINITY
			}
			buildTicks() {
				const e = this,
					t = e.options,
					n = t.ticks;
				let a = e.getTickLimit();
				a = Math.max(2, a);
				const r = bs({
					maxTicks: a,
					bounds: t.bounds,
					min: t.min,
					max: t.max,
					precision: n.precision,
					step: n.stepSize,
					count: n.count,
					maxDigits: e._maxDigits(),
					horizontal: e.isHorizontal(),
					minRotation: n.minRotation || 0,
					includeBounds: !1 !== n.includeBounds
				}, e._range || e);
				return "ticks" === t.bounds && Nt(r, e, "value"), t.reverse ? (r.reverse(), e.start = e.max, e.end = e.min) : (e.start = e.min, e.end = e.max), r
			}
			configure() {
				const e = this,
					t = e.ticks;
				let n = e.min,
					a = e.max;
				if (super.configure(), e.options.offset && t.length) {
					const e = (a - n) / Math.max(t.length - 1, 1) / 2;
					n -= e, a += e
				}
				e._startValue = n, e._endValue = a, e._valueRange = a - n
			}
			getLabelForValue(e) {
				return ja(e, this.chart.options.locale)
			}
		}
		class ws extends xs {
			determineDataLimits() {
				const e = this,
					{
						min: t,
						max: n
					} = e.getMinMax(!0);
				e.min = Ke(t) ? t : 0, e.max = Ke(n) ? n : 1, e.handleTickRangeOptions()
			}
			computeTickLimit() {
				const e = this,
					t = e.isHorizontal(),
					n = t ? e.width : e.height,
					a = $t(e.options.ticks.minRotation),
					r = (t ? Math.sin(a) : Math.cos(a)) || .001,
					o = e._resolveTickFontOptions(0);
				return Math.ceil(n / Math.min(40, o.lineHeight / r))
			}
			getPixelForValue(e) {
				return null === e ? NaN : this.getPixelForDecimal((e - this._startValue) / this._valueRange)
			}
			getValueForPixel(e) {
				return this._startValue + this.getDecimalForPixel(e) * this._valueRange
			}
		}

		function Ts(e) {
			return 1 === e / Math.pow(10, Math.floor(Pt(e)))
		}
		ws.id = "linear", ws.defaults = {
			ticks: {
				callback: wo.formatters.numeric
			}
		};
		class _s extends No {
			constructor(e) {
				super(e), this.start = void 0, this.end = void 0, this._startValue = void 0, this._valueRange = 0
			}
			parse(e, t) {
				const n = xs.prototype.parse.apply(this, [e, t]);
				if (0 !== n) return Ke(n) && n > 0 ? n : null;
				this._zero = !0
			}
			determineDataLimits() {
				const e = this,
					{
						min: t,
						max: n
					} = e.getMinMax(!0);
				e.min = Ke(t) ? Math.max(0, t) : null, e.max = Ke(n) ? Math.max(0, n) : null, e.options.beginAtZero && (e._zero = !0), e.handleTickRangeOptions()
			}
			handleTickRangeOptions() {
				const e = this,
					{
						minDefined: t,
						maxDefined: n
					} = e.getUserBounds();
				let a = e.min,
					r = e.max;
				const o = e => a = t ? a : e,
					i = e => r = n ? r : e,
					s = (e, t) => Math.pow(10, Math.floor(Pt(e)) + t);
				a === r && (a <= 0 ? (o(1), i(10)) : (o(s(a, -1)), i(s(r, 1)))), a <= 0 && o(s(r, -1)), r <= 0 && i(s(a, 1)), e._zero && e.min !== e._suggestedMin && a === s(e.min, 0) && o(s(a, -1)), e.min = a, e.max = r
			}
			buildTicks() {
				const e = this,
					t = e.options,
					n = function(e, t) {
						const n = Math.floor(Pt(t.max)),
							a = Math.ceil(t.max / Math.pow(10, n)),
							r = [];
						let o = Je(e.min, Math.pow(10, Math.floor(Pt(t.min)))),
							i = Math.floor(Pt(o)),
							s = Math.floor(o / Math.pow(10, i)),
							l = i < 0 ? Math.pow(10, Math.abs(i)) : 1;
						do {
							r.push({
								value: o,
								major: Ts(o)
							}), ++s, 10 === s && (s = 1, ++i, l = i >= 0 ? 1 : l), o = Math.round(s * Math.pow(10, i) * l) / l
						} while (i < n || i === n && s < a);
						const c = Je(e.max, o);
						return r.push({
							value: c,
							major: Ts(o)
						}), r
					}({
						min: e._userMin,
						max: e._userMax
					}, e);
				return "ticks" === t.bounds && Nt(n, e, "value"), t.reverse ? (n.reverse(), e.start = e.max, e.end = e.min) : (e.start = e.min, e.end = e.max), n
			}
			getLabelForValue(e) {
				return void 0 === e ? "0" : ja(e, this.chart.options.locale)
			}
			configure() {
				const e = this,
					t = e.min;
				super.configure(), e._startValue = Pt(t), e._valueRange = Pt(e.max) - Pt(t)
			}
			getPixelForValue(e) {
				const t = this;
				return void 0 !== e && 0 !== e || (e = t.min), null === e || isNaN(e) ? NaN : t.getPixelForDecimal(e === t.min ? 0 : (Pt(e) - t._startValue) / t._valueRange)
			}
			getValueForPixel(e) {
				const t = this,
					n = t.getDecimalForPixel(e);
				return Math.pow(10, t._startValue + n * t._valueRange)
			}
		}

		function ks(e) {
			const t = e.ticks;
			if (t.display && e.display) {
				const e = Gn(t.backdropPadding);
				return et(t.font && t.font.size, Mn.font.size) + e.height
			}
			return 0
		}

		function Ps(e, t, n, a, r) {
			return e === a || e === r ? {
				start: t - n / 2,
				end: t + n / 2
			} : e < a || e > r ? {
				start: t - n,
				end: t
			} : {
				start: t,
				end: t + n
			}
		}

		function Es(e) {
			const t = {
					l: 0,
					r: e.width,
					t: 0,
					b: e.height - e.paddingTop
				},
				n = {},
				a = [],
				r = [],
				o = e.getLabels().length;
			for (let c = 0; c < o; c++) {
				const o = e.options.pointLabels.setContext(e.getPointLabelContext(c));
				r[c] = o.padding;
				const u = e.getPointPosition(c, e.drawingArea + r[c]),
					d = Xn(o.font),
					h = (i = e.ctx, s = d, l = Ge(l = e._pointLabels[c]) ? l : [l], {
						w: $n(i, s.string, l),
						h: l.length * s.lineHeight
					});
				a[c] = h;
				const f = e.getIndexAngle(c),
					p = At(f),
					m = Ps(p, u.x, h.w, 0, 180),
					g = Ps(p, u.y, h.h, 90, 270);
				m.start < t.l && (t.l = m.start, n.l = f), m.end > t.r && (t.r = m.end, n.r = f), g.start < t.t && (t.t = g.start, n.t = f), g.end > t.b && (t.b = g.end, n.b = f)
			}
			var i, s, l;
			e._setReductions(e.drawingArea, t, n), e._pointLabelItems = function(e, t, n) {
				const a = [],
					r = e.getLabels().length,
					o = e.options,
					i = ks(o),
					s = e.getDistanceFromCenterForValue(o.ticks.reverse ? e.min : e.max);
				for (let o = 0; o < r; o++) {
					const r = 0 === o ? i / 2 : 0,
						l = e.getPointPosition(o, s + r + n[o]),
						c = At(e.getIndexAngle(o)),
						u = t[o],
						d = Ms(l.y, u.h, c),
						h = Ss(c),
						f = Cs(l.x, u.w, h);
					a.push({
						x: l.x,
						y: d,
						textAlign: h,
						left: f,
						top: d,
						right: f + u.w,
						bottom: d + u.h
					})
				}
				return a
			}(e, a, r)
		}

		function Ss(e) {
			return 0 === e || 180 === e ? "center" : e < 180 ? "left" : "right"
		}

		function Cs(e, t, n) {
			return "right" === n ? e -= t : "center" === n && (e -= t / 2), e
		}

		function Ms(e, t, n) {
			return 90 === n || 270 === n ? e -= t / 2 : (n > 270 || n < 90) && (e -= t), e
		}

		function Ns(e, t, n, a) {
			const {
				ctx: r
			} = e;
			if (n) r.arc(e.xCenter, e.yCenter, t, 0, bt);
			else {
				let n = e.getPointPosition(0, t);
				r.moveTo(n.x, n.y);
				for (let o = 1; o < a; o++) n = e.getPointPosition(o, t), r.lineTo(n.x, n.y)
			}
		}

		function $s(e) {
			return Ct(e) ? e : 0
		}
		_s.id = "logarithmic", _s.defaults = {
			ticks: {
				callback: wo.formatters.logarithmic,
				major: {
					enabled: !0
				}
			}
		};
		class As extends xs {
			constructor(e) {
				super(e), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = []
			}
			setDimensions() {
				const e = this;
				e.width = e.maxWidth, e.height = e.maxHeight, e.paddingTop = ks(e.options) / 2, e.xCenter = Math.floor(e.width / 2), e.yCenter = Math.floor((e.height - e.paddingTop) / 2), e.drawingArea = Math.min(e.height - e.paddingTop, e.width) / 2
			}
			determineDataLimits() {
				const e = this,
					{
						min: t,
						max: n
					} = e.getMinMax(!1);
				e.min = Ke(t) && !isNaN(t) ? t : 0, e.max = Ke(n) && !isNaN(n) ? n : 0, e.handleTickRangeOptions()
			}
			computeTickLimit() {
				return Math.ceil(this.drawingArea / ks(this.options))
			}
			generateTickLabels(e) {
				const t = this;
				xs.prototype.generateTickLabels.call(t, e), t._pointLabels = t.getLabels().map(((e, n) => {
					const a = nt(t.options.pointLabels.callback, [e, n], t);
					return a || 0 === a ? a : ""
				}))
			}
			fit() {
				const e = this,
					t = e.options;
				t.display && t.pointLabels.display ? Es(e) : e.setCenterPoint(0, 0, 0, 0)
			}
			_setReductions(e, t, n) {
				const a = this;
				let r = t.l / Math.sin(n.l),
					o = Math.max(t.r - a.width, 0) / Math.sin(n.r),
					i = -t.t / Math.cos(n.t),
					s = -Math.max(t.b - (a.height - a.paddingTop), 0) / Math.cos(n.b);
				r = $s(r), o = $s(o), i = $s(i), s = $s(s), a.drawingArea = Math.max(e / 2, Math.min(Math.floor(e - (r + o) / 2), Math.floor(e - (i + s) / 2))), a.setCenterPoint(r, o, i, s)
			}
			setCenterPoint(e, t, n, a) {
				const r = this,
					o = r.width - t - r.drawingArea,
					i = e + r.drawingArea,
					s = n + r.drawingArea,
					l = r.height - r.paddingTop - a - r.drawingArea;
				r.xCenter = Math.floor((i + o) / 2 + r.left), r.yCenter = Math.floor((s + l) / 2 + r.top + r.paddingTop)
			}
			getIndexAngle(e) {
				return Dt(e * (bt / this.getLabels().length) + $t(this.options.startAngle || 0))
			}
			getDistanceFromCenterForValue(e) {
				const t = this;
				if (Qe(e)) return NaN;
				const n = t.drawingArea / (t.max - t.min);
				return t.options.reverse ? (t.max - e) * n : (e - t.min) * n
			}
			getValueForDistanceFromCenter(e) {
				if (Qe(e)) return NaN;
				const t = this,
					n = e / (t.drawingArea / (t.max - t.min));
				return t.options.reverse ? t.max - n : t.min + n
			}
			getPointLabelContext(e) {
				const t = this,
					n = t._pointLabels || [];
				if (e >= 0 && e < n.length) {
					const a = n[e];
					return function(e, t, n) {
						return Object.assign(Object.create(e), {
							label: n,
							index: t,
							type: "pointLabel"
						})
					}(t.getContext(), e, a)
				}
			}
			getPointPosition(e, t) {
				const n = this,
					a = n.getIndexAngle(e) - Tt;
				return {
					x: Math.cos(a) * t + n.xCenter,
					y: Math.sin(a) * t + n.yCenter,
					angle: a
				}
			}
			getPointPositionForValue(e, t) {
				return this.getPointPosition(e, this.getDistanceFromCenterForValue(t))
			}
			getBasePosition(e) {
				return this.getPointPositionForValue(e || 0, this.getBaseValue())
			}
			getPointLabelPosition(e) {
				const {
					left: t,
					top: n,
					right: a,
					bottom: r
				} = this._pointLabelItems[e];
				return {
					left: t,
					top: n,
					right: a,
					bottom: r
				}
			}
			drawBackground() {
				const e = this,
					{
						backgroundColor: t,
						grid: {
							circular: n
						}
					} = e.options;
				if (t) {
					const a = e.ctx;
					a.save(), a.beginPath(), Ns(e, e.getDistanceFromCenterForValue(e._endValue), n, e.getLabels().length), a.closePath(), a.fillStyle = t, a.fill(), a.restore()
				}
			}
			drawGrid() {
				const e = this,
					t = e.ctx,
					n = e.options,
					{
						angleLines: a,
						grid: r
					} = n,
					o = e.getLabels().length;
				let i, s, l;
				if (n.pointLabels.display && function(e, t) {
						const {
							ctx: n,
							options: {
								pointLabels: a
							}
						} = e;
						for (let r = t - 1; r >= 0; r--) {
							const t = a.setContext(e.getPointLabelContext(r)),
								o = Xn(t.font),
								{
									x: i,
									y: s,
									textAlign: l,
									left: c,
									top: u,
									right: d,
									bottom: h
								} = e._pointLabelItems[r],
								{
									backdropColor: f
								} = t;
							if (!Qe(f)) {
								const e = Gn(t.backdropPadding);
								n.fillStyle = f, n.fillRect(c - e.left, u - e.top, d - c + e.width, h - u + e.height)
							}
							Vn(n, e._pointLabels[r], i, s + o.lineHeight / 2, o, {
								color: t.color,
								textAlign: l,
								textBaseline: "middle"
							})
						}
					}(e, o), r.display && e.ticks.forEach(((t, n) => {
						if (0 !== n) {
							s = e.getDistanceFromCenterForValue(t.value);
							const a = r.setContext(e.getContext(n - 1));
							! function(e, t, n, a) {
								const r = e.ctx,
									o = t.circular,
									{
										color: i,
										lineWidth: s
									} = t;
								!o && !a || !i || !s || n < 0 || (r.save(), r.strokeStyle = i, r.lineWidth = s, r.setLineDash(t.borderDash), r.lineDashOffset = t.borderDashOffset, r.beginPath(), Ns(e, n, o, a), r.closePath(), r.stroke(), r.restore())
							}(e, a, s, o)
						}
					})), a.display) {
					for (t.save(), i = e.getLabels().length - 1; i >= 0; i--) {
						const r = a.setContext(e.getPointLabelContext(i)),
							{
								color: o,
								lineWidth: c
							} = r;
						c && o && (t.lineWidth = c, t.strokeStyle = o, t.setLineDash(r.borderDash), t.lineDashOffset = r.borderDashOffset, s = e.getDistanceFromCenterForValue(n.ticks.reverse ? e.min : e.max), l = e.getPointPosition(i, s), t.beginPath(), t.moveTo(e.xCenter, e.yCenter), t.lineTo(l.x, l.y), t.stroke())
					}
					t.restore()
				}
			}
			drawBorder() {}
			drawLabels() {
				const e = this,
					t = e.ctx,
					n = e.options,
					a = n.ticks;
				if (!a.display) return;
				const r = e.getIndexAngle(0);
				let o, i;
				t.save(), t.translate(e.xCenter, e.yCenter), t.rotate(r), t.textAlign = "center", t.textBaseline = "middle", e.ticks.forEach(((r, s) => {
					if (0 === s && !n.reverse) return;
					const l = a.setContext(e.getContext(s)),
						c = Xn(l.font);
					if (o = e.getDistanceFromCenterForValue(e.ticks[s].value), l.showLabelBackdrop) {
						t.font = c.string, i = t.measureText(r.label).width, t.fillStyle = l.backdropColor;
						const e = Gn(l.backdropPadding);
						t.fillRect(-i / 2 - e.left, -o - c.size / 2 - e.top, i + e.width, c.size + e.height)
					}
					Vn(t, r.label, 0, -o, c, {
						color: l.color
					})
				})), t.restore()
			}
			drawTitle() {}
		}
		As.id = "radialLinear", As.defaults = {
			display: !0,
			animate: !0,
			position: "chartArea",
			angleLines: {
				display: !0,
				lineWidth: 1,
				borderDash: [],
				borderDashOffset: 0
			},
			grid: {
				circular: !1
			},
			startAngle: 0,
			ticks: {
				showLabelBackdrop: !0,
				callback: wo.formatters.numeric
			},
			pointLabels: {
				backdropColor: void 0,
				backdropPadding: 2,
				display: !0,
				font: {
					size: 10
				},
				callback: e => e,
				padding: 5
			}
		}, As.defaultRoutes = {
			"angleLines.color": "borderColor",
			"pointLabels.color": "color",
			"ticks.color": "color"
		}, As.descriptors = {
			angleLines: {
				_fallback: "grid"
			}
		};
		const Is = {
				millisecond: {
					common: !0,
					size: 1,
					steps: 1e3
				},
				second: {
					common: !0,
					size: 1e3,
					steps: 60
				},
				minute: {
					common: !0,
					size: 6e4,
					steps: 60
				},
				hour: {
					common: !0,
					size: 36e5,
					steps: 24
				},
				day: {
					common: !0,
					size: 864e5,
					steps: 30
				},
				week: {
					common: !1,
					size: 6048e5,
					steps: 4
				},
				month: {
					common: !0,
					size: 2628e6,
					steps: 12
				},
				quarter: {
					common: !1,
					size: 7884e6,
					steps: 4
				},
				year: {
					common: !0,
					size: 3154e7
				}
			},
			Os = Object.keys(Is);

		function Rs(e, t) {
			return e - t
		}

		function Ds(e, t) {
			if (Qe(t)) return null;
			const n = e._adapter,
				{
					parser: a,
					round: r,
					isoWeekday: o
				} = e._parseOpts;
			let i = t;
			return "function" == typeof a && (i = a(i)), Ke(i) || (i = "string" == typeof a ? n.parse(i, a) : n.parse(i)), null === i ? null : (r && (i = "week" !== r || !Ct(o) && !0 !== o ? n.startOf(i, r) : n.startOf(i, "isoWeek", o)), +i)
		}

		function Fs(e, t, n, a) {
			const r = Os.length;
			for (let o = Os.indexOf(e); o < r - 1; ++o) {
				const e = Is[Os[o]],
					r = e.steps ? e.steps : Number.MAX_SAFE_INTEGER;
				if (e.common && Math.ceil((n - t) / (r * e.size)) <= a) return Os[o]
			}
			return Os[r - 1]
		}

		function Ls(e, t, n) {
			if (n) {
				if (n.length) {
					const {
						lo: a,
						hi: r
					} = Jn(n, t);
					e[n[a] >= t ? n[a] : n[r]] = !0
				}
			} else e[t] = !0
		}

		function zs(e, t, n) {
			const a = [],
				r = {},
				o = t.length;
			let i, s;
			for (i = 0; i < o; ++i) s = t[i], r[s] = i, a.push({
				value: s,
				major: !1
			});
			return 0 !== o && n ? function(e, t, n, a) {
				const r = e._adapter,
					o = +r.startOf(t[0].value, a),
					i = t[t.length - 1].value;
				let s, l;
				for (s = o; s <= i; s = +r.add(s, 1, a)) l = n[s], l >= 0 && (t[l].major = !0);
				return t
			}(e, a, r, n) : a
		}
		class Vs extends No {
			constructor(e) {
				super(e), this._cache = {
					data: [],
					labels: [],
					all: []
				}, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0
			}
			init(e, t) {
				const n = e.time || (e.time = {}),
					a = this._adapter = new Rr._date(e.adapters.date);
				ct(n.displayFormats, a.formats()), this._parseOpts = {
					parser: n.parser,
					round: n.round,
					isoWeekday: n.isoWeekday
				}, super.init(e), this._normalized = t.normalized
			}
			parse(e, t) {
				return void 0 === e ? null : Ds(this, e)
			}
			beforeLayout() {
				super.beforeLayout(), this._cache = {
					data: [],
					labels: [],
					all: []
				}
			}
			determineDataLimits() {
				const e = this,
					t = e.options,
					n = e._adapter,
					a = t.time.unit || "day";
				let {
					min: r,
					max: o,
					minDefined: i,
					maxDefined: s
				} = e.getUserBounds();

				function l(e) {
					i || isNaN(e.min) || (r = Math.min(r, e.min)), s || isNaN(e.max) || (o = Math.max(o, e.max))
				}
				i && s || (l(e._getLabelBounds()), "ticks" === t.bounds && "labels" === t.ticks.source || l(e.getMinMax(!1))), r = Ke(r) && !isNaN(r) ? r : +n.startOf(Date.now(), a), o = Ke(o) && !isNaN(o) ? o : +n.endOf(Date.now(), a) + 1, e.min = Math.min(r, o - 1), e.max = Math.max(r + 1, o)
			}
			_getLabelBounds() {
				const e = this.getLabelTimestamps();
				let t = Number.POSITIVE_INFINITY,
					n = Number.NEGATIVE_INFINITY;
				return e.length && (t = e[0], n = e[e.length - 1]), {
					min: t,
					max: n
				}
			}
			buildTicks() {
				const e = this,
					t = e.options,
					n = t.time,
					a = t.ticks,
					r = "labels" === a.source ? e.getLabelTimestamps() : e._generate();
				"ticks" === t.bounds && r.length && (e.min = e._userMin || r[0], e.max = e._userMax || r[r.length - 1]);
				const o = e.min,
					i = function(e, t, n) {
						let a = 0,
							r = e.length;
						for (; a < r && e[a] < t;) a++;
						for (; r > a && e[r - 1] > n;) r--;
						return a > 0 || r < e.length ? e.slice(a, r) : e
					}(r, o, e.max);
				return e._unit = n.unit || (a.autoSkip ? Fs(n.minUnit, e.min, e.max, e._getLabelCapacity(o)) : function(e, t, n, a, r) {
					for (let o = Os.length - 1; o >= Os.indexOf(n); o--) {
						const n = Os[o];
						if (Is[n].common && e._adapter.diff(r, a, n) >= t - 1) return n
					}
					return Os[n ? Os.indexOf(n) : 0]
				}(e, i.length, n.minUnit, e.min, e.max)), e._majorUnit = a.major.enabled && "year" !== e._unit ? function(e) {
					for (let t = Os.indexOf(e) + 1, n = Os.length; t < n; ++t)
						if (Is[Os[t]].common) return Os[t]
				}(e._unit) : void 0, e.initOffsets(r), t.reverse && i.reverse(), zs(e, i, e._majorUnit)
			}
			initOffsets(e) {
				const t = this;
				let n, a, r = 0,
					o = 0;
				t.options.offset && e.length && (n = t.getDecimalForValue(e[0]), r = 1 === e.length ? 1 - n : (t.getDecimalForValue(e[1]) - n) / 2, a = t.getDecimalForValue(e[e.length - 1]), o = 1 === e.length ? a : (a - t.getDecimalForValue(e[e.length - 2])) / 2);
				const i = e.length < 3 ? .5 : .25;
				r = Lt(r, 0, i), o = Lt(o, 0, i), t._offsets = {
					start: r,
					end: o,
					factor: 1 / (r + 1 + o)
				}
			}
			_generate() {
				const e = this,
					t = e._adapter,
					n = e.min,
					a = e.max,
					r = e.options,
					o = r.time,
					i = o.unit || Fs(o.minUnit, n, a, e._getLabelCapacity(n)),
					s = et(o.stepSize, 1),
					l = "week" === i && o.isoWeekday,
					c = Ct(l) || !0 === l,
					u = {};
				let d, h, f = n;
				if (c && (f = +t.startOf(f, "isoWeek", l)), f = +t.startOf(f, c ? "day" : i), t.diff(a, n, i) > 1e5 * s) throw new Error(n + " and " + a + " are too far apart with stepSize of " + s + " " + i);
				const p = "data" === r.ticks.source && e.getDataTimestamps();
				for (d = f, h = 0; d < a; d = +t.add(d, s, i), h++) Ls(u, d, p);
				return d !== a && "ticks" !== r.bounds && 1 !== h || Ls(u, d, p), Object.keys(u).sort(((e, t) => e - t)).map((e => +e))
			}
			getLabelForValue(e) {
				const t = this._adapter,
					n = this.options.time;
				return n.tooltipFormat ? t.format(e, n.tooltipFormat) : t.format(e, n.displayFormats.datetime)
			}
			_tickFormatFunction(e, t, n, a) {
				const r = this,
					o = r.options,
					i = o.time.displayFormats,
					s = r._unit,
					l = r._majorUnit,
					c = s && i[s],
					u = l && i[l],
					d = n[t],
					h = l && u && d && d.major,
					f = r._adapter.format(e, a || (h ? u : c)),
					p = o.ticks.callback;
				return p ? nt(p, [f, t, n], r) : f
			}
			generateTickLabels(e) {
				let t, n, a;
				for (t = 0, n = e.length; t < n; ++t) a = e[t], a.label = this._tickFormatFunction(a.value, t, e)
			}
			getDecimalForValue(e) {
				const t = this;
				return null === e ? NaN : (e - t.min) / (t.max - t.min)
			}
			getPixelForValue(e) {
				const t = this,
					n = t._offsets,
					a = t.getDecimalForValue(e);
				return t.getPixelForDecimal((n.start + a) * n.factor)
			}
			getValueForPixel(e) {
				const t = this,
					n = t._offsets,
					a = t.getDecimalForPixel(e) / n.factor - n.end;
				return t.min + a * (t.max - t.min)
			}
			_getLabelSize(e) {
				const t = this,
					n = t.options.ticks,
					a = t.ctx.measureText(e).width,
					r = $t(t.isHorizontal() ? n.maxRotation : n.minRotation),
					o = Math.cos(r),
					i = Math.sin(r),
					s = t._resolveTickFontOptions(0).size;
				return {
					w: a * o + s * i,
					h: a * i + s * o
				}
			}
			_getLabelCapacity(e) {
				const t = this,
					n = t.options.time,
					a = n.displayFormats,
					r = a[n.unit] || a.millisecond,
					o = t._tickFormatFunction(e, 0, zs(t, [e], t._majorUnit), r),
					i = t._getLabelSize(o),
					s = Math.floor(t.isHorizontal() ? t.width / i.w : t.height / i.h) - 1;
				return s > 0 ? s : 1
			}
			getDataTimestamps() {
				const e = this;
				let t, n, a = e._cache.data || [];
				if (a.length) return a;
				const r = e.getMatchingVisibleMetas();
				if (e._normalized && r.length) return e._cache.data = r[0].controller.getAllParsedValues(e);
				for (t = 0, n = r.length; t < n; ++t) a = a.concat(r[t].controller.getAllParsedValues(e));
				return e._cache.data = e.normalize(a)
			}
			getLabelTimestamps() {
				const e = this,
					t = e._cache.labels || [];
				let n, a;
				if (t.length) return t;
				const r = e.getLabels();
				for (n = 0, a = r.length; n < a; ++n) t.push(Ds(e, r[n]));
				return e._cache.labels = e._normalized ? t : e.normalize(t)
			}
			normalize(e) {
				return ra(e.sort(Rs))
			}
		}

		function Bs(e, t, n) {
			let a, r, o, i, s = 0,
				l = e.length - 1;
			n ? (t >= e[s].pos && t <= e[l].pos && ({
				lo: s,
				hi: l
			} = ea(e, "pos", t)), ({
				pos: a,
				time: o
			} = e[s]), ({
				pos: r,
				time: i
			} = e[l])) : (t >= e[s].time && t <= e[l].time && ({
				lo: s,
				hi: l
			} = ea(e, "time", t)), ({
				time: a,
				pos: o
			} = e[s]), ({
				time: r,
				pos: i
			} = e[l]));
			const c = r - a;
			return c ? o + (i - o) * (t - a) / c : o
		}
		Vs.id = "time", Vs.defaults = {
			bounds: "data",
			adapters: {},
			time: {
				parser: !1,
				unit: !1,
				round: !1,
				isoWeekday: !1,
				minUnit: "millisecond",
				displayFormats: {}
			},
			ticks: {
				source: "auto",
				major: {
					enabled: !1
				}
			}
		};
		class js extends Vs {
			constructor(e) {
				super(e), this._table = [], this._minPos = void 0, this._tableRange = void 0
			}
			initOffsets() {
				const e = this,
					t = e._getTimestampsForTable(),
					n = e._table = e.buildLookupTable(t);
				e._minPos = Bs(n, e.min), e._tableRange = Bs(n, e.max) - e._minPos, super.initOffsets(t)
			}
			buildLookupTable(e) {
				const {
					min: t,
					max: n
				} = this, a = [], r = [];
				let o, i, s, l, c;
				for (o = 0, i = e.length; o < i; ++o) l = e[o], l >= t && l <= n && a.push(l);
				if (a.length < 2) return [{
					time: t,
					pos: 0
				}, {
					time: n,
					pos: 1
				}];
				for (o = 0, i = a.length; o < i; ++o) c = a[o + 1], s = a[o - 1], l = a[o], Math.round((c + s) / 2) !== l && r.push({
					time: l,
					pos: o / (i - 1)
				});
				return r
			}
			_getTimestampsForTable() {
				const e = this;
				let t = e._cache.all || [];
				if (t.length) return t;
				const n = e.getDataTimestamps(),
					a = e.getLabelTimestamps();
				return t = n.length && a.length ? e.normalize(n.concat(a)) : n.length ? n : a, t = e._cache.all = t, t
			}
			getDecimalForValue(e) {
				return (Bs(this._table, e) - this._minPos) / this._tableRange
			}
			getValueForPixel(e) {
				const t = this,
					n = t._offsets,
					a = t.getDecimalForPixel(e) / n.factor - n.end;
				return Bs(t._table, a * t._tableRange + t._minPos, !0)
			}
		}
		js.id = "timeseries", js.defaults = Vs.defaults;
		const Hs = [Ar, Si, ms, Object.freeze({
				__proto__: null,
				CategoryScale: ys,
				LinearScale: ws,
				LogarithmicScale: _s,
				RadialLinearScale: As,
				TimeScale: Vs,
				TimeSeriesScale: js
			})],
			qs = "label";

		function Ws(e, t) {
			"function" == typeof e ? e(t) : e && (e.current = t)
		}

		function Ys(e, t) {
			e.labels = t
		}

		function Us(e, t) {
			let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qs;
			const a = [];
			e.datasets = t.map((t => {
				const r = e.datasets.find((e => e[n] === t[n]));
				return r && t.data && !a.includes(r) ? (a.push(r), Object.assign(r, t), r) : {
					...t
				}
			}))
		}

		function Zs(e) {
			let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qs;
			const n = {
				labels: [],
				datasets: []
			};
			return Ys(n, e.labels), Us(n, e.datasets, t), n
		}

		function Qs(t, n) {
			let {
				height: a = 150,
				width: r = 300,
				redraw: o = !1,
				datasetIdKey: i,
				type: s,
				data: l,
				options: c,
				plugins: u = [],
				fallbackContent: d,
				...h
			} = t;
			const f = (0, e.useRef)(null),
				p = (0, e.useRef)(),
				m = () => {
					f.current && (p.current = new ei(f.current, {
						type: s,
						data: Zs(l, i),
						options: c,
						plugins: u
					}), Ws(n, p.current))
				},
				g = () => {
					Ws(n, null), p.current && (p.current.destroy(), p.current = null)
				};
			return (0, e.useEffect)((() => {
				var e, t;
				!o && p.current && c && (e = p.current, t = c, e.options = {
					...t
				})
			}), [o, c]), (0, e.useEffect)((() => {
				!o && p.current && Ys(p.current.config.data, l.labels)
			}), [o, l.labels]), (0, e.useEffect)((() => {
				!o && p.current && l.datasets && Us(p.current.config.data, l.datasets, i)
			}), [o, l.datasets]), (0, e.useEffect)((() => {
				p.current && (o ? (g(), setTimeout(m)) : p.current.update())
			}), [o, c, l.labels, l.datasets]), (0, e.useEffect)((() => (m(), () => g())), []), e.createElement("canvas", Object.assign({
				ref: f,
				role: "img",
				height: a,
				width: r
			}, h), d)
		}
		const Gs = (0, e.forwardRef)(Qs);

		function Xs(t, n) {
			return ei.register(n), (0, e.forwardRef)(((n, a) => e.createElement(Gs, Object.assign({}, n, {
				ref: a,
				type: t
			}))))
		}
		const Ks = Xs("bar", kr),
			Js = Xs("doughnut", Er),
			el = (0, p.ZP)("div", null, {
				displayName: "Chart",
				styles: {
					cls1: "cls1-3907040786",
					cls2: "cls2-9749172403 cls1-3907040786"
				}
			}),
			tl = [getComputedStyle(document.body).getPropertyValue("--primary-chart-color"), getComputedStyle(document.body).getPropertyValue("--secondary-chart-color"), getComputedStyle(document.body).getPropertyValue("--dark-color"), getComputedStyle(document.body).getPropertyValue("--gray-color")],
			nl = ({
				className: t,
				scenarios: n,
				translator: a
			}) => {
				const r = a.getLanguage();
				return e.createElement("div", {
					className: t
				}, e.createElement(el, null, e.createElement(Ks, {
					redraw: !0,
					options: {
						title: {
							display: !0,
							text: a.getText("Principal vs. Interest")
						},
						responsive: !0,
						maintainAspectRatio: !1,
						scales: {
							xAxes: [{
								stacked: !0,
								scaleLabel: {
									display: !0,
									labelString: a.getText("Years")
								}
							}],
							yAxes: [{
								stacked: !0,
								ticks: {
									beginAtZero: !0,
									callback: (e, t, n) => `${Ne(e,r)}`
								}
							}]
						},
						tooltips: {
							callbacks: {
								title: (e, t) => {
									const [n] = e;
									return `${a.getText("Year")} ${n.label}`
								},
								label: (e, t) => `${t.datasets[e.datasetIndex].label}: ${Ne(e.value,r)}`
							}
						}
					},
					data: {
						labels: Array(13).fill().map(((e, t) => 2 * t)),
						datasets: n.reduce(((e, {
							results: {
								amortization: t
							}
						}, n) => [...e, {
							label: `${a.getText("Scenario")} ${n+1} ${a.getText("Principal")}`,
							stack: n,
							backgroundColor: tl[n],
							hoverBackgroundColor: `${tl[n]}BF`,
							hoverBorderColor: tl[n],
							data: t ? t.reduce(((e, {
								principal: t
							}, n) => n % 2 == 0 ? [...e, t] : e), []) : []
						}, {
							label: `${a.getText("Scenario")} ${n+1} ${a.getText("Interest")}`,
							stack: n,
							backgroundColor: `${tl[n]}80`,
							hoverBackgroundColor: `${tl[n]}40`,
							hoverBorderColor: tl[n],
							data: t ? t.reduce(((e, {
								interest: t
							}, n) => n % 2 == 0 ? [...e, Math.max(t, 0)] : e), []) : []
						}]), [])
					}
				})), e.createElement(el, null, e.createElement(Ks, {
					redraw: !0,
					options: {
						title: {
							display: !0,
							text: a.getText("Amortization")
						},
						responsive: !0,
						maintainAspectRatio: !1,
						scales: {
							xAxes: [{
								scaleLabel: {
									display: !0,
									labelString: a.getText("Years")
								}
							}],
							yAxes: [{
								ticks: {
									beginAtZero: !0,
									callback: (e, t, n) => `${Ne(e,r)}`
								}
							}]
						},
						tooltips: {
							callbacks: {
								title: (e, t) => {
									const [n] = e;
									return `${a.getText("Year")} ${n.label}`
								},
								label: (e, t) => `${Ne(e.yLabel,r)}`
							}
						}
					},
					data: {
						labels: Array(13).fill().map(((e, t) => 2 * t)),
						datasets: n.reduce(((e, {
							results: {
								loanAmount: t,
								amortization: n
							}
						}, r) => {
							const o = (n || []).reduce(((e, {
								currentPrincipal: t
							}, n) => [...e, {
								year: n + 1,
								currentPrincipal: Math.max(t, 0)
							}]), [{
								year: 0,
								currentPrincipal: t
							}]);
							return o.pop(), [...e, {
								label: `${a.getText("Scenario")} ${r+1}`,
								backgroundColor: tl[r],
								hoverBackgroundColor: `${tl[r]}BF`,
								hoverBorderColor: tl[r],
								data: o ? o.reduce(((e, {
									currentPrincipal: t
								}, n) => n % 2 == 0 ? [...e, Math.max(t, 0)] : e), []) : []
							}]
						}), [])
					}
				})))
			};
		nl.propTypes = {
			className: r().string,
			scenarios: r().array,
			translator: r().object
		};
		const al = (0, p.ZP)(nl, null, {
				displayName: "OutputChart",
				styles: {
					cls1: "cls1-5534129523",
					cls2: "cls2-4662378337 cls1-5534129523"
				}
			}),
			rl = ({
				principal: e,
				interestRate: t,
				numPayments: n,
				numPaymentsPerYear: a
			}) => {
				const r = Math.pow(1 + t / 2, 2) - 1,
					o = Math.pow(1 + r, 1 / a) - 1,
					i = Math.pow(1 + o, n);
				return {
					earPerPeriod: o,
					paymentPerPeriod: e * o * i / (i - 1)
				}
			},
			ol = ({
				homePrice: e,
				downPaymentDollars: t,
				downPaymentPercentage: n,
				downPaymentInput: a,
				termInYears: r,
				interest: o,
				paymentFrequency: i,
				additionalPaymentType: s,
				yearOfAdditionalPayment: l,
				additionalPaymentStartingYear: c,
				additionalPaymentAmount: u = 0
			}) => {
				const d = "$" === a ? t : e * (n / 100),
					{
						rate: h,
						rateType: f
					} = o,
					{
						frequency: p,
						numPaymentsPerYear: m
					} = i,
					g = e - d,
					y = (({
						homePrice: e,
						downPayment: t
					}) => {
						const n = 100 * t / e;
						return n >= 20 ? 0 : n >= 15 ? 2.8 : n >= 10 ? 3.1 : n >= 5 ? 4 : void 0
					})({
						homePrice: e,
						downPayment: d
					}),
					b = y / 100 * (e - d) || 0,
					v = g + (b || 0),
					x = r * m,
					{
						paymentPerPeriod: w,
						earPerPeriod: T
					} = rl({
						principal: v,
						interestRate: h / 100,
						interestRateType: f,
						termInYears: r,
						numPayments: x,
						numPaymentsPerYear: m
					}),
					_ = (({
						frequency: e,
						paymentPerPeriod: t,
						principal: n,
						interestRate: a,
						interestRateType: r,
						termInYears: o
					}) => {
						if (e.includes("Accelerated")) {
							const {
								paymentPerPeriod: i
							} = rl({
								principal: n,
								interestRate: a / 100,
								interestRateType: r,
								termInYears: o,
								numPayments: 12 * o,
								numPaymentsPerYear: 12
							});
							if ("Accelerated Weekly" === e) return i / 4 - t;
							if ("Accelerated Bi-Weekly" === e) return i / 2 - t
						}
						return 0
					})({
						frequency: p,
						paymentPerPeriod: w,
						principal: v,
						interestRate: h,
						interestRateType: f,
						termInYears: r
					}),
					k = (({
						principal: e,
						termInYears: t,
						numPaymentsPerYear: n,
						earPerPeriod: a,
						paymentPerPeriod: r,
						acceleratedPayment: o,
						additionalPaymentType: i,
						yearOfAdditionalPayment: s = 0,
						additionalPaymentStartingYear: l,
						additionalPaymentAmount: c
					}) => {
						const u = [];
						let d = e,
							h = e,
							f = e;
						for (let e = 0; e <= t; e++) {
							let t = 0,
								p = 0,
								m = 0,
								g = 0;
							for (let u = 1; u <= n; u++) {
								const y = d * a;
								t += y, d -= r - y;
								const b = Re({
										additionalPaymentType: i,
										year: e,
										yearOfAdditionalPayment: s,
										additionalPaymentStartingYear: l,
										payment: u,
										numPaymentsPerYear: n
									}) ? c : 0,
									v = h * a;
								p += v, h -= r + b - v;
								const x = f * a;
								m += x > 0 ? x : 0;
								const w = r + b + o - x;
								g += w, f -= w
							}
							u.push({
								principal: g,
								interest: m,
								currentPrincipal: f,
								baseInterest: t,
								baseInterestNotAccelerated: p,
								year: e
							})
						}
						return u
					})({
						principal: v,
						termInYears: r,
						numPaymentsPerYear: parseInt(m),
						frequency: p,
						interestRate: h,
						earPerPeriod: T,
						paymentPerPeriod: w,
						acceleratedPayment: _,
						additionalPaymentType: s,
						yearOfAdditionalPayment: parseInt(l),
						additionalPaymentStartingYear: parseInt(c),
						additionalPaymentAmount: u
					}),
					P = k.reduce(((e, t) => e + t.baseInterest), 0),
					E = k.reduce(((e, t) => e + t.baseInterestNotAccelerated), 0),
					S = k.reduce(((e, t) => e + t.interest), 0);
				return {
					loanAmount: v,
					paymentPerPeriod: w,
					acceleratedPayment: _,
					totalCost: v + S,
					interestPaid: S,
					amortization: k,
					mortgageInsurance: b,
					additionalPaymentSavings: "none" !== s && u > 0 ? P - E : 0,
					frequency: p
				}
			},
			il = {
				wrap: "wrap-3509489752",
				top: "top-1939228210 top-1776824745 top-410137282",
				controls: "controls-7421421534",
				"add-scenario": "add-scenario-5085844051 add-scenario-5504988074",
				scenarios: "scenarios-4546858643 scenarios-4014609597 scenarios-1794821318 scenarios-8805416423 scenarios-8677935687 scenarios-6984002057"
			},
			sl = ({
				fields: e = {},
				results: t = {}
			} = {}) => ({
				key: Math.floor(1e7 * Math.random()),
				fields: e,
				results: t
			}),
			ll = ({
				rates: t,
				site: n = {},
				config: a,
				translator: r
			}) => {
				const o = r.getLanguage(),
					[i, s] = (0, e.useReducer)(((e, {
						type: t,
						value: {
							index: n,
							fields: a
						} = {}
					}) => {
						switch (t) {
							case "ADD": {
								const {
									fields: t
								} = e[e.length - 1], n = Object.keys(t).length && ol(t) || {};
								return [...e, sl({
									fields: t,
									results: n
								})]
							}
							case "UPDATE": {
								const t = e[n];
								if (!t) return e;
								const r = Object.keys(a).length && ol(a) || {};
								return [...e.slice(0, n), {
									...t,
									fields: a,
									results: r
								}, ...e.slice(n + 1)]
							}
							case "REMOVE":
								return 0 === n ? e : e.filter(((e, t) => t !== n));
							default:
								return e
						}
					}), [sl()]),
					[l, c] = (0, e.useState)(!1),
					{
						ajaxUrl: u,
						ajaxNonce: d
					} = a;
				return e.createElement("div", {
					className: il.wrap
				}, e.createElement("div", {
					className: il.top
				}, e.createElement("div", {
					className: il.help
				}, e.createElement(pe, {
					name: "helpSwitch",
					onChange: e => c(e.target.checked),
					text: "Need us to guide you through the process? Hit the Guided Calculator toggle and we’ll help you out.",
					translator: r
				})), e.createElement("div", {
					className: il.ctas
				}, e.createElement(Me, {
					site: n,
					showPrequal: !0,
					translator: r
				}), e.createElement(de, {
					site: n,
					onClick: async e => {
						const t = `${r.getText("View your results")} - ${r.getText("Payment Calculator")} | ${u.includes("mortgagealliance")?"Mortgage Alliance":u.includes("multi-prets")?"Multi-Prêts":u.includes("invis")?"INVIS":u.includes("migroup")?"Mortgage Intelligence":void 0}`;
						let a = `${r.getText("Thank you for using our calculator! Here are the mortgage payment amounts for the selected terms and conditions.")}\n`;
						i.forEach(((e, t) => {
							const n = Object.keys(e.fields).length && ol(e.fields) || {};
							a += `\n${r.getText("Scenario")} ${t+1}\n\n${r.getText(e.fields.paymentFrequency.frequency)} ${r.getText("Payment")}: ${Ne(n.paymentPerPeriod+n.acceleratedPayment,o)}\n\n${n.additionalPaymentSavings>0?`${r.getText("Additional Payment Savings")}: ${Ne(n.additionalPaymentSavings,o)}\n`:""}${r.getText("Total Cost of Loan")}: ${Ne(n.totalCost,o)}\n${r.getText("Total Interest Paid")}: ${Ne(n.interestPaid,o)}\n${r.getText("Mortgage Insurance")}: ${n.mortgageInsurance?`${Ne(n.mortgageInsurance,o)}`:"N/A"}\n\n${r.getText("Home Price")}: ${Ne(e.fields.homePrice,o)}\n${r.getText("Down Payment")}: ${Ne(e.fields.downPaymentDollars,o)}\n${r.getText("Amortization")}: ${e.fields.termInYears} ${$e(Number(e.fields.termInYears),r.getText(" year"),r.getText(" years"))}\n${r.getText("Interest Rate")}: ${e.fields.interest.rate} %\n${r.getText("Payment Frequency")}: ${r.getText(e.fields.paymentFrequency.frequency)}\n${r.getText("Closing Costs")}: ${Ne(e.fields.closingCosts,o)}\n\n${r.getText("Additional Payment Type")}: ${r.getText(e.fields.additionalPaymentType)}${"once"===e.fields.additionalPaymentType?`\n${r.getText("Year of Payment")}: ${0===e.fields.yearOfAdditionalPayment?r.getText("First Payment"):`${r.getText("Year")} ${e.fields.yearOfAdditionalPayment}`}`:""}${"increase"===e.fields.additionalPaymentType?`\n${r.getText("Starting in Year")}: ${0===e.fields.additionalPaymentStartingYear?r.getText("First Payment"):`${r.getText("Year")} ${e.fields.additionalPaymentStartingYear}`}`:""}${"none"!==e.fields.additionalPaymentType?`\n${r.getText("Additional Payment Amount")}: ${Ne(e.fields.additionalPaymentAmount,o)}`:""}\n`
						})), a += `\n${r.getText("The calculations are based on the following assumptions:")}\n\n\t- ${r.getText("The mortgage interest rate remains unchanged throughout the amortisation period.")}\n\t- ${r.getText("Interest is calculated semi-annually for fixed-rate loan.")}\n\n${r.getText("The calculation results are estimations based on the values entered. They may differ if your financial situation and budget change at the time of the loan.")}\n${n?`\n${r.getText("Questions? Please contact")} ${n.display_name} ${r.getText("at")} ${n.email}.\n`:""}\n`;
						const s = await fetch(u, {
								method: "POST",
								headers: {
									"Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
								},
								body: `to=${e}&subject=${encodeURIComponent(t)}&message=${encodeURIComponent(a)}&action=send_email&_wpnonce=${d}`,
								cache: "no-cache",
								credentials: "same-origin"
							}),
							{
								data: l
							} = await s.json()
					},
					config: a,
					translator: r,
					calcName: "Mortgage payment / Montant des versements"
				}))), e.createElement("div", {
					className: il.controls
				}, i.length < 4 && e.createElement("button", {
					className: il["add-scenario"],
					onClick: () => s({
						type: "ADD"
					})
				}, e.createElement(h, {
					style: {
						color: "var(--accent-color)"
					}
				}), " ", r.getText("Add Scenario"))), e.createElement("div", {
					className: il.scenarios,
					"data-count": i.length
				}, i.map((({
					key: n,
					fields: o,
					results: c
				}, u) => e.createElement(je, {
					key: n,
					onChange: e => s({
						type: "UPDATE",
						value: {
							index: u,
							fields: e
						}
					}),
					onRemove: () => s({
						type: "REMOVE",
						value: {
							index: u
						}
					}),
					scenarioCount: i.length,
					index: u,
					fields: o,
					results: c,
					showHelp: l,
					rates: t,
					config: a,
					translator: r
				})))), e.createElement(al, {
					scenarios: i,
					translator: r
				}))
			};
		ll.propTypes = {
			rates: r().object,
			site: r().object,
			config: r().object,
			translator: r().object
		};
		const cl = ll;

		function ul(e) {
			return u({
				tag: "svg",
				attr: {
					viewBox: "0 0 512 512"
				},
				child: [{
					tag: "path",
					attr: {
						d: "M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"
					}
				}]
			})(e)
		}

		function dl(e) {
			return u({
				tag: "svg",
				attr: {
					viewBox: "0 0 512 512"
				},
				child: [{
					tag: "path",
					attr: {
						d: "M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"
					}
				}]
			})(e)
		}
		const hl = {
				"down-payment-toggle": "down-payment-toggle-369755723",
				toggle: "toggle-9260488888",
				"invest-switch": "invest-switch-5319237021",
				switch: "switch-611236591 switch-3458112324 switch-2567039217 switch-4892473159 switch-1133747011 switch-2328169318 switch-6195143101 switch-3960854697",
				"switch-btn": "switch-btn-5442622734 switch-btn-8054500840 switch-btn-5488539038 switch-btn-8615489364 switch-btn-929616619 switch-btn-2756958975 switch-btn-5446905682",
				collapsible: "collapsible-5531343685 collapsible-7630427804"
			},
			fl = (0, p.ZP)("h2", null, {
				displayName: "Heading",
				styles: {
					cls1: "cls1-1659420507",
					cls2: "cls2-720804107 cls1-1659420507"
				}
			}),
			pl = ({
				className: t,
				onChange: n,
				rates: a,
				config: {
					defaultRatesProvince: r
				},
				translator: o
			}) => {
				const [i, s] = (0, e.useState)("$"), [l, c] = (0, e.useState)(!1), [u, d] = M({
					monthlyRent: 1200,
					annualRentIncrease: 1.5,
					tenantInsurance: 400,
					otherRentCosts: 1e3,
					investDownPayment: !0,
					investDownPaymentRoi: 3,
					homePrice: 2e5,
					downPaymentDollars: 4e4,
					downPaymentPercentage: 20,
					downPaymentInput: "$",
					interest: {
						rate: a.ours[0].fixed1Yr,
						rateType: "fixed",
						province: r
					},
					termInYears: 25,
					homeInsurance: 1e3,
					maintenanceFees: 3e3,
					landTransferTax: 3e3,
					propertyTaxes: 3e3,
					schoolTax: 600,
					annualHomeAppreciationPercentage: 1,
					costOfBuying: 2e3,
					costOfSellingPercentage: 5,
					inflation: 2
				}, ["downPaymentDollars", "downPaymentPercentage", "interest", "termInYears"]), h = Ie(u.homePrice), f = Oe(u.homePrice);
				(0, e.useEffect)((() => n({
					...u,
					downPaymentInput: i
				})), [...Object.values(u), i]);
				const p = [1, 2, 3, 4, 5, 7, 10, 15, 20, 25];
				(u.downPaymentDollars / u.homePrice >= .2 || u.downPaymentPercentage >= 20) && p.push(30);
				const m = e => {
						const t = parseInt(e.target.value.replace(/[^\d]/g, ""));
						return t < h ? d({
							target: {
								name: "downPaymentDollars",
								value: h
							}
						}) : t > f ? d({
							target: {
								name: "downPaymentDollars",
								value: f
							}
						}) : void 0
					},
					[g, y] = (0, e.useState)(!0),
					[b, v] = (0, e.useState)(!0);
				return e.createElement("div", {
					className: t
				}, e.createElement(pe, {
					name: "helpSwitch",
					onChange: e => c(e.target.checked),
					text: "Need us to guide you through the process? Hit the Guided Calculator toggle and we’ll help you out.",
					translator: o
				}), e.createElement(fl, null, o.getText("Renting")), e.createElement(we, {
					label: "Monthly Rent",
					name: "monthlyRent",
					value: u.monthlyRent,
					placeholder: "Monthly rent in $",
					onChange: d,
					helpText: "How much is your monthly rent?",
					showHelp: l,
					translator: o
				}), e.createElement(Se, {
					label: o.getText("Expected Annual Rent Increase (%)"),
					name: "annualRentIncrease",
					value: u.annualRentIncrease,
					placeholder: o.getText("Annual rent increase %"),
					onChange: d,
					helpText: o.getText("How much do you anticipate rent will increase each year?"),
					showHelp: l
				}), e.createElement(we, {
					label: "Annual Tenant Insurance ($)",
					name: "tenantInsurance",
					value: u.tenantInsurance,
					placeholder: "Annual insurance in $",
					onChange: d,
					helpText: "The amount you pay per year for tenant insurance.",
					showHelp: l,
					translator: o
				}), e.createElement(we, {
					label: "Other Annual Rent Costs ($)",
					name: "otherRentCosts",
					value: u.otherRentCosts,
					placeholder: "Additional annual rent costs in $",
					onChange: d,
					helpText: "Any additional costs you may incur each year while renting, such as maintenance costs. Don’t forget to add in things like utilities and apartment related fees.",
					showHelp: l,
					translator: o
				}), e.createElement("div", {
					className: hl.collapsible,
					onClick: () => y(!g)
				}, e.createElement(fl, null, o.getText("Renting Assumptions")), e.createElement("i", {
					className: hl["collapsed-arrow"]
				}, g ? e.createElement(dl, null) : e.createElement(ul, null))), g ? null : e.createElement(e.Fragment, null, e.createElement(T, null, e.createElement(k, null, o.getText("Invest Down Payment?"), e.createElement("span", {
					className: hl["invest-switch"]
				}, e.createElement("input", {
					className: hl.switch,
					name: "investDownPayment",
					id: "investDownPayment",
					checked: u.investDownPayment,
					onChange: e => d({
						target: {
							name: "investDownPayment",
							value: Boolean(e.target.checked)
						}
					}),
					type: "checkbox"
				}), e.createElement("label", {
					className: hl["switch-btn"],
					htmlFor: "investDownPayment"
				})))), u.investDownPayment ? e.createElement(Se, {
					label: o.getText("Expected Return on Investment (%)"),
					name: "investDownPaymentRoi",
					value: u.investDownPaymentRoi,
					placeholder: o.getText("Expected ROI %"),
					onChange: d,
					helpText: "",
					showHelp: l
				}) : null), e.createElement("br", null), e.createElement("br", null), e.createElement(fl, null, o.getText("Buying")), e.createElement(we, {
					label: "Property Purchase Price",
					name: "homePrice",
					value: u.homePrice,
					placeholder: "Home price in $",
					onChange: d,
					onBlur: () => m({
						target: {
							value: `${u.downPaymentDollars}`
						}
					}),
					helpText: "Have you picked out a place you like? Take a look at the comparable prices and use that as a baseline for this field.",
					showHelp: l,
					translator: o
				}), e.createElement(we, {
					label: "Down Payment ($)",
					name: "downPaymentDollars",
					value: u.downPaymentDollars,
					placeholder: "Down payment in $",
					onBlur: m,
					onChange: d,
					helpText: "This helps you determine how much you can put down towards the price of the home when you buy. Write in how much you will have to spend. Make sure it is at least 5% of the price of the home.",
					showHelp: l,
					translator: o
				}), e.createElement(te, {
					label: o.getText("Amortization"),
					name: "termInYears",
					defaultValue: u.termInYears,
					options: p.reduce(((e, t) => t && {
						...e,
						[`${t} ${1===t?o.getText("year"):o.getText("years")}`]: t
					}), {}),
					onChange: d,
					helpText: o.getText("How long would you like to pay your mortgage off. A longer term means lower payments."),
					showHelp: l
				}), e.createElement(ve, {
					label: "Interest Rate (%)",
					name: "interest",
					rates: a,
					value: u.interest,
					placeholder: "Interest rate in %",
					onChange: d,
					helpText: "We’ve included the average rate, but you can use the Rates page or Pre-qualification to gain a better understanding of what you may qualify for.",
					showHelp: l,
					translator: o
				}), e.createElement("div", {
					className: hl.collapsible,
					onClick: () => v(!b)
				}, e.createElement(fl, null, o.getText("Buying Assumptions")), e.createElement("i", {
					className: hl["collapsed-arrow"]
				}, b ? e.createElement(dl, null) : e.createElement(ul, null))), b ? null : e.createElement(e.Fragment, null, e.createElement(we, {
					label: "Home Insurance",
					name: "homeInsurance",
					value: u.homeInsurance,
					placeholder: "Annual home insurance in $",
					onChange: d,
					helpText: "The amount in home insurance you will pay each year.",
					showHelp: l,
					translator: o
				}), e.createElement(we, {
					label: "Maintenance/Condo Fees",
					name: "maintenanceFees",
					value: u.maintenanceFees,
					placeholder: "Annual maintenance/condo fees in $",
					onChange: d,
					helpText: "The amount in fees such as maintenance, condo fees, etc. you will pay each year.",
					showHelp: l,
					translator: o
				}), e.createElement(we, {
					label: "Land Transfer Tax ($)",
					name: "landTransferTax",
					value: u.landTransferTax,
					placeholder: "Land transfer tax in $",
					onChange: d,
					helpText: "The amount in land transfer tax you will pay at closing.",
					showHelp: l,
					translator: o
				}), e.createElement(we, {
					label: "Annual Property Taxes ($)",
					name: "propertyTaxes",
					value: u.propertyTaxes,
					placeholder: "Annual property tax in $",
					onChange: d,
					helpText: "The amount in property taxes you will pay each year.",
					showHelp: l,
					translator: o
				}), e.createElement(we, {
					label: "School Tax ($)",
					name: "schoolTax",
					value: u.schoolTax,
					placeholder: "Annual school tax in $",
					onChange: d,
					helpText: "The amount in school taxes you will pay each year.",
					showHelp: l,
					translator: o
				}), e.createElement(Se, {
					label: o.getText("Home Appreciation Rate (%)"),
					name: "annualHomeAppreciationPercentage",
					value: u.annualHomeAppreciationPercentage,
					placeholder: o.getText("Annual home appreciation increase %"),
					onChange: d,
					helpText: o.getText("Your estimated home annual appreciation rate."),
					showHelp: l
				}), e.createElement(we, {
					label: "Cost of Buying ($)",
					name: "costOfBuying",
					value: u.costOfBuying,
					placeholder: "Buying costs in $",
					onChange: d,
					helpText: "These upfront costs can include loan, appraisal, and legal fees, title search, survey, home inspection and other similar services.",
					showHelp: l,
					translator: o
				}), e.createElement(Se, {
					label: o.getText("Cost of Selling (%)"),
					name: "costOfSellingPercentage",
					decimalScale: "1",
					value: u.costOfSellingPercentage,
					placeholder: o.getText("Selling costs in %"),
					onChange: d,
					helpText: o.getText("These costs can include legal fees, title search, survey services and broker commission."),
					showHelp: l
				}), e.createElement(Se, {
					label: o.getText("Inflation Rate (%)"),
					name: "inflation",
					decimalScale: "1",
					value: u.inflation,
					placeholder: o.getText("Inflation rate in %"),
					onChange: d,
					helpText: o.getText("The annual expected rate of economic inflation."),
					showHelp: l
				})))
			};
		pl.propTypes = {
			onChange: r().func,
			rates: r().object,
			className: r().string,
			translator: r().object
		};
		const ml = pl;
		var gl = n(398);

		function yl(e) {
			return u({
				tag: "svg",
				attr: {
					viewBox: "0 0 1024 1024"
				},
				child: [{
					tag: "path",
					attr: {
						d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"
					}
				}]
			})(e)
		}
		/*!
		 * chartjs-plugin-datalabels v2.0.0
		 * https://chartjs-plugin-datalabels.netlify.app
		 * (c) 2017-2021 chartjs-plugin-datalabels contributors
		 * Released under the MIT license
		 */
		var bl = function() {
				if ("undefined" != typeof window) {
					if (window.devicePixelRatio) return window.devicePixelRatio;
					var e = window.screen;
					if (e) return (e.deviceXDPI || 1) / (e.logicalXDPI || 1)
				}
				return 1
			}(),
			vl = function(e) {
				var t, n = [];
				for (e = [].concat(e); e.length;) "string" == typeof(t = e.pop()) ? n.unshift.apply(n, t.split("\n")) : Array.isArray(t) ? e.push.apply(e, t) : Qe(e) || n.unshift("" + t);
				return n
			},
			xl = function(e, t, n) {
				var a, r = [].concat(t),
					o = r.length,
					i = e.font,
					s = 0;
				for (e.font = n.string, a = 0; a < o; ++a) s = Math.max(e.measureText(r[a]).width, s);
				return e.font = i, {
					height: o * n.lineHeight,
					width: s
				}
			},
			wl = function(e, t, n) {
				return Math.max(e, Math.min(t, n))
			},
			Tl = function(e, t) {
				var n, a, r, o, i = e.slice(),
					s = [];
				for (n = 0, r = t.length; n < r; ++n) o = t[n], -1 === (a = i.indexOf(o)) ? s.push([o, 1]) : i.splice(a, 1);
				for (n = 0, r = i.length; n < r; ++n) s.push([i[n], -1]);
				return s
			};

		function _l(e, t) {
			var n = t.x,
				a = t.y;
			if (null === n) return {
				x: 0,
				y: -1
			};
			if (null === a) return {
				x: 1,
				y: 0
			};
			var r = e.x - n,
				o = e.y - a,
				i = Math.sqrt(r * r + o * o);
			return {
				x: i ? r / i : 0,
				y: i ? o / i : -1
			}
		}
		var kl = 0,
			Pl = 1,
			El = 2,
			Sl = 4,
			Cl = 8;

		function Ml(e, t, n) {
			var a = kl;
			return e < n.left ? a |= Pl : e > n.right && (a |= El), t < n.top ? a |= Cl : t > n.bottom && (a |= Sl), a
		}

		function Nl(e, t) {
			var n, a, r = t.anchor,
				o = e;
			return t.clamp && (o = function(e, t) {
					for (var n, a, r, o = e.x0, i = e.y0, s = e.x1, l = e.y1, c = Ml(o, i, t), u = Ml(s, l, t); c | u && !(c & u);)(n = c || u) & Cl ? (a = o + (s - o) * (t.top - i) / (l - i), r = t.top) : n & Sl ? (a = o + (s - o) * (t.bottom - i) / (l - i), r = t.bottom) : n & El ? (r = i + (l - i) * (t.right - o) / (s - o), a = t.right) : n & Pl && (r = i + (l - i) * (t.left - o) / (s - o), a = t.left), n === c ? c = Ml(o = a, i = r, t) : u = Ml(s = a, l = r, t);
					return {
						x0: o,
						x1: s,
						y0: i,
						y1: l
					}
				}(o, t.area)), "start" === r ? (n = o.x0, a = o.y0) : "end" === r ? (n = o.x1, a = o.y1) : (n = (o.x0 + o.x1) / 2, a = (o.y0 + o.y1) / 2),
				function(e, t, n, a, r) {
					switch (r) {
						case "center":
							n = a = 0;
							break;
						case "bottom":
							n = 0, a = 1;
							break;
						case "right":
							n = 1, a = 0;
							break;
						case "left":
							n = -1, a = 0;
							break;
						case "top":
							n = 0, a = -1;
							break;
						case "start":
							n = -n, a = -a;
							break;
						case "end":
							break;
						default:
							r *= Math.PI / 180, n = Math.cos(r), a = Math.sin(r)
					}
					return {
						x: e,
						y: t,
						vx: n,
						vy: a
					}
				}(n, a, e.vx, e.vy, t.align)
		}
		var $l = function(e, t) {
				var n = (e.startAngle + e.endAngle) / 2,
					a = Math.cos(n),
					r = Math.sin(n),
					o = e.innerRadius,
					i = e.outerRadius;
				return Nl({
					x0: e.x + a * o,
					y0: e.y + r * o,
					x1: e.x + a * i,
					y1: e.y + r * i,
					vx: a,
					vy: r
				}, t)
			},
			Al = function(e, t) {
				var n = _l(e, t.origin),
					a = n.x * e.options.radius,
					r = n.y * e.options.radius;
				return Nl({
					x0: e.x - a,
					y0: e.y - r,
					x1: e.x + a,
					y1: e.y + r,
					vx: n.x,
					vy: n.y
				}, t)
			},
			Il = function(e, t) {
				var n = _l(e, t.origin),
					a = e.x,
					r = e.y,
					o = 0,
					i = 0;
				return e.horizontal ? (a = Math.min(e.x, e.base), o = Math.abs(e.base - e.x)) : (r = Math.min(e.y, e.base), i = Math.abs(e.base - e.y)), Nl({
					x0: a,
					y0: r + i,
					x1: a + o,
					y1: r,
					vx: n.x,
					vy: n.y
				}, t)
			},
			Ol = function(e, t) {
				var n = _l(e, t.origin);
				return Nl({
					x0: e.x,
					y0: e.y,
					x1: e.x,
					y1: e.y,
					vx: n.x,
					vy: n.y
				}, t)
			},
			Rl = function(e) {
				return Math.round(e * bl) / bl
			};

		function Dl(e, t) {
			var n = t.chart.getDatasetMeta(t.datasetIndex).vScale;
			if (!n) return null;
			if (void 0 !== n.xCenter && void 0 !== n.yCenter) return {
				x: n.xCenter,
				y: n.yCenter
			};
			var a = n.getBasePixel();
			return e.horizontal ? {
				x: a,
				y: null
			} : {
				x: null,
				y: a
			}
		}

		function Fl(e, t, n) {
			var a = n.backgroundColor,
				r = n.borderColor,
				o = n.borderWidth;
			(a || r && o) && (e.beginPath(), function(e, t, n, a, r, o) {
				var i = Math.PI / 2;
				if (o) {
					var s = Math.min(o, r / 2, a / 2),
						l = t + s,
						c = n + s,
						u = t + a - s,
						d = n + r - s;
					e.moveTo(t, c), l < u && c < d ? (e.arc(l, c, s, -Math.PI, -i), e.arc(u, c, s, -i, 0), e.arc(u, d, s, 0, i), e.arc(l, d, s, i, Math.PI)) : l < u ? (e.moveTo(l, n), e.arc(u, c, s, -i, i), e.arc(l, c, s, i, Math.PI + i)) : c < d ? (e.arc(l, c, s, -Math.PI, 0), e.arc(l, d, s, 0, Math.PI)) : e.arc(l, c, s, -Math.PI, Math.PI), e.closePath(), e.moveTo(t, n)
				} else e.rect(t, n, a, r)
			}(e, Rl(t.x) + o / 2, Rl(t.y) + o / 2, Rl(t.w) - o, Rl(t.h) - o, n.borderRadius), e.closePath(), a && (e.fillStyle = a, e.fill()), r && o && (e.strokeStyle = r, e.lineWidth = o, e.lineJoin = "miter", e.stroke()))
		}

		function Ll(e, t, n) {
			var a = e.shadowBlur,
				r = n.stroked,
				o = Rl(n.x),
				i = Rl(n.y),
				s = Rl(n.w);
			r && e.strokeText(t, o, i, s), n.filled && (a && r && (e.shadowBlur = 0), e.fillText(t, o, i, s), a && r && (e.shadowBlur = a))
		}
		var zl = function(e, t, n, a) {
			var r = this;
			r._config = e, r._index = a, r._model = null, r._rects = null, r._ctx = t, r._el = n
		};
		lt(zl.prototype, {
			_modelize: function(e, t, n, a) {
				var r, o = this,
					i = o._index,
					s = Xn(Kn([n.font, {}], a, i)),
					l = Kn([n.color, Mn.color], a, i);
				return {
					align: Kn([n.align, "center"], a, i),
					anchor: Kn([n.anchor, "center"], a, i),
					area: a.chart.chartArea,
					backgroundColor: Kn([n.backgroundColor, null], a, i),
					borderColor: Kn([n.borderColor, null], a, i),
					borderRadius: Kn([n.borderRadius, 0], a, i),
					borderWidth: Kn([n.borderWidth, 0], a, i),
					clamp: Kn([n.clamp, !1], a, i),
					clip: Kn([n.clip, !1], a, i),
					color: l,
					display: e,
					font: s,
					lines: t,
					offset: Kn([n.offset, 0], a, i),
					opacity: Kn([n.opacity, 1], a, i),
					origin: Dl(o._el, a),
					padding: Gn(Kn([n.padding, 0], a, i)),
					positioner: (r = o._el, r instanceof li ? $l : r instanceof vi ? Al : r instanceof Ei ? Il : Ol),
					rotation: Kn([n.rotation, 0], a, i) * (Math.PI / 180),
					size: xl(o._ctx, t, s),
					textAlign: Kn([n.textAlign, "start"], a, i),
					textShadowBlur: Kn([n.textShadowBlur, 0], a, i),
					textShadowColor: Kn([n.textShadowColor, l], a, i),
					textStrokeColor: Kn([n.textStrokeColor, l], a, i),
					textStrokeWidth: Kn([n.textStrokeWidth, 0], a, i)
				}
			},
			update: function(e) {
				var t, n, a, r = this,
					o = null,
					i = null,
					s = r._index,
					l = r._config,
					c = Kn([l.display, !0], e, s);
				c && (t = e.dataset.data[s], (a = Qe(n = et(nt(l.formatter, [t, e]), t)) ? [] : vl(n)).length && (i = function(e) {
					var t = e.borderWidth || 0,
						n = e.padding,
						a = e.size.height,
						r = e.size.width,
						o = -r / 2,
						i = -a / 2;
					return {
						frame: {
							x: o - n.left - t,
							y: i - n.top - t,
							w: r + n.width + 2 * t,
							h: a + n.height + 2 * t
						},
						text: {
							x: o,
							y: i,
							w: r,
							h: a
						}
					}
				}(o = r._modelize(c, a, l, e)))), r._model = o, r._rects = i
			},
			geometry: function() {
				return this._rects ? this._rects.frame : {}
			},
			rotation: function() {
				return this._model ? this._model.rotation : 0
			},
			visible: function() {
				return this._model && this._model.opacity
			},
			model: function() {
				return this._model
			},
			draw: function(e, t) {
				var n, a = e.ctx,
					r = this._model,
					o = this._rects;
				this.visible() && (a.save(), r.clip && (n = r.area, a.beginPath(), a.rect(n.left, n.top, n.right - n.left, n.bottom - n.top), a.clip()), a.globalAlpha = wl(0, r.opacity, 1), a.translate(Rl(t.x), Rl(t.y)), a.rotate(r.rotation), Fl(a, o.frame, r), function(e, t, n, a) {
					var r, o = a.textAlign,
						i = a.color,
						s = !!i,
						l = a.font,
						c = t.length,
						u = a.textStrokeColor,
						d = a.textStrokeWidth,
						h = u && d;
					if (c && (s || h))
						for (n = function(e, t, n) {
								var a = n.lineHeight,
									r = e.w,
									o = e.x;
								return "center" === t ? o += r / 2 : "end" !== t && "right" !== t || (o += r), {
									h: a,
									w: r,
									x: o,
									y: e.y + a / 2
								}
							}(n, o, l), e.font = l.string, e.textAlign = o, e.textBaseline = "middle", e.shadowBlur = a.textShadowBlur, e.shadowColor = a.textShadowColor, s && (e.fillStyle = i), h && (e.lineJoin = "round", e.lineWidth = d, e.strokeStyle = u), r = 0, c = t.length; r < c; ++r) Ll(e, t[r], {
							stroked: h,
							filled: s,
							w: n.w,
							x: n.x,
							y: n.y + n.h * r
						})
				}(a, r.lines, o.text, r), a.restore())
			}
		});
		var Vl = Number.MIN_SAFE_INTEGER || -9007199254740991,
			Bl = Number.MAX_SAFE_INTEGER || 9007199254740991;

		function jl(e, t, n) {
			var a = Math.cos(n),
				r = Math.sin(n),
				o = t.x,
				i = t.y;
			return {
				x: o + a * (e.x - o) - r * (e.y - i),
				y: i + r * (e.x - o) + a * (e.y - i)
			}
		}

		function Hl(e, t) {
			var n, a, r, o, i, s = Bl,
				l = Vl,
				c = t.origin;
			for (n = 0; n < e.length; ++n) r = (a = e[n]).x - c.x, o = a.y - c.y, i = t.vx * r + t.vy * o, s = Math.min(s, i), l = Math.max(l, i);
			return {
				min: s,
				max: l
			}
		}

		function ql(e, t) {
			var n = t.x - e.x,
				a = t.y - e.y,
				r = Math.sqrt(n * n + a * a);
			return {
				vx: (t.x - e.x) / r,
				vy: (t.y - e.y) / r,
				origin: e,
				ln: r
			}
		}
		var Wl = function() {
			this._rotation = 0, this._rect = {
				x: 0,
				y: 0,
				w: 0,
				h: 0
			}
		};

		function Yl(e, t, n) {
			var a = t.positioner(e, t),
				r = a.vx,
				o = a.vy;
			if (!r && !o) return {
				x: a.x,
				y: a.y
			};
			var i = n.w,
				s = n.h,
				l = t.rotation,
				c = Math.abs(i / 2 * Math.cos(l)) + Math.abs(s / 2 * Math.sin(l)),
				u = Math.abs(i / 2 * Math.sin(l)) + Math.abs(s / 2 * Math.cos(l)),
				d = 1 / Math.max(Math.abs(r), Math.abs(o));
			return c *= r * d, u *= o * d, c += t.offset * r, u += t.offset * o, {
				x: a.x + c,
				y: a.y + u
			}
		}
		lt(Wl.prototype, {
			center: function() {
				var e = this._rect;
				return {
					x: e.x + e.w / 2,
					y: e.y + e.h / 2
				}
			},
			update: function(e, t, n) {
				this._rotation = n, this._rect = {
					x: t.x + e.x,
					y: t.y + e.y,
					w: t.w,
					h: t.h
				}
			},
			contains: function(e) {
				var t = this,
					n = t._rect;
				return !((e = jl(e, t.center(), -t._rotation)).x < n.x - 1 || e.y < n.y - 1 || e.x > n.x + n.w + 2 || e.y > n.y + n.h + 2)
			},
			intersects: function(e) {
				var t, n, a, r = this._points(),
					o = e._points(),
					i = [ql(r[0], r[1]), ql(r[0], r[3])];
				for (this._rotation !== e._rotation && i.push(ql(o[0], o[1]), ql(o[0], o[3])), t = 0; t < i.length; ++t)
					if (n = Hl(r, i[t]), a = Hl(o, i[t]), n.max < a.min || a.max < n.min) return !1;
				return !0
			},
			_points: function() {
				var e = this,
					t = e._rect,
					n = e._rotation,
					a = e.center();
				return [jl({
					x: t.x,
					y: t.y
				}, a, n), jl({
					x: t.x + t.w,
					y: t.y
				}, a, n), jl({
					x: t.x + t.w,
					y: t.y + t.h
				}, a, n), jl({
					x: t.x,
					y: t.y + t.h
				}, a, n)]
			}
		});
		var Ul = {
				prepare: function(e) {
					var t, n, a, r, o, i = [];
					for (t = 0, a = e.length; t < a; ++t)
						for (n = 0, r = e[t].length; n < r; ++n) o = e[t][n], i.push(o), o.$layout = {
							_box: new Wl,
							_hidable: !1,
							_visible: !0,
							_set: t,
							_idx: n
						};
					return i.sort((function(e, t) {
						var n = e.$layout,
							a = t.$layout;
						return n._idx === a._idx ? a._set - n._set : a._idx - n._idx
					})), this.update(i), i
				},
				update: function(e) {
					var t, n, a, r, o, i = !1;
					for (t = 0, n = e.length; t < n; ++t) r = (a = e[t]).model(), (o = a.$layout)._hidable = r && "auto" === r.display, o._visible = a.visible(), i |= o._hidable;
					i && function(e) {
						var t, n, a, r, o, i, s;
						for (t = 0, n = e.length; t < n; ++t)(r = (a = e[t]).$layout)._visible && (s = new Proxy(a._el, {
							get: (e, t) => e.getProps([t], !0)[t]
						}), o = a.geometry(), i = Yl(s, a.model(), o), r._box.update(i, o, a.rotation()));
						(function(e, t) {
							var n, a, r, o;
							for (n = e.length - 1; n >= 0; --n)
								for (r = e[n].$layout, a = n - 1; a >= 0 && r._visible; --a)(o = e[a].$layout)._visible && r._box.intersects(o._box) && t(r, o)
						})(e, (function(e, t) {
							var n = e._hidable,
								a = t._hidable;
							n && a || a ? t._visible = !1 : n && (e._visible = !1)
						}))
					}(e)
				},
				lookup: function(e, t) {
					var n, a;
					for (n = e.length - 1; n >= 0; --n)
						if ((a = e[n].$layout) && a._visible && a._box.contains(t)) return e[n];
					return null
				},
				draw: function(e, t) {
					var n, a, r, o, i, s;
					for (n = 0, a = t.length; n < a; ++n)(o = (r = t[n]).$layout)._visible && (i = r.geometry(), s = Yl(r._el, r.model(), i), o._box.update(s, i, r.rotation()), r.draw(e, s))
				}
			},
			Zl = "$datalabels",
			Ql = "$default";

		function Gl(e, t, n) {
			if (t) {
				var a, r = n.$context,
					o = n.$groups;
				t[o._set] && (a = t[o._set][o._key]) && !0 === nt(a, [r]) && (e[Zl]._dirty = !0, n.update(r))
			}
		}

		function Xl(e, t) {
			var n, a, r = e[Zl],
				o = r._listeners;
			if (o.enter || o.leave) {
				if ("mousemove" === t.type) a = Ul.lookup(r._labels, t);
				else if ("mouseout" !== t.type) return;
				n = r._hovered, r._hovered = a,
					function(e, t, n, a) {
						var r, o;
						(n || a) && (n ? a ? n !== a && (o = r = !0) : o = !0 : r = !0, o && Gl(e, t.leave, n), r && Gl(e, t.enter, a))
					}(e, o, n, a)
			}
		}
		const Kl = {
				id: "datalabels",
				defaults: {
					align: "center",
					anchor: "center",
					backgroundColor: null,
					borderColor: null,
					borderRadius: 0,
					borderWidth: 0,
					clamp: !1,
					clip: !1,
					color: void 0,
					display: !0,
					font: {
						family: void 0,
						lineHeight: 1.2,
						size: void 0,
						style: void 0,
						weight: null
					},
					formatter: function(e) {
						if (Qe(e)) return null;
						var t, n, a, r = e;
						if (Xe(e))
							if (Qe(e.label))
								if (Qe(e.r))
									for (r = "", a = 0, n = (t = Object.keys(e)).length; a < n; ++a) r += (0 !== a ? ", " : "") + t[a] + ": " + e[t[a]];
								else r = e.r;
						else r = e.label;
						return "" + r
					},
					labels: void 0,
					listeners: {},
					offset: 4,
					opacity: 1,
					padding: {
						top: 4,
						right: 4,
						bottom: 4,
						left: 4
					},
					rotation: 0,
					textAlign: "start",
					textStrokeColor: void 0,
					textStrokeWidth: 0,
					textShadowBlur: 0,
					textShadowColor: void 0
				},
				beforeInit: function(e) {
					e[Zl] = {
						_actives: []
					}
				},
				beforeUpdate: function(e) {
					var t = e[Zl];
					t._listened = !1, t._listeners = {}, t._datasets = [], t._labels = []
				},
				afterDatasetUpdate: function(e, t, n) {
					var a, r, o, i, s, l, c, u, d = t.index,
						h = e[Zl],
						f = h._datasets[d] = [],
						p = e.isDatasetVisible(d),
						m = e.data.datasets[d],
						g = function(e, t) {
							var n, a, r, o = e.datalabels,
								i = [];
							return !1 === o ? null : (!0 === o && (o = {}), t = lt({}, [t, o]), a = t.labels || {}, r = Object.keys(a), delete t.labels, r.length ? r.forEach((function(e) {
								a[e] && i.push(lt({}, [t, a[e], {
									_key: e
								}]))
							})) : i.push(t), n = i.reduce((function(e, t) {
								return at(t.listeners || {}, (function(n, a) {
									e[a] = e[a] || {}, e[a][t._key || Ql] = n
								})), delete t.listeners, e
							}), {}), {
								labels: i,
								listeners: n
							})
						}(m, n),
						y = t.meta.data || [],
						b = e.ctx;
					for (b.save(), a = 0, o = y.length; a < o; ++a)
						if ((c = y[a])[Zl] = [], p && c && e.getDataVisibility(a) && !c.skip)
							for (r = 0, i = g.labels.length; r < i; ++r) l = (s = g.labels[r])._key, (u = new zl(s, b, c, a)).$groups = {
								_set: d,
								_key: l || Ql
							}, u.$context = {
								active: !1,
								chart: e,
								dataIndex: a,
								dataset: m,
								datasetIndex: d
							}, u.update(u.$context), c[Zl].push(u), f.push(u);
					b.restore(), lt(h._listeners, g.listeners, {
						merger: function(e, n, a) {
							n[e] = n[e] || {}, n[e][t.index] = a[e], h._listened = !0
						}
					})
				},
				afterUpdate: function(e, t) {
					e[Zl]._labels = Ul.prepare(e[Zl]._datasets, t)
				},
				afterDatasetsDraw: function(e) {
					Ul.draw(e, e[Zl]._labels)
				},
				beforeEvent: function(e, t) {
					if (e[Zl]._listened) {
						var n = t.event;
						switch (n.type) {
							case "mousemove":
							case "mouseout":
								Xl(e, n);
								break;
							case "click":
								! function(e, t) {
									var n = e[Zl],
										a = n._listeners.click,
										r = a && Ul.lookup(n._labels, t);
									r && Gl(e, a, r)
								}(e, n)
						}
					}
				},
				afterEvent: function(e) {
					var t, n, a, r, o, i, s, l = e[Zl],
						c = l._actives,
						u = l._actives = e.getActiveElements(),
						d = Tl(c, u);
					for (t = 0, n = d.length; t < n; ++t)
						if ((o = d[t])[1])
							for (a = 0, r = (s = o[0].element[Zl] || []).length; a < r; ++a)(i = s[a]).$context.active = 1 === o[1], i.update(i.$context);
					(l._dirty || d.length) && (Ul.update(l._labels), e.render()), delete l._dirty
				}
			},
			Jl = ({
				principal: e,
				termInYears: t,
				interestRate: n,
				monthlyPayment: a,
				numPaymentsPerYear: r = 12
			}) => {
				const o = [];
				let i = e;
				for (let e = 1; e <= t; e++) {
					let t = 0,
						s = 0;
					for (let e = 0; e < r; e++) {
						let e = i * (n / 100) / r;
						t += e;
						let o = a - e;
						s += o, i -= o
					}
					o.push({
						principal: s,
						interestPortion: t,
						currentPrincipal: i,
						year: e
					})
				}
				return o
			},
			ec = ({
				principal: e,
				interestRate: t,
				termInYears: n,
				numPaymentsPerYear: a = 12
			}) => {
				const r = n * a,
					o = Math.pow(1 + t / 2, 2) - 1,
					i = Math.pow(1 + o, 1 / a) - 1,
					s = Math.pow(1 + i, r);
				return e * i * s / (s - 1)
			},
			tc = {
				beforeInit: function(e, t) {
					e.legend.afterFit = function() {
						this.height = this.height + 25
					}
				}
			},
			nc = {
				primaryChartColor: getComputedStyle(document.body).getPropertyValue("--primary-chart-color"),
				darkColor: getComputedStyle(document.body).getPropertyValue("--dark-color")
			},
			ac = {
				"table-info-icon": "table-info-icon-9195561300 table-info-icon-2244542044 table-info-icon-7885485222",
				"table-info-tooltip": "table-info-tooltip-5067881735 table-info-tooltip-5898563709"
			},
			rc = (0, p.ZP)("table", null, {
				displayName: "Table",
				styles: {
					cls1: "cls1-4613491067",
					cls2: "cls2-8372644331 cls1-4613491067 cls2-1902009923 cls2-3744439749"
				}
			}),
			oc = (0, p.ZP)("tr", null, {
				displayName: "TableRow",
				styles: {
					cls1: "cls1-7520676526",
					cls2: "cls2-3412682926 cls1-7520676526"
				}
			}),
			ic = (0, p.ZP)("tr", null, {
				displayName: "TableRowTotal",
				styles: {
					cls1: "cls1-749912916",
					cls2: "cls2-133472797 cls1-749912916 cls2-4756955400"
				}
			}),
			sc = (0, p.ZP)("div", null, {
				displayName: "ResultItem",
				styles: {
					cls1: "cls1-7549548894",
					cls2: "cls2-5265296288 cls1-7549548894"
				}
			}),
			lc = (0, p.ZP)("p", null, {
				displayName: "ChartDesc",
				styles: {
					cls1: "cls1-5270603975",
					cls2: "cls2-9364279901 cls1-5270603975"
				}
			}),
			cc = (0, p.ZP)("img", null, {
				displayName: "CalcImage",
				styles: {
					cls1: "cls1-305805546",
					cls2: "cls2-7478565554 cls1-305805546"
				}
			}),
			uc = ({
				className: t,
				fields: n,
				site: a,
				config: r,
				translator: o
			}) => {
				const i = o.getLanguage(),
					{
						renting: s,
						buying: l
					} = Object.keys(n).length && (({
						monthlyRent: e = 0,
						annualRentIncrease: t = 0,
						tenantInsurance: n = 0,
						otherRentCosts: a = 0,
						investDownPayment: r,
						investDownPaymentRoi: o = 0,
						homePrice: i = 0,
						downPaymentInput: s,
						downPaymentDollars: l = 0,
						downPaymentPercentage: c = 0,
						interest: u,
						termInYears: d,
						homeInsurance: h = 0,
						maintenanceFees: f = 0,
						landTransferTax: p = 0,
						propertyTaxes: m = 0,
						schoolTax: g = 0,
						annualHomeAppreciationPercentage: y = 0,
						costOfBuying: b = 0,
						costOfSellingPercentage: v = 0,
						inflation: x = 1
					}) => {
						const w = "$" === s ? l : i * (c / 100),
							{
								rate: T = 0
							} = u,
							_ = i - w,
							k = (({
								homePrice: e,
								downPayment: t
							}) => {
								const n = 100 * t / e;
								return n >= 20 ? 0 : n >= 15 ? 2.8 : n >= 10 ? 3.1 : n >= 5 ? 4 : void 0
							})({
								homePrice: i,
								downPayment: w
							}),
							P = _ + (_ * (k / 100) || 0),
							E = ec({
								principal: P,
								interestRate: T / 100,
								termInYears: d
							}) || 0,
							S = Jl({
								principal: P,
								termInYears: d,
								interestRate: T,
								monthlyPayment: E
							}),
							C = ec({
								principal: _,
								interestRate: T / 100,
								termInYears: d
							}) || 0,
							M = Jl({
								principal: _,
								monthlyPayment: C,
								termInYears: d,
								interestRate: T
							}),
							N = [];
						let $ = r ? w : 0,
							A = 0,
							I = 12 * e,
							O = n,
							R = a,
							D = r ? w : 0;
						const F = [];
						let L = w,
							z = p + b,
							V = 0,
							B = h,
							j = f,
							H = m + g,
							q = 0,
							W = i;
						for (let e = 1; e <= d; e++) {
							A += I + O + R, D = Math.round(D * (1 + o / 100));
							const n = r ? D - w : 0,
								a = $ + A,
								s = $ + n;
							N.push({
								amountInvested: $,
								expenses: A,
								totalCost: a,
								investmentIncome: n,
								totalInvestmentValue: s,
								netCost: a - s
							}), I = Math.round(I * (1 + t / 100)), O = Math.round(O * (1 + x / 100)), R = Math.round(R * (1 + x / 100)), L += M[e - 1].principal, V = S[e - 1].principal - M[e - 1].principal, z += B + j + H + S[e - 1].interestPortion + V, q = i * Math.pow(1 + y / 100, e) * (v / 100), W = Math.round(W * (1 + y / 100));
							const l = S[e - 1].currentPrincipal,
								c = L + z + q,
								u = W - l;
							F.push({
								amountInvested: L,
								expenses: z,
								sellingCosts: q,
								totalCost: c,
								propertyValue: W,
								mortgageBalance: l,
								netPropertyValue: u,
								netCost: c - u
							}), B = Math.round(B * (1 + x / 100)), j = Math.round(j * (1 + x / 100)), H = Math.round(H * (1 + x / 100))
						}
						return {
							renting: N,
							buying: F
						}
					})(n);
				let c = "rent",
					u = !1,
					d = 1,
					h = o.getText("Renting is better");
				if (s && l)
					for (let e = 0; e < n.termInYears; e++) !u && l[e].netCost < s[e].netCost && (u = !0, c = "buy", d = e + 1, h = d > 1 ? o.getText("The return on investment of your purchase will be in") : o.getText("Buying is more profitable"));
				const [f, p] = (0, e.useState)(d);
				(0, e.useEffect)((() => {
					void 0 !== d && p(d)
				}), [d]);
				const g = l ? l[f - 1] : null,
					y = s ? s[f - 1] : null,
					{
						ajaxUrl: b,
						ajaxNonce: v
					} = (N().width, r);
				return e.createElement("div", {
					className: t
				}, e.createElement(Me, {
					site: a,
					showPrequal: "buy" === c,
					translator: o
				}), e.createElement(de, {
					site: a,
					onClick: async e => {
						const t = `${o.getText("View your results")} - ${o.getText("Rent vs. Buy Calculator")} | ${b.includes("mortgagealliance")?"Mortgage Alliance":b.includes("multi-prets")?"Multi-Prêts":b.includes("invis")?"INVIS":b.includes("migroup")?"Mortgage Intelligence":void 0}`,
							r = `${o.getText("Thank you for using our calculator. Here are the results for your potential return on investment for buying a property, compared to renting.")}\n\t\t\t<p>${o.getText("The return on investment of your purchase will be in")} ${d} ${$e(d,o.getText("year"),o.getText("years"))}</p>\n\t\t\t\t<p>\n\t\t\t\t\t${o.getText("After")}\n\t\t\t\t\t${f} ${$e(f,o.getText("year"),o.getText("years"))},\n\t\t\t\t\t${o.getText(`${c.toLowerCase()}ing represents a benefit of `)}\n\t\t\t\t\t${Ne("buy"===c?s[f-1].netCost-l[f-1].netCost:l[f-1].netCost-s[f-1].netCost,i)}.\n\t\t\t\t</p>\n\t\t\t<p>\n\t\t\t\t<strong>${o.getText("Renting")}:</strong>\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\t${o.getText("Monthly Rent")}: ${Ne(n.monthlyRent,i)}\n\t\t\t\t<br/>\n\t\t\t\t${o.getText("Expected Annual Rent Increase (%)")}: ${n.annualRentIncrease} %\n\t\t\t\t<br/>\n\t\t\t\t${o.getText("Annual Tenant Insurance")}: ${Ne(n.tenantInsurance,i)}\n\t\t\t\t<br/>\n\t\t\t\t${o.getText("Other Annual Rent Costs")}: ${Ne(n.otherRentCosts,i)}\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\t<strong>${o.getText("Buying")}:</strong>\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\t${o.getText("Property Purchase Price")}: ${Ne(n.homePrice,i)}\n\t\t\t\t<br/>\n\t\t\t\t${o.getText("Down Payment")}: ${Ne(n.downPaymentDollars,i)}\n\t\t\t\t<br/>\n\t\t\t\t${o.getText("Amortization")}: ${n.termInYears} ${$e(Number(n.termInYears),o.getText("year"),o.getText("years"))}\n\t\t\t\t<br/>\n\t\t\t\t${o.getText("Interest Rate")}: ${n.interest.rate} %\n\t\t\t</p>\n\t\t\t<table>\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t<th>${o.getText("Buy")}</th>\n\t\t\t\t\t\t<th>${o.getText("Rent")}</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t${o.getText("Amount invested")}\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>${Ne(g.amountInvested,i)}</td>\n\t\t\t\t\t\t<td>${Ne(y.amountInvested,i)}</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t${o.getText("Total expenses/rent")}\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>${Ne(g.expenses,i)}</td>\n\t\t\t\t\t\t<td>${Ne(y.expenses,i)}</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>${o.getText("Selling costs")}</td>\n\t\t\t\t\t\t<td>${Ne(g.sellingCosts,i)}</td>\n\t\t\t\t\t\t<td></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td><strong>${o.getText("Total cost")}</strong></td>\n\t\t\t\t\t\t<td>${Ne(g.totalCost,i)}</td>\n\t\t\t\t\t\t<td>${Ne(y.totalCost,i)}</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t\t<br/>\n\t\t\t<table>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>${o.getText("Property value")}</td>\n\t\t\t\t\t\t<td>${Ne(g.propertyValue,i)}</td>\n\t\t\t\t\t\t<td></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>${o.getText("Mortgage balance")}</td>\n\t\t\t\t\t\t<td>${Ne(Math.abs(g.mortgageBalance)||0,i)}</td>\n\t\t\t\t\t\t<td></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td><strong>${o.getText("Net property value")}</strong></td>\n\t\t\t\t\t\t<td>${Ne(g.netPropertyValue,i)}</td>\n\t\t\t\t\t\t<td></td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t\t<br />\n\t\t\t<table>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>${o.getText("Investments")}</td>\n\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t<td>${Ne(y.amountInvested,i)}</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>${o.getText("Investment income")}</td>\n\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t<td>${Ne(y.investmentIncome,i)}</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>${o.getText("Total value of investments")}</td>\n\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t<td>${Ne(y.totalInvestmentValue,i)}</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td><strong>${o.getText("Net costs")}</strong></td>\n\t\t\t\t\t\t<td>${Ne(g.netCost,i)}</td>\n\t\t\t\t\t\t<td>${Ne(y.netCost,i)}</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t\t<br/>\n\t\t\t<br/>\n\n\t\t\t${o.getText("The calculation results are estimations based on the values entered.")}\n\t\t\t<br/>\n\t\t\t<br/>\n\t\t\t${o.getText("For more details")}, <a href=${window.location.href} target='_blank' rel='noopener noreferrer'>${o.getText("click here")}</a> ${o.getText("to go back to our calculators.")}\n\t\t\t<p>\n\t\t\t\t${a?`\n\t\t\t\t${o.getText("Questions? Please contact")} ${a.display_name} ${o.getText("at")} ${a.email}.\n\t\t\t\t\t\t`:""}\n\t\t\t</p>\n\t\t`,
							u = await fetch(b, {
								method: "POST",
								headers: {
									"Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
								},
								body: `to=${e}&subject=${encodeURIComponent(t)}&message=${encodeURIComponent(r)}&action=send_email&_wpnonce=${v}&headers=${["Content-Type: text/html; charset=UTF-8"]}`,
								cache: "no-cache",
								credentials: "same-origin"
							}),
							{
								data: h
							} = await u.json()
					},
					config: r,
					translator: o,
					calcName: "Rent vs buy / Louer ou acheter"
				}), e.createElement("div", {
					className: "calc-results"
				}, "buy" === c && d > 1 ? e.createElement(sc, null, e.createElement("p", {
					className: "calc-results-title"
				}, o.getText(h)), e.createElement("div", {
					className: "calc-big-label"
				}, e.createElement(m.ZP, {
					preserveValue: !0,
					end: d,
					duration: .5
				}), " ", $e(d, o.getText("year"), o.getText("years")))) : e.createElement(sc, null, e.createElement("div", {
					className: "calc-big-label"
				}, e.createElement("p", {
					style: {
						marginBottom: 0,
						fontSize: "0.52em"
					}
				}, o.getText(h)))), e.createElement(sc, null, e.createElement(gl.Range, {
					step: 1,
					min: 1,
					max: 25,
					name: "currentYear",
					values: [f],
					onChange: ([e]) => p(e),
					renderTrack: ({
						props: t,
						children: n
					}) => e.createElement("div", x({}, t, {
						style: {
							...t.style
						},
						className: "calc-slider-track"
					}), n),
					renderThumb: ({
						props: t,
						isDragged: n
					}) => e.createElement("div", x({}, t, {
						style: {
							...t.style
						},
						className: "calc-slider-thumb"
					}), e.createElement("div", {
						className: "calc-slider-track-text"
					}, `${o.getText("Year")} ${[f]}`))
				})), e.createElement(sc, {
					style: {
						padding: "1rem 2rem",
						textAlign: "center"
					}
				}, s && l ? e.createElement("p", {
					style: {
						marginBottom: 0
					}
				}, o.getText("After"), " ", e.createElement("strong", null, f, " ", $e(f, o.getText("year"), o.getText("years"))), ", ", o.getText(`${c.toLowerCase()}ing represents a benefit of `), `${Ne("buy"===c?s[f-1].netCost-l[f-1].netCost:l[f-1].netCost-s[f-1].netCost,i)}`) : null), e.createElement(sc, null, e.createElement(Ks, {
					plugins: [tc, Kl],
					options: {
						plugins: {
							datalabels: {
								anchor: "end",
								align: "top",
								formatter: (e, t) => `${Ne(e,i)}`
							}
						},
						scales: {
							yAxes: [{
								ticks: {
									beginAtZero: !0,
									callback: (e, t, n) => `${Ne(e,i)}`
								}
							}]
						},
						tooltips: {
							callbacks: {
								title: () => "",
								label: (e, t) => {
									const n = t.datasets[e.datasetIndex];
									return `${o.getText(n.label)}: ${Ne(e.value,i)}`
								}
							}
						}
					},
					data: {
						labels: [o.getText("Net Costs")],
						datasets: [{
							label: o.getText("Buying"),
							backgroundColor: `${nc.primaryChartColor}99`,
							hoverBackgroundColor: nc.primaryChartColor,
							hoverBorderColor: nc.primaryChartColor,
							data: g ? [g.netCost] : []
						}, {
							label: o.getText("Renting"),
							backgroundColor: `${nc.darkColor}99`,
							hoverBackgroundColor: nc.darkColor,
							hoverBorderColor: nc.darkColor,
							data: y ? [y.netCost] : []
						}]
					}
				}), e.createElement(lc, null, o.getText("The net costs are:"), e.createElement("br", null), o.getText("For Buy: Total costs – net property value."), e.createElement("br", null), o.getText("For Rent: Total costs – net investment value."))), e.createElement(sc, null, e.createElement(Ks, {
					plugins: [tc, Kl],
					options: {
						plugins: {
							datalabels: {
								anchor: "end",
								align: "top",
								formatter: (e, t) => `${Ne(e,i)}`
							}
						},
						scales: {
							xAxes: [{
								scaleLabel: {
									display: !1,
									labelString: o.getText("Total Costs vs. Investment/Equity")
								}
							}],
							yAxes: [{
								ticks: {
									beginAtZero: !0,
									callback: (e, t, n) => `${Ne(e,i)}`
								}
							}]
						},
						tooltips: {
							callbacks: {
								title: (e, t) => {
									const [n] = e;
									return t.datasets[n.datasetIndex].label
								},
								label: (e, t) => `${t.datasets[e.datasetIndex].label}: ${Ne(e.value,i)}`
							}
						}
					},
					data: {
						labels: [o.getText("Total Costs"), o.getText("Investment / Equity")],
						datasets: [{
							label: o.getText("Buying"),
							backgroundColor: `${nc.primaryChartColor}99`,
							hoverBackgroundColor: nc.primaryChartColor,
							hoverBorderColor: nc.primaryChartColor,
							data: y && g ? [g.totalCost, g.totalCost - g.netCost] : []
						}, {
							label: o.getText("Renting"),
							backgroundColor: `${nc.darkColor}99`,
							hoverBackgroundColor: nc.darkColor,
							hoverBorderColor: nc.darkColor,
							data: y && g ? [y.totalCost, y.totalCost - y.netCost] : []
						}]
					}
				}), e.createElement(lc, null, o.getText("Total costs are the sum of the amounts invested, expenses/rent and in the case of buying, cost of sale. Equity, in the case of buying, represents the net property value, and in the case of renting, the value of the investment."))), e.createElement(sc, null, g && y ? e.createElement(e.Fragment, null, e.createElement(rc, null, e.createElement("thead", null, e.createElement("tr", null, e.createElement("th", {
					style: {
						width: "50%"
					}
				}), e.createElement("th", {
					style: {
						width: "25%"
					}
				}, o.getText("Buy")), e.createElement("th", {
					style: {
						width: "25%"
					}
				}, o.getText("Rent")))), e.createElement("tbody", null, e.createElement(oc, null, e.createElement("td", {
					style: {
						width: "50%"
					}
				}, o.getText("Amount invested"), e.createElement("div", {
					className: ac["table-info-icon"]
				}, e.createElement(yl, null), e.createElement("span", {
					className: ac["table-info-tooltip"]
				}, o.getText("The amount invested includes the down payment and the capital repayment.")))), e.createElement("td", {
					style: {
						width: "25%"
					}
				}, `${Ne(g.amountInvested,i)}`), e.createElement("td", {
					style: {
						width: "25%"
					}
				}, `${Ne(y.amountInvested,i)}`)), e.createElement(oc, null, e.createElement("td", null, o.getText("Total expenses/rent"), e.createElement("div", {
					className: ac["table-info-icon"]
				}, e.createElement(yl, null), e.createElement("span", {
					className: ac["table-info-tooltip"]
				}, o.getText("Total expenses include property taxes, school taxes, maintenance fees, land transfer tax, home insurance, condo fees and rentals, premium on Mortgage loan Insurance, if applicable.")))), e.createElement("td", null, `${Ne(g.expenses,i)}`), e.createElement("td", null, `${Ne(y.expenses,i)}`)), e.createElement(oc, null, e.createElement("td", null, o.getText("Selling costs")), e.createElement("td", null, `${Ne(g.sellingCosts,i)}`), e.createElement("td", null, "—")), e.createElement(ic, null, e.createElement("td", null, o.getText("Total cost")), e.createElement("td", null, `${Ne(g.totalCost,i)}`), e.createElement("td", null, `${Ne(y.totalCost,i)}`)))), e.createElement(rc, null, e.createElement("tbody", null, e.createElement(oc, null, e.createElement("td", {
					style: {
						width: "50%"
					}
				}, o.getText("Property value")), e.createElement("td", {
					style: {
						width: "25%"
					}
				}, `${Ne(g.propertyValue,i)}`), e.createElement("td", {
					style: {
						width: "25%"
					}
				}, "—")), e.createElement(oc, null, e.createElement("td", null, o.getText("Mortgage balance")), e.createElement("td", null, `${Ne(Math.abs(g.mortgageBalance)||0,i)}`), e.createElement("td", null, "—")), e.createElement(ic, null, e.createElement("td", null, o.getText("Net property value")), e.createElement("td", null, `${Ne(g.netPropertyValue,i)}`), e.createElement("td", null, "—")))), e.createElement(rc, null, e.createElement("tbody", null, e.createElement(oc, null, e.createElement("td", {
					style: {
						width: "50%"
					}
				}, o.getText("Investments")), e.createElement("td", {
					style: {
						width: "25%"
					}
				}, "—"), e.createElement("td", {
					style: {
						width: "25%"
					}
				}, `${Ne(y.amountInvested,i)}`)), e.createElement(oc, null, e.createElement("td", null, o.getText("Investment income")), e.createElement("td", null, "—"), e.createElement("td", null, `${Ne(y.investmentIncome,i)}`)), e.createElement(oc, null, e.createElement("td", null, o.getText("Total value of investments")), e.createElement("td", null, "—"), e.createElement("td", null, `${Ne(y.totalInvestmentValue,i)}`)), e.createElement(ic, null, e.createElement("td", null, o.getText("Net costs")), e.createElement("td", null, `${Ne(g.netCost,i)}`), e.createElement("td", null, `${Ne(y.netCost,i)}`))))) : ""), r.imageUrl && e.createElement(cc, {
					src: r.imageUrl,
					alt: "Rent vs. Buy"
				})))
			};
		uc.propTypes = {
			onChange: r().func,
			fields: r().object,
			config: r().object,
			translator: r().object
		};
		const dc = uc,
			hc = {
				wrap: "wrap-7747900914 wrap-203158059",
				inputs: "inputs-4621097693 inputs-9138603930",
				outputs: "outputs-8627218321 outputs-8934389136"
			},
			fc = ({
				rates: t,
				site: n = {},
				config: a,
				translator: r
			}) => {
				const [o, i] = (0, e.useState)({});
				return e.createElement("div", {
					className: hc.wrap
				}, e.createElement(ml, {
					onChange: i,
					rates: t,
					className: hc.inputs,
					config: a,
					translator: r
				}), e.createElement(dc, {
					fields: o,
					site: n,
					className: hc.outputs,
					config: a,
					translator: r
				}))
			};
		fc.propTypes = {
			rates: r().object,
			config: r().object,
			translator: r().object
		};
		const pc = fc;

		function mc(e) {
			return u({
				tag: "svg",
				attr: {
					fill: "currentColor",
					viewBox: "0 0 16 16"
				},
				child: [{
					tag: "path",
					attr: {
						fillRule: "evenodd",
						d: "M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"
					}
				}]
			})(e)
		}

		function gc(e) {
			return u({
				tag: "svg",
				attr: {
					fill: "currentColor",
					viewBox: "0 0 16 16"
				},
				child: [{
					tag: "path",
					attr: {
						fillRule: "evenodd",
						d: "M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"
					}
				}]
			})(e)
		}
		const yc = (0, p.ZP)("h2", null, {
				displayName: "Heading",
				styles: {
					cls1: "cls1-3494716854",
					cls2: "cls2-9697382155 cls1-3494716854"
				}
			}),
			bc = (0, p.ZP)("button", null, {
				displayName: "Button",
				styles: {
					cls1: "cls1-1423654896",
					cls2: "cls2-4218907061 cls1-1423654896"
				}
			}),
			vc = ({
				className: t,
				onChange: n,
				translator: a
			}) => {
				const [r, o] = (0, e.useState)(!1), [i, s] = (0, e.useState)(-2), [l, c] = (0, e.useState)([]), [u, d] = M({
					propertyValue: 4e5,
					mortgageBalance: 24e4,
					mortgageInterestRate: 3,
					mortgagePayment: 2e3,
					manual: !1
				});
				return (0, e.useEffect)((() => {
					n({
						...u,
						debts: l
					})
				}), Object.values({
					...u,
					debts: l
				})), e.createElement("div", {
					className: t
				}, e.createElement(pe, {
					name: "helpSwitch",
					onChange: e => o(e.target.checked),
					text: "Need us to guide you through the process? Hit the Guided Calculator toggle and we’ll help you out.",
					translator: a
				}), e.createElement(yc, null, a.getText("Equity")), e.createElement(we, {
					label: "Property Value",
					name: "propertyValue",
					value: u.propertyValue,
					placeholder: "Your property value in $",
					onChange: d,
					helpText: "This is how much your property is worth.  If you have an appraisal, this is where you would enter that amount.",
					showHelp: r,
					translator: a
				}), e.createElement(we, {
					label: "Mortgage Balance",
					name: "mortgageBalance",
					value: u.mortgageBalance,
					placeholder: "Your remaing mortgage balance in $",
					onChange: d,
					helpText: "Enter the remaining balance of your mortgage.",
					showHelp: r,
					translator: a
				}), .8 * u.propertyValue - u.mortgageBalance > 0 && e.createElement(e.Fragment, null, e.createElement(bc, {
					onClick: () => s(-1 === i ? -2 : -1)
				}, a.getText("Existing Mortgage"), -1 === i ? e.createElement(gc, {
					style: {
						float: "right"
					}
				}) : e.createElement(mc, {
					style: {
						float: "right"
					}
				})), -1 === i && e.createElement(e.Fragment, null, e.createElement(we, {
					label: "Balance Remaining",
					name: "mortgageBalance",
					value: u.mortgageBalance,
					placeholder: "Balance remaining in $",
					onChange: d,
					helpText: "If you have a current mortgage enter the remaining balance, the interest rate and how much you pay monthly on that mortgage.  Don’t include any condo or related fees.",
					showHelp: r,
					translator: a
				}), e.createElement(Se, {
					label: a.getText("Interest Rate (%)"),
					name: "mortgageInterestRate",
					decimalScale: "3",
					value: u.mortgageInterestRate,
					placeholder: a.getText("Interest rate in %"),
					onChange: d,
					helpText: a.getText("If you have a current mortgage enter the remaining balance, the interest rate and how much you pay monthly on that mortgage.  Don’t include any condo or related fees."),
					showHelp: r
				}), e.createElement(we, {
					label: "Current Monthly Payment",
					name: "mortgagePayment",
					value: u.mortgagePayment,
					placeholder: "Current monthly payment in $",
					onChange: d,
					helpText: "If you have a current mortgage enter the remaining balance, the interest rate and how much you pay monthly on that mortgage.  Don’t include any condo or related fees.",
					showHelp: r,
					translator: a
				})), e.createElement(bc, {
					style: {
						textAlign: "center"
					},
					onClick: () => {
						c(l.concat({
							name: "",
							balance: 0,
							rate: 0,
							payment: 0,
							interset: 0
						})), s(l.length)
					}
				}, e.createElement("a", {
					className: "button"
				}, a.getText("Add New Debt"))), l && l.length ? l.map(((t, n) => e.createElement("div", {
					key: n
				}, e.createElement(bc, {
					onClick: () => s(i === n ? -2 : n)
				}, t.name ? t.name : `${a.getText("Debt")} ${n+1}`, i === n ? e.createElement(gc, {
					style: {
						float: "right"
					}
				}) : e.createElement(mc, {
					style: {
						float: "right"
					}
				})), i === n && e.createElement(e.Fragment, null, e.createElement(E, {
					name: `${n}`,
					value: t.name,
					className: "debt-type",
					placeholder: a.getText("Input debt type, e.g. car, student, credit"),
					onChange: e => {
						l[n].name = e.target.value;
						const t = [...l];
						c(t)
					}
				}), e.createElement(we, {
					label: "Balance Remaining",
					name: "balance",
					value: t.balance,
					placeholder: "Balance remaining in $",
					onChange: e => {
						l[n].balance = e.target.value;
						const t = [...l];
						c(t)
					},
					helpText: "Add up debts that include any educational debt, auto, and personal loans, average the interest rates in the second field and then tell us how much in total you pay on this monthly.",
					showHelp: r,
					translator: a
				}), e.createElement(Se, {
					label: a.getText("Interest Rate (%)"),
					name: "rate",
					decimalScale: "3",
					value: t.rate,
					placeholder: a.getText("Interest rate in %"),
					onChange: e => {
						l[n].rate = e.target.value;
						const t = [...l];
						c(t)
					},
					helpText: a.getText("Add up debts that include any educational debt, auto, and personal loans, average the interest rates in the second field and then tell us how much in total you pay on this monthly."),
					showHelp: r
				}), e.createElement(we, {
					label: "Current Monthly Payment",
					name: "payment",
					value: t.payment,
					placeholder: "Current monthly payment in $",
					onChange: e => {
						l[n].payment = e.target.value;
						const t = [...l];
						c(t)
					},
					helpText: "Add up debts that include any educational debt, auto, and personal loans, average the interest rates in the second field and then tell us how much in total you pay on this monthly.",
					showHelp: r,
					translator: a
				}))))) : e.createElement(e.Fragment, null)))
			};
		vc.propTypes = {
			onChange: r().func,
			className: r().string,
			translator: r().object
		};
		const xc = vc;
		ei.register(...Hs);
		const wc = e => {
				const t = e.loanAmount,
					n = 0 == e.interestRate ? 0 : e.interestRate / 100,
					a = 0 == n ? 0 : n / 12,
					r = e.termInMonths;
				return a * t * Math.pow(1 + a, r) / (Math.pow(1 + a, r) - 1)
			},
			Tc = e => isNaN(parseFloat(e.toFixed(2))) ? 0 : parseFloat(e.toFixed(2)),
			_c = (0, p.ZP)("div", null, {
				displayName: "ResultItem",
				styles: {
					cls1: "cls1-7601796859",
					cls2: "cls2-3824002201 cls1-7601796859"
				}
			}),
			kc = (0, p.ZP)("img", null, {
				displayName: "CalcImage",
				styles: {
					cls1: "cls1-6393631286",
					cls2: "cls2-1565381320 cls1-6393631286"
				}
			}),
			Pc = ({
				className: t,
				fields: n,
				site: a,
				config: r,
				translator: o
			}) => {
				const [i, s] = (0, e.useState)(1669), [l, c] = (0, e.useState)(3.1), [u, d] = (0, e.useState)(180), [h, f] = (0, e.useState)(!1), p = o.getLanguage(), g = {
					accent: getComputedStyle(document.body).getPropertyValue("--accent-color"),
					secondary: getComputedStyle(document.body).getPropertyValue("--secondary-color")
				}, y = Object.keys(n).length && (({
					propertyValue: e = 0,
					mortgageBalance: t = 0,
					mortgageInterestRate: n = 0,
					mortgagePayment: a = 0,
					debts: r = [],
					desiredPayment: o = 1,
					desiredTerm: i,
					desiredRate: s,
					manual: l = !1
				}) => {
					let c = 0,
						u = 0,
						d = 0;
					d = t * n / 1200, r.forEach((e => {
						e.interest = e.rate / 1200 * e.balance, e.balance && (c += e.balance), e.payment && (u += e.payment), e.interest && (d += e.interest)
					}));
					let h = .8 * e - t;
					h < 0 && (h = 0);
					const f = t + c,
						p = a + u;
					let m;
					m = l ? o : wc({
						loanAmount: f,
						interestRate: s || 3,
						termInMonths: i || 180
					});
					const g = f * s / 1200,
						y = wc({
							loanAmount: f,
							interestRate: 3,
							termInMonths: 360
						}),
						b = wc({
							loanAmount: f,
							interestRate: 3,
							termInMonths: 12
						});
					return m > b ? m = b : m < y && (m = y), {
						availableEquity: Tc(h),
						totalOwed: Tc(f),
						totalPayment: Tc(p),
						newPayment: Math.round(Tc(m)),
						showDebt: h > 0,
						minPayment: Math.round(y),
						maxPayment: Math.round(b),
						debtInterestSum: Math.round(d),
						newInterest: Math.round(g),
						debts: r,
						debtBalanceSum: c
					}
				})({
					...n,
					desiredRate: l,
					desiredTerm: u,
					manual: h,
					desiredPayment: i
				});

				function b(e) {
					const t = 1200 * e / (1200 * e - y.totalOwed * l),
						n = Math.log(t) / Math.log(1 + l / 1200);
					d(n > 360 ? 360 : n < 12 ? 12 : parseInt(n))
				}
				const {
					ajaxUrl: v,
					ajaxNonce: w
				} = r;
				return e.createElement("div", {
					className: t
				}, e.createElement(Me, {
					site: a,
					translator: o
				}), e.createElement(de, {
					site: a,
					onClick: async e => {
						const t = `${o.getText("View your results")} - ${o.getText("Debt Consolidation Calculator")} | ${v.includes("mortgagealliance")?"Mortgage Alliance":v.includes("multi-prets")?"Multi-Prêts":v.includes("invis")?"INVIS":v.includes("migroup")?"Mortgage Intelligence":void 0}`;
						let r = `${o.getText("Tired of paying more interest than capital on your debts? If you want to reduce your monthly payments and save a lot of interest, refinancing your mortgage loan could be an option.  Our calculator will show you how much you can save, based on the values entered. Contact us for more information!")}\n\n${o.getText("Current equity in your home")}: ${Ne(y.availableEquity,p)}\n\n${o.getText("Total Balance Remaining")}: ${Ne(n.mortgageBalance,p)}\n${o.getText("Current Interest Rate")}: ${n.mortgageInterestRate} %\n${o.getText("Current Monthly Payment")}: ${Ne(n.mortgagePayment,p)}\n\n${o.getText("New Monthly Payment")}: ${Ne(i,p)}\n${o.getText("Desired Interest Rate")}: ${l} %\n${o.getText("Desired Loan Term")}: ${Math.floor(u/12)} ${1===Math.floor(u/12)?o.getText("year"):o.getText("years")} ${u%12!=0?`${u%12} ${o.getText("months")}`:""}\n\n`;
						y.debts.forEach(((e, t) => {
							r += `${o.getText("Debt")} ${t+1} ${e.name}\n\n\t${o.getText("Balance Remaining")}: $${e.balance}\n\t${o.getText("Interest Rate")}: ${e.rate} %\n\t${o.getText("Current Monthly Payment")}: $${e.payment}\n\n`
						})), r += `\n${o.getText("These calculations are based on the data entered. They could vary according to the current rate, your mortgage equity, etc. Please contact a broker to see the options available to you.")}\n${a?`\n${o.getText("Questions? Please contact")} ${a.display_name} ${o.getText("at")} ${a.email}.\n`:""}`;
						const s = await fetch(v, {
								method: "POST",
								headers: {
									"Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
								},
								body: `to=${e}&subject=${encodeURIComponent(t)}&message=${encodeURIComponent(r)}&action=send_email&_wpnonce=${w}`,
								cache: "no-cache",
								credentials: "same-origin"
							}),
							{
								data: c
							} = await s.json()
					},
					config: r,
					translator: o,
					calcName: "Debt consolidation / Consolidation de dettes"
				}), e.createElement("div", {
					className: "calc-results"
				}, e.createElement(_c, null, e.createElement("p", {
					className: "calc-results-title"
				}, o.getText("Current equity in your home")), "fr" === p ? e.createElement("div", {
					className: "calc-big-label"
				}, y && y.availableEquity ? e.createElement(m.ZP, {
					preserveValue: !0,
					end: y.availableEquity,
					duration: .5,
					separator: " "
				}) : 0, " $") : e.createElement("div", {
					className: "calc-big-label"
				}, "$", " ", y && y.availableEquity ? e.createElement(m.ZP, {
					preserveValue: !0,
					end: y.availableEquity,
					duration: .5,
					separator: ","
				}) : 0)), e.createElement(_c, null, e.createElement(J, null, y.showDebt ? y.availableEquity >= y.debtBalanceSum ? o.getText("You may qualify for a debt consolidation through your mortgage!") : o.getText("The maximum debt amount you can consolidate through your mortgage is ") + Ne(y.availableEquity, p) + o.getText(". Contact one of our brokers to help you find the best solution for your situation.") : o.getText("Sadly, you do not have enough equity on your property to do a debt consolidation through your mortgage."))), y.showDebt && y.availableEquity >= y.debtBalanceSum && e.createElement(e.Fragment, null, e.createElement(_c, null, e.createElement("div", {
					className: "calc-heading-result"
				}, e.createElement("strong", null, o.getText("Total Balance Remaining:")), " ", " ", Ne(y.totalOwed, p))), e.createElement(_c, null, e.createElement("div", {
					className: "calc-heading-result"
				}, e.createElement("strong", null, o.getText("Current Monthly Payment:")), " ", " ", Ne(y.totalPayment, p))), y.totalOwed && y.totalOwed > 0 ? e.createElement(e.Fragment, null, e.createElement(_c, null, e.createElement(we, {
					label: "New Monthly Payment",
					name: h ? "desiredPayment" : "results.newPayment",
					value: y.newPayment,
					onChange: e => {
						f(!0), e.target.value > y.maxPayment ? (s(y.maxPayment), b(y.maxPayment)) : e.target.value < y.minPayment ? (s(y.minPayment), b(y.minPayment)) : e.target.value ? (s(e.target.value), b(e.target.value)) : (s(y.minPayment), b(y.minPayment))
					},
					translator: o
				}), e.createElement(gl.Range, {
					step: 1,
					min: y.minPayment ? y.minPayment : 0,
					max: y.maxPayment ? y.maxPayment : 5e4,
					name: h ? "desiredPayment" : "results.newPayment",
					values: [y.newPayment],
					onChange: ([e]) => {
						f(!0), s(e), b(e)
					},
					renderTrack: ({
						props: t,
						children: n
					}) => e.createElement("div", x({}, t, {
						style: {
							...t.style
						},
						className: "calc-slider-track"
					}), n),
					renderThumb: ({
						props: t
					}) => e.createElement("div", x({}, t, {
						style: {
							...t.style
						},
						className: "calc-slider-thumb"
					}))
				})), e.createElement(_c, null, e.createElement("p", {
					className: "calc-heading-result",
					p: !0
				}, e.createElement("strong", null, o.getText("Desired Interest Rate:")), " ", l, " %"), e.createElement(gl.Range, {
					step: .1,
					min: 1,
					max: 6,
					name: "desiredRate",
					values: [l],
					onChange: ([e]) => {
						f(!0), c(e),
							function(e) {
								const t = Math.pow(1 + e / 1200, u),
									n = e / 1200 * y.totalOwed * t / (t - 1);
								s(parseInt(n))
							}(e)
					},
					renderTrack: ({
						props: t,
						children: n
					}) => e.createElement("div", x({}, t, {
						style: {
							...t.style
						},
						className: "calc-slider-track"
					}), n),
					renderThumb: ({
						props: t
					}) => e.createElement("div", x({}, t, {
						style: {
							...t.style
						},
						className: "calc-slider-thumb"
					}))
				})), e.createElement(_c, null, e.createElement("p", {
					className: "calc-heading-result"
				}, e.createElement("strong", null, o.getText("Desired Loan Term:")), " ", Math.floor(u / 12), " ", 1 === Math.floor(u / 12) ? o.getText("year") : o.getText("years"), " ", u % 12 != 0 ? `${u%12} ${o.getText("months")}` : ""), e.createElement(gl.Range, {
					step: 1,
					min: 12,
					max: 360,
					name: "desiredTerm",
					values: [u],
					onChange: ([e]) => {
						d(e),
							function(e) {
								const t = Math.pow(1 + l / 1200, e),
									n = l / 1200 * y.totalOwed * t / (t - 1);
								s(parseInt(n))
							}(e)
					},
					renderTrack: ({
						props: t,
						children: n
					}) => e.createElement("div", x({}, t, {
						style: {
							...t.style
						},
						className: "calc-slider-track"
					}), n),
					renderThumb: ({
						props: t
					}) => e.createElement("div", x({}, t, {
						style: {
							...t.style
						},
						className: "calc-slider-thumb"
					}))
				})), e.createElement(_c, null, e.createElement(Ks, {
					plugins: [Kl],
					options: {
						legend: {
							display: !0
						},
						plugins: {
							datalabels: {
								display: !1
							}
						},
						layout: {
							padding: {
								left: 0,
								right: 0,
								top: 20,
								bottom: 20
							}
						},
						scales: {
							xAxes: [{
								stacked: !0
							}],
							yAxes: [{
								stacked: !0,
								ticks: {
									beginAtZero: !0,
									padding: 20,
									callback: (e, t, n) => `${Ne(e,p)}`
								}
							}]
						},
						tooltips: {
							callbacks: {
								title: (e, t) => {
									const [n] = e;
									return `${n.label}`
								},
								label: (e, t) => {
									const n = t.datasets[e.datasetIndex];
									return `${o.getText(n.label)} ${Ne(e.value,p)}`
								}
							}
						}
					},
					data: {
						labels: [o.getText("Current Payment"), o.getText("New Payment")],
						datasets: [{
							label: o.getText("Principal"),
							backgroundColor: [g.secondary, g.secondary],
							data: [y.totalPayment - y.debtInterestSum, y.newPayment - y.newInterest]
						}, {
							label: o.getText("Interest"),
							backgroundColor: [g.accent, g.accent],
							data: [y.debtInterestSum, y.newInterest]
						}]
					}
				})), r.imageUrl && e.createElement(kc, {
					src: r.imageUrl,
					alt: "Rent vs. Buy"
				})) : e.createElement(e.Fragment, null))))
			};
		Pc.propTypes = {
			onChange: r().func,
			fields: r().object,
			translator: r().object
		};
		const Ec = Pc,
			Sc = ({
				site: t = {},
				config: n,
				translator: a
			}) => {
				const [r, o] = (0, e.useState)({});
				return e.createElement("div", {
					className: hc.wrap
				}, e.createElement(xc, {
					onChange: o,
					className: hc.inputs,
					translator: a
				}), e.createElement(Ec, {
					fields: r,
					site: t,
					className: hc.outputs,
					config: n,
					translator: a
				}))
			};
		Sc.propTypes = {
			site: r().object,
			config: r().object,
			translator: r().object
		};
		const Cc = Sc,
			Mc = (0, p.ZP)("div", null, {
				displayName: "ResultItem",
				styles: {
					cls1: "cls1-4728707320",
					cls2: "cls2-5804087452 cls1-4728707320"
				}
			}),
			Nc = (0, p.ZP)("span", null, {
				displayName: "Amount",
				styles: {
					cls1: "cls1-8188746385",
					cls2: "cls2-6095426308 cls1-8188746385"
				}
			}),
			$c = ({
				className: t,
				results: n,
				useCompactView: a = !1,
				translator: r
			}) => {
				const {
					paymentPerPeriod: o,
					acceleratedPayment: i,
					totalCost: s,
					interestPaid: l,
					additionalPaymentSavings: c,
					frequency: u
				} = n, d = a ? "block" : "inline-block", h = r.getLanguage();
				return e.createElement("div", {
					className: t
				}, e.createElement(Mc, null, e.createElement("p", {
					className: "calc-results-title"
				}, "fr" === h ? `${r.getText("Payment")} ${r.getText(u)}:` : `${r.getText(u)} payment:`), "fr" === h ? e.createElement("div", {
					className: "calc-big-label"
				}, o ? e.createElement(m.ZP, {
					preserveValue: !0,
					end: o + i,
					duration: .5,
					separator: " "
				}) : 0, " $") : e.createElement("div", {
					className: "calc-big-label"
				}, "$ ", o ? e.createElement(m.ZP, {
					preserveValue: !0,
					end: o + i,
					duration: .5,
					separator: ","
				}) : 0)), c > 0 ? e.createElement(Mc, null, e.createElement("div", {
					className: "calc-heading-result"
				}, e.createElement("strong", null, r.getText("Additional Payment Savings")), ":", " ", "fr" === h ? e.createElement(Nc, {
					style: {
						display: d
					}
				}, e.createElement(m.ZP, {
					preserveValue: !0,
					end: c,
					decimals: 2,
					duration: .5,
					separator: " "
				}), " $") : e.createElement(Nc, {
					style: {
						display: d
					}
				}, "$ ", e.createElement(m.ZP, {
					preserveValue: !0,
					end: c,
					decimals: 2,
					duration: .5,
					separator: ","
				})))) : null, e.createElement(Mc, null, e.createElement("div", {
					className: "calc-heading-result"
				}, r.getText("Total Cost of Loan: "), "fr" === h ? e.createElement(Nc, {
					style: {
						display: d
					}
				}, s ? e.createElement(m.ZP, {
					preserveValue: !0,
					end: s,
					duration: .5,
					separator: " "
				}) : 0, " $") : e.createElement(Nc, {
					style: {
						display: d
					}
				}, "$ ", s ? e.createElement(m.ZP, {
					preserveValue: !0,
					end: s,
					duration: .5,
					separator: ","
				}) : 0), " ")), e.createElement(Mc, null, e.createElement("div", {
					className: "calc-heading-result"
				}, r.getText("Total Interest Paid: "), "fr" === h ? e.createElement(Nc, {
					style: {
						display: d
					}
				}, l ? e.createElement(m.ZP, {
					preserveValue: !0,
					end: l,
					duration: .5,
					separator: " "
				}) : 0, " $") : e.createElement(Nc, {
					style: {
						display: d
					}
				}, "$ ", l ? e.createElement(m.ZP, {
					preserveValue: !0,
					end: l,
					duration: .5,
					separator: ","
				}) : 0), " ")))
			};
		$c.propTypes = {
			className: r().string,
			results: r().object,
			useCompactView: r().bool,
			translator: r().object
		};
		const Ac = (0, p.ZP)($c, null, {
				displayName: "OutputValues",
				styles: {
					cls1: "cls1-9548174129",
					cls2: "cls2-4916830218 cls1-9548174129"
				}
			}),
			Ic = ({
				fields: t,
				className: n,
				onChange: a,
				rates: r,
				showHelp: o = !1,
				useCompactView: i = !1,
				config: {
					defaultRatesProvince: s
				},
				translator: l
			}) => {
				const [c, u] = M({
					houseValue: 35e4,
					outstandingBalance: 25e4,
					additionalFunds: 0,
					termInYears: 25,
					interest: {
						rate: r.ours[0].fixed1Yr,
						rateType: "fixed",
						province: s
					},
					paymentFrequency: {
						frequency: "Monthly",
						numPaymentsPerYear: 12
					},
					additionalMonthlyPayment: 0,
					additionalPaymentType: "none",
					yearOfAdditionalPayment: 0,
					additionalPaymentStartingYear: 0,
					additionalPaymentAmount: 0,
					...t
				}, ["homePrice", "downPaymentDollars", "termInYears", "interest", "paymentFrequency", "closingCosts"]);
				(0, e.useEffect)((() => a(c)), [...Object.values(c)]);
				const d = c.outstandingBalance + c.additionalFunds,
					h = .8 * c.houseValue;
				return e.createElement("div", {
					className: n
				}, e.createElement(we, {
					label: "House Value",
					name: "houseValue",
					value: c.houseValue,
					placeholder: "House value in $",
					onChange: u,
					helpText: "Enter the value of your house.",
					showHelp: o,
					translator: l
				}), e.createElement(we, {
					label: "Additional Funds Needed",
					name: "additionalFunds",
					value: c.additionalFunds,
					placeholder: "Additional funds in $",
					onBlur: e => {
						if (d > h) return u({
							target: {
								name: "additionalFunds",
								value: Math.max(h - c.outstandingBalance, 0)
							}
						})
					},
					onChange: u,
					helpText: "Add any additional funds needed here. Additional funds + outstanding balance cannot be greater than 80% of your house value.",
					showHelp: o,
					translator: l
				}), e.createElement(we, {
					label: "Outstanding Balance ($)",
					name: "outstandingBalance",
					value: c.outstandingBalance,
					placeholder: "Outstanding balance in $",
					onBlur: e => {
						if (d > h) return u({
							target: {
								name: "outstandingBalance",
								value: Math.max(h - c.additionalFunds, 0)
							}
						})
					},
					onChange: u,
					helpText: "Remaining balance on your mortgage. Outstanding balance + additional funds cannot be greater than 80% of your house value.",
					showHelp: o,
					translator: l
				}), e.createElement(te, {
					label: l.getText("Amortization"),
					name: "termInYears",
					defaultValue: c.termInYears,
					options: [1, 2, 3, 4, 5, 7, 10, 15, 20, 25, 30].reduce(((e, t) => t && {
						...e,
						[`${t} ${1===t?`${l.getText("year")}`:`${l.getText("years")}`}`]: t
					}), {}),
					onChange: u,
					helpText: l.getText("This helps you decide how long you want to pay the loan back. The longer the amount of time, the less the monthly payment (but the higher the interest)."),
					showHelp: o
				}), e.createElement(ve, {
					label: "Interest Rate (%)",
					name: "interest",
					rates: r,
					value: c.interest,
					placeholder: "Interest rate in %",
					onChange: u,
					helpText: "We’ve included the average rate, but you can use the Rates page or Pre-qualification to gain a better understanding of what you may qualify for.",
					showHelp: o,
					useCompactView: i,
					translator: l
				}), e.createElement(Pe, {
					defaultValue: c.paymentFrequency.frequency,
					onChange: e => {
						u(e)
					},
					translator: l
				}), e.createElement(te, {
					label: l.getText("Additional Payment"),
					name: "additionalPaymentType",
					defaultValue: c.additionalPaymentType,
					onChange: u,
					options: {
						[l.getText("None")]: "none",
						[l.getText("One-time payment")]: "once",
						[l.getText("Increase payments")]: "increase",
						[l.getText("Yearly")]: "yearly",
						[l.getText("Semi-annually")]: "semi-annually",
						[l.getText("Quarterly")]: "quarterly"
					}
				}), "once" === c.additionalPaymentType ? e.createElement(te, {
					label: l.getText("Year of Payment"),
					name: "yearOfAdditionalPayment",
					defaultValue: c.yearOfAdditionalPayment,
					options: Array(25).fill().map(((e, t) => t + 1)).reduce(((e, t) => t && {
						...e,
						[`${l.getText("Year")} ${t}`]: t
					}), {
						[l.getText("First Payment")]: 0
					}),
					onChange: u
				}) : "", "increase" === c.additionalPaymentType ? e.createElement(te, {
					label: l.getText("Starting in Year"),
					name: "additionalPaymentStartingYear",
					defaultValue: c.additionalPaymentStartingYear,
					options: Array(25).fill().map(((e, t) => t + 1)).reduce(((e, t) => t && {
						...e,
						[`${l.getText("Year")} ${t}`]: t
					}), {
						[l.getText("First Payment")]: 0
					}),
					onChange: u
				}) : "", "none" !== c.additionalPaymentType ? e.createElement(we, {
					label: "Additional Payment Amount",
					name: "additionalPaymentAmount",
					value: c.additionalPaymentAmount,
					placeholder: "Additional payment in $",
					onChange: u,
					translator: l
				}) : "")
			};
		Ic.propTypes = {
			fields: r().object,
			onChange: r().func,
			className: r().string,
			rates: r().object,
			showHelp: r().bool,
			useCompactView: r().bool,
			translator: r().object
		};
		const Oc = Ic,
			Rc = {
				"remove-scenario": "remove-scenario-5519213373"
			},
			Dc = (0, p.ZP)("div", null, {
				displayName: "ScenarioTag",
				styles: {
					cls1: "cls1-8917972408",
					cls2: "cls2-5343230416 cls1-8917972408"
				}
			}),
			Fc = ({
				fields: t,
				results: n,
				onChange: a,
				onRemove: r,
				scenarioCount: o,
				showHelp: i,
				index: s,
				rates: l,
				config: c,
				translator: u
			}) => e.createElement("div", {
				className: "calc-results",
				style: {
					padding: "1rem 1rem 0.5rem 1rem"
				}
			}, o > 1 ? e.createElement(Dc, null, "Scenario ", s + 1, ":", s > 0 ? e.createElement("span", {
				className: Rc["remove-scenario"],
				onClick: r
			}, e.createElement(f, {
				size: "1rem"
			})) : null) : null, e.createElement(Ac, {
				results: n,
				useCompactView: 4 === o,
				translator: u
			}), e.createElement(Oc, {
				fields: t,
				onChange: a,
				useCompactView: 4 === o,
				rates: l,
				showHelp: i,
				config: c,
				translator: u
			}));
		Fc.propTypes = {
			fields: r().object,
			results: r().object,
			onChange: r().func,
			onRemove: r().func,
			scenarioCount: r().number,
			showHelp: r().bool,
			index: r().number,
			rates: r().object,
			translator: r().object
		};
		const Lc = Fc,
			zc = (0, p.ZP)("div", null, {
				displayName: "Chart",
				styles: {
					cls1: "cls1-5595234374",
					cls2: "cls2-1588163531 cls1-5595234374"
				}
			}),
			Vc = [getComputedStyle(document.body).getPropertyValue("--primary-chart-color"), getComputedStyle(document.body).getPropertyValue("--secondary-chart-color"), getComputedStyle(document.body).getPropertyValue("--dark-color"), getComputedStyle(document.body).getPropertyValue("--gray-color")],
			Bc = ({
				className: t,
				scenarios: n,
				translator: a
			}) => {
				const r = a.getLanguage();
				return e.createElement("div", {
					className: t
				}, e.createElement(zc, null, e.createElement(Ks, {
					redraw: !0,
					options: {
						title: {
							display: !0,
							text: a.getText("Principal vs. Interest")
						},
						responsive: !0,
						maintainAspectRatio: !1,
						scales: {
							xAxes: [{
								stacked: !0,
								scaleLabel: {
									display: !0,
									labelString: a.getText("Years")
								}
							}],
							yAxes: [{
								stacked: !0,
								ticks: {
									beginAtZero: !0,
									callback: (e, t, n) => `${Ne(e,r)}`
								}
							}]
						},
						tooltips: {
							callbacks: {
								title: (e, t) => {
									const [n] = e;
									return `${a.getText("Year")} ${n.label}`
								},
								label: (e, t) => `${t.datasets[e.datasetIndex].label}: ${Ne(e.value,r)}`
							}
						}
					},
					data: {
						labels: Array(13).fill().map(((e, t) => 2 * t)),
						datasets: n.reduce(((e, {
							results: {
								amortization: t
							}
						}, n) => [...e, {
							label: `${a.getText("Scenario")} ${n+1} ${a.getText("Principal")}`,
							stack: n,
							backgroundColor: Vc[n],
							hoverBackgroundColor: `${Vc[n]}BF`,
							hoverBorderColor: Vc[n],
							data: t ? t.reduce(((e, {
								principal: t
							}, n) => n % 2 == 0 ? [...e, t] : e), []) : []
						}, {
							label: `${a.getText("Scenario")} ${n+1} ${a.getText("Interest")}`,
							stack: n,
							backgroundColor: `${Vc[n]}80`,
							hoverBackgroundColor: `${Vc[n]}40`,
							hoverBorderColor: Vc[n],
							data: t ? t.reduce(((e, {
								interest: t
							}, n) => n % 2 == 0 ? [...e, Math.max(t, 0)] : e), []) : []
						}]), [])
					}
				})), e.createElement(zc, null, e.createElement(Ks, {
					redraw: !0,
					options: {
						title: {
							display: !0,
							text: a.getText("Amortization")
						},
						responsive: !0,
						maintainAspectRatio: !1,
						scales: {
							xAxes: [{
								scaleLabel: {
									display: !0,
									labelString: a.getText("Years")
								}
							}],
							yAxes: [{
								ticks: {
									beginAtZero: !0,
									callback: (e, t, n) => `${Ne(e,r)}`
								}
							}]
						},
						tooltips: {
							callbacks: {
								title: (e, t) => {
									const [n] = e;
									return `${a.getText("Year")} ${n.label}`
								},
								label: (e, t) => `${Ne(e.yLabel,r)}`
							}
						}
					},
					data: {
						labels: Array(13).fill().map(((e, t) => 2 * t)),
						datasets: n.reduce(((e, {
							results: {
								loanAmount: t,
								amortization: n
							}
						}, r) => {
							const o = (n || []).reduce(((e, {
								currentPrincipal: t
							}, n) => [...e, {
								year: n + 1,
								currentPrincipal: Math.max(t, 0)
							}]), [{
								year: 0,
								currentPrincipal: t
							}]);
							return o.pop(), [...e, {
								label: `${a.getText("Scenario")} ${r+1}`,
								backgroundColor: Vc[r],
								hoverBackgroundColor: `${Vc[r]}BF`,
								hoverBorderColor: Vc[r],
								data: o ? o.reduce(((e, {
									currentPrincipal: t
								}, n) => n % 2 == 0 ? [...e, Math.max(t, 0)] : e), []) : []
							}]
						}), [])
					}
				})))
			};
		Bc.propTypes = {
			className: r().string,
			scenarios: r().array,
			translator: r().object
		};
		const jc = (0, p.ZP)(Bc, null, {
				displayName: "OutputChart",
				styles: {
					cls1: "cls1-7287546525",
					cls2: "cls2-5359019991 cls1-7287546525"
				}
			}),
			Hc = ({
				principal: e,
				interestRate: t,
				numPayments: n,
				numPaymentsPerYear: a
			}) => {
				const r = Math.pow(1 + t / 2, 2) - 1,
					o = Math.pow(1 + r, 1 / a) - 1,
					i = Math.pow(1 + o, n);
				return {
					earPerPeriod: o,
					paymentPerPeriod: e * o * i / (i - 1)
				}
			},
			qc = ({
				additionalFunds: e,
				outstandingBalance: t,
				termInYears: n,
				interest: a,
				paymentFrequency: r,
				additionalPaymentType: o,
				yearOfAdditionalPayment: i,
				additionalPaymentStartingYear: s,
				additionalPaymentAmount: l = 0
			}) => {
				const {
					rate: c,
					rateType: u
				} = a, {
					frequency: d,
					numPaymentsPerYear: h
				} = r, f = t + e + 0, p = n * h, {
					paymentPerPeriod: m,
					earPerPeriod: g
				} = Hc({
					principal: f,
					interestRate: c / 100,
					interestRateType: u,
					termInYears: n,
					numPayments: p,
					numPaymentsPerYear: h
				}), y = (({
					frequency: e,
					paymentPerPeriod: t,
					principal: n,
					interestRate: a,
					interestRateType: r,
					termInYears: o
				}) => {
					if (e.includes("Accelerated")) {
						const {
							paymentPerPeriod: i
						} = Hc({
							principal: n,
							interestRate: a / 100,
							interestRateType: r,
							termInYears: o,
							numPayments: 12 * o,
							numPaymentsPerYear: 12
						});
						if ("Accelerated Weekly" === e) return i / 4 - t;
						if ("Accelerated Bi-Weekly" === e) return i / 2 - t
					}
					return 0
				})({
					frequency: d,
					paymentPerPeriod: m,
					principal: f,
					interestRate: c,
					interestRateType: u,
					termInYears: n
				}), b = (({
					principal: e,
					termInYears: t,
					numPaymentsPerYear: n,
					earPerPeriod: a,
					paymentPerPeriod: r,
					acceleratedPayment: o,
					additionalPaymentType: i,
					yearOfAdditionalPayment: s = 0,
					additionalPaymentStartingYear: l,
					additionalPaymentAmount: c
				}) => {
					const u = [];
					let d = e,
						h = e,
						f = e;
					for (let e = 0; e <= t; e++) {
						let t = 0,
							p = 0,
							m = 0,
							g = 0;
						for (let u = 1; u <= n; u++) {
							const y = d * a;
							t += y, d -= r - y;
							const b = Re({
									additionalPaymentType: i,
									year: e,
									yearOfAdditionalPayment: s,
									additionalPaymentStartingYear: l,
									payment: u,
									numPaymentsPerYear: n
								}) ? c : 0,
								v = h * a;
							p += v, h -= r + b - v;
							const x = f * a;
							m += x > 0 ? x : 0;
							const w = r + b + o - x;
							g += w, f -= w
						}
						u.push({
							principal: g,
							interest: m,
							currentPrincipal: f,
							baseInterest: t,
							baseInterestNotAccelerated: p,
							year: e
						})
					}
					return u
				})({
					principal: f,
					termInYears: n,
					numPaymentsPerYear: parseInt(h),
					frequency: d,
					interestRate: c,
					earPerPeriod: g,
					paymentPerPeriod: m,
					acceleratedPayment: y,
					additionalPaymentType: o,
					yearOfAdditionalPayment: parseInt(i),
					additionalPaymentStartingYear: parseInt(s),
					additionalPaymentAmount: l
				}), v = b.reduce(((e, t) => e + t.baseInterest), 0), x = b.reduce(((e, t) => e + t.baseInterestNotAccelerated), 0), w = b.reduce(((e, t) => e + t.interest), 0);
				return {
					loanAmount: f,
					paymentPerPeriod: m,
					acceleratedPayment: y,
					totalCost: f + w,
					interestPaid: w,
					amortization: b,
					mortgageInsurance: 0,
					additionalPaymentSavings: "none" !== o && l > 0 ? v - x : 0,
					frequency: d
				}
			},
			Wc = {
				wrap: "wrap-6641912194",
				top: "top-6751542929 top-8609750097 top-9172317508",
				help: "help-1706748144",
				ctas: "ctas-8523347504",
				controls: "controls-1109417592",
				"add-scenario": "add-scenario-1304999474 add-scenario-1662650218",
				scenarios: "scenarios-6320015984 scenarios-4493570292 scenarios-8603947230 scenarios-3525758930 scenarios-4975399940 scenarios-4745575619"
			},
			Yc = ({
				fields: e = {},
				results: t = {}
			} = {}) => ({
				key: Math.floor(1e7 * Math.random()),
				fields: e,
				results: t
			}),
			Uc = ({
				rates: t,
				site: n = {},
				config: a,
				translator: r
			}) => {
				const o = r.getLanguage(),
					[i, s] = (0, e.useReducer)(((e, {
						type: t,
						value: {
							index: n,
							fields: a
						} = {}
					}) => {
						switch (t) {
							case "ADD": {
								const {
									fields: t
								} = e[e.length - 1], n = Object.keys(t).length && qc(t) || {};
								return [...e, Yc({
									fields: t,
									results: n
								})]
							}
							case "UPDATE": {
								const t = e[n];
								if (!t) return e;
								const r = Object.keys(a).length && qc(a) || {};
								return [...e.slice(0, n), {
									...t,
									fields: a,
									results: r
								}, ...e.slice(n + 1)]
							}
							case "REMOVE":
								return 0 === n ? e : e.filter(((e, t) => t !== n));
							default:
								return e
						}
					}), [Yc()]),
					[l, c] = (0, e.useState)(!1),
					{
						ajaxUrl: u,
						ajaxNonce: d
					} = a;
				return e.createElement("div", {
					className: Wc.wrap
				}, e.createElement("div", {
					className: Wc.top
				}, e.createElement("div", {
					className: Wc.help
				}, e.createElement(pe, {
					name: "helpSwitch",
					onChange: e => c(e.target.checked),
					text: "Need us to guide you through the process? Hit the Guided Calculator toggle and we’ll help you out.",
					translator: r
				})), e.createElement("div", {
					className: Wc.ctas
				}, e.createElement(Me, {
					site: n,
					showPrequal: !0,
					translator: r
				}), e.createElement(de, {
					site: n,
					onClick: async e => {
						const t = `${r.getText("View your results")} - ${r.getText("Refinance Calculator")} | ${u.includes("mortgagealliance")?"Mortgage Alliance":u.includes("multi-prets")?"Multi-Prêts":u.includes("invis")?"INVIS":u.includes("migroup")?"Mortgage Intelligence":void 0}`;
						let a = `${r.getText("Thank you for using our calculator. Here is estimate amount that you would qualify for if you used the equity in your home.")}`;
						i.forEach(((e, t) => {
							const n = Object.keys(e.fields).length && qc(e.fields) || {};
							a += `\n\n${r.getText("Scenario")} ${t+1}\n\n${r.getText(e.fields.paymentFrequency.frequency)} ${r.getText("Payment")}: ${Ne(n.paymentPerPeriod+n.acceleratedPayment,o)}\n\n${n.additionalPaymentSavings>0?`${r.getText("Additional Payment Savings")}: ${Ne(n.additionalPaymentSavings,o)}\n`:""}${r.getText("Total Cost of Loan")}: ${Ne(n.totalCost,o)}\n${r.getText("Total Interest Paid")}: ${Ne(n.interestPaid,o)}\n\n${r.getText("House Value")}: ${Ne(e.fields.houseValue,o)}\n${r.getText("Additional Funds Needed")}: ${Ne(e.fields.additionalFunds,o)}\n${r.getText("Outstanding Balance")}: ${Ne(e.fields.outstandingBalance,o)}\n${r.getText("Amortization")}: ${e.fields.termInYears} ${$e(Number(e.fields.termInYears),r.getText(" year"),r.getText(" years"))}\n${r.getText("Interest Rate")}: ${e.fields.interest.rate} %\n${r.getText("Payment Frequency")}: ${r.getText(e.fields.paymentFrequency.frequency)}\n\n${r.getText("Additional Payment Type")}: ${r.getText(e.fields.additionalPaymentType)}${"once"===e.fields.additionalPaymentType?`\n${r.getText("Year of Payment")}: ${0===e.fields.yearOfAdditionalPayment?r.getText("First Payment"):`${r.getText("Year")} ${e.fields.yearOfAdditionalPayment}`}`:""}${"increase"===e.fields.additionalPaymentType?`\n${r.getText("Starting in Year")}: ${0===e.fields.additionalPaymentStartingYear?r.getText("First Payment"):`${r.getText("Year")} ${e.fields.additionalPaymentStartingYear}`}`:""}${"none"!==e.fields.additionalPaymentType?`\n${r.getText("Additional Payment Amount")}: ${Ne(e.fields.additionalPaymentAmount,o)}`:""}\n`
						})), a += `\n${r.getText("The calculation results are estimations based on the values entered.")}\n${n?`\n${r.getText("Questions? Please contact")} ${n.display_name} ${r.getText("at")} ${n.email}.\n`:""}\n`;
						const s = await fetch(u, {
								method: "POST",
								headers: {
									"Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
								},
								body: `to=${e}&subject=${encodeURIComponent(t)}&message=${encodeURIComponent(a)}&action=send_email&_wpnonce=${d}`,
								cache: "no-cache",
								credentials: "same-origin"
							}),
							{
								data: l
							} = await s.json()
					},
					config: a,
					translator: r,
					calcName: "Refinance / Refinancement"
				}))), e.createElement("div", {
					className: Wc.controls
				}, i.length < 4 && e.createElement("button", {
					className: Wc["add-scenario"],
					onClick: () => s({
						type: "ADD"
					})
				}, e.createElement(h, {
					style: {
						color: "var(--accent-color)"
					}
				}), " ", r.getText("Add Scenario"))), e.createElement("div", {
					className: Wc.scenarios,
					"data-count": i.length
				}, i.map((({
					key: n,
					fields: o,
					results: c
				}, u) => e.createElement(Lc, {
					key: n,
					onChange: e => s({
						type: "UPDATE",
						value: {
							index: u,
							fields: e
						}
					}),
					onRemove: () => s({
						type: "REMOVE",
						value: {
							index: u
						}
					}),
					scenarioCount: i.length,
					index: u,
					results: c,
					fields: o,
					showHelp: l,
					rates: t,
					config: a,
					translator: r
				})))), e.createElement(jc, {
					scenarios: i,
					translator: r
				}))
			};
		Uc.propTypes = {
			rates: r().object,
			site: r().object,
			config: r().object,
			translator: r().object
		};
		const Zc = Uc,
			Qc = (0, p.ZP)("h2", null, {
				displayName: "Heading",
				styles: {
					cls1: "cls1-4595751023",
					cls2: "cls2-8988755771 cls1-4595751023"
				}
			}),
			Gc = {
				"down-payment-toggle": "down-payment-toggle-8382019662",
				toggle: "toggle-9813451936"
			},
			Xc = ({
				className: t,
				onChange: n,
				taxes: a,
				config: {
					defaultRatesProvince: r
				},
				translator: o
			}) => {
				const [i, s] = (0, e.useState)(!1), [l, c] = (0, e.useState)(!1), [u, d] = (0, e.useState)(!1), [h, f] = (0, e.useState)("$"), p = o.getLanguage(), [m, g] = M({
					propertyValue: 35e4,
					downPaymentDollars: 7e4,
					downPaymentPercentage: 20,
					province: r ? a.filter((e => e.province === r))[0].landTransferTaxId - 1 : a[0].landTransferTaxId - 1,
					lawyerFees: 1e3,
					titleInsurance: 300,
					inspectionFees: 300,
					appraisalFees: 400,
					city: 0
				}, ["downPaymentDollars", "downPaymentPercentage"]);
				a[m.province].cities.length && m.city > a[m.province].cities.length - 1 && g({
					target: {
						name: "city",
						value: 0
					}
				});
				const y = Ie(m.propertyValue),
					b = Oe(m.propertyValue),
					v = Ae(m.propertyValue),
					x = (m.propertyValue, 80);
				return (0, e.useEffect)((() => {
					n({
						showHelp: i,
						firstHome: l,
						newHome: u,
						downPaymentInput: h,
						...m
					})
				}), Object.values({
					showHelp: i,
					firstHome: l,
					newHome: u,
					downPaymentInput: h,
					...m
				})), e.createElement("div", {
					className: t
				}, e.createElement(pe, {
					name: "helpSwitch",
					onChange: e => s(e.target.checked),
					text: "Need us to guide you through the process? Hit the Guided Calculator toggle and we’ll help you out.",
					translator: o
				}), e.createElement(Qc, null, o.getText("Land Transfer Tax")), e.createElement(we, {
					label: "Property Value",
					name: "propertyValue",
					value: m.propertyValue,
					placeholder: "Property value in $",
					onChange: g,
					helpText: "Enter the highest value between: 1. Value on Property Assessment Role, 2. Price paid for property 3. Market value of the immovable at the time of transfer",
					showHelp: i,
					onBlur: () => m.downPaymentDollars < y ? g({
						target: {
							name: "downPaymentDollars",
							value: y
						}
					}) : m.downPaymentDollars > b ? g({
						target: {
							name: "downPaymentDollars",
							value: b
						}
					}) : void 0,
					translator: o
				}), e.createElement("div", {
					className: Gc["down-payment-toggle"]
				}, e.createElement("a", {
					onClick: () => f("$" === h ? "%" : "$"),
					className: Gc.toggle
				}, o.getText("Switch to "), "$" === h ? "%" : "$"), "$" === h ? e.createElement(we, {
					label: "Down Payment ($)",
					name: "downPaymentDollars",
					value: m.downPaymentDollars,
					placeholder: "Down payment in $",
					onBlur: e => {
						const t = parseInt(e.target.value.replace(/[^\d]/g, ""));
						return t < y ? g({
							target: {
								name: "downPaymentDollars",
								value: y
							}
						}) : t > b ? g({
							target: {
								name: "downPaymentDollars",
								value: b
							}
						}) : void 0
					},
					onChange: g,
					helpText: "This helps you determine how much you can put down towards the price of the home when you buy. Write in how much you will have to spend. Make sure it is at least 5% of the price of the home.",
					showHelp: i,
					translator: o
				}) : e.createElement(Se, {
					label: o.getText("Down Payment (%)"),
					name: "downPaymentPercentage",
					value: m.downPaymentPercentage,
					placeholder: o.getText("Down payment %"),
					onBlur: e => {
						const t = parseFloat(e.target.value.replace(/[^\d\.]/g, ""));
						return t < v ? g({
							target: {
								name: "downPaymentPercentage",
								value: v
							}
						}) : t > x ? g({
							target: {
								name: "downPaymentPercentage",
								value: x
							}
						}) : void 0
					},
					onChange: g,
					helpText: o.getText("This helps you determine how much you can put down towards the price of the home when you buy. Write in how much you will have to spend. Make sure it is at least 5% of the price of the home."),
					showHelp: i
				})), e.createElement(te, {
					label: o.getText("Property Province"),
					name: "province",
					defaultValue: m.province,
					options: a.reduce(((e, t, n) => t && {
						...e,
						[`${t.province}`]: n
					}), {}),
					onChange: g,
					helpText: o.getText("Select the Province where your new home is located."),
					showHelp: i
				}), a[m.province].cities.length > 0 && e.createElement(te, {
					label: o.getText("Property City"),
					name: "city",
					defaultValue: m.city,
					options: a[m.province].cities.reduce(((e, t, n) => t && {
						...e,
						[`${"fr"===p&&t.cityFr?t.cityFr:t.city}`]: n
					}), {}),
					onChange: g,
					helpText: o.getText("Select the city where your new home is located."),
					showHelp: i
				}), a[m.province].firstTimeHomeBuyerRefund && e.createElement("div", {
					style: {
						display: "block",
						padding: "0.75rem 0",
						margin: "0 0 1rem",
						fontSize: "1.1rem",
						width: "100%",
						color: "var(--gray-color)"
					}
				}, o.getText("I am a first-time home buyer"), "   ", e.createElement("input", {
					type: "checkbox",
					name: "firstTimeBuyer",
					checked: l,
					onChange: () => c(!l)
				})), a[m.province].newlyBuiltHomeRefund && e.createElement("div", {
					style: {
						display: "block",
						padding: "0.75rem 0",
						margin: "0 0 1rem",
						fontSize: "1.1rem",
						width: "100%",
						color: "var(--gray-color)"
					}
				}, o.getText("This is a newly built home"), "   ", e.createElement("input", {
					type: "checkbox",
					name: "newlyBuiltHome",
					checked: u,
					onChange: () => d(!u)
				})), e.createElement(Qc, null, o.getText("Closing Fees")), e.createElement(we, {
					label: "Lawyer (Notary) Fees",
					name: "lawyerFees",
					value: m.lawyerFees,
					placeholder: "Lawyer fees in $",
					onChange: g,
					helpText: "May vary from one region to another and depending on your property type. Fees can be up to $1800.",
					showHelp: i,
					translator: o
				}), e.createElement(we, {
					label: "Title Insurance",
					name: "titleInsurance",
					value: m.titleInsurance,
					placeholder: "Title insurance in $",
					onChange: g,
					helpText: "Fees of approximately $300 for certain types of mortgage only.",
					showHelp: i,
					translator: o
				}), e.createElement(we, {
					label: "Home Inspection Fees",
					name: "inspectionFees",
					value: m.inspectionFees,
					placeholder: "Inspection fees in $",
					onChange: g,
					helpText: "Before you bid for a property, you should always have it inspected by a certified expert to confirm its condition. Fees are approximately $300 for a single family home or a condo.",
					showHelp: i,
					translator: o
				}), e.createElement(we, {
					label: "Home Appraisal Fees",
					name: "appraisalFees",
					value: m.appraisalFees,
					placeholder: "Home appraisal fees in $",
					onChange: g,
					helpText: "The market value of the property is a key element in the lender’s decision process. They might require you to get an appraisal on the property. Fees are approximately $300 to $500 fees for a single family home or a condo.",
					showHelp: i,
					translator: o
				}))
			};
		Xc.propTypes = {
			onChange: r().func,
			className: r().string,
			translator: r().object
		};
		const Kc = Xc,
			Jc = e => isNaN(Math.round(e)) ? 0 : Math.round(e),
			eu = (0, p.ZP)("div", null, {
				displayName: "ResultItem",
				styles: {
					cls1: "cls1-3626944734",
					cls2: "cls2-2817544140 cls1-3626944734"
				}
			}),
			tu = (0, p.ZP)("img", null, {
				displayName: "CalcImage",
				styles: {
					cls1: "cls1-8743786263",
					cls2: "cls2-2577034503 cls1-8743786263"
				}
			}),
			nu = {
				totalWrap: "totalWrap-6793734432",
				valuesBox: "valuesBox-8721694394",
				totalBox: "totalBox-5088632036 totalBox-4159429331"
			},
			au = ({
				className: t,
				fields: n,
				site: a,
				taxes: r,
				config: o,
				translator: i
			}) => {
				const [s, l] = (0, e.useState)(!1), c = Object.keys(n).length && (({
					propertyValue: e = 0,
					firstHome: t = !1,
					newHome: n = !1,
					downPaymentDollars: a = 0,
					downPaymentPercentage: r = 0,
					downPaymentInput: o,
					province: i = 0,
					showHelp: s = !1,
					lawyerFees: l = 1e3,
					titleInsurance: c = 300,
					inspectionFees: u = 300,
					appraisalFees: d = 400,
					taxes: h = [],
					city: f = 0
				}) => {
					const p = h[i],
						m = "$" === o ? a : e * (r / 100),
						g = m / e,
						y = e => {
							switch (Number(e)) {
								case 2:
									return .07;
								case 7:
									return .08;
								case 9:
									return .09975;
								case 10:
									return .06;
								default:
									return 0
							}
						},
						b = t => t < .05 ? 0 : t < .1 ? .04 * (e - m) * y(i) : t < .15 ? .031 * (e - m) * y(i) : t < .2 ? .028 * (e - m) * y(i) : 0,
						v = () => {
							if ("AB" === p.province) {
								const t = 2e-4 * e + 50;
								return t < 0 ? 0 : t
							}
							if (p.rates.length) {
								let t = 0;
								for (let n = 0; n < p.rates.length; n++) {
									const a = p.rates[n];
									if (a.max && e > a.max) "AMOUNT" === a.type ? t += a.rate : t += (a.max - a.min) * a.rate / 100;
									else {
										if (a.max || "AMOUNT" != a.type) {
											"AMOUNT" === a.type ? t += a.rate : t += (e - a.min) * a.rate / 100;
											break
										}
										t += a.rate
									}
								}
								return "SK" == p.province && e > 500 && e < 8401 && (t = 25), "NT" === p.province && t < 100 ? 100 : "NU" === p.province && t < 60 ? 60 : t < 0 ? 0 : t
							}
							return 0
						},
						x = () => {
							if ("AB" === p.province) {
								const t = 2e-4 * (e - m) + 50;
								return t < 0 ? 0 : t
							}
							if (f >= 0 && p.cities.length && p.cities[f] && p.cities[f].rates.length) {
								let t = 0;
								for (let n = 0; n < p.cities[f].rates.length; n++) {
									const a = p.cities[f].rates[n];
									if (!(a.max && e > a.max)) {
										"AMOUNT" === a.type ? t += a.rate : t += (e - a.min) * a.rate / 100;
										break
									}
									"AMOUNT" === a.type ? t += a.rate : t += (a.max - a.min) * a.rate / 100
								}
								return t < 0 ? 0 : t
							}
							return 0
						},
						w = () => {
							let a = 0;
							return (t || n) && p.cities[f] && p.cities[f].maxRebate && (a += Math.min(x(), p.cities[f].maxRebate)), t && (p.fthbRebate && (a += Math.min(v(), p.fthbRebate)), e > p.fthbMin && e < p.fthbMax && (a += (p.fthbMax - e) / 25e3 * (v() + x()) - p.fthbRebate), p.fthbMax && e >= p.fthbMax && (a = 0)), n && (p.nbhRebate && (a += Math.min(v(), p.nbhRebate)), e > p.nbhMin && e < p.nbhMax && (a += (p.nbhMax - e) / 5e4 * (v() + x()) - p.nbhRebate), p.nbhMax && e >= p.nbhMax && (a = 0)), "PE" === p.province && t && (a = v() + x()), a = Math.min(a, v() + x()), a < 0 ? 0 : a
						},
						T = l + c + u + d + b(Number(g)),
						_ = v() + x() - w(),
						k = _ + T;
					return {
						provincialTax: Jc(v()),
						municipalTax: Jc(x()),
						rebates: Jc(w()),
						landTransferTax: Jc(_),
						otherFees: Jc(T),
						mortgageInsurance: Jc(b(Number(g))),
						closingFees: Jc(k),
						showHelp: s,
						province: i
					}
				})({
					...n,
					taxes: r
				}), u = i.getLanguage(), {
					ajaxUrl: d,
					ajaxNonce: h
				} = o;
				return e.createElement("div", {
					className: t
				}, e.createElement(Me, {
					site: a,
					translator: i
				}), e.createElement(de, {
					site: a,
					onClick: async e => {
						const t = `${i.getText("View your results")} - ${i.getText("Closing Fees Calculator")} | ${d.includes("mortgagealliance")?"Mortgage Alliance":d.includes("multi-prets")?"Multi-Prêts":d.includes("invis")?"INVIS":d.includes("migroup")?"Mortgage Intelligence":void 0}`,
							r = `${i.getText("Here are the closing costs to be expected according to the data entered.")}\n\n${i.getText("Your Closing Fees")}: ${Ne(c.closingFees,u)}\n${i.getText("Land Transfer Tax Amount")}: ${Ne(c.landTransferTax,u)}\n\n${i.getText("Lawyer (Notary) Fees")}: ${Ne(n.lawyerFees,u)}\n${i.getText("Title Insurance Fees")}: ${Ne(n.titleInsurance,u)}\n${i.getText("Home Inspection Fees")}: ${Ne(n.inspectionFees,u)}\n${i.getText("Home Appraisal Fees")}: ${Ne(n.appraisalFees,u)}\n\n${i.getText("To avoid any surprises, don't forget to consider other costs related to the purchase of your home, such as moving costs, utility costs, painting, etc.")}\n${a?`\n${i.getText("Questions? Please contact")} ${a.display_name} ${i.getText("at")} ${a.email}.\n`:""}\n`,
							o = await fetch(d, {
								method: "POST",
								headers: {
									"Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
								},
								body: `to=${e}&subject=${encodeURIComponent(t)}&message=${encodeURIComponent(r)}&action=send_email&_wpnonce=${h}`,
								cache: "no-cache",
								credentials: "same-origin"
							}),
							{
								data: s
							} = await o.json()
					},
					config: o,
					translator: i,
					calcName: "Closing fees / frais de clôtures"
				}), e.createElement("div", {
					className: "calc-results"
				}, e.createElement(eu, null, e.createElement("p", {
					className: "calc-results-title"
				}, i.getText("Your closing fees")), "fr" === u ? e.createElement("div", {
					className: "calc-big-label"
				}, c && c.closingFees ? e.createElement(m.ZP, {
					preserveValue: !0,
					end: c.closingFees,
					duration: .5,
					separator: " "
				}) : 0, " $") : e.createElement("div", {
					className: "calc-big-label"
				}, "$ ", c && c.closingFees ? e.createElement(m.ZP, {
					preserveValue: !0,
					end: c.closingFees,
					duration: .5,
					separator: ","
				}) : 0), " "), 0 == c.province ? e.createElement("div", {
					className: nu.totalWrap
				}, e.createElement("div", {
					className: nu.totalBox
				}, e.createElement("span", null, e.createElement("strong", null, i.getText("Registration Fees"))), e.createElement("br", null), " ", e.createElement("span", null, Ne(c.landTransferTax, u))), e.createElement("div", {
					className: nu.valuesBox
				}, e.createElement(eu, null, e.createElement("div", {
					className: "calc-heading-result"
				}, e.createElement("strong", null, i.getText("Property Registration Fee:")), "  ", Ne(c.provincialTax, u))), e.createElement(eu, null, e.createElement("div", {
					className: "calc-heading-result"
				}, e.createElement("strong", null, i.getText("Mortgage Registration Fee:")), "  ", Ne(c.municipalTax, u))))) : 10 == c.province ? e.createElement("div", {
					className: nu.totalWrap
				}, e.createElement("div", {
					className: nu.totalBox
				}, e.createElement("span", null, e.createElement("strong", null, i.getText("Title Transfer Fee"))), e.createElement("br", null), " ", e.createElement("span", null, Ne(c.landTransferTax, u)))) : 11 == c.province ? e.createElement("div", {
					className: nu.totalWrap
				}, e.createElement("div", {
					className: nu.totalBox
				}, e.createElement("span", null, e.createElement("strong", null, i.getText("Land Transfer Fee"))), e.createElement("br", null), " ", e.createElement("span", null, Ne(c.landTransferTax, u)))) : 12 == c.province ? e.createElement("div", {
					className: nu.totalWrap
				}, e.createElement("div", {
					className: nu.totalBox
				}, e.createElement("span", null, e.createElement("strong", null, i.getText("Registration Fees"))), e.createElement("br", null), " ", e.createElement("span", null, Ne(c.landTransferTax, u)))) : e.createElement("div", {
					className: nu.totalWrap
				}, e.createElement("div", {
					className: nu.totalBox
				}, e.createElement("span", null, e.createElement("strong", null, i.getText("Land Transfer Tax"))), e.createElement("br", null), " ", e.createElement("span", null, Ne(c.landTransferTax, u))), e.createElement("div", {
					className: nu.valuesBox
				}, e.createElement(eu, null, e.createElement("div", {
					className: "calc-heading-result"
				}, e.createElement("strong", null, i.getText("Provincial Tax:")), "  ", Ne(c.provincialTax, u))), e.createElement(eu, null, e.createElement("div", {
					className: "calc-heading-result"
				}, e.createElement("strong", null, i.getText("Municipal Tax:")), "  ", Ne(c.municipalTax, u))), e.createElement(eu, null, e.createElement("div", {
					className: "calc-heading-result"
				}, e.createElement("strong", null, i.getText("Rebates:")), "  ", Ne(c.rebates, u))))), e.createElement("div", {
					style: {
						borderBottom: "1px solid #eee",
						width: "80%",
						margin: "1rem auto"
					}
				}), e.createElement("div", {
					className: nu.totalWrap
				}, e.createElement("div", {
					className: nu.totalBox
				}, e.createElement("span", null, e.createElement("strong", null, i.getText("Other Fees"))), e.createElement("br", null), " ", e.createElement("span", null, Ne(c.otherFees, u))), e.createElement("div", {
					className: nu.valuesBox
				}, e.createElement(eu, null, e.createElement("div", {
					className: "calc-heading-result"
				}, e.createElement("strong", null, i.getText("Lawyer Fees:")), "  ", Ne(n.lawyerFees, u))), e.createElement(eu, null, e.createElement("div", {
					className: "calc-heading-result"
				}, e.createElement("strong", null, i.getText("Title Insurance:")), "  ", Ne(n.titleInsurance, u))), e.createElement(eu, null, e.createElement("div", {
					className: "calc-heading-result"
				}, e.createElement("strong", null, i.getText("Home Inspection Fees:")), "  ", Ne(n.inspectionFees, u))), e.createElement(eu, null, e.createElement("div", {
					className: "calc-heading-result"
				}, e.createElement("strong", null, i.getText("Home Appraisal Fees:")), "  ", Ne(n.appraisalFees, u))))), c.mortgageInsurance && c.mortgageInsurance > 0 ? e.createElement(eu, null, e.createElement("div", {
					className: "calc-heading-result"
				}, e.createElement("strong", null, i.getText("PST on mortgage insurance:")), " ", Ne(c.mortgageInsurance, u), e.createElement("button", {
					className: "calc-info-button",
					onClick: () => l(!s)
				}, "i")), s && e.createElement(J, null, i.getText("Provincial Sales Tax (PST) on mortgage insurance cannot be added to the loan amount and must be paid at the closing date. The mortgage insurance is mandatory if the down payment is less then 20% of the property value."))) : e.createElement(e.Fragment, null), o.imageUrl && e.createElement(tu, {
					src: o.imageUrl,
					alt: "Rent vs. Buy"
				})))
			};
		au.propTypes = {
			onChange: r().func,
			fields: r().object,
			translator: r().object
		};
		const ru = au,
			ou = ({
				site: t = {},
				taxes: n = [],
				config: a,
				translator: r
			}) => {
				const [o, i] = (0, e.useState)({});
				return e.createElement("div", {
					className: hc.wrap
				}, e.createElement(Kc, {
					onChange: i,
					taxes: n,
					className: hc.inputs,
					config: a,
					translator: r
				}), e.createElement(ru, {
					fields: o,
					taxes: n,
					site: t,
					className: hc.outputs,
					config: a,
					translator: r
				}))
			};
		ou.propTypes = {
			rates: r().object,
			site: r().object,
			config: r().object,
			translator: r().object
		};
		const iu = ou,
			su = ({
				className: t,
				onChange: n,
				rates: a,
				config: {
					defaultRatesProvince: r
				},
				translator: o
			}) => {
				const [i, s] = (0, e.useState)(!1), [l, c] = (0, e.useState)(!1), [u, d] = (0, e.useState)(!1);
				u && setTimeout((() => d(!1)), 3e3);
				const [h, f] = M({
					annualIncome: 1e5,
					coAnnualIncome: 0,
					downPaymentDollars: 2e4,
					termInYears: 25,
					interest: {
						rate: a.ours[0].fixed1Yr,
						rateType: "fixed",
						province: r
					},
					numPaymentsPerYear: 12,
					monthlyDebt: 500,
					monthlyExpenses: 100,
					annualTaxes: 2e3,
					monthlyCondoFees: 150,
					monthlyUtilities: 0,
					monthlyHomeCosts: 0,
					monthlyEducation: 0,
					monthlyHealth: 0,
					monthlyTravel: 0,
					monthlyGroceries: 0,
					monthlyTransportation: 0,
					monthlyOtherExpenses: 0
				}, ["downPaymentDollars", "termInYears", "interest", "numPaymentsPerYear"]);
				return (0, e.useEffect)((() => {
					n({
						...h,
						showLifestyle: l
					})
				}), Object.values({
					...h,
					showLifestyle: l
				})), e.createElement("div", {
					className: t
				}, e.createElement(pe, {
					name: "helpSwitch",
					label: "Guided Calculator",
					onChange: e => s(e.target.checked),
					text: "Need us to guide you through the process? Hit the Guided Calculator toggle and we’ll help you out.",
					translator: o
				}), e.createElement(we, {
					label: "Annual Income",
					name: "annualIncome",
					value: h.annualIncome,
					placeholder: "Annual income in $",
					onChange: f,
					helpText: "How much do you make a year?  You can factor in any bonuses that are guaranteed, but leave out anything that is performance based, just to be safe.",
					showHelp: i,
					translator: o
				}), e.createElement(we, {
					label: "Co-Borrower's Annual Income",
					name: "coAnnualIncome",
					value: h.coAnnualIncome,
					placeholder: "Co-Borrower's annual income in $",
					onChange: f,
					helpText: "(optional) How much does your co-borrower make a year? You can factor in any bonuses that are guaranteed, but leave out anything that is performance based, just to be safe.",
					showHelp: i,
					translator: o
				}), u && e.createElement("span", {
					style: {
						color: "red",
						fontSize: "0.6em",
						lineHeight: "2rem"
					}
				}, "*", " ", o.getText("Your down payment must be at least 5% of your affordable amount.")), e.createElement(we, {
					label: "Down Payment",
					name: "downPaymentDollars",
					value: h.downPaymentDollars,
					placeholder: "Down payment in $",
					onChange: f,
					helpText: "This helps you determine how much you can put down towards the price of the home when you buy. Write in how much you will have to spend. Make sure it is at least 5% of the price of the home.",
					showHelp: i,
					translator: o
				}), e.createElement(te, {
					label: o.getText("Amortization"),
					name: "termInYears",
					defaultValue: h.termInYears,
					options: [1, 2, 3, 4, 5, 7, 10, 15, 20, 25, 30].reduce(((e, t) => t && {
						...e,
						[`${t} ${1===t?o.getText("year"):o.getText("years")}`]: t
					}), {}),
					onChange: f,
					helpText: o.getText("If you’ve already used our Payment Calculator you may have a head-start on this field.  If not, estimate how long you would want to pay off your mortgage.  As you adjust this, you can see the way it affects how much you can afford."),
					showHelp: i
				}), e.createElement(ve, {
					label: "Interest Rate",
					name: "interest",
					rates: a,
					value: h.interest,
					placeholder: "Interest rate in %",
					onChange: f,
					helpText: "We've included the average rate, but you can use the Rates page or Pre-qualification to gain a better understanding of what you may qualify for.",
					showHelp: i,
					translator: o
				}), e.createElement(we, {
					label: "Monthly Debt Payments",
					name: "monthlyDebt",
					value: h.monthlyDebt,
					placeholder: "Monthly debt payments in $",
					onChange: f,
					helpText: "The combination of all monthly debt payments, such as: loans (auto, student, personal), auto lease, credit card balances, and credit line (exclude mortgages)",
					showHelp: i,
					translator: o
				}), e.createElement(we, {
					label: "Heat and Electricity",
					name: "monthlyExpenses",
					value: h.monthlyExpenses,
					placeholder: "Monthly expenses in $",
					onChange: f,
					helpText: "Consider that this amount is proportional to the size of your future property.",
					showHelp: i,
					translator: o
				}), e.createElement(we, {
					label: "Annual Property Taxes",
					name: "annualTaxes",
					value: h.annualTaxes,
					placeholder: "Annual property taxes in $",
					onChange: f,
					helpText: "Property and school taxes based on the value of the property levied by the municipality.",
					showHelp: i,
					translator: o
				}), e.createElement(we, {
					label: "Monthly Condo Fees",
					name: "monthlyCondoFees",
					value: h.monthlyCondoFees,
					placeholder: "Monthly debt payments in $",
					onChange: f,
					helpText: "This field is for any condo fees associated with the home you’re buying. Your broker can help you figure this out if you’ve selected a home already.",
					showHelp: i,
					translator: o
				}), e.createElement(pe, {
					name: "lifeSwitch",
					label: "Include Lifestyle Expenses",
					onChange: e => c(e.target.checked),
					text: "Have any additional monthly expenses? Click here to add them.",
					translator: o
				}), l ? e.createElement(e.Fragment, null, e.createElement(we, {
					label: "Public Utilities and Communications",
					name: "monthlyUtilities",
					value: h.monthlyUtilities,
					placeholder: "Monthly utilities in $",
					onChange: f,
					helpText: "Fuel, electricity and communications fees (TV, cellphone and internet)",
					showHelp: i,
					translator: o
				}), e.createElement(we, {
					label: "Home Maintenance and Household Furnishings",
					name: "monthlyHomeCosts",
					value: h.monthlyHomeCosts,
					placeholder: "Monthly home expenses in $",
					onChange: f,
					helpText: "Maintenance, repairs, renovation costs and furniture. Fixtures, art, appliances, and other equipment.",
					showHelp: i,
					translator: o
				}), e.createElement(we, {
					label: "Education and Child Care",
					name: "monthlyEducation",
					value: h.monthlyEducation,
					placeholder: "Monthly education expenses in $",
					onChange: f,
					helpText: "Education supplies, tuition fees or other courses and child care expenses.",
					showHelp: i,
					translator: o
				}), e.createElement(we, {
					label: "Health and Personal Care",
					name: "monthlyHealth",
					value: h.monthlyHealth,
					placeholder: "Monthly health expenses in $",
					onChange: f,
					helpText: "All healthcare costs, including insurance, medicine, specialized equipment, eye care, and dental care.",
					showHelp: i,
					translator: o
				}), e.createElement(we, {
					label: "Hobbies, Travel and Restaurants",
					name: "monthlyTravel",
					value: h.monthlyTravel,
					placeholder: "Monthly travel expenses in $",
					onChange: f,
					helpText: "Includes sports and outdoors equipment, electronic games, computer equipment, hobby materials, all travel and restaurants expenses.",
					showHelp: i,
					translator: o
				}), e.createElement(we, {
					label: "Groceries",
					name: "monthlyGroceries",
					value: h.monthlyGroceries,
					placeholder: "Monthly grocery expenses in $",
					onChange: f,
					helpText: "All food and beverage purchases.",
					showHelp: i,
					translator: o
				}), e.createElement(we, {
					label: "Vehicle and Transportation",
					name: "monthlyTransportation",
					value: h.monthlyTransportation,
					placeholder: "Monthly transportation expenses in $",
					onChange: f,
					helpText: "Gas, insurance fees, vehicle registration, public transportation fees, except car loans and leases.",
					showHelp: i,
					translator: o
				}), e.createElement(we, {
					label: "Other Expenses",
					name: "monthlyOtherExpenses",
					value: h.monthlyOtherExpenses,
					placeholder: "Other monthly expenses in $",
					onChange: f,
					helpText: "Any other recurring expense that is not included in the other options.",
					showHelp: i,
					translator: o
				})) : e.createElement(e.Fragment, null))
			};
		su.propTypes = {
			onChange: r().func,
			className: r().string,
			rates: r().object,
			translator: r().object
		};
		const lu = su,
			{
				calculateIncomeTax: cu
			} = n(591).Z,
			uu = e => isNaN(Math.round(e)) ? 0 : Math.round(e),
			du = (0, p.ZP)("div", null, {
				displayName: "ResultItem",
				styles: {
					cls1: "cls1-4754712516",
					cls2: "cls2-1853280658 cls1-4754712516"
				}
			}),
			hu = (0, p.ZP)("img", null, {
				displayName: "CalcImage",
				styles: {
					cls1: "cls1-9469655874",
					cls2: "cls2-6559679806 cls1-9469655874"
				}
			}),
			fu = (0, p.ZP)("div", null, {
				displayName: "ChartWrapper",
				styles: {
					cls1: "cls1-4027343028",
					cls2: "cls2-382224626 cls1-4027343028"
				}
			}),
			pu = ({
				className: t,
				fields: n,
				site: a,
				config: r,
				translator: o
			}) => {
				const [i, s] = (0, e.useState)(!1), [l, c] = (0, e.useState)(!1), [u, d] = (0, e.useState)(-1), h = o.getLanguage(), f = Object.keys(n).length && (({
					annualIncome: e = 0,
					coAnnualIncome: t = 0,
					downPaymentDollars: n = 0,
					termInYears: a = 0,
					interest: r = {
						rate: 0,
						province: "AB"
					},
					numPaymentsPerYear: o = 12,
					monthlyDebt: i = 0,
					monthlyExpenses: s = 0,
					annualTaxes: l = 0,
					monthlyCondoFees: c = 0,
					monthlyUtilities: u = 0,
					monthlyHomeCosts: d = 0,
					monthlyEducation: h = 0,
					monthlyHealth: f = 0,
					monthlyTravel: p = 0,
					monthlyGroceries: m = 0,
					monthlyTransportation: g = 0,
					monthlyOtherExpenses: y = 0,
					showLifestyle: b
				}) => {
					let v = 0;
					b && (v = u + d + h + f + p + m + g + y);
					const x = i + s,
						w = v + x,
						{
							rate: T,
							province: _
						} = r,
						k = Math.max(4.79, T + 2),
						P = (Math.pow(1 + k / 200, 2) - 1) / o,
						E = a * o,
						S = e + t,
						C = cu(_, 100 * S) / 1200;
					let M;
					M = n <= 25e3 ? n / .05 : n < 75e3 ? (n - 25e3) / .1 + 5e5 : n < 2e5 ? 999999 : n / .2;
					const N = (.44 * S - l - 12 * s - 12 * i - 6 * c) / 12,
						$ = (.39 * S - l - 12 * s - 6 * c) / 12 * (Math.pow(1 + P, E) - 1) / Math.pow(1 + P, E) / P + n,
						A = N * (Math.pow(1 + P, E) - 1) / Math.pow(1 + P, E) / P + n,
						I = Math.min(M, $, A) > 0 ? Math.min(M, $, A) : n,
						O = [];
					for (let e = parseInt(.8 * I); e <= parseInt(I); e++) {
						let t = P * (e - n) * Math.pow(1 + P, E) / (Math.pow(1 + P, E) - 1);
						t < 0 && (t = 0);
						let a = S / 12 - t - i - l / 12 - v - s - c - C;
						a < 0 && (t = parseFloat(t) + parseFloat(a), t < 0 && (t = 0), a = 0);
						let r = (12 * t + l + 12 * s + 6 * c) / S * 100,
							o = (12 * t + l + 12 * s + 6 * c + 12 * i) / S * 100;
						r > 100 && (r = 100), o > 100 && (o = 100), r < 0 && (r = 0), o < 0 && (o = 0), O.push({
							sliderAfford: e,
							sliderPayment: uu(t),
							sliderGds: uu(r),
							sliderTds: uu(o),
							sliderMoneyLeftOver: uu(a)
						})
					}
					return {
						affordableAmount: parseInt(I),
						incomeTax: uu(C),
						monthlyMortgage: 0,
						gds: 0,
						tds: 0,
						moneyLeftOver: 0,
						showLifestyle: b,
						totalExpenses: uu(w),
						monthlyTaxes: uu(l / 12),
						monthlyCondoFees: c,
						nonLifestyleExpenses: x,
						monthlyIncome: uu(e / 12),
						monthlyDebt: i,
						sliderValues: O
					}
				})({
					...n
				}), {
					incomeTax: p,
					showLifestyle: g,
					totalExpenses: y,
					monthlyTaxes: b,
					monthlyCondoFees: v,
					nonLifestyleExpenses: w,
					monthlyIncome: T,
					monthlyDebt: _,
					sliderValues: k
				} = f;
				k && k.length < u && d(-1), -1 === u && k && d(Math.round(.75 * (k.length - 1)));
				N().width;
				const P = e => e.sliderPayment > 0 ? e.sliderAfford : k[k.length - 1].sliderAfford,
					{
						ajaxUrl: E,
						ajaxNonce: S
					} = r,
					C = {
						primary: getComputedStyle(document.body).getPropertyValue("--primary-color"),
						accent: getComputedStyle(document.body).getPropertyValue("--accent-color"),
						gray: getComputedStyle(document.body).getPropertyValue("--gray-color"),
						dark: getComputedStyle(document.body).getPropertyValue("--dark-color"),
						form: getComputedStyle(document.body).getPropertyValue("--form-color"),
						text: getComputedStyle(document.body).getPropertyValue("--text-color")
					};
				return e.createElement("div", {
					className: t
				}, e.createElement(Me, {
					site: a,
					showPrequal: !0,
					translator: o
				}), e.createElement(de, {
					site: a,
					onClick: async e => {
						const t = `${o.getText("View your results")} - ${o.getText("Affordability Calculator")} | ${E.includes("mortgagealliance")?"Mortgage Alliance":E.includes("multi-prets")?"Multi-Prêts":E.includes("invis")?"INVIS":E.includes("migroup")?"Mortgage Intelligence":void 0}`,
							r = `${o.getText("Thank you for using our calculator. Here is how much you can borrow based on the data entered.")}\n\n${o.getText("Here is what you can afford")}: ${Ne(P(k[u]),h)}\n${o.getText("Monthly Mortgage Payment")}: ${Ne(k[u].sliderPayment,h)}\n\n${o.getText("Amount left in your wallet")}: ${Ne(k[u].sliderMoneyLeftOver,h)}\n${o.getText("Gross Debt Service (GDS) Ratio")}: ${k[u].sliderGds} %\n${o.getText("Total Debt Service (TDS) Ratio")}: ${k[u].sliderTds} %\n\n${o.getText("Annual Income")}: ${Ne(n.annualIncome,h)}\n${o.getText("Co-Borrower's Annual Income")}: ${Ne(n.coAnnualIncome,h)}\n${o.getText("Down Payment")}: ${Ne(n.downPaymentDollars,h)}\n${o.getText("Amortization")}: ${n.termInYears} ${o.getText("years")}\n${o.getText("Interest Rate")}: ${n.interest.rate} %\n${o.getText("Monthly Debt Payments")}: ${Ne(n.monthlyDebt,h)}\n${o.getText("Heat and Electricity")}: ${Ne(n.monthlyExpenses,h)}\n${o.getText("Annual Property Taxes")}: ${Ne(n.annualTaxes,h)}\n${o.getText("Monthly Condo Fees")}: ${Ne(n.monthlyCondoFees,h)}\n${g?`\n${o.getText("Public Utilities and Communications")}: ${Ne(n.monthlyUtilities,h)}\n${o.getText("Home Maintenance and Household Furnishings")}: ${Ne(n.monthlyHomeCosts,h)}\n${o.getText("Education and Child Care")}: ${Ne(n.monthlyEducation,h)}\n${o.getText("Health and Personal Care")}: ${Ne(n.monthlyHealth,h)}\n${o.getText("Hobbies, Travel and Restaurants")}: ${Ne(n.monthlyTravel,h)}\n${o.getText("Groceries")}: ${Ne(n.monthlyGroceries,h)}\n${o.getText("Vehicle and Transportation")}: ${Ne(n.monthlyTransportation,h)}\n${o.getText("Other Expenses")}: ${Ne(n.monthlyOtherExpenses,h)}\n`:""}\n${o.getText("The results are estimates based on the data entered and, if applicable, the current Bank of Canada qualification rate. The price of the house includes the mortgage and the down payment.")}\n${a?`\n${o.getText("Questions? Please contact")} ${a.display_name} ${o.getText("at")} ${a.email}.\n`:""}\n`,
							i = await fetch(E, {
								method: "POST",
								headers: {
									"Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
								},
								body: `to=${e}&subject=${encodeURIComponent(t)}&message=${encodeURIComponent(r)}&action=send_email&_wpnonce=${S}`,
								cache: "no-cache",
								credentials: "same-origin"
							}),
							{
								data: s
							} = await i.json()
					},
					config: r,
					translator: o,
					calcName: "Affordability / Combien puis-je emprunter"
				}), e.createElement("div", {
					className: "calc-results"
				}, e.createElement(du, null, e.createElement("p", {
					className: "calc-results-title"
				}, e.createElement("span", {
					className: "calc-great-news-text"
				}, o.getText("Great News!")), " ", o.getText("Here's what you can afford!")), "fr" === h ? e.createElement("div", {
					className: "calc-big-label"
				}, k && k[u] ? e.createElement(m.ZP, {
					preserveValue: !0,
					end: P(k[u]),
					duration: .5,
					separator: " "
				}) : 0, " $") : e.createElement("div", {
					className: "calc-big-label"
				}, "$ ", k && k[u] ? e.createElement(m.ZP, {
					preserveValue: !0,
					end: P(k[u]),
					duration: .5,
					separator: ","
				}) : 0), e.createElement("span", {
					style: {
						fontSize: "0.8em",
						lineHeight: "2rem"
					}
				}, "*", o.getText("borrowing limit + your down payment"))), e.createElement(du, null, k && k[u] && k[u].sliderTds > 44 ? e.createElement(J, null, e.createElement("span", {
					style: {
						color: "red",
						fontSize: "1em"
					}
				}, o.getText("We've noticed you are over the debt ratio – you may not qualify for these rates, please contact a broker."))) : e.createElement(J, null, e.createElement("span", {
					style: {
						color: "#706d72",
						fontSize: "1em"
					}
				}, o.getText("Great news! It looks like a house at this price fits your wallet!")))), e.createElement(du, null, "fr" === h ? e.createElement("div", {
					className: "calc-heading-result"
				}, o.getText("Monthly Mortgage Payment"), ":", " ", k && k[u] ? e.createElement(m.ZP, {
					preserveValue: !0,
					end: k && k[u] ? k[u].sliderPayment : 0,
					duration: .5,
					separator: ","
				}) : 0, " $") : e.createElement("div", {
					className: "calc-heading-result"
				}, o.getText("Monthly Mortgage Payment"), ": $", " ", k && k[u] ? e.createElement(m.ZP, {
					preserveValue: !0,
					end: k && k[u] ? k[u].sliderPayment : 0,
					duration: .5,
					separator: ","
				}) : 0), g && e.createElement(J, null, e.createElement("span", {
					style: {
						fontSize: "0.9em"
					}
				}, "*", o.getText("Given your lifestyle, you will be more comfortable with a monthly payment in this range.")))), k && k[u] && 0 !== k[u].sliderPayment ? e.createElement(du, null, e.createElement("p", null, o.getText("Now that you know how much you can afford, try adjusting your risk level to see what happens.")), e.createElement(gl.Range, {
					step: 1e3,
					min: 0,
					max: k.length - 1,
					name: "slider",
					values: [u],
					onChange: ([e]) => {
						d(e)
					},
					renderTrack: ({
						props: t,
						children: n
					}) => e.createElement("div", x({}, t, {
						style: {
							...t.style
						},
						className: "calc-slider-track"
					}), n),
					renderThumb: ({
						props: t
					}) => e.createElement("div", x({}, t, {
						style: {
							...t.style
						},
						className: "calc-slider-thumb"
					}))
				}), e.createElement("div", {
					style: {
						display: "flex",
						justifyContent: "space-between",
						paddingTop: "1.5rem"
					}
				}, e.createElement("span", null, o.getText("Safer")), e.createElement("span", null, o.getText("Riskier")))) : e.createElement(e.Fragment, null), e.createElement(fu, null, e.createElement(Js, {
					width: 300,
					height: 300,
					options: {
						maintainAspectRatio: !1,
						responsive: !0,
						legend: {
							position: "bottom"
						},
						title: {
							display: !1
						},
						animation: {
							duration: 1e3,
							animateScale: !0,
							animateRotate: !0
						},
						tooltips: {
							callbacks: {
								label: (e, t) => {
									const n = t.datasets[0].data[e.index];
									return `${t.labels[e.index]} ${Ne(n,h)}`
								}
							}
						}
					},
					data: {
						datasets: [{
							data: [k && k[u] ? k[u].sliderPayment : 0, p, b, g ? y : w, v, k && k[u] ? k[u].sliderMoneyLeftOver : 0],
							backgroundColor: [C.gray, C.dark, C.primary, C.text, C.form, C.accent]
						}],
						labels: [o.getText("Mortgage Payment"), o.getText("Income Taxes"), o.getText("Property Taxes"), o.getText("Expenses/Debt"), o.getText("Condo Fees"), o.getText("Money left in my wallet")]
					}
				})), e.createElement(du, null, k && k[u] && k[u].sliderMoneyLeftOver / T <= .1 ? e.createElement(J, null, "*", o.getText("According to these calculations, you would have less than 10% of your monthly income for unforeseen expenses. Does this suit your financial situation well?")) : e.createElement(e.Fragment, null)), e.createElement(du, null, e.createElement("div", {
					className: "calc-heading-result"
				}, o.getText("Gross Debt Service (GDS) Ratio"), ":", " ", k && k[u] && k[u].sliderGds ? e.createElement(m.ZP, {
					preserveValue: !0,
					end: k[u].sliderGds,
					duration: .5,
					separator: ","
				}) : 0, " ", "%", " ", e.createElement("button", {
					className: "calc-info-button",
					onClick: () => s(!i)
				}, "i")), i && e.createElement(J, null, "*", o.getText("This ratio is used to determine the percentage of your housing costs (annual living expenses) in comparison with your annual income. For an insured mortgage (where the down payment is less than 20% of the purchase value of the property), financial institutions require that the gross debt service does not exceed between 32 and 39%."))), e.createElement(du, null, e.createElement("div", {
					className: "calc-heading-result"
				}, o.getText("Total Debt Service (TDS) Ratio"), ":", " ", k && k[u] && k[u].sliderTds ? e.createElement(m.ZP, {
					preserveValue: !0,
					end: k[u].sliderTds,
					duration: .5,
					separator: ","
				}) : 0, " ", "%", " ", e.createElement("button", {
					className: "calc-info-button",
					onClick: () => c(!l)
				}, "i")), l && e.createElement(J, null, "*", o.getText("This ratio is used to determine the percentage of your total living expenses and other annual financial commitments in comparison with your annual income. The amortized total debt ratio offers a more complete picture of your financial situation because it indicates whether you have the financial capacity to assume all your current expenses, plus the unexpected ones. According to government norms, this ratio should not be more than 44%."))), r.imageUrl && e.createElement(hu, {
					src: r.imageUrl,
					alt: "Affordability"
				})))
			};
		pu.propTypes = {
			onChange: r().func,
			fields: r().object,
			config: r().shape({
				ajaxUrl: r().string.isRequired,
				ajaxNonce: r().string.isRequired
			}).isRequired,
			site: r().object,
			translator: r().object
		};
		const mu = pu,
			gu = ({
				rates: t,
				site: n = {},
				config: a,
				translator: r
			}) => {
				const [o, i] = (0, e.useState)({});
				return e.createElement("div", {
					className: hc.wrap
				}, e.createElement(lu, {
					onChange: i,
					rates: t,
					className: hc.inputs,
					config: a,
					translator: r
				}), e.createElement(mu, {
					fields: o,
					site: n,
					className: hc.outputs,
					config: a,
					translator: r
				}))
			};
		gu.propTypes = {
			rates: r().object,
			site: r().object,
			config: r().object,
			translator: r().object
		};
		const yu = gu;
		const bu = JSON.parse('{"en":{},"fr":{"Guided Calculator":"Calculatrice guidée","Need us to guide you through the process? Hit the Guided Calculator toggle and we’ll help you out.":"Besoin de nous pour vous guider? Activez la fonction \\"Calculatrice guidée\\" et nous vous aiderons.","Annual Income":"Revenu annuel brut","Annual income in $":"Revenu annuel brut en $","How much do you make a year?  You can factor in any bonuses that are guaranteed, but leave out anything that is performance based, just to be safe.":"Quel est votre revenu annuel avant impôts ? N\'incluez pas les bonus de performance non garantis.","Co-Borrower\'s Annual Income":"Revenu brut annuel des coemprunteurs","Co-Borrower\'s annual income in $":"Revenu brut annuel des coemprunteurs en $","(optional) How much does your co-borrower make a year? You can factor in any bonuses that are guaranteed, but leave out anything that is performance based, just to be safe.":"Facultatif - Quel est le revenu annuel avant impôts de votre co-demandeur ? N\'incluez pas les bonus de performance non garantis.","Your down payment must be at least 5% of your affordable amount.":"Votre acompte doit être d\'au moins 5% de votre montant abordable.","Down Payment":"Mise de fonds","Down payment in $":"Mise de fonds en $","This helps you determine how much you can put down towards the price of the home when you buy. Write in how much you will have to spend. Make sure it is at least 5% of the price of the home.":"Le montant de la mise de fonds doit être d\'au moins 5% de la valeur de votre future propriété.","Amortization":"Période d\'amortissement","year":"an"," year":" an","years":"ans"," years":" ans","If you’ve already used our Payment Calculator you may have a head-start on this field.  If not, estimate how long you would want to pay off your mortgage.  As you adjust this, you can see the way it affects how much you can afford.":"Le nombre d\'années que prendre le paiement de votre hypothèque","Interest Rate":"Taux d\'intérêt","Interest rate in %":"Taux d\'intérêt en %","We\'ve included the average rate, but you can use the Rates page or Pre-qualification to gain a better understanding of what you may qualify for.":"Quels taux d\'intérêt aurez-vous à payer pour cette hypothèque ? Nous avons inclus les taux actuels en vigueur.","Monthly Debt Payments":"Dettes mensuelles","Monthly debt payments in $":"Dettes mensuelles en $","The combination of all monthly debt payments, such as: loans (auto, student, personal), auto lease, credit card balances, and credit line (exclude mortgages)":"C’est le total des paiements mensuels qui combinent les dettes en lien avec un prêt (auto, étudiant, personnel), un paiement de location auto, un solde de carte de crédit ou une marge de crédit (exclus l’hypothèque).","Heat and Electricity":"Chauffage et électricité","Monthly expenses in $":"Dépenses mensuelles en $","Consider that this amount is proportional to the size of your future property.":"Estimez le coût en fonction de la taille de votre future propriété.","Annual Property Taxes":"Taxes résidentielles","Annual property taxes in $":"Taxes résidentielles en $","Property and school taxes based on the value of the property levied by the municipality.":"Taxes foncières et scolaires basées sur la valeur de la propriété perçue par la municipalité.","Monthly Condo Fees":"Frais de copropriété mensuels","Monthly condo fees in $":"Frais de condo mensuels en $","This field is for any condo fees associated with the home you’re buying. Your broker can help you figure this out if you’ve selected a home already.":"Ce champ concerne tous les frais de condo associés à la maison que vous achetez. Votre courtier peut vous aider à comprendre cela si vous avez déjà sélectionné une maison.","Include Lifestyle Expenses":"Inclure les dépenses liées au style de vie","Have any additional monthly expenses? Click here to add them.":"Avez-vous des dépenses mensuelles supplémentaires? Cliquez ici pour les ajouter.","Public Utilities and Communications":"Services publics et télécommunication","Monthly utilities in $":"Utilitaires mensuels en $","Fuel, electricity and communications fees (TV, cellphone and internet)":"Gaz, électricité et frais de télécommunications (Télé, cellulaire et internet)","Home Maintenance and Household Furnishings":"Entretiens domestique et ameublement","Monthly home expenses in $":"Dépenses mensuelles de la maison en $","Maintenance, repairs, renovation costs and furniture. Fixtures, art, appliances, and other equipment.":"Coûts d’entretien, réparation et rénovations. Meubles, luminaires, arts et autre équipement.","Education and Child Care":"Éducation et garderie","Monthly education expenses in $":"Frais d\'études mensuels en $","Education supplies, tuition fees or other courses and child care expenses.":"Matériel scolaire, frais de scolarité ou frais pour d’autres cours et garderie.","Health and Personal Care":"Santé et soins personnels","Monthly health expenses in $":"Dépenses de santé mensuelles en $","All healthcare costs, including insurance, medicine, specialized equipment, eye care, and dental care.":"Tous les frais de soins de santé, incluant assurances, médicaments, équipements spécialisés, soins de la vue et soins dentaires.","Hobbies, Travel and Restaurants":"Loisirs, voyages et restaurants","Monthly travel expenses in $":"Frais de déplacement mensuels en $","Includes sports and outdoors equipment, electronic games, computer equipment, hobby materials, all travel and restaurants expenses.":"Inclus les équipements de sports et de plein air, jeux électroniques, équipement informatique, matériel pour les loisirs, ainsi que toutes dépenses reliées aux voyages et restaurants.","Groceries":"Épicerie","Monthly grocery expenses in $":"Dépenses mensuelles d\'épicerie en $","All food and beverage purchases.":"Tout achat de nourriture et boissons.","Vehicle and Transportation":"Véhicule et transport","Monthly transportation expenses in $":"Frais de transport mensuels en $","Gas, insurance fees, vehicle registration, public transportation fees, except car loans and leases.":"Essence, assurance, immatriculation, frais de transport en commun, à l’exception des coûts de location long terme et prêt auto.","Other Expenses":"Autres dépenses","Other monthly expenses in $":"Autres dépenses mensuelles en $","Any other recurring expense that is not included in the other options.":"Tout ce qui n’est pas compris dans les autres options.","Great News!":"Bonne nouvelle!","Here\'s what you can afford!":"Voici ce que vous pouvez vous permettre!","Here is what you can afford":"Voici ce que vous pouvez vous permettre!","borrowing limit + your down payment":"limite d\'emprunt + mise de fonds","We\'ve noticed you are over the debt ratio – you may not qualify for these rates, please contact a broker.":"Nous avons remarqué qu\'au moins l\'un de vos ratios d\'endettement est plus élevé. Contactez un courtier pour en savoir plus.","Great news! It looks like a house at this price fits your wallet!":"Bonne nouvelle! On dirait qu\'une maison à ce prix s\'adapte à votre portefeuille!","Monthly Mortgage Payment":"Versement mensuel","Given your lifestyle, you will be more comfortable with a monthly payment in this range.":"Compte tenu de votre style de vie, vous serez plus à l\'aise avec une mensualité dans cette fourchette.","Now that you know how much you can afford, try adjusting your risk level to see what happens.":"Maintenant que vous savez combien vous pouvez vous permettre, essayez d\'ajuster votre niveau de risque pour voir ce qui se passe.","Safer":"Plus sécuritaire","Riskier":"Plus risqué","Mortgage Payment":"Paiement de l\'hypothèque","Income Taxes":"Impôts sur le revenu","Property Taxes":"Taxes résidentielles","Expenses/Debt":"Dépenses / dette","Condo Fees":"Frais de copropriété","Money left in my wallet":"Montant restant dans mes poches","According to these calculations, you would have less than 10% of your monthly income for unforeseen expenses. Does this suit your financial situation well?":"Selon ces calculs, il vous resterait moins de 10% de vos revenus mensuels pour les dépenses imprévues. Est-ce que ceci convient bien à votre situation financière?","Gross Debt Service (GDS) Ratio":"Ratio de l\'amortissement brut de la dette (ABD)","This ratio is used to determine the percentage of your housing costs (annual living expenses) in comparison with your annual income. For an insured mortgage (where the down payment is less than 20% of the purchase value of the property), financial institutions require that the gross debt service does not exceed between 32 and 39%.":"Ce ratio sert à établir le pourcentage que représentent vos frais d’occupation (vos dépenses annuelles pour habiter dans votre résidence principale) par comparaison à votre revenu annuel. Pour un prêt hypothécaire assuré, soit un prêt avec une mise de fonds inférieure à 20 % de la valeur d’achat de la propriété, ce ratio ne doit pas dépasser un plafond limite situé entre 32 et 39 % selon les institutions financières.","Total Debt Service (TDS) Ratio":"Ratio de l\'amortissement total de la dette (ATD)","This ratio is used to determine the percentage of your total living expenses and other annual financial commitments in comparison with your annual income. The amortized total debt ratio offers a more complete picture of your financial situation because it indicates whether you have the financial capacity to assume all your current expenses, plus the unexpected ones. According to government norms, this ratio should not be more than 44%.":"Ce ratio sert à établir le pourcentage que représente le coût total de vos frais d’occupation et de vos autres engagements financiers annuels par comparaison à votre revenu annuel. Le ratio de l’amortissement total de la dette (ATD) donne un portrait plus complet de votre situation financière, car il indique si vous avez la capacité financière d’assumer toutes vos dépenses courantes et même un imprévu. Selon les normes gouvernementales, ce ratio ne devrait pas dépasser 44 %","Year":"An","Home Price":"Prix de la propriété","Home price in $":"Prix de la propriété en $","Have you found a place you like? Type in the price. If you haven’t found somewhere yet, put in what you expect the home to cost.":"Avez-vous trouvé un endroit que vous aimez ? Entrez le prix. Si vous n\'avez toujours pas trouvé votre future propriété, entrez le budget que vous prévoyez.","Down Payment ($)":"Mise de fonds ($)","Down Payment (%)":"Mise de fonds (%)","Down payment %":"Mise de fonds %","This helps you decide how long you want to pay the loan back. The longer the amount of time, the less the monthly payment (but the higher the interest).":"La mise de fonds est le montant que vous avez en main pour l\'achat de votre maison. Assurez-vous qu\'elle est d\'au moins 5% du prix total de la propriété.","Interest Rate (%)":"Taux d\'intérêt (%)","We’ve included the average rate, but you can use the Rates page or Pre-qualification to gain a better understanding of what you may qualify for.":"Ceci est le taux du jour, vous pouvez consulter la page des taux hypothécaires pour voir les options qui s\'offrent à vous. ","Closing Costs":"Les frais de clôture","Getting the mortgage is not all. You will need some cash in hand to cover other expenditures related to the purchase of a new home.":"Obtenir l\'hypothèque n\'est pas tout. Vous aurez besoin de liquidités pour couvrir d\'autres dépenses liées à l\'achat d\'une nouvelle maison.","Additional Payment":"Paiement supplémentaire","None":"Aucun","One-time payment":"Paiement unique","Increase payments":"Augmenter les versements","Yearly":"Annuel","yearly":"annuel","Semi-annually":"Aux 6 mois","semi-annually":"aux 6 mois","Quarterly":"Aux 3 mois","quarterly":"aux 3 mois","Year of Payment":"Année de paiement","First Payment":"Premier paiement","Starting in Year":"À partir de l\'année","Additional Payment Amount":"Montant du paiement supplémentaire","Additional payment in $":"Paiement supplémentaire en $","Switch to ":"Basculer vers ","Payment Frequency":"Fréquence de paiement","Monthly":"Mensuel","Semi-Monthly":"Deux fois par mois","Accelerated Weekly":"Accéléré chaque semaine","Accelerated Bi-Weekly":"Accéléré toutes les deux semaines","Weekly":"De la semaine","Bi-Weekly":"Aux deux semaines","Fixed":"Fixé","Variable":"Variable","You’re thinking of buying a property and you wonder what your mortgage payment will be. Simply enter the price of the property and the different terms of your potential mortgage.":"Vous songez à acheter une propriété et vous vous demandez quel sera votre paiement hypothécaire. Entrez simplement le prix de la propriété et les différentes modalités de votre hypothèque potentielle.","Add Scenario":"Ajouter un scénario","Contact ":"Contacter ","Send me a copy":"Envoyer les résultats","Total Cost of Loan: ":"Coût total du prêt: ","Total Cost of Loan":"Coût total du prêt","Total Interest Paid: ":"Intérêt total payé: ","Total Interest Paid":"Intérêt total payé","Mortgage Insurance: ":"Prime d\'assurance-prêt: ","Mortgage Insurance":"Prime d\'assurance-prêt","Additional Payment Savings":"Économies de paiement supplémentaires","Additional Payment Type":"Type de paiement supplémentaires","Scenario":"Scénario","yr closed fixed":" ans fermé fixe","yr open fixed":" ans ouvert fixe","yr variable":" ans variable","1yr closed fixed":"1 an fermé fixe","If you already have a mortgage and you need additional capital for other projects/needs, maybe you can refinance your mortgage and benefit from low interest rates.":"Si vous avez déjà une hypothèque et que vous avez besoin de capitaux supplémentaires pour des projets, rembourser des dettes, etc. Vous pourriez possiblement refinancer votre prêt hypothécaire et bénéficier de taux d\'intérêt avantageux.","House Value":"Valeur de la maison","House value in $":"Valeur de la maison en $","Enter the value of your house.":"Entrez la valeur de votre maison.","Additional Funds Needed":"Montant du refinancement","Additional funds in $":"Fonds supplémentaires en $","Add any additional funds needed here. Additional funds + outstanding balance cannot be greater than 80% of your house value.":"Inscrivez le montant du refinancement souhaité. Notez que le montant du refinancement et le solde de votre hypothèque ne doivent pas dépasser 80% de la valeur de votre propriété.","Outstanding Balance ($)":"Solde de l\'hypothèque ($)","Outstanding Balance":"Solde de l\'hypothèque","Outstanding balance in $":"Solde impayé en $","Remaining balance on your mortgage. Outstanding balance + additional funds cannot be greater than 80% of your house value.":"Solde restant sur votre prêt hypothécaire. Le solde impayé + les fonds supplémentaires ne peuvent pas être supérieurs à 80% de la valeur de votre maison.","Principal vs. Interest":"Capital vs intérêt","Land Transfer Tax":"Taxe de mutation immobilière","Property Value":"Valeur de la propriété","Property value in $":"Valeur de la propriété en $","Enter the highest value between: 1. Value on Property Assessment Role, 2. Price paid for property 3. Market value of the immovable at the time of transfer":"Entrez la valeur la plus élevée entre: 1. Valeur sur le rôle d\'évaluation foncière, 2. Prix payé pour la propriété 3. Valeur marchande de l\'immeuble au moment du transfert","Property Province":"Province de la propriété","Select the Province where your new home is located.":"Sélectionnez la province où se trouve votre nouvelle résidence.","Property City":"Ville de la propriété","Select the city where your new home is located.":"Sélectionnez la ville où se trouve votre nouvelle maison.","I am a first-time home buyer":"Je suis un acheteur d\'une première maison","This is a newly built home":"Ceci est une maison nouvellement construite","Closing Fees":"Frais de clôture","Lawyer (Notary) Fees":"Frais de notaire","Lawyer fees in $":"Frais d\'avocat en $","May vary from one region to another and depending on your property type. Fees can be up to $1800.":"Peut varier d\'une région à l\'autre et selon votre type de propriété. Les frais peuvent atteindre 1 800 $.","Title Insurance":"Assurance titre","Title Insurance Fees":"Frais d\'assurance titre","Fees of approximately $300 for certain types of mortgage only.":"Frais d\'environ 300 $ pour certains types d\'hypothèque seulement.","Home Inspection Fees":"Frais d\'inspection","Inspection fees in $":"Frais d\'inspection en $","Before you bid for a property, you should always have it inspected by a certified expert to confirm its condition. Fees are approximately $300 for a single family home or a condo.":"Avant d\'acquérir une propriété, vous devriez toujours la faire inspecter par un expert certifié pour confirmer son état. Les frais sont d\'environ 300 $ pour une maison unifamiliale ou un condo.","Home Appraisal Fees":"Frais d\'évaluation","Home appraisal fees in $":"Frais d\'évaluation en $","The market value of the property is a key element in the lender’s decision process. They might require you to get an appraisal on the property. Fees are approximately $300 to $500 fees for a single family home or a condo.":"La valeur marchande de la propriété est un élément clé du processus de décision du prêteur. Ils pourraient exiger que vous obteniez une évaluation de la propriété. Les frais sont d\'environ 300 $ à 500 $ pour une maison unifamiliale ou un condo.","Registration Fees":"Frais d\'inscription","Property Registration Fee:":"Frais d\'enregistrement de la propriété:","Mortgage Registration Fee:":"Frais d\'enregistrement hypothécaire:","Title Transfer Fee":"Frais de transfert de titre","Land Transfer Fee":"Frais de transfert de terrain","Provincial Tax:":"Taxe provinciale:","Municipal Tax:":"Taxe municipale:","Rebates:":"Rabais:","Your closing fees":"Vos frais de clôture","Other Fees":"Autres frais","Lawyer Fees:":"Frais de notaire:","Title Insurance:":"Assurance titre:","Home Inspection Fees:":"Frais d\'inspection:","Home Appraisal Fees:":"Frais d\'évaluation:","PST on mortgage insurance:":"TVP sur l\'assurance hypothécaire:","Provincial Sales Tax (PST) on mortgage insurance cannot be added to the loan amount and must be paid at the closing date. The mortgage insurance is mandatory if the down payment is less then 20% of the property value.":"La taxe de vente provinciale (TVP) sur l\'assurance hypothécaire ne peut pas être ajoutée au montant du prêt et doit être payée à la date de clôture. L\'assurance hypothécaire est obligatoire si l\'acompte est inférieur à 20% de la valeur de la propriété.","Equity":"Équité","Your property value in $":"La valeur de votre propriété en $","This is how much your property is worth.  If you have an appraisal, this is where you would enter that amount.":"C\'est ce que vaut votre propriété. Si vous avez une évaluation, c\'est ici que vous saisissez ce montant.","Mortgage Balance":"Solde hypothécaire","Your remaing mortgage balance in $":"Votre solde hypothécaire résiduel en $","Enter the remaining balance of your mortgage.":"Entrez le solde restant de votre prêt hypothécaire.","Existing Mortgage":"Prêt hypothécaire existant","Balance Remaining":"Solde restant","Balance remaining in $":"Solde restant en $","If you have a current mortgage enter the remaining balance, the interest rate and how much you pay monthly on that mortgage.  Don’t include any condo or related fees.":"Si vous avez un prêt hypothécaire en cours, entrez le solde restant, le taux d’intérêt et le montant que vous payez mensuellement sur ce prêt hypothécaire. N’incluez aucun frais de condo ou frais connexes.","Current Monthly Payment":"Paiement mensuel actuel","Current monthly payment in $":"Paiement mensuel actuel en $","Add New Debt":"Ajouter une nouvelle dette","Input debt type, e.g. car, student, credit":"Type de dette d\'entrée, par exemple voiture, étudiant, crédit","Add up debts that include any educational debt, auto, and personal loans, average the interest rates in the second field and then tell us how much in total you pay on this monthly.":"Additionnez vos dettes, incluant les prêts étudiants, les prêts automobiles et personnels, les soldes de vos cartes et vos marges de crédit*, etc. Faites la moyenne des taux d’intérêt dans le deuxième champ, puis dites-nous à combien s’élèvent vos paiements mensuels.","Current equity in your home":"La valeur nette actuelle de votre propriété","You may qualify for a debt consolidation through your mortgage!":"Vous pourriez être admissible à une consolidation de dettes grâce à votre prêt hypothécaire!","Sadly, you do not have enough equity on your property to do a debt consolidation through your mortgage.":"Malheureusement, vous n\'avez pas suffisamment de capitaux propres sur votre propriété pour effectuer une consolidation de dettes grâce à votre prêt hypothécaire.","Total Balance Remaining:":"Solde total restant:","Total Balance Remaining":"Solde total restant","Current Monthly Payment:":"Paiement mensuel actuel:","New Monthly Payment":"Nouveau paiement mensuel","Desired Interest Rate:":"Nouveau taux hypothécaire:","Desired Interest Rate":"Nouveau taux hypothécaire","Desired Loan Term:":"Durée du prêt souhaité:","Desired Loan Term":"Durée du prêt souhaité","months":"mois","Current Payment":"Paiement actuel","New Payment":"Nouveau paiement","Principal":"Capital","Interest":"Intérêt","Debt":"Dette","Years":"Années","Thinking about which may be better, renting or buying? We’ve created a helpful calculator that can guide you through the process so that you can judge for yourself! Hit the Guided Calculator toggle to get help along the way.":"Vous pensez à ce qui peut être mieux, louer ou acheter? Nous avons créé une calculatrice utile qui peut vous guider tout au long du processus afin que vous puissiez juger par vous-même! Appuyez sur le bouton de la calculatrice guidée pour obtenir de l\'aide en cours de route.","Renting":"Location","Monthly Rent":"Loyer mensuel","Monthly rent in $":"Loyer mensuel en $","How much is your monthly rent?":"Quel est votre loyer mensuel?","Expected Annual Rent Increase (%)":"Augmentation annuelle du loyer (%)","Annual rent increase %":"Augmentation annuelle du loyer %","How much do you anticipate rent will increase each year?":"De combien pensez-vous que le loyer augmentera chaque année?","Annual Tenant Insurance ($)":"Assurance locataire annuelle ($)","Annual Tenant Insurance":"Assurance locataire annuelle","Annual insurance in $":"Assurance annuelle en $","The amount you pay per year for tenant insurance.":"Le montant que vous payez par an pour l\'assurance du logement","Other Annual Rent Costs ($)":"Autres coûts de location annuels ($)","Other Annual Rent Costs":"Autres coûts de location annuels","Additional annual rent costs in $":"Frais de location annuels supplémentaires en $","Any additional costs you may incur each year while renting, such as maintenance costs. Don’t forget to add in things like utilities and apartment related fees.":"Tous les frais supplémentaires que vous pourriez encourir chaque année lors de la location, tels que les frais de maintenance. N\'oubliez pas d\'ajouter des éléments tels que les services publics et les frais liés aux appartements.","Renting Assumptions":"Hypothèses de location","Invest Down Payment?":"Je veux investir la mise de fonds dans des placements?","Expected Return on Investment (%)":"Rendement prévu du placement (%/année)","Expected ROI %":"% De retour sur investissement attendu","Buying":"Achat","Property Purchase Price":"Prix ​​d\'achat de la propriété","Have you picked out a place you like? Take a look at the comparable prices and use that as a baseline for this field.":"Avez-vous choisi un endroit que vous aimez? Jetez un œil aux prix comparables et utilisez-les comme base de référence pour ce domaine.","How long would you like to pay your mortgage off. A longer term means lower payments.":"Combien de temps souhaitez-vous rembourser votre hypothèque. Un plus long terme signifie des paiements moins élevés.","Buying Assumptions":"Hypothèses d\'achat","Home Insurance":"Assurance habitation","Annual home insurance in $":"Assurance habitation annuelle en $","The amount in home insurance you will pay each year.":"Le montant de l\'assurance habitation que vous paierez chaque année.","Maintenance/Condo Fees":"Frais d\'entretien / de copropriété","Annual maintenance/condo fees in $":"Entretien annuel / frais de condo en $","The amount in fees such as maintenance, condo fees, etc. you will pay each year.":"Le montant des frais tels que l\'entretien, les frais de condo, etc. que vous paierez chaque année.","Land Transfer Tax ($)":"Droits de cession immobilière ($)","Land transfer tax in $":"Droits de cession immobilière en $","The amount in land transfer tax you will pay at closing.":"Le montant des droits de cession immobilière que vous paierez à la clôture.","Annual Property Taxes ($)":"Taxes foncières annuelles ($)","Annual property tax in $":"Taxe foncière annuelle en $","The amount in property taxes you will pay each year.":"Le montant en taxes foncières que vous paierez chaque année.","School Tax ($)":"Taxe scolaire ($)","Annual school tax in $":"Taxe scolaire annuelle en $","The amount in school taxes you will pay each year.":"Le montant en taxes scolaires que vous paierez chaque année.","Home Appreciation Rate (%)":"Taux d\'appréciation de la maison (%)","Annual home appreciation increase %":"Augmentation annuelle de l\'appréciation du logement%","Your estimated home annual appreciation rate.":"Votre taux d\'appréciation annuel estimé de votre maison.","Cost of Buying ($)":"Coût d\'achat ($)","Buying costs in $":"Frais d\'achat en $","These upfront costs can include loan, appraisal, and legal fees, title search, survey, home inspection and other similar services.":"Ces coûts initiaux peuvent inclure les frais de prêt, d\'évaluation et juridiques, la recherche de titre, l\'enquête, l\'inspection de la maison et d\'autres services similaires.","Cost of Selling (%)":"Coût de vente (%)","Selling costs in %":"Frais de vente en%","These costs can include legal fees, title search, survey services and broker commission.":"Ces coûts peuvent inclure les frais juridiques, la recherche de titres, les services d\'enquête et la commission des courtiers.","Inflation Rate (%)":"Taux d\'inflation (%)","Inflation rate in %":"Taux d\'inflation en%","The annual expected rate of economic inflation.":"Le taux annuel d\'inflation économique attendu.","Renting is better":"Louer c\'est mieux","The return on investment of your purchase will be in":"Acheter devient plus rentable dans","Buying is more profitable":"L\'achat est plus rentable","After":"Après","buying represents a benefit of ":"acheter représente un gain de ","renting represents a benefit of ":"la location représente un gain de ","Net Costs":"Coûts nets","The net costs are:":"Les coûts nets sont:","For Buy: Total costs – net property value.":"Pour Achat : Coût total - valeur nette de la propriété.","For Rent: Total costs – net investment value.":"Pour Location : Coût total - valeur totale des placements.","Total Costs vs. Investment/Equity":"Coûts totaux ou investissement / capitaux propres","Total Costs":"Coûts totaux","Investment / Equity":"Investissement / équité","Total costs are the sum of the amounts invested, expenses/rent and in the case of buying, cost of sale. Equity, in the case of buying, represents the net property value, and in the case of renting, the value of the investment.":"Les coûts totaux sont la somme du montant investi, des dépenses totales/loyer et dans le cas de l’achat, le coût lié à la vente. L’équité représente quant à elle, dans le cas de l’achat, la valeur nette de la propriété et dans le cas de la location, la valeur des placements.","Buy":"Acheter","Rent":"Louer","Amount invested":"Montant investi","The amount invested includes the down payment and the capital repayment.":"Le montant investi comprend l\'acompte et le remboursement du capital.","Total expenses/rent":"Total des dépenses / loyer","Total expenses include property taxes, school taxes, maintenance fees, land transfer tax, home insurance, condo fees and rentals, premium on Mortgage loan Insurance, if applicable.":"Les dépenses totales comprennent les taxes foncières, les taxes scolaires, les frais d\'entretien, les droits de cession immobilière, l\'assurance habitation, les frais de condo et de location, la prime sur l\'assurance prêt hypothécaire, le cas échéant.","Selling costs":"Coûts de vente","Total cost":"Coût total","Property value":"Valeur de la propriété","Mortgage balance":"Solde hypothécaire","Net property value":"Valeur nette de la propriété","Investments":"Investissements","Investment income":"Revenu d\'investissement","Total value of investments":"Valeur totale des investissements","Net costs":"Coûts nets","The maximum debt amount you can consolidate through your mortgage is ":"Le montant maximal de la dette que vous pouvez consolider grâce à votre prêt hypothécaire est de ",". Contact one of our brokers to help you find the best solution for your situation.":". Contactez l\'un de nos courtiers pour vous aider à trouver la meilleure solution adaptée à votre situation.","Your participation has been received.":"Votre participation a bien été reçu, merci.","Your submission has been received.":"Votre message a bien été reçu. Notre équipe vous reviendra sous peu.","Your message has been received. We will respond as soon as possible.":"Votre message a bien été reçu. Notre équipe vous reviendra sous peu.","Thank you for subscribing to our newsletter! We look forward to keeping in touch and sharing important announcements and changes in the mortgage industry along with money-saving tips and strategies.":"Merci de votre abonnement à notre infolettre ! Nous sommes heureux de rester en contact avec vous et sommes impatients de vous faire part d’annonces importantes, de changements touchant l’industrie hypothécaire ainsi que de conseils et de stratégies pour vous faire économiser.","Thank you for completing our online mortgage application. We will be in touch with you shortly to review the details, get additional information as needed, and answer any questions you may have.":"Merci d’avoir rempli notre demande de prêt hypothécaire en ligne. Nous vous contacterons sous peu pour l’examiner, obtenir des renseignements supplémentaires au besoin et répondre à toute question que vous pourriez avoir.","Brokers":"Courtiers","Offices":"Bureau","Name":"Nom","First name required":"Prénom requis","Last name required":"Nom requis","Name required":"Nom requis","Email format must be valid":"Le courriel doit être valide","Phone number must be valid":"Le numéro de téléphone doit être valide","Postal code format must be valid":"Le code postal doit être valide","You must consent to the terms":"Vous devez consentir aux termes et conditions","Application interest required":"Vous êtes intéressé par est requis","Purchase price required":"Prix d\'achat requis","Down payment required":"Mise de fonds requise","Date of birth required":"Date de naissance requise","Street number required":"Numéro civique requis","Street name required":"Nom de rue requis","City / town required":"Ville requise","Province required":"Province requise","Company is required":"Compagnie est requise","You must consent to the Privacy/Consent/Anti-Spam Agreement":"Vous devez consentir aux termes et conditions","Oops! Something technical went wrong while sending your request. To be certain that your application has been received, we recommend that you contact us to verify reception of your application with our Loan Centre. If it has not been received someone will be available to assist you during standard business hours.":"Oups! Une erreur technique s\'est produite durant l\'envoi de votre demande. Afin de vous assurer de la réception de celle-ci, nous vous recommandons de nous contacter durant les heures d\'ouverture au numéro","Postal code":"Code postal","Submit":"Soumettre","Visit Site":"Ma page","Regions served":"Régions desservies","Language(s)":"Langue(s)","Please enter your information to receive your results!":"SVP, veuillez fournir vos informations pour recevoir vos résultats!","First Name":"Prénom","Last Name":"Nom","Email":"Courriel","Cancel":"Annulé","Send Email":"Soumettre","Network Partners":"Partenaires du réseau","I consent to receiving communications from Multi-Prêts, affiliated companies and authorized agents. You can withdraw your consent at any time by unsubscribing.":"J\'accepte de recevoir des communications de Multi-Prêts, de sociétés affiliées et d\'agents autorisés. Vous pouvez retirer votre consentement à tout moment en vous désinscrivant.","I consent to receiving communications from Mortgage Alliance, affiliated companies and authorized agents. You can withdraw your consent at any time by unsubscribing.":"J\'accepte de recevoir des communications d\'Alliance Hypothécaire, de sociétés affiliées et d\'agents autorisés. Vous pouvez retirer votre consentement à tout moment en vous désinscrivant.","I consent to receiving communications from Mortgage Intelligence, affiliated companies and authorized agents. You can withdraw your consent at any time by unsubscribing.":"J\'accepte de recevoir des communications d\'Intelligence Hypothécaire, de sociétés affiliées et d\'agents autorisés. Vous pouvez retirer votre consentement à tout moment en vous désinscrivant.","Enter a first and last name":"Saisissez un prénom et un nom","Enter an email address":"Saisissez un courriel","Error submitting contact information":"Erreur lors de la soumission des informations de contact","Mobile":"Cellulaire","Work":"Travail","Residential":"Résidence","Phone Number":"Téléphone","Enter a phone number":"Saisissez un téléphone","Enter a postal code":"Saisissez un code postal","Postal Code":"Code postal","Comments":"Commentaires","Current outstanding balance required":"Solde hypothécaire requis","Requested mortgage amount required":"Montant requis doit être complété","Current lender required":"Prêteur actuel requis","Co-applicant first name required":"Prénom du codemandeur requis","Co-applicant last name required":"Nom du codemandeur requis","Co-applicant date of birth required":"Date de naissance du codemandeur requise","Co-applicant street number required":"Numéro civique du codemandeur requis","Co-applicant street name required":"Nom de rue du codemandeur requis","Co-applicant city / town required":"Ville du codemandeur requise","Co-applicant province required":"Province du codemandeur requise","Co-applicant postal code format must be valid":"Code postal du codemandeur doit être valide","Co-applicant phone number must be valid":"Numéro de téléphone du codemandeur doit être valide","Co-applicant phone type must be a valid selection":"Le type de numéro de téléphone du codemandeur doit être valide [Is there a way to have a wrong selection?? If yes, it might be a problem]","Co-applicant email format must be valid":"Courriel du codemandeur doit être valide","Please confirm we can conduct a credit search to continue":"Veuillez accepter que nous pouvons effectuer une recherche de crédit pour continuer","You must consent to the Canada Anti-Spam Legislation terms":"Vous devez consentir aux termes et conditions","Comments field is too long":"Votre commentaire comporte trop de caractères","Subject required":"Sujet requis","Payment":"Paiement","Address is required":"L\'Adresse est requise","City is required":"La ville est requise","Province is required":"Province est requis","Postal code is required":"Le code postal est requis","Property type is required":"Le type de propriété est requis","Loan type is required":"Le type de prêt est requis","Property value is required":"La valeur de la propriété est requise","Loan amount is required":"Le montant du prêt est requis","Available funds required":"Mise de fonds disponible requis","Profession type is required":"Le champ profession est requis","CV file is required":"Votre CV est requis","Affordability Calculator":"Calculatrice: Combien puis-je me permettre","Payment Calculator":"Calculatrice: Quel est le montant de mes versements?","Refinance Calculator":" Calculatrice: Refinancement","Rent vs. Buy Calculator":"Calculatrice: Louer ou acheter","Debt Consolidation Calculator":"Calculatrice: Consolidation de dettes","Closing Fees Calculator":"Calculatrice: frais de clôture","Amount left in your wallet":"Montant restant dans votre poches","View your results":"Voici vos résultats","Thank you for using our calculator. Here is how much you can borrow based on the data entered.":"Merci d’avoir utilisé notre calculette. Voici combien vous pouvez emprunter selon les données entrées.","The results are estimates based on the data entered and, if applicable, the current Bank of Canada qualification rate. The price of the house includes the mortgage and the down payment.":"Les résultats sont des estimations basées sur les données entrées et, le cas échéant, sur le taux de qualification de la Banque du Canada en vigueur aujourd’hui. Le prix de la maison inclut l’hypothèque et la mise de fonds.","Questions? Please contact":"Vous avez des questions ? Contactez","at":"à l\'adresse suivante","Thank you for using our calculator! Here are the mortgage payment amounts for the selected terms and conditions.":"Merci d’avoir utilisé notre calculette ! Voici le montant des versements hypothécaires selon les modalités de prêt choisies.","The calculations are based on the following assumptions:":"Les calculs sont fondés sur les hypothèses de base ci-dessous :","The mortgage interest rate remains unchanged throughout the amortisation period.":"Le taux d\'intérêt hypothécaire demeure inchangé durant toute la période d\'amortissement.","Interest is calculated semi-annually for fixed-rate loan.":"Les intérêts sont composés de façon semestrielle lors d\'un prêt à taux fixe.","The calculation results are estimations based on the values entered. They may differ if your financial situation and budget change at the time of the loan.":"Les résultats de ce calculateur sont des estimations basées sur les données entrées. Ils peuvent différer si votre situation financière et budgétaire change lors de l\'emprunt.","Thank you for using our calculator. Here is estimate amount that you would qualify for if you used the equity in your home.":"Merci d’avoir utilisé notre calculette. Voici le montant estimé pour lequel vous pourriez vous qualifier en utilisant la valeur nette de votre propriété.","The calculation results are estimations based on the values entered.":"Les résultats de cette calculatrice sont des estimations basées sur les données entrées. ","Here are the closing costs to be expected according to the data entered.":"Voici les frais de clôture à prévoir selon les données entrées.","Your Closing Fees":"Vos frais de clôture","Land Transfer Tax Amount":"Taxe de mutation immobilière","To avoid any surprises, don\'t forget to consider other costs related to the purchase of your home, such as moving costs, utility costs, painting, etc.":"Afin de ne pas avoir de surprise, n’oubliez pas de considérer les autres frais liés à l’achat de votre maison, tels que les frais de déménagements, les frais de raccordement aux services publics, la peinture, etc.","Thank you for using our calculator. Here are the results for your potential return on investment for buying a property, compared to renting.":"Merci d’avoir utilisé notre calculette. Voici les résultats de votre potentiel retour sur investissement pour l’achat d’une propriété, comparativement à la location.","For more details":"Pour plus de détails","click here":"cliquez ici","to go back to our calculators.":"pour retourner sur notre calculatrice","Tired of paying more interest than capital on your debts? If you want to reduce your monthly payments and save a lot of interest, refinancing your mortgage loan could be an option.  Our calculator will show you how much you can save, based on the values entered. Contact us for more information!":"Vous avez des dettes à taux d’intérêt élevé ? Refinancer votre prêt hypothécaire pourrait être un moyen de réduire vos dettes tout en bénéficiant d’un taux d’intérêt plus bas. Voici une estimation de combien vous pourriez économiser, basée sur les données entrées. Contactez un courtier hypothécaire pour plus de détails.","These calculations are based on the data entered. They could vary according to the current rate, your mortgage equity, etc. Please contact a broker to see the options available to you.":"Ces calculs sont basés sur les données entrées. Ils pourraient varier, entre autre, selon les taux en vigueur, l’équité disponible, etc. Veuillez contacter un courtier pour voir les options qui s’offrent à vous.","Current Interest Rate":"Taux d\'intérêt actuel","once":"paiement unique","increase":"augmenter les versements","none":"aucun","Mortgage renewal date is required":"Date de renouvellement d\'hypothèque requise","Acquisition date is required":"Date d\'acquisition requise","Rent or own is required":"Louer ou posséder requise","Get Prequalified Now":"Prédétermination de l’admissibilité","Apply Now":"Faire une demande","We can help you lock in your best rate":"Nous pouvons vous aider à garantir votre meilleur tarif","No results found":"Aucun résultat","We\'re sorry, we seem to be experiencing some technical difficulties with our contact form but we want to hear from you! Please reach out to our call centre at 1.866.854.6847 during regular business hours to speak to a representative or send us an email at invis@invis.ca and someone will get back to you as soon as possible.":"Nous sommes désolés, il semblerait que nous rencontrions présentement des difficultés techniques avec notre formulaire de contact, cependant nous avons envie de vous entendre. Veuillez contacter notre centre d\'appel au 438.300.2433 pendant les heures de bureau pour parler à un représentant ou envoyez-nous un courriel à invis@invis.ca et nous vous répondrons dès que possible.","We\'re sorry, we seem to be experiencing some technical difficulties with our contact form but we want to hear from you! Please reach out to our call centre at 1.877.667.5483 during regular business hours to speak to a representative or send us an email at mi@migroup.ca and someone will get back to you as soon as possible.":"Nous sommes désolés, il semblerait que nous rencontrions présentement des difficultés techniques avec notre formulaire de contact, cependant nous avons envie de vous entendre. Veuillez contacter notre centre d\'appel au 438.300.2433 pendant les heures de bureau pour parler à un représentant ou envoyez-nous un courriel à sac@groupeih.ca et nous vous répondrons dès que possible."}}'),
			vu = new class {
				constructor(e, t) {
					this.language = t, this.languageStrings = e[this.language]
				}
				getText(e) {
					return this.languageStrings[e] || e
				}
				getLanguage() {
					return this.language
				}
			}(bu, __WP_CONFIG__.lang),
			xu = (n, a) => {
				var r = JSON.parse(sessionStorage.getItem("ref")),
					o = r ? r.selectedProvince : window?.M3_BOSS_SITE?.province || __WP_CONFIG__.defaultRatesProvince;
				const i = document.querySelector(n);
				return i && t.render(e.createElement(a, {
					rates: window.M3_BOSS_RATES,
					site: window.M3_BOSS_SITE,
					taxes: window.M3_BOSS_TAXES,
					config: {
						ajaxUrl: __WP_CONFIG__.ajaxUrl,
						ajaxNonce: __WP_CONFIG__.ajaxNonce,
						defaultRatesProvince: o,
						imageUrl: i.getAttribute("data-image-url")
					},
					translator: vu
				}), i)
			};
		xu(".payment-calc", cl), xu(".rent-vs-buy-calc", pc), xu(".debt-consolidation-calc", Cc), xu(".refinance-calc", Zc), xu(".closing-fees-calc", iu), xu(".affordability-calc", yu)
	})()
})();