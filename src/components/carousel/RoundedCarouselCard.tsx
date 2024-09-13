export type CardData = {
  title: string
  image: {
    src: string
    alt: string
  }
}

type RoundedCarouselCardProps = CardData & {
  width: number
  offset: { x: number; y: number }
  zIndex: number
  showTitle: boolean
}

export default function RoundedCarouselCard({
  title,
  image,
  width,
  offset,
  zIndex,
  showTitle,
}: RoundedCarouselCardProps) {
  const { x, y } = offset
  const style: Record<string, string | number> = {
    width: `${width}px`,
    zIndex,
  }

  if (x < 0) {
    style.right = `${x * -1}px`
    style.left = "0"
  } else {
    style.left = `${x}px`
    style.right = "0"
  }

  if (y <= 0) {
    style.bottom = `${y * -1}px`
  } else {
    style.top = `${y}px`
  }

  return (
    <div
      style={style}
      className="absolute m-auto flex flex-col items-center gap-2 text-lg"
    >
      <img src={image.src} className="aspect-square w-full" alt={image.alt} />
      {showTitle && <div>{title}</div>}
    </div>
  )
}
