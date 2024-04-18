const SportPage = ({ params }) => {
    // load api data
    // load from local storage
    // validate data
    const { category } = params;

    return (
        <div>
            <h1>{category}</h1>
        </div>
    );
};

export default SportPage;