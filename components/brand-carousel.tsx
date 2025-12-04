"use client"

const brands = [
    { name: "BMW", logo: "https://cdn.simpleicons.org/bmw/white" },
    { name: "Mercedes", logo: "/mercedes-logo.png" },
    { name: "Tesla", logo: "https://cdn.simpleicons.org/tesla/white" },
    { name: "Fiat", logo: "https://cdn.simpleicons.org/fiat/white" },
    { name: "Ford", logo: "https://cdn.simpleicons.org/ford/white" },
    { name: "Hyundai", logo: "https://cdn.simpleicons.org/hyundai/white" },
    { name: "Chevrolet", logo: "https://cdn.simpleicons.org/chevrolet/white" },
    { name: "Toyota", logo: "https://cdn.simpleicons.org/toyota/white" },
    { name: "Honda", logo: "https://cdn.simpleicons.org/honda/white" },
    { name: "Volkswagen", logo: "https://cdn.simpleicons.org/volkswagen/white" },
]

export function BrandCarousel() {
    return (
        <div className="w-full bg-black py-10 border-b border-white/10 overflow-hidden">
            <div className="relative flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_li]:mx-12">
                    {brands.map((brand, index) => (
                        <li key={index}>
                            <div className="relative h-16 w-32 opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 flex items-center justify-center">
                                <img
                                    src={brand.logo}
                                    alt={brand.name}
                                    className={`h-full w-full object-contain ${brand.name === 'Mercedes' ? 'brightness-0 invert' : ''}`}
                                />
                            </div>
                        </li>
                    ))}
                </ul>
                <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_li]:mx-12" aria-hidden="true">
                    {brands.map((brand, index) => (
                        <li key={`duplicate-${index}`}>
                            <div className="relative h-16 w-32 opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 flex items-center justify-center">
                                <img
                                    src={brand.logo}
                                    alt={brand.name}
                                    className={`h-full w-full object-contain ${brand.name === 'Mercedes' ? 'brightness-0 invert' : ''}`}
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
