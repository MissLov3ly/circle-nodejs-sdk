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
import { Identity } from './identity';

/**
* A source blockchain address.
*/
export class TransferSourceBlockchainLocation {
    'type': TransferSourceBlockchainLocation.TypeEnum;
    'chain': Chain;
    'identities'?: Array<Identity>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "TransferSourceBlockchainLocation.TypeEnum"
        },
        {
            "name": "chain",
            "baseName": "chain",
            "type": "Chain"
        },
        {
            "name": "identities",
            "baseName": "identities",
            "type": "Array<Identity>"
        }    ];

    static getAttributeTypeMap() {
        return TransferSourceBlockchainLocation.attributeTypeMap;
    }
}

export namespace TransferSourceBlockchainLocation {
    export enum TypeEnum {
        Blockchain = <any> 'blockchain'
    }
}
