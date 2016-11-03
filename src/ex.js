import _ from "lodash";
import jQuery from "jquery";
import moment from "moment";

import Config from "./config.js";
import DText from "./dtext.js";
import Tag   from "./tag.js";
import UI    from "./ui.js";
import "./danbooru-ex.css";

export default class EX {
  static get Config() { return Config; }
  static get DText() { return DText; }
  static get Tag() { return Tag; }
  static get UI() { return UI; }

  static search(url, search, { limit, page } = {}) {
    return $.getJSON(url, { search, limit: limit || 1000, page: page || 1 });
  }

  static initialize() {
    EX.config = new Config();
   $("footer").append(
     ` – Danbooru EX (<a href="#" onclick="confirm('Reset Danbooru EX settings?') && EX.config.reset();">reset</a>)`
    );


    EX.config.enableHeader && UI.Header.initialize();

    EX.UI.initialize();
    EX.config.artistsRedesign && EX.UI.Artists.initialize();
    EX.config.commentsRedesign && EX.UI.Comments.initialize();
    EX.config.forumRedesign && EX.UI.ForumPosts.initialize();
    EX.config.poolsRedesign && EX.UI.Pools.initialize();
    EX.config.postsRedesign && EX.UI.Posts.initialize();
    EX.config.postVersionsRedesign && EX.UI.PostVersions.initialize();
    EX.config.wikiRedesign && EX.UI.WikiPages.initialize();
  }
}

window.EX = EX;
window.moment = moment;

jQuery(function () {
  try {
    EX.initialize();
  } catch(e) {
    $("footer").append(`<div class="ex-error">Danbooru EX error: ${e}</div>`);
    throw e;
  }
});
