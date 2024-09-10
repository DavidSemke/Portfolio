type ProjectViewProps = {
  title: string
  tech: string[]
  deployment: string
  thumbnails: Record<string, string>
  description: string
}

export default function ProjectView({
  title,
  tech,
  deployment,
  thumbnails,
  description,
}: ProjectViewProps) {
  return (
    <article className="flex flex-col gap-4 border-b-4 border-accent pb-4">
      <header className="flex flex-col gap-6">
        <h2>{title}</h2>
        <div className="flex flex-wrap gap-4">
          {tech.map((name) => {
            return (
              <div
                key={name}
                className="rounded-lg bg-info px-4 py-2 text-info-content"
              >
                {name}
              </div>
            )
          })}
        </div>
      </header>
      <div className="flex flex-col-reverse gap-4 sm:flex-row md:flex-col-reverse">
        <div className="flex flex-col gap-4">
          <section className="flex flex-col gap-2">
            <h3>Description</h3>
            <p>{description}</p>
          </section>
          <section className="flex flex-col items-start gap-2">
            <h3>Deployed at</h3>
            <a href={deployment} className="link">
              {deployment}
            </a>
          </section>
        </div>
        <div className="mx-auto shrink-0 sm:mx-0">
          <img
            src={thumbnails.mobile}
            className="w-48 border-2 border-accent md:hidden"
          />
          <img
            src={thumbnails.desktop}
            className="hidden w-[40rem] border-2 border-accent md:block"
          />
        </div>
      </div>
    </article>
  )
}
