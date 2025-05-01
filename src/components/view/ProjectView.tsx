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
    <article className="border-accent flex flex-col gap-4 border-b-4 pb-4">
      <header className="flex flex-col gap-6">
        <h2>{title}</h2>
        <div className="flex flex-wrap gap-4">
          {tech.map((name) => {
            return (
              <div
                key={name}
                className="bg-info text-info-content rounded-lg px-4 py-2"
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
            className="border-accent w-48 border-2 md:hidden"
          />
          <img
            src={thumbnails.desktop}
            className="border-accent hidden w-[40rem] border-2 md:block"
          />
        </div>
      </div>
    </article>
  )
}
