import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";

import React from 'react'

const Websitepage = () => {
  return (
   
        // Top Header
        <div className="flex flex-col md sm lg mx-auto">
          <div >
   
    </div>
        <div className="bg-[#000000] w-[1330px] h-[40px] mt-4  gap-[120px] flex flex-col md">
        <p className="  font-satoshi text-sm  pt-[9px] pl-[400px] text-[#FFFFFF] font-normal">Sign up and get 20% off to your first order. <span className="font-satoshi text-[#FFFFFF] text-sm font-400 underline ">Sign Up Now</span></p>
        </div>
  {/* click routes */}
    <div className="relative">
  <nav>
    <ul className="flex flex-row gap-4 text-center pt-5 absolute right-10 font-bold">
      <li>
        <a
          href="/products"
          className="hover:text-blue-500 focus:text-blue-700"
        >
          Products Details
        </a>
      </li>
      <li>
        <a
          href="/cart"
          className="hover:text-blue-500 focus:text-blue-700"
        >
          Carts
        </a>
      </li>
    </ul>
  </nav>
</div>
{/* Header */}
   <div className="flex items-center justify-center">
   <div className=" flex w-[1330px] h-[41px] gap-[40px] mt-[62px] ml-[50px] opacity-[0px] flex flex-wrap w-full px-4 py-4 md:px-8 lg:px-20 ">
        <h1 className=" pt-[10px] w-[116px] h-[22px] text-[#000000] font-Integral CF font-bold font-[1000] text-2xl">SHOP.CO</h1>

<ul className=" flex w-[321px] h-[22px] gap-[24px] pl-[40px] pt-[10px] text-[#000000]">
 <li className="w-[37px] h-[22px] text-base font-satoshi text-normal ">Shop</li>
 <li  className="w-[56px] h-[22px] text-base font-satoshi text-normal  ">OnSale</li>
 <li className="w-[87px] h-[22px] text-base font-satoshi text-normal  ">NewArrivals</li>
 <li className="w-[49px] h-[22px] text-base font-satoshi text-normal ">Brands</li>
</ul>
<div className="flex w-[500px] h-[41px] pt-[12px] pr-[16px] pb-[12px] pl-[16px] gap-[12px] rounded-[62px] opacity-[40px] bg-[#F0F0F0]">
<IoIosSearch className=" w-[24px] h-[24px]"/>  <input placeholder="Search for products...." className="w-[151px] h-[22px] text-base font-satoshi font-normal text-[#00000066] opacity-[40px]"/>
   </div>
<BsCart3 className=" w-[24px] h-[24px]" />
<FaRegUserCircle className="w-[24px] h-[24px]"/>
        </div> 
   </div>
 
{/* Hero section */}
  <div className="mt-[50px] bg-[#F2F0F1] w-[1330px] h-[663px] flex flex-col items-start relative ">
 {/* Heading */}
 <h1 className="font-Integral CF text-[#000000] w-[577px] h-[173px] pt-[100px] pl-[100px] text-[64px] font-bold leading-[64px] text-left">
   FIND CLOTHES THAT MATCH YOUR STYLE
 </h1>

 {/* Paragraph */}
 <p className="w-[545px] pl-[100px] pt-[120px] text-base font-[Satoshi] font-normal text-left">
   Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
 </p>

 {/* Image */}
     <Image
   src="/download.png"
   alt="img"
   width={1330} // Adjust the width
   height={600} // Adjust the height
   className="absolute right-0 bottom-0 object-contain "
       />
 <div className="absolute left-0 bottom-60  text-[white] w-[210px] h-[52px] mt-[507px] ml-[100px] pb-[16px] pr-[54px] pt-[16px] pl-[34px] gap-[75px] rounded-[62px] bg-[#000000]">
 Shop Now
 </div>
</div>
{/* black box */}
<div className=" h-[122px] bg-[#000000]">
<div className="flex justify-center iteam-center text-[#FFFFFF]">
<Image
   src="/Group.png"
   alt="img"
   width={170}
   height={33}
   className="pl-[70px] pt-[50px]"
 />

 <Image
   src="/zara-logo-1 1.png"
   alt="img"
   width={170}
   height={33}
   className="pl-[70px] pt-[50px]"
 />
 <Image
   src="/gucci-logo-1 1.png"
   alt="img"
   width={170}
   height={33}
   className="pl-[70px] pt-[50px]"
 />
 <Image
   src="/prada-logo-1 1.png"
   alt="img"
   width={170}
   height={33}
   className="pl-[70px] pt-[50px]"
 />
   <Image
   src="/Group (1).png"
   alt="img"
   width={170}
   height={33}
   className="pl-[70px] pt-[50px]"
 />
</div>
</div>
{/* product line one */}
 <div className=" w-[403px] h-[58px] pt-[91px] pl-[518px] font-Integral CF text-[48px] font-bold text-center">
   <span className="flex gap-4 font-bold">NEW<p>ARRIVALS</p></span>
 </div>
 <div className="flex">
   <div className=" pt-[90px] rounded-[20px 0px 0px 0px]">
     {/* Pruduct Image  */}
   <Image
   src="/image 1.png"
   alt="img"
   width={1330}
   height={122}
   className="pl-[100px] pt-[50px] rounded-[20px]"
 />
 <h1  className=" pl-[100px] pt-[20px] text-bold Font-satoshi text-[16px]">T-Shirt With Tape Details</h1>
 <Image
   src="/star 1.png"
   alt="img"
   width={1330}
   height={122}
   className="pl-[100px] pt-[10px]"
 />

 <h2 className="w-[55px] h-[32px] pt-[10px] pl-[100px] gap-[10px]">$120</h2>
   </div>
   {/* image 2 */}
   <div className=" pt-[90px] rounded-[20px 0px 0px 0px]">
   <Image
   src="/image 2.png"
   alt="img"
   width={1330}
   height={122}
   className="pl-[100px] pt-[50px] rounded-[20px]"
 />
 <h1  className="  pl-[100px] pt-[20px] text-bold Font-satoshi text-[16px]">Skinny Fit Jeans</h1>
 <Image
   src="/star 2.png"
   alt="img"
   width={1330}
   height={122}
   className="pl-[100px] p1-[30px]"
 />
   <Image
   src="/$ 1.png"
   alt="img"
   width={1330}
   height={122}
   className="pl-[100px] pt-[10px]"
 />
 
   </div>
   {/* image 3 */}
   <div className=" pt-[90px] rounded-[20px 0px 0px 0px]">
   <Image
   src="/image 3.png"
   alt="img"
   width={1330}
   height={122}
   className="pl-[100px] pt-[50px] rounded-[20px]"
 />
 <h1  className="  pl-[100px] pt-[20px] text-bold Font-satoshi text-[16px]">Checkered Shirt</h1>
 <Image
   src="/star 1.png"
   alt="img"
   width={1330}
   height={122}
   className="pl-[100px] pt-[10px]"
 />
 <h2 className="w-[55px] h-[32px] pt-[10px] pl-[100px] gap-[10px]">$180</h2>
   </div>
   {/* image4 */}
   <div className=" pt-[90px] rounded-[20px 0px 0px 0px]">
   <Image
   src="/image 4.png"
   alt="img"
   width={1330}
   height={122}
   className="pl-[100px] pt-[50px] rounded-[20px]"
 />
 <h1  className=" pl-[100px] pt-[20px] text-bold Font-satoshi text-[16px]">Sleeve Striped T-Shirt</h1>
 <Image
   src="/star 1.png"
   alt="img"
   width={1330}
   height={122}
   className="pl-[100px] pt-[10px]"
 />
   <Image
   src="/$ 2.png"
   alt="img"
   width={1330}
   height={122}
   className="pl-[100px] pt-[10px]"
 />

<div className="text-[#000000] w-[218px] h-[52px] pt-[16px] pr-[54px] pb-[16px] pl-[54px] gap-[12px] rounded-[62px] border-[4px] hover:border-[2px] hover:border-black-800 text-center ">
  View All
  </div>

   </div>
  
 
 </div>
 {/* Product line two */}
       
 <div className=" w-[403px] h-[58px] pt-[91px] pl-[518px] font-Integral CF text-[48px] font-bold text-center">
   <span className="flex gap-4 font-bold">TOP<p>SELLING</p></span>
 </div>
 <div className="flex">
   <div className=" pt-[90px] rounded-[20px 0px 0px 0px]">
     {/* image 1 */}
   <Image
   src="/image 5.png"
   alt="img"
   width={1330}
   height={122}
   className="pl-[100px] pt-[50px] rounded-[20px]"
 />
 <h1  className=" pl-[100px] pt-[20px] text-bold Font-satoshi text-[16px]">Vertical Striped Shirt</h1>
 <Image
   src="/star 1.png"
   alt="img"
   width={1330}
   height={122}
   className="pl-[100px] pt-[10px]"
 />

 <h2 className="w-[55px] h-[32px] pt-[10px] pl-[100px] gap-[10px]">$212</h2>
   </div>
   {/* image 2 */}
   <div className=" pt-[90px] rounded-[20px 0px 0px 0px]">
   <Image
   src="/image 6.png"
   alt="img"
   width={1330}
   height={122}
   className="pl-[100px] pt-[50px] rounded-[20px]"
 />
 <h1  className="  pl-[100px] pt-[20px] text-bold Font-satoshi text-[16px]">Courage Graphic T-Shirt</h1>
 <Image
   src="/star 2.png"
   alt="img"
   width={1330}
   height={122}
   className="pl-[100px] p1-[30px]"
 />
   <Image
   src="/$ 1.png"
   alt="img"
   width={1330}
   height={122}
   className="pl-[100px] pt-[10px]"
 />
 
   </div>
   {/* image 3 */}
   <div className=" pt-[90px] rounded-[20px 0px 0px 0px]">
   <Image
   src="/image 7.png"
   alt="img"
   width={1330}
   height={122}
   className="pl-[100px] pt-[50px] rounded-[20px]"
 />
 <h1  className="  pl-[100px] pt-[20px] text-bold Font-satoshi text-[16px]">Loose Fit Bermuda Sports</h1>
 <Image
   src="/star 1.png"
   alt="img"
   width={1330}
   height={122}
   className="pl-[100px] pt-[10px]"
 />
 <h2 className="w-[55px] h-[32px] pt-[10px] pl-[100px] gap-[10px]">$80</h2>
   </div>
   {/* image4 */}
   <div className=" pt-[90px] rounded-[20px 0px 0px 0px]">
   <Image
   src="/image 8.png"
   alt="img"
   width={1330}
   height={122}
   className="pl-[100px] pt-[50px] rounded-[20px]"
 />
 <h1  className=" pl-[100px] pt-[20px] text-bold Font-satoshi text-[16px]">Faded Skinny Jeans</h1>
 <Image
   src="/star 1.png"
   alt="img"
   width={1330}
   height={122}
   className="pl-[100px] pt-[10px]"
 />
  <h2 className="w-[55px] h-[32px] pt-[10px] pl-[100px] gap-[10px]">$210</h2>


<div className="text-[#000000] w-[218px] h-[52px] pt-[16px] pr-[54px] pb-[16px] pl-[54px] gap-[12px] rounded-[62px] border-[4px] hover:border-[2px] hover:border-black-800 text-center ">
  View All
  </div>

   </div>

 
 </div>
 <div className=" pt-[100px] pl-[100px] gap-[0px] rounded-[40px]">
  <Image
   src="/picture 4.png"
   alt="img"
   width={1330}
   height={122}
 />
  </div>
  {/* Happy customers */}
  <div className="w-[654px] h-[58px] pt-[100px] pl-[100px] font-integral text-[48px] font-bold leading-[57.6px] text-left" >
   <span  className="flex gap-10 font-bold">OURHAPPY<p>CUSTOMERS</p></span>
  </div>
 <div className="flex">
 <div className="w-[400px] h-[340px] mt-[100px] ml-[100px] pt[28px] pl-[32px] pt-[28px] pr-[32px] gap-[342px] rounded-[20px] border-[1px]">
  <Image
   src="/star.png"
   alt="img"
   width={1330}
   height={122}
   className="pl-[22px] pt-[6px]"
 />
  <Image
   src="/correct.png"
   alt="img"
   width={1330}
   height={122}
   className="pl-[22px] pt-[10px]"
 />

   <p className="pl-[22px] pt-[10px]">"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
  </div>
  <div className="w-[400px] h-[340px] mt-[100px] ml-[100px] pt[28px] pl-[32px] pt-[28px] pr-[32px] gap-[342px] rounded-[20px] border-[1px]">
  <Image
   src="/star.png"
   alt="img"
   width={1330}
   height={122}
   className="pl-[22px] pt-[6px]"
 />
  <Image
   src="/correct 2.png"
   alt="img"
   width={1330}
   height={122}
   className="pl-[22px] pt-[10px]"
 />

   <p className="pl-[22px] pt-[10px]">"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
  </div>
  <div className="w-[400px] h-[340px] mt-[100px] ml-[100px] pt[28px] pl-[32px] pt-[28px] pr-[32px] gap-[342px] rounded-[20px] border-[1px]">
  <Image
   src="/star.png"
   alt="img"
   width={400}
   height={250}
   className="pl-[22px] pt-[6px]"
 />
  <Image
   src="/correct 3.png"
   alt="img"
   width={400}
   height={250}
   className="pl-[22px] pt-[10px]"
 />

   <p className="pl-[22px] pt-[10px]">"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
  </div>
 </div>
 {/* Nanbar */}
<div className="pl-[1px] pt-[100px]">
<Image
   src="/navbar.png"
   alt="img"
   width={1330}
   height={122}
   />
</div>

       
   </div>
  )
}

export default Websitepage
