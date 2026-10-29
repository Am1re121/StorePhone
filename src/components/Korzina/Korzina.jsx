import {useState} from "react";

function Korzina(props) {
    const [count, setCount] = useState(1);
    const total = props.favorites.reduce((sum, phone) => {
    return sum + Number(phone.price || 0);
}, 0);
    return(
    <>
    <h1 style={{fontFamily:"'Poppins', sans-serif", fontSize:"40px", position:"relative", top:"150px", left:"50px"}}>Корзина</h1>
    <div style={{display:"flex", gap:"40px", paddingLeft:"140px", flexDirection:"column", width:"1100px", height:"100px", paddingTop:"200px", }}>    
            {props.favorites.length === 0 ? (<p style={{fontFamily:"'Poppins', sans-serif", fontSize:"20px", position:"relative", top:"10px", left:"20px"}}>Корзина пуста</p>) : (
                props.favorites.map((phone) => (
                    <div key={phone.id} style={{ display: "flex", gap: "25px", width: "700px", padding: "20px", marginBottom: "15px", borderRadius: "15px", backgroundColor: "#fff", boxShadow: "0 3px 5px rgba(0, 0, 0, 0.2)", border: "1px solid #E0E0E0", position: "relative" }}>
                        <img src={phone.img} alt={phone.name} style={{ height: "100px", width: "100px", objectFit: "contain" }} />
                        <h2 style={{fontFamily:"'Poppins', sans-serif", fontSize:"24px", margin:"10px 0"}}>{phone.name}</h2>
                        <p style={{fontFamily:"'Poppins', sans-serif", fontSize:"16px", color:"#666", marginTop:"50px", marginLeft:"-135px"}}>{phone.shortinfo}</p>
                        <h3 style={{fontFamily:"'Poppins', sans-serif", fontSize:"18px", margin:"10px 0", marginLeft:"-120px", marginTop:"80px", backgroundColor:"#007bff", color:"#fff", padding:"2px 8px", borderRadius:"5px"}}>{phone.category}</h3>
                        <h3 style={{fontFamily:"'Poppins', sans-serif", fontSize:"25px", margin:"10px 0", marginLeft:"200px", marginTop:"10px"}}>${phone.price}.00</h3>
                        <div style={{position:"absolute", top:"80px", right:"170px", display:"flex", alignItems:"center", width:"100px", justifyContent:"space-between", height:"30px", backgroundColor:"#ededed", borderRadius:"15px", padding:"0 10px"}}>
                    <button style={{position:"absolute", top:"0px", right:"10px", height:"30px", width:"30px", borderRadius:"50%", border:"none",  cursor:"pointer"}} onClick={() => {setCount(Math.max(1, count + 1))}}> + </button>
                    <span style={{position:"absolute", top:"5px", right:"55px", fontFamily:"'Poppins', sans-serif", fontSize:"18px"}}>{count}</span>
                    <button style={{position:"absolute", top:"0px", right:"80px", height:"30px", width:"30px", borderRadius:"50%", border:"none",  cursor:"pointer"}} onClick={() => {setCount(Math.max(1, count - 1))}}> - </button>


                        </div>
                    </div>
            )))}
    </div>


    <div style={{position:"absolute", top:"200px", left:"1100px", backgroundColor:"#fff", width:"350px", height:"450px", borderRadius:"25px", border:"1px solid #E0E0E0", boxShadow: "0 3px 5px rgba(0, 0, 0, 0.2)"}}>
            <h1 style={{fontFamily:"'Poppins', sans-serif", fontSize:"30px", color:"#333", position:"absolute", top:"0px", left:"120px", fontFamily:"'Poppins', sans-serif", fontWeight:"bold", fontSize:"40px"}}>Итого</h1>
            <p style={{fontFamily:"'Poppins', sans-serif", fontSize:"25px", color:"#6c6c6c", position:"absolute", top:"100px", left:"70px"}}>{props.favorites.length} Товаров</p>
            <p style={{fontFamily:"'Poppins', sans-serif", fontSize:"25px", color:"#6c6c6c", position:"absolute", top:"150px", left:"70px"}}>{total == 0 ? "Вы не выбрали товары" : `Сумма: $${total}.00`}</p>
            <p style={{fontFamily:"'Poppins', sans-serif", fontSize:"25px", color:"#6c6c6c", position:"absolute", top:"200px", left:"70px"}}>{props.favorites.length === 0 ? "Доставка: $0.00" : "Доставка: $10.00"}</p>
            <h2 style={{fontFamily:"'Poppins', sans-serif", fontSize:"30px", color:"#6c6c6c", position:"absolute", top:"250px", left:"70px"}}>Итого: ${total * count + (props.favorites.length === 0 ? 0 : 10)}.00</h2>
            <button style={{position:"absolute", top:"350px", left:"100px", height:"60px", width:"160px", borderRadius:"30px", border:"none", fontSize:"20px", fontFamily:"'Poppins', sans-serif", backgroundColor:"#d5d5d5"}}>Buy Now</button>
         </div>
    </>
    )
}


export default Korzina;