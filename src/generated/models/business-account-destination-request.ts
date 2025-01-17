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
 * The destination bank account.
 * @export
 * @interface BusinessAccountDestinationRequest
 */
export interface BusinessAccountDestinationRequest {
  /**
   *
   * @type {string}
   * @memberof BusinessAccountDestinationRequest
   */
  type: BusinessAccountDestinationRequestTypeEnum;
  /**
   * Unique system generated identifier for the entity.
   * @type {string}
   * @memberof BusinessAccountDestinationRequest
   */
  id: string;
}

export const BusinessAccountDestinationRequestTypeEnum = {
  Wire: "wire",
  Sen: "sen"
} as const;

export type BusinessAccountDestinationRequestTypeEnum =
  typeof BusinessAccountDestinationRequestTypeEnum[keyof typeof BusinessAccountDestinationRequestTypeEnum];
