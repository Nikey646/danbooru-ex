// ==UserScript==
// @name         Danbooru EX
// @namespace    https://github.com/evazion/danbooru-ex
// @version      1302
// @source       https://danbooru.donmai.us/users/52664
// @description  Danbooru UI Enhancements
// @author       evazion
// @match        *://*.donmai.us/*
// @match        *://localhost/*
// @grant        none
// @run-at       document-body
// @updateURL    https://github.com/evazion/danbooru-ex/raw/stable/dist/danbooru-ex.user.js
// @downloadURL  https://github.com/evazion/danbooru-ex/raw/stable/dist/danbooru-ex.user.js
// @require      https://raw.githubusercontent.com/jquery/jquery-ui/1.11.2/ui/selectable.js
// @require      https://raw.githubusercontent.com/jquery/jquery-ui/1.11.2/ui/tooltip.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.14.1/moment.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.15.0/lodash.js
// @require      https://unpkg.com/filesize@3.3.0
// ==/UserScript==

/*
 * What is a userscript? A miserable pile of hacks.
 */

/*
 * Danbooru EX user settings.
 *
 * To disable a setting, remove the "//" in front of `EX.config.setting = false;`
 */

//$(function () {
//EX.config = new EX.Config();

// Disable the new header bar that contains the search box and mode menu.
// EX.config.enableHeader = false;

// Disable the new mode menu with the new tag script and preview modes. Enables the old mode menu.
// EX.config.enableModeMenu = false;

// Disable the image preview panel.
// EX.config.enablePreviewPanel = false;

// Enable thumbnail previews when hovering over thumbnails.
// EX.config.showThumbnailPreviews = false;

// Set the hover delay in milliseconds before the preview appears.
// EX.config.thumbnailPreviewDelay = 600;

// Disable thumbnail previews when hovering over post #1234 links.
// EX.config.showPostLinkPreviews = false;

// Disable tooltips on usernames.
// EX.config.usernameTooltips = false;

// Disable tag tooltips, colorizing tags in the wiki and forum, and underlining
// links to nonexistent tags.
// EX.config.styleWikiLinks = false;

// Disable replacing fixed dates ("2016-08-10") with relative times ("3 months ago").
// EX.config.useRelativeTimestamps = false;

// Disable the resizeable tag sidebar.
// EX.config.resizeableSidebars = false;

// Disable the redesigned /artists index.
// EX.config.artistsRedesign = false;

// Disable comment scores and extra post info in /comments.
// EX.config.commentsRedesign = false;

// Disable replacing the Permalink on forum posts with "Forum #1234".
// EX.config.forumRedesign = false;

// Disables moving artist tags to the top of the tag list, putting tag counts
// next to the artist/copy/char/gentag headers, and the rating/upvoting hotkeys.
// EX.config.postsRedesign = false;

// Disable thumbnails on /post_versions pages.
// EX.config.postVersionsRedesign = false;

// Disable making wiki headings collapsible and autogenerated tables of
// contents for long wiki pages.
// EX.config.wikiRedesign = false;

//});
