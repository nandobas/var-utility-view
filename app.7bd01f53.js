(function () {
  "use strict";
  var t = {
      5329: function (t, e, o) {
        var i = o(6154),
          s = o(144),
          r = o(1096),
          n = o(677),
          a = o(8983),
          l = o(6629),
          c = o(6715),
          u = o(4192),
          p = o(5057),
          m = o(2469),
          d = o(248),
          h = o(1908),
          v = o(4873),
          g = o(8228),
          Z = o(3551),
          f = o(2758),
          y = o(5234),
          I = function () {
            var t = this,
              e = t._self._c;
            return e(
              r.Z,
              { attrs: { id: "inspire" } },
              [
                e(
                  f.Z,
                  {
                    attrs: { app: "" },
                    model: {
                      value: t.drawer,
                      callback: function (e) {
                        t.drawer = e;
                      },
                      expression: "drawer",
                    },
                  },
                  [
                    e(
                      h.Z,
                      [
                        e(
                          v.km,
                          [
                            e(v.V9, { staticClass: "text-h6" }, [
                              t._v(" Var Light "),
                            ]),
                            e(v.oZ, [t._v(" var-utility ")]),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e(u.Z),
                    e(
                      d.Z,
                      { attrs: { dense: "", nav: "" } },
                      t._l(t.items, function (o) {
                        return e(
                          h.Z,
                          { key: o.title, attrs: { to: o.to, link: "" } },
                          [
                            e(g.Z, [e(p.Z, [t._v(t._s(o.icon))])], 1),
                            e(v.km, [e(v.V9, [t._v(t._s(o.title))])], 1),
                          ],
                          1
                        );
                      }),
                      1
                    ),
                  ],
                  1
                ),
                e(
                  n.Z,
                  {
                    attrs: {
                      app: "",
                      color: "primary",
                      dark: "",
                      prominent: "",
                      src: "mountains.jpg",
                    },
                    scopedSlots: t._u([
                      {
                        key: "img",
                        fn: function ({ props: o }) {
                          return [
                            e(
                              m.Z,
                              t._b(
                                {
                                  attrs: {
                                    gradient:
                                      "to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)",
                                  },
                                },
                                "v-img",
                                o,
                                !1
                              )
                            ),
                          ];
                        },
                      },
                    ]),
                  },
                  [
                    e(a.Z, {
                      on: {
                        click: function (e) {
                          t.drawer = !t.drawer;
                        },
                      },
                    }),
                    e(l.Z, { staticClass: "title" }),
                    e(y.Z),
                    e("span", { staticStyle: { "margin-top": "5px" } }, [
                      t._v("Sync"),
                    ]),
                    e(
                      p.Z,
                      {
                        key: "sync",
                        class: [{ syncOn: t.syncOn }],
                        staticStyle: {
                          "margin-top": "15px",
                          "margin-left": "3px",
                        },
                        attrs: { dense: "" },
                      },
                      [t._v("mdi-access-point")]
                    ),
                    e(
                      c.Z,
                      { attrs: { icon: "" } },
                      [e(p.Z, [t._v("mdi-dots-vertical")])],
                      1
                    ),
                  ],
                  1
                ),
                e(Z.Z, [e("router-view")], 1),
              ],
              1
            );
          },
          S = [],
          b = {
            data() {
              return {
                drawer: !1,
                items: [
                  { title: "Controle", icon: "mdi-view-dashboard", to: "/" },
                  {
                    title: "Configurar",
                    icon: "mdi mdi-cogs",
                    to: "/settings",
                  },
                  { title: "Sobre", icon: "mdi-help-box", to: "about" },
                ],
                syncOn: !1,
                ipv4: "localhost",
                ipv4Port: "8088",
              };
            },
            methods: {
              async VerifyConnection() {
                let t = !0;
                (this.syncOn = !0),
                  await this.$axios
                    .get("http://" + this.ipv4 + ":" + this.ipv4Port + "/api/?")
                    .then(function (e) {
                      t = !0;
                    })
                    .catch(function (e) {
                      t = !1;
                    }),
                  (this.syncOn = t);
              },
            },
            created: function () {
              let t = localStorage.getItem("serverIpv4Address");
              t && (this.ipv4 = t);
              let e = localStorage.getItem("serverIpv4Port");
              e && (this.ipv4Port = e), this.VerifyConnection();
              setInterval(() => {
                this.VerifyConnection();
              }, 1e4);
            },
          },
          w = b,
          P = o(1001),
          z = (0, P.Z)(w, I, S, !1, null, null, null),
          C = z.exports,
          k = o(4779);
        s.ZP.use(k.Z);
        var x = new k.Z({}),
          T = o(8345),
          _ = o(4437),
          A = o(6035),
          M = o(5294),
          O = function () {
            var t = this,
              e = t._self._c;
            t._self._setupProxy;
            return e(
              A.Z,
              {
                staticClass: "grey lighten-1",
                staticStyle: { width: "100%", "max-width": "1899px" },
              },
              [
                e(
                  M.Z,
                  [
                    e(
                      _.Z,
                      { attrs: { cols: "3" } },
                      [
                        e(
                          M.Z,
                          {
                            staticStyle: { width: "650px" },
                            attrs: { "no-gutters": "" },
                          },
                          [
                            e(
                              _.Z,
                              {
                                staticClass: "text-center",
                                attrs: { md: "2" },
                              },
                              [
                                e(
                                  c.Z,
                                  {
                                    key: "zoom-top-left",
                                    staticClass: "float-left",
                                    attrs: {
                                      elevation: "1",
                                      outlined: "",
                                      color: "primary",
                                      height: t.btnZoomSize,
                                      width: t.btnZoomSize,
                                    },
                                    on: {
                                      click: function (e) {
                                        return t.MoveUpLeft();
                                      },
                                    },
                                  },
                                  [e(p.Z, [t._v("mdi-arrow-top-left")])],
                                  1
                                ),
                              ],
                              1
                            ),
                            e(
                              _.Z,
                              {
                                staticClass: "text-center ml-n1",
                                attrs: { md: "2" },
                              },
                              [
                                e(
                                  c.Z,
                                  {
                                    key: "zoom-top-mid",
                                    staticClass: "float-left",
                                    attrs: {
                                      elevation: "2",
                                      outlined: "",
                                      color: "primary",
                                      height: t.btnZoomSize,
                                      width: t.btnZoomSize,
                                    },
                                    on: {
                                      click: function (e) {
                                        return t.MoveUp();
                                      },
                                    },
                                  },
                                  [e(p.Z, [t._v("mdi-arrow-up")])],
                                  1
                                ),
                              ],
                              1
                            ),
                            e(
                              _.Z,
                              {
                                staticClass: "text-center",
                                attrs: { md: "2" },
                              },
                              [
                                e(
                                  c.Z,
                                  {
                                    key: "zoom-top-right",
                                    staticClass: "float-left ml-n1",
                                    attrs: {
                                      elevation: "2",
                                      outlined: "",
                                      color: "primary",
                                      height: t.btnZoomSize,
                                      width: t.btnZoomSize,
                                    },
                                    on: {
                                      click: function (e) {
                                        return t.MoveUpRight();
                                      },
                                    },
                                  },
                                  [e(p.Z, [t._v("mdi-arrow-top-right")])],
                                  1
                                ),
                              ],
                              1
                            ),
                            e(
                              _.Z,
                              {
                                staticClass: "text-center",
                                attrs: { md: "2" },
                              },
                              [
                                e(
                                  c.Z,
                                  {
                                    key: "zoom-in",
                                    staticClass: "float-left ml-3",
                                    attrs: {
                                      elevation: "2",
                                      outlined: "",
                                      color: "primary",
                                      height: t.btnZoomSize,
                                      width: t.btnZoomSize,
                                    },
                                    on: {
                                      click: function (e) {
                                        return t.ZoomIn();
                                      },
                                    },
                                  },
                                  [e("span", [t._v("ZOOM IN")])]
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        e(
                          M.Z,
                          {
                            staticStyle: { width: "650px" },
                            attrs: { "no-gutters": "" },
                          },
                          [
                            e(
                              _.Z,
                              {
                                staticClass: "text-center mt-1",
                                attrs: { md: "2" },
                              },
                              [
                                e(
                                  c.Z,
                                  {
                                    key: "zoom-left",
                                    staticClass: "float-left",
                                    attrs: {
                                      elevation: "2",
                                      outlined: "",
                                      color: "primary",
                                      height: t.btnZoomSize,
                                      width: t.btnZoomSize,
                                    },
                                    on: {
                                      click: function (e) {
                                        return t.MoveLeft();
                                      },
                                    },
                                  },
                                  [e(p.Z, [t._v("mdi-arrow-left")])],
                                  1
                                ),
                              ],
                              1
                            ),
                            e(
                              _.Z,
                              {
                                staticClass: "text-center mt-1 ml-n1",
                                attrs: { md: "2" },
                              },
                              [
                                e(
                                  c.Z,
                                  {
                                    key: "zoom-center",
                                    staticClass: "float-left",
                                    attrs: {
                                      elevation: "3",
                                      outlined: "",
                                      color: "primary",
                                      height: t.btnZoomSize,
                                      width: t.btnZoomSize,
                                    },
                                    on: {
                                      click: function (e) {
                                        return t.PTZHome();
                                      },
                                    },
                                  },
                                  [e(p.Z, [t._v("mdi-circle-outline")])],
                                  1
                                ),
                              ],
                              1
                            ),
                            e(
                              _.Z,
                              {
                                staticClass: "text-center mt-1 ml-n1",
                                attrs: { md: "2" },
                              },
                              [
                                e(
                                  c.Z,
                                  {
                                    key: "zoom-right",
                                    staticClass: "float-left",
                                    attrs: {
                                      elevation: "3",
                                      outlined: "",
                                      color: "primary",
                                      height: t.btnZoomSize,
                                      width: t.btnZoomSize,
                                    },
                                    on: {
                                      click: function (e) {
                                        return t.MoveRight();
                                      },
                                    },
                                  },
                                  [e(p.Z, [t._v("mdi-arrow-right")])],
                                  1
                                ),
                              ],
                              1
                            ),
                            e(
                              _.Z,
                              {
                                staticClass: "text-center mt-1 ml-1",
                                attrs: { md: "2" },
                              },
                              [
                                e(
                                  c.Z,
                                  {
                                    key: "zoom-out",
                                    staticClass: "float-left ml-3",
                                    attrs: {
                                      elevation: "3",
                                      outlined: "",
                                      color: "primary",
                                      height: t.btnZoomSize,
                                      width: t.btnZoomSize,
                                    },
                                    on: {
                                      click: function (e) {
                                        return t.ZoomOut();
                                      },
                                    },
                                  },
                                  [e("span", [t._v("ZOOM OUT")])]
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        e(
                          M.Z,
                          {
                            staticStyle: { width: "650px" },
                            attrs: { "no-gutters": "" },
                          },
                          [
                            e(
                              _.Z,
                              {
                                staticClass: "text-center",
                                attrs: { md: "2" },
                              },
                              [
                                e(
                                  c.Z,
                                  {
                                    key: "zoom-bottom-left",
                                    staticClass: "float-left mt-1",
                                    attrs: {
                                      elevation: "3",
                                      outlined: "",
                                      color: "primary",
                                      height: t.btnZoomSize,
                                      width: t.btnZoomSize,
                                    },
                                    on: { click: t.MoveDownLeft },
                                  },
                                  [e(p.Z, [t._v("mdi-arrow-bottom-left")])],
                                  1
                                ),
                              ],
                              1
                            ),
                            e(
                              _.Z,
                              {
                                staticClass: "text-center",
                                attrs: { md: "2" },
                              },
                              [
                                e(
                                  c.Z,
                                  {
                                    key: "zoom-down",
                                    staticClass: "float-left mt-1 ml-n1",
                                    attrs: {
                                      elevation: "5",
                                      outlined: "",
                                      color: "primary",
                                      height: t.btnZoomSize,
                                      width: t.btnZoomSize,
                                    },
                                    on: { click: t.MoveDown },
                                  },
                                  [e(p.Z, [t._v("mdi-arrow-down")])],
                                  1
                                ),
                              ],
                              1
                            ),
                            e(
                              _.Z,
                              {
                                staticClass: "text-center",
                                attrs: { md: "2" },
                              },
                              [
                                e(
                                  c.Z,
                                  {
                                    key: "zoom-bottom-right",
                                    staticClass: "float-left mt-1 ml-n2",
                                    attrs: {
                                      elevation: "5",
                                      outlined: "",
                                      color: "primary",
                                      height: t.btnZoomSize,
                                      width: t.btnZoomSize,
                                    },
                                    on: { click: t.MoveDownRight },
                                  },
                                  [e(p.Z, [t._v("mdi-arrow-bottom-right")])],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        e(
                          M.Z,
                          [
                            e(
                              _.Z,
                              [
                                e(
                                  c.Z,
                                  {
                                    key: "zoom-cam-1",
                                    class: [
                                      "toggle-button",
                                      {
                                        toggled: t.zoomCamIsToggled[1],
                                        error: t.zoomCamIsIsError[1],
                                      },
                                    ],
                                    attrs: {
                                      elevation: "2",
                                      outlined: "",
                                      color: "white",
                                    },
                                    on: {
                                      click: function (e) {
                                        return t.ReplayXCameraY("B", 1);
                                      },
                                    },
                                  },
                                  [e("span", [t._v("CAM 1")])]
                                ),
                              ],
                              1
                            ),
                            e(
                              _.Z,
                              [
                                e(
                                  c.Z,
                                  {
                                    key: "zoom-cam-2",
                                    class: [
                                      "toggle-button",
                                      {
                                        toggled: t.zoomCamIsToggled[2],
                                        error: t.zoomCamIsIsError[2],
                                      },
                                    ],
                                    attrs: {
                                      elevation: "2",
                                      outlined: "",
                                      color: "white",
                                    },
                                    on: {
                                      click: function (e) {
                                        return t.ReplayXCameraY("B", 2);
                                      },
                                    },
                                  },
                                  [e("span", [t._v("CAM 2")])]
                                ),
                              ],
                              1
                            ),
                            e(
                              _.Z,
                              [
                                e(
                                  c.Z,
                                  {
                                    key: "zoom-cam-3",
                                    class: [
                                      "toggle-button",
                                      {
                                        toggled: t.zoomCamIsToggled[3],
                                        error: t.zoomCamIsIsError[3],
                                      },
                                    ],
                                    attrs: {
                                      elevation: "2",
                                      outlined: "",
                                      color: "white",
                                    },
                                    on: {
                                      click: function (e) {
                                        return t.ReplayXCameraY("B", 3);
                                      },
                                    },
                                  },
                                  [e("span", [t._v("CAM 3")])]
                                ),
                              ],
                              1
                            ),
                            e(
                              _.Z,
                              [
                                e(
                                  c.Z,
                                  {
                                    key: "zoom-cam-4",
                                    class: [
                                      "toggle-button",
                                      {
                                        toggled: t.zoomCamIsToggled[4],
                                        error: t.zoomCamIsIsError[4],
                                      },
                                    ],
                                    attrs: {
                                      elevation: "2",
                                      outlined: "",
                                      color: "white",
                                    },
                                    on: {
                                      click: function (e) {
                                        return t.ReplayXCameraY("B", 4);
                                      },
                                    },
                                  },
                                  [e("span", [t._v("CAM 4")])]
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e(
                      _.Z,
                      { staticClass: "grey", attrs: { cols: "3" } },
                      [
                        e(M.Z, { staticStyle: { height: "57%" } }, [e(_.Z)], 1),
                        e(
                          M.Z,
                          [
                            e(_.Z),
                            e(
                              _.Z,
                              [
                                e(
                                  c.Z,
                                  {
                                    key: "tela-dupla",
                                    attrs: {
                                      elevation: "2",
                                      outlined: "",
                                      color: "yellow",
                                    },
                                  },
                                  [e("span", [t._v("TELA DUPLA")])]
                                ),
                              ],
                              1
                            ),
                            e(_.Z),
                          ],
                          1
                        ),
                        e(
                          M.Z,
                          [
                            e(_.Z),
                            e(
                              _.Z,
                              [
                                e(
                                  c.Z,
                                  {
                                    key: "pip-e",
                                    staticClass: "float-left",
                                    attrs: {
                                      elevation: "2",
                                      outlined: "",
                                      color: "yellow",
                                    },
                                  },
                                  [e("span", [t._v("PIP E")])]
                                ),
                              ],
                              1
                            ),
                            e(
                              _.Z,
                              [
                                e(
                                  c.Z,
                                  {
                                    key: "pip-d",
                                    staticClass: "float-left",
                                    attrs: {
                                      elevation: "2",
                                      outlined: "",
                                      color: "yellow",
                                    },
                                  },
                                  [e("span", [t._v("PIP D")])]
                                ),
                              ],
                              1
                            ),
                            e(_.Z),
                          ],
                          1
                        ),
                        e(
                          M.Z,
                          [
                            e(
                              _.Z,
                              [
                                e(
                                  c.Z,
                                  {
                                    key: "pip-cam-1",
                                    attrs: {
                                      elevation: "2",
                                      outlined: "",
                                      color: "white",
                                    },
                                  },
                                  [e("span", [t._v("CAM 1")])]
                                ),
                              ],
                              1
                            ),
                            e(
                              _.Z,
                              [
                                e(
                                  c.Z,
                                  {
                                    key: "pip-cam-2",
                                    attrs: {
                                      elevation: "2",
                                      outlined: "",
                                      color: "white",
                                    },
                                  },
                                  [e("span", [t._v("CAM 2")])]
                                ),
                              ],
                              1
                            ),
                            e(
                              _.Z,
                              [
                                e(
                                  c.Z,
                                  {
                                    key: "pip-cam-3",
                                    attrs: {
                                      elevation: "2",
                                      outlined: "",
                                      color: "white",
                                    },
                                  },
                                  [e("span", [t._v("CAM 3")])]
                                ),
                              ],
                              1
                            ),
                            e(
                              _.Z,
                              [
                                e(
                                  c.Z,
                                  {
                                    key: "pip-cam-4",
                                    attrs: {
                                      elevation: "2",
                                      outlined: "",
                                      color: "white",
                                    },
                                  },
                                  [e("span", [t._v("CAM 4")])]
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e(_.Z, {
                      staticClass: "yelow float-right",
                      attrs: { cols: "4" },
                    }),
                    e(_.Z, {
                      staticClass: "grey float-right",
                      attrs: { cols: "2" },
                    }),
                  ],
                  1
                ),
                e(
                  M.Z,
                  [
                    e(
                      _.Z,
                      { attrs: { cols: "3" } },
                      [
                        e(
                          M.Z,
                          { staticStyle: { height: "150px" } },
                          [e(_.Z, { attrs: { md: "2" } })],
                          1
                        ),
                        e(
                          M.Z,
                          {
                            staticStyle: { width: "650px" },
                            attrs: { "no-gutters": "" },
                          },
                          [
                            e(
                              _.Z,
                              {
                                staticClass: "text-center",
                                attrs: { md: "3" },
                              },
                              [
                                e(
                                  c.Z,
                                  {
                                    key: "script-start",
                                    class: [
                                      "float-left",
                                      "toggle-button",
                                      { toggled: t.scriptStartIsToggle },
                                    ],
                                    attrs: {
                                      elevation: "1",
                                      outlined: "",
                                      color: "primary",
                                      height: 150,
                                      width: 150,
                                    },
                                    on: {
                                      click: function (e) {
                                        return t.ScriptStart();
                                      },
                                    },
                                  },
                                  [
                                    e(p.Z, { attrs: { "x-large": "" } }, [
                                      t._v("mdi-play-circle-outline"),
                                    ]),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            e(
                              _.Z,
                              { staticClass: "text-center" },
                              [
                                e(
                                  c.Z,
                                  {
                                    key: "replay-pause",
                                    class: [
                                      "float-left ml-3",
                                      "toggle-button",
                                      { toggled: t.replayPauseIsToggle },
                                    ],
                                    attrs: {
                                      elevation: "2",
                                      outlined: "",
                                      color: "primary",
                                      height: 150,
                                      width: 150,
                                    },
                                    on: {
                                      click: function (e) {
                                        return t.ReplayPause();
                                      },
                                    },
                                  },
                                  [
                                    e(p.Z, { attrs: { "x-large": "" } }, [
                                      t._v("mdi-pause-circle-outline"),
                                    ]),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            e(_.Z, {
                              staticClass: "text-center",
                              attrs: { md: "2" },
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e(
                      _.Z,
                      { staticClass: "grey", attrs: { cols: "3" } },
                      [e(M.Z, { staticStyle: { height: "57%" } }, [e(_.Z)], 1)],
                      1
                    ),
                    e(_.Z, {
                      staticClass: "yelow float-right",
                      attrs: { cols: "4" },
                    }),
                    e(_.Z, {
                      staticClass: "grey float-right",
                      attrs: { cols: "2" },
                    }),
                  ],
                  1
                ),
              ],
              1
            );
          },
          V = [],
          R = {
            data() {
              return {
                ipv4: "localhost",
                ipv4Port: "8088",
                zoomCamIsToggled: { 1: !1, 2: !1, 3: !1, 4: !1 },
                zoomCamIsIsError: { 1: !1, 2: !1, 3: !1, 4: !1 },
                scriptStartIsToggle: !1,
                replayPauseIsToggle: !1,
                settings: [],
                btnZoomSize: 100,
                zoomValue: 1,
                zoomInput: 3,
                speedZoom: 0.8,
                speedStopPropagation: 200,
                replaySpeed: 0.75,
              };
            },
            created: function () {
              let t = localStorage.getItem("serverIpv4Address"),
                e = localStorage.getItem("serverIpv4Port");
              t && ((this.ipv4 = t), (this.ipv4Port = e));
            },
            methods: {
              ipv4Address() {
                return "http://" + this.ipv4 + ":" + this.ipv4Port + "/api";
              },
              setZoom(t) {
                this.$axios.get(
                  this.ipv4Address() +
                    "/?Function=SetZoom&Input=" +
                    t +
                    "&Value=" +
                    this.zoomValue
                );
              },
              ZoomIncrase() {
                let t = this.zoomValue + 0.5;
                if (t >= 5) return !1;
                (this.zoomValue = t), this.setZoom(this.zoomInput);
              },
              ZoomDecrase() {
                let t = this.zoomValue - 0.5;
                if (t <= 0.5) return !1;
                (this.zoomValue = t), this.setZoom(this.zoomInput);
              },
              ZoomIn() {
                this.$axios.get(
                  this.ipv4Address() +
                    "/?Function=PTZZoomIn&Input=" +
                    this.zoomInput +
                    "&Value=" +
                    this.speedZoom
                ),
                  setTimeout(() => {
                    this.zoomStop();
                  }, this.speedStopPropagation);
              },
              ZoomOut() {
                this.$axios.get(
                  this.ipv4Address() +
                    "/?Function=PTZZoomOut&Input=" +
                    this.zoomInput +
                    "&Value=" +
                    this.speedZoom
                ),
                  setTimeout(() => {
                    this.zoomStop();
                  }, this.speedStopPropagation);
              },
              zoomStop() {
                this.$axios.get(
                  this.ipv4Address() +
                    "/?Function=PTZZoomStop&Input=" +
                    this.zoomInput
                );
              },
              moveStop() {
                this.$axios.get(
                  this.ipv4Address() +
                    "/?Function=PTZMoveStop&Input=" +
                    this.zoomInput
                );
              },
              MoveUpLeft() {
                this.$axios.get(
                  this.ipv4Address() +
                    "/?Function=PTZMoveUpLeft&Input=" +
                    this.zoomInput +
                    "&Value=" +
                    this.speedZoom
                ),
                  setTimeout(() => {
                    this.moveStop();
                  }, this.speedStopPropagation);
              },
              MoveUp() {
                this.$axios.get(
                  this.ipv4Address() +
                    "/?Function=PTZMoveUp&Input=" +
                    this.zoomInput +
                    "&Value=" +
                    this.speedZoom
                ),
                  setTimeout(() => {
                    this.moveStop();
                  }, this.speedStopPropagation);
              },
              MoveUpRight() {
                this.$axios.get(
                  this.ipv4Address() +
                    "/?Function=PTZMoveUpRight&Input=" +
                    this.zoomInput +
                    "&Value=" +
                    this.speedZoom
                ),
                  setTimeout(() => {
                    this.moveStop();
                  }, this.speedStopPropagation);
              },
              MoveLeft() {
                this.$axios.get(
                  this.ipv4Address() +
                    "/?Function=PTZMoveLeft&Input=" +
                    this.zoomInput +
                    "&Value=" +
                    this.speedZoom
                ),
                  setTimeout(() => {
                    this.moveStop();
                  }, this.speedStopPropagation);
              },
              MoveRight() {
                this.$axios.get(
                  this.ipv4Address() +
                    "/?Function=PTZMoveRight&Input=" +
                    this.zoomInput +
                    "&Value=" +
                    this.speedZoom
                ),
                  setTimeout(() => {
                    this.moveStop();
                  }, this.speedStopPropagation);
              },
              MoveDownLeft() {
                this.$axios.get(
                  this.ipv4Address() +
                    "/?Function=PTZMoveDownLeft&Input=" +
                    this.zoomInput +
                    "&Value=" +
                    this.speedZoom
                ),
                  setTimeout(() => {
                    this.moveStop();
                  }, this.speedStopPropagation);
              },
              MoveDown() {
                this.$axios.get(
                  this.ipv4Address() +
                    "/?Function=PTZMoveDown&Input=" +
                    this.zoomInput +
                    "&Value=" +
                    this.speedZoom
                ),
                  setTimeout(() => {
                    this.moveStop();
                  }, this.speedStopPropagation);
              },
              MoveDownRight() {
                this.$axios.get(
                  this.ipv4Address() +
                    "/?Function=PTZMoveDownRight&Input=" +
                    this.zoomInput +
                    "&Value=" +
                    this.speedZoom
                ),
                  setTimeout(() => {
                    this.moveStop();
                  }, this.speedStopPropagation);
              },
              PTZHome() {
                this.$axios.get(
                  this.ipv4Address() +
                    "/?Function=PTZHome&Input=" +
                    this.zoomInput
                );
              },
              async ReplayXCameraY(t, e) {
                let o = !1;
                await this.$axios
                  .get(
                    this.ipv4Address() + "/?Function=Replay" + t + "Camera" + e
                  )
                  .then(function (t) {
                    console.log(t), (o = !0);
                  })
                  .catch(function (t) {
                    console.log(t);
                  }),
                  (this.zoomCamIsToggled = { 1: !1, 2: !1, 3: !1, 4: !1 }),
                  o
                    ? (this.zoomCamIsToggled[e] = !this.zoomCamIsToggled[e])
                    : ((this.zoomCamIsIsError[e] = !0),
                      setTimeout(() => {
                        this.zoomCamIsIsError[e] = !1;
                      }, 2e3));
              },
              async ScriptStart() {
                let t = !1;
                (this.scriptStartIsToggle = !0),
                  (this.replayPauseIsToggle = !1),
                  await this.$axios
                    .get(
                      this.ipv4Address() +
                        "/?Function=ReplayFastBackward&Value=" +
                        this.replaySpeed
                    )
                    .then(function (e) {
                      t = !0;
                    })
                    .catch(function (t) {
                      console.log(t);
                    }),
                  (this.scriptStartIsToggle = t);
              },
              async ReplayPause() {
                let t = !1;
                (this.replayPauseIsToggle = !0),
                  (this.scriptStartIsToggle = !1),
                  await this.$axios
                    .get(this.ipv4Address() + "/?Function=ReplayPause")
                    .then(function (e) {
                      t = !0;
                    })
                    .catch(function (t) {
                      console.log(t);
                    }),
                  (this.replayPauseIsToggle = t),
                  setTimeout(() => {
                    this.replayPauseIsToggle = !1;
                  }, 2e3);
              },
            },
          },
          $ = R,
          F = (0, P.Z)($, O, V, !1, null, null, null),
          E = F.exports,
          D = o(1692),
          L = o(1516),
          j = function () {
            var t = this,
              e = t._self._c;
            t._self._setupProxy;
            return e(
              A.Z,
              {
                staticClass: "grey lighten-1",
                staticStyle: { width: "100%", "max-width": "1899px" },
              },
              [
                e(
                  M.Z,
                  [
                    e(
                      _.Z,
                      {
                        staticStyle: { height: "700px" },
                        attrs: { cols: "6" },
                      },
                      [
                        e(
                          M.Z,
                          { staticStyle: { height: "150px" } },
                          [
                            e(_.Z, { attrs: { md: "3" } }, [
                              e("span", [t._v("IP SERVIDOR:")]),
                            ]),
                            e(
                              _.Z,
                              { attrs: { md: "3" } },
                              [
                                e(L.Z, {
                                  attrs: {
                                    solo: "",
                                    rules: [t.ipv4Validation],
                                  },
                                  model: {
                                    value: t.ipv4,
                                    callback: function (e) {
                                      t.ipv4 = e;
                                    },
                                    expression: "ipv4",
                                  },
                                }),
                              ],
                              1
                            ),
                            e(
                              _.Z,
                              { attrs: { md: "2" } },
                              [
                                e(L.Z, {
                                  attrs: { solo: "" },
                                  model: {
                                    value: t.ipv4Port,
                                    callback: function (e) {
                                      t.ipv4Port = e;
                                    },
                                    expression: "ipv4Port",
                                  },
                                }),
                              ],
                              1
                            ),
                            e(
                              _.Z,
                              { attrs: { md: "3" } },
                              [
                                e(
                                  c.Z,
                                  {
                                    attrs: { color: "primary", elevation: "2" },
                                    on: {
                                      click: function (e) {
                                        return t.saveServerIpv4Address();
                                      },
                                    },
                                  },
                                  [t._v("Salvar")]
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                e(
                  D.Z,
                  {
                    attrs: { timeout: 3e3, color: "success" },
                    model: {
                      value: t.snackbar,
                      callback: function (e) {
                        t.snackbar = e;
                      },
                      expression: "snackbar",
                    },
                  },
                  [t._v(" IPv4 salvo com sucesso! ")]
                ),
              ],
              1
            );
          },
          U = [],
          B = {
            data() {
              return { ipv4: "", ipv4Port: 8088, snackbar: !1 };
            },
            created: function () {
              let t = localStorage.getItem("serverIpv4Address");
              t && (this.ipv4 = t);
              let e = localStorage.getItem("serverIpv4Port");
              e && (this.ipv4Port = e);
            },
            methods: {
              saveServerIpv4Address() {
                this.ipv4
                  ? (localStorage.setItem("serverIpv4Address", this.ipv4),
                    localStorage.setItem("serverIpv4Port", this.ipv4Port),
                    (this.snackbar = !0))
                  : alert(
                      "IPv4 address is empty. Please enter a valid address."
                    );
              },
            },
            computed: {
              ipv4Validation() {
                return (t) => {
                  if (!t) return !0;
                  const e =
                    /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
                  return e.test(t) || "Invalid IPv4 address";
                };
              },
            },
          },
          X = B,
          Y = (0, P.Z)(X, j, U, !1, null, null, null),
          N = Y.exports;
        s.ZP.use(T.ZP);
        const H = [
            { path: "/", name: "controller", component: E },
            { path: "/settings", name: "settings", component: N },
            {
              path: "/about",
              name: "about",
              component: () => o.e(443).then(o.bind(o, 5092)),
            },
          ],
          q = new T.ZP({ routes: H });
        var G = q,
          J = o(629);
        s.ZP.use(J.ZP);
        var K = new J.ZP.Store({
            state: {},
            getters: {},
            mutations: {},
            actions: {},
            modules: {},
          }),
          Q = o(8828);
        const W = (0, Q.longClickDirective)({ delay: 400, interval: 50 });
        (s.ZP.config.productionTip = !1),
          (s.ZP.prototype.$axios = i.Z),
          s.ZP.directive("longclick", W),
          new s.ZP({
            router: G,
            store: K,
            vuetify: x,
            axios: i.Z,
            render: (t) => t(C),
          }).$mount("#app");
      },
    },
    e = {};
  function o(i) {
    var s = e[i];
    if (void 0 !== s) return s.exports;
    var r = (e[i] = { exports: {} });
    return t[i].call(r.exports, r, r.exports, o), r.exports;
  }
  (o.m = t),
    (function () {
      var t = [];
      o.O = function (e, i, s, r) {
        if (!i) {
          var n = 1 / 0;
          for (u = 0; u < t.length; u++) {
            (i = t[u][0]), (s = t[u][1]), (r = t[u][2]);
            for (var a = !0, l = 0; l < i.length; l++)
              (!1 & r || n >= r) &&
              Object.keys(o.O).every(function (t) {
                return o.O[t](i[l]);
              })
                ? i.splice(l--, 1)
                : ((a = !1), r < n && (n = r));
            if (a) {
              t.splice(u--, 1);
              var c = s();
              void 0 !== c && (e = c);
            }
          }
          return e;
        }
        r = r || 0;
        for (var u = t.length; u > 0 && t[u - 1][2] > r; u--) t[u] = t[u - 1];
        t[u] = [i, s, r];
      };
    })(),
    (function () {
      o.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t["default"];
              }
            : function () {
                return t;
              };
        return o.d(e, { a: e }), e;
      };
    })(),
    (function () {
      o.d = function (t, e) {
        for (var i in e)
          o.o(e, i) &&
            !o.o(t, i) &&
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
      };
    })(),
    (function () {
      (o.f = {}),
        (o.e = function (t) {
          return Promise.all(
            Object.keys(o.f).reduce(function (e, i) {
              return o.f[i](t, e), e;
            }, [])
          );
        });
    })(),
    (function () {
      o.u = function (t) {
        return "about.9e3fd14b.js";
      };
    })(),
    (function () {
      o.miniCssF = function (t) {};
    })(),
    (function () {
      o.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (t) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      o.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      };
    })(),
    (function () {
      var t = {},
        e = "var-light:";
      o.l = function (i, s, r, n) {
        if (t[i]) t[i].push(s);
        else {
          var a, l;
          if (void 0 !== r)
            for (
              var c = document.getElementsByTagName("script"), u = 0;
              u < c.length;
              u++
            ) {
              var p = c[u];
              if (
                p.getAttribute("src") == i ||
                p.getAttribute("data-webpack") == e + r
              ) {
                a = p;
                break;
              }
            }
          a ||
            ((l = !0),
            (a = document.createElement("script")),
            (a.charset = "utf-8"),
            (a.timeout = 120),
            o.nc && a.setAttribute("nonce", o.nc),
            a.setAttribute("data-webpack", e + r),
            (a.src = i)),
            (t[i] = [s]);
          var m = function (e, o) {
              (a.onerror = a.onload = null), clearTimeout(d);
              var s = t[i];
              if (
                (delete t[i],
                a.parentNode && a.parentNode.removeChild(a),
                s &&
                  s.forEach(function (t) {
                    return t(o);
                  }),
                e)
              )
                return e(o);
            },
            d = setTimeout(
              m.bind(null, void 0, { type: "timeout", target: a }),
              12e4
            );
          (a.onerror = m.bind(null, a.onerror)),
            (a.onload = m.bind(null, a.onload)),
            l && document.head.appendChild(a);
        }
      };
    })(),
    (function () {
      o.r = function (t) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      };
    })(),
    (function () {
      o.p = "/";
    })(),
    (function () {
      var t = { 143: 0 };
      (o.f.j = function (e, i) {
        var s = o.o(t, e) ? t[e] : void 0;
        if (0 !== s)
          if (s) i.push(s[2]);
          else {
            var r = new Promise(function (o, i) {
              s = t[e] = [o, i];
            });
            i.push((s[2] = r));
            var n = o.p + o.u(e),
              a = new Error(),
              l = function (i) {
                if (o.o(t, e) && ((s = t[e]), 0 !== s && (t[e] = void 0), s)) {
                  var r = i && ("load" === i.type ? "missing" : i.type),
                    n = i && i.target && i.target.src;
                  (a.message =
                    "Loading chunk " + e + " failed.\n(" + r + ": " + n + ")"),
                    (a.name = "ChunkLoadError"),
                    (a.type = r),
                    (a.request = n),
                    s[1](a);
                }
              };
            o.l(n, l, "chunk-" + e, e);
          }
      }),
        (o.O.j = function (e) {
          return 0 === t[e];
        });
      var e = function (e, i) {
          var s,
            r,
            n = i[0],
            a = i[1],
            l = i[2],
            c = 0;
          if (
            n.some(function (e) {
              return 0 !== t[e];
            })
          ) {
            for (s in a) o.o(a, s) && (o.m[s] = a[s]);
            if (l) var u = l(o);
          }
          for (e && e(i); c < n.length; c++)
            (r = n[c]), o.o(t, r) && t[r] && t[r][0](), (t[r] = 0);
          return o.O(u);
        },
        i = (self["webpackChunkvar_light"] =
          self["webpackChunkvar_light"] || []);
      i.forEach(e.bind(null, 0)), (i.push = e.bind(null, i.push.bind(i)));
    })();
  var i = o.O(void 0, [998], function () {
    return o(5329);
  });
  i = o.O(i);
})();
//# sourceMappingURL=app.7bd01f53.js.map
