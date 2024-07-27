import { Token } from './Token';
import { ITokenTransfer } from '../reducers/tokensTransfersReducer';

export class VeChainToken extends Token {
  protected readonly name;
  protected readonly tokenDecimals = 18;
  protected readonly abi;
  protected readonly address;

  constructor(web3) {
    super(web3);
    this.name = 'VeChain';
    this.abi = [{ constant: true, inputs: [], name: 'name', outputs: [{ name: '', type: 'string' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_spender', type: 'address' }, { name: '_amount', type: 'uint256' }], name: 'approve', outputs: [{ name: 'success', type: 'bool' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_newOwner', type: 'address' }], name: 'setOwner', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'totalSupply', outputs: [{ name: 'supply', type: 'uint256' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_from', type: 'address' }, { name: '_to', type: 'address' }, { name: '_amount', type: 'uint256' }], name: 'transferFrom', outputs: [{ name: 'success', type: 'bool' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'decimals', outputs: [{ name: '', type: 'uint8' }], payable: false, type: 'function' }, { constant: false, inputs: [], name: 'seal', outputs: [], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_bonus', type: 'uint256' }], name: 'offerBonus', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'isSealed', outputs: [{ name: '', type: 'bool' }], payable: false, type: 'function' }, { constant: true, inputs: [{ name: '_owner', type: 'address' }], name: 'balanceOf', outputs: [{ name: 'balance', type: 'uint256' }], payable: false, type: 'function' }, { constant: true, inputs: [{ name: '_owner', type: 'address' }], name: 'lastMintedTimestamp', outputs: [{ name: '', type: 'uint32' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'owner', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'symbol', outputs: [{ name: '', type: 'string' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_to', type: 'address' }, { name: '_amount', type: 'uint256' }], name: 'transfer', outputs: [{ name: 'success', type: 'bool' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_owner', type: 'address' }, { name: '_amount', type: 'uint256' }, { name: '_isRaw', type: 'bool' }, { name: 'timestamp', type: 'uint32' }], name: 'mint', outputs: [], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_spender', type: 'address' }, { name: '_value', type: 'uint256' }, { name: '_extraData', type: 'bytes' }], name: 'approveAndCall', outputs: [{ name: 'success', type: 'bool' }], payable: false, type: 'function' }, { constant: true, inputs: [{ name: '_owner', type: 'address' }, { name: '_spender', type: 'address' }], name: 'allowance', outputs: [{ name: 'remaining', type: 'uint256' }], payable: false, type: 'function' }, { inputs: [], payable: false, type: 'constructor' }, { payable: false, type: 'fallback' }, { anonymous: false, inputs: [{ indexed: true, name: '_from', type: 'address' }, { indexed: true, name: '_to', type: 'address' }, { indexed: false, name: '_value', type: 'uint256' }], name: 'Transfer', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, name: '_owner', type: 'address' }, { indexed: true, name: '_spender', type: 'address' }, { indexed: false, name: '_value', type: 'uint256' }], name: 'Approval', type: 'event' }];
    this.address = '0xD850942eF8811f2A866692A623011bDE52a462C1';
    this.init();
  }

  protected ProcessTransfer(transferObj: any): { from: string, to: string, amount: string } {
    const { _from, _to, _value } = transferObj.args;
    return { from: _from, to: _to, amount: this.amountToStr(_value) };
  }
}