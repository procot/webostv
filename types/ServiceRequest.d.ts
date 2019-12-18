import { ObjectValue, RequestParams } from './common';

export interface ServiceRequestParams<T extends ObjectValue> extends RequestParams<T> {
  /**
   * The service method being called.
   */
  method?: string;

  /**
   * The JSON object of the request parameters to send.
   */
  parameters?: ObjectValue;

  /**
   * Indicates whether a subscription is desired for this request.
   * - true: Request the subscription.
   * - false: Not request the subscription.
   */
  subscribe?: boolean;

  /**
   * Indicates whether the request should resubscribe after a failure has occurred.
   * - true: Request the re-subscription.
   * - false: Not request the re-subscription.
   */
  resubscribe?: boolean;
}

export interface ServiceRequestReturn {
  /**
   * The full-service request URI, including method name.
   */
  uri: string;

  /**
   * The JSON object of the request parameters to send.
   */
  params: ObjectValue;

  /**
   * Indicates whether a subscription is desired for this request.
   * - true: subscribed
   * - false: not subscribed
   */
  subscribe: boolean;

  /**
   * Indicates whether the request should resubscribe after a failure has occurred.
   * - true: resubscribed
   * - false: not resubscribed
   */
  resubscribe: boolean;

  /**
   * Cancels the service request and any associated subscription. No argument is required.
   */
  cancel(): void;
}
