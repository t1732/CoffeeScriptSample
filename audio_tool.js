// Generated by CoffeeScript 1.3.3
(function() {

  this.AudioTool = (function() {

    AudioTool.set = function(options) {
      var audio, muted, volume, _ref;
      _ref = $.extend({
        muted: null,
        volume: null,
        debug: false
      }, options || {}), muted = _ref.muted, volume = _ref.volume, this.debug = _ref.debug;
      audio = new AudioTool;
      audio.volume(volume);
      audio.mute(muted);
      if (this.debug) {
        return audio.setControls();
      }
    };

    function AudioTool() {
      this.audios = $('audio');
    }

    AudioTool.prototype.setControls = function() {
      return this.audios.each(function() {
        return $(this).attr('controls', "");
      });
    };

    AudioTool.prototype.play = function() {
      return this.audios.each(function() {
        return $(this).trigger('play');
      });
    };

    AudioTool.prototype.pause = function() {
      return this.audios.each(function() {
        return $(this).trigger('pause');
      });
    };

    AudioTool.prototype.mute = function(flag) {
      if (flag !== null) {
        return this.audios.each(function() {
          return $(this).prop('muted', flag);
        });
      }
    };

    AudioTool.prototype.volume = function(vol) {
      if (vol !== null) {
        return this.audios.each(function() {
          return $(this).prop('volume', vol);
        });
      }
    };

    return AudioTool;

  })();

}).call(this);
