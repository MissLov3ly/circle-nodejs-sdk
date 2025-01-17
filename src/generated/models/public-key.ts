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
 *
 * @export
 * @interface PublicKey
 */
export interface PublicKey {
  /**
   * Universally unique identifier (UUID v4) of the public key used in encryption. NOTE the sandbox environment uses the default value of `key1`. For this reason the example supplied is `key1` rather than a UUID.
   * @type {string}
   * @memberof PublicKey
   */
  keyId: string;
  /**
   * A PGP ascii-armor encoded public key.
   * @type {string}
   * @memberof PublicKey
   */
  publicKey: string;
}
