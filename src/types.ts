/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface InquiryFormData {
  fullName: string;
  corporateEmail: string;
  integrationIntent: string;
  messagePayload: string;
}

export interface SubmittedInquiry extends InquiryFormData {
  id: string;
  timestamp: string;
}
