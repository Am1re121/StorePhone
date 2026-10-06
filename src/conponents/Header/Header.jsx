function Header() {
    return(
        <>
        <div style={{height:"120px", width:"1540px", backgroundColor:"#FFFFFF", position:"fixed", top:"0", left:"0", }}>
            <h1 style={{color:"black", textAlign:"center", paddingTop:"40px", fontFamily:"sans-serif", position:"absolute", left:"70px", top:"-25px"}}>Phone Store</h1>
            <input type="text" placeholder="Search..." style={{position:"absolute", left:"400px", top:"30px", height:"50px", width:"600px", borderRadius:"30px", border:"none", fontSize:"15px", fontFamily:"sans-serif", backgroundColor:"#F5F6F8", paddingLeft:"50px"}} />
            <img src="src/assets/magnifying-glass.png" alt="Search" style={{height:"20px", width:"20px", position:"absolute", left:"415px", top:"45px"}} />
            <button style={{position:"absolute", left:"1450px", top:"30px", height:"50px", width:"50px", borderRadius:"30px", border:"none", fontSize:"15px", fontFamily:"sans-serif", backgroundColor:"#F5F6F8"}}><img src="src/assets/user.png" alt="User" style={{height:"30px", width:"30px", position:"absolute", left:"10px", top:"10px"}} /></button>
            <button style={{position:"absolute", left:"1390px", top:"30px", height:"50px", width:"50px", borderRadius:"30px", border:"none", fontSize:"15px", fontFamily:"sans-serif", backgroundColor:"#F5F6F8"}}><img src="src/assets/heart.png" alt="User" style={{height:"30px", width:"30px", position:"absolute", left:"10px", top:"10px"}} /></button>
            <button style={{position:"absolute", left:"1330px", top:"30px", height:"50px", width:"50px", borderRadius:"30px", border:"none", fontSize:"15px", fontFamily:"sans-serif", backgroundColor:"#F5F6F8"}}><img src="src/assets/shopping-basket.png" alt="Cart" style={{height:"30px", width:"30px", position:"absolute", left:"10px", top:"10px"}} /></button>
        </div>
        </>
    )
}

export default Header;