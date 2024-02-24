const fetchWithEvent=async(url:string,option:RequestInit = {headers: {'x-api-key': process.env.X_API_KEY || ''}})=>{
    if(!option.headers) option.headers = {};
    (option.headers as any)['x-api-key'] = process.env.X_API_KEY || '';
    return fetch(url,option)
}

export{
    fetchWithEvent
}