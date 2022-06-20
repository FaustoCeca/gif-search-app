import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({category}) => {

  const { images, isLoading } = useFetchGifs( category )


  return (
    <>
        <h1> { category } </h1>

        {
          isLoading && <div className="spinner"></div>
        }

        <div className="card-grid">
          {
            images.map(( gif ) => ( 
              <GifGridItem 
                key={ gif.id }
                { ...gif }
                />
            ))
          }  
        </div> 
    </>
  )
}
