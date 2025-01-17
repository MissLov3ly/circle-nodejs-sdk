/* tslint:disable */
/* eslint-disable */
/**
 * All Circle APIs
 * Circle\'s General, Core Functionality, Payments, Payouts, and Accounts APIs bundled into one OpenAPI Specification.
 *
 * The version of the OpenAPI document: 1.0.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Enumerated reason for a returned payment. Providing this reason in the request is recommended (to improve risk evaluation) but not required.
 * @export
 * @enum {string}
 */

export const ReversalReason = {
  Duplicate: "duplicate",
  Fraudulent: "fraudulent",
  RequestedByCustomer: "requested_by_customer",
  BankTransactionError: "bank_transaction_error",
  InvalidAccountNumber: "invalid_account_number",
  InsufficientFunds: "insufficient_funds",
  PaymentStoppedByIssuer: "payment_stopped_by_issuer",
  PaymentReturned: "payment_returned",
  BankAccountIneligible: "bank_account_ineligible",
  InvalidAchRtn: "invalid_ach_rtn",
  UnauthorizedTransaction: "unauthorized_transaction",
  PaymentFailed: "payment_failed"
} as const;

export type ReversalReason = typeof ReversalReason[keyof typeof ReversalReason];
