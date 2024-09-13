
function Card(props){
    return(
    <div className="card">
        <div className="flexboxes">
 <div> <img src={props.img} alt="img" className="img"/> </div>
 <div>{props.userName}</div>
 </div>
 <div>
 <div className="cust-reviews">{props.CustReviews}</div>
    <div className="flexboxes2">
 <div>{props.Reviews}</div>
 <div> <img src={props.img1} alt="img1" className="rating-img"/></div>
 </div>
 </div>
    </div> )
}export default Card;