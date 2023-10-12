// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

/**
 * UPDATE ME - add endpoints after deploying the CFN template
 *
 * CloudFormation Template: https://github.com/amazon-connect/amazon-connect-chat-ui-examples/tree/master/cloudformationTemplates/startChatContactAPI
 * 
 * Prerequisites:
 *  - Amazon Connect Instance: https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-instances.html
 *  - InstanceId: https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html
 *  - ContactFlowId: https://docs.aws.amazon.com/connect/latest/adminguide/find-contact-flow-id.html
 */

var contactFlowId = "e8305904-4324-41bb-9c11-aefd3d0de7b8"; // TODO: Fill in
var instanceId = "7fce6dfb-446b-4292-a534-6c94a001382e"; // TODO: Fill in
var apiGatewayEndpoint = "https://2rs0wk3oa9.execute-api.us-east-1.amazonaws.com/Prod";// TODO: Fill in with the API Gateway endpoint created by your CloudFormation template
var region = "us-east-1"; // TODO: Fill in




// <script type="text/javascript">
//   (function(w, d, x, id){
//     s=d.createElement('script');
//     s.src='https://db08fjupg2abb.cloudfront.net/amazon-connect-chat-interface-client.js';
//     s.async=1;
//     s.id=id;
//     d.getElementsByTagName('head')[0].appendChild(s);
//     w[x] =  w[x] || function() { (w[x].ac = w[x].ac || []).push(arguments) };
//   })(window, document, 'amazon_connect', 'f8b1e56d-b37c-4ac0-9fe6-68d8cfe0e767');
//   amazon_connect('styles', { openChat: { color: '#ffffff', backgroundColor: '#123456'}, closeChat: { color: '#ffffff', backgroundColor: '#123456'} });
//   amazon_connect('snippetId', 'QVFJREFIZ2JTNzdvNlZBdTFZSVJkT0xad3RDb08wM2NZamVYWno2UE4rbHpYL2JuRlFHQ1BLNDM5YWR6bUhtcmVwbkk2anRhQUFBQWJqQnNCZ2txaGtpRzl3MEJCd2FnWHpCZEFnRUFNRmdHQ1NxR1NJYjNEUUVIQVRBZUJnbGdoa2dCWlFNRUFTNHdFUVFNME5tOFdsYktGY0pMaktlb0FnRVFnQ3ZRMmZmNnlLck5yeElibTUrQ0QvbVhqMjlrb1VpOUtGbC93OGh6QXBFR0gva3QzajhaazExVkNzalg6OlpHeHdXam14NGE4VnFDVUo4Z2xOeE5kM2RJZDB2RVR1cUZnc1lKempnelRKWlE3TysvdzhycjlSMUpGQ25xanRCMFFlWlZpbzdlcVFYYU92dzFkdFZUQVV5MFhISXd5SUZHUXQvM1Y3RE0xVUZFejUxM01xRXhxSmhnY2JVbXlhWHg5WGc4U01nOGlEWjg4ZU4rZFV6VUhkNWZKVUxSdz0=');
//   amazon_connect('supportedMessagingContentTypes', [ 'text/plain', 'text/markdown' ]);
// </script>