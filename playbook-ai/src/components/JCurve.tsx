import { useState } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
}

const JCurve = () => {
    const [mode, setMode] = useState<'linear' | 'exponential'>('linear');

    return (
        <div className="w-full max-w-2xl mx-auto p-8 bg-white border border-gray-200 rounded-sm shadow-sm">
            <div className="flex justify-between items-center mb-8">
                <h3 className="font-serif text-xl">Growth Trajectory</h3>
                <div className="flex gap-4">
                    <button
                        onClick={() => setMode('linear')}
                        className={cn(
                            "text-xs uppercase tracking-widest pb-1 border-b-2 transition-colors",
                            mode === 'linear' ? "border-charcoal text-charcoal" : "border-transparent text-gray-400 hover:text-charcoal"
                        )}
                    >
                        Linear Mindset
                    </button>
                    <button
                        onClick={() => setMode('exponential')}
                        className={cn(
                            "text-xs uppercase tracking-widest pb-1 border-b-2 transition-colors",
                            mode === 'exponential' ? "border-gold text-gold" : "border-transparent text-gray-400 hover:text-gold"
                        )}
                    >
                        Exponential Scale
                    </button>
                </div>
            </div>

            <div className="relative h-64 w-full border-l border-b border-gray-200">
                {/* Grid lines */}
                <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 pointer-events-none">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="border-t border-gray-100 w-full h-full" />
                    ))}
                </div>

                {/* Graph Lines */}
                <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                    {/* Linear Line */}
                    <path
                        d="M0,256 L500,100" // Approximate linear slope
                        className={cn(
                            "stroke-2 fill-none transition-all duration-1000 ease-in-out",
                            mode === 'linear' ? "stroke-charcoal opacity-100" : "stroke-gray-200 opacity-20"
                        )}
                        vectorEffect="non-scaling-stroke"
                    />

                    {/* Exponential Curve */}
                    <path
                        d="M0,256 C200,256 300,250 500,0" // Bezier curve for J-shape
                        className={cn(
                            "stroke-2 fill-none transition-all duration-1000 ease-in-out",
                            mode === 'exponential' ? "stroke-gold opacity-100" : "stroke-gray-200 opacity-0"
                        )}
                        vectorEffect="non-scaling-stroke"
                    />
                </svg>

                {/* Labels */}
                <div className="absolute -bottom-6 left-0 text-xs text-gray-400">Time</div>
                <div className="absolute -left-8 bottom-0 -rotate-90 text-xs text-gray-400 origin-bottom-left">Value</div>
            </div>

            <div className="mt-6 text-center">
                <p className={cn(
                    "text-sm transition-all duration-500",
                    mode === 'linear' ? "text-charcoal" : "text-gold"
                )}>
                    {mode === 'linear'
                        ? "Traditional businesses grow 10% YoY."
                        : "Platform businesses compound at scale."}
                </p>
            </div>
        </div>
    );
};

export default JCurve;
