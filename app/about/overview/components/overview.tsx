import React from 'react'

type ContentProps = {
    content: string[]
}

const OverviewContent = ({ content }: ContentProps) => {
    return (

        <div className="container mx-auto px-4 py-10">
            <header className="mb-8 flex justify-center  ">
                <h1 className='text-3xl md:text-5xl border-b-4 border-[#6bc533] w-fit font-extrabold text-[#10266d] text-center p-4  '>OVERVIEW</h1>
            </header>
            <div className="prose max-w-none space-y-6">
                {content.map((paragraph, index) => (
                    <p key={index} className="text-lg text-[#161515] text-justify ">
                        {paragraph}
                    </p>
                ))}
            </div>
        </div>

    )
}

export default OverviewContent
