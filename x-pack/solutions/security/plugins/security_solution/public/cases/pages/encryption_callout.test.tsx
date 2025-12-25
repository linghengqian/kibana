/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { MissingEncryptionKeyCallout } from '.';
import {
  ENCRYPTION_KEY_MISSING_BODY,
  ENCRYPTION_KEY_MISSING_DOCS_LABEL,
  ENCRYPTION_KEY_MISSING_TITLE,
} from './translations';

describe('MissingEncryptionKeyCallout', () => {
  it('renders the warning callout', () => {
    render(<MissingEncryptionKeyCallout />);

    expect(screen.getByTestId('cases-missing-encryption-key-callout')).toBeInTheDocument();
    expect(screen.getByText(ENCRYPTION_KEY_MISSING_TITLE)).toBeInTheDocument();
    expect(screen.getByText(ENCRYPTION_KEY_MISSING_BODY)).toBeInTheDocument();
    expect(screen.getByText(ENCRYPTION_KEY_MISSING_DOCS_LABEL)).toBeInTheDocument();
  });
});
