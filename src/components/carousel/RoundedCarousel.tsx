import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
import { useState } from "react"
import RoundedCarouselCard, { CardData } from "./RoundedCarouselCard"
import clsx from "clsx"

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
  
  const cardCount = cardData.length

  // The half count is the num of cards that can be positioned to the
  // left/right of the face card, ignoring the rear card when the card 
  // count is even. It is the min of:
  // 1 - The max possible half count.
  // 2 - The number of unique widths available for cards in the half.
  const halfCount = Math.min(
    Math.ceil(cardCount / 2 - 1), 
    faceCardWidthRem - minCardWidthRem
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

  let leftOfFaceIndex = circularIndexDecrement(faceIndex, cardCount)
  let rightOfFaceIndex = circularIndexIncrement(faceIndex, cardCount)
  const leftOfFaceCards = []
  const rightOfFaceCards = []
  // Define card width and offsets in rem.
  let widthRem = faceCardWidthRem - 1
  let xOffsetRem = 0
  let yOffsetRem = 1
  // Define rate at which y offset increases.
  let yOffsetIncrement = 4
  // Store x offsets for first quarter left/right of face card.
  const quarterXOffsets = []
  // Define card z-index.
  // Face card has z-index === cardCount.
  // Cards immediately left/right have z-index of cardCount - 1.
  let zIndex = cardCount - 1
  // halfIndex === num of while loop iterations
  let halfIndex = 0

  // No more cards are rendered if
  // 1 - The left and right indexes equal each other.
  // 2 - The left and right indexes cross each other.
  // 3 - The card width becomes smaller than the minimum.
  while (
    leftOfFaceIndex !== rightOfFaceIndex &&
    circularIndexIncrement(leftOfFaceIndex, cardCount) !== rightOfFaceIndex &&
    widthRem >= minCardWidthRem
  ) {
    // For the first quarter left/right of the face card, apply
    // increasing offsets.
    if (halfIndex < quarterXOffsetCurves.length) {
      xOffsetRem += (
        (widthRem + 1) *
        quarterXOffsetCurves[halfIndex]
      )
      quarterXOffsets.push(xOffsetRem)
    }
    // The second quarter has been reached. Use decreasing offsets
    // (i.e. prior offsets used in first quarter).
    else {
      // halfIndex === quarterCount when the second quarter
      // of each half is started.
      // In this case, the last X offset should be discarded only if
      // the half count is odd.
      // This is because an odd half has a center card whose offset 
      // is not copied by another card in its half.
      if (halfIndex !== quarterCount || halfCount % 2 === 1) {
        quarterXOffsets.pop()
      }

      xOffsetRem = quarterXOffsets[quarterXOffsets.length - 1]
    }

    const showTitle = faceCardWidthRem - widthRem < 2
    const widthPx = widthRem * 16
    const xOffsetPx = xOffsetRem * 16 * 2
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

    leftOfFaceIndex = circularIndexDecrement(leftOfFaceIndex, cardCount)
    rightOfFaceIndex = circularIndexIncrement(rightOfFaceIndex, cardCount)
    widthRem -= 1
    yOffsetRem += yOffsetIncrement

    if (yOffsetIncrement > 1) {
      yOffsetIncrement -= 1
    } else {
      yOffsetIncrement /= 2
    }

    zIndex -= 1
    halfIndex += 1
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

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <div className={clsx(
        "relative h-60 w-full",
        { "min-w-72": faceCardWidthRem > 4 }
      )}>
        {cards}
        <div
          style={{
            bottom: `${yOffsetRem * 16}px`,
          }}
          className="absolute left-0 right-0 m-auto h-4 w-4 rounded-full bg-secondary"
        />
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
