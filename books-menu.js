function BooksMenu() {
    const [data, setData] = React.useState(null);
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        async function getData() {
            const response = await fetch('./books.json');
            const json = await response.json();
            setData(json);
            setLoaded(true);
        }
        getData();
    }, [])
    // console.log('loaded:', loaded, 'data:', data);

    return (<>
        <ul className="dropdown-menu">
            {loaded && data.books.map((book, i) => <li key={i}><a className="dropdown-item" href={"#/books/" + book.isbn}>{book.title}</a></li>)}
        </ul>
    </>);
}

ReactDOM.render(
    <BooksMenu />,
    document.getElementById('books-menu')
);
