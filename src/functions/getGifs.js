
export const getGifs = async( category ) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?api_key=oBe2KtCZP5IKDpl0VxyueFKIH4CnkJnO&q=${ category }&limit=20`;
    const resp = await fetch( url );
    const { data } = await resp.json();
    
    const gifs = data.map( gif => ({
        id: gif.id,
        title: gif.title,
        img: gif.images.downsized_medium.url
    }));

    return gifs
}