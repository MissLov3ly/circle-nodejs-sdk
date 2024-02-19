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
import { CvvResults } from './cvvResults';
import { Eci } from './eci';
import { Model3dsResults } from './model3dsResults';

/**
* Indicates the status of the payment verification. This property will be present once the payment is confirmed.
*/
export class PaymentVerificationResponse {
    /**
    * Status of the AVS check. Raw AVS response, expressed as an upper-case letter. `not_requested` indicates check was not made. `pending` is pending/processing.
    */
    'avs': string;
    'cvv': CvvResults;
    'threeDSecure'?: Model3dsResults;
    'eci'?: Eci;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "avs",
            "baseName": "avs",
            "type": "string"
        },
        {
            "name": "cvv",
            "baseName": "cvv",
            "type": "CvvResults"
        },
        {
            "name": "threeDSecure",
            "baseName": "threeDSecure",
            "type": "Model3dsResults"
        },
        {
            "name": "eci",
            "baseName": "eci",
            "type": "Eci"
        }    ];

    static getAttributeTypeMap() {
        return PaymentVerificationResponse.attributeTypeMap;
    }
}
