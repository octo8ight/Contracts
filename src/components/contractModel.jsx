import React from 'react'
import ModalPan from './modal';
import SupplyModal from './supplyModal';
import TransferModal from './transfer';
import StakingModal from './StakingModal';
import MintModal from './mintModal';
import UniswapModal from './uniswapModal';
import CurveModal from './curveModal';
import MakerDaoModal from './MakerDaoModal';
import AaveModal from './AaveModal';
import * as antdModel from "../utils/antdmodal.css";
import { Input, Modal, Button } from "antd";

function ContractModel(props) {
    const [isShowModalOpen, setIsShowModalOpen] =
        React.useState(false);
    const [isShowSupplyModalOpen, setIsShowSupplyModalOpen] =
        React.useState(false);
    const [isShowTransferModalOpen, setIsShowTransferModalOpen] =
        React.useState(false);
    const [isShowStakeModalOpen, setIsShowStakeModalOpen] =
        React.useState(false);
    const [isShowMintModalOpen, setIsShowMintModalOpen] =
        React.useState(false);
    const [isShowUniswapModalOpen, setIsShowUniswapModalOpen] =
        React.useState(false);
    const [isShowCurveModalOpen, setIsShowCurveModalOpen] =
        React.useState(false);
    const [isShowMakerDaoModalOpen, setIsShowMakerDaoModalOpen] =
        React.useState(false);
    const [isShowAaveModalOpen, setIsShowAaveModalOpen] =
        React.useState(false);
    const handleModalShow = () => {
        setIsShowModalOpen(true);
    };
    const handleModalShowCancel = () => {
        setIsShowModalOpen(false);
    };
    const handleSupplyModalShow = () => {
        setIsShowSupplyModalOpen(true);
    };
    const handleSupplyModalShowCancel = () => {
        setIsShowSupplyModalOpen(false);
    };
    const handleTransferModalShow = () => {
        setIsShowTransferModalOpen(true);
    };
    const handleTransferModalShowCancel = () => {
        setIsShowTransferModalOpen(false);
    };
    const handleStakeModalShow = () => {
        setIsShowStakeModalOpen(true);
    };
    const handleStakeModalShowCancel = () => {
        setIsShowStakeModalOpen(false);
    };
    const handleMintModalShow = () => {
        setIsShowMintModalOpen(true);
    };
    const handleMintModalShowCancel = () => {
        setIsShowMintModalOpen(false);
    };
    const handleUniswapModalShow = () => {
        setIsShowUniswapModalOpen(true);
    };
    const handleUniswapModalShowCancel = () => {
        setIsShowUniswapModalOpen(false);
    };
    const handleCurveModalShow = () => {
        setIsShowCurveModalOpen(true);
    };
    const handleCurveModalShowCancel = () => {
        setIsShowCurveModalOpen(false);
    };
    const handleMakerDaoModalShow = () => {
        setIsShowMakerDaoModalOpen(true);
    };
    const handleMakerDaoModalShowCancel = () => {
        setIsShowMakerDaoModalOpen(false);
    };
    const handleAaveModalShow = () => {
        setIsShowAaveModalOpen(true);
    };
    const handleAaveModalShowCancel = () => {
        setIsShowAaveModalOpen(false);
    };
    const OpenModel = () => {
        switch (props.click){
            case 'handleUniswapModalShow': handleUniswapModalShow(); break
            case 'handleCurveModalShow': handleCurveModalShow(); break
            case 'handleMakerDaoModalShow': handleMakerDaoModalShow(); break
            case 'handleAaveModalShow': handleAaveModalShow(); break
            case 'handleSupplyModalShow': handleSupplyModalShow(); break
            case 'handleTransferModalShow': handleTransferModalShow(); break
            case 'handleStakeModalShow': handleStakeModalShow(); break
            case 'handleMintModalShow': handleMintModalShow(); break
        }
    };
    return (
        <div>


            <div className='w-[270px]'>
                <div class='flex max-w-sm w-full shadow-md rounded-lg overflow-hidden mx-auto'>

                    <div class="overflow-hidden w-full group rounded-xl relative transform hover:-translate-y-2 transition ease-in-out duration-500 shadow-lg hover:shadow-2xl movie-item text-white movie-card" data-movie-id="438631">
                        <div class="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-[#3067ff] dark:from-[rgb(31,31,31)] via-[#6db1ff] dark:via-[rgb(35,35,35)] to-transparent"></div>
                        <div class="relative z-10 px-6 pt-6 space-y-6">
                            <div class="align-self-end w-full">
                                <div class="space-y-6 detail_info">
                                    <div class="flex flex-col space-y-2 inner">
                                        <a class="relative flex items-center w-min flex-shrink-0 p-1 text-center text-white " data-unsp-sanitized="clean">
                                            {/* <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" viewBox="0 0 20 20" fill="currentColor">
                                                                        <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM9.555 7.168A1 1 0 0 0 8 8v4a1 1 0 0 0 1.555.832l3-2a1 1 0 0 0 0-1.664l-3-2z" clip-rule="evenodd"></path>
                                                                    </svg> */}
                                            <div className=' z-10 w-[100px] h-[100px] ml-[-20px]'>
                                                <img src={props.imgSrc} className=' w-full' alt="" />
                                            </div>
                                            <div class="absolute transition w-[200px] group-hover:opacity-100 opacity-[0.1%] duration-500 ease-in-out transform group-hover:translate-x-[3.6rem] text-[17px] font-bold text-white group-hover:pr-2">{props.contractTitle}</div>
                                        </a>
                                        <h3 class="text-2xl font-bold text-white" data-unsp-sanitized="clean">{props.contractName}</h3>
                                    </div>

                                    <div class="flex flex-col h-[100px]">
                                        <div class="flex flex-col"></div>
                                        <div class="text-[15px] mb-2">Description:</div>
                                        <p class="text-[15px] text-gray-100 mb-6">
                                            {props.contractDescription}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="absolute inset-0 transform w-full -translate-y-4 bg-[#6db1ff] dark:bg-[rgb(35,35,35)]" style={{ filter: "grayscale(0)" }} />
                        <div class="poster__footer flex flex-row relative pb-4 space-x-4 z-10 cursor-pointer">
                            <a
                                class="flex items-center py-2 px-4 rounded-full mx-auto text-white bg-red-500 hover:bg-red-700 dark:bg-[rgb(22,22,22)] dark:hover:bg-gray-600 no-underline"
                                target="_blank"
                                data-unsp-sanitized="clean"
                            >
                                {/* <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg> */}
                                <div class="text-sm text-white ml-2" onClick={OpenModel}>Open Model</div>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
            {isShowModalOpen && (
                <Modal
                    title=""
                    className={{ antdModel }}
                    open={isShowModalOpen}
                    style={{ marginTop: "50px" }}
                    width={"0px"}
                    closeIcon={null}
                    onCancel={handleModalShowCancel}
                    footer={null}
                >
                    <ModalPan />
                </Modal>
            )}
            {isShowSupplyModalOpen && (
                <Modal
                    title=""
                    className={{ antdModel }}
                    open={isShowSupplyModalOpen}
                    style={{ marginTop: "50px" }}
                    width={"0px"}
                    closeIcon={null}
                    onCancel={handleSupplyModalShowCancel}
                    footer={null}
                >
                    <SupplyModal />
                </Modal>
            )}
            {isShowTransferModalOpen && (
                <Modal
                    title=""
                    className={{ antdModel }}
                    open={isShowTransferModalOpen}
                    style={{ marginTop: "50px" }}
                    width={"0px"}
                    closeIcon={null}
                    onCancel={handleTransferModalShowCancel}
                    footer={null}
                >
                    <TransferModal />
                </Modal>
            )}
            {isShowStakeModalOpen && (
                <Modal
                    title=""
                    className={{ antdModel }}
                    open={isShowStakeModalOpen}
                    style={{ marginTop: "50px" }}
                    width={"0px"}
                    closeIcon={null}
                    onCancel={handleStakeModalShowCancel}
                    footer={null}
                >
                    <StakingModal />
                </Modal>
            )}
            {isShowMintModalOpen && (
                <Modal
                    title=""
                    className={{ antdModel }}
                    open={isShowMintModalOpen}
                    style={{ marginTop: "50px" }}
                    width={"0px"}
                    closeIcon={null}
                    onCancel={handleMintModalShowCancel}
                    footer={null}
                >
                    <MintModal />
                </Modal>
            )}
            {isShowUniswapModalOpen && (
                <Modal
                    title=""
                    className={{ antdModel }}
                    open={isShowUniswapModalOpen}
                    style={{ marginTop: "50px" }}
                    width={"0px"}
                    closeIcon={null}
                    onCancel={handleUniswapModalShowCancel}
                    footer={null}
                >
                    <UniswapModal />
                </Modal>
            )}
            {isShowCurveModalOpen && (
                <Modal
                    title=""
                    className={{ antdModel }}
                    open={isShowCurveModalOpen}
                    style={{ marginTop: "50px" }}
                    width={"0px"}
                    closeIcon={null}
                    onCancel={handleCurveModalShowCancel}
                    footer={null}
                >
                    <CurveModal />
                </Modal>
            )}
            {isShowMakerDaoModalOpen && (
                <Modal
                    title=""
                    className={{ antdModel }}
                    open={isShowMakerDaoModalOpen}
                    style={{ marginTop: "50px" }}
                    width={"0px"}
                    closeIcon={null}
                    onCancel={handleMakerDaoModalShowCancel}
                    footer={null}
                >
                    <MakerDaoModal />
                </Modal>
            )}
            {isShowAaveModalOpen && (
                <Modal
                    title=""
                    className={{ antdModel }}
                    open={isShowAaveModalOpen}
                    style={{ marginTop: "50px" }}
                    width={"0px"}
                    closeIcon={null}
                    onCancel={handleAaveModalShowCancel}
                    footer={null}
                >
                    <AaveModal />
                </Modal>
            )}
        </div>
    )
}

export default ContractModel