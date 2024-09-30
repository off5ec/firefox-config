//Enable Custom Css and theme
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("userChrome.Tabs.Option8.Enabled", true);
// Disable geo-location
user_pref("geo.enabled", false);
// Disable Webrtc
user_pref("media.aboutwebrtc.auto_refresh.peerconnection_section", false);
user_pref("media.peerconnection.description.legacy.enabled", false);
user_pref("media.peerconnection.dtmf.enabled", true);
user_pref("media.peerconnection.ice.no_host", true);
user_pref("media.peerconnection.ice.relay_only", true);
user_pref("media.peerconnection.identity.enabled", true);
user_pref("media.peerconnection.turn.disable", false);
user_pref("media.peerconnection.scripttransform.enabled", false);
user_pref("media.peerconnection.video.enabled", true);
// No referrer if it's not same origin
user_pref("network.http.referer.XOriginPolicy", 2);
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);
// Disable automatic HTML5 playback
user_pref("media.autoplay.default", 5);
// Enable APS (Always Partitioning Storage)
user_pref("privacy.partition.always_partition_third_party_non_cookie_storage.exempt_sessionstorage", true);
// Disable pocket
user_pref("extensions.pocket.enabled", false);
// Clear everything on shutdown
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
user_pref("network.cookie.lifetimePolicy", 2);
user_pref("privacy.clearOnShutdown.sitesettings", true);
// Fingerprinting
// user_pref("privacy.resistFingerprinting", true);
user_pref("privacy.fingerprintingProtection", true);
user_pref("privacy.fingerprintingProtection.overrides", "+AllTargets,-CanvasImageExtractionPrompt,-CanvasExtractionBeforeUserInputIsBlocked");
// user_pref("privacy.resistFingerprinting.letterboxing", true);
// user_pref("privacy.resistFingerprinting.letterboxing.dimensions", "1600x900");
user_pref("browser.startup.blankWindow", false);
// Change accept header to a more common one
user_pref("network.http.accept-encoding.secure", "gzip, deflate, br");
// Disable account toolbar icon
user_pref("identity.fxaccounts.toolbar.enabled", false);
// Disable dropdown arrow for tab management
user_pref("browser.tabs.tabmanager.enabled", false);
// Set custom view, removes unnecessary butons in tab bar
user_pref("browser.uiCustomization.state", '{"placements":{"widget-overflow-fixed-list":[],"unified-extensions-area":["ublock0_raymondhill_net-browser-action"],"nav-bar":["back-button","forward-button","stop-reload-button","customizableui-special-spring1","urlbar-container","customizableui-special-spring2","downloads-button","unified-extensions-button"],"toolbar-menubar":["menubar-items"],"TabsToolbar":["tabbrowser-tabs","new-tab-button","alltabs-button"],"PersonalToolbar":["import-button","personal-bookmarks"]},"seen":["save-to-pocket-button","developer-button"],"dirtyAreaCache":["nav-bar","PersonalToolbar","TabsToolbar"],"currentVersion":20,"newElementCount":2}');
// Remove bookmarks toolbar
user_pref("browser.toolbars.bookmarks.visibility", "never");
// Set DuckDuckGo as your default search engine
user_pref("browser.urlbar.recentsearches.lastDefaultChanged", "1725606285093");
user_pref("browser.urlbar.placeholderName", "DuckDuckGo");
user_pref("browser.urlbar.placeholderName.private", "DuckDuckGo");
user_pref("browser.search.separatePrivateDefault", false);
user_pref("browser.search.separatePrivateDefault.ui.enabled", true);
// Remove search suggestions
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.showSearchSuggestionsFirst", false);
user_pref("browser.urlbar.suggest.bookmark", false);
user_pref("browser.urlbar.suggest.engines", false);
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.recentsearches", false);
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.suggest.topsites", false);
// Enable DNT and Do not sell / share my data
user_pref("privacy.donottrackheader.enabled", true);
user_pref("privacy.globalprivacycontrol.enabled", true);
user_pref("privacy.globalprivacycontrol.was_ever_enabled", true);
// Disable autofill
user_pref("signon.autofillForms", false);
user_pref("signon.firefoxRelay.feature", "disabled");
user_pref("signon.generation.enabled", false);
user_pref("signon.management.page.breach-alerts.enabled", false);
user_pref("signon.rememberSignons", false);
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
// Remove shortcuts and recommended from new tab page
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);
//Show confirmation window before closing multiple tabs
user_pref("browser.tabs.warnOnClose", true);
//Disable spell check as you type
user_pref("layout.spellcheckDefault", 0);
//Download settings
user_pref("browser.download.useDownloadDir", false);
user_pref("browser.download.always_ask_before_handling_new_types", true);
//Disable picture in picture video controls
user_pref("media.videocontrols.picture-in-picture.video-toggle.enabled", false);
//Disable touch keyboard
user_pref("ui.osk.enabled", false);
//Disable tab image preview on hover
user_pref("browser.tabs.hoverPreview.showThumbnails", false);
//Custom history
user_pref("privacy.history.custom", true);
user_pref("browser.formfill.enable", false);
user_pref("places.history.enabled", false);
//Disable Unnecessary Animations
user_pref("toolkit.cosmeticAnimations.enabled", false);
user_pref("ui.prefersReducedMotion", 1);
user_pref("full-screen-api.warning.delay", 50);
user_pref("full-screen-api.warning.timeout", 50);
user_pref("full-screen-api.transition-duration.enter", 0);
user_pref("full-screen-api.transition-duration.leave", 0);
user_pref("full-screen-api.transition.timeout", 0);
//Disable Welcome Notices
user_pref("browser.startup.homepage_override.mstone", "ignore"); // [detecting that an update has occured to open a page at startup] When a user starts up their browser, this preference is examined. If its value differs from the browser’s current milestone, then the user is redirected to the homepage specified in startup.homepage_override_url and this preference’s value is updated to the current milestone.
user_pref("startup.homepage_welcome_url", ""); // When Firefox is started with a new profile (usually, the first time it’s started after installation), the URL specified in this preference will be loaded (even if the user imported their own homepage). This is similar to startup.homepage_override_url, which specifies the URL loaded when Firefox is first started after an upgrade, but this preference allows specifying the page a first-time user would see.
user_pref("startup.homepage_welcome_url.additional", "");
user_pref("startup.homepage_override_url", ""); // When a user starts up their browser after upgrading (i.e., if browser.startup.homepage_override.mstone is different than the last time the browser started), the URL specified in this preference is loaded instead of their homepage.
user_pref("browser.messaging-system.whatsNewPanel.enabled", false); // disable What's New toolbar icon [FF69+] 
user_pref("browser.laterrun.enabled", false); // (false=default, at least in Nightly) laterrun shows some mozilla pages to "new users"
user_pref("browser.usedOnWindows10.introURL", ""); // Disable first run splash page on Windows 10 [and possibly 11 since it's the same NT version under the hood]
//Disable Saving Thumbnails
user_pref("browser.pagethumbnails.capturing_disabled", true);
user_pref("pageThumbs.enabled", false);
user_pref("browser.shell.shortcutFavicons", false); // URL shortcut files use a cached .ico file (randomly named) which is stored in your profile/shortcutCache directory. The .ico remains after the shortcut is deleted. If set to false then the shortcuts use a generic Firefox icon
//Increase Image Processing Speed
user_pref("image.mem.decode_bytes_at_a_time", 131072); // The speed of processing images (default=16384=16KB) (131072=128KB)
//Disable Accessibility
user_pref("accessibility.force_disabled", 1); // 1=always off
//Disable Disk Cache
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.memory.enable", true);
user_pref("browser.sessionstore.interval", 1000000); // (in milliseconds) default=15000=15sec, 300000=5min, 1200000=20min. This is only relevant to restoring the session in case of a crash. The session also gets saved independently at browser shutdown. (https://support.mozilla.org/en-US/questions/1257866)
//Disable Image Cache
user_pref("image.mem.surfacecache.max_size_kb", 500000); // ~500mb, default=2GB. A cache for decoded images (inferred based on the name and other related settings which can be found on https://searchfox.org)
//Enable Play DRM Content
user_pref("media.eme.enabled", true);