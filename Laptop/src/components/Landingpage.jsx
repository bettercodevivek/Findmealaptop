

const Landingpage = () =>{
    return(
        <div>
            <h1 className=" relative top-12 text-center text-xl sm:text-3xl md:text-3xl lg:text-4xl">What kind of a laptop are you looking for?</h1>
         <div className="flex flex-row gap-4 relative top-48 w-full items-center justify-center">
             <div className="bg-inherit">
               <img src="https://i.postimg.cc/GhxYHxYd/gaminglaptop.webp" className="h-48"/>
               <p className="text-center text-lg">Gaming Laptop</p>
             </div>
             <div className="bg-inherit">
               <img src="https://i.postimg.cc/GhCGL54X/Non-gaming.webp" className="h-48"/>
               <p className="text-center text-lg">Non-Gaming Laptop</p>
             </div>
             
         </div>
        </div>
    )
}

export default Landingpage;