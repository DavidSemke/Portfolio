import { 
    ChevronLeftIcon, 
    ChevronRightIcon 
} from "@heroicons/react/24/solid"
import { useState } from "react"
import RoundedCarouselCard, { CardData } from "./RoundedCarouselCard"

type RoundedCarouselProps = {
  cardData: CardData[]
  faceCardWidthRem?: number
  minCardWidthRem?: number
}

export default function RoundedCarousel({ 
    cardData, faceCardWidthRem=6, minCardWidthRem=1 
}: RoundedCarouselProps) {
    // State faceIndex refers to the index of the face card
    const [faceIndex, setFaceIndex] = useState<number>(0)

    const cardCount = cardData.length

    // Count the num of cards positioned to the left/right of the 
    // face card
    let halfCount = Math.floor(cardCount/2)

    // Do not count the card directly behind the face card when card 
    // count is even
    if (cardCount % 2 === 0) {
        halfCount -= 1
    }

    // There is a limit on how small a card can be.
    // Ensure that the current half count does not violate the limit.
    halfCount = Math.min(halfCount, faceCardWidthRem - minCardWidthRem)
    // If half count is odd, include center card in count
    const quarterCount = Math.ceil(halfCount / 2)
    const quarterXOffsetPercentages = []
    let curve = 1

    // The first quarter of cards left/right of the face card receive 
    // increasing offsets.
    // The offset is the added width of all cards between the current
    // card and the face card, including the face card's width, 
    // where each width (except the face card's) is multiplied by its
    // corresponding curve value, which has range 0-1.
    // These curve values are stored in quarterXOffsetPercentages,
    // where the curve value at index 0 corresponds to the first
    // card in either quarter (left/right of face card).
    for (let i=0; i<quarterCount; i++) {
        quarterXOffsetPercentages.push(curve)
        curve = (quarterCount-i-1)/quarterCount
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
    let quarterXOffsetPercentageIndex = 0
    // Store x offsets for first quarter left/right of face card.
    const quarterXOffsets = []
    let quarterXOffsetIndex = 0
    // Define card z-index.
    // Face card has z-index === cardCount.
    // Cards immediately left/right have z-index === cardCount - 1...
    let zIndex = cardCount - 1

    // No more cards are rendered if
    // 1 - The left and right indexes equal each other.
    // 2 - The left and right indexes cross each other.
    // 3 - The card width becomes smaller than the minimum.
    while (
        leftOfFaceIndex !== rightOfFaceIndex
        && circularIndexIncrement(
            leftOfFaceIndex, cardCount
        ) !== rightOfFaceIndex
        && widthRem >= minCardWidthRem
    ) {
        // For the first quarter left/right of the face card, apply 
        // increasing offsets.
        if (quarterXOffsetPercentageIndex < quarterXOffsetPercentages.length) {
            xOffsetRem += (
                (widthRem + 1) *
                quarterXOffsetPercentages[quarterXOffsetPercentageIndex]
            )
            quarterXOffsets.push(xOffsetRem)
            quarterXOffsetIndex += 1
            quarterXOffsetPercentageIndex += 1
        }
        // The second quarter has been reached. Use decreasing offsets 
        // (i.e. prior offsets used in first quarter).
        else {
            quarterXOffsetIndex -= 1
            // If quarter count is odd, the second quarter of the half 
            // will have an even count.
            // Therefore, skip the card halved by both quarters.
            if (quarterXOffsets.length % 2 === 1) {
                quarterXOffsets.pop()
                quarterXOffsetIndex -= 1
            }

            xOffsetRem = quarterXOffsets[quarterXOffsetIndex]
        }
        
        const showTitle = faceCardWidthRem - widthRem < 2
        const leftCard = cardData[leftOfFaceIndex]
        leftOfFaceCards.push(
            <RoundedCarouselCard
                key={leftCard.title}
                title={leftCard.title}
                image={leftCard.image}
                width={widthRem * 16}
                offset={{ x: -(xOffsetRem * 16 * 2), y: -(yOffsetRem * 16)}}
                zIndex={zIndex}
                showTitle={showTitle}
            />
        )
        const rightCard = cardData[rightOfFaceIndex]
        rightOfFaceCards.push(
            <RoundedCarouselCard
                key={rightCard.title}
                title={rightCard.title}
                image={rightCard.image}
                width={widthRem * 16}
                offset={{ x: xOffsetRem * 16 * 2, y: -(yOffsetRem * 16)}}
                zIndex={zIndex}
                showTitle={showTitle}
            />
        )

        leftOfFaceIndex = circularIndexDecrement(leftOfFaceIndex, cardCount)
        rightOfFaceIndex = circularIndexIncrement(rightOfFaceIndex, cardCount)
        widthRem -= 1
        yOffsetRem += yOffsetIncrement

        if (yOffsetIncrement > 1) {
            yOffsetIncrement -= 1
        }
        else {
            yOffsetIncrement /= 2
        }
        
        zIndex -= 1
    }

    const faceCard = cardData[faceIndex]

    const cards = [
        ...leftOfFaceCards.reverse(),
        <RoundedCarouselCard
            key={faceCard.title}
            title={faceCard.title}
            image={faceCard.image}
            width={faceCardWidthRem * 16}
            offset={{ x: 0, y: 0}}
            zIndex={cardCount}
            showTitle={true}
        />,
        ...rightOfFaceCards
    ]
    
  return (
    <div className="flex flex-col gap-4 w-full">
        <div className="grow h-60 relative">
            {cards}
            <div 
                style={{
                    bottom: `${yOffsetRem * 16}px`
                }}
                className="w-4 h-4 absolute left-0 right-0 m-auto rounded-full bg-secondary"
            /> 
        </div>
        <div className="flex gap-12 justify-center">
            <button 
                type='button' 
                className="btn btn-secondary" 
                aria-label="Shift left"
                onClick={() => setFaceIndex(
                    faceIndex => circularIndexDecrement(faceIndex, cardCount)
                )}
            >
                <ChevronLeftIcon 
                    className="w-8 h-8"
                />
            </button>
            <button 
                type='button' 
                className="btn btn-secondary" 
                aria-label="Shift right"
                onClick={() => setFaceIndex(
                    faceIndex => circularIndexIncrement(faceIndex, cardCount)
                )}
            >
                <ChevronRightIcon 
                    className="w-8 h-8"
                />
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