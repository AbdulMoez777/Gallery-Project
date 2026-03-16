const Card = ({ elem }) => {
  return (
    <div className="w-full">
      <a href={elem.url} target="_blank">
        <div className="h-40 w-full overflow-hidden rounded-xl">
          <img
            className="h-full w-full object-cover"
            src={elem.download_url}
            alt=""
          />
        </div>
        <h2 className="font-bold text-lg">{elem.author}</h2>
      </a>
    </div>
  )
}

export default Card