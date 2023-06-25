import Image from 'next/image'
import Zoom from 'react-medium-image-zoom'

export function ZoomImage({ src, alt, ...props }) {
    return <Zoom><Image src={src} alt={alt} {...props}/></Zoom>
}
