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
import { FiatMoneyUsd } from './fiatMoneyUsd';
import { MockSenPaymentBeneficiaryBankInstruction } from './mockSenPaymentBeneficiaryBankInstruction';

export class MockSenPaymentResponse {
    /**
    * Wire tracking reference that needs to be set in the wire reference to beneficiary field. This field is retrievable through the response during wire creation or via the bank instruction endpoint.
    */
    'trackingRef'?: string;
    'amount'?: FiatMoneyUsd;
    'beneficiaryBank'?: MockSenPaymentBeneficiaryBankInstruction;
    /**
    * Enumerated status of the wire payment. Status `pending` indicates that the wire payment is in process; `processed` indicates it finished successfully; `failed` indicates it failed.
    */
    'status'?: MockSenPaymentResponse.StatusEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "trackingRef",
            "baseName": "trackingRef",
            "type": "string"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "FiatMoneyUsd"
        },
        {
            "name": "beneficiaryBank",
            "baseName": "beneficiaryBank",
            "type": "MockSenPaymentBeneficiaryBankInstruction"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "MockSenPaymentResponse.StatusEnum"
        }    ];

    static getAttributeTypeMap() {
        return MockSenPaymentResponse.attributeTypeMap;
    }
}

export namespace MockSenPaymentResponse {
    export enum StatusEnum {
        Pending = <any> 'pending',
        Processed = <any> 'processed',
        Failed = <any> 'failed'
    }
}