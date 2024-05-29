var books = [];

async function getBooks() {
    const response = await fetch('./books.json');
    const json = await response.json();
    books = json.books;
}
getBooks();

function Books() {
    const [data, setData] = React.useState(books[0]);
    const handleNewBook = () => {
        var innerElement = '';
        var link = window.location.hash;
        var count = (link.split("/").length - 1);
        if (count > 1) {
            innerElement = link.split("/")[2];
            link = '#/' + link.split("/")[1];
        }
        if (link.includes('book')) setData(books?.filter(b => b.isbn == innerElement)[0]);
    }

    React.useEffect(() => {
        window.addEventListener("hashchange", handleNewBook);
        return () => window.removeEventListener("hashchange", handleNewBook);
    })

    // console.log('data exist?: ', data)
    const element = document.getElementById('content');
    element.innerHTML = "";
    return (<>
        {data && <Book data={data} key={1} />}
    </>)
}


ReactDOM.render(
    <Books />,
    document.getElementById('book')
);

