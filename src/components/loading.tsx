import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingProps {
    size?: number;
    color?: string;
    className?: string;
    children?: React.ReactNode;
    fullScreen?: boolean;
}

const Loading: React.FC<LoadingProps> = ({
    size = 32,
    color = 'text-teal-600',
    className = '',
    children,
    fullScreen = false,
}) => {
    const spinner = (
        <Loader2
            className={`animate-spin ${color} ${className}`}
            style={{ width: size, height: size }}
        />
    );

    if (fullScreen) {
        return (
            <div className="flex flex-col items-center justify-center h-full w-full min-h-[200px]">
                {spinner}
                {children && <div className="mt-2 text-gray-500">{children}</div>}
            </div>
        );
    }

    return (
        <span className="inline-flex items-center gap-2">
            {spinner}
            {children && <span className="text-gray-500">{children}</span>}
        </span>
    );
};

//how to use:

// With text
//<Loading>Loading data...</Loading>

// Custom size/color
//<Loading size={48} color="text-blue-500">Please wait</Loading>

// Full screen
//<Loading fullScreen>Loading your chat...</Loading>

export default Loading; 