export default function Cards({img, category, title, link}){
    return(
        <>
            <div className="cards">
                <div className="card">
                    <img src={img} alt="img" className="card_img" />
                    <div className="card_info">
                        <span className="card_category">{category} </span>
                        <h3 className="card_title">{title} </h3>
                        <a href={link} target="_blank"> <button >Watch Now</button> </a>
                    </div>
                </div>
            </div>
        </>
    );
    }
    