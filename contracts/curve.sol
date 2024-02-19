pragma solidity ^0.8.0;

interface ICurvePool {
    function exchange(
        int128 i,
        int128 j,
        uint256 dx,
        uint256 min_dy
    ) external;
    // Other functions...
}

contract MyCurveInteraction {
    ICurvePool public curvePool;
    
    constructor(address _curvePoolAddress) {
        curvePool = ICurvePool(_curvePoolAddress);
    }

    function swapStablecoins(
        int128 inputCoinIndex,
        int128 outputCoinIndex,
        uint256 inputAmount,
        uint256 minOutputAmount
    ) external {
        curvePool.exchange(
            inputCoinIndex,
            outputCoinIndex,
            inputAmount,
            minOutputAmount
        );
    }
}
