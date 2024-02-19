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
import { Chain } from './chain';
import { Currency } from './currency';

/**
* Adds a recipient address. The currency parameter will default to USD for all chains except for BTC where it defaults to BTC.
*/
export class BusinessAccountRecipientAddressCreationRequest {
    /**
    * Universally unique identifier (UUID v4) idempotency key. This key is utilized to ensure exactly-once execution of mutating requests.
    */
    'idempotencyKey': string;
    /**
    * An alphanumeric string representing a blockchain address. Will be in different formats for different chains. It is important to preserve the exact formatting and capitalization of the address.
    */
    'address': string;
    /**
    * The secondary identifier for a blockchain address. An example of this is the memo field on the Stellar network, which can be text, id, or hash format.
    */
    'addressTag'?: string | null;
    'chain': Chain;
    'currency'?: Currency | null;
    /**
    * An identifier or sentence that describes the recipient.
    */
    'description': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "idempotencyKey",
            "baseName": "idempotencyKey",
            "type": "string"
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "string"
        },
        {
            "name": "addressTag",
            "baseName": "addressTag",
            "type": "string"
        },
        {
            "name": "chain",
            "baseName": "chain",
            "type": "Chain"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "Currency"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return BusinessAccountRecipientAddressCreationRequest.attributeTypeMap;
    }
}
