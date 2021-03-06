// Copyright 2017-2021 @polkadot/react-components authors & contributors
// and @canvas-ui/react-components authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import styled from 'styled-components';

import Icon from './Icon';
import { BareProps } from './types';

interface Props extends BareProps {
  href?: string;
  icon?: string;
  label?: React.ReactNode;
  rel?: string;
  target?: string;
  onClick: () => void;
}

function IconLink ({ className = '', href, icon, label, onClick, rel, target }: Props): React.ReactElement<Props> {
  return (
    <a
      className={className}
      href={href}
      onClick={onClick}
      rel={rel}
      target={target}
    >
      {icon && <Icon className={icon} />}
      {label}
    </a>
  );
}

export default React.memo(styled(IconLink)`
  font-size: 0.9rem !important;

  &:hover {
    text-decoration: underline;

    i {
      text-decoration: none;
    }
  }
`);
