import React from 'react';
import { Row, Col, Card } from 'antd';
import { setupI18n } from '@lingui/core';
import { t } from '@lingui/macro';

import catalogEn from '../../locales/en/messages.js';
import catalogRo from '../../locales/ro/messages.js';

const StatisticCard = props => (
  <Card style={{ border: 'none', backgroundColor: '#ee741b' }}>
    <div>
      <h1 style={{ color: 'white' }}>{props.value}</h1>
      <h3 style={{ color: 'white' }}>{props.text}</h3>
    </div>
  </Card>
);

export default ({ language }) => {
  const i18n = setupI18n();
  i18n.load({
    en: catalogEn,
    ro: catalogRo
  });
  i18n.activate(language);

  return (
    <Row gutter={[8, 32]} type="flex" justify="space-around" style={{ margin: '2rem' }}>
      <Col span={8}>
        <StatisticCard value={6121} text={i18n._(t`people at risk`)} />
      </Col>
      <Col span={8}>
        <StatisticCard value={458} text={i18n._(t`evaluated buildings`)} />
      </Col>
      <Col span={8}>
        <StatisticCard value={84} text={i18n._(t`consolidated buildings`)} />
      </Col>
    </Row>
  );
};
