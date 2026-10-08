import { Link } from "react-router-dom";
import korzina from "../../assets/korzina.png";

function Favorite(props) {

    function setremovefav(phone) {
            props.setFavorites(props.favorites.filter((item) => item.id !== phone.id))
        }

        const total = props.favorites.reduce((acc, phone) => acc + phone.price, 0);
    return (
        <>
        <Link to="/" style={{textDecoration:"none", color:"black", textTransform:"uppercase", fontWeight:"bold", position:"absolute", top:"100px", left:"40px", fontSize:"26px"}}>←</Link>
        <div style={{display:"flex", gap:"40px", paddingLeft:"140px", flexDirection:"column", width:"1100px", paddingTop:"200px"}}>    
            <h1 style={{fontFamily:"'Poppins', sans-serif", fontSize:"36px", color:"#333", position:"absolute", top:"80px", left:"650px"}}>Favorites</h1>
            {props.favorites.map((phone) => (
                <div key={phone.id} style={{height:"200px", width:"850px", backgroundColor:"#F5F6F8", borderRadius:"25px", border:"1px solid #E0E0E0", position:"relative"}}>
                                <img src={phone.img} alt={phone.name} style={{height:"170px", width:"130px", paddingLeft:"50px", paddingTop:"10px"}}/>
                                <h1 style={{position:"relative", left:"220px", top:"-170px", fontFamily:"'Poppins', sans-serif", fontSize:"22px"}}>{phone.name}</h1>
                                <h2 style={{position:"relative", left:"220px", top:"-120px", fontFamily:"'Poppins', sans-serif", fontSize:"25px", color:"#6c6c6c"}}>${phone.price}.00</h2>
                                <h3 style={{position:"relative", left:"220px", top:"-210px", fontFamily:"'Poppins', sans-serif", fontSize:"18px", color:"#6c6c6c"}}>Цена за 1 шт</h3>
                                <img onClick={() => setremovefav(phone)} src={korzina} alt="Korzina" style={{height:"30px", width:"30px", position:"absolute", top:"150px", right:"10px"}}/>
                            
                </div>
            ))}
        </div>

         <div style={{position:"absolute", top:"200px", left:"1100px", backgroundColor:"#F5F6F8", width:"350px", height:"450px", borderRadius:"25px", border:"1px solid #E0E0E0"}}>
            <h1 style={{fontFamily:"'Poppins', sans-serif", fontSize:"30px", color:"#333", position:"absolute", top:"0px", left:"120px", fontFamily:"'Poppins', sans-serif", fontWeight:"bold", fontSize:"40px"}}>Итого</h1>
            <p style={{fontFamily:"'Poppins', sans-serif", fontSize:"25px", color:"#6c6c6c", position:"absolute", top:"100px", left:"70px"}}>{props.favorites.length} Товаров</p>
            <p style={{fontFamily:"'Poppins', sans-serif", fontSize:"25px", color:"#6c6c6c", position:"absolute", top:"150px", left:"70px"}}>{total == 0 ? "Вы не выбрали товары" : `Сумма: $${total}.00`}</p>
            <p style={{fontFamily:"'Poppins', sans-serif", fontSize:"25px", color:"#6c6c6c", position:"absolute", top:"200px", left:"70px"}}>Доставка: $10.00</p>
            <h2 style={{fontFamily:"'Poppins', sans-serif", fontSize:"30px", color:"#6c6c6c", position:"absolute", top:"250px", left:"70px"}}>Итого: ${total+10}.00</h2>
            <button style={{position:"absolute", top:"350px", left:"100px", height:"60px", width:"160px", borderRadius:"30px", border:"none", fontSize:"20px", fontFamily:"'Poppins', sans-serif", backgroundColor:"#d5d5d5"}}>Buy Now</button>
         </div>

        </>      
    )
}

export default Favorite;