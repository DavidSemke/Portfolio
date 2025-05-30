import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
import { useState } from "react"
import RoundedCarouselCard, { CardData } from "./RoundedCarouselCard"

type RoundedCarouselProps = {
  cardData: CardData[]
  faceCardWidthRem?: number
  minCardWidthRem?: number
}

export default function RoundedCarousel({
  cardData,
  faceCardWidthRem = 5,
  minCardWidthRem = 1,
}: RoundedCarouselProps) {
  // State faceIndex refers to the index of the face card
  const [faceIndex, setFaceIndex] = useState<number>(0)

  if (
    !(Number.isInteger(faceCardWidthRem) && Number.isInteger(minCardWidthRem))
  ) {
    throw new Error("Card widths must be integers.")
  }

  if (minCardWidthRem < 1) {
    throw new Error("Min card width cannot be less than 1.")
  }

  if (faceCardWidthRem < minCardWidthRem) {
    throw new Error("Face card width cannot be less than min card width.")
  }

  const cardCount = cardData.length

  if (cardCount === 0) {
    return null
  }

  // The half count is the num of cards that can be positioned to the
  // left/right of the face card, ignoring the rear card when the card
  // count is even. It is the min of:
  // 1 - The max possible half count.
  // 2 - The number of unique widths available for cards in the half.
  const halfCount = Math.min(
    Math.ceil(cardCount / 2 - 1),
    faceCardWidthRem - minCardWidthRem,
  )
  // If half count is odd, include half center card in quarter count.
  const quarterCount = Math.ceil(halfCount / 2)
  const quarterXOffsetCurves = [1]

  // The first quarter of cards left/right of the face card receive
  // increasing offsets.
  // The offset is the added width of all cards between the current
  // card and the face card (including the face card), where each width
  // (except the face card's) is multiplied by its corresponding curve
  // value of range 0-1.
  // These curve values are stored in quarterXOffsetCurves,
  // where the curve value at index 0 corresponds to the first
  // card in either quarter (left/right of face card).
  for (let i = 1; i < quarterCount; i++) {
    quarterXOffsetCurves.push((quarterCount - i) / quarterCount)
  }

  const leftOfFaceCards = []
  const rightOfFaceCards = []

  let leftOfFaceIndex = circularIndexDecrement(faceIndex, cardCount)
  let rightOfFaceIndex = circularIndexIncrement(faceIndex, cardCount)

  let widthRem = faceCardWidthRem - 1
  // Store x offsets for first quarter left/right of face card.
  const quarterXOffsetRems: number[] = []
  let yOffsetRem = 1
  let yOffsetIncrement = 4
  let maxXOffsetRem = 0
  let quarterCardWidthRem = 0
  let zIndex = cardCount - 1

  for (
    let halfIndex = 0;
    halfIndex < halfCount;
    halfIndex++,
      widthRem--,
      yOffsetRem += yOffsetIncrement,
      yOffsetIncrement =
        yOffsetIncrement > 1 ? yOffsetIncrement - 1 : yOffsetIncrement / 2,
      zIndex--,
      leftOfFaceIndex = circularIndexDecrement(leftOfFaceIndex, cardCount),
      rightOfFaceIndex = circularIndexIncrement(rightOfFaceIndex, cardCount)
  ) {
    // For the first quarter left/right of the face card, apply
    // increasing offsets.
    if (halfIndex < quarterXOffsetCurves.length) {
      maxXOffsetRem =
        (widthRem + 1) * quarterXOffsetCurves[halfIndex] +
        (quarterXOffsetRems.length &&
          quarterXOffsetRems[quarterXOffsetRems.length - 1])
      quarterXOffsetRems.push(maxXOffsetRem)
      quarterCardWidthRem = widthRem
    }
    // For the second quarter left/right of the face card, apply
    // decreasing offsets.
    // halfIndex === quarterCount when the second quarter
    // of each half is started.
    // In this case, the last X offset should be discarded only if
    // the half count is odd.
    // This is because an odd half has a center card whose offset
    // is not copied by another card in its half.
    else if (halfIndex !== quarterCount || halfCount % 2 === 1) {
      quarterXOffsetRems.pop()
    }

    const showTitle = faceCardWidthRem - widthRem < 2
    const widthPx = widthRem * 16
    const xOffsetPx = quarterXOffsetRems[quarterXOffsetRems.length - 1] * 16 * 2
    const yOffsetPx = yOffsetRem * 16
    const leftCard = cardData[leftOfFaceIndex]
    leftOfFaceCards.push(
      <RoundedCarouselCard
        key={leftCard.title}
        title={leftCard.title}
        image={leftCard.image}
        width={widthPx}
        offset={{ x: -xOffsetPx, y: -yOffsetPx }}
        zIndex={zIndex}
        showTitle={showTitle}
      />,
    )
    const rightCard = cardData[rightOfFaceIndex]
    rightOfFaceCards.push(
      <RoundedCarouselCard
        key={rightCard.title}
        title={rightCard.title}
        image={rightCard.image}
        width={widthPx}
        offset={{ x: xOffsetPx, y: -yOffsetPx }}
        zIndex={zIndex}
        showTitle={showTitle}
      />,
    )
  }

  const faceCard = cardData[faceIndex]

  const cards = [
    ...leftOfFaceCards.reverse(),
    <RoundedCarouselCard
      key={faceCard.title}
      title={faceCard.title}
      image={faceCard.image}
      width={faceCardWidthRem * 16}
      offset={{ x: 0, y: 0 }}
      zIndex={cardCount}
      showTitle={true}
    />,
    ...rightOfFaceCards,
  ]

  const lastYOffsetRem = Math.max(yOffsetRem, faceCardWidthRem)
  const carouselIsFull = halfCount * 2 + 2 !== cardCount || widthRem < 1

  if (!carouselIsFull) {
    const card = cardData[rightOfFaceIndex]

    cards.push(
      <RoundedCarouselCard
        key={card.title}
        title={card.title}
        image={card.image}
        width={widthRem * 16}
        offset={{ x: 0, y: -lastYOffsetRem * 16 }}
        zIndex={zIndex}
        showTitle={false}
      />,
    )
  }

  const lastWidthRem = Math.max(widthRem, minCardWidthRem)

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <div
        style={{
          minWidth: `${Math.max(
            (maxXOffsetRem + quarterCardWidthRem / 2 + 1) * 2,
            faceCardWidthRem + 1,
          )}rem`,
        }}
        className="relative h-60"
      >
        {cards}
        {carouselIsFull && (
          <div
            style={{
              width: `${lastWidthRem}rem`,
              height: `${lastWidthRem}rem`,
              bottom: `${lastYOffsetRem}rem`,
            }}
            className="bg-secondary absolute right-0 left-0 m-auto rounded-full"
          />
        )}
      </div>
      <div className="flex justify-center gap-12">
        <button
          type="button"
          className="btn btn-secondary"
          aria-label="Shift left"
          onClick={() =>
            setFaceIndex((faceIndex) =>
              circularIndexDecrement(faceIndex, cardCount),
            )
          }
        >
          <ChevronLeftIcon className="h-8 w-8" />
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          aria-label="Shift right"
          onClick={() =>
            setFaceIndex((faceIndex) =>
              circularIndexIncrement(faceIndex, cardCount),
            )
          }
        >
          <ChevronRightIcon className="h-8 w-8" />
        </button>
      </div>
    </div>
  )
}

function circularIndexDecrement(index: number, arrayLen: number) {
  return (index - 1 + arrayLen) % arrayLen
}

function circularIndexIncrement(index: number, arrayLen: number) {
  return (index + 1) % arrayLen
}
