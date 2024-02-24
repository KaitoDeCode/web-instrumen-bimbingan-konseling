const fetchWithEvent = (url: string, method: string = 'GET', option: RequestInit = { headers: { 'x-api-key': process.env.NEXT_PUBLIC_API_KEY || '' } }) => {
    if (!option.headers) {
        option.headers = {};
    }
    (option.headers as any)['x-api-key'] = process.env.NEXT_PUBLIC_API_KEY || '';
    const accessToken = document.cookie.replace(/(?:(?:^|.*;\s*)access-token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    if (accessToken) {
        (option.headers as any)['Authorization'] = `Bearer ${accessToken}`;
    }
    return fetch(process.env.NEXT_PUBLIC_API_URL + url, { ...option, method });
}

export{
    fetchWithEvent
}