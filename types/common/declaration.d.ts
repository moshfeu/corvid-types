/**
 * The wix-location module contains functionality for getting information
 *  about the URL of the current page and for navigating to other pages.
 */
declare module 'wix-location' {
    /**
     * Gets the base URL of the page.
     */
    const baseUrl: string;

    /**
     * Gets the path of the page's URL.
     */
    const path: string[];

    /**
     * Gets the prefix of a dynamic page's or router page's URL.
     */
    const prefix: string;

    /**
     * Gets the protocol of the page's URL.
     */
    const protocol: string;

    /**
     * Gets an object that represents the query segment of the page's URL.
     */
    const query: any;

    /**
     * Gets the full URL of the current page.
     */
    const url: string;

    /**
     * Adds an event handler that runs when an application page's URL changes.
     */
    function onChange(handler: wix_location.LocationChangeHandler): void;

    /**
     * Directs the browser to navigate to the specified URL.
     */
    function to(url: string): void;

}

/**
 * The wix-site module contains functionality for obtaining information about your site and its pages.
 */
declare module 'wix-site' {
    /**
     * Gets a code representing the site's currency.
     */
    const currency: string;

    /**
     * Gets information about the current page or lightbox.
     */
    const currentPage: wix_site.StructurePage | wix_site.StructureLightbox;

    /**
     * Gets a code representing the site's language.
     */
    const language: string;

    /**
     * Gets the site's regional settings.
     */
    const regionalSettings: string;

    /**
     * Gets the site revision ID.
     */
    const revision: string;

    /**
     * Gets the site's timezone.
     */
    const timezone: string;

    /**
     * Returns information about the site's pages, prefixes, and lightboxes.
     */
    function getSiteStructure(): wix_site.SiteStructure;

    /**
     * Returns the sitemap for a router or dynamic page prefix.
     */
    function routerSitemap(routerPrefix: string): Promise<wix_router.WixRouterSitemapEntry[]>;

}

/**
 * The wix-storage module contains functionality for the persistent
 *  storage of key/value data in the site visitor's browser.
 */
declare module 'wix-storage' {
    /**
     * Used for local storage of data.
     */
    const local: wix_storage.Storage;

    /**
     * Used for memory storage of data.
     */
    const memory: wix_storage.Storage;

    /**
     * Used for session storage of data.
     */
    const session: wix_storage.Storage;

}

/**
 * The wix-window module contains functionality that pertains to the
 *  current browser window.
 */
declare module 'wix-window' {
    /**
     * Gets the locale of the site visitor's browser.
     */
    const browserLocale: string;

    /**
     * Gets what kind of device is being used to view the page.
     */
    const formFactor: string;

    /**
     * Gets the locale of the current environment.
     */
    const locale: string;

    /**
     * Gets the HTTP referrer header field.
     */
    const referrer: string;

    /**
     * Gets which mode the site is currently being viewed in.
     */
    const viewMode: string;

    /**
     * Returns information about the window.
     */
    function getBoundingRect(): Promise<wix_window.WindowSizeInfo>;

    /**
     * Returns the current geolocation of the user.
     */
    function getCurrentGeolocation(): Promise<any>;

    /**
     * Returns the data that a router passed to the page in its response.
     */
    function getRouterData(): any;

    /**
     * Opens a lightbox and optionally passes it the given data.
     */
    function openLightbox(name: string, data?: any): Promise<any>;

    /**
     * Opens a modal window that displays the specified web page.
     */
    function openModal(url: string, options: wix_window.OpenModalOptions): Promise<void>;

    /**
     * Sends a message to the page's parent.
     */
    function postMessage(message: any, target?: string): Promise<any>;

    /**
     * Scrolls the page by a given number of pixels.
     */
    function scrollBy(x: number, y: number): Promise<void>;

    /**
     * Scrolls the page to a specific location.
     */
    function scrollTo(x: number, y: number, options?: wix_window.ScrollToOptions): Promise<void>;

    /**
     * Sends a tracking event to external analytics tools.
     */
    function trackEvent(eventName: string, parameters: wix_window.trackingParameters.AddPaymentInfoEvent | wix_window.trackingParameters.AddProductImpressionEvent | wix_window.trackingParameters.AddToCartEvent | wix_window.trackingParameters.ClickProductEvent | wix_window.trackingParameters.CustomEvent | wix_window.trackingParameters.InitiateCheckoutEvent | wix_window.trackingParameters.PurchaseEvent | wix_window.trackingParameters.RemoveFromCartEvent | wix_window.trackingParameters.ViewContentEvent): void;

}

/**
 * The wix-crm-backend module contains functionality for working with
 *  [your site's contacts](https://support.wix.com/en/article/about-your-contact-list)
 *  from backend code.
 */
declare module 'wix-crm-backend' {
    /**
     * Creates a new contact or updates an existing contact.
     */
    function createContact(contactInfo: wix_crm_backend.ContactInfo): Promise<string>;

    /**
     * Deletes an existing contact.
     */
    function deleteContact(contactId: string, options: wix_crm_backend.DeleteOptions): Promise<void>;

    /**
     * Sends a Triggered Email to a contact.
     */
    function emailContact(emailId: string, toContact: string, options?: wix_users.TriggeredEmailOptions): Promise<void>;

    /**
     * Gets an existing contact by ID.
     */
    function getContactById(contactId: string): Promise<wix_crm_backend.ContactInfo>;

    /**
     * Updates an existing contact.
     */
    function updateContact(contactId: string, contactInfo: wix_crm_backend.ContactInfo): Promise<void>;

}

/**
 * The wix-data module contains functionality for working with data in collections.
 */
declare module 'wix-data' {
    /**
     * Creates an aggregation.
     */
    function aggregate(collectionName: string): wix_data.WixDataAggregate;

    /**
     * Adds a number of items to a collection.
     */
    function bulkInsert(collectionName: string, items: any[], options?: wix_data.WixDataOptions): Promise<wix_data.WixDataBulkResult>;

    /**
     * Removes a number of items from a collection.
     */
    function bulkRemove(collectionName: string, itemIds: string[], options?: wix_data.WixDataOptions): Promise<wix_data.WixDataBulkResult>;

    /**
     * Inserts or updates a number of items in a collection.
     */
    function bulkSave(collectionName: string, items: any[], options?: wix_data.WixDataOptions): Promise<wix_data.WixDataBulkResult>;

    /**
     * Updates a number of items in a collection.
     */
    function bulkUpdate(collectionName: string, items: any[], options?: wix_data.WixDataOptions): Promise<wix_data.WixDataBulkResult>;

    /**
     * Creates a filter to be used with the dataset `setFilter()` function.
     */
    function filter(): wix_data.WixDataFilter;

    /**
     * Retrieves an item from a collection.
     */
    function get(collectionName: string, itemId: string, options?: wix_data.WixDataOptions): Promise<any>;

    /**
     * Adds an item to a collection.
     */
    function insert(collectionName: string, item: any, options?: wix_data.WixDataOptions): Promise<any>;

    /**
     * Inserts a reference in the specified property.
     */
    function insertReference(collectionName: string, propertyName: string, referringItem: any | string, referencedItem: any | string | any[] | string[], options?: wix_data.WixDataOptions): Promise<void>;

    /**
     * Checks if a reference to the referenced item exists in the specified
     *   property of the referring item.
     */
    function isReferenced(collectionName: string, propertyName: string, referringItem: any | string, referencedItem: any | string): Promise<boolean>;

    /**
     * Creates a query.
     */
    function query(collectionName: string): wix_data.WixDataQuery;

    /**
     * Gets the full items referenced in the specified property.
     */
    function queryReferenced(collectionName: string, item: any | string, propertyName: string, options: wix_data.WixDataQueryReferencedOptions): Promise<wix_data.WixDataQueryReferencedResult>;

    /**
     * Removes an item from a collection.
     */
    function remove(collectionName: string, itemId: string, options?: wix_data.WixDataOptions): Promise<any>;

    /**
     * Removes a reference from the specified property.
     */
    function removeReference(collectionName: string, propertyName: string, referringItem: any | string, referencedItem: any | string | any[] | string[], options?: wix_data.WixDataOptions): Promise<void>;

    /**
     * Replaces current references with references in the specified property.
     */
    function replaceReferences(collectionName: string, propertyName: string, referringItem: any | string, referencedItem: any | string | any[] | string[], options?: wix_data.WixDataOptions): Promise<void>;

    /**
     * Inserts or updates an item in a collection.
     */
    function save(collectionName: string, item: any, options?: wix_data.WixDataOptions): Promise<any>;

    /**
     * Creates a sort to be used with the dataset `setSort()` function.
     */
    function sort(): wix_data.WixDataSort;

    /**
     * Updates an item in a collection.
     */
    function update(collectionName: string, item: any, options?: wix_data.WixDataOptions): Promise<any>;

}

/**
 * An implementation of the standard [Javascript Fetch API](https://developer.mozilla.org/en/docs/Web/API/Fetch_API)
 *  which can be used in public and backend code for fetching resources
 *  from [3rd party services](https://support.wix.com/en/article/accessing-3rd-party-services)
 *  using HTTPS.
 */
declare module 'wix-fetch' {
    /**
     * Retrieves the specified resource from the network using HTTPS.
     */
    function fetch(url: string, options?: wix_fetch.WixFetchRequest): Promise<wix_fetch.WixFetchResponse>;

    /**
     * Retrieves the specified JSON resource from the network using HTTPS.
     */
    function getJSON(url: string, options?: wix_fetch.WixFetchRequest): Promise<any>;

}

/**
 * The wix-pay-backend module contains functionality for working with
 *  payments from backend code.
 */
declare module 'wix-pay-backend' {
    /**
     * Creates a new payment.
     */
    function createPayment(paymentInfo: wix_pay_backend.PaymentInfo): Promise<wix_pay.Payment>;

}

/**
 * This module contains the APIs for code routers and data binding router hooks.
 */
declare module 'wix-router' {
    /**
     * Registers a hook that is called after a router.
     */
    function afterRouter(request: wix_router.WixRouterRequest, response: wix_router.WixRouterResponse): Promise<wix_router.WixRouterResponse>;

    /**
     * Registers a hook that is called after a sitemap is created.
     */
    function afterSitemap(request: wix_router.WixRouterSitemapRequest, sitemapEntries: wix_router.WixRouterSitemapEntry[]): Promise<wix_router.WixRouterSitemapEntry[]>;

    /**
     * Registers a hook that is called before a router.
     */
    function beforeRouter(request: wix_router.WixRouterRequest): Promise<wix_router.WixRouterResponse>;

    /**
     * Registers a hook that is called after a route is resolved by the data binding router, but before the wix-data query is executed.
     */
    function customizeQuery(request: wix_router.WixRouterRequest, route: string, query: wix_data.WixDataQuery): wix_data.WixDataQuery;

    /**
     * Returns a response with a status code 403 (Forbidden) and instructs the router to show a 403 page.
     */
    function forbidden(message?: string): Promise<wix_router.WixRouterResponse>;

    /**
     * Returns a response that instructs the router to continue.
     */
    function next(): Promise<wix_router.WixRouterResponse>;

    /**
     * Returns a response with a status code 404 (Not Found) and instructs the router to show a 404 page.
     */
    function notFound(message?: string): Promise<wix_router.WixRouterResponse>;

    /**
     * Returns a response with a status code 200 (OK) and instructs the router to show the selected page.
     */
    function ok(Page: string | string[], routerReturnedData?: any, head?: wix_router.WixRouterResponse.HeadOptions): Promise<wix_router.WixRouterResponse>;

    /**
     * Returns a response with a status code of 301 (Moved Permanently) or 302 (Found) and instructs the router to redirect to the given URL.
     */
    function redirect(url: string, statusCode?: string): Promise<wix_router.WixRouterResponse>;

    /**
     * Function containing routing logic for a given URL prefix.
     */
    function router(request: wix_router.WixRouterRequest): Promise<wix_router.WixRouterResponse>;

    /**
     * Returns a response with the specified HTTP status code with an optional message.
     */
    function sendStatus(statusCode: string, message?: string): Promise<wix_router.WixRouterResponse>;

    /**
     * Function containing sitemap logic for a given URL prefix.
     */
    function sitemap(request: wix_router.WixRouterSitemapRequest): Promise<wix_router.WixRouterSitemapEntry[]>;

}

/**
 * The wix-stores-backend module contains functionality for working with your
 *  site's store from backend code.
 */
declare module 'wix-stores-backend' {
    /**
     * Gets the current site visitor's shopping cart.
     */
    function getCurrentCart(): Promise<wix_stores_backend.Cart>;

    /**
     * Gets the availability of a product based on the specified option choices.
     */
    function getProductOptionsAvailability(productId: string, choices: wix_stores_backend.StoreProductChoices): Promise<wix_stores_backend.ProductOptionsAvailability>;

}

/**
 * The wix-users-backend module contains functionality for working with your
 *  site's users from backend code.
 */
declare module 'wix-users-backend' {
    /**
     * Gets the current user viewing the site.
     */
    const currentUser: wix_users.User;

    /**
     * Approve a member whose status is `"Pending"` using an email address.
     */
    function approveByEmail(email: string): Promise<string>;

    /**
     * Approve a member whose status is `"Pending"` using an approval token.
     */
    function approveByToken(token: string): Promise<string>;

    /**
     * Blocks a member from logging into the site.
     */
    function blockByEmail(email: string): Promise<void>;

    /**
     * Deletes an existing user.
     */
    function deleteUser(userId: string): Promise<void>;

    /**
     * Sends a Triggered Email to the specified site member.
     */
    function emailUser(emailId: string, toUser: string, options?: wix_users.TriggeredEmailOptions): Promise<void>;

    /**
     * Create a session token for a member authenticated by a 3rd party.
     */
    function generateSessionToken(email: string): Promise<string>;

    /**
     * Gets an existing user by ID.
     */
    function getUser(userId: string): Promise<wix_users_backend.UserInfo>;

    /**
     * Logs a user in based on email and password.
     */
    function login(email: string, password: string): Promise<string>;

    /**
     * Registers a new site member.
     */
    function register(email: string, password: string, options?: wix_users.RegistrationOptions): Promise<wix_users_backend.RegistrationResult>;

    /**
     * Updates an existing user by ID.
     */
    function updateUserFields(userId: string, userInfo: wix_users_backend.UserInfo): Promise<void>;

}

/**
 * The wix-bookings module contains functionality for working with
 *  bookings from client-side code.
 */
declare module 'wix-bookings' {
    /**
     * Books a service and processes payment for the service.
     */
    function checkoutBooking(bookingInfo: wix_bookings.BookingInfo, options?: wix_bookings.PaymentOptions): Promise<wix_bookings.BookingResult>;

    /**
     * Gets the available slots for a specific service.
     */
    function getServiceAvailability(serviceId: string, options?: wix_bookings.AvailabilityOptions): Promise<wix_bookings.ServiceAvailability>;

}

/**
 * The wix-crm module contains functionality for working with
 *  [your site's contacts](https://support.wix.com/en/article/about-your-contact-list)
 *  from client-side code.
 */
declare module 'wix-crm' {
    /**
     * Creates a new contact or updates an existing contact.
     */
    function createContact(contactInfo: wix_crm.ContactInfo): Promise<string>;

    /**
     * Sends a Triggered Email to the contact.
     */
    function emailContact(emailId: string, toContact: string, options?: wix_users.TriggeredEmailOptions): Promise<void>;

}

/**
 * The wix-paid-plans module contains functionality for working with
 *  paid plans from client-side code.
 */
declare module 'wix-paid-plans' {
    /**
     * Orders a paid plan.
     */
    function orderPlan(planId: string): Promise<wix_paid_plans.OrderResult>;

    /**
     * Orders and purchases a paid plan.
     */
    function purchasePlan(planId: string): Promise<wix_paid_plans.PurchaseResult>;

}

/**
 * The wix-pay module contains functionality for working with
 *  payments from client-side code.
 */
declare module 'wix-pay' {
    /**
     * Starts a payment.
     */
    function startPayment(paymentId: string, options?: wix_pay.PaymentOptions): Promise<wix_pay.PaymentResult>;

}

/**
 * The wix-stores module contains functionality for working with your
 *  site's store from from client-side code.
 */
declare module 'wix-stores' {
    /**
     * Gets the availability of a product based on the specified option choices.
     */
    function getProductOptionsAvailability(productId: string, choices: wix_stores_backend.StoreProductChoices): Promise<wix_stores_backend.ProductOptionsAvailability>;

}

