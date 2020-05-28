declare namespace WebOSTV {
    interface DRMAgent {
        /**
         * Returns a client ID of DRM.
         */
        getClientId(): string;
        /**
         * Returns a DRM type to be set.
         */
        getDrmType(): DRMType[keyof DRMType];
        /**
         * Returns an error code from the DRM service.
         */
        getErrorCode(): DRMError[keyof DRMError];
        /**
         * Returns a text represented by an error from the DRM service.
         */
        getErrorText(): string;
        /**
         * Returns error information when an error of the DRM license occurs during content playback.
         * This method is supported in the following DRM type only:
         * - PlayReady
         */
        getRightsError(params: RequestParams<GetRightsErrorResponse>): void;
        /**
         * Checks whether a DRM client that corresponds to given application ID exists.
         */
        isLoaded(params: RequestParams<IsLoadedResponse>): void;
        /**
         * Creates a client instance for a certain type of DRM.
         * The DRM type is specified when a DRM agent is created.
         */
        load(params: RequestParams<LoadResponse>): void;
        /**
         * Sends a DRM message to a DRM service.
         * After receiving the message, the DRM service starts to parse the message and perform the DRM operation.
         */
        sendDrmMessage(params?: SendDrmMessageParams): void;
        /**
         * Removes a DRM client instance and deallocates relevant resources.
         */
        unload(params: RequestParams<{}>): void;
    }

    interface GetRightsErrorResponse {
        /**
         *  Flag that indicates success/failure of the request.
         * - true: Success
         * - false: Failure
         */
        returnValue: boolean;
        /**
         * Flag that indicates whether the subscription is enabled or not.
         * - true: Enabled
         * - false: Not enabled
         */
        subscribed: boolean;
        /**
         * `errorCode` contains the error code if the method fails. The method will return errorCode only if it fails.
         * @see DRMError
         */
        errorCode?: DRMError[keyof DRMError];
        /**
         * `errorText` contains the error text if the method fails. The method will return errorText only if it fails.
         */
        errorText?: string;
    }

    interface IsLoadedResponse {
        /**
         * Indicates the DRM client is loaded.
         * - true: the DRM client is loaded.
         * - false: the DRM client is not loaded.
         */
        loadStatus: boolean;
        /**
         * Returns the loaded client ID when the DRM client is loaded successfully.
         */
        clientId: string;
        /**
         * Returns the client type of DRM when the DRM client is loaded successfully.
         * @see DRMType
         */
        drmType: DRMType[keyof DRMType];
    }

    interface LoadResponse {
        /**
         * If the DRM agent loaded the DRM client successfully, return its client ID.
         */
        clientId: string;
    }

    interface SendDrmMessageParams extends RequestParams<SendDrmMessageResponse> {
        /**
         * The message to be provided to the underlying DRM server, which is formatted according to the DRM type.
         */
        msg: string;
    }

    interface SendDrmMessageResponse {
        /**
         * The unique ID of message which has led to this resulting message.
         */
        msgId?: string;
        /**
         * The result code only for PlayReady.
         */
        resultCode?: number;
        /**
         * The DRM system specific result message only for PlayReady.
         */
        resultMsg?: string;
    }
}
