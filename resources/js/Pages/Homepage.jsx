import { Head } from "@inertiajs/react";
import Navbar from '@/Components/Navbar';
import NewList from '@/Components/Homepage/NewsList';
import Paginator from '@/Components/Homepage/Paginator';

export default function Homepage(props) {
    return (
        <>
            <Head title={props.title}></Head>
            <Navbar user={props.auth.user} />

            <div className="pt-4 min-h-screen bg-slate-50">
                <div className="flex justify-center flex-wrap gap-4">
                    <NewList news={props.data.data} />
                </div>

                <div className="flex justify-center py-8">
                    <Paginator meta={props.data.meta} />
                </div>
            </div>
        </>
    );
}
