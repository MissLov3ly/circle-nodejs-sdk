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

export class TransferRequestBlockchainLocation {
    'type': TransferRequestBlockchainLocation.TypeEnum;
    /**
    * The blockchain address.
    */
    'address': string;
    /**
    * The secondary identifier for a blockchain address. An example of this is the memo field on the Stellar network, which can be text, id, or hash format.
    */
    'addressTag'?: string | null;
    'chain': Chain;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "TransferRequestBlockchainLocation.TypeEnum"
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
        }    ];

    static getAttributeTypeMap() {
        return TransferRequestBlockchainLocation.attributeTypeMap;
    }
}

export namespace TransferRequestBlockchainLocation {
    export enum TypeEnum {
        Blockchain = <any> 'blockchain'
    }
}