/**
 * The wix-users module contains functionality for working with your
 *  site's users from client-side code.
 */
declare module 'wix-users' {
    /**
     * Gets the current user viewing the site.
     */
    const currentUser: wix_users.User;

    /**
     * Logs the current user into the site using the given session token.
     */
    function applySessionToken(sessionToken: string): Promise<void>;

    /**
     * Sends a Triggered Email to the currently logged-in site member.
     */
    function emailUser(emailId: string, toUser: string, options?: wix_users.TriggeredEmailOptions): Promise<void>;

    /**
     * Logs a user in based on email and password.
     */
    function login(email: string, password: string): Promise<void>;

    /**
     * Logs the current user out of the site.
     */
    function logout(): void;

    /**
     * Sets the function that runs when a user logs in.
     */
    function onLogin(handler: wix_users.LoginHandler): void;

    /**
     * Prompts the current site visitor with a password reset.
     */
    function promptForgotPassword(language?: string): Promise<void>;

    /**
     * Prompts the current site visitor to log in as a site member.
     */
    function promptLogin(options: wix_users.LoginOptions): Promise<wix_users.User>;

    /**
     * Registers a new site member.
     */
    function register(email: string, password: string, options?: wix_users.RegistrationOptions): Promise<wix_users.RegistrationResult>;

}

declare namespace wix_dataset {
    /**
     * A [dataset](wix-dataset.html) connects page elements to a set of items in a data collection.
     */
    interface Dataset {
        /**
         * Returns the current item.
         */
        getCurrentItem(): any;
        /**
         * Returns the current item's index.
         */
        getCurrentItemIndex(): number;
        /**
         * Gets the index of the dataset's current page.
         */
        getCurrentPageIndex(): number;
        /**
         * Returns the selected items.
         */
        getItems(fromIndex: number, numberOfItems: number): Promise<wix_dataset.Dataset.GetItemsResult>;
        /**
         * Gets the dataset's page size.
         */
        getPageSize(): number;
        /**
         * Returns the number of items in the dataset that match its filter criteria.
         */
        getTotalCount(): number;
        /**
         * Gets the number of pages in the dataset.
         */
        getTotalPageCount(): number;
        /**
         * Indicates if there is a next item.
         */
        hasNext(): boolean;
        /**
         * Indicates if there is a next page of data.
         */
        hasNextPage(): boolean;
        /**
         * Indicates if there is a previous item.
         */
        hasPrevious(): boolean;
        /**
         * Indicates if there is a previous page of data.
         */
        hasPreviousPage(): boolean;
        /**
         * Loads the next page of data in addition to the current data.
         */
        loadMore(): Promise<void>;
        /**
         * Loads the specified page.
         */
        loadPage(pageIndex: number): Promise<any[]>;
        /**
         * Create a new blank item.
         */
        new(): Promise<void>;
        /**
         * Saves the current item and moves to the next item.
         */
        next(): Promise<any>;
        /**
         * Moves to the next page of data.
         */
        nextPage(): Promise<any[]>;
        /**
         * Adds an event handler that runs just after a save.
         */
        onAfterSave(handler: wix_dataset.Dataset.AfterSaveHandler): void;
        /**
         * Adds an event handler that runs just before a save.
         */
        onBeforeSave(handler: wix_dataset.Dataset.BeforeSaveHandler): void;
        /**
         * Adds an event handler that runs when the current index changes.
         */
        onCurrentIndexChanged(handler: wix_dataset.Dataset.CurrentIndexChangedHandler): void;
        /**
         * Adds an event handler that runs when an error occurs.
         */
        onError(handler: wix_dataset.Dataset.ErrorHandler): void;
        /**
         * Adds an event handler that runs when a value of the current item changes.
         */
        onItemValuesChanged(handler: wix_dataset.Dataset.ItemValuesChangedHandler): void;
        /**
         * Adds an event handler that runs when the dataset is ready.
         */
        onReady(handler: wix_dataset.Dataset.ReadyHandler): void;
        /**
         * Saves the current item and moves to the previous item.
         */
        previous(): Promise<any>;
        /**
         * Moves to the previous page of data.
         */
        previousPage(): Promise<any[]>;
        /**
         * Refetches the contents of the dataset from the collection.
         */
        refresh(): Promise<void>;
        /**
         * Removes the current item.
         */
        remove(): Promise<void>;
        /**
         * Reverts the current item to its saved value.
         */
        revert(): Promise<void>;
        /**
         * Saves the current item.
         */
        save(): Promise<any>;
        /**
         * Sets the current item by index.
         */
        setCurrentItemIndex(index: number): Promise<void>;
        /**
         * Updates the value of a field in the current item.
         */
        setFieldValue(fieldKey: string, value: any): void;
        /**
         * Updates the values of a set of fields in the current item.
         */
        setFieldValues(fieldValues: any): void;
        /**
         * Sets the dataset filter.
         */
        setFilter(filter: wix_data.WixDataFilter): Promise<void>;
        /**
         * Sets the dataset's page size.
         */
        setPageSize(pageSize: number): Promise<void>;
        /**
         * Sets the dataset sort order.
         */
        setSort(sort: wix_data.WixDataSort): Promise<void>;
    }

    namespace Dataset {
        /**
         * An object representing a dataset error.
         */
        type DatasetError = {
            /**
             * Error code.
             */
            code: string;
            /**
             * Error message.
             */
            message: string;
        };

        /**
         * An object used by the `getItems()` function that contains the items retrieved and the total number of items in the dataset that match its filter criteria
         */
        type GetItemsResult = {
            /**
             * List of items objects where key:value pairs are the field keys and field values of the retrieved items, including all hidden fields.
             */
            items: any[];
            /**
             * The number of items in the dataset that match its filter criteria.
             */
            totalCount: number;
            /**
             * The index in the dataset of the first item in the items property.
             */
            offset: number;
        };

        /**
         * An after save event handler.
         */
        type AfterSaveHandler = (itemBeforeSave: any, itemAfterSave: any)=>void;

        /**
         * A before save event handler.
         */
        type BeforeSaveHandler = ()=>Promise<boolean>;

        /**
         * A current item index change event handler.
         */
        type CurrentIndexChangedHandler = (index: number)=>void;

        /**
         * An error event handler.
         */
        type ErrorHandler = (operation: string, error: wix_dataset.Dataset.DatasetError)=>void;

        /**
         * A current item value change event handler.
         */
        type ItemValuesChangedHandler = (itemBeforeChange: any, updatedItem: any)=>void;

        /**
         * A dataset ready event handler.
         */
        type ReadyHandler = ()=>void;

    }

    /**
     * A [dataset](wix-dataset.html) connects page elements on a dynamic page to a set of items in a data collection.
     */
    interface DynamicDataset extends wix_dataset.Dataset{
        /**
         * Gets the next dynamic page URL.
         */
        getNextDynamicPage(): Promise<string>;
        /**
         * Gets the previous dynamic page URL.
         */
        getPreviousDynamicPage(): Promise<string>;
    }

}

declare namespace site_monitoring {
    /**
     * A single record of a Wix site event in JSON format.
     */
    interface LogEntry {
        /**
         * Unique identifier for the log entry.
         */
        readonly insertId: string;
        /**
         * Payload of the log entry in JSON format.
         */
        readonly jsonPayload: site_monitoring.LogEntry.LogEntryJsonPayload;
        /**
         * Additional information about the log entry.
         */
        readonly labels: site_monitoring.LogEntry.LogEntryLabels;
        /**
         * Additional information about a potentially long-running operation associated with the log entry.
         */
        readonly operation: site_monitoring.LogEntry.LogEntryOperation;
        /**
         * Time the log entry was received by site monitoring.
         */
        readonly receiveTimestamp: string;
        /**
         * Severity of the log entry.
         */
        readonly severity: string;
        /**
         * Source code location information associated with the log entry.
         */
        readonly sourceLocation: site_monitoring.LogEntry.LogEntrySourceLocation;
        /**
         * Time the site event occurred.
         */
        readonly timestamp: string;
    }

    namespace LogEntry {
        /**
         * Payload of the log entry in JSON format.
         */
        type LogEntryJsonPayload = {
            /**
             * Payload message.
             */
            message: string;
        };

        /**
         * Additional information about the log entry.
         */
        type LogEntryLabels = {
            /**
             * [`baseUrl`](wix-location.html#baseUrl) of the site with which the log entry is associated.
             */
            siteUrl: string;
            /**
             * Name of Wix application with which the log entry is associated, such as Stores or Bookings. The generic namespace `Corvid` represents site code not associated with a specific Wix application. Currently only the `Corvid` namespace is supported.
             */
            namespace: string;
            /**
             * Unique identifier for the site. Does not change even if the site name or other site attributes change.
             */
            tenantId: string;
            /**
             * Indicates the viewing mode from which the log entry originates.
             *  One of the following:
             *
             *  + `"Preview"`: Preview mode.
             *  + `"Site"`: Published site mode.
             */
            viewMode: string;
            /**
             * Unique identifier for a specific site [`revision`](wix-site.html#revision). You can use the `revision` property together with the Release Manager to monitor and debug new revisions of your site.
             */
            revision: string;
        };

        /**
         * Additional information about a potentially long-running operation associated with the log entry.
         */
        type LogEntryOperation = {
            /**
             * Unique identifier useful for linking together all log entries associated with a specific operation.
             */
            id: string;
            /**
             * Context of the operation, such as a URL path for page code or a web module function name.
             */
            producer: string;
        };

        /**
         * Source code location information associated with the log entry. Currently only applicable for backend log entries with the `Corvid` namespace.
         */
        type LogEntrySourceLocation = {
            /**
             * Name of the source file.
             */
            file: string;
            /**
             * Line within the source file. 1-based. 0 indicates no line number available.
             */
            line: number;
        };

    }

}

declare namespace wix_location {
    /**
     * An object containing information about a location.
     */
    type Location = {
        /**
         * Location path.
         */
        path: string;
    };

    /**
     * Handles location change events.
     */
    type LocationChangeHandler = (event: wix_location.Location)=>void;

}

declare namespace wix_site {
    /**
     * An object that contains information about the site's prefixes.
     */
    type Prefix = {
        /**
         * The name of the prefix.
         */
        name: string;
        /**
         * The type of the prefix: `"dynamicPages"`, `"router"`, or `"app"`.
         */
        type: string;
        /**
         * The prefix.
         */
        prefix: string;
        /**
         * If the prefix is an app's prefix, the `applicationId` property is the app's ID.
         */
        applicationId?: string;
    };

    /**
     * An object that contains information about the site's pages, prefixes, and lightboxes.
     */
    type SiteStructure = {
        /**
         * The pages of the site.
         */
        pages: wix_site.StructurePage[];
        /**
         * The prefixes of the site's routers and dynamic pages.
         */
        prefixes: wix_site.Prefix[];
        /**
         * The site's lightboxes.
         */
        lightboxes: wix_site.StructureLightbox[];
    };

    /**
     * An object that contains information about a lightbox on the site.
     */
    type StructureLightbox = {
        /**
         * The name of the lightbox.
         */
        name: string;
    };

    /**
     * An object that contains information about a page on the site.
     */
    type StructurePage = {
        /**
         * The of the page.
         */
        name: string;
        /**
         * The type of the page: `"static"` or `"template"`.
         */
        type: string;
        /**
         * The URL of the page. If the page is a `static` page the `url` property is the page's SEO URL.
         */
        url?: string;
        /**
         * If the page is an app page, the `applicationId` property is the app's ID.
         */
        applicationId?: string;
        /**
         * If the page is a router or dynamic page, the `prefix` property is the page's prefix.
         */
        prefix?: string;
        /**
         * If the page is the Home page, `isHomePage` is `true`. Otherwise, it does not exist.
         */
        isHomePage?: boolean;
    };

}

declare namespace wix_storage {
    /**
     * Used for storing local, session, or memory key/value data in the visitor's browser.
     */
    interface Storage {
        /**
         * Removes **all** items from local, session, or memory storage.
         */
        clear(): void;
        /**
         * Gets an item from local, session, or memory storage.
         */
        getItem(key: string): string;
        /**
         * Removes an item from local, session, or memory storage.
         */
        removeItem(key: string): void;
        /**
         * Stores an item in local, session, or memory storage.
         */
        setItem(key: string, value: string): void;
    }

}

declare namespace wix_window {
    /**
     * A lightbox pops up on your site to grab your visitor's attention.
     */
    interface lightbox {
        /**
         * Closes the lightbox.
         */
        close(data?: any): void;
        /**
         * Returns the data object that was passed to a lightbox.
         */
        getContext(): any;
    }

    /**
     * The Multilingual API is used when working with the languages in a multilingual site.
     */
    interface multilingual {
        /**
         * Sets or gets the site's current display language.
         */
        readonly currentLanguage: string;
        /**
         * Gets whether the site has been set up to be shown in multiple languages.
         */
        readonly isEnabled: boolean;
        /**
         * Gets information about the site's languages.
         */
        readonly siteLanguages: wix_window.multilingual.SiteLanguage[];
    }

    namespace multilingual {
        /**
         * An object returned by the `siteLanguages` property that contains information about the site's languages.
         */
        type SiteLanguage = {
            /**
             * The language's full name.
             */
            name: string;
            /**
             * The language's locale code, which represents a set of language-related formatting preferences.
             */
            locale: string;
            /**
             * The language's two-letter code.
             */
            languageCode: string;
            /**
             * The language's three-letter country code.
             */
            countryCode: string;
            /**
             * Whether the language is the site's primary language.
             */
            isPrimaryLanguage: boolean;
        };

    }

    /**
     * The Rendering API is used to control when code is run as a page is being loaded.
     */
    interface rendering {
        /**
         * Gets the current environment the rendering process is running in.
         */
        readonly env: string;
        /**
         * **Deprecated:** Gets the current cycle in the rendering process.
         */
        readonly renderCycle: number;
        /**
         * **Deprecated:** Gets data sent from server-side code to client-side code.
         */
        readonly warmupData: boolean | number | string | any;
    }

    /**
     * Objects used when calling the [`trackEvent()`](wix-window.html#trackEvent) function.
     */
    interface trackingParameters {
    }

    namespace trackingParameters {
        /**
         * An object used when sending an AddPaymentInfo track event.
         */
        type AddPaymentInfoEvent = {
            /**
             * Describes option information on a checkout page, such as selected payment method.
             */
            option?: string;
            /**
             * Origin of the event.
             */
            origin?: string;
        };

        /**
         * An object used when sending an AddProductImpression track event.
         */
        type AddProductImpressionEvent = {
            /**
             * Product information.
             */
            contents: wix_window.trackingParameters.AddProductImpressionEventContents[];
            /**
             * Origin of the event.
             */
            origin?: string;
        };

        /**
         * An object used when sending an AddProductImpression track event.
         */
        type AddProductImpressionEventContents = {
            /**
             * Product ID.
             */
            id?: string;
            /**
             * Stock keeping unit code.
             */
            sku?: string;
            /**
             * Product name.
             */
            name: string;
            /**
             * Category of the page or product.
             */
            category?: string;
            /**
             * Product price.
             */
            price?: number;
            /**
             * Currency code.
             */
            currency?: string;
            /**
             * Brand name of the product.
             */
            brand?: string;
            /**
             * Variant of the product.
             */
            variant?: string;
            /**
             * List or collection the product is in.
             */
            list?: string;
            /**
             * Product's position in a list or collection.
             */
            position?: string;
        };

        /**
         * An object used when sending an AddToCart track event.
         */
        type AddToCartEvent = {
            /**
             * Product ID.
             */
            id?: string;
            /**
             * Stock keeping unit code.
             */
            sku?: string;
            /**
             * Product name.
             */
            name: string;
            /**
             * Product price.
             */
            price?: number;
            /**
             * Currency code.
             */
            currency?: string;
            /**
             * Category of the page or product.
             */
            category?: string;
            /**
             * Brand name of the product.
             */
            brand?: string;
            /**
             * Variant of the product.
             */
            variant?: string;
            /**
             * Product's position in a list or collection.
             */
            position?: string;
            /**
             * Product quantity.
             */
            quantity?: number;
            /**
             * Origin of the event.
             */
            origin?: string;
        };

        /**
         * An object used when sending an CheckoutStep track event.
         */
        type CheckoutStepEvent = {
            /**
             * Origin of the event.
             */
            origin?: string;
            /**
             * Checkout step number. Be sure to report
             *  consistent step values. For example, use `3` when this step follows
             *  `StartPayment` and `AddPaymentInfo` events.
             */
            step?: string;
            /**
             * Action the visitor has taken, such as `"Select shipping"`.
             */
            action?: string;
            /**
             * Describes option information on a checkout page, such as selected payment method.
             */
            option?: string;
        };

