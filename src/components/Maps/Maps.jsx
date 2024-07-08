import React from "react";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import { Button } from "@nextui-org/react";

export const Maps = () => {
  return (
    <>
      <div className='section-1 bg-abuterang border-b border-birutext pt-14'>
        <div className='bg-abu px-4 pt-16 pb-4 absolute z-10 -mt-24 ml-8 lg:ml-[14rem]'>
          <HiOutlineArrowNarrowDown className='text-birutext w-12 h-14 align-bottom custom-icon' />
        </div>
      </div>
      <div className='section-2 bg-abuterang pt-40'></div>
      <div className='section-3 bg-birubg bg-maps pb-10'>
        <div className='flex flex-col items-center justify-center'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.927648469706!2d115.25189377506194!3d-8.698421091350273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd241b9f76e7e19%3A0x3006c1bad3e78db0!2sJl.%20Mukti%20Sari%20No.10%2C%20Semawang%2C%20Sanur%20Kauh%2C%20Denpasar%20Selatan%2C%20Kota%20Denpasar%2C%20Bali%2080227!5e0!3m2!1sid!2sid!4v1720343284447!5m2!1sid!2sid'
            width='800'
            height='950'
            style={{ border: 0 }}
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            className='-mt-20 relative hidden lg:block'
          ></iframe>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.927648469706!2d115.25189377506194!3d-8.698421091350273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd241b9f76e7e19%3A0x3006c1bad3e78db0!2sJl.%20Mukti%20Sari%20No.10%2C%20Semawang%2C%20Sanur%20Kauh%2C%20Denpasar%20Selatan%2C%20Kota%20Denpasar%2C%20Bali%2080227!5e0!3m2!1sid!2sid!4v1720343284447!5m2!1sid!2sid'
            width='350'
            height='950'
            style={{ border: 0 }}
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            className='-mt-20 relative block lg:hidden'
          ></iframe>
          <Button
            color='white'
            className='text-white mt-6 w-44'
            variant='faded'
            radius='full'
            size='lg'
          >
            Buka Maps
          </Button>
        </div>
      </div>
    </>
  );
};
