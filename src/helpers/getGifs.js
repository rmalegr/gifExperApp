export const getGifs =  async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=XhziZnnAdURwbwUaAij7zqENya3IDHdV&q=${ category }&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.fixed_height.url,

    }))


    return gifs

}