        /**
         * An object used when sending a ClickProduct track event.
         */
        type ClickProductEvent = {
            /**
             * Product ID.
             */
            id?: string;
            /**
             * Stock keeping unit code.
             */
            sku?: string;
            /**
             * Product name.
             */
            name: string;
            /**
             * Product price.
             */
            price?: number;
            /**
             * Currency code.
             */
            currency?: string;
            /**
             * Category of the page or product.
             */
            category?: string;
            /**
             * Brand name of the product.
             */
            brand?: string;
            /**
             * Variant of the product.
             */
            variant?: string;
            /**
             * List or collection the product is in.
             */
            list?: string;
            /**
             * Product's position in a list or collection.
             */
            position?: string;
            /**
             * Origin of the event.
             */
            origin?: string;
        };

        /**
         * An object used when sending a CustomEvent track event.
         */
        type CustomEvent = {
            /**
             * Product ID.
             */
            event: string;
        };

        /**
         * An object used when sending an InitiateCheckout track event.
         */
        type InitiateCheckoutEvent = {
            /**
             * Product information.
             */
            contents: wix_window.trackingParameters.InitiateCheckoutEventContents[];
            /**
             * Origin of the event.
             */
            origin?: string;
        };

        /**
         * An object used when sending an InitiateCheckout track event.
         */
        type InitiateCheckoutEventContents = {
            /**
             * Product ID.
             */
            id?: string;
            /**
             * Stock keeping unit code.
             */
            sku?: string;
            /**
             * Product name.
             */
            name: string;
            /**
             * Category of the page or product.
             */
            category?: string;
            /**
             * Product price.
             */
            price?: number;
            /**
             * Currency code.
             */
            currency?: string;
            /**
             * Brand name of the product.
             */
            brand?: string;
            /**
             * Variant of the product.
             */
            variant?: string;
            /**
             * Product quantity.
             */
            quantity?: number;
        };

        /**
         * An object used when sending a Purchase track event.
         */
        type PurchaseEvent = {
            /**
             * Product ID.
             */
            id?: string;
            /**
             * Name of the store where the event occurred.
             */
            affiliation?: string;
            /**
             * Total amount of the purchase including shipping, taxes, etc.
             */
            revenue?: number;
            /**
             * Total tax charge.
             */
            tax?: number;
            /**
             * Total shipping charge.
             */
            shipping?: number;
            /**
             * Coupon code applied to the transaction.
             */
            coupon?: string;
            /**
             * Product information.
             */
            contents: wix_window.trackingParameters.PurchaseEventContents[];
            /**
             * Origin of the event.
             */
            origin?: string;
        };

        /**
         * An object used when sending an Purchase track event.
         */
        type PurchaseEventContents = {
            /**
             * Product ID.
             */
            id?: string;
            /**
             * Product name.
             */
            name: string;
            /**
             * Category of the page or product.
             */
            category?: string;
            /**
             * Product price.
             */
            price?: number;
            /**
             * Currency code.
             */
            currency?: string;
            /**
             * Brand name of the product.
             */
            brand?: string;
            /**
             * Variant of the product.
             */
            variant?: string;
            /**
             * Product quantity.
             */
            quantity?: number;
        };

        /**
         * An object used when sending a RemoveFromCart track event.
         */
        type RemoveFromCartEvent = {
            /**
             * Product ID.
             */
            id?: string;
            /**
             * Product name.
             */
            name: string;
            /**
             * Product price.
             */
            price?: number;
            /**
             * Currency code.
             */
            currency?: string;
            /**
             * Category of the page or product.
             */
            category?: string;
            /**
             * Brand name of the product.
             */
            brand?: string;
            /**
             * Variant of the product.
             */
            variant?: string;
            /**
             * Product's position in a list or collection.
             */
            position?: string;
            /**
             * Product quantity.
             */
            quantity?: number;
            /**
             * Origin of the event.
             */
            origin?: string;
        };

        /**
         * An object used when sending an StartPayment track event.
         */
        type StartPaymentEvent = {
            /**
             * Origin of the event.
             */
            origin?: string;
            /**
             * Describes option information on a checkout page, such as selected payment method.
             */
            option?: string;
        };

        /**
         * An object used when sending a ViewContent track event.
         */
        type ViewContentEvent = {
            /**
             * Product ID.
             */
            id?: string;
            /**
             * Stock keeping unit code.
             */
            sku?: string;
            /**
             * Product name.
             */
            name: string;
            /**
             * Product price.
             */
            price?: number;
            /**
             * Currency code.
             */
            currency?: string;
            /**
             * Category of the page or product.
             */
            category?: string;
            /**
             * Brand name of the product.
             */
            brand?: string;
            /**
             * Variant of the product.
             */
            variant?: string;
            /**
             * List or collection the product is in.
             */
            list?: string;
            /**
             * Product's position in a list or collection.
             */
            position?: string;
            /**
             * Origin of the event.
             */
            origin?: string;
        };

    }

    /**
     * An object used when opening a modal window.
     */
    type OpenModalOptions = {
        /**
         * Width of the modal window.
         */
        width: number;
        /**
         * Height of the modal window.
         */
        height: number;
    };

    /**
     * An object used for providing options for the `scrollTo()` method.
     */
    type ScrollToOptions = {
        /**
         * Indicates whether to scroll with an animation. Defaults to `true`.
         */
        scrollAnimation: boolean;
    };

    /**
     * An object returned by the `getBoundingRect()` function that contains information about the window's size, the document's size, and the current scroll position.
     */
    type WindowSizeInfo = {
        /**
         * An object with `height` and `width` key:value pairs containing the size of the viewable area of the current browser window.
         */
        window: any;
        /**
         * An object with `height` and `width` key:value pairs containing the size of the actual body of the page, which may be larger or smaller than the current window.
         */
        document: any;
        /**
         * An object with `x` and `y` key:value pairs containing the scroll offset of the page within the window from the top-left corner.
         */
        scroll: any;
    };

}

declare namespace wix_billing_backend {
    /**
     * Events that are fired by actions relating to billing.
     */
    interface Events {
        /**
         * An event that fires when an invoice is created.
         */
        onInvoiceCreated(event: wix_billing_backend.invoices.Invoice): void;
        /**
         * An event that fires when an invoice is overdue.
         */
        onInvoiceOverdue(event: wix_billing_backend.invoices.Invoice): void;
        /**
         * An event that fires when an invoice is paid.
         */
        onInvoicePaid(event: wix_billing_backend.invoices.Invoice): void;
        /**
         * An event that fires when an invoice is sent.
         */
        onInvoiceSent(event: wix_billing_backend.invoices.Invoice): void;
        /**
         * An event that fires when a price quote is accepted.
         */
        onPriceQuoteAccepted(event: wix_billing_backend.priceQuotes.PriceQuote): void;
        /**
         * An event that fires when a price quote is created.
         */
        onPriceQuoteCreated(event: wix_billing_backend.priceQuotes.PriceQuote): void;
        /**
         * An event that fires when a price quote has expired.
         */
        onPriceQuoteExpired(event: wix_billing_backend.priceQuotes.PriceQuote): void;
        /**
         * An event that fires when a price quote is sent.
         */
        onPriceQuoteSent(event: wix_billing_backend.priceQuotes.PriceQuote): void;
    }

    /**
     * The wix-billing-backend module contains functionality for working with
     *  [your site's invoices](https://support.wix.com/en/article/about-wix-invoices)
     *  from backend code.
     */
    interface invoices {
        /**
         * Adds a payment to the invoice and reports the payment to the payment provider.
         */
        addPayment(id: wix_billing_backend.invoices.IdAndVersion, payment: wix_billing_backend.invoices.Payment): Promise<wix_billing_backend.invoices.Response>;
        /**
         * Creates a new invoice.
         */
        createInvoice(invoiceFields: wix_billing_backend.invoices.InvoiceFields): Promise<wix_billing_backend.invoices.Response>;
        /**
         * Creates a link that can be used by a customer to preview the invoice.
         */
        createInvoicePreviewUrl(id: wix_billing_backend.invoices.IdAndVersion): Promise<string>;
        /**
         * Deletes an invoice by ID.
         */
        deleteInvoice(id: string): Promise<void>;
        /**
         * Gets an existing invoice by ID.
         */
        getInvoice(id: string): Promise<wix_billing_backend.invoices.Invoice>;
        /**
         * Sends an invoice preview link to a customer via email.
         */
        sendInvoice(id: wix_billing_backend.invoices.IdAndVersion, emailInfo: wix_billing_backend.invoices.EmailInfo): Promise<void>;
        /**
         * Update an existing invoice.
         */
        updateInvoice(id: wix_billing_backend.invoices.IdAndVersion, invoiceFields: wix_billing_backend.invoices.InvoiceFields): Promise<wix_billing_backend.invoices.Response>;
        /**
         * Voids an invoice.
         */
        voidInvoice(id: wix_billing_backend.invoices.IdAndVersion): Promise<void>;
    }

    namespace invoices {
        /**
         * An object that contains address information.
         */
        type Address = {
            /**
             * Address line.
             */
            addressLine: string;
            /**
             * Address subdivision.
             */
            subdivision: string;
            /**
             * Address city.
             */
            city: string;
            /**
             * Address postal code.
             */
            postalCode: string;
            /**
             * Address country.
             */
            country: string;
            /**
             * Address in human readable format.
             */
            formatted: string;
        };

        /**
         * An object that contains calculated tax information.
         */
        type CalculatedTax = {
            /**
             * Tax name.
             */
            name: string;
            /**
             * Tax rate.
             */
            rate: number;
            /**
             * Total value of taxable goods.
             */
            taxable: number;
            /**
             * Total amount of tax applied.
             */
            taxed: number;
        };

        /**
         * An object that contains customer information.
         */
        type Customer = {
            /**
             * Contact ID.
             */
            contactId: string;
            /**
             * Email address.
             */
            email: string;
            /**
             * Physical address.
             */
            address?: wix_billing_backend.invoices.Address;
            /**
             * Phone number.
             */
            phone?: string;
            /**
             * Company name.
             */
            company?: string;
            /**
             * Full name.
             */
            fullName?: string;
            /**
             * First name.
             */
            firstName?: string;
            /**
             * Last name.
             */
            lastName?: string;
        };

        /**
         * An object that contains discount information.
         */
        type Discount = {
            /**
             * Discount amount.
             */
            value: number;
            /**
             * Discount type.
             *
             * Either:
             *
             * + `"Fixed"`: A fixed amount is deducted.
             * + `"Percentage"`: A percentage of the total amount is deducted.
             */
            type: string;
        };

        /**
         * An object that contains information used to send an invoice to a customer.
         */
        type EmailInfo = {
            /**
             * Email subject.
             */
            subject: string;
            /**
             * Email body. Limited formatting in the email body can be
             * achieved using standard JavaScript string formatting.
             */
            body: string;
        };

        /**
         * An object that contains ID and version information.
         */
        type IdAndVersion = {
            /**
             * Invoice ID.
             */
            id: string;
            /**
             * Invoice version.
             */
            version: number;
        };

        /**
         * An object that represents an invoice.
         */
        type Invoice = {
            /**
             * ID and version of the invoice.
             */
            id: wix_billing_backend.invoices.IdAndVersion;
            /**
             * Status of the invoice.
             *  One of:
             *
             *  + `"Draft"`
             *  + `"Sent"`
             *  + `"Processing"`
             *  + `"Paid"`
             *  + `"Overdue"`
             *  + `"Void"`
             *  + `"Deleted"`
             *  + `"PartiallyPaid"`
             *  + `"PartialAndOverdue"`
             */
            status: string;
            /**
             * Number of the invoice, unique within your site.
             */
            number: string;
            /**
             * Title of the invoice.
             */
            title: string;
            /**
             * Currency code.
             */
            currency: string;
            /**
             * Locale information.
             */
            locale: wix_billing_backend.invoices.Locale;
            /**
             * Customer listed on the invoice.
             */
            customer: wix_billing_backend.invoices.Customer;
            /**
             * Line items listed on the invoice.
             */
            lineItems: wix_billing_backend.invoices.LineItem[];
            /**
             * Discount included in the invoice.
             */
            discount: wix_billing_backend.invoices.Discount;
            /**
             * List of payments already received from the customer.
             */
            payments: wix_billing_backend.invoices.Payment[];
            /**
             * List of taxes calculated based on the line items.
             */
            taxes: wix_billing_backend.invoices.CalculatedTax[];
            /**
             * Total values.
             */
            totals: wix_billing_backend.invoices.TotalPrice;
            /**
             * Invoice dynamic totals.
             */
            dynamicTotals: wix_billing_backend.invoices.InvoiceDynamicTotals;
            /**
             * Additional metadata included in the invoice.
             */
            metadata: wix_billing_backend.invoices.MetaData;
            /**
             * Dates associated with the invoice.
             */
            dates: wix_billing_backend.invoices.InvoiceDates;
        };

        /**
         * An object that contains date information for an invoice.
         */
        type InvoiceDates = {
            /**
             * Invoice issue date.
             */
            issueDate: Date;
            /**
             * Invoice due date.
             */
            dueDate: Date;
        };

        /**
         * An object that contains information about invoice totals that change when payments are received.
         */
        type InvoiceDynamicTotals = {
            /**
             * Amount paid.
             */
            paidAmount: number;
            /**
             * Balance amount.
             */
            balance: number;
        };

        /**
         * An object that contains information used when creating or updating an invoice.
         */
        type InvoiceFields = {
            /**
             * Title of the invoice.
             */
            title: string;
            /**
             * Customer listed on the invoice.
             */
            customer: wix_billing_backend.invoices.Customer;
            /**
             * Currency code.
             */
            currency: string;
            /**
             * Line items listed on the invoice.
             */
            lineItems: wix_billing_backend.invoices.LineItem[];
            /**
             * Discount included in the invoice.
             */
            discount?: wix_billing_backend.invoices.Discount;
            /**
             * Invoice payments.
             */
            payments: wix_billing_backend.invoices.Payment[];
            /**
             * Invoice metadata.
             */
            metadata?: wix_billing_backend.invoices.MetaData;
            /**
             * Dates associated with the invoice.
             */
            dates: wix_billing_backend.invoices.InvoiceDates;
        };

        /**
         * An object that contains itemized fee information.
         */
        type ItemizedFee = {
            /**
             * Item fee name.
             */
            name: string;
            /**
             * Item fee price.
             */
            price: number;
        };

        /**
         * An object that contains line item information.
         */
        type LineItem = {
            /**
             * Line item ID.
             */
            id: string;
            /**
             * Line item name.
             */
            name: string;
            /**
             * Line item description.
             */
            description: string;
            /**
             * Line item price.
             */
            price: number;
            /**
             * Line item quantity.
             */
            quantity: number;
            /**
             * Line item taxes.
             */
            taxes?: wix_billing_backend.invoices.LineItemTax[];
        };

        /**
         * An object that contains tax information for a line item.
         */
        type LineItemTax = {
            /**
             * Line item tax name.
             */
            name: string;
            /**
             * Line item tax rate.
             */
            rate: number;
        };

        /**
         * An object that contains locale information.
         */
        type Locale = {
            /**
             * An IETF language tag.
             * Some common language tags include:
             *
             * + `"en-US"`: English, United States
             * + `"en-GB"`: English, British
             * + `"es-ES"`: Spanish, Spain
             * + `"de-DE"`: German, Germany
             * + `"ja-JP"`: Japanese, Japan
             * + `"fr-CH"`: French, Switzerland
             * + `"it-IT"`: Italian, Italy
             */
            language: string;
        };

        /**
         * An object that contains metadata information.
         */
        type MetaData = {
            /**
             * Invoice notes.
             */
            notes?: string;
            /**
             * Legal terms.
             */
            legalTerms?: string;
            /**
             * URL to legal terms.
             */
            sourceUrl?: string;
        };

        /**
         * An object that contains information about an invoice payment.
         */
        type Payment = {
            /**
             * Payment id.
             */
            id: string;
            /**
             * Payment type, describing how the payment was made.
             */
            type: string;
            /**
             * Payment amount.
             */
            amount: number;
            /**
             * Payment date.
             */
            date: Date;
        };

