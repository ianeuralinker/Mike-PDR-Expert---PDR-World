"use client"

import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

interface BeforeAfterSliderProps {
    beforeImage: string;
    afterImage: string;
    alt?: string;
}

export function BeforeAfterSlider({ beforeImage, afterImage, alt = "Comparação Antes e Depois" }: BeforeAfterSliderProps) {
    return (
        <div className="relative w-full overflow-hidden rounded-lg border shadow-sm">
            <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src={beforeImage} alt={`${alt} - Antes`} />}
                itemTwo={<ReactCompareSliderImage src={afterImage} alt={`${alt} - Depois`} />}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div className="absolute bottom-2 left-2 rounded bg-black/50 px-2 py-1 text-xs font-bold text-white backdrop-blur-sm">
                ANTES
            </div>
            <div className="absolute bottom-2 right-2 rounded bg-black/50 px-2 py-1 text-xs font-bold text-white backdrop-blur-sm">
                DEPOIS
            </div>
        </div>
    );
}
