export const GifItem = ({ title, url, id }) => {
        
  return (
    <div className="card" key={id}>
        <img src={url} alt={title} />
        <p>{title}</p>

    </div>
  )
}
