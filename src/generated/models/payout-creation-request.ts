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

import { BankDestination } from "./bank-destination";
import { FiatMoneyUsd } from "./fiat-money-usd";
import { MetadataPayout } from "./metadata-payout";
import { WalletLocation } from "./wallet-location";

/**
 *
 * @export
 * @interface PayoutCreationRequest
 */
export interface PayoutCreationRequest {
  /**
   * Universally unique identifier (UUID v4) idempotency key. This key is utilized to ensure exactly-once execution of mutating requests.
   * @type {string}
   * @memberof PayoutCreationRequest
   */
  idempotencyKey: string;
  /**
   *
   * @type {WalletLocation}
   * @memberof PayoutCreationRequest
   */
  source?: WalletLocation;
  /**
   *
   * @type {BankDestination}
   * @memberof PayoutCreationRequest
   */
  destination: BankDestination;
  /**
   *
   * @type {FiatMoneyUsd}
   * @memberof PayoutCreationRequest
   */
  amount: FiatMoneyUsd;
  /**
   *
   * @type {MetadataPayout}
   * @memberof PayoutCreationRequest
   */
  metadata: MetadataPayout;
}