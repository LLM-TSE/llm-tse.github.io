import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Demo from '@site/src/components/Demo';
import { DatePicker, Divider, Row } from 'antd';
import { Button, Space, Typography } from 'antd';
import styles from './index.module.css';
import { FilePdfOutlined, GithubOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

function Banner() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Typography className={styles.banner}>
      <Title level={2} className={styles.title}>{siteConfig.title}</Title>
      <Title level={3} className={styles.title}>
      Anonymous
      </Title>
      <Divider />
    </Typography>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.projectName}`}
      description="Description will go into a meta tag in <head />">
      <Banner />
      <Divider />
      <Demo />
    </Layout>
  );
}
