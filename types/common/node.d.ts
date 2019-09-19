
/**
 * HTTP functions are used to expose an API of your site's functionality.
 */
declare module 'wix-http-functions' {
    /**
     * Returns a response with status code 400 (Bad Request) and the information from the options parameter.
     */
    function badRequest(options: wix_http_functions.WixHttpFunctionResponseOptions): wix_http_functions.WixHttpFunctionResponse;

    /**
     * Returns a response with status code 201 (Created) and the information from the options parameter.
     */
    function created(options: wix_http_functions.WixHttpFunctionResponseOptions): wix_http_functions.WixHttpFunctionResponse;

    /**
     * A function that responds to requests made with the HTTP DELETE method.
     */
    /* Illegal function name 'delete' can't be used here
    function delete(request: wix_http_functions.WixHttpFunctionRequest): wix_http_functions.WixHttpFunctionResponse;
    */

    /**
     * Returns a response with status code 403 (Forbidden) and the information from the options parameter.
     */
    function forbidden(options: wix_http_functions.WixHttpFunctionResponseOptions): wix_http_functions.WixHttpFunctionResponse;

    /**
     * A function that responds to requests made with the HTTP GET method.
     */
    function get(request: wix_http_functions.WixHttpFunctionRequest): wix_http_functions.WixHttpFunctionResponse;

    /**
     * Returns a response with status code 404 (Not Found) and the information from the options parameter.
     */
    function notFound(options: wix_http_functions.WixHttpFunctionResponseOptions): wix_http_functions.WixHttpFunctionResponse;

    /**
     * Returns a response with status code 200 (OK) and the information from the options parameter.
     */
    function ok(options: wix_http_functions.WixHttpFunctionResponseOptions): wix_http_functions.WixHttpFunctionResponse;

    /**
     * A function that responds to requests made with the HTTP OPTIONS method.
     */
    function options(request: wix_http_functions.WixHttpFunctionRequest): wix_http_functions.WixHttpFunctionResponse;

    /**
     * A function that responds to requests made with the HTTP POST method.
     */
    function post(request: wix_http_functions.WixHttpFunctionRequest): wix_http_functions.WixHttpFunctionResponse;

    /**
     * A function that responds to requests made with the HTTP PUT method.
     */
    function put(request: wix_http_functions.WixHttpFunctionRequest): wix_http_functions.WixHttpFunctionResponse;

    /**
     * Returns a response populated with the information from the options parameter.
     *  The `response()` function creates a custom response built with the
     *  information passed to the `options` parameter in a [`WixHttpFunctionResponseOptions`](#WixHttpFunctionResponseOptions)
     *  object.
     *
     *  Use the `response()` function to create a response to return from an HTTP
     *  function.
     */
    function response(options: wix_http_functions.WixHttpFunctionResponseOptions): wix_http_functions.WixHttpFunctionResponse;

    /**
     * Returns a response with status code 500 (Internal Server Error) and the information from the options parameter.
     */
    function serverError(options: wix_http_functions.WixHttpFunctionResponseOptions): wix_http_functions.WixHttpFunctionResponse;

    /**
     * A function that responds to requests made with any HTTP method.
     */
    function use(request: wix_http_functions.WixHttpFunctionRequest): wix_http_functions.WixHttpFunctionResponse;

}

declare namespace wix_http_functions {
    /**
     * An object representing an incoming request received by a call to an HTTP function.
     */
    interface WixHttpFunctionRequest {
        /**
         * Returns the base URL of a call to an HTTP function.
         */
        readonly baseUrl: string;
        /**
         * Returns an object representing the body of the incoming call to an HTTP function.
         */
        readonly body: wix_http_functions.WixHttpFunctionRequest.WixHttpFunctionRequestBody;
        /**
         * Returns the function name of a call to an HTTP function.
         */
        readonly functionName: string;
        /**
         * Returns the HTTP header fields used in a call to an HTTP function.
         */
        readonly headers: any;
        /**
         * Returns the IP address of the client who called the HTTP function.
         */
        readonly ip: string;
        /**
         * Returns the HTTP method used in calling an HTTP function.
         */
        readonly method: string;
        /**
         * Returns the path of the URL used to call an HTTP function.
         */
        readonly path: string[];
        /**
         * Returns the query fields and values of the URL used to call an HTTP function.
         */
        readonly query: any;
        /**
         * Returns the full URL of a call to an HTTP function.
         */
        readonly url: string;
    }

    namespace WixHttpFunctionRequest {
        /**
         * An object returned by the `body` property representing the body of a call to an HTTP function.
         */
        type WixHttpFunctionRequestBody = {
            /**
             * Returns a Promise which resolves to the body of the call as a string.
             */
            "text()": Promise<string>;
            /**
             * Returns a Promise which resolves to the body of the call as a JSON object.
             */
            "json()": Promise<any>;
        };

    }

    /**
     * An object representing a response to an HTTP function request.
     */
    interface WixHttpFunctionResponse {
        /**
         * Sets or gets the body of the response as a string or binary buffer.
         */
        body: string | Buffer;
        /**
         * Sets or gets the HTTP response header fields.
         */
        headers: any;
        /**
         * Sets or gets the HTTP status code of the response.
         */
        status: number;
    }

    /**
     * An object used to customize a response to an HTTP function call.
     */
    type WixHttpFunctionResponseOptions = {
        /**
         * The response's HTTP status code.
         */
        status?: number;
        /**
         * The response's body.
         */
        body?: string | Buffer;
        /**
         * The response's header fields. The `headers` property contains an object of `key:value` pairs where the `key` is the header field name and the `value` is the header field value.
         */
        headers?: any;
    };

}