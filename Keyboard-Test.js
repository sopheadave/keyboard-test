  $(document).ready(function() {
    $(document).on("keydown", function(event) {
      event.preventDefault();
      var key;
      if (event.key === "/") key = "slash";
      else if (event.key === " ") key = "Space";
      else if (event.key === ".") key = "punt";
      else if (event.key === ",") key = "comma";
      else if (event.key === ";") key = "semicolon";
      else if (event.key === "'") key = "quote";
      else if (event.key === "\\") key = "backslash";
      else if (event.key === "]") key = "bracketright";
      else if (event.key === "[") key = "bracketleft";
      else if (event.key === "=") key = "equal";
      else if (event.key === "-") key = "minus";
      else if (event.key === "`") key = "backquote";
      else if (event.key === "?") key = "question";
      else if (event.key === ">") key = "flexright";
      else if (event.key === "<") key = "flexleft";
      else if (event.key === '"') key = "doublequote";
      else if (event.key === ":") key = "colon";
      else if (event.key === "|") key = "stick";
      else if (event.key === "}") key = "CurlyBracketR";
      else if (event.key === "{") key = "CurlyBracketL";
      else if (event.key === "~") key = "tilde";
      else if (event.key === "_") key = "Underscore";
      else if (event.key === "+") key = "plus";
      else if (event.key === "!") key = "exclamation";
      else if (event.key === "@") key = "at";
      else if (event.key === "#") key = "hashtag";
      else if (event.key === "$") key = "dollarsign";
      else if (event.key === "%") key = "percent";
      else if (event.key === "^") key = "circumflex";
      else if (event.key === "&") key = "and";
      else if (event.key === "*") key = "asterisk";
      else if (event.key === "(") key = "roundbracketleft";
      else if (event.key === ")") key = "roundbracketright";
      else key = event.key;
      console.log(key);
      $("." + key).removeClass("active");
      $("." + key).addClass("press");
      if (key === "CapsLock") {
        $("." + key).removeClass("press");
        $("." + key).addClass("active");
      }
      if (key === "quote") {
        $("." + key).removeClass("press");
        $("." + key).addClass("active");
      }
      if (key === "doublequote") {
        $("." + key).removeClass("press");
        $("." + key).addClass("active");
      }
      if (key === "backquote") {
        $("." + key).removeClass("press");
        $("." + key).addClass("active");
      }
    });
    $(document).on("keyup press", function(event) {
      event.preventDefault();
      var key;
      if (event.key === "/") key = "slash";
      else if (event.key === " ") key = "Space";
      else if (event.key === ".") key = "punt";
      else if (event.key === ",") key = "comma";
      else if (event.key === ";") key = "semicolon";
      else if (event.key === "'") key = "quote";
      else if (event.key === "\\") key = "backslash";
      else if (event.key === "]") key = "bracketright";
      else if (event.key === "[") key = "bracketleft";
      else if (event.key === "=") key = "equal";
      else if (event.key === "-") key = "minus";
      else if (event.key === "`") key = "backquote";
      else if (event.key === "?") key = "question";
      else if (event.key === ">") key = "flexright";
      else if (event.key === "<") key = "flexleft";
      else if (event.key === '"') key = "doublequote";
      else if (event.key === ":") key = "colon";
      else if (event.key === "|") key = "stick";
      else if (event.key === "}") key = "CurlyBracketR";
      else if (event.key === "{") key = "CurlyBracketL";
      else if (event.key === "~") key = "tilde";
      else if (event.key === "_") key = "Underscore";
      else if (event.key === "+") key = "plus";
      else if (event.key === "!") key = "exclamation";
      else if (event.key === "@") key = "at";
      else if (event.key === "#") key = "hashtag";
      else if (event.key === "$") key = "dollarsign";
      else if (event.key === "%") key = "percent";
      else if (event.key === "^") key = "circumflex";
      else if (event.key === "&") key = "and";
      else if (event.key === "*") key = "asterisk";
      else if (event.key === "(") key = "roundbracketleft";
      else if (event.key === ")") key = "roundbracketright";
      else key = event.key;
      $(".lastkey").empty().append(key);
      $("." + key).removeClass("press");
      $("." + key).addClass("active");
    });
    document.addEventListener('contextmenu', event => event.preventDefault());
  });
  var OSName;
  if (navigator.appVersion.indexOf("Win") != -1) {
    OSName = "Windows";
  } else if (navigator.appVersion.indexOf("Mac") != -1) {
    OSName = "MacOS";
  } else if (navigator.appVersion.indexOf("X11") != -1) {
    OSName = "UNIX";
  } else if (navigator.appVersion.indexOf("Linux") != -1) {
    OSName = "Linux";
  }
  var skey = "win";
  if (OSName === "Windows") skey = "win";
  if (OSName === "MacOS") skey = "cmd";
  document.getElementById("startkeyl").innerHTML = skey;
  document.getElementById("startkeyr").innerHTML = skey;
  var akey = "alt";
  if (OSName === "Windows") akey = "alt";
  if (OSName === "MacOS") akey = "opt";
  document.getElementById("altkeyl").innerHTML = akey;
  document.getElementById("altkeyr").innerHTML = akey;
  var ekey = "enter";
  if (OSName === "Windows") ekey = "enter";
  if (OSName === "MacOS") ekey = "return";
  document.getElementById("enterkey").innerHTML = ekey;
  var bkey = "back";
  if (OSName === "Windows") bkey = "back";
  if (OSName === "MacOS") bkey = "delete";
  document.getElementById("backkey").innerHTML = bkey;