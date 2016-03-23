//ANTHONY
window.AMP_CONFIG={canary:false};/*AMP_CONFIG*/try{(function(){(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.__esModule = true;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * URLs to prefetch for a given ad type.
 *
 * This MUST be kept in sync with actual implementation.
 *
 * @const {!Object<string, (string|!Array<string>)>}
 */
var adPrefetch = {
  doubleclick: ['https://www.googletagservices.com/tag/js/gpt.js', 'https://securepubads.g.doubleclick.net/static/glade.js'],
  a9: 'https://c.amazon-adsystem.com/aax2/assoc.js',
  adsense: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
  dotandads: 'https://amp.ad.dotandad.com/dotandadsAmp.js',
  mediaimpact: 'https://ec-ns.sascdn.com/diff/251/divscripte/amp.js',
  smartadserver: 'https://ec-ns.sascdn.com/diff/js/smart.js',
  nativo: 'https://s.ntv.io/serve/load.js',
  yieldmo: 'https://static.yieldmo.com/ym.amp1.js',
  revcontent: 'https://labs-cdn.revcontent.com/build/amphtml/revcontent.amp.min.js',
  teads: 'https://cdn.teads.tv/media/format/v3/teads-format.min.js'
};

exports.adPrefetch = adPrefetch;
/**
 * URLs to connect to for a given ad type.
 *
 * This MUST be kept in sync with actual implementation.
 *
 * @const {!Object<string, (string|!Array<string>)>}
 */
var adPreconnect = {
  adform: 'https://track.adform.net',
  adreactor: 'https://adserver.adreactor.com',
  adsense: 'https://googleads.g.doubleclick.net',
  taboola: ['https://cdn.taboola.com', 'https://trc.taboola.com', 'https://images.taboola.com'],
  teads: ['https://cdn.teads.tv', 'https://cdn2.teads.tv', 'https://a.teads.tv', 'https://t.teads.tv'],
  doubleclick: ['https://partner.googleadservices.com', 'https://securepubads.g.doubleclick.net', 'https://tpc.googlesyndication.com'],
  dotandads: 'https://bal.ad.dotandad.com',
  nativo: ['https://ntvimg-a.akamaihd.net'],
  yieldmo: ['https://static.yieldmo.com', 'https://s.yieldmo.com', 'https://ads.yieldmo.com'],
  triplelift: ['https://ib.3lift.com', 'https://dynamic.3lift.com', 'https://img.3lift.com', 'https://eb2.3lift.com'],
  revcontent: ['https://trends.revcontent.com', 'https://cdn.revcontent.com', 'https://img.revcontent.com']
};

exports.adPreconnect = adPreconnect;
/**
 * The externalCidScope used to provide CIDs to ads of the given type.
 *
 * @const {!Object<string, string>}
 */
var clientIdScope = {
  // Add a mapping like
  // adNetworkType: 'cidScope' here.
  adsense: 'AMP_ECID_GOOGLE',
  doubleclick: 'AMP_ECID_GOOGLE'
};
exports.clientIdScope = clientIdScope;

},{}],2:[function(require,module,exports){
exports.__esModule = true;
var cssText = "body,html{overflow-x:hidden!important;height:auto!important}body{margin:0!important;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%}.-amp-element{display:inline-block}.-amp-layout-fixed{display:inline-block;position:relative}.-amp-layout-container,.-amp-layout-fixed-height,.-amp-layout-responsive{display:block;position:relative}.-amp-layout-fill{display:block;position:absolute;top:0;left:0;bottom:0;right:0}.-amp-layout-fill,.-amp-layout-size-defined{overflow:hidden!important}i-amp-sizer{display:block!important}.-amp-fill-content{display:block;width:100%;height:100%;margin:auto}.-amp-layout-size-defined .-amp-fill-content{position:absolute;top:0;left:0;bottom:0;right:0}.-amp-replaced-content{padding:0!important;border:none!important}.-amp-unresolved{position:relative;overflow:hidden!important}.-amp-notbuilt{position:relative;overflow:hidden!important;color:transparent!important}.-amp-notbuilt>*{display:none}.-amp-ghost{visibility:hidden!important}.-amp-element>[placeholder]{display:block}.-amp-element>[placeholder].amp-hidden,.-amp-element>[placeholder].hidden{visibility:hidden}.-amp-element:not(.amp-notsupported)>[fallback]{display:none}.-amp-layout-size-defined>[fallback],.-amp-layout-size-defined>[placeholder]{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;z-index:1!important}.-amp-notbuilt>[placeholder]{display:block!important}.-amp-hidden-by-media-query{display:none}.-amp-element-error{background:red!important;color:#fff!important;position:relative!important}.-amp-element-error:before{content:attr(error-message)}i-amp-scroll-container{position:absolute;top:0;left:0;right:0;bottom:0;display:block}i-amp-scroll-container.amp-active{overflow:auto}.-amp-loading-container{display:block!important;z-index:1}.-amp-notbuilt>.-amp-loading-container{display:block!important}.-amp-loading-container.amp-hidden{visibility:hidden}.-amp-loader{position:absolute;display:block;height:10px;top:50%;left:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;white-space:nowrap}.-amp-loader.amp-active .-amp-loader-dot{-webkit-animation:a 2s infinite;animation:a 2s infinite}.-amp-loader-dot{position:relative;display:inline-block;height:10px;width:10px;margin:2px;border-radius:100%;background-color:rgba(0,0,0,.3);box-shadow:2px 2px 2px 1px rgba(0,0,0,.2);will-change:transform}.-amp-loader .-amp-loader-dot:nth-child(1){-webkit-animation-delay:0s;animation-delay:0s}.-amp-loader .-amp-loader-dot:nth-child(2){-webkit-animation-delay:.1s;animation-delay:.1s}.-amp-loader .-amp-loader-dot:nth-child(3){-webkit-animation-delay:.2s;animation-delay:.2s}@-webkit-keyframes a{0%,to{-webkit-transform:scale(.7);transform:scale(.7);background-color:rgba(0,0,0,.3)}50%{-webkit-transform:scale(.8);transform:scale(.8);background-color:rgba(0,0,0,.5)}}@keyframes a{0%,to{-webkit-transform:scale(.7);transform:scale(.7);background-color:rgba(0,0,0,.3)}50%{-webkit-transform:scale(.8);transform:scale(.8);background-color:rgba(0,0,0,.5)}}.-amp-element>[overflow]{cursor:pointer;z-index:2;visibility:hidden}.-amp-element>[overflow].amp-visible{visibility:visible}template{display:none!important}.amp-border-box,.amp-border-box *,.amp-border-box :after,.amp-border-box :before{box-sizing:border-box}amp-pixel{position:fixed!important;top:0!important;width:1px!important;height:1px!important;overflow:hidden!important;visibility:hidden}amp-ad iframe{border:0!important;margin:0!important;padding:0!important}amp-instagram{padding:48px 8px!important}amp-analytics{position:fixed!important;top:0!important;width:1px!important;height:1px!important;overflow:hidden!important;visibility:hidden}[amp-access][amp-access-hide]{display:none}\n/*# sourceURL=/css/amp.css*/";
exports.cssText = cssText;

},{}],3:[function(require,module,exports){
exports.__esModule = true;
exports.installAd = installAd;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _srcBaseElement = require('../src/base-element');

var _srcIntersectionObserver = require('../src/intersection-observer');

var _srcAsserts = require('../src/asserts');

var _srcCid = require('../src/cid');

var _src3pFrame = require('../src/3p-frame');

var _srcLayout = require('../src/layout');

var _srcIframeHelper = require('../src/iframe-helper');

var _srcEventHelper = require('../src/event-helper');

var _srcUrl = require('../src/url');

var _srcCustomElement = require('../src/custom-element');

var _ads_config = require('../ads/_config');

var _srcTimer = require('../src/timer');

var _srcViewer = require('../src/viewer');

var _srcUserNotification = require('../src/user-notification');

/** @private @const These tags are allowed to have fixed positioning */
var POSITION_FIXED_TAG_WHITELIST = {
  'AMP-LIGHTBOX': true
};

/**
 * @param {!Window} win Destination window for the new element.
 * @this {undefined}  // Make linter happy
 * @return {undefined}
 */

function installAd(win) {

  /**
   * @type {boolean} Heuristic boolean as for whether another ad is currently
   *     loading.
   */
  var loadingAdsCount = 0;

  var AmpAd = (function (_BaseElement) {
    babelHelpers.inherits(AmpAd, _BaseElement);

    function AmpAd() {
      babelHelpers.classCallCheck(this, AmpAd);

      _BaseElement.apply(this, arguments);
    }

    /** @override  */

    AmpAd.prototype.renderOutsideViewport = function renderOutsideViewport() {
      // If another ad is currently loading we only load ads that are currently
      // in viewport.
      if (loadingAdsCount > 0) {
        return false;
      }

      // Otherwise the ad is good to go.
      return true;
    };

    /** @override */

    AmpAd.prototype.isLayoutSupported = function isLayoutSupported(layout) {
      return _srcLayout.isLayoutSizeDefined(layout);
    };

    /** @override */

    AmpAd.prototype.isReadyToBuild = function isReadyToBuild() {
      // TODO(dvoytenko, #1014): Review and try a more immediate approach.
      // Wait until DOMReady.
      return false;
    };

    /** @override */

    AmpAd.prototype.buildCallback = function buildCallback() {
      /** @private {?Element} */
      this.iframe_ = null;

      /** @private {?Element} */
      this.placeholder_ = this.getPlaceholder();

      /** @private {?Element} */
      this.fallback_ = this.getFallback();

      /** @private {boolean} */
      this.isInFixedContainer_ = false;

      /**
       * The layout box of the ad iframe (as opposed to the amp-ad tag).
       * In practice it often has padding to create a grey or similar box
       * around ads.
       * @private {!LayoutRect}
       */
      this.iframeLayoutBox_ = null;

      /**
       * Call to stop listening to viewport changes.
       * @private {?function()}
       */
      this.unlistenViewportChanges_ = null;

      /** @private {IntersectionObserver} */
      this.intersectionObserver_ = null;

      /**
       * @private @const
       */
      this.viewer_ = _srcViewer.viewerFor(this.getWin());
    };

    /**
     * Prefetches and preconnects URLs related to the ad.
     * @override
     */

    AmpAd.prototype.preconnectCallback = function preconnectCallback(onLayout) {
      var _this = this;

      // We always need the bootstrap.
      _src3pFrame.prefetchBootstrap(this.getWin());
      var type = this.element.getAttribute('type');
      var prefetch = _ads_config.adPrefetch[type];
      var preconnect = _ads_config.adPreconnect[type];
      if (typeof prefetch == 'string') {
        this.preconnect.prefetch(prefetch);
      } else if (prefetch) {
        prefetch.forEach(function (p) {
          _this.preconnect.prefetch(p);
        });
      }
      if (typeof preconnect == 'string') {
        this.preconnect.url(preconnect, onLayout);
      } else if (preconnect) {
        preconnect.forEach(function (p) {
          _this.preconnect.url(p, onLayout);
        });
      }
      // If fully qualified src for ad script is specified we preconnect to it.
      var src = this.element.getAttribute('src');
      if (src) {
        // We only preconnect to the src because we cannot know whether the URL
        // will have caching headers set.
        this.preconnect.url(src);
      }
    };

    /**
     * @override
     */

    AmpAd.prototype.onLayoutMeasure = function onLayoutMeasure() {
      this.isInFixedContainer_ = this.isPositionFixed();
      // We remeasured this tag, lets also remeasure the iframe. Should be
      // free now and it might have changed.
      this.measureIframeLayoutBox_();
      // When the framework has the need to remeasure us, our position might
      // have changed. Send an intersection record if needed. This does nothing
      // if we aren't currently in view.
      if (this.intersectionObserver_) {
        this.intersectionObserver_.fire();
      }
    };

    /**
     * Measure the layout box of the iframe if we rendered it already.
     * @private
     */

    AmpAd.prototype.measureIframeLayoutBox_ = function measureIframeLayoutBox_() {
      if (this.iframe_) {
        this.iframeLayoutBox_ = this.getViewport().getLayoutRect(this.iframe_);
      }
    };

    /**
     * @override
     */

    AmpAd.prototype.getInsersectionElementLayoutBox = function getInsersectionElementLayoutBox() {
      if (!this.iframeLayoutBox_) {
        this.measureIframeLayoutBox_();
      }
      return this.iframeLayoutBox_;
    };

    /**
     * @return {boolean} whether this element or its ancestors have position
     * fixed (unless they are POSITION_FIXED_TAG_WHITELIST).
     * This should only be called when a layout on the page was just forced
     * anyway.
     */

    AmpAd.prototype.isPositionFixed = function isPositionFixed() {
      var el = this.element;
      var body = el.ownerDocument.body;
      do {
        if (POSITION_FIXED_TAG_WHITELIST[el.tagName]) {
          return false;
        }
        if (this.getWin() /*because only called from onLayoutMeasure */
        . /*OK*/getComputedStyle(el).position == 'fixed') {
          return true;
        }
        el = el.parentNode;
      } while (el.getAttribute && el != body);
      return false;
    };

    /** @override */

    AmpAd.prototype.layoutCallback = function layoutCallback() {
      var _this2 = this;

      if (!this.iframe_) {
        loadingAdsCount++;
        _srcAsserts.assert(!this.isInFixedContainer_, '<amp-ad> is not allowed to be placed in elements with ' + 'position:fixed: %s', this.element);
        _srcTimer.timer.delay(function () {
          // Unfortunately we don't really have a good way to measure how long it
          // takes to load an ad, so we'll just pretend it takes 1 second for
          // now.
          loadingAdsCount--;
        }, 1000);
        return this.getAdCid_().then(function (cid) {
          if (cid) {
            _this2.element.setAttribute('ampcid', cid);
          }
          _this2.iframe_ = _src3pFrame.getIframe(_this2.element.ownerDocument.defaultView, _this2.element);
          _this2.iframe_.setAttribute('scrolling', 'no');
          _this2.applyFillContent(_this2.iframe_);
          _this2.element.appendChild(_this2.iframe_);
          _this2.intersectionObserver_ = new _srcIntersectionObserver.IntersectionObserver(_this2, _this2.iframe_, /* opt_is3P */true);
          // Triggered by context.noContentAvailable() inside the ad iframe.
          _srcIframeHelper.listenOnce(_this2.iframe_, 'no-content', function () {
            _this2.noContentHandler_();
          }, /* opt_is3P */true);
          // Triggered by context.reportRenderedEntityIdentifier(…) inside the ad
          // iframe.
          _srcIframeHelper.listenOnce(_this2.iframe_, 'entity-id', function (info) {
            _this2.element.creativeId = info.id;
          }, /* opt_is3P */true);
          _srcIframeHelper.listen(_this2.iframe_, 'embed-size', function (data) {
            if (data.width !== undefined) {
              _this2.iframe_.width = data.width;
              _this2.element.setAttribute('width', data.width);
            }
            if (data.height !== undefined) {
              var newHeight = Math.max(_this2.element. /*OK*/offsetHeight + data.height - _this2.iframe_. /*OK*/offsetHeight, data.height);
              _this2.iframe_.height = data.height;
              _this2.element.setAttribute('height', newHeight);
              _this2.updateHeight_(newHeight);
            }
          }, /* opt_is3P */true);
          _this2.iframe_.style.visibility = 'hidden';
          _srcIframeHelper.listenOnce(_this2.iframe_, 'render-start', function () {
            _this2.iframe_.style.visibility = '';
            _this2.sendEmbedInfo_(_this2.isInViewport());
          }, /* opt_is3P */true);
          _this2.viewer_.onVisibilityChanged(function () {
            _this2.sendEmbedInfo_(_this2.isInViewport());
          });

          return _srcEventHelper.loadPromise(_this2.iframe_);
        });
      }
      return _srcEventHelper.loadPromise(this.iframe_);
    };

    /**
     * @return {!Promise<string|undefined>} A promise for a CID or undefined if
     *     - the ad network does not request one or
     *     - `amp-analytics` which provides the CID service was not installed.
     * @private
     */

    AmpAd.prototype.getAdCid_ = function getAdCid_() {
      var _this3 = this;

      var scope = _ads_config.clientIdScope[this.element.getAttribute('type')];
      if (!scope) {
        return Promise.resolve();
      }
      return _srcCid.cidForOrNull(this.getWin()).then(function (cidService) {
        if (!cidService) {
          return;
        }
        var consent = Promise.resolve();
        var consentId = _this3.element.getAttribute('data-consent-notification-id');
        if (consentId) {
          consent = _srcUserNotification.userNotificationManagerFor(_this3.getWin()).then(function (service) {
            return service.get(consentId);
          });
        }
        return cidService.get(scope, consent);
      });
    };

    /** @override  */

    AmpAd.prototype.viewportCallback = function viewportCallback(inViewport) {
      if (this.intersectionObserver_) {
        this.intersectionObserver_.onViewportCallback(inViewport);
      }
      this.sendEmbedInfo_(inViewport);
    };

    /**
     * @param {boolean} inViewport
     * @private
     */

    AmpAd.prototype.sendEmbedInfo_ = function sendEmbedInfo_(inViewport) {
      if (this.iframe_) {
        var targetOrigin = this.iframe_.src ? _srcUrl.parseUrl(this.iframe_.src).origin : '*';
        _srcIframeHelper.postMessage(this.iframe_, 'embed-state', {
          inViewport: inViewport,
          pageHidden: !this.viewer_.isVisible()
        }, targetOrigin, /* opt_is3P */true);
      }
    };

    /** @override  */

    AmpAd.prototype.overflowCallback = function overflowCallback(overflown, requestedHeight) {
      if (overflown) {
        var targetOrigin = this.iframe_.src ? _srcUrl.parseUrl(this.iframe_.src).origin : '*';
        _srcIframeHelper.postMessage(this.iframe_, 'embed-size-denied', { requestedHeight: requestedHeight }, targetOrigin,
        /* opt_is3P */true);
      }
    };

    /**
     * Updates the elements height to accommodate the iframe's requested height.
     * @param {number} newHeight
     * @private
     */

    AmpAd.prototype.updateHeight_ = function updateHeight_(newHeight) {
      var _this4 = this;

      this.attemptChangeHeight(newHeight, function () {
        var targetOrigin = _this4.iframe_.src ? _srcUrl.parseUrl(_this4.iframe_.src).origin : '*';
        _srcIframeHelper.postMessage(_this4.iframe_, 'embed-size-changed', { requestedHeight: newHeight }, targetOrigin,
        /* opt_is3P */true);
      });
    };

    /**
     * Activates the fallback if the ad reports that the ad slot cannot
     * be filled.
     * @private
     */

    AmpAd.prototype.noContentHandler_ = function noContentHandler_() {
      var _this5 = this;

      // If a fallback does not exist attempt to collapse the ad.
      if (!this.fallback_) {
        this.attemptChangeHeight(0, function () {
          _this5.element.style.display = 'none';
        });
      }
      this.deferMutate(function () {
        if (_this5.fallback_) {
          // Hide placeholder when falling back.
          if (_this5.placeholder_) {
            _this5.togglePlaceholder(false);
          }
          _this5.toggleFallback(true);
        }
        _this5.element.removeChild(_this5.iframe_);
      });
    };

    return AmpAd;
  })(_srcBaseElement.BaseElement);

  _srcCustomElement.registerElement(win, 'amp-ad', AmpAd);
}

},{"../ads/_config":1,"../src/3p-frame":10,"../src/asserts":16,"../src/base-element":17,"../src/cid":18,"../src/custom-element":20,"../src/event-helper":28,"../src/iframe-helper":33,"../src/intersection-observer":35,"../src/layout":37,"../src/timer":69,"../src/url":72,"../src/user-notification":73,"../src/viewer":75}],4:[function(require,module,exports){
exports.__esModule = true;
exports.installEmbed = installEmbed;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _srcCustomElement = require('../src/custom-element');

function installEmbed(win) {
  _srcCustomElement.registerElementAlias(win, 'amp-embed', 'amp-ad');
}

},{"../src/custom-element":20}],5:[function(require,module,exports){
exports.__esModule = true;
exports.installImg = installImg;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _srcBaseElement = require('../src/base-element');

var _srcLayout = require('../src/layout');

var _srcEventHelper = require('../src/event-helper');

var _srcSrcset = require('../src/srcset');

var _srcCustomElement = require('../src/custom-element');

/**
 * @param {!Window} win Destination window for the new element.
 * @this {undefined}  // Make linter happy
 * @return {undefined}
 */

function installImg(win) {
  var AmpImg = (function (_BaseElement) {
    babelHelpers.inherits(AmpImg, _BaseElement);

    function AmpImg() {
      babelHelpers.classCallCheck(this, AmpImg);

      _BaseElement.apply(this, arguments);
    }

    /** @override */

    AmpImg.prototype.isLayoutSupported = function isLayoutSupported(layout) {
      return _srcLayout.isLayoutSizeDefined(layout);
    };

    /** @override */

    AmpImg.prototype.buildCallback = function buildCallback() {
      /** @private @const {!Element} */
      this.img_ = new Image();

      if (this.element.id) {
        this.img_.setAttribute('amp-img-id', this.element.id);
      }
      this.propagateAttributes(['alt'], this.img_);
      this.applyFillContent(this.img_, true);

      this.img_.width = _srcLayout.getLengthNumeral(this.element.getAttribute('width'));
      this.img_.height = _srcLayout.getLengthNumeral(this.element.getAttribute('height'));

      this.element.appendChild(this.img_);

      /** @private @const {!Srcset} */
      this.srcset_ = _srcSrcset.parseSrcset(this.element.getAttribute('srcset') || this.element.getAttribute('src'));
    };

    /** @override */

    AmpImg.prototype.prerenderAllowed = function prerenderAllowed() {
      return true;
    };

    /** @override */

    AmpImg.prototype.isRelayoutNeeded = function isRelayoutNeeded() {
      return true;
    };

    /** @override */

    AmpImg.prototype.layoutCallback = function layoutCallback() {
      return this.updateImageSrc_();
    };

    /**
     * @return {!Promise}
     * @private
     */

    AmpImg.prototype.updateImageSrc_ = function updateImageSrc_() {
      if (this.getLayoutWidth() <= 0) {
        return Promise.resolve();
      }
      var src = this.srcset_.select(this.getLayoutWidth(), this.getDpr()).url;
      if (src == this.img_.getAttribute('src')) {
        return Promise.resolve();
      }
      this.img_.setAttribute('src', src);

      return _srcEventHelper.loadPromise(this.img_);
    };

    return AmpImg;
  })(_srcBaseElement.BaseElement);

  ;

  _srcCustomElement.registerElement(win, 'amp-img', AmpImg);
}

},{"../src/base-element":17,"../src/custom-element":20,"../src/event-helper":28,"../src/layout":37,"../src/srcset":64}],6:[function(require,module,exports){
exports.__esModule = true;
exports.installPixel = installPixel;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _srcBaseElement = require('../src/base-element');

var _srcLayout = require('../src/layout');

var _srcUrlReplacements = require('../src/url-replacements');

var _srcAsserts = require('../src/asserts');

var _srcCustomElement = require('../src/custom-element');

var _srcStyle = require('../src/style');

/**
 * @param {!Window} win Destination window for the new element.
 * @this {undefined}  // Make linter happy
 * @return {undefined}
 */

function installPixel(win) {
  var AmpPixel = (function (_BaseElement) {
    babelHelpers.inherits(AmpPixel, _BaseElement);

    function AmpPixel() {
      babelHelpers.classCallCheck(this, AmpPixel);

      _BaseElement.apply(this, arguments);
    }

    /** @override */

    AmpPixel.prototype.isLayoutSupported = function isLayoutSupported(layout) {
      return layout == _srcLayout.Layout.FIXED;
    };

    /** @override */

    AmpPixel.prototype.buildCallback = function buildCallback() {
      // Remove user defined size. Pixels should always be the default size.
      this.element.style.width = '';
      this.element.style.height = '';
      // Consider the element invisible.
      this.element.setAttribute('aria-hidden', 'true');
    };

    /** @override */

    AmpPixel.prototype.layoutCallback = function layoutCallback() {
      var _this = this;

      // Now that we are rendered, stop rendering the element to reduce
      // resource consumption.
      _srcStyle.toggle(this.element, false);
      var src = this.element.getAttribute('src');
      return _srcUrlReplacements.urlReplacementsFor(this.getWin()).expand(this.assertSource(src)).then(function (src) {
        var image = new Image();
        image.src = src;
        image.width = 1;
        image.height = 1;
        // Make it take zero space
        _this.element.style.width = 0;
        _this.element.appendChild(image);
      });
    };

    AmpPixel.prototype.assertSource = function assertSource(src) {
      _srcAsserts.assert(/^(https\:\/\/|\/\/)/i.test(src), 'The <amp-pixel> src attribute must start with ' + '"https://" or "//". Invalid value: ' + src);
      return src;
    };

    return AmpPixel;
  })(_srcBaseElement.BaseElement);

  ;

  _srcCustomElement.registerElement(win, 'amp-pixel', AmpPixel);
}

},{"../src/asserts":16,"../src/base-element":17,"../src/custom-element":20,"../src/layout":37,"../src/style":66,"../src/url-replacements":71}],7:[function(require,module,exports){
exports.__esModule = true;
exports.installVideo = installVideo;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _srcBaseElement = require('../src/base-element');

var _srcUrl = require('../src/url');

var _srcLayout = require('../src/layout');

var _srcEventHelper = require('../src/event-helper');

var _srcCustomElement = require('../src/custom-element');

var _srcMode = require('../src/mode');

/**
 * @param {!Window} win Destination window for the new element.
 * @this {undefined}  // Make linter happy
 * @return {undefined}
 */

function installVideo(win) {
  var AmpVideo = (function (_BaseElement) {
    babelHelpers.inherits(AmpVideo, _BaseElement);

    function AmpVideo() {
      babelHelpers.classCallCheck(this, AmpVideo);

      _BaseElement.apply(this, arguments);
    }

    /** @override */

    AmpVideo.prototype.isLayoutSupported = function isLayoutSupported(layout) {
      return _srcLayout.isLayoutSizeDefined(layout);
    };

    /** @override */

    AmpVideo.prototype.buildCallback = function buildCallback() {
      /** @private @const {!HTMLVideoElement} */
      this.video_ = document.createElement('video');
      var width = this.element.getAttribute('width');
      var height = this.element.getAttribute('height');

      this.video_.width = _srcLayout.getLengthNumeral(width);
      this.video_.height = _srcLayout.getLengthNumeral(height);

      var posterAttr = this.element.getAttribute('poster');
      if (!posterAttr && _srcMode.getMode().development) {
        console /*OK*/.error('No "poster" attribute has been provided for amp-video.');
      }

      // Disable video preload in prerender mode.
      this.video_.setAttribute('preload', 'none');
      this.propagateAttributes(['poster'], this.video_);
      this.applyFillContent(this.video_, true);
      this.element.appendChild(this.video_);
    };

    /** @override */

    AmpVideo.prototype.layoutCallback = function layoutCallback() {
      var _this = this;

      if (!this.isVideoSupported_()) {
        this.toggleFallback(true);
        return Promise.resolve();
      }

      if (this.element.getAttribute('src')) {
        _srcUrl.assertHttpsUrl(this.element.getAttribute('src'), this.element);
      }
      this.propagateAttributes(['src', 'controls', 'autoplay', 'muted', 'loop'], this.video_);

      if (this.element.hasAttribute('preload')) {
        this.video_.setAttribute('preload', this.element.getAttribute('preload'));
      } else {
        this.video_.removeAttribute('preload');
      }

      this.getRealChildNodes().forEach(function (child) {
        // Skip the video we already added to the element.
        if (_this.video_ === child) {
          return;
        }
        if (child.getAttribute && child.getAttribute('src')) {
          _srcUrl.assertHttpsUrl(child.getAttribute('src'), child);
        }
        _this.video_.appendChild(child);
      });

      return _srcEventHelper.loadPromise(this.video_);
    };

    /** @override */

    AmpVideo.prototype.documentInactiveCallback = function documentInactiveCallback() {
      if (this.video_) {
        this.video_.pause();
      }
      // No need to do layout later - user action will be expect to resume
      // the playback.
      return false;
    };

    /** @private */

    AmpVideo.prototype.isVideoSupported_ = function isVideoSupported_() {
      return !!this.video_.play;
    };

    return AmpVideo;
  })(_srcBaseElement.BaseElement);

  _srcCustomElement.registerElement(win, 'amp-video', AmpVideo);
}

},{"../src/base-element":17,"../src/custom-element":20,"../src/event-helper":28,"../src/layout":37,"../src/mode":40,"../src/url":72}],8:[function(require,module,exports){
/*!
Copyright (C) 2014-2015 by WebReflection

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
(function(window, document, Object, REGISTER_ELEMENT){'use strict';

// in case it's there or already patched
if (REGISTER_ELEMENT in document) return;

// DO NOT USE THIS FILE DIRECTLY, IT WON'T WORK
// THIS IS A PROJECT BASED ON A BUILD SYSTEM
// THIS FILE IS JUST WRAPPED UP RESULTING IN
// build/document-register-element.js
// and its .max.js counter part

var
  // IE < 11 only + old WebKit for attributes + feature detection
  EXPANDO_UID = '__' + REGISTER_ELEMENT + (Math.random() * 10e4 >> 0),

  // shortcuts and costants
  ATTACHED = 'attached',
  DETACHED = 'detached',
  EXTENDS = 'extends',
  ADDITION = 'ADDITION',
  MODIFICATION = 'MODIFICATION',
  REMOVAL = 'REMOVAL',
  DOM_ATTR_MODIFIED = 'DOMAttrModified',
  DOM_CONTENT_LOADED = 'DOMContentLoaded',
  DOM_SUBTREE_MODIFIED = 'DOMSubtreeModified',
  PREFIX_TAG = '<',
  PREFIX_IS = '=',

  // valid and invalid node names
  validName = /^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,
  invalidNames = [
    'ANNOTATION-XML',
    'COLOR-PROFILE',
    'FONT-FACE',
    'FONT-FACE-SRC',
    'FONT-FACE-URI',
    'FONT-FACE-FORMAT',
    'FONT-FACE-NAME',
    'MISSING-GLYPH'
  ],

  // registered types and their prototypes
  types = [],
  protos = [],

  // to query subnodes
  query = '',

  // html shortcut used to feature detect
  documentElement = document.documentElement,

  // ES5 inline helpers || basic patches
  indexOf = types.indexOf || function (v) {
    for(var i = this.length; i-- && this[i] !== v;){}
    return i;
  },

  // other helpers / shortcuts
  OP = Object.prototype,
  hOP = OP.hasOwnProperty,
  iPO = OP.isPrototypeOf,

  defineProperty = Object.defineProperty,
  gOPD = Object.getOwnPropertyDescriptor,
  gOPN = Object.getOwnPropertyNames,
  gPO = Object.getPrototypeOf,
  sPO = Object.setPrototypeOf,

  // jshint proto: true
  hasProto = !!Object.__proto__,

  // used to create unique instances
  create = Object.create || function Bridge(proto) {
    // silly broken polyfill probably ever used but short enough to work
    return proto ? ((Bridge.prototype = proto), new Bridge()) : this;
  },

  // will set the prototype if possible
  // or copy over all properties
  setPrototype = sPO || (
    hasProto ?
      function (o, p) {
        o.__proto__ = p;
        return o;
      } : (
    (gOPN && gOPD) ?
      (function(){
        function setProperties(o, p) {
          for (var
            key,
            names = gOPN(p),
            i = 0, length = names.length;
            i < length; i++
          ) {
            key = names[i];
            if (!hOP.call(o, key)) {
              defineProperty(o, key, gOPD(p, key));
            }
          }
        }
        return function (o, p) {
          do {
            setProperties(o, p);
          } while ((p = gPO(p)) && !iPO.call(p, o));
          return o;
        };
      }()) :
      function (o, p) {
        for (var key in p) {
          o[key] = p[key];
        }
        return o;
      }
  )),

  // DOM shortcuts and helpers, if any

  MutationObserver = window.MutationObserver ||
                     window.WebKitMutationObserver,

  HTMLElementPrototype = (
    window.HTMLElement ||
    window.Element ||
    window.Node
  ).prototype,

  IE8 = !iPO.call(HTMLElementPrototype, documentElement),

  isValidNode = IE8 ?
    function (node) {
      return node.nodeType === 1;
    } :
    function (node) {
      return iPO.call(HTMLElementPrototype, node);
    },

  targets = IE8 && [],

  cloneNode = HTMLElementPrototype.cloneNode,
  setAttribute = HTMLElementPrototype.setAttribute,
  removeAttribute = HTMLElementPrototype.removeAttribute,

  // replaced later on
  createElement = document.createElement,

  // shared observer for all attributes
  attributesObserver = MutationObserver && {
    attributes: true,
    characterData: true,
    attributeOldValue: true
  },

  // useful to detect only if there's no MutationObserver
  DOMAttrModified = MutationObserver || function(e) {
    doesNotSupportDOMAttrModified = false;
    documentElement.removeEventListener(
      DOM_ATTR_MODIFIED,
      DOMAttrModified
    );
  },

  // will both be used to make DOMNodeInserted asynchronous
  asapQueue,
  rAF = window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (fn) { setTimeout(fn, 10); },

  // internal flags
  setListener = false,
  doesNotSupportDOMAttrModified = true,
  dropDomContentLoaded = true,

  // needed for the innerHTML helper
  notFromInnerHTMLHelper = true,

  // optionally defined later on
  onSubtreeModified,
  callDOMAttrModified,
  getAttributesMirror,
  observer,

  // based on setting prototype capability
  // will check proto or the expando attribute
  // in order to setup the node once
  patchIfNotAlready,
  patch
;

if (sPO || hasProto) {
    patchIfNotAlready = function (node, proto) {
      if (!iPO.call(proto, node)) {
        setupNode(node, proto);
      }
    };
    patch = setupNode;
} else {
    patchIfNotAlready = function (node, proto) {
      if (!node[EXPANDO_UID]) {
        node[EXPANDO_UID] = Object(true);
        setupNode(node, proto);
      }
    };
    patch = patchIfNotAlready;
}
if (IE8) {
  doesNotSupportDOMAttrModified = false;
  (function (){
    var
      descriptor = gOPD(HTMLElementPrototype, 'addEventListener'),
      addEventListener = descriptor.value,
      patchedRemoveAttribute = function (name) {
        var e = new CustomEvent(DOM_ATTR_MODIFIED, {bubbles: true});
        e.attrName = name;
        e.prevValue = this.getAttribute(name);
        e.newValue = null;
        e[REMOVAL] = e.attrChange = 2;
        removeAttribute.call(this, name);
        this.dispatchEvent(e);
      },
      patchedSetAttribute = function (name, value) {
        var
          had = this.hasAttribute(name),
          old = had && this.getAttribute(name),
          e = new CustomEvent(DOM_ATTR_MODIFIED, {bubbles: true})
        ;
        setAttribute.call(this, name, value);
        e.attrName = name;
        e.prevValue = had ? old : null;
        e.newValue = value;
        if (had) {
          e[MODIFICATION] = e.attrChange = 1;
        } else {
          e[ADDITION] = e.attrChange = 0;
        }
        this.dispatchEvent(e);
      },
      onPropertyChange = function (e) {
        // jshint eqnull:true
        var
          node = e.currentTarget,
          superSecret = node[EXPANDO_UID],
          propertyName = e.propertyName,
          event
        ;
        if (superSecret.hasOwnProperty(propertyName)) {
          superSecret = superSecret[propertyName];
          event = new CustomEvent(DOM_ATTR_MODIFIED, {bubbles: true});
          event.attrName = superSecret.name;
          event.prevValue = superSecret.value || null;
          event.newValue = (superSecret.value = node[propertyName] || null);
          if (event.prevValue == null) {
            event[ADDITION] = event.attrChange = 0;
          } else {
            event[MODIFICATION] = event.attrChange = 1;
          }
          node.dispatchEvent(event);
        }
      }
    ;
    descriptor.value = function (type, handler, capture) {
      if (
        type === DOM_ATTR_MODIFIED &&
        this.attributeChangedCallback &&
        this.setAttribute !== patchedSetAttribute
      ) {
        this[EXPANDO_UID] = {
          className: {
            name: 'class',
            value: this.className
          }
        };
        this.setAttribute = patchedSetAttribute;
        this.removeAttribute = patchedRemoveAttribute;
        addEventListener.call(this, 'propertychange', onPropertyChange);
      }
      addEventListener.call(this, type, handler, capture);
    };
    defineProperty(HTMLElementPrototype, 'addEventListener', descriptor);
  }());
} else if (!MutationObserver) {
  documentElement.addEventListener(DOM_ATTR_MODIFIED, DOMAttrModified);
  documentElement.setAttribute(EXPANDO_UID, 1);
  documentElement.removeAttribute(EXPANDO_UID);
  if (doesNotSupportDOMAttrModified) {
    onSubtreeModified = function (e) {
      var
        node = this,
        oldAttributes,
        newAttributes,
        key
      ;
      if (node === e.target) {
        oldAttributes = node[EXPANDO_UID];
        node[EXPANDO_UID] = (newAttributes = getAttributesMirror(node));
        for (key in newAttributes) {
          if (!(key in oldAttributes)) {
            // attribute was added
            return callDOMAttrModified(
              0,
              node,
              key,
              oldAttributes[key],
              newAttributes[key],
              ADDITION
            );
          } else if (newAttributes[key] !== oldAttributes[key]) {
            // attribute was changed
            return callDOMAttrModified(
              1,
              node,
              key,
              oldAttributes[key],
              newAttributes[key],
              MODIFICATION
            );
          }
        }
        // checking if it has been removed
        for (key in oldAttributes) {
          if (!(key in newAttributes)) {
            // attribute removed
            return callDOMAttrModified(
              2,
              node,
              key,
              oldAttributes[key],
              newAttributes[key],
              REMOVAL
            );
          }
        }
      }
    };
    callDOMAttrModified = function (
      attrChange,
      currentTarget,
      attrName,
      prevValue,
      newValue,
      action
    ) {
      var e = {
        attrChange: attrChange,
        currentTarget: currentTarget,
        attrName: attrName,
        prevValue: prevValue,
        newValue: newValue
      };
      e[action] = attrChange;
      onDOMAttrModified(e);
    };
    getAttributesMirror = function (node) {
      for (var
        attr, name,
        result = {},
        attributes = node.attributes,
        i = 0, length = attributes.length;
        i < length; i++
      ) {
        attr = attributes[i];
        name = attr.name;
        if (name !== 'setAttribute') {
          result[name] = attr.value;
        }
      }
      return result;
    };
  }
}

function loopAndVerify(list, action) {
  for (var i = 0, length = list.length; i < length; i++) {
    verifyAndSetupAndAction(list[i], action);
  }
}

function loopAndSetup(list) {
  for (var i = 0, length = list.length, node; i < length; i++) {
    node = list[i];
    patch(node, protos[getTypeIndex(node)]);
  }
}

function executeAction(action) {
  return function (node) {
    if (isValidNode(node)) {
      verifyAndSetupAndAction(node, action);
      loopAndVerify(
        node.querySelectorAll(query),
        action
      );
    }
  };
}

function getTypeIndex(target) {
  var
    is = target.getAttribute('is'),
    nodeName = target.nodeName.toUpperCase(),
    i = indexOf.call(
      types,
      is ?
          PREFIX_IS + is.toUpperCase() :
          PREFIX_TAG + nodeName
    )
  ;
  return is && -1 < i && !isInQSA(nodeName, is) ? -1 : i;
}

function isInQSA(name, type) {
  return -1 < query.indexOf(name + '[is="' + type + '"]');
}

function onDOMAttrModified(e) {
  var
    node = e.currentTarget,
    attrChange = e.attrChange,
    attrName = e.attrName,
    target = e.target
  ;
  if (notFromInnerHTMLHelper &&
      (!target || target === node) &&
      node.attributeChangedCallback &&
      attrName !== 'style' &&
      e.prevValue !== e.newValue) {
    node.attributeChangedCallback(
      attrName,
      attrChange === e[ADDITION] ? null : e.prevValue,
      attrChange === e[REMOVAL] ? null : e.newValue
    );
  }
}

function onDOMNode(action) {
  var executor = executeAction(action);
  return function (e) {
    asapQueue.push(executor, e.target);
  };
}

function onReadyStateChange(e) {
  if (dropDomContentLoaded) {
    dropDomContentLoaded = false;
    e.currentTarget.removeEventListener(DOM_CONTENT_LOADED, onReadyStateChange);
  }
  loopAndVerify(
    (e.target || document).querySelectorAll(query),
    e.detail === DETACHED ? DETACHED : ATTACHED
  );
  if (IE8) purge();
}

function patchedSetAttribute(name, value) {
  // jshint validthis:true
  var self = this;
  setAttribute.call(self, name, value);
  onSubtreeModified.call(self, {target: self});
}

function setupNode(node, proto) {
  setPrototype(node, proto);
  if (observer) {
    observer.observe(node, attributesObserver);
  } else {
    if (doesNotSupportDOMAttrModified) {
      node.setAttribute = patchedSetAttribute;
      node[EXPANDO_UID] = getAttributesMirror(node);
      node.addEventListener(DOM_SUBTREE_MODIFIED, onSubtreeModified);
    }
    node.addEventListener(DOM_ATTR_MODIFIED, onDOMAttrModified);
  }
  if (node.createdCallback && notFromInnerHTMLHelper) {
    node.created = true;
    node.createdCallback();
    node.created = false;
  }
}

function purge() {
  for (var
    node,
    i = 0,
    length = targets.length;
    i < length; i++
  ) {
    node = targets[i];
    if (!documentElement.contains(node)) {
      length--;
      targets.splice(i--, 1);
      verifyAndSetupAndAction(node, DETACHED);
    }
  }
}

function throwTypeError(type) {
  throw new Error('A ' + type + ' type is already registered');
}

function verifyAndSetupAndAction(node, action) {
  var
    fn,
    i = getTypeIndex(node)
  ;
  if (-1 < i) {
    patchIfNotAlready(node, protos[i]);
    i = 0;
    if (action === ATTACHED && !node[ATTACHED]) {
      node[DETACHED] = false;
      node[ATTACHED] = true;
      i = 1;
      if (IE8 && indexOf.call(targets, node) < 0) {
        targets.push(node);
      }
    } else if (action === DETACHED && !node[DETACHED]) {
      node[ATTACHED] = false;
      node[DETACHED] = true;
      i = 1;
    }
    if (i && (fn = node[action + 'Callback'])) fn.call(node);
  }
}

// set as enumerable, writable and configurable
document[REGISTER_ELEMENT] = function registerElement(type, options) {
  upperType = type.toUpperCase();
  if (!setListener) {
    // only first time document.registerElement is used
    // we need to set this listener
    // setting it by default might slow down for no reason
    setListener = true;
    if (MutationObserver) {
      observer = (function(attached, detached){
        function checkEmAll(list, callback) {
          for (var i = 0, length = list.length; i < length; callback(list[i++])){}
        }
        return new MutationObserver(function (records) {
          for (var
            current, node, newValue,
            i = 0, length = records.length; i < length; i++
          ) {
            current = records[i];
            if (current.type === 'childList') {
              checkEmAll(current.addedNodes, attached);
              checkEmAll(current.removedNodes, detached);
            } else {
              node = current.target;
              if (notFromInnerHTMLHelper &&
                  node.attributeChangedCallback &&
                  current.attributeName !== 'style') {
                newValue = node.getAttribute(current.attributeName);
                if (newValue !== current.oldValue) {
                  node.attributeChangedCallback(
                    current.attributeName,
                    current.oldValue,
                    newValue
                  );
                }
              }
            }
          }
        });
      }(executeAction(ATTACHED), executeAction(DETACHED)));
      observer.observe(
        document,
        {
          childList: true,
          subtree: true
        }
      );
    } else {
      asapQueue = [];
      rAF(function ASAP() {
        while (asapQueue.length) {
          asapQueue.shift().call(
            null, asapQueue.shift()
          );
        }
        rAF(ASAP);
      });
      document.addEventListener('DOMNodeInserted', onDOMNode(ATTACHED));
      document.addEventListener('DOMNodeRemoved', onDOMNode(DETACHED));
    }

    document.addEventListener(DOM_CONTENT_LOADED, onReadyStateChange);
    document.addEventListener('readystatechange', onReadyStateChange);

    document.createElement = function (localName, typeExtension) {
      var
        node = createElement.apply(document, arguments),
        name = '' + localName,
        i = indexOf.call(
          types,
          (typeExtension ? PREFIX_IS : PREFIX_TAG) +
          (typeExtension || name).toUpperCase()
        ),
        setup = -1 < i
      ;
      if (typeExtension) {
        node.setAttribute('is', typeExtension = typeExtension.toLowerCase());
        if (setup) {
          setup = isInQSA(name.toUpperCase(), typeExtension);
        }
      }
      notFromInnerHTMLHelper = !document.createElement.innerHTMLHelper;
      if (setup) patch(node, protos[i]);
      return node;
    };

    HTMLElementPrototype.cloneNode = function (deep) {
      var
        node = cloneNode.call(this, !!deep),
        i = getTypeIndex(node)
      ;
      if (-1 < i) patch(node, protos[i]);
      if (deep) loopAndSetup(node.querySelectorAll(query));
      return node;
    };
  }

  if (-2 < (
    indexOf.call(types, PREFIX_IS + upperType) +
    indexOf.call(types, PREFIX_TAG + upperType)
  )) {
    throwTypeError(type);
  }

  if (!validName.test(upperType) || -1 < indexOf.call(invalidNames, upperType)) {
    throw new Error('The type ' + type + ' is invalid');
  }

  var
    constructor = function () {
      return extending ?
        document.createElement(nodeName, upperType) :
        document.createElement(nodeName);
    },
    opt = options || OP,
    extending = hOP.call(opt, EXTENDS),
    nodeName = extending ? options[EXTENDS].toUpperCase() : upperType,
    upperType,
    i
  ;

  if (extending && -1 < (
    indexOf.call(types, PREFIX_TAG + nodeName)
  )) {
    throwTypeError(nodeName);
  }

  i = types.push((extending ? PREFIX_IS : PREFIX_TAG) + upperType) - 1;

  query = query.concat(
    query.length ? ',' : '',
    extending ? nodeName + '[is="' + type.toLowerCase() + '"]' : nodeName
  );

  constructor.prototype = (
    protos[i] = hOP.call(opt, 'prototype') ?
      opt.prototype :
      create(HTMLElementPrototype)
  );

  loopAndVerify(
    document.querySelectorAll(query),
    ATTACHED
  );

  return constructor;
};

}(window, document, Object, 'registerElement'));
},{}],9:[function(require,module,exports){
'use strict';

/**
 * Constructs a ES6/Promises A+ Promise instance.
 *
 * @constructor
 * @param {function(function(*=), function (*=))} resolver
 */
function Promise(resolver) {
  if (!(this instanceof Promise)) {
    throw new TypeError('Constructor Promise requires `new`');
  }
  if (!isFunction(resolver)) {
    throw new TypeError('Must pass resolver function');
  }

  /**
   * @param {function(this:Promise,*=,function(*=),function(*=),Deferred):!Promise} state
   * @private
   */
  this._state = PendingPromise;

  /**
   * @type {*}
   * @private
   */
  this._value = [];

  /**
   * @type {boolean}
   * @private
   */
  this._isChainEnd = true;

  doResolve(
    this,
    adopter(this, FulfilledPromise),
    adopter(this, RejectedPromise),
    { then: resolver }
  );
}

/****************************
  Public Instance Methods
 ****************************/

/**
 * Creates a new promise instance that will receive the result of this promise
 * as inputs to the onFulfilled or onRejected callbacks.
 *
 * @param {function(*)} onFulfilled
 * @param {function(*)} onRejected
 */
Promise.prototype.then = function(onFulfilled, onRejected) {
  onFulfilled = isFunction(onFulfilled) ? onFulfilled : void 0;
  onRejected = isFunction(onRejected) ? onRejected : void 0;

  if (onFulfilled || onRejected) {
    this._isChainEnd = false;
  }

  return this._state(
    this._value,
    onFulfilled,
    onRejected
  );
};

/**
 * Creates a new promise that will handle the rejected state of this promise.
 *
 * @param {function(*)} onRejected
 * @returns {!Promise}
 */
Promise.prototype.catch = function(onRejected) {
  return this.then(void 0, onRejected);
};

/****************************
  Public Static Methods
 ****************************/

/**
 * Creates a fulfilled Promise of value. If value is itself a then-able,
 * resolves with the then-able's value.
 *
 * @param {*=} value
 * @returns {!Promise}
 */
Promise.resolve = function(value) {
  var Constructor = this;
  var promise;

  if (isObject(value) && value instanceof this) {
    promise = value;
  } else {
    promise = new Constructor(function(resolve) {
      resolve(value);
    });
  }

  return /** @type {!Promise} */(promise);
};

/**
 * Creates a rejected Promise of reason.
 *
 * @param {*=} reason
 * @returns {!Promise}
 */
Promise.reject = function(reason) {
  var Constructor = this;
  var promise = new Constructor(function(_, reject) {
    reject(reason);
  });

  return /** @type {!Promise} */(promise);
};

/**
 * Creates a Promise that will resolve with an array of the values of the
 * passed in promises. If any promise rejects, the returned promise will
 * reject.
 *
 * @param {!Array<Promise|*>} promises
 * @returns {!Promise}
 */
Promise.all = function(promises) {
  var Constructor = this;
  var promise = new Constructor(function(resolve, reject) {
    var length = promises.length;
    var values = new Array(length);

    if (length === 0) {
      return resolve(values);
    }

    each(promises, function(promise, index) {
      Constructor.resolve(promise).then(function(value) {
        values[index] = value;
        if (--length === 0) {
          resolve(values);
        }
      }, reject);
    });
  });

  return /** @type {!Promise} */(promise);
};

/**
 * Creates a Promise that will resolve or reject based on the first
 * resolved or rejected promise.
 *
 * @param {!Array<Promise|*>} promises
 * @returns {!Promise}
 */
Promise.race = function(promises) {
  var Constructor = this;
  var promise = new Constructor(function(resolve, reject) {
    for (var i = 0, l = promises.length; i < l; i++) {
      Constructor.resolve(promises[i]).then(resolve, reject);
    }
  });

  return /** @type {!Promise} */(promise);
};

/**
 * An internal use static function.
 */
Promise._onPossiblyUnhandledRejection = function(reason, promise) {
  throw reason;
};

/****************************
  Private functions
 ****************************/

/**
 * The Fulfilled Promise state. Calls onFulfilled with the resolved value of
 * this promise, creating a new promise.
 *
 * If there is no onFulfilled, returns the current promise to avoid an promise
 * instance.
 *
 * @this {!Promise} The current promise
 * @param {*=} value The current promise's resolved value.
 * @param {function(*=)=} onFulfilled
 * @param {function(*=)=} unused
 * @param {Deferred} deferred A deferred object that holds a promise and its
 *     resolve and reject functions. It IS NOT passed when called from
 *     Promise#then to save an object instance (since we may return the current
 *     promise). It IS passed in when adopting the Fulfilled state from the
 *     Pending state.
 * @returns {!Promise}
 */
function FulfilledPromise(value, onFulfilled, unused, deferred) {
  if (!onFulfilled) { return this; }
  if (!deferred) {
    deferred = new Deferred(this.constructor);
  }
  defer(tryCatchDeferred(deferred, onFulfilled, value));
  return deferred.promise;
}

/**
 * The Rejected Promise state. Calls onRejected with the resolved value of
 * this promise, creating a new promise.
 *
 * If there is no onRejected, returns the current promise to avoid an promise
 * instance.
 *
 * @this {!Promise} The current promise
 * @param {*=} reason The current promise's rejection reason.
 * @param {function(*=)=} unused
 * @param {function(*=)=} onRejected
 * @param {Deferred} deferred A deferred object that holds a promise and its
 *     resolve and reject functions. It IS NOT passed when called from
 *     Promise#then to save an object instance (since we may return the current
 *     promise). It IS passed in when adopting the Rejected state from the
 *     Pending state.
 * @returns {!Promise}
 */
function RejectedPromise(reason, unused, onRejected, deferred) {
  if (!onRejected) { return this; }
  if (!deferred) {
    deferred = new Deferred(this.constructor);
  }
  defer(tryCatchDeferred(deferred, onRejected, reason));
  return deferred.promise;
}

/**
 * The Pending Promise state. Eventually calls onFulfilled once the promise has
 * resolved, or onRejected once the promise rejects.
 *
 * If there is no onFulfilled and no onRejected, returns the current promise to
 * avoid an promise instance.
 *
 * @this {!Promise} The current promise
 * @param {*=} queue The current promise's pending promises queue.
 * @param {function(*=)=} onFulfilled
 * @param {function(*=)=} onRejected
 * @param {Deferred} deferred A deferred object that holds a promise and its
 *     resolve and reject functions. It IS NOT passed when called from
 *     Promise#then to save an object instance (since we may return the current
 *     promise). It IS passed in when adopting the Pending state from the
 *     Pending state of another promise.
 * @returns {!Promise}
 */
function PendingPromise(queue, onFulfilled, onRejected, deferred) {
  if (!onFulfilled && !onRejected) { return this; }
  if (!deferred) {
    deferred = new Deferred(this.constructor);
  }
  queue.push({
    deferred: deferred,
    onFulfilled: onFulfilled || deferred.resolve,
    onRejected: onRejected || deferred.reject
  });
  return deferred.promise;
}

/**
 * Constructs a deferred instance that holds a promise and its resolve and
 * reject functions.
 *
 * @constructor
 */
function Deferred(Promise) {
  var deferred = this;
  /** @type {!Promise} */
  this.promise = new Promise(function(resolve, reject) {
    /** @type {function(*=)} */
    deferred.resolve = resolve;

    /** @type {function(*=)} */
    deferred.reject = reject;
  });
  return deferred;
}

/**
 * Transitions the state of promise to another state. This is only ever called
 * on with a promise that is currently in the Pending state.
 *
 * @param {!Promise} promise
 * @param {function(this:Promise,*=,function(*=),function(*=),Deferred):!Promise} state
 * @param {*=} value
 */
function adopt(promise, state, value) {
  var queue = promise._value;
  promise._state = state;
  promise._value = value;

  for (var i = 0; i < queue.length; i++) {
    var next = queue[i];
    promise._state(
      value,
      next.onFulfilled,
      next.onRejected,
      next.deferred
    );
  }

  // Determine if this rejected promise will be "handled".
  if (state === RejectedPromise && promise._isChainEnd) {
    setTimeout(function() {
      if (promise._isChainEnd) {
        promise.constructor._onPossiblyUnhandledRejection(value, promise);
      }
    }, 0);
  }
}
/**
 * A partial application of adopt.
 *
 * @param {!Promise} promise
 * @param {function(this:Promise,*=,function(*=),function(*=),Deferred):!Promise} state
 * @returns {function(*=)}
 */
function adopter(promise, state) {
  return function(value) {
    adopt(promise, state, value);
  };
}

/**
 * A no-op function to prevent double resolving.
 */
function noop() {}

/**
 * Tests if fn is a Function
 *
 * @param {*} fn
 * @returns {boolean}
 */
function isFunction(fn) {
  return typeof fn === 'function';
}

/**
 * Tests if fn is an Object
 *
 * @param {*} obj
 * @returns {boolean}
 */
function isObject(obj) {
  return obj === Object(obj);
}

/**
 * Iterates over each element of an array, calling the iterator with the
 * element and its index.
 *
 * @param {!Array} collection
 * @param {function(*=,number)} iterator
 */
function each(collection, iterator) {
  for (var i = 0; i < collection.length; i++) {
    iterator(collection[i], i);
  }
}

/**
 * Creates a function that will attempt to resolve the deferred with the return
 * of fn. If any error is raised, rejects instead.
 *
 * @param {!Deferred} deferred
 * @param {function(*=)} fn
 * @param {*} arg
 * @returns {function()}
 */
function tryCatchDeferred(deferred, fn, arg) {
  var promise = deferred.promise;
  var resolve = deferred.resolve;
  var reject = deferred.reject;
  return function() {
    try {
      var result = fn(arg);
      if (resolve === fn || reject === fn) {
        return;
      }
      doResolve(promise, resolve, reject, result, result);
    } catch (e) {
      reject(e);
    }
  };
}

/**
 * Queues and executes multiple deferred functions on another run loop.
 */
var defer = (function() {
  /**
   * Defers fn to another run loop.
   */
  var scheduleFlush;
  if (typeof window !== 'undefined' && window.postMessage) {
    window.addEventListener('message', flush);
    scheduleFlush = function() {
      window.postMessage('macro-task', '*');
    };
  } else {
    scheduleFlush = function() {
      setTimeout(flush, 0);
    };
  }

  var queue = new Array(16);
  var length = 0;

  function flush() {
    for (var i = 0; i < length; i++) {
      var fn = queue[i];
      queue[i] = null;
      fn();
    }
    length = 0;
  }

  /**
   * @param {function()} fn
   */
  return function defer(fn) {
    if (length === 0) { scheduleFlush(); }
    queue[length++] = fn;
  };
})();

/**
 * The Promise resolution procedure.
 * https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
 *
 * @param {!Promise} promise
 * @param {function(*=)} resolve
 * @param {function(*=)} reject
 * @param {*} value
 * @param {*=} context
 */
function doResolve(promise, resolve, reject, value, context) {
  var _reject = reject;
  var then;
  var _resolve;
  try {
    if (value === promise) {
      throw new TypeError('Cannot fulfill promise with itself');
    }
    var isObj = isObject(value);
    if (isObj && value instanceof promise.constructor) {
      adopt(promise, value._state, value._value);
    } else if (isObj && (then = value.then) && isFunction(then)) {
      _resolve = function(value) {
        _resolve = _reject = noop;
        doResolve(promise, resolve, reject, value, value);
      };
      _reject = function(reason) {
        _resolve = _reject = noop;
        reject(reason);
      };
      then.call(
        context,
        function(value) { _resolve(value); },
        function(reason) { _reject(reason); }
      );
    } else {
      resolve(value);
    }
  } catch (e) {
    _reject(e);
  }
}

Promise.default = Promise.Promise = Promise;
module.exports = Promise;

},{}],10:[function(require,module,exports){
exports.__esModule = true;
exports.getIframe = getIframe;
exports.addDataAndJsonAttributes_ = addDataAndJsonAttributes_;
exports.prefetchBootstrap = prefetchBootstrap;
exports.getBootstrapBaseUrl = getBootstrapBaseUrl;
exports.getSubDomain = getSubDomain;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _asserts = require('./asserts');

var _srcLayout = require('../src/layout');

var _service = require('./service');

var _documentInfo = require('./document-info');

var _mode = require('./mode');

var _experiments = require('./experiments');

var _preconnect = require('./preconnect');

var _string = require('./string');

var _url = require('./url');

var _viewer = require('./viewer');

/** @type {!Object<string,number>} Number of 3p frames on the for that type. */
var count = {};

/**
 * Produces the attributes for the ad template.
 * @param {!Window} parentWindow
 * @param {!Element} element
 * @param {string=} opt_type
 * @return {!Object} Contains
 *     - type, width, height, src attributes of <amp-ad> tag. These have
 *       precedence over the data- attributes.
 *     - data-* attributes of the <amp-ad> tag with the "data-" removed.
 *     - A _context object for internal use.
 */
function getFrameAttributes(parentWindow, element, opt_type) {
  var width = element.getAttribute('width');
  var height = element.getAttribute('height');
  var type = opt_type || element.getAttribute('type');
  _asserts.assert(type, 'Attribute type required for <amp-ad>: %s', element);
  var attributes = {};
  // Do these first, as the other attributes have precedence.
  addDataAndJsonAttributes_(element, attributes);
  attributes.width = _srcLayout.getLengthNumeral(width);
  attributes.height = _srcLayout.getLengthNumeral(height);
  var box = element.getLayoutBox();
  attributes.initialWindowWidth = box.width;
  attributes.initialWindowHeight = box.height;
  attributes.type = type;
  var docInfo = _documentInfo.documentInfoFor(parentWindow);
  var viewer = _viewer.viewerFor(parentWindow);
  var locationHref = parentWindow.location.href;
  // This is really only needed for tests, but whatever. Children
  // see us as the logical origin, so telling them we are about:srcdoc
  // will fail ancestor checks.
  if (locationHref == 'about:srcdoc') {
    locationHref = parentWindow.parent.location.href;
  }
  attributes._context = {
    referrer: viewer.getUnconfirmedReferrerUrl(),
    canonicalUrl: docInfo.canonicalUrl,
    pageViewId: docInfo.pageViewId,
    clientId: element.getAttribute('ampcid'),
    location: {
      href: locationHref
    },
    tagName: element.tagName,
    mode: _mode.getMode(),
    hidden: !viewer.isVisible()
  };
  var adSrc = element.getAttribute('src');
  if (adSrc) {
    attributes.src = adSrc;
  }
  return attributes;
}

/**
 * Creates the iframe for the embed. Applies correct size and passes the embed
 * attributes to the frame via JSON inside the fragment.
 * @param {!Window} parentWindow
 * @param {!Element} element
 * @param {string=} opt_type
 * @return {!Element} The iframe.
 */

function getIframe(parentWindow, element, opt_type) {
  var attributes = getFrameAttributes(parentWindow, element, opt_type);
  var iframe = document.createElement('iframe');
  if (!count[attributes.type]) {
    count[attributes.type] = 0;
  }
  iframe.name = 'frame_' + attributes.type + '_' + count[attributes.type]++;

  // Pass ad attributes to iframe via the fragment.
  var src = getBootstrapBaseUrl(parentWindow) + '#' + JSON.stringify(attributes);

  iframe.src = src;
  iframe.ampLocation = _url.parseUrl(src);
  iframe.width = attributes.width;
  iframe.height = attributes.height;
  iframe.style.border = 'none';
  iframe.setAttribute('scrolling', 'no');
  iframe.onload = function () {
    // Chrome does not reflect the iframe readystate.
    this.readyState = 'complete';
  };
  return iframe;
}

/**
 * Copies data- attributes from the element into the attributes object.
 * Removes the data- from the name and capitalizes after -. If there
 * is an attribute called json, parses the JSON and adds it to the
 * attributes.
 * @param {!Element} element
 * @param {!Object} attributes The destination.
 * visibleForTesting
 */

function addDataAndJsonAttributes_(element, attributes) {
  for (var i = 0; i < element.attributes.length; i++) {
    var attr = element.attributes[i];
    if (attr.name.indexOf('data-') != 0) {
      continue;
    }
    attributes[_string.dashToCamelCase(attr.name.substr(5))] = attr.value;
  }
  var json = element.getAttribute('json');
  if (json) {
    var obj = undefined;
    try {
      obj = JSON.parse(json);
    } catch (e) {
      _asserts.assert(false, 'Error parsing JSON in json attribute in element %s', element);
    }
    for (var key in obj) {
      attributes[key] = obj[key];
    }
  }
}

/**
 * Prefetches URLs related to the bootstrap iframe.
 * @param {!Window} parentWindow
 * @return {string}
 */

function prefetchBootstrap(window) {
  var url = getBootstrapBaseUrl(window);
  var preconnect = _preconnect.preconnectFor(window);
  preconnect.prefetch(url);
  // While the URL may point to a custom domain, this URL will always be
  // fetched by it.
  preconnect.prefetch('https://3p.ampproject.net/1458089172890/f.js');
}

/**
 * Returns the base URL for 3p bootstrap iframes.
 * @param {!Window} parentWindow
 * @param {boolean=} opt_strictForUnitTest
 * @return {string}
 * @visibleForTesting
 */

function getBootstrapBaseUrl(parentWindow, opt_strictForUnitTest) {
  return _service.getService(window, 'bootstrapBaseUrl', function () {
    return getCustomBootstrapBaseUrl(parentWindow, opt_strictForUnitTest) || getDefaultBootstrapBaseUrl(parentWindow);
  });
}

/**
 * Returns the default base URL for 3p bootstrap iframes.
 * @param {!Window} parentWindow
 * @return {string}
 */
function getDefaultBootstrapBaseUrl(parentWindow) {
  var url = 'https://' + getSubDomain(parentWindow) + '.ampproject.net/1458089172890/frame.html';
  if (_mode.getMode().localDev) {
    url = 'http://ads.localhost:' + (parentWindow.location.port || parentWindow.parent.location.port) + '/dist.3p/current' + (_mode.getMode().minified ? '-min/frame' : '/frame.max') + '.html';
  }
  return url;
}

/**
 * Sub domain on which the 3p iframe will be hosted.
 * Because we only calculate the URL once per page, this function is only
 * called once and hence all frames on a page use the same URL.
 * @return {string}
 * @visibleForTesting
 */

function getSubDomain(win) {
  if (!_experiments.isDevChannel(win)) {
    return '3p';
  }

  var rand = undefined;
  if (win.crypto && win.crypto.getRandomValues) {
    // By default use 2 32 bit integers.
    var uint32array = new Uint32Array(2);
    win.crypto.getRandomValues(uint32array);
    rand = String(uint32array[0]) + uint32array[1];
  } else {
    // Fall back to Math.random.
    rand = String(win.Math.random()).substr(2) + '0';
  }
  return 'd-' + rand;
}

/**
 * Returns the custom base URL for 3p bootstrap iframes if it exists.
 * Otherwise null.
 * @param {!Window} parentWindow
 * @param {boolean=} opt_strictForUnitTest
 * @return {?string}
 */
function getCustomBootstrapBaseUrl(parentWindow, opt_strictForUnitTest) {
  var meta = parentWindow.document.querySelector('meta[name="amp-3p-iframe-src"]');
  if (!meta) {
    return null;
  }
  var url = _url.assertHttpsUrl(meta.getAttribute('content'), meta);
  _asserts.assert(url.indexOf('?') == -1, '3p iframe url must not include query string %s in element %s.', url, meta);
  // This is not a security primitive, we just don't want this to happen in
  // practice. People could still redirect to the same origin, but they cannot
  // redirect to the proxy origin which is the important one.
  var parsed = _url.parseUrl(url);
  _asserts.assert(parsed.hostname == 'localhost' && !opt_strictForUnitTest || parsed.origin != _url.parseUrl(parentWindow.location.href).origin, '3p iframe url must not be on the same origin as the current document ' + '%s (%s) in element %s. See https://github.com/ampproject/amphtml/blob/' + 'master/spec/amp-iframe-origin-policy.md for details.', url, _url.parseUrl(url).origin, meta);
  return url + '?1458089172890';
}

},{"../src/layout":37,"./asserts":16,"./document-info":22,"./experiments":29,"./mode":40,"./preconnect":48,"./service":53,"./string":65,"./url":72,"./viewer":75}],11:[function(require,module,exports){
exports.__esModule = true;
exports.accessServiceFor = accessServiceFor;
exports.accessServiceForOrNull = accessServiceForOrNull;
/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _customElement = require('./custom-element');

/**
 * Returns a promise for the Access service.
 * @param {!Window} win
 * @return {!Promise<!AccessService>}
 */

function accessServiceFor(win) {
  return _customElement.getElementService(win, 'access', 'amp-access');
}

/**
 * Returns a promise for the Access service or a promise for null if the service
 * is not available on the current page.
 * @param {!Window} win
 * @return {!Promise<?AccessService>}
 */

function accessServiceForOrNull(win) {
  return _customElement.getElementServiceIfAvailable(win, 'access', 'amp-access');
}

},{"./custom-element":20}],12:[function(require,module,exports){
exports.__esModule = true;
exports.activityFor = activityFor;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _customElement = require('./custom-element');

/**
 * @param {!Window} win
 * @return {!Promise<!Activity>}
 */

function activityFor(win) {
  return _customElement.getElementService(win, 'activity', 'amp-analytics');
}

;

},{"./custom-element":20}],13:[function(require,module,exports){
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Entry point into AMP for compilation with babel. Just loads amp.js and
// Babel's helpers.

require('../third_party/babel/custom-babel-helpers');

require('./amp');

},{"../third_party/babel/custom-babel-helpers":78,"./amp":15}],14:[function(require,module,exports){
exports.__esModule = true;
exports.installCoreServices = installCoreServices;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _serviceActionImpl = require('./service/action-impl');

var _serviceFramerateImpl = require('./service/framerate-impl');

var _serviceHistoryImpl = require('./service/history-impl');

var _serviceResourcesImpl = require('./service/resources-impl');

var _serviceStandardActionsImpl = require('./service/standard-actions-impl');

var _serviceViewerImpl = require('./service/viewer-impl');

var _serviceViewportImpl = require('./service/viewport-impl');

var _serviceVsyncImpl = require('./service/vsync-impl');

/**
 * Services that can be assumed are always available in AMP.
 * They are installed in amp.js very early in the application lifecyle.
 * @param {!Window} window
 */

function installCoreServices(window) {
  _serviceViewerImpl.installViewerService(window);
  _serviceViewportImpl.installViewportService(window);
  _serviceHistoryImpl.installHistoryService(window);
  _serviceVsyncImpl.installVsyncService(window);
  _serviceActionImpl.installActionService(window);
  _serviceResourcesImpl.installResourcesService(window);
  _serviceStandardActionsImpl.installStandardActions(window);
  _serviceFramerateImpl.installFramerateService(window);
}

},{"./service/action-impl":54,"./service/framerate-impl":56,"./service/history-impl":57,"./service/resources-impl":58,"./service/standard-actions-impl":59,"./service/viewer-impl":60,"./service/viewport-impl":61,"./service/vsync-impl":62}],15:[function(require,module,exports){
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

require('./polyfills');

var _pullToRefresh = require('./pull-to-refresh');

var _performance = require('./performance');

var _template = require('./template');

var _ampCoreService = require('./amp-core-service');

var _builtinsAmpAd = require('../builtins/amp-ad');

var _documentClick = require('./document-click');

var _builtinsAmpImg = require('../builtins/amp-img');

var _builtinsAmpVideo = require('../builtins/amp-video');

var _builtinsAmpPixel = require('../builtins/amp-pixel');

var _builtinsAmpEmbed = require('../builtins/amp-embed');

var _styles = require('./styles');

var _error = require('./error');

var _customElement = require('./custom-element');

var _runtime = require('./runtime');

var _buildCss = require('../build/css');

var _validatorIntegration = require('./validator-integration');

var _renderDelayingExtensions = require('./render-delaying-extensions');

// We must under all circumstances call makeBodyVisible.
// It is much better to have AMP tags not rendered than having
// a completely blank page.
try {
  (function () {
    // Should happen first.
    _error.installErrorReporting(window); // Also calls makeBodyVisible on errors.
    var perf = _performance.performanceFor(window);

    perf.tick('is');
    _styles.installStyles(document, _buildCss.cssText, function () {
      try {
        _ampCoreService.installCoreServices(window);
        // We need the core services (viewer/resources) to start instrumenting
        perf.coreServicesAvailable();
        _template.templatesFor(window);

        _builtinsAmpImg.installImg(window);
        _builtinsAmpAd.installAd(window);
        _builtinsAmpPixel.installPixel(window);
        _builtinsAmpVideo.installVideo(window);
        _builtinsAmpEmbed.installEmbed(window);

        _runtime.adopt(window);
        _customElement.stubElements(window);

        _pullToRefresh.installPullToRefreshBlocker(window);
        _documentClick.installGlobalClickListener(window);

        _validatorIntegration.maybeValidate(window);
        _styles.makeBodyVisible(document, _renderDelayingExtensions.waitForExtensions(window));
      } catch (e) {
        _styles.makeBodyVisible(document);
        throw e;
      } finally {
        perf.tick('e_is');
        // TODO(erwinm): move invocation of the `flush` method when we have the
        // new ticks in place to batch the ticks properly.
        perf.flush();
      }
    }, /* opt_isRuntimeCss */true, /* opt_ext */'amp-runtime');
  })();
} catch (e) {
  // In case of an error call this.
  _styles.makeBodyVisible(document);
  throw e;
}

// Output a message to the console and add an attribute to the <html>
// tag to give some information that can be used in error reports.
// (At least by sophisticated users).
if (window.console) {
  (console.info || console.log).call(console, 'Powered by AMP ⚡ HTML – Version 1458089172890');
}
document.documentElement.setAttribute('amp-version', '1458089172890');

},{"../build/css":2,"../builtins/amp-ad":3,"../builtins/amp-embed":4,"../builtins/amp-img":5,"../builtins/amp-pixel":6,"../builtins/amp-video":7,"./amp-core-service":14,"./custom-element":20,"./document-click":21,"./error":27,"./performance":43,"./polyfills":45,"./pull-to-refresh":49,"./render-delaying-extensions":50,"./runtime":52,"./styles":67,"./template":68,"./validator-integration":74}],16:[function(require,module,exports){
exports.__esModule = true;
exports.assert = assert;
exports.assertEnumValue = assertEnumValue;
exports.userError = userError;
exports.isAssertErrorMessage = isAssertErrorMessage;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Triple zero width space.
// This is added to assert error messages, so that we can later identify
// them, when the only thing that we have is the message. This is the
// case in many browsers when the global exception handler is invoked.
var ASSERT_SENTINEL = '\u200B\u200B\u200B';

exports.ASSERT_SENTINEL = ASSERT_SENTINEL;
/**
 * Throws an error if the first argument isn't trueish.
 *
 * Supports argument substitution into the message via %s placeholders.
 *
 * Throws an error object that has two extra properties:
 * - associatedElement: This is the first element provided in the var args.
 *   It can be used for improved display of error messages.
 * - messageArray: The elements of the substituted message as non-stringified
 *   elements in an array. When e.g. passed to console.error this yields
 *   native displays of things like HTML elements.
 *
 * @param {T} shouldBeTrueish The value to assert. The assert fails if it does
 *     not evaluate to true.
 * @param {string} message The assertion message
 * @param {...*} var_args Arguments substituted into %s in the message.
 * @return {T} The value of shouldBeTrueish.
 * @template T
 */
/*eslint "google-camelcase/google-camelcase": 0*/

function assert(shouldBeTrueish, message, var_args) {
  var firstElement = undefined;
  if (!shouldBeTrueish) {
    message = message || 'Assertion failed';
    var splitMessage = message.split('%s');
    var first = splitMessage.shift();
    var formatted = first;
    var messageArray = [];
    pushIfNonEmpty(messageArray, first);
    for (var i = 2; i < arguments.length; i++) {
      var val = arguments[i];
      if (val && val.tagName) {
        firstElement = val;
      }
      var nextConstant = splitMessage.shift();
      messageArray.push(val);
      pushIfNonEmpty(messageArray, nextConstant.trim());
      formatted += toString(val) + nextConstant;
    }
    var e = userError(formatted);
    e.fromAssert = true;
    e.associatedElement = firstElement;
    e.messageArray = messageArray;
    throw e;
  }
  return shouldBeTrueish;
}

/*eslint "google-camelcase/google-camelcase": 2*/

/**
 * Asserts and returns the enum value. If the enum doesn't contain such a value,
 * the error is thrown.
 *
 * @param {!Enum<T>} enumObj
 * @param {string} s
 * @param {string=} opt_enumName
 * @return T
 * @template T
 */

function assertEnumValue(enumObj, s, opt_enumName) {
  for (var k in enumObj) {
    if (enumObj[k] == s) {
      return enumObj[k];
    }
  }
  throw new Error('Unknown ' + (opt_enumName || 'enum') + ' value: "' + s + '"');
}

/**
 * Returns an error object that will be treated as user originated error
 * by the system.
 * User in this case means: 'Error caused by doc as opposed internal AMP
 * error'.
 * @param {string} message
 * @return {!Error}
 */

function userError(message) {
  return new Error(message + ASSERT_SENTINEL);
}

/**
 * @return {boolean} Whether this message was created from an assert.
 */

function isAssertErrorMessage(message) {
  return message.indexOf(ASSERT_SENTINEL) >= 0;
}

/**
 * @param {*} val
 * @return {string}
 */
function toString(val) {
  if (val instanceof Element) {
    return val.tagName.toLowerCase() + (val.id ? '#' + val.id : '');
  }
  return val;
}

/**
 * @param {!Array} array
 * @param {*} val
 */
function pushIfNonEmpty(array, val) {
  if (val != '') {
    array.push(val);
  }
}

},{}],17:[function(require,module,exports){
exports.__esModule = true;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _layout = require('./layout');

var _preconnect = require('./preconnect');

var _resources = require('./resources');

var _viewer = require('./viewer');

var _viewport = require('./viewport');

var _vsync = require('./vsync');

/**
 * Base class for all custom element implementations. Instead of inheriting
 * from Element this class has an Element. Among other things this allows
 * switching the element implementation when going from a stub to the full
 * implementation.
 *
 * The base class implements a set of lifecycle methods that are called by
 * the runtime as appropriate. These are mostly based on the custom element
 * lifecycle (See
 * http://www.html5rocks.com/en/tutorials/webcomponents/customelements/)
 * and adding AMP style late loading to the mix.
 *
 * The complete lifecycle of custom DOM element is:
 *
 *           ||
 *           || createdCallback
 *           ||
 *           \/
 *    State: <NOT BUILT> <NOT UPGRADED> <NOT ATTACHED>
 *           ||
 *           || upgrade
 *           ||
 *           \/
 *    State: <NOT BUILT> <NOT ATTACHED>
 *           ||
 *           || firstAttachedCallback
 *           ||
 *           \/
 *    State: <NOT BUILT>             <=
 *           ||                       ||
 *           || isReadyToBuild?  ======
 *           ||
 *           \/
 *    State: <NOT BUILT>
 *           ||
 *           || buildCallback
 *           || preconnectCallback may be called N times after this.
 *           || documentInactiveCallback may be called N times after this.
 *           ||
 *           \/
 *    State: <BUILT>
 *           ||
 *           || layoutCallback        <==
             || (firstLayoutCompleted)  ||
 *           ||                         ||
 *           \/                         || isRelayoutNeeded?
 *    State: <LAID OUT>                 ||
 *           ||                         ||
 *           ||                 =========
 *           ||
 *           || viewportCallback
 *           ||
 *           \/
 *    State: <IN VIEWPORT>
 *
 * The preconnectCallback is called when the systems thinks it is good
 * to preconnect to hosts needed by an element. It will never be called
 * before buildCallback and it might be called multiple times including
 * after layoutCallback.
 *
 * The documentInactiveCallback is called when the document becomes
 * inactive. E.g. when the user swipes away from the document or
 * focuses a different tab.
 *
 * Additionally whenever the dimensions of an element might have changed
 * AMP remeasures its dimensions and calls `onLayoutMeasure` on the
 * element instance. This can be used to do additional style calculations
 * without triggering style recalculations.
 *
 * For more details, see {@link custom-element.js}.
 *
 * Each method is called exactly once and overriding them in subclasses
 * is optional.
 */

var BaseElement = (function () {
  /** @param {!AmpElement} element */

  function BaseElement(element) {
    babelHelpers.classCallCheck(this, BaseElement);

    /** @public @const */
    this.element = element;

    /** @package {!Layout} */
    this.layout_ = _layout.Layout.NODISPLAY;

    /** @package {number} */
    this.layoutWidth_ = -1;

    /** @package {boolean} */
    this.inViewport_ = false;

    /** @private {!Object<string, function(!ActionInvocation)>} */
    this.actionMap_ = this.getWin().Object.create(null);

    /** @protected {!Preconnect} */
    this.preconnect = _preconnect.preconnectFor(this.getWin());

    /** @private {!Resources}  */
    this.resources_ = _resources.resourcesFor(this.getWin());
  }

  /** @return {!Layout} */

  BaseElement.prototype.getLayout = function getLayout() {
    return this.layout_;
  };

  /** @protected @return {!Window} */

  BaseElement.prototype.getWin = function getWin() {
    return this.element.ownerDocument.defaultView;
  };

  /** @protected @return {!Vsync} */

  BaseElement.prototype.getVsync = function getVsync() {
    return _vsync.vsyncFor(this.getWin());
  };

  /**
   * Returns the layout width for this element. A `-1` value indicates that the
   * layout is not yet known. A `0` value indicates that the element is not
   * visible.
   * @return {number}
   * @protected
   */

  BaseElement.prototype.getLayoutWidth = function getLayoutWidth() {
    return this.layoutWidth_;
  };

  /**
   * Intended to be implemented by subclasses. Tests whether the element
   * supports the specified layout. By default only Layout.NODISPLAY is
   * supported.
   * @param {!Layout} layout
   * @return {boolean}
   * @protected
   */

  BaseElement.prototype.isLayoutSupported = function isLayoutSupported(layout) {
    return layout == _layout.Layout.NODISPLAY;
  };

  /**
   * @return {boolean}
   */

  BaseElement.prototype.isInViewport = function isInViewport() {
    return this.inViewport_;
  };

  /**
   * Called when the element is first created. Note that for element created
   * using createElement this may be before any children are added.
   */

  BaseElement.prototype.createdCallback = function createdCallback() {}
  // Subclasses may override.

  /**
   * Override in subclass to adjust the element when it is being added to the
   * DOM. Could e.g. be used to insert a fallback. Should not typically start
   * loading a resource.
   */
  ;

  BaseElement.prototype.firstAttachedCallback = function firstAttachedCallback() {}
  // Subclasses may override.

  /**
   * Override in subclass to indicate if the element is ready to rebuild its
   * DOM subtree.  If the element can proceed with building the content return
   * "true" and return "false" otherwise. The element may not be ready to build
   * e.g. because its children are not available yet.
   *
   * See {@link buildCallback} for more details.
   *
   * @return {boolean}
   */
  ;

  BaseElement.prototype.isReadyToBuild = function isReadyToBuild() {
    // Subclasses may override.
    return true;
  };

  /**
   * Override in subclass if the element needs to rebuilt its DOM content.
   * Until the element has been rebuilt its content are not shown with an only
   * exception of [placeholder] elements. From the moment the element is created
   * and until the building phase is complete it will have "amp-notbuilt" CSS
   * class set on it.
   *
   * This callback is executed early after the element has been attached to DOM
   * if "isReadyToBuild" callback returns "true" or its called later upon the
   * determination of Resources manager but definitely before first
   * "layoutCallback" is called. Notice that "isReadyToBuild" call is not
   * consulted in the later case.
   */

  BaseElement.prototype.buildCallback = function buildCallback() {}
  // Subclasses may override.

  /**
   * Called by the framework to give the element a chance to preconnect to
   * hosts and prefetch resources it is likely to need. May be called
   * multiple times because connections can time out.
   */
  ;

  BaseElement.prototype.preconnectCallback = function preconnectCallback() {}
  // Subclasses may override.

  /**
   * Sets this element as the owner of the specified element. By setting itself
   * as an owner, the element declares that it will manage the lifecycle of
   * the owned element itself. This element, as an owner, will have to call
   * {@link scheduleLayout}, {@link schedulePreload}, {@link updateInViewport}
   * and similar methods.
   * @param {!Element} element
   */
  ;

  BaseElement.prototype.setAsOwner = function setAsOwner(element) {
    this.resources_.setOwner(element, this.element);
  };

  /**
   * Subclasses can override this method to opt-in into being called to
   * prerender when document itself is not yet visible (pre-render mode).
   * @return {boolean}
   */

  BaseElement.prototype.prerenderAllowed = function prerenderAllowed() {
    return false;
  };

  /**
   * Subclasses can override this method to opt-out of rendering the element
   * when it is not currently visible.
   * @return {boolean}
   */

  BaseElement.prototype.renderOutsideViewport = function renderOutsideViewport() {
    return true;
  };

  /**
   * Subclasses can override this method to opt-in into receiving additional
   * {@link layoutCallback} calls. Note that this method is not consulted for
   * the first layout given that each element must be laid out at least once.
   * @return {boolean}
   */

  BaseElement.prototype.isRelayoutNeeded = function isRelayoutNeeded() {
    return false;
  };

  /**
   * Called when the element should perform layout. At this point the element
   * should load/reload resources associated with it. This method is called
   * by the runtime and cannot be called manually. Returns promise that will
   * complete when loading is considered to be complete.
   *
   * The first layout call is always called. If the subclass is interested in
   * receiving additional callbacks, it has to opt in to do so using
   * {@link isRelayoutNeeded} method.
   *
   * @return {!Promise}
   */

  BaseElement.prototype.layoutCallback = function layoutCallback() {
    return Promise.resolve();
  };

  /**
   * Called to notify the element that the first layout has been successfully
   * completed.
   *
   * The default behavior of this method is to hide the placeholder. However,
   * a subclass may choose to hide placeholder earlier or not hide it at all.
   *
   * @protected
   */

  BaseElement.prototype.firstLayoutCompleted = function firstLayoutCompleted() {
    this.togglePlaceholder(false);
  };

  /**
   * Instructs the resource that it has either entered or exited the visible
   * viewport. Intended to be implemented by actual components.
   * @param {boolean} unusedInViewport
   */

  BaseElement.prototype.viewportCallback = function viewportCallback(unusedInViewport) {};

  /**
   * Requests the resource to stop its activity when the document goes into
   * inactive state. The scope is up to the actual component. Among other
   * things the active playback of video or audio content must be stopped.
   * The component must return `true` if it'd like to later receive
   * {@link layoutCallback} in case document becomes active again.
   * @return {boolean}
   */

  BaseElement.prototype.documentInactiveCallback = function documentInactiveCallback() {
    return false;
  };

  /**
   * Instructs the element that its activation is requested based on some
   * user event. Intended to be implemented by actual components.
   * @param {!ActionInvocation} unusedInvocation
   */

  BaseElement.prototype.activate = function activate(unusedInvocation) {};

  /**
   * Registers the action handler for the method with the specified name.
   * @param {string} method
   * @param {function(!ActionInvocation)} handler
   * @protected
   */

  BaseElement.prototype.registerAction = function registerAction(method, handler) {
    this.actionMap_[method] = handler;
  };

  /**
   * Requests the element to execute the specified method. If method must have
   * been previously registered using {@link registerAction}, otherwise an
   * error is thrown.
   * @param {!ActionInvocation} invocation The invocation data.
   * @param {boolean} unusedDeferred Whether the invocation has had to wait any time
   *   for the element to be resolved, upgraded and built.
   * @final
   * @package
   */

  BaseElement.prototype.executeAction = function executeAction(invocation, unusedDeferred) {
    if (invocation.method == 'activate') {
      this.activate(invocation);
    } else {
      var handler = this.actionMap_[invocation.method];
      if (!handler) {
        throw new Error('Method not found: ' + invocation.method);
      }
      handler(invocation);
    }
  };

  /**
   * Returns the maximum DPR available on this device.
   * @return {number}
   */

  BaseElement.prototype.getMaxDpr = function getMaxDpr() {
    return this.resources_.getMaxDpr();
  };

  /**
   * Returns the most optimal DPR currently recommended.
   * @return {number}
   */

  BaseElement.prototype.getDpr = function getDpr() {
    return this.resources_.getDpr();
  };

  /**
   * Utility method that propagates attributes from this element
   * to the given element.
   * @param  {!Array<string>} attributes
   * @param  {!Element} element
   * @protected @final
   */

  BaseElement.prototype.propagateAttributes = function propagateAttributes(attributes, element) {
    for (var i = 0; i < attributes.length; i++) {
      var attr = attributes[i];
      if (!this.element.hasAttribute(attr)) {
        continue;
      }
      element.setAttribute(attr, this.element.getAttribute(attr));
    }
  };

  /**
   * Returns an optional placeholder element for this custom element.
   * @return {?Element}
   * @protected @final
   */

  BaseElement.prototype.getPlaceholder = function getPlaceholder() {
    return this.element.getPlaceholder();
  };

  /**
   * Hides or shows the placeholder, if available.
   * @param {boolean} state
   * @protected @final
   */

  BaseElement.prototype.togglePlaceholder = function togglePlaceholder(state) {
    this.element.togglePlaceholder(state);
  };

  /**
   * Returns an optional fallback element for this custom element.
   * @return {?Element}
   * @protected @final
   */

  BaseElement.prototype.getFallback = function getFallback() {
    return this.element.getFallback();
  };

  /**
   * Hides or shows the fallback, if available. This function must only
   * be called inside a mutate context.
   * @param {boolean} state
   * @protected @final
   */

  BaseElement.prototype.toggleFallback = function toggleFallback(state) {
    this.element.toggleFallback(state);
  };

  /**
   * Returns an optional overflow element for this custom element.
   * @return {?Element}
   * @protected @final
   */

  BaseElement.prototype.getOverflowElement = function getOverflowElement() {
    return this.element.getOverflowElement();
  };

  /**
   * Returns the original nodes of the custom element without any service nodes
   * that could have been added for markup. These nodes can include Text,
   * Comment and other child nodes.
   * @return {!Array<!Node>}
   * @protected @final
   */

  BaseElement.prototype.getRealChildNodes = function getRealChildNodes() {
    return this.element.getRealChildNodes();
  };

  /**
   * Returns the original children of the custom element without any service
   * nodes that could have been added for markup.
   * @return {!Array<!Element>}
   * @protected @final
   */

  BaseElement.prototype.getRealChildren = function getRealChildren() {
    return this.element.getRealChildren();
  };

  /**
   * Configures the supplied element to have a "fill content" layout. The
   * exact interpretation of "fill content" depends on the element's layout.
   *
   * If `opt_replacedContent` is specified, it indicates whether the "replaced
   * content" styling should be applied. Replaced content is not allowed to
   * have its own paddings or border.
   *
   * @param {!Element} element
   * @param {boolean=} opt_replacedContent
   * @protected @final
   */

  BaseElement.prototype.applyFillContent = function applyFillContent(element, opt_replacedContent) {
    element.classList.add('-amp-fill-content');
    if (opt_replacedContent) {
      element.classList.add('-amp-replaced-content');
    }
  };

  /**
   * Returns the viewport within which the element operates.
   * @return {!Viewport}
   */

  BaseElement.prototype.getViewport = function getViewport() {
    return _viewport.viewportFor(this.getWin());
  };

  /**
   * Returns a previously measured layout box of the element.
   * @return {!LayoutRect}
   */

  BaseElement.prototype.getInsersectionElementLayoutBox = function getInsersectionElementLayoutBox() {
    return this.resources_.getResourceForElement(this.element).getLayoutBox();
  };

  /**
   * Schedule the layout request for the children element or elements
   * specified. Resource manager will perform the actual layout based on the
   * priority of this element and its children.
   * @param {!Element|!Array<!Element>} elements
   * @protected
   */

  BaseElement.prototype.scheduleLayout = function scheduleLayout(elements) {
    this.resources_.scheduleLayout(this.element, elements);
  };

  /**
   * @param {!Element|!Array<!Element>} elements
   * @protected
   */

  BaseElement.prototype.schedulePause = function schedulePause(elements) {
    this.resources_.schedulePause(this.element, elements);
  };

  /**
   * Schedule the preload request for the children element or elements
   * specified. Resource manager will perform the actual preload based on the
   * priority of this element and its children.
   * @param {!Element|!Array<!Element>} elements
   * @param {boolean} inLocalViewport
   * @protected
   */

  BaseElement.prototype.schedulePreload = function schedulePreload(elements) {
    this.resources_.schedulePreload(this.element, elements);
  };

  /**
   * Update inViewport state of the specified children element or elements.
   * Resource manager will perform the actual changes to the inViewport state
   * based on the state of these elements and their parent subtree.
   * @param {!Element|!Array<!Element>} elements
   * @param {boolean} inLocalViewport
   * @protected
   */

  BaseElement.prototype.updateInViewport = function updateInViewport(elements, inLocalViewport) {
    this.resources_.updateInViewport(this.element, elements, inLocalViewport);
  };

  /**
   * Requests the runtime to update the height of this element to the specified
   * value. The runtime will schedule this request and attempt to process it
   * as soon as possible.
   * When the height is successfully updated then the opt_callback is called.
   * @param {number} newHeight
   * @param {function=} opt_callback A callback function.
   * @protected
   */

  BaseElement.prototype.changeHeight = function changeHeight(newHeight, opt_callback) {
    this.resources_. /*OK*/changeHeight(this.element, newHeight, opt_callback);
  };

  /**
   * Requests the runtime to update the height of this element to the specified
   * value. The runtime will schedule this request and attempt to process it
   * as soon as possible. However, unlike in {@link changeHeight}, the runtime
   * may refuse to make a change in which case it will show the element's
   * overflow element if provided, which is supposed to provide the reader with
   * the necessary user action. (The overflow element is shown only if the
   * requested height is greater than 0.)
   * If the height is successfully updated then the opt_callback is called.
   * @param {number} newHeight
   * @param {function=} opt_callback A callback function.
   * @protected
   */

  BaseElement.prototype.attemptChangeHeight = function attemptChangeHeight(newHeight, opt_callback) {
    this.resources_.attemptChangeHeight(this.element, newHeight, opt_callback);
  };

  /**
   * Runs the specified mutation on the element and ensures that measures
   * and layouts performed for the affected elements.
   *
   * This method should be called whenever a significant mutations are done
   * on the DOM that could affect layout of elements inside this subtree or
   * its siblings. The top-most affected element should be specified as the
   * first argument to this method and all the mutation work should be done
   * in the mutator callback which is called in the "mutation" vsync phase.
   *
   * @param {function()} mutator
   * @param {Element=} opt_element
   * @return {!Promise}
   */

  BaseElement.prototype.mutateElement = function mutateElement(mutator, opt_element) {
    this.resources_.mutateElement(opt_element || this.element, mutator);
  };

  /**
   * Schedules callback to be complete within the next batch. This call is
   * intended for heavy DOM mutations that typically cause re-layouts.
   * @param {!Function} callback
   */

  BaseElement.prototype.deferMutate = function deferMutate(callback) {
    this.resources_.deferMutate(this.element, callback);
  };

  /**
   * Requests full overlay mode from the viewer.
   * @protected
   */

  BaseElement.prototype.requestFullOverlay = function requestFullOverlay() {
    _viewer.viewerFor(this.getWin()).requestFullOverlay();
  };

  /**
   * Requests to cancel full overlay mode from the viewer.
   * @protected
   */

  BaseElement.prototype.cancelFullOverlay = function cancelFullOverlay() {
    _viewer.viewerFor(this.getWin()).cancelFullOverlay();
  };

  /**
   * Called when we just measured the layout rect of this element. Doing
   * more expensive style reads should now be cheap.
   * This may currently not work with extended elements. Please file
   * an issue if that is required.
   * @protected
   */

  BaseElement.prototype.onLayoutMeasure = function onLayoutMeasure() {};

  /**
   * Called after a overflowCallback is triggered on an element.
   * @param {boolean} unusedOverflown
   * @param {number} unusedRequestedHeight
   */

  BaseElement.prototype.overflowCallback = function overflowCallback(unusedOverflown, unusedRequestedHeight) {};

  return BaseElement;
})();

exports.BaseElement = BaseElement;
;

},{"./layout":37,"./preconnect":48,"./resources":51,"./viewer":75,"./viewport":76,"./vsync":77}],18:[function(require,module,exports){
exports.__esModule = true;
exports.cidFor = cidFor;
exports.cidForOrNull = cidForOrNull;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Factory for ./service/cid-impl.js
 */

var _customElement = require('./custom-element');

/**
 * @param {!Window} window
 * @return {!Promise<!Cid>}
 */

function cidFor(window) {
  return _customElement.getElementService(window, 'cid', 'amp-analytics');
}

;

/**
 * Returns a promise for the CID service or a promise for null if the service
 * is not available on the current page.
 * @param {!Window} window
 * @return {!Promise<?Cid>}
 */

function cidForOrNull(window) {
  return _customElement.getElementServiceIfAvailable(window, 'cid', 'amp-analytics');
}

;

},{"./custom-element":20}],19:[function(require,module,exports){
exports.__esModule = true;
exports.getCookie = getCookie;
exports.setCookie = setCookie;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Returns the value of the cookie. The cookie access is restricted and must
 * go through the privacy review. Before using this method please file a
 * GitHub issue with "Privacy Review" label.
 *
 * Returns the cookie's value or `null`.
 *
 * @param {!Window} win
 * @param {string} name
 * @return {?string}
 */

function getCookie(win, name) {
  var cookieString = win.document.cookie;
  if (!cookieString) {
    return null;
  }
  var cookies = cookieString.split(';');
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
    var eq = cookie.indexOf('=');
    if (eq == -1) {
      continue;
    }
    if (decodeURIComponent(cookie.substring(0, eq).trim()) == name) {
      return decodeURIComponent(cookie.substring(eq + 1).trim());
    }
  }
  return null;
}

/**
 * Sets the value of the cookie. The cookie access is restricted and must
 * go through the privacy review. Before using this method please file a
 * GitHub issue with "Privacy Review" label.
 *
 * @param {!Window} win
 * @param {string} name
 * @param {string} value
 * @param {time} expirationTime
 * @param {{highestAvailableDomain:boolean}=} opt_options
 *     - highestAvailableDomain: If true, set the cookie at the widest domain
 *       scope allowed by the browser. E.g. on example.com if we are currently
 *       on www.example.com.
 */

function setCookie(win, name, value, expirationTime, opt_options) {
  if (opt_options && opt_options.highestAvailableDomain) {
    var parts = win.location.hostname.split('.');
    var domain = parts[parts.length - 1];
    for (var i = parts.length - 2; i >= 0; i--) {
      domain = parts[i] + '.' + domain;
      trySetCookie(win, name, value, expirationTime, domain);
      if (getCookie(win, name) == value) {
        return;
      }
    }
  }
  trySetCookie(win, name, value, expirationTime, undefined);
}

/**
 * Attempt to set a cookie with the given params.
 *
 * @param {!Window} win
 * @param {string} name
 * @param {string} value
 * @param {time} expirationTime
 * @param {string|undefined} domain
 */
function trySetCookie(win, name, value, expirationTime, domain) {
  // We do not allow setting cookies on the domain that contains both
  // the cdn. and www. hosts.
  if (domain == 'ampproject.org') {
    // Actively delete them.
    value = 'delete';
    expirationTime = 0;
  }
  win.document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value) + '; path=/' + (domain ? '; domain=' + domain : '') + '; expires=' + new Date(expirationTime).toUTCString();
}

// Clean up cookies set by www.ampproject.org to 2nd level.
if (location.hostname.indexOf('.ampproject.org') != 0) {
  trySetCookie(window, '_ga', '', 0, 'ampproject.org');
  trySetCookie(window, 'AMP_ECID_GOOGLE', '', 0, 'ampproject.org');
}

},{}],20:[function(require,module,exports){
exports.__esModule = true;
exports.upgradeOrRegisterElement = upgradeOrRegisterElement;
exports.stubElements = stubElements;
exports.applyLayout_ = applyLayout_;
exports.createAmpElementProto = createAmpElementProto;
exports.registerElement = registerElement;
exports.registerElementAlias = registerElementAlias;
exports.markElementScheduledForTesting = markElementScheduledForTesting;
exports.resetScheduledElementForTesting = resetScheduledElementForTesting;
exports.getElementService = getElementService;
exports.getElementServiceIfAvailable = getElementServiceIfAvailable;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _layout = require('./layout');

var _elementStub = require('./element-stub');

var _asserts = require('./asserts');

var _srcLoader = require('../src/loader');

var _srcIntersectionObserver = require('../src/intersection-observer');

var _log = require('./log');

var _sizeList = require('./size-list');

var _error = require('./error');

var _resources = require('./resources');

var _timer = require('./timer');

var _vsync = require('./vsync');

var _service = require('./service');

var _dom = require('./dom');

var dom = babelHelpers.interopRequireWildcard(_dom);

var TAG_ = 'CustomElement';

/**
 * This is the minimum width of the element needed to trigger `loading`
 * animation. This value is justified as about 1/3 of a smallish mobile
 * device viewport. Trying to put a loading indicator into a small element
 * is meaningless.
 * @private @const {number}
 */
var MIN_WIDTH_FOR_LOADING_ = 100;

/**
 * The elements positioned ahead of this threshold may have their loading
 * indicator initialized faster. This is benefitial to avoid relayout during
 * render phase or scrolling.
 * @private @const {number}
 */
var PREPARE_LOADING_THRESHOLD_ = 1000;

/**
 * Map from element name to implementation class.
 * @const {Object}
 */
var knownElements = {};

/**
 * Whether this platform supports template tags.
 * @const {boolean}
 */
var TEMPLATE_TAG_SUPPORTED = ('content' in document.createElement('template'));

/**
 * Registers an element. Upgrades it if has previously been stubbed.
 * @param {!Window} win
 * @param {string}
 * @param {function(!Function)} toClass
 */

function upgradeOrRegisterElement(win, name, toClass) {
  if (!knownElements[name]) {
    registerElement(win, name, toClass);
    return;
  }
  _asserts.assert(knownElements[name] == _elementStub.ElementStub, '%s is already registered. The script tag for ' + '%s is likely included twice in the page.', name, name);
  for (var i = 0; i < _elementStub.stubbedElements.length; i++) {
    var stub = _elementStub.stubbedElements[i];
    // There are 3 possible states here:
    // 1. We never made the stub because the extended impl. loaded first.
    //    In that case the element won't be in the array.
    // 2. We made a stub but the browser didn't attach it yet. In
    //    that case we don't need to upgrade but simply switch to the new
    //    implementation.
    // 3. A stub was attached. We upgrade which means we replay the
    //    implementation.
    var element = stub.element;
    if (element.tagName.toLowerCase() == name) {
      try {
        element.upgrade(toClass);
      } catch (e) {
        _error.reportError(e, this);
      }
    }
  }
}

/**
 * Stub extended elements missing an implementation.
 * @param {!Window} win
 */

function stubElements(win) {
  win.ampExtendedElements = {};
  var list = win.document.querySelectorAll('[custom-element]');
  for (var i = 0; i < list.length; i++) {
    var _name = list[i].getAttribute('custom-element');
    win.ampExtendedElements[_name] = true;
    if (knownElements[_name]) {
      continue;
    }
    registerElement(win, _name, _elementStub.ElementStub);
  }
}

/**
 * Applies layout to the element. Visible for testing only.
 * @param {!AmpElement} element
 */

function applyLayout_(element) {
  var layoutAttr = element.getAttribute('layout');
  var widthAttr = element.getAttribute('width');
  var heightAttr = element.getAttribute('height');
  var sizesAttr = element.getAttribute('sizes');
  var heightsAttr = element.getAttribute('heights');

  // Input layout attributes.
  var inputLayout = layoutAttr ? _layout.parseLayout(layoutAttr) : null;
  _asserts.assert(inputLayout !== undefined, 'Unknown layout: %s', layoutAttr);
  var inputWidth = widthAttr && widthAttr != 'auto' ? _layout.parseLength(widthAttr) : widthAttr;
  _asserts.assert(inputWidth !== undefined, 'Invalid width value: %s', widthAttr);
  var inputHeight = heightAttr ? _layout.parseLength(heightAttr) : null;
  _asserts.assert(inputHeight !== undefined, 'Invalid height value: %s', heightAttr);

  // Effective layout attributes. These are effectively constants.
  var width = undefined;
  var height = undefined;
  var layout = undefined;

  // Calculate effective width and height.
  if ((!inputLayout || inputLayout == _layout.Layout.FIXED || inputLayout == _layout.Layout.FIXED_HEIGHT) && (!inputWidth || !inputHeight) && _layout.hasNaturalDimensions(element.tagName)) {
    // Default width and height: handle elements that do not specify a
    // width/height and are defined to have natural browser dimensions.
    var dimensions = _layout.getNaturalDimensions(element.tagName);
    width = inputWidth || inputLayout == _layout.Layout.FIXED_HEIGHT ? inputWidth : dimensions.width;
    height = inputHeight || dimensions.height;
  } else {
    width = inputWidth;
    height = inputHeight;
  }

  // Calculate effective layout.
  if (inputLayout) {
    layout = inputLayout;
  } else if (!width && !height) {
    layout = _layout.Layout.CONTAINER;
  } else if (height && (!width || width == 'auto')) {
    layout = _layout.Layout.FIXED_HEIGHT;
  } else if (height && width && (sizesAttr || heightsAttr)) {
    layout = _layout.Layout.RESPONSIVE;
  } else {
    layout = _layout.Layout.FIXED;
  }

  // Verify layout attributes.
  if (layout == _layout.Layout.FIXED || layout == _layout.Layout.FIXED_HEIGHT || layout == _layout.Layout.RESPONSIVE) {
    _asserts.assert(height, 'Expected height to be available: %s', heightAttr);
  }
  if (layout == _layout.Layout.FIXED_HEIGHT) {
    _asserts.assert(!width || width == 'auto', 'Expected width to be either absent or equal "auto" ' + 'for fixed-height layout: %s', widthAttr);
  }
  if (layout == _layout.Layout.FIXED || layout == _layout.Layout.RESPONSIVE) {
    _asserts.assert(width && width != 'auto', 'Expected width to be available and not equal to "auto": %s', widthAttr);
  }
  if (layout == _layout.Layout.RESPONSIVE) {
    _asserts.assert(_layout.getLengthUnits(width) == _layout.getLengthUnits(height), 'Length units should be the same for width and height: %s, %s', widthAttr, heightAttr);
  } else {
    _asserts.assert(heightsAttr === null, 'Unexpected "heights" attribute for none-responsive layout');
  }

  // Apply UI.
  element.classList.add(_layout.getLayoutClass(layout));
  if (_layout.isLayoutSizeDefined(layout)) {
    element.classList.add('-amp-layout-size-defined');
  }
  if (layout == _layout.Layout.NODISPLAY) {
    element.style.display = 'none';
  } else if (layout == _layout.Layout.FIXED) {
    element.style.width = width;
    element.style.height = height;
  } else if (layout == _layout.Layout.FIXED_HEIGHT) {
    element.style.height = height;
  } else if (layout == _layout.Layout.RESPONSIVE) {
    var sizer = element.ownerDocument.createElement('i-amp-sizer');
    sizer.style.display = 'block';
    sizer.style.paddingTop = _layout.getLengthNumeral(height) / _layout.getLengthNumeral(width) * 100 + '%';
    element.insertBefore(sizer, element.firstChild);
    element.sizerElement_ = sizer;
  } else if (layout == _layout.Layout.FILL) {
    // Do nothing.
  } else if (layout == _layout.Layout.CONTAINER) {
      // Do nothing. Elements themselves will check whether the supplied
      // layout value is acceptable. In particular container is only OK
      // sometimes.
    }
  return layout;
}

/**
 * Returns "true" for internal AMP nodes or for placeholder elements.
 * @param {!Node} node
 * @return {boolean}
 */
function isInternalOrServiceNode(node) {
  if (_layout.isInternalElement(node)) {
    return true;
  }
  if (node.tagName && (node.hasAttribute('placeholder') || node.hasAttribute('fallback') || node.hasAttribute('overflow'))) {
    return true;
  }
  return false;
}

/**
 * The interface that is implemented by all custom elements in the AMP
 * namespace.
 * @interface
 */

var AmpElement = function AmpElement() {
  babelHelpers.classCallCheck(this, AmpElement);
};

// TODO(dvoytenko): Add all exposed methods.

/**
 * Creates a new custom element class prototype.
 *
 * Visible for testing only.
 *
 * @param {!Window} win The window in which to register the elements.
 * @param {string} name Name of the custom element
 * @param {function(new:BaseElement, !Element)} implementationClass
 * @return {!AmpElement.prototype}
 */

function createAmpElementProto(win, name, implementationClass) {
  /**
   * @lends {AmpElement.prototype}
   */
  var ElementProto = win.Object.create(win.HTMLElement.prototype);

  /**
   * Called when elements is created. Sets instance vars since there is no
   * constructor.
   * @final
   */
  ElementProto.createdCallback = function () {
    this.classList.add('-amp-element');

    // Flag "notbuilt" is removed by Resource manager when the resource is
    // considered to be built. See "setBuilt" method.
    /** @private {boolean} */
    this.built_ = false;
    this.classList.add('-amp-notbuilt');
    this.classList.add('amp-notbuilt');

    this.readyState = 'loading';
    this.everAttached = false;

    /** @private @const {!Resources}  */
    this.resources_ = _resources.resourcesFor(win);

    /** @private {!Layout} */
    this.layout_ = _layout.Layout.NODISPLAY;

    /** @private {number} */
    this.layoutWidth_ = -1;

    /** @private {number} */
    this.layoutCount_ = 0;

    /** @private {boolean} */
    this.isInViewport_ = false;

    /** @private {string|null|undefined} */
    this.mediaQuery_ = undefined;

    /** @private {!SizeList|null|undefined} */
    this.sizeList_ = undefined;

    /** @private {!SizeList|null|undefined} */
    this.heightsList_ = undefined;

    /**
     * This element can be assigned by the {@link applyLayout_} to a child
     * element that will be used to size this element.
     * @private {?Element}
     */
    this.sizerElement_ = null;

    /** @private {boolean|undefined} */
    this.loadingDisabled_ = undefined;

    /** @private {boolean|undefined} */
    this.loadingState_ = undefined;

    /** @private {?Element} */
    this.loadingContainer_ = null;

    /** @private {?Element} */
    this.loadingElement_ = null;

    /** @private {?Element|undefined} */
    this.overflowElement_ = undefined;

    /** @private {!BaseElement} */
    this.implementation_ = new implementationClass(this);
    this.implementation_.createdCallback();

    /**
     * Action queue is initially created and kept around until the element
     * is ready to send actions directly to the implementation.
     * @private {?Array<!ActionInvocation>}
     */
    this.actionQueue_ = [];

    /**
     * Whether the element is in the template.
     * @private {boolean|undefined}
     */
    this.isInTemplate_ = undefined;
  };

  /** @private */
  ElementProto.assertNotTemplate_ = function () {
    _asserts.assert(!this.isInTemplate_, 'Must never be called in template');
  };

  /**
   * Whether the element has been upgraded yet.
   * @return {boolean}
   * @final
   */
  ElementProto.isUpgraded = function () {
    return !(this.implementation_ instanceof _elementStub.ElementStub);
  };

  /**
   * Upgrades the element to the provided new implementation. If element
   * has already been attached, it's layout validation and attachment flows
   * are repeated for the new implementation.
   * @param {function(new:BaseElement, !Element)} newImplClass
   * @final @package
   */
  ElementProto.upgrade = function (newImplClass) {
    if (this.isInTemplate_) {
      return;
    }
    this.implementation_ = new newImplClass(this);
    this.classList.remove('amp-unresolved');
    this.classList.remove('-amp-unresolved');
    this.implementation_.createdCallback();
    if (this.layout_ != _layout.Layout.NODISPLAY && !this.implementation_.isLayoutSupported(this.layout_)) {
      throw new Error('Layout not supported: ' + this.layout_);
    }
    this.implementation_.layout_ = this.layout_;
    this.implementation_.layoutWidth_ = this.layoutWidth_;
    if (this.everAttached) {
      this.implementation_.firstAttachedCallback();
      this.dispatchCustomEvent('amp:attached');
    }
    this.resources_.upgraded(this);
  };

  /**
   * Whether the element has been built. A built element had its
   * {@link buildCallback} method successfully invoked.
   * @return {boolean}
   * @final
   */
  ElementProto.isBuilt = function () {
    return this.built_;
  };

  /**
   * Requests or requires the element to be built. The build is done by
   * invoking {@link BaseElement.buildCallback} method.
   *
   * If the "force" argument is "false", the element will first check if
   * implementation is ready to build by calling
   * {@link BaseElement.isReadyToBuild} method. If this method returns "true"
   * the build proceeds, otherwise no build is done.
   *
   * If the "force" argument is "true", the element performs build regardless
   * of what {@link BaseElement.isReadyToBuild} would return.
   *
   * Returned value indicates whether or not build has been performed.
   *
   * This method can only be called on a upgraded element.
   *
   * @param {boolean} force Whether or not force the build.
   * @return {boolean}
   * @final
   */
  ElementProto.build = function (force) {
    this.assertNotTemplate_();
    if (this.isBuilt()) {
      return true;
    }
    _asserts.assert(this.isUpgraded(), 'Cannot build unupgraded element');
    if (!force && !this.implementation_.isReadyToBuild()) {
      return false;
    }
    try {
      this.implementation_.buildCallback();
      this.preconnect( /* onLayout */false);
      this.built_ = true;
      this.classList.remove('-amp-notbuilt');
      this.classList.remove('amp-notbuilt');
    } catch (e) {
      _error.reportError(e, this);
      throw e;
    }
    if (this.built_ && this.isInViewport_) {
      this.updateInViewport_(true);
    }
    if (this.actionQueue_) {
      if (this.actionQueue_.length > 0) {
        // Only schedule when the queue is not empty, which should be
        // the case 99% of the time.
        _timer.timer.delay(this.dequeueActions_.bind(this), 1);
      } else {
        this.actionQueue_ = null;
      }
    }
    return true;
  };

  /**
   * Called to instruct the element to preconnect to hosts it uses during
   * layout.
   * @param {boolean} onLayout Whether this was called after a layout.
   */
  ElementProto.preconnect = function (onLayout) {
    var _this = this;

    if (onLayout) {
      this.implementation_.preconnectCallback(onLayout);
    } else {
      // If we do early preconnects we delay them a bit. This is kind of
      // an unfortunate trade off, but it seems faster, because the DOM
      // operations themselves are not free and might delay
      _timer.timer.delay(function () {
        _this.implementation_.preconnectCallback(onLayout);
      }, 1);
    }
  };

  /**
   * @return {!Vsync}
   * @private
   */
  ElementProto.getVsync_ = function () {
    return _vsync.vsyncFor(this.ownerDocument.defaultView);
  };

  /**
   * Updates the layout box of the element.
   * See {@link BaseElement.getLayoutWidth} for details.
   * @param {!LayoutRect} layoutBox
   */
  ElementProto.updateLayoutBox = function (layoutBox) {
    var _this2 = this;

    this.layoutWidth_ = layoutBox.width;
    if (this.isUpgraded()) {
      this.implementation_.layoutWidth_ = this.layoutWidth_;
    }
    // TODO(malteubl): Forward for stubbed elements.
    this.implementation_.onLayoutMeasure();

    if (this.isLoadingEnabled_()) {
      if (this.isInViewport_) {
        // Already in viewport - start showing loading.
        this.toggleLoading_(true);
      } else if (layoutBox.top < PREPARE_LOADING_THRESHOLD_ && layoutBox.top >= 0) {
        // Few top elements will also be pre-initialized with a loading
        // element.
        this.getVsync_().mutate(function () {
          _this2.prepareLoading_();
        });
      }
    }
  };

  /**
   * If the element has a media attribute, evaluates the value as a media
   * query and based on the result adds or removes the class
   * `-amp-hidden-by-media-query`. The class adds display:none to the element
   * which in turn prevents any of the resource loading to happen for the
   * element.
   *
   * This method is called by Resources and shouldn't be called by anyone else.
   *
   * @final
   * @package
   */
  ElementProto.applySizesAndMediaQuery = function () {
    this.assertNotTemplate_();

    // Media query.
    if (this.mediaQuery_ === undefined) {
      this.mediaQuery_ = this.getAttribute('media') || null;
    }
    if (this.mediaQuery_) {
      this.classList.toggle('-amp-hidden-by-media-query', !this.ownerDocument.defaultView.matchMedia(this.mediaQuery_).matches);
    }

    // Sizes.
    if (this.sizeList_ === undefined) {
      var sizesAttr = this.getAttribute('sizes');
      this.sizeList_ = sizesAttr ? _sizeList.parseSizeList(sizesAttr) : null;
    }
    if (this.sizeList_) {
      this.style.width = this.sizeList_.select(this.ownerDocument.defaultView);
    }
    // Heights.
    if (this.heightsList_ === undefined) {
      var heightsAttr = this.getAttribute('heights');
      this.heightsList_ = heightsAttr ? _sizeList.parseSizeList(heightsAttr, /* allowPercent */true) : null;
    }

    if (this.heightsList_ && this.layout_ === _layout.Layout.RESPONSIVE && this.sizerElement_) {
      this.sizerElement_.style.paddingTop = this.heightsList_.select(this.ownerDocument.defaultView);
    }
  };

  /**
   * Changes the height of the element.
   *
   * This method is called by Resources and shouldn't be called by anyone else.
   * This method must always be called in the mutation context.
   *
   * @param {number} newHeight
   * @final
   * @package
   */
  ElementProto. /*OK*/changeHeight = function (newHeight) {
    if (this.sizerElement_) {
      // From the moment height is changed the element becomes fully
      // responsible for managing its height. Aspect ratio is no longer
      // preserved.
      this.sizerElement_.style.paddingTop = '0';
    }
    this.style.height = newHeight + 'px';
  };

  /**
   * Called when the element is first attached to the DOM. Calls
   * {@link firstAttachedCallback} if this is the first attachment.
   * @final
   */
  ElementProto.attachedCallback = function () {
    if (!TEMPLATE_TAG_SUPPORTED) {
      this.isInTemplate_ = !!dom.closestByTag(this, 'template');
    }
    if (this.isInTemplate_) {
      return;
    }
    if (!this.everAttached) {
      this.everAttached = true;
      try {
        this.firstAttachedCallback_();
      } catch (e) {
        _error.reportError(e, this);
      }
    }
    this.resources_.add(this);
  };

  /**
   * Called when the element is detached from the DOM.
   * @final
   */
  ElementProto.detachedCallback = function () {
    if (this.isInTemplate_) {
      return;
    }
    this.resources_.remove(this);
  };

  /**
   * Called when the element is attached to the DOM for the first time.
   * @private @final
   */
  ElementProto.firstAttachedCallback_ = function () {
    if (!this.isUpgraded()) {
      this.classList.add('amp-unresolved');
      this.classList.add('-amp-unresolved');
    }
    try {
      this.layout_ = applyLayout_(this);
      if (this.layout_ != _layout.Layout.NODISPLAY && !this.implementation_.isLayoutSupported(this.layout_)) {
        throw new Error('Layout not supported for: ' + this.layout_);
      }
      this.implementation_.layout_ = this.layout_;
      this.implementation_.firstAttachedCallback();
    } catch (e) {
      _error.reportError(e, this);
      throw e;
    }
    if (!this.isUpgraded()) {
      // amp:attached is dispatched from the ElementStub class when it replayed
      // the firstAttachedCallback call.
      this.dispatchCustomEvent('amp:stubbed');
    } else {
      this.dispatchCustomEvent('amp:attached');
    }
  };

  /**
   * @param {string} name
   * @param {!Object=} opt_data Event data.
   * @final
   */
  ElementProto.dispatchCustomEvent = function (name, opt_data) {
    var data = opt_data || {};
    // Constructors of events need to come from the correct window. Sigh.
    var win = this.ownerDocument.defaultView;
    var event = win.document.createEvent('Event');
    event.data = data;
    event.initEvent(name, true, true);
    this.dispatchEvent(event);
  };

  /**
   * Whether the element can pre-render.
   * @return {boolean}
   * @final
   */
  ElementProto.prerenderAllowed = function () {
    return this.implementation_.prerenderAllowed();
  };

  /**
   * Whether the element should ever render when it is not in viewport.
   * @return {boolean}
   * @final
   */
  ElementProto.renderOutsideViewport = function () {
    return this.implementation_.renderOutsideViewport();
  };

  /**
   * @return {!LayoutRect}
   * @final
   */
  ElementProto.getLayoutBox = function () {
    return this.resources_.getResourceForElement(this).getLayoutBox();
  };

  /**
   * Returns a change entry for that should be compatible with
   * IntersectionObserverEntry.
   * @return {!IntersectionObserverEntry} A change entry.
   * @final
   */
  ElementProto.getIntersectionChangeEntry = function () {
    var box = this.implementation_.getInsersectionElementLayoutBox();
    var rootBounds = this.implementation_.getViewport().getRect();
    return _srcIntersectionObserver.getIntersectionChangeEntry(_timer.timer.now(), rootBounds, box);
  };

  /**
   * The runtime calls this method to determine if {@link layoutCallback}
   * should be called again when layout changes.
   * @return {boolean}
   * @package @final
   */
  ElementProto.isRelayoutNeeded = function () {
    return this.implementation_.isRelayoutNeeded();
  };

  /**
   * Instructs the element to layout its content and load its resources if
   * necessary by calling the {@link BaseElement.layoutCallback} method that
   * should be implemented by BaseElement subclasses. Must return a promise
   * that will yield when the layout and associated loadings are complete.
   *
   * This method is always called for the first layout, but for subsequent
   * layouts the runtime consults {@link isRelayoutNeeded} method.
   *
   * Can only be called on a upgraded and built element.
   *
   * @return {!Promise}
   * @package @final
   */
  ElementProto.layoutCallback = function () {
    var _this3 = this;

    this.assertNotTemplate_();
    _asserts.assert(this.isUpgraded() && this.isBuilt(), 'Must be upgraded and built to receive viewport events');
    this.dispatchCustomEvent('amp:load:start');
    var promise = this.implementation_.layoutCallback();
    this.preconnect( /* onLayout */true);
    this.classList.add('-amp-layout');
    return promise.then(function () {
      _this3.readyState = 'complete';
      _this3.layoutCount_++;
      _this3.toggleLoading_(false, /* cleanup */true);
      if (_this3.layoutCount_ == 1) {
        _this3.implementation_.firstLayoutCompleted();
      }
    }, function (reason) {
      _this3.toggleLoading_(false, /* cleanup */true);
      throw reason;
    });
  };

  /**
   * Instructs the resource that it entered or exited the visible viewport.
   *
   * Can only be called on a upgraded and built element.
   *
   * @param {boolean} inViewport Whether the element has entered or exited
   *   the visible viewport.
   * @final @package
   */
  ElementProto.viewportCallback = function (inViewport) {
    var _this4 = this;

    this.assertNotTemplate_();
    this.isInViewport_ = inViewport;
    if (this.layoutCount_ == 0) {
      if (!inViewport) {
        this.toggleLoading_(false);
      } else {
        // Set a minimum delay in case the element loads very fast or if it
        // leaves the viewport.
        _timer.timer.delay(function () {
          if (_this4.layoutCount_ == 0 && _this4.isInViewport_) {
            _this4.toggleLoading_(true);
          }
        }, 100);
      }
    }
    if (this.isUpgraded() && this.isBuilt()) {
      this.updateInViewport_(inViewport);
    }
  };

  /**
   * @param {boolean} inViewport
   * @private
   */
  ElementProto.updateInViewport_ = function (inViewport) {
    this.implementation_.inViewport_ = inViewport;
    this.implementation_.viewportCallback(inViewport);
  };

  /**
   * Requests the resource to stop its activity when the document goes into
   * inactive state. The scope is up to the actual component. Among other
   * things the active playback of video or audio content must be stopped.
   * The component must return `true` if it'd like to later receive
   * {@link layoutCallback} in case document becomes active again.
   *
   * Calling this method on unbuilt ot unupgraded element has no effect.
   *
   * @return {!Promise}
   * @package @final
   */
  ElementProto.documentInactiveCallback = function () {
    this.assertNotTemplate_();
    if (!this.isBuilt() || !this.isUpgraded()) {
      return false;
    }
    return this.implementation_.documentInactiveCallback();
  };

  /**
   * Enqueues the action with the element. If element has been upgraded and
   * built, the action is dispatched to the implementation right away.
   * Otherwise the invocation is enqueued until the implementation is ready
   * to receive actions.
   * @param {!ActionInvocation} invocation
   * @final
   */
  ElementProto.enqueAction = function (invocation) {
    this.assertNotTemplate_();
    if (!this.isBuilt()) {
      _asserts.assert(this.actionQueue_).push(invocation);
    } else {
      this.executionAction_(invocation, false);
    }
  };

  /**
   * Dequeues events from the queue and dispatches them to the implementation
   * with "deferred" flag.
   * @private
   */
  ElementProto.dequeueActions_ = function () {
    var _this5 = this;

    if (!this.actionQueue_) {
      return;
    }

    var actionQueue = _asserts.assert(this.actionQueue_);
    this.actionQueue_ = null;

    // TODO(dvoytenko, #1260): dedupe actions.
    actionQueue.forEach(function (invocation) {
      _this5.executionAction_(invocation, true);
    });
  };

  /**
   * Executes the action immediately. All errors are consumed and reported.
   * @param {!ActionInvocation} invocation
   * @param {boolean} deferred
   * @final
   * @private
   */
  ElementProto.executionAction_ = function (invocation, deferred) {
    try {
      this.implementation_.executeAction(invocation, deferred);
    } catch (e) {
      _log.log.error(TAG_, 'Action execution failed:', invocation, e);
    }
  };

  /**
   * Returns the original nodes of the custom element without any service nodes
   * that could have been added for markup. These nodes can include Text,
   * Comment and other child nodes.
   * @return {!Array<!Node>}
   * @package @final
   */
  ElementProto.getRealChildNodes = function () {
    var nodes = [];
    for (var n = this.firstChild; n; n = n.nextSibling) {
      if (!isInternalOrServiceNode(n)) {
        nodes.push(n);
      }
    }
    return nodes;
  };

  /**
   * Returns the original children of the custom element without any service
   * nodes that could have been added for markup.
   * @return {!Array<!Element>}
   * @package @final
   */
  ElementProto.getRealChildren = function () {
    var elements = [];
    for (var i = 0; i < this.children.length; i++) {
      var child = this.children[i];
      if (!isInternalOrServiceNode(child)) {
        elements.push(child);
      }
    }
    return elements;
  };

  /**
   * Returns an optional placeholder element for this custom element.
   * @return {?Element}
   * @package @final
   */
  ElementProto.getPlaceholder = function () {
    return dom.childElementByAttr(this, 'placeholder');
  };

  /**
   * Hides or shows the placeholder, if available.
   * @param {boolean} state
   * @package @final
   */
  ElementProto.togglePlaceholder = function (state) {
    this.assertNotTemplate_();
    var placeholder = this.getPlaceholder();
    if (placeholder) {
      placeholder.classList.toggle('amp-hidden', !state);
    }
  };

  /**
   * Returns an optional fallback element for this custom element.
   * @return {?Element}
   * @package @final
   */
  ElementProto.getFallback = function () {
    return dom.childElementByAttr(this, 'fallback');
  };

  /**
   * Hides or shows the fallback, if available. This function must only
   * be called inside a mutate context.
   * @param {boolean} state
   * @package @final
   */
  ElementProto.toggleFallback = function (state) {
    this.assertNotTemplate_();
    // This implementation is notably less efficient then placeholder toggling.
    // The reasons for this are: (a) "not supported" is the state of the whole
    // element, (b) some realyout is expected and (c) fallback condition would
    // be rare.
    this.classList.toggle('amp-notsupported', state);
  };

  /**
   * Whether the loading can be shown for this element.
   * @return {boolean}
   * @private
   */
  ElementProto.isLoadingEnabled_ = function () {
    // No loading indicator will be shown if either one of these
    // conditions true:
    // 1. `noloading` attribute is specified;
    // 2. The element has not been whitelisted;
    // 3. The element is too small or has not yet been measured;
    // 4. The element has already been laid out;
    // 5. The element is a `placeholder` or a `fallback`;
    // 6. The element's layout is not a size-defining layout.
    if (this.loadingDisabled_ === undefined) {
      this.loadingDisabled_ = this.hasAttribute('noloading');
    }
    if (this.loadingDisabled_ || !_layout.isLoadingAllowed(this.tagName) || this.layoutWidth_ < MIN_WIDTH_FOR_LOADING_ || this.layoutCount_ > 0 || isInternalOrServiceNode(this) || !_layout.isLayoutSizeDefined(this.layout_)) {
      return false;
    }
    return true;
  };

  /**
   * Creates a loading object. The caller must ensure that loading can
   * actually be shown. This method must also be called in the mutate
   * context.
   * @private
   */
  ElementProto.prepareLoading_ = function () {
    if (!this.loadingContainer_) {
      var container = document.createElement('div');
      container.classList.add('-amp-loading-container');
      container.classList.add('-amp-fill-content');
      container.classList.add('amp-hidden');

      var element = _srcLoader.createLoaderElement();
      container.appendChild(element);

      this.appendChild(container);
      this.loadingContainer_ = container;
      this.loadingElement_ = element;
    }
  };

  /**
   * Turns the loading indicator on or off.
   * @param {boolean} state
   * @param {boolean=} opt_cleanup
   * @private @final
   */
  ElementProto.toggleLoading_ = function (state, opt_cleanup) {
    var _this6 = this;

    this.assertNotTemplate_();
    this.loadingState_ = state;
    if (!state && !this.loadingContainer_) {
      return;
    }

    // Check if loading should be shown.
    if (state && !this.isLoadingEnabled_()) {
      this.loadingState_ = false;
      return;
    }

    this.getVsync_().mutate(function () {
      var state = _this6.loadingState_;
      // Repeat "loading enabled" check because it could have changed while
      // waiting for vsync.
      if (state && !_this6.isLoadingEnabled_()) {
        state = false;
      }
      if (state) {
        _this6.prepareLoading_();
      }
      if (!_this6.loadingContainer_) {
        return;
      }

      _this6.loadingContainer_.classList.toggle('amp-hidden', !state);
      _this6.loadingElement_.classList.toggle('amp-active', state);

      if (!state && opt_cleanup) {
        (function () {
          var loadingContainer = _this6.loadingContainer_;
          _this6.loadingContainer_ = null;
          _this6.loadingElement_ = null;
          _this6.resources_.deferMutate(_this6, function () {
            dom.removeElement(loadingContainer);
          });
        })();
      }
    });
  };

  /**
   * Returns an optional overflow element for this custom element.
   * @return {?Element}
   * @private
   */
  ElementProto.getOverflowElement = function () {
    if (this.overflowElement_ === undefined) {
      this.overflowElement_ = dom.childElementByAttr(this, 'overflow');
      if (this.overflowElement_) {
        if (!this.overflowElement_.hasAttribute('tabindex')) {
          this.overflowElement_.setAttribute('tabindex', '0');
        }
        if (!this.overflowElement_.hasAttribute('role')) {
          this.overflowElement_.setAttribute('role', 'button');
        }
      }
    }
    return this.overflowElement_;
  };

  /**
   * Hides or shows the overflow, if available. This function must only
   * be called inside a mutate context.
   * @param {boolean} overflown
   * @param {number} requestedHeight
   * @package @final
   */
  ElementProto.overflowCallback = function (overflown, requestedHeight) {
    var _this7 = this;

    this.getOverflowElement();
    if (!this.overflowElement_) {
      if (overflown) {
        _log.log.warn(TAG_, 'Cannot resize element and overlfow is not available', this);
      }
    } else {
      this.overflowElement_.classList.toggle('amp-visible', overflown);

      if (overflown) {
        this.overflowElement_.onclick = function () {
          _this7.resources_. /*OK*/changeHeight(_this7, requestedHeight);
          _this7.getVsync_().mutate(function () {
            _this7.overflowCallback( /* overflown */false, requestedHeight);
          });
        };
      } else {
        this.overflowElement_.onclick = null;
      }
    }
    this.implementation_.overflowCallback(overflown, requestedHeight);
  };

  return ElementProto;
}

/**
 * Registers a new custom element with its implementation class.
 * @param {!Window} win The window in which to register the elements.
 * @param {string} name Name of the custom element
 * @param {function(new:BaseElement, !Element)} implementationClass
 */

function registerElement(win, name, implementationClass) {
  knownElements[name] = implementationClass;

  win.document.registerElement(name, {
    prototype: createAmpElementProto(win, name, implementationClass)
  });
}

/**
 * @param {!Window} win
 * @param {string} elementName Name of an extended custom element.
 * @return {boolean} Whether this element is scheduled to be loaded.
 */
function isElementScheduled(win, elementName) {
  _asserts.assert(win.ampExtendedElements, 'win.ampExtendedElements not created yet');
  return !!win.ampExtendedElements[elementName];
}

/**
 * Registers a new alias for an existing custom element.
 * @param {!Window} win The window in which to register the elements.
 * @param {string} aliasName Additional name for an existing custom element.
 * @param {string} sourceName Name of an existing custom element
 * @param {Object} state Optional map to be merged into the prototype
 *                 to override the original state with new default values
 */

function registerElementAlias(win, aliasName, sourceName) {
  var implementationClass = knownElements[sourceName];

  if (implementationClass) {
    win.document.registerElement(aliasName, {
      prototype: createAmpElementProto(win, aliasName, implementationClass)
    });
  } else {
    throw new Error('Element name is unknown: ' + sourceName + '.' + ('Alias ' + aliasName + ' was not registered.'));
  }
}

/**
 * In order to provide better error messages we only allow to retrieve
 * services from other elements if those elements are loaded in the page.
 * This makes it possible to mark an element as loaded in a test.
 * @param {!Window} win
 * @param {string} elementName Name of an extended custom element.
 */

function markElementScheduledForTesting(win, elementName) {
  if (!win.ampExtendedElements) {
    win.ampExtendedElements = {};
  }
  win.ampExtendedElements[elementName] = true;
}

/**
 * Resets our scheduled elements.
 * @param {!Window} win
 * @param {string} elementName Name of an extended custom element.
 */

function resetScheduledElementForTesting(win, elementName) {
  if (win.ampExtendedElements) {
    win.ampExtendedElements[elementName] = null;
  }
}

/**
 * Returns a promise for a service for the given id and window. Also expects
 * an element that has the actual implementation. The promise resolves when
 * the implementation loaded.
 * Users should typically wrap this as a special purpose function (e.g.
 * viewportFor(win)) for type safety and because the factory should not be
 * passed around.
 * @param {!Window} win
 * @param {string} id of the service.
 * @param {string} provideByElement Name of the custom element that provides
 *     the implementation of this service.
 * @return {!Promise<*>}
 */

function getElementService(win, id, providedByElement) {
  return Promise.resolve().then(function () {
    _asserts.assert(isElementScheduled(win, providedByElement), 'Service %s was requested to be provided through %s, ' + 'but %s is not loaded in the current page. To fix this ' + 'problem load the JavaScript file for %s in this page.', id, providedByElement, providedByElement, providedByElement);
    return _service.getServicePromise(win, id);
  });
}

/**
 * Same as getElementService but produces null if the given element is not
 * actually available on the current page.
 * @param {!Window} win
 * @param {string} id of the service.
 * @param {string} provideByElement Name of the custom element that provides
 *     the implementation of this service.
 * @return {!Promise<*>}
 */

function getElementServiceIfAvailable(win, id, providedByElement) {
  var s = _service.getServicePromiseOrNull(win, id);
  if (s) {
    return s;
  }
  if (!isElementScheduled(win, providedByElement)) {
    return Promise.resolve(null);
  }
  return getElementService(win, id, providedByElement);
}

},{"../src/intersection-observer":35,"../src/loader":38,"./asserts":16,"./dom":25,"./element-stub":26,"./error":27,"./layout":37,"./log":39,"./resources":51,"./service":53,"./size-list":63,"./timer":69,"./vsync":77}],21:[function(require,module,exports){
exports.__esModule = true;
exports.installGlobalClickListener = installGlobalClickListener;
exports.uninstallGlobalClickListener = uninstallGlobalClickListener;
exports.onDocumentElementClick_ = onDocumentElementClick_;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _dom = require('./dom');

var _service = require('./service');

var _log = require('./log');

var _url = require('./url');

var _viewport = require('./viewport');

var _platform = require('./platform');

/**
 * @param {!Window} window
 */

function installGlobalClickListener(window) {
  clickHandlerFor(window);
}

/**
 * @param {!Window} window
 */

function uninstallGlobalClickListener(window) {
  clickHandlerFor(window).cleanup();
}

/**
 * @param {!Window} window
 */
function clickHandlerFor(window) {
  return _service.getService(window, 'clickhandler', function () {
    return new ClickHandler(window);
  });
}

/**
 * Intercept any click on the current document and prevent any
 * linking to an identifier from pushing into the history stack.
 * visibleForTesting
 */

var ClickHandler = (function () {
  /**
   * @param {!Window} window
   */

  function ClickHandler(window) {
    babelHelpers.classCallCheck(this, ClickHandler);

    /** @private @const {!Window} */
    this.win = window;

    /** @private @const {!Viewport} */
    this.viewport_ = _viewport.viewportFor(window);

    /** @private @const {!Function} */
    this.boundHandle_ = this.handle_.bind(this);

    this.win.document.documentElement.addEventListener('click', this.boundHandle_);
  }

  /**
   * Intercept any click on the current document and prevent any
   * linking to an identifier from pushing into the history stack.
   *
   * This also handles custom protocols (e.g. whatsapp://) when iframed
   * on iOS Safari.
   *
   * @param {!Event} e
   * @param {!Viewport} viewport
   */

  /**
   * Removes all event listeners.
   */

  ClickHandler.prototype.cleanup = function cleanup() {
    this.win.document.documentElement.removeEventListener('click', this.boundHandle_);
  };

  /**
   * Intercept any click on the current document and prevent any
   * linking to an identifier from pushing into the history stack.
   * @param {!Event} e
   */

  ClickHandler.prototype.handle_ = function handle_(e) {
    onDocumentElementClick_(e, this.viewport_);
  };

  return ClickHandler;
})();

exports.ClickHandler = ClickHandler;

function onDocumentElementClick_(e, viewport) {
  if (e.defaultPrevented) {
    return;
  }

  var target = _dom.closestByTag(e.target, 'A');
  if (!target) {
    return;
  }

  var elem = null;
  var docElement = e.currentTarget;
  var doc = docElement.ownerDocument;
  var win = doc.defaultView;

  var tgtLoc = _url.parseUrl(target.href);

  // On Safari iOS, custom protocol links will fail to open apps when the
  // document is iframed - in order to go around this, we set the top.location
  // to the custom protocol href.
  var isSafariIOS = _platform.platform.isIos() && _platform.platform.isSafari();
  var isEmbedded = win.parent && win.parent != win;
  var isNormalProtocol = /^https?:$/.test(tgtLoc.protocol);
  if (isSafariIOS && isEmbedded && !isNormalProtocol) {
    win.open(target.href, '_blank');
    // Without preventing default the page would should an alert error twice
    // in the case where there's no app to handle the custom protocol.
    e.preventDefault();
  }

  if (!tgtLoc.hash) {
    return;
  }

  var curLoc = _url.parseUrl(win.location.href);
  var tgtHref = '' + tgtLoc.origin + tgtLoc.pathname + tgtLoc.search;
  var curHref = '' + curLoc.origin + curLoc.pathname + curLoc.search;

  // If the current target anchor link is the same origin + path
  // as the current document then we know we are just linking to an
  // identifier in the document.
  if (tgtHref != curHref) {
    return;
  }

  // We prevent default so that the current click does not push
  // into the history stack as this messes up the external documents
  // history which contains the amp document.
  e.preventDefault();

  var hash = tgtLoc.hash.slice(1);
  elem = doc.getElementById(hash);

  if (!elem) {
    // Fallback to anchor[name] if element with id is not found.
    // Linking to an anchor element with name is obsolete in html5.
    elem = doc.querySelector('a[name=' + hash + ']');
  }

  if (elem) {
    // TODO(dvoytenko): consider implementing animated scroll.
    viewport. /*OK*/scrollIntoView(elem);
  } else {
    _log.log.warn('documentElement', 'failed to find element with id=' + hash + ' or a[name=' + hash + ']');
  }
  var history = win.history;
  // If possible do update the URL with the hash. As explained above
  // we do replaceState to avoid messing with the container's history.
  if (history.replaceState) {
    history.replaceState(null, '', '#' + hash);
  }
}

;

},{"./dom":25,"./log":39,"./platform":44,"./service":53,"./url":72,"./viewport":76}],22:[function(require,module,exports){
exports.__esModule = true;
exports.documentInfoFor = documentInfoFor;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _service = require('./service');

var _asserts = require('./asserts');

var _url = require('./url');

/**
 * @param {!Window} win
 * @return {{canonicalUrl: string, pageViewId: string}} Info about the doc
 *     - canonicalUrl: The doc's canonical.
 *     - pageViewId: Id for this page view. Low entropy but should be unique
 *       for concurrent page views of a user.
 *     -  sourceUrl: the source url of an amp document.
 */

function documentInfoFor(win) {
  return _service.getService(win, 'documentInfo', function () {
    return {
      canonicalUrl: _url.parseUrl(_asserts.assert(win.document.querySelector('link[rel=canonical]'), 'AMP files are required to have a <link rel=canonical> tag.').href).href,
      pageViewId: getPageViewId(win),
      sourceUrl: _url.getSourceUrl(win.location.href)
    };
  });
}

/**
 * Returns a relatively low entropy random string.
 * This should be called once per window and then cached for subsequent
 * access to the same value to be persistent per page.
 * @param {!Window} win
 * @return {string}
 */
function getPageViewId(win) {
  return String(Math.floor(win.Math.random() * 10000));
}

},{"./asserts":16,"./service":53,"./url":72}],23:[function(require,module,exports){
exports.__esModule = true;
exports.isDocumentReady = isDocumentReady;
exports.onDocumentReady = onDocumentReady;
exports.whenDocumentReady = whenDocumentReady;
/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Whether the document is ready.
 * @param {!Document} doc
 * @return {boolean}
 */

function isDocumentReady(doc) {
  return doc.readyState != 'loading';
}

/**
 * Calls the callback when document is ready.
 * @param {!Document} doc
 * @param {!Function} callback
 */

function onDocumentReady(doc, callback) {
  var ready = isDocumentReady(doc);
  if (ready) {
    callback();
  } else {
    (function () {
      var readyListener = function () {
        if (isDocumentReady(doc)) {
          if (!ready) {
            ready = true;
            callback();
          }
          doc.removeEventListener('readystatechange', readyListener);
        }
      };
      doc.addEventListener('readystatechange', readyListener);
    })();
  }
}

/**
 * Returns a promise that is resolved when document is ready.
 * @param {!Document} doc
 * @return {!Promise}
 */

function whenDocumentReady(doc) {
  return new Promise(function (resolve) {
    onDocumentReady(doc, resolve);
  });
}

},{}],24:[function(require,module,exports){
exports.__esModule = true;
exports.documentStateFor = documentStateFor;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _observable = require('./observable');

var _service = require('./service');

var _style = require('./style');

/**
 */

var DocumentState = (function () {
  /**
   * @param {!Window} win
   */

  function DocumentState(win) {
    babelHelpers.classCallCheck(this, DocumentState);

    /** @const {!Window} */
    this.win = win;

    /** @private @const {!Document} */
    this.document_ = win.document;

    /** @private @const {string|null} */
    this.hiddenProp_ = _style.getVendorJsPropertyName(this.document_, 'hidden', true);
    if (this.document_[this.hiddenProp_] === undefined) {
      this.hiddenProp_ = null;
    }

    /** @private @const {string|null} */
    this.visibilityStateProp_ = _style.getVendorJsPropertyName(this.document_, 'visibilityState', true);
    if (this.document_[this.visibilityStateProp_] === undefined) {
      this.visibilityStateProp_ = null;
    }

    /** @private @const */
    this.visibilityObservable_ = new _observable.Observable();

    /** @private @const {string|null} */
    this.visibilityChangeEvent_ = null;
    if (this.hiddenProp_) {
      this.visibilityChangeEvent_ = 'visibilitychange';
      var vendorStop = this.hiddenProp_.indexOf('Hidden');
      if (vendorStop != -1) {
        this.visibilityChangeEvent_ = this.hiddenProp_.substring(0, vendorStop) + 'Visibilitychange';
      }
    }

    /** @private @const {!Function} */
    this.boundOnVisibilityChanged_ = this.onVisibilityChanged_.bind(this);
    if (this.visibilityChangeEvent_) {
      this.document_.addEventListener(this.visibilityChangeEvent_, this.boundOnVisibilityChanged_);
    }
  }

  /**
   * @param {!Window} window
   * @return {!DocumentState}
   */

  /** @private */

  DocumentState.prototype.cleanup_ = function cleanup_() {
    if (this.visibilityChangeEvent_) {
      this.document_.removeEventListener(this.visibilityChangeEvent_, this.boundOnVisibilityChanged_);
    }
  };

  /**
   * Returns the value of "document.hidden" property. The reasons why it may
   * not be visible include document in a non-active tab or when the document
   * is being pre-rendered via link with rel="prerender".
   * @return {boolean}
   */

  DocumentState.prototype.isHidden = function isHidden() {
    if (!this.hiddenProp_) {
      return false;
    }
    return this.document_[this.hiddenProp_];
  };

  /**
   * Returns the value of "document.visibilityState" property. Possible values
   * are: 'hidden', 'visible', 'prerender', and 'unloaded'.
   * @return {string}
   */

  DocumentState.prototype.getVisibilityState = function getVisibilityState() {
    if (!this.visibilityStateProp_) {
      return this.isHidden() ? 'hidden' : 'visible';
    }
    return this.document_[this.visibilityStateProp_];
  };

  /**
   * @param {function()} handler
   * @return {!UnlistenDef}
   */

  DocumentState.prototype.onVisibilityChanged = function onVisibilityChanged(handler) {
    return this.visibilityObservable_.add(handler);
  };

  /** @private */

  DocumentState.prototype.onVisibilityChanged_ = function onVisibilityChanged_() {
    this.visibilityObservable_.fire();
  };

  return DocumentState;
})();

exports.DocumentState = DocumentState;

function documentStateFor(window) {
  return _service.getService(window, 'documentState', function () {
    return new DocumentState(window);
  });
}

;

},{"./observable":41,"./service":53,"./style":66}],25:[function(require,module,exports){
exports.__esModule = true;
exports.documentContains = documentContains;
exports.documentContainsPolyfillInternal_ = documentContainsPolyfillInternal_;
exports.removeElement = removeElement;
exports.removeChildren = removeChildren;
exports.copyChildren = copyChildren;
exports.closest = closest;
exports.closestByTag = closestByTag;
exports.elementByTag = elementByTag;
exports.childElement = childElement;
exports.childElementByAttr = childElementByAttr;
exports.childElementByTag = childElementByTag;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Whether the element is currently contained in the DOM. Polyfills
 * `document.contains()` method when necessary. Notice that according to spec
 * `document.contains` is inclusionary.
 * See https://developer.mozilla.org/en-US/docs/Web/API/Node/contains
 * @param {!Document} doc
 * @param {!Element} element
 * @return {boolean}
 */

function documentContains(doc, element) {
  if (!doc.contains) {
    return documentContainsPolyfillInternal_(doc, element);
  }
  return doc.contains(element);
}

/**
 * Polyfill for `document.contains()` method.
 * See https://developer.mozilla.org/en-US/docs/Web/API/Node/contains
 * @param {!Document} doc
 * @param {!Element} element
 * @return {boolean}
 * @private Visible for testing only.
 */

function documentContainsPolyfillInternal_(doc, element) {
  // Per spec, "contains" method is inclusionary
  // i.e. `node.contains(node) == true`. However, we still need to test
  // equality to the document itself.
  return element == doc || doc.documentElement.contains(element);
}

/**
 * Removes the element.
 * @param {!Element} element
 */

function removeElement(element) {
  if (element.parentElement) {
    element.parentElement.removeChild(element);
  }
}

/**
 * Removes all child nodes of the specified element.
 * @param {!Element} parent
 */

function removeChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

/**
 * Copies all children nodes of element "from" to element "to". Child nodes
 * are deeply cloned. Notice, that this method should be used with care and
 * preferably on smaller subtrees.
 * @param {!Element} from
 * @param {!Element} to
 */

function copyChildren(from, to) {
  var frag = to.ownerDocument.createDocumentFragment();
  for (var n = from.firstChild; n; n = n.nextSibling) {
    frag.appendChild(n.cloneNode(true));
  }
  to.appendChild(frag);
}

/**
 * Finds the closest element that satisfies the callback from this element
 * up the DOM subtree.
 * @param {!Element} element
 * @param {function(!Element):boolean} callback
 * @return {?Element}
 */

function closest(element, callback) {
  for (var el = element; el; el = el.parentElement) {
    if (callback(el)) {
      return el;
    }
  }
  return null;
}

/**
 * Finds the closest element with the specified name from this element
 * up the DOM subtree.
 * @param {!Element} element
 * @param {string} tagName
 * @return {?Element}
 */

function closestByTag(element, tagName) {
  tagName = tagName.toUpperCase();
  return closest(element, function (el) {
    return el.tagName == tagName;
  });
}

/**
 * Finds the first descendant element with the specified name.
 * @param {!Element} element
 * @param {string} tagName
 * @return {?Element}
 */

function elementByTag(element, tagName) {
  var elements = element.getElementsByTagName(tagName);
  return elements.length > 0 ? elements[0] : null;
}

/**
 * Finds the first child element that satisfies the callback.
 * @param {!Element} parent
 * @param {function(!Element):boolean} callback
 * @return {?Element}
 */

function childElement(parent, callback) {
  var children = parent.children;
  for (var i = 0; i < children.length; i++) {
    if (callback(children[i])) {
      return children[i];
    }
  }
  return null;
}

/**
 * Finds the first child element that has the specified attribute, optionally
 * with a value.
 * @param {!Element} parent
 * @param {string} attr
 * @param {string=} opt_value
 * @return {?Element}
 */

function childElementByAttr(parent, attr, opt_value) {
  return childElement(parent, function (el) {
    if (!el.hasAttribute(attr)) {
      return false;
    }
    if (opt_value !== undefined && el.getAttribute(attr) != opt_value) {
      return false;
    }
    return true;
  });
}

/**
 * Finds the first child element that has the specified tag name.
 * @param {!Element} parent
 * @param {string} tagName
 * @return {?Element}
 */

function childElementByTag(parent, tagName) {
  tagName = tagName.toUpperCase();
  return childElement(parent, function (el) {
    return el.tagName == tagName;
  });
}

},{}],26:[function(require,module,exports){
exports.__esModule = true;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _baseElement = require('./base-element');

/** @type {!Array} */
var stubbedElements = [];

exports.stubbedElements = stubbedElements;

var ElementStub = (function (_BaseElement) {
  babelHelpers.inherits(ElementStub, _BaseElement);

  function ElementStub(element) {
    babelHelpers.classCallCheck(this, ElementStub);

    _BaseElement.call(this, element);
    stubbedElements.push(this);
  }

  /** @override */

  ElementStub.prototype.isLayoutSupported = function isLayoutSupported(unusedLayout) {
    // Always returns true and will eventually call this method on the actual
    // element.
    return true;
  };

  return ElementStub;
})(_baseElement.BaseElement);

exports.ElementStub = ElementStub;

},{"./base-element":17}],27:[function(require,module,exports){
exports.__esModule = true;
exports.reportError = reportError;
exports.cancellation = cancellation;
exports.installErrorReporting = installErrorReporting;
exports.getErrorReportUrl = getErrorReportUrl;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _mode = require('./mode');

var _exponentialBackoff = require('./exponential-backoff');

var _asserts = require('./asserts');

var _styles = require('./styles');

var globalExponentialBackoff = _exponentialBackoff.exponentialBackoff(1.5);

var CANCELLED = 'CANCELLED';

/**
 * Reports an error. If the error has an "associatedElement" property
 * the element is marked with the -amp-element-error and displays
 * the message itself. The message is always send to the console.
 * If the error has a "messageArray" property, that array is logged.
 * This way one gets the native fidelity of the console for things like
 * elements instead of stringification.
 * @param {!Error} error
 * @param {!Element=} opt_associatedElement
 */

function reportError(error, opt_associatedElement) {
  if (!window.console) {
    return;
  }
  if (!error) {
    error = new Error('no error supplied');
  }
  if (error.reported) {
    return;
  }
  error.reported = true;
  var element = opt_associatedElement || error.associatedElement;
  if (element && element.classList) {
    element.classList.add('-amp-error');
    if (_mode.getMode().development) {
      element.classList.add('-amp-element-error');
      element.setAttribute('error-message', error.message);
    }
  }
  if (error.messageArray) {
    (console.error || console.log).apply(console, error.messageArray);
  } else {
    if (element) {
      (console.error || console.log).call(console, element.tagName + '#' + element.id, error.message);
    } else {
      (console.error || console.log).call(console, error.message);
    }
    if (!_mode.getMode().minified) {
      (console.error || console.log).call(console, error.stack);
    }
  }
  if (element && element.dispatchCustomEvent) {
    element.dispatchCustomEvent('amp:error', error.message);
  }
  reportErrorToServer(undefined, undefined, undefined, undefined, error);
}

/**
 * Returns an error for a cancellation of a promise.
 * @param {string} message
 * @return {!Error}
 */

function cancellation() {
  return new Error(CANCELLED);
}

/**
 * Install handling of global unhandled exceptions.
 * @param {!Window} win
 */

function installErrorReporting(win) {
  win.onerror = reportErrorToServer;
  win.addEventListener('unhandledrejection', function (event) {
    reportError(event.reason || new Error('rejected promise ' + event));
  });
}

/**
 * Signature designed, so it can work with window.onerror
 * @param {string|undefined} message
 * @param {string|undefined} filename
 * @param {string|undefined} line
 * @param {string|undefined} col
 * @param {!Error|undefined} error
 */
function reportErrorToServer(message, filename, line, col, error) {
  // Make an attempt to unhide the body.
  if (this && this.document) {
    _styles.makeBodyVisible(this.document);
  }
  var mode = _mode.getMode();
  if (mode.localDev || mode.development || mode.test) {
    return;
  }
  var url = getErrorReportUrl(message, filename, line, col, error);
  globalExponentialBackoff(function () {
    if (url) {
      new Image().src = url;
    }
  });
}

/**
 * Signature designed, so it can work with window.onerror
 * @param {string|undefined} message
 * @param {string|undefined} filename
 * @param {string|undefined} line
 * @param {string|undefined} col
 * @param {!Error|undefined} error
 * @return {string|undefined} The URL
 * visibleForTesting
 */

function getErrorReportUrl(message, filename, line, col, error) {
  message = error && error.message ? error.message : message;
  if (/_reported_/.test(message)) {
    return;
  }
  if (message == CANCELLED) {
    return;
  }
  if (!message) {
    message = 'Unknown error';
  }

  // This is the App Engine app in
  // ../tools/errortracker
  // It stores error reports via https://cloud.google.com/error-reporting/
  // for analyzing production issues.
  var url = 'https://amp-error-reporting.appspot.com/r' + '?v=' + encodeURIComponent('1458089172890') + '&m=' + encodeURIComponent(message.replace(_asserts.ASSERT_SENTINEL, '')) + '&a=' + (_asserts.isAssertErrorMessage(message) ? 1 : 0);
  if (window.context && window.context.location) {
    url += '&3p=1';
  }
  if (window.AMP_CONFIG && window.AMP_CONFIG.canary) {
    url += '&ca=1';
  }
  if (window.location.ancestorOrigins && window.location.ancestorOrigins[0]) {
    url += '&or=' + encodeURIComponent(window.location.ancestorOrigins[0]);
  }
  if (window.viewerState) {
    url += '&vs=' + encodeURIComponent(window.viewerState);
  }

  if (error) {
    var tagName = error && error.associatedElement ? error.associatedElement.tagName : 'u'; // Unknown
    url += '&el=' + encodeURIComponent(tagName) + '&s=' + encodeURIComponent(error.stack || '');
    error.message += ' _reported_';
  } else {
    url += '&f=' + encodeURIComponent(filename) + '&l=' + encodeURIComponent(line) + '&c=' + encodeURIComponent(col || '');
  }
  url += '&r=' + encodeURIComponent(document.referrer);

  // Shorten URLs to a value all browsers will send.
  return url.substr(0, 2000);
}

},{"./asserts":16,"./exponential-backoff":30,"./mode":40,"./styles":67}],28:[function(require,module,exports){
exports.__esModule = true;
exports.listen = listen;
exports.listenOnce = listenOnce;
exports.listenOncePromise = listenOncePromise;
exports.isLoaded = isLoaded;
exports.loadPromise = loadPromise;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _timer = require('./timer');

var _asserts = require('./asserts');

/**
 * Listens for the specified event on the element.
 * @param {!EventTarget} element
 * @param {string} eventType
 * @param {function(Event)} listener
 * @param {boolean=} opt_capture
 * @return {!UnlistenDef}
 */

function listen(element, eventType, listener, opt_capture) {
  var capture = opt_capture || false;
  element.addEventListener(eventType, listener, capture);
  return function () {
    element.removeEventListener(eventType, listener, capture);
  };
}

/**
 * Listens for the specified event on the element and removes the listener
 * as soon as event has been received.
 * @param {!EventTarget} element
 * @param {string} eventType
 * @param {function(Event)} listener
 * @param {boolean=} opt_capture
 * @return {!UnlistenDef}
 */

function listenOnce(element, eventType, listener, opt_capture) {
  var capture = opt_capture || false;
  var unlisten = undefined;
  var proxy = function (event) {
    listener(event);
    unlisten();
  };
  unlisten = function () {
    element.removeEventListener(eventType, proxy, capture);
  };
  element.addEventListener(eventType, proxy, capture);
  return unlisten;
}

/**
 * Returns  a promise that will resolve as soon as the specified event has
 * fired on the element. Optionally, opt_timeout can be specified that will
 * reject the promise if the event has not fired by then.
 * @param {!EventTarget} element
 * @param {string} eventType
 * @param {boolean=} opt_capture
 * @param {number=} opt_timeout
 * @return {!Promise<!Event>}
 */

function listenOncePromise(element, eventType, opt_capture, opt_timeout) {
  var unlisten = undefined;
  var eventPromise = new Promise(function (resolve, unusedReject) {
    unlisten = listenOnce(element, eventType, resolve, opt_capture);
  });
  return racePromise_(eventPromise, unlisten, opt_timeout);
}

/**
 * Whether the specified element has been loaded already.
 * @param {!Element} element
 * @return {boolean}
 */

function isLoaded(element) {
  return element.complete || element.readyState == 'complete';
}

/**
 * Returns a promise that will resolve or fail based on the element's 'load'
 * and 'error' events. Optionally this method takes a timeout, which will reject
 * the promise if the resource has not loaded by then.
 * @param {!Element} element
 * @param {number=} opt_timeout
 * @return {!Promise<!Element>}
 */

function loadPromise(element, opt_timeout) {
  var unlistenLoad = undefined;
  var unlistenError = undefined;
  var loadingPromise = new Promise(function (resolve, reject) {
    if (isLoaded(element)) {
      resolve(element);
    } else {
      // Listen once since IE 5/6/7 fire the onload event continuously for
      // animated GIFs.
      if (element.tagName === 'AUDIO' || element.tagName === 'VIDEO') {
        unlistenLoad = listenOnce(element, 'loadstart', function () {
          return resolve(element);
        });
      } else {
        unlistenLoad = listenOnce(element, 'load', function () {
          return resolve(element);
        });
      }
      unlistenError = listenOnce(element, 'error', function () {
        try {
          // Report failed loads as asserts so that they automatically go into
          // the "document error" bucket.
          _asserts.assert(false, 'Failed HTTP request for %s.', element);
        } catch (e) {
          reject(e);
        }
      });
    }
  });
  return racePromise_(loadingPromise, function () {
    // It's critical that all listeners are removed.
    if (unlistenLoad) {
      unlistenLoad();
    }
    if (unlistenError) {
      unlistenError();
    }
  }, opt_timeout);
}

/**
 * @param {!Promise<TYPE>} promise
 * @param {Unlisten|undefined} unlisten
 * @param {number|undefined} timeout
 * @return {!Promise<TYPE>}
 * @template TYPE
 */
function racePromise_(promise, unlisten, timeout) {
  var racePromise = undefined;
  if (timeout === undefined) {
    // Timeout is not specified: return promise.
    racePromise = promise;
  } else {
    // Timeout has been specified: add a timeout condition.
    racePromise = _timer.timer.timeoutPromise(timeout || 0, promise);
  }
  if (!unlisten) {
    return racePromise;
  }
  return racePromise.then(function (result) {
    unlisten();
    return result;
  }, function (reason) {
    unlisten();
    throw reason;
  });
}

},{"./asserts":16,"./timer":69}],29:[function(require,module,exports){
exports.__esModule = true;
exports.isDevChannel = isDevChannel;
exports.isDevChannelVersionDoNotUse_ = isDevChannelVersionDoNotUse_;
exports.isExperimentOn = isExperimentOn;
exports.toggleExperiment = toggleExperiment;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Experiments system allows a developer to opt-in to test
 * features that are not yet fully tested.
 *
 * Experiments page: https://cdn.ampproject.org/experiments.html *
 */

var _cookies = require('./cookies');

var _timer = require('./timer');

/** @const {string} */
var COOKIE_NAME = 'AMP_EXP';

/** @const {number} */
var COOKIE_MAX_AGE_DAYS = 180; // 6 month

/** @const {time} */
var COOKIE_EXPIRATION_INTERVAL = COOKIE_MAX_AGE_DAYS * 24 * 60 * 60 * 1000;

/** @const {string} */
var CANARY_EXPERIMENT_ID = 'dev-channel';

/**
 * Whether the scripts come from a dev channel.
 * @param {!Window} win
 * @return {boolean}
 */

function isDevChannel(win) {
  if (isExperimentOn(win, CANARY_EXPERIMENT_ID)) {
    return true;
  }
  if (isDevChannelVersionDoNotUse_(win)) {
    return true;
  }
  return false;
}

/**
 * Whether the version corresponds to the dev-channel binary.
 * @param {!Window} win
 * @param {string} version
 * @return {boolean}
 * @private Visible for testing only!
 */

function isDevChannelVersionDoNotUse_(win) {
  return !!win.AMP_CONFIG && win.AMP_CONFIG.canary;
}

/**
 * Whether the specified experiment is on or off.
 * @param {!Window} win
 * @param {string} experimentId
 * @return {boolean}
 */

function isExperimentOn(win, experimentId) {
  return getExperimentIds(win).indexOf(experimentId) != -1;
}

/**
 * Toggles the expriment on or off. Returns the actual value of the expriment
 * after toggling is done.
 * @param {!Window} win
 * @param {string} experimentId
 * @param {boolean=} opt_on
 * @return {boolean}
 */

function toggleExperiment(win, experimentId, opt_on) {
  var experimentIds = getExperimentIds(win);
  var currentlyOn = experimentIds.indexOf(experimentId) != -1;
  var on = opt_on !== undefined ? opt_on : !currentlyOn;
  if (on != currentlyOn) {
    if (on) {
      experimentIds.push(experimentId);
    } else {
      experimentIds.splice(experimentIds.indexOf(experimentId), 1);
    }
    saveExperimentIds(win, experimentIds);
  }
  return on;
}

/**
 * Returns a set of experiment IDs currently on.
 * @param {!Window} win
 * @return {!Array<string>}
 */
function getExperimentIds(win) {
  var experimentCookie = _cookies.getCookie(win, COOKIE_NAME);
  return experimentCookie ? experimentCookie.split(/\s*,\s*/g) : [];
}

/**
 * Saves a set of experiment IDs currently on.
 * @param {!Window} win
 * @param {!Array<string>} experimentIds
 */
function saveExperimentIds(win, experimentIds) {
  _cookies.setCookie(win, COOKIE_NAME, experimentIds.join(','), _timer.timer.now() + COOKIE_EXPIRATION_INTERVAL);
}

},{"./cookies":19,"./timer":69}],30:[function(require,module,exports){
exports.__esModule = true;
exports.exponentialBackoff = exponentialBackoff;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @param {opt_base} opt_base Exponential base. Defaults to 2.
 * @return {function(function())} Function that when invoked will
 *     call the passed in function. On every invocation the next
 *     invocation of the passed in function will be exponentially
 *     later.
 */

function exponentialBackoff(opt_base) {
  var count = 0;
  return function (work) {
    var wait = Math.pow(opt_base || 2, count++);
    // Add jitter to avoid the thundering herd. This can e.g. happen when
    // we poll a backend and it fails for everyone at the same time.
    // We wait up to 30% longer or shorter than the time otherwise
    // given for this cycle.
    var jitter = wait * .3 * Math.random();
    if (Math.random() > .5) {
      jitter *= -1;
    }
    wait += jitter;
    setTimeout(work, Math.round(wait * 1000));
  };
}

},{}],31:[function(require,module,exports){
exports.__esModule = true;
exports.registerExtendedElement = registerExtendedElement;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _customElement = require('./custom-element');

/**
 * Registers an extended element. This function should typically be called
 * through the registerElement method on the AMP runtime.
 * @param {!Window} win
 * @param {string} name
 * @param {!Function} implementationClass
 * @package
 */

function registerExtendedElement(win, name, implementationClass) {
  _customElement.upgradeOrRegisterElement(win, name, implementationClass);
}

},{"./custom-element":20}],32:[function(require,module,exports){
exports.__esModule = true;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _observable = require('./observable');

var _timer = require('./timer');

/**
 * FocusHistory keeps track of recent focused elements. This history can be
 * purged using `purgeBefore` method.
 */

var FocusHistory = (function () {
  /**
   * @param {!Window} win
   * @param {number} purgeTimeout
   */

  function FocusHistory(win, purgeTimeout) {
    var _this = this;

    babelHelpers.classCallCheck(this, FocusHistory);

    /** @const {!Window} */
    this.win = win;

    /** @private @const {number} */
    this.purgeTimeout_ = purgeTimeout;

    /** @private @const {!Array<!{el: !Element, time: time}>} */
    this.history_ = [];

    /** @private @const {!Observable<!Element>} */
    this.observeFocus_ = new _observable.Observable();

    /** @private @const {function(!Event)} */
    this.captureFocus_ = function (e) {
      if (e.target) {
        _this.pushFocus_(e.target);
      }
    };
    /** @private @const {function(!Event)} */
    this.captureBlur_ = function (unusedE) {
      // IFrame elements do not receive `focus` event. An alternative way is
      // implemented here. We wait for a blur to arrive on the main window
      // and after a short time check which element is active.
      _timer.timer.delay(function () {
        _this.pushFocus_(_this.win.document.activeElement);
      }, 500);
    };
    this.win.document.addEventListener('focus', this.captureFocus_, true);
    this.win.addEventListener('blur', this.captureBlur_);
  }

  /** @private For testing. */

  FocusHistory.prototype.cleanup_ = function cleanup_() {
    this.win.document.removeEventListener('focus', this.captureFocus_, true);
    this.win.removeEventListener('blur', this.captureBlur_);
  };

  /**
   * Add a listener for focus events.
   * @param {function(!Element)} handler
   * @return {!UnlistenDef}
   */

  FocusHistory.prototype.onFocus = function onFocus(handler) {
    return this.observeFocus_.add(handler);
  };

  /**
   * @param {!Element} element
   * @private
   */

  FocusHistory.prototype.pushFocus_ = function pushFocus_(element) {
    var now = _timer.timer.now();
    if (this.history_.length == 0 || this.history_[this.history_.length - 1].el != element) {
      this.history_.push({ el: element, time: now });
    } else {
      this.history_[this.history_.length - 1].time = now;
    }
    this.purgeBefore(now - this.purgeTimeout_);
    this.observeFocus_.fire(element);
  };

  /**
   * Returns the element that was focused last.
   * @return {!Element}
   */

  FocusHistory.prototype.getLast = function getLast() {
    if (this.history_.length == 0) {
      return null;
    }
    return this.history_[this.history_.length - 1].el;
  };

  /**
   * Removes elements from the history older than the specified time.
   * @param {time} time
   */

  FocusHistory.prototype.purgeBefore = function purgeBefore(time) {
    var index = this.history_.length - 1;
    for (var i = 0; i < this.history_.length; i++) {
      if (this.history_[i].time >= time) {
        index = i - 1;
        break;
      }
    }
    if (index != -1) {
      this.history_.splice(0, index + 1);
    }
  };

  /**
   * Returns `true` if the specified element contains any of the elements in
   * the history.
   * @param {!Element} element
   * @return {boolean}
   */

  FocusHistory.prototype.hasDescendantsOf = function hasDescendantsOf(element) {
    if (this.win.document.activeElement) {
      this.pushFocus_(this.win.document.activeElement);
    }
    for (var i = 0; i < this.history_.length; i++) {
      if (element.contains(this.history_[i].el)) {
        return true;
      }
    }
    return false;
  };

  return FocusHistory;
})();

exports.FocusHistory = FocusHistory;

},{"./observable":41,"./timer":69}],33:[function(require,module,exports){
exports.__esModule = true;
exports.listen = listen;
exports.listenOnce = listenOnce;
exports.postMessage = postMessage;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _asserts = require('./asserts');

var _url = require('./url');

/**
 * Allows listening for message from the iframe. Returns an unlisten
 * function to remove the listener.
 *
 * @param {!Element} iframe.
 * @param {string} typeOfMessage.
 * @param {function(!Object)} callback Called when a message of this type
 *     arrives for this iframe.
 * @param {boolean=} opt_is3P set to true if the iframe is 3p.
 * @return {!Unlisten}
 */

function listen(iframe, typeOfMessage, callback, opt_is3P) {
  _asserts.assert(iframe.src, 'only iframes with src supported');
  var origin = _url.parseUrl(iframe.src).origin;
  var win = iframe.ownerDocument.defaultView;
  var sentinel = getSentinel_(opt_is3P);
  var unlisten = undefined;
  var listener = function (event) {
    // If this iframe no longer has a contentWindow is was removed
    // from the DOM. Unlisten immediately as we can never again receive
    // messages for it (
    if (!iframe.contentWindow) {
      unlisten();
      return;
    }
    if (event.origin != origin) {
      return;
    }
    if (event.source != iframe.contentWindow) {
      return;
    }
    if (!event.data || event.data.sentinel != sentinel) {
      return;
    }
    if (event.data.type != typeOfMessage) {
      return;
    }
    callback(event.data);
  };

  win.addEventListener('message', listener);

  return unlisten = function () {
    if (listener) {
      win.removeEventListener('message', listener);
      // Make sure references to the unlisten function do not keep
      // alive too much.
      listener = null;
      iframe = null;
      win = null;
      callback = null;
    }
  };
}

/**
 * Allows listening for a message from the iframe and then removes the listener
 *
 * @param {!Element} iframe.
 * @param {string} typeOfMessage.
 * @param {function(!Object)} callback Called when a message of this type
 *     arrives for this iframe.
 * @param {boolean=} opt_is3P set to true if the iframe is 3p.
 * @return {!Unlisten}
 */

function listenOnce(iframe, typeOfMessage, callback, opt_is3P) {
  var unlisten = listen(iframe, typeOfMessage, function (data) {
    unlisten();
    return callback(data);
  }, opt_is3P);
  return unlisten;
}

/**
 * Posts a message to the iframe.
 * @param {!Element} element The iframe.
 * @param {string} type Type of the message.
 * @param {!Object} object Message payload.
 * @param {string} targetOrigin origin of the target.
 * @param {boolean=} opt_is3P set to true if the iframe is 3p.
 */

function postMessage(iframe, type, object, targetOrigin, opt_is3P) {
  if (!iframe.contentWindow) {
    return;
  }
  object.type = type;
  object.sentinel = getSentinel_(opt_is3P);
  if (opt_is3P) {
    // Serialize ourselves because that is much faster in Chrome.
    object = 'amp-' + JSON.stringify(object);
  }
  iframe.contentWindow. /*OK*/postMessage(object, targetOrigin);
}

/**
 * Gets the sentinel string.
 * @param {boolean=} opt_is3P set to true if the iframe is 3p.
 * @returns {string} Sentinel string.
 * @private
 */
function getSentinel_(opt_is3P) {
  return opt_is3P ? 'amp-development--token' : 'amp';
}

},{"./asserts":16,"./url":72}],34:[function(require,module,exports){
exports.__esModule = true;
exports.inputFor = inputFor;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _observable = require('./observable');

var _service = require('./service');

var _log = require('./log');

var _eventHelper = require('./event-helper');

var TAG_ = 'Input';

var MAX_MOUSE_CONFIRM_ATTEMPS_ = 3;
var CLICK_TIMEOUT_ = 300;

/**
 * Detects and maintains different types of input such as touch, mouse or
 * keyboard.
 */

var Input = (function () {
  /**
   * @param {!Window} win
   */

  function Input(win) {
    babelHelpers.classCallCheck(this, Input);

    /** @const {!Window} */
    this.win = win;

    /** @private {!Function} */
    this.boundOnKeyDown_ = this.onKeyDown_.bind(this);

    /** @private {!Function} */
    this.boundOnMouseDown_ = this.onMouseDown_.bind(this);

    /** @private {!Function} */
    this.boundOnMouseMove_ = this.onMouseMove_.bind(this);

    /** @private {!Function} */
    this.boundMouseCanceled_ = this.mouseCanceled_.bind(this);

    /** @private {!Function} */
    this.boundMouseConfirmed_ = this.mouseConfirmed_.bind(this);

    /** @private {boolean} */
    this.hasTouch_ = 'ontouchstart' in win || win.navigator['maxTouchPoints'] !== undefined && win.navigator['maxTouchPoints'] > 0 || win['DocumentTouch'] !== undefined;
    _log.log.fine(TAG_, 'touch detected:', this.hasTouch_);

    /** @private {boolean} */
    this.keyboardActive_ = false;
    this.win.document.addEventListener('keydown', this.boundOnKeyDown_);
    this.win.document.addEventListener('mousedown', this.boundOnMouseDown_);

    /** @private {boolean} */
    this.hasMouse_ = true;

    /** @private {number} */
    this.mouseConfirmAttemptCount_ = 0;

    /** @private {!Observable<boolean>} */
    this.touchDetectedObservable_ = new _observable.Observable();

    /** @private {!Observable<boolean>} */
    this.mouseDetectedObservable_ = new _observable.Observable();

    /** @private {!Observable<boolean>} */
    this.keyboardStateObservable_ = new _observable.Observable();

    // If touch available, temporarily set hasMouse to false and wait for
    // mouse events.
    if (this.hasTouch_) {
      this.hasMouse_ = !this.hasTouch_;
      _eventHelper.listenOnce(win.document, 'mousemove', this.boundOnMouseMove_);
    }
  }

  /**
   * @param {!Window} window
   * @return {!Input}
   */

  /** @private */

  Input.prototype.cleanup_ = function cleanup_() {
    this.win.document.removeEventListener('keydown', this.boundOnKeyDown_);
    this.win.document.removeEventListener('mousedown', this.boundOnMouseDown_);
  };

  /**
   * Whether the touch input has been detected.
   * @return {boolean}
   */

  Input.prototype.isTouchDetected = function isTouchDetected() {
    return this.hasTouch_;
  };

  /**
   * Registers an event handle in case if the touch is detected.
   * @param {function(boolean)} handler
   * @param {boolean=} opt_fireImmediately
   * @return {!UnlistenDef}
   */

  Input.prototype.onTouchDetected = function onTouchDetected(handler, opt_fireImmediately) {
    if (opt_fireImmediately) {
      handler(this.isTouchDetected());
    }
    return this.touchDetectedObservable_.add(handler);
  };

  /**
   * Whether the mouse input has been detected.
   * @return {boolean}
   */

  Input.prototype.isMouseDetected = function isMouseDetected() {
    return this.hasMouse_;
  };

  /**
   * Registers an event handle in case if the mouse is detected.
   * @param {function(boolean)} handler
   * @param {boolean=} opt_fireImmediately
   * @return {!UnlistenDef}
   */

  Input.prototype.onMouseDetected = function onMouseDetected(handler, opt_fireImmediately) {
    if (opt_fireImmediately) {
      handler(this.isMouseDetected());
    }
    return this.mouseDetectedObservable_.add(handler);
  };

  /**
   * Whether the keyboard input is currently active.
   * @return {boolean}
   */

  Input.prototype.isKeyboardActive = function isKeyboardActive() {
    return this.keyboardActive_;
  };

  /**
   * Registers an event handle for changes in the keyboard input.
   * @param {function(boolean)} handler
   * @param {boolean=} opt_fireImmediately
   * @return {!UnlistenDef}
   */

  Input.prototype.onKeyboardStateChanged = function onKeyboardStateChanged(handler, opt_fireImmediately) {
    if (opt_fireImmediately) {
      handler(this.isKeyboardActive());
    }
    return this.keyboardStateObservable_.add(handler);
  };

  /**
   * @param {!Event} e
   * @private
   */

  Input.prototype.onKeyDown_ = function onKeyDown_(e) {
    if (this.keyboardActive_) {
      return;
    }

    if (e.defaultPrevented) {
      return;
    }

    // Ignore inputs.
    var target = e.target;
    if (target && (target.tagName == 'INPUT' || target.tagName == 'TEXTAREA' || target.tagName == 'SELECT' || target.tagName == 'OPTION' || target.hasAttribute('contenteditable'))) {
      return;
    }

    this.keyboardActive_ = true;
    this.keyboardStateObservable_.fire(true);
    _log.log.fine(TAG_, 'keyboard activated');
  };

  /** @private */

  Input.prototype.onMouseDown_ = function onMouseDown_() {
    if (!this.keyboardActive_) {
      return;
    }
    this.keyboardActive_ = false;
    this.keyboardStateObservable_.fire(false);
    _log.log.fine(TAG_, 'keyboard deactivated');
  };

  /**
   * @param {!Event} e
   * @return {!Promise|undefined}
   * @private
   */

  Input.prototype.onMouseMove_ = function onMouseMove_(e) {
    // The event explicitly states that it's a result of a touch event.
    if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) {
      this.mouseCanceled_();
      return undefined;
    }
    // If "click" arrives within a timeout time, this is most likely a
    // touch/mouse emulation. Otherwise, if timeout exceeded, this looks
    // like a legitimate mouse event.
    return _eventHelper.listenOncePromise(this.win.document, 'click', false, CLICK_TIMEOUT_).then(this.boundMouseCanceled_, this.boundMouseConfirmed_);
  };

  /** @private */

  Input.prototype.mouseConfirmed_ = function mouseConfirmed_() {
    this.hasMouse_ = true;
    this.mouseDetectedObservable_.fire(true);
    _log.log.fine(TAG_, 'mouse detected');
  };

  /** @private */

  Input.prototype.mouseCanceled_ = function mouseCanceled_() {
    // Repeat, if attempts allow.
    this.mouseConfirmAttemptCount_++;
    if (this.mouseConfirmAttemptCount_ <= MAX_MOUSE_CONFIRM_ATTEMPS_) {
      _eventHelper.listenOnce(this.win.document, 'mousemove', this.boundOnMouseMove_);
    } else {
      _log.log.fine(TAG_, 'mouse detection failed');
    }
  };

  return Input;
})();

exports.Input = Input;

function inputFor(window) {
  return _service.getService(window, 'input', function () {
    return new Input(window);
  });
}

;

},{"./event-helper":28,"./log":39,"./observable":41,"./service":53}],35:[function(require,module,exports){
exports.__esModule = true;
exports.getIntersectionChangeEntry = getIntersectionChangeEntry;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _observable = require('./observable');

var _asserts = require('./asserts');

var _layoutRect = require('./layout-rect');

var _iframeHelper = require('./iframe-helper');

var _url = require('./url');

var _timer = require('./timer');

/**
 * Produces a change entry for that should be compatible with
 * IntersectionObserverEntry.
 *
 * Mutates passed in rootBounds to have x and y according to spec.
 *
 * @param {number} time Time when values below were measured.
 * @param {!LayoutRect} rootBounds Equivalent to viewport.getRect()
 * @param {!LayoutRect} elementLayoutBox Layout box of the element
 *     that may intersect with the rootBounds.
 * @return {!IntersectionObserverEntry} A change entry.
 * @private
 */

function getIntersectionChangeEntry(measureTime, rootBounds, elementLayoutBox) {
  // Building an IntersectionObserverEntry.
  // http://rawgit.com/slightlyoff/IntersectionObserver/master/index.html#intersectionobserverentry
  // These should always be equal assuming rootBounds cannot have negative
  // dimension.
  rootBounds.x = rootBounds.left;
  rootBounds.y = rootBounds.top;

  var boundingClientRect = _layoutRect.moveLayoutRect(elementLayoutBox, -1 * rootBounds.x, -1 * rootBounds.y);
  _asserts.assert(boundingClientRect.width >= 0 && boundingClientRect.height >= 0, 'Negative dimensions in ad.');
  boundingClientRect.x = boundingClientRect.left;
  boundingClientRect.y = boundingClientRect.top;

  var intersectionRect = _layoutRect.rectIntersection(rootBounds, elementLayoutBox) ||
  // No intersection.
  _layoutRect.layoutRectLtwh(0, 0, 0, 0);
  intersectionRect.x = intersectionRect.left;
  intersectionRect.y = intersectionRect.top;

  return {
    time: measureTime,
    rootBounds: rootBounds,
    boundingClientRect: boundingClientRect,
    intersectionRect: intersectionRect
  };
}

/**
 * The IntersectionObserver class lets any element share its viewport
 * intersection data with an iframe of its choice (most likely contained within
 * the element itself.). When instantiated the class will start listening for
 * a 'send-intersection' postMessage from the iframe, and only then  would start
 * sending intersection data to the iframe. The intersection data would be sent
 * when the element is moved inside or outside the viewport as well as on
 * scroll and resize.
 * The element should create an IntersectionObserver instance once the Iframe
 * element is created.
 * The IntersectionObserver class exposes a `fire` method that would send the
 * intersection data to the iframe.
 * The IntersectionObserver class exposes a `onViewportCallback` method that
 * should be called inside if the viewportCallback of the element. This would
 * let the element sent intersection data automatically when there element comes
 * inside or goes outside the viewport and also manage sending intersection data
 * onscroll and resize.
 * Note: The IntersectionObserver would not send any data over to the iframe if
 * it had not requested the intersection data already via a postMessage.
 */

var IntersectionObserver = (function (_Observable) {
  babelHelpers.inherits(IntersectionObserver, _Observable);

  /**
   * @param {!BaseElement} element.
   * @param {!Element} iframe Iframe element to which would request intersection
   *    data.
   * @param {?boolean} opt_is3p Set to `true` when the iframe is 3'rd party.
   * @constructor
   * @extends {Observable}
   */

  function IntersectionObserver(baseElement, iframe, opt_is3p) {
    babelHelpers.classCallCheck(this, IntersectionObserver);

    _Observable.call(this);
    /** @private @const */
    this.baseElement_ = baseElement;
    /** @private {?Element} */
    this.iframe_ = iframe;
    /** @private {boolean} */
    this.is3p_ = opt_is3p || false;
    /** @private {boolean} */
    this.shouldSendIntersectionChanges_ = false;
    /** @private {boolean} */
    this.inViewport_ = false;

    /** @private {!Array<!IntersectionObserverEntry>} */
    this.pendingChanges_ = [];

    /** @private {number} */
    this.flushTimeout_ = 0;

    /** @private @const {function()} */
    this.boundFlush_ = this.flush_.bind(this);

    this.init_();
  }

  IntersectionObserver.prototype.init_ = function init_() {
    var _this = this;

    // Triggered by context.observeIntersection(…) inside the ad/iframe.
    // We use listen instead of listenOnce, because a single ad/iframe might
    // have multiple parties wanting to receive viewability data.
    // The second time this is called, it doesn't do much but it
    // guarantees that the receiver gets an initial intersection change
    // record.
    _iframeHelper.listen(this.iframe_, 'send-intersections', function () {
      _this.startSendingIntersectionChanges_();
    }, this.is3p_);

    this.add(function () {
      _this.sendElementIntersection_();
    });
  };

  /**
   * Called via postMessage from the child iframe when the ad/iframe starts
   * observing its position in the viewport.
   * Sets a flag, measures the iframe position if necessary and sends
   * one change record to the iframe.
   * Note that this method may be called more than once if a single ad
   * has multiple parties interested in viewability data.
   * @private
   */

  IntersectionObserver.prototype.startSendingIntersectionChanges_ = function startSendingIntersectionChanges_() {
    var _this2 = this;

    this.shouldSendIntersectionChanges_ = true;
    this.baseElement_.getVsync().measure(function () {
      if (_this2.baseElement_.isInViewport()) {
        _this2.onViewportCallback(true);
      }
      _this2.fire();
    });
  };

  /**
   * Triggered by the AmpElement to when it either enters or exits the visible
   * viewport.
   * @param {boolean} inViewport true if the element is in viewport.
   */

  IntersectionObserver.prototype.onViewportCallback = function onViewportCallback(inViewport) {
    var _this3 = this;

    if (this.inViewport_ == inViewport) {
      return;
    }
    this.inViewport_ = inViewport;
    // Lets the ad know that it became visible or no longer is.
    this.fire();
    // And update the ad about its position in the viewport while
    // it is visible.
    if (inViewport) {
      (function () {
        var send = _this3.fire.bind(_this3);
        // Scroll events.
        var unlistenScroll = _this3.baseElement_.getViewport().onScroll(send);
        // Throttled scroll events. Also fires for resize events.
        var unlistenChanged = _this3.baseElement_.getViewport().onChanged(send);
        _this3.unlistenViewportChanges_ = function () {
          unlistenScroll();
          unlistenChanged();
        };
      })();
    } else if (this.unlistenViewportChanges_) {
      this.unlistenViewportChanges_();
      this.unlistenViewportChanges_ = null;
    }
  };

  /**
   * Sends 'intersection' message to ad/iframe with intersection change records
   * if this has been activated and we measured the layout box of the iframe
   * at least once.
   * @private
   */

  IntersectionObserver.prototype.sendElementIntersection_ = function sendElementIntersection_() {
    if (!this.shouldSendIntersectionChanges_) {
      return;
    }
    var change = this.baseElement_.element.getIntersectionChangeEntry();
    if (this.pendingChanges_.length > 0 && this.pendingChanges_[this.pendingChanges_.length - 1].time == change.time) {
      return;
    }
    this.pendingChanges_.push(change);
    if (!this.flushTimeout_) {
      // Send a maximum of 10 postMessages per second.
      this.flushTimeout_ = _timer.timer.delay(this.boundFlush_, 100);
    }
  };

  IntersectionObserver.prototype.flush_ = function flush_() {
    this.flushTimeout_ = 0;
    if (!this.pendingChanges_.length) {
      return;
    }
    var targetOrigin = this.iframe_.src ? _url.parseUrl(this.iframe_.src).origin : '*';
    _iframeHelper.postMessage(this.iframe_, 'intersection', { changes: this.pendingChanges_ }, targetOrigin, this.is3p_);
    this.pendingChanges_.length = 0;
  };

  return IntersectionObserver;
})(_observable.Observable);

exports.IntersectionObserver = IntersectionObserver;

},{"./asserts":16,"./iframe-helper":33,"./layout-rect":36,"./observable":41,"./timer":69,"./url":72}],36:[function(require,module,exports){
exports.__esModule = true;
exports.layoutRectLtwh = layoutRectLtwh;
exports.layoutRectFromDomRect = layoutRectFromDomRect;
exports.layoutRectsOverlap = layoutRectsOverlap;
exports.rectIntersection = rectIntersection;
exports.expandLayoutRect = expandLayoutRect;
exports.moveLayoutRect = moveLayoutRect;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * The structure that combines position and size for an element. The exact
 * interpretation of position and size depends on the use case.
 *
 * @typedef {{
 *   top: number,
 *   bottom: number,
 *   left: number,
 *   right: number,
 *   width: number,
 *   height: number
 * }}
 */
var LayoutRectDef = undefined;

/**
 * Creates a layout rect based on the left, top, width and height parameters
 * in that order.
 * @param {number} left
 * @param {number} top
 * @param {number} width
 * @param {number} height
 * @return {!LayoutRectDef}
 */

function layoutRectLtwh(left, top, width, height) {
  return {
    left: left,
    top: top,
    width: width,
    height: height,
    bottom: top + height,
    right: left + width
  };
}

/**
 * Creates a layout rect based on the DOMRect, e.g. obtained from calling
 * getBoundingClientRect.
 * @param {!DOMRect} rect
 * @return {!LayoutRectDef}
 */

function layoutRectFromDomRect(rect) {
  return {
    left: rect.left,
    top: rect.top,
    width: rect.width,
    height: rect.height,
    bottom: rect.top + rect.height,
    right: rect.left + rect.width
  };
}

/**
 * Returns true if the specified two rects overlap by a single pixel.
 * @param {!LayoutRectDef} r1
 * @param {!LayoutRectDef} r2
 * @return {boolean}
 */

function layoutRectsOverlap(r1, r2) {
  return r1.top <= r2.bottom && r2.top <= r1.bottom && r1.left <= r2.right && r2.left <= r1.right;
}

/**
 * Returns the intersection between a, b or null if there is none.
 * @param {!LayoutRectDef} a
 * @param {!LayoutRectDef} b
 * @return {?LayoutRectDef}
 */

function rectIntersection(a, b) {
  var x0 = Math.max(a.left, b.left);
  var x1 = Math.min(a.left + a.width, b.left + b.width);

  if (x0 <= x1) {
    var y0 = Math.max(a.top, b.top);
    var y1 = Math.min(a.top + a.height, b.top + b.height);

    if (y0 <= y1) {
      return layoutRectLtwh(x0, y0, x1 - x0, y1 - y0);
    }
  }
  return null;
}

/**
 * Expand the layout rect using multiples of width and height.
 * @param {!LayoutRectDef} rect Original rect.
 * @param {number} dw Expansion in width, specified as a multiple of width.
 * @param {number} dh Expansion in height, specified as a multiple of height.
 * @return {!LayoutRectDef}
 */

function expandLayoutRect(rect, dw, dh) {
  return {
    top: rect.top - rect.height * dh,
    bottom: rect.bottom + rect.height * dh,
    left: rect.left - rect.width * dw,
    right: rect.right + rect.width * dw,
    width: rect.width * (1 + dw * 2),
    height: rect.height * (1 + dh * 2)
  };
}

/**
 * Moves the layout rect using dx and dy.
 * @param {!LayoutRectDef} rect Original rect.
 * @param {number} dx Move horizontally with this value.
 * @param {number} dy Move vertically with this value.
 * @return {!LayoutRectDef}
 */

function moveLayoutRect(rect, dx, dy) {
  if (dx == 0 && dy == 0) {
    return rect;
  }
  return layoutRectLtwh(rect.left + dx, rect.top + dy, rect.width, rect.height);
}

},{}],37:[function(require,module,exports){
exports.__esModule = true;
exports.parseLayout = parseLayout;
exports.getLayoutClass = getLayoutClass;
exports.isLayoutSizeDefined = isLayoutSizeDefined;
exports.isInternalElement = isInternalElement;
exports.parseLength = parseLength;
exports.assertLength = assertLength;
exports.assertLengthOrPercent = assertLengthOrPercent;
exports.getLengthUnits = getLengthUnits;
exports.getLengthNumeral = getLengthNumeral;
exports.hasNaturalDimensions = hasNaturalDimensions;
exports.getNaturalDimensions = getNaturalDimensions;
exports.isLoadingAllowed = isLoadingAllowed;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Implements element layout. See https://goo.gl/9avXuT for
 * details.
 */

var _asserts = require('./asserts');

/**
 * @enum {string}
 */
var Layout = {
  NODISPLAY: 'nodisplay',
  FIXED: 'fixed',
  FIXED_HEIGHT: 'fixed-height',
  RESPONSIVE: 'responsive',
  CONTAINER: 'container',
  FILL: 'fill'
};

exports.Layout = Layout;
/**
 * CSS Length type. E.g. "1px" or "20vh".
 * @typedef {string}
 */
var LengthDef = undefined;

/**
 * @typedef {{
 *   width: string,
 *   height: string
 * }}
 */
var DimensionsDef = undefined;

/**
 * The set of elements with natural dimensions, that is, elements
 * which have a known dimension either based on their value specified here,
 * or, if the value is null, a dimension specific to the browser.
 * `hasNaturalDimensions` checks for membership in this set.
 * `getNaturalDimensions` determines the dimensions for an element in the
 *    set and caches it.
 * @type {!Object<string, ?DimensionsDef>}
 * @private  Visible for testing only!
 */
var naturalDimensions_ = {
  'AMP-PIXEL': { width: '1px', height: '1px' },
  'AMP-ANALYTICS': { width: '1px', height: '1px' },
  // TODO(dvoytenko): audio should have width:auto.
  'AMP-AUDIO': null
};

exports.naturalDimensions_ = naturalDimensions_;
/**
 * Elements that the progess can be shown for. This set has to be externalized
 * since the element's implementation may not be downloaded yet.
 * @enum {boolean}
 * @private  Visible for testing only!
 */
var LOADING_ELEMENTS_ = {
  'AMP-ANIM': true,
  'AMP-BRIGHTCOVE': true,
  'AMP-EMBED': true,
  'AMP-IFRAME': true,
  'AMP-IMG': true,
  'AMP-INSTAGRAM': true,
  'AMP-LIST': true,
  'AMP-PINTEREST': true,
  'AMP-VIDEO': true
};

exports.LOADING_ELEMENTS_ = LOADING_ELEMENTS_;
/**
 * @param {string} s
 * @return {Layout|undefined} Returns undefined in case of failure to parse
 *   the layout string.
 */

function parseLayout(s) {
  for (var k in Layout) {
    if (Layout[k] == s) {
      return Layout[k];
    }
  }
  return undefined;
}

/**
 * @param {!Layout} layout
 * @return {string}
 */

function getLayoutClass(layout) {
  return '-amp-layout-' + layout;
}

/**
 * Whether an element with this layout inherently defines the size.
 * @param {!Layout} layout
 * @return {boolean}
 */

function isLayoutSizeDefined(layout) {
  return layout == Layout.FIXED || layout == Layout.FIXED_HEIGHT || layout == Layout.RESPONSIVE || layout == Layout.FILL;
}

/**
 * Whether the tag is an internal (service) AMP tag.
 * @param {!Node|string} tag
 * @return {boolean}
 */

function isInternalElement(tag) {
  var tagName = typeof tag == 'string' ? tag : tag.tagName;
  return tagName && tagName.toLowerCase().indexOf('i-') == 0;
}

/**
 * Parses the CSS length value. If no units specified, the assumed value is
 * "px". Returns undefined in case of parsing error.
 * @param {string|undefined} s
 * @return {!LengthDef|undefined}
 */

function parseLength(s) {
  if (typeof s == 'number') {
    return s + 'px';
  }
  if (!s) {
    return undefined;
  }
  if (!/^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax)?$/.test(s)) {
    return undefined;
  }
  if (/^\d+(\.\d+)?$/.test(s)) {
    return s + 'px';
  }
  return s;
}

/**
 * Asserts that the supplied value is a non-percent CSS Length value.
 * @param {!LengthDef|string} length
 * @return {!LengthDef}
 */

function assertLength(length) {
  _asserts.assert(/^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax)$/.test(length), 'Invalid length value: %s', length);
  return length;
}

/**
 * Asserts that the supplied value is a CSS Length value
 * (including percent unit).
 * @param {!LengthDef|string} length
 * @return {!LengthDef}
 */

function assertLengthOrPercent(length) {
  _asserts.assert(/^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|%)$/.test(length), 'Invalid length or percent value: %s', length);
  return length;
}

/**
 * Returns units from the CSS length value.
 * @param {!LengthDef} length
 * @return {string}
 */

function getLengthUnits(length) {
  assertLength(length);
  var m = _asserts.assert(length.match(/[a-z]+/i), 'Failed to read units from %s', length);
  return m[0];
}

/**
 * Returns the numeric value of a CSS length value.
 * @param {!LengthDef|string} length
 * @return {number}
 */

function getLengthNumeral(length) {
  return parseFloat(length);
}

/**
 * Determines whether the tagName is a known element that has natural dimensions
 * in our runtime or the browser.
 * @param {string} tagName The element tag name.
 * @return {DimensionsDef}
 */

function hasNaturalDimensions(tagName) {
  tagName = tagName.toUpperCase();
  return naturalDimensions_[tagName] !== undefined;
}

/**
 * Determines the default dimensions for an element which could vary across
 * different browser implementations, like <audio> for instance.
 * This operation can only be completed for an element whitelisted by
 * `hasNaturalDimensions`.
 * @param {string} tagName The element tag name.
 * @return {DimensionsDef}
 */

function getNaturalDimensions(tagName) {
  tagName = tagName.toUpperCase();
  _asserts.assert(naturalDimensions_[tagName] !== undefined);
  if (!naturalDimensions_[tagName]) {
    var naturalTagName = tagName.replace(/^AMP\-/, '');
    var temp = document.createElement(naturalTagName);
    // For audio, should no-op elsewhere.
    temp.controls = true;
    temp.style.position = 'absolute';
    temp.style.visibility = 'hidden';
    document.body.appendChild(temp);
    naturalDimensions_[tagName] = {
      width: (temp. /*OK*/offsetWidth || 1) + 'px',
      height: (temp. /*OK*/offsetHeight || 1) + 'px'
    };
    document.body.removeChild(temp);
  }
  return naturalDimensions_[tagName];
}

/**
 * Whether the loading can be shown for the specified elemeent. This set has
 * to be externalized since the element's implementation may not be
 * downloaded yet.
 * @param {string} tagName The element tag name.
 * @return {boolean}
 */

function isLoadingAllowed(tagName) {
  return LOADING_ELEMENTS_[tagName.toUpperCase()] || false;
}

},{"./asserts":16}],38:[function(require,module,exports){
exports.__esModule = true;
exports.createLoaderElement = createLoaderElement;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Creates a default "loading indicator" element. This element accepts
 * `amp-active` class in which case it may choose to run an animation.
 * @return {!Element}
 */

function createLoaderElement() {
  var loader = document.createElement('div');
  loader.classList.add('-amp-loader');
  for (var i = 0; i < 3; i++) {
    var dot = document.createElement('div');
    dot.classList.add('-amp-loader-dot');
    loader.appendChild(dot);
  }
  return loader;
}

},{}],39:[function(require,module,exports){
exports.__esModule = true;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _mode = require('./mode');

/** @const Time when this JS loaded.  */
var start = new Date().getTime();

/**
 * Logging.
 * // TODO(@cramforce): Make this DCRable.
 * Add #log=1 to URL to turn on logging when in prod (providing a build with
 * logging is used and #log=0 to turn off logging in local dev.
 * @final
 */

var Log = (function () {

  /**
   * @param {!Window} win
   */

  function Log(win) {
    babelHelpers.classCallCheck(this, Log);

    /**
     * In tests we use the main test window instead of the iframe where
     * the tests runs because only the former is relayed to the console.
     * @const {!Window}
     */
    this.win = win.AMP_TEST ? win.parent : win;

    /** @private {boolean} */
    this.isEnabled_ = this.shouldBeEnabled_();
  }

  Log.prototype.shouldBeEnabled_ = function shouldBeEnabled_() {
    if (!this.win.console || !this.win.console.log) {
      return false;
    }
    if (this.win.ENABLE_LOG) {
      return true;
    }
    // Search for #log=0 or log=1
    var match = this.win.location.hash.match(/log=(\d)/);
    var shouldLog = match && match[1];
    if (_mode.getMode().localDev && shouldLog != '0') {
      return true;
    }
    if (this.win.location.hash && shouldLog == '1') {
      return true;
    }
    return false;
  };

  /**
   * @param {string} tag
   * @param {string} level
   * @param {!Array} messages
   * @param {?} opt_error
   */

  Log.prototype.msg_ = function msg_(tag, level, messages) {
    if (this.isEnabled_) {
      var fn = this.win.console.log;
      if (level == 'ERROR') {
        fn = this.win.console.error || fn;
      } else if (level == 'INFO') {
        fn = this.win.console.info || fn;
      } else if (level == 'WARN') {
        fn = this.win.console.warn || fn;
      }
      messages.unshift(new Date().getTime() - start, '[' + tag + ']');
      fn.apply(this.win.console, messages);
    }
  };

  /**
   * @param {string} tag
   * @param {...*} var_args
   */

  Log.prototype.fine = function fine(tag, var_args) {
    if (this.isEnabled_) {
      this.msg_(tag, 'FINE', Array.prototype.slice.call(arguments, 1));
    }
  };

  /**
   * @param {string} tag
   * @param {...*} var_args
   */

  Log.prototype.info = function info(tag, var_args) {
    if (this.isEnabled_) {
      this.msg_(tag, 'INFO', Array.prototype.slice.call(arguments, 1));
    }
  };

  /**
   * @param {string} tag
   * @param {...*} var_args
   */

  Log.prototype.warn = function warn(tag, var_args) {
    if (this.isEnabled_) {
      this.msg_(tag, 'WARN', Array.prototype.slice.call(arguments, 1));
    }
  };

  /**
   * @param {string} tag
   * @param {...*} var_args
   * @param {?} opt_error
   */

  Log.prototype.error = function error(tag, var_args) {
    if (this.isEnabled_) {
      this.msg_(tag, 'ERROR', Array.prototype.slice.call(arguments, 1));
    }
  };

  return Log;
})();

exports.Log = Log;
;

var log = new Log(window);
exports.log = log;

},{"./mode":40}],40:[function(require,module,exports){
exports.__esModule = true;
exports.getMode = getMode;
exports.setModeForTesting = setModeForTesting;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _url = require('./url');

/**
 * @typedef {{
 *   localDev: boolean
 * }}
 */
var ModeDef = undefined;

/** @typedef {?ModeDef} */
var mode = null;

/**
 * Provides info about the current app.
 * @return {!ModeDef}
 */

function getMode() {
  if (mode) {
    return mode;
  }
  return mode = getMode_();
}

/**
 * Set mode in a test. Pass null in afterEach function to reset.
 * @param {?ModeDef} m
 */

function setModeForTesting(m) {
  mode = m;
}

/**
 * Provides info about the current app.
 * @return {!ModeDef}
 */
function getMode_() {
  if (window.context && window.context.mode) {
    return window.context.mode;
  }
  var isLocalDev = (location.hostname == 'localhost' || location.ancestorOrigins && location.ancestorOrigins[0] && location.ancestorOrigins[0].indexOf('http://localhost:') == 0) &&
  // Filter out localhost running against a prod script.
  // Because all allowed scripts are ours, we know that these can only
  // occur during local dev.
  !!document.querySelector('script[src*="/dist/"],script[src*="/base/"]');

  var developmentQueryString = _url.parseQueryString(
  // location.originalHash is set by the viewer when it removes the fragment
  // from the URL.
  location.originalHash || location.hash)['development'];

  return {
    localDev: isLocalDev,
    // Triggers validation
    development: developmentQueryString == '1' || window.AMP_DEV_MODE,
    minified: undefined == 'production',
    test: window.AMP_TEST
  };
}

},{"./url":72}],41:[function(require,module,exports){
exports.__esModule = true;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * This type signifies a callback that can be called to remove the listener.
 * @typedef {function()}
 */

var UnlistenDef = function UnlistenDef() {
  babelHelpers.classCallCheck(this, UnlistenDef);
}

/**
 * This class helps to manage observers. Observers can be added, removed or
 * fired through and instance of this class.
 * @template TYPE
 */
;

var Observable = (function () {
  function Observable() {
    babelHelpers.classCallCheck(this, Observable);

    /** @const {!Array<function(TYPE)>} */
    this.handlers_ = [];
  }

  /**
   * Adds the observer to this instance.
   * @param {function(TYPE)} handler Observer's handler.
   * @return {!UnlistenDef}
   */

  Observable.prototype.add = function add(handler) {
    var _this = this;

    this.handlers_.push(handler);
    return function () {
      _this.remove(handler);
    };
  };

  /**
   * Removes the observer from this instance.
   * @param {function(TYPE)} handler Observer's instance.
   */

  Observable.prototype.remove = function remove(handler) {
    for (var i = 0; i < this.handlers_.length; i++) {
      if (handler == this.handlers_[i]) {
        this.handlers_.splice(i, 1);
        break;
      }
    }
  };

  /**
   * Fires an event. All observers are called.
   * @param {TYPE} event
   */

  Observable.prototype.fire = function fire(event) {
    this.handlers_.forEach(function (handler) {
      handler(event);
    });
  };

  /**
   * Returns number of handlers. Mostly needed for tests.
   * @return {number}
   */

  Observable.prototype.getHandlerCount = function getHandlerCount() {
    return this.handlers_.length;
  };

  return Observable;
})();

exports.Observable = Observable;

},{}],42:[function(require,module,exports){
exports.__esModule = true;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _timer = require('./timer');

/**
 * Pass class helps to manage single-pass process. A pass is scheduled using
 * delay method. Only one pass can be pending at a time. If no pass is pending
 * the process is considered to be "idle".
 */

var Pass = (function () {

  /**
   * Creates a new Pass instance.
   * @param {function()} handler Handler to be executed when pass is triggered.
   * @param {number=} opt_defaultDelay Default delay to be used when schedule
   *   is called without one.
   */

  function Pass(handler, opt_defaultDelay) {
    babelHelpers.classCallCheck(this, Pass);

    /** @private @const {function()} */
    this.handler_ = handler;

    /** @private @const {number|string} */
    this.defaultDelay_ = opt_defaultDelay || 0;

    /** @private {number|string} */
    this.scheduled_ = -1;

    /** @private {number} */
    this.nextTime_ = 0;

    /** @private {boolean} */
    this.running_ = false;
  }

  /**
   * Whether or not a pass is currently pending.
   * @return {boolean}
   */

  Pass.prototype.isPending = function isPending() {
    return this.scheduled_ != -1;
  };

  /**
   * Tries to schedule a new pass optionally with specified delay. If the new
   * requested pass is requested before the pending pass, the pending pass is
   * canceled. If the new pass is requested after the pending pass, the newly
   * requested pass is ignored.
   *
   * Returns {@code true} if the pass has been scheduled and {@code false} if
   * ignored.
   *
   * @param {number=} opt_delay Delay to schedule the pass. If not specified
   *   the default delay is used, falling back to 0.
   * @return {boolean}
   */

  Pass.prototype.schedule = function schedule(opt_delay) {
    var _this = this;

    var delay = opt_delay || this.defaultDelay_;
    if (this.running_ && delay < 10) {
      // If we get called recursively, wait at least 10ms for the next
      // execution.
      delay = 10;
    }
    var nextTime = _timer.timer.now() + delay;
    // Schedule anew if nothing is scheduled currently of if the new time is
    // sooner then previously requested.
    if (this.scheduled_ == -1 || nextTime - this.nextTime_ < -10) {
      if (this.scheduled_ != -1) {
        _timer.timer.cancel(this.scheduled_);
      }
      this.nextTime_ = nextTime;
      this.scheduled_ = _timer.timer.delay(function () {
        _this.scheduled_ = -1;
        _this.nextTime_ = 0;
        _this.running_ = true;
        _this.handler_();
        _this.running_ = false;
      }, delay);
      return true;
    }
    return false;
  };

  /**
   * Cancels the pending pass if any.
   */

  Pass.prototype.cancel = function cancel() {
    if (this.scheduled_ != -1) {
      _timer.timer.cancel(this.scheduled_);
      this.scheduled_ = -1;
    }
  };

  return Pass;
})();

exports.Pass = Pass;

},{"./timer":69}],43:[function(require,module,exports){
exports.__esModule = true;
exports.performanceFor = performanceFor;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _documentInfo = require('./document-info');

var _documentReady = require('./document-ready');

var _service = require('./service');

var _eventHelper = require('./event-helper');

var _resources = require('./resources');

var _timer = require('./timer');

var _viewer = require('./viewer');

/**
 * Maximum number of tick events we allow to accumulate in the performance
 * instance's queue before we start dropping those events and can no longer
 * be forwarded to the actual `tick` function when it is set.
 */
var QUEUE_LIMIT = 50;

/**
 * Added to relative relative timings so that they are never 0 which the
 * underlying library considers a non-value.
 */
var ENSURE_NON_ZERO = new Date().getTime();

exports.ENSURE_NON_ZERO = ENSURE_NON_ZERO;
/**
 * @typedef {{
 *   label: string,
 *   opt_from: (string|null|undefined),
 *   opt_value: (number|undefined)
 * }}
 */

var TickEventDef = function TickEventDef() {
  babelHelpers.classCallCheck(this, TickEventDef);
}

/**
 * Increments the value, else defaults to 0 for the given object key.
 * @param {!Object<string, (string|number|boolean|Array|Object|null)>} obj
 * @param {?string} name
 */
;

function incOrDef(obj, name) {
  if (!name) {
    return;
  }

  if (!obj[name]) {
    obj[name] = 1;
  } else {
    obj[name]++;
  }
}

/**
 * Performance holds the mechanism to call `tick` to stamp out important
 * events in the lifecycle of the AMP runtime. It can hold a small amount
 * of tick events to forward to the external `tick` function when it is set.
 */

var Performance = (function () {

  /**
   * @param {!Window} win
   */

  function Performance(win) {
    var _this = this;

    babelHelpers.classCallCheck(this, Performance);

    /** @const {!Window} */
    this.win = win;

    /** @const @private {funtion(string,?string=,number=)|undefined} */
    this.tick_ = undefined;

    /** @const @private {funtion()|undefined} */
    this.flush_ = undefined;

    /** @const @private {!Array<TickEventDef>} */
    this.events_ = [];

    /** @private {?Viewer} */
    this.viewer_ = null;

    /** @private {?Resources} */
    this.resources = null;

    /** @private @const {!Promise} */
    this.whenReadyToRetrieveResourcesPromise_ = new Promise(function (resolve) {
      _documentReady.onDocumentReady(_this.win.document, function () {
        // We need to add a delay, since this can execute earlier
        // than the onReady callback registered inside of `Resources`.
        // Should definitely think of making `getResourcesInViewport` async.
        _timer.timer.delay(resolve);
      });
    });

    // Tick window.onload event.
    _eventHelper.loadPromise(win).then(function () {
      _this.tick('ol');
    });
  }

  /**
   * @param {!Window} window
   * @return {!Performance}
   */

  /**
   * Listens to viewer and resource events.
   */

  Performance.prototype.coreServicesAvailable = function coreServicesAvailable() {
    this.viewer_ = _viewer.viewerFor(this.win);
    this.resources_ = _resources.resourcesFor(this.win);

    this.viewer_.onVisibilityChanged(this.flush.bind(this));

    this.measureUserPerceivedVisualCompletenessTime_();
    this.setDocumentInfoParams_();

    // forward all queued ticks to the viewer.
    this.flushQueuedTicks_();
    // We need to call flush right away in case the viewer is available
    // later than the amp codebase had invoked the performance services'
    // `flush` method to forward ticks.
    this.flush();
  };

  /**
   * Measure the delay the user perceives of how long it takes
   * to load the initial viewport.
   * @private
   */

  Performance.prototype.measureUserPerceivedVisualCompletenessTime_ = function measureUserPerceivedVisualCompletenessTime_() {
    var _this2 = this;

    var didStartInPrerender = !this.viewer_.hasBeenVisible();
    var docVisibleTime = didStartInPrerender ? -1 : _timer.timer.now();

    // This is only relevant if the viewer is in prerender mode.
    // (hasn't been visible yet, ever at this point)
    if (didStartInPrerender) {
      this.viewer_.whenFirstVisible().then(function () {
        docVisibleTime = _timer.timer.now();
      });
    }

    this.whenViewportLayoutComplete_().then(function () {
      if (didStartInPrerender) {
        var userPerceivedVisualCompletenesssTime = docVisibleTime > -1 ? _timer.timer.now() - docVisibleTime : 1 /* MS (magic number for prerender was complete
                                                                                                                    by the time the user opened the page) */;
        _this2.tickDelta('pc', userPerceivedVisualCompletenesssTime);
      } else {
        // If it didnt start in prerender, no need to calculate anything
        // and we just need to tick `pc`. (it will give us the relative
        // time since the viewer initialized the timer)
        _this2.tick('pc');
      }
    });
  };

  /**
   * Returns a promise that is resolved when resources in viewport
   * have been finished being laid out.
   * @return {!Promise}
   * @private
   */

  Performance.prototype.whenViewportLayoutComplete_ = function whenViewportLayoutComplete_() {
    var _this3 = this;

    return this.whenReadyToRetrieveResources_().then(function () {
      return Promise.all(_this3.resources_.getResourcesInViewport().map(function (r) {
        // We're ok with the layout failing and still reporting.
        return r.loaded()['catch'](function () {});
      }));
    });
  };

  /**
   * Returns a promise that is resolved when the document is ready and
   * after a microtask delay.
   * @return {!Promise}
   */

  Performance.prototype.whenReadyToRetrieveResources_ = function whenReadyToRetrieveResources_() {
    return this.whenReadyToRetrieveResourcesPromise_;
  };

  /**
   * Forward an object to be appended as search params to the external
   * intstrumentation library.
   * @param {!JSONObject} params
   * @private
   */

  Performance.prototype.setFlushParams_ = function setFlushParams_(params) {
    this.viewer_.setFlushParams(params);
  };

  /**
   * Ticks a timing event.
   *
   * @param {string} label The variable name as it will be reported.
   * @param {?string=} opt_from The label of a previous tick to use as a
   *    relative start for this tick.
   * @param {number=} opt_value The time to record the tick at. Optional, if
   *    not provided, use the current time. You probably want to use
   *    `tickDelta` instead.
   */

  Performance.prototype.tick = function tick(label, opt_from, opt_value) {
    opt_from = opt_from == undefined ? null : opt_from;
    opt_value = opt_value == undefined ? _timer.timer.now() : opt_value;

    if (this.viewer_ && this.viewer_.isPerformanceTrackingOn()) {
      this.viewer_.tick({
        'label': label,
        'from': opt_from,
        'value': opt_value
      });
    } else {
      this.queueTick_(label, opt_from, opt_value);
    }
  };

  /**
   * Tick a very specific value for the label. Use this method if you
   * measure the time it took to do something yourself.
   * @param {string} label The variable name as it will be reported.
   * @param {number} value The value in milliseconds that should be ticked.
   */

  Performance.prototype.tickDelta = function tickDelta(label, value) {
    // ENSURE_NON_ZERO Is added instead of non-zero, because the underlying
    // library doesn't like 0 values.
    this.tick('_' + label, undefined, ENSURE_NON_ZERO);
    this.tick(label, '_' + label, Math.round(value + ENSURE_NON_ZERO));
  };

  /**
   * Calls the "flushTicks" function on the viewer.
   */

  Performance.prototype.flush = function flush() {
    if (this.viewer_ && this.viewer_.isPerformanceTrackingOn()) {
      this.viewer_.flushTicks();
    }
  };

  /**
   * Queues the events to be flushed when tick function is set.
   *
   * @param {string} label The variable name as it will be reported.
   * @param {?string=} opt_from The label of a previous tick to use as a
   *    relative start for this tick.
   * @param {number=} opt_value The time to record the tick at. Optional, if
   *    not provided, use the current time.
   * @private
   */

  Performance.prototype.queueTick_ = function queueTick_(label, opt_from, opt_value) {
    // Start dropping the head of the queue if we've reached the limit
    // so that we don't take up too much memory in the runtime.
    if (this.events_.length >= QUEUE_LIMIT) {
      this.events_.shift();
    }

    this.events_.push({
      'label': label,
      'from': opt_from,
      'value': opt_value
    });
  };

  /**
   * Forwards all queued ticks to the viewer tick method.
   * @private
   */

  Performance.prototype.flushQueuedTicks_ = function flushQueuedTicks_() {
    var _this4 = this;

    if (!this.viewer_) {
      return;
    }

    if (!this.viewer_.isPerformanceTrackingOn()) {
      // drop all queued ticks to not leak
      this.events_.length = 0;
      return;
    }

    this.events_.forEach(function (tickEvent) {
      _this4.viewer_.tick(tickEvent);
    });
    this.events_.length = 0;
  };

  /**
   * Calls "setFlushParams_" with relevant document information.
   * @return {!Promise}
   * @private
   */

  Performance.prototype.setDocumentInfoParams_ = function setDocumentInfoParams_() {
    var _this5 = this;

    return this.whenViewportLayoutComplete_().then(function () {
      var params = Object.create(null);
      var sourceUrl = _documentInfo.documentInfoFor(_this5.win).sourceUrl.replace(/#.*/, '');
      params['sourceUrl'] = sourceUrl;

      _this5.resources_.get().forEach(function (r) {
        var el = r.element;
        var name = el.tagName.toLowerCase();
        incOrDef(params, name);
        if (name == 'amp-ad') {
          incOrDef(params, 'ad-' + el.getAttribute('type'));
        }
      });

      // this should be guaranteed to be at the very least on the last
      // visibility flush.
      _this5.setFlushParams_(params);
    });
  };

  return Performance;
})();

exports.Performance = Performance;

function performanceFor(window) {
  return _service.getService(window, 'performance', function () {
    return new Performance(window);
  });
}

;

},{"./document-info":22,"./document-ready":23,"./event-helper":28,"./resources":51,"./service":53,"./timer":69,"./viewer":75}],44:[function(require,module,exports){
exports.__esModule = true;
exports.platformFor = platformFor;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _service = require('./service');

/**
 * A helper class that provides information about device/OS/browser currently
 * running.
 */

var Platform = (function () {

  /**
   * @param {!Window} win
   */

  function Platform(win) {
    babelHelpers.classCallCheck(this, Platform);

    /** @const {!Navigator} */
    this.navigator = win.navigator;
  }

  /**
   * Whether the current platform an iOS device.
   * @return {boolean}
   */

  Platform.prototype.isIos = function isIos() {
    return (/iPhone|iPad|iPod/i.test(this.navigator.userAgent)
    );
  };

  /**
   * Whether the current browser is Safari.
   * @return {boolean}
   */

  Platform.prototype.isSafari = function isSafari() {
    return (/Safari/i.test(this.navigator.userAgent) && !this.isChrome() && !this.isEdge()
    );
  };

  /**
   * Whether the current browser is a Chrome browser.
   * @return {boolean}
   */

  Platform.prototype.isChrome = function isChrome() {
    // Also true for MS Edge :)
    return (/Chrome|CriOS/i.test(this.navigator.userAgent) && !this.isEdge()
    );
  };

  /**
   * Whether the current browser is a Chrome browser.
   * @return {boolean}
   */

  Platform.prototype.isFirefox = function isFirefox() {
    return (/Firefox/i.test(this.navigator.userAgent) && !this.isEdge()
    );
  };

  /**
   * Whether the current browser is a IE browser.
   * @return {boolean}
   */

  Platform.prototype.isIe = function isIe() {
    return (/MSIE/i.test(this.navigator.userAgent) || /IEMobile/i.test(this.navigator.userAgent)
    );
  };

  /**
   * Whether the current browser is an Edge browser.
   * @return {boolean}
   */

  Platform.prototype.isEdge = function isEdge() {
    return (/Edge/i.test(this.navigator.userAgent)
    );
  };

  /**
   * Whether the current browser is based on the WebKit engine.
   * @return {boolean}
   */

  Platform.prototype.isWebKit = function isWebKit() {
    return (/WebKit/i.test(this.navigator.userAgent) && !this.isEdge()
    );
  };

  return Platform;
})();

exports.Platform = Platform;
;

/**
 * @param {!Window} window
 * @return {!Platform}
 */

function platformFor(window) {
  return _service.getService(window, 'platform', function () {
    return new Platform(window);
  });
}

;

var platform = platformFor(window);
exports.platform = platform;

},{"./service":53}],45:[function(require,module,exports){
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

require('document-register-element/build/document-register-element.max');

var _polyfillsMathSign = require('./polyfills/math-sign');

var _polyfillsPromise = require('./polyfills/promise');

_polyfillsMathSign.install(window);
_polyfillsPromise.install(window);

},{"./polyfills/math-sign":46,"./polyfills/promise":47,"document-register-element/build/document-register-element.max":8}],46:[function(require,module,exports){
exports.__esModule = true;
exports.sign = sign;
exports.install = install;
/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Parses the number x and returns its sign. For positive x returns 1, for
 * negative, -1. For 0 and -0, returns 0 and -0 respectively. For any number
 * that parses to NaN, returns NaN.
 *
 * @param {number} x
 * @returns {number}
 */

function sign(x) {
  x = Number(x);

  // If x is 0, -0, or NaN, return it.
  if (!x) {
    return x;
  }

  return x > 0 ? 1 : -1;
}

;

/**
 * Sets the Math.sign polyfill if it does not exist.
 * @param {!Window} win
 */

function install(win) {
  if (!win.Math.sign) {
    win.Math.sign = sign;
  }
}

},{}],47:[function(require,module,exports){
exports.__esModule = true;
exports.install = install;
/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _promisePjsPromise = require('promise-pjs/promise');

/**
 * Sets the Promise polyfill if it does not exist.
 * @param {!Window} win
 */

function install(win) {
  if (!win.Promise) {
    win.Promise = _promisePjsPromise.Promise;
  }
}

},{"promise-pjs/promise":9}],48:[function(require,module,exports){
exports.__esModule = true;
exports.preconnectFor = preconnectFor;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Provides a services to preconnect to a url to warm up the
 * connection before the real request can be made.
 */

var _service = require('./service');

var _url2 = require('./url');

var _timer = require('./timer');

var _platform = require('./platform');

var ACTIVE_CONNECTION_TIMEOUT_MS = 180 * 1000;
var PRECONNECT_TIMEOUT_MS = 10 * 1000;

var Preconnect = (function () {

  /**
   * @param {!Window} win
   */

  function Preconnect(win) {
    babelHelpers.classCallCheck(this, Preconnect);

    /** @private @const {!Element} */
    this.head_ = win.document.head;
    /**
     * Origin we've preconnected to and when that connection
     * expires as a timestamp in MS.
     * @private @const {!Object<string, number>}
     */
    this.origins_ = {};
    /**
     * Urls we've prefetched.
     * @private @const {!Object<string, boolean>}
     */
    this.urls_ = {};
    /** @private @const {!Platform}  */
    this.platform_ = _platform.platformFor(win);
    // Mark current origin as preconnected.
    this.origins_[_url2.parseUrl(win.location.href).origin] = true;
  }

  /**
   * @param {!Window} window
   * @return {!Preconnect}
   */

  /**
   * Preconnects to a URL. Always also does a dns-prefetch because
   * browser support for that is better.
   * @param {string} url
   * @param {boolean=} opt_alsoConnecting Set this flag if you also just
   *    did or are about to connect to this host. This is for the case
   *    where preconnect is issued immediate before or after actual connect
   *    and preconnect is used to flatten a deep HTTP request chain.
   *    E.g. when you preconnect to a host that an embed will connect to
   *    when it is more fully rendered, you already know that the connection
   *    will be used very soon.
   */

  Preconnect.prototype.url = function url(_url, opt_alsoConnecting) {
    if (!this.isInterestingUrl_(_url)) {
      return;
    }
    var origin = _url2.parseUrl(_url).origin;
    var now = _timer.timer.now();
    var lastPreconnectTimeout = this.origins_[origin];
    if (lastPreconnectTimeout && now < lastPreconnectTimeout) {
      if (opt_alsoConnecting) {
        this.origins_[origin] = now + ACTIVE_CONNECTION_TIMEOUT_MS;
      }
      return;
    }
    // If we are about to use the connection, don't re-preconnect for
    // 180 seconds.
    var timeout = opt_alsoConnecting ? ACTIVE_CONNECTION_TIMEOUT_MS : PRECONNECT_TIMEOUT_MS;
    this.origins_[origin] = now + timeout;
    var dns = document.createElement('link');
    dns.setAttribute('rel', 'dns-prefetch');
    dns.setAttribute('href', origin);
    var preconnect = document.createElement('link');
    preconnect.setAttribute('rel', 'preconnect');
    preconnect.setAttribute('href', origin);
    this.head_.appendChild(dns);
    this.head_.appendChild(preconnect);

    // Remove the tags eventually to free up memory.
    _timer.timer.delay(function () {
      if (dns.parentNode) {
        dns.parentNode.removeChild(dns);
      }
      if (preconnect.parentNode) {
        preconnect.parentNode.removeChild(preconnect);
      }
    }, 10000);

    this.preconnectPolyfill_(origin);
  };

  /**
   * Asks the browser to prefetch a URL. Always also does a preconnect
   * because browser support for that is better.
   * @param {string} url
   */

  Preconnect.prototype.prefetch = function prefetch(url) {
    if (!this.isInterestingUrl_(url)) {
      return;
    }
    if (this.urls_[url]) {
      return;
    }
    this.urls_[url] = true;
    this.url(url, /* opt_alsoConnecting */true);
    var prefetch = document.createElement('link');
    prefetch.setAttribute('rel', 'prefetch');
    prefetch.setAttribute('href', url);
    this.head_.appendChild(prefetch);
    // As opposed to preconnect we do not clean this tag up, because there is
    // no expectation as to it having an immediate effect.
  };

  Preconnect.prototype.isInterestingUrl_ = function isInterestingUrl_(url) {
    if (url.indexOf('https:') == 0 || url.indexOf('http:') == 0) {
      return true;
    }
    return false;
  };

  /**
   * Safari does not support preconnecting, but due to its significant
   * performance benefits we implement this crude polyfill.
   *
   * We make an image connection to a "well-known" file on the origin adding
   * a random query string to bust the cache (no caching because we do want to
   * actually open the connection).
   *
   * This should get us an open SSL connection to these hosts and significantly
   * speed up the next connections.
   *
   * The actual URL is expected to 404. If you see errors for
   * amp_preconnect_polyfill in your DevTools console or server log:
   * This is expected and fine to leave as is. Its fine to send a non 404
   * response, but please make it small :)
   */

  Preconnect.prototype.preconnectPolyfill_ = function preconnectPolyfill_(origin) {
    // Unfortunately there is no way to feature detect whether preconnect is
    // supported, so we do this only in Safari, which is the most important
    // browser without support for it. This needs to be removed should it
    // ever add support.
    if (!this.platform_.isSafari()) {
      return;
    }
    // Don't attempt to preconnect for ACTIVE_CONNECTION_TIMEOUT_MS since
    // we effectively create an active connection.
    // TODO(@cramforce): Confirm actual http2 timeout in Safari.
    this.origins_[origin] = _timer.timer.now() + ACTIVE_CONNECTION_TIMEOUT_MS;
    var url = origin + '/amp_preconnect_polyfill_404_or_other_error_expected.' + '_Do_not_worry_about_it?' + Math.random();
    // We use an XHR without withCredentials(true), so we do not send cookies
    // to the host and the host cannot set cookies.
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', url, true);
    xhr.send();
  };

  return Preconnect;
})();

function preconnectFor(window) {
  return _service.getService(window, 'preconnect', function () {
    return new Preconnect(window);
  });
}

;

},{"./platform":44,"./service":53,"./timer":69,"./url":72}],49:[function(require,module,exports){
exports.__esModule = true;
exports.installPullToRefreshBlocker = installPullToRefreshBlocker;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _platform = require('./platform');

var _viewer = require('./viewer');

var _viewport = require('./viewport');

/**
 * Installs "pull-to-refresh" (P2R) blocker if viewer has requested. P2R can
 * be very disruptive for different viewer scenarios. This is currently only
 * done on Chrome (both Android and iOS).
 * @param {!Window} win
 */

function installPullToRefreshBlocker(win) {
  // Only do when requested and don't even try it on Safari!
  if (_viewer.viewerFor(win).getParam('p2r') == '0' && _platform.platformFor(win).isChrome()) {
    new PullToRefreshBlocker(win.document, _viewport.viewportFor(win));
  }
}

/**
 * Visible for testing only.
 * @private
 */

var PullToRefreshBlocker = (function () {
  /**
   * @param {!Document} doc
   * @param {!Viewport} viewport
   */

  function PullToRefreshBlocker(doc, viewport) {
    babelHelpers.classCallCheck(this, PullToRefreshBlocker);

    /** @private {!Document} */
    this.doc_ = doc;

    /** @private {!Viewport} */
    this.viewport_ = viewport;

    /** @private {boolean} */
    this.tracking_ = false;

    /** @private {number} */
    this.startPos_ = 0;

    /** @private {!Function} */
    this.boundTouchStart_ = this.onTouchStart_.bind(this);
    /** @private {!Function} */
    this.boundTouchMove_ = this.onTouchMove_.bind(this);
    /** @private {!Function} */
    this.boundTouchEnd_ = this.onTouchEnd_.bind(this);
    /** @private {!Function} */
    this.boundTouchCancel_ = this.onTouchCancel_.bind(this);

    this.doc_.addEventListener('touchstart', this.boundTouchStart_, true);
  }

  /** */

  PullToRefreshBlocker.prototype.cleanup = function cleanup() {
    this.stopTracking_();
    this.doc_.removeEventListener('touchstart', this.boundTouchStart_, true);
  };

  /**
   * @param {!Event} event
   * @private
   */

  PullToRefreshBlocker.prototype.onTouchStart_ = function onTouchStart_(event) {
    // P2R won't trigger when document is scrolled. Also can ignore when we are
    // already tracking this touch and for non-single-touch events.
    if (this.tracking_ || !(event.touches && event.touches.length == 1) || this.viewport_.getTop() > 0) {
      return;
    }

    this.startTracking_(event.touches[0].clientY);
  };

  /**
   * @param {number} startPos
   * @private
   */

  PullToRefreshBlocker.prototype.startTracking_ = function startTracking_(startPos) {
    this.tracking_ = true;
    this.startPos_ = startPos;
    this.doc_.addEventListener('touchmove', this.boundTouchMove_, true);
    this.doc_.addEventListener('touchend', this.boundTouchEnd_, true);
    this.doc_.addEventListener('touchcancel', this.boundTouchCancel_, true);
  };

  /** @private */

  PullToRefreshBlocker.prototype.stopTracking_ = function stopTracking_() {
    this.tracking_ = false;
    this.startPos_ = 0;
    this.doc_.removeEventListener('touchmove', this.boundTouchMove_, true);
    this.doc_.removeEventListener('touchend', this.boundTouchEnd_, true);
    this.doc_.removeEventListener('touchcancel', this.boundTouchCancel_, true);
  };

  /**
   * @param {!Event} event
   * @private
   */

  PullToRefreshBlocker.prototype.onTouchMove_ = function onTouchMove_(event) {
    if (!this.tracking_) {
      return;
    }

    var dy = event.touches[0].clientY - this.startPos_;

    // Immediately cancel the P2R if dragging down.
    if (dy > 0) {
      event.preventDefault();
    }

    // Stop tracking if there was any motion at all.
    if (dy != 0) {
      this.stopTracking_();
    }
  };

  /**
   * @param {!Event} unusedEvent
   * @private
   */

  PullToRefreshBlocker.prototype.onTouchEnd_ = function onTouchEnd_(unusedEvent) {
    this.stopTracking_();
  };

  /**
   * @param {!Event} unusedEvent
   * @private
   */

  PullToRefreshBlocker.prototype.onTouchCancel_ = function onTouchCancel_(unusedEvent) {
    this.stopTracking_();
  };

  return PullToRefreshBlocker;
})();

exports.PullToRefreshBlocker = PullToRefreshBlocker;

},{"./platform":44,"./viewer":75,"./viewport":76}],50:[function(require,module,exports){
exports.__esModule = true;
exports.waitForExtensions = waitForExtensions;
exports.includedExtensions = includedExtensions;
/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _service = require('./service');

var _timer = require('./timer');

/**
 * List of extensions that, if they're included on the page, must be loaded
 * before the page should be shown to users.
 * Do not add an extension unless absolutely necessary.
 * @const {!Array<string>}
 */
var EXTENSIONS = ['amp-accordion', 'amp-dynamic-css-classes'];

/**
 * Maximum milliseconds to wait for all extensions to load before erroring.
 * @const
 */
var LOAD_TIMEOUT = 3000;

/**
 * Detects any extensions that are were included on the page that need to
 * delay unhiding the body (to avoid Flash of Unstyled Content), and returns
 * a promise that will resolve when they have loaded or reject after a timeout.
 * @param {!Window} win
 * @return {!Promise|undefined}
 */

function waitForExtensions(win) {
  var extensions = includedExtensions(win);
  var promises = extensions.map(function (extension) {
    return _timer.timer.timeoutPromise(LOAD_TIMEOUT, _service.getServicePromise(win, extension), 'Render timeout waiting for ' + extension + ' to load.');
  });
  // Only return a waiting promise if there are promises to wait for.
  return promises.length ? Promise.all(promises) : undefined;
}

/**
 * Detects which, if any, render-delaying extensions are included on the page.
 * @param {!Window} win
 * @return {!Array<string>}
 */

function includedExtensions(win) {
  var document = win.document;

  return EXTENSIONS.filter(function (extension) {
    return document.querySelector('[custom-element="' + extension + '"]');
  });
}

},{"./service":53,"./timer":69}],51:[function(require,module,exports){
exports.__esModule = true;
exports.resourcesFor = resourcesFor;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _service = require('./service');

/**
 * @param {!Window} window
 * @return {!Resources}
 */

function resourcesFor(window) {
  return _service.getService(window, 'resources');
}

;

},{"./service":53}],52:[function(require,module,exports){
exports.__esModule = true;
exports.adopt = adopt;
exports.registerForUnitTest = registerForUnitTest;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _baseElement = require('./base-element');

var _template = require('./template');

var _asserts = require('./asserts');

var _mode = require('./mode');

var _styles = require('./styles');

var _ampCoreService = require('./amp-core-service');

var _experiments = require('./experiments');

var _customElement = require('./custom-element');

var _extendedElement = require('./extended-element');

var _resources = require('./resources');

var _timer = require('./timer');

var _viewer = require('./viewer');

var _viewport = require('./viewport');

var _service = require('./service');

/** @type {!Array} */
var elementsForTesting = [];

/**
 * Applies the runtime to a given global scope.
 * Multi frame support is currently incomplete.
 * @param {!Window} global Global scope to adopt.
 */

function adopt(global) {
  // Tests can adopt the same window twice. sigh.
  if (global.AMP_TAG) {
    return;
  }
  global.AMP_TAG = true;
  // If there is already a global AMP object we assume it is an array
  // of functions
  var preregisteredElements = global.AMP || [];

  global.AMP = {
    win: global
  };

  /**
   * Registers an extended element and installs its styles.
   * @param {string} name
   * @param {!Function} implementationClass
   * @param {string=} opt_css Optional CSS to install with the component. Use
   *     the special variable $CSS$ in your code. It will be replaced with the
   *     CSS file associated with the element.
   */
  global.AMP.registerElement = function (name, implementationClass, opt_css) {
    var register = function () {
      _extendedElement.registerExtendedElement(global, name, implementationClass);
      elementsForTesting.push({
        name: name,
        implementationClass: implementationClass
      });
      // Resolve this extension's Service Promise.
      _service.getService(global, name, function () {
        // All services need to resolve to an object.
        return {};
      });
    };
    if (opt_css) {
      _styles.installStyles(global.document, opt_css, register, false, name);
    } else {
      register();
    }
  };

  /** @const */
  global.AMP.BaseElement = _baseElement.BaseElement;

  /** @const */
  global.AMP.BaseTemplate = _template.BaseTemplate;

  /**
   * Registers an extended template.
   * @param {string} name
   * @param {!Function} implementationClass
   */
  global.AMP.registerTemplate = function (name, implementationClass) {
    _template.registerExtendedTemplate(global, name, implementationClass);
  };

  /** @const */
  global.AMP.assert = _asserts.assert;

  _ampCoreService.installCoreServices(global);
  var viewer = _viewer.viewerFor(global);

  /** @const */
  global.AMP.viewer = viewer;

  if (_mode.getMode().development) {
    /** @const */
    global.AMP.toggleRuntime = viewer.toggleRuntime.bind(viewer);
    /** @const */
    global.AMP.resources = _resources.resourcesFor(global);
  }

  // Experiments.
  /** @const */
  global.AMP.isExperimentOn = _experiments.isExperimentOn.bind(null, global);
  /** @const */
  global.AMP.toggleExperiment = _experiments.toggleExperiment.bind(null, global);

  var viewport = _viewport.viewportFor(global);

  /** @const */
  global.AMP.viewport = {};
  global.AMP.viewport.getScrollLeft = viewport.getScrollLeft.bind(viewport);
  global.AMP.viewport.getScrollWidth = viewport.getScrollWidth.bind(viewport);
  global.AMP.viewport.getWidth = viewport.getWidth.bind(viewport);

  /**
   * Registers a new custom element.
   * @param {GlobalAmp} fn
   */
  global.AMP.push = function (fn) {
    fn(global.AMP);
  };

  /**
   * Sets the function to forward tick events to.
   * @param {funtion(string,?string=,number=)} fn
   * @param {function()=} opt_flush
   * @deprecated
   * @export
   */
  global.AMP.setTickFunction = function () {};

  // Execute asynchronously scheduled elements.
  for (var i = 0; i < preregisteredElements.length; i++) {
    var fn = preregisteredElements[i];
    try {
      fn(global.AMP);
    } catch (e) {
      // Throw errors outside of loop in its own micro task to
      // avoid on error stopping other extensions from loading.
      _timer.timer.delay(function () {
        throw e;
      }, 1);
    }
  }
  // Make sure we empty the array of preregistered extensions.
  // Technically this is only needed for testing, as everything should
  // go out of scope here, but just making sure.
  preregisteredElements.length = 0;
}

/**
 * Registers all extended elements as normal elements in the given
 * window.
 * Make sure to call `adopt(window)` in your unit test as well and
 * then call this on the generated iframe.
 * @param {!Window} win
 */

function registerForUnitTest(win) {
  for (var i = 0; i < elementsForTesting.length; i++) {
    var element = elementsForTesting[i];
    _customElement.registerElement(win, element.name, element.implementationClass);
  }
}

},{"./amp-core-service":14,"./asserts":16,"./base-element":17,"./custom-element":20,"./experiments":29,"./extended-element":31,"./mode":40,"./resources":51,"./service":53,"./styles":67,"./template":68,"./timer":69,"./viewer":75,"./viewport":76}],53:[function(require,module,exports){
exports.__esModule = true;
exports.getService = getService;
exports.getServicePromise = getServicePromise;
exports.getServicePromiseOrNull = getServicePromiseOrNull;
exports.resetServiceForTesting = resetServiceForTesting;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Requires polyfills in immediate side effect.

require('./polyfills');

var _asserts = require('./asserts');

/**
 * Holds info about a service.
 * - obj: Actual service implementation when available.
 * - promise: Promise for the obj.
 * - resolve: Function to resolve the promise with the object.
 * @typedef {{
 *   obj: (?Object),
 *   promise: (?Promise|undefined),
 *   resolve: (?function(!Object)|undefined),
 * }}
 */
var ServiceHolderDef = undefined;

/**
 * Returns a service for the given id and window (a per-window singleton).
 * If the service is not yet available the factory function is invoked and
 * expected to return the service.
 * Users should typically wrap this as a special purpose function (e.g.
 * viewportFor(win)) for type safety and because the factory should not be
 * passed around.
 * @param {!Window} win
 * @param {string} id of the service.
 * @param {function(!Window):!Object=} opt_factory Should create the service
 *     if it does not exist yet. If the factory is not given, it is an error
 *     if the service does not exist yet.
 * @return {*}
 */

function getService(win, id, opt_factory) {
  var services = getServices(win);
  var s = services[id];
  if (!s) {
    s = services[id] = {
      obj: null,
      promise: null,
      resolve: null
    };
  }

  if (!s.obj) {
    _asserts.assert(opt_factory, 'Factory not given and service missing %s', id);
    s.obj = opt_factory(win);
    if (!s.promise) {
      s.promise = Promise.resolve(s.obj);
    }
    // The service may have been requested already, in which case we have a
    // pending promise we need to fulfill.
    if (s.resolve) {
      s.resolve(s.obj);
    }
  }
  return s.obj;
}

/**
 * Returns a promise for a service for the given id and window. Also expects
 * an element that has the actual implementation. The promise resolves when
 * the implementation loaded.
 * Users should typically wrap this as a special purpose function (e.g.
 * viewportFor(win)) for type safety and because the factory should not be
 * passed around.
 * @param {!Window} win
 * @param {string} id of the service.
 * @return {!Promise<*>}
 */

function getServicePromise(win, id) {
  var services = getServices(win);
  var s = services[id];
  if (s) {
    return s.promise;
  }

  // TODO(@cramforce): Add a check that if the element is eventually registered
  // that the service is actually provided and this promise resolves.
  var resolve = undefined;
  var p = new Promise(function (r) {
    resolve = r;
  });
  services[id] = {
    obj: null,
    promise: p,
    resolve: resolve
  };

  return p;
}

/**
 * Like getServicePromise but returns null if the service was never registered.
 * @param {!Window} win
 * @param {string} id of the service.
 * @return {?Promise<*>}
 */

function getServicePromiseOrNull(win, id) {
  var services = getServices(win);
  if (services[id]) {
    return services[id].promise;
  }
  return null;
}

/**
 * Returns the object that holds the services registered in a window.
 * @param {!Window} win
 * @return {!Object<string,!ServiceHolderDef>}
 */
function getServices(win) {
  var services = win.services;
  if (!services) {
    services = win.services = {};
  }
  return services;
}

/**
 * Resets a single service, so it gets recreated on next getService invocation.
 * @param {!Window} win
 * @param {string} id of the service.
 */

function resetServiceForTesting(win, id) {
  if (win.services) {
    win.services[id] = null;
  }
}

},{"./asserts":16,"./polyfills":45}],54:[function(require,module,exports){
exports.__esModule = true;
exports.parseActionMap = parseActionMap;
exports.installActionService = installActionService;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _asserts = require('../asserts');

var _service = require('../service');

var _log = require('../log');

var _timer = require('../timer');

var _vsync = require('../vsync');

var _types = require('../types');

/** @const {string} */
var TAG_ = 'Action';

/** @const {string} */
var ACTION_MAP_ = '__AMP_ACTION_MAP__' + Math.random();

/** @const {string} */
var ACTION_QUEUE_ = '__AMP_ACTION_QUEUE__';

/** @const {string} */
var DEFAULT_METHOD_ = 'activate';

/**
 * @typedef {{
 *   event: string,
 *   target: string,
 *   method: string,
 *   args: ?JSONObject,
 *   str: string
 * }}
 */
var ActionInfoDef = undefined;

/**
 * The structure that contains all details of the action method invocation.
 * @struct
 * @const
 * TODO(dvoytenko): add action arguments here as well.
 */

var ActionInvocation =
/**
 * @param {!Element} target
 * @param {string} method
 * @param {?JSONObject} args
 * @param {?Element} source
 * @param {?Event} event
 */
function ActionInvocation(target, method, args, source, event) {
  babelHelpers.classCallCheck(this, ActionInvocation);

  /** @const {!Element} */
  this.target = target;
  /** @const {string} */
  this.method = method;
  /** @const {?JSONObject} */
  this.args = args;
  /** @const {?Element} */
  this.source = source;
  /** @const {?Event} */
  this.event = event;
}

/**
 * TODO(dvoytenko): consider splitting this class into two:
 * 1. A class that has a method "trigger(element, eventType, data)" and
 *    simply can search target in DOM and trigger methods on it.
 * 2. A class that configures event recognizers and rules and then
 *    simply calls action.trigger.
 */
;

var ActionService = (function () {

  /**
   * @param {!Window} win
   */

  function ActionService(win) {
    babelHelpers.classCallCheck(this, ActionService);

    /** @const {!Window} */
    this.win = win;

    /** @const @private {!Object<string, function(!ActionInvocation)>} */
    this.globalMethodHandlers_ = {};

    /** @param {!Vsync} */
    this.vsync_ = _vsync.vsyncFor(this.win);

    // Add core events.
    this.addEvent('tap');
  }

  /**
   * @param {string} s
   * @param {!Element} context
   * @return {?Object<string, ActionInfoDef>}
   * @private Visible for testing only.
   */

  /**
   * @param {string} name
   * TODO(dvoytenko): switch to a system where the event recognizers are
   * registered with Action instead, e.g. "doubletap", "tap to zoom".
   */

  ActionService.prototype.addEvent = function addEvent(name) {
    var _this = this;

    if (name == 'tap') {
      // TODO(dvoytenko): if needed, also configure touch-based tap, e.g. for
      // fast-click.
      this.win.document.addEventListener('click', function (event) {
        if (!event.defaultPrevented) {
          _this.trigger(event.target, 'tap', event);
        }
      });
    }
  };

  /**
   * Registers the action handler for a common method.
   * @param {string} name
   * @param {function(!ActionInvocation)} handler
   */

  ActionService.prototype.addGlobalMethodHandler = function addGlobalMethodHandler(name, handler) {
    this.globalMethodHandlers_[name] = handler;
  };

  /**
   * Triggers the specified event on the target element.
   * @param {!Element} target
   * @param {string} eventType
   * @param {?Event} event
   */

  ActionService.prototype.trigger = function trigger(target, eventType, event) {
    this.action_(target, eventType, event);
  };

  /**
   * Triggers execution of the method on a target/method.
   * @param {!Element} target
   * @param {string} method
   * @param {?JSONObject} args
   * @param {?Element} source
   * @param {?Event} event
   */

  ActionService.prototype.execute = function execute(target, method, args, source, event) {
    this.invoke_(target, method, args, source, event, null);
  };

  /**
   * Installs action handler for the specified element.
   * @param {!Element} target
   * @param {function(!ActionInvocation)} handler
   */

  ActionService.prototype.installActionHandler = function installActionHandler(target, handler) {
    var debugid = target.tagName + '#' + target.id;
    _asserts.assert(target.id && target.id.substring(0, 4) == 'amp-', 'AMP element is expected: %s', debugid);

    var currentQueue = target[ACTION_QUEUE_];
    if (currentQueue) {
      _asserts.assert(_types.isArray(currentQueue), 'Expected queue to be an array: %s', debugid);
    }

    // Override queue with the handler.
    target[ACTION_QUEUE_] = { 'push': handler };

    // Dequeue the current queue.
    if (currentQueue) {
      _timer.timer.delay(function () {
        // TODO(dvoytenko, #1260): dedupe actions.
        currentQueue.forEach(function (invocation) {
          try {
            handler(invocation);
          } catch (e) {
            _log.log.error(TAG_, 'Action execution failed:', invocation, e);
          }
        });
      }, 1);
    }
  };

  /**
   * @param {!Element} source
   * @param {string} actionEventType
   * @param {!Event} event
   * @private
   */

  ActionService.prototype.action_ = function action_(source, actionEventType, event) {
    var action = this.findAction_(source, actionEventType);
    if (!action) {
      // TODO(dvoytenko): implement default (catch-all) actions.
      return;
    }

    var target = document.getElementById(action.actionInfo.target);
    if (!target) {
      this.actionInfoError_('target not found', action.actionInfo, target);
      return;
    }

    this.invoke_(target, action.actionInfo.method, action.actionInfo.args, action.node, event, action.actionInfo);
  };

  /**
   * The errors that are a result of action definition.
   * @param {string} s
   * @param {?ActionInfo} actionInfo
   * @param {?Element} target
   * @private
   */

  ActionService.prototype.actionInfoError_ = function actionInfoError_(s, actionInfo, target) {
    // Method not found "activate" on ' + target
    _asserts.assert(false, 'Action Error: ' + s + (actionInfo ? ' in [' + actionInfo.str + ']' : '') + (target ? ' on [' + target + ']' : ''));
  };

  /**
   * @param {!Element} target
   * @param {string} method
   * @param {?JSONObject} args
   * @param {?Element} source
   * @param {?Event} event
   * @param {?ActionInfo} actionInfo
   */

  ActionService.prototype.invoke_ = function invoke_(target, method, args, source, event, actionInfo) {
    var invocation = new ActionInvocation(target, method, args, source, event);

    // Try a global method handler first.
    if (this.globalMethodHandlers_[invocation.method]) {
      this.globalMethodHandlers_[invocation.method](invocation);
      return;
    }

    // AMP elements.
    if (target.tagName.toLowerCase().substring(0, 4) == 'amp-') {
      if (target.enqueAction) {
        target.enqueAction(invocation);
      } else {
        this.actionInfoError_('Unrecognized AMP element "' + target.tagName.toLowerCase() + '". ' + 'Did you forget to include it via <script custom-element>?', actionInfo, target);
      }
      return;
    }

    // Special elements with AMP ID.
    if (target.id && target.id.substring(0, 4) == 'amp-') {
      if (!target[ACTION_QUEUE_]) {
        target[ACTION_QUEUE_] = [];
      }
      target[ACTION_QUEUE_].push(invocation);
      return;
    }

    // Unsupported target.
    this.actionInfoError_('Target must be an AMP element or have an AMP ID', actionInfo, target);
  };

  /**
   * @param {!Element} target
   * @param {string} actionEventType
   * @return {?{node: !Element, actionInfo: !ActionInfoDef}}
   */

  ActionService.prototype.findAction_ = function findAction_(target, actionEventType) {
    // Go from target up the DOM tree and find the applicable action.
    var n = target;
    var actionInfo = null;
    while (n) {
      actionInfo = this.matchActionInfo_(n, actionEventType);
      if (actionInfo) {
        return { node: n, actionInfo: actionInfo };
      }
      n = n.parentElement;
    }
    return null;
  };

  /**
   * @param {!Element} node
   * @param {string} actionEventType
   * @return {?ActionInfoDef}
   */

  ActionService.prototype.matchActionInfo_ = function matchActionInfo_(node, actionEventType) {
    var actionMap = this.getActionMap_(node);
    if (!actionMap) {
      return null;
    }
    return actionMap[actionEventType] || null;
  };

  /**
   * @param {!Element} node
   * @return {?Object<string, ActionInfoDef>}
   */

  ActionService.prototype.getActionMap_ = function getActionMap_(node) {
    var actionMap = node[ACTION_MAP_];
    if (actionMap === undefined) {
      actionMap = null;
      if (node.hasAttribute('on')) {
        actionMap = parseActionMap(node.getAttribute('on'), node);
      }
      node[ACTION_MAP_] = actionMap;
    }
    return actionMap;
  };

  return ActionService;
})();

exports.ActionService = ActionService;

function parseActionMap(s, context) {
  var assertAction = assertActionForParser.bind(null, s, context);
  var assertToken = assertTokenForParser.bind(null, s, context);

  var actionMap = null;

  var toks = new ParserTokenizer(s);
  var tok = undefined;
  var peek = undefined;
  do {
    tok = toks.next();
    if (tok.type == TokenType.EOF || tok.type == TokenType.SEPARATOR && tok.value == ';') {
      // Expected, ignore.
    } else if (tok.type == TokenType.LITERAL) {

        // Format: event:target.method

        // Event: "event:"
        var _event = tok.value;

        // Target: ":target."
        assertToken(toks.next(), TokenType.SEPARATOR, ':');
        var target = assertToken(toks.next(), TokenType.LITERAL).value;

        // Method: ".method". Method is optional.
        var method = DEFAULT_METHOD_;
        var args = null;
        peek = toks.peek();
        if (peek.type == TokenType.SEPARATOR && peek.value == '.') {
          toks.next(); // Skip '.'
          method = assertToken(toks.next(), TokenType.LITERAL).value || method;

          // Optionally, there may be arguments: "(key = value, key = value)".
          peek = toks.peek();
          if (peek.type == TokenType.SEPARATOR && peek.value == '(') {
            toks.next(); // Skip '('.
            do {
              tok = toks.next();

              // Format: key = value, ....
              if (tok.type == TokenType.SEPARATOR && (tok.value == ',' || tok.value == ')')) {
                // Expected: ignore.
              } else if (tok.type == TokenType.LITERAL) {
                  // Key: "key = "
                  var argKey = tok.value;
                  assertToken(toks.next(), TokenType.SEPARATOR, '=');
                  var argValue = assertToken(toks.next( /* convertValue */true), TokenType.LITERAL).value;
                  if (!args) {
                    args = Object.create(null);
                  }
                  args[argKey] = argValue;
                  peek = toks.peek();
                  assertAction(peek.type == TokenType.SEPARATOR && (peek.value == ',' || peek.value == ')'), 'Expected either [,] or [)]');
                } else {
                  // Unexpected token.
                  assertAction(false, '; unexpected token [' + (tok.value || '') + ']');
                }
            } while (!(tok.type == TokenType.SEPARATOR && tok.value == ')'));
          }
        }

        var action = {
          event: _event,
          target: target,
          method: method,
          args: args && window.AMP_TEST && Object.freeze ? Object.freeze(args) : args,
          str: s
        };
        if (!actionMap) {
          actionMap = {};
        }
        actionMap[action.event] = action;
      } else {
        // Unexpected token.
        assertAction(false, '; unexpected token [' + (tok.value || '') + ']');
      }
  } while (tok.type != TokenType.EOF);

  return actionMap;
}

/**
 * @param {string} s
 * @param {!Element} context
 * @param {?T} condition
 * @param {string=} opt_message
 * @return T
 * @template T
 * @private
 */
function assertActionForParser(s, context, condition, opt_message) {
  return _asserts.assert(condition, 'Invalid action definition in %s: [%s] %s', context, s, opt_message || '');
}

/**
 * @param {string} s
 * @param {!Element} context
 * @param {!{type: string, value: *}} token
 * @param {string} token
 * @param {*=} opt_value
 * @return {!{type: string, value: *}}
 * @private
 */
function assertTokenForParser(s, context, tok, type, opt_value) {
  if (opt_value !== undefined) {
    assertActionForParser(s, context, tok.type == type && tok.value == opt_value, '; expected [' + opt_value + ']');
  } else {
    assertActionForParser(s, context, tok.type == type);
  }
  return tok;
}

/**
 * @enum {number}
 */
var TokenType = {
  INVALID: 0,
  EOF: 1,
  SEPARATOR: 2,
  LITERAL: 3
};

/** @private @const {string} */
var WHITESPACE_SET = ' \t\n\r\f\v\u00A0\u2028\u2029';

/** @private @const {string} */
var SEPARATOR_SET = ';:.()=,|!';

/** @private @const {string} */
var STRING_SET = '"\'';

/** @private @const {string} */
var SPECIAL_SET = WHITESPACE_SET + SEPARATOR_SET + STRING_SET;

/** @private */

var ParserTokenizer = (function () {
  /**
   * @param {string} str
   */

  function ParserTokenizer(str) {
    babelHelpers.classCallCheck(this, ParserTokenizer);

    /** @private @const {string} */
    this.str_ = str;

    /** @private {number} */
    this.index_ = -1;
  }

  /**
   * Tests whether a chacter is a number.
   * @param {string} c
   * @return {boolean}
   */

  /**
   * Returns the next token and advances the position.
   * @param {boolean=} opt_convertValues
   * @return {!{type: TokenType, value: *}}
   */

  ParserTokenizer.prototype.next = function next(opt_convertValues) {
    var tok = this.next_(opt_convertValues || false);
    this.index_ = tok.index;
    return tok;
  };

  /**
   * Returns the next token but keeps the current position.
   * @param {boolean=} opt_convertValues
   * @return {!{type: TokenType, value: *}}
   */

  ParserTokenizer.prototype.peek = function peek(opt_convertValues) {
    return this.next_(opt_convertValues || false);
  };

  /**
   * @param {boolean} convertValues
   * @return {!{type: TokenType, value: *, index: number}}
   */

  ParserTokenizer.prototype.next_ = function next_(convertValues) {
    var newIndex = this.index_ + 1;
    if (newIndex >= this.str_.length) {
      return { type: TokenType.EOF, index: this.index_ };
    }

    var c = this.str_.charAt(newIndex);

    // Whitespace: standard set.
    if (WHITESPACE_SET.indexOf(c) != -1) {
      newIndex++;
      for (; newIndex < this.str_.length; newIndex++) {
        if (WHITESPACE_SET.indexOf(this.str_.charAt(newIndex)) == -1) {
          break;
        }
      }
      if (newIndex >= this.str_.length) {
        return { type: TokenType.EOF, index: newIndex };
      }
      c = this.str_.charAt(newIndex);
    }

    // A numeric. Notice that it steals the `.` from separators.
    if (convertValues && (isNum(c) || c == '.' && newIndex + 1 < this.str_.length && isNum(this.str_[newIndex + 1]))) {
      var hasFraction = c == '.';
      var _end = newIndex + 1;
      for (; _end < this.str_.length; _end++) {
        var c2 = this.str_.charAt(_end);
        if (c2 == '.') {
          hasFraction = true;
          continue;
        }
        if (!isNum(c2)) {
          break;
        }
      }
      var _s = this.str_.substring(newIndex, _end);
      var _value = hasFraction ? parseFloat(_s) : parseInt(_s, 10);
      newIndex = _end - 1;
      return { type: TokenType.LITERAL, value: _value, index: newIndex };
    }

    // Different separators.
    if (SEPARATOR_SET.indexOf(c) != -1) {
      return { type: TokenType.SEPARATOR, value: c, index: newIndex };
    }

    // String literal.
    if (STRING_SET.indexOf(c) != -1) {
      var _end2 = -1;
      for (var i = newIndex + 1; i < this.str_.length; i++) {
        if (this.str_.charAt(i) == c) {
          _end2 = i;
          break;
        }
      }
      if (_end2 == -1) {
        return { type: TokenType.INVALID, index: newIndex };
      }
      var _value2 = this.str_.substring(newIndex + 1, _end2);
      newIndex = _end2;
      return { type: TokenType.LITERAL, value: _value2, index: newIndex };
    }

    // A key
    var end = newIndex + 1;
    for (; end < this.str_.length; end++) {
      if (SPECIAL_SET.indexOf(this.str_.charAt(end)) != -1) {
        break;
      }
    }
    var s = this.str_.substring(newIndex, end);
    var value = convertValues && (s == 'true' || s == 'false') ? s == 'true' : s;
    newIndex = end - 1;
    return { type: TokenType.LITERAL, value: value, index: newIndex };
  };

  return ParserTokenizer;
})();

function isNum(c) {
  return c >= '0' && c <= '9';
}

/**
 * @param {!Window} win
 * @return {!ActionService}
 */

function installActionService(win) {
  return _service.getService(win, 'action', function () {
    return new ActionService(win);
  });
}

;

},{"../asserts":16,"../log":39,"../service":53,"../timer":69,"../types":70,"../vsync":77}],55:[function(require,module,exports){
exports.__esModule = true;
/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _dom = require('../dom');

var _log = require('../log');

var _platform = require('../platform');

var _style = require('../style');

var TAG = 'FixedLayer';

/**
 * The fixed layer is a *sibling* of the body element. I.e. it's a direct
 * child of documentElement. It's used to manage the `postition:fixed`
 * elements in iOS-iframe case due to the
 * https://bugs.webkit.org/show_bug.cgi?id=154399 bug, which is itself
 * a result of workaround for the issue where scrolling is not supported
 * in iframes (https://bugs.webkit.org/show_bug.cgi?id=149264).
 * This implementation finds all elements that could be `fixed` and checks
 * on major relayouts if they are indeed `fixed`. All `fixed` elements are
 * moved into the fixed layer.
 */

var FixedLayer = (function () {
  /**
   * @param {!Document} doc
   * @param {!Vsync} vsync
   * @param {number} paddingTop
   * @param {boolean} transfer
   */

  function FixedLayer(doc, vsync, paddingTop, transfer) {
    babelHelpers.classCallCheck(this, FixedLayer);

    /** @const {!Document} */
    this.doc = doc;

    /** @private @const {!Vsync} */
    this.vsync_ = vsync;

    /** @private {number} */
    this.paddingTop_ = paddingTop;

    /** @private @const {boolean} */
    this.transfer_ = transfer;

    /** @private {?Element} */
    this.fixedLayer_ = null;

    /** @private {number} */
    this.counter_ = 0;

    /** @const @private {!Array<!FixedElementDef>} */
    this.fixedElements_ = [];
  }

  /**
   * @typedef {{
   *   id: string,
   *   selectors: [],
   *   element: !Element,
   *   placeholder: ?Element,
   *   fixedNow: boolean,
   * }}
   */

  /**
   * @param {boolean} visible
   */

  FixedLayer.prototype.setVisible = function setVisible(visible) {
    var _this = this;

    if (this.fixedLayer_) {
      this.vsync_.mutate(function () {
        _style.setStyle(_this.fixedLayer_, 'visibility', visible ? 'visible' : 'hidden');
      });
    }
  };

  /**
   * Must be always called after DOMReady.
   */

  FixedLayer.prototype.setup = function setup() {
    var _this2 = this;

    var stylesheets = this.doc.styleSheets;
    if (!stylesheets) {
      return;
    }

    // Find all `position:fixed` elements.
    var fixedSelectors = [];
    for (var i = 0; i < stylesheets.length; i++) {
      var stylesheet = stylesheets[i];
      if (stylesheet.disabled || !stylesheet.ownerNode || stylesheet.ownerNode.tagName != 'STYLE' || stylesheet.ownerNode.hasAttribute('amp-boilerplate') || stylesheet.ownerNode.hasAttribute('amp-runtime') || stylesheet.ownerNode.hasAttribute('amp-extension')) {
        continue;
      }
      this.discoverFixedSelectors_(stylesheet.cssRules, fixedSelectors);
    }

    try {
      fixedSelectors.forEach(function (selector) {
        var elements = _this2.doc.querySelectorAll(selector);
        for (var i = 0; i < elements.length; i++) {
          if (i > 10) {
            // We shouldn't have too many of `fixed` elements.
            break;
          }
          _this2.setupFixedElement_(elements[i], selector);
        }
      });
    } catch (e) {
      // Fail quietly.
      setTimeout(function () {
        throw e;
      });
    }

    // Sort in document order.
    this.sortInDomOrder_();

    if (this.fixedElements_.length > 0 && !this.transfer_ && _platform.platform.isIos()) {
      console. /*OK*/warn('Please test this page inside of an AMP Viewer such' + ' as Google\'s because the fixed positioning might have slightly' + ' different layout.');
    }

    this.update();
  };

  /**
   * Updates the viewer's padding-top position and recalculates offsets of
   * all elements.
   * @param {number} paddingTop
   */

  FixedLayer.prototype.updatePaddingTop = function updatePaddingTop(paddingTop) {
    this.paddingTop_ = paddingTop;
    this.update();
  };

  /**
   * Adds the element directly into the fixed layer, bypassing discovery.
   * @param {!Element} element
   */

  FixedLayer.prototype.addElement = function addElement(element) {
    this.setupFixedElement_(element, /* selector */'*');
    this.sortInDomOrder_();
    this.update();
  };

  /**
   * Removes the element from the fixed layer.
   * @param {!Element} element
   */

  FixedLayer.prototype.removeElement = function removeElement(element) {
    var _this3 = this;

    this.removeFixedElement_(element);
    if (this.fixedLayer_) {
      this.vsync_.mutate(function () {
        _this3.returnFromFixedLayer_(element);
      });
    }
  };

  /**
   * Performs fixed actions.
   * 1. Updates `top` styling if necessary.
   * 2. On iOS/Iframe moves elements between fixed layer and BODY depending on
   * whether they are currently visible and fixed.
   * @return {!Promise}
   */

  FixedLayer.prototype.update = function update() {
    var _this4 = this;

    if (this.fixedElements_.length == 0) {
      return Promise.resolve();
    }

    // Some of the elements may no longer be in DOM.
    /** @type {!Array<!FixedElementDef>} */
    var toRemove = this.fixedElements_.filter(function (fe) {
      return !_dom.documentContains(_this4.doc, fe.element);
    });
    toRemove.forEach(function (fe) {
      return _this4.removeFixedElement_(fe.element);
    });

    // Next, the positioning-related properties will be measured. If a
    // potentially fixed element turns out to be actually fixed, it will
    // be decorated and possibly move to a separate layer.
    var hasTransferables = false;
    return this.vsync_.runPromise({
      measure: function (state) {
        _this4.fixedElements_.forEach(function (fe) {
          var element = fe.element;
          var styles = _this4.doc.defaultView. /*OK*/getComputedStyle(element, null);
          var position = styles.getPropertyValue('position');
          var top = styles.getPropertyValue('top');
          var bottom = styles.getPropertyValue('bottom');
          var opacity = parseFloat(styles.getPropertyValue('opacity'));
          var visibility = styles.getPropertyValue('visibility');
          // Element is indeed fixed. Visibility is added to the test to
          // avoid moving around invisible elements.
          var isFixed = position == 'fixed' && element. /*OK*/offsetWidth > 0 && element. /*OK*/offsetHeight > 0;
          // Transferability requires element to be fixed and top or bottom to
          // be styled with `0`. Also, do not transfer transparent or invisible
          // elements - that's a lot of work for no benefit.  Additionally,
          // invisible/transparent elements used for "service" needs and thus
          // best kept in the original tree.  Also, the `height` is constrained
          // to at most 300px. This is to avoid transfering of more substantial
          // sections for now. Likely to be relaxed in the future.
          var isTransferrable = isFixed && visibility != 'hidden' && opacity > 0 && element. /*OK*/offsetHeight < 300 && (_this4.isAllowedCoord_(top) || _this4.isAllowedCoord_(bottom));
          if (isTransferrable) {
            hasTransferables = true;
          }
          state[fe.id] = {
            fixed: isFixed,
            transferrable: isTransferrable,
            top: top,
            zIndex: styles.getPropertyValue('z-index')
          };
        });
      },
      mutate: function (state) {
        if (hasTransferables && _this4.transfer_) {
          var fixedLayer = _this4.getFixedLayer_();
          if (fixedLayer.className != _this4.doc.body.className) {
            fixedLayer.className = _this4.doc.body.className;
          }
        }
        _this4.fixedElements_.forEach(function (fe, i) {
          var feState = state[fe.id];
          if (feState) {
            _this4.mutateFixedElement_(fe, i, feState);
          }
        });
      }
    })['catch'](function (error) {
      // Fail silently.
      setTimeout(function () {
        throw error;
      });
    });
  };

  /**
   * We currently only allow elements with `top: 0` or `bottom: 0`.
   * @param {string} s
   * @return {boolean}
   */

  FixedLayer.prototype.isAllowedCoord_ = function isAllowedCoord_(s) {
    return !!s && parseInt(s, 10) == 0;
  };

  /**
   * This method records the potentially fixed element. One of a more critical
   * function - it records all selectors that may apply "fixed" to this element
   * to check them later.
   *
   * @param {!Element} element
   * @param {string} selector
   * @private
   */

  FixedLayer.prototype.setupFixedElement_ = function setupFixedElement_(element, selector) {
    var fe = null;
    for (var i = 0; i < this.fixedElements_.length; i++) {
      if (this.fixedElements_[i].element == element) {
        fe = this.fixedElements_[i];
        break;
      }
    }
    if (fe) {
      // Already seen.
      fe.selectors.push(selector);
    } else {
      // A new entry.
      var fixedId = 'F' + this.counter_++;
      element.setAttribute('i-amp-fixedid', fixedId);
      fe = {
        id: fixedId,
        element: element,
        selectors: [selector]
      };
      this.fixedElements_.push(fe);
    }
  };

  /**
   * Removes element from the fixed layer.
   *
   * @param {!Element} element
   * @private
   */

  FixedLayer.prototype.removeFixedElement_ = function removeFixedElement_(element) {
    for (var i = 0; i < this.fixedElements_.length; i++) {
      if (this.fixedElements_[i].element == element) {
        this.fixedElements_.splice(i, 1);
        break;
      }
    }
  };

  /** @private */

  FixedLayer.prototype.sortInDomOrder_ = function sortInDomOrder_() {
    this.fixedElements_.sort(function (fe1, fe2) {
      // 8 | 2 = 0x0A
      // 2 - preceeding
      // 8 - contains
      if (fe1.element.compareDocumentPosition(fe2.element) & 0x0A != 0) {
        return 1;
      }
      return -1;
    });
  };

  /**
   * Mutates the fixed element. At this point it's determined that the element
   * is indeed fixed. There are two main functions here:
   *  1. `top` has to be updated to reflect viewer's paddingTop.
   *  2. The element may need to be transfered to the separate fixed layer.
   *
   * @param {!FixedElementDef} fe
   * @param {number} index
   * @param {!FixedElementStateDef} state
   * @private
   */

  FixedLayer.prototype.mutateFixedElement_ = function mutateFixedElement_(fe, index, state) {
    var element = fe.element;
    var oldFixed = fe.fixedNow;
    if (oldFixed == state.fixed) {
      return;
    }

    fe.fixedNow = state.fixed;
    if (state.fixed) {
      // Update `top`. This is necessary to adjust position to the viewer's
      // paddingTop.
      if (state.top) {
        element.style.top = 'calc(' + state.top + ' + ' + this.paddingTop_ + 'px)';
      }

      // Move element to the fixed layer.
      if (this.transfer_) {
        if (state.transferrable) {
          this.transferToFixedLayer_(fe, index, state);
        } else {
          this.returnFromFixedLayer_(fe);
        }
      }
    } else {
      // Reset `top` which was assigned above.
      if (element.style.top) {
        element.style.top = '';
      }

      // Move back to the BODY layer and reset transfer z-index.
      this.returnFromFixedLayer_(fe);
    }
  };

  /**
   * @param {!FixedElementDef} fe
   * @param {number} index
   * @param {!FixedElementStateDef} state
   * @private
   */

  FixedLayer.prototype.transferToFixedLayer_ = function transferToFixedLayer_(fe, index, state) {
    var _this5 = this;

    var element = fe.element;
    if (element.parentElement == this.fixedLayer_) {
      return;
    }

    _log.log.fine(TAG, 'transfer to fixed:', fe.id, fe.element);
    console. /*OK*/warn('In order to improve scrolling performance in Safari,' + ' we now move the element to a fixed positioning layer:', fe.element);

    if (!fe.placeholder) {
      // Never been transfered before: ensure that it's properly configured.
      _style.setStyle(element, 'pointer-events', 'initial');
      fe.placeholder = this.doc.createElement('i-amp-fp');
      fe.placeholder.setAttribute('i-amp-fixedid', fe.id);
      _style.setStyle(fe.placeholder, 'display', 'none');
    }

    // Calculate z-index based on the declared z-index and DOM position.
    element.style.zIndex = 'calc(' + (10000 + index) + ' + ' + (state.zIndex || 0) + ')';

    element.parentElement.replaceChild(fe.placeholder, element);
    this.getFixedLayer_().appendChild(element);

    // Test if the element still matches one of the `fixed ` selectors. If not
    // return it back to BODY.
    var matches = fe.selectors.some(function (selector) {
      return _this5.matches_(element, selector);
    });
    if (!matches) {
      this.returnFromFixedLayer_(fe);
    }
  };

  /**
   * @param {!Element} element
   * @param {string} selector
   * @return {boolean}
   */

  FixedLayer.prototype.matches_ = function matches_(element, selector) {
    try {
      var matcher = element.matches || element.webkitMatchesSelector || element.mozMatchesSelector || element.msMatchesSelector || element.oMatchesSelector;
      if (matcher) {
        return matcher.call(element, selector);
      }
    } catch (e) {
      // Fail silently.
      setTimeout(function () {
        throw e;
      });
    }
    return false;
  };

  /**
   * @param {!FixedElementDef} fe
   * @private
   */

  FixedLayer.prototype.returnFromFixedLayer_ = function returnFromFixedLayer_(fe) {
    if (!fe.placeholder || !_dom.documentContains(this.doc, fe.placeholder)) {
      return;
    }
    _log.log.fine(TAG, 'return from fixed:', fe.id, fe.element);
    if (_dom.documentContains(this.doc, fe.element)) {
      if (fe.element.style.zIndex) {
        fe.element.style.zIndex = '';
      }
      fe.placeholder.parentElement.replaceChild(fe.element, fe.placeholder);
    } else {
      fe.placeholder.parentElement.removeChild(fe.placeholder);
    }
  };

  /**
   * @return {?Element}
   */

  FixedLayer.prototype.getFixedLayer_ = function getFixedLayer_() {
    if (!this.transfer_ || this.fixedLayer_) {
      return this.fixedLayer_;
    }
    this.fixedLayer_ = this.doc.createElement('body');
    this.fixedLayer_.id = '-amp-fixedlayer';
    _style.setStyles(this.fixedLayer_, {
      position: 'absolute',
      top: 0,
      left: 0,
      height: 0,
      width: 0,
      pointerEvents: 'none',
      overflow: 'hidden',

      // Reset possible BODY styles.
      animation: 'none',
      background: 'none',
      border: 'none',
      borderImage: 'none',
      boxSizing: 'border-box',
      boxShadow: 'none',
      display: 'block',
      float: 'none',
      margin: 0,
      opacity: 1,
      outline: 'none',
      padding: 'none',
      transform: 'none',
      transition: 'none',
      visibility: 'visible'
    });
    this.doc.documentElement.appendChild(this.fixedLayer_);
    return this.fixedLayer_;
  };

  /**
   * @param {!Array<CSSRule>} rules
   * @param {!Array<string>} foundSelectors
   * @private
   */

  FixedLayer.prototype.discoverFixedSelectors_ = function discoverFixedSelectors_(rules, foundSelectors) {
    for (var i = 0; i < rules.length; i++) {
      var rule = rules[i];
      if (rule.type == /* CSSStyleRule */1) {
        if (rule.selectorText != '*' && rule.style.position == 'fixed') {
          foundSelectors.push(rule.selectorText);
        }
      } else if (rule.type == /* CSSMediaRule */4) {
        this.discoverFixedSelectors_(rule.cssRules, foundSelectors);
      } else if (rule.type == /* CSSSupportsRule */12) {
        this.discoverFixedSelectors_(rule.cssRules, foundSelectors);
      }
    }
  };

  return FixedLayer;
})();

exports.FixedLayer = FixedLayer;
var FixedElementDef = undefined;

/**
 * @typedef {{
 *   fixed: boolean,
 *   transferrable: boolean,
 *   top: string,
 *   zIndex: string,
 * }}
 */
var FixedElementStateDef = undefined;

},{"../dom":25,"../log":39,"../platform":44,"../style":66}],56:[function(require,module,exports){
exports.__esModule = true;
exports.installFramerateService = installFramerateService;
/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _service = require('../service');

var _timer = require('../timer');

var _viewer = require('../viewer');

var _performance = require('../performance');

var collectTime = 5000;

/**
 * Collects framerate data and reports it via the performance service.
 */

var Framerate = (function () {

  /**
   * @param {!Window} win
   */

  function Framerate(win) {
    var _this = this;

    babelHelpers.classCallCheck(this, Framerate);

    /** @const {!Window}  */
    this.win = win;

    /**
     * Return value of requestAnimationFrame for use with
     * cancelRequestAnimationFrame.
     * @private {number}
     */
    this.requestedFrame_ = null;

    /** @private {number}  */
    this.lastFrameTime_ = 0;

    /** @private {number}  */
    this.collectUntilTime_ = 0;

    /** @private {number}  */
    this.collectStartTime_ = 0;

    /** @private {number}  */
    this.frameCount_ = 0;

    /**
     * Whether we loaded an ad on this page.
     * @private {boolean}
     */
    this.loadedAd_ = false;

    /** @private @const {!Viewer} */
    this.viewer_ = _viewer.viewerFor(this.win);

    /**
     * We do not make measurements when the window is hidden, because
     * animation frames not not fire in that case.
     * @private {boolean}
     */
    this.isActive_ = this.isActive();

    this.viewer_.onVisibilityChanged(function () {
      _this.isActive_ = _this.isActive();
      _this.reset_();
      if (_this.isActive_) {
        _this.collect();
      }
    });

    this.collect();
  }

  /**
   * Framerate instrumentation should only be on if viewer is visible
   * and csi is actually on.
   * @return {boolean}
   */

  Framerate.prototype.isActive = function isActive() {
    return this.viewer_.isPerformanceTrackingOn() && this.viewer_.isVisible();
  };

  /**
   * Call this when something interesting is about to happen on screen.
   * This class will then measure the framerate for the next few seconds.
   * @param {!Element=} opt_element Element for which the current
   *     collection is requested.
   */

  Framerate.prototype.collect = function collect(opt_element) {
    if (!this.isActive_ || !this.win.requestAnimationFrame) {
      return;
    }
    var now = _timer.timer.now();
    if (this.lastFrameTime_ == 0) {
      this.collectStartTime_ = now;
    }
    if (opt_element && opt_element.tagName == 'AMP-AD') {
      this.loadedAd_ = true;
    }
    this.collectUntilTime_ = now + collectTime;
    this.requestFrame_(now);
  };

  Framerate.prototype.reset_ = function reset_() {
    this.frameCount_ = 0;
    this.lastFrameTime_ = 0;
    if (this.win.cancelAnimationFrame) {
      this.win.cancelAnimationFrame(this.requestedFrame_);
    }
    this.requestedFrame_ = null;
  };

  Framerate.prototype.requestFrame_ = function requestFrame_(now) {
    var _this2 = this;

    if (this.requestedFrame_ != null) {
      return;
    }
    if (now > this.collectUntilTime_) {
      // Done.
      var duration = now - this.collectStartTime_;
      var framerate = 1000 / (duration / this.frameCount_);
      var performance = _performance.performanceFor(this.win);
      performance.tickDelta('fps', framerate);
      if (this.loadedAd_) {
        performance.tickDelta('fal', framerate);
      }
      performance.flush();
      this.reset_();
      return;
    }
    this.requestedFrame_ = this.win.requestAnimationFrame(function () {
      _this2.requestedFrame_ = null;
      var lastFrameTime = _this2.lastFrameTime_;
      var now = _this2.lastFrameTime_ = _timer.timer.now();
      if (lastFrameTime != 0 &&
      // Chrome bug?
      lastFrameTime != now) {
        _this2.frameCount_++;
      }
      _this2.requestFrame_(now);
    });
  };

  return Framerate;
})();

exports.Framerate = Framerate;
;

/**
 * @param {!Window} win
 * @return {!ActionService}
 */

function installFramerateService(win) {
  return _service.getService(win, 'framerate', function () {
    return new Framerate(win);
  });
}

;

},{"../performance":43,"../service":53,"../timer":69,"../viewer":75}],57:[function(require,module,exports){
exports.__esModule = true;
exports.installHistoryService = installHistoryService;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _pass = require('../pass');

var _asserts = require('../asserts');

var _service = require('../service');

var _log = require('../log');

var _timer = require('../timer');

var _viewerImpl = require('./viewer-impl');

/** @private @const */
var TAG_ = 'History';

/** @private @const */
var HISTORY_PROP_ = 'AMP.History';

/**
 * @return {*}
 * @private
 */
function historyState_(stackIndex) {
  var state = {};
  state[HISTORY_PROP_] = stackIndex;
  return state;
}

/** @typedef {number} */
var HistoryIdDef = undefined;

var History = (function () {

  /**
   * @param {!HistoryBindingInterface} binding
   */

  function History(binding) {
    babelHelpers.classCallCheck(this, History);

    /** @private @const {!HistoryBindingInterface} */
    this.binding_ = binding;

    /** @private {number} */
    this.stackIndex_ = 0;

    /** @private {!Array<!Function|undefined>} */
    this.stackOnPop_ = [];

    /** @private {!Array<!{callback:function():!Promise>, resolve:!Function,reject:!Function}} */
    this.queue_ = [];

    this.binding_.setOnStackIndexUpdated(this.onStackIndexUpdated_.bind(this));
  }

  /**
   * HistoryBindingInterface is an interface that defines an underlying technology behind
   * the {@link History}.
   * @interface
   */

  /** @private */

  History.prototype.cleanup_ = function cleanup_() {
    this.binding_.cleanup_();
  };

  /**
   * Pushes new state into history stack with an optional callback to be called
   * when this state is popped.
   * @param {!Function=} opt_onPop
   * @return {!Promise<!HistoryIdDef>}
   */

  History.prototype.push = function push(opt_onPop) {
    var _this = this;

    return this.enque_(function () {
      return _this.binding_.push().then(function (stackIndex) {
        _this.onStackIndexUpdated_(stackIndex);
        if (opt_onPop) {
          _this.stackOnPop_[stackIndex] = opt_onPop;
        }
        return stackIndex;
      });
    });
  };

  /**
   * Pops a previously pushed state from the history stack. If onPop callback
   * has been registered, it will be called. All states coming after this
   * state will also be popped and their callbacks executed.
   * @param {!HistoryIdDef} stateId
   * @return {!Promise}
   */

  History.prototype.pop = function pop(stateId) {
    var _this2 = this;

    return this.enque_(function () {
      return _this2.binding_.pop(stateId).then(function (stackIndex) {
        _this2.onStackIndexUpdated_(stackIndex);
      });
    });
  };

  /**
   * @param {number} stackIndex
   * @private
   */

  History.prototype.onStackIndexUpdated_ = function onStackIndexUpdated_(stackIndex) {
    this.stackIndex_ = stackIndex;
    this.doPop_();
  };

  /** @private */

  History.prototype.doPop_ = function doPop_() {
    if (this.stackIndex_ >= this.stackOnPop_.length - 1) {
      return;
    }

    var toPop = [];
    for (var i = this.stackOnPop_.length - 1; i > this.stackIndex_; i--) {
      if (this.stackOnPop_[i]) {
        toPop.push(this.stackOnPop_[i]);
        this.stackOnPop_[i] = undefined;
      }
    }
    this.stackOnPop_.splice(this.stackIndex_ + 1);

    if (toPop.length > 0) {
      for (var i = 0; i < toPop.length; i++) {
        // With the same delay timeouts must observe the order, although
        // there's no hard requirement in this case to follow the pop order.
        _timer.timer.delay(toPop[i], 1);
      }
    }
  };

  /**
   * @param {function():!Promise<RESULT>} callback
   * @return {!Promise<RESULT>}
   * @template RESULT
   * @private
   */

  History.prototype.enque_ = function enque_(callback) {
    var resolve = undefined;
    var reject = undefined;
    var promise = new Promise(function (aResolve, aReject) {
      resolve = aResolve;
      reject = aReject;
    });

    this.queue_.push({ callback: callback, resolve: resolve, reject: reject });
    if (this.queue_.length == 1) {
      this.deque_();
    }

    return promise;
  };

  /**
   * @private
   */

  History.prototype.deque_ = function deque_() {
    var _this3 = this;

    if (this.queue_.length == 0) {
      return;
    }

    var task = this.queue_[0];
    var promise = undefined;
    try {
      promise = task.callback();
    } catch (e) {
      promise = Promise.reject(e);
    }

    promise.then(function (result) {
      task.resolve(result);
    }, function (reason) {
      _log.log.error(TAG_, 'failed to execute a task:', reason);
      task.reject(reason);
    }).then(function () {
      _this3.queue_.splice(0, 1);
      _this3.deque_();
    });
  };

  return History;
})();

exports.History = History;

var HistoryBindingInterface = (function () {
  function HistoryBindingInterface() {
    babelHelpers.classCallCheck(this, HistoryBindingInterface);
  }

  /**
   * Implementation of HistoryBindingInterface based on the native window. It uses
   * window.history properties and events.
   *
   * Visible for testing.
   *
   * @implements {HistoryBindingInterface}
   */

  /** @private */

  HistoryBindingInterface.prototype.cleanup_ = function cleanup_() {};

  /**
   * Configures a callback to be called when stack index has been updated.
   * @param {function(number)} unusedCallback
   * @protected
   */

  HistoryBindingInterface.prototype.setOnStackIndexUpdated = function setOnStackIndexUpdated(unusedCallback) {};

  /**
   * Pushes new state into the history stack. Returns promise that yields new
   * stack index.
   * @return {!Promise<number>}
   */

  HistoryBindingInterface.prototype.push = function push() {};

  /**
   * Pops a previously pushed state from the history stack. All states coming
   * after this state will also be popped. Returns promise that yields new
   * state index.
   * @param {number} unusedStackIndex
   * @return {!Promise<number>}
   */

  HistoryBindingInterface.prototype.pop = function pop(unusedStackIndex) {};

  return HistoryBindingInterface;
})();

var HistoryBindingNatural_ = (function () {

  /**
   * @param {!Window} win
   */

  function HistoryBindingNatural_(win) {
    var _this4 = this;

    babelHelpers.classCallCheck(this, HistoryBindingNatural_);

    /** @const {!Window} */
    this.win = win;

    var history = this.win.history;

    /** @private {number} */
    this.startIndex_ = history.length - 1;
    if (history.state && history.state[HISTORY_PROP_] !== undefined) {
      this.startIndex_ = Math.min(history.state[HISTORY_PROP_], this.startIndex_);
    }

    /** @private {number} */
    this.stackIndex_ = this.startIndex_;

    /**
     * @private {{promise: !Promise, resolve: !Function,
     *   reject: !Function}|undefined}
     */
    this.waitingState_;

    /** @private {?function(number)} */
    this.onStackIndexUpdated_ = null;

    // A number of browsers do not support history.state. In this cases,
    // History will track its own version. See unsupportedState_.
    /** @private {boolean} @const */
    this.supportsState_ = 'state' in history;

    /** @private {*} */
    this.unsupportedState_ = historyState_(this.stackIndex_);

    // There are still browsers who do not support push/replaceState.
    var pushState = undefined,
        replaceState = undefined;
    if (history.pushState && history.replaceState) {
      /** @private @const {function(*, string=, string=)|undefined} */
      this.origPushState_ = history.originalPushState || history.pushState.bind(history);
      /** @private @const {function(*, string=, string=)|undefined} */
      this.origReplaceState_ = history.originalReplaceState || history.replaceState.bind(history);
      pushState = function (state, opt_title, opt_url) {
        _this4.unsupportedState_ = state;
        _this4.origPushState_(state, opt_title, opt_url);
      };
      replaceState = function (state, opt_title, opt_url) {
        _this4.unsupportedState_ = state;
        // NOTE: check for `undefined` since IE11 and Edge
        // unexpectedly coerces it into a `string`.
        if (opt_url !== undefined) {
          _this4.origReplaceState_(state, opt_title, opt_url);
        } else {
          _this4.origReplaceState_(state, opt_title);
        }
      };
      if (!history.originalPushState) {
        history.originalPushState = this.origPushState_;
      }
      if (!history.originalReplaceState) {
        history.originalReplaceState = this.origReplaceState_;
      }
    } else {
      pushState = function (state, opt_title, opt_url) {
        _this4.unsupportedState_ = state;
      };
      replaceState = function (state, opt_title, opt_url) {
        _this4.unsupportedState_ = state;
      };
    }

    /** @private @const {function(*, string=, string=)} */
    this.pushState_ = pushState;

    /** @private @const {function(*, string=, string=)} */
    this.replaceState_ = replaceState;

    try {
      this.replaceState_(historyState_(this.stackIndex_));
    } catch (e) {
      _log.log.error(TAG_, 'Initial replaceState failed: ' + e.message);
    }

    history.pushState = this.historyPushState_.bind(this);
    history.replaceState = this.historyReplaceState_.bind(this);

    var eventPass = new _pass.Pass(this.onHistoryEvent_.bind(this), 50);
    this.popstateHandler_ = function (e) {
      _log.log.fine(TAG_, 'popstate event: ' + _this4.win.history.length + ', ' + JSON.stringify(e.state));
      eventPass.schedule();
    };
    this.hashchangeHandler_ = function () {
      _log.log.fine(TAG_, 'hashchange event: ' + _this4.win.history.length + ', ' + _this4.win.location.hash);
      eventPass.schedule();
    };
    this.win.addEventListener('popstate', this.popstateHandler_);
    this.win.addEventListener('hashchange', this.hashchangeHandler_);
  }

  /**
   * Implementation of HistoryBindingInterface that assumes a virtual history that
   * relies on viewer's "pushHistory", "popHistory" and "historyPopped"
   * protocol.
   *
   * Visible for testing.
   *
   * @implements {HistoryBindingInterface}
   */

  /** @override */

  HistoryBindingNatural_.prototype.cleanup_ = function cleanup_() {
    if (this.origPushState_) {
      this.win.history.pushState = this.origPushState_;
    }
    if (this.origReplaceState_) {
      this.win.history.replaceState = this.origReplaceState_;
    }
    this.win.removeEventListener('popstate', this.popstateHandler_);
    this.win.removeEventListener('hashchange', this.hashchangeHandler_);
  };

  /** @override */

  HistoryBindingNatural_.prototype.setOnStackIndexUpdated = function setOnStackIndexUpdated(callback) {
    this.onStackIndexUpdated_ = callback;
  };

  /** @override */

  HistoryBindingNatural_.prototype.push = function push() {
    var _this5 = this;

    return this.whenReady_(function () {
      _this5.historyPushState_();
      return Promise.resolve(_this5.stackIndex_);
    });
  };

  /** @override */

  HistoryBindingNatural_.prototype.pop = function pop(stackIndex) {
    var _this6 = this;

    // On pop, stack is not allowed to go prior to the starting point.
    stackIndex = Math.max(stackIndex, this.startIndex_);
    return this.whenReady_(function () {
      return _this6.back_(_this6.stackIndex_ - stackIndex + 1);
    });
  };

  /**
   * @param {number} stackIndex
   * @return {!Promise}
   */

  HistoryBindingNatural_.prototype.backTo = function backTo(stackIndex) {
    var _this7 = this;

    // On pop, stack is not allowed to go prior to the starting point.
    stackIndex = Math.max(stackIndex, this.startIndex_);
    return this.whenReady_(function () {
      return _this7.back_(_this7.stackIndex_ - stackIndex);
    });
  };

  /** @private */

  HistoryBindingNatural_.prototype.onHistoryEvent_ = function onHistoryEvent_() {
    var state = this.getState_();
    _log.log.fine(TAG_, 'history event: ' + this.win.history.length + ', ' + JSON.stringify(state));
    var stackIndex = state ? state[HISTORY_PROP_] : undefined;
    var newStackIndex = this.stackIndex_;
    var waitingState = this.waitingState_;
    this.waitingState_ = undefined;

    if (newStackIndex > this.win.history.length - 2) {
      // Make sure stack has enough space. Whether we are going forward or
      // backward, the stack should have at least one extra cell.
      newStackIndex = this.win.history.length - 2;
      this.updateStackIndex_(newStackIndex);
    }

    if (stackIndex == undefined) {
      // A new navigation forward by the user.
      newStackIndex = newStackIndex + 1;
    } else if (stackIndex < this.win.history.length) {
      // A simple trip back.
      newStackIndex = stackIndex;
    } else {
      // Generally not possible, but for posterity.
      newStackIndex = this.win.history.length - 1;
    }

    // If state index has been updated as the result replace the state.
    if (!state) {
      state = {};
    }
    state[HISTORY_PROP_] = newStackIndex;
    this.replaceState_(state, undefined, undefined);

    // Update the stack, pop squeezed states.
    if (newStackIndex != this.stackIndex_) {
      this.updateStackIndex_(newStackIndex);
    }

    // User navigation is allowed to move past the starting point of
    // the history stack.
    if (newStackIndex < this.startIndex_) {
      this.startIndex_ = newStackIndex;
    }

    if (waitingState) {
      waitingState.resolve();
    }
  };

  /** @private */

  HistoryBindingNatural_.prototype.getState_ = function getState_() {
    if (this.supportsState_) {
      return this.win.history.state;
    }
    return this.unsupportedState_;
  };

  /** @private */

  HistoryBindingNatural_.prototype.assertReady_ = function assertReady_() {
    _asserts.assert(!this.waitingState_, 'The history must not be in the waiting state');
  };

  /**
   * @param {function():!Promise<RESULT>} callback
   * @return {!Promise<RESULT>}
   * @template RESULT
   * @private
   */

  HistoryBindingNatural_.prototype.whenReady_ = function whenReady_(callback) {
    if (!this.waitingState_) {
      return callback();
    }
    return this.waitingState_.promise.then(callback, callback);
  };

  /**
   * @return {!Promise}
   * @private
   */

  HistoryBindingNatural_.prototype.wait_ = function wait_() {
    this.assertReady_();
    var resolve = undefined;
    var reject = undefined;
    var promise = _timer.timer.timeoutPromise(500, new Promise(function (aResolve, aReject) {
      resolve = aResolve;
      reject = aReject;
    }));
    this.waitingState_ = {
      promise: promise,
      resolve: resolve,
      reject: reject
    };
    return promise;
  };

  /**
   * @param {number} steps
   * @return {!Promise}
   */

  HistoryBindingNatural_.prototype.back_ = function back_(steps) {
    var _this8 = this;

    this.assertReady_();
    if (steps <= 0) {
      return Promise.resolve(this.stackIndex_);
    }
    this.unsupportedState_ = historyState_(this.stackIndex_ - steps);
    var promise = this.wait_();
    this.win.history.go(-steps);
    return promise.then(function () {
      return Promise.resolve(_this8.stackIndex_);
    });
  };

  /**
   * @param {*} state
   * @param {string|undefined} title
   * @param {string|undefined} url
   * @private
   */

  HistoryBindingNatural_.prototype.historyPushState_ = function historyPushState_(state, title, url) {
    this.assertReady_();
    if (!state) {
      state = {};
    }
    var stackIndex = this.stackIndex_ + 1;
    state[HISTORY_PROP_] = stackIndex;
    this.pushState_(state, title, url);
    if (stackIndex != this.win.history.length - 1) {
      stackIndex = this.win.history.length - 1;
      state[HISTORY_PROP_] = stackIndex;
      this.replaceState_(state);
    }
    this.updateStackIndex_(stackIndex);
  };

  /**
   * @param {*} state
   * @param {string|undefined} title
   * @param {string|undefined} url
   * @private
   */

  HistoryBindingNatural_.prototype.historyReplaceState_ = function historyReplaceState_(state, title, url) {
    this.assertReady_();
    if (!state) {
      state = {};
    }
    var stackIndex = Math.min(this.stackIndex_, this.win.history.length - 1);
    state[HISTORY_PROP_] = stackIndex;
    this.replaceState_(state, title, url);
    this.updateStackIndex_(stackIndex);
  };

  /**
   * @param {number} stackIndex
   * @private
   */

  HistoryBindingNatural_.prototype.updateStackIndex_ = function updateStackIndex_(stackIndex) {
    this.assertReady_();
    stackIndex = Math.min(stackIndex, this.win.history.length - 1);
    if (this.stackIndex_ != stackIndex) {
      _log.log.fine(TAG_, 'stack index changed: ' + this.stackIndex_ + ' -> ' + stackIndex);
      this.stackIndex_ = stackIndex;
      if (this.onStackIndexUpdated_) {
        this.onStackIndexUpdated_(stackIndex);
      }
    }
  };

  return HistoryBindingNatural_;
})();

exports.HistoryBindingNatural_ = HistoryBindingNatural_;

var HistoryBindingVirtual_ = (function () {

  /**
   * @param {!Viewer} viewer
   */

  function HistoryBindingVirtual_(viewer) {
    babelHelpers.classCallCheck(this, HistoryBindingVirtual_);

    /** @private @const {!Viewer} */
    this.viewer_ = viewer;

    /** @private {number} */
    this.stackIndex_ = 0;

    /** @private {?function(number)} */
    this.onStackIndexUpdated_ = null;

    /** @private {!UnlistenDef} */
    this.unlistenOnHistoryPopped_ = this.viewer_.onHistoryPoppedEvent(this.onHistoryPopped_.bind(this));
  }

  /**
   * @param {!Window} window
   * @return {!History}
   * @private
   */

  /** @override */

  HistoryBindingVirtual_.prototype.cleanup_ = function cleanup_() {
    this.unlistenOnHistoryPopped_();
  };

  /** @override */

  HistoryBindingVirtual_.prototype.setOnStackIndexUpdated = function setOnStackIndexUpdated(callback) {
    this.onStackIndexUpdated_ = callback;
  };

  /** @override */

  HistoryBindingVirtual_.prototype.push = function push() {
    // Current implementation doesn't wait for response from viewer.
    this.updateStackIndex_(this.stackIndex_ + 1);
    this.viewer_.postPushHistory(this.stackIndex_);
    return Promise.resolve(this.stackIndex_);
  };

  /** @override */

  HistoryBindingVirtual_.prototype.pop = function pop(stackIndex) {
    if (stackIndex > this.stackIndex_) {
      return Promise.resolve(this.stackIndex_);
    }
    this.viewer_.postPopHistory(stackIndex);
    this.updateStackIndex_(stackIndex - 1);
    return Promise.resolve(this.stackIndex_);
  };

  /**
   * @param {!ViewerHistoryPoppedEvent} event
   * @private
   */

  HistoryBindingVirtual_.prototype.onHistoryPopped_ = function onHistoryPopped_(event) {
    this.updateStackIndex_(event.newStackIndex);
  };

  /**
   * @param {number} stackIndex
   * @private
   */

  HistoryBindingVirtual_.prototype.updateStackIndex_ = function updateStackIndex_(stackIndex) {
    if (this.stackIndex_ != stackIndex) {
      _log.log.fine(TAG_, 'stack index changed: ' + this.stackIndex_ + ' -> ' + stackIndex);
      this.stackIndex_ = stackIndex;
      if (this.onStackIndexUpdated_) {
        this.onStackIndexUpdated_(stackIndex);
      }
    }
  };

  return HistoryBindingVirtual_;
})();

exports.HistoryBindingVirtual_ = HistoryBindingVirtual_;
function createHistory_(window) {
  var viewer = _viewerImpl.installViewerService(window);
  var binding = undefined;
  if (viewer.isOvertakeHistory()) {
    binding = new HistoryBindingVirtual_(viewer);
  } else {
    binding = new HistoryBindingNatural_(window);
  }
  return new History(binding);
};

/**
 * @param {!Window} window
 */

function installHistoryService(window) {
  _service.getService(window, 'history', function () {
    return createHistory_(window);
  });
}

;

},{"../asserts":16,"../log":39,"../pass":42,"../service":53,"../timer":69,"./viewer-impl":60}],58:[function(require,module,exports){
exports.__esModule = true;
exports.getElementPriority = getElementPriority;
exports.installResourcesService = installResourcesService;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _focusHistory = require('../focus-history');

var _pass = require('../pass');

var _asserts = require('../asserts');

var _dom = require('../dom');

var _documentReady = require('../document-ready');

var _layoutRect = require('../layout-rect');

var _service = require('../service');

var _input = require('../input');

var _log = require('../log');

var _error = require('../error');

var _timer = require('../timer');

var _framerateImpl = require('./framerate-impl');

var _viewerImpl = require('./viewer-impl');

var _viewportImpl = require('./viewport-impl');

var _vsyncImpl = require('./vsync-impl');

var TAG_ = 'Resources';
var RESOURCE_PROP_ = '__AMP__RESOURCE';
var OWNER_PROP_ = '__AMP__OWNER';
var LAYOUT_TASK_ID_ = 'L';
var LAYOUT_TASK_OFFSET_ = 0;
var PRELOAD_TASK_ID_ = 'P';
var PRELOAD_TASK_OFFSET_ = 2;
var PRIORITY_BASE_ = 10;
var PRIORITY_PENALTY_TIME_ = 1000;
var POST_TASK_PASS_DELAY_ = 1000;
var MUTATE_DEFER_DELAY_ = 500;
var FOCUS_HISTORY_TIMEOUT_ = 1000 * 60; // 1min
var FOUR_FRAME_DELAY_ = 70;

/**
 * Returns the element-based priority. A value from 0 to 10.
 * @param {string} tagName
 * @return {number}
 */

function getElementPriority(tagName) {
  tagName = tagName.toLowerCase();
  if (tagName == 'amp-ad') {
    return 2;
  }
  if (tagName == 'amp-pixel' || tagName == 'amp-analytics') {
    return 1;
  }
  return 0;
}

var Resources = (function () {
  function Resources(window) {
    var _this = this;

    babelHelpers.classCallCheck(this, Resources);

    /** @const {!Window} */
    this.win = window;

    /** @const {!Viewer} */
    this.viewer_ = _viewerImpl.installViewerService(window);

    /** @private {boolean} */
    this.isRuntimeOn_ = this.viewer_.isRuntimeOn();

    /** @private @const {number} */
    this.maxDpr_ = this.win.devicePixelRatio || 1;

    /** @private {number} */
    this.resourceIdCounter_ = 0;

    /** @private @const {!Array<!Resource>} */
    this.resources_ = [];

    /** @private {boolean} */
    this.visible_ = this.viewer_.isVisible();

    /** @private {number} */
    this.prerenderSize_ = this.viewer_.getPrerenderSize();

    /** @private {boolean} */
    this.documentReady_ = false;

    /**
     * We want to do some work in the first pass after
     * the document is ready.
     * @private {boolean}
     */
    this.firstPassAfterDocumentReady_ = true;

    /** @private {boolean} */
    this.relayoutAll_ = true;

    /** @private {number} */
    this.relayoutTop_ = -1;

    /** @private {boolean} */
    this.forceBuild_ = false;

    /** @private {time} */
    this.lastScrollTime_ = 0;

    /** @private {number} */
    this.lastVelocity_ = 0;

    /** @const {!Pass} */
    this.pass_ = new _pass.Pass(function () {
      return _this.doPass_();
    });

    /** @const {!TaskQueue_} */
    this.exec_ = new TaskQueue_();

    /** @const {!TaskQueue_} */
    this.queue_ = new TaskQueue_();

    /**
     * The internal structure of a ChangeHeightRequest.
     * @typedef {{
     *   resource: !Resource,
     *   newHeight: number,
     *   force: boolean,
     *   callback: (function()|undefined)
     * }}
     * @private
     */
    var ChangeHeightRequestDef = undefined;

    /**
     * @private {!Array<!ChangeHeightRequestDef>}
     */
    this.requestsChangeHeight_ = [];

    /** @private {!Array<!Function>} */
    this.deferredMutates_ = [];

    /** @private {number} */
    this.scrollHeight_ = 0;

    /** @private @const {!Viewport} */
    this.viewport_ = _viewportImpl.installViewportService(this.win);

    /** @private @const {!Vsync} */
    this.vsync_ = _vsyncImpl.installVsyncService(this.win);

    /** @private @const {!FocusHistory} */
    this.activeHistory_ = new _focusHistory.FocusHistory(this.win, FOCUS_HISTORY_TIMEOUT_);

    /** @private {boolean} */
    this.vsyncScheduled_ = false;

    /** @private @const {!Framerate}  */
    this.framerate_ = _framerateImpl.installFramerateService(this.win);

    // When viewport is resized, we have to re-measure all elements.
    this.viewport_.onChanged(function (event) {
      _this.lastScrollTime_ = _timer.timer.now();
      _this.lastVelocity_ = event.velocity;
      _this.relayoutAll_ = _this.relayoutAll_ || event.relayoutAll;
      _this.schedulePass();
    });
    this.viewport_.onScroll(function () {
      _this.lastScrollTime_ = _timer.timer.now();
      _this.framerate_.collect();
    });

    // When document becomes visible, e.g. from "prerender" mode, do a
    // simple pass.
    this.viewer_.onVisibilityChanged(function () {
      _this.schedulePass();
    });

    this.viewer_.onRuntimeState(function (state) {
      _log.log.fine(TAG_, 'Runtime state:', state);
      _this.isRuntimeOn_ = state;
      _this.schedulePass(1);
    });

    this.activeHistory_.onFocus(function (element) {
      _this.checkPendingChangeHeight_(element);
    });

    // Ensure that we attempt to rebuild things when DOM is ready.
    _documentReady.onDocumentReady(this.win.document, function () {
      _this.documentReady_ = true;
      _this.forceBuild_ = true;
      _this.relayoutAll_ = true;
      _this.schedulePass();
      _this.monitorInput_();
    });

    this.schedulePass();
  }

  /**
   * A Resource binding for an AmpElement.
   *
   * Visible for testing only!
   */

  /**
   * Returns a list of resources.
   * @return {!Array<!Resource>}
   * @export
   */

  Resources.prototype.get = function get() {
    return this.resources_.slice(0);
  };

  /**
   * Returns a subset of resources which is identified as being in the current
   * viewport.
   * @param {boolean=} opt_isInPrerender signifies if we are in prerender mode.
   * @return {!Array<!Resource>}
   */

  Resources.prototype.getResourcesInViewport = function getResourcesInViewport(opt_isInPrerender) {
    opt_isInPrerender = opt_isInPrerender || false;
    var viewportRect = this.viewport_.getRect();
    return this.resources_.filter(function (r) {
      if (r.hasOwner() || !r.isDisplayed() || !r.overlaps(viewportRect)) {
        return false;
      }
      if (opt_isInPrerender && !r.prerenderAllowed()) {
        return false;
      }
      return true;
    });
  };

  /** @private */

  Resources.prototype.monitorInput_ = function monitorInput_() {
    var _this2 = this;

    var input = _input.inputFor(this.win);
    input.onTouchDetected(function (detected) {
      _this2.toggleInputClass_('amp-mode-touch', detected);
    }, true);
    input.onMouseDetected(function (detected) {
      _this2.toggleInputClass_('amp-mode-mouse', detected);
    }, true);
    input.onKeyboardStateChanged(function (active) {
      _this2.toggleInputClass_('amp-mode-keyboard-active', active);
    }, true);
  };

  /**
   * @param {string} clazz
   * @param {boolean} on
   * @private
   */

  Resources.prototype.toggleInputClass_ = function toggleInputClass_(clazz, on) {
    var _this3 = this;

    this.vsync_.mutate(function () {
      _this3.win.document.body.classList.toggle(clazz, on);
    });
  };

  /** @private */

  Resources.prototype.updateScrollHeight_ = function updateScrollHeight_() {
    if (!this.win.document.body) {
      return;
    }
    var scrollHeight = this.win.document.body. /*OK*/scrollHeight;
    if (scrollHeight != this. /*OK*/scrollHeight_) {
      this. /*OK*/scrollHeight_ = scrollHeight;
      this.viewer_.postDocumentResized(this.viewport_.getSize().width, scrollHeight);
    }
  };

  /**
   * Returns the maximum DPR available on this device.
   * @return {number}
   */

  Resources.prototype.getMaxDpr = function getMaxDpr() {
    return this.maxDpr_;
  };

  /**
   * Returns the most optimal DPR currently recommended.
   * @return {number}
   */

  Resources.prototype.getDpr = function getDpr() {
    // TODO(dvoytenko): return optimal DPR.
    return this.maxDpr_;
  };

  /**
   * Returns the {@link Resource} instance corresponding to the specified AMP
   * Element. If no Resource is found, the exception is thrown.
   * @param {!AmpElement} element
   * @return {?Resource}
   * @package
   */

  Resources.prototype.getResourceForElement = function getResourceForElement(element) {
    return _asserts.assert( /** @type {!Resource} */element[RESOURCE_PROP_], 'Missing resource prop on %s', element);
  };

  /**
   * Signals that an element has been added to the DOM. Resources manager
   * will start tracking it from this point on.
   * @param {!AmpElement} element
   * @package
   */

  Resources.prototype.add = function add(element) {
    var resource = new Resource(++this.resourceIdCounter_, element, this);
    if (!element.id) {
      element.id = 'AMP_' + resource.getId();
    }
    element[RESOURCE_PROP_] = resource;
    this.resources_.push(resource);

    if (this.isRuntimeOn_) {
      // Try to immediately build element, it may already be ready.
      resource.build(this.forceBuild_);
      this.schedulePass();
    }

    _log.log.fine(TAG_, 'element added:', resource.debugid);
  };

  /**
   * Signals that an element has been removed to the DOM. Resources manager
   * will stop tracking it from this point on.
   * @param {!AmpElement} element
   * @package
   */

  Resources.prototype.remove = function remove(element) {
    var resource = this.getResourceForElement(element);
    var index = resource ? this.resources_.indexOf(resource) : -1;
    if (index != -1) {
      this.resources_.splice(index, 1);
    }
    _log.log.fine(TAG_, 'element removed:', resource.debugid);
  };

  /**
   * Signals that an element has been upgraded to the DOM. Resources manager
   * will perform build and enable layout/viewport signals for this element.
   * @param {!AmpElement} element
   * @package
   */

  Resources.prototype.upgraded = function upgraded(element) {
    var resource = this.getResourceForElement(element);
    if (this.isRuntimeOn_) {
      resource.build(this.forceBuild_);
      this.schedulePass();
    } else if (resource.onUpgraded_) {
      resource.onUpgraded_();
    }
    _log.log.fine(TAG_, 'element upgraded:', resource.debugid);
  };

  /**
   * Assigns an owner for the specified element. This means that the resources
   * within this element will be managed by the owner and not Resources manager.
   * @param {!Element} element
   * @param {!AmpElement} owner
   * @package
   */

  Resources.prototype.setOwner = function setOwner(element, owner) {
    _asserts.assert(owner.contains(element), 'Owner must contain the element');
    element[OWNER_PROP_] = owner;
  };

  /**
   * Schedules layout for the specified sub-elements that are children of the
   * parent element. The parent element may choose to send this signal either
   * because it's an owner (see {@link setOwner}) or because it wants the
   * layouts to be done sooner. In either case, both parent's and children's
   * priority is observed when scheduling this work.
   * @param {!Element} parentElement
   * @param {!Element|!Array<!Element>} subElements
   */

  Resources.prototype.scheduleLayout = function scheduleLayout(parentElement, subElements) {
    this.scheduleLayoutOrPreloadForSubresources_(this.getResourceForElement(parentElement),
    /* layout */true, elements_(subElements));
  };

  /**
   * Invokes `unload` on the elements' resource which in turn will invoke
   * the `documentBecameInactive` callback on the custom element.
   * @param {!Element} parentElement
   * @param {!Element|!Array<!Element>} subElements
   */

  Resources.prototype.schedulePause = function schedulePause(parentElement, subElements) {
    var parentResource = this.getResourceForElement(parentElement);
    subElements = elements_(subElements);

    this.discoverResourcesForArray_(parentResource, subElements, function (resource) {
      resource.unload();
    });
  };

  /**
   * Schedules preload for the specified sub-elements that are children of the
   * parent element. The parent element may choose to send this signal either
   * because it's an owner (see {@link setOwner}) or because it wants the
   * preloads to be done sooner. In either case, both parent's and children's
   * priority is observed when scheduling this work.
   * @param {!Element} parentElement
   * @param {!Element|!Array<!Element>} subElements
   */

  Resources.prototype.schedulePreload = function schedulePreload(parentElement, subElements) {
    this.scheduleLayoutOrPreloadForSubresources_(this.getResourceForElement(parentElement),
    /* layout */false, elements_(subElements));
  };

  /**
   * A parent resource, especially in when it's an owner (see {@link setOwner}),
   * may request the Resources manager to update children's inViewport state.
   * A child's inViewport state is a logical AND between inLocalViewport
   * specified here and parent's own inViewport state.
   * @param {!Element} parentElement
   * @param {!Element|!Array<!Element>} subElements
   * @param {boolean} inLocalViewport
   */

  Resources.prototype.updateInViewport = function updateInViewport(parentElement, subElements, inLocalViewport) {
    this.updateInViewportForSubresources_(this.getResourceForElement(parentElement), elements_(subElements), inLocalViewport);
  };

  /**
   * Requests the runtime to change the element's height. When the height is
   * successfully updated then the opt_callback is called.
   * @param {!Element} element
   * @param {number} newHeight
   * @param {function=} opt_callback A callback function.
   */

  Resources.prototype.changeHeight = function changeHeight(element, newHeight, opt_callback) {
    this.scheduleChangeHeight_(this.getResourceForElement(element), newHeight,
    /* force */true, opt_callback);
  };

  /**
   * Requests the runtime to update the height of this element to the specified
   * value. The runtime will schedule this request and attempt to process it
   * as soon as possible. However, unlike in {@link changeHeight}, the runtime
   * may refuse to make a change in which case it will call the
   * `overflowCallback` method on the target resource with the height value.
   * Overflow callback is expected to provide the reader with the user action
   * to update the height manually.
   * Note that the runtime does not call the `overflowCallback` method if the
   * requested height is 0 or negative.
   * If the height is successfully updated then the opt_callback is called.
   * @param {!Element} element
   * @param {number} newHeight
   * @param {function=} opt_callback A callback function to be called if the
   *    height is updated.
   * @protected
   */

  Resources.prototype.attemptChangeHeight = function attemptChangeHeight(element, newHeight, opt_callback) {
    this.scheduleChangeHeight_(this.getResourceForElement(element), newHeight,
    /* force */false, opt_callback);
  };

  /**
   * Requests mutate callback to executed at the earliest possibility.
   * @param {!Element} element
   * @param {!Function} callback
   */

  Resources.prototype.deferMutate = function deferMutate(element, callback) {
    this.scheduleDeferredMutate_(this.getResourceForElement(element), callback);
    this.schedulePassVsync();
  };

  /**
   * Runs the specified mutation on the element and ensures that measures
   * and layouts performed for the affected elements.
   *
   * This method should be called whenever a significant mutations are done
   * on the DOM that could affect layout of elements inside this subtree or
   * its siblings. The top-most affected element should be specified as the
   * first argument to this method and all the mutation work should be done
   * in the mutator callback which is called in the "mutation" vsync phase.
   *
   * @param {!Element} element
   * @param {function()} mutator
   * @return {!Promise}
   */

  Resources.prototype.mutateElement = function mutateElement(element, mutator) {
    var _this4 = this;

    var calcRelayoutTop = function () {
      var box = _this4.viewport_.getLayoutRect(element);
      if (box.width != 0 && box.height != 0) {
        return box.top;
      }
      return -1;
    };
    var relayoutTop = -1;
    return this.vsync_.runPromise({
      measure: function () {
        relayoutTop = calcRelayoutTop();
      },
      mutate: function () {
        mutator();

        // Mark children for re-measurement.
        var ampElements = element.getElementsByClassName('-amp-element');
        for (var i = 0; i < ampElements.length; i++) {
          var r = _this4.getResourceForElement(ampElements[i]);
          r.requestMeasure();
        }
        if (relayoutTop != -1) {
          _this4.setRelayoutTop_(relayoutTop);
        }
        _this4.schedulePass(FOUR_FRAME_DELAY_);

        // Need to measure again in case the element has become visible or
        // shifted.
        _this4.vsync_.measure(function () {
          var updatedRelayoutTop = calcRelayoutTop();
          if (updatedRelayoutTop != -1 && updatedRelayoutTop != relayoutTop) {
            _this4.setRelayoutTop_(updatedRelayoutTop);
            _this4.schedulePass(FOUR_FRAME_DELAY_);
          }
        });
      }
    });
  };

  /**
   * Schedules the work pass at the latest with the specified delay.
   * @param {number=} opt_delay
   */

  Resources.prototype.schedulePass = function schedulePass(opt_delay) {
    this.pass_.schedule(opt_delay);
  };

  /**
   * Schedules the work pass at the latest with the specified delay.
   */

  Resources.prototype.schedulePassVsync = function schedulePassVsync() {
    var _this5 = this;

    if (this.vsyncScheduled_) {
      return;
    }
    this.vsyncScheduled_ = true;
    this.vsync_.mutate(function () {
      return _this5.doPass_();
    });
  };

  /**
   * @private
   */

  Resources.prototype.doPass_ = function doPass_() {
    if (!this.isRuntimeOn_) {
      _log.log.fine(TAG_, 'runtime is off');
      return;
    }

    var prevVisible = this.visible_;
    this.visible_ = this.viewer_.isVisible();
    this.prerenderSize_ = this.viewer_.getPrerenderSize();

    if (this.documentReady_ && this.firstPassAfterDocumentReady_) {
      this.firstPassAfterDocumentReady_ = false;
      this.viewer_.postDocumentReady(this.viewport_.getSize().width, this.win.document.body. /*OK*/scrollHeight);
      this.updateScrollHeight_();
    }

    var viewportSize = this.viewport_.getSize();
    var now = _timer.timer.now();
    _log.log.fine(TAG_, 'PASS: at ' + now + ', visible=', this.visible_, ', forceBuild=', this.forceBuild_, ', relayoutAll=', this.relayoutAll_, ', relayoutTop=', this.relayoutTop_, ', viewportSize=', viewportSize.width, viewportSize.height, ', prerenderSize=', this.prerenderSize_);
    this.pass_.cancel();
    this.vsyncScheduled_ = false;

    // If document becomes invisible, bring everything into inactive state.
    if (prevVisible && !this.visible_) {
      _log.log.fine(TAG_, 'document become inactive');
      this.documentBecameInactive_();
      return;
    }

    // If viewport size is 0, the manager will wait for the resize event.
    if (viewportSize.height > 0 && viewportSize.width > 0) {
      if (this.hasMutateWork_()) {
        this.mutateWork_();
      }
      this.discoverWork_();
      var delay = this.work_();
      if (this.hasMutateWork_()) {
        // Overflow mutate work.
        delay = Math.min(delay, MUTATE_DEFER_DELAY_);
      }
      if (this.visible_) {
        _log.log.fine(TAG_, 'next pass:', delay);
        this.schedulePass(delay);
        this.updateScrollHeight_();
      } else {
        _log.log.fine(TAG_, 'document is not visible: no scheduling');
      }
    }
  };

  /**
   * Returns `true` when there's mutate work currently batched.
   * @return {boolean}
   * @private
   */

  Resources.prototype.hasMutateWork_ = function hasMutateWork_() {
    return this.deferredMutates_.length > 0 || this.requestsChangeHeight_.length > 0;
  };

  /**
   * Performs pre-discovery mutates.
   * @private
   */

  Resources.prototype.mutateWork_ = function mutateWork_() {
    var _this6 = this;

    // Read all necessary data before mutates.
    // The height changing depends largely on the target element's position
    // in the active viewport. When not in prerendering, we also consider the
    // active viewport the part of the visible viewport below 10% from the top
    // and above 25% from the bottom.
    // This is basically the portion of the viewport where the reader is most
    // likely focused right now. The main goal is to avoid drastic UI changes
    // in that part of the content. The elements below the active viewport are
    // freely resized. The elements above the viewport are resized and request
    // scroll adjustment to avoid active viewport changing without user's
    // action. The elements in the active viewport are not resized and instead
    // the overflow callbacks are called.
    var now = _timer.timer.now();
    var viewportRect = this.viewport_.getRect();
    var scrollHeight = this.viewport_.getScrollHeight();
    var topOffset = viewportRect.height / 10;
    var bottomOffset = viewportRect.height / 10;
    var docBottomOffset = scrollHeight * 0.85;
    var isScrollingStopped = Math.abs(this.lastVelocity_) < 1e-2 && now - this.lastScrollTime_ > MUTATE_DEFER_DELAY_ || now - this.lastScrollTime_ > MUTATE_DEFER_DELAY_ * 2;

    if (this.deferredMutates_.length > 0) {
      _log.log.fine(TAG_, 'deferred mutates:', this.deferredMutates_.length);
      var deferredMutates = this.deferredMutates_;
      this.deferredMutates_ = [];
      for (var i = 0; i < deferredMutates.length; i++) {
        deferredMutates[i]();
      }
    }

    if (this.requestsChangeHeight_.length > 0) {
      (function () {
        _log.log.fine(TAG_, 'change height requests:', _this6.requestsChangeHeight_.length);
        var requestsChangeHeight = _this6.requestsChangeHeight_;
        _this6.requestsChangeHeight_ = [];

        // Find minimum top position and run all mutates.
        var minTop = -1;
        var scrollAdjSet = [];
        for (var i = 0; i < requestsChangeHeight.length; i++) {
          var request = requestsChangeHeight[i];
          var resource = request.resource;
          var box = resource.getLayoutBox();
          var iniBox = resource.getInitialLayoutBox();
          var diff = request.newHeight - box.height;
          if (diff == 0) {
            // Nothing to do.
            continue;
          }

          // Check resize rules. It will either resize element immediately, or
          // wait until scrolling stops or will call the overflow callback.
          var resize = false;
          if (request.force || !_this6.visible_) {
            // 1. An immediate execution requested or the document is hidden.
            resize = true;
          } else if (_this6.activeHistory_.hasDescendantsOf(resource.element)) {
            // 2. Active elements are immediately resized. The assumption is that
            // the resize is triggered by the user action or soon after.
            resize = true;
          } else if (box.bottom + Math.min(diff, 0) >= viewportRect.bottom - bottomOffset) {
            // 3. Elements under viewport are resized immediately, but only if
            // an element's boundary is not changed above the viewport after
            // resize.
            resize = true;
          } else if (box.bottom <= viewportRect.top + topOffset) {
            // 4. Elements above the viewport can only be resized when scrolling
            // has stopped, otherwise defer util next cycle.
            if (isScrollingStopped) {
              // These requests will be executed in the next animation cycle and
              // adjust the scroll position.
              resize = false;
              scrollAdjSet.push(request);
            } else {
              // Defer till next cycle.
              _this6.requestsChangeHeight_.push(request);
            }
          } else if (iniBox.bottom >= docBottomOffset || box.bottom >= docBottomOffset) {
            // 5. Elements close to the bottom of the document (not viewport)
            // are resized immediately.
            resize = true;
          } else if (diff < 0) {
            // 6. The new height is smaller than the current one.
            resize = false;
          } else {
            // 7. Element is in viewport don't resize and try overflow callback
            // instead.
            request.resource.overflowCallback( /* overflown */true, request.newHeight);
          }

          if (resize) {
            if (box.top >= 0) {
              minTop = minTop == -1 ? box.top : Math.min(minTop, box.top);
            }
            request.resource. /*OK*/changeHeight(request.newHeight, request.callback);
            request.resource.overflowCallback( /* overflown */false, request.newHeight);
          }
        }

        if (minTop != -1) {
          _this6.setRelayoutTop_(minTop);
        }

        // Execute scroll-adjusting resize requests, if any.
        if (scrollAdjSet.length > 0) {
          _this6.vsync_.run({
            measure: function (state) {
              state. /*OK*/scrollHeight = _this6.viewport_. /*OK*/getScrollHeight();
              state. /*OK*/scrollTop = _this6.viewport_. /*OK*/getScrollTop();
            },
            mutate: function (state) {
              var minTop = -1;
              scrollAdjSet.forEach(function (request) {
                var box = request.resource.getLayoutBox();
                minTop = minTop == -1 ? box.top : Math.min(minTop, box.top);
                request.resource. /*OK*/changeHeight(request.newHeight);
              });
              if (minTop != -1) {
                _this6.setRelayoutTop_(minTop);
              }
              // Sync is necessary here to avoid UI jump in the next frame.
              var newScrollHeight = _this6.viewport_. /*OK*/getScrollHeight();
              if (newScrollHeight > state. /*OK*/scrollHeight) {
                _this6.viewport_.setScrollTop(state. /*OK*/scrollTop + (newScrollHeight - state. /*OK*/scrollHeight));
              }
            }
          });
        }
      })();
    }
  };

  /**
   * @param {number} relayoutTop
   * @private
   */

  Resources.prototype.setRelayoutTop_ = function setRelayoutTop_(relayoutTop) {
    if (this.relayoutTop_ == -1) {
      this.relayoutTop_ = relayoutTop;
    } else {
      this.relayoutTop_ = Math.min(relayoutTop, this.relayoutTop_);
    }
  };

  /**
   * Reschedules change height request when an overflown element is activated.
   * @param {!Element} element
   * @private
   */

  Resources.prototype.checkPendingChangeHeight_ = function checkPendingChangeHeight_(element) {
    var resourceElement = _dom.closest(element, function (el) {
      return el[RESOURCE_PROP_];
    });
    if (!resourceElement) {
      return;
    }
    var resource = this.getResourceForElement(resourceElement);
    var pendingChangeHeight = resource.getPendingChangeHeight();
    if (pendingChangeHeight !== undefined) {
      this.scheduleChangeHeight_(resource, pendingChangeHeight,
      /* force */true);
    }
  };

  /**
   * Discovers work that needs to be done since the last pass. If viewport
   * has changed, it will try to build new elements, measure changed elements,
   * and schedule layouts and preloads within a reasonable distance of the
   * current viewport. Finally, this process also updates inViewport state
   * of changed elements.
   *
   * Layouts and preloads are not executed immediately, but instead scheduled
   * in the queue with different priorities.
   *
   * @private
   */

  Resources.prototype.discoverWork_ = function discoverWork_() {

    // TODO(dvoytenko): vsync separation may be needed for different phases

    var now = _timer.timer.now();

    // Ensure all resources layout phase complete; when relayoutAll is requested
    // force re-layout.
    var relayoutAll = this.relayoutAll_;
    this.relayoutAll_ = false;
    var relayoutTop = this.relayoutTop_;
    this.relayoutTop_ = -1;

    // Phase 1: Build and relayout as needed. All mutations happen here.
    var relayoutCount = 0;
    var remeasureCount = 0;
    for (var i = 0; i < this.resources_.length; i++) {
      var r = this.resources_[i];
      if (r.getState() == ResourceState_.NOT_BUILT) {
        r.build(this.forceBuild_);
      }
      if (r.getState() == ResourceState_.NOT_LAID_OUT || relayoutAll) {
        r.applySizesAndMediaQuery();
        relayoutCount++;
      }
      if (r.isMeasureRequested()) {
        remeasureCount++;
      }
    }

    // Phase 2: Remeasure if there were any relayouts. Unfortunately, currently
    // there's no way to optimize this. All reads happen here.
    var toUnload = [];
    if (relayoutCount > 0 || remeasureCount > 0 || relayoutAll || relayoutTop != -1) {
      for (var i = 0; i < this.resources_.length; i++) {
        var r = this.resources_[i];
        if (r.getState() == ResourceState_.NOT_BUILT || r.hasOwner()) {
          continue;
        }
        if (relayoutAll || r.getState() == ResourceState_.NOT_LAID_OUT || r.isMeasureRequested() || relayoutTop != -1 && r.getLayoutBox().bottom >= relayoutTop) {
          var wasDisplayed = r.isDisplayed();
          r.measure();
          if (wasDisplayed && !r.isDisplayed()) {
            toUnload.push(r);
          }
        }
      }
    }

    // Unload all in one cycle.
    if (toUnload.length > 0) {
      this.vsync_.mutate(function () {
        toUnload.forEach(function (r) {
          return r.unload();
        });
      });
    }

    var viewportRect = this.viewport_.getRect();
    // Load viewport = viewport + 3x up/down when document is visible or
    // depending on prerenderSize in pre-render mode.
    var loadRect = undefined;
    if (this.visible_) {
      loadRect = _layoutRect.expandLayoutRect(viewportRect, 0.25, 2);
    } else if (this.prerenderSize_ > 0) {
      loadRect = _layoutRect.expandLayoutRect(viewportRect, 0, this.prerenderSize_ - 1);
    } else {
      loadRect = null;
    }

    var visibleRect = this.visible_
    // When the doc is visible, consider the viewport to be 25% larger,
    // to minimize effect from small scrolling and notify things that
    // they are in viewport just before they are actually visible.
    ? _layoutRect.expandLayoutRect(viewportRect, 0.25, 0.25) : viewportRect;

    // Phase 3: Schedule elements for layout within a reasonable distance from
    // current viewport.
    if (loadRect) {
      for (var i = 0; i < this.resources_.length; i++) {
        var r = this.resources_[i];
        if (r.getState() != ResourceState_.READY_FOR_LAYOUT || r.hasOwner()) {
          continue;
        }
        if (r.isDisplayed() && r.overlaps(loadRect)) {
          this.scheduleLayoutOrPreload_(r, /* layout */true);
        }
      }
    }

    // Phase 4: Trigger "viewport enter/exit" events.
    for (var i = 0; i < this.resources_.length; i++) {
      var r = this.resources_[i];
      if (r.hasOwner()) {
        continue;
      }
      // Note that when the document is not visible, neither are any of its
      // elements to reduce CPU cycles.
      var shouldBeInViewport = this.visible_ && r.isDisplayed() && r.overlaps(visibleRect);
      if (r.isInViewport() != shouldBeInViewport) {
        r.setInViewport(shouldBeInViewport);
      }
    }

    // Phase 5: Idle layout: layout more if we are otherwise not doing much.
    // TODO(dvoytenko): document/estimate IDLE timeouts and other constants
    if (this.visible_ && this.exec_.getSize() == 0 && this.queue_.getSize() == 0 && now > this.exec_.getLastDequeueTime() + 5000) {
      var idleScheduledCount = 0;
      for (var i = 0; i < this.resources_.length; i++) {
        var r = this.resources_[i];
        if (r.getState() == ResourceState_.READY_FOR_LAYOUT && !r.hasOwner() && r.isDisplayed()) {
          _log.log.fine(TAG_, 'idle layout:', r.debugid);
          this.scheduleLayoutOrPreload_(r, /* layout */false);
          idleScheduledCount++;
          if (idleScheduledCount >= 4) {
            break;
          }
        }
      }
    }
  };

  /**
   * Brings all resources into inactive state. First it sets "in viewport"
   * state to false and then it calls documentInactive callback.
   * @private
   */

  Resources.prototype.documentBecameInactive_ = function documentBecameInactive_() {
    for (var i = 0; i < this.resources_.length; i++) {
      var r = this.resources_[i];
      r.documentBecameInactive();
    }
  };

  /**
   * Dequeues layout and preload tasks from the queue and initiates their
   * execution.
   *
   * There are two main drivers to dequeueing: a task's score and timeout. The
   * score is built based on the resource's priority and viewport location
   * (see {@link calcTaskScore_}). Timeout depends on the priority and age
   * of tasks currently in the execution pool (see {@link calcTaskTimeout_}).
   *
   * @return {!time}
   * @private
   */

  Resources.prototype.work_ = function work_() {
    var now = _timer.timer.now();

    var scorer = this.calcTaskScore_.bind(this, this.viewport_.getRect(), Math.sign(this.lastVelocity_));

    var timeout = -1;
    var task = this.queue_.peek(scorer);
    if (task) {
      do {
        timeout = this.calcTaskTimeout_(task);
        _log.log.fine(TAG_, 'peek from queue:', task.id, 'sched at', task.scheduleTime, 'score', scorer(task), 'timeout', timeout);
        if (timeout > 16) {
          break;
        }

        this.queue_.dequeue(task);

        // Do not override a task in execution. This task will have to wait
        // until the current one finished the execution.
        var executing = this.exec_.getTaskById(task.id);
        if (!executing) {
          // Ensure that task can prerender
          task.promise = task.callback(this.visible_);
          task.startTime = now;
          _log.log.fine(TAG_, 'exec:', task.id, 'at', task.startTime);
          this.exec_.enqueue(task);
          task.promise.then(this.taskComplete_.bind(this, task, true), this.taskComplete_.bind(this, task, false))['catch'](_error.reportError);
        } else {
          // Reschedule post execution.
          executing.promise.then(this.reschedule_.bind(this, task), this.reschedule_.bind(this, task));
        }

        task = this.queue_.peek(scorer);
        timeout = -1;
      } while (task);
    }

    _log.log.fine(TAG_, 'queue size:', this.queue_.getSize());
    _log.log.fine(TAG_, 'exec size:', this.exec_.getSize());

    if (timeout >= 0) {
      // Work pass.
      return timeout;
    }

    // Idle pass.
    var nextPassDelay = (now - this.exec_.getLastDequeueTime()) * 2;
    nextPassDelay = Math.max(Math.min(30000, nextPassDelay), 5000);
    return nextPassDelay;
  };

  /**
   * Calculates the task's score. A task with the lowest score will be dequeued
   * from the queue the first.
   *
   * There are three components of the score: element's priority, operation or
   * offset priority and viewport priority.
   *
   * Element's priority is constant of the element's name. E.g. amp-img has a
   * priority of 0, while amp-ad has a priority of 2.
   *
   * The operation (offset) priority is the priority of the task. A layout is
   * a high-priority task while preload is a lower-priority task.
   *
   * Viewport priority is a function of the distance of the element from the
   * currently visible viewports. The elements in the visible viewport get
   * higher priority and further away from the viewport get lower priority.
   * This priority also depends on whether or not the user is scrolling towards
   * this element or away from it.
   *
   * @param {!LayoutRect} viewportRect
   * @param {number} dir
   * @param {!TaskDef} task
   * @private
   */

  Resources.prototype.calcTaskScore_ = function calcTaskScore_(viewportRect, dir, task) {
    var box = task.resource.getLayoutBox();
    var posPriority = Math.floor((box.top - viewportRect.top) / viewportRect.height);
    if (posPriority != 0 && Math.sign(posPriority) != (dir || 1)) {
      posPriority *= 2;
    }
    posPriority = Math.abs(posPriority);
    return task.priority * PRIORITY_BASE_ + posPriority;
  };

  /**
   * Calculates the timeout of a task. The timeout depends on two main factors:
   * the priorities of the tasks currently in the execution pool and their age.
   * The timeout is calculated against each task in the execution pool and the
   * maximum value is returned.
   *
   * A task is penalized with higher timeout values when it's lower in priority
   * than the task in the execution pool. However, this penalty is judged
   * against the age of the executing task. If it has been in executing for
   * some time, the penalty is reduced.
   *
   * @param {!TaskDef} task
   * @private
   */

  Resources.prototype.calcTaskTimeout_ = function calcTaskTimeout_(task) {
    if (this.exec_.getSize() == 0) {
      return 0;
    }

    var now = _timer.timer.now();
    var timeout = 0;
    this.exec_.forEach(function (other) {
      // Higher priority tasks get the head start. Currently 500ms per a drop
      // in priority (note that priority is 10-based).
      var penalty = Math.max((task.priority - other.priority) * PRIORITY_PENALTY_TIME_, 0);
      // TODO(dvoytenko): Consider running total and not maximum.
      timeout = Math.max(timeout, penalty - (now - other.startTime));
    });

    return timeout;
  };

  /**
   * @param {!TaskDef} task
   * @private
   */

  Resources.prototype.reschedule_ = function reschedule_(task) {
    if (!this.queue_.getTaskById(task.id)) {
      this.queue_.enqueue(task);
    }
  };

  /**
   * @param {!TaskDef} task
   * @param {boolean} success
   * @param {*=} opt_reason
   * @return {!Promise|undefined}
   * @private
   */

  Resources.prototype.taskComplete_ = function taskComplete_(task, success, opt_reason) {
    this.exec_.dequeue(task);
    this.schedulePass(POST_TASK_PASS_DELAY_);
    if (!success) {
      _log.log.error(TAG_, 'task failed:', task.id, task.resource.debugid, opt_reason);
      return Promise.reject(opt_reason);
    }
  };

  /**
   * Schedules change of the element's height.
   * @param {!Resource} resource
   * @param {number} newHeight
   * @param {boolean} force
   * @param {function=} opt_callback A callback function.
   * @private
   */

  Resources.prototype.scheduleChangeHeight_ = function scheduleChangeHeight_(resource, newHeight, force, opt_callback) {
    resource.resetPendingChangeHeight();
    if (resource.getLayoutBox().height == newHeight) {
      // Nothing to do.
      return;
    }

    var request = null;
    for (var i = 0; i < this.requestsChangeHeight_.length; i++) {
      if (this.requestsChangeHeight_[i].resource == resource) {
        request = this.requestsChangeHeight_[i];
        break;
      }
    }
    if (request) {
      request.newHeight = newHeight;
      request.force = force || request.force;
      request.callback = opt_callback;
    } else {
      this.requestsChangeHeight_.push( /** {!ChangeHeightRequestDef}*/{
        resource: resource,
        newHeight: newHeight,
        force: force,
        callback: opt_callback
      });
    }
    this.schedulePassVsync();
  };

  /**
   * Schedules deferred mutate.
   * @param {!Resource} resource
   * @param {!Function} callback
   * @private
   */

  Resources.prototype.scheduleDeferredMutate_ = function scheduleDeferredMutate_(resource, callback) {
    this.deferredMutates_.push(callback);
  };

  /**
   * Schedules layout or preload for the specified resource.
   * @param {!Resource} resource
   * @param {boolean} layout
   * @param {number=} opt_parentPriority
   * @private
   */

  Resources.prototype.scheduleLayoutOrPreload_ = function scheduleLayoutOrPreload_(resource, layout, opt_parentPriority) {
    _asserts.assert(resource.getState() != ResourceState_.NOT_BUILT && resource.isDisplayed(), 'Not ready for layout: %s (%s)', resource.debugid, resource.getState());
    // Don't schedule elements that can't prerender, they won't be allowed
    // to execute anyway.
    if (!this.visible_ && !resource.prerenderAllowed()) {
      return;
    }
    if (!resource.isInViewport() && !resource.renderOutsideViewport()) {
      return;
    }
    if (layout) {
      this.schedule_(resource, LAYOUT_TASK_ID_, LAYOUT_TASK_OFFSET_, opt_parentPriority || 0, resource.startLayout.bind(resource));
    } else {
      this.schedule_(resource, PRELOAD_TASK_ID_, PRELOAD_TASK_OFFSET_, opt_parentPriority || 0, resource.startLayout.bind(resource));
    }
  };

  /**
   * Schedules layout or preload for the sub-resources of the specified
   * resource.
   * @param {!Resource} parentResource
   * @param {boolean} layout
   * @param {!Array<!Element>} subElements
   * @private
   */

  Resources.prototype.scheduleLayoutOrPreloadForSubresources_ = function scheduleLayoutOrPreloadForSubresources_(parentResource, layout, subElements) {
    var _this7 = this;

    var resources = [];
    this.discoverResourcesForArray_(parentResource, subElements, function (resource) {
      if (resource.getState() != ResourceState_.NOT_BUILT) {
        resources.push(resource);
      }
    });
    if (resources.length > 0) {
      resources.forEach(function (resource) {
        resource.measure();
        if (resource.getState() == ResourceState_.READY_FOR_LAYOUT && resource.isDisplayed()) {
          _this7.scheduleLayoutOrPreload_(resource, layout, parentResource.getPriority());
        }
      });
    }
  };

  /**
   * Schedules a task.
   * @param {!Resource} resource
   * @param {string} localId
   * @param {number} priorityOffset
   * @param {number} parentPriority
   * @param {function():!Promise} callback
   * @private
   */

  Resources.prototype.schedule_ = function schedule_(resource, localId, priorityOffset, parentPriority, callback) {
    var taskId = resource.debugid + '#' + localId;

    var task = {
      id: taskId,
      resource: resource,
      priority: Math.max(resource.getPriority(), parentPriority) + priorityOffset,
      callback: callback,
      scheduleTime: _timer.timer.now()
    };
    _log.log.fine(TAG_, 'schedule:', task.id, 'at', task.scheduleTime);

    // Only schedule a new task if there's no one enqueued yet or if this task
    // has a higher priority.
    var queued = this.queue_.getTaskById(taskId);
    if (!queued || task.priority < queued.priority) {
      if (queued) {
        this.queue_.dequeue(queued);
      }
      this.queue_.enqueue(task);
      this.schedulePass(this.calcTaskTimeout_(task));
    }
    task.resource.layoutScheduled();
  };

  /**
   * Updates inViewport state for the specified sub-resources of a resource.
   * @param {!Resource} parentResource
   * @param {!Array<!Element>} subElements
   * @param {boolean} inLocalViewport
   * @private
   */

  Resources.prototype.updateInViewportForSubresources_ = function updateInViewportForSubresources_(parentResource, subElements, inLocalViewport) {
    var inViewport = parentResource.isInViewport() && inLocalViewport;
    this.discoverResourcesForArray_(parentResource, subElements, function (resource) {
      resource.setInViewport(inViewport);
    });
  };

  /**
   * Finds resources within the parent resource's shallow subtree.
   * @param {!Resource} parentResource
   * @param {!Array<!Element>} elements
   * @param {function(!Resource)} callback
   */

  Resources.prototype.discoverResourcesForArray_ = function discoverResourcesForArray_(parentResource, elements, callback) {
    var _this8 = this;

    elements.forEach(function (element) {
      _asserts.assert(parentResource.element.contains(element));
      _this8.discoverResourcesForElement_(element, callback);
    });
  };

  /**
   * @param {!Element} element
   * @param {function(!Resource)} callback
   */

  Resources.prototype.discoverResourcesForElement_ = function discoverResourcesForElement_(element, callback) {
    // Breadth-first search.
    if (element.classList.contains('-amp-element')) {
      callback(this.getResourceForElement(element));
    } else {
      var ampElements = element.getElementsByClassName('-amp-element');
      var seen = [];
      for (var i = 0; i < ampElements.length; i++) {
        var ampElement = ampElements[i];
        var covered = false;
        for (var j = 0; j < seen.length; j++) {
          if (seen[j].contains(ampElement)) {
            covered = true;
            break;
          }
        }
        if (!covered) {
          seen.push(ampElement);
          callback(this.getResourceForElement(ampElement));
        }
      }
    }
  };

  return Resources;
})();

exports.Resources = Resources;

var Resource = (function () {

  /**
   * @param {number} id
   * @param {!AmpElement} element
   * @param {!Resources} resources
   */

  function Resource(id, element, resources) {
    var _this9 = this;

    babelHelpers.classCallCheck(this, Resource);

    /** @private {number} */
    this.id_ = id;

    /** @export @const {!AmpElement} */
    this.element = element;

    /** @export @const {string} */
    this.debugid = element.tagName.toLowerCase() + '#' + id;

    /** @private {!Resources} */
    this.resources_ = resources;

    /** @private {boolean} */
    this.blacklisted_ = false;

    /** @const {!AmpElement|undefined|null} */
    this.owner_ = undefined;

    /** @const {number} */
    this.priority_ = getElementPriority(element.tagName);

    /** @private {!ResourceState_} */
    this.state_ = element.isBuilt() ? ResourceState_.NOT_LAID_OUT : ResourceState_.NOT_BUILT;

    /** @private {number} */
    this.layoutCount_ = 0;

    /** @private {!LayoutRect} */
    this.layoutBox_ = _layoutRect.layoutRectLtwh(-10000, -10000, 0, 0);

    /** @private {!LayoutRect} */
    this.initialLayoutBox_ = this.layoutBox_;

    /** @private {boolean} */
    this.isMeasureRequested_ = false;

    /** @private {boolean} */
    this.isInViewport_ = false;

    /** @private {?Promise<undefined>} */
    this.layoutPromise_ = null;

    /**
     * Only used in the "runtime off" case when the monitoring code needs to
     * known when the element is upgraded.
     * @private {!Function|undefined}
     */
    this.onUpgraded_ = undefined;

    /**
     * Pending change height that was requested but could not be satisfied.
     * @private {number|undefined}
     */
    this.pendingChangeHeight_ = undefined;

    /** @private @const {!Promise} */
    this.loadPromise_ = new Promise(function (resolve) {
      /** @const  */
      _this9.loadPromiseResolve_ = resolve;
    });
  }

  /**
   * A scheduling queue for Resources.
   *
   * Visible only for testing!
   *
   * @private
   */

  /**
   * Returns resource's ID.
   * @return {number}
   */

  Resource.prototype.getId = function getId() {
    return this.id_;
  };

  /**
   * Returns an owner element or null.
   * @return {?AmpElement}
   */

  Resource.prototype.getOwner = function getOwner() {
    if (this.owner_ === undefined) {
      for (var n = this.element; n; n = n.parentElement) {
        if (n[OWNER_PROP_]) {
          this.owner_ = n[OWNER_PROP_];
          break;
        }
      }
      if (this.owner_ === undefined) {
        this.owner_ = null;
      }
    }
    return this.owner_;
  };

  /**
   * Whether the resource has an owner.
   * @return {boolean}
   */

  Resource.prototype.hasOwner = function hasOwner() {
    return !!this.getOwner();
  };

  /**
   * Returns the resource's element priority.
   * @return {number}
   */

  Resource.prototype.getPriority = function getPriority() {
    return this.priority_;
  };

  /**
   * Returns the resource's state. See {@link ResourceState_} for details.
   * @return {!ResourceState_}
   */

  Resource.prototype.getState = function getState() {
    return this.state_;
  };

  /**
   * Requests the resource's element to be built. See {@link AmpElement.build}
   * for details.
   * @param {boolean} force
   * @return {boolean}
   */

  Resource.prototype.build = function build(force) {
    if (this.blacklisted_ || !this.element.isUpgraded()) {
      return false;
    }
    var built = undefined;
    try {
      built = this.element.build(force);
    } catch (e) {
      _log.log.error(TAG_, 'failed to build:', this.debugid, e);
      built = false;
      this.blacklisted_ = true;
    }
    if (!built) {
      return false;
    }

    if (this.hasBeenMeasured()) {
      this.state_ = ResourceState_.READY_FOR_LAYOUT;
    } else {
      this.state_ = ResourceState_.NOT_LAID_OUT;
    }
    return true;
  };

  /**
   * Optionally hides or shows the element depending on the media query.
   */

  Resource.prototype.applySizesAndMediaQuery = function applySizesAndMediaQuery() {
    this.element.applySizesAndMediaQuery();
  };

  /**
   * Instructs the element to change its size and transitions to the state
   * awaiting the measure and possibly layout.
   * @param {number} newHeight
   * @param {function=} opt_callback A callback function.
   */

  Resource.prototype.changeHeight = function changeHeight(newHeight, opt_callback) {
    this.element. /*OK*/changeHeight(newHeight);
    // Schedule for re-layout.
    if (this.state_ != ResourceState_.NOT_BUILT) {
      this.state_ = ResourceState_.NOT_LAID_OUT;
    }
    if (opt_callback) {
      opt_callback();
    }
  };

  /**
   * Informs the element that it's either overflown or not.
   * @param {boolean} overflown
   * @param {number} requestedHeight
   */

  Resource.prototype.overflowCallback = function overflowCallback(overflown, requestedHeight) {
    if (overflown) {
      this.pendingChangeHeight_ = requestedHeight;
    }
    this.element.overflowCallback(overflown, requestedHeight);
  };

  /** @private */

  Resource.prototype.resetPendingChangeHeight = function resetPendingChangeHeight() {
    this.pendingChangeHeight_ = undefined;
  };

  /**
   * @return {number|undefined}
   */

  Resource.prototype.getPendingChangeHeight = function getPendingChangeHeight() {
    return this.pendingChangeHeight_;
  };

  /**
   * Measures the resource's boundaries. Only allowed for upgraded elements.
   */

  Resource.prototype.measure = function measure() {
    this.isMeasureRequested_ = false;
    var box = this.resources_.viewport_.getLayoutRect(this.element);
    // Note that "left" doesn't affect readiness for the layout.
    if (this.state_ == ResourceState_.NOT_LAID_OUT || this.layoutBox_.top != box.top || this.layoutBox_.width != box.width || this.layoutBox_.height != box.height) {

      if (this.element.isUpgraded() && this.state_ != ResourceState_.NOT_BUILT && (this.state_ == ResourceState_.NOT_LAID_OUT || this.element.isRelayoutNeeded())) {
        this.state_ = ResourceState_.READY_FOR_LAYOUT;
      }
    }
    if (!this.hasBeenMeasured()) {
      this.initialLayoutBox_ = box;
    }
    this.layoutBox_ = box;
    this.element.updateLayoutBox(box);
  };

  /**
   * @return {boolean}
   */

  Resource.prototype.isMeasureRequested = function isMeasureRequested() {
    return this.isMeasureRequested_;
  };

  /**
   * Checks if the current resource has been measured.
   * @return {boolean}
   */

  Resource.prototype.hasBeenMeasured = function hasBeenMeasured() {
    return this.layoutBox_.top != -10000;
  };

  /**
   * Requests the element to be remeasured on the next pass.
   */

  Resource.prototype.requestMeasure = function requestMeasure() {
    if (this.state_ == ResourceState_.NOT_BUILT) {
      // Can't measure unbuilt element.
      return;
    }
    this.isMeasureRequested_ = true;
  };

  /**
   * Returns a previously measured layout box.
   * @return {!LayoutRect}
   */

  Resource.prototype.getLayoutBox = function getLayoutBox() {
    return this.layoutBox_;
  };

  /**
   * Returns the first measured layout box.
   * @return {!LayoutRect}
   */

  Resource.prototype.getInitialLayoutBox = function getInitialLayoutBox() {
    return this.initialLayoutBox_;
  };

  /**
   * Whether the resource is displayed, i.e. if it has non-zero width and
   * height.
   * @return {boolean}
   */

  Resource.prototype.isDisplayed = function isDisplayed() {
    return this.layoutBox_.height > 0 && this.layoutBox_.width > 0;
  };

  /**
   * Whether the element's layout box overlaps with the specified rect.
   * @param {!LayoutRect} rect
   * @return {boolean}
   */

  Resource.prototype.overlaps = function overlaps(rect) {
    return _layoutRect.layoutRectsOverlap(this.layoutBox_, rect);
  };

  /**
   * Whether this element can be pre-rendered.
   * @return {boolean}
   */

  Resource.prototype.prerenderAllowed = function prerenderAllowed() {
    return this.element.prerenderAllowed();
  };

  /**
   * Whether this is allowed to render when not in viewport.
   * @return {boolean}
   */

  Resource.prototype.renderOutsideViewport = function renderOutsideViewport() {
    return this.element.renderOutsideViewport();
  };

  /**
   * Sets the resource's state to LAYOUT_SCHEDULED.
   */

  Resource.prototype.layoutScheduled = function layoutScheduled() {
    this.state_ = ResourceState_.LAYOUT_SCHEDULED;
  };

  /**
   * Starts the layout of the resource. Returns the promise that will yield
   * once layout is complete. Only allowed to be called on a upgraded, built
   * and displayed element.
   * @param {boolean} isDocumentVisible
   * @return {!Promise}
   */

  Resource.prototype.startLayout = function startLayout(isDocumentVisible) {
    var _this10 = this;

    if (this.layoutPromise_) {
      return this.layoutPromise_;
    }
    if (this.state_ == ResourceState_.LAYOUT_COMPLETE) {
      return Promise.resolve();
    }
    if (this.state_ == ResourceState_.LAYOUT_FAILED) {
      return Promise.reject('already failed');
    }

    _asserts.assert(this.state_ != ResourceState_.NOT_BUILT, 'Not ready to start layout: %s (%s)', this.debugid, this.state_);

    if (!isDocumentVisible && !this.prerenderAllowed()) {
      _log.log.fine(TAG_, 'layout canceled due to non pre-renderable element:', this.debugid, this.state_);
      this.state_ = ResourceState_.READY_FOR_LAYOUT;
      return Promise.resolve();
    }

    if (!this.renderOutsideViewport() && !this.isInViewport()) {
      _log.log.fine(TAG_, 'layout canceled due to element not being in viewport:', this.debugid, this.state_);
      this.state_ = ResourceState_.READY_FOR_LAYOUT;
      return Promise.resolve();
    }

    // Double check that the element has not disappeared since scheduling
    this.measure();
    if (!this.isDisplayed()) {
      _log.log.fine(TAG_, 'layout canceled due to element loosing display:', this.debugid, this.state_);
      return Promise.resolve();
    }

    // Not-wanted re-layouts are ignored.
    if (this.layoutCount_ > 0 && !this.element.isRelayoutNeeded()) {
      _log.log.fine(TAG_, 'layout canceled since it wasn\'t requested:', this.debugid, this.state_);
      this.state_ = ResourceState_.LAYOUT_COMPLETE;
      return Promise.resolve();
    }

    _log.log.fine(TAG_, 'start layout:', this.debugid, 'count:', this.layoutCount_);
    this.layoutCount_++;
    this.state_ = ResourceState_.LAYOUT_SCHEDULED;

    this.resources_.framerate_.collect(this.element);
    var promise = undefined;
    try {
      promise = this.element.layoutCallback();
    } catch (e) {
      return Promise.reject(e);
    }

    this.layoutPromise_ = promise.then(function () {
      return _this10.layoutComplete_(true);
    }, function (reason) {
      return _this10.layoutComplete_(false, reason);
    });
    this.layoutPromise_.then(this.whenFirstLayoutCompleteResolve_);
    return this.layoutPromise_;
  };

  /**
   * @param {boolean} success
   * @param {*=} opt_reason
   * @return {!Promise|undefined}
   */

  Resource.prototype.layoutComplete_ = function layoutComplete_(success, opt_reason) {
    this.loadPromiseResolve_();
    this.layoutPromise_ = null;
    this.state_ = success ? ResourceState_.LAYOUT_COMPLETE : ResourceState_.LAYOUT_FAILED;
    if (success) {
      _log.log.fine(TAG_, 'layout complete:', this.debugid);
    } else {
      _log.log.fine(TAG_, 'loading failed:', this.debugid, opt_reason);
      return Promise.reject(opt_reason);
    }
  };

  /**
   * Returns a promise that is resolved when this resource is laid out
   * for the first time and the resource was loaded.
   * @return {!Promise}
   */

  Resource.prototype.loaded = function loaded() {
    return this.loadPromise_;
  };

  /**
   * Whether the resource is currently visible in the viewport.
   * @return {boolean}
   */

  Resource.prototype.isInViewport = function isInViewport() {
    return this.isInViewport_;
  };

  /**
   * Updates the inViewport state of the element.
   * @param {boolean} inViewport
   */

  Resource.prototype.setInViewport = function setInViewport(inViewport) {
    if (inViewport == this.isInViewport_) {
      return;
    }
    _log.log.fine(TAG_, 'inViewport:', this.debugid, inViewport);
    this.isInViewport_ = inViewport;
    this.element.viewportCallback(inViewport);
  };

  /**
   * Calls element's documentInactiveCallback callback and resets state for
   * relayout in case document becomes active again.
   */

  Resource.prototype.documentBecameInactive = function documentBecameInactive() {
    if (this.state_ == ResourceState_.NOT_BUILT) {
      return;
    }
    if (this.isInViewport()) {
      this.setInViewport(false);
    }
    if (this.element.documentInactiveCallback()) {
      this.state_ = ResourceState_.NOT_LAID_OUT;
      this.layoutCount_ = 0;
    }
  };

  /**
   * Called when a previously visible element has become invisible.
   */

  Resource.prototype.unload = function unload() {
    // TODO(dvoytenko): Likely warrants its own callback and re-layout rules.
    this.documentBecameInactive();
  };

  /**
   * Only allowed in dev mode when runtime is turned off. Performs all steps
   * necessary to render an element.
   * @return {!Promise}
   * @export
   */

  Resource.prototype.forceAll = function forceAll() {
    var _this11 = this;

    _asserts.assert(!this.resources_.isRuntimeOn_);
    var p = Promise.resolve();
    if (this.state_ == ResourceState_.NOT_BUILT) {
      if (!this.element.isUpgraded()) {
        p = p.then(function () {
          return new Promise(function (resolve) {
            _this11.onUpgraded_ = resolve;
          });
        });
      }
      p = p.then(function () {
        _this11.onUpgraded_ = undefined;
        _this11.build(true);
      });
    }
    return p.then(function () {
      _this11.applySizesAndMediaQuery();
      _this11.measure();
      if (_this11.layoutPromise_) {
        return _this11.layoutPromise_;
      }
      if (_this11.state_ == ResourceState_.LAYOUT_COMPLETE || _this11.state_ == ResourceState_.LAYOUT_FAILED || _this11.layoutCount_ > 0) {
        return;
      }
      if (!_this11.isDisplayed()) {
        return;
      }
      _this11.layoutCount_++;
      return _this11.element.layoutCallback();
    });
  };

  return Resource;
})();

exports.Resource = Resource;

var TaskQueue_ = (function () {
  function TaskQueue_() {
    babelHelpers.classCallCheck(this, TaskQueue_);

    /** @private @const {!Array<!TaskDef>} */
    this.tasks_ = [];

    /** @private @const {!Object<string, !TaskDef>} */
    this.taskIdMap_ = {};

    /** @private {!time} */
    this.lastEnqueueTime_ = 0;

    /** @private {!time} */
    this.lastDequeueTime_ = 0;
  }

  /**
   * @param {!Element|!Array<!Element>} elements
   * @return {!Array<!Element>}
   */

  /**
   * Size of the queue.
   * @return {number}
   */

  TaskQueue_.prototype.getSize = function getSize() {
    return this.tasks_.length;
  };

  /**
   * Last time a task was enqueued.
   * @return {!time}
   */

  TaskQueue_.prototype.getLastEnqueueTime = function getLastEnqueueTime() {
    return this.lastEnqueueTime_;
  };

  /**
   * Last time a task was dequeued.
   * @return {!time}
   */

  TaskQueue_.prototype.getLastDequeueTime = function getLastDequeueTime() {
    return this.lastDequeueTime_;
  };

  /**
   * Returns the task with the specified ID or null.
   * @param {string} taskId
   * @return {?TaskDef}
   */

  TaskQueue_.prototype.getTaskById = function getTaskById(taskId) {
    return this.taskIdMap_[taskId] || null;
  };

  /**
   * Enqueues the task. If the task is already in the queue, the error is
   * thrown.
   * @param {!TaskDef} task
   */

  TaskQueue_.prototype.enqueue = function enqueue(task) {
    _asserts.assert(!this.taskIdMap_[task.id], 'Task already enqueued: %s', task.id);
    this.tasks_.push(task);
    this.taskIdMap_[task.id] = task;
    this.lastEnqueueTime_ = _timer.timer.now();
  };

  /**
   * Dequeues the task and returns "true" if dequeueing is successful. Otherwise
   * returns "false", e.g. when this task is not currently enqueued.
   * @param {!TaskDef} task
   * @return {boolean}
   */

  TaskQueue_.prototype.dequeue = function dequeue(task) {
    var existing = this.taskIdMap_[task.id];
    if (!existing) {
      return false;
    }
    this.tasks_.splice(this.tasks_.indexOf(existing), 1);
    delete this.taskIdMap_[task.id];
    this.lastDequeueTime_ = _timer.timer.now();
    return true;
  };

  /**
   * Returns the task with the minimal score based on the provided scoring
   * callback.
   * @param {function(!TaskDef):number} scorer
   * @return {?TaskDef}
   */

  TaskQueue_.prototype.peek = function peek(scorer) {
    var minScore = 1e6;
    var minTask = null;
    for (var i = 0; i < this.tasks_.length; i++) {
      var task = this.tasks_[i];
      var score = scorer(task);
      if (score < minScore) {
        minScore = score;
        minTask = task;
      }
    }
    return minTask;
  };

  /**
   * Iterates over all tasks in queue in the insertion order.
   * @param {function(!TaskDef)} callback
   */

  TaskQueue_.prototype.forEach = function forEach(callback) {
    this.tasks_.forEach(callback);
  };

  return TaskQueue_;
})();

exports.TaskQueue_ = TaskQueue_;
function elements_(elements) {
  if (elements.length !== undefined) {
    return elements;
  }
  return [elements];
}

/**
 * Resource state.
 *
 * Visible for testing only!
 *
 * @enum {number}
 * @private
 */
var ResourceState_ = {
  /**
   * The resource has not been built yet. Measures, layouts, preloads or
   * viewport signals are not allowed.
   */
  NOT_BUILT: 0,

  /**
   * The resource has been built, but not measured yet and not yet ready
   * for layout.
   */
  NOT_LAID_OUT: 1,

  /**
   * The resource has been built and measured and ready for layout.
   */
  READY_FOR_LAYOUT: 2,

  /**
   * The resource is currently scheduled for layout.
   */
  LAYOUT_SCHEDULED: 3,

  /**
   * The resource has been laid out.
   */
  LAYOUT_COMPLETE: 4,

  /**
   * The latest resource's layout failed.
   */
  LAYOUT_FAILED: 5
};

exports.ResourceState_ = ResourceState_;
/**
 * The internal structure for the task.
 * @typedef {{
 *   id: string,
 *   resource: !Resource,
 *   priority: number,
 *   callback: function(boolean),
 *   scheduleTime: time,
 *   startTime: time,
 *   promise: (!Promise|undefined)
 * }}
 * @private
 */
var TaskDef = undefined;

/**
 * @param {!Window} win
 * @return {!Resources}
 */

function installResourcesService(win) {
  return _service.getService(win, 'resources', function () {
    return new Resources(win);
  });
}

;

},{"../asserts":16,"../document-ready":23,"../dom":25,"../error":27,"../focus-history":32,"../input":34,"../layout-rect":36,"../log":39,"../pass":42,"../service":53,"../timer":69,"./framerate-impl":56,"./viewer-impl":60,"./viewport-impl":61,"./vsync-impl":62}],59:[function(require,module,exports){
exports.__esModule = true;
exports.installStandardActions = installStandardActions;
/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _service = require('../service');

var _actionImpl = require('./action-impl');

var _resourcesImpl = require('./resources-impl');

/**
 * This service contains implementations of some of the most typical actions,
 * such as hiding DOM elements.
 * @private Visible for testing.
 */

var StandardActions = (function () {
  /**
   * @param {!Window} win
   */

  function StandardActions(win) {
    babelHelpers.classCallCheck(this, StandardActions);

    /** @const @private {!ActionService} */
    this.actions_ = _actionImpl.installActionService(win);

    /** @const @private {!Resources} */
    this.resources_ = _resourcesImpl.installResourcesService(win);

    this.actions_.addGlobalMethodHandler('hide', this.handleHide.bind(this));
  }

  /**
   * @param {!Window} win
   * @return {!ActionService}
   */

  /**
   * Handles "hide" action. This is a very simple action where "display: none"
   * is applied to the target element.
   * @param {!ActionInvocation} invocation
   */

  StandardActions.prototype.handleHide = function handleHide(invocation) {
    this.resources_.mutateElement(invocation.target, function () {
      invocation.target.style.display = 'none';
    });
  };

  return StandardActions;
})();

exports.StandardActions = StandardActions;

function installStandardActions(win) {
  return _service.getService(win, 'standard-actions', function () {
    return new StandardActions(win);
  });
}

;

},{"../service":53,"./action-impl":54,"./resources-impl":58}],60:[function(require,module,exports){
exports.__esModule = true;
exports.installViewerService = installViewerService;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _observable = require('../observable');

var _asserts = require('../asserts');

var _documentState = require('../document-state');

var _mode = require('../mode');

var _service = require('../service');

var _log = require('../log');

var _url = require('../url');

var _platform = require('../platform');

var _timer = require('../timer');

var _error = require('../error');

var TAG_ = 'Viewer';
var SENTINEL_ = '__AMP__';

/**
 * Duration in milliseconds to wait for viewerOrigin to be set before an empty
 * string is returned.
 * @const
 * @private {number}
 */
var VIEWER_ORIGIN_TIMEOUT_ = 1000;

/**
 * The type of the viewport.
 * @enum {string}
 */
var ViewportType = {

  /**
   * Viewer leaves sizing and scrolling up to the AMP document's window.
   */
  NATURAL: 'natural',

  /**
   * Viewer sets and updates sizing and scrolling.
   */
  VIRTUAL: 'virtual',

  /**
   * This is AMP-specific type and doesn't come from viewer. This is the type
   * that AMP sets when Viewer has requested "natural" viewport on a iOS
   * device.
   * See:
   * https://github.com/ampproject/amphtml/blob/master/spec/amp-html-layout.md
   * and {@link ViewportBindingNaturalIosEmbed_} for more details.
   */
  NATURAL_IOS_EMBED: 'natural-ios-embed'
};

exports.ViewportType = ViewportType;
/**
 * Visibility state of the AMP document.
 * @enum {string}
 */
var VisibilityState = {
  /**
   * The AMP document is being pre-rendered before being shown.
   */
  PRERENDER: 'prerender',

  /**
   * The AMP document is currently active and visible.
   */
  VISIBLE: 'visible',

  /**
   * The AMP document is active but the browser tab or AMP app is not.
   */
  HIDDEN: 'hidden',

  /**
   * The AMP document is visible, but the user has started swiping away from
   * it. The runtime may stop active playback.
   */
  PAUSED: 'paused',

  /**
   * The AMP document is no longer active because the user swiped away or
   * closed the viewer. The document may become visible again later.
   */
  INACTIVE: 'inactive'
};

exports.VisibilityState = VisibilityState;
/**
 * These domains are trusted with more sensitive viewer operations such as
 * propagating the referrer. If you believe your domain should be here,
 * file the issue on GitHub to discuss. The process will be similar
 * (but somewhat more stringent) to the one described in the [3p/README.md](
 * https://github.com/ampproject/amphtml/blob/master/3p/README.md)
 *
 * @export {!Array<!RegExp>}
 */
var TRUSTED_VIEWER_HOSTS = [/^(.*\.)?(google)(\.com?)?(\.[a-z]{2})?$/];

exports.TRUSTED_VIEWER_HOSTS = TRUSTED_VIEWER_HOSTS;
/**
 * An AMP representation of the Viewer. This class doesn't do any work itself
 * but instead delegates everything to the actual viewer. This class and the
 * actual Viewer are connected via "AMP.viewer" using three methods:
 * {@link getParam}, {@link receiveMessage} and {@link setMessageDeliverer}.
 */

var Viewer = (function () {

  /**
   * @param {!Window} win
   */

  function Viewer(win) {
    var _this = this;

    babelHelpers.classCallCheck(this, Viewer);

    /** @const {!Window} */
    this.win = win;

    /** @private @const {boolean} */
    this.isEmbedded_ = this.win.parent && this.win.parent != this.win;

    /** @const {!DocumentState} */
    this.docState_ = _documentState.documentStateFor(this.win);

    /** @private {boolean} */
    this.isRuntimeOn_ = true;

    /** @private {boolean} */
    this.overtakeHistory_ = false;

    /** @private {string} */
    this.visibilityState_ = VisibilityState.VISIBLE;

    /** @private {string} */
    this.viewerVisibilityState_ = this.visibilityState_;

    /** @private {number} */
    this.prerenderSize_ = 1;

    /** @private {string} */
    this.viewportType_ = ViewportType.NATURAL;

    /** @private {number} */
    this.viewportWidth_ = 0;

    /** @private {number} */
    this.viewportHeight_ = 0;

    /** @private {number} */
    this. /*OK*/scrollTop_ = 0;

    /** @private {number} */
    this.paddingTop_ = 0;

    /** @private {!Observable<boolean>} */
    this.runtimeOnObservable_ = new _observable.Observable();

    /** @private {!Observable} */
    this.visibilityObservable_ = new _observable.Observable();

    /** @private {!Observable} */
    this.viewportObservable_ = new _observable.Observable();

    /** @private {!Observable<!ViewerHistoryPoppedEventDef>} */
    this.historyPoppedObservable_ = new _observable.Observable();

    /** @private {!Observable<!JSONObject>} */
    this.broadcastObservable_ = new _observable.Observable();

    /** @private {?function(string, *, boolean):(Promise<*>|undefined)} */
    this.messageDeliverer_ = null;

    /** @private {?string} */
    this.messagingOrigin_ = null;

    /** @private {!Array<!{eventType: string, data: *}>} */
    this.messageQueue_ = [];

    /** @const @private {!Object<string, string>} */
    this.params_ = {};

    /** @private {?function()} */
    this.whenFirstVisibleResolve_ = null;

    /**
     * This promise might be resolved right away if the current
     * document is already visible. See end of this constructor where we call
     * `this.onVisibilityChange_()`.
     * @private @const {!Promise}
     */
    this.whenFirstVisiblePromise_ = new Promise(function (resolve) {
      _this.whenFirstVisibleResolve_ = resolve;
    });

    // Params can be passed either via iframe name or via hash. Hash currently
    // has precedence.
    if (this.win.name && this.win.name.indexOf(SENTINEL_) == 0) {
      parseParams_(this.win.name.substring(SENTINEL_.length), this.params_);
    }
    if (this.win.location.hash) {
      parseParams_(this.win.location.hash, this.params_);
    }

    _log.log.fine(TAG_, 'Viewer params:', this.params_);

    this.isRuntimeOn_ = !parseInt(this.params_['off'], 10);
    _log.log.fine(TAG_, '- runtimeOn:', this.isRuntimeOn_);

    this.overtakeHistory_ = parseInt(this.params_['history'], 10) || this.overtakeHistory_;
    _log.log.fine(TAG_, '- history:', this.overtakeHistory_);

    this.setVisibilityState_(this.params_['visibilityState']);
    _log.log.fine(TAG_, '- visibilityState:', this.getVisibilityState());

    this.prerenderSize_ = parseInt(this.params_['prerenderSize'], 10) || this.prerenderSize_;
    _log.log.fine(TAG_, '- prerenderSize:', this.prerenderSize_);

    this.viewportType_ = this.params_['viewportType'] || this.viewportType_;
    // Configure scrolling parameters when AMP is embeded in a viewer on iOS.
    if (this.viewportType_ == ViewportType.NATURAL && this.isEmbedded_ && _platform.platform.isIos()) {
      this.viewportType_ = ViewportType.NATURAL_IOS_EMBED;
    }
    // Enable iOS Embedded mode so that it's easy to test against a more
    // realistic iOS environment.
    if (_platform.platform.isIos() && this.viewportType_ != ViewportType.NATURAL_IOS_EMBED && (_mode.getMode().localDev || _mode.getMode().development)) {
      this.viewportType_ = ViewportType.NATURAL_IOS_EMBED;
    }
    _log.log.fine(TAG_, '- viewportType:', this.viewportType_);

    this.viewportWidth_ = parseInt(this.params_['width'], 10) || this.viewportWidth_;
    _log.log.fine(TAG_, '- viewportWidth:', this.viewportWidth_);

    this.viewportHeight_ = parseInt(this.params_['height'], 10) || this.viewportHeight_;
    _log.log.fine(TAG_, '- viewportHeight:', this.viewportHeight_);

    this. /*OK*/scrollTop_ = parseInt(this.params_['scrollTop'], 10) || this. /*OK*/scrollTop_;
    _log.log.fine(TAG_, '- scrollTop:', this. /*OK*/scrollTop_);

    this.paddingTop_ = parseInt(this.params_['paddingTop'], 10) || this.paddingTop_;
    _log.log.fine(TAG_, '- padding-top:', this.paddingTop_);

    /** @private @const {boolean} */
    this.performanceTracking_ = this.params_['csi'] === '1';
    _log.log.fine(TAG_, '- performanceTracking:', this.performanceTracking_);

    /** @private {boolean} */
    this.hasBeenVisible_ = this.isVisible();

    // Wait for document to become visible.
    this.docState_.onVisibilityChanged(this.recheckVisibilityState_.bind(this));

    /**
     * This promise will resolve when communications channel has been
     * established or timeout in 20 seconds. The timeout is needed to avoid
     * this promise becoming a memory leak with accumulating undelivered
     * messages. The promise is only available when the document is embedded.
     * @private @const {?Promise}
     */
    this.messagingReadyPromise_ = this.isEmbedded_ ? _timer.timer.timeoutPromise(20000, new Promise(function (resolve) {
      /** @private @const {function()|undefined} */
      _this.messagingReadyResolver_ = resolve;
    }))['catch'](function (reason) {
      throw getChannelError(reason);
    }) : null;

    /**
     * A promise for non-essential messages. These messages should not fail
     * if there's no messaging channel set up. But ideally viewer would try to
     * deliver if at all possible. This promise is only available when the
     * document is embedded.
     * @private @const {?Promise}
     */
    this.messagingMaybePromise_ = this.isEmbedded_ ? this.messagingReadyPromise_['catch'](function (reason) {
      // Don't fail promise, but still report.
      _error.reportError(getChannelError(reason));
    }) : null;

    // Trusted viewer and referrer.
    var trustedViewerResolved = undefined;
    var trustedViewerPromise = undefined;
    if (!this.isEmbedded_) {
      // Not embedded in IFrame - can't trust the viewer.
      trustedViewerResolved = false;
      trustedViewerPromise = Promise.resolve(false);
    } else if (this.win.location.ancestorOrigins) {
      // Ancestors when available take precedence. This is the main API used
      // for this determination. Fallback is only done when this API is not
      // supported by the browser.
      trustedViewerResolved = this.win.location.ancestorOrigins.length > 0 && this.isTrustedViewerOrigin_(this.win.location.ancestorOrigins[0]);
      trustedViewerPromise = Promise.resolve(trustedViewerResolved);
    } else {
      // Wait for comms channel to confirm the origin.
      trustedViewerResolved = undefined;
      trustedViewerPromise = new Promise(function (resolve) {
        /** @const @private {!function(boolean)|undefined} */
        _this.trustedViewerResolver_ = resolve;
      });
    }

    /** @const @private {!Promise<boolean>} */
    this.isTrustedViewer_ = trustedViewerPromise;

    /** @const @private {!Promise<string>} */
    this.viewerOrigin_ = new Promise(function (resolve) {
      if (!_this.isEmbedded()) {
        // Viewer is only determined for iframed documents at this time.
        resolve('');
      } else if (_this.win.location.ancestorOrigins && _this.win.location.ancestorOrigins.length > 0) {
        resolve(_this.win.location.ancestorOrigins[0]);
      } else {
        // Race to resolve with a timer.
        _timer.timer.delay(function () {
          return resolve('');
        }, VIEWER_ORIGIN_TIMEOUT_);
        /** @private @const {!function(string)|undefined} */
        _this.viewerOriginResolver_ = resolve;
      }
    });

    /** @private {string} */
    this.unconfirmedReferrerUrl_ = this.isEmbedded() && 'referrer' in this.params_ && trustedViewerResolved !== false ? this.params_['referrer'] : this.win.document.referrer;

    /** @const @private {!Promise<string>} */
    this.referrerUrl_ = new Promise(function (resolve) {
      if (_this.isEmbedded() && 'referrer' in _this.params_) {
        // Viewer override, but only for whitelisted viewers. Only allowed for
        // iframed documents.
        _this.isTrustedViewer_.then(function (isTrusted) {
          if (isTrusted) {
            resolve(_this.params_['referrer']);
          } else {
            resolve(_this.win.document.referrer);
            if (_this.unconfirmedReferrerUrl_ != _this.win.document.referrer) {
              _this.win.setTimeout(function () {
                throw new Error('Untrusted viewer referrer override: ' + _this.unconfirmedReferrerUrl_ + ' at ' + _this.messagingOrigin_);
              });
              _this.unconfirmedReferrerUrl_ = _this.win.document.referrer;
            }
          }
        });
      } else {
        resolve(_this.win.document.referrer);
      }
    });

    // Remove hash - no reason to keep it around, but only when embedded.
    if (this.isEmbedded_) {
      var newUrl = _url.removeFragment(this.win.location.href);
      if (newUrl != this.win.location.href && this.win.history.replaceState) {
        // Persist the hash that we removed has location.originalHash.
        // This is currently used my mode.js to infer development mode.
        this.win.location.originalHash = this.win.location.hash;
        this.win.history.replaceState({}, '', newUrl);
        _log.log.fine(TAG_, 'replace url:' + this.win.location.href);
      }
    }

    // Check if by the time the `Viewer`
    // instance is constructed, the document is already `visible`.
    this.recheckVisibilityState_();
    this.onVisibilityChange_();
  }

  /**
   * Parses the viewer parameters as a string.
   *
   * Visible for testing only.
   *
   * @param {string} str
   * @param {!Object<string, string>} allParams
   * @private
   */

  /**
   * Handler for visibility change.
   * @private
   */

  Viewer.prototype.onVisibilityChange_ = function onVisibilityChange_() {
    if (this.isVisible()) {
      this.hasBeenVisible_ = true;
      this.whenFirstVisibleResolve_();
    }
    this.visibilityObservable_.fire();
  };

  /**
   * Returns the value of a viewer's startup parameter with the specified
   * name or "undefined" if the parameter wasn't defined at startup time.
   * @param {string} name
   * @return {string|undefined}
   * @export
   */

  Viewer.prototype.getParam = function getParam(name) {
    return this.params_[name];
  };

  /**
   * Whether the document is embedded in a iframe.
   * @return {boolean}
   */

  Viewer.prototype.isEmbedded = function isEmbedded() {
    return this.isEmbedded_;
  };

  /**
   * @return {boolean}
   */

  Viewer.prototype.isRuntimeOn = function isRuntimeOn() {
    return this.isRuntimeOn_;
  };

  /**
   * Identifies if the viewer is recording instrumentation.
   * @return {boolean}
   */

  Viewer.prototype.isPerformanceTrackingOn = function isPerformanceTrackingOn() {
    return this.performanceTracking_;
  };

  /**
   */

  Viewer.prototype.toggleRuntime = function toggleRuntime() {
    this.isRuntimeOn_ = !this.isRuntimeOn_;
    _log.log.fine(TAG_, 'Runtime state:', this.isRuntimeOn_);
    this.runtimeOnObservable_.fire(this.isRuntimeOn_);
  };

  /**
   * @param {function(boolean)} handler
   * @return {!Unlisten}
   */

  Viewer.prototype.onRuntimeState = function onRuntimeState(handler) {
    return this.runtimeOnObservable_.add(handler);
  };

  /**
   * Whether the viewer overtakes the history for AMP document. If yes,
   * the viewer must implement history messages "pushHistory" and "popHistory"
   * and emit message "historyPopped"
   * @return {boolean}
   */

  Viewer.prototype.isOvertakeHistory = function isOvertakeHistory() {
    return this.overtakeHistory_;
  };

  /**
   * Returns visibility state configured by the viewer.
   * See {@link isVisible}.
   * @return {!VisibilityState}
   */

  Viewer.prototype.getVisibilityState = function getVisibilityState() {
    return this.visibilityState_;
  };

  Viewer.prototype.recheckVisibilityState_ = function recheckVisibilityState_() {
    this.setVisibilityState_(this.viewerVisibilityState_);
  };

  /**
   * Sets the viewer defined visibility state.
   * @param {string|undefined} state
   */

  Viewer.prototype.setVisibilityState_ = function setVisibilityState_(state) {
    if (!state) {
      return;
    }
    var oldState = this.visibilityState_;
    state = _asserts.assertEnumValue(VisibilityState, state, 'VisibilityState');

    // The viewer is informing us we are not currently active because we are
    // being pre-rendered, or the user swiped to another doc (or closed the
    // viewer). Unfortunately, the viewer sends HIDDEN instead of PRERENDER or
    // INACTIVE, though we know better.
    if (state === VisibilityState.HIDDEN) {
      state = this.hasBeenVisible_ ? VisibilityState.INACTIVE : VisibilityState.PRERENDER;
    }

    this.viewerVisibilityState_ = state;

    if (this.docState_.isHidden() && (state === VisibilityState.VISIBLE || state === VisibilityState.PAUSED)) {
      state = VisibilityState.HIDDEN;
    }

    this.visibilityState_ = state;

    _log.log.fine(TAG_, 'visibilitychange event:', this.getVisibilityState());

    if (oldState !== state) {
      this.onVisibilityChange_();
    }
  };

  /**
   * Whether the AMP document currently visible. The reasons why it might not
   * be visible include user switching to another tab, browser running the
   * document in the prerender mode or viewer running the document in the
   * prerender mode.
   * @return {boolean}
   */

  Viewer.prototype.isVisible = function isVisible() {
    return this.getVisibilityState() == VisibilityState.VISIBLE;
  };

  /**
   * Whether the AMP document has been ever visible before. Since the visiblity
   * state of a document can be flipped back and forth we sometimes want to know
   * if a document has ever been visible.
   * @return {boolean}
   */

  Viewer.prototype.hasBeenVisible = function hasBeenVisible() {
    return this.hasBeenVisible_;
  };

  /**
   * Returns a Promise that only ever resolved when the current
   * AMP document becomes visible.
   * @return {!Promise}
   */

  Viewer.prototype.whenFirstVisible = function whenFirstVisible() {
    return this.whenFirstVisiblePromise_;
  };

  /**
   * How much the viewer has requested the runtime to prerender the document.
   * The values are in number of screens.
   * @return {number}
   */

  Viewer.prototype.getPrerenderSize = function getPrerenderSize() {
    return this.prerenderSize_;
  };

  /**
   * There are two types of viewports: "natural" and "virtual". "Natural" is
   * the viewport of the AMP document's window. "Virtual" is the viewport
   * provided by the viewer.
   * See {@link Viewport} and {@link ViewportBinding} for more details.
   * @return {!ViewportType}
   */

  Viewer.prototype.getViewportType = function getViewportType() {
    return this.viewportType_;
  };

  /**
   * Returns the width of the viewport provided by the viewer. This value only
   * used when viewport type is "virtual."
   * @return {number}
   */

  Viewer.prototype.getViewportWidth = function getViewportWidth() {
    return this.viewportWidth_;
  };

  /**
   * Returns the height of the viewport provided by the viewer. This value only
   * used when viewport type is "virtual."
   * @return {number}
   */

  Viewer.prototype.getViewportHeight = function getViewportHeight() {
    return this.viewportHeight_;
  };

  /**
   * Returns the scroll position of the viewport provided by the viewer. This
   * value only used when viewport type is "virtual."
   * @return {number}
   */

  Viewer.prototype.getScrollTop = function getScrollTop() {
    return this. /*OK*/scrollTop_;
  };

  /**
   * Returns the top padding requested by the viewer.
   * @return {number}
   */

  Viewer.prototype.getPaddingTop = function getPaddingTop() {
    return this.paddingTop_;
  };

  /**
   * Returns an unconfirmed "referrer" URL that can be optionally customized by
   * the viewer. Consider using `getReferrerUrl()` instead, which returns the
   * promise that will yield the confirmed "referrer" URL.
   * @return {string}
   */

  Viewer.prototype.getUnconfirmedReferrerUrl = function getUnconfirmedReferrerUrl() {
    return this.unconfirmedReferrerUrl_;
  };

  /**
   * Returns the promise that will yield the confirmed "referrer" URL. This
   * URL can be optionally customized by the viewer, but viewer is required
   * to be a trusted viewer.
   * @return {!Promise<string>}
   */

  Viewer.prototype.getReferrerUrl = function getReferrerUrl() {
    return this.referrerUrl_;
  };

  /**
   * Whether the viewer has been whitelisted for more sensitive operations
   * such as customizing referrer.
   * @return {boolean}
   */

  Viewer.prototype.isTrustedViewer = function isTrustedViewer() {
    return this.isTrustedViewer_;
  };

  /**
   * Returns the promise that resolves to URL representing the origin of the
   * viewer. If the document is not embedded or if a viewer origin can't be
   * found, empty string is returned.
   * @return {!Promise<string>}
   */

  Viewer.prototype.getViewerOrigin = function getViewerOrigin() {
    return this.viewerOrigin_;
  };

  /**
   * @param {string} urlString
   * @return {boolean}
   * @private
   */

  Viewer.prototype.isTrustedViewerOrigin_ = function isTrustedViewerOrigin_(urlString) {
    var url = _url.parseUrl(urlString);
    if (url.protocol != 'https:') {
      // Non-https origins are never trusted.
      return false;
    }
    return TRUSTED_VIEWER_HOSTS.some(function (th) {
      return th.test(url.hostname);
    });
  };

  /**
   * Adds a "visibilitychange" event listener for viewer events. The
   * callback can check {@link isVisible} and {@link getPrefetchCount}
   * methods for more info.
   * @param {function()} handler
   * @return {!Unlisten}
   */

  Viewer.prototype.onVisibilityChanged = function onVisibilityChanged(handler) {
    return this.visibilityObservable_.add(handler);
  };

  /**
   * Adds a "viewport" event listener for viewer events.
   * @param {function()} handler
   * @return {!Unlisten}
   */

  Viewer.prototype.onViewportEvent = function onViewportEvent(handler) {
    return this.viewportObservable_.add(handler);
  };

  /**
   * Adds a "history popped" event listener for viewer events.
   * @param {function(ViewerHistoryPoppedEventDef)} handler
   * @return {!Unlisten}
   */

  Viewer.prototype.onHistoryPoppedEvent = function onHistoryPoppedEvent(handler) {
    return this.historyPoppedObservable_.add(handler);
  };

  /**
   * Triggers "documentLoaded" event for the viewer.
   * @param {number} width
   * @param {number} height
   */

  Viewer.prototype.postDocumentReady = function postDocumentReady(width, height) {
    this.sendMessageUnreliable_('documentLoaded', {
      width: width,
      height: height,
      title: this.win.document.title
    }, false);
  };

  /**
   * Triggers "documentResized" event for the viewer.
   * @param {number} width
   * @param {number} height
   */

  Viewer.prototype.postDocumentResized = function postDocumentResized(width, height) {
    this.sendMessageUnreliable_('documentResized', { width: width, height: height }, false);
  };

  /**
   * Requests full overlay mode from the viewer. Returns a promise that yields
   * when the viewer has switched to full overlay mode.
   * @return {!Promise}
   */

  Viewer.prototype.requestFullOverlay = function requestFullOverlay() {
    return this.sendMessageUnreliable_('requestFullOverlay', {}, true);
  };

  /**
   * Requests to cancel full overlay mode from the viewer. Returns a promise
   * that yields when the viewer has switched off full overlay mode.
   * @return {!Promise}
   */

  Viewer.prototype.cancelFullOverlay = function cancelFullOverlay() {
    return this.sendMessageUnreliable_('cancelFullOverlay', {}, true);
  };

  /**
   * Triggers "pushHistory" event for the viewer.
   * @param {number} stackIndex
   * @return {!Promise}
   */

  Viewer.prototype.postPushHistory = function postPushHistory(stackIndex) {
    return this.sendMessageUnreliable_('pushHistory', { stackIndex: stackIndex }, true);
  };

  /**
   * Triggers "popHistory" event for the viewer.
   * @param {number} stackIndex
   * @return {!Promise}
   */

  Viewer.prototype.postPopHistory = function postPopHistory(stackIndex) {
    return this.sendMessageUnreliable_('popHistory', { stackIndex: stackIndex }, true);
  };

  /**
   * Retrieves the Base CID from the viewer
   * @return {!Promise<string>}
   */

  Viewer.prototype.getBaseCid = function getBaseCid() {
    return this.sendMessage('cid', undefined, true);
  };

  /**
   * Triggers "tick" event for the viewer.
   * @param {!JSONObject} message
   */

  Viewer.prototype.tick = function tick(message) {
    this.sendMessageUnreliable_('tick', message, false);
  };

  /**
   * Triggers "sendCsi" event for the viewer.
   */

  Viewer.prototype.flushTicks = function flushTicks() {
    this.sendMessageUnreliable_('sendCsi', undefined, false);
  };

  /**
   * Triggers "setFlushParams" event for the viewer.
   * @param {!JSONObject} message
   */

  Viewer.prototype.setFlushParams = function setFlushParams(message) {
    this.sendMessageUnreliable_('setFlushParams', message, false);
  };

  /**
   * Requests AMP document to receive a message from Viewer.
   * @param {string} eventType
   * @param {*} data
   * @param {boolean} unusedAwaitResponse
   * @return {(!Promise<*>|undefined)}
   * @export
   */

  Viewer.prototype.receiveMessage = function receiveMessage(eventType, data, unusedAwaitResponse) {
    if (eventType == 'viewport') {
      if (data['width'] !== undefined) {
        this.viewportWidth_ = data['width'];
      }
      if (data['height'] !== undefined) {
        this.viewportHeight_ = data['height'];
      }
      if (data['paddingTop'] !== undefined) {
        this.paddingTop_ = data['paddingTop'];
      }
      if (data['scrollTop'] !== undefined) {
        this. /*OK*/scrollTop_ = data['scrollTop'];
      }
      this.viewportObservable_.fire();
      return undefined;
    }
    if (eventType == 'historyPopped') {
      this.historyPoppedObservable_.fire({
        newStackIndex: data['newStackIndex']
      });
      return Promise.resolve();
    }
    if (eventType == 'visibilitychange') {
      if (data['prerenderSize'] !== undefined) {
        this.prerenderSize_ = data['prerenderSize'];
        _log.log.fine(TAG_, '- prerenderSize change:', this.prerenderSize_);
      }
      this.setVisibilityState_(data['state']);
      return Promise.resolve();
    }
    if (eventType == 'broadcast') {
      this.broadcastObservable_.fire(data);
      return Promise.resolve();
    }
    _log.log.fine(TAG_, 'unknown message:', eventType);
    return undefined;
  };

  /**
   * Provides a message delivery mechanism by which AMP document can send
   * messages to the viewer.
   * @param {function(string, *, boolean):(!Promise<*>|undefined)} deliverer
   * @param {string} origin
   * @export
   */

  Viewer.prototype.setMessageDeliverer = function setMessageDeliverer(deliverer, origin) {
    var _this2 = this;

    if (this.messageDeliverer_) {
      throw new Error('message channel can only be initialized once');
    }
    if (!origin) {
      throw new Error('message channel must have an origin');
    }
    _log.log.fine(TAG_, 'message channel established with origin: ', origin);
    this.messageDeliverer_ = deliverer;
    this.messagingOrigin_ = origin;
    if (this.messagingReadyResolver_) {
      this.messagingReadyResolver_();
    }
    if (this.trustedViewerResolver_) {
      this.trustedViewerResolver_(origin ? this.isTrustedViewerOrigin_(origin) : false);
    }
    if (this.viewerOriginResolver_) {
      this.viewerOriginResolver_(origin || '');
    }

    if (this.messageQueue_.length > 0) {
      var queue = this.messageQueue_.slice(0);
      this.messageQueue_ = [];
      queue.forEach(function (message) {
        _this2.messageDeliverer_(message.eventType, message.data, false);
      });
    }
  };

  /**
   * Sends the message to the viewer. This method will wait for the messaging
   * channel to be established. If the messaging channel times out, the
   * promise will fail.
   *
   * This is a restricted API.
   *
   * @param {string} eventType
   * @param {*} data
   * @param {boolean} awaitResponse
   * @return {!Promise<*>|undefined}
   */

  Viewer.prototype.sendMessage = function sendMessage(eventType, data, awaitResponse) {
    var _this3 = this;

    if (!this.messagingReadyPromise_) {
      return Promise.reject(getChannelError());
    }
    return this.messagingReadyPromise_.then(function () {
      return _this3.sendMessageUnreliable_(eventType, data, awaitResponse);
    });
  };

  /**
   * Broadcasts a message to all other AMP documents under the same viewer. It
   * will attempt to deliver messages when the messaging channel has been
   * established, but it will not fail if the channel is timed out.
   *
   * @param {!JSONObject} message
   */

  Viewer.prototype.broadcast = function broadcast(message) {
    this.maybeSendMessage_('broadcast', message);
  };

  /**
   * Registers receiver for the broadcast events.
   * @param {function(!JSONObject)} handler
   * @return {!Unlisten}
   */

  Viewer.prototype.onBroadcast = function onBroadcast(handler) {
    return this.broadcastObservable_.add(handler);
  };

  /**
   * This message queues up the message to be sent when communication channel
   * is established. If the communication channel is not established at
   * this time, this method responds immediately with a Promise that yields
   * `undefined` value.
   * @param {string} eventType
   * @param {*} data
   * @param {boolean} awaitResponse
   * @return {!Promise<*>|undefined}
   * @private
   */

  Viewer.prototype.sendMessageUnreliable_ = function sendMessageUnreliable_(eventType, data, awaitResponse) {
    if (this.messageDeliverer_) {
      return this.messageDeliverer_(eventType, data, awaitResponse);
    }

    // Store only a last version for an event type.
    var found = null;
    for (var i = 0; i < this.messageQueue_.length; i++) {
      if (this.messageQueue_[i].eventType == eventType) {
        found = this.messageQueue_[i];
        break;
      }
    }
    if (found) {
      found.data = data;
    } else {
      this.messageQueue_.push({ eventType: eventType, data: data });
    }
    if (awaitResponse) {
      // TODO(dvoytenko): This is somewhat questionable. What do we return
      // when no one is listening?
      return Promise.resolve();
    }
    return undefined;
  };

  /**
   * @param {string} eventType
   * @param {*} data
   * @private
   */

  Viewer.prototype.maybeSendMessage_ = function maybeSendMessage_(eventType, data) {
    var _this4 = this;

    if (!this.messagingMaybePromise_) {
      // Messaging is not expected.
      return;
    }
    this.messagingMaybePromise_.then(function () {
      if (_this4.messageDeliverer_) {
        _this4.sendMessageUnreliable_(eventType, data, false);
      }
    });
  };

  return Viewer;
})();

exports.Viewer = Viewer;
function parseParams_(str, allParams) {
  var params = _url.parseQueryString(str);
  for (var k in params) {
    allParams[k] = params[k];
  }
}

/**
 * Creates an error for the case where a channel cannot be established.
 * @param {!Error=} opt_reason
 * @return {!Error}
 */
function getChannelError(opt_reason) {
  if (opt_reason instanceof Error) {
    opt_reason.message = 'No messaging channel: ' + opt_reason.message;
    return opt_reason;
  }
  return new Error('No messaging channel: ' + opt_reason);
}

/**
 * @typedef {{
 *   newStackIndex: number
 * }}
 */
var ViewerHistoryPoppedEventDef = undefined;

/**
 * @param {!Window} window
 * @return {!Viewer}
 */

function installViewerService(window) {
  return _service.getService(window, 'viewer', function () {
    return new Viewer(window);
  });
}

;

},{"../asserts":16,"../document-state":24,"../error":27,"../log":39,"../mode":40,"../observable":41,"../platform":44,"../service":53,"../timer":69,"../url":72}],61:[function(require,module,exports){
exports.__esModule = true;
exports.parseViewportMeta = parseViewportMeta;
exports.stringifyViewportMeta = stringifyViewportMeta;
exports.updateViewportMetaString = updateViewportMetaString;
exports.installViewportService = installViewportService;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _fixedLayer = require('./fixed-layer');

var _observable = require('../observable');

var _service = require('../service');

var _layoutRect = require('../layout-rect');

var _log = require('../log');

var _documentReady = require('../document-ready');

var _platform = require('../platform');

var _style = require('../style');

var _timer = require('../timer');

var _vsyncImpl = require('./vsync-impl');

var _viewerImpl = require('./viewer-impl');

var TAG_ = 'Viewport';

/**
 * @typedef {{
 *   relayoutAll: boolean,
 *   top: number,
 *   left: number,
 *   width: number,
 *   height: number,
 *   velocity: number
 * }}
 */
var ViewportChangedEventDef = undefined;

/**
 * This object represents the viewport. It tracks scroll position, resize
 * and other events and notifies interesting parties when viewport has changed
 * and how.
 */

var Viewport = (function () {

  /**
   * @param {!Window} win
   * @param {!ViewportBindingDef} binding
   * @param {!Viewer} viewer
   */

  function Viewport(win, binding, viewer) {
    var _this = this;

    babelHelpers.classCallCheck(this, Viewport);

    /** @const {!Window} */
    this.win_ = win;

    /** @const {!ViewportBindingDef} */
    this.binding_ = binding;

    /** @const {!Viewer} */
    this.viewer_ = viewer;

    /**
     * Used to cache the size of the viewport. Also used as last known size,
     * so users should call getSize early on to get a value. The timing should
     * be chosen to avoid extra style recalcs.
     * @private {{width: number, height: number}|null}
     */
    this.size_ = null;

    /** @private {?number} */
    this. /*OK*/scrollTop_ = null;

    /** @private {?number} */
    this.lastMeasureScrollTop_ = null;

    /** @private {?number} */
    this. /*OK*/scrollLeft_ = null;

    /** @private {number} */
    this.paddingTop_ = viewer.getPaddingTop();

    /** @private {number} */
    this.scrollMeasureTime_ = 0;

    /** @private {Vsync} */
    this.vsync_ = _vsyncImpl.installVsyncService(win);

    /** @private {boolean} */
    this.scrollTracking_ = false;

    /** @private {number} */
    this.scrollCount_ = 0;

    /** @private @const {!Observable<!ViewportChangedEventDef>} */
    this.changeObservable_ = new _observable.Observable();

    /** @private @const {!Observable} */
    this.scrollObservable_ = new _observable.Observable();

    /** @private {?HTMLMetaElement|undefined} */
    this.viewportMeta_ = undefined;

    /** @private {string|undefined} */
    this.originalViewportMetaString_ = undefined;

    /** @private @const {!FixedLayer} */
    this.fixedLayer_ = new _fixedLayer.FixedLayer(this.win_.document, this.vsync_, this.paddingTop_, this.binding_.requiresFixedLayerTransfer());
    _documentReady.onDocumentReady(this.win_.document, function () {
      return _this.fixedLayer_.setup();
    });

    /** @private @const (function()) */
    this.boundThrottledScroll_ = this.throttledScroll_.bind(this);

    this.viewer_.onViewportEvent(function () {
      _this.binding_.updateViewerViewport(_this.viewer_);
      var paddingTop = _this.viewer_.getPaddingTop();
      if (paddingTop != _this.paddingTop_) {
        _this.paddingTop_ = paddingTop;
        _this.binding_.updatePaddingTop(_this.paddingTop_);
        _this.fixedLayer_.updatePaddingTop(_this.paddingTop_);
      }
    });
    this.binding_.updateViewerViewport(this.viewer_);
    this.binding_.updatePaddingTop(this.paddingTop_);

    this.binding_.onScroll(this.scroll_.bind(this));
    this.binding_.onResize(this.resize_.bind(this));
  }

  /**
   * ViewportBindingDef is an interface that defines an underlying technology
   * behind the {@link Viewport}.
   * @interface
   */

  /** For testing. */

  Viewport.prototype.cleanup_ = function cleanup_() {
    this.binding_.cleanup_();
  };

  /**
   * Returns the top padding mandated by the viewer.
   * @return {number}
   */

  Viewport.prototype.getPaddingTop = function getPaddingTop() {
    return this.paddingTop_;
  };

  /**
   * Returns the viewport's top position in the document. This is essentially
   * the scroll position.
   * @return {number}
   * @deprecated Use {@link getScrollTop}
   */

  Viewport.prototype.getTop = function getTop() {
    return this.getScrollTop();
  };

  /**
   * Returns the viewport's vertical scroll position.
   * @return {number}
   */

  Viewport.prototype.getScrollTop = function getScrollTop() {
    if (this. /*OK*/scrollTop_ == null) {
      this. /*OK*/scrollTop_ = this.binding_.getScrollTop();
    }
    return this. /*OK*/scrollTop_;
  };

  /**
   * Returns the viewport's horizontal scroll position.
   * @return {number}
   */

  Viewport.prototype.getScrollLeft = function getScrollLeft() {
    if (this. /*OK*/scrollLeft_ == null) {
      this. /*OK*/scrollLeft_ = this.binding_.getScrollLeft();
    }
    return this. /*OK*/scrollLeft_;
  };

  /**
   * Sets the desired scroll position on the viewport.
   * @param {number} scrollPos
   */

  Viewport.prototype.setScrollTop = function setScrollTop(scrollPos) {
    this. /*OK*/scrollTop_ = null;
    this.binding_.setScrollTop(scrollPos);
  };

  /**
   * Returns the size of the viewport.
   * @return {!{width: number, height: number}}
   */

  Viewport.prototype.getSize = function getSize() {
    if (this.size_) {
      return this.size_;
    }
    return this.size_ = this.binding_.getSize();
  };

  /**
   * Returns the width of the viewport.
   * @return {number}
   */

  Viewport.prototype.getWidth = function getWidth() {
    return this.getSize().width;
  };

  /**
   * Returns the scroll width of the content of the document. Note that this
   * method is not cached since we there's no indication when it might change.
   * @return {number}
   */

  Viewport.prototype.getScrollWidth = function getScrollWidth() {
    return this.binding_.getScrollWidth();
  };

  /**
   * Returns the scroll height of the content of the document. Note that this
   * method is not cached since we there's no indication when it might change.
   * @return {number}
   */

  Viewport.prototype.getScrollHeight = function getScrollHeight() {
    return this.binding_.getScrollHeight();
  };

  /**
   * Returns the rect of the viewport which includes scroll positions and size.
   * @return {!LayoutRect}
   */

  Viewport.prototype.getRect = function getRect() {
    var scrollTop = this.getScrollTop();
    var scrollLeft = this.getScrollLeft();
    var size = this.getSize();
    return _layoutRect.layoutRectLtwh(scrollLeft, scrollTop, size.width, size.height);
  };

  /**
   * Returns the rect of the element within the document.
   * @param {!Element} el
   * @return {!LayoutRect}
   */

  Viewport.prototype.getLayoutRect = function getLayoutRect(el) {
    return this.binding_.getLayoutRect(el);
  };

  /**
   * Scrolls element into view much like Element. scrollIntoView does but
   * in the AMP/Viewer environment.
   * @param {!Element} element
   */

  Viewport.prototype.scrollIntoView = function scrollIntoView(element) {
    var elementTop = this.binding_.getLayoutRect(element).top;
    var newScrollTop = Math.max(0, elementTop - this.paddingTop_);
    this.binding_.setScrollTop(newScrollTop);
  };

  /**
   * Registers the handler for ViewportChangedEventDef events.
   * @param {!function(!ViewportChangedEventDef)} handler
   * @return {!Unlisten}
   */

  Viewport.prototype.onChanged = function onChanged(handler) {
    return this.changeObservable_.add(handler);
  };

  /**
   * Registers the handler for scroll events. These events DO NOT contain
   * scrolling offset and it's discouraged to read scrolling offset in the
   * event handler. The primary use case for this handler is to inform that
   * scrolling might be going on. To get more information {@link onChanged}
   * handler should be used.
   * @param {!function()} handler
   * @return {!Unlisten}
   */

  Viewport.prototype.onScroll = function onScroll(handler) {
    return this.scrollObservable_.add(handler);
  };

  /**
   * Resets touch zoom to initial scale of 1.
   */

  Viewport.prototype.resetTouchZoom = function resetTouchZoom() {
    var _this2 = this;

    var windowHeight = this.win_. /*OK*/innerHeight;
    var documentHeight = this.win_.document.documentElement. /*OK*/clientHeight;
    if (windowHeight && documentHeight && windowHeight === documentHeight) {
      // This code only works when scrollbar overlay content and take no space,
      // which is fine on mobile. For non-mobile devices this code is
      // irrelevant.
      return;
    }
    if (this.disableTouchZoom()) {
      _timer.timer.delay(function () {
        _this2.restoreOriginalTouchZoom();
      }, 50);
    }
  };

  /**
   * Disables touch zoom on this viewport. Returns `true` if any actual
   * changes have been done.
   * @return {boolean}
   */

  Viewport.prototype.disableTouchZoom = function disableTouchZoom() {
    var viewportMeta = this.getViewportMeta_();
    if (!viewportMeta) {
      // This should never happen in a valid AMP document, thus shortcircuit.
      return false;
    }
    // Setting maximum-scale=1 and user-scalable=no zooms page back to normal
    // and prohibit further default zooming.
    var newValue = updateViewportMetaString(viewportMeta.content, {
      'maximum-scale': '1',
      'user-scalable': 'no'
    });
    return this.setViewportMetaString_(newValue);
  };

  /**
   * Restores original touch zoom parameters. Returns `true` if any actual
   * changes have been done.
   * @return {boolean}
   */

  Viewport.prototype.restoreOriginalTouchZoom = function restoreOriginalTouchZoom() {
    if (this.originalViewportMetaString_ !== undefined) {
      return this.setViewportMetaString_(this.originalViewportMetaString_);
    }
    return false;
  };

  /**
   * Returns whether the user has scrolled yet.
   * @return {boolean}
   */

  Viewport.prototype.hasScrolled = function hasScrolled() {
    return this.scrollCount_ > 0;
  };

  /**
   * Hides the fixed layer.
   */

  Viewport.prototype.hideFixedLayer = function hideFixedLayer() {
    this.fixedLayer_.setVisible(false);
  };

  /**
   * Shows the fixed layer.
   */

  Viewport.prototype.showFixedLayer = function showFixedLayer() {
    this.fixedLayer_.setVisible(true);
  };

  /**
   * Updates the fixed layer.
   */

  Viewport.prototype.updatedFixedLayer = function updatedFixedLayer() {
    this.fixedLayer_.update();
  };

  /**
   * Adds the element to the fixed layer.
   * @param {!Element} element
   */

  Viewport.prototype.addToFixedLayer = function addToFixedLayer(element) {
    this.fixedLayer_.addElement(element);
  };

  /**
   * Removes the element from the fixed layer.
   * @param {!Element} element
   */

  Viewport.prototype.removeFromFixedLayer = function removeFromFixedLayer(element) {
    this.fixedLayer_.removeElement(element);
  };

  /**
   * Updates touch zoom meta data. Returns `true` if any actual
   * changes have been done.
   * @return {boolean}
   */

  Viewport.prototype.setViewportMetaString_ = function setViewportMetaString_(viewportMetaString) {
    var viewportMeta = this.getViewportMeta_();
    if (viewportMeta && viewportMeta.content != viewportMetaString) {
      _log.log.fine(TAG_, 'changed viewport meta to:', viewportMetaString);
      viewportMeta.content = viewportMetaString;
      return true;
    }
    return false;
  };

  /**
   * @return {?HTMLMetaElement}
   * @private
   */

  Viewport.prototype.getViewportMeta_ = function getViewportMeta_() {
    if (this.viewer_.isEmbedded()) {
      // An embedded document does not control its viewport meta tag.
      return null;
    }
    if (this.viewportMeta_ === undefined) {
      this.viewportMeta_ = this.win_.document.querySelector('meta[name=viewport]');
      if (this.viewportMeta_) {
        this.originalViewportMetaString_ = this.viewportMeta_.content;
      }
    }
    return this.viewportMeta_;
  };

  /**
   * @param {boolean} relayoutAll
   * @param {number} velocity
   * @private
   */

  Viewport.prototype.changed_ = function changed_(relayoutAll, velocity) {
    var size = this.getSize();
    var scrollTop = this.getScrollTop();
    var scrollLeft = this.getScrollLeft();
    _log.log.fine(TAG_, 'changed event:', 'relayoutAll=', relayoutAll, 'top=', scrollTop, 'top=', scrollLeft, 'bottom=', scrollTop + size.height, 'velocity=', velocity);
    this.changeObservable_.fire({
      relayoutAll: relayoutAll,
      top: scrollTop,
      left: scrollLeft,
      width: size.width,
      height: size.height,
      velocity: velocity
    });
  };

  /** @private */

  Viewport.prototype.scroll_ = function scroll_() {
    var _this3 = this;

    this.scrollCount_++;
    this.scrollLeft_ = this.binding_.getScrollLeft();
    var newScrollTop = this.binding_.getScrollTop();
    if (newScrollTop < 0) {
      // iOS and some other browsers use negative values of scrollTop for
      // overscroll. Overscroll does not affect the viewport and thus should
      // be ignored here.
      return;
    }
    this.scrollTop_ = newScrollTop;
    if (!this.scrollTracking_) {
      (function () {
        _this3.scrollTracking_ = true;
        var now = _timer.timer.now();
        // Wait 2 frames and then request an animation frame.
        _timer.timer.delay(function () {
          return _this3.vsync_.measure(_this3.throttledScroll_.bind(_this3, now, newScrollTop));
        }, 36);
      })();
    }
    this.scrollObservable_.fire();
  };

  /**
   * This method is called about every 3 frames (assuming 60hz) and it
   * is called in a vsync measure task.
   * @param {number} referenceTime Time when the scroll measurement, that
   *     triggered this call made, was made.
   * @param {number} referenceTop Scrolltop at that time.
   * @private
   */

  Viewport.prototype.throttledScroll_ = function throttledScroll_(referenceTime, referenceTop) {
    var _this4 = this;

    var newScrollTop = this.scrollTop_ = this.binding_.getScrollTop();
    var now = _timer.timer.now();
    var velocity = 0;
    if (now != referenceTime) {
      velocity = (newScrollTop - referenceTop) / (now - referenceTime);
    }
    _log.log.fine(TAG_, 'scroll: ' + 'scrollTop=' + newScrollTop + '; ' + 'velocity=' + velocity);
    if (Math.abs(velocity) < 0.03) {
      this.changed_( /* relayoutAll */false, velocity);
      this.scrollTracking_ = false;
    } else {
      _timer.timer.delay(function () {
        return _this4.vsync_.measure(_this4.throttledScroll_.bind(_this4, now, newScrollTop));
      }, 20);
    }
  };

  /** @private */

  Viewport.prototype.resize_ = function resize_() {
    var _this5 = this;

    var oldSize = this.size_;
    this.size_ = null; // Need to recalc.
    var newSize = this.getSize();
    this.fixedLayer_.update().then(function () {
      _this5.changed_(!oldSize || oldSize.width != newSize.width, 0);
    });
  };

  return Viewport;
})();

exports.Viewport = Viewport;

var ViewportBindingDef = (function () {
  function ViewportBindingDef() {
    babelHelpers.classCallCheck(this, ViewportBindingDef);
  }

  /**
   * Implementation of ViewportBindingDef based on the native window. It assumes that
   * the native window is sized properly and events represent the actual
   * scroll/resize events. This mode is applicable to a standalone document
   * display or when an iframe has a fixed size.
   *
   * Visible for testing.
   *
   * @implements {ViewportBindingDef}
   */

  /**
   * Whether the binding requires fixed elements to be transfered to a
   * independent fixed layer.
   * @return {boolean}
   */

  ViewportBindingDef.prototype.requiresFixedLayerTransfer = function requiresFixedLayerTransfer() {
    return false;
  };

  /**
   * Register a callback for scroll events.
   * @param {function()} unusedCallback
   */

  ViewportBindingDef.prototype.onScroll = function onScroll(unusedCallback) {};

  /**
   * Register a callback for resize events.
   * @param {function()} unusedCallback
   */

  ViewportBindingDef.prototype.onResize = function onResize(unusedCallback) {};

  /**
   * Updates binding with the new viewer's viewport info.
   * @param {!Viewer} unusedViewer
   */

  ViewportBindingDef.prototype.updateViewerViewport = function updateViewerViewport(unusedViewer) {};

  /**
   * Updates binding with the new padding.
   * @param {number} unusedPaddingTop
   */

  ViewportBindingDef.prototype.updatePaddingTop = function updatePaddingTop(unusedPaddingTop) {};

  /**
   * Returns the size of the viewport.
   * @return {!{width: number, height: number}}
   */

  ViewportBindingDef.prototype.getSize = function getSize() {};

  /**
   * Returns the top scroll position for the viewport.
   * @return {number}
   */

  ViewportBindingDef.prototype.getScrollTop = function getScrollTop() {};

  /**
   * Sets scroll top position to the specified value or the nearest possible.
   * @param {number} unusedScrollTop
   */

  ViewportBindingDef.prototype.setScrollTop = function setScrollTop(unusedScrollTop) {};

  /**
   * Returns the left scroll position for the viewport.
   * @return {number}
   */

  ViewportBindingDef.prototype.getScrollLeft = function getScrollLeft() {};

  /**
   * Returns the scroll width of the content of the document.
   * @return {number}
   */

  ViewportBindingDef.prototype.getScrollWidth = function getScrollWidth() {};

  /**
   * Returns the scroll height of the content of the document.
   * @return {number}
   */

  ViewportBindingDef.prototype.getScrollHeight = function getScrollHeight() {};

  /**
   * Returns the rect of the element within the document.
   * @param {!Element} unusedEl
   * @return {!LayoutRect}
   */

  ViewportBindingDef.prototype.getLayoutRect = function getLayoutRect(unusedEl) {};

  /** For testing. */

  ViewportBindingDef.prototype.cleanup_ = function cleanup_() {};

  return ViewportBindingDef;
})();

var ViewportBindingNatural_ = (function () {

  /**
   * @param {!Window} win
   */

  function ViewportBindingNatural_(win) {
    var _this6 = this;

    babelHelpers.classCallCheck(this, ViewportBindingNatural_);

    /** @const {!Window} */
    this.win = win;

    /** @private @const {!Observable} */
    this.scrollObservable_ = new _observable.Observable();

    /** @private @const {!Observable} */
    this.resizeObservable_ = new _observable.Observable();

    this.win.addEventListener('scroll', function () {
      return _this6.scrollObservable_.fire();
    });
    this.win.addEventListener('resize', function () {
      return _this6.resizeObservable_.fire();
    });

    _log.log.fine(TAG_, 'initialized natural viewport');
  }

  /**
   * Implementation of ViewportBindingDef based on the native window in case when
   * the AMP document is embedded in a IFrame on iOS. It assumes that the native
   * window is sized properly and events represent the actual resize events.
   * The main difference from natural binding is that in this case, the document
   * itself is not scrollable, but instead only "body" is scrollable.
   *
   * Visible for testing.
   *
   * @implements {ViewportBindingDef}
   */

  /** @override */

  ViewportBindingNatural_.prototype.cleanup_ = function cleanup_() {}
  // TODO(dvoytenko): remove listeners

  /** @override */
  ;

  ViewportBindingNatural_.prototype.requiresFixedLayerTransfer = function requiresFixedLayerTransfer() {
    return false;
  };

  /** @override */

  ViewportBindingNatural_.prototype.onScroll = function onScroll(callback) {
    this.scrollObservable_.add(callback);
  };

  /** @override */

  ViewportBindingNatural_.prototype.onResize = function onResize(callback) {
    this.resizeObservable_.add(callback);
  };

  /** @override */

  ViewportBindingNatural_.prototype.updateViewerViewport = function updateViewerViewport(unusedViewer) {}
  // Viewer's viewport is ignored since this window is fully accurate.

  /** @override */
  ;

  ViewportBindingNatural_.prototype.updatePaddingTop = function updatePaddingTop(paddingTop) {
    this.win.document.documentElement.style.paddingTop = _style.px(paddingTop);
  };

  /** @override */

  ViewportBindingNatural_.prototype.getSize = function getSize() {
    // Notice, that documentElement./*OK*/clientHeight is buggy on iOS Safari
    // and thus cannot be used. But when the values are undefined, fallback to
    // documentElement./*OK*/clientHeight.
    if (_platform.platform.isIos() && !_platform.platform.isChrome()) {
      var winWidth = this.win. /*OK*/innerWidth;
      var winHeight = this.win. /*OK*/innerHeight;
      if (winWidth && winHeight) {
        return { width: winWidth, height: winHeight };
      }
    }
    var el = this.win.document.documentElement;
    return { width: el. /*OK*/clientWidth, height: el. /*OK*/clientHeight };
  };

  /** @override */

  ViewportBindingNatural_.prototype.getScrollTop = function getScrollTop() {
    return this.getScrollingElement_(). /*OK*/scrollTop || this.win. /*OK*/pageYOffset;
  };

  /** @override */

  ViewportBindingNatural_.prototype.getScrollLeft = function getScrollLeft() {
    return this.getScrollingElement_(). /*OK*/scrollLeft || this.win. /*OK*/pageXOffset;
  };

  /** @override */

  ViewportBindingNatural_.prototype.getScrollWidth = function getScrollWidth() {
    return this.getScrollingElement_(). /*OK*/scrollWidth;
  };

  /** @override */

  ViewportBindingNatural_.prototype.getScrollHeight = function getScrollHeight() {
    return this.getScrollingElement_(). /*OK*/scrollHeight;
  };

  /** @override */

  ViewportBindingNatural_.prototype.getLayoutRect = function getLayoutRect(el) {
    var scrollTop = this.getScrollTop();
    var scrollLeft = this.getScrollLeft();
    var b = el. /*OK*/getBoundingClientRect();
    return _layoutRect.layoutRectLtwh(Math.round(b.left + scrollLeft), Math.round(b.top + scrollTop), Math.round(b.width), Math.round(b.height));
  };

  /** @override */

  ViewportBindingNatural_.prototype.setScrollTop = function setScrollTop(scrollTop) {
    this.getScrollingElement_(). /*OK*/scrollTop = scrollTop;
  };

  /**
   * @return {!Element}
   * @private
   */

  ViewportBindingNatural_.prototype.getScrollingElement_ = function getScrollingElement_() {
    var doc = this.win.document;
    if (doc. /*OK*/scrollingElement) {
      return doc. /*OK*/scrollingElement;
    }
    if (doc.body
    // Due to https://bugs.webkit.org/show_bug.cgi?id=106133, WebKit
    // browsers have to use `body` and NOT `documentElement` for
    // scrolling purposes. This has mostly being resolved via
    // `scrollingElement` property, but this branch is still necessary
    // for backward compatibility purposes.
     && _platform.platform.isWebKit()) {
      return doc.body;
    }
    return doc.documentElement;
  };

  return ViewportBindingNatural_;
})();

exports.ViewportBindingNatural_ = ViewportBindingNatural_;

var ViewportBindingNaturalIosEmbed_ = (function () {
  /**
   * @param {!Window} win
   */

  function ViewportBindingNaturalIosEmbed_(win) {
    var _this7 = this;

    babelHelpers.classCallCheck(this, ViewportBindingNaturalIosEmbed_);

    /** @const {!Window} */
    this.win = win;

    /** @private {?Element} */
    this.scrollPosEl_ = null;

    /** @private {?Element} */
    this.scrollMoveEl_ = null;

    /** @private {!{x: number, y: number}} */
    this.pos_ = { x: 0, y: 0 };

    /** @private @const {!Observable} */
    this.scrollObservable_ = new _observable.Observable();

    /** @private @const {!Observable} */
    this.resizeObservable_ = new _observable.Observable();

    _documentReady.onDocumentReady(this.win.document, function () {
      // Microtask is necessary here to let Safari to recalculate scrollWidth
      // post DocumentReady signal.
      _timer.timer.delay(function () {
        _this7.setup_();
      }, 0);
    });
    this.win.addEventListener('resize', function () {
      return _this7.resizeObservable_.fire();
    });

    _log.log.fine(TAG_, 'initialized natural viewport for iOS embeds');
  }

  /**
   * Implementation of ViewportBindingDef that assumes a virtual viewport that is
   * sized outside of the AMP runtime (e.g. in a parent window) and passed here
   * via config and events. Applicable to cases where a parent window expands the
   * iframe to all available height and leaves scrolling to the parent window.
   *
   * Visible for testing.
   *
   * @implements {ViewportBindingDef}
   */

  /** @override */

  ViewportBindingNaturalIosEmbed_.prototype.requiresFixedLayerTransfer = function requiresFixedLayerTransfer() {
    return true;
  };

  /** @private */

  ViewportBindingNaturalIosEmbed_.prototype.setup_ = function setup_() {
    var documentElement = this.win.document.documentElement;
    var documentBody = this.win.document.body;

    // Embedded scrolling on iOS is rather complicated. IFrames cannot be sized
    // and be scrollable. Sizing iframe by scrolling height has a big negative
    // that "fixed" position is essentially impossible. The only option we
    // found is to reset scrolling on the AMP doc, which overrides natural BODY
    // scrolling with overflow:auto. We need the following styling:
    // html {
    //   overflow: auto;
    //   -webkit-overflow-scrolling: touch;
    // }
    // body {
    //   position: absolute;
    //   overflow: auto;
    //   -webkit-overflow-scrolling: touch;
    // }
    _style.setStyles(documentElement, {
      overflowY: 'auto',
      webkitOverflowScrolling: 'touch'
    });
    _style.setStyles(documentBody, {
      overflowY: 'auto',
      webkitOverflowScrolling: 'touch',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    });

    // Insert scrollPos element into DOM. See {@link onScrolled_} for why
    // this is needed.
    this.scrollPosEl_ = this.win.document.createElement('div');
    this.scrollPosEl_.id = '-amp-scrollpos';
    _style.setStyles(this.scrollPosEl_, {
      position: 'absolute',
      top: 0,
      left: 0,
      width: 0,
      height: 0,
      visibility: 'hidden'
    });
    documentBody.appendChild(this.scrollPosEl_);

    // Insert scrollMove element into DOM. See {@link adjustScrollPos_} for why
    // this is needed.
    this.scrollMoveEl_ = this.win.document.createElement('div');
    this.scrollMoveEl_.id = '-amp-scrollmove';
    _style.setStyles(this.scrollMoveEl_, {
      position: 'absolute',
      top: 0,
      left: 0,
      width: 0,
      height: 0,
      visibility: 'hidden'
    });
    documentBody.appendChild(this.scrollMoveEl_);

    // Insert endPos element into DOM. See {@link getScrollHeight} for why
    // this is needed.
    this.endPosEl_ = this.win.document.createElement('div');
    this.endPosEl_.id = '-amp-endpos';
    _style.setStyles(this.endPosEl_, {
      width: 0,
      height: 0,
      visibility: 'hidden'
    });
    // TODO(dvoytenko): not only it should be at the bottom at setup time,
    // but it must always be at the bottom. Consider using BODY "childList"
    // mutations to track this. For now, however, this is ok since we don't
    // allow arbitrary content inserted into BODY.
    documentBody.appendChild(this.endPosEl_);

    documentBody.addEventListener('scroll', this.onScrolled_.bind(this));
  };

  /** @override */

  ViewportBindingNaturalIosEmbed_.prototype.updateViewerViewport = function updateViewerViewport(unusedViewer) {}
  // Viewer's viewport is ignored since this window is fully accurate.

  /** @override */
  ;

  ViewportBindingNaturalIosEmbed_.prototype.updatePaddingTop = function updatePaddingTop(paddingTop) {
    var _this8 = this;

    _documentReady.onDocumentReady(this.win.document, function () {
      // Also tried `paddingTop` but it didn't work for `position:absolute`
      // on iOS.
      _this8.win.document.body.style.borderTop = paddingTop + 'px solid transparent';
    });
  };

  /** @override */

  ViewportBindingNaturalIosEmbed_.prototype.cleanup_ = function cleanup_() {}
  // TODO(dvoytenko): remove listeners

  /** @override */
  ;

  ViewportBindingNaturalIosEmbed_.prototype.onScroll = function onScroll(callback) {
    this.scrollObservable_.add(callback);
  };

  /** @override */

  ViewportBindingNaturalIosEmbed_.prototype.onResize = function onResize(callback) {
    this.resizeObservable_.add(callback);
  };

  /** @override */

  ViewportBindingNaturalIosEmbed_.prototype.getSize = function getSize() {
    return {
      width: this.win. /*OK*/innerWidth,
      height: this.win. /*OK*/innerHeight
    };
  };

  /** @override */

  ViewportBindingNaturalIosEmbed_.prototype.getScrollTop = function getScrollTop() {
    return Math.round(this.pos_.y);
  };

  /** @override */

  ViewportBindingNaturalIosEmbed_.prototype.getScrollLeft = function getScrollLeft() {
    return Math.round(this.pos_.x);
  };

  /** @override */

  ViewportBindingNaturalIosEmbed_.prototype.getScrollWidth = function getScrollWidth() {
    // There's no good way to calculate scroll width on iOS in this mode.
    return this.win. /*OK*/innerWidth;
  };

  /** @override */

  ViewportBindingNaturalIosEmbed_.prototype.getScrollHeight = function getScrollHeight() {
    // We have to use a special "tail" element on iOS due to the issues outlined
    // in the {@link onScrolled_} method. Because we are forced to layout BODY
    // with position:absolute, we can no longer use BODY's scrollHeight to
    // determine scrolling height - it will always return the viewport height.
    // Instead, we append the "tail" element as the last child of BODY and use
    // it's viewport-relative position to calculate scrolling height.
    if (!this.endPosEl_) {
      return 0;
    }
    return Math.round(this.endPosEl_. /*OK*/getBoundingClientRect().top - this.scrollPosEl_. /*OK*/getBoundingClientRect().top);
  };

  /** @override */

  ViewportBindingNaturalIosEmbed_.prototype.getLayoutRect = function getLayoutRect(el) {
    var b = el. /*OK*/getBoundingClientRect();
    return _layoutRect.layoutRectLtwh(Math.round(b.left + this.pos_.x), Math.round(b.top + this.pos_.y), Math.round(b.width), Math.round(b.height));
  };

  /** @override */

  ViewportBindingNaturalIosEmbed_.prototype.setScrollTop = function setScrollTop(scrollTop) {
    this.setScrollPos_(scrollTop || 1);
  };

  /**
   * @param {!Event} event
   * @private
   */

  ViewportBindingNaturalIosEmbed_.prototype.onScrolled_ = function onScrolled_(event) {
    // We have to use a special "positioning" element on iOS due to the
    // following bugs:
    // - https://code.google.com/p/chromium/issues/detail?id=2891
    // - https://code.google.com/p/chromium/issues/detail?id=157855
    // - https://bugs.webkit.org/show_bug.cgi?id=106133
    // - https://bugs.webkit.org/show_bug.cgi?id=149264
    // This is an iOS-specific issue in the context of AMP, but Chrome bugs
    // are listed for reference. In a nutshell, this is because WebKit (and
    // Chrome as well) redirect body's scrollTop to documentElement instead of
    // body. Since in this case we are actually using direct body scrolling,
    // body's scrollTop would always return wrong values.
    // This will all change with a complete migration when
    // document./*OK*/scrollingElement will point to document.documentElement.
    // This already works correctly in Chrome with "scroll-top-left-interop"
    // flag turned on "chrome://flags/#scroll-top-left-interop".
    if (!this.scrollPosEl_) {
      return;
    }
    this.adjustScrollPos_(event);
    var rect = this.scrollPosEl_. /*OK*/getBoundingClientRect();
    if (this.pos_.x != -rect.left || this.pos_.y != -rect.top) {
      this.pos_.x = -rect.left;
      this.pos_.y = -rect.top;
      this.scrollObservable_.fire();
    }
  };

  /** @private */

  ViewportBindingNaturalIosEmbed_.prototype.setScrollPos_ = function setScrollPos_(scrollPos) {
    if (!this.scrollMoveEl_) {
      return;
    }
    _style.setStyle(this.scrollMoveEl_, 'transform', 'translateY(' + scrollPos + 'px)');
    this.scrollMoveEl_. /*OK*/scrollIntoView(true);
  };

  /**
   * @param {!Event=} opt_event
   * @private
   */

  ViewportBindingNaturalIosEmbed_.prototype.adjustScrollPos_ = function adjustScrollPos_(opt_event) {
    if (!this.scrollPosEl_ || !this.scrollMoveEl_) {
      return;
    }

    // Scroll document into a safe position to avoid scroll freeze on iOS.
    // This means avoiding scrollTop to be minimum (0) or maximum value.
    // This is very sad but very necessary. See #330 for more details.
    var scrollTop = -this.scrollPosEl_. /*OK*/getBoundingClientRect().top;
    if (scrollTop == 0) {
      this.setScrollPos_(1);
      if (opt_event) {
        opt_event.preventDefault();
      }
      return;
    }

    // TODO(dvoytenko, #330): Ideally we would do the same for the overscroll
    // on the bottom. Unfortunately, iOS Safari misreports scrollHeight in
    // this case.
  };

  return ViewportBindingNaturalIosEmbed_;
})();

exports.ViewportBindingNaturalIosEmbed_ = ViewportBindingNaturalIosEmbed_;

var ViewportBindingVirtual_ = (function () {

  /**
   * @param {!Window} win
   * @param {!Viewer} viewer
   */

  function ViewportBindingVirtual_(win, viewer) {
    babelHelpers.classCallCheck(this, ViewportBindingVirtual_);

    /** @private @const {!Window} */
    this.win = win;

    /** @private {number} */
    this.width_ = viewer.getViewportWidth();

    /** @private {number} */
    this.height_ = viewer.getViewportHeight();

    /** @private {number} */
    this. /*OK*/scrollTop_ = viewer.getScrollTop();

    /** @private @const {!Observable} */
    this.scrollObservable_ = new _observable.Observable();

    /** @private @const {!Observable} */
    this.resizeObservable_ = new _observable.Observable();

    _log.log.fine(TAG_, 'initialized virtual viewport');
  }

  /**
   * Parses viewport meta value. It usually looks like:
   * ```
   * width=device-width,initial-scale=1,minimum-scale=1
   * ```
   * @param {string} content
   * @return {!Object<string, string>}
   * @private Visible for testing only.
   */

  /** @override */

  ViewportBindingVirtual_.prototype.cleanup_ = function cleanup_() {}
  // TODO(dvoytenko): remove listeners

  /** @override */
  ;

  ViewportBindingVirtual_.prototype.requiresFixedLayerTransfer = function requiresFixedLayerTransfer() {
    return false;
  };

  /** @override */

  ViewportBindingVirtual_.prototype.updateViewerViewport = function updateViewerViewport(viewer) {
    if (viewer.getScrollTop() != this. /*OK*/scrollTop_) {
      this. /*OK*/scrollTop_ = viewer.getScrollTop();
      this.scrollObservable_.fire();
    }
    if (viewer.getViewportWidth() != this.width_ || viewer.getViewportHeight() != this.height_) {
      this.width_ = viewer.getViewportWidth();
      this.height_ = viewer.getViewportHeight();
      this.resizeObservable_.fire();
    }
  };

  /** @override */

  ViewportBindingVirtual_.prototype.updatePaddingTop = function updatePaddingTop(paddingTop) {
    this.win.document.documentElement.style.paddingTop = _style.px(paddingTop);
  };

  /** @override */

  ViewportBindingVirtual_.prototype.onScroll = function onScroll(callback) {
    this.scrollObservable_.add(callback);
  };

  /** @override */

  ViewportBindingVirtual_.prototype.onResize = function onResize(callback) {
    this.resizeObservable_.add(callback);
  };

  /** @override */

  ViewportBindingVirtual_.prototype.getSize = function getSize() {
    return { width: this.width_, height: this.height_ };
  };

  /** @override */

  ViewportBindingVirtual_.prototype.getScrollTop = function getScrollTop() {
    return this. /*OK*/scrollTop_;
  };

  /** @override */

  ViewportBindingVirtual_.prototype.getScrollLeft = function getScrollLeft() {
    return 0;
  };

  /** @override */

  ViewportBindingVirtual_.prototype.getScrollWidth = function getScrollWidth() {
    return this.win.document.documentElement. /*OK*/scrollWidth;
  };

  /** @override */

  ViewportBindingVirtual_.prototype.getScrollHeight = function getScrollHeight() {
    return this.win.document.documentElement. /*OK*/scrollHeight;
  };

  /**
   * Returns the rect of the element within the document.
   * @param {!Element} el
   * @return {!LayoutRect}
   */

  ViewportBindingVirtual_.prototype.getLayoutRect = function getLayoutRect(el) {
    var b = el. /*OK*/getBoundingClientRect();
    return _layoutRect.layoutRectLtwh(Math.round(b.left), Math.round(b.top), Math.round(b.width), Math.round(b.height));
  };

  /** @override */

  ViewportBindingVirtual_.prototype.setScrollTop = function setScrollTop(unusedScrollTop) {
    // TODO(dvoytenko): communicate to the viewer.
  };

  return ViewportBindingVirtual_;
})();

exports.ViewportBindingVirtual_ = ViewportBindingVirtual_;

function parseViewportMeta(content) {
  // Ex: width=device-width,initial-scale=1,minimal-ui
  var params = Object.create(null);
  if (!content) {
    return params;
  }
  var pairs = content.split(',');
  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];
    var split = pair.split('=');
    var _name = split[0].trim();
    var value = split[1];
    value = (value || '').trim();
    if (_name) {
      params[_name] = value;
    }
  }
  return params;
}

/**
 * Stringifies viewport meta value based on the provided map. It usually looks
 * like:
 * ```
 * width=device-width,initial-scale=1,minimum-scale=1
 * ```
 * @param {!Object<string, string>} params
 * @return {string}
 * @private Visible for testing only.
 */

function stringifyViewportMeta(params) {
  // Ex: width=device-width,initial-scale=1,minimal-ui
  var content = '';
  for (var k in params) {
    if (content.length > 0) {
      content += ',';
    }
    if (params[k]) {
      content += k + '=' + params[k];
    } else {
      content += k;
    }
  }
  return content;
}

/**
 * This method makes a minimal effort to keep the original viewport string
 * unchanged if in fact none of the values have been updated. Returns the
 * updated string or the `currentValue` if no changes were necessary.
 *
 * @param {string} currentValue
 * @param {!Object<string, string|undefined>} updateParams
 * @return {string}
 * @private Visible for testing only.
 */

function updateViewportMetaString(currentValue, updateParams) {
  var params = parseViewportMeta(currentValue);
  var changed = false;
  for (var k in updateParams) {
    if (params[k] !== updateParams[k]) {
      changed = true;
      if (updateParams[k] !== undefined) {
        params[k] = updateParams[k];
      } else {
        delete params[k];
      }
    }
  }
  if (!changed) {
    return currentValue;
  }
  return stringifyViewportMeta(params);
}

/**
 * @param {!Window} window
 * @return {!Viewport}
 * @private
 */
function createViewport_(window) {
  var viewer = _viewerImpl.installViewerService(window);
  var binding = undefined;
  if (viewer.getViewportType() == 'virtual') {
    binding = new ViewportBindingVirtual_(window, viewer);
  } else if (viewer.getViewportType() == 'natural-ios-embed') {
    binding = new ViewportBindingNaturalIosEmbed_(window);
  } else {
    binding = new ViewportBindingNatural_(window);
  }
  return new Viewport(window, binding, viewer);
}

/**
 * @param {!Window} window
 * @return {!Viewport}
 */

function installViewportService(window) {
  return _service.getService(window, 'viewport', function () {
    return createViewport_(window);
  });
}

;

},{"../document-ready":23,"../layout-rect":36,"../log":39,"../observable":41,"../platform":44,"../service":53,"../style":66,"../timer":69,"./fixed-layer":55,"./viewer-impl":60,"./vsync-impl":62}],62:[function(require,module,exports){
exports.__esModule = true;
exports.installVsyncService = installVsyncService;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _pass = require('../pass');

var _error = require('../error');

var _service = require('../service');

var _log = require('../log');

var _timer = require('../timer');

var _viewerImpl = require('./viewer-impl');

/** @const {time} */
var FRAME_TIME = 16;

/**
 * @typedef {Object<string, *>}
 */
var VsyncStateDef = undefined;

/**
 * @typedef {{
 *   measure: (function(!VsyncStateDef)|undefined),
 *   mutate: (function(!VsyncStateDef)|undefined)
 * }}
 */
var VsyncTaskSpecDef = undefined;

/**
 * Abstraction over requestAnimationFrame that align DOM read (measure)
 * and write (mutate) tasks in a single frame.
 *
 * NOTE: If the document is invisible due to prerendering (this includes
 * application level prerendering where the doc is rendered in a hidden
 * iframe or webview), then no frame will be scheduled.
 */

var Vsync = (function () {

  /**
   * @param {!Window} win
   * @param {!Viewer} viewer
   */

  function Vsync(win, viewer) {
    var _this = this;

    babelHelpers.classCallCheck(this, Vsync);

    /** @const {!Window} */
    this.win = win;

    /** @private @const {!Viewer} */
    this.viewer_ = viewer;

    /** @private @const {function(function())}  */
    this.raf_ = this.getRaf_();

    /**
     * Tasks to run in the next frame.
     * @private {!Array<!VsyncTaskSpecDef>}
     */
    this.tasks_ = [];

    /**
     * States for tasks in the next frame in the same order.
     * @private {!Array<!VsyncStateDef>}
     */
    this.states_ = [];

    /**
     * Whether a new animation frame has been scheduled.
     * @private {boolean}
     */
    this.scheduled_ = false;

    /** @const {!Function} */
    this.boundRunScheduledTasks_ = this.runScheduledTasks_.bind(this);

    /** @const {!Pass} */
    this.pass_ = new _pass.Pass(this.boundRunScheduledTasks_, FRAME_TIME);

    // When the document changes visibility, vsync has to reschedule the queue
    // processing.
    this.viewer_.onVisibilityChanged(function () {
      if (_this.scheduled_) {
        _this.forceSchedule_();
      }
    });
  }

  /**
   * @param {!Window} window
   * @return {!Vsync}
   */

  /**
   * Runs vsync task: measure followed by mutate.
   *
   * If state is not provided, the value passed to the measure and mutate
   * will be undefined.
   *
   * @param {!VsyncTaskSpecDef} task
   * @param {!VsyncStateDef=} opt_state
   */

  Vsync.prototype.run = function run(task, opt_state) {
    this.tasks_.push(task);
    this.states_.push(opt_state || {});
    this.schedule_();
  };

  /**
   * Runs vsync task: measure followed by mutate. Returns the promise that
   * will be resolved as soon as the task has been completed.
   *
   * If state is not provided, the value passed to the measure and mutate
   * will be undefined.
   *
   * @param {!VsyncTaskSpecDef} task
   * @param {!VsyncStateDef=} opt_state
   * @return {!Promise}
   */

  Vsync.prototype.runPromise = function runPromise(task, opt_state) {
    var _this2 = this;

    return new Promise(function (resolve) {
      _this2.run({
        measure: function (state) {
          task.measure(state);
        },
        mutate: function (state) {
          task.mutate(state);
          resolve();
        }
      }, opt_state);
    });
  };

  /**
   * Creates a function that will call {@link run} method.
   * @param {!VsyncTaskSpecDef} task
   * @return {function(!VsyncStateDef=)}
   */

  Vsync.prototype.createTask = function createTask(task) {
    var _this3 = this;

    return function (opt_state) {
      _this3.run(task, opt_state);
    };
  };

  /**
   * Runs the mutate operation via vsync.
   * @param {function()} mutator
   */

  Vsync.prototype.mutate = function mutate(mutator) {
    this.run({ mutate: mutator });
  };

  /**
   * Runs `mutate` wrapped in a promise.
   * @param {function()} mutator
   * @return {!Promise}
   */

  Vsync.prototype.mutatePromise = function mutatePromise(mutator) {
    var _this4 = this;

    return new Promise(function (resolve) {
      _this4.mutate(function () {
        mutator();
        resolve();
      });
    });
  };

  /**
   * Runs the measure operation via vsync.
   * @param {function()} measurer
   */

  Vsync.prototype.measure = function measure(measurer) {
    this.run({ measure: measurer });
  };

  /**
   * Runs `measure` wrapped in a promise.
   * @param {function():TYPE} measurer
   * @return {!Promise<TYPE>}
   * @templates TYPE
   */

  Vsync.prototype.measurePromise = function measurePromise(measurer) {
    var _this5 = this;

    return new Promise(function (resolve) {
      _this5.measure(function () {
        resolve(measurer());
      });
    });
  };

  /**
   * Whether the runtime is allowed to animate at this time.
   * @return {boolean}
   */

  Vsync.prototype.canAnimate = function canAnimate() {
    return this.viewer_.isVisible();
  };

  /**
   * Runs the animation vsync task. This operation can only run when animations
   * are allowed. Otherwise, this method returns `false` and exits.
   * @param {!VsyncTaskSpecDef} task
   * @param {!VsyncStateDef=} opt_state
   * @return {boolean}
   */

  Vsync.prototype.runAnim = function runAnim(task, opt_state) {
    // Do not request animation frames when the document is not visible.
    if (!this.canAnimate()) {
      _log.log.warn('Vsync', 'Did not schedule a vsync request, because document was invisible');
      return false;
    }
    this.run(task, opt_state);
    return true;
  };

  /**
   * Creates an animation vsync task. This operation can only run when
   * animations are allowed. Otherwise, this closure returns `false` and exits.
   * @param {!VsyncTaskSpecDef} task
   * @return {function(!VsyncStateDef=):boolean}
   */

  Vsync.prototype.createAnimTask = function createAnimTask(task) {
    var _this6 = this;

    return function (opt_state) {
      return _this6.runAnim(task, opt_state);
    };
  };

  /**
   * Runs the series of mutates until the mutator returns a false value.
   * @param {function(time, time, !VsyncStateDef):boolean} mutator The
   *   mutator callback. Only expected to do DOM writes, not reads. If the
   *   returned value is true, the vsync task will be repeated, otherwise it
   *   will be completed. The arguments are: timeSinceStart:time,
   *   timeSincePrev:time and state:VsyncStateDef.
   * @param {number=} opt_timeout Optional timeout that will force the series
   *   to complete and reject the promise.
   * @return {!Promise} Returns the promise that will either resolve on when
   *   the vsync series are completed or reject in case of failure, such as
   *   timeout.
   */

  Vsync.prototype.runAnimMutateSeries = function runAnimMutateSeries(mutator, opt_timeout) {
    var _this7 = this;

    if (!this.canAnimate()) {
      return Promise.reject(_error.cancellation());
    }
    return new Promise(function (resolve, reject) {
      var startTime = _timer.timer.now();
      var prevTime = 0;
      var task = _this7.createAnimTask({
        mutate: function (state) {
          var timeSinceStart = _timer.timer.now() - startTime;
          var res = mutator(timeSinceStart, timeSinceStart - prevTime, state);
          if (!res) {
            resolve();
          } else if (opt_timeout && timeSinceStart > opt_timeout) {
            reject(new Error('timeout'));
          } else {
            prevTime = timeSinceStart;
            task(state);
          }
        }
      });
      task({});
    });
  };

  /** @private */

  Vsync.prototype.schedule_ = function schedule_() {
    if (this.scheduled_) {
      return;
    }
    // Schedule actual animation frame and then run tasks.
    this.scheduled_ = true;
    this.forceSchedule_();
  };

  /** @private */

  Vsync.prototype.forceSchedule_ = function forceSchedule_() {
    if (this.canAnimate()) {
      this.raf_(this.boundRunScheduledTasks_);
    } else {
      this.pass_.schedule();
    }
  };

  /**
   * Runs all scheduled tasks. This is typically called in an RAF
   * callback. Tests may call this method to force execution of
   * tasks without waiting.
   * @private
   */

  Vsync.prototype.runScheduledTasks_ = function runScheduledTasks_() {
    this.scheduled_ = false;
    // TODO(malteubl) Avoid array allocation with a double buffer.
    var tasks = this.tasks_;
    var states = this.states_;
    this.tasks_ = [];
    this.states_ = [];
    for (var i = 0; i < tasks.length; i++) {
      if (tasks[i].measure) {
        tasks[i].measure(states[i]);
      }
    }
    for (var i = 0; i < tasks.length; i++) {
      if (tasks[i].mutate) {
        tasks[i].mutate(states[i]);
      }
    }
  };

  /**
   * @return {function(function())} requestAnimationFrame or polyfill.
   */

  Vsync.prototype.getRaf_ = function getRaf_() {
    var _this8 = this;

    var raf = this.win.requestAnimationFrame || this.win.webkitRequestAnimationFrame;
    if (raf) {
      return raf.bind(this.win);
    }
    var lastTime = 0;
    return function (fn) {
      var now = new Date().getTime();
      // By default we take 16ms between frames, but if the last frame is say
      // 10ms ago, we only want to wait 6ms.
      var timeToCall = Math.max(0, FRAME_TIME - (now - lastTime));
      lastTime = now + timeToCall;
      _this8.win.setTimeout(fn, timeToCall);
    };
  };

  return Vsync;
})();

exports.Vsync = Vsync;

function installVsyncService(window) {
  return _service.getService(window, 'vsync', function () {
    return new Vsync(window, _viewerImpl.installViewerService(window));
  });
}

;

},{"../error":27,"../log":39,"../pass":42,"../service":53,"../timer":69,"./viewer-impl":60}],63:[function(require,module,exports){
exports.__esModule = true;
exports.parseSizeList = parseSizeList;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _asserts = require('./asserts');

var _layout = require('./layout');

/**
 * A single option within a SizeList.
 * @typedef {{
 *   mediaQuery: (string|undefined),
 *   size: (!Length)
 * }}
 */
var SizeListOptionDef = undefined;

/**
 * Parses the text representation of "sizes" into SizeList object.
 *
 * There could be any number of size options within the SizeList. They are tried
 * in the order they were defined. The final size option must not have "media"
 * condition specified. All other size options must have "media" condition
 * specified.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#Attributes
 * See http://www.w3.org/html/wg/drafts/html/master/semantics.html#attr-img-sizes
 * @param {string} s
 * @param {boolean=} opt_allowPercentAsLength when parsing heights
 * @return {!SizeList}
 */

function parseSizeList(s, opt_allowPercentAsLength) {
  var sSizes = s.split(',');
  _asserts.assert(sSizes.length > 0, 'sizes has to have at least one size');
  var sizes = [];
  sSizes.forEach(function (sSize) {
    sSize = sSize.replace(/\s+/g, ' ').trim();
    if (sSize.length == 0) {
      return;
    }

    var mediaStr = undefined;
    var sizeStr = undefined;
    var spaceIndex = sSize.lastIndexOf(' ');
    if (spaceIndex != -1) {
      mediaStr = sSize.substring(0, spaceIndex).trim();
      sizeStr = sSize.substring(spaceIndex + 1).trim();
    } else {
      sizeStr = sSize;
      mediaStr = undefined;
    }
    sizes.push({ mediaQuery: mediaStr,
      size: opt_allowPercentAsLength ? _layout.assertLengthOrPercent(sizeStr) : _layout.assertLength(sizeStr) });
  });
  return new SizeList(sizes);
}

;

/**
 * A SizeList object contains one or more sizes as typically seen in "sizes"
 * attribute.
 *
 * See "select" method for details on how the size selection is performed.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#Attributes
 * See http://www.w3.org/html/wg/drafts/html/master/semantics.html#attr-img-sizes
 */

var SizeList = (function () {
  /**
   * @param {!Array<!SizeListOptionDef>} sizes
   */

  function SizeList(sizes) {
    babelHelpers.classCallCheck(this, SizeList);

    _asserts.assert(sizes.length > 0, 'SizeList must have at least one option');
    /** @private @const {!Array<!SizeListOptionDef>} */
    this.sizes_ = sizes;

    // All sources except for last must have a media query. The last one must
    // not.
    for (var i = 0; i < sizes.length; i++) {
      var option = sizes[i];
      if (i < sizes.length - 1) {
        _asserts.assert(option.mediaQuery, 'All options except for the last must have a media condition');
      } else {
        _asserts.assert(!option.mediaQuery, 'The last option must not have a media condition');
      }
    }
  }

  /**
   * Selects the first size that matches media conditions. If no options match,
   * the last option is returned.
   *
   * See http://www.w3.org/html/wg/drafts/html/master/semantics.html#attr-img-sizes
   * @param {!Window} win
   * @return {!Length}
   */

  SizeList.prototype.select = function select(win) {
    for (var i = 0; i < this.sizes_.length - 1; i++) {
      var option = this.sizes_[i];
      if (win.matchMedia(option.mediaQuery).matches) {
        return option.size;
      }
    }
    return this.getLast();
  };

  /**
   * Returns the last size in the SizeList, which is the default.
   * @return {!Length}
   */

  SizeList.prototype.getLast = function getLast() {
    return this.sizes_[this.sizes_.length - 1].size;
  };

  return SizeList;
})();

exports.SizeList = SizeList;

},{"./asserts":16,"./layout":37}],64:[function(require,module,exports){
exports.__esModule = true;
exports.parseSrcset = parseSrcset;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _asserts = require('./asserts');

/**
 * A single source within a srcset. Only one: width or DPR can be specified at
 * a time.
 * @typedef {{
 *   url: string,
 *   width: (number|undefined),
 *   dpr: (number|undefined)
 * }}
 */
var SrcsetSourceDef = undefined;

/**
 * Parses the text representation of srcset into Srcset object.
 * See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#Attributes.
 * See http://www.w3.org/html/wg/drafts/html/master/semantics.html#attr-img-srcset.
 * @param {string} s
 * @return {!Srcset}
 */

function parseSrcset(s) {
  // General grammar: (URL [NUM[w|x]],)*
  // Example 1: "image1.png 100w, image2.png 50w"
  // Example 2: "image1.png 2x, image2.png"
  // Example 3: "image1,100w.png 100w, image2.png 50w"
  var sSources = s.match(/\s*([^\s]*)(\s+(-?(\d+(\.(\d+)?)?|\.\d+)[a-zA-Z]))?(\s*,)?/g);
  _asserts.assert(sSources.length > 0, 'srcset has to have at least one source');
  var sources = [];
  sSources.forEach(function (sSource) {
    sSource = sSource.trim();
    if (sSource.substr(-1) == ',') {
      sSource = sSource.substr(0, sSource.length - 1).trim();
    }
    var parts = sSource.split(/\s+/, 2);
    if (parts.length == 0 || parts.length == 1 && !parts[0] || parts.length == 2 && !parts[0] && !parts[1]) {
      return;
    }
    var url = parts[0].trim();
    if (parts.length == 1 || parts.length == 2 && !parts[1]) {
      // If no "w" or "x" specified, we assume it's "1x".
      sources.push({ url: url, dpr: 1 });
    } else {
      var spec = parts[1].trim().toLowerCase();
      var lastChar = spec.substring(spec.length - 1);
      if (lastChar == 'w') {
        sources.push({ url: url, width: parseFloat(spec) });
      } else if (lastChar == 'x') {
        sources.push({ url: url, dpr: parseFloat(spec) });
      }
    }
  });
  return new Srcset(sources);
}

;

/**
 * A srcset object contains one or more sources.
 *
 * There are two types of sources: width-based and DPR-based. Only one type
 * of sources allowed to be specified within a single srcset. Depending on a
 * usecase, the components are free to choose any source that best corresponds
 * to the required rendering quality and network and CPU conditions. See
 * "select" method for details on how this selection is performed.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#Attributes
 */

var Srcset = (function () {

  /**
   * @param {!Array<!SrcsetSourceDef>} sources
   */

  function Srcset(sources) {
    babelHelpers.classCallCheck(this, Srcset);

    _asserts.assert(sources.length > 0, 'Srcset must have at least one source');
    /** @private @const {!Array<!SrcsetSourceDef>} */
    this.sources_ = sources;

    // Only one type of source specified can be used - width or DPR.
    var hasWidth = false;
    var hasDpr = false;
    this.sources_.forEach(function (source) {
      _asserts.assert((source.width || source.dpr) && (!source.width || !source.dpr), 'Either dpr or width must be specified');
      hasWidth = hasWidth || !!source.width;
      hasDpr = hasDpr || !!source.dpr;
    });
    _asserts.assert(!hasWidth || !hasDpr, 'Srcset cannot have both width and dpr sources');

    // Source and assert duplicates.
    if (hasWidth) {
      this.sources_.sort(function (s1, s2) {
        _asserts.assert(s1.width != s2.width, 'Duplicate width: %s', s1.width);
        return s2.width - s1.width;
      });
    } else {
      this.sources_.sort(function (s1, s2) {
        _asserts.assert(s1.dpr != s2.dpr, 'Duplicate dpr: %s', s1.dpr);
        return s2.dpr - s1.dpr;
      });
    }

    /** @private @const {boolean} */
    this.widthBased_ = hasWidth;

    /** @private @const {boolean} */
    this.dprBased_ = hasDpr;
  }

  /**
   * Performs selection for specified width and DPR. Here, width is the width
   * in screen pixels and DPR is the device-pixel-ratio or pixel density of
   * the device. Depending on the circumstances, such as low network conditions,
   * it's possible to manipulate the result of this method by passing a lower
   * DPR value.
   *
   * The source selection depends on whether this is width-based or DPR-based
   * srcset.
   *
   * In a width-based source, the source's width is the physical width of a
   * resource (e.g. an image). Depending on the provided DPR, this width is
   * converted to the screen pixels as following:
   *   pixelWidth = sourceWidth / DPR
   *
   * Then, the source closest to the requested "width" is selected using
   * the "pixelWidth". The slight preference is given to the bigger sources to
   * ensure the most optimal quality.
   *
   * In a DPR-based source, the source's DPR is used to return the source that
   * is closest to the requested DPR.
   *
   * Based on
   * http://www.w3.org/html/wg/drafts/html/master/semantics.html#attr-img-srcset.
   * @param {number} width
   * @param {number} dpr
   * @return {!SrcsetSourceDef}
   */

  Srcset.prototype.select = function select(width, dpr) {
    _asserts.assert(width, 'width=%s', width);
    _asserts.assert(dpr, 'dpr=%s', dpr);
    var index = -1;
    if (this.widthBased_) {
      index = this.selectByWidth_(width, dpr);
    } else if (this.dprBased_) {
      index = this.selectByDpr_(width, dpr);
    }
    if (index != -1) {
      return this.sources_[index];
    }
    return this.getLast();
  };

  /**
   * @param {number} width
   * @param {number} dpr
   * @return {number}
   * @private
   */

  Srcset.prototype.selectByWidth_ = function selectByWidth_(width, dpr) {
    var minIndex = -1;
    var minWidth = 1000000;
    var minScore = 1000000;
    for (var i = 0; i < this.sources_.length; i++) {
      var source = this.sources_[i];
      var sourceWidth = undefined;
      if (source.width) {
        sourceWidth = source.width / dpr;
      } else {
        // Default source: no width: assume values are half of of the
        // minimum values seen.
        sourceWidth = minWidth / 2;
      }
      minWidth = Math.min(minWidth, sourceWidth);
      // The calculation is slightly biased toward higher width by offsetting
      // score by negative 0.2.
      var score = Math.abs((sourceWidth - width) / width - 0.2);
      if (score < minScore) {
        minScore = score;
        minIndex = i;
      }
    }
    return minIndex;
  };

  /**
   * @param {number} width
   * @param {number} dpr
   * @return {number}
   * @private
   */

  Srcset.prototype.selectByDpr_ = function selectByDpr_(_width, dpr) {
    var minIndex = -1;
    var minScore = 1000000;
    for (var i = 0; i < this.sources_.length; i++) {
      var source = this.sources_[i];
      // Default DPR = 1.
      var sourceDpr = source.dpr || 1;
      var score = Math.abs(sourceDpr - dpr);
      if (score < minScore) {
        minScore = score;
        minIndex = i;
      }
    }
    return minIndex;
  };

  /**
   * Returns the last source in the srcset, which is the default source.
   * @return {!SrcsetSourceDef}
   */

  Srcset.prototype.getLast = function getLast() {
    return this.sources_[this.sources_.length - 1];
  };

  /**
   * Returns all sources in the srcset.
   * @return {!Array<!SrcsetSourceDef>}
   */

  Srcset.prototype.getSources = function getSources() {
    return this.sources_;
  };

  /**
   * Reconstructs the string expression for this srcset.
   * @return {string}
   */

  Srcset.prototype.stringify = function stringify() {
    var res = [];
    for (var i = 0; i < this.sources_.length; i++) {
      var source = this.sources_[i];
      if (source.width) {
        res.push(source.url + ' ' + source.width + 'w');
      } else if (source.dpr) {
        res.push(source.url + ' ' + source.dpr + 'x');
      } else {
        res.push('' + source.url);
      }
    }
    return res.join(', ');
  };

  return Srcset;
})();

exports.Srcset = Srcset;

},{"./asserts":16}],65:[function(require,module,exports){
exports.__esModule = true;
exports.dashToCamelCase = dashToCamelCase;
exports.endsWith = endsWith;
exports.expandTemplate = expandTemplate;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @param {string} name Attribute name with dashes
 * @return {string} Dashes removed and character after to upper case.
 * visibleForTesting
 */

function dashToCamelCase(name) {
  return name.replace(/-([a-z])/g, function (_all, character) {
    return character.toUpperCase();
  });
}

/**
 * Polyfill for String.prototype. endsWith.
 * @param {string} string
 * @param {string} suffix
 * @return {boolean}
 */

function endsWith(string, suffix) {
  if (suffix.length > string.length) {
    return false;
  }
  return string.lastIndexOf(suffix) == string.length - suffix.length;
}

/**
 * Expands placeholders in a given template string with values.
 *
 * Placeholders use ${key-name} syntax and are replaced with the value
 * returned from the given getter function.
 *
 * @param {string} template The template string to expand.
 * @param {!function(string):*} getter Function used to retrieve a value for a
 *   placeholder. Returns values will be coerced into strings.
 * @param {number=1} optMaxIterations Number of times to expand the template.
 *   Defaults to 1, but should be set to a larger value your placeholder tokens
 *   can be expanded to other placeholder tokens. Take caution with large values
 *   as recursively expanding a string can be exponentially expensive.
 */

function expandTemplate(template, getter, opt_maxIterations) {
  var maxIterations = opt_maxIterations || 1;

  var _loop = function (i) {
    var matches = 0;
    template = template.replace(/\${([^}]*)}/g, function (_a, b) {
      matches++;
      return getter(b);
    });
    if (!matches) {
      return "break";
    }
  };

  for (var i = 0; i < maxIterations; i++) {
    var _ret = _loop(i);

    if (_ret === "break") break;
  }
  return template;
}

},{}],66:[function(require,module,exports){
exports.__esModule = true;
exports.camelCaseToTitleCase = camelCaseToTitleCase;
exports.getVendorJsPropertyName = getVendorJsPropertyName;
exports.setStyle = setStyle;
exports.getStyle = getStyle;
exports.setStyles = setStyles;
exports.toggle = toggle;
exports.px = px;
exports.translateX = translateX;
exports.translate = translate;
exports.scale = scale;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Note: loaded by 3p system. Cannot rely on babel polyfills.

/** @private @const {!Object<string>} */
var propertyNameCache_ = Object.create(null);

/** @private @const {!Array<string>} */
var vendorPrefixes_ = ['Webkit', 'webkit', 'Moz', 'moz', 'ms', 'O', 'o'];

/**
 * @export
 * @param {string} camelCase camel cased string
 * @return {string} title cased string
 */

function camelCaseToTitleCase(camelCase) {
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
}

/**
 * Checks the object if a prefixed version of a property exists and returns
 * it or returns an empty string.
 * @private
 * @param {!Object} object
 * @param {string} titleCase the title case version of a css property name
 * @return {string} the prefixed property name or null.
 */
function getVendorJsPropertyName_(object, titleCase) {
  for (var i = 0; i < vendorPrefixes_.length; i++) {
    var propertyName = vendorPrefixes_[i] + titleCase;
    if (object[propertyName] !== undefined) {
      return propertyName;
    }
  }
  return '';
}

/**
 * Returns the possibly prefixed JavaScript property name of a style property
 * (ex. WebkitTransitionDuration) given a camelCase'd version of the property
 * (ex. transitionDuration).
 * @export
 * @param {!Object} object
 * @param {string} camelCase the camel cased version of a css property name
 * @param {boolean=} opt_bypassCache bypass the memoized cache of property
 *   mapping
 * @return {string}
 */

function getVendorJsPropertyName(object, camelCase, opt_bypassCache) {
  var propertyName = propertyNameCache_[camelCase];
  if (!propertyName || opt_bypassCache) {
    propertyName = camelCase;
    if (object[camelCase] === undefined) {
      var titleCase = camelCaseToTitleCase(camelCase);
      var prefixedPropertyName = getVendorJsPropertyName_(object, titleCase);

      if (object[prefixedPropertyName] !== undefined) {
        propertyName = prefixedPropertyName;
      }
    }
    if (!opt_bypassCache) {
      propertyNameCache_[camelCase] = propertyName;
    }
  }
  return propertyName;
}

/**
 * Sets the CSS style of the specified element with optional units, e.g. "px".
 * @param {!Element} element
 * @param {string} property
 * @param {*} value
 * @param {string=} opt_units
 * @param {boolean=} opt_bypassCache
 */

function setStyle(element, property, value, opt_units, opt_bypassCache) {
  var propertyName = getVendorJsPropertyName(element.style, property, opt_bypassCache);
  if (propertyName) {
    element.style[propertyName] = opt_units ? value + opt_units : value;
  }
}

/**
 * Returns the value of the CSS style of the specified element.
 * @param {!Element} element
 * @param {string} property
 * @param {boolean=} opt_bypassCache
 * @return {*}
 */

function getStyle(element, property, opt_bypassCache) {
  var propertyName = getVendorJsPropertyName(element.style, property, opt_bypassCache);
  if (!propertyName) {
    return undefined;
  }
  return element.style[propertyName];
}

/**
 * Sets the CSS styles of the specified element. The styles
 * a specified as a map from CSS property names to their values.
 * @param {!Element} element
 * @param {!Object<string, *>} styles
 */

function setStyles(element, styles) {
  for (var k in styles) {
    setStyle(element, k, styles[k]);
  }
}

/**
 * Shows or hides the specified element.
 * @param {!Element} element
 * @param {boolean=} opt_display
 */

function toggle(element, opt_display) {
  if (opt_display === undefined) {
    opt_display = !(element.style.display != 'none');
  }
  element.style.display = opt_display ? '' : 'none';
}

/**
 * Returns a pixel value.
 * @param {number} value
 * @return {string}
 */

function px(value) {
  return value + 'px';
}

/**
 * Returns a "translateX" for CSS "transform" property.
 * @param {number|string} value
 * @return {string}
 */

function translateX(value) {
  if (typeof value == 'string') {
    return 'translateX(' + value + ')';
  }
  return 'translateX(' + px(value) + ')';
}

/**
 * Returns a "translateX" for CSS "transform" property.
 * @param {number|string} x
 * @param {(number|string)=} opt_y
 * @return {string}
 */

function translate(x, opt_y) {
  if (typeof x == 'number') {
    x = px(x);
  }
  if (opt_y === undefined) {
    return 'translate(' + x + ')';
  }
  if (typeof opt_y == 'number') {
    opt_y = px(opt_y);
  }
  return 'translate(' + x + ',' + opt_y + ')';
}

/**
 * Returns a "scale" for CSS "transform" property.
 * @param {number|string} value
 * @return {string}
 */

function scale(value) {
  return 'scale(' + value + ')';
}

},{}],67:[function(require,module,exports){
exports.__esModule = true;
exports.installStyles = installStyles;
exports.makeBodyVisible = makeBodyVisible;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _style = require('./style');

var _platform = require('./platform');

/**
 * Adds the given css text to the given document.
 *
 * The style tags will be at the beginning of the head before all author
 * styles. One element can be the main runtime CSS. This is guaranteed
 * to always be the first stylesheet in the doc.
 *
 * @param {!Document} doc The document that should get the new styles.
 * @param {string} cssText
 * @param {function()} cb Called when the new styles are available.
 *     Not using a promise, because this is synchronous when possible.
 *     for better performance.
 * @param {boolean=} opt_isRuntimeCss If true, this style tag will be inserted
 *     as the first element in head and all style elements will be positioned
 *     after.
 * @param {string=} opt_ext
 */

function installStyles(doc, cssText, cb, opt_isRuntimeCss, opt_ext) {
  if (_platform.platformFor(doc.defaultView).isIos() && opt_isRuntimeCss) {
    _style.setStyle(doc.documentElement, 'cursor', 'pointer');
  }
  var style = doc.createElement('style');
  style.textContent = cssText;
  var afterElement = null;
  // Make sure that we place style tags after the main runtime CSS. Otherwise
  // the order is random.
  if (opt_isRuntimeCss) {
    style.setAttribute('amp-runtime', '');
  } else {
    style.setAttribute('amp-extension', opt_ext || '');
    afterElement = doc.querySelector('style[amp-runtime]');
  }
  insertAfterOrAtStart(doc.head, style, afterElement);
  // Styles aren't always available synchronously. E.g. if there is a
  // pending style download, it will have to finish before the new
  // style is visible.
  // For this reason we poll until the style becomes available.
  var done = function () {
    var sheets = doc.styleSheets;
    for (var i = 0; i < sheets.length; i++) {
      var sheet = sheets[i];
      if (sheet.ownerNode == style) {
        return true;
      }
    }
    return false;
  };
  // Sync case.
  if (done()) {
    cb();
    return;
  }
  // Poll until styles are available.
  var interval = setInterval(function () {
    if (done()) {
      clearInterval(interval);
      cb();
    }
  }, 4);
}

/**
 * Sets the document's body opacity to 1.
 * If the body is not yet available (because our script was loaded
 * synchronously), polls until it is.
 * @param {!Document} doc The document who's body we should make visible.
 * @param {?Promise=} extensionsPromise A loading promise for special extensions
 *     which must load before the body can be made visible
 */

function makeBodyVisible(doc, extensionsPromise) {
  var interval = undefined;
  var set = function () {
    if (doc.body) {
      _style.setStyles(doc.body, {
        opacity: 1,
        visibility: 'visible',
        animation: 'none'
      });
      clearInterval(interval);
    }
  };
  var poll = function () {
    interval = setInterval(set, 4);
    set();
  };

  if (extensionsPromise) {
    extensionsPromise.then(poll, poll);
  } else {
    poll();
  }
}

/**
 * Insert the element in the root after the element named after or
 * if that is null at the beginning.
 * @param {!Element} root
 * @param {!Element} element
 * @param {?Element} after
 */
function insertAfterOrAtStart(root, element, after) {
  if (after) {
    if (after.nextSibling) {
      root.insertBefore(element, after.nextSibling);
    } else {
      root.appendChild(element);
    }
  } else {
    // Add at the start.
    root.insertBefore(element, root.firstChild);
  }
}

},{"./platform":44,"./style":66}],68:[function(require,module,exports){
exports.__esModule = true;
exports.registerExtendedTemplate = registerExtendedTemplate;
exports.templatesFor = templatesFor;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _asserts = require('./asserts');

var _dom = require('./dom');

var _service = require('./service');

/**
 * @fileoverview
 * For the set of decisions made on templating see:
 * {@link https://docs.google.com/document/d/1q-5MPQHnOHLF_uL7lQsGZdzuBgrPTkCy2PdRP-YCbOw/edit#}
 */

/**
 * @typedef {function(new:!BaseTemplate, !Element)}
 */
var TemplateClassDef = {};

/** @private @const {string} */
var PROP_ = '__AMP_IMPL_';

/** @private @const {string} */
var PROP_PROMISE_ = '__AMP_WAIT_';

/**
 * The interface that is implemented by all templates.
 */

var BaseTemplate = (function () {

  /** @param {!Element} element */

  function BaseTemplate(element) {
    babelHelpers.classCallCheck(this, BaseTemplate);

    /** @public @const */
    this.element = element;

    this.compileCallback();
  }

  /**
   */

  /** @protected @return {!Window} */

  BaseTemplate.prototype.getWin = function getWin() {
    return this.element.ownerDocument.defaultView;
  };

  /**
   * Override in subclass if the element needs to compile the template.
   * @protected
   */

  BaseTemplate.prototype.compileCallback = function compileCallback() {}
  // Subclasses may override.

  /**
   * To be implemented by subclasses.
   * @param {!JSONObject} unusedData
   * @return {!Element}
   */
  ;

  BaseTemplate.prototype.render = function render(unusedData) {
    throw new Error('Not implemented');
  };

  /**
   * Helps the template implementation to unwrap the root element. The root
   * element can be unwrapped only when it contains a single element or a
   * single element surrounded by empty text nodes.
   * @param {!Element} root
   * @return {!Element}
   * @protected @final
   */

  BaseTemplate.prototype.unwrap = function unwrap(root) {
    var singleElement = null;
    for (var n = root.firstChild; n != null; n = n.nextSibling) {
      if (n.nodeType == /* TEXT */3) {
        if (n.textContent.trim()) {
          // Non-empty text node - can't unwrap.
          singleElement = null;
          break;
        }
      } else if (n.nodeType == /* COMMENT */8) {
        // Ignore comments.
      } else if (n.nodeType == /* ELEMENT */1) {
          if (!singleElement) {
            singleElement = /** @type {!Element} */n;
          } else {
            // This is not the first element - can't unwrap.
            singleElement = null;
            break;
          }
        } else {
          singleElement = null;
        }
    }
    return singleElement || root;
  };

  return BaseTemplate;
})();

exports.BaseTemplate = BaseTemplate;

var Templates = (function () {
  /** @param {!Window} win */

  function Templates(win) {
    babelHelpers.classCallCheck(this, Templates);

    /** @private @const {!Window} */
    this.win_ = win;

    /**
     * A map from template type to template's class promise.
     * @private @const {!Object<string, !Promise<!TemplateClassDef>>}
     */
    this.templateClassMap_ = {};

    /**
     * A map from template type to template's class promise. This is a transient
     * storage. As soon as the template class loaded, the entry is removed.
     * @private @const {!Object<string, function(!TemplateClassDef)>}
     */
    this.templateClassResolvers_ = {};

    /** @type {!Object<string, boolean>|undefined} */
    this.declaredTemplates_ = undefined;
  }

  /**
   * Registers an extended template. This function should typically be called
   * through the registerTemplate method on the AMP runtime.
   * @param {!Window} win
   * @param {string} type
   * @param {!TemplateClassDef} templateClass
   * @package
   */

  /**
   * Renders the specified template element using the supplied data.
   * @param {!Element} templateElement
   * @param {!JSONObject} data
   * @return {!Promise<!Element>}
   */

  Templates.prototype.renderTemplate = function renderTemplate(templateElement, data) {
    var _this = this;

    return this.getImplementation_(templateElement).then(function (impl) {
      return _this.render_(impl, data);
    });
  };

  /**
   * Renders the specified template element using the supplied array of data
   * and returns an array of resulting elements.
   * @param {!Element} templateElement
   * @param {!Array<!JSONObject>} array
   * @return {!Promise<!Array<!Element>>}
   */

  Templates.prototype.renderTemplateArray = function renderTemplateArray(templateElement, array) {
    var _this2 = this;

    if (array.length == 0) {
      return Promise.resolve([]);
    }
    return this.getImplementation_(templateElement).then(function (impl) {
      return array.map(function (item) {
        return _this2.render_(impl, item);
      });
    });
  };

  /**
   * Discovers the template for the specified parent and renders it using the
   * supplied data. The template can be specified either via "template"
   * attribute  or as a child "template" element. When specified via "template"
   * attribute, the value indicates the ID of the template element.
   * @param {!Element} parent
   * @param {!JSONObject} data
   * @return {!Promise<!Element>}
   */

  Templates.prototype.findAndRenderTemplate = function findAndRenderTemplate(parent, data) {
    return this.renderTemplate(this.findTemplate_(parent), data);
  };

  /**
   * Discovers the template for the specified parent and renders it using the
   * supplied array of data. The template can be specified either via "template"
   * attribute or as a child "template" element. When specified via "template"
   * attribute, the value indicates the ID of the template element. Returns
   * the array of the rendered elements.
   * @param {!Element} parent
   * @param {!Array<!JSONObject>} array
   * @return {!Promise<!Array<!Element>>}
   */

  Templates.prototype.findAndRenderTemplateArray = function findAndRenderTemplateArray(parent, array) {
    return this.renderTemplateArray(this.findTemplate_(parent), array);
  };

  /**
   * The template can be specified either via "template" attribute or as a
   * child "template" element. When specified via "template" attribute,
   * the value indicates the ID of the template element.
   * @param {!Element} parent
   * @return {!Element}
   * @private
   */

  Templates.prototype.findTemplate_ = function findTemplate_(parent) {
    var templateElement = null;
    var templateId = parent.getAttribute('template');
    if (templateId) {
      templateElement = parent.ownerDocument.getElementById(templateId);
    } else {
      templateElement = _dom.childElementByTag(parent, 'template');
    }
    _asserts.assert(templateElement, 'Template not found for %s', parent);
    _asserts.assert(templateElement.tagName == 'TEMPLATE', 'Template element must be a "template" tag %s', templateElement);
    return templateElement;
  };

  /**
   * Returns the promise that will eventually yield the template implementation
   * for the specified template element.
   * @param {!Element} element
   * @return {!Promise<!BaseTemplate>}
   * @private
   */

  Templates.prototype.getImplementation_ = function getImplementation_(element) {
    var impl = element[PROP_];
    if (impl) {
      return Promise.resolve(impl);
    }

    var type = _asserts.assert(element.getAttribute('type'), 'Type must be specified: %s', element);

    var promise = element[PROP_PROMISE_];
    if (promise) {
      return promise;
    }

    promise = this.waitForTemplateClass_(element, type).then(function (templateClass) {
      var impl = element[PROP_] = new templateClass(element);
      delete element[PROP_PROMISE_];
      return impl;
    });
    element[PROP_PROMISE_] = promise;
    return promise;
  };

  /**
   * Returns the promise that will eventually yield the template class. This will
   * wait until the actual template script has been downloaded and parsed.
   * @param {!Element} element
   * @param {string} type
   * @return {!Promise<!TemplateClassDef>}
   * @private
   */

  Templates.prototype.waitForTemplateClass_ = function waitForTemplateClass_(element, type) {
    if (this.templateClassMap_[type]) {
      return this.templateClassMap_[type];
    }

    this.checkTemplateDeclared_(element, type);
    var aResolve = undefined;
    var promise = new Promise(function (resolve, unusedReject) {
      aResolve = resolve;
    });
    this.templateClassMap_[type] = promise;
    this.templateClassResolvers_[type] = aResolve;
    return promise;
  };

  /**
   * Checks that the template type has actually been declared by a
   * `<script custom-template=$type>` tag in the head.
   * @param {!Element} element
   * @param {string} type
   * @private
   */

  Templates.prototype.checkTemplateDeclared_ = function checkTemplateDeclared_(element, type) {
    if (!this.declaredTemplates_) {
      this.declaredTemplates_ = this.win_.Object.create(null);
      var scriptTags = this.win_.document.querySelectorAll('script[custom-template]');
      for (var i = 0; i < scriptTags.length; i++) {
        this.declaredTemplates_[scriptTags[i].getAttribute('custom-template')] = true;
      }
    }
    _asserts.assert(this.declaredTemplates_[type], 'Template must be declared for %s as <script custom-template=%s>', element, type);
  };

  /**
   * Registers an extended template. This function should typically be called
   * through the registerTemplate method on the AMP runtime.
   * @param {string} type
   * @param {!TemplateClassDef} templateClass
   * @private
   */

  Templates.prototype.registerTemplate_ = function registerTemplate_(type, templateClass) {
    if (!this.templateClassMap_[type]) {
      this.templateClassMap_[type] = Promise.resolve(templateClass);
    } else {
      var resolver = this.templateClassResolvers_[type];
      _asserts.assert(resolver, 'Duplicate template type: %s', type);
      delete this.templateClassResolvers_[type];
      resolver(templateClass);
    }
  };

  /**
   * @param {!BaseTemplate} impl
   * @param {!JSONObject} data
   * @private
   */

  Templates.prototype.render_ = function render_(impl, data) {
    var root = impl.render(data);
    var anchors = root.getElementsByTagName('a');
    for (var i = 0; i < anchors.length; i++) {
      var anchor = anchors[i];
      if (!anchor.hasAttribute('href')) {
        // Ignore anchors without href.
        continue;
      }

      // TODO(dvoytenko, #1572): This code should be unnecessary after
      // sanitization issue has been addressed.
      anchor.setAttribute('target', '_blank');
    }
    return root;
  };

  return Templates;
})();

exports.Templates = Templates;

function registerExtendedTemplate(win, type, templateClass) {
  return templatesFor(win).registerTemplate_(type, templateClass);
}

/**
 * @param {!Window} window
 * @return {!Templates}
 */

function templatesFor(window) {
  return _service.getService(window, 'templates', function () {
    return new Templates(window);
  });
}

;

},{"./asserts":16,"./dom":25,"./service":53}],69:[function(require,module,exports){
exports.__esModule = true;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Requires polyfills in immediate side effect.

require('./polyfills');

var _asserts = require('./asserts');

/**
 * Helper with all things Timer.
 */

var Timer = (function () {

  /**
   * @param {!Window} win
   */

  function Timer(win) {
    babelHelpers.classCallCheck(this, Timer);

    /** @const {!Window} */
    this.win = win;

    /** @private @const {!Promise}  */
    this.resolved_ = Promise.resolve();

    this.taskCount_ = 0;

    this.canceled_ = {};

    /** @const {number} */
    this.startTime_ = this.now();
  }

  /**
   * Returns the current EPOC time in milliseconds.
   * @return {number}
   */

  Timer.prototype.now = function now() {
    // TODO(dvoytenko): when can we use Date.now?
    return Number(new Date());
  };

  /**
   * Returns time since start in milliseconds.
   * @return {number}
   */

  Timer.prototype.timeSinceStart = function timeSinceStart() {
    return this.now() - this.startTime_;
  };

  /**
   * Runs the provided callback after the specified delay. This uses a micro
   * task for 0 or no specified time. This means that the delay will actually
   * be close to 0 and this will NOT yield to the event queue.
   *
   * Returns the timer ID that can be used to cancel the timer (cancel method).
   * @param {!function()} callback
   * @param {number=} opt_delay
   * @return {number|string}
   */

  Timer.prototype.delay = function delay(callback, opt_delay) {
    var _this = this;

    if (!opt_delay) {
      var _ret = (function () {
        // For a delay of zero,  schedule a promise based micro task since
        // they are predictably fast.
        var id = 'p' + _this.taskCount_++;
        _this.resolved_.then(function () {
          if (_this.canceled_[id]) {
            delete _this.canceled_[id];
            return;
          }
          callback();
        });
        return {
          v: id
        };
      })();

      if (typeof _ret === 'object') return _ret.v;
    }
    return this.win.setTimeout(callback, opt_delay);
  };

  /**
   * Cancels the previously scheduled callback.
   * @param {number|string} timeoutId
   */

  Timer.prototype.cancel = function cancel(timeoutId) {
    if (typeof timeoutId == 'string') {
      this.canceled_[timeoutId] = true;
      return;
    }
    this.win.clearTimeout(timeoutId);
  };

  /**
   * Returns a promise that will resolve after the delay. Optionally, the
   * resolved value can be provided as opt_result argument.
   * @param {number=} opt_delay
   * @param {RESULT=} opt_result
   * @return {!Promise<RESULT>}
   * @template RESULT
   */

  Timer.prototype.promise = function promise(opt_delay, opt_result) {
    var _this2 = this;

    var timerKey = null;
    return new Promise(function (resolve, reject) {
      timerKey = _this2.delay(function () {
        timerKey = -1;
        resolve(opt_result);
      }, opt_delay);
      if (timerKey == -1) {
        reject(new Error('Failed to schedule timer.'));
      }
    })['catch'](function (error) {
      // Clear the timer. The most likely reason is "cancel" signal.
      if (timerKey != -1) {
        _this2.cancel(timerKey);
      }
      throw error;
    });
  };

  /**
   * Returns a promise that will fail after the specified delay. Optionally,
   * this method can take opt_racePromise parameter. In this case, the
   * resulting promise will either fail when the specified delay expires or
   * will resolve based on the opt_racePromise, whichever happens first.
   * @param {number} delay
   * @param {!Promise<RESULT>|undefined} opt_racePromise
   * @param {string=} opt_message
   * @return {!Promise<RESULT>}
   * @template RESULT
   */

  Timer.prototype.timeoutPromise = function timeoutPromise(delay, opt_racePromise, opt_message) {
    var _this3 = this;

    var timerKey = null;
    var delayPromise = new Promise(function (_resolve, reject) {
      timerKey = _this3.delay(function () {
        timerKey = -1;
        reject(_asserts.userError(opt_message || 'timeout'));
      }, delay);
      if (timerKey == -1) {
        reject(new Error('Failed to schedule timer.'));
      }
    })['catch'](function (error) {
      // Clear the timer. The most likely reason is "cancel" signal.
      if (timerKey != -1) {
        _this3.cancel(timerKey);
      }
      throw error;
    });
    if (!opt_racePromise) {
      return delayPromise;
    }
    return Promise.race([delayPromise, opt_racePromise]);
  };

  return Timer;
})();

exports.Timer = Timer;
var timer = new Timer(window);
exports.timer = timer;

},{"./asserts":16,"./polyfills":45}],70:[function(require,module,exports){
exports.__esModule = true;
exports.isArray = isArray;
exports.isObject = isObject;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @const */
var toString_ = Object.prototype.toString;

/**
 * Returns the ECMA [[Class]] of a value
 * @param {*} value
 * @return {string}
 */
function toString(value) {
  return toString_.call(value);
}

/**
 * Determines if value is actually an Array.
 * @param {*} value
 * @return {boolean}
 */

function isArray(value) {
  return toString(value) === '[object Array]';
}

/**
 * Determines if value is actually an Object.
 * @param {*} value
 * @return {boolean}
 */

function isObject(value) {
  return toString(value) === '[object Object]';
}

},{}],71:[function(require,module,exports){
exports.__esModule = true;
exports.urlReplacementsFor = urlReplacementsFor;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _accessService = require('./access-service');

var _asserts = require('./asserts');

var _cid = require('./cid');

var _documentInfo = require('./document-info');

var _mode = require('./mode');

var _service = require('./service');

var _eventHelper = require('./event-helper');

var _log = require('./log');

var _url = require('./url');

var _viewer = require('./viewer');

var _viewport = require('./viewport');

var _vsync = require('./vsync');

var _userNotification = require('./user-notification');

var _activity = require('./activity');

/** @private {string} */
var TAG_ = 'UrlReplacements';

/**
 * This class replaces substitution variables with their values.
 * Document new values in ../spec/amp-var-substitutions.md
 */

var UrlReplacements = (function () {
  /** @param {!Window} win */

  function UrlReplacements(win) {
    var _this = this;

    babelHelpers.classCallCheck(this, UrlReplacements);

    /** @private @const {!Window} */
    this.win_ = win;

    /** @private {!RegExp|undefined} */
    this.replacementExpr_ = undefined;

    /** @private @const {!Object<string, function(*):*>} */
    this.replacements_ = this.win_.Object.create(null);

    /** @private @const {function():!Promise<?AccessService>} */
    this.getAccessService_ = _accessService.accessServiceForOrNull.bind(null);

    // Returns a random value for cache busters.
    this.set_('RANDOM', function () {
      return Math.random();
    });

    // Returns the canonical URL for this AMP document.
    this.set_('CANONICAL_URL', function () {
      return _documentInfo.documentInfoFor(_this.win_).canonicalUrl;
    });

    // Returns the host of the canonical URL for this AMP document.
    this.set_('CANONICAL_HOST', function () {
      var url = _url.parseUrl(_documentInfo.documentInfoFor(_this.win_).canonicalUrl);
      return url && url.hostname;
    });

    // Returns the path of the canonical URL for this AMP document.
    this.set_('CANONICAL_PATH', function () {
      var url = _url.parseUrl(_documentInfo.documentInfoFor(_this.win_).canonicalUrl);
      return url && url.pathname;
    });

    // Returns the referrer URL.
    this.set_('DOCUMENT_REFERRER', function () {
      return _viewer.viewerFor(_this.win_).getReferrerUrl();
    });

    // Returns the title of this AMP document.
    this.set_('TITLE', function () {
      return _this.win_.document.title;
    });

    // Returns the URL for this AMP document.
    this.set_('AMPDOC_URL', function () {
      return _url.removeFragment(_this.win_.location.href);
    });

    // Returns the host of the URL for this AMP document.
    this.set_('AMPDOC_HOST', function () {
      var url = _url.parseUrl(_this.win_.location.href);
      return url && url.hostname;
    });

    // Returns the Source URL for this AMP document.
    this.set_('SOURCE_URL', function () {
      return _url.removeFragment(_url.getSourceUrl(_this.win_.location.href));
    });

    // Returns the host of the Source URL for this AMP document.
    this.set_('SOURCE_HOST', function () {
      return _url.parseUrl(_url.getSourceUrl(_this.win_.location.href)).hostname;
    });

    // Returns a random string that will be the constant for the duration of
    // single page view. It should have sufficient entropy to be unique for
    // all the page views a single user is making at a time.
    this.set_('PAGE_VIEW_ID', function () {
      return _documentInfo.documentInfoFor(_this.win_).pageViewId;
    });

    this.set_('QUERY_PARAM', function (param) {
      var defaultValue = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

      _asserts.assert(param, 'The first argument to QUERY_PARAM, the query string ' +
      /*OK*/'param is required');
      var url = _url.parseUrl(_this.win_.location.href);
      var params = _url.parseQueryString(url.search);

      return typeof params[param] !== 'undefined' ? params[param] : defaultValue;
    });

    this.set_('CLIENT_ID', function (scope, opt_userNotificationId) {
      _asserts.assert(scope, 'The first argument to CLIENT_ID, the fallback c' +
      /*OK*/'ookie name, is required');
      var consent = Promise.resolve();

      // If no `opt_userNotificationId` argument is provided then
      // assume consent is given by default.
      if (opt_userNotificationId) {
        consent = _userNotification.userNotificationManagerFor(_this.win_).then(function (service) {
          return service.get(opt_userNotificationId);
        });
      }
      return _cid.cidFor(win).then(function (cid) {
        return cid.get({
          scope: scope,
          createCookieIfNotPresent: true
        }, consent);
      });
    });

    // Returns the number of milliseconds since 1 Jan 1970 00:00:00 UTC.
    this.set_('TIMESTAMP', function () {
      return new Date().getTime();
    });

    // Returns the user's time-zone offset from UTC, in minutes.
    this.set_('TIMEZONE', function () {
      return new Date().getTimezoneOffset();
    });

    // Returns a promise resolving to viewport.getScrollTop.
    this.set_('SCROLL_TOP', function () {
      return _vsync.vsyncFor(_this.win_).measurePromise(function () {
        return _viewport.viewportFor(_this.win_).getScrollTop();
      });
    });

    // Returns a promise resolving to viewport.getScrollLeft.
    this.set_('SCROLL_LEFT', function () {
      return _vsync.vsyncFor(_this.win_).measurePromise(function () {
        return _viewport.viewportFor(_this.win_).getScrollLeft();
      });
    });

    // Returns a promise resolving to viewport.getScrollHeight.
    this.set_('SCROLL_HEIGHT', function () {
      return _vsync.vsyncFor(_this.win_).measurePromise(function () {
        return _viewport.viewportFor(_this.win_).getScrollHeight();
      });
    });

    // Returns a promise resolving to viewport.getScrollWidth.
    this.set_('SCROLL_WIDTH', function () {
      return _vsync.vsyncFor(_this.win_).measurePromise(function () {
        return _viewport.viewportFor(_this.win_).getScrollWidth();
      });
    });

    // Returns screen.width.
    this.set_('SCREEN_WIDTH', function () {
      return _this.win_.screen.width;
    });

    // Returns screen.height.
    this.set_('SCREEN_HEIGHT', function () {
      return _this.win_.screen.height;
    });

    // Returns screen.availHeight.
    this.set_('AVAILABLE_SCREEN_HEIGHT', function () {
      return _this.win_.screen.availHeight;
    });

    // Returns screen.availWidth.
    this.set_('AVAILABLE_SCREEN_WIDTH', function () {
      return _this.win_.screen.availWidth;
    });

    // Returns screen.ColorDepth.
    this.set_('SCREEN_COLOR_DEPTH', function () {
      return _this.win_.screen.colorDepth;
    });

    // Returns document characterset.
    this.set_('DOCUMENT_CHARSET', function () {
      var doc = _this.win_.document;
      return doc.characterSet || doc.charset;
    });

    // Returns the browser language.
    this.set_('BROWSER_LANGUAGE', function () {
      var nav = _this.win_.navigator;
      return (nav.language || nav.userLanguage || nav.browserLanguage || '').toLowerCase();
    });

    // Returns the time it took to load the whole page. (excludes amp-* elements
    // that are not rendered by the system yet.)
    this.set_('PAGE_LOAD_TIME', function () {
      return _this.getTimingData_('navigationStart', 'loadEventStart');
    });

    // Returns the time it took to perform DNS lookup for the domain.
    this.set_('DOMAIN_LOOKUP_TIME', function () {
      return _this.getTimingData_('domainLookupStart', 'domainLookupEnd');
    });

    // Returns the time it took to connet to the server.
    this.set_('TCP_CONNECT_TIME', function () {
      return _this.getTimingData_('connectStart', 'connectEnd');
    });

    // Returns the time it took for server to start sending a response to the
    // request.
    this.set_('SERVER_RESPONSE_TIME', function () {
      return _this.getTimingData_('requestStart', 'responseStart');
    });

    // Returns the time it took to download the page.
    this.set_('PAGE_DOWNLOAD_TIME', function () {
      return _this.getTimingData_('responseStart', 'responseEnd');
    });

    // Returns the time it took for redirects to complete.
    this.set_('REDIRECT_TIME', function () {
      return _this.getTimingData_('navigationStart', 'fetchStart');
    });

    // Returns the time it took for DOM to become interactive.
    this.set_('DOM_INTERACTIVE_TIME', function () {
      return _this.getTimingData_('navigationStart', 'domInteractive');
    });

    // Returns the time it took for content to load.
    this.set_('CONTENT_LOAD_TIME', function () {
      return _this.getTimingData_('navigationStart', 'domContentLoadedEventStart');
    });

    // Access: Reader ID.
    this.set_('ACCESS_READER_ID', function () {
      return _this.getAccessValue_(function (accessService) {
        return accessService.getAccessReaderId();
      }, 'ACCESS_READER_ID');
    });

    // Access: data from the authorization response.
    this.set_('AUTHDATA', function (field) {
      _asserts.assert(field, 'The first argument to AUTHDATA, the field, is required');
      return _this.getAccessValue_(function (accessService) {
        return accessService.whenFirstAuthorized().then(function () {
          return accessService.getAuthdataField(field);
        });
      }, 'AUTHDATA');
    });

    // Returns an identifier for the viewer.
    this.set_('VIEWER', function () {
      return _viewer.viewerFor(_this.win_).getViewerOrigin();
    });

    // Returns the total engaged time since the content became viewable.
    this.set_('TOTAL_ENGAGED_TIME', function () {
      return _activity.activityFor(_this.win_).then(function (activity) {
        return activity.getTotalEngagedTime();
      });
    });
  }

  /**
   * @param {!Window} window
   * @return {!UrlReplacements}
   */

  /**
   * Resolves the value via access service. If access service is not configured,
   * the resulting value is `null`.
   * @param {function(!AccessService):*} getter
   * @param {string} expr
   * @return {*|null}
   */

  UrlReplacements.prototype.getAccessValue_ = function getAccessValue_(getter, expr) {
    var _this2 = this;

    return this.getAccessService_(this.win_).then(function (accessService) {
      if (!accessService) {
        // Access service is not installed.
        _this2.reportDev_('Access service is not installed to access ' + expr);
        return null;
      }
      return getter(accessService);
    });
  };

  /**
   * Returns navigation timing information based on the start and end events.
   * The data for the timing events is retrieved from performance.timing API.
   * @param {string} startEvent
   * @param {string} endEvent
   * @return {!Promise<string|undefined>}
   * @private
   */

  UrlReplacements.prototype.getTimingData_ = function getTimingData_(startEvent, endEvent) {
    var timingInfo = this.win_['performance'] && this.win_['performance']['timing'];
    if (!timingInfo || timingInfo['navigationStart'] == 0) {
      // Navigation timing API is not supported.
      return Promise.resolve();
    }

    var metric = timingInfo[endEvent] - timingInfo[startEvent];
    if (isNaN(metric) || metric == Infinity) {
      // The metric is not supported.
      return Promise.resolve();
    } else if (metric < 0) {
      // Metric is not yet available. Retry after a delay.
      return _eventHelper.loadPromise(this.win_).then(function () {
        metric = timingInfo[endEvent] - timingInfo[startEvent];
        return isNaN(metric) || metric == Infinity || metric < 0 ? undefined : String(metric);
      });
    } else {
      return Promise.resolve(String(metric));
    }
  };

  /**
   * Sets the value resolver for the variable with the specified name. The
   * value resolver may optionally take an extra parameter.
   * @param {string} varName
   * @param {function(*):*} resolver
   * @return {!UrlReplacements}
   * @private
   */

  UrlReplacements.prototype.set_ = function set_(varName, resolver) {
    _asserts.assert(varName.indexOf('RETURN') == -1);
    this.replacements_[varName] = resolver;
    this.replacementExpr_ = undefined;
    return this;
  };

  /**
   * Expands the provided URL by replacing all known variables with their
   * resolved values. Optional `opt_bindings` can be used to add new variables
   * or override existing ones.
   * @param {string} url
   * @param {!Object<string, *>=} opt_bindings
   * @return {!Promise<string>}
   */

  UrlReplacements.prototype.expand = function expand(url, opt_bindings) {
    var _this3 = this;

    var expr = this.getExpr_(opt_bindings);
    var replacementPromise = undefined;
    var encodeValue = function (val) {
      if (val == null) {
        val = '';
      }
      return encodeURIComponent(val);
    };
    url = url.replace(expr, function (match, name, opt_strargs) {
      var args = [];
      if (typeof opt_strargs == 'string') {
        args = opt_strargs.split(',');
      }
      var binding = opt_bindings && name in opt_bindings ? opt_bindings[name] : _this3.getReplacement_(name);
      var val = typeof binding == 'function' ? binding.apply(null, args) : binding;
      // In case the produced value is a promise, we don't actually
      // replace anything here, but do it again when the promise resolves.
      if (val && val.then) {
        var _ret = (function () {
          var p = val.then(function (v) {
            url = url.replace(match, encodeValue(v));
          }, function (err) {
            _log.log.error(TAG_, 'Failed to expand: ' + name, err);
          });
          if (replacementPromise) {
            replacementPromise = replacementPromise.then(function () {
              return p;
            });
          } else {
            replacementPromise = p;
          }
          return {
            v: match
          };
        })();

        if (typeof _ret === 'object') return _ret.v;
      }
      return encodeValue(val);
    });

    if (replacementPromise) {
      replacementPromise = replacementPromise.then(function () {
        return url;
      });
    }

    return replacementPromise || Promise.resolve(url);
  };

  /**
   * @param {string} name
   * @return {function(*):*}
   */

  UrlReplacements.prototype.getReplacement_ = function getReplacement_(name) {
    return this.replacements_[name];
  };

  /**
   * @param {!Object<string, *>=} opt_bindings
   * @return {!RegExp}
   * @private
   */

  UrlReplacements.prototype.getExpr_ = function getExpr_(opt_bindings) {
    var _this4 = this;

    var additionalKeys = opt_bindings ? Object.keys(opt_bindings) : null;
    if (additionalKeys && additionalKeys.length > 0) {
      var _ret2 = (function () {
        var allKeys = Object.keys(_this4.replacements_);
        additionalKeys.forEach(function (key) {
          if (allKeys[key] === undefined) {
            allKeys.push(key);
          }
        });
        return {
          v: _this4.buildExpr_(allKeys)
        };
      })();

      if (typeof _ret2 === 'object') return _ret2.v;
    }
    if (!this.replacementExpr_) {
      this.replacementExpr_ = this.buildExpr_(Object.keys(this.replacements_));
    }
    return this.replacementExpr_;
  };

  /**
   * @param {!Array<string>} keys
   * @return {!RegExp}
   * @private
   */

  UrlReplacements.prototype.buildExpr_ = function buildExpr_(keys) {
    // The keys must be sorted to ensure that the longest keys are considered
    // first. This avoids a problem where a RANDOM conflicts with RANDOM_ONE.
    keys.sort(function (s1, s2) {
      return s2.length - s1.length;
    });
    var all = keys.join('|');
    // Match the given replacement patterns, as well as optionally
    // arguments to the replacement behind it in parantheses.
    // Example string that match
    // FOO_BAR
    // FOO_BAR(arg1)
    // FOO_BAR(arg1,arg2)
    return new RegExp('\\$?(' + all + ')(?:\\(([0-9a-zA-Z-_.,]+)\\))?', 'g');
  };

  /**
   * @param {string} message
   * @private
   */

  UrlReplacements.prototype.reportDev_ = function reportDev_(message) {
    if (_mode.getMode().development || _mode.getMode().localDev) {
      console. /* OK */error(message);
    }
  };

  return UrlReplacements;
})();

function urlReplacementsFor(window) {
  return _service.getService(window, 'url-replace', function () {
    return new UrlReplacements(window);
  });
}

;

},{"./access-service":11,"./activity":12,"./asserts":16,"./cid":18,"./document-info":22,"./event-helper":28,"./log":39,"./mode":40,"./service":53,"./url":72,"./user-notification":73,"./viewer":75,"./viewport":76,"./vsync":77}],72:[function(require,module,exports){
exports.__esModule = true;
exports.parseUrl = parseUrl;
exports.addParamToUrl = addParamToUrl;
exports.addParamsToUrl = addParamsToUrl;
exports.assertHttpsUrl = assertHttpsUrl;
exports.assertAbsoluteHttpOrHttpsUrl = assertAbsoluteHttpOrHttpsUrl;
exports.parseQueryString = parseQueryString;
exports.getOrigin = getOrigin;
exports.removeFragment = removeFragment;
exports.isProxyOrigin = isProxyOrigin;
exports.getSourceUrl = getSourceUrl;
exports.getSourceOrigin = getSourceOrigin;
exports.resolveRelativeUrl = resolveRelativeUrl;
exports.resolveRelativeUrlFallback_ = resolveRelativeUrlFallback_;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _asserts = require('./asserts');

var _string = require('./string');

// Cached a-tag to avoid memory allocation during URL parsing.
var a = document.createElement('a');

// We cached all parsed URLs. As of now there are no use cases
// of AMP docs that would ever parse an actual large number of URLs,
// but we often parse the same one over and over again.
var cache = Object.create(null);

/**
 * Returns a Location-like object for the given URL. If it is relative,
 * the URL gets resolved.
 * Consider the returned object immutable. This is enforced during
 * testing by freezing the object.
 * @param {string} url
 * @return {!Location}
 */

function parseUrl(url) {
  var fromCache = cache[url];
  if (fromCache) {
    return fromCache;
  }
  a.href = url;
  var info = {
    href: a.href,
    protocol: a.protocol,
    host: a.host,
    hostname: a.hostname,
    port: a.port == '0' ? '' : a.port,
    pathname: a.pathname,
    search: a.search,
    hash: a.hash
  };
  // For data URI a.origin is equal to the string 'null' which is not useful.
  // We instead return the actual origin which is the full URL.
  info.origin = a.origin && a.origin != 'null' ? a.origin : getOrigin(info);
  _asserts.assert(info.origin, 'Origin must exist');
  // Freeze during testing to avoid accidental mutation.
  cache[url] = window.AMP_TEST && Object.freeze ? Object.freeze(info) : info;
  return info;
}

/**
 * Appends a query string field and value to a url. `key` and `value`
 * will be ran through `encodeURIComponent` before appending.
 * @param {string} url
 * @param {string} key
 * @param {string} value
 * @return {string}
 */

function addParamToUrl(url, key, value) {
  // TODO(erwinm, #1376) improve perf possibly by just doing a string
  // scan instead of having to create an element for the parsing.
  var urlObj = parseUrl(url);
  var field = encodeURIComponent(key) + '=' + encodeURIComponent(value);
  var search = urlObj.search ? urlObj.search + '&' + field : '?' + field;
  return urlObj.origin + urlObj.pathname + search + urlObj.hash;
}

/**
 * Appends query string fields and values to a url. The `params` objects'
 * `key`s and `value`s will be transformed into query string keys/values.
 * @param {string} url
 * @param {!Object<string, string>} params
 * @return {string}
 */

function addParamsToUrl(url, params) {
  return Object.keys(params).reduce(function (url, key) {
    return addParamToUrl(url, key, params[key]);
  }, url);
}

/**
 * Asserts that a given url is HTTPS or protocol relative.
 * Provides an exception for localhost.
 * @param {string} urlString
 * @param {!Element} elementContext Element where the url was found.
 * @return {string}
 */

function assertHttpsUrl(urlString, elementContext) {
  var url = parseUrl(urlString);
  _asserts.assert(url.protocol == 'https:' || /^(\/\/)/.test(urlString) || url.hostname == 'localhost' || _string.endsWith(url.hostname, '.localhost'), '%s source must start with ' + '"https://" or "//" or be relative and served from ' + 'either https or from localhost. Invalid value: %s', elementContext, urlString);
  return urlString;
}

/**
 * Asserts that a given url is an absolute HTTP or HTTPS URL.
 * @param {string} urlString
 * @return {string}
 */

function assertAbsoluteHttpOrHttpsUrl(urlString) {
  _asserts.assert(/^(http\:|https\:)/i.test(urlString), 'URL must start with "http://" or "https://". Invalid value: %s', urlString);
  return parseUrl(urlString).href;
}

/**
 * Parses the query string of an URL. This method returns a simple key/value
 * map. If there are duplicate keys the latest value is returned.
 * @param {string} queryString
 * @return {!Object<string, string>}
 */

function parseQueryString(queryString) {
  var params = Object.create(null);
  if (!queryString) {
    return params;
  }
  if (queryString.indexOf('?') == 0 || queryString.indexOf('#') == 0) {
    queryString = queryString.substr(1);
  }
  var pairs = queryString.split('&');
  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];
    var eqIndex = pair.indexOf('=');
    var _name = undefined;
    var value = undefined;
    if (eqIndex != -1) {
      _name = decodeURIComponent(pair.substring(0, eqIndex)).trim();
      value = decodeURIComponent(pair.substring(eqIndex + 1)).trim();
    } else {
      _name = decodeURIComponent(pair).trim();
      value = '';
    }
    if (_name) {
      params[_name] = value;
    }
  }
  return params;
}

/**
 * Don't use this directly, only exported for testing. The value
 * is available via the origin property of the object returned by
 * parseUrl.
 * @param {string|!Location} url
 * @return {string}
 * @visibleForTesting
 */

function getOrigin(url) {
  if (typeof url == 'string') {
    url = parseUrl(url);
  }
  if (url.protocol == 'data:' || !url.host) {
    return url.href;
  }
  return url.protocol + '//' + url.host;
}

/**
 * Returns the URL without fragment. If URL doesn't contain fragment, the same
 * string is returned.
 * @param {string} url
 * @return {string}
 */

function removeFragment(url) {
  var index = url.indexOf('#');
  if (index == -1) {
    return url;
  }
  return url.substring(0, index);
}

/**
 * Returns whether the URL has the origin of a proxy.
 * @param {string|!Location} url URL of an AMP document.
 * @return {boolean}
 */

function isProxyOrigin(url) {
  if (typeof url == 'string') {
    url = parseUrl(url);
  }
  var path = url.pathname.split('/');
  var prefix = path[1];
  // List of well known proxy hosts. New proxies must be added here.
  return url.origin == 'https://cdn.ampproject.org' || url.origin.indexOf('http://localhost:') == 0 && (prefix == 'c' || prefix == 'v');
}

/**
 * Returns the source URL of an AMP document for documents served
 * on a proxy origin or directly.
 * @param {string|!Location} url URL of an AMP document.
 * @return {string}
 */

function getSourceUrl(url) {
  if (typeof url == 'string') {
    url = parseUrl(url);
  }

  // Not a proxy URL - return the URL itself.
  if (!isProxyOrigin(url)) {
    return url.href;
  }

  // A proxy URL.
  // Example path that is being matched here.
  // https://cdn.ampproject.org/c/s/www.origin.com/foo/
  // The /s/ is optional and signals a secure origin.
  var path = url.pathname.split('/');
  var prefix = path[1];
  _asserts.assert(prefix == 'c' || prefix == 'v', 'Unknown path prefix in url %s', url.href);
  var domainOrHttpsSignal = path[2];
  var origin = domainOrHttpsSignal == 's' ? 'https://' + decodeURIComponent(path[3]) : 'http://' + decodeURIComponent(domainOrHttpsSignal);
  // Sanity test that what we found looks like a domain.
  _asserts.assert(origin.indexOf('.') > 0, 'Expected a . in origin %s', origin);
  path.splice(1, domainOrHttpsSignal == 's' ? 3 : 2);
  return origin + path.join('/') + (url.search || '') + (url.hash || '');
}

/**
 * Returns the source origin of an AMP document for documents served
 * on a proxy origin or directly.
 * @param {string|!Location} url URL of an AMP document.
 * @return {string} The source origin of the URL.
 */

function getSourceOrigin(url) {
  return getOrigin(getSourceUrl(url));
}

/**
 * Returns absolute URL resolved based on the relative URL and the base.
 * @param {string} relativeUrlString
 * @param {string|!Location} baseUrl
 * @return {string}
 */

function resolveRelativeUrl(relativeUrlString, baseUrl) {
  if (typeof baseUrl == 'string') {
    baseUrl = parseUrl(baseUrl);
  }
  if (typeof URL == 'function') {
    return new URL(relativeUrlString, baseUrl.href).toString();
  }
  return resolveRelativeUrlFallback_(relativeUrlString, baseUrl);
}

/**
 * Fallback for URL resolver when URL class is not available.
 * @param {string} relativeUrlString
 * @param {string|!Location} baseUrl
 * @return {string}
 * @private Visible for testing.
 */

function resolveRelativeUrlFallback_(relativeUrlString, baseUrl) {
  if (typeof baseUrl == 'string') {
    baseUrl = parseUrl(baseUrl);
  }
  relativeUrlString = relativeUrlString.replace(/\\/g, '/');
  var relativeUrl = parseUrl(relativeUrlString);

  // Absolute URL.
  if (relativeUrlString.toLowerCase().indexOf(relativeUrl.protocol) == 0) {
    return relativeUrl.href;
  }

  // Protocol-relative URL.
  if (relativeUrlString.indexOf('//') == 0) {
    return baseUrl.protocol + relativeUrlString;
  }

  // Absolute path.
  if (relativeUrlString.indexOf('/') == 0) {
    return baseUrl.origin + relativeUrlString;
  }

  // Relative path.
  var basePath = baseUrl.pathname.split('/');
  return baseUrl.origin + (basePath.length > 1 ? basePath.slice(0, basePath.length - 1).join('/') : '') + '/' + relativeUrlString;
}

},{"./asserts":16,"./string":65}],73:[function(require,module,exports){
exports.__esModule = true;
exports.userNotificationManagerFor = userNotificationManagerFor;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Factory for amp-user-notification
 */

var _customElement = require('./custom-element');

/**
 * @param {!Window} window
 * @return {!Promise<!UserNotificationManager>}
 */

function userNotificationManagerFor(window) {
  return _customElement.getElementService(window, 'userNotificationManager', 'amp-user-notification');
}

},{"./custom-element":20}],74:[function(require,module,exports){
exports.__esModule = true;
exports.maybeValidate = maybeValidate;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _mode = require('./mode');

/**
 * Triggers validation for the current document if there is a script in the
 * page that has a "development" attribute.
 *
 * @param {!Window} win Destination window for the new element.
 */

function maybeValidate(win) {
  if (!_mode.getMode().development) {
    return;
  }
  var filename = win.location.href;
  if (filename.indexOf('about:') == 0) {
    // Should only happen in tests.
    return;
  }
  var s = document.createElement('script');
  // TODO(@cramforce): Introduce a switch to locally built version for local
  // development.
  s.src = 'https://cdn.ampproject.org/v0/validator.js';
  s.onload = function () {
    win.document.head.removeChild(s);
    amp.validator.validateUrlAndLog(filename, win.document);
  };
  win.document.head.appendChild(s);
}

},{"./mode":40}],75:[function(require,module,exports){
exports.__esModule = true;
exports.viewerFor = viewerFor;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _service = require('./service');

/**
 * @param {!Window} window
 * @return {!Viewer}
 */

function viewerFor(window) {
  return _service.getService(window, 'viewer');
}

;

},{"./service":53}],76:[function(require,module,exports){
exports.__esModule = true;
exports.viewportFor = viewportFor;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _service = require('./service');

/**
 * @param {!Window} window
 * @return {!Viewport}
 */

function viewportFor(window) {
  return _service.getService(window, 'viewport');
}

;

},{"./service":53}],77:[function(require,module,exports){
exports.__esModule = true;
exports.vsyncFor = vsyncFor;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _service = require('./service');

/**
 * @param {!Window} window
 * @return {!Vsync}
 */

function vsyncFor(window) {
  return _service.getService(window, 'vsync');
}

;

},{"./service":53}],78:[function(require,module,exports){
(function (global){
(function (global) {
  var babelHelpers = global.babelHelpers = {};

  babelHelpers.inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  babelHelpers.createClass = (function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();

  babelHelpers.slice = Array.prototype.slice;
  babelHelpers.bind = Function.prototype.bind;

  babelHelpers.interopRequireWildcard = function (obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj["default"] = obj;
      return newObj;
    }
  };

  babelHelpers.get = function get(_x, _x2, _x3) {
    var _again = true;

    _function: while (_again) {
      var object = _x,
          property = _x2,
          receiver = _x3;
      _again = false;

      if (object === null) object = Function.prototype;
      var desc = Object.getOwnPropertyDescriptor(object, property);

      if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);

        if (parent === null) {
          return undefined;
        } else {
          _x = parent;
          _x2 = property;
          _x3 = receiver;
          _again = true;
          desc = parent = undefined;
          continue _function;
        }
      } else if ("value" in desc) {
        return desc.value;
      } else {
        var getter = desc.get;

        if (getter === undefined) {
          return undefined;
        }

        return getter.call(receiver);
      }
    }
  };

  babelHelpers.classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
})(typeof global === "undefined" ? self : global);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}]},{},[13])

})()}catch(e){setTimeout(function(){var s=document.body.style;s.opacity=1;s.visibility="visible";s.animation="none";s.WebkitAnimation="none;"},1000);throw e};
//# sourceMappingURL=amp.js.map