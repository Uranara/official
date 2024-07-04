export async function detectLocaleFromIP(ip: string | null): Promise<string> {
    if (!ip) return 'en';
    try {
        const response = await fetch(`https://ipinfo.io/${ip}/json?token=YOUR_TOKEN_HERE`)

        const data = await response.json()

        const country = data.country

        if (country === 'CN') {
            return 'zh';
        } else {
            return 'en';
        }
    } catch (error) {
        console.error('Error detecting locale from IP:', error);
        return 'en';
    }
}