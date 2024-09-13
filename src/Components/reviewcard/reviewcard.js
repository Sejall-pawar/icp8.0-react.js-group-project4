
function Card(props){
    return(
    <div className="card"> 
 <div> <img src={props.img} alt="img" className="img"/> </div>
 <div>{props.userName}</div>
 <div>{props.review}</div>
    </div>)
}export default Card;