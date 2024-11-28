import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Dashboard(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [notif, setNotif] = useState(false);

    const handleSubmit = () => {
        const data = {
            title,
            description,
            category,
        };
        router.post("/news", data);
        setNotif(true);
        setTitle("");
        setDescription("");
        setCategory("");
    };

    useEffect(() => {
        if (!props.myNews) {
            router.get("news");
        }
        return;
    }, []);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {notif && (
                        <div role="alert" className="alert alert-info">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="h-6 w-6 shrink-0 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                            </svg>
                            <span>{props.flash.message}</span>
                        </div>
                    )}
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-4">
                        <input
                            type="text"
                            placeholder="Judul"
                            className="input input-bordered input-primary w-full my-2 mx-auto"
                            onChange={(title) => setTitle(title.target.value)}
                            value={title}
                        />
                        <input
                            type="text"
                            placeholder="Deskripsi"
                            className="input input-bordered input-primary w-full my-2"
                            onChange={(description) =>
                                setDescription(description.target.value)
                            }
                            value={description}
                        />
                        <input
                            type="text"
                            placeholder="Kategori"
                            className="input input-bordered input-primary w-full my-2"
                            onChange={(category) =>
                                setCategory(category.target.value)
                            }
                            value={category}
                        />
                        <button
                            className="btn btn-primary my-2 w-full"
                            onClick={() => handleSubmit()}
                        >
                            Submit
                        </button>
                    </div>

                    <div className="flex justify-center flex-wrap py-8 gap-4">
                        {props.myNews && props.myNews.length > 0 ? (
                            props.myNews.map((data, i) => {
                                return (
                                    <div
                                        className="card bg-base-100 w-full lg:w-96 shadow-xl"
                                        key={i}
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
                                                <div className="badge badge-neutral">
                                                    {data.category}
                                                </div>
                                                <div className="badge badge-outline">
                                                    <Link
                                                        method="get"
                                                        href={route(
                                                            "news.edit"
                                                        )}
                                                        data={{ id: data.id }}
                                                        as="button"
                                                    >
                                                        Edit
                                                    </Link>
                                                </div>
                                                <div>
                                                    <Link
                                                        method="delete"
                                                        href={route(
                                                            "news.delete"
                                                        )}
                                                        data={{ id: data.id }}
                                                        as="button"
                                                        onClick={() => setNotif(true)}
                                                    >
                                                        Delete
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <h1> data not found</h1>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
