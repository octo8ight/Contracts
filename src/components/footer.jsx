import React from "react";

const FooterPage = () => {

    return (
        <>
            <footer className="py-[15px] relative" style={{ boxShadow: 'rgba(0, 0, 0, 0.5) 0px 3px 8px 0px' }}>
                <div className="flex justify-center items-center">
                    <div className="w-[45%]">
                        <p className="text-center text-white text-[20px]" style={{ fontFamily: 'Mansalva' }}>© 2024 $BEN10 All Rights Reserved</p>
                        <p className=" text-center text-white"> Disclaimer: Cryptocurrency may be unregulated in your jurisdiction. The value of cryptocurrencies may go down as well as up. Profits may be subject to capital gains or other taxes applicable in your jurisdiction.</p>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </footer>
        </>
    )

}

export default FooterPage
