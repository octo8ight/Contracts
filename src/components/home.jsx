import React from 'react'
import { ProgressBar } from 'react-bootstrap';
import CurrencyItem from './CurrencyItem';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useContractRead, useContractWrite } from 'wagmi';
import { PRESALE_CONTRACT_ADDRESS, USDT_CONTRACT_ADDRESS } from '../utils/env';
import * as antdModel from "../utils/antdmodal.css";
import * as  presaleContractABI from '../token_presale_abi.json';
import * as  erc20ContractABI from '../token_abi.json';
import { useCallback } from 'react';
import { parseEther } from 'viem';
import { Input, Modal, Button } from "antd";
import { InView } from "react-intersection-observer";
import { Zoom, Fade, Bounce } from 'react-reveal';

const HomePage = () => {

    const { abi } = presaleContractABI
    const { abi: erc20ABI } = erc20ContractABI

    const [selectedCurrency, setSelectedCurrency] = React.useState(null);
    const { write: buyWithUSDT } = useContractWrite({
        address: PRESALE_CONTRACT_ADDRESS,
        abi: abi,
        functionName: 'buyWithUSDT'
    })

    const { write: buyTokens } = useContractWrite({
        address: PRESALE_CONTRACT_ADDRESS,
        abi: abi,
        functionName: 'buyTokens'
    })

    const { writeAsync: approve } = useContractWrite({
        address: USDT_CONTRACT_ADDRESS,
        abi: erc20ABI,
        functionName: 'approve'
    })

    const handleCurrencyClick = (currency) => {
        setSelectedCurrency(currency);
    };

    const [transferValue, setTransferValue] = React.useState(0);
    const [totalSupplyValue, setTotalSupplyValue] = React.useState(0);
    const [maxiumSupplyValue, setMaxiumSupplyValue] = React.useState(0);
    const [stakeAmount, setStakeAmount] = React.useState(0);
    const [totalStakeAmount, setTotalStakeAmount] = React.useState(0);
    const [address, setAddress] = React.useState('');


    const handleBuyButton = useCallback(async (address, currency) => {

        if (currency === 'USDT') {
            await approve({ args: [PRESALE_CONTRACT_ADDRESS, transferValue * 1000000], from: address });
            buyWithUSDT({ args: [transferValue], from: address });
        }

        if (currency === 'ETH') {

            buyTokens({
                value: parseEther(transferValue.toString()),
                from: address
            })
        }


    }, [buyTokens, buyWithUSDT, approve, transferValue])

    const [show, setShow] = React.useState(false);


    const openBuyModal = () => (
        console.log('1')
    )

    return (
        <InView onChange={(inView) => setShow(inView)}>
            <div className="absolute w-full opacity-[0.2] top-[0px] left-0 bg-contain bg-no-repeat"
                style={{ height: '100%', boxShadow: 'inset rgba(0, 0, 0, 0.5) 0px 3px 8px 0px' }}>
            </div>

            <div id="home" className="relative z-[2] dark:bg-[rgb(49,51,56)] transition-all">
                <div className="pt-[150px] h-[881px] flex justify-center items-center">
                    <div className="w-full mx-auto main-visual flex flex-col">
                        <div className="flex flex-row items-center justify-between main-visual">
                            <div className="w-full md:max-w-[50%] flex flex-col items-center justify-center mt-[-150px] max-md:mt-[-100px] max-sm:mt-[-100px] max-sm:p-[10px] ">
                                <div className='dark:bg-[rgb(43,45,49)] transition-all px-[0px] buy-usdt flex flex-col items-center justify-center border-gray-500 rounded-[1rem] shadow-2xl' style={{ boxShadow: 'rgba(0, 0, 0, 0.5) 0px 3px 8px 0px' }}>
                                    <div className='bg-[#fff] dark:bg-[rgb(43,45,49)] transition-all flex flex-col items-center rounded-t-[1rem] w-full'>
                                        <div className='flex flex-col items-center justify-center px-8 py-2'>
                                            <span className='flex dark:text-white transition-all' style={{ fontFamily: 'Might', fontWeight: '700', fontSize: '22px' }}>Welcome to the Commune</span>
                                        </div>
                                    </div>

                                    <div className='flex flex-row justify-between py-1 px-4 w-full bg-[#fff] dark:bg-[rgb(43,45,49)] transition-all'>
                                        <CurrencyItem
                                            image="/images/eth.svg"
                                            label="ETH"
                                            isSelected={selectedCurrency === 'ETH'}
                                            onClick={() => handleCurrencyClick('ETH')}
                                        />

                                        <CurrencyItem
                                            image="/images/usdt.svg"
                                            label="USDT"
                                            isSelected={selectedCurrency === 'USDT'}
                                            onClick={() => handleCurrencyClick('USDT')}
                                        />

                                    </div>
                                    <div className='flex bg-[#fff] dark:bg-[rgb(43,45,49)] flex-col w-full'>

                                        <div className='flex bg-[#fff] dark:bg-[rgb(43,45,49)] px-8 items-center justify-between w-full mt-[20px]'>
                                            <span className='  dark:text-white' style={{ fontFamily: 'Might' }}>
                                                Supply Infomation
                                            </span>
                                        </div>

                                        <div className='flex bg-slate-300 dark:bg-gray-500 my-2 mx-auto items-center justify-between w-[90%] h-[1px] ' />                                     
                                        <div className='flex flex-col items-center justify-center w-full sm:flex-row gap-4 dark:bg-[rgb(43,45,49)]'>
                                            <div className='flex flex-col items-center justify-center md:w-80% mb-4 w-[45%]'>
                                                <span className=' text-[14px] ml-[55px] w-full items-start text-gray-500' style={{ fontFamily: 'Smack' }}>TOTAL SUPPLY</span>
                                                <div className='flex flex-col rounded-[0.5rem] bg-[#fff] dark:bg-[rgb(30,31,34)] py-2 px-4 dark:shadow-none' style={{ boxShadow: 'rgb(109 177 255 / 98%) 0.5px 0.5px 3.5px 0.5px' }}>

                                                    <div className='flex flex-row items-center justify-center'>
                                                        <input value={totalSupplyValue} disabled className='border-none dark:bg-[rgb(30,31,34)]  dark:text-white outline-none appearance-none w-[90%]' type='text' inputMode='numeric' onChange={({ target: { value } }) => {                           
                                                        }} />
                                                        <span className=' dark:text-white' style={{ marginLeft: '0.5rem', fontFamily: 'Smack', height: '1.9rem' }}>{selectedCurrency === 'ETH' ? 'ETH' : 'USD'}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex flex-col items-center justify-center md:w-80% mb-4 w-[45%]'>
                                                <span className=' text-[14px] ml-[55px] w-full items-start text-gray-500' style={{  fontFamily: 'Smack' }}>MAXIUM SUPPLY</span>
                                                <div className='flex flex-col rounded-[0.5rem] bg-[#fff] dark:bg-[rgb(30,31,34)] py-2 px-4' style={{ boxShadow: 'rgb(109 177 255 / 98%) 0.5px 0.5px 3.5px 0.5px' }}>

                                                    <div className='flex flex-row items-center justify-center'>
                                                        <input value={maxiumSupplyValue} disabled className='border-none dark:bg-[rgb(30,31,34)] dark:text-white outline-none appearance-none w-[90%]' type='text' inputMode='numeric' onChange={({ target: { value } }) => {                           
                                                        }} />
                                                        <span className=' dark:text-white' style={{  marginLeft: '0.5rem', fontFamily: 'Smack', height: '1.9rem' }}>{selectedCurrency === 'ETH' ? 'ETH' : 'USD'}</span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>


                                    <div className='flex bg-[#fff] dark:bg-[rgb(43,45,49)] flex-col w-full'>

                                        <div className='flex bg-[#fff] dark:bg-[rgb(43,45,49)] px-8 items-center justify-between w-full mt-[0px]'>
                                            <span className=' dark:text-white' style={{ fontFamily: 'Might' }}>
                                                Transfer
                                            </span>
                                        </div>

                                        <div className='flex bg-slate-300 dark:bg-gray-500  my-2 mx-auto items-center justify-between w-[90%] h-[1px]' />
                                        <div className='flex flex-col items-center justify-center mb-2 w-[90%]  m-auto'>
                                            <span className=' text-[14px] text-start items-start w-full ml-[25px] text-gray-500' style={{ fontFamily: 'Smack' }}>To</span>
                                            <div className='flex flex-col rounded-[0.5rem] bg-[#fff] dark:bg-[rgb(30,31,34)]  py-2 px-7 w-full' style={{ boxShadow: 'rgb(109 177 255 / 98%) 0.5px 0.5px 3.5px 0.5px' }}>
                                                <div className='flex items-center justify-center'>
                                                    <input value={address} className='border-none outline-none dark:bg-[rgb(30,31,34)] dark:text-white appearance-none w-[90%] h-[30px]' type='text' onChange={({ target: { value } }) => {
                                                        setAddress(value);
                                                    }} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col items-center justify-center w-full sm:flex-row gap-4'>
                                            <div className='flex flex-col items-center justify-center md:w-80% mb-4 w-[45%]'>
                                                <span className=' text-[14px] ml-[55px] w-full items-start text-gray-500' style={{  fontFamily: 'Smack' }}>AMOUNT</span>
                                                <div className='flex flex-col rounded-[0.5rem] bg-[#fff] dark:bg-[rgb(30,31,34)] py-2 px-4' style={{ boxShadow: 'rgb(109 177 255 / 98%) 0.5px 0.5px 3.5px 0.5px' }}>

                                                    <div className='flex flex-row items-center justify-center'>
                                                        <input value={transferValue} className='border-none dark:bg-[rgb(30,31,34)] dark:text-white outline-none appearance-none w-[90%]' type='text' inputMode='numeric' onChange={({ target: { value } }) => {
                                                            if (!isNaN(value)) {
                                                                setTransferValue(value);
                                                            }
                                                        }} />
                                                        <span className=' dark:text-white' style={{  marginLeft: '0.5rem', fontFamily: 'Smack', height: '1.9rem' }}>{selectedCurrency === 'ETH' ? 'ETH' : 'USD'}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex flex-col items-center justify-center mb-4 w-[45%] mt-[23px]'>
                                                <button onClick={() => console.log('1')} type="button" style={{ fontFamily: 'Might', fontSize: '20px' }} className="flex p-2 bg-[#256fc4] text-white items-center justify-center focus:outline-none border rounded-[0.5rem] w-full hover:bg-[#6db1ff]">
                                                    Transfer Now
                                                </button>
                                            </div>

                                        </div>

                                    </div>
                                    <div className='flex bg-[#fff] dark:bg-[rgb(43,45,49)] flex-col w-full'>

                                        <div className='flex bg-[#fff] dark:bg-[rgb(43,45,49)] px-8 items-center justify-between w-full mt-[0px]'>
                                            <span className=' dark:text-white' style={{ fontFamily: 'Might' }}>
                                                Staking
                                            </span>
                                        </div>

                                        <div className='flex bg-slate-300 dark:bg-gray-500 my-2 mx-auto items-center justify-between w-[90%] h-[1px]' />

                                        <div className='flex items-center justify-center w-full max-sm:flex-col gap-2'>
                                            <div className='flex flex-col items-center justify-center md:w-80% mb-4 w-[150px]'>
                                                <span className=' text-[14px] text-start items-start w-full ml-[25px] text-gray-500' style={{  fontFamily: 'Smack' }}>TOTAL</span>

                                                <div className='flex flex-col rounded-[0.5rem] bg-[#fff] dark:bg-[rgb(30,31,34)] py-2 px-4' style={{ boxShadow: 'rgb(109 177 255 / 98%) 0.5px 0.5px 3.5px 0.5px' }}>

                                                    <div className='flex flex-row items-center justify-center'>
                                                        <input value={totalStakeAmount} disabled className='border-none dark:bg-[rgb(30,31,34)] dark:text-white outline-none appearance-none w-[90%]' type='text' inputMode='numeric' onChange={({ target: { value } }) => {
                    
                                                        }} />
                                                        <span className=' dark:text-white' style={{ marginLeft: '0.5rem', fontFamily: 'Smack', height: '1.9rem' }}>{selectedCurrency === 'ETH' ? 'ETH' : 'USD'}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex flex-col items-center justify-center md:w-80% mb-4 w-[150px]'>
                                                <span className=' text-[14px] text-start items-start w-full ml-[25px] text-gray-500' style={{  fontFamily: 'Smack' }}>AMOUNT</span>

                                                <div className='flex flex-col rounded-[0.5rem] bg-[#fff] dark:bg-[rgb(30,31,34)] py-2 px-4' style={{ boxShadow: 'rgb(109 177 255 / 98%) 0.5px 0.5px 3.5px 0.5px' }}>

                                                    <div className='flex flex-row items-center justify-center'>
                                                        <input value={stakeAmount} className='border-none outline-none appearance-none w-[90%] dark:text-white dark:bg-[rgb(30,31,34)]' type='text' inputMode='numeric' onChange={({ target: { value } }) => {
                                                            if (!isNaN(value)) {
                                                                setStakeAmount(value);
                                                            }
                                                        }} />
                                                        <span className=' dark:text-white' style={{  marginLeft: '0.5rem', fontFamily: 'Smack', height: '1.9rem' }}>{selectedCurrency === 'ETH' ? 'ETH' : 'USD'}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex flex-col items-center justify-center mb-4 w-[150px] mt-[22px]'>
                                                <button onClick={() => console.log('1')} type="button" style={{ fontFamily: 'Might', fontSize: '20px' }} className="flex p-2 bg-[#256fc4] text-white items-center justify-center focus:outline-none border rounded-[0.5rem] w-full hover:bg-[#6db1ff]">
                                                    Stake Now
                                                </button>
                                            </div>
                                        </div>


                                    </div>
                                    <div className='flex bg-[#fff] dark:bg-[rgb(43,45,49)] flex-col w-full items-center justify-center py-2 px-4 rounded-bottom-4 pb-2'>

                                        <ConnectButton.Custom>
                                            {({
                                                account,
                                                chain,
                                                openAccountModal,
                                                openChainModal,
                                                openConnectModal,
                                                authenticationStatus,
                                                mounted,
                                            }) => {
                                                // Note: If your app doesn't use authentication, you
                                                // can remove all 'authenticationStatus' checks
                                                const ready = mounted && authenticationStatus !== 'loading';
                                                const connected =
                                                    ready &&
                                                    account &&
                                                    chain &&
                                                    (!authenticationStatus ||
                                                        authenticationStatus === 'authenticated');

                                                return (
                                                    <div
                                                        {...(!ready && {
                                                            'aria-hidden': true,
                                                            'style': {
                                                                opacity: 0,
                                                                pointerEvents: 'none',
                                                                userSelect: 'none',
                                                            },
                                                        })}
                                                        style={{ width: '100%' }}
                                                    >
                                                        {(() => {
                                                            if (!connected) {
                                                                return (
                                                                    <button onClick={openConnectModal} type="button" style={{ fontFamily: 'Might', fontSize: '20px', marginBottom: '1rem', transition: '0.1s' }} className="flex p-2 bg-[#256fc4] text-white items-center justify-center focus:outline-none border rounded-[0.5rem] w-full hover:bg-[#6db1ff]">
                                                                        Connect Wallet
                                                                    </button>
                                                                );
                                                            }

                                                            if (chain.unsupported) {
                                                                return (
                                                                    <button onClick={openChainModal} type="button">
                                                                        Wrong network
                                                                    </button>
                                                                );
                                                            }

                                                            return (
                                                                <div style={{ display: 'flex', gap: 12 }} className='flex flex-col items-center justify-center'>
                                                                    <button
                                                                        onClick={openChainModal}
                                                                        style={{ display: 'flex', alignItems: 'center' }}
                                                                        type="button"
                                                                        className=' dark:text-white'
                                                                    >
                                                                        {chain.hasIcon && (
                                                                            <div
                                                                                style={{
                                                                                    background: chain.iconBackground,
                                                                                    width: 12,
                                                                                    height: 12,
                                                                                    borderRadius: 999,
                                                                                    overflow: 'hidden',
                                                                                    marginRight: 4,
                                                                                }}
                                                                            >
                                                                                {chain.iconUrl && (
                                                                                    <img
                                                                                        alt={chain.name ?? 'Chain icon'}
                                                                                        src={chain.iconUrl}
                                                                                        style={{ width: 12, height: 12 }}
                                                                                    />
                                                                                )}
                                                                            </div>
                                                                        )}
                                                                        {chain.name}
                                                                    </button>

                                                                    <button onClick={() => handleBuyButton(account.address, selectedCurrency)} type="button" style={{ fontFamily: 'Might', fontSize: '20px', marginBottom: '1rem' }} className="flex p-2 bg-[#256fc4] text-white items-center justify-center focus:outline-none border rounded-[0.5rem] w-full hover:bg-[#6db1ff]">
                                                                        Buy Now
                                                                    </button>

                                                                    <button onClick={openAccountModal} className=' dark:text-white' type="button">
                                                                        {account.displayName}
                                                                        {account.displayBalance
                                                                            ? ` (${account.displayBalance})`
                                                                            : ''}
                                                                    </button>

                                                                </div>
                                                            );
                                                        })()}
                                                    </div>
                                                );
                                            }}
                                        </ConnectButton.Custom>

                                    </div>

                                </div>
                            </div>

                            <div className='hidden md:flex md:flex-col items-center justify-end w-[50%] mt-[-60px]'>
                                {
                                    show && (
                                        <Fade right cascade>
                                            <img src="./images/CubesShufflingGIF.gif" className="mt-[-200px] max-w-[720px] max-h-[680px]" alt="" />
                                        </Fade>
                                    )
                                }

                                {
                                    show && (
                                        <Fade right cascade>
                                            <div className="pt-[50px] w-full">
                                                <h1 className=" text-4xl pb-3 dark:text-white text-center">
                                                    Welcome to the <span className="text-[#ffb4ed] dark:text-[#FFD6F5] hover:animate-pulse duration-500">commune</span>! 👋
                                                </h1>
                                                <p className="hero__subtitle text-2xl text-center dark:text-white">
                                                    A place for <span className="text-[#ffb4ed] dark:text-[#FFD6F5]">everyone</span> to <span className="text-[#6db1ff] dark:text-[#6db1ff]">develop</span>, <span className="text-[#FF8F8F]  dark:text-[#FF8F8F]">design</span>, and <span className="text-[#ffef40] dark:text-[#FFF7A1]">create</span>.
                                                </p>
                                            </div>
                                        </Fade>
                                    )
                                }

                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </InView>
    )

}

export default HomePage;
