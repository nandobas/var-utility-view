(function () {
  "use strict";
  var t = {
      7054: function (t, o, e) {
        var i = e(6154),
          n = e(144),
          a = e(998),
          s = e(6843),
          r = e(5550),
          l = e(6312),
          c = e(6570),
          u = e(9223),
          p = e(4324),
          m = e(5495),
          h = e(5808),
          d = e(4525),
          Z = e(655),
          g = e(4611),
          f = e(3059),
          v = e(2954),
          y = e(3687),
          w = function () {
            var t = this,
              o = t._self._c;
            return o(
              a.Z,
              { attrs: { id: "inspire" } },
              [
                o(
                  v.Z,
                  {
                    attrs: { app: "" },
                    model: {
                      value: t.drawer,
                      callback: function (o) {
                        t.drawer = o;
                      },
                      expression: "drawer",
                    },
                  },
                  [
                    o(
                      d.Z,
                      [
                        o(
                          Z.km,
                          [
                            o(Z.V9, { staticClass: "text-h6" }, [
                              t._v(" Var Light "),
                            ]),
                            o(Z.oZ, [t._v(" var-utility ")]),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    o(u.Z),
                    o(
                      h.Z,
                      { attrs: { dense: "", nav: "" } },
                      t._l(t.items, function (e) {
                        return o(
                          d.Z,
                          { key: e.title, attrs: { to: e.to, link: "" } },
                          [
                            o(g.Z, [o(p.Z, [t._v(t._s(e.icon))])], 1),
                            o(Z.km, [o(Z.V9, [t._v(t._s(e.title))])], 1),
                          ],
                          1
                        );
                      }),
                      1
                    ),
                  ],
                  1
                ),
                o(
                  s.Z,
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
                        fn: function ({ props: e }) {
                          return [
                            o(
                              m.Z,
                              t._b(
                                {
                                  attrs: {
                                    gradient:
                                      "to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)",
                                  },
                                },
                                "v-img",
                                e,
                                !1
                              )
                            ),
                          ];
                        },
                      },
                    ]),
                  },
                  [
                    o(r.Z, {
                      on: {
                        click: function (o) {
                          t.drawer = !t.drawer;
                        },
                      },
                    }),
                    o(l.Z, { staticClass: "title" }),
                    o(y.Z),
                    o("span", { staticStyle: { "margin-top": "5px" } }, [
                      t._v("Sync"),
                    ]),
                    o(
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
                    o(
                      c.Z,
                      { attrs: { icon: "" } },
                      [o(p.Z, [t._v("mdi-dots-vertical")])],
                      1
                    ),
                  ],
                  1
                ),
                o(f.Z, [o("router-view")], 1),
              ],
              1
            );
          },
          z = [],
          C = {
            data() {
              return {
                drawer: !1,
                items: [
                  { title: "Controller", icon: "mdi-view-dashboard", to: "/" },
                  { title: "About", icon: "mdi-help-box", to: "about" },
                ],
                syncOn: !1,
              };
            },
            methods: {
              async VerifyConnection() {
                let t = !0;
                (this.syncOn = !0),
                  await this.$axios
                    .get("http://192.168.100.43:8088/api/?")
                    .then(function (o) {
                      t = !0;
                    })
                    .catch(function (o) {
                      t = !1;
                    }),
                  (this.syncOn = t);
              },
            },
            created: function () {
              this.VerifyConnection();
              setInterval(() => {
                this.VerifyConnection();
              }, 1e4);
            },
          },
          S = C,
          b = e(1001),
          I = (0, b.Z)(S, w, z, !1, null, null, null),
          k = I.exports,
          P = e(6560);
        n.ZP.use(P.Z);
        var x = new P.Z({}),
          T = e(8345),
          _ = e(266),
          M = e(2118),
          O = e(1713),
          V = function () {
            var t = this,
              o = t._self._c;
            t._self._setupProxy;
            return o(
              M.Z,
              {
                staticClass: "grey lighten-1",
                staticStyle: { width: "100%", "max-width": "1899px" },
              },
              [
                o(
                  O.Z,
                  [
                    o(
                      _.Z,
                      { staticClass: "grey", attrs: { cols: "3" } },
                      [
                        o(
                          O.Z,
                          {
                            staticStyle: { width: "650px" },
                            attrs: { "no-gutters": "" },
                          },
                          [
                            o(
                              _.Z,
                              {
                                staticClass: "text-center",
                                attrs: { md: "2" },
                              },
                              [
                                o(
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
                                      click: function (o) {
                                        return t.MoveUpLeft();
                                      },
                                    },
                                  },
                                  [o(p.Z, [t._v("mdi-arrow-top-left")])],
                                  1
                                ),
                              ],
                              1
                            ),
                            o(
                              _.Z,
                              {
                                staticClass: "text-center ml-n1",
                                attrs: { md: "2" },
                              },
                              [
                                o(
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
                                      click: function (o) {
                                        return t.MoveUp();
                                      },
                                    },
                                  },
                                  [o(p.Z, [t._v("mdi-arrow-up")])],
                                  1
                                ),
                              ],
                              1
                            ),
                            o(
                              _.Z,
                              {
                                staticClass: "text-center",
                                attrs: { md: "2" },
                              },
                              [
                                o(
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
                                      click: function (o) {
                                        return t.MoveUpRight();
                                      },
                                    },
                                  },
                                  [o(p.Z, [t._v("mdi-arrow-top-right")])],
                                  1
                                ),
                              ],
                              1
                            ),
                            o(
                              _.Z,
                              {
                                staticClass: "text-center",
                                attrs: { md: "2" },
                              },
                              [
                                o(
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
                                      click: function (o) {
                                        return t.ZoomIn();
                                      },
                                    },
                                  },
                                  [o("span", [t._v("ZOOM IN")])]
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        o(
                          O.Z,
                          {
                            staticStyle: { width: "650px" },
                            attrs: { "no-gutters": "" },
                          },
                          [
                            o(
                              _.Z,
                              {
                                staticClass: "text-center mt-1",
                                attrs: { md: "2" },
                              },
                              [
                                o(
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
                                      click: function (o) {
                                        return t.MoveLeft();
                                      },
                                    },
                                  },
                                  [o(p.Z, [t._v("mdi-arrow-left")])],
                                  1
                                ),
                              ],
                              1
                            ),
                            o(
                              _.Z,
                              {
                                staticClass: "text-center mt-1 ml-n1",
                                attrs: { md: "2" },
                              },
                              [
                                o(
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
                                      click: function (o) {
                                        return t.PTZHome();
                                      },
                                    },
                                  },
                                  [o(p.Z, [t._v("mdi-circle-outline")])],
                                  1
                                ),
                              ],
                              1
                            ),
                            o(
                              _.Z,
                              {
                                staticClass: "text-center mt-1 ml-n1",
                                attrs: { md: "2" },
                              },
                              [
                                o(
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
                                      click: function (o) {
                                        return t.MoveRight();
                                      },
                                    },
                                  },
                                  [o(p.Z, [t._v("mdi-arrow-right")])],
                                  1
                                ),
                              ],
                              1
                            ),
                            o(
                              _.Z,
                              {
                                staticClass: "text-center mt-1 ml-1",
                                attrs: { md: "2" },
                              },
                              [
                                o(
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
                                      click: function (o) {
                                        return t.ZoomOut();
                                      },
                                    },
                                  },
                                  [o("span", [t._v("ZOOM OUT")])]
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        o(
                          O.Z,
                          {
                            staticStyle: { width: "650px" },
                            attrs: { "no-gutters": "" },
                          },
                          [
                            o(
                              _.Z,
                              {
                                staticClass: "text-center",
                                attrs: { md: "2" },
                              },
                              [
                                o(
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
                                  [o(p.Z, [t._v("mdi-arrow-bottom-left")])],
                                  1
                                ),
                              ],
                              1
                            ),
                            o(
                              _.Z,
                              {
                                staticClass: "text-center",
                                attrs: { md: "2" },
                              },
                              [
                                o(
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
                                  [o(p.Z, [t._v("mdi-arrow-down")])],
                                  1
                                ),
                              ],
                              1
                            ),
                            o(
                              _.Z,
                              {
                                staticClass: "text-center",
                                attrs: { md: "2" },
                              },
                              [
                                o(
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
                                  [o(p.Z, [t._v("mdi-arrow-bottom-right")])],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        o(
                          O.Z,
                          [
                            o(
                              _.Z,
                              [
                                o(
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
                                      click: function (o) {
                                        return t.ReplayXCameraY("B", 1);
                                      },
                                    },
                                  },
                                  [o("span", [t._v("CAM 1")])]
                                ),
                              ],
                              1
                            ),
                            o(
                              _.Z,
                              [
                                o(
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
                                      click: function (o) {
                                        return t.ReplayXCameraY("B", 2);
                                      },
                                    },
                                  },
                                  [o("span", [t._v("CAM 2")])]
                                ),
                              ],
                              1
                            ),
                            o(
                              _.Z,
                              [
                                o(
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
                                      click: function (o) {
                                        return t.ReplayXCameraY("B", 3);
                                      },
                                    },
                                  },
                                  [o("span", [t._v("CAM 3")])]
                                ),
                              ],
                              1
                            ),
                            o(
                              _.Z,
                              [
                                o(
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
                                      click: function (o) {
                                        return t.ReplayXCameraY("B", 4);
                                      },
                                    },
                                  },
                                  [o("span", [t._v("CAM 4")])]
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
                    o(
                      _.Z,
                      { staticClass: "blue", attrs: { cols: "3" } },
                      [
                        o(O.Z, { staticStyle: { height: "57%" } }, [o(_.Z)], 1),
                        o(
                          O.Z,
                          [
                            o(_.Z),
                            o(
                              _.Z,
                              [
                                o(
                                  c.Z,
                                  {
                                    key: "tela-dupla",
                                    attrs: {
                                      elevation: "2",
                                      outlined: "",
                                      color: "yellow",
                                    },
                                  },
                                  [o("span", [t._v("TELA DUPLA")])]
                                ),
                              ],
                              1
                            ),
                            o(_.Z),
                          ],
                          1
                        ),
                        o(
                          O.Z,
                          [
                            o(_.Z),
                            o(
                              _.Z,
                              [
                                o(
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
                                  [o("span", [t._v("PIP E")])]
                                ),
                              ],
                              1
                            ),
                            o(
                              _.Z,
                              [
                                o(
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
                                  [o("span", [t._v("PIP D")])]
                                ),
                              ],
                              1
                            ),
                            o(_.Z),
                          ],
                          1
                        ),
                        o(
                          O.Z,
                          [
                            o(
                              _.Z,
                              [
                                o(
                                  c.Z,
                                  {
                                    key: "pip-cam-1",
                                    attrs: {
                                      elevation: "2",
                                      outlined: "",
                                      color: "white",
                                    },
                                  },
                                  [o("span", [t._v("CAM 1")])]
                                ),
                              ],
                              1
                            ),
                            o(
                              _.Z,
                              [
                                o(
                                  c.Z,
                                  {
                                    key: "pip-cam-2",
                                    attrs: {
                                      elevation: "2",
                                      outlined: "",
                                      color: "white",
                                    },
                                  },
                                  [o("span", [t._v("CAM 2")])]
                                ),
                              ],
                              1
                            ),
                            o(
                              _.Z,
                              [
                                o(
                                  c.Z,
                                  {
                                    key: "pip-cam-3",
                                    attrs: {
                                      elevation: "2",
                                      outlined: "",
                                      color: "white",
                                    },
                                  },
                                  [o("span", [t._v("CAM 3")])]
                                ),
                              ],
                              1
                            ),
                            o(
                              _.Z,
                              [
                                o(
                                  c.Z,
                                  {
                                    key: "pip-cam-4",
                                    attrs: {
                                      elevation: "2",
                                      outlined: "",
                                      color: "white",
                                    },
                                  },
                                  [o("span", [t._v("CAM 4")])]
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
                    o(_.Z, {
                      staticClass: "yelow float-right",
                      attrs: { cols: "4" },
                    }),
                    o(_.Z, {
                      staticClass: "green float-right",
                      attrs: { cols: "2" },
                    }),
                  ],
                  1
                ),
                o(
                  O.Z,
                  [
                    o(
                      _.Z,
                      { staticClass: "grey", attrs: { cols: "3" } },
                      [
                        o(
                          O.Z,
                          { staticStyle: { height: "150px" } },
                          [o(_.Z, { attrs: { md: "2" } })],
                          1
                        ),
                        o(
                          O.Z,
                          {
                            staticStyle: { width: "650px" },
                            attrs: { "no-gutters": "" },
                          },
                          [
                            o(
                              _.Z,
                              {
                                staticClass: "text-center",
                                attrs: { md: "3" },
                              },
                              [
                                o(
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
                                      click: function (o) {
                                        return t.ScriptStart();
                                      },
                                    },
                                  },
                                  [
                                    o(p.Z, { attrs: { "x-large": "" } }, [
                                      t._v("mdi-play-circle-outline"),
                                    ]),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            o(
                              _.Z,
                              { staticClass: "text-center" },
                              [
                                o(
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
                                      click: function (o) {
                                        return t.ReplayPause();
                                      },
                                    },
                                  },
                                  [
                                    o(p.Z, { attrs: { "x-large": "" } }, [
                                      t._v("mdi-pause-circle-outline"),
                                    ]),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            o(_.Z, {
                              staticClass: "text-center",
                              attrs: { md: "2" },
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    o(
                      _.Z,
                      { staticClass: "blue", attrs: { cols: "3" } },
                      [o(O.Z, { staticStyle: { height: "57%" } }, [o(_.Z)], 1)],
                      1
                    ),
                    o(_.Z, {
                      staticClass: "yelow float-right",
                      attrs: { cols: "4" },
                    }),
                    o(_.Z, {
                      staticClass: "green float-right",
                      attrs: { cols: "2" },
                    }),
                  ],
                  1
                ),
              ],
              1
            );
          },
          F = [],
          $ = {
            data() {
              return {
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
            methods: {
              setZoom(t) {
                this.$axios.get(
                  "http://192.168.100.43:8088/api/?Function=SetZoom&Input=" +
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
                  "http://192.168.100.43:8088/api/?Function=PTZZoomIn&Input=" +
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
                  "http://192.168.100.43:8088/api/?Function=PTZZoomOut&Input=" +
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
                  "http://192.168.100.43:8088/api/?Function=PTZZoomStop&Input=" +
                    this.zoomInput
                );
              },
              moveStop() {
                this.$axios.get(
                  "http://192.168.100.43:8088/api/?Function=PTZMoveStop&Input=" +
                    this.zoomInput
                );
              },
              MoveUpLeft() {
                this.$axios.get(
                  "http://192.168.100.43:8088/api/?Function=PTZMoveUpLeft&Input=" +
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
                  "http://192.168.100.43:8088/api/?Function=PTZMoveUp&Input=" +
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
                  "http://192.168.100.43:8088/api/?Function=PTZMoveUpRight&Input=" +
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
                  "http://192.168.100.43:8088/api/?Function=PTZMoveLeft&Input=" +
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
                  "http://192.168.100.43:8088/api/?Function=PTZMoveRight&Input=" +
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
                  "http://192.168.100.43:8088/api/?Function=PTZMoveDownLeft&Input=" +
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
                  "http://192.168.100.43:8088/api/?Function=PTZMoveDown&Input=" +
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
                  "http://192.168.100.43:8088/api/?Function=PTZMoveDownRight&Input=" +
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
                  "http://192.168.100.43:8088/api/?Function=PTZHome&Input=" +
                    this.zoomInput
                );
              },
              async ReplayXCameraY(t, o) {
                let e = !1;
                await this.$axios
                  .get(
                    "http://192.168.100.43:8088/api/?Function=Replay" +
                      t +
                      "Camera" +
                      o
                  )
                  .then(function (t) {
                    console.log(t), (e = !0);
                  })
                  .catch(function (t) {
                    console.log(t);
                  }),
                  (this.zoomCamIsToggled = { 1: !1, 2: !1, 3: !1, 4: !1 }),
                  e
                    ? (this.zoomCamIsToggled[o] = !this.zoomCamIsToggled[o])
                    : ((this.zoomCamIsIsError[o] = !0),
                      setTimeout(() => {
                        this.zoomCamIsIsError[o] = !1;
                      }, 2e3));
              },
              async ScriptStart() {
                let t = !1;
                (this.scriptStartIsToggle = !0),
                  (this.replayPauseIsToggle = !1),
                  await this.$axios
                    .get(
                      "http://192.168.100.43:8088/api/?Function=ReplayFastBackward&Value=" +
                        this.replaySpeed
                    )
                    .then(function (o) {
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
                    .get("http://192.168.100.43:8088/api/?Function=ReplayPause")
                    .then(function (o) {
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
          R = $,
          A = (0, b.Z)(R, V, F, !1, null, null, null),
          E = A.exports;
        n.ZP.use(T.ZP);
        const L = [
            { path: "/", name: "controller", component: E },
            {
              path: "/about",
              name: "about",
              component: () => e.e(443).then(e.bind(e, 6374)),
            },
          ],
          j = new T.ZP({ routes: L });
        var D = j,
          U = e(629);
        n.ZP.use(U.ZP);
        var B = new U.ZP.Store({
            state: {},
            getters: {},
            mutations: {},
            actions: {},
            modules: {},
          }),
          X = e(8828);
        const Y = (0, X.longClickDirective)({ delay: 400, interval: 50 });
        (n.ZP.config.productionTip = !1),
          (n.ZP.prototype.$axios = i.Z),
          n.ZP.directive("longclick", Y),
          new n.ZP({
            router: D,
            store: B,
            vuetify: x,
            axios: i.Z,
            render: (t) => t(k),
          }).$mount("#app");
      },
    },
    o = {};
  function e(i) {
    var n = o[i];
    if (void 0 !== n) return n.exports;
    var a = (o[i] = { exports: {} });
    return t[i].call(a.exports, a, a.exports, e), a.exports;
  }
  (e.m = t),
    (function () {
      var t = [];
      e.O = function (o, i, n, a) {
        if (!i) {
          var s = 1 / 0;
          for (u = 0; u < t.length; u++) {
            (i = t[u][0]), (n = t[u][1]), (a = t[u][2]);
            for (var r = !0, l = 0; l < i.length; l++)
              (!1 & a || s >= a) &&
              Object.keys(e.O).every(function (t) {
                return e.O[t](i[l]);
              })
                ? i.splice(l--, 1)
                : ((r = !1), a < s && (s = a));
            if (r) {
              t.splice(u--, 1);
              var c = n();
              void 0 !== c && (o = c);
            }
          }
          return o;
        }
        a = a || 0;
        for (var u = t.length; u > 0 && t[u - 1][2] > a; u--) t[u] = t[u - 1];
        t[u] = [i, n, a];
      };
    })(),
    (function () {
      e.n = function (t) {
        var o =
          t && t.__esModule
            ? function () {
                return t["default"];
              }
            : function () {
                return t;
              };
        return e.d(o, { a: o }), o;
      };
    })(),
    (function () {
      e.d = function (t, o) {
        for (var i in o)
          e.o(o, i) &&
            !e.o(t, i) &&
            Object.defineProperty(t, i, { enumerable: !0, get: o[i] });
      };
    })(),
    (function () {
      (e.f = {}),
        (e.e = function (t) {
          return Promise.all(
            Object.keys(e.f).reduce(function (o, i) {
              return e.f[i](t, o), o;
            }, [])
          );
        });
    })(),
    (function () {
      e.u = function (t) {
        return "about.c09a8d87.js";
      };
    })(),
    (function () {
      e.miniCssF = function (t) {};
    })(),
    (function () {
      e.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (t) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      e.o = function (t, o) {
        return Object.prototype.hasOwnProperty.call(t, o);
      };
    })(),
    (function () {
      var t = {},
        o = "var-light:";
      e.l = function (i, n, a, s) {
        if (t[i]) t[i].push(n);
        else {
          var r, l;
          if (void 0 !== a)
            for (
              var c = document.getElementsByTagName("script"), u = 0;
              u < c.length;
              u++
            ) {
              var p = c[u];
              if (
                p.getAttribute("src") == i ||
                p.getAttribute("data-webpack") == o + a
              ) {
                r = p;
                break;
              }
            }
          r ||
            ((l = !0),
            (r = document.createElement("script")),
            (r.charset = "utf-8"),
            (r.timeout = 120),
            e.nc && r.setAttribute("nonce", e.nc),
            r.setAttribute("data-webpack", o + a),
            (r.src = i)),
            (t[i] = [n]);
          var m = function (o, e) {
              (r.onerror = r.onload = null), clearTimeout(h);
              var n = t[i];
              if (
                (delete t[i],
                r.parentNode && r.parentNode.removeChild(r),
                n &&
                  n.forEach(function (t) {
                    return t(e);
                  }),
                o)
              )
                return o(e);
            },
            h = setTimeout(
              m.bind(null, void 0, { type: "timeout", target: r }),
              12e4
            );
          (r.onerror = m.bind(null, r.onerror)),
            (r.onload = m.bind(null, r.onload)),
            l && document.head.appendChild(r);
        }
      };
    })(),
    (function () {
      e.r = function (t) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      };
    })(),
    (function () {
      e.p = "/";
    })(),
    (function () {
      var t = { 143: 0 };
      (e.f.j = function (o, i) {
        var n = e.o(t, o) ? t[o] : void 0;
        if (0 !== n)
          if (n) i.push(n[2]);
          else {
            var a = new Promise(function (e, i) {
              n = t[o] = [e, i];
            });
            i.push((n[2] = a));
            var s = e.p + e.u(o),
              r = new Error(),
              l = function (i) {
                if (e.o(t, o) && ((n = t[o]), 0 !== n && (t[o] = void 0), n)) {
                  var a = i && ("load" === i.type ? "missing" : i.type),
                    s = i && i.target && i.target.src;
                  (r.message =
                    "Loading chunk " + o + " failed.\n(" + a + ": " + s + ")"),
                    (r.name = "ChunkLoadError"),
                    (r.type = a),
                    (r.request = s),
                    n[1](r);
                }
              };
            e.l(s, l, "chunk-" + o, o);
          }
      }),
        (e.O.j = function (o) {
          return 0 === t[o];
        });
      var o = function (o, i) {
          var n,
            a,
            s = i[0],
            r = i[1],
            l = i[2],
            c = 0;
          if (
            s.some(function (o) {
              return 0 !== t[o];
            })
          ) {
            for (n in r) e.o(r, n) && (e.m[n] = r[n]);
            if (l) var u = l(e);
          }
          for (o && o(i); c < s.length; c++)
            (a = s[c]), e.o(t, a) && t[a] && t[a][0](), (t[a] = 0);
          return e.O(u);
        },
        i = (self["webpackChunkvar_light"] =
          self["webpackChunkvar_light"] || []);
      i.forEach(o.bind(null, 0)), (i.push = o.bind(null, i.push.bind(i)));
    })();
  var i = e.O(void 0, [998], function () {
    return e(7054);
  });
  i = e.O(i);
})();
//# sourceMappingURL=app.b60701d5.js.map
