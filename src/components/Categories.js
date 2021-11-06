function Categories({categories, filterItems}) {
    return (
        <ul className="Categories">{
            categories.map((category, index) => {
                return (
                    <li key={index}>
                        <button className="Btn"
                            onClick={_ => filterItems(category)}>
                            {category}
                        </button>
                    </li>
                );
            })
        }</ul>
    );
}

export default Categories;
