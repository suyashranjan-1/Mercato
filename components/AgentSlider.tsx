'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, TrendingUp, Zap } from 'lucide-react';

export interface Agent {
    id: number;
    name: string;
    description: string;
    icon: React.ReactNode;
    color: string;
    tags: string[];
    rating: string;
    usage: string;
    speed: string;
    path?: string;
    slug: string;
    youtubeUrl: string;
}

interface Category {
    name: string;
    description: string;
    agents: Agent[];
}

interface AgentSliderProps {
    category: Category;
    isVisible?: boolean;
    onTryAgent?: (agent: Agent) => void;
    onViewDetails?: (agent: Agent) => void;
}

const AgentCard = ({
    agent,
    index,
    onTryNow,
    onCardClick
}: {
    agent: Agent;
    index: number;
    onTryNow: (agent: Agent) => void;
    onCardClick: (agent: Agent) => void;
}) => {
    return (
        <div
            className="
                flex-shrink-0
                w-[384px] h-[260px]
                sm:w-[384px] sm:h-[260px]
                md:w-[384px] md:h-[260px]
                min-w-0
                bg-slate-800/70
                backdrop-blur-sm
                rounded-2xl
                border border-slate-700/30
                hover:border-slate-400/30
                transition-shadow duration-300
                group hover:shadow-xl hover:shadow-blue-500/10
                cursor-pointer
                relative text-left
                outline-none focus-visible:ring-2 focus-visible:ring-blue-400
                focus-visible:ring-offset-2 focus-visible:z-20
                flex flex-col
            "
            tabIndex={0}
            role="button"
            aria-label={`View details for ${agent.name}`}
            onClick={() => onCardClick(agent)}
            onKeyDown={e => {
                if (e.key === "Enter" || e.key === " ") onCardClick(agent);
            }}
        >
            <div className="p-5 sm:p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-2">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${agent.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 relative`}>
                        {agent.icon}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-slate-400">
                        <Sparkles className="w-3 h-3" />
                        <span>{agent.rating}</span>
                    </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-200">
                    {agent.name}
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-2 line-clamp-2">
                    {agent.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-2">
                    {agent.tags.map((tag: string, i: number) => (
                        <span key={i} className="px-2 py-1 bg-slate-700/40 text-slate-300 text-xs rounded-lg hover:bg-slate-600/40 transition-colors duration-200">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center space-x-4 text-xs text-slate-400">
                        <span className="flex items-center">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            {agent.usage}
                        </span>
                        <span className="flex items-center">
                            <Zap className="w-3 h-3 mr-1" />
                            {agent.speed}
                        </span>
                    </div>
                    <button
                        onClick={e => {
                            e.stopPropagation();
                            onTryNow(agent);
                        }}
                        className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-400 rounded-lg hover:bg-gradient-to-r hover:from-blue-600/30 hover:to-purple-600/30 transition-all duration-200"
                        tabIndex={0}
                        type="button"
                        aria-label={`Demo ${agent.name}`}
                    >
                        <span className="text-sm font-medium">Demo</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export const AgentSlider = ({
    category,
    isVisible = true,
    onTryAgent,
    onViewDetails
}: AgentSliderProps) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const router = useRouter();

    const handleTryAgent = (agent: Agent) => {
        if (onTryAgent) onTryAgent(agent);
        else if (agent.path) router.push(agent.path + "/demo");
        else alert(`Starting ${agent.name}...`);
    };

    const handleViewDetails = (agent: Agent) => {
        router.push(`/aiAgents/${agent.slug}`);
    };

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            const threshold = 10;
            setCanScrollLeft(scrollLeft > threshold);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - threshold);
        }
    };

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const card = scrollRef.current.querySelector('div[role="button"]');
            const cardWidth = card ? (card as HTMLElement).offsetWidth : 384;
            const gap = 16;
            const scrollAmount = cardWidth + gap;
            const currentScrollLeft = scrollRef.current.scrollLeft;
            let newScrollLeft = direction === 'left'
                ? currentScrollLeft - scrollAmount
                : currentScrollLeft + scrollAmount;
            const maxScrollLeft = scrollRef.current.scrollWidth - (scrollRef.current.clientWidth);
            newScrollLeft = Math.max(0, Math.min(newScrollLeft, maxScrollLeft));
            scrollRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        checkScroll();
        const resizeHandler = () => checkScroll();
        const current = scrollRef.current;
        if (current) {
            current.addEventListener('scroll', checkScroll);
            window.addEventListener('resize', resizeHandler);
        }
        return () => {
            if (current) {
                current.removeEventListener('scroll', checkScroll);
                window.removeEventListener('resize', resizeHandler);
            }
        };
    }, [category.agents.length]);

    return (
        <>
            <style jsx global>{`
                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                .scrollbar-hide {
                    scrollbar-width: none;
                    -ms-overflow-style: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
            <div className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                            {category.name}
                        </h2>
                        <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
                            {category.description}
                        </p>
                    </div>
                    <div className="hidden sm:flex items-center space-x-2">
                        <button
                            onClick={() => scroll('left')}
                            disabled={!canScrollLeft}
                            className={`p-2 rounded-xl border transition-all duration-200 ${canScrollLeft
                                ? 'border-slate-600 bg-slate-700/50 text-white hover:bg-slate-600/50 hover:scale-110'
                                : 'border-slate-800 bg-slate-800/50 text-slate-600 cursor-not-allowed'
                                }`}
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            disabled={!canScrollRight}
                            className={`p-2 rounded-xl border transition-all duration-200 ${canScrollRight
                                ? 'border-slate-600 bg-slate-700/50 text-white hover:bg-slate-600/50 hover:scale-110'
                                : 'border-slate-800 bg-slate-800/50 text-slate-600 cursor-not-allowed'
                                }`}
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
                <div className="relative">
                    <div
                        ref={scrollRef}
                        className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
                        style={{
                            scrollBehavior: 'smooth',
                            maxWidth: '100%',
                        }}
                    >
                        {category.agents.map((agent: Agent, index: number) => (
                            <div className="snap-start" key={agent.id}>
                                <AgentCard
                                    agent={agent}
                                    index={index}
                                    onTryNow={handleTryAgent}
                                    onCardClick={handleViewDetails}
                                />
                            </div>
                        ))}
                    </div>
                    {/* Mobile scroll buttons */}
                    <div className="sm:hidden flex justify-center space-x-4 mt-4">
                        <button
                            onClick={() => scroll('left')}
                            disabled={!canScrollLeft}
                            className={`p-2 rounded-xl border transition-all duration-200 ${canScrollLeft
                                ? 'border-slate-600 bg-slate-700/50 text-white'
                                : 'border-slate-800 bg-slate-800/50 text-slate-600 cursor-not-allowed'
                                }`}
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            disabled={!canScrollRight}
                            className={`p-2 rounded-xl border transition-all duration-200 ${canScrollRight
                                ? 'border-slate-600 bg-slate-700/50 text-white'
                                : 'border-slate-800 bg-slate-800/50 text-slate-600 cursor-not-allowed'
                                }`}
                        >
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};