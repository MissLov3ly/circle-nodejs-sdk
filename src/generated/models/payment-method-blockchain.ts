/* tslint:disable */
/* eslint-disable */
/**
 * Circle APIs
 * APIs for managing your account balance. These endpoints are available with all Circle APIs.
 *
 * The version of the OpenAPI document: ${version}
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Chain } from "./chain";

/**
 *
 * @export
 * @interface PaymentMethodBlockchain
 */
export interface PaymentMethodBlockchain {
  /**
   *
   * @type {string}
   * @memberof PaymentMethodBlockchain
   */
  type: PaymentMethodBlockchainTypeEnum;
  /**
   *
   * @type {Chain}
   * @memberof PaymentMethodBlockchain
   */
  chain: Chain;
  /**
   *
   * @type {string}
   * @memberof PaymentMethodBlockchain
   */
  address?: string;
}

export const PaymentMethodBlockchainTypeEnum = {
  Blockchain: "blockchain"
} as const;

export type PaymentMethodBlockchainTypeEnum =
  typeof PaymentMethodBlockchainTypeEnum[keyof typeof PaymentMethodBlockchainTypeEnum];
