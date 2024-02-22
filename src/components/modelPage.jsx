import React from 'react'
import ContractModel from './contractModel'

function ModelPage() {
    return (

            <div className="w-[80%] md:max-w-[80%] flex  flex-col items-center justify-center mt-[0px] max-md:mt-[-100px] max-sm:mt-[-100px] max-sm:p-[10px] ">
                <div className=' w-[70%] mt-[0px]'>
                    <div class="flex flex-col p-2 m-h-screen">

                        <div class=" dark:bg-[rgb(36,37,38)] items-center justify-between w-full flex rounded-full shadow-lg p-2 mb-3 sticky" style={{ marginTop: '5px' }}>

                            <div>

                                <div class="p-2 mr-1 rounded-full hover:bg-white dark:hover:bg-[rgb(75,85,99)] cursor-pointer">

                                    <svg class="h-6 w-6 text-gray-500 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                                    </svg>

                                </div>

                            </div>

                            <input class="font-bold rounded-full w-full py-3 pl-4 text-gray-700 dark:text-white bg-gray-100 dark:bg-[rgb(50,50,50)] leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs" type="text" placeholder="Search" />

                            <div class="bg-gray-600 p-2 hover:bg-blue-400 cursor-pointer mx-2 rounded-full">

                                <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                </svg>

                            </div>

                        </div>
                    </div>


                </div>
                <div className='w-[90%] flex gap-x-5 gap-y-7 flex-wrap items-center justify-center'>
                    {/* <div onClick={handleUniswapModalShow} className=' w-[200px] h-[100px] bg-[blue] flex justify-center items-center text-white text-[20px] cursor-pointer'>
                                        uniswap
                                    </div> */}

                    <ContractModel contractName='Uniswap' imgSrc='./images/uniswaplogo.png' click="handleUniswapModalShow" contractTitle='Uniswap Contract' contractDescription='This is contract for uniswap trade.' />
                    <ContractModel contractName='CurveSwap' imgSrc='./images/curve-dao-token-crv-logo.png' click="handleCurveModalShow" contractTitle='Curve Contract' contractDescription='This is contract for CurveSwap trade.' />
                    <ContractModel contractName='MakerDao' imgSrc='./images/maker-mkr-seeklogo.svg' click="handleMakerDaoModalShow" contractTitle='MakerDao' contractDescription='This is contract for MakerDao Vault Management.' />
                    <ContractModel contractName='Aave' imgSrc='./images/aave-aave-logo.png' click="handleAaveModalShow" contractTitle='Aave Contract' contractDescription='This is contract to Deposite to Aave.' />
                    <ContractModel contractName='SupplyInfo' imgSrc='./images/nimiq-exchange-token-logo-png-transparent.png' click="handleSupplyModalShow" contractTitle='SupplyInfo' contractDescription='You can get the information of Total Supply and Maxium Supply.' />
                    <ContractModel contractName='Transfer' imgSrc='./images/The-Transfer-Token-TTT-Logo-Pngsource-DZKBBFLC.png' click="handleTransferModalShow" contractTitle='Transfer' contractDescription='You can transfer your token and USDT to destination address.' />
                    <ContractModel contractName='Stake' imgSrc='./images/xdai-stake-logo.png' click="handleStakeModalShow" contractTitle='Stake' contractDescription='You can Stake your token and get bonus token every month.' />
                    <ContractModel contractName='Mint' imgSrc='./images/pngwing.com.png' click="handleMintModalShow" contractTitle='Mint' contractDescription='You can mint the token here.' />

                    {/* 
                                    <div onClick={handleAaveModalShow} className=' w-[200px] h-[100px] bg-[blue] flex justify-center items-center text-white text-[20px] cursor-pointer'>
                                        Aave
                                    </div>
                                    <div onClick={handleSupplyModalShow} className=' w-[200px] h-[100px] bg-[blue] flex justify-center items-center text-white text-[20px] cursor-pointer'>
                                        SupplyInfo
                                    </div>
                                    <div onClick={handleTransferModalShow} className=' w-[200px] h-[100px] bg-[blue] flex justify-center items-center text-white text-[20px] cursor-pointer'>
                                        Transfer
                                    </div>
                                    <div onClick={handleStakeModalShow} className=' w-[200px] h-[100px] bg-[blue] flex justify-center items-center text-white text-[20px] cursor-pointer'>
                                        Stake
                                    </div>
                                    <div onClick={handleMintModalShow} className=' w-[200px] h-[100px] bg-[blue] flex justify-center items-center text-white text-[20px] cursor-pointer'>
                                        Mint
                                    </div> */}
                </div>

            </div>
    )
}

export default ModelPage