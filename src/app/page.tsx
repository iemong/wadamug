'use client'
import Image from 'next/image'
import * as Slider from '@radix-ui/react-slider';
import {useState} from "react";
import {twMerge} from "tailwind-merge";

export default function Home() {
    // 0.2 ~ 0.4
    const [scale, setScale] = useState(0.2)
    return (
        <main className="min-h-screen max-w-[1200px] mx-auto">
            <div className={'p-6 '}>
                <Slider.Root className={'relative flex items-center select-none touch-none w-[200px] h-[20px]'} min={0.2} max={0.4} step={0.01} onValueChange={(values) => {
                    console.log(values)
                    setScale(values[0])
                }}>
                    <Slider.Track className={'bg-gray-700 relative grow rounded-full h-[3px]'}>
                        <Slider.Range className={'absolute bg-blue-500 rounded-full h-full'} />
                    </Slider.Track>
                    <Slider.Thumb className={'block w-[20px] h-[20px] bg-white rounded-[10px]'} />
                </Slider.Root>
            </div>
            <div className={'relative'}>
                <Image
                    src="/wadasan.png"
                    alt="wadasan"
                    width={4032}
                    height={3024}
                />
                <Image
                    src="/jokkisan2.png"
                    alt="jokkisan"
                    width={1368}
                    height={2510}
                    className={'absolute top-[-71%] left-[2%] scale-[0.2] origin-center'}
                    style={{transform: `scale(${scale})`}}
                />
            </div>
        </main>
    )
}
