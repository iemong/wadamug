'use client'
import Image from 'next/image'
import * as Slider from '@radix-ui/react-slider';
import {useRef, useState} from "react";

export default function Home() {
    // 0.2 ~ 0.4
    const [scale, setScale] = useState(0.2)
    const targetRef = useRef<HTMLDivElement | null>(null)

    // const handleDownload = async () => {
    //     const dataUrl = await toJpeg(targetRef.current!, { quality: 1 })
    //     download(dataUrl, 'wadasan.jpg')
    // }

    return (
        <main className="min-h-screen max-w-[1200px] mx-auto">
            <div className={'p-6 flex gap-4 items-center justify-center'}>
                <div>
                    <div className={'mb-2 text-xs text-center'}>ジョッキのサイズ調整</div>
                    <Slider.Root className={'relative flex items-center select-none touch-none w-[200px] h-[20px]'} min={0.2} max={0.4} step={0.01} onValueChange={(values) => {
                        setScale(values[0])
                    }}>
                        <Slider.Track className={'bg-gray-700 relative grow rounded-full h-[3px]'}>
                            <Slider.Range className={'absolute bg-blue-500 rounded-full h-full'} />
                        </Slider.Track>
                        <Slider.Thumb className={'block w-[20px] h-[20px] bg-white rounded-[10px]'} />
                    </Slider.Root>
                </div>
                {/*<button className={'px-4 py-2 rounded bg-blue-500 text-white text-sm'} onClick={handleDownload}>*/}
                {/*    ダウンロードする*/}
                {/*</button>*/}
            </div>
            <div className={'relative'} ref={targetRef}>
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
