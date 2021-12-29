
const Sidebar = () => {
    return (
        <div className="grid grid-cols-2  md:grid-cols-1 h-80vh">
            <div className="relative flex items-center justify-center min-h-[10em]">
                <h2 className="text-2xl text-white underline z-10 2xl:text-4xl">community</h2>
                <img src="/images/community.png" alt="" className="absolute object-cover object-bottom w-full h-full" />
            </div>
            <div className="relative flex items-center justify-center min-h-[10em]">
            <h2 className="text-2xl text-white underline z-10 2xl:text-4xl">top brands</h2>
            <img src="/images/Airpods.png" alt="" className="absolute object-cover object-bottom w-full h-full"/>
            </div>
        </div>
    )
}

export default Sidebar
