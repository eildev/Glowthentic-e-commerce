import cn from "../../utils/cn";
import { useState, useEffect, useRef } from "react";

const Banner = ({ children, image, className }) => {
    const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
    const imgRef = useRef(null);

    useEffect(() => {
        const handleImageLoad = () => {
            if (imgRef.current) {
                setImageDimensions({
                    width: imgRef.current.naturalWidth,
                    height: imgRef.current.naturalHeight,
                });
            }
        };

        if (imgRef.current && imgRef.current.complete) {
            handleImageLoad();
        } else {
            imgRef.current?.addEventListener('load', handleImageLoad);
            return () => imgRef.current?.removeEventListener('load', handleImageLoad);
        }
    }, []);

    return (
        <div
            className={cn('bg-local bg-no-repeat bg-cover bg-center', className)}
            style={{
                width: `${imageDimensions.width}px`,
                height: `${imageDimensions.height}px`,
                backgroundImage: `url(${image})`,
            }}
        >
            <img
                src={image}
                alt="banner"
                className=""
                ref={imgRef}
                style={{ display: 'none' }}
            />
            {children}
        </div>
    );
};

export default Banner;
