// Copyright 2017-2021 @canvas-ui/react-components authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { BareProps } from '@canvas-ui/react-api/types';
import { useApi, useCall } from '@canvas-ui/react-hooks';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { DeriveAccountInfo } from '@polkadot/api-derive/types';
import { AccountId, Address } from '@polkadot/types/interfaces';

interface Props extends BareProps {
  children?: React.ReactNode;
  defaultValue?: string;
  label?: React.ReactNode;
  value?: string | AccountId | Address | null | Uint8Array;
}

function AccountIndex ({ children, className = '', defaultValue, label, value }: Props): React.ReactElement<Props> | null {
  const { api } = useApi();
  const info = useCall<DeriveAccountInfo>(api.derive.accounts.info, [value]);
  const [accountIndex, setAccountIndex] = useState<string | null>(null);

  useEffect((): void => {
    // this is not on the info type
    const { accountIndex } = info || {};

    if (accountIndex) {
      setAccountIndex(accountIndex.toString());
    }
  }, [info]);

  if (!api.query.indices) {
    return null;
  }

  return (
    <div className={`ui--AccountIndex ${className}`}>
      {label || ''}<div className='account-index'>{accountIndex || defaultValue || '-'}</div>{children}
    </div>
  );
}

export default React.memo(styled(AccountIndex)`
  .account-index {
    font-family: monospace;
  }
`);
