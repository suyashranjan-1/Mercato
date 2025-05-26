"use client";

interface AnimatedCounterProps {
    end: number;
    duration?: number;
    start?: number;
}

export function AnimatedCounter({ end, duration = 2, start = 0 }: AnimatedCounterProps) {
    const [count, setCount] = useState(start);
    const mounted = useRef(false);

    useEffect(() => {
        if (mounted.current) return;
        mounted.current = true;

        const step = (end - start) / (duration * 60);
        const interval = 1000 / 60;
        let current = start;

        const timer = setInterval(() => {
            current += step;
            if (current >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, interval);

        return () => {
            clearInterval(timer);
        };
    }, [end, duration, start]);

    return <span>{count.toLocaleString()}</span>;
}
