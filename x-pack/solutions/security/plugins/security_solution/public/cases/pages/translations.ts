/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { i18n } from '@kbn/i18n';

export const PAGE_TITLE = i18n.translate('xpack.securitySolution.cases.pageTitle', {
  defaultMessage: 'Cases',
});

export const ISOLATED_HOST = i18n.translate('xpack.securitySolution.caseView.isolatedHost', {
  defaultMessage: 'submitted isolate request on host',
});

export const RELEASED_HOST = i18n.translate('xpack.securitySolution.caseView.releasedHost', {
  defaultMessage: 'submitted release request on host',
});

export const ENCRYPTION_KEY_MISSING_TITLE = i18n.translate(
  'xpack.securitySolution.caseView.encryptionKeyMissingTitle',
  {
    defaultMessage: 'Set up an encryption key to use Cases',
  }
);

export const ENCRYPTION_KEY_MISSING_BODY = i18n.translate(
  'xpack.securitySolution.caseView.encryptionKeyMissingBody',
  {
    defaultMessage:
      'Cases requires xpack.encryptedSavedObjects.encryptionKey to be configured. Add a persistent key to kibana.yml and restart Kibana to enable Cases.',
  }
);

export const ENCRYPTION_KEY_MISSING_DOCS_LABEL = i18n.translate(
  'xpack.securitySolution.caseView.encryptionKeyMissingDocsLabel',
  {
    defaultMessage: 'View documentation for configuring encryption keys.',
  }
);

export const OTHER_ENDPOINTS = (endpoints: number): string =>
  i18n.translate('xpack.securitySolution.caseView.otherEndpoints', {
    values: { endpoints },
    defaultMessage: ` and {endpoints} {endpoints, plural, =1 {other} other {others}}`,
  });
