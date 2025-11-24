import { useState, useEffect } from 'react';
import { RotateCw } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
}

const Flywheel = () => {
    const [rpm, setRpm] = useState(0);
    const [isSpinning, setIsSpinning] = useState(false);

    const handleSpin = () => {
        setRpm(prev => Math.min(prev + 100, 10000));
        setIsSpinning(true);
        setTimeout(() => setIsSpinning(false), 500);
    };

    useEffect(() => {
        if (rpm > 0) {
            const interval = setInterval(() => {
                setRpm(prev => Math.max(0, prev - 10));
            }, 100);
            return () => clearInterval(interval);
        }
    }, [rpm]);

    return (
        <div className="w-full max-w-2xl mx-auto p-12 flex flex-col items-center justify-center relative min-h-[400px]">

            {/* Center Hub */}
            <button
                onClick={handleSpin}
                className="z-10 w-32 h-32 rounded-full bg-charcoal text-cream flex flex-col items-center justify-center hover:scale-105 transition-transform active:scale-95 shadow-xl"
            >
                <RotateCw className={cn("mb-2 transition-transform duration-1000", isSpinning && "animate-spin")} />
                <span className="text-xs uppercase tracking-widest font-bold">Spin</span>
                <span className="text-[10px] opacity-70 mt-1">{rpm} RPM</span>
            </button>

            {/* Nodes */}
            <div className={cn(
                "absolute inset-0 transition-transform duration-[2000ms] ease-linear",
                rpm > 0 && "animate-[spin_4s_linear_infinite]"
            )}
                style={{ animationDuration: `${Math.max(0.5, 5000 / (rpm + 1))}s` }}
            >
                {/* Node 1: Better Product */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-200 px-4 py-2 shadow-sm">
                    <span className="font-serif text-sm">Better Product</span>
                </div>

                {/* Node 2: More Traffic */}
                <div className="absolute bottom-10 right-10 bg-white border border-gray-200 px-4 py-2 shadow-sm">
                    <span className="font-serif text-sm">More Traffic</span>
                </div>

                {/* Node 3: Lower Costs */}
                <div className="absolute bottom-10 left-10 bg-white border border-gray-200 px-4 py-2 shadow-sm">
                    <span className="font-serif text-sm">Lower Costs</span>
                </div>

                {/* Connecting Circle (Visual only) */}
                <div className="absolute inset-10 border border-dashed border-gray-300 rounded-full -z-10" />
            </div>

            <div className="absolute bottom-0 text-center text-xs text-gray-400 mt-8">
                Click center to accelerate the flywheel effect.
            </div>
        </div>
    );
};

export default Flywheel;
