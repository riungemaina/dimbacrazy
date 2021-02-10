export function Year() {
  var d = new Date();
  var n = d.getFullYear();
  return n;
}

export function Slugify(text) {
  const from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
  const to = "aaaaaeeeeeiiiiooooouuuunc------";

  const newText = text
    .split("")
    .map((letter, i) =>
      letter.replace(new RegExp(from.charAt(i), "g"), to.charAt(i))
    );

  return newText
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-y-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
}
