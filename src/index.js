Node.prototype.charLimit = function (limit) {
  if (this.nodeName !== "TEXTAREA" && this.nodeName !== "INPUT") {
    var invalidElement = document.createElement("span");
    invalidElement.classList.add("invalid-element");
    invalidElement.innerText = "Only input element is allowed";
    this.after(invalidElement);

    return 0;
  }

  if (this.type !== "textarea" && this.type !== "text") {
    var invalidElementType = document.createElement("span");
    invalidElementType.classList.add("invalid-element-type");
    invalidElementType.innerText =
      "Only text and textarea input type is allowed";
    this.after(invalidElementType);

    return 0;
  }

  var hint = document.createElement("span");
  hint.classList.add("char-limit-hint");
  hint.innerText = limit + " characters remaining";

  this.after(hint);
  this.maxLength = limit;

  function handleMouseUp(event) {
    var text_remaining = limit - event.target.value.length;
    hint.innerHTML = text_remaining + " characters remaining";
  }

  this.addEventListener("keyup", handleMouseUp, true);
};

var NodeCharElement = null;
if (typeof exports != "undefined") {
  exports.NodeCharElement = document.querySelector.bind(document);
} else {
  NodeCharElement = document.querySelector.bind(document);
}
