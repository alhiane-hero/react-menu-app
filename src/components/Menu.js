function Menu({menuItems}) {
    return (
        <div className="Menu">{
            menuItems.map(item => {
                const {id, title, price, img, desc} = item;
                return (
                    <article key={id}>
                        <img className='ImgFluid' src={img} alt={title} />
                        <div className='ItemsInfo'>
                            <header>
                                <h4 className='ItemTitle'>{title}</h4>
                                <h4 className='ItemPrice'>{price}</h4>
                            </header>
                            <footer>
                                <p className='ItemDesc'>{desc}</p>
                            </footer>
                        </div>
                    </article>
                );
            })  
        }</div>
    );
}

export default Menu;
