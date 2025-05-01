import { attrsStyleMerge } from "../utils"
import clsx from "clsx"

type InputProps = {
  name: string
  label?: string
  asTextArea?: boolean
  errors?: string[]
  attrs?: {
    root?: Record<string, unknown>
    label?: Record<string, unknown>
    input?: Record<string, unknown>
  }
}

export default function Input({
  name,
  label,
  asTextArea = false,
  errors = [],
  attrs = {},
}: InputProps) {
  let inputType = null

  if (attrs.input && typeof attrs.input.type === "string") {
    inputType = attrs.input?.type
  }

  const hide = inputType !== null && inputType === "hidden"
  const asRow = inputType !== null && ["checkbox", "radio"].includes(inputType)
  const ElementType = asTextArea ? "textarea" : "input"
  const defaultStyles = {
    root: clsx("flex", {
      "items-center gap-4": asRow,
      "flex-col gap-2": !asRow,
      hidden: hide,
    }),
    label: "font-semibold",
    input: clsx("w-full", {
      "input input-bordered input-accent": !asTextArea,
      "textarea textarea-bordered textarea-accent": asTextArea,
    }),
  }
  const styles = attrsStyleMerge(attrs, defaultStyles)
  label =
    label ??
    name
      .split("-")
      .map((word) => {
        return word[0].toUpperCase() + word.slice(1)
      })
      .join(" ")

  return (
    <>
      <div {...attrs.root} className={styles.root}>
        {label && (
          <label {...attrs.label} htmlFor={name} className={styles.label}>
            {label}
          </label>
        )}
        <ElementType
          required={true}
          {...attrs.input}
          id={name}
          name={name}
          className={styles.input}
        />
      </div>
      {errors.length > 0 && (
        <ul className="text-error list-inside list-disc">
          {errors.map((error) => {
            return <li key={error}>{error}</li>
          })}
        </ul>
      )}
    </>
  )
}
