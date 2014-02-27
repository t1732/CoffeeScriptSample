CoffeeScriptSample
==================

自作サンプル集

##@RpgComment

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
