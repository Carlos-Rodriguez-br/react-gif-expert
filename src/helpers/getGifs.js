

export const getGifs = async(category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=VTaEr0ouODBE8bzLLCvAoMrFaNAvCW73&q=${category}&limit=10`;
    const response = await fetch(url);
    const data = await response.json();
    const gifs = data.data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.original.url
    }));
    return gifs;
};