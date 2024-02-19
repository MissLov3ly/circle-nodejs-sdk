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
 * Retail account (individual consumer account) or Business account (e.g. sole prop, LLC, corporation).
 * @export
 * @enum {string}
 */

export const ACHBankAccountType = {
  Retail: "retail",
  Business: "business"
} as const;

export type ACHBankAccountType =
  typeof ACHBankAccountType[keyof typeof ACHBankAccountType];
