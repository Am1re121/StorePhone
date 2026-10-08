import { Link } from "react-router-dom";

function Products(props) {
    return(
        <>
            <div style={{display:"flex", gap:"20px", paddingLeft:"340px", flexWrap:"wrap", width:"1100px", paddingTop:"150px"}}>
                {props.phones.map((phone) => {
                    return(
                            <div key={phone.id} style={{height:"350px", width:"250px", backgroundColor:"#F5F6F8", borderRadius:"25px", border:"1px solid #E0E0E0", position:"relative"}}>
                                <Link to={`/phone/${phone.id}`} style={{textDecoration:"none", color:"black"}}>
                                <img src={phone.img} alt={phone.name} style={{height:"170px", width:"130px", paddingLeft:"50px", paddingTop:"10px"}}/>
                                <h1 style={{paddingLeft:"20px", paddingTop:"15px", fontFamily:"'Poppins', sans-serif", fontSize:"22px"}}>{phone.name}</h1>
                                <h2 style={{paddingLeft:"20px", paddingTop:"10px", fontFamily:"'Poppins', sans-serif", fontSize:"25px", color:"#6c6c6c"}}>${phone.price}.00</h2>
                                </Link>


                                <img onClick={(e) => {e.preventDefault(); props.setFavorites([...props.favorites, phone]) }} src="/src/assets/heart.png" alt="Heart" style={{cursor:"pointer",  height:"20px", width:"20px", position:"relative", top:"-40px", left:"200px"}}/>
                            </div>
                        
                    )
                })}
            </div>

    
        </>
    )
}

export default Products;