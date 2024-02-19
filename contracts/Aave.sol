pragma solidity ^0.8.0;

interface IAave {
    function deposit(address asset, uint256 amount, address onBehalfOf, uint16 referralCode) external;
    function borrow(address asset, uint256 amount, uint256 interestRateMode, uint16 referralCode) external;
    // Other functions...
}

contract MyAaveInteraction {
    IAave public aave;
    
    constructor(address _aaveAddress) {
        aave = IAave(_aaveAddress);
    }

    function depositAndBorrow(
        address asset,
        uint256 depositAmount,
        uint256 borrowAmount,
        uint256 interestRateMode,
        address onBehalfOf,
        uint16 referralCode
    ) external {
        aave.deposit(asset, depositAmount, onBehalfOf, referralCode);
        aave.borrow(asset, borrowAmount, interestRateMode, referralCode);
    }
}
