import { twMerge } from "tailwind-merge"

export function mergeAttrStylesWithDefaults(
  attrs: Record<string, Record<string, unknown>>,
  defaultStyles: Record<string, string>,
) {
  const mergedStyles: Record<string, string> = {}

  for (const el of Object.keys(defaultStyles)) {
    const elClasses = attrs[el]?.className
    mergedStyles[el] = defaultStyles[el]

    if (typeof elClasses === "string") {
      mergedStyles[el] = twMerge(mergedStyles[el], elClasses)
    }
  }

  return mergedStyles
}
