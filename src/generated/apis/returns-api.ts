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

import globalAxios, {
  AxiosPromise,
  AxiosInstance,
  AxiosRequestConfig
} from "axios";
import { Configuration } from "../configuration";
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setBearerAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction
} from "../common";
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError
} from "../base";
// @ts-ignore
import { BadRequest } from "../models";
// @ts-ignore
import { GetReturnsResponse } from "../models";
// @ts-ignore
import { NotAuthorized } from "../models";
/**
 * ReturnsApi - axios parameter creator
 * @export
 */
export const ReturnsApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Retrieve a list of Wire and ACH payout returns. Results will be sorted by create date descending; more recent returns will be at the beginning of the list.
     * @summary List all payout returns
     * @param {string} [from] Queries items created since the specified date-time (inclusive).
     * @param {string} [to] Queries items created before the specified date-time (inclusive).
     * @param {string} [pageBefore] A collection ID value used for pagination.  It marks the exclusive end of a page. When provided, the collection resource will return the next &#x60;n&#x60; items before the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageAfter.
     * @param {string} [pageAfter] A collection ID value used for pagination.  It marks the exclusive begin of a page. When provided, the collection resource will return the next &#x60;n&#x60; items after the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageBefore.
     * @param {number} [pageSize] Limits the number of items to be returned.  Some collections have a strict upper bound that will disregard this value. In case the specified value is higher than the allowed limit, the collection limit will be used.  If avoided, the collection will determine the page size itself.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReturns: async (
      from?: string,
      to?: string,
      pageBefore?: string,
      pageAfter?: string,
      pageSize?: number,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/v1/returns`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication bearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (from !== undefined) {
        localVarQueryParameter["from"] =
          (from as any) instanceof Date ? (from as any).toISOString() : from;
      }

      if (to !== undefined) {
        localVarQueryParameter["to"] =
          (to as any) instanceof Date ? (to as any).toISOString() : to;
      }

      if (pageBefore !== undefined) {
        localVarQueryParameter["pageBefore"] = pageBefore;
      }

      if (pageAfter !== undefined) {
        localVarQueryParameter["pageAfter"] = pageAfter;
      }

      if (pageSize !== undefined) {
        localVarQueryParameter["pageSize"] = pageSize;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    }
  };
};

/**
 * ReturnsApi - functional programming interface
 * @export
 */
export const ReturnsApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = ReturnsApiAxiosParamCreator(configuration);
  return {
    /**
     * Retrieve a list of Wire and ACH payout returns. Results will be sorted by create date descending; more recent returns will be at the beginning of the list.
     * @summary List all payout returns
     * @param {string} [from] Queries items created since the specified date-time (inclusive).
     * @param {string} [to] Queries items created before the specified date-time (inclusive).
     * @param {string} [pageBefore] A collection ID value used for pagination.  It marks the exclusive end of a page. When provided, the collection resource will return the next &#x60;n&#x60; items before the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageAfter.
     * @param {string} [pageAfter] A collection ID value used for pagination.  It marks the exclusive begin of a page. When provided, the collection resource will return the next &#x60;n&#x60; items after the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageBefore.
     * @param {number} [pageSize] Limits the number of items to be returned.  Some collections have a strict upper bound that will disregard this value. In case the specified value is higher than the allowed limit, the collection limit will be used.  If avoided, the collection will determine the page size itself.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getReturns(
      from?: string,
      to?: string,
      pageBefore?: string,
      pageAfter?: string,
      pageSize?: number,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<GetReturnsResponse>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getReturns(
        from,
        to,
        pageBefore,
        pageAfter,
        pageSize,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    }
  };
};

/**
 * ReturnsApi - factory interface
 * @export
 */
export const ReturnsApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = ReturnsApiFp(configuration);
  return {
    /**
     * Retrieve a list of Wire and ACH payout returns. Results will be sorted by create date descending; more recent returns will be at the beginning of the list.
     * @summary List all payout returns
     * @param {string} [from] Queries items created since the specified date-time (inclusive).
     * @param {string} [to] Queries items created before the specified date-time (inclusive).
     * @param {string} [pageBefore] A collection ID value used for pagination.  It marks the exclusive end of a page. When provided, the collection resource will return the next &#x60;n&#x60; items before the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageAfter.
     * @param {string} [pageAfter] A collection ID value used for pagination.  It marks the exclusive begin of a page. When provided, the collection resource will return the next &#x60;n&#x60; items after the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageBefore.
     * @param {number} [pageSize] Limits the number of items to be returned.  Some collections have a strict upper bound that will disregard this value. In case the specified value is higher than the allowed limit, the collection limit will be used.  If avoided, the collection will determine the page size itself.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReturns(
      from?: string,
      to?: string,
      pageBefore?: string,
      pageAfter?: string,
      pageSize?: number,
      options?: any
    ): AxiosPromise<GetReturnsResponse> {
      return localVarFp
        .getReturns(from, to, pageBefore, pageAfter, pageSize, options)
        .then((request) => request(axios, basePath));
    }
  };
};

/**
 * ReturnsApi - object-oriented interface
 * @export
 * @class ReturnsApi
 * @extends {BaseAPI}
 */
export class ReturnsApi extends BaseAPI {
  /**
   * Retrieve a list of Wire and ACH payout returns. Results will be sorted by create date descending; more recent returns will be at the beginning of the list.
   * @summary List all payout returns
   * @param {string} [from] Queries items created since the specified date-time (inclusive).
   * @param {string} [to] Queries items created before the specified date-time (inclusive).
   * @param {string} [pageBefore] A collection ID value used for pagination.  It marks the exclusive end of a page. When provided, the collection resource will return the next &#x60;n&#x60; items before the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageAfter.
   * @param {string} [pageAfter] A collection ID value used for pagination.  It marks the exclusive begin of a page. When provided, the collection resource will return the next &#x60;n&#x60; items after the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageBefore.
   * @param {number} [pageSize] Limits the number of items to be returned.  Some collections have a strict upper bound that will disregard this value. In case the specified value is higher than the allowed limit, the collection limit will be used.  If avoided, the collection will determine the page size itself.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ReturnsApi
   */
  public getReturns(
    from?: string,
    to?: string,
    pageBefore?: string,
    pageAfter?: string,
    pageSize?: number,
    options?: AxiosRequestConfig
  ) {
    return ReturnsApiFp(this.configuration)
      .getReturns(from, to, pageBefore, pageAfter, pageSize, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
