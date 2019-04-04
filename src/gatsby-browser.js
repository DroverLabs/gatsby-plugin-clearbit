exports.onClientEntry = (options, pluginOptions) => {
  const {
    publishableKey = "",
    snippetVersion = "3.1.0",
    enableOnDevMode = false
  } = pluginOptions;

  const isEnabled =
    (process.env.NODE_ENV === "production" || enableOnDevMode) && appId;

  if (!isEnabled) return;

  /**
   * Clearbit provided snippet
   */
  const clearbit = (window.clearbit = window.clearbit || []);
  if (!clearbit.initialize) {
    if (clearbit.invoked) {
      window.console &&
        console.error &&
        console.error("Clearbit snippet included twice.");
    } else {
      clearbit.invoked = !0;
      clearbit.methods = [
        "trackSubmit",
        "trackClick",
        "trackLink",
        "trackForm",
        "pageview",
        "identify",
        "reset",
        "group",
        "track",
        "ready",
        "alias",
        "page",
        "once",
        "off",
        "on"
      ];
      clearbit.factory = function(t) {
        return function() {
          var e = Array.prototype.slice.call(arguments);
          e.unshift(t);
          clearbit.push(e);
          return clearbit;
        };
      };

      for (var t = 0; t < clearbit.methods.length; t++) {
        var e = clearbit.methods[t];
        clearbit[e] = clearbit.factory(e);
      }

      clearbit.load = function(t) {
        var e = document.createElement("script");
        e.async = !0;
        e.src = "https://js.clearbit.com/v1/" + t + "/clearbit.min.js";
        var n = document.getElementsByTagName("script")[0];
        n.parentNode.insertBefore(e, n);
      };

      clearbit.SNIPPET_VERSION = snippetVersion;
      clearbit.load(publishableKey);
      clearbit.page();
    }
  }
};
