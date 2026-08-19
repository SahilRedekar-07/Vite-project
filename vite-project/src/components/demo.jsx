function card(props){

    return <div className="Card">
        <div className="name">{props.user}</div>
        <div className="age">{props.age} years old</div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit fugiat atque eaque culpa at voluptates!</p>
        <button>View Profile</button>
    </div>
  
}

export default card;