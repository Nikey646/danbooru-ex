import jQuery from "jquery";
import moment from "moment";
window.moment = moment;

import Config from "./config.js";
import DText from "./dtext.js";
import Resource from "./resource.js";
import UI from "./ui.js";
import "./danbooru-ex.scss";

export default window.EX = class EX {
  static get Config() { return Config; }
  static get DText() { return DText; }
  static get Resource() { return Resource; }
  static get UI() { return UI; }

  static initialize() {
    console.timeEnd("preinit");

    console.groupCollapsed("settings");
    EX.config = new EX.Config();

    EX.config.enableHeader && UI.Header.initialize();
    EX.UI.initialize();
    EX.config.enableNotesLivePreview && EX.UI.Notes.initialize();
    EX.config.usernameTooltips && EX.UI.Users.initializeUserLinks();

    EX.config.artistsRedesign && EX.UI.Artists.initialize();
    EX.config.commentsRedesign && EX.UI.Comments.initialize();
    EX.config.forumRedesign && EX.UI.ForumPosts.initialize();
    EX.config.poolsRedesign && EX.UI.Pools.initialize();
    EX.config.postsRedesign && EX.UI.Posts.initialize();
    EX.config.postVersionsRedesign && EX.UI.PostVersions.initialize();
    EX.config.wikiRedesign && EX.UI.WikiPages.initialize();
    EX.config.usersRedesign && EX.UI.Users.initialize();

    console.groupEnd("settings");
    console.timeEnd("initialized");
  }
}

console.log("Danbooru:", window.Danbooru);
console.log("EX:", EX);

console.timeEnd("loaded");
$(function () {
  try {
    EX.initialize();
  } catch(e) {
    console.trace(e);
    $("footer").append(`<div class="ex-error">Danbooru EX error: ${e}</div>`);
    throw e;
  }
});
