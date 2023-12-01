import Image from "../atoms/Image";

export default function Logo() {

    const path = "logo.jpeg"

    return (
        <div className="logo">
            <Image uri={path} />
        </div>
    )
}