import { onDestroy } from 'svelte';

/**
 * Calls the given callback when the user clicks outside of the given node.
 *
 * The callback is not called when the user clicks on the node itself, or on any
 * of its descendants.
 *
 * @param node The node that the user can click on and not trigger the callback.
 * @param callback The function to call when the user clicks outside of the node.
 */
export function useOutsideClick(node: HTMLElement, callback: () => void) {
  const handleClick = (event: MouseEvent) => {
    if (!node.contains(event.target as Node)) {
      callback();
    }
  };

  document.addEventListener('click', handleClick);

  onDestroy(() => {
    document.removeEventListener('click', handleClick);
  });
}
