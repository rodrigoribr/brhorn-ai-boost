interface Window {
    fbq?: (
        event: string,
        eventName: string,
        options?: Record<string, unknown>
    ) => void;
}
