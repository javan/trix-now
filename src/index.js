import "trix"
import LZString from "lz-string"

addEventListener("trix-initialize", event => {
  const value = location.pathname.replace(/^\/p\//, "")
  const html = value ? LZString.decompressFromEncodedURIComponent(value) : ""
  event.target.editor.loadHTML(html)
})

addEventListener("trix-change", event => {
  const html = event.target.value
  const value = html ? LZString.compressToEncodedURIComponent(html) : ""
  const pathname = value ? `/p/${value}` : "/"
  history.replaceState(null, null, pathname)
})
