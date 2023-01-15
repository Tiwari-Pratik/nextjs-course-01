import {useRouter} from 'next/router';

const PortFolioProjectPage = () => {
    const router = useRouter();
    console.log(router.pathname);
    console.log(router.query);
    return (
        <div>
            <h1>The PortFolio Project Page</h1>
        </div>
    )
};

export default PortFolioProjectPage;