CoffeeScriptSample
==================

自作サンプル集

##RpgComment

RPGのセリフみたいに時間差ででるやつ

```slim
html
  head
    script[src="jquery-2.x.x.js"]
    script[src="rpg_comment.js"]

  body
    div
      p#new_comment

    javascript:
      RpgComment.init("こんにちは！", {selector: "#new_comment", interval: 300})
```

##AudioTool

audioタグのmuted,volume一括操作

```slim
html
  head
    script[src="jquery-2.x.x.js"]
    script[src="audio_tool.js"]

  body
    div
      audio[autoplay]
        source[src="sample.mp3" type="audio/mp3"]
        source[src="sample.ogg" type="audio/ogg"]
        source[src="sample.m4a" type="audio/aac"]

    javascript:
      AudioTool.set({muted: false, volume: 0.5})
```
