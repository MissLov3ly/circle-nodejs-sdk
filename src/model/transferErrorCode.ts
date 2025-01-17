/**
 * Core Functionality
 * APIs for managing your account balance. These endpoints are available with all Circle APIs.
 *
 * The version of the OpenAPI document: ${version}
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
* Indicates the failure reason of a transfer. Only present for transfers in a `failed` state. Possible values are `insufficient_funds`, `blockchain_error` and `transfer_denied` and `transfer_failed`
*/
export enum TransferErrorCode {
    TransferFailed = <any> 'transfer_failed',
    TransferDenied = <any> 'transfer_denied',
    BlockchainError = <any> 'blockchain_error',
    InsufficientFunds = <any> 'insufficient_funds'
}
