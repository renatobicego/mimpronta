const Blog = () => {
    return (
        <main className="main">
            <div className="w-full py-[5vh] bg-rosa space-section">
                <div>
                    <h3 className="title-size text-white">
                        <span className="font-text">N</span>uestro Blog
                    </h3>
                    <input placeholder="Buscar publicaciones" type="search" 
                        className="input text-white border-white placeholder:text-white bg-magnifier-input
                                    bg-clip-padding  bg-no-repeat pl-16 bg-left-6" />
                </div>
            </div>
        </main>
    )
}

export default Blog