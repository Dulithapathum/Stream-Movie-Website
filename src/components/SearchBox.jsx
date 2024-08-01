import { IoMdSearch } from "react-icons/io";

export const SearchBox = () => {
  return (
    <>
    <div className="flex items-center bg-[#5a5a5a] w-72 h-7 px-2  rounded-md ">
        
        <input type="text"  className="  outline-none w-full h-7  text-white bg-transparent " placeholder="Search "/>
        <IoMdSearch  className="text-white text-lg "/>
        </div>

    </>
  )
}
