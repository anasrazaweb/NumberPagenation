import { useEffect, useState } from 'react';

function CardpageNation() {
  const [Allproduct, setAllproduct] = useState([]);
  const [page, setpage] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=100");
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        setAllproduct(data.products);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);
  const selectpagehandle = (anas) => {
    setpage(anas)
  }
  return (
    <div className='  '>

      <div className=' flex flex-wrap py-10  gap-8 justify-center items-center '>

        {
           Allproduct.slice(page * 10 - 10, page * 10)
            .map((pro) => {

              return (
                <div className=' w-52 p-3 shadow-xl rounded-md' >
                  <div className='  flex justify-center '>
                    <img src={pro.thumbnail}
                      alt={pro.title}
                      className=' h-48 w-48 rounded-sm object-center' />

                  </div>
                  <div className=' ps-3  font-semibold '>
                    <h1 className=' mt-2 text-[16px] leading-none'>{pro.title}</h1>
                    <h1 className=' mt-2'> price :{pro.price}</h1>

                  </div>
                </div>
              )
            })
        }
      </div>
      <div className=' my-10 w-full text-center cursor-pointer'>
        {
          Allproduct.length > 0 && <div className=' pagenation'>
            <span className=' border p-5 hover:bg-zinc-300'>◀</span>
            {
              [...Array(Allproduct.length / 10)].map((_, ind) => {
                return (
                  <span
                    onClick={() => selectpagehandle(ind + 1)}
                    className=' border p-5 cursor-pointer hover:bg-zinc-300'>{ind + 1}</span>
                )
              })
            }
            <span className=' border p-5 cursor-pointer hover:bg-zinc-300'>▶</span>

          </div>
        }
      </div>
    </div>
  );
}

export default CardpageNation;
