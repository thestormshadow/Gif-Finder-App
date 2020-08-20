export const getGifs = async(category) => {
    const apiKey = "&api_key=XsDGhh7zOkXIL5O3HB9HWpD6RyDmqb6m";
    const busq = encodeURI(category);
    const url = "https://api.giphy.com/v1/gifs/search?q=" + busq + "&limit=10" + apiKey;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(img=>{
        return {
            id:img.id,
                title:img.title,
                url:img.images?.downsized_medium.url
        }
    });

    return gifs;
}
