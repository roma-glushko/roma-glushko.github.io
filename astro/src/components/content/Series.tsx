import "./Series.css"

const Series = ({title, items}) => {
    return <nav className="series">
        <header>{title}</header>
        <div className="items">
            {items && items.map((item, idx: number) => <a href={item.url} className={`${item.active ? "active" : ""}`}>
                <div className="item-wrapper">
                    <span className="counter">{idx + 1}</span> <span>{item.title}</span>
                </div>
            </a>)}
        </div>
    </nav>    
}

export default Series;