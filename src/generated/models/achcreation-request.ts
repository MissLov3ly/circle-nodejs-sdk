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

import { ACHBankAccountType } from "./achbank-account-type";
import { ACHBillingDetails } from "./achbilling-details";
import { MetadataCardAndAch } from "./metadata-card-and-ach";

/**
 *
 * @export
 * @interface ACHCreationRequest
 */
export interface ACHCreationRequest {
  /**
   * Universally unique identifier (UUID v4) idempotency key. This key is utilized to ensure exactly-once execution of mutating requests.
   * @type {string}
   * @memberof ACHCreationRequest
   */
  idempotencyKey: string;
  /**
   * The token for the ACH account provided by the processor (Plaid).
   * @type {string}
   * @memberof ACHCreationRequest
   */
  plaidProcessorToken: string;
  /**
   *
   * @type {ACHBillingDetails}
   * @memberof ACHCreationRequest
   */
  billingDetails: ACHBillingDetails;
  /**
   *
   * @type {ACHBankAccountType}
   * @memberof ACHCreationRequest
   */
  bankAccountType?: ACHBankAccountType | null;
  /**
   *
   * @type {MetadataCardAndAch}
   * @memberof ACHCreationRequest
   */
  metadata: MetadataCardAndAch;
}
