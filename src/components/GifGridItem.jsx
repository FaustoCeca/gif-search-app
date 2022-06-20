
export const GifGridItem = ({title, img}) => {
  return (

    <div className="card">
        <img src={ img } alt={ title } />
        <p> { title } </p>
    </div>
  )
}