        /**
         * An object that contains response information.
         */
        type Response = {
            /**
             * ID and version information.
             */
            id: wix_billing_backend.invoices.IdAndVersion;
        };

        /**
         * An object that contains price totals.
         */
        type TotalPrice = {
            /**
             * Discount amount.
             */
            discountAmount: number;
            /**
             * List of itemized fees.
             */
            fees: wix_billing_backend.invoices.ItemizedFee[];
            /**
             * Sum of line item tax amounts.
             */
            taxedAmount: number;
            /**
             * Subtotal of the line items without the tax included.
             */
            subtotal: number;
            /**
             * Total price of the itemized fees and taxes.
             */
            total: number;
        };

    }

    /**
     * The wix-billing-backend module contains functionality for working with
     *  your site's [price quotes](https://support.wix.com/en/article/about-price-quotes)
     *  from backend code.
     */
    interface priceQuotes {
        /**
         * Creates a new price quote.
         */
        createPriceQuote(priceQuoteInfo: wix_billing_backend.priceQuotes.PriceQuoteInfo): Promise<wix_billing_backend.priceQuotes.Response>;
        /**
         * Deletes a price quote by ID.
         */
        deletePriceQuote(id: string): Promise<void>;
        /**
         * Gets an existing price quote by ID.
         */
        getPriceQuote(id: string): Promise<wix_billing_backend.priceQuotes.PriceQuote>;
        /**
         * Sends a price quote preview link to a customer via email.
         */
        sendPriceQuote(id: wix_billing_backend.priceQuotes.IdAndVersion, emailInfo: wix_billing_backend.priceQuotes.EmailInfo): Promise<void>;
        /**
         * Updates an existing price quote.
         */
        updatePriceQuote(id: wix_billing_backend.priceQuotes.IdAndVersion, priceQuoteInfo: wix_billing_backend.priceQuotes.PriceQuoteInfo): Promise<wix_billing_backend.priceQuotes.Response>;
    }

    namespace priceQuotes {
        /**
         * An object that contains address information.
         */
        type Address = {
            /**
             * Address line.
             */
            addressLine: string;
            /**
             * Address subdivision.
             */
            subdivision: string;
            /**
             * Address city.
             */
            city: string;
            /**
             * Address postal code.
             */
            postalCode: string;
            /**
             * Address country.
             */
            country: string;
            /**
             * Address in human readable format.
             */
            formatted: string;
        };

        /**
         * An object that contains calculated tax information.
         */
        type CalculatedTax = {
            /**
             * Tax name.
             */
            name: string;
            /**
             * Tax rate.
             */
            rate: number;
            /**
             * Total value of taxable goods.
             */
            taxable: number;
            /**
             * Total amount of tax applied.
             */
            taxed: number;
        };

        /**
         * An object that contains customer information.
         */
        type Customer = {
            /**
             * Contact ID.
             */
            contactId: string;
            /**
             * Email address.
             */
            email: string;
            /**
             * Physical address.
             */
            address?: wix_billing_backend.priceQuotes.Address;
            /**
             * Phone number.
             */
            phone?: string;
            /**
             * Company name.
             */
            company?: string;
            /**
             * Full name.
             */
            fullName?: string;
            /**
             * First name.
             */
            firstName?: string;
            /**
             * Last name.
             */
            lastName?: string;
        };

        /**
         * An object that contains discount information.
         */
        type Discount = {
            /**
             * Discount amount.
             */
            value: number;
            /**
             * Discount type.
             *
             * Either:
             *
             * + `"Fixed"`: A fixed amount is deducted.
             * + `"Percentage"`: A percentage of the total amount is deducted.
             */
            type: string;
        };

        /**
         * An object that contains information used to send a price quote to a customer.
         */
        type EmailInfo = {
            /**
             * Email subject.
             */
            subject: string;
            /**
             * Email body. Limited formatting in the email body can be
             * achieved using standard JavaScript string formatting.
             */
            body: string;
        };

        /**
         * An object that contains ID and version information.
         */
        type IdAndVersion = {
            /**
             * Price quote ID.
             */
            id: string;
            /**
             * Price quote version.
             */
            version: number;
        };

        /**
         * An object that contains itemized fee information.
         */
        type ItemizedFee = {
            /**
             * Item fee name.
             */
            name: string;
            /**
             * Item fee price.
             */
            price: number;
        };

        /**
         * An object that contains line item information.
         */
        type LineItem = {
            /**
             * Line item ID.
             */
            id: string;
            /**
             * Line item name.
             */
            name: string;
            /**
             * Line item description.
             */
            description: string;
            /**
             * Line item price.
             */
            price: number;
            /**
             * Line item quantity.
             */
            quantity: number;
            /**
             * Line item taxes.
             */
            taxes?: wix_billing_backend.priceQuotes.LineItemTax[];
        };

        /**
         * An object that contains tax information for a line item.
         */
        type LineItemTax = {
            /**
             * Line item tax name.
             */
            name: string;
            /**
             * Line item tax rate.
             */
            rate: number;
        };

        /**
         * An object that contains locale information.
         */
        type Locale = {
            /**
             * An IETF language tag.
             * Some common language tags include:
             *
             * + `"en-US"`: English, United States
             * + `"en-GB"`: English, British
             * + `"es-ES"`: Spanish, Spain
             * + `"de-DE"`: German, Germany
             * + `"ja-JP"`: Japanese, Japan
             * + `"fr-CH"`: French, Switzerland
             * + `"it-IT"`: Italian, Italy
             */
            language: string;
        };

        /**
         * An object that contains metadata information.
         */
        type MetaData = {
            /**
             * Price quote notes.
             */
            notes?: string;
            /**
             * Legal terms.
             */
            legalTerms?: string;
            /**
             * URL to legal terms.
             */
            sourceUrl?: string;
        };

        /**
         * An object that contains information about price quote payment terms.
         */
        type PaymentTerms = {
            /**
             * Price quote term type.
             *  One of:
             *
             *  + `"DueOnReceipt"`
             *  + `"NetPlus"`
             *  + `"TimeStamp"`
             *  + `"Other"`
             */
            termType: string;
            /**
             * Term data. When `termType` is `"NetPlus"`,
             *  `termData` contains a positive integer indicating how many days after the charge
             *  payment is due.
             */
            termData?: string;
        };

        /**
         * An object that represents a price quote.
         */
        type PriceQuote = {
            /**
             * ID and version of the price quote.
             */
            id: wix_billing_backend.priceQuotes.IdAndVersion;
            /**
             * Status of the price quote.
             *  One of:
             *
             *  + `"Draft"`
             *  + `"Sent"`
             *  + `"Processing"`
             *  + `"Accepted"`
             *  + `"Rejected"`
             *  + `"Expired"`
             *  + `"Void"`
             *  + `"Deleted"`
             *  + `"Invoiced"`
             */
            status: string;
            /**
             * Number of the price quote, unique within your site.
             */
            number: string;
            /**
             * Title of the price quote.
             */
            title: string;
            /**
             * Currency code.
             */
            currency: string;
            /**
             * Locale information.
             */
            locale: wix_billing_backend.priceQuotes.Locale;
            /**
             * Customer listed on the price quote.
             */
            customer: wix_billing_backend.priceQuotes.Customer;
            /**
             * Line items listed on the price quote.
             */
            lineItems: wix_billing_backend.priceQuotes.LineItem[];
            /**
             * Discount included in the price quote.
             */
            discount: wix_billing_backend.priceQuotes.Discount;
            /**
             * Payment terms.
             */
            paymentTerms: wix_billing_backend.priceQuotes.PaymentTerms;
            /**
             * List of taxes calculated based on the line items.
             */
            taxes: wix_billing_backend.priceQuotes.CalculatedTax[];
            /**
             * Total values.
             */
            totals: wix_billing_backend.priceQuotes.TotalPrice;
            /**
             * Additional metadata included in the price quote.
             */
            metadata: wix_billing_backend.priceQuotes.MetaData;
            /**
             * Price quote company ID.
             */
            companyId: string;
            /**
             * Price quote invoice ID, when converting price quote to invoice.
             */
            invoiceId: string;
            /**
             * Dates associated with the price quote.
             */
            dates: wix_billing_backend.priceQuotes.PriceQuoteDates;
        };

        /**
         * An object that contains date information for a price quote.
         */
        type PriceQuoteDates = {
            /**
             * Date the price quote was issued.
             */
            issueDate: Date;
            /**
             * Date that the price quote is valid until.
             */
            validThroughDate: Date;
            /**
             * Date the price quote was accepted.
             */
            acceptanceDate?: Date;
            /**
             * Date the price quote was last seen.
             */
            lastSeenDate?: Date;
        };

        /**
         * An object that contains information used when creating or updating a price quote.
         */
        type PriceQuoteInfo = {
            /**
             * Title of the price quote.
             */
            title: string;
            /**
             * Customer listed on the price quote.
             */
            customer: wix_billing_backend.priceQuotes.Customer;
            /**
             * Currency code.
             */
            currency: string;
            /**
             * Line items listed on the price quote.
             */
            lineItems: wix_billing_backend.priceQuotes.LineItem[];
            /**
             * Discount included in the price quote.
             */
            discount?: wix_billing_backend.priceQuotes.Discount;
            /**
             * Payment terms.
             */
            paymentTerms: wix_billing_backend.priceQuotes.PaymentTerms;
            /**
             * Price quote metadata.
             */
            metadata?: wix_billing_backend.priceQuotes.MetaData;
            /**
             * Dates associated with the price quote.
             */
            dates: wix_billing_backend.priceQuotes.PriceQuoteDates;
        };

        /**
         * An object that contains response information.
         */
        type Response = {
            /**
             * ID and version information.
             */
            id: wix_billing_backend.priceQuotes.IdAndVersion;
        };

        /**
         * An object that contains price totals.
         */
        type TotalPrice = {
            /**
             * Discount amount.
             */
            discountAmount: number;
            /**
             * List of itemized fees.
             */
            fees: wix_billing_backend.priceQuotes.ItemizedFee[];
            /**
             * Sum of line item tax amounts.
             */
            taxedAmount: number;
            /**
             * Subtotal of the line items without the tax included.
             */
            subtotal: number;
            /**
             * Total price of the itemized fees and taxes.
             */
            total: number;
        };

    }

}

declare namespace wix_crm_backend {
    /**
     * Events that are fired by actions relating to site contacts.
     */
    interface Events {
        /**
         * An event that fires when a user submits a form.
         */
        onFormSubmit(event: wix_crm_backend.Events.FormSubmitEvent): void;
    }

    namespace Events {
        /**
         * An object representing an attachment to a form.
         */
        type FormAttachment = {
            /**
             * Name of the attachment.
             */
            name: string;
            /**
             * URL of the attachment.
             */
            url: string;
            /**
             * Type of attachment.
             * One of:
             *
             * + `"UNDEFINED"`
             * + `"DOCUMENT"`
             * + `"IMAGE"`
             * + `"VIDEO"`
             */
            type: string;
        };

        /**
         * An object representing a form field.
         */
        type FormField = {
            /**
             * Name of the field.
             */
            fieldName: string;
            /**
             * Value of the field.
             */
            fieldValue: string;
        };

        /**
         * An object representing a form.
         */
        type FormSubmitEvent = {
            /**
             * Contact ID of the user submitting the form.
             */
            contactId: string;
            /**
             * Name of the form.
             */
            formName: string;
            /**
             * Date and time that the form was submitted.
             */
            submissionTime: Date;
            /**
             * The form's attachments.
             */
            attachments: wix_crm_backend.Events.FormAttachment[];
            /**
             * Data submitted in the form. The object contains key:value pairs where the key is the field name and the value is the contents of the field.
             */
            submissionData: wix_crm_backend.Events.FormField[];
        };

    }

    /**
     * The Notifications API is used to send notifications to the site owner and contributors.
     */
    interface notifications {
        /**
         * Sends a notification.
         */
        notify(body: string, channels: string[], options: wix_crm_backend.notifications.NotificationOptions): Promise<void>;
    }

    namespace notifications {
        /**
         * An object containing information about where to navigate when a notification is clicked.
         */
        type ActionTarget = {
            /**
             * URL to navigate to when the `actionTitle` text is clicked.
             */
            url?: string;
        };

        /**
         * An object representing notification options.
         */
        type NotificationOptions = {
            /**
             * Notification title. Only displayed on mobile and browser notifications. Max length: 512 characters.
             */
            title?: string;
            /**
             * Call to action text to be clicked on. When clicked, navigates to the `actionTarget` URL. Max length: 512 characters.
             */
            actionTitle?: string;
            /**
             * Where to navigate to when the `actionTitle` text is clicked.
             */
            actionTarget?: wix_crm_backend.notifications.ActionTarget;
            /**
             * Contributor that will receive the notifications, based on their assigned roles.
             *  One of:
             *
             *  + `"All_Contributors"`: All site contributors, including the site owner.
             *  + `"Owner"`: Only the site owner.
             */
            recipients?: wix_crm_backend.notifications.SiteContributors;
        };

        /**
         * An object containing information about which contributors will receive a notification.
         */
        type SiteContributors = {
            /**
             * Roles to receive the notification.
             * One of:
             *
             * + `"All_Contributors"`: All site contributors (default).
             * + `"Owner"`: Only the site owner.
             */
            role?: string;
        };

    }

    /**
     * The Tasks API is used to manage a site's tasks.
     */
    interface tasks {
        /**
         * Sets a task as completed.
         */
        completeTask(taskId: string): Promise<string>;
        /**
         * Creates a new task.
         */
        createTask(taskInfo: wix_crm_backend.tasks.TaskInfo): Promise<string>;
        /**
         * Gets a task by ID.
         */
        getTask(taskId: string): Promise<wix_crm_backend.tasks.Task>;
        /**
         * Removes an existing task.
         */
        removeTask(taskId: string): Promise<string>;
        /**
         * Resets a task as not completed.
         */
        resetTask(taskId: string): Promise<string>;
        /**
         * Updates the specified fields of an existing task.
         */
        updateTaskFields(taskId: string, taskInfo: wix_crm_backend.tasks.TaskInfo): Promise<string>;
    }

    namespace tasks {
        /**
         * An object representing a task.
         */
        type Task = {
            /**
             * Task title.
             */
            title: string;
            /**
             * Indicates whether the task has been
             *  completed.
             */
            isCompleted: boolean;
            /**
             * Unique identifier of the site contact
             *  that this task is linked to.
             */
            contactId: string;
            /**
             * Running task version number. Each time an
             *  action is performed on a task its version number is incremented.
             */
            version: number;
            /**
             * Unique task identifier.
             */
            _id: string;
            /**
             * Date the task is due.
             */
            dueDate: Date;
            /**
             * Type of the task's creator. `"USER"`
             *  if the task was created using the site's dashboard. `"APP"` if the task was
             *  created using the [`createTask()`](#createTask) function or if it was created
             *  by an app installed on the site.
             */
            creatorType: string;
            /**
             * When `creatorType` is `"USER"`, the unique
             *  identifier of the user that created the task in the dashboard. Otherwise, `userId` is not
             *  present.
             */
            userId?: string;
            /**
             * When `creatorType` is `"APP"`, the unique
             *  identifier of the application that created the task. Otherwise, `applicationId` is not
             *  present.
             */
            applicationId?: string;
        };

        /**
         * An object representing information for creating or updating a task.
         */
        type TaskInfo = {
            /**
             * Task title.
             */
            title?: string;
            /**
             * Date the task is due.
             */
            dueDate?: Date;
            /**
             * Unique identifier of the site contact
             *  that this task is linked to.
             */
            contactId?: string;
        };

    }

    /**
     * An object that contains information about a site contact.
     */
    type ContactInfo = {
        /**
         * Contact's first name.
         */
        firstName: string;
        /**
         * Contact's last name.
         */
        lastName: string;
        /**
         * Contact's image source.
         */
        picture: string;
        /**
         * List of contact's email addresses.
         */
        emails: string[];
        /**
         * Email address the contact who is also
         *  a member uses to log into the system.
         */
        loginEmail: string;
        /**
         * List of contact's phone numbers.
         */
        phones: string[];
        /**
         * List of contact's labels. [Labels](https://support.wix.com/en/article/creating-contact-labels)
         *  are used to organize contacts. When setting the `labels` property, you can
         *  only list labels that already exist in your site's [Contacts List](https://support.wix.com/en/article/accessing-your-contact-list).
         */
        labels: string[];
        /**
         * Contact's language.
         */
        language: string;
        /**
         * Any
         *  number of custom fields. [Customs fields](https://support.wix.com/en/article/adding-custom-fields-to-contacts)
         *  are used to store additional information about your site's contacts. When
         *  setting a custom field, use key:value pairs where the key matches the names
         *  defined in your site's [Contacts List](https://support.wix.com/en/article/accessing-your-contact-list).
         *  You can only set values for custom fields that already exist in the Contacts
         *  application.
         */
        customFields: string | number | Date;
    };

