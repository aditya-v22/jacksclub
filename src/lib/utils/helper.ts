import clsx, { type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines and merges Tailwind CSS classes conditionally.
 *
 * @param classes - An array of class values which can be strings or objects for conditional classes.
 * @returns A string of merged and deduplicated class names.
 */
export function cn(...classes: ClassValue[]): string {
	return twMerge(clsx(...classes));
}
