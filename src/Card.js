const Card = ({user}) => {

    return (
        <div className="card" key={user.id}>
            <img
                src={`https://robohash.org/${user.email}`}
                alt={`${user.name}`}
                style={{ width: "40%" }}
            />
            <div className="user-info">
                <h3>{user.name}</h3>
                <p>{user.email}</p>
            </div>
        </div>
    )


}

export default Card