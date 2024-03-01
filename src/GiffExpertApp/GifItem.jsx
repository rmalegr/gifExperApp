export const GifItem = ({ title, url, id }) => {

        console.log(url)

        //   const {title, url} = props;
        //   console.log(title, url)
        
        //   console.log(props)
        //   console.log(props.title)
        //   console.log(props.url)
        
  return (
    <div className="card" key={id}>
        <img src={url} alt={title} />
        <p>{title}</p>

    </div>
  )
}
