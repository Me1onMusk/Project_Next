

export default function Page({params}:{params:{id:string | string}}) { 
    return ( 
        <div>
            book/{params.id}
        </div>
    )
};