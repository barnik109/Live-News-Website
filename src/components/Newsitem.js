import React from 'react'

const Newsitem =(props) => {
      let {title,description,imageurl,newsUrl,author,date,source}=props;
    return (
      <div className="my-3">
          <div className="card">
          <div style={{display:'flex',
          justifyContent:'flex-end',
          position:'absolute',
          right:'0'
          }}>
          <span className="badge rounded-pill bg-danger" >
    {source}</span>
    </div>
  <img src={!imageurl? 'https://media.istockphoto.com/photos/media-concept-with-tv-screens-picture-id1301983459?b=1&k=20&m=1301983459&s=170667a&w=0&h=rh_XkYTuyt6DCkDvmTSsAM5gdlEp74RXMdgui2GHXK4=':imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}  </h5>
    <p className="card-text">{description}</p>
        <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p> 
    <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
}

export default Newsitem