    /**
     * An object that contains contact deletion options.
     */
    type DeleteOptions = {
        /**
         * Whether to perform the deletion when the contact is also a member. Defaults to `false`.
         */
        deleteMembers: boolean;
    };

}

declare namespace wix_data {
    /**
     * Hooks that can be added to wix-data operations.
     */
    interface Hooks {
        /**
         * A hook that is triggered after a `count()` operation.
         */
        afterCount(count: number, context: wix_data.Hooks.HookContext): Promise<number>;
        /**
         * A hook that is triggered after a `get()` operation.
         */
        afterGet(item: any, context: wix_data.Hooks.HookContext): Promise<any>;
        /**
         * A hook that is triggered after an `insert()` operation.
         */
        afterInsert(item: any, context: wix_data.Hooks.HookContext): Promise<any>;
        /**
         * A hook that is triggered after a `find` operation, for each of the items in the query results.
         */
        afterQuery(item: any, context: wix_data.Hooks.HookContext): Promise<any>;
        /**
         * A hook that is triggered after a `remove()` operation.
         */
        afterRemove(item: any, context: wix_data.Hooks.HookContext): Promise<any>;
        /**
         * A hook that is triggered after an `update()` operation.
         */
        afterUpdate(item: any, context: wix_data.Hooks.HookContext): Promise<any>;
        /**
         * A hook that is triggered before a `count()` operation.
         */
        beforeCount(query: wix_data.WixDataQuery, context: wix_data.Hooks.HookContext): Promise<wix_data.WixDataQuery>;
        /**
         * A hook that is triggered before a `get()` operation.
         */
        beforeGet(itemId: string, context: wix_data.Hooks.HookContext): Promise<string>;
        /**
         * A hook that is triggered before an `insert()` operation.
         */
        beforeInsert(item: any, context: wix_data.Hooks.HookContext): Promise<any>;
        /**
         * A hook that is triggered before a `find()` operation.
         */
        beforeQuery(query: wix_data.WixDataQuery, context: wix_data.Hooks.HookContext): Promise<wix_data.WixDataQuery>;
        /**
         * A hook that is called before a `remove()` operation.
         */
        beforeRemove(itemId: string, context: wix_data.Hooks.HookContext): Promise<string>;
        /**
         * A hook that is triggered before an `update()` operation.
         */
        beforeUpdate(item: any, context: wix_data.Hooks.HookContext): Promise<any>;
        /**
         * A hook that is triggered on any error or rejected Promise from any of the wix-data operations.
         */
        onFailure(error: Error, context: wix_data.Hooks.HookContext): Promise<any>;
    }

    namespace Hooks {
        /**
         * An object that contains contextual information about the hook being called.
         */
        type HookContext = {
            /**
             * The name of the collection the hook affects.
             */
            collectionName: string;
            /**
             * The current site user id. If no user is logged in to the site it may be null.
             */
            userId: string;
            /**
             * The permissions role of the current user. Possibilities are: `anonymous`, `siteMember`,  `siteOwner` and `dataOwner`.
             */
            userRole: string;
            /**
             * The item stored in the database before an `update` or `delete` operation.
             * Will be `undefined` for all other operations.
             */
            currentItem: any;
        };

    }

    /**
     * Provides functionality for performing aggregations on collection data.
     */
    interface WixDataAggregate {
        /**
         * Adds a sort to an aggregation, sorting by the items or groups by the specified properties in ascending order.
         */
        ascending(propertyName: string): wix_data.WixDataAggregate;
        /**
         * Refines a `WixDataAggregate` to only contain the average value from each aggregation group.
         */
        avg(propertyName: string, projectedName?: string): wix_data.WixDataAggregate;
        /**
         * Refines a `WixDataAggregate` to contain the item count of each group in the aggregation.
         */
        count(): wix_data.WixDataAggregate;
        /**
         * Adds a sort to an aggregation, sorting by the items or groups by the specified properties in descending order.
         */
        descending(propertyName: string): wix_data.WixDataAggregate;
        /**
         * Filters out items from being used in an aggregation.
         */
        filter(filter: wix_data.WixDataFilter): wix_data.WixDataAggregate;
        /**
         * Groups items together in an aggregation.
         */
        group(propertyName: string): wix_data.WixDataAggregate;
        /**
         * Filters out groups from being returned from an aggregation.
         */
        having(filter: wix_data.WixDataFilter): wix_data.WixDataAggregate;
        /**
         * Limits the number of items or groups the aggregation returns.
         */
        limit(limit: number): wix_data.WixDataAggregate;
        /**
         * Refines a `WixDataAggregate` to only contain the maximum value from each aggregation group.
         */
        max(propertyName: string, projectedName?: string): wix_data.WixDataAggregate;
        /**
         * Refines a `WixDataAggregate` to only contain the minimum value from each aggregation group.
         */
        min(propertyName: string, projectedName?: string): wix_data.WixDataAggregate;
        /**
         * Runs the aggregation and returns the results.
         */
        run(): Promise<wix_data.WixDataAggregateResult>;
        /**
         * Sets the number of items or groups to skip before returning aggregation results.
         */
        skip(skip: number): wix_data.WixDataAggregate;
        /**
         * Refines a `WixDataAggregate` to contain the sum from each aggregation group.
         */
        sum(propertyName: string, projectedName?: string): wix_data.WixDataAggregate;
    }

    /**
     * The results of an aggregation, containing the aggregated values.
     */
    interface WixDataAggregateResult {
        /**
         * Gets the aggregated values.
         */
        readonly items: any[];
        /**
         * Returns the number of values in the aggregate results.
         */
        readonly length: number;
        /**
         * Indicates if the aggregation has more results.
         */
        hasNext(): boolean;
        /**
         * Retrieves the next page of aggregate results.
         */
        next(): Promise<wix_data.WixDataAggregateResult>;
    }

    interface WixDataFilter {
        /**
         * Adds an `and` condition to the query or filter.
         */
        and(query: wix_data.WixDataQuery): wix_data.WixDataQuery;
        /**
         * Refines a query or filter to match items whose specified property value is within a specified range.
         */
        between(propertyName: string, rangeStart: string | number | Date, rangeEnd: string | number | Date): wix_data.WixDataQuery;
        /**
         * Refines a query or filter to match items whose specified property value contains a specified string.
         */
        contains(propertyName: string, string: string): wix_data.WixDataQuery;
        /**
         * Refines a query or filter to match items whose specified property value ends with a specified string.
         */
        endsWith(propertyName: string, string: string): wix_data.WixDataQuery;
        /**
         * Refines a query or filter to match items whose specified property value equals the specified value.
         */
        eq(propertyName: string, value: any): wix_data.WixDataQuery;
        /**
         * Refines a query or filter to match items whose specified property value is greater than or equal to the specified value.
         */
        ge(propertyName: string, value: string | number | Date): wix_data.WixDataQuery;
        /**
         * Refines a query or filter to match items whose specified property value is greater than the specified value.
         */
        gt(propertyName: string, value: string | number | Date): wix_data.WixDataQuery;
        /**
         * Refines a query or filter to match items whose specified property values equals all of the specified `value` parameters.
         */
        hasAll(propertyName: string, value: string | number | Date | any[]): wix_data.WixDataQuery;
        /**
         * Refines a query or filter to match items whose specified property value equals any of the specified `value` parameters.
         */
        hasSome(propertyName: string, value: string | number | Date | any[]): wix_data.WixDataQuery;
        /**
         * Refines a query or filter to match items whose specified property does not exist or does not have any value.
         */
        isEmpty(propertyName: string): wix_data.WixDataQuery;
        /**
         * Refines a query or filter to match items whose specified property has any value.
         */
        isNotEmpty(propertyName: string): wix_data.WixDataQuery;
        /**
         * Refines a query or filter to match items whose specified property value is less than or equal to the specified value.
         */
        le(propertyName: string, value: string | number | Date): wix_data.WixDataQuery;
        /**
         * Refines a query or filter to match items whose specified property value is less than the specified value.
         */
        lt(propertyName: string, value: string | number | Date): wix_data.WixDataQuery;
        /**
         * Refines a query or filter to match items whose specified property value does not equal the specified value.
         */
        ne(propertyName: string, value: any): wix_data.WixDataQuery;
        /**
         * Adds a `not` condition to the query or filter.
         */
        not(query: wix_data.WixDataQuery): wix_data.WixDataQuery;
        /**
         * Adds an `or` condition to the query or filter.
         */
        or(query: wix_data.WixDataQuery): wix_data.WixDataQuery;
        /**
         * Refines a query or filter to match items whose specified property value starts with a specified string.
         */
        startsWith(propertyName: string, string: string): wix_data.WixDataQuery;
    }

    /**
     * Contains functionality for refining a data query.
     */
    interface WixDataQuery {
        /**
         * Adds an `and` condition to the query or filter.
         */
        and(query: wix_data.WixDataQuery): wix_data.WixDataQuery;
        /**
         * Adds a sort to a query or sort, sorting by the specified properties in ascending order.
         */
        ascending(propertyName: string): wix_data.WixDataQuery;
        /**
         * Refines a query or filter to match items whose specified property value is within a specified range.
         */
        between(propertyName: string, rangeStart: string | number | Date, rangeEnd: string | number | Date): wix_data.WixDataQuery;
        /**
         * Refines a query or filter to match items whose specified property value contains a specified string.
         */
        contains(propertyName: string, string: string): wix_data.WixDataQuery;
        /**
         * Returns the number of items that match the query.
         */
        count(options?: wix_data.WixDataOptions): Promise<number>;
        /**
         * Adds a sort to a query or sort, sorting by the specified properties in descending order.
         */
        descending(propertyName: string): wix_data.WixDataQuery;
        /**
         * Returns the distinct values that match the query, without duplicates.
         */
        distinct(propertyName: string, options?: wix_data.WixDataOptions): Promise<wix_data.WixDataQueryResult>;
        /**
         * Refines a query or filter to match items whose specified property value ends with a specified string.
         */
        endsWith(propertyName: string, string: string): wix_data.WixDataQuery;
        /**
         * Refines a query or filter to match items whose specified property value equals the specified value.
         */
        eq(propertyName: string, value: any): wix_data.WixDataQuery;
        /**
         * Returns the items that match the query.
         */
        find(options?: wix_data.WixDataOptions): Promise<wix_data.WixDataQueryResult>;
        /**
         * Refines a query or filter to match items whose specified property value is greater than or equal to the specified value.
         */
        ge(propertyName: string, value: string | number | Date): wix_data.WixDataQuery;
        /**
         * Refines a query or filter to match items whose specified property value is greater than the specified value.
         */
        gt(propertyName: string, value: string | number | Date): wix_data.WixDataQuery;
        /**
         * Refines a query or filter to match items whose specified property values equals all of the specified `value` parameters.
         */
        hasAll(propertyName: string, value: string | number | Date | any[]): wix_data.WixDataQuery;
        /**
         * Refines a query or filter to match items whose specified property value equals any of the specified `value` parameters.
         */
        hasSome(propertyName: string, value: string | number | Date | any[]): wix_data.WixDataQuery;
        /**
         * Includes referenced items for the specified properties in a query's results.
         */
        include(propertyName: string): wix_data.WixDataQuery;
        /**
         * Refines a query or filter to match items whose specified property does not exist or does not have any value.
         */
        isEmpty(propertyName: string): wix_data.WixDataQuery;
        /**
         * Refines a query or filter to match items whose specified property has any value.
         */
        isNotEmpty(propertyName: string): wix_data.WixDataQuery;
        /**
         * Refines a query or filter to match items whose specified property value is less than or equal to the specified value.
         */
        le(propertyName: string, value: string | number | Date): wix_data.WixDataQuery;
        /**
         * Limits the number of items the query returns.
         */
        limit(limit: number): wix_data.WixDataQuery;
        /**
         * Refines a query or filter to match items whose specified property value is less than the specified value.
         */
        lt(propertyName: string, value: string | number | Date): wix_data.WixDataQuery;
        /**
         * Refines a query or filter to match items whose specified property value does not equal the specified value.
         */
        ne(propertyName: string, value: any): wix_data.WixDataQuery;
        /**
         * Adds a `not` condition to the query or filter.
         */
        not(query: wix_data.WixDataQuery): wix_data.WixDataQuery;
        /**
         * Adds an `or` condition to the query or filter.
         */
        or(query: wix_data.WixDataQuery): wix_data.WixDataQuery;
        /**
         * Sets the number of items to skip before returning query results.
         */
        skip(skip: number): wix_data.WixDataQuery;
        /**
         * Refines a query or filter to match items whose specified property value starts with a specified string.
         */
        startsWith(propertyName: string, string: string): wix_data.WixDataQuery;
    }

    /**
     * The results of a data reference query, containing the retrieved items.
     */
    interface WixDataQueryReferencedResult {
        /**
         * Returns the items that match the reference query.
         */
        readonly items: any[];
        /**
         * Returns the total number of items that match the reference query.
         */
        readonly totalCount: number;
        /**
         * Indicates if the reference query has more results.
         */
        hasNext(): boolean;
        /**
         * Indicates if the reference query has previous results.
         */
        hasPrev(): boolean;
        /**
         * Retrieves the next page of reference query results.
         */
        next(): Promise<wix_data.WixDataQueryReferencedResult>;
        /**
         * Retrieves the previous page of reference query results.
         */
        prev(): Promise<wix_data.WixDataQueryReferencedResult>;
    }

    /**
     * The results of a data query, containing the retrieved items.
     */
    interface WixDataQueryResult {
        /**
         * Returns the index of the current results page number.
         */
        readonly currentPage: number;
        /**
         * Returns the items that match the query.
         */
        readonly items: any[];
        /**
         * Returns the number of items in the current results page.
         */
        readonly length: number;
        /**
         * Returns the query page size.
         */
        readonly pageSize: number;
        /**
         * Indicates if referenced items have been trimmed from the results.
         */
        readonly partialIncludes: boolean;
        /**
         * Returns the query used to get the current results.
         */
        readonly query: wix_data.WixDataQuery;
        /**
         * Returns the total number of items that match the query.
         */
        readonly totalCount: number;
        /**
         * Returns the total number of pages the query produced.
         */
        readonly totalPages: number;
        /**
         * Indicates if the query has more results.
         */
        hasNext(): boolean;
        /**
         * Indicates the query has previous results.
         */
        hasPrev(): boolean;
        /**
         * Retrieves the next page of query results.
         */
        next(): Promise<wix_data.WixDataQueryResult>;
        /**
         * Retrieves the previous page of query results.
         */
        prev(): Promise<wix_data.WixDataQueryResult>;
    }

    interface WixDataSort {
        /**
         * Adds a sort to a query or sort, sorting by the specified properties in ascending order.
         */
        ascending(propertyName: string): wix_data.WixDataQuery;
        /**
         * Adds a sort to a query or sort, sorting by the specified properties in descending order.
         */
        descending(propertyName: string): wix_data.WixDataQuery;
    }

    /**
     * An object returned by Wix Data bulk operations.
     */
    type WixDataBulkResult = {
        /**
         * The number of inserted items.
         */
        inserted: number;
        /**
         * The number of updated items.
         */
        updated: number;
        /**
         * The number of skipped items.
         */
        skipped: number;
        /**
         * List of IDs of inserted items.
         */
        insertedItemIds: string[];
        /**
         * List of errors.
         */
        errors: Error[];
        /**
         * The number of removed items.
         */
        removed: number;
        /**
         * List of IDs of removed items.
         */
        removedItemIds: string[];
    };

    /**
     * An object that you pass as the `options` parameter that modifies how an operation is performed.
     */
    type WixDataOptions = {
        /**
         * Prevents permission checks from running for the operation.
         */
        suppressAuth?: boolean;
        /**
         * Prevents hooks from running for the operation.
         */
        suppressHooks?: boolean;
    };

    /**
     * An object for controlling the order of returned referenced items.
     */
    type WixDataQueryReferencedOptions = {
        /**
         * The order of the returned referenced items. Either "asc" or "desc".
         */
        order: string;
    };

}

