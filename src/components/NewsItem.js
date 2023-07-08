import React from 'react'

const NewsItem =(props)=> {
    
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div>
                <div className="card" >
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: 0
                    }}>
                        <span className=" badge rounded-pill bg-danger" > {source}</span>
                    </div>
                    <img src={!imageUrl ? "https://th.bing.com/th/id/OIP.eLVe8pdMHH-YqXTosos9FwHaHa?w=190&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}
                        </h5>             {/*ye props ke throuh lia hay this.props dekh lo line 5 me*/}
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">by {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
    
}

export default NewsItem
