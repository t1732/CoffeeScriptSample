# audioのmuted,volumeをまとめて操作するツール
class @AudioTool
  #
  # options
  #   muted: ミュートフラグ (true, false)
  #   volume: 音量 (range [0.000000..1.000000])
  #
  @set: (options) ->
    {muted, volume, @debug} = $.extend {muted: null, volume: null, debug: false}, options || {}
    audio = new AudioTool
    audio.volume(volume)
    audio.mute(muted)
    if @debug
      audio.setControls()

  constructor: ->
    @audios = $('audio')

  setControls: ->
    @audios.each ->
      $(@).attr('controls', "")

  play: ->
    @audios.each ->
      $(@).trigger('play')

  pause: ->
    @audios.each ->
      $(@).trigger('pause')

  mute: (flag) ->
    if flag != null
      @audios.each ->
        $(@).prop('muted', flag)

  volume: (vol) ->
    if vol != null
      @audios.each ->
        $(@).prop('volume', vol)
