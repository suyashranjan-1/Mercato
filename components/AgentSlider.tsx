'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, TrendingUp, Zap } from 'lucide-react';

interface Agent {
    id: number;
    name: string;
    description: string;
    icon: string;
    color: string;
    tags: string[];
    rating: string;
    usage: string;
    speed: string;
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
    const handleTryNow = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        onTryNow(agent);
    };

    const handleCardClick = (e: React.MouseEvent) => {
        // Only handle clicks that aren't on the button
        if ((e.target as HTMLElement).closest('button')) {
            return;
        }
        onCardClick(agent);
    };

    return (
        <div
            className="flex-shrink-0 w-80 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 group hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer relative z-10 hover:z-20"
            style={{
                animationDelay: `${index * 100}ms`,
            }}
            onClick={handleCardClick}
        >
            <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${agent.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 relative transform-gpu`}>
                        {agent.icon}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-slate-400">
                        <Sparkles className="w-3 h-3" />
                        <span>{agent.rating}</span>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {agent.name}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {agent.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {agent.tags.map((tag: string, i: number) => (
                        <span key={i} className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-lg hover:bg-slate-600/50 transition-colors duration-300">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex items-center justify-between">
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
                        onClick={handleTryNow}
                        className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-400 rounded-lg hover:bg-gradient-to-r hover:from-blue-600/30 hover:to-purple-600/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 transform-gpu"
                    >
                        <span className="text-sm font-medium">Demo</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
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

    const handleTryAgent = (agent: Agent) => {
        if (onTryAgent) {
            onTryAgent(agent);
        } else {
            console.log(`Trying agent: ${agent.name}`);
            alert(`Starting ${agent.name}...`);
        }
    };

    const handleViewDetails = (agent: Agent) => {
        if (onViewDetails) {
            onViewDetails(agent);
        } else {
            console.log(`Viewing details for: ${agent.name}`);
            alert(`Opening details for ${agent.name}`);
        }
    };

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            // Calculate responsive scroll amount based on screen size
            const getScrollAmount = () => {
                const containerWidth = scrollRef.current?.clientWidth || 0;
                const cardWidth = 320; // Base card width (w-80 = 320px)
                const gap = 24; // space-x-6 = 24px

                // For mobile: scroll one card at a time
                if (window.innerWidth < 640) {
                    return cardWidth + gap;
                }
                // For tablet: scroll 1.5 cards
                else if (window.innerWidth < 1024) {
                    return (cardWidth + gap) * 1.5;
                }
                // For desktop: scroll 2 cards or container width, whichever is smaller
                else {
                    return Math.min((cardWidth + gap) * 2, containerWidth * 0.8);
                }
            };

            const scrollAmount = getScrollAmount();
            const currentScrollLeft = scrollRef.current.scrollLeft;

            // Calculate new scroll position
            let newScrollLeft;
            if (direction === 'left') {
                newScrollLeft = currentScrollLeft - scrollAmount;
            } else {
                newScrollLeft = currentScrollLeft + scrollAmount;
            }

            // Ensure we don't scroll beyond boundaries
            const maxScrollLeft = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
            newScrollLeft = Math.max(0, Math.min(newScrollLeft, maxScrollLeft));

            scrollRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });

            // Update scroll state after animation
            setTimeout(() => checkScroll(), 300);
        }
    };

    // Enhanced checkScroll function for better boundary detection
    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            const threshold = 10; // Increased threshold for better detection

            setCanScrollLeft(scrollLeft > threshold);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - threshold);
        }
    };

    // Add resize handler to recalculate scroll capabilities
    useEffect(() => {
        const handleResize = () => {
            checkScroll();
        };

        const checkScrollWithDelay = () => {
            setTimeout(checkScroll, 100);
        };

        checkScrollWithDelay();
        const current = scrollRef.current;
        if (current) {
            current.addEventListener('scroll', checkScroll);
            current.addEventListener('scrollend', checkScroll);
            window.addEventListener('resize', handleResize);

            return () => {
                current.removeEventListener('scroll', checkScroll);
                current.removeEventListener('scrollend', checkScroll);
                window.removeEventListener('resize', handleResize);
            };
        }
    }, [category.agents]);

    return (
        <>
            <style jsx>{`
                .line-clamp-3 {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }

                .transform-gpu {
                    transform: translateZ(0);
                }

                .group:hover {
                    transform: translateZ(0) scale(1.02);
                }

                .group {
                    will-change: transform, z-index;
                }
            `}</style>

            <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="flex items-center justify-between mb-8">
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
                            className={`p-2 rounded-xl border transition-all duration-300 ${canScrollLeft
                                ? 'border-slate-600 bg-slate-700/50 text-white hover:bg-slate-600/50 hover:scale-110'
                                : 'border-slate-800 bg-slate-800/50 text-slate-600 cursor-not-allowed'
                                }`}
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            disabled={!canScrollRight}
                            className={`p-2 rounded-xl border transition-all duration-300 ${canScrollRight
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
                        className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {category.agents.map((agent: Agent, index: number) => (
                            <AgentCard
                                key={agent.id}
                                agent={agent}
                                index={index}
                                onTryNow={handleTryAgent}
                                onCardClick={handleViewDetails}
                            />
                        ))}
                    </div>

                    {/* Mobile scroll buttons */}
                    <div className="sm:hidden flex justify-center space-x-4 mt-4">
                        <button
                            onClick={() => scroll('left')}
                            disabled={!canScrollLeft}
                            className={`p-2 rounded-xl border transition-all duration-300 ${canScrollLeft
                                ? 'border-slate-600 bg-slate-700/50 text-white'
                                : 'border-slate-800 bg-slate-800/50 text-slate-600 cursor-not-allowed'
                                }`}
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            disabled={!canScrollRight}
                            className={`p-2 rounded-xl border transition-all duration-300 ${canScrollRight
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