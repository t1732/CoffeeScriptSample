// Generated by CoffeeScript 1.3.3
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  this.RpgComment = (function() {

    RpgComment.prototype.charIdx = 0;

    RpgComment.init = function(value, options) {
      return new RpgComment(value, options);
    };

    function RpgComment(value, options) {
      var _ref;
      this.value = value;
      this.loop = __bind(this.loop, this);

      _ref = $.extend({
        selector: "#rpg_comment",
        interval: 100
      }, options || {}), this.selector = _ref.selector, this.interval = _ref.interval;
      this.intervalObj = setInterval(this.loop, this.interval);
    }

    RpgComment.prototype.loop = function() {
      $(this.selector).append(this.value.charAt(this.charIdx));
      this.charIdx++;
      if (this.charIdx > this.value.length) {
        return clearInterval(this.intervalObj);
      }
    };

    return RpgComment;

  })();

}).call(this);