declare namespace wix_fetch {
    /**
     * An object returned by the `fetch()` function representing
     *  an HTTP response to a fetch.
     */
    interface WixFetchResponse {
        /**
         * Indicates whether the body of the response has been used yet.
         */
        readonly bodyUsed: boolean;
        /**
         * The response headers.
         */
        readonly headers: any;
        /**
         * Indicates if the request was successful, meaning its `status` is in the range 2xx.
         */
        readonly ok: boolean;
        /**
         * The reponse [status code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes).
         */
        readonly status: number;
        /**
         * The response [status message](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes).
         */
        readonly statusText: string;
        /**
         * The response URL.
         */
        readonly url: string;
        /**
         * Reads the response body as JSON.
         */
        json(): Promise<any>;
        /**
         * Reads the response body as a string.
         */
        text(): Promise<string>;
    }

    /**
     * An object used by the `fetch()` function representing an HTTPS request.
     */
    type WixFetchRequest = {
        /**
         * The [HTTP method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) to use (if omitted, defaults to `"GET"`).
         */
        method: string;
        /**
         * The request headers.
         */
        headers: any;
        /**
         * The request body.
         */
        body: string;
    };

}

declare namespace wix_marketing_backend {
    /**
     * The Coupons API is used to manage your site's coupons.
     */
    interface coupons {
        /**
         * Creates a new coupon.
         */
        createCoupon(couponInfo: wix_marketing_backend.coupons.CouponInfo): Promise<string>;
        /**
         * Deletes an existing coupon.
         */
        deleteCoupon(couponId: string): Promise<void>;
        /**
         * Updates the specified fields of an existing coupon.
         */
        updateCouponFields(couponId: string, couponInfo: wix_marketing_backend.coupons.CouponInfo): Promise<void>;
    }

    namespace coupons {
        /**
         * An object representing information for creating or updating a coupon.
         */
        type CouponInfo = {
            /**
             * Name of coupon.
             */
            name: string;
            /**
             * Coupon code. Must be unique for all coupons in your site. Maximum 20 characters.
             */
            code: string;
            /**
             * Start date and time of coupon.
             */
            startTime: Date;
            /**
             * End date and time of coupon.
             */
            expirationTime?: Date;
            /**
             * The maximum number of times a coupon can be used. Note that multiple purchases by the same customer or purchases by different customers are both counted toward usage limit.
             */
            usageLimit?: number;
            /**
             * Indicates whether the coupon is limited to 1 discount per order. If true and a customer pays for multiple items the coupon applies to, only the lowest priced item is discounted. Coupons with a `bookings` [`namespace`](#CouponScope) are always limited to one item.
             */
            limitedToOneItem?: boolean;
            /**
             * Indicates whether the coupon is currently active.
             */
            active?: boolean;
            /**
             * The coupon is only applicable when the order subtotal is over this amount.
             */
            minimumSubtotal?: number;
            /**
             * Scope of the coupon. When no scope is defined, the coupon applies to all items in all [`namespaces`](#CouponScope) in the site.
             */
            scope?: wix_marketing_backend.coupons.CouponScope;
            /**
             * Coupon type: Free products when making a purchase. Currently only supported for coupons with a `stores` [`namespace`](#CouponScope).
             */
            buyXGetY?: wix_marketing_backend.coupons.CouponTypeBuyXGetY;
            /**
             * Coupon type: Free shipping. If true, the coupon applies to all items in all [`namespaces`](#CouponScope) in the site.
             */
            freeShipping?: boolean;
            /**
             * Coupon type: Fixed price discount.
             */
            moneyOffAmount?: number;
            /**
             * Coupon type: Discount as a percentage.
             */
            percentOffRate?: number;
            /**
             * Coupon type: Specific sale price. Currently only supported for coupons with a `stores` [`namespace`](#CouponScope).
             */
            fixedPriceAmount?: number;
        };

        /**
         * An object containing the scope of a coupon.
         */
        type CouponScope = {
            /**
             * Wix application for which the coupon is applicable.
             * One of the following:
             *
             *  + `"stores"`
             *  + `"bookings"`
             *  + `"events"`
             */
            namespace: string;
            /**
             * Group within a `namespace` for which the coupon is applicable. If no group is specified, the coupon applies to all items in the namespace. `group` is required in some cases.
             */
            group?: wix_marketing_backend.coupons.ScopeGroup;
        };

        /**
         * An object defining the number of purchases required and the number of free items received for a "Buy X Get Y" coupon type.
         */
        type CouponTypeBuyXGetY = {
            /**
             * Number of purchased items required to receive free items.
             */
            x: number;
            /**
             * Number of items received for free if required number of items were purchased.
             */
            y: number;
        };

        /**
         * An object specifying the group within a [`CouponScope`](#CouponScope)
         * `namespace` for which the coupon is applicable.
         */
        type ScopeGroup = {
            /**
             * Name of the group.
             */
            name: string;
            /**
             * ID of the specific item in the group for which the coupon is applicable. If no `entityId` is specified, the coupon applies to all items in the group. In some cases when a group is specified, an `entityId` is required.
             */
            entityId?: string;
        };

    }

}

declare namespace wix_pay_backend {
    /**
     * Events fired by payments created using the Pay API.
     */
    interface Events {
        /**
         * An event that fires when a payment's transaction status is changed.
         */
        onPaymentUpdate(event: wix_pay_backend.Events.PaymentUpdateEvent): void;
    }

    namespace Events {
        /**
         * An object representing a payment update.
         */
        type PaymentUpdateEvent = {
            /**
             * The payment's information.
             */
            payment: wix_pay.Payment;
            /**
             * Payment status.
             *  One of:
             *
             *  + `"Successful"`
             *  + `"Pending"`
             *  + `"Failed"`
             *  + `"Chargeback"`
             *  + `"Refunded"`
             *  + `"Offline"`
             *  + `"PartiallyRefunded"`
             *  + `"Cancelled"`
             *  + `"Undefined"`
             */
            status: string;
            /**
             * ID of the payment transaction.
             */
            transactionId: string;
            /**
             * User information.
             */
            userInfo: wix_pay_backend.PaymentUserInfo;
        };

    }

    /**
     * An object representing information for creating a payment.
     */
    type PaymentInfo = {
        /**
         * Total payment amount. Must equal
         *  the sum of the `price` properties in the `items` list while taking the
         *  `quantity` into account.
         */
        amount: number;
        /**
         * Payment currency. A three-letter
         *  [ISO-4217](https://en.wikipedia.org/wiki/ISO_4217) currency code. Defaults to
         *  the currency defined by the site's [Regional Settings](https://support.wix.com/en/article/changing-your-sites-regional-settings).
         */
        currency?: string;
        /**
         * List of payment items.
         */
        items: wix_pay.PaymentItem;
        /**
         * An object representing information about the user. It will be used to prefill
         *  the user info form during the payment process.
         */
        userInfo?: wix_pay_backend.PaymentUserInfo;
    };

    /**
     * An object representing information about the user.
     */
    type PaymentUserInfo = {
        /**
         * User's first name. Value is `null` if
         *  there is no first name information.
         */
        firstName: string;
        /**
         * User's last name. Value is `null` if
         *  there is no last name information.
         */
        lastName: string;
        /**
         * User's phone number. Value is `null` if
         *  there is no phone number information.
         */
        phone: string;
        /**
         * User's email address. Value is `null` if
         *  there is no email address information.
         */
        email: string;
        /**
         * User's country code. A three-letter
         *  [ISO-3166-1](https://en.wikipedia.org/wiki/ISO_3166-1) country code. Value
         *  is `null` if there is no country information.
         */
        countryCode: string;
    };

}

declare namespace wix_router {
    /**
     * An object representing an incoming page request received by a router.
     */
    interface WixRouterRequest {
        /**
         * Returns the base URL of the router request.
         */
        readonly baseUrl: string;
        /**
         * Returns the form factor of the device used to make the router request.
         */
        readonly formFactor: string;
        /**
         * Returns the remote IP address of the router request.
         */
        readonly ip: string;
        /**
         * Returns the names of the pages associated with this router.
         */
        readonly pages: string[];
        /**
         * Returns the path of the router request URL.
         */
        readonly path: string[];
        /**
         * Returns the router prefix of the router request URL.
         */
        readonly prefix: string;
        /**
         * Returns the protocol of the router request URL.
         */
        readonly protocol: string;
        /**
         * Returns the query fields and values of the request URL.
         */
        readonly query: any;
        /**
         * Returns the `referrer` header from the router request.
         */
        readonly referrer: string;
        /**
         * Returns the full URL of the router request.
         */
        readonly url: string;
        /**
         * Returns the details of the current site user who is logged in.
         */
        readonly user: wix_router.WixRouterUser;
        /**
         * Returns the `user-agent` header as sent from the device used to make the router request.
         */
        readonly userAgent: string;
    }

    /**
     * An object representing a response to a request received by a router.
     */
    interface WixRouterResponse {
        /**
         * Sets or gets the data to pass with the response.
         */
        data: any;
        /**
         * Sets or gets the members to be written to the HTML head of the page.
         */
        head: wix_router.WixRouterResponse.HeadOptions;
        /**
         * Sets or gets the response message to be used when responding with status codes 4xx and 5xx.
         */
        message: string;
        /**
         * Sets or gets the page to route to.
         */
        page: string;
        /**
         * Sets or gets the url to redirect to when responding with status codes 301 and 302.
         */
        redirectUrl: string;
        /**
         * Sets or gets the response's HTTP status code.
         */
        status: number;
    }

    namespace WixRouterResponse {
        /**
         * Members of the HTML head.
         */
        type HeadOptions = {
            /**
             * The page title. Written to the `` tag.
             */
            title: string;
            /**
             * The page description. Written to the `">` tag.
             */
            description: string;
            /**
             * The page keywords. Written to the `">` tag.
             */
            keywords: string;
            /**
             * Indicates whether to add a meta tag that prevents search engines from indexing the page. Setting `noIndex` to `true` will add ``.
             */
            noIndex: boolean;
            /**
             * Other meta tags of the head. An object with key:value pairs where the key is the meta tag name and the value is the content.
             */
            metaTags: any;
        };

    }

    /**
     * An object representing a single entry in a sitemap.
     */
    interface WixRouterSitemapEntry {
        /**
         * Sets or gets how frequently the page is likely to change.
         */
        changeFrequency: string;
        /**
         * Sets or gets when was the page data last modified.
         */
        lastModified: Date;
        /**
         * Sets or gets the page name.
         */
        pageName: string;
        /**
         * Sets or gets the priority of this URL relative to other URLs on your site.
         */
        priority: number;
        /**
         * Sets or gets the page title.
         */
        title: string;
        /**
         * Sets or gets the relative url of the page.
         */
        url: string;
    }

    /**
     * An object representing a request for a sitemap.
     */
    interface WixRouterSitemapRequest {
        /**
         * Returns the base URL of the request.
         */
        readonly baseUrl: string;
        /**
         * Sets or gets the page name.
         */
        readonly pageName: string;
        /**
         * Returns the names of the pages associated with this router.
         */
        readonly pages: string[];
        /**
         * Returns the router prefix of the request.
         */
        readonly prefix: string;
        /**
         * Returns the details of the current site user who is logged in.
         */
        readonly user: wix_router.WixRouterUser;
    }

    /**
     * An object that contains information about the current site visitor who is logged in.
     */
    interface WixRouterUser {
        /**
         * Gets the user's ID.
         */
        readonly id: string;
        /**
         * Gets the user's role.
         */
        readonly role: string;
    }

}

declare namespace wix_site_backend {
    /**
     * The General Info API contains functionality for getting
     *  the information about your business that
     *  has been entered in the **General Info** section of your site's **Dashboard**.
     */
    interface generalInfo {
        /**
         * Gets the physical address of the site's business.
         */
        getAddress(): Promise<wix_site_backend.generalInfo.GeneralInfoAddress>;
        /**
         * Gets the site business name.
         */
        getBusinessName(): Promise<string>;
        /**
         * Gets the business hours of the site's business.
         */
        getBusinessSchedule(): Promise<wix_site_backend.generalInfo.GeneralInfoSchedule>;
        /**
         * Gets the site category information.
         */
        getCategories(): Promise<wix_site_backend.generalInfo.GeneralInfoCategories>;
        /**
         * Gets the site description.
         */
        getDescription(): Promise<string>;
        /**
         * Gets the email address used for notifications of activities on your site.
         */
        getEmail(): Promise<string>;
        /**
         * Gets the fax number used for notifications of activities on your site.
         */
        getFax(): Promise<string>;
        /**
         * Gets site language information.
         */
        getLanguage(): Promise<string>;
        /**
         * Gets site locale information.
         */
        getLocale(): Promise<wix_site_backend.generalInfo.GeneralInfoLocale>;
        /**
         * Gets the site logo file name.
         */
        getLogo(): Promise<string>;
        /**
         * Gets site multilingual information.
         */
        getMultilingual(): Promise<wix_site_backend.generalInfo.GeneralInfoLanguages>;
        /**
         * Gets site payment currency information.
         */
        getPaymentCurrency(): Promise<string>;
        /**
         * Gets the phone number used for notifications of activities on your site.
         */
        getPhone(): Promise<string>;
        /**
         * Gets the site display name.
         */
        getSiteDisplayName(): Promise<string>;
        /**
         * Gets site time zone information.
         */
        getTimeZone(): Promise<string>;
    }

    namespace generalInfo {
        /**
         * An object representing a site's corresponding physical address.
         */
        type GeneralInfoAddress = {
            /**
             * Address street.
             */
            street: string;
            /**
             * Address city.
             */
            city: string;
            /**
             * Address country.
             */
            country: string;
            /**
             * Address state.
             */
            state: string;
            /**
             * Address zip code.
             */
            zip: string;
            /**
             * Address description.
             */
            hint: wix_site_backend.generalInfo.GeneralInfoAddressHint;
            /**
             * Whether the business has a physical address.
             */
            isPhysical: boolean;
            /**
             * Address as formatted by Google.
             */
            googleFormattedAddress: string;
            /**
             * Address street number.
             */
            streetNumber: string;
            /**
             * Address apartment number.
             */
            apartmentNumber: string;
            /**
             * Address coordinates.
             */
            coordinates: wix_site_backend.generalInfo.GeneralInfoAddressCoordinates;
        };

        /**
         * An object representing the coordinates of the site address.
         */
        type GeneralInfoAddressCoordinates = {
            /**
             * Address latitude.
             */
            latitude: string;
            /**
             * Address longitude.
             */
            longitude: string;
        };

        /**
         * An object representing a description of a site's address.
         */
        type GeneralInfoAddressHint = {
            /**
             * Address description.
             */
            text: string;
            /**
             * Whether description is shown before, after, or instead of the actual address.
             */
            placement: string;
        };

        /**
         * An object representing the categories that describe your site's business.
         */
        type GeneralInfoCategories = {
            /**
             * Primary site category.
             */
            primary: string;
            /**
             * List of secondary site categories.
             */
            secondary: string[];
        };

        /**
         * An object representing the site's languages.
         */
        type GeneralInfoLanguages = {
            /**
             * List supported languages.
             */
            supportedLanguages: wix_site_backend.generalInfo.GeneralInfoLanguagesSupported[];
            /**
             * Whether to automatically redirect users based on their browser's settings.
             */
            autoRedirect: boolean;
        };

        /**
         * An object representing the site's supported languages.
         */
        type GeneralInfoLanguagesSupported = {
            /**
             * Language code.
             */
            languageCode: string;
            /**
             * Language locale.
             */
            locale: wix_site_backend.generalInfo.GeneralInfoLocale;
            /**
             * Country Code for the Language icon.
             */
            countryCode: string;
            /**
             * Whether the language is the primary language.
             */
            isPrimary: boolean;
        };

        /**
         * An object representing a site's locale.
         */
        type GeneralInfoLocale = {
            /**
             * Site country.
             */
            country: string;
            /**
             * Site language code.
             */
            languageCode: string;
        };

        /**
         * An object representing business hours.
         */
        type GeneralInfoSchedule = {
            /**
             * List of opening and closing days and times.
             */
            periods: wix_site_backend.generalInfo.GeneralInfoSchedulePeriods[];
            /**
             * Special hours.
             */
            specialHourPeriod: wix_site_backend.generalInfo.GeneralInfoScheduleSpecial[];
        };

        /**
         * An object representing business opened and closed hours.
         */
        type GeneralInfoSchedulePeriods = {
            /**
             * Business opening day.
             */
            openDay: string;
            /**
             * Business opening time.
             */
            openTime: string;
            /**
             * Business closing day.
             */
            closeDay: string;
            /**
             * Business closing time.
             */
            closeTime: string;
        };

