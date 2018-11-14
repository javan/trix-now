import "trix"
import { compressToEncodedURIComponent, decompressFromEncodedURIComponent } from "lz-string"

addEventListener("trix-initialize", event => {
  const value = location.pathname.replace(/^\/p\//, "")
  const html = value ? decompressFromEncodedURIComponent(value) : ""
  event.target.editor.loadHTML(html)
})

addEventListener("trix-change", event => {
  const html = event.target.value
  const value = html ? compressToEncodedURIComponent(html) : ""
  const pathname = value ? `/p/${value}` : "/"
  history.replaceState(null, null, pathname)
})
