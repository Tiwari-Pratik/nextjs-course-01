import Link from "next/link";

const ClientsPage = () => {
    const clients = [
        {id:'mohit', name:'Mohit'},
        {id:'pratik', name: 'Pratik'}
    ]
    return(
        <div>
            <h1>The Clients Page</h1>
            <ul>
               {clients.map(client => {
                return (
                    <li key={client.id}>
                        {/* <Link href={`/clients/${client.id}`}>{client.name}</Link> */}
                        <Link href={{
                            pathname: '/clients/[id]',
                            query:{
                                id: client.id
                            }
                        }}>{client.name}</Link>
                    </li>
                )
               })}
            </ul>
        </div>
    )
};

export default ClientsPage;