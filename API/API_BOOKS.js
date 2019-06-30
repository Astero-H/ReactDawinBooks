

export function getBooksWithSearch(text) {
    const url = "https://www.googleapis.com/books/v1/volumes?q=inauthor:" + text ;
    fetch(url)
        .then((response) => response.json())
        .catch((error) => {
            console.error(error);
        })

    
}