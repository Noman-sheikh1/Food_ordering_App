const Header=()=>{
    return ( 
        <div className="flex  m-3 p-2 justify-between bg-amber-600 rounded-xl">
            <div className="  size-28 "> 
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv86s5jLvuvNk7tN5cWRz-cq90TxdOeIpnEw&s"}/>

            </div>
        <div>
            <ul className="flex text-xl space-x-5 m-5 p-5 ">
                <li> 
                    Home
                </li>
                <li>
                    About us
                </li>
                <li>
                    contact us
                </li>
            </ul>
        </div>
        </div>
    );
}
export default Header;