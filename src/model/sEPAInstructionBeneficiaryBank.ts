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

export class SEPAInstructionBeneficiaryBank {
    /**
    * Name of the beneficiary\'s bank.
    */
    'name'?: string;
    /**
    * BIC code of the beneficiary\'s bank account.
    */
    'bic'?: string;
    /**
    * IBAN of the beneficiary\'s bank account.
    */
    'iban'?: string;
    /**
    * Address of the beneficiary\'s bank.
    */
    'address'?: string;
    /**
    * City of the beneficiary\'s bank.
    */
    'city'?: string;
    /**
    * Postal code of the beneficiary\'s bank.
    */
    'postalCode'?: string;
    /**
    * Country code of the beneficiary\'s bank. Formatted as a two-letter country code specified in ISO 3166-1 alpha-2.
    */
    'country'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "bic",
            "baseName": "bic",
            "type": "string"
        },
        {
            "name": "iban",
            "baseName": "iban",
            "type": "string"
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "string"
        },
        {
            "name": "city",
            "baseName": "city",
            "type": "string"
        },
        {
            "name": "postalCode",
            "baseName": "postalCode",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SEPAInstructionBeneficiaryBank.attributeTypeMap;
    }
}

