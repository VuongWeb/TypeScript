type ShowInfoProps = {
    name : string,
    age :number
}

const ShowInfo = ({name}:ShowInfoProps)=>{
    return (
        <div>hi {name} </div>
    )
}

export default ShowInfo;