import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Suspense } from 'react';
import { AutoConnect } from "thirdweb/react";
import Image from "next/image";
import { useActiveAccount } from "thirdweb/react";
import { shortenAddress } from "thirdweb/utils";
import { Button } from "@headlessui/react";
import { client, wallet } from "@/app/constant";
import { main } from 'framer-motion/client';




function Header() {
  const account = useActiveAccount();

  return (
    <main className='bg-black'>
    <div className="flex justify-center p-4 py-8 bg-black gap-5 items-center border-b-2  w-[80%] mx-auto">
    <AutoConnect client={client} wallets={[wallet]}/>
    <div className="flex justify-center items-center h-full pr-2">
    {/* <Button className="inline-flex items-center gap-2 rounded-[4px] font-raj underline underline-offset-4 decoration-[#19AE00] decoration-4 decoration-solid bg-transparent border-2 border-white py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">0x181871415415418148</Button>   */}

          {account ? 
            (
            <> 
            <Button onClick={() => (window as any).Telegram.WebApp.openLink(`https://taikoscan.io/address/${account.address}`)} className="inline-flex items-center gap-2 rounded-[4px] font-raj underline underline-offset-4 decoration-[#19AE00] decoration-4 decoration-solid bg-transparent border-2 border-white py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">{shortenAddress(account.address)}</Button>  
            </>
            ) 
          : (
              <p className="text-sm text-zinc-400">fetching smart account</p>
            )}      

      </div>
       <div className="flex items-center gap-2">
              <Image
              src='/logos/RL.png'
              alt=''
              height={23}
              width={33}
              />
            </div>
            <div className="flex items-center gap-2">
              <Image
              src='/logos/OP.png'
              alt=''
              height={60}
              width={60}
              />
            </div>
            <div className="text-[#FF0000] text-xs flex flex-col items-end gap-2">
            <Image
              src='/logos/thirdweeb.png'
              alt=''
              height={20}
              width={33}
              />
            </div>
          </div>
          </main>
)
}

export default Header