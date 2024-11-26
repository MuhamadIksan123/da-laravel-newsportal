import { Head } from "@inertiajs/react";

export default function Homepage(props) {
    console.log(props);
    return (
        <>
            <Head title={props.title}></Head>

            <div className="flex justify-center items-center min-h-screen">
                <div>
                    <h1 className="text-center 4xl font-bold m-5">
                        {props.description}
                    </h1>
                    <div>
                        {props.data.map((data, i) => {
                            return (
                                <div
                                    key={i}
                                    className="max-w-96 m-2 p-4 text-black shadow-xl border-2 border-slate-100"
                                >
                                    <p className="2xl">{data.title}</p>
                                    <p className="text-sm">
                                        {data.description}
                                    </p>
                                    <i className="text-sm">{data.category}</i>
                                    <i className="text-sm">{data.author}</i>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
