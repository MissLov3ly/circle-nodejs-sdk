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
import { BillingDetails } from './billingDetails';
import { MetadataCardAndAch } from './metadataCardAndAch';

export class CardCreationRequest {
    /**
    * Universally unique identifier (UUID v4) idempotency key. This key is utilized to ensure exactly-once execution of mutating requests.
    */
    'idempotencyKey': string;
    /**
    * Universally unique identifier (UUID v4) of the public key used in encryption. NOTE the sandbox environment uses the default value of `key1`. For this reason the example supplied is `key1` rather than a UUID.
    */
    'keyId'?: string;
    /**
    * PGP encrypted base64 encoded string. Contains Number and CVV. * **Number**: Card number. No spaces or other separators. REQUIRED * **CVV (Card Verification Number)**: Three or four digit security code. REQUIRED\' 
    */
    'encryptedData': string;
    'billingDetails': BillingDetails;
    /**
    * Two digit number representing the card\'s expiration month.
    */
    'expMonth': number;
    /**
    * Four digit number representing the card\'s expiration year.
    */
    'expYear': number;
    'metadata': MetadataCardAndAch;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "idempotencyKey",
            "baseName": "idempotencyKey",
            "type": "string"
        },
        {
            "name": "keyId",
            "baseName": "keyId",
            "type": "string"
        },
        {
            "name": "encryptedData",
            "baseName": "encryptedData",
            "type": "string"
        },
        {
            "name": "billingDetails",
            "baseName": "billingDetails",
            "type": "BillingDetails"
        },
        {
            "name": "expMonth",
            "baseName": "expMonth",
            "type": "number"
        },
        {
            "name": "expYear",
            "baseName": "expYear",
            "type": "number"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "MetadataCardAndAch"
        }    ];

    static getAttributeTypeMap() {
        return CardCreationRequest.attributeTypeMap;
    }
}
