/** @url https://github.com/midzer/tobii */
declare module '@midzer/tobii' {
	class Tobii {
		open: (index?: number) => void;
		select: (index?: number) => void;
		previous: () => void;
		next: () => void;
		selectGroup: (name: string) => void;
		close: () => void;
		add: (element: HTMLElement | Node) => void;
		remove: (element: HTMLElement | Node) => void;
		isOpen: () => boolean;
		slidesIndex: () => number;
		slidesCount: () => number;
		currentGroup: () => string;
		reset: () => void;
		destroy: () => void;

		on: (
			eventName: 'open' | 'close' | 'previous' | 'next',
			listener: () => void,
		) => void;
		off: (
			eventName: 'open' | 'close' | 'previous' | 'next',
			listener: () => void,
		) => void;

		constructor(settings?: {
			selector?: string;
			captions?: boolean;
			captionsSelector?: 'self' | 'img';
			captionAttribute?: string;
			captionText?: (arg1: HTMLElement) => string;
			captionHTML?: boolean;
			nav?: boolean | 'auto';
			navText?: string[];
			navLabel?: string[];
			close?: boolean;
			closeText?: string;
			closeLabel?: string;
			loadingIndicatorLabel?: string;
			counter?: boolean;
			keyboard?: boolean;
			zoom?: boolean;
			zoomText?: string;
			docClose?: boolean;
			swipeClose?: boolean;
			draggable?: boolean;
			threshold?: number;
			autoplayVideo?: boolean;
			autoplayAudio?: boolean;
		});
	}
	export default Tobii;
}