        /**
         * An object representing special business hours.
         */
        type GeneralInfoScheduleSpecial = {
            /**
             * Special hours start date.
             */
            startDate: string;
            /**
             * Special hours end date.
             */
            endDate: string;
            /**
             * Whether the business is closed.
             */
            isClosed: boolean;
            /**
             * Special hours comment.
             */
            comment: string;
        };

    }

}

declare namespace wix_stores_backend {
    /**
     * Events that are fired from a Wix Store.
     */
    interface Events {
        /**
         * An event that fires when a visitor abandons a shopping cart.
         */
        onCartAbandoned(event: wix_stores_backend.Events.CartAbandonedEvent): void;
        /**
         * An event that fires when a visitor completes a purchase from a shopping cart.
         */
        onCartCompleted(event: wix_stores_backend.Events.CartCompletedEvent): void;
        /**
         * An event that fires when a visitor adds a product to a shopping cart.
         */
        onCartCreated(event: wix_stores_backend.Events.CartCreatedEvent): void;
        /**
         * An event that fires when a visitor completes a purchase from an abandoned shopping cart.
         */
        onCartRecovered(event: wix_stores_backend.Events.CartRecoveredEvent): void;
        /**
         * An event that fires when a new order is placed.
         */
        onNewOrder(event: wix_stores_backend.Events.NewOrderEvent): void;
    }

    namespace Events {
        /**
         * An object representing a shopping cart that was abandoned.
         */
        type CartAbandonedEvent = {
            /**
             * Time the abandoned cart was abandoned.
             */
            abandonTime: Date;
            /**
             * Unique identifier of the shopping cart that was abandoned.
             */
            cartId: string;
            /**
             * URL of the abandoned cart's checkout page.
             */
            checkoutUrl: string;
            /**
             * Unique identity of coupon used in the abandoned cart.
             */
            couponId: string;
            /**
             * Time the abandoned cart was created.
             */
            creationTime: Date;
            /**
             * Information about the vistor who abandoned the shopping cart.
             */
            buyerInfo: wix_stores_backend.BuyerInfo;
            /**
             * Number of items in the abandoned cart.
             */
            itemsCount: number;
            /**
             * Abandoned cart totals.
             */
            totals: wix_stores_backend.Events.CartTotals;
        };

        /**
         * An object representing a shopping cart that was completed.
         */
        type CartCompletedEvent = {
            /**
             * Unique identifier of the shopping cart that was completed.
             */
            cartId: string;
            /**
             * Time the shopping cart was completed.
             */
            completedTime: Date;
            /**
             * The buyer's information.
             */
            buyerInfo: wix_stores_backend.BuyerInfo;
            /**
             * Message from the buyer.
             */
            buyerNote: string;
            /**
             * Coupon applied in the shopping cart.
             */
            appliedCoupon: wix_stores_backend.AppliedCoupon;
            /**
             * Billing address.
             */
            billingAddress: wix_stores_backend.Address;
            /**
             * Currency of the shopping cart.
             */
            currency: wix_stores_backend.Currency;
            /**
             * The order's units of weight. One of: `"KG"`, `"LB"`, or `"UNSPECIFIED_WEIGHT_UNIT"`.
             */
            weightUnit: string;
            /**
             * The shopping cart's totals.
             */
            totals: wix_stores_backend.OrderTotals;
            /**
             * The shopping cart's shipping information.
             */
            shippingInfo: wix_stores_backend.ShippingInfo;
        };

        /**
         * An object representing a shopping cart that was created.
         */
        type CartCreatedEvent = {
            /**
             * Unique identifier of the shopping cart that was created.
             */
            cartId: string;
            /**
             * The buyer's information.
             */
            buyerInfo: wix_stores_backend.BuyerInfo;
            /**
             * Time the shopping cart was created.
             */
            creationTime: Date;
            /**
             * The order's units of weight. One of: `"KG"`, `"LB"`, or `"UNSPECIFIED_WEIGHT_UNIT"`.
             */
            weightUnit: string;
            /**
             * Currency of the shopping cart.
             */
            currency: wix_stores_backend.Currency;
            /**
             * The shopping cart's totals.
             */
            totals: wix_stores_backend.OrderTotals;
        };

        /**
         * An object representing a shopping cart that was recovered.
         */
        type CartRecoveredEvent = {
            /**
             * Time the recovered cart was abandoned.
             */
            abandonedTime: Date;
            /**
             * Unique identifier of the shopping cart that was abandoned.
             */
            cartId: string;
            /**
             * Time the cart was recovered.
             */
            recoveredTime: Date;
            /**
             * Time the recovered cart was originally created.
             */
            creationTime: Date;
        };

        /**
         * An object representing the totals of a shopping cart.
         */
        type CartTotals = {
            /**
             * Subtotal of all the line items in the abandoned cart, not including shipping and tax.
             */
            subtotal: number;
            /**
             * Total of all the line items in the abandoned cart, including shipping and tax.
             */
            total: number;
            /**
             * Total formatted with currency symbol.
             */
            formattedTotal: string;
        };

        /**
         * An object representing a new order from a store.
         */
        type NewOrderEvent = {
            /**
             * The ID of the order, auto-generated when an order is created an unique within all Wix Stores.
             */
            orderId: string;
            /**
             * Running order number unique to the current store.
             */
            number: string;
            /**
             * The buyer's information.
             */
            buyerInfo: wix_stores_backend.BuyerInfo;
            /**
             * The currency code for all of the order's prices.
             */
            currency: string;
            /**
             * The order's units of weight. One of: `"KG"`, `"LB"`, or `"UNSPECIFIED_WEIGHT_UNIT"`.
             */
            weightUnit: string;
            /**
             * The order's totals.
             */
            totals: wix_stores_backend.OrderTotals;
            /**
             * The order's payment status. One of: `"PAID"` or `"NOT_PAID"`.
             */
            paymentStatus: string;
            /**
             * The order's fulfillment status. One of: `"FULFILLED"` or `"NOT_FULFILLED"`.
             */
            fulfillmentStatus: string;
            /**
             * The date the order was created.
             */
            dateCreated: Date;
        };

    }

    /**
     * An object representing an address.
     */
    type Address = {
        /**
         * First name.
         */
        firstName: string;
        /**
         * Last name.
         */
        lastName: string;
        /**
         * Email address.
         */
        email: string;
        /**
         * Phone number.
         */
        phone: string;
        /**
         * Address.
         */
        address: string;
    };

    /**
     * An object representing a coupon applied in a shopping cart.
     */
    type AppliedCoupon = {
        /**
         * Coupon code.
         */
        code: string;
        /**
         * Coupon unique identifier.
         */
        couponId: string;
        /**
         * Coupon name.
         */
        name: string;
        /**
         * Type of coupon.
         *  One of:
         *
         *  + `"BuyXGetY"`
         *  + `"FixedPriceAmount"`
         *  + `"FreeShipping"`
         *  + `"MoneyOffAmount"`
         *  + `"PercentOffRate"`
         */
        couponType: string;
        /**
         * Value of the coupon discount.
         */
        discountValue: string;
    };

    /**
     * An object representing a visitor who abandoned a shopping cart.
     */
    type BuyerInfo = {
        /**
         * Buyer's unique ID.
         */
        id: string;
        /**
         * Buyer's email address.
         */
        email: string;
        /**
         * Buyer's first name.
         */
        firstName: string;
        /**
         * Buyer's last name.
         */
        lastName: string;
        /**
         * Buyer's identity.
         *  One of:
         *
         *  + `"ADMIN"`: Buyer is the site owner.
         *  + `"MEMBER"`: Buyer is a logged-in site member.
         *  + `"VISITOR"`: Buyer is not logged in.
         *  + `"CONTACT"`: A contact has been created for the buyer.
         */
        identityType: string;
        /**
         * Buyer's phone number.
         */
        phone: string;
    };

    /**
     * An object representing a shopping cart.
     */
    type Cart = {
        /**
         * Unique identifier of the shopping cart.
         */
        id: string;
        /**
         * Coupon applied in the shopping cart.
         */
        appliedCoupon: wix_stores_backend.AppliedCoupon;
        /**
         * Cart billing address.
         */
        billingAddress: wix_stores_backend.Address;
        /**
         * The buyer's information.
         */
        buyerInfo: wix_stores_backend.BuyerInfo;
        /**
         * Cart status. Either `"INCOMPLETE"` or `"COMPLETE"`.
         */
        status: string;
        /**
         * Currency of the shopping cart.
         */
        currency: wix_stores_backend.Currency;
        /**
         * The shopping cart's shipping information.
         */
        shippingInfo: wix_stores_backend.ShippingInfo;
        /**
         * Items in the shopping cart.
         */
        lineItems: wix_stores_backend.LineItem[];
        /**
         * The shopping cart's totals.
         */
        totals: wix_stores_backend.OrderTotals;
        /**
         * The order's units of weight. One of: `"KG"`, `"LB"`, or `"UNSPECIFIED_WEIGHT_UNIT"`.
         */
        weightUnit: string;
    };

    /**
     * An object representing a currency.
     */
    type Currency = {
        /**
         * The currency code.
         */
        currency: string;
        /**
         * The currency symbol.
         */
        symbol: string;
    };

    /**
     * An object representing a custom text field.
     */
    type CustomTextField = {
        /**
         * Field title.
         */
        title: string;
        /**
         * Field value.
         */
        value: string;
    };

    /**
     * An object representing a line item in a shopping cart.
     */
    type LineItem = {
        /**
         * Name of the line item.
         */
        name: string;
        /**
         * Notes about the line item.
         */
        notes: string;
        /**
         * Line item price.
         */
        price: string;
        /**
         * Line item product ID.
         */
        productId: string;
        /**
         * Line item quantity.
         */
        quantity: number;
        /**
         * Line item stock keeping unit.
         */
        sku: string;
        /**
         * Total price charged to the customer for all line items after any applicable discounts.
         */
        totalPrice: string;
        /**
         * Line item weight.
         */
        weight: string;
        /**
         * Type of the line item.
         *  One of:
         *
         *  + `"DIGITAL"`: Digital item.
         *  + `"PHYSICAL"`: Physical item.
         *  + `"CUSTOM_AMOUNT_ITEM"`: Item with a custom price.
         *  + `"UNSPECIFIED"`: Type can't be classified due to an error.
         */
        lineItemType: string;
        /**
         * Line item options.
         */
        options: wix_stores_backend.Option[];
        /**
         * Media item.
         */
        mediaItem: wix_stores_backend.MediaItem;
        /**
         * Custom text.
         */
        customTextFields: wix_stores_backend.CustomTextField[];
    };

    /**
     * An object representing a media item.
     */
    type MediaItem = {
        /**
         * Type of the media item.
         *  One of:
         *
         *  + `"IMAGE"`: Image item.
         *  + `"UNSPECIFIED_MEDIA_TYPE_ITEM"`: Media item type can't be classified due to an error.
         */
        mediaType: string;
        /**
         * Media item URL.
         */
        url: string;
        /**
         * Media item height.
         */
        height: number;
        /**
         * Media item width.
         */
        width: number;
    };

    /**
     * An object representing a line item option.
     */
    type Option = {
        /**
         * Name of the product option.
         */
        option: string;
        /**
         * Selected option.
         */
        selection: string;
    };

    /**
     * An object representing an order's totals.
     */
    type OrderTotals = {
        /**
         * The subtotal of all the order's line items, excluding tax.
         */
        subtotal: number;
        /**
         * The total shipping price, including tax.
         */
        shipping: number;
        /**
         * The total amount of tax.
         */
        tax: string;
        /**
         * The total calculated discount amount.
         */
        discount: number;
        /**
         * The total price.
         */
        total: number;
        /**
         * The total weight of the order's items.
         */
        weight: number;
        /**
         * The total quantity of the the order's line items.
         */
        quantity: number;
    };

    type ProductOptionsAvailability = {
        /**
         * Whether the product with the specified option choices is available for purchase.
         */
        availableForPurchase: boolean;
        /**
         * An object representing all the available options for a store product.
         */
        productOptions: any;
        /**
         * Main product media item (image or video) URL.
         */
        mainMedia: string;
        /**
         * List of product media items.
         */
        mediaItems: any[];
        /**
         * The variant of the product selected using the specified option choices if there is one.
         */
        selectedVariant: wix_stores_backend.ProductOptionsAvailabilitySelectedVariant;
    };  

    /**
     * An object representing the product variant selected using the `getProductOptionsAvailability()` funtion.
     */
    type ProductOptionsAvailabilitySelectedVariant = {
        /**
         * Product variant stock keeping unit value.
         */
        sku: string;
        /**
         * Product variant currency.
         */
        currency: string;
        /**
         * Product variant price.
         */
        price: number;
        /**
         * Discounted product variant price.
         */
        discountedPrice: number;
        /**
         * Product variant price formatted with the currency.
         */
        formattedPrice: string;
        /**
         * Discounted product variant price formatted with the currency.
         */
        formattedDiscountedPrice: string;
        /**
         * Whether the product variant is shown in the store.
         */
        visible: boolean;
        /**
         * Whether the product variant is in stock.
         */
        inStock: boolean;
        /**
         * Product variant weight.
         */
        weight: number;
    };

    /**
     * An object representing shipping information.
     */
    type ShippingInfo = {
        /**
         * Shipment address.
         */
        shippingAddress?: wix_stores_backend.Address;
        /**
         * Pickup address.
         */
        pickupInfo?: wix_stores_backend.Address;
    };

    /**
     * An object representing the selection of specific choices from the product's options.
     */
    type StoreProductChoices = {
        /**
         * Value of the option. This key name is
         *  dependent on the options added to the product. For example, if a product
         *  has a size option, this key value will be something like "Size" and its value
         *  will be something like "Large".
         */
        optionKey: string;
    };

}

declare namespace wix_users_backend {
    /**
     * An object that contains information about a site member's address.
     */
    type Address = {
        /**
         * Address street address.
         */
        street: string;
        /**
         * Address city.
         */
        city: string;
        /**
         * Address country.
         */
        country: string;
        /**
         * Address postal code.
         */
        postalCode: string;
    };

    /**
     * An object that contains information about a site member's picture.
     */
    type Picture = {
        /**
         * Member's image URL.
         */
        url: string;
    };

    /**
     * An object that contains information about the results of a site registration.
     */
    type RegistrationResult = {
        /**
         * Registration status. Either "Pending" or "Active".
         */
        status: string;
        /**
         * A token used to log in the current
         *  user as a site member. Pass the token from your backend code to client-side
         *  code and use it when calling the [applySessionToken()](wix-users.html#applySessionToken)
         *  function. The token is only available when `status` is "Active".
         */
        sessionToken?: string;
        /**
         * A token for approving the user as
         *  a site member using the [approveByToken()](wix-users-backend.html#approveByToken)
         *  function. The token is safe to pass via email or from client-side code to
         *  backend code. The token is only available when `status` is "Pending".
         */
        approvalToken?: string;
        /**
         * The user that has been registered.
         */
        user: wix_users.User;
    };

    /**
     * An object that contains information about a site member.
     */
    type UserInfo = {
        /**
         * Member's unique id.
         */
        id: string;
        /**
         * The member's full name. This information is concatenated from the "First Name" and "Last Name" fields.
         */
        memberName: string;
        /**
         * Member's first name.
         */
        firstName: string;
        /**
         * Member's last name.
         */
        lastName: string;
        /**
         * The email address the member uses to log in to your site. This is the address they supplied when they signed up.
         */
        loginEmail: string;
        /**
         * The name the member specified on their profile.
         */
        nickname: string;
        /**
         * The member's URL-friendly name that is unique across your site. Typically this is made up of the member's email prefix.
         */
        slug: string;
        /**
         * The member's locale based on their last login.
         */
        language: string;
        /**
         * Indicates the member's current status, between `Applicant`, `Active`, `Blocked`.
         */
        status: string;
        /**
         * The date and time the member registered to the site.
         */
        creationDate: Date;
        /**
         * The last date and time the member's details were updated.
         */
        lastUpdateDate: Date;
        /**
         * The date and time when the member last logged in.
         */
        lastLoginDate: Date;
        /**
         * List of the member's email addresses.
         */
        emails: string[];
        /**
         * List of the member's phone numbers.
         */
        phones: string[];
        /**
         * List of the member's labels. [Labels](https://support.wix.com/en/article/creating-contact-labels)
         *  are used to organize contacts. When setting the `labels` property, you can
         *  only list labels that already exist in your site's [Contacts List](https://support.wix.com/en/article/accessing-your-contact-list).
         */
        labels: string[];
        /**
         * Member's picture.
         */
        picture: wix_users_backend.Picture;
        /**
         * Any
         *  number of custom fields. [Customs fields](https://support.wix.com/en/article/adding-custom-fields-to-contacts)
         *  are used to store additional information about your site's contacts. When
         *  setting a custom field, use key:value pairs where the key matches the names
         *  defined in your site's [Contacts List](https://support.wix.com/en/article/accessing-your-contact-list).
         *  You can only set values for custom fields that already exist in the Contacts
         *  application.
         */
        customFields: string | number | Date;
    };

}

