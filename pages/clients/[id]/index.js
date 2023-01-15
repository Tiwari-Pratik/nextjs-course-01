import { useRouter } from "next/router";

const ClientsProjectPage = () => {
    const router = useRouter();
    const clientId = router.query.id;
    const loadProjectHandler = () => {
         router.push({
            pathname: '/clients/[id]/[clientProjectId]',
            query: {
                id: clientId,
                clientProjectId: 'projecta'
            }
         })
    }
    return(
        <div>
            <h1>{`The Projects of client Id: ${clientId.at(0).toUpperCase() + clientId.slice(1)}`}</h1>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    )
};

export default ClientsProjectPage;