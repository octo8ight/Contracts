pragma solidity ^0.8.0;

interface IMakerDAO {
    function openCDP() external returns (bytes32 cup);
    function lockETH(bytes32 cup, uint wad) external;
    function drawDAI(bytes32 cup, uint wad) external;
    // Other functions...
}

contract MyMakerDAOInteraction {
    IMakerDAO public makerDAO;
    
    constructor(address _makerDAOAddress) {
        makerDAO = IMakerDAO(_makerDAOAddress);
    }

    function openAndLockCDP(
        uint lockAmount,
        uint drawAmount
    ) external {
        bytes32 cup = makerDAO.openCDP();
        makerDAO.lockETH(cup, lockAmount);
        makerDAO.drawDAI(cup, drawAmount);
    }
}
