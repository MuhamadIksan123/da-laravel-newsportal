const isNews = (news) => {
    return (
        <>
            {news.map((data, i) => {
                return (
                    <div
                        key={i}
                        className="card bg-base-100 w-full lg:w-96 shadow-xl mx-4"
                    >
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {data.title}
                            </h2>
                            <p>{data.description}</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">
                                    {data.category}
                                </div>
                                <div className="badge badge-outline">
                                    {data.author}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

const noNews = () => {
    return <h1 className='text-slate-950'>Mohon maaf sekarang berita belum teresedia</h1>;
};

const NewList = ({ news }) => {
    return !news ? noNews() : isNews(news);
};

export default NewList;
