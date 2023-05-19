(function() {
	function cb(a) {
		a /= 300;
		return 300 * a * a + 360
	}

	function Ha(a, b) {
		return Math.atan2(b[1] - a[1], b[0] - a[0])
	}

	function Ra(a, b) {
		return Math.sqrt(a * a + b * b)
	}

	function Q(a) {
		var b;
		b = k.VERTEX_SHADER;
		b = k.createShader(b);
		k.shaderSource(b, "attribute vec2 p;varying vec2 uv;void main(){gl_Position=vec4(p,.0,1.);uv=.5*(p+1.);}");
		k.compileShader(b);
		var e = b;
		b = k.FRAGMENT_SHADER;
		b = k.createShader(b);
		k.shaderSource(b, a);
		k.compileShader(b);
		a = k.createProgram();
		k.attachShader(a, e);
		k.attachShader(a, b);
		k.linkProgram(a);
		k.useProgram(a);
		e = k.getAttribLocation(a, "p");
		k.enableVertexAttribArray(e);
		k.vertexAttribPointer(e, 2, k.FLOAT, !1, 0, 0);
		return [a]
	}

	function ha(a, b) {
		return a[b] || (a[b] = k.getUniformLocation(a[0], b))
	}

	function db() {
		var a = k.createTexture();
		k.bindTexture(k.TEXTURE_2D, a);
		k.texParameteri(k.TEXTURE_2D, k.TEXTURE_MIN_FILTER, k.LINEAR);
		k.texParameteri(k.TEXTURE_2D, k.TEXTURE_MAG_FILTER, k.LINEAR);
		k.texParameteri(k.TEXTURE_2D, k.TEXTURE_WRAP_S, k.CLAMP_TO_EDGE);
		k.texParameteri(k.TEXTURE_2D, k.TEXTURE_WRAP_T, k.CLAMP_TO_EDGE);
		return a
	}

	function Jb(a) {
		k.activeTexture(k.TEXTURE0 + 0);
		k.bindTexture(k.TEXTURE_2D, a);
		return 0
	}

	function eb() {
		var a = k.createFramebuffer();
		k.bindFramebuffer(k.FRAMEBUFFER, a);
		var b = db();
		k.texImage2D(k.TEXTURE_2D, 0, k.RGBA, R, H, 0, k.RGBA, k.UNSIGNED_BYTE, null);
		k.framebufferTexture2D(k.FRAMEBUFFER, k.COLOR_ATTACHMENT0, k.TEXTURE_2D, b, 0);
		return [a, b]
	}

	function Kb() {
		this.T = function(a) {
			for(var b = 0; 24 > b; b++) this[String.fromCharCode(97 + b)] = a[b] || 0;.01 > this.c && (this.c = .01);
			a = this.b + this.c + this.e;.18 > a && (a = .18 / a, this.b *= a, this.c *= a, this.e *= a)
		}
	}

	function Lb(a, b, e) {
		Sa.G.T(a);
		var h = Sa.V();
		a = new Uint8Array(4 * ((h + 1) / 2 | 0) + 44);
		var h = 2 * Sa.U(new Uint16Array(a.buffer, 44), h),
			m = new Uint32Array(a.buffer, 0, 44);
		m[0] = 1179011410;
		m[1] = h + 36;
		m[2] = 1163280727;
		m[3] = 544501094;
		m[4] = 16;
		m[5] = 65537;
		m[6] = 44100;
		m[7] = 88200;
		m[8] = 1048578;
		m[9] = 1635017060;
		m[10] = h;
		h += 44;
		for(m = 0; m < h; m += 3);
		b && b.decodeAudioData(a.buffer, e)
	}

	function la(a) {
		a = a.split(Mb);
		this.frequency = la.M(a[0]) || 0;
		this.duration = la.L(a[1]) || 0
	}

	function A(a, b, e) {
		this.C = a || new Ia;
		this.J();
		this.D = b || 120;
		this.loop = !0;
		this.F = this.I = 0;
		this.B = [];
		this.push.apply(this, e || [])
	}

	function I(a, b, q, h) {
		e.moveTo(a, b);
		e.lineTo(a + q, b + h)
	}

	function fb(a, b, q, h, m, k) {
		e.save();
		e.beginPath();
		p(m);
		for(m = 0; m < a.length; m++) {
			var f = Nb["0123456789?abcdefghijklmnopqrstuvwxyz .-'/".indexOf(a[m])],
				l = D[0] + b - (h + k) * (a.length - m),
				n = D[1] + q,
				u = h,
				w = u - 4,
				v = u / 2 - 4;
			f & 1 && I(l + 2, n - 1, w, 0);
			f & 2 && I(u + l + 1, n, 0, u - 1);
			f & 4 && I(u + l + 1, u + n + 1, 0, u - 1);
			f & 8 && I(l + 2, 2 * u + n + 1, w, 0);
			f & 16 && I(l - 1, n + u + 1, 0, u - 1);
			f & 32 && I(l - 1, n, 0, u - 1);
			f & 64 && I(l + 2, u + n, v, 0);
			f & 128 && I(l + 2, n + 2, v, w);
			f & 256 && I(u / 2 + l, n + 2, 0, w);
			f & 512 && I(u + l - 2, n + 2, -v, w);
			f & 1024 && I(u / 2 + l + 2, u + n, v, 0);
			f & 2048 && I(u / 2 + l + 2, u + n + 2, v, w);
			f & 4096 && I(u / 2 + l, u + n + 2, 0, w);
			f & 8192 && I(l + 2, 2 * u + n - 2, v, -u + 4)
		}
		e.closePath();
		e.stroke();
		e.restore()
	}

	function C(a, b, e, h, f, k) {
		var l;
		l = l || f.length;
		k = k || 0;
		for(var n = 25 > h ? 10 : .5 * h, p = 0; p < l; p++) Ob[k](a, b + p, e + p, h, f[p] || f[0], n)
	}

	function gb(a) {
		return Math.round(a[0] / 84) + "-" + Math.round(a[1] / 84)
	}

	function Ta(a) {
		for(var b = {}, e, h = 0; 9 > h; h++)
			if(e = gb([a[0] + 84 * (h % 3 - 1), a[1] + 84 * (~~(h / 3) - 1)]), !b[e])
				for(b[e] = 1, e = ia[e], h = 0; e && h < e.length; h++)
					if(Ra(a[1] - e[h][1], a[0] - e[h][0]) < e[h][2] + a[2]) return e[h]
	}

	function p(a, b, q) {
		e[["strokeStyle", "fillStyle", "lineWidth"][b || 0]] = q || hb[a]
	}

	function ma(a, b, e, h, f) {
		k.bindFramebuffer(k.FRAMEBUFFER, a[0]);
		k.useProgram(e[0]);
		k.uniform1i(ha(e, "tex"), Jb(b));
		void 0 != h && k.uniform1f(ha(e, "time"), h);
		f && k.uniform3fv(ha(e, "colors"), f);
		k.drawArrays(k.TRIANGLES, 0, 6)
	}

	function ib(a, b) {
		for(var e = [], h = 0; h < b; h++) {
			var f = a.slice();
			f[5] = .05 * (h - b / 2) + a[5];
			e.push(S(f))
		}
		return e
	}

	function jb() {
		ia = {};
		Z = 21;
		n = 40;
		ea = !1;
		ja = 0;
		v = Z * n;
		T = [];
		Ua = .3;
		l = [(800 - v) / 2, (600 - v) / 2, 370, 270];
		F = [];
		f = [10.5 * n, 10.5 * n, 16, 0, 150, 0, 0, 12, 0, 0];
		ya = [
			[0, 1, 0, -1],
			[-1, 1, .5, 1]
		];
		U = [];
		oa = [];
		Va = "";
		kb = Math.PI / 2;
		aa = J = 0;
		wave = 1;
		E = [0, 0, 0, 0, 0, 0, 0, 0];
		ra = {
			500: [1, K],
			2500: [0, 10, 5, 10],
			8999: [5, "what are you doing?"],
			10500: [1, z],
			10800: [8, 2],
			11E3: [0, 5, 5, 10],
			18E3: [0, 15, 15, 10],
			18001: [5, ""],
			25E3: [0, 15, 5, 10],
			31E3: [0, 5, 15, 10],
			37E3: [0, 10, 11, 11],
			37500: [1, fa],
			46E3: [5, "are you trying to stop us?"],
			48500: [2, 10, 0, 0, 0, 10, 10, 10],
			49E3: [2, 10, 10, 10, 15, 10, 20, 10],
			49001: [4, z, 1],
			49002: [4, fa, 1],
			49003: [4, K, 1],
			49500: [8, 3],
			50004: [2,
				60, 60, 68, 55, 50, 45, 60
			],
			51E3: [4, z, 138],
			51001: [4, fa, 138],
			51002: [4, K, 138],
			51003: [5, "we are perfection"],
			52E3: [0, 4, 10, 11],
			53E3: [0, 14, 10, 10],
			55550: [5, ""],
			61E3: [0, 10, 16, 11],
			61003: [5, "we are creation"],
			66550: [5, ""],
			67E3: [0, 16, 10, 11],
			68E3: [0, 6, 10, 10],
			72E3: [0, 10, 4, 11],
			80501: [2, 1E3, 0, 0, 0, 0, 0, 10],
			83E3: [0, 10, 9, 12],
			83500: [1, L],
			95050: [5, "you must stop this"],
			99950: [5, "is inevitable!"],
			99980: [8, 4],
			1E5: [0, 10, 1, 12],
			103050: [5, ""],
			106E3: [0, 1, 10, 12],
			111E3: [0, 19, 10, 12],
			116E3: [0, 10, 19, 12],
			14E4: [8, 5],
			140001: [5, "can't you understand?"],
			141600: [0, 10, 12, 10],
			141601: [0, 12, 13, 10],
			141602: [0, 12, 15, 10],
			141603: [0, 10, 16, 10],
			141604: [0, 8, 15, 10],
			141605: [0, 8, 13, 10],
			145050: [5, ""],
			156800: [6, "stop"],
			156900: [6, "now"],
			157E3: [0, 10, 14, 13],
			18E4: [6, "you"],
			180100: [6, "are"],
			180200: [6, "the"],
			180300: [6, "glitch"],
			181E3: [8, 6],
			182E3: [7, fa],
			182050: [7, L],
			182100: [7, z],
			182150: [7, K],
			185100: [2, 300, 0, 300, 0, 0, 0, 0],
			187E3: [0, 10, 10, 14],
			189E3: [1, fa],
			189001: [1, L],
			189002: [1, z],
			189003: [1, K],
			300100: [1, K],
			305E3: [0, 10, 5, 10],
			308E3: [1, z],
			31E4: [0, 10, 6, 11],
			311E3: [1, K],
			315E3: [0, 14,
				6, 10
			],
			317E3: [0, 14, 14, 10],
			319E3: [0, 6, 14, 10],
			32E4: [0, 6, 6, 10],
			335E3: [0, 11, 11, 12],
			336E3: [0, 9, 11, 12],
			337E3: [0, 11, 9, 12],
			338E3: [0, 9, 9, 12],
			35E4: [0, 19, 19, 11],
			352E3: [0, 1, 19, 11],
			354E3: [0, 1, 1, 11],
			355E3: [0, 19, 1, 11],
			365E3: [0, 10, 8, 10],
			366E3: [0, 11, 9, 10],
			367E3: [0, 12, 10, 10],
			368E3: [0, 11, 11, 10],
			369E3: [0, 10, 12, 10],
			37E4: [0, 9, 11, 10],
			371E3: [0, 8, 10, 10],
			372E3: [0, 9, 9, 10],
			395E3: [0, 1, 1, 12],
			395001: [0, 1, 19, 12],
			395002: [0, 19, 19, 12],
			395003: [0, 20, 1, 12],
			395004: [0, 10, 10, 12],
			425E3: [0, 0, 10, 13],
			425001: [0, 20, 10, 13],
			570001: [0, 10, 10, 13]
		};
		Wa = void 0;
		for(var a = 0; a < Z; a++) {
			T.push([]);
			for(var b = 0; b < Z; b++) T[a].push([])
		}
		for(a = 0; a < Z - 1; a++) 10 != a && (ra[45E4 + 6E3 * a] = [0, a, a, 10], ra[453E3 + 6E3 * a] = [0, Z - a - 1, a, 10]);
		V = Object.keys(ra).map(function(a) {
			return parseInt(a)
		});
		fa.stop();
		L.stop();
		z.stop();
		K.stop();
		record = parseFloat(Ja.getItem("agar3sjs13k-record") || 0);
		for(a = 0; W && a < W.length; a++) W[a][3] = !1;
		Ka = !1;
		lb();
		mb()
	}

	function mb() {
		za && (ya = [
			[0, -.5, -.25, -1, -.5, -.4, -.5, -.25, 0, .25, .5, .4, .5, 1, .25, .5],
			[-.25, 0, -1, .25, .75, .5, .25, .2, .8, .2, .25, .5, .75, .25, -1, 0]
		], f[4] = 160, f[2] = 20, f[7] = 22);
		if(nb) {
			J = 3E5;
			wave = 7;
			for(var a = V.length - 1; 0 <= a; a--) 3E5 > V[a] && V.splice(a, 1)
		}
	}

	function M(a, b, q, h, f) {
		e.moveTo(a, b);
		e.lineTo(a + (h ? f : q), b + (h ? q : f))
	}

	function Xa(a, b) {
		M(a, 0, b, !0, 0);
		M(0, a, b, void 0, 0)
	}

	function ob() {
		N = .01
	}

	function Aa(a, b) {
		E[6] = 30;
		Ya = b || 30;
		aa = 10;
		sa = a
	}

	function pb() {
		return "I reached " + J.toFixed() + " " + (za ? "#evilMode " : "") + "points in #evilGlitch #js13k #js13kgames by @agar3s "
	}

	function w(a, b) {
		return Math.random() * (a || 1) + (b || 0)
	}

	function lb() {
		var a = w(10, 5);
		E = [a, a, a, w(10, 5), w(10, 5), w(10, 5), 0]
	}

	function La(a, b, e, h) {
		14 == h[2] && (e *= 2, O(Pb));
		ta.push([a, b, e, e, h])
	}

	function qb(a, b) {
		var e = ua([a[0] + 10 * Math.cos(Math.PI * b / 3), a[1] + 10 * Math.sin(Math.PI * b / 3), 4]);
		e[13] = a;
		e[9] = Ha(e, a);
		e[3] = e[9] + a[11];
		e[15] = 0;
		e[16] = 0;
		F.push(e)
	}

	function ua(a) {
		a = a.slice(0, 2).concat(Ma[a[2]].slice(0));
		if(12 == a[5] || 14 == a[5])
			for(var b = 0; 6 > b; b++) qb(a, b);
		return a
	}

	function Qb(a) {
		if(.99 < a) return 1;
		var b = 1 / a;
		return 100 * a % b > b / 2 ? 1 : 0
	}

	function Ba(a, b) {
		return a ? w(2 * b, -b) : 0
	}

	function Za(a, b, f) {
		e.moveTo(a[0] * f, b[0] * f);
		for(var h = 1; h < a.length; h++) e.lineTo(a[h] * f, b[h] * f);
		e.lineTo(a[0] * f, b[0] * f)
	}

	function $a(a, b, e, h, f, k) {
		for(var l = -h; l < h; l++) oa.push([a, b, w(kb * l, e), f || 60, k])
	}

	function rb(a) {
		Na || (Na = a);
		dt = Math.min(100, a - Na) / 1E3;
		Na = a;
		ja++;
		if(Ca) Da++, 30 < Da && (Da = 0);
		else if(Ea) {
			switch(ka) {
				case 90:
					Aa("what", 30);
					break;
				case 120:
					Aa("have", 30);
					break;
				case 150:
					Aa("you", 30);
					break;
				case 180:
					Aa("done?", 120);
					break;
				case 185:
					E = [100, 100, 100, 0, 0, 0, 0];
					break;
				case 215:
					E = [100, 100, 100, 100, 100, 100, 100];
					fa.stop();
					L.stop();
					L.D = 1;
					L.play();
					z.stop();
					z.D = 1;
					z.play();
					K.stop();
					break;
				case 320:
					L.stop();
					z.stop();
					L.D = 138;
					z.D = 138;
					sa = "";
					break;
				case 434:
					ba = 0
			}
			435 < ka && 1694 > ka && (sa = Rb[~~((ka - 435) / 180)]);
			1694 < ka && (Ea = !1, J = 3E5, wave = 7, F = [], U = [], za = !0, Ja.setItem("agar3sjs13k-gm", "qyui"), mb());
			ka++
		} else if(0 > E[6]) {
			a = dt;
			if(!ea) {
				t = a * f[4] * (0 < f[8] ? Ua : 1);
				var b = a * f[4] * (0 < f[8] ? 1.4 : 1);
				T[Math.round(f[1] / n)] && 1 == T[Math.round(f[1] / n)][Math.round(f[0] / n)] && (b -= .5);
				ca & da[65] && (f[0] -= b, f[0] < f[2] && (f[0] = f[2]), f[0] > l[2] && f[0] < v - l[2] && (l[0] += b), 32 < l[0] && (l[0] = 32));
				ca & da[87] && (f[1] -= b, f[1] < f[2] && (f[1] = f[2]), f[1] > l[3] && f[1] < v - l[3] && (l[1] += b), 27 < l[1] && (l[1] = 27));
				ca & da[83] && (f[1] += b, f[1] > v - f[2] && (f[1] = v - f[2]), f[1] > l[3] && f[1] < v - l[3] && (l[1] -= b), -272 > l[1] && (l[1] = -272));
				ca & da[68] && (f[0] += b, f[0] > v - f[2] && (f[0] = v - f[2]), f[0] > l[2] && f[0] < v - l[2] && (l[0] -= b), -67 > l[0] && (l[0] = -67));
				f[3] = Ha([f[0] + l[0], f[1] + l[1]], B);
				f[5] += 25 * t * (8 * B[2] + 1);
				f[5] %= 360;
				if(Ta(f)) {
					O(Sb);
					$a(f[0], f[1], f[2], 10, 80, 6);
					ya = [
						[],
						[]
					];
					ea = !0;
					fa.stop();
					L.stop();
					z.stop();
					K.stop();
					W[0][3] = !0;
					t = 30 * dt;
					if(Ka = J > record) record = J, Ja.setItem("agar3sjs13k-record", J), W[1][3] = !0, W[2][3] = !0;
					ja = 0
				}
				B[2] && 0 >= f[6] && 0 >= f[8] ? (U.push([f[0] + Ba(1, 2 + f[7] / 30), f[1] + Ba(1, 2 + f[7] / 30), 2, f[3] + Ba(1, .05 + .001 * f[7])]), O(sb[~~w(sb.length)]), f[6] = 1 / f[7]) : f[6] -= a;
				B[3] && 0 >= f[8] && 0 >= f[9] ? (O(tb), f[8] = .55, f[9] = 1.2) : (f[8] -= a, f[9] -= a)
			}
			a = U.length - 1;
			for(; 0 <= a; a--) {
				b = U[a];
				b[0] += Math.cos(b[3]) * t * b[2];
				b[1] += Math.sin(b[3]) * t * b[2];
				(-20 > b[0] || b[0] > v + 20 || -20 > b[1] || b[1] > v + 20) && U.splice(a, 1);
				var q = Ta(b);
				q && (0 < --q[6] && $a(b[0], b[1], -b[3], 2, 10, 9), U.splice(a, 1), q[4] = 200, 9 < q[5] && O(ub[~~w(ub.length)]))
			}
			for(a = 0; a < oa.length; a++) b = oa[a], b[0] += Math.cos(b[2]) * w(3, 2), b[1] += Math.sin(b[2]) * w(3, 2), 0 > --b[3] && oa.splice(a, 1);
			0 < ba && (ba -= .1);
			ia = {};
			for(a = F.length - 1; 0 <= a; a--) a: if(b = F[a], q = a, 0 >= b[6]) {
				if(F.splice(q, 1), 5 != b[5])
					if(14 == b[5] && (Ea = !0), $a(b[0], b[1], b[2], Ma[b[5]][0], 2 * Ma[b[5]][0], b[5] + 24), 9 < b[5]) {
						for(var q = b[0], h = b[1], b = b[10], m = ~~(q / n), x = ~~(h / n), X = Math.ceil(b / n), G = x - X; G < x + X; G++)
							if("undefined" != typeof T[G])
								for(var Y = m - X; Y < m + X; Y++)
									if(1 == T[G][Y] || Ra((G + .5) * n - h, (Y + .5) * n - q) <= b) T[G][Y] = 0;
						ba = 4;
						O(Tb)
					} else O(Ub)
			} else {
				0 < b[4] && (b[4] -= 50);
				if(10 > b[5]) {
					0 < b[10] * (b[9] - b[3]) && (b[3] = 2 == b[5] ? Ha(b, Wa || [0, 0]) : 4 == b[5] ? b[3] + (b[9] + b[11]) : Ha(b, f), b[10] = b[3] > b[9] ? b[11] : -b[11]);
					h = Ta(b);
					b[9] = 4 == b[5] ? b[9] + b[10] * t : 3 != b[5] || h && 3 == h[5] ? b[9] + (h ? -1 : 1) * b[10] : b[9] + b[10];
					5 == b[5] && (b[6] -= t / 10);
					if(5 < b[5] && 10 > b[5] && (b[13] -= dt, 0 > b[13])) {
						b = [(~~(b[0] / n) + .5) * n, (~~(b[1] / n) + .5) * n, b[5] + 4];
						La(b[0], b[1], 1, b);
						F.splice(q, 1);
						break a
					}
					4 != b[5] ? (b[0] += Math.cos(b[9]) * t * b[12], b[1] += Math.sin(b[9]) * t * b[12]) : (1 > b[13][6] && (b[10] *= .99), b[15] = 2 * n * (-Math.cos(b[16]) + 1.2), b[16] += t / 200, b[0] = b[13][0] + Math.cos(b[9]) * b[15], b[1] = b[13][1] + Math.sin(b[9]) * b[15])
				} else {
					b[9] -= t;
					12 <= b[5] && (b[3] += b[12] * t);
					if(0 > b[9] && !ea) Vb[b[5]](b);
					b[10] += dt * b[11];
					q = b[0];
					h = b[1];
					m = b[10];
					x = ~~(q / n);
					X = ~~(h / n);
					G = Math.ceil(m / n);
					for(Y = X - G; Y < X + G; Y++)
						if("undefined" != typeof T[Y])
							for(var u = x - G; u < x + G; u++) 1 == T[Y][u] || Ra((Y + .5) * n - h, (u + .5) * n - q) >= m || (T[Y][u] = 1)
				}
				q = gb(b);
				ia[q] = ia[q] || [];
				ia[q].push(b)
			}
			if(0 < V.length && J > V[0]) switch(a = ra[V.splice(0, 1)[0]], a.splice(0, 1)[0]) {
				case 0:
					a[0] = (a[0] + .5) * n;
					a[1] = (a[1] + .5) * n;
					La(a[0], a[1], 1, a);
					break;
				case 1:
					a[0].play();
					break;
				case 2:
					E = a;
					break;
				case 3:
					O(a[0]);
					break;
				case 4:
					a[0].D = a[1];
					138 == a[1] && (a[0].stop(), a[0].play());
					break;
				case 5:
					Va = a[0];
					break;
				case 6:
					Aa(a[0]);
					break;
				case 7:
					a[0].stop();
					break;
				case 8:
					wave = a[0]
			} else 0 == V.length && (ab++ >= vb.length && (ab = 0), ra[J + 5E3] = [0, ~~w(21), ~~w(21), vb[ab]], V.push(J + 5E3));
			for(a = 0; a < ta.length; a++) b = ta[a], b[2] -= dt, 0 > b[2] && (F.push(ua(b[4])), 9 < b[4][2] && (aa = 10, O(Wb)), 3 == b[4][2] && (Wa = F[F.length - 1]), ta.splice(a, 1))
		}
		if(Ca || ea) switch(ja) {
			case 240:
			case 280:
			case 500:
				lb();
				O(Xb);
				break;
			case 700:
				ja = 0
		}
		for(a = 0; a < W.length; a++) b = W[a], !b[3] || B[0] < b[0] || B[0] > b[0] + b[2] || B[1] < b[1] || B[1] > b[1] + 42 ? b[6] = b[7] = !1 : (b[7] = !0, 1 == B[2] ? b[6] = !0 : 0 == B[2] && b[6] && (b[6] = !1, b[8]()));
		e.save();
		if(Ca) {
			e.save();
			e.beginPath();
			p(23, 1);
			e.fillRect(0, 0, 800, 600);
			p(0);
			e.beginPath();
			for(a = 0; 10 > a; a++) b = cb(30 * a + Da), p(1), M(0, b + .5, 800, void 0, 0);
			e.stroke();
			e.beginPath();
			for(a = 0; 10 > a; a++) b = cb(30 * a + Da), p(2), M(0, 600 - b - .5, 800, void 0, 0);
			e.stroke();
			p(2);
			e.beginPath();
			M(0, 240, 800, void 0, 0);
			M(400, 240, -240, !0, 0);
			e.stroke();
			p(1);
			e.beginPath();
			M(0, 360, 800, void 0, 0);
			M(400, 360, 240, !0, 0);
			e.stroke();
			e.beginPath();
			for(a = 1; a < 800 / 60; a++) b = a * a * 5 + 25, p(2), M(30 * a + 400, 240, -240, !0, b), M(30 * -a + 400, 240, -240, !0, -b);
			e.stroke();
			e.beginPath();
			for(a = 1; a < 800 / 60; a++) b = a * a * 5 + 25, p(1), M(30 * a + 400, 360, 240, !0, b), M(30 * -a + 400, 360, 240, !0, -b);
			e.stroke();
			va ? (C("controls", 400, 130, 12, [0, 16]), C("move             awsd", 400, 251, 12, [0, 0]), C("fire       left click", 400, 290, 12, [0, 0]), C("warptime  right click", 400, 330, 12, [0, 0])) : (C("winners don't use drugs", 401, 50, 9, [0, 0]), C("evil glitch", 400, 270 - 50 * N, 30 * (1 + N), [0, 9, 0, 9]));
			C("made by agar3s", 401, 520, 9, [0, 10]);
			e.closePath();
			e.fill();
			e.stroke();
			e.restore()
		} else if(!Oa) {
			p(7, 1);
			e.fillRect(0, 0, 800, 600);
			p(-1, 1, "rgba(" + ~~w(180, 0) + "," + ~~w(185, 0) + "," + ~~w(185, 0) + "," + w(0, 1) + ")");
			for(a = 0; 6 > a; a++) e.fillRect(~~w(800), ~~w(600), 2, 2);
			e.save();
			e.beginPath();
			D = ea ? [0, 0] : [Ba(B[2] || 0 < ba, ba + 2), Ba(B[2] || 0 < ba, ba + 2)];
			p(-1, 1, "rgba(7,8,12," + (.2 - (0 < f[8] ? .1 : 0)) + ")");
			e.translate(l[0] + D[0], l[1] + D[1]);
			e.fillRect(0, 0, v, v);
			p(1);
			e.beginPath();
			for(a = 0; a <= Z; a++) Xa(a * n - .5, v);
			e.stroke();
			e.beginPath();
			p(5);
			for(a = 0; a <= Z; a++) Xa(a * n + .5, v);
			e.stroke();
			e.restore();
			e.save();
			e.beginPath();
			p(8, 1);
			p(2);
			for(b = 0; b < Z; b++)
				for(a = 0; a < Z; a++) 0 != T[b][a] && (e.fillRect(a * n + l[0] + D[0], b * n + l[1] + D[1], n, n), e.strokeRect(a * n + l[0] + D[0] - .5, b * n + l[1] + D[1] - .5, n + 2, n + 2));
			e.stroke();
			e.beginPath();
			p(2);
			for(b = 0; b < Z; b++)
				for(a = 0; a < Z; a++) 0 != T[b][a] && e.strokeRect(a * n + l[0] + D[0] + .5, b * n + l[1] + D[1] + .5, n, n);
			e.fill();
			e.closePath();
			e.restore();
			e.save();
			e.beginPath();
			for(a = 0; a < ta.length; a++) m = ta[a], h = m[4][2], b = Ma[h][0], q = m[2], q /= m[3], q = 1 * q * (q - 2) + 1, x = m[0] + l[0] + D[0], m = m[1] + l[1] + D[1], 14 == h ? (h = x, e.translate(h, m), e.beginPath(), p(-1, 1, "rgba(210,0,0,0.9)"), e.arc(0, 0, v * (1 - q), 0, 2 * Math.PI), e.stroke(), e.fill(), e.beginPath(), p(0), .3 > q ? (e.moveTo(-b * q / .3, 0), e.lineTo(b * q / .3, 0)) : (p(0, 1), e.bezierCurveTo(-b, 0, 0, -b * q / 3.5, b, 0), e.bezierCurveTo(b, 0, 0, b * q / 3.5, -b, 0), e.fill()), e.closePath(), e.translate(-h, -m)) : (p(-1, 0, "rgba(38,82,255," + q + ")"), e.fillRect(x - q * b, m - q * b, q * b * 2, q * b * 2));
			e.closePath();
			e.fill();
			e.stroke();
			e.restore();
			e.save();
			e.translate(f[0] + l[0], f[1] + l[1]);
			e.rotate(f[3] + Math.PI / 2);
			p(-1, 2, 2);
			p(6);
			e.beginPath();
			Za(ya[0], ya[1], f[2]);
			e.closePath();
			e.stroke();
			e.restore();
			e.save();
			for(a = 0; a < F.length; a++)
				if(h = F[a], !(20 > h[0] + l[0] || h[0] + l[0] > R - 20 || 20 > h[1] + l[1] || h[1] + l[1] > H - 20)) {
					b = h[0] + l[0] + D[0] + (.5 < w() ? 1 : -1) * h[4] / 40;
					q = h[1] + l[1] + D[1] + (.5 < w() ? 1 : -1) * h[4] / 40 - (9 < h[5] ? 5 * Math.sin(ja / 50 % (2 * Math.PI)) + 5 : 0);
					e.translate(b, q);
					e.beginPath();
					if(10 > h[5]) p(h[5] + 24), p(-1, 2, 2), e.rotate(h[9]), Za(h[7], h[8], h[2]), e.rotate(-h[9]);
					else if(14 == h[5]) {
						m = "hsla(" + 20 * h[3] + ",50%,60%, 0.5)";
						p(-1, 2, 2);
						e.beginPath();
						p(-1, 0, 0 < h[4] ? hb[3] : m);
						m = h[2] / 3.5;
						e.arc(0, 0, m / 2, 0, 2 * Math.PI, !1);
						e.stroke();
						e.beginPath();
						e.bezierCurveTo(-m, 0, 0, -m, m, 0);
						e.bezierCurveTo(m, 0, 0, m, -m, 0);
						e.stroke();
						e.rotate(h[3]);
						for(x = 0; 6 > x; x++) X = ga[2 * x], G = ga[2 * x + 1], e.beginPath(), e.arc(4 * X * m, 4 * G * m, m, 0, 2 * Math.PI, !1), e.stroke(), e.beginPath(), e.arc(2 * X * m, 2 * G * m, m, 0, 2 * Math.PI, !1), e.stroke(), e.beginPath(), e.moveTo(X * m * 4, G * m * 4), e.lineTo(4 * m * ga[(2 * x + 2) % 12], 4 * m * ga[(2 * x + 3) % 12]), e.lineTo(4 * m * ga[(2 * x + 6) % 12], 4 * m * ga[(2 * x + 7) % 12]), e.moveTo(X * m * 2, G * m * 2), e.lineTo(2 * m * ga[(2 * x + 2) % 12], 2 * m * ga[(2 * x + 3) % 12]), e.lineTo(2 * m * ga[(2 * x + 6) % 12], 2 * m * ga[(2 * x + 7) % 12]), e.stroke();
						e.beginPath();
						e.rotate(-h[3])
					} else
						for(p(-1, 2, 2), m = (Fa[h[5]] - h[9]) / Fa[h[5]], m = 0 < h[4] ? -55 : ~~(200 * m) * wb[m.toFixed(4)], p(16), x = 0; x < h[7].length; x++) X = h[7][x], G = h[8][x], Y = h[2], u = [80 + h[4], 55 + m, 130 + ~~(m / 2), 0 < h[4] ? .9 : .2], e.beginPath(), p(-1, 1, "rgba(" + u + ")"), Za(X, G, Y), e.closePath(), e.fill(), e.stroke();
					e.closePath();
					e.stroke();
					e.translate(-b, -q)
				}
			e.closePath();
			e.restore();
			e.save();
			p(9, 1);
			for(a = 0; a < U.length; a++) b = U[a], 20 > b[0] + l[0] || b[0] + l[0] > R - 20 || 20 > b[1] + l[1] || b[1] + l[1] > H - 20 || (e.beginPath(), e.arc(b[0] + l[0], b[1] + l[1], b[2], 0, 2 * Math.PI, !1), e.closePath(), e.fill());
			e.restore();
			e.save();
			for(a = 0; a < oa.length; a++) b = oa[a], 5 > b[0] + l[0] || b[0] + l[0] > R - 5 || 5 > b[1] + l[1] || b[1] + l[1] > H - 5 || (e.beginPath(), p(b[4], 1), e.arc(b[0] + l[0] + D[0], b[1] + l[1] + D[1], 2, 0, 2 * Math.PI, !1), e.closePath(), e.fill());
			e.restore();
			e.save();
			C(Va, 401, 501, 14, [26, 21, 21]);
			ea ? (p(22, 1), e.fillRect(0, 0, v, v), za && C("evil mode", 400, 80, 22, [0, 16]), Ka ? (C("-new record-", 400, 240, 22, [10, 18]), C("-share it-", 400, 400, 14, [24, 18])) : C("game over", 400, 240, 20, [0, 13]), C(J.toFixed(0), 400, 160, Ka ? 20 : 16, [0, 9])) : (C(6 < wave ? "evil" : wave + "/6", 400, 60, 9, [0, 3]), C(J.toFixed(0), 750, 60, 18, [32, 9], 1), C(J > record ? "record" : record.toFixed(0), 750, 110, 9, [24, 3], 1));
			e.restore()
		}
		Oa || Ea || (e.save(), e.beginPath(), p(-1, 2, 2), e.translate(B[0], B[1]), p(6), e.translate(-10, -10), Xa(10, 20), e.stroke(), e.closePath(), e.restore());
		e.save();
		for(a = 0; a < W.length; a++) b = W[a], b[3] && (q = b[7] ? 14 : b[4], p(q), p(-1, 2, 2), e.strokeRect(b[0], b[1], b[2], 42), C(b[5], b[0] + b[2] / 2, b[1] + 9, 12, [0, q]));
		e.restore();
		Oa ? (e.save(), e.beginPath(), p(2, 1), e.fillRect(0, 0, 800, 600), C(sa, 430, 180, 5 > sa.length ? 120 : 70, [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]), e.closePath(), e.fill(), e.restore()) : !Ea || 300 > ka || (a = [0, 0, 0, 0], e.save(), e.beginPath(), 436 > ka ? (p(-1, 1, "rgba(0,0,0," + (1 - (436 - ka) / 120) + ")"), e.fillRect(0, 0, 800, 600)) : (p(23, 1), e.fillRect(0, 0, 800, 600), C(sa, 400, 250, 16, a)), e.closePath(), e.fill(), e.restore());
		0 < N && (N += .05, .51 == N && O(Yb));
		1 < N && (Ca = !1, N = 0, jb());
		0 < N && 1 > N && (p(-1, 1, "rgba(220,220,220," + N + ")"), e.fillRect(0, 0, 800, 600));
		(Oa = 0 < Ya) && --Ya;
		e.restore();
		a = g;
		k.bindTexture(k.TEXTURE_2D, xb);
		k.texImage2D(k.TEXTURE_2D, 0, k.RGBA, k.RGBA, k.UNSIGNED_BYTE, a);
		aa--;
		for(a = 0; a < E.length; a++) E[a] --;
		ma(pa, xb, yb, ja / 60 % 180, [0 < aa + 1 || 0 < E[0] ? 1 : 0, 0 < aa + 2 || 0 < E[1] ? 1 : 0, 0 < aa || 0 < E[2] ? 1 : 0]);
		ma(wa, pa[1], zb, 0 < aa || 0 < E[3] ? 15 : 0);
		ma(pa, wa[1], Ab, 0 < aa + 1 || 0 < E[4] ? 1 : 0);
		ma(wa, pa[1], Bb, 0 < E[7] && 0 == ja % 3 ? 0 : 1);
		ma(pa, wa[1], Cb, 0 < aa || 0 < E[5] ? 9 : 1);
		ma(wa, pa[1], Db, ja);
		ma(pa, wa[1], Eb);
		k.bindFramebuffer(k.FRAMEBUFFER, null);
		k.drawArrays(k.TRIANGLES, 0, 6);
		k.flush();
		ea || Ca || (J += 1E3 * dt * (0 < f[8] ? Ua : 1));
		requestAnimationFrame(rb)
	}
	var Sa = new function() {
			this.G = new Kb;
			var a, b, e, h, f, k, l, n, p, u, v, B;
			this.r = function() {
				var a = this.G;
				h = 100 / (a.f * a.f + .001);
				f = 100 / (a.g * a.g + .001);
				k = 1 - a.h * a.h * a.h * .01;
				l = -a.i * a.i * a.i * 1E-6;
				a.a || (v = .5 - a.n / 2, B = 5E-5 * -a.o);
				n = 1 + a.l * a.l * (0 < a.l ? -.9 : 10);
				p = 0;
				u = 1 == a.m ? 0 : (1 - a.m) * (1 - a.m) * 2E4 + 32
			};
			this.V = function() {
				this.r();
				var f = this.G;
				a = f.b * f.b * 1E5;
				b = f.c * f.c * 1E5;
				e = f.e * f.e * 1E5 + 12;
				return 3 * ((a + b + e) / 3 | 0)
			};
			this.U = function(C, D) {
				var r = this.G,
					E = 1 != r.s || r.v,
					z = r.v * r.v * .1,
					F = 1 + 3E-4 * r.w,
					A = r.s * r.s * r.s * .1,
					I = 1 + 1E-4 * r.t,
					J = 1 != r.s,
					O = r.x * r.x,
					R = r.g,
					H = r.q || r.r,
					T = r.r * r.r * r.r * .2,
					K = r.q * r.q * (0 > r.q ? -1020 : 1020),
					L = r.p ? ((1 - r.p) * (1 - r.p) * 2E4 | 0) + 32 : 0,
					W = r.d,
					S = r.j / 2,
					Z = r.k * r.k * .01,
					M = r.a,
					N = a,
					fa = 1 / a,
					ga = 1 / b,
					ha = 1 / e,
					r = 5 / (1 + r.u * r.u * 20) * (.01 + A);.8 < r && (r = .8);
				for(var r = 1 - r, aa = !1, ja = 0, U = 0, V = 0, ka = 0, ea = 0, ba, da = 0, na, P = 0, Q, ma = 0, y, oa = 0, ca, pa = 0, la = Array(1024), ia = Array(32), qa = la.length; qa--;) la[qa] = 0;
				for(qa = ia.length; qa--;) ia[qa] = w(2, -1);
				for(qa = 0; qa < D; qa++) {
					if(aa) return qa;
					L && ++oa >= L && (oa = 0, this.r());
					u && ++p >= u && (u = 0, h *= n);
					k += l;
					h *= k;
					h > f && (h = f, 0 < R && (aa = !0));
					na = h;
					0 < S && (pa += Z, na *= 1 + Math.sin(pa) * S);
					na |= 0;
					8 > na && (na = 8);
					M || (v += B, 0 > v ? v = 0 : .5 < v && (v = .5));
					if(++U > N) switch(U = 0, ++ja) {
						case 1:
							N = b;
							break;
						case 2:
							N = e
					}
					switch(ja) {
						case 0:
							V = U * fa;
							break;
						case 1:
							V = 1 + 2 * (1 - U * ga) * W;
							break;
						case 2:
							V = 1 - U * ha;
							break;
						case 3:
							V = 0, aa = !0
					}
					H && (K += T, Q = K | 0, 0 > Q ? Q = -Q : 1023 < Q && (Q = 1023));
					E && F && (z *= F, 1E-5 > z ? z = 1E-5 : .1 < z && (z = .1));
					ca = 0;
					for(var ra = 8; ra--;) {
						P++;
						if(P >= na && (P %= na, 3 == M))
							for(ba = ia.length; ba--;) ia[ba] = w(2, -1);
						switch(M) {
							case 0:
								y = P / na < v ? .5 : -.5;
								break;
							case 1:
								y = 1 - P / na * 2;
								break;
							case 2:
								y = P / na;
								y = 6.28318531 * (.5 < y ? y - 1 : y);
								y = 1.27323954 * y + .405284735 * y * y * (0 > y ? 1 : -1);
								y = .225 * ((0 > y ? -1 : 1) * y * y - y) + y;
								break;
							case 3:
								y = ia[Math.abs(32 * P / na | 0)]
						}
						E && (ba = da, A *= I, 0 > A ? A = 0 : .1 < A && (A = .1), J ? (ea += (y - da) * A, ea *= r) : (da = y, ea = 0), da += ea, ka += da - ba, y = ka *= 1 - z);
						H && (la[ma % 1024] = y, y += la[(ma - Q + 1024) % 1024], ma++);
						ca += y
					}
					ca *= .125 * V * O;
					C[qa] = 1 <= ca ? 32767 : -1 >= ca ? -32768 : 32767 * ca | 0
				}
				return D
			}
		},
		xa, Pa, S, O,
		Ia = window.AudioContext || window.webkitAudioContext;
	if(Ia) {
		xa = new Ia;
		Pa = xa.createDynamicsCompressor();
		var bb = xa.createGain();
		bb.gain.value = window.chrome ? .2 : .4;
		Pa.connect(bb);
		bb.connect(xa.destination);
		S = function(a) {
			var b = [];
			Lb(a, xa, function(a) {
				b.push(a)
			});
			return b
		};
		O = function(a) {
			if(a[0]) {
				var b = xa.createBufferSource();
				b.context.sampleRate += ~~w(500);
				b.buffer = a[0];
				b.start(0);
				b.connect(Pa);
				setTimeout(function() {
					b.disconnect(Pa)
				}, 1E3 * a[0].duration + 300)
			}
		}
	} else S = O = function() {};
	var Zb = 440 * Math.pow(Math.pow(2, 1 / 12), -9),
		$b = /^[0-9.]+$/,
		Mb = /\s+/,
		ac = /(\d+)/,
		Fb = {};
	"B#-C C#-Db D D#-Eb E-Fb E#-F F#-Gb G G#-Ab A A#-Bb B-Cb".split(" ").forEach(function(a, b) {
		a.split("-").forEach(function(a) {
			Fb[a] = b
		})
	});
	la.M = function(a) {
		a = a.split(ac);
		return Zb * Math.pow(Math.pow(2, 1 / 12), Fb[a[0]]) * Math.pow(2, (a[1] || 4) - 4)
	};
	la.L = function(a) {
		return $b.test(a) ? parseFloat(a) : a.toLowerCase().split("").reduce(function(a, e) {
			return a + ("w" === e ? 4 : "h" === e ? 2 : "q" === e ? 1 : "e" === e ? .5 : "s" === e ? .25 : 0)
		}, 0)
	};
	A.prototype.J = function() {
		var a = this.gain = this.C.createGain();
		[
			["bass", 100],
			["mid", 1E3],
			["treble", 2500]
		].forEach(function(b, e) {
			e = this[b[0]] = this.C.createBiquadFilter();
			e.type = "peaking";
			e.frequency.value = b[1];
			a.connect(a = e)
		}.bind(this));
		a.connect(this.C.destination)
	};
	A.prototype.push = function() {
		Array.prototype.forEach.call(arguments, function(a) {
			this.B.push(a instanceof la ? a : new la(a))
		}.bind(this));
		return this
	};
	A.prototype.createOscillator = function() {
		this.stop();
		this.A = this.C.createOscillator();
		this.K ? this.A.setPeriodicWave(this.C.createPeriodicWave.apply(this.C, this.K)) : this.A.type = this.W || "square";
		this.A.connect(this.gain);
		return this
	};
	A.prototype.R = function(a, b) {
		var e = 60 / this.D * this.B[a].duration,
			f = e * (1 - (this.F || 0));
		this.H(this.B[a].frequency, b);
		this.I && this.B[a].frequency && this.S(a, b, f);
		this.H(0, b + f);
		return b + e
	};
	A.prototype.N = function(a) {
		return this.B[a < this.B.length - 1 ? a + 1 : 0]
	};
	A.prototype.O = function(a) {
		return a - Math.min(a, 60 / this.D * this.I)
	};
	A.prototype.S = function(a, b, e) {
		var f = this.N(a);
		this.H(this.B[a].frequency, b + this.O(e));
		this.P(f.frequency, b + e)
	};
	A.prototype.H = function(a, b) {
		this.A.frequency.setValueAtTime(a, b)
	};
	A.prototype.P = function(a, b) {
		this.A.frequency.linearRampToValueAtTime(a, b)
	};
	A.prototype.play = function(a) {
		a = "number" === typeof a ? a : this.C.currentTime;
		this.createOscillator();
		this.A.start(a);
		this.B.forEach(function(b, e) {
			a = this.R(e, a)
		}.bind(this));
		this.A.stop(a);
		this.A.onended = this.loop ? this.play.bind(this, a) : null;
		return this
	};
	A.prototype.stop = function() {
		this.A && (this.A.onended = null, this.A.disconnect(), this.A = null);
		return this
	};
	var Nb = [8767,
			518, 1115, 1039, 1126, 1133, 1149, 7, 1151, 1135, 5123, 1143, 5391, 57, 4367, 121, 113, 1085, 1142, 4361, 30, 2672, 56, 694, 2230, 63, 1139, 2111, 3187, 1133, 4353, 62, 8752, 10294, 10880, 4736, 8713, 0, 16, 1088, 256, 8704
		],
		Ob = [function(a, b, e, f, k, l) {
			b += (f + l) * a.length / 2;
			fb(a, b, e, f, k, l)
		}, fb],
		ia = {},
		Gb = {
			preserveDrawingBuffer: !0
		},
		k = c.getContext("webgl", Gb) || c.getContext("experimental-webgl", Gb),
		e = g.getContext("2d"),
		R = 800,
		H = 600,
		Ja = localStorage,
		D = [0, 0],
		aa = 0,
		ja = 0,
		E = [0, 0, 0, 0, 0, 0, 0],
		za = !1,
		Hb = !!Ja.getItem("agar3sjs13k-gm"),
		nb = !1;
	d.style.webkitTransformOrigin = d.style.transformOrigin = "0 0";
	g.width = c.width = R;
	g.height = c.height = H;
	c.style.top = "0px";
	c.style.left = "0px";
	document.oncontextmenu = function(a) {
		a.preventDefault()
	};
	k.viewport(0, 0, R, H);
	k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL, !0);
	var bc = k.createBuffer();
	k.bindBuffer(k.ARRAY_BUFFER, bc);
	k.bufferData(k.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), k.STATIC_DRAW);
	var Db = Q("precision highp float;uniform vec2 dim;uniform sampler2D tex;varying vec2 uv;uniform float time;uniform vec3 colors;void main(){vec2 a=uv*dim;vec4 b=texture2D(tex,uv);vec4 c=vec4(.0);float d=.02*sin(time)+.3;float e=.03;vec4 f=texture2D(tex,uv+vec2((-15./dim.x)*d,0));for(int g=0;g<9;g++){float h=float(mod(float(g),4.));float i=float(g/3);vec2 j=vec2(a.x+h,a.y+i);vec2 k=vec2(a.x-h,a.y+i);vec2 l=vec2(a.x+h,a.y-i);vec2 m=vec2(a.x-h,a.y-i);c+=texture2D(tex,j/dim)*e;c+=texture2D(tex,k/dim)*e;c+=texture2D(tex,l/dim)*e;c+=texture2D(tex,m/dim)*e;}b+=c;vec4 n=texture2D(tex,uv+vec2((8./dim.x)*d,0));vec4 o=texture2D(tex,uv+vec2((-7.5/dim.x)*d,0));float p=max(1.,sin(uv.y*dim.y*1.2)*2.5)*d;b.r=b.r+n.r*p;b.b=b.b+f.b*p;b.g=b.g+o.g*p;vec2 q=uv*sin(time);float r=fract(sin(dot(q.xy,vec2(12.,78.)))*43758.);vec3 s=vec3(r);b.rgb=mix(b.rgb,s,.015);gl_FragColor.rgba=b;}");
	k.uniform2f(ha(Db, "dim"), R, H);
	var Eb = Q("precision highp float;uniform vec2 dim;uniform sampler2D tex;varying vec2 uv;uniform float time;uniform vec3 colors;void main(){vec2 a=uv*dim;a-=dim/2.;float b=length(a);if(b<600.){float c=b/600.;a*=mix(1.,smoothstep(0.0,600./b,c),.125);}a+=dim/2.;vec4 d=texture2D(tex,a/dim);float e=distance(uv,vec2(.5,.5));d.rgb*=smoothstep(.8,.2*.8,e);gl_FragColor=d;}");
	k.uniform2f(ha(Eb, "dim"), R, H);
	var yb = Q("precision highp float;uniform vec2 dim;uniform sampler2D tex;varying vec2 uv;uniform float time;uniform vec3 colors;void main(){float a=sin(time);vec4 b=texture2D(tex,uv);vec4 c=texture2D(tex,uv+vec2((-15./dim.x),0));vec4 d=texture2D(tex,uv+vec2((15./dim.x),0));vec4 e=texture2D(tex,uv+vec2((-7.5/dim.x),0));if(colors.r==1.){b.r=b.r+d.r*max(1.,sin(uv.y*dim.y*1.2))*a;}if(colors.g==1.){b.b=b.b+c.b*max(1.,sin(uv.y*dim.y*1.2))*a;}if(colors.b==1.){b.g=b.g+e.g*max(1.,sin(uv.y*dim.y*1.2))*a;}gl_FragColor.rgba=b.rgba;}");
	k.uniform2f(ha(yb, "dim"), R, H);
	var zb = Q("precision highp float;uniform vec2 dim;uniform sampler2D tex;varying vec2 uv;uniform float time;uniform vec3 colors;void main(){float a=5.;float b=.5;vec2 c=uv*dim;vec2 d=c+vec2(floor(sin(c.y/a*time+time*time))*b*time,0);d=d/dim;vec4 e=texture2D(tex,d);gl_FragColor.rgba=e.rgba;}");
	k.uniform2f(ha(zb, "dim"), R, H);
	var Ab = Q("precision highp float;uniform vec2 dim;uniform sampler2D tex;varying vec2 uv;uniform float time;uniform vec3 colors;void main(){float a=.3;float b=.3;float c=10.*time;float d=10.*time;float e=dim.x;float f=dim.y;vec2 g=uv*dim;vec2 h=vec2(max(3.,min(float(e),g.x+sin(g.y/(153.25*a*a)*a+a*c+b*3.)*d)),max(3.,min(float(f),g.y+cos(g.x/(251.57*a*a)*a+a*c+b*2.4)*d)-3.));vec4 i=texture2D(tex,h/dim);gl_FragColor.rgba=i.rgba;}");
	k.uniform2f(ha(Ab, "dim"), R, H);
	var Bb = Q("precision highp float;uniform vec2 dim;uniform sampler2D tex;varying vec2 uv;uniform float time;uniform vec3 colors;void main(){vec4 a=texture2D(tex,uv);if(time==.0){gl_FragColor.rgba=a.bgra;}else{gl_FragColor.rgba=a.rgba;}}");
	k.uniform2f(ha(Bb, "dim"), R, H);
	var Cb = Q("precision highp float;uniform vec2 dim;uniform sampler2D tex;varying vec2 uv;uniform float time;uniform vec3 colors;void main(){vec2 a=uv*dim;vec2 b=vec2(3.+floor(a.x/time)*time,a.y);vec4 c=texture2D(tex,b/dim);gl_FragColor.rgba=c.rgba;}");
	k.uniform2f(ha(Cb, "dim"), R, H);
	var pa = eb(),
		wa = eb(),
		xb = db(),
		hb = "#FFF;rgba(40,77,153,0.6);rgba(234,34,37,0.6);rgba(180,0,50,0.3);#F952FF;rgba(0,77,153,0.6);rgb(72,255,206);rgba(0,0,0,0.1);rgba(7,8,12,0.2);rgb(40,145,160);#F66;#69F;#32F;#6FF;#066;#0FF;rgba(235,118,71,0.8);#559;#F6F;#2F2;#000;#973;rgba(0,0,0,0.71);rgb(2,1,2);rgba(255,102,192,0.8);rgba(255,102,102,0.8);rgba(252,233,128,0.8);rgba(150,127,254,0.8);rgba(179,72,108,0.8);rgba(179,88,52,0.8);rgba(128,108,26,0.8);rgba(128,155,15,0.8);rgba(128,131,51,0.8);hsla(324,50%, 60%, 0.88);hsla(360,50%, 60%, 0.88);hsla(10,50%, 60%, 0.88);hsla(20,50%, 60%, 0.88);hsla(30,50%, 60%, 0.88);rgba(7,8,12,0.2)".split(";"),
		B = [0, 0, 0];
	c.onmousedown = function(a) {
		B[2] = 3 == a.which ? 0 : 1;
		B[3] = 3 == a.which ? 1 : 0;
		a.preventDefault()
	};
	c.onmouseup = function(a) {
		B[2] = 0;
		B[3] = 0;
		a.preventDefault()
	};
	c.onmousemove = function(a) {
		0 < E[6] || (B[0] = 800 * a.offsetX / c.offsetWidth, B[1] = 600 * a.offsetY / c.offsetHeight)
	};
	var ca = 0,
		da = {
			65: 1,
			87: 2,
			68: 4,
			83: 8
		};
	document.onkeydown = function(a) {
		var b = a.keyCode || a.which;
		da[b] && (ca |= da[b], a.preventDefault())
	};
	document.onkeyup = function(a) {
		var b = a.keyCode ? a.keyCode : a.which;
		ca & da[b] && (ca ^= da[b], a.preventDefault())
	};
	var Qa = new Ia,
		fa, L, z, K;
	g2e = "G2 e";
	c2e = "C2 e";
	lead = "Bb1 s;D2 s;Bb1 s;D2 s;Bb1 s;D2 s;Bb1 s;D2 s;Bb1 s;D2 s;Bb1 s;D2 s;Bb1 s;D2 s;Bb1 s;D2 s;Ab1 s;D2 s;Ab1 s;D2 s;Ab1 s;D2 s;Ab1 s;D2 s;Ab1 s;D2 s;Ab1 s;D2 s;Ab1 s;D2 s;Ab1 s;D2 s".split(";");
	harmony = [g2e, "G2b e", g2e, "G2b e", g2e, "G2b e", g2e, "G2b e", c2e, "G2b e", c2e, "G2b e", c2e, "G2b e", c2e, "G2b e"];
	bass2 = "- w;D1 s;- s;D1 e;- q;- m;- w".split(";");
	bass = basebass = ["C1 e", "- e", "A1 e", "- e"];
	fa = new A(Qa, 138, lead);
	L = new A(Qa, 138, harmony);
	z = new A(Qa, 138, bass);
	K = new A(Qa, 138, bass2);
	fa.F = .81;
	L.F = .55;
	z.F = .05;
	z.I = .35;
	K.F = .05;
	fa.gain.gain.value = .12;
	L.gain.gain.value = .09;
	z.gain.gain.value = .11;
	K.gain.gain.value = .1;
	var Yb = S([3, .2421, .1876, .1891, .2844, .5008, , -.0619, .2484, , .0432, -.7113, .3743, .007, 8E-4, .0474, -.0023, .705, .7098, .0034, .011, .0259, 5E-4, .42]),
		sb = ib([0, , .12, .14, .3, .8, , -.3399, .04, , , -.04, , .51, -.02, , -.74, , .21, .24, , , .02, .41], 6),
		Wb = S([1, , .38, , .03, .03, , .8799, .96, .9411, .9785, -.9219, .82, .7513, .6049, .8, -.6041, -.8402, .28, .7, .78, .1423, -.7585, .5]),
		Ub = S([3, .0597, .11, .2, .2513, .5277, , .5841, -.0248, -.076, .5312, -.2978, .7065, -.9091, .4202, .966, .7036, .4575, 1, -.9064, .6618, .0266, -.0655, .42]),
		tb = S([2, , .09, .06, .45, .27, .02, -.28, .82, .41, .58, -.88, .07, .448, -.355, 1, .54, -.073, 1, , , , , .42]),
		Tb = S([3, .002, .6302, .499, .0804, .5224, , -.0324, 4E-4, .5448, , -.7762, -.1765, .6762, -.4386, .7747, -.0347, -.2051, .931, -.0732, .4693, .1444, , .42]),
		Sb = S([1, .145, .2094, .4645, .4954, .7134, , -.1659, -.8866, .9733, , -.572, -.7927, -.1186, .4699, .6044, .4604, .1762, .9998, .0236, .1554, , .659, .42]);
	S([1, .0076, .66, , , .09, , .96, .32, .1, .97, -1, , .0615, -.1587, 1, , -.02, .83, .12, .23, .0231, -.02, .96]);
	var ub = ib([3, .0691, .183, .0949, .5678, .46, , -1E-4, , , , -.542, -.2106, -.2402, -.1594, , -.3133, -.0707, .1592, -.4479, .5788, .0169, -.919, .42], 8),
		Xb = S([3, .0258, .16, .0251, .16, .05, , -.86, -.4088, .0956, .256, -.62, , -6E-4, -.0352, , -.0882, -.0443, .9219, -.0531, .8727, .031, 2E-4, .6]),
		Pb = S([0, .95, .34, .03, .05, .51, , .96, .84, .05, .51, -.84, .99, .82, , 1, , -.88, .87, 1, .5, .21, .94, .65]),
		Z, n, ea, v, T, Ua, l, F, f, ya, U, oa, Va, kb, J, ra, Wa, V, Ka, Ca = !0,
		Da = 0,
		va = !1,
		N = 0;
	jb();
	var Oa = !1,
		sa = "",
		Ya = 0,
		Rb = ";now i see;i am creation;you are destruction;we are going to be;in this battle;forever".split(";"),
		ka = 0,
		Ea, Ga = !1;
	document.getElementById("f").onclick = function(a) {
		document.fullscreenEnabled ? Ga ? document.exitFullscreen() : document.body.requestFullscreen() : document.webkitFullscreenEnabled ? Ga ? document.webkitExitFullscreen() : document.body.webkitRequestFullscreen() : document.mozFullScreenEnabled && (Ga ? document.mozCancelFullScreen() : document.body.mozRequestFullScreen());
		Ga = !Ga;
		a.preventDefault()
	};
	for(var W = [
			[250, 320, 300, !1, 10, "start again", !1, !1, ob],
			[120, 460, 250, !1, 11, "twitter", !1, !1, function() {
				window.open("https://twitter.com/home?status=" + encodeURIComponent(pb() + "http://js13kgames.com/entries/evil-glitch"))
			}],
			[430, 460, 250, !1, 12, "facebook", !1, !1, function() {
				window.open("https://www.facebook.com/sharer/sharer.php?u=" + (encodeURIComponent("http://js13kgames.com/entries/evil-glitch") + "&description=" + encodeURIComponent(pb())))
			}],
			[240, 380, 320, !0, 13, "fire to start", !1, !1, ob],
			[280, 440, 240, !0, 13, "controls", !1, !1, function() {
				O(tb);
				va = !va;
				W[3][3] = !va;
				W[5][3] = !va && Hb;
				W[4][5] = va ? "go back" : "controls"
			}],
			[280, 130, 240, Hb, 16, "evil mode", !1, !1, function() {
				za = nb = !0;
				N = .01
			}]
		], ta = [], vb = [10, 10, 11, 11, 11, 12, 12, 10, 10, 11, 13, 10, 11, 12, 12], ab = 0, Ma = [
			[15, 0, 0, 0, 1, [1, .25, -1, .25],
				[0, -.75, 0, .75], 0, 3, .1, 1.1
			],
			[15, 0, 0, 1, 4, [1, .3, 0, -2, 0, .3],
				[0, 1, .3, 0, -.3, -1], 0, 3, .05, .8
			],
			[8, 0, 0, 2, 2, [1, .25, -1, .25],
				[0, -.5, 0, .5], 0, 3.5, .15, 1.6
			],
			[20, 0, 0, 3, 9, [0, .25, .75, .75, 1, .75, .75, .25, 0, -.25, -.75, -.75, -1, -.75, -.75, -.25],
				[-1, -.75, -.75, -.25, 0, .25, .75, .75, 1, .75, .75, .25, 0, -.25, -.75, -.75], 0, 1, .12, 1.05
			],
			[12, 0, 0, 4, 5, [0, .25, 1, .25, 0, -.25, -1, -.25],
				[-1, -.25, 0, .25, 1, .25, 0, -.25], 0, 3, .03, 2.5, 0, 0, 0
			],
			[3, 0, 0, 5,
				150, [1, -1, -1],
				[0, 1, -1], 0, 0, 0, 1.4
			],
			[16, 0, 0, 6, 9, [1, .25, -1, .25],
				[0, -.75, 0, .75], 0, 0, 0, .6, 3.5
			],
			[18, 0, 0, 7, 8, [1, .25, -1, .25],
				[0, .75, 0, -.75], 0, 0, 0, .8, 2.5
			],
			[20, 0, 0, 8, 7, [1, .25, -1, .25],
				[0, .75, 0, -.75], 0, 0, 0, 1.2, 1.5
			], , [n / 2, 0, 0, 10, 9, [
					[-1, 0, 0],
					[0, 0, 1],
					[-1, 1, 0]
				],
				[
					[-1.5, -.5, .5],
					[-.5, .5, -1.5],
					[-1.5, -1.5, -.5]
				], 100, 0, 7
			],
			[n / 2, 0, 0, 11, 10, [
					[-1, 0, 0, -1],
					[1, 0, 0, 1],
					[-1, 0, 1, 0],
					[-1, 0, 1, 0],
					[-1, 0, 0, -1],
					[1, 0, 0, 1]
				],
				[
					[-1.25, -.5, .8, .25],
					[-1.25, -.5, .8, .25],
					[-1.25, -.5, -1.25, -1.8],
					[.25, -.5, .25, .8],
					[.25, -.5, -1.8, -1.25],
					[.25, -.5, -1.8, -1.25]
				],
				100, 0, 6
			],
			[.8 * n, 0, 0, 12, 15, [
					[-.5, 0, .5, 0],
					[-.5, 0, 0],
					[.5, 0, 0],
					[-.5, 0, 0],
					[.5, 0, 0]
				],
				[
					[-.75, -1, -.75, -.5],
					[-.75, -.5, .25],
					[-.75, -.5, .25],
					[-.75, -1.75, -.5],
					[-.75, -1.75, -.5]
				], .9, 0, 4, .004
			],
			[1.2 * n, 0, 0, 13, 50, [
					[0, -.75, 0],
					[0, .75, 0],
					[-.75, .75, 0],
					[-.75, .75, 0],
					[-.35, .35, 0]
				],
				[
					[-1, .5, 0],
					[-1, .5, 0],
					[.5, .5, 0],
					[-.5, -.5, 1],
					[.25, .25, -.5]
				], .9, 0, 13, .1
			],
			[2.5 * n, 0, 0, 14, 200, [],
				[], .9, 0, 60, .003, 1, 0, [6, 7, 6, 7, 8]
			]
		], Fa = {
			10: 2800,
			11: 2600,
			12: 60,
			13: 200
		}, ba = 0, ga = [], P = 0; 6 > P; P++) {
		var Ib = (P - 3) * Math.PI / 3 + Math.PI / 6;
		ga.push(Math.cos(Ib), Math.sin(Ib))
	}
	for(var wb = {}, P = 0; 1E4 > P; P++) wb[(P / 1E4).toFixed(4)] = Qb(P / 1E4);
	var Vb = {
			10: function(a) {
				for(var b = 0; 9 > b; b++)
					if(4 != b) {
						var e = a[0] + (b % 3 - 1) * n,
							f = a[1] + (~~(b / 3) - 1) * n;
						La(e, f, .65, [e, f, 1 == b ? 1 : 0])
					}
				a[9] = Fa[10]
			},
			11: function(a) {
				for(var b = 0; 12 > b; b++)
					if(4 != b) {
						var e = a[0] + (b % 3 - 1) * n,
							f = a[1] + (~~(b / 3) - 1) * n;
						La(e, f, .65, [e, f, 1 == b ? 3 : 2])
					}
				a[9] = Fa[11]
			},
			12: function(a) {
				for(var b = 0; 2 > b; b++) {
					var e = ua([a[0], a[1], 5]);
					e[9] = a[3] + b * Math.PI;
					F.push(e)
				}
				a[9] = Fa[12]
			},
			13: function(a) {
				for(var b = 0; 6 > b; b++) {
					var e = ua([a[0], a[1], 5]);
					e[9] = a[3] + (b - 3) * Math.PI / 3;
					e[12] += .5;
					F.push(e)
				}
				a[9] = 45
			},
			14: function(a) {
				for(var b = 0; 6 > b; b++) {
					var e = ua([a[0], a[1], 5]);
					e[9] = a[3] + (b - 3) * Math.PI / 3 + Math.PI / 6;
					e[12] -= .6;
					F.push(e)
				}
				0 == a[13] % 16 && (e = ua([a[0], a[1], a[15][a[14] % a[15].length]]), e[9] = a[3] / 2, F.push(e), a[14] ++);
				if(0 == a[13] % 100)
					for(b = 0; 6 > b; b++) qb(a, b);
				a[9] = 70;
				a[13] ++
			}
		},
		Na;
	requestAnimationFrame(rb)
})();
