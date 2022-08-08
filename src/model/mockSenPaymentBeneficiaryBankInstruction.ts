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

export class MockSenPaymentBeneficiaryBankInstruction {
    /**
    * Circle corporate Silvergate SEN account number that needs to be set as destination.
    */
    'accountNumber': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountNumber",
            "baseName": "accountNumber",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return MockSenPaymentBeneficiaryBankInstruction.attributeTypeMap;
    }
}

