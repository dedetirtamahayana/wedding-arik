import React from "react";
import { useRouter } from "next/router";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
} from "@nextui-org/react";
import { Button } from "@nextui-org/react";

const Backdrop = ({ onClick }) => {
  const router = useRouter();
  const { undangan } = router.query;
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-backdrop flex items-center justify-center overflow-auto'>
      <div className='m-5'>
        <img src='/backdrop.png' alt='' className='w-[400px]' />
        {/* <Card className='py-4 bg-abu rounded-sm w-auto lg:max-h-[625px]'>
          <CardHeader className='pb-0 pt-2 px-4 flex items-center justify-between'>
            <div className='grid grid-cols-3 w-full gap'>
              <div>
                <div className='flex gap-1 items-end align-bottom'>
                  <p className='uppercase text-abugelap font-bold helvetica-rounded-text text-[7px] relative'>
                    A
                  </p>
                  <p className='uppercase text-abugelap font-bold helvetica-rounded-text text-[9px] relative'>
                    New Chapter
                  </p>
                </div>
              </div>

              <div className='flex items-center justify-center'>
                <p className='uppercase helvetica-rounded-text text-center text-abugelap text-[9px]'>
                  24
                </p>
              </div>
            </div>
          </CardHeader>
          <CardBody className='overflow-visible py-2'>
            <div className='pt-5 ml-[9.5rem] h-auto flex lg:ml-48'>
              <p className='text-3xl font-bold helvetica-rounded-text text-abugelap'>
                WEDDING
              </p>
              <p className='text-7xl kunstler-text text-white relative -top-5 -left-[5.15rem]'>
                of
              </p>
            </div>

            <Image
              alt='Card background'
              className='object-cover rounded-none w-[500px] lg:w-[400px]'
              src='/bg-undangan.png'
            />
            <div className='absolute top-[20%] left-[20%]'>
              <p className='ganigar-text text-abu text-center text-6xl z-10 relative -bottom-52 -left-[4.5rem]'>
                Arik
              </p>
              <p className='kunstler-text text-white text-center text-7xl z-10 relative -bottom-[9.75rem] -left-16'>
                &
              </p>
              <p className='ganigar-text text-abu text-center text-6xl z-10 relative -bottom-32 -left-10'>
                Gung Sri
              </p>
            </div>
          </CardBody>
          <CardFooter className='pt-4 mx-auto justify-center'>
            <p className='text-abugelap font-bold helvetica-rounded-text text-[9px] uppercase'>
              Kamis - 25 . 07 . 24
            </p>
          </CardFooter>
        </Card> */}
        <div className='my-3 text-center'>
          <Button
            color='white'
            className='text-white w-44'
            variant='faded'
            radius='full'
            size='lg'
            onClick={onClick}
          >
            Buka
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Backdrop;
