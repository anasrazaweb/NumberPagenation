import React, { useEffect, useState } from 'react'

const Practies = () => {

    const [AllPro, setAllPro] = useState([])
    const [page, setpage] = useState(1)
    const pagehandle = (selectpage) => {
        setpage(selectpage)
    }
    useEffect(() => {

        const fetchdata = async () => {
            try {
                const res = await fetch("https://dummyjson.com/products?limit=100")
                if (!res.ok) {
                    throw new Error("Fetch data is fail")
                }
                const data = await res.json()
                setAllPro(data.products)
            }
            catch (error) {
                console.error("error", error.message)
            }

        }
        fetchdata()
    }, [])
    return (
        <div>
            <div className=' flex flex-wrap justify-center gap-10'>
                {
                    AllPro.slice(page * 10 - 10, page * 10).map((item) => {
                        return (

                            <div className=' bg-zinc-100 p-4 w-52 shadow-md '>
                                <div >
                                    <img
                                        className=' w-48 h-40 rounded-lg'
                                        src={item.thumbnail} alt={item.title}></img>
                                </div>
                                <div className='my-3 leading-none text-md font-semibold'>{item.title}</div>
                                <div className=' text-zinc-700'>Price :{item.price}</div>
                            </div>
                        )
                    })
                }
            </div>

            <div className=' text-center my-10'>
                {
                    AllPro.length > 0 && <div>
                        <span className=' border p-5 hover:bg-zinc-200 cursor-pointer'>◀</span>
                        {
                            [...Array(AllPro.length / 10)].map((_, i) => {
                                return (
                                    <span onClick={() => pagehandle(i + 1)} className=' border p-5 hover:bg-zinc-200 cursor-pointer'>
                                        {i + 1}
                                    </span>
                                )
                            })
                        }
                        <span className=' border p-5 hover:bg-zinc-200 cursor-pointer'>▶</span>
                    </div>
                }
            </div>
        </div>
    )
}

export default Practies