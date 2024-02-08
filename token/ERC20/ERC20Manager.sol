// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v4.7.0) (token/ERC20/ERC20.sol)

pragma solidity ^0.8.0;


import "../../openzeppelin/token/ERC20/IERC20.sol";
import "../../openzeppelin/token/ERC20/extensions/IERC20Metadata.sol";
import "../../openzeppelin/utils/Context.sol";

contract ERC20Manager {


    function totalSupply(address token) public view virtual returns (uint256) {
        return IERC20(token).totalSupply();
    }
    
    /**
     * @dev See {IERC20-balanceOf}.
     */
    function balanceOf(address token, address account) public view virtual returns (uint256) {
        return IERC20(token).balanceOf(account);
    }

    /**
     * @dev See {IERC20-allowance}.
     */


    function allowance(address token, address owner, address spender) public view virtual returns (uint256) {
        return IERC20(token).allowance(owner, spender);
    }

}
