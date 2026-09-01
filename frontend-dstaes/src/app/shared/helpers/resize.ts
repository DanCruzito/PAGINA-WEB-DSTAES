export function listen_window_resize(
    callback: () => void,
): () => void {
    if (typeof window === 'undefined') {
        return () => undefined;
    }

    const on_resize = () => callback();
    window.addEventListener('resize', on_resize);

    return () => window.removeEventListener('resize', on_resize);
}
