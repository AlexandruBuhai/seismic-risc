import React from 'react';
import { Row, Col } from 'antd';
import { Trans } from "@lingui/macro";

import './statistics.css';

export default function Statistics() {
  return (
    <div className="statistics-wrapper">
      <Row type="flex" justify="center" gutter={[16, 16]} align="strech">
        <Col xs={24} md={8}>
          <div className="card">
            <p>6121</p>
            <p><Trans>people at risk</Trans></p>
          </div>
        </Col>
        <Col xs={24} md={8}>
          <div className="card">
            <p>3</p>
            <p><Trans>evaluated buildings</Trans></p>
          </div>
        </Col>
        <Col xs={24} md={8}>
          <div className="card">
            <p>84</p>
            <p><Trans>consolidated buildings</Trans></p>
          </div>
        </Col>
      </Row>
      <Row type="flex" justify="center" align="middle" gutter={[16, 16]}>
        <Col xs={24} md={10}>
<<<<<<< Updated upstream
          <p className="info">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati repudiandae minima
            quas ducimus corporis labore harum accusamus esse, deserunt doloremque eius, ipsa facere
            voluptatum suscipit officia pariatur. Reiciendis earum ea nesciunt. Sequi unde quidem
            consequatur obcaecati corporis veniam doloremque quisquam optio ratione? Explicabo
            debitis perspiciatis unde dicta nesciunt? Repudiandae, reprehenderit!
=======
          {/* When the text is updated, please add the translation too
           and delete this comm  */}
          <p className='info'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
            repudiandae minima quas ducimus corporis labore harum accusamus
            esse, deserunt doloremque eius, ipsa facere voluptatum suscipit
            officia pariatur. Reiciendis earum ea nesciunt. Sequi unde quidem
            consequatur obcaecati corporis veniam doloremque quisquam optio
            ratione? Explicabo debitis perspiciatis unde dicta nesciunt?
            Repudiandae, reprehenderit!
>>>>>>> Stashed changes
          </p>
        </Col>
        <Col xs={24} md={10}>
          <p className="info">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati repudiandae minima
            quas ducimus corporis labore harum accusamus esse, deserunt doloremque eius, ipsa facere
            voluptatum suscipit officia pariatur. Reiciendis earum ea nesciunt. Sequi unde quidem
            consequatur obcaecati corporis veniam doloremque quisquam optio ratione? Explicabo
            debitis perspiciatis unde dicta nesciunt? Repudiandae, reprehenderit!
          </p>
        </Col>
      </Row>
    </div>
  );
}
