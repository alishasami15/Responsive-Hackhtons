import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
// import { FaRegUserCircle } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";

import React from 'react'

const page = () => {
  return (
    // Top Header
    <div className="flex flex-col mt-[25px] md sm lg mx-auto relative">
        <div className="bg-[#000000] w-[1330px] h-[40px] mt-[15px]  gap-[120px] flex flex-col md">
        <p className="  font-satoshi text-sm  pt-[9px] pl-[400px] text-[#FFFFFF] font-normal">Sign up and get 20% off to your first order. <span className="font-satoshi text-[#FFFFFF] text-sm font-400 underline ">Sign Up Now</span></p>
        </div>
        {/* Header */}
   <div className="flex items-center justify-center">
   <div className=" flex w-[1330px] h-[41px] gap-[40px] mt-[20px] ml-[50px] opacity-[0px] flex flex-wrap w-full px-4 py-4 md:px-8 lg:px-20 ">
        <h1 className=" pt-[5px] w-[116px] h-[22px] text-[#000000] font-integral  font-bold font-[700] text-2xl">SHOP.CO</h1>

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
         
        <div className="flex pl-[130px] gap-[12px] mt-[100px]">
          <p>Home</p>
          <p>Shop</p>
          <p>Men</p>
          <p>T-shirts</p>
        </div>
        {/* shirt image */}
        <div className="w-[152px] h-[70px] pt-[80px] ml-[130px] rounded-[30px] ">
          
          <div className="flex flex-col gap-[8px]">
          <Image
   src="/shirt (2).png"
   alt="img"
   width={152} // Adjust the width
   height={160} // Adjust the height
   
       />
              <Image
   src="/shirt (2).png"
   alt="img"
   width={152} // Adjust the width
   height={160} // Adjust the height
  
       />
              <Image
   src="/shirt-image.png"
   alt="img"
   width={152} // Adjust the width
   height={160} // Adjust the height
  
       />
          
          </div> 
         </div> 
     {/* big-image */}
     <div  className=" flex w-[444px] h-[580px] pt-[2px] pl-[290px] rounded-[20px]">
         <Image
   src="/shirt (2).png"
   alt="img"
   width={444} // Adjust the width
   height={550} // Adjust the height
className="absolute left-266 hover hover:border-[10px] opacity-[40px]"
       />

      
     </div>
      
    {/* right text */}
      <div className=" flex flex-col gap-[30px] absolute left-266 w-[600px]h-[48px] pt-[330px] pl-[750px] font-integral font-bold text-5xl ">
        <h1>One Life Graphic T-shirt</h1>
        <div className="flex flex-col gap-[15px]">
        <Image
   src="/star 1.png"
   alt="img"
   width={200} // Adjust the width
   height={24} // Adjust the height
/>
<Image
   src="/$ 1.png"
   alt="img"
   width={280} // Adjust the width
   height={80} // Adjust the height
/>

        </div>
<div>
<p className="text-xl font-normal text-[#00000099] ">This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
</div>
<div className="pt-[2px]">
<h1 className="text-xl font-normal text-[#00000099] ">Select Colors</h1>
<div className="flex gap-[16px] pt-[4px]">
<div className=" w-[37px] h-[37px] bg-[#4F4631] rounded-[50px]"></div>
<div className=" w-[37px] h-[37px] bg-[#314F4A] rounded-[50px]"></div>
<div className=" w-[37px] h-[37px] bg-[#31344F] rounded-[50px]"></div>
</div>
</div>

<div className="pt-[2px]">
<h1 className="text-xl font-normal text-[#00000099] ">Choose Size</h1>
<div className="flex gap-[16px]  font-integral text-xl font-normal pt-[15px] ">
<div className=" pt-[12px] pr-[24px] pb-[12px] pl-[20px] gap-[12px] w-[86px] h-[46px] bg-[#F0F0F0] rounded-[62px] text-[#00000099] ">Small</div>
<div className=" pt-[12px] pr-[24px] pb-[12px] pl-[20px] gap-[12px] w-[105px] h-[46px] bg-[#F0F0F0] rounded-[62px] text-[#00000099] ">Medium</div>
<div className=" pt-[12px] pr-[20px] pb-[12px] pl-[20px] gap-[12px] w-[90px] h-[45px] bg-[#000000] rounded-[62px] text-[#FFFFFF] ">Large</div>
<div className=" pt-[12px] pr-[24px] pb-[12px] pl-[20px] gap-[12px] w-[100px] h-[46px] bg-[#F0F0F0] rounded-[62px] text-[#00000099]  ">XLarge</div>
</div>
</div>
<div className="flex gap-[12px]">
<div className="w-[170px] h-[52px] rounded-[62px] justify-[space-between] bg-[#F0F0F0]">
<div className="flex text-xl font-normal text-[#000000] gap-[25px]">
<div className="w-[24px] h-[24px]   pt-[8px] pr-[20px] pb-[16px] pl-[20px] text-bold">_</div>
  <div className="w-[6px] h-[22px]   pt-[16px] pr-[20px] pb-[16px] pl-[20px] text-bold">1</div>
  <div className="w-[24px] h-[24px]  pt-[16px] pr-[20px] pb-[16px] pl-[20px] text-bold">+</div>
</div>
</div>


<div className="w-[400px] h-[52px] gap-[12px] rounded-[62px] bg-[#000000]">
  <div className="w-[320px] h-[22px] text-[#FFFFFF] text-xl font-normal font-[16px]  pb-[16px] pl-[54px] pt-[16px] pr-[54px] text-center ">Add to Cart</div>
</div>
</div>
     
      </div>

        {/* All reviews */}
  <div className="w-[135px] h-[32px] pt-[100px] pl-[130px] font-integral text-[48px]  leading-[57.6px] text-left" >
   <span  className="flex gap-10 ">All<p>Reviews</p></span>
  </div>
  {/* one */}
 <div className="flex">
 <div className=" mt-[100px] ml-[130px] border-[1px] w-[610px] h-[241.58px] p-[28px 32px 28px 32px] gap-[10px] rounded-[20px]">
  <Image
   src="/star.png"
   alt="img"
   width={127}
   height={22}
   className="pl-[22px] pt-[6px] gap-[6px]"
 />
  <Image
   src="/correct 3.png"
   alt="img"
   width={145}
   height={24}
   className="pl-[22px] pt-[10px] gap-[4px]"
 />

   <p className="pl-[22px] pt-[10px]">I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.</p>
   <p className="text-[#00000099] pl-[22px] pt-[10px]">Posted on August 15, 2023</p>
  </div>
  
  <div className="mt-[100px] ml-[40px] border-[1px] w-[610px] h-[241.58px] p-[28px 32px 28px 32px] gap-[10px] rounded-[20px]">
  <Image
   src="/star.png"
   alt="img"
   width={127}
   height={22}
   className="pl-[22px] pt-[6px] gap-[6px]"
 />
  <Image
   src="/correct 2.png"
   alt="img"
   width={145}
   height={24}
   className="pl-[22px] pt-[10px] gap-[4px]"
 />

   <p className="pl-[22px] pt-[10px]">"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."</p>
   <p className="text-[#00000099] pl-[22px] pt-[10px]">Posted on August 20, 2024</p>
  </div>
 
 </div>
{/* two */}
 <div className="flex">
 <div className=" mt-[50px] ml-[130px] border-[1px] w-[610px] h-[241.58px] p-[28px 32px 28px 32px] gap-[10px] rounded-[20px]">
  <Image
   src="/star.png"
   alt="img"
   width={127}
   height={22}
   className="pl-[22px] pt-[6px] gap-[6px]"
 />
  <Image
   src="/correct.png"
   alt="img"
   width={145}
   height={24}
   className="pl-[22px] pt-[10px] gap-[4px]"
 />

   <p className="pl-[22px] pt-[10px]">"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."</p>
   <p className="text-[#00000099] pl-[22px] pt-[10px]">Posted on August 19, 2024</p>
  </div>
  <div className="mt-[50px] ml-[40px] border-[1px] w-[610px] h-[241.58px] p-[28px 32px 28px 32px] gap-[10px] rounded-[20px]">
  <Image
   src="/star.png"
   alt="img"
   width={127}
   height={22}
   className="pl-[22px] pt-[6px] gap-[6px]"
 />
  <Image
   src="/correct 3.png"
   alt="img"
   width={145}
   height={24}
   className="pl-[22px] pt-[10px] gap-[4px]"
 />

   <p className="pl-[22px] pt-[10px]">"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."</p>
   <p className="text-[#00000099] pl-[22px] pt-[10px]">Posted on August 19, 2023</p>
  </div>
 
 </div>
{/* three */}
 <div className="flex">
 <div className=" mt-[50px] ml-[130px] border-[1px] w-[610px] h-[241.58px] p-[28px 32px 28px 32px] gap-[10px] rounded-[20px]">
  <Image
   src="/star.png"
   alt="img"
   width={127}
   height={22}
   className="pl-[22px] pt-[6px] gap-[6px]"
 />
  <Image
   src="/correct 2.png"
   alt="img"
   width={145}
   height={24}
   className="pl-[22px] pt-[10px] gap-[4px]"
 />

   <p className="pl-[22px] pt-[10px]">I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.</p>
   <p className="text-[#00000099] pl-[22px] pt-[10px]">Posted on August 25, 2024</p>
</div>
  <div className="mt-[50px] ml-[40px] border-[1px] w-[610px] h-[241.58px] p-[28px 32px 28px 32px] gap-[10px] rounded-[20px]">
  <Image
   src="/star.png"
   alt="img"
   width={127}
   height={22}
   className="pl-[22px] pt-[6px] gap-[6px]"
 />
  <Image
   src="/correct.png"
   alt="img"
   width={145}
   height={24}
   className="pl-[22px] pt-[10px] gap-[4px]"
 />

   <p className="pl-[22px] pt-[10px]">"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."</p>
   <p className="text-[#00000099] pl-[22px] pt-[10px]">Posted on August 19, 2023</p>
  </div>
 
 </div>
 
 <div className=" w-[579px] h-[58px] pt-[91px] pl-[518px] font-integral  text-[48px] font-bold text-center text-[#000000]">
   <span className="flex gap-4 font-bold">You<p>might</p><p>also</p><p>like</p></span>
 </div>
 <div className="flex">
   <div className=" pt-[90px] rounded-[20px 0px 0px 0px]">
     {/* image 1 */}
   <Image
   src="/blue.png"
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
   src="/image 1.png"
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
   src="/image 3.png"
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

export default page

