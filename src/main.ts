import { CopyElement } from './copy-element'
import { copyToClipboard, createTooltipElement } from './copy-clipboard'

window.customElements.define('copy-clipboard', CopyElement)

const copy = (text: any) => {
  copyToClipboard(text)
  const btn = document.getElementsByTagName('copy-clipboard')[0] as HTMLElement
  const tooltip = createTooltipElement(btn.getAttribute('tooltip-position') ?? 'top', btn.getAttribute('tooltip-text') ?? 'copied!')
  btn.appendChild(tooltip)
  setTimeout(() => {
    tooltip.remove()
  }, 1000)
}

declare global {
  interface Window {
    copyToClipboard: (text: any) => void
  }
}

declare module '@geduramc/copy-clipboard-element' {
  export function copy (text: string): void
}

window.copyToClipboard = copy

export {
  copy
}
