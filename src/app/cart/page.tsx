import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
// import { FaRegUserCircle } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";

import React from 'react'

const page = () => {
  return (
    <div>
              {/* // Top Header */}
        <div className="flex flex-col md sm lg mx-auto">
          
   
        <div className="bg-[#000000] w-[1330px] h-[40px] mt-4  gap-[120px] flex flex-col md">
        <p className="  font-satoshi text-sm  pt-[9px] pl-[400px] text-[#FFFFFF] font-normal">Sign up and get 20% off to your first order. <span className="font-satoshi text-[#FFFFFF] text-sm font-400 underline ">Sign Up Now</span></p>
        </div>
  
             {/* Header */}
   <div className="flex items-center justify-center">
   <div className=" flex w-[1330px] h-[41px] gap-[40px] mt-[20px] ml-[50px] opacity-[0px] flex flex-wrap w-full px-4 py-4 md:px-8 lg:px-20 ">
        <h1 className=" pt-[5px] w-[116px] h-[22px] text-[#000000] font-integral  font-bold font-[1000] text-2xl">SHOP.CO</h1>

<ul className=" flex w-[321px] h-[22px] gap-[24px] pl-[40px] pt-[10px] text-[#000000]">
 <li className="w-[37px] h-[22px] text-base font-satoshi text-normal ">Shop</li>
 <li  className="w-[56px] h-[22px] text-base font-satoshi text-normal  ">OnSale</li>
 <li className="w-[87px] h-[22px] text-base font-satoshi text-normal  ">NewArrivals</li>
 <li className="w-[49px] h-[22px] text-base font-satoshi text-normal ">Brands</li>
</ul>
<div className="flex w-[500px] h-[41px] pt-[12px] pr-[16px] pb-[12px] pl-[16px] gap-[12px] rounded-[62px] opacity-[40px] bg-[#F0F0F0]">
<IoIosSearch className="  flex w-[24px] h-[24px]"/>  <input placeholder="Search for products...." className="w-[151px] h-[22px] text-base font-satoshi font-normal text-[#00000066] opacity-[40px]"/>
   </div>
<BsCart3 className=" w-[24px] h-[24px]" />
{/* <FaRegUserCircle className="w-[24px] h-[24px]"/> */}
   </div>
        </div>
        <div className=" flex w-[16px] h-[22px] mt-[40px] ml-[130px] gap-[12px]">
            <p>Home</p>
            <p>Cart</p>
            
        </div>
        {/* box1 */}
       <div className="w-[667px] h-[124px] gap-[16px]">
       <h1 className="flex  mt-[40px] ml-[150px] w-[259px] h-[48px] font-integral  font-bold font-[1000] text-2xl text-center">Your cart</h1>
        <div className="  flex w-[715px] h-[508px] mt-[15px] ml-[110px] pt-[20px] pr-[24px] pb-[20px] pl-[24px] gap-[24px] rounded-[20px] border-[1px]">
        <Image
   src="/shirt-color.png"
   alt="img"
   width={152} // Adjust the width
   height={160} // Adjust the height
   className="w-[124px] h-[124px] rounded-[8.66px] "
       />
       {/* cart 1 */}
       <div className=" w-[227px] h-[118px]  justify-[space-between]">
<h3 className="  w-[227px] h-[27px] font-integrat font-[20px] text-center font-bold">Gradient Graphic T-shirt</h3>
<p className="w-[100px] h-[20px] font-integral pt-[5px] pl-[12px] text-center font-normal">Size: Large</p>
<p className="w-[120px] h-[20px] font-integral pt-[12px]  pl-[6px] text-center font-normal">Color: White</p>
<h4 className="font-integral text-xl font-bold w-[59px] h-[32px] pt-[25px]  pl-[15px]">$145</h4>
  </div>
  <div className="w-[224px] h-[124px] ">
  <Image
   src="/v-delete.png"
   alt="img"
   width={24} // Adjust the width
   height={24} // Adjust the height
   className="w-[24px] h-[24px] ml-[230px] "
       />
       {/* box1+- */}
       
        <div className="w-[170px] h-[52px] rounded-[62px] bg-[#F0F0F0] ml-[100px] mt-[50px]">
        <div className="flex text-xl font-normal text-[#000000] gap-[25px]">
          <div className="w-[24px] h-[24px] pt-[8px] pr-[20px] pb-[16px] pl-[20px] text-bold">_</div>
          <div className="w-[6px] h-[22px] pt-[16px] pr-[20px] pb-[16px] pl-[20px] text-bold">1</div>
        <div className="w-[24px] h-[24px] pt-[16px] pr-[20px] pb-[16px] pl-[20px] text-bold">+</div>
        </div>
      </div>
        </div>
        
        </div>
       </div>
        {/* box2 */}
        <div className="w-[667px] h-[124px] gap-[16px] mt-[50px]">
       <div className="flex  mt-[40px] ml-[150px] w-[259px] h-[48px]"></div> 
        <div className="  flex w-[715px] h-[180px] mt-[15px] ml-[110px] pt-[20px] pr-[24px] pb-[20px] pl-[24px] gap-[24px] border-[1px]">
        <Image
   src="/image 3.png"
   alt="img"
   width={152} // Adjust the width
   height={160} // Adjust the height
   className="w-[124px] h-[124px] rounded-[8.66px] "
       />
       {/* cart 1 */}
       <div className=" w-[227px] h-[118px]  justify-[space-between]">
<h3 className="  w-[160px] h-[27px] font-integrat font-[20px] text-center pl-[6px]  font-bold">Checkered Shirt</h3>
<p className="w-[100px] h-[20px] font-integral pt-[5px] pl-[12px] text-center font-normal">Size:Medium</p>
<p className="w-[120px] h-[20px] font-integral pt-[12px]  pl-[8px] text-center font-normal">Color: Red</p>
<h4 className="font-integral text-xl font-bold w-[59px] h-[32px] pt-[25px]  pl-[15px]">$180</h4>
  </div>
  <div className="w-[224px] h-[124px] ">
  <Image
   src="/v-delete.png"
   alt="img"
   width={24} // Adjust the width
   height={24} // Adjust the height
   className="w-[24px] h-[24px] ml-[230px] "
       />
       {/* box1+- */}
       
        <div className="w-[170px] h-[52px] rounded-[62px] bg-[#F0F0F0] ml-[100px] mt-[50px]">
        <div className="flex text-xl font-normal text-[#000000] gap-[25px]">
          <div className="w-[24px] h-[24px] pt-[8px] pr-[20px] pb-[16px] pl-[20px] text-bold">_</div>
          <div className="w-[6px] h-[22px] pt-[16px] pr-[20px] pb-[16px] pl-[20px] text-bold">1</div>
        <div className="w-[24px] h-[24px] pt-[16px] pr-[20px] pb-[16px] pl-[20px] text-bold">+</div>
        </div>
      </div>
        </div>
        
        </div>
       </div>
       {/* box3 */}
       <div className="w-[667px] h-[224px] gap-[16px] mt-[50px]">
       <div className="flex  mt-[40px] ml-[150px] w-[259px] h-[48px]"></div> 
        <div className="  flex w-[715px] h-[160px] mt-[15px] ml-[110px] pt-[20px] pr-[24px] pb-[20px] pl-[24px] gap-[24px] border-[1px]">
        <Image
   src="/image 2.png"
   alt="img"
   width={152} // Adjust the width
   height={160} // Adjust the height
   className="w-[124px] h-[124px] rounded-[8.66px] "
       />
       {/* cart 1 */}
       <div className=" w-[227px] h-[118px]  justify-[space-between]">
<h3 className="  w-[160px] h-[27px] font-integrat font-[20px] text-center font-bold">Skinny Fit Jeans</h3>
<p className="w-[100px] h-[20px] font-integral pt-[5px] pl-[12px] text-center font-normal">Size: Small</p>
<p className="w-[120px] h-[20px] font-integral pt-[12px]  pl-[6px] text-center font-normal">Color: Blue</p>
<h4 className="font-integral text-xl font-bold w-[59px] h-[32px] pt-[25px]  pl-[15px]">$240</h4>
  </div>
  <div className="w-[224px] h-[124px] ">
  <Image
   src="/v-delete.png"
   alt="img"
   width={24} // Adjust the width
   height={24} // Adjust the height
   className="w-[24px] h-[24px] ml-[230px] "
       />
       {/* box1+- */}
       
        <div className="w-[170px] h-[52px] rounded-[62px] bg-[#F0F0F0] ml-[100px] mt-[50px]">
        <div className="flex text-xl font-normal text-[#000000] gap-[25px]">
          <div className="w-[24px] h-[24px] pt-[8px] pr-[20px] pb-[16px] pl-[20px] text-bold">_</div>
          <div className="w-[6px] h-[22px] pt-[16px] pr-[20px] pb-[16px] pl-[20px] text-bold">1</div>
        <div className="w-[24px] h-[24px] pt-[16px] pr-[20px] pb-[16px] pl-[20px] text-bold">+</div>
        </div>
      </div>

        </div>
        </div>

        </div>
       {/* order */}
       <div className="w-[500px] ">
        <Image
   src="/order.png"
   alt="img"
   width={500} // Adjust the width
   height={450} // Adjust the height
   className="absolute right-0 bottom-0 top-64 "
       />
      
        </div>
        {/* Navbar */}
<div className="pl-[1px] pt-[100px]">
<Image
   src="/navbar.png"
   alt="img"
   width={1330}
   height={122}
   />
</div>
       </div>

    </div>
  )
}

export default page
 

