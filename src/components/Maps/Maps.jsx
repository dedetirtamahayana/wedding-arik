import React from "react";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import { Button } from "@nextui-org/react";

export const Maps = () => {
  return (
    <>
      <div className='section-1 bg-abuterang border-b border-birutext pt-8'>
        <div className=' absolute z-10 -mt-12 ml-8 lg:ml-[14rem]'>
          <img src='/panah.png' alt='' className='w-[50px]' />
        </div>
      </div>
      <div className='section-2 bg-abuterang pt-28'></div>
      <div className='section-3 bg-birubg bg-maps pb-10'>
        <div className='flex flex-col items-center justify-center'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.929878955336!2d115.25119727506208!3d-8.698209291350523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd241b9fdb572c7%3A0x9f11f892ad42a19f!2sGg.%20I%20No.199%2C%20Sanur%20Kauh%2C%20Denpasar%20Selatan%2C%20Kota%20Denpasar%2C%20Bali%2080228!5e0!3m2!1sid!2sid!4v1720533748913!5m2!1sid!2sid'
            width='800'
            height='950'
            style={{ border: 0 }}
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            className='-mt-20 relative hidden lg:block'
          ></iframe>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.929878955336!2d115.25119727506208!3d-8.698209291350523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd241b9fdb572c7%3A0x9f11f892ad42a19f!2sGg.%20I%20No.199%2C%20Sanur%20Kauh%2C%20Denpasar%20Selatan%2C%20Kota%20Denpasar%2C%20Bali%2080228!5e0!3m2!1sid!2sid!4v1720533748913!5m2!1sid!2sid'
            height='950'
            style={{ border: 0 }}
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            className=' -mt-16 relative block lg:hidden'
          ></iframe>

          <Button
            color='white'
            className='text-white mt-6 w-44'
            variant='faded'
            radius='full'
            size='lg'
            onClick={() =>
              window.open(
                "https://www.google.com/maps/place/Gg.+I+No.199,+Sanur+Kauh,+Denpasar+Selatan,+Kota+Denpasar,+Bali+80228/@-8.6982093,115.2511973,17z/data=!3m1!4b1!4m5!3m4!1s0x2dd241b9fdb572c7:0x9f11f892ad42a19f!8m2!3d-8.6982093!4d115.2537722?hl=id-ID&entry=ttu",
                "_blank"
              )
            }
          >
            Buka Maps
          </Button>
        </div>
      </div>
    </>
  );
};
