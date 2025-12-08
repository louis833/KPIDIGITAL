/**
 * Scoped View Transitions Utility
 * 
 * Implements the View Transition API for component-level transitions
 * with graceful degradation and accessibility support.
 * 
 * Usage:
 * ```typescript
 * import { scopedTransition } from '@/utils/viewTransitions';
 * 
 * const container = document.querySelector('.service-card');
 * await scopedTransition(container, () => {
 *   // Update DOM here
 *   container.innerHTML = newContent;
 * });
 * ```
 */

/**
 * Check if View Transition API is supported
 */
export function supportsViewTransitions(): boolean {
    return 'startViewTransition' in document;
}

/**
 * Apply scoped view transition to a container element
 * 
 * @param container - The DOM element to scope the transition to
 * @param updateCallback - Function that updates the DOM
 * @param options - Optional configuration
 */
export async function scopedTransition(
    container: HTMLElement,
    updateCallback: () => void | Promise<void>,
    options: {
        skipTransition?: boolean;
        onStart?: () => void;
        onComplete?: () => void;
    } = {}
): Promise<void> {
    const { skipTransition = false, onStart, onComplete } = options;

    // If transitions not supported or explicitly skipped, just update
    if (!supportsViewTransitions() || skipTransition) {
        onStart?.();
        await updateCallback();
        onComplete?.();
        return;
    }

    try {
        // Ensure container has CSS containment for scoped transitions
        ensureContainment(container);

        onStart?.();

        // Start the view transition
        const transition = (document as any).startViewTransition(async () => {
            await updateCallback();
        });

        await transition.finished;
        onComplete?.();
    } catch (error) {
        console.warn('View transition failed, falling back to instant update:', error);
        await updateCallback();
        onComplete?.();
    }
}

/**
 * Ensure container has proper CSS containment for scoped transitions
 */
function ensureContainment(container: HTMLElement): void {
    const currentContain = getComputedStyle(container).contain;

    if (!currentContain.includes('layout') && !currentContain.includes('view-transition')) {
        container.style.contain = 'layout';
    }
}

/**
 * Set unique view-transition-name for elements within a scope
 * 
 * @param container - Parent container
 * @param selector - CSS selector for elements to name
 * @param baseName - Base name for the transition
 */
export function setTransitionNames(
    container: HTMLElement,
    selector: string,
    baseName: string
): void {
    const elements = container.querySelectorAll(selector);
    elements.forEach((el, index) => {
        (el as HTMLElement).style.viewTransitionName = `${baseName}-${index}`;
    });
}

/**
 * Clear view-transition-name from elements
 */
export function clearTransitionNames(container: HTMLElement, selector: string): void {
    const elements = container.querySelectorAll(selector);
    elements.forEach((el) => {
        (el as HTMLElement).style.viewTransitionName = '';
    });
}

/**
 * Manage ARIA live region for accessibility during transitions
 */
export function announceTransition(message: string): void {
    let liveRegion = document.getElementById('view-transition-announcer');

    if (!liveRegion) {
        liveRegion = document.createElement('div');
        liveRegion.id = 'view-transition-announcer';
        liveRegion.setAttribute('role', 'status');
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'sr-only';
        document.body.appendChild(liveRegion);
    }

    liveRegion.textContent = message;

    // Clear after announcement
    setTimeout(() => {
        liveRegion!.textContent = '';
    }, 1000);
}

/**
 * Example: Service card transition
 * 
 * @param container - Service card container
 * @param newContent - New service data
 */
export async function transitionServiceCard(
    container: HTMLElement,
    newContent: {
        icon: string;
        title: string;
        description: string;
    }
): Promise<void> {
    // Set transition names for elements
    const icon = container.querySelector('.service-icon');
    const title = container.querySelector('.service-title');
    const description = container.querySelector('.service-description');

    if (icon) (icon as HTMLElement).style.viewTransitionName = 'service-icon';
    if (title) (title as HTMLElement).style.viewTransitionName = 'service-title';
    if (description) (description as HTMLElement).style.viewTransitionName = 'service-description';

    // Announce change for screen readers
    announceTransition(`Showing ${newContent.title}`);

    // Perform transition
    await scopedTransition(container, () => {
        if (icon) icon.innerHTML = newContent.icon;
        if (title) title.textContent = newContent.title;
        if (description) description.textContent = newContent.description;
    });

    // Clear transition names after
    if (icon) (icon as HTMLElement).style.viewTransitionName = '';
    if (title) (title as HTMLElement).style.viewTransitionName = '';
    if (description) (description as HTMLElement).style.viewTransitionName = '';
}
