import clsx from "clsx"

export function attrsStyleMerge(
  attrs: Record<string, Record<string, unknown>>,
  styles: Record<string, string>,
) {
  const mergedStyles: Record<string, string> = {}

  for (const el of Object.keys(styles)) {
    const elClasses = attrs[el]?.className
    mergedStyles[el] = styles[el]

    if (typeof elClasses === "string") {
      mergedStyles[el] = clsx(mergedStyles[el], elClasses)
    }
  }

  return mergedStyles
}
