pragma solidity ^0.8.0;

interface IUniswapV2Router {
    function swapExactTokensForTokens(
        uint amountIn,
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external returns (uint[] memory amounts);
    // Other functions...
}

contract MyUniswapInteraction {
    IUniswapV2Router public uniswapRouter;
    
    constructor(address _routerAddress) {
        uniswapRouter = IUniswapV2Router(_routerAddress);
    }

    function swapTokensForTokens(
        uint amountIn,
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external {
        uniswapRouter.swapExactTokensForTokens(
            amountIn,
            amountOutMin,
            path,
            to,
            deadline
        );
    }
}
