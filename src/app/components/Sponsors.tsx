import Image from "next/image"

export default function Sponsors() {
    return (
        <div className="container">
            <div className="sponsors">
                <div className="">
                    <Image src="/images/sponsor_01.webp" alt="sponsor" width={160} height={80} />
                </div>
                <div className="">
                    <Image src="/images/sponsor_02.webp" alt="sponsor" width={160} height={80} />
                </div>
                <div className="">
                    <Image src="/images/sponsor_03.webp" alt="sponsor" width={160} height={80} />
                </div>
                <div className="">
                    <Image src="/images/sponsor_04.webp" alt="sponsor" width={160} height={80} />
                </div>
                <div className="">
                    <Image src="/images/sponsor_05.webp" alt="sponsor" width={160} height={80} />
                </div>
            </div>
        </div>
    )
}