import _ from "lodash";

export default class Config {
  static get Defaults() {
    return {
      schemaVersion: 1,
      enableHeader: true,
      enableModeMenu: true,
      enablePreviewPanel: true,
      showThumbnailPreviews: true,
      showPostLinkPreviews: true,
      usernameTooltips: true,
      styleWikiLinks: true,
      useRelativeTimestamps: true,
      resizeableSidebars: true,

      thumbnailPreviewDelay: 650,
      defaultSidebarWidth: "15em",

      sidebarState: {},
      previewPanelState: {},
      modeMenuState: "view",
      tagScriptNumber: 1,
      tagScripts: _.fill(Array(10), ""),
      headerState: "ex-fixed",
    };
  }

  constructor() {
    this.storage = window.localStorage;
  }

  get(key) {
    const value = this.storage["EX.config." + key]

    return (value === undefined) ? Config.Defaults[key] : JSON.parse(value);
  }

  set(key, value) {
    this.storage["EX.config." + key] = JSON.stringify(value);
    return this;
  }

  get all() {
    return _.mapValues(Config.Defaults, (v, k) => this.get(k));
  }

  reset() {
    _(Config.Defaults).keys().each(key => {
      delete this.storage["EX.config." + key]
    });

    return this;
  }

  pageKey() {
    const controller = $("#page > div:nth-child(2)").attr("id");
    const action = $("#page > div:nth-child(2) > div").attr("id");
    return `${controller} ${action}`;
  }
}

// Define getters/setters for `Config.showHeaderBar` et al.
for (const key of _.keys(Config.Defaults)) {
  Object.defineProperty(Config.prototype, key, {
    get: function ()  { return this.get(key) },
    set: function (v) { return this.set(key, v) },
    enumerable: true,
    configurable: true,
  });
}
