/**
 * Subscriptions API requests and definitions for Amazon's MWS web services.
 * For information on using, please see examples folder.
 *
 * @author Robert Saunders
 */
var mws = require('./mws');

/**
 * Construct a Subscriptions API request for using with mws.Client.invoke()
 *
 * @param {String} action Action parameter of request
 * @param {Object} params Schemas for all supported parameters
 */
function SubscriptionsRequest(action, params) {
  var opts = {
    name: 'Subscriptions',
    group: 'Subscriptions',
    path: '/Subscriptions/2013-07-01',
    version: '2013-07-01',
    legacy: false,
    action: action,
    params: params
  };
  return new mws.Request(opts);
}

/**
 * A collection of currently supported request constructors. Once created and
 * configured, the returned requests can be passed to an mws client `invoke` call
 * @type {Object}
 */
var calls = exports.requests = {

  /**
   * Registe a destination for subscription feature.
   */
  RegisterDestination: function() {
    return new SubscriptionsRequest('RegisterDestination', {
      MarketplaceId: { name: 'MarketplaceId', required: true },
      Destination: { name: 'Destination.DeliveryChannel', value: 'SQS' },
      AttributeKey: { name: 'Destination.AttributeList.member.1.Key', value: 'sqsQueueUrl' },
      AttributeValue: { name: 'Destination.AttributeList.member.1.Value', required: true }
    });
  },

  /**
   * Deregiste a destination for subscription feature.
   */
  DeregisterDestination: function() {
    return new SubscriptionsRequest('DeregisterDestination', {
      MarketplaceId: { name: 'MarketplaceId', required: true },
      Destination: { name: 'Destination.DeliveryChannel', value: 'SQS' },
      AttributeKey: { name: 'Destination.AttributeList.member.1.Key', value: 'sqsQueueUrl' },
      AttributeValue: { name: 'Destination.AttributeList.member.1.Value', required: true }
    });
  },

  /**
   * Send test notification to destination for check registed destinations.
   */
  SendTestNotificationToDestination: function() {
    return new SubscriptionsRequest('SendTestNotificationToDestination', {
      MarketplaceId: { name: 'MarketplaceId', required: true },
      Destination: { name: 'Destination.DeliveryChannel', value: 'SQS' },
      AttributeKey: { name: 'Destination.AttributeList.member.1.Key', value: 'sqsQueueUrl' },
      AttributeValue: { name: 'Destination.AttributeList.member.1.Value', required: true }
    });
  },

  /**
   * Create subscription to get all notification from amazon when the offers of listed product has change.
   */
  CreateSubscription: function() {
    return new SubscriptionsRequest('CreateSubscription', {
      MarketplaceId: { name: 'MarketplaceId', required: true },
      Subscription: { name: 'Subscription.NotificationType', required: true },
      Destination: { name: 'Subscription.Destination.DeliveryChannel', value: 'SQS' },
      AttributeKey: { name: 'Subscription.Destination.AttributeList.member.1.Key', value: 'sqsQueueUrl' },
      AttributeValue: { name: 'Subscription.Destination.AttributeList.member.1.Value', required: true },
      Enabled: { name: 'Subscription.IsEnabled', value: 'true' }
    });
  },

  /**
   * Delete subscription.
   */
  DeleteSubscription: function() {
    return new SubscriptionsRequest('DeleteSubscription', {
      MarketplaceId: { name: 'MarketplaceId', required: true },
      Subscription: { name: 'NotificationType', required: true },
      Destination: { name: 'Destination.DeliveryChannel', value: 'SQS' },
      AttributeKey: { name: 'Destination.AttributeList.member.1.Key', value: 'sqsQueueUrl' },
      AttributeValue: { name: 'Destination.AttributeList.member.1.Value', required: true }
    });
  }

};
