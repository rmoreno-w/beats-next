import { Container } from '../Container';
import { Chip } from '../Chip';

interface resultsProps {
    attributes: object;
    routingData: object;
}

export function ResultBox({ attributes, routingData }: resultsProps) {
    // console.log(routingData);

    return (
        <Container
            containerType='section'
            containerClasses='my-20 mx-32 p-12 bg-beatsBlack-700 rounded-10px relative overflow-hidden'
        >
            <div
                className='skeleton-item
            before:absolute before:bg-beatsGreen-700 before:h-12 before:w-4 before:block before:top-0 before:left-0 before:
            flex flex-col w-full'
            >
                <h3 className='font-Montserrat text-2xl text-left px-12 mb-4'>{attributes.name}</h3>

                <div className='skeleton-infos flex-1 space-y-4 px-12'>
                    <p className='text-base font-SourceSans'>
                        <span className='font-bold'>Type: </span>
                        {attributes.name}
                    </p>
                    <p className='text-base font-SourceSans'>
                        <span className='font-bold'>Aliases: </span>
                        {attributes.eye_color}
                    </p>
                    {/* <p className='skeleton-attribute2 bg-beatsWhite-700 h-4 w-3/5' /> */}
                    <div className='flex  gap-2'>
                        <Chip attributeName='Availability' iconName='info' isChipSelectable={false} />
                        <Chip attributeName='Non-Repudiation' iconName='info' isChipSelectable={false} />
                    </div>
                </div>
            </div>
        </Container>
    );
}