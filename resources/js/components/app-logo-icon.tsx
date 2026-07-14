import type { ImgHTMLAttributes } from 'react';

export default function AppLogoIcon(props: ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <img
            {...props}
            src="/logo-jasuindo-color.png"
            alt="Jasuindo Logo"
            className={`object-contain ${props.className || ''}`}
        />
    );
}
