export const getGifs =  async ( category ) => {
    console.log(category)

    const url = `https://api.giphy.com/v1/gifs/search?api_key=XhziZnnAdURwbwUaAij7zqENya3IDHdV&q=${ category }&limit=6&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    const resp = await fetch(url);
    const { data } = await resp.json();


    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.url,
        images : img.images

        // url: img.images.downsized_medium.ur

    }))

    console.log(gifs)
    return gifs

}
