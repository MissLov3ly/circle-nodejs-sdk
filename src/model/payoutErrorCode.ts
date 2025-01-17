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
* Indicates the failure reason of a payout. Only present for payouts in failed state. Possible values are [`insufficient_funds`, `transaction_denied`, `transaction_failed`, `transaction_returned`, `bank_transaction_error`, `fiat_account_limit_exceeded`, `invalid_bank_account_number`, `invalid_ach_rtn`, `invalid_wire_rtn`, `vendor_inactive`]\'
*/
export enum PayoutErrorCode {
    InsufficientFunds = <any> 'insufficient_funds',
    TransactionDenied = <any> 'transaction_denied',
    TransactionFailed = <any> 'transaction_failed',
    TransactionReturned = <any> 'transaction_returned',
    BankTransactionError = <any> 'bank_transaction_error',
    FiatAccountLimitExceeded = <any> 'fiat_account_limit_exceeded',
    InvalidBankAccountNumber = <any> 'invalid_bank_account_number',
    InvalidAchRtn = <any> 'invalid_ach_rtn',
    InvalidWireRtn = <any> 'invalid_wire_rtn',
    VendorInactive = <any> 'vendor_inactive'
}
