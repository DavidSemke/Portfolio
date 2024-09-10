import { FormEventHandler, useState } from "react"
import { Input } from "../form/Input"

export default function ContactPage() {
  const [formState, setFormState] = useState<
    "PENDING" | "SUCCESS" | "ERROR" | null
  >(null)

  const onSubmit: FormEventHandler = async (event: React.FormEvent) => {
    event.preventDefault()
    setFormState("PENDING")

    const form = event.target as HTMLFormElement
    const formData = new FormData(form)
    // Max email submissions accepted per month by web3forms is 250 on free tier.
    // If spammed, submissions will be ignored once the 250 limit is met for no cost.
    formData.append("access_key", "73606cd6-0a86-4b3a-8a23-0cf8e220fc00")

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })

    const data = await response.json()

    if (data.success) {
      setFormState("SUCCESS")
      form.reset()
    } else {
      setFormState("ERROR")
    }
  }

  let formStateFeedback = null

  if (formState === "SUCCESS") {
    formStateFeedback = (
      <p className="text-center text-success">
        Thank you for reaching out! I will get back to you shortly.
      </p>
    )
  } else if (formState === "ERROR") {
    formStateFeedback = (
      <p className="text-center text-error">
        Something went wrong! Please consider contacting me using my email:
        david@semke.ca.
      </p>
    )
  } else if (formState === "PENDING") {
    formStateFeedback = (
      <span className="loading loading-infinity loading-lg self-center" />
    )
  }

  return (
    <main className="flex flex-col items-center gap-8">
      <h1>Contact Me</h1>
      <p>
        To get in touch, please fill out the form below or contact me at
        <span className="text-lg font-semibold"> david@semke.ca</span>.
      </p>
      <form onSubmit={onSubmit} className="flex w-full flex-col gap-6">
        <div className="flex gap-8">
          <Input
            name="name"
            attrs={{
              root: {
                className: "grow",
              },
            }}
          />
          <Input
            name="email"
            attrs={{
              root: {
                className: "grow",
              },
              input: {
                type: "email",
              },
            }}
          />
        </div>
        <Input
          name="message"
          asTextArea={true}
          attrs={{
            input: {
              rows: 8,
            },
          }}
        />
        <Input
          name="botcheck"
          attrs={{
            root: {
              className: "hidden",
            },
            input: {
              type: "checkbox",
              required: false,
            },
          }}
        />
        <button type="submit" className="btn btn-primary self-center px-12">
          Submit
        </button>
        {formStateFeedback}
      </form>
    </main>
  )
}
