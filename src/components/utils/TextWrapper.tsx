import { useMemo } from "react";

export const TextWrapper = ({
    className,
    children,
    size
}: {
    className?: string,
    children: JSX.Element | string,
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}) => {
    const calcSize = (size: "xs" | "sm" | "md" | "lg" | "xl") => {
        switch (size) {
            case 'sm': return 'text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl';
            case 'md': return 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl';
            case 'lg': return 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl';
            case 'xl': return 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl';
            default: return 'text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl';
        }
    }
    const responsiveTypography = useMemo(() => calcSize(size), [size]);
    return (
        <span className={`${responsiveTypography} ${className}`}>
            {children}
        </span>
    )

}