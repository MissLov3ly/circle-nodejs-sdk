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

/**
* When the payment status is `action_required`, this object summarizes the required additional steps.
*/
export class RequiredAction {
    /**
    * The type of action that is required to proceed with the payment. Currently only one type is supported.
    */
    'type': RequiredAction.TypeEnum;
    /**
    * The URL to bring the user to in order to complete the payment.
    */
    'redirectUrl': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "RequiredAction.TypeEnum"
        },
        {
            "name": "redirectUrl",
            "baseName": "redirectUrl",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return RequiredAction.attributeTypeMap;
    }
}

export namespace RequiredAction {
    export enum TypeEnum {
        ThreeDSecureRequired = <any> 'three_d_secure_required'
    }
}
