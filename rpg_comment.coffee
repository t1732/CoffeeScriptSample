class @RpgComment
  charIdx: 0

  @init: (value, options) ->
    new RpgComment(value, options)

  constructor: (@value, options) ->
    {@selector, @interval} = $.extend {selector: "#rpg_comment", interval: 100}, options || {}
    @intervalObj = setInterval @loop, @interval

  loop: =>
    $(@selector).append @value.charAt(@charIdx)
    @charIdx++
    if @charIdx > @value.length
      clearInterval @intervalObj
