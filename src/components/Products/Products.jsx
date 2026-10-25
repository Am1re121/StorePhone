import { Link } from "react-router-dom";

function Products(props) {
    async function addFavorite(phone) {
        const userId = localStorage.getItem("userId");

        if (!userId) {
            alert("Войдите в аккаунт");
            return;
        }

        const isFavorite = props.favorites.some(
            (item) => item.id === phone.id
        );

        if (isFavorite) {
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/api/favorites", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userId: Number(userId),
                    productId: phone.id
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Не удалось добавить в избранное");
            }

            props.setFavorites((prev) => [...prev, phone]);
        } catch (error) {
            console.error("Ошибка при добавлении в избранное:", error);
            alert("Не удалось добавить товар в избранное");
        }
    }
    return(
        

        <>
            <div style={{display:"flex", gap:"20px", paddingLeft:"340px", flexWrap:"wrap", width:"1100px", paddingTop:"150px"}}>
                {props.phones.map((phone) => {
                    return(
                            <div key={phone.id} style={{height:"350px", width:"250px", backgroundColor:"#F5F6F8", borderRadius:"25px", border:"1px solid #E0E0E0", position:"relative"}}>
                                <Link to={`/phone/${phone.id}`} style={{textDecoration:"none", color:"black"}}>
                                <img src={phone.img} alt={phone.name} style={{height:"170px", width:"130px", objectFit:"contain", paddingLeft:"50px", paddingTop:"10px"}} />
                                <h1 style={{paddingLeft:"20px", paddingTop:"15px", fontFamily:"'Poppins', sans-serif", fontSize:"22px"}}>{phone.name}</h1>
                                <h2 style={{paddingLeft:"20px", paddingTop:"10px", fontFamily:"'Poppins', sans-serif", fontSize:"25px", color:"#6c6c6c"}}>${phone.price}.00</h2>
                                <h3 style={{paddingLeft:"20px", paddingTop:"10px", fontFamily:"'Poppins', sans-serif", fontSize:"16px", color:"#6c6c6c"}}>{phone.shortinfo}</h3>
                                </Link>


                                <img onClick={(e) => {e.preventDefault(); addFavorite(phone)}}src={props.favorites.includes(phone) ? "/src/assets/heartfill.png" : "/src/assets/heart.png"} alt="Heart" style={{cursor:"pointer",  height:"20px", width:"20px", position:"relative", top:"-40px", left:"200px"}}/>
                            </div>
                        
                    )
                })}
            </div>

    
        </>
    )
}

export default Products;