declare namespace wix_bookings {
    /**
     * An object used when calling [`getServiceAvailability()`](#getServiceAvailability)
     *  containing options for which slots should be returned.
     */
    type AvailabilityOptions = {
        /**
         * Start date and time of the slots
         *  to be returned. Defaults to the current date and time.
         */
        startDateTime?: Date;
        /**
         * End date and time of the slots to
         *  be returned. Defaults to one week from `startDateTime`, which is one week
         *  from the current date and time if `startDateTime` is also omitted.
         */
        endDateTime?: Date;
    };

    /**
     * An object used when calling [`checkoutBooking()`](#checkoutBooking)
     *  containing information about the slot to be booked.
     */
    type BookingInfo = {
        /**
         * The slot to be booked.
         */
        slot: wix_bookings.Slot;
        /**
         * Number of spots to book. Defaults to `1`.
         */
        numberOfSpots?: number;
        /**
         * List of form field values required to book the session.
         */
        formFields: wix_bookings.FormField[];
    };

    /**
     * An object representing the result of a call to [`checkoutBooking()`](#checkoutBooking).
     */
    type BookingResult = {
        /**
         * Status of the booking that was checked out.
         *  One of:
         *
         *  + `"Confirmed"`: Payment was successful or payment is to be done offline.
         *  + `"Pending Payment"`: Payment is pending.
         *  + `"Terminated"`: Payment failed or was cancelled.
         */
        status: string;
        /**
         * ID of the booking that was checked out.
         */
        bookingId: string;
    };

    /**
     * An object used when calling [`checkoutBooking()`](#checkoutBooking)
     *  containing values for form fields required to book the session.
     */
    type FormField = {
        /**
         * Form field value.
         */
        value: string;
        /**
         * ID of the form field from the **form** property in the **Booking/Sessions** collection.
         */
        _id: string;
    };

    /**
     * An object used when calling [`checkoutBooking()`](#checkoutBooking)
     *  containing information about the payment options.
     */
    type PaymentOptions = {
        /**
         * Type of the payment. Either `"wixPay_Online"`
         *  for online collection, or `"wixPay_Offline"` for offline collection.
         */
        paymentType: string;
        /**
         * A coupon code to be used with the payment.
         */
        couponCode: string;
    };

    /**
     * An object returned from [`getServiceAvailability()`](#getServiceAvailability)
     *  containing the available bookings slots.
     */
    type ServiceAvailability = {
        /**
         * List of available slots.
         */
        slots: wix_bookings.Slot[];
    };

    /**
     * An object representing a booking slot.
     */
    type Slot = {
        /**
         * Starting date and time of the slot.
         */
        startDateTime: Date;
        /**
         * Ending date and time of the slot.
         */
        endDateTime: Date;
        /**
         * ID of the service that the slot belongs to.
         */
        serviceId: string;
        /**
         * Maximum number of participants that can book the service for this slot.
         */
        capacity: number;
        /**
         * Number of remaining spots that can be booked for the slot.
         */
        remainingSpots: number;
        /**
         * ID of the slot's staff member.
         */
        staffMemberId: string;
        /**
         * Unique slot identifier.
         */
        _id: string;
    };

}

declare namespace wix_crm {
    /**
     * An object that contains information about a site contact.
     */
    type ContactInfo = {
        /**
         * Contact's first name.
         */
        firstName: string;
        /**
         * Contact's last name.
         */
        lastName: string;
        /**
         * Contact's image source.
         */
        picture: string;
        /**
         * List of contact's email addresses.
         */
        emails: string[];
        /**
         * Email address the contact who is also
         *  a member uses to log into the system.
         */
        loginEmail: string;
        /**
         * List of contact's phone numbers.
         */
        phones: string[];
        /**
         * List of contact's labels. [Labels](https://support.wix.com/en/article/creating-contact-labels)
         *  are used to organize contacts. When setting the `labels` property, you can
         *  only list labels that already exist in your site's [Contacts List](https://support.wix.com/en/article/accessing-your-contact-list).
         */
        labels: string[];
        /**
         * Contact's language.
         */
        language: string;
        /**
         * Any
         *  number of custom fields. [Customs fields](https://support.wix.com/en/article/adding-custom-fields-to-contacts)
         *  are used to store additional information about your site's contacts. When
         *  setting a custom field, use key:value pairs where the key matches the names
         *  defined in your site's [Contacts List](https://support.wix.com/en/article/accessing-your-contact-list).
         *  You can only set values for custom fields that already exist in the Contacts
         *  application.
         */
        customFields: string | number | Date;
    };

}

declare namespace wix_paid_plans_backend {
    /**
     * Events that are fired by actions relating to paid plans.
     */
    interface Events {
        /**
         * An event that fires when a user purchases a plan.
         */
        onPlanPurchased(event: wix_paid_plans_backend.Events.PlanPurchasedEvent): void;
    }

    namespace Events {
        /**
         * An object representing a new paid plan order.
         */
        type Order = {
            /**
             * Order ID of the purchase of the plan, auto-generated when an order is created.
             */
            id: string;
            /**
             * Status of the payment for the plan. Can be `PAID`, `REFUNDED`, `FAILED`, `UNPAID`, and `PAYMENT_STATUS_UNDEFINED`.
             */
            paymentStatus: string;
            /**
             * Object containing the price of the plan.
             */
            price: wix_paid_plans_backend.Events.Price;
            /**
             * If plan is cancelled, the reason why. Can be `OWNER_CANCELED`, `PAYMENT_PROVIDER_CANCELED`, `PAYMENT_FAILED`, `UOU_CANCELED`, and `CANCELLATION_REASON_UNDEFINED`.
             */
            cancellationReason: string;
            /**
             * Date and time from which the plan is valid.
             */
            validFrom: Date;
            /**
             * Name of the plan.
             */
            planName: string;
            /**
             * If the plan is recurring. If true, the price is deducted weekly, monthly, or yearly.
             */
            recurring: boolean;
            /**
             * Date and time the order was created.
             */
            dateCreated: Date;
            /**
             * Status of the order. Can be `ACTIVE`, `PENDING`, `CANCELED`, `EXPIRED`, `PENDING_CANCELLATION`, and `ORDER_STATUS_UNDEFINED`.
             */
            status: string;
            /**
             * Role assigned after purchasing the plan.
             */
            roleID: string;
            /**
             * Description of the plan.
             */
            planDescription: string;
            /**
             * ID for the visitor who purchased the plan.
             */
            memberId: string;
            /**
             * How the plan was purchased, either `ONLINE` pr `OFFLINE`.
             */
            orderType: string;
            /**
             * ID of the plan.
             */
            planId: string;
            /**
             * Object containing properties about how long the plan is valid.
             */
            validFor: wix_paid_plans_backend.Events.ValidFor;
            /**
             * ID of the plan for wix Pay. If plan is free, this ID is blank.
             */
            wixPayOrderId: string;
            /**
             * Date and time until which the plan is valid.
             */
            validUntil: Date;
        };

        /**
         * An object representing the period for which a plan is valid.
         */
        type Period = {
            /**
             * The number of units until the plan expires.
             */
            amount: number;
            /**
             * Time period for billing the plan, such as `MONTH`.
             */
            unit: string;
        };

        /**
         * An object representing a new paid plan purchase.
         */
        type PlanPurchasedEvent = {
            /**
             * Object containing the details about the plan's order.
             */
            order: wix_paid_plans_backend.Events.Order;
        };

        /**
         * An object representing the price of a purchased plan.
         */
        type Price = {
            /**
             * Payment currency. A three-letter
             *  [ISO-4217](https://en.wikipedia.org/wiki/ISO_4217) currency code.
             */
            currency: string;
            /**
             * The cost of the plan.
             */
            amount: number;
        };

        /**
         * An object representing how long a plan is valid.
         */
        type ValidFor = {
            /**
             * If true, the plan does not expire.
             */
            forever: boolean;
            /**
             * Object containing the period for which the plan is valid.
             */
            period: wix_paid_plans_backend.Events.Period;
        };

    }

}

declare namespace wix_paid_plans {
    /**
     * An object representing an order result.
     */
    type OrderResult = {
        /**
         * ID of the order.
         */
        orderId: string;
        /**
         * Wix Pay ID of the order being purchased.
         */
        wixPayOrderId: string;
    };

    /**
     * An object representing a purchase result for a non-free plan.
     */
    type PurchaseResult = {
        /**
         * ID of the order being purchased.
         */
        orderId: string;
        /**
         * Wix Pay ID of the order being purchased. Returned for non-free plans.
         */
        wixPayOrderId: string;
        /**
         * Payment status in Wix Pay. One of:
         *
         *  + "`Successful`": Payment was successfully received.
         *  + "`Pending`": Payment is pending payment provider approval.
         *  + "`Failed`": Payment has failed.
         *  + "`Chargeback`": Payment is chargeback.
         *  + "`Refunded`": Payment was fully refunded.
         *  + "`Offline`": Payment will be executed offline.
         *  + "`PartiallyRefunded`": Payment was partially refunded.
         *  + "`Cancelled`": Payment was cancelled and was not processed.
         *  + "`Undefined`": Payment status is pending payment provider input.
         */
        wixPayStatus: string;
    };

    /**
     * An object representing a purchase result for a free plan.
     */
    type PurchaseResultFree = {
        /**
         * ID of the order being purchased.
         */
        orderId: string;
    };

}

declare namespace wix_pay {
    /**
     * An object representing a payment.
     */
    type Payment = {
        /**
         * Payment transaction ID.
         */
        id: string;
        /**
         * Payment total amount.
         */
        amount: number;
        /**
         * Payment currency. A three-letter
         *  [ISO-4217](https://en.wikipedia.org/wiki/ISO_4217) currency code.
         */
        currency: string;
        /**
         * Payment items.
         */
        items: wix_pay.PaymentItem[];
        /**
         * An object representing information about the user. It will be used to prefill
         *  the user info form during the payment process.
         */
        userInfo?: wix_pay_backend.PaymentUserInfo;
    };

    /**
     * An object representing a payment item.
     */
    type PaymentItem = {
        /**
         * Payment item name.
         */
        name: string;
        /**
         * Payment item quantity.
         */
        quantity: number;
        /**
         * Payment item price.
         */
        price: number;
    };

    /**
     * An object representing the options of a payment.
     */
    type PaymentOptions = {
        /**
         * Absolute URL of a terms and conditions
         *  page. If a link is present, an agreement checkbox will be presented alongside the link.
         */
        termsAndConditionsLink?: string;
        /**
         * Whether to show a thank you page. Defaults to `true`.
         */
        showThankYouPage?: boolean;
        /**
         * Deprecated: An object representing information about the user. It will be used to prefill
         *  user info form during payment process.
         *
         *  Deprecation note: Pass user information to [`createPayment( )`](wix-pay-backend.html#createPayment) instead.
         */
        userInfo?: wix_pay.PaymentUserInfo;
        /**
         * Whether to skip the user info page. Defaults to `false`.
         *  The page will be skipped only if user info was passed to [`createPayment()`](wix-pay-backend.html#createPayment) as
         *  a part of the [`PaymentInfo`](wix-pay-backend.html#PaymentInfo) object.
         */
        skipUserInfoPage?: boolean;
    };

    /**
     * An object representing a payment result.
     */
    type PaymentResult = {
        /**
         * The payment.
         */
        payment: wix_pay.Payment;
        /**
         * Payment status. One of:
         *
         *  + "`Successful`": Payment was successfully received.
         *  + "`Pending`": Payment is pending payment provider approval.
         *  + "`Failed`": Payment has failed.
         *  + "`Chargeback`": Payment is chargeback.
         *  + "`Refunded`": Payment was fully refunded.
         *  + "`Offline`": Payment will be executed offline.
         *  + "`PartiallyRefunded`": Payment was partially refunded.
         *  + "`Cancelled`": Payment was cancelled and was not processed.
         *  + "`Undefined`": Payment status is pending payment provider input.
         */
        status: string;
        /**
         * ID of the payment transaction.
         */
        transactionId: string;
    };

    /**
     * Deprecated: An object representing information about the user.
     */
    type PaymentUserInfo = {
        /**
         * User's first name. Value is `null` if
         *  there is no first name information.
         */
        firstName: string;
        /**
         * User's last name. Value is `null` if
         *  there is no last name information.
         */
        lastName: string;
        /**
         * User's country code. A three-letter
         *  [ISO-3166-1](https://en.wikipedia.org/wiki/ISO_3166-1) country code. Value
         *  is `null` if there is no country information.
         */
        country: string;
        /**
         * User's phone number. Value is `null` if
         *  there is no phone number information.
         */
        phone: string;
        /**
         * User's email address. Value is `null` if
         *  there is no email address information.
         */
        email: string;
    };

}

declare namespace wix_users {
    /**
     * A site user.
     */
    interface User {
        /**
         * Gets the user's ID.
         */
        readonly id: string;
        /**
         * Indicates whether the user is logged in or not.
         */
        readonly loggedIn: boolean;
        /**
         * Deprecated: Gets the user's role.
         */
        readonly role: string;
        /**
         * Gets the email of the current user.
         */
        getEmail(): Promise<string>;
        /**
         * Gets the user's member pricing plan.
         */
        getPricingPlans(): Promise<wix_users.User.PricingPlan[]>;
        /**
         * Gets the user's member roles.
         */
        getRoles(): Promise<wix_users.User.UserRole[]>;
    }

    namespace User {
        /**
         * An object returned by the `getPricingPlans()` function representing a user's pricing plans.
         */
        type PricingPlan = {
            /**
             * The pricing plan's name.
             */
            name: string;
            /**
             * The pricing plan's start date.
             */
            startDate?: Date;
            /**
             * The pricing plan's expiry date.
             */
            expiryDate?: Date;
        };

        /**
         * An object returned by the `getRoles()` function representing a user's roles.
         */
        type UserRole = {
            /**
             * Role name as defined in the site's dashboard or one of "Admin" or "Member".
             */
            name: string;
            /**
             * Role description, if defined in the site's dashboard.
             */
            description?: string;
        };

    }

    /**
     * An object used by the `promptLogin()` function to determine how the login dialog box appears.
     */
    type LoginOptions = {
        /**
         * What type of login experience to present: `"login"` or `"signup"`. Defaults to the option chosen in the Member Signup Settings panel in the Editor.
         */
        mode?: string;
        /**
         * The two letter language code of the language to show the login form in. Defaults to `"en"` if the property doesn't exist or the given language is not one of the languages found in the Permissions tab of the Page Settings panel in the Editor.
         */
        lang?: string;
    };

    /**
     * An object that contains information about a site registration.
     */
    type RegistrationOptions = {
        /**
         * Contact information.
         */
        contactInfo: wix_crm.ContactInfo;
    };

    /**
     * An object that contains information about the results of a site registration.
     */
    type RegistrationResult = {
        /**
         * Registration status. Either "Pending" or "Active".
         */
        status: string;
        /**
         * A token for approving the user as
         *  a site member using the [approveByToken()](wix-users-backend.html#approveByToken)
         *  function. The token is safe to pass via email or from client-side code to
         *  backend code. The token is only available when `status` is "Pending".
         */
        approvalToken?: string;
        /**
         * The user that has been registered.
         */
        user: wix_users.User;
    };

    /**
     * An object used when sending a Triggered Email.
     */
    type TriggeredEmailOptions = {
        /**
         * An object with `key:value` pairs where each
         *  `key` is a variable in the email template created in Triggered Emails and its
         *  corresponding `value` is the value to insert into the template in place of
         *  variable. The values must be strings.
         */
        variables: any;
    };

    /**
     * Function that runs when a user has logged in.
     */
    type LoginHandler = (user: wix_users.User)=>void;

}

