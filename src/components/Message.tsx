export default function Message(){
    const name = "diego";
    if(name){
        return <h1>Hola {name}</h1>
    }
    return(
        <h1>Hola mundo</h1>
    );
}