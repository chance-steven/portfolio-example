
import Hero from "./Hero"
import Image from "./Image"

const Section = () => {
  return (
  
   <div className="h-full grid grid-cols-1 border sm:grid-cols-1 md:grid-cols-2 border-black p-2 mx-4">
  
  <Hero/>
  <Image/>
   </div>
  
    
  )
}

export default Section