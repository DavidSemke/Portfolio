import clsx from "clsx"

export function attrsStyleMerge(
  attrs: Record<string, Record<string, any>>,
  styles: Record<string, string>,
) {
  const els = Object.keys(styles)
  const mergedStyles: Record<string, string> = {}

  for (const el of els) {
    mergedStyles[el] = clsx(styles[el], attrs[el]?.className)
  }

  return mergedStyles
}
