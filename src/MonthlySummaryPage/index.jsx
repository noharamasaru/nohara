import React, { useState, useContext } from 'react';
import { Button, DatePicker, Table, Modal, ConfigProvider } from 'antd';
import axios from 'axios';
import AuthContext from '../AuthContext';
import dayjs from 'dayjs';
import 'dayjs/locale/ja';
import locale from 'antd/lib/locale/ja_JP';

const MonthlySummaryPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [summaryData, setSummaryData] = useState(null);
  const [loading, setLoading] = useState(false);
  const authData = useContext(AuthContext);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleRequestSummary = async () => {
    if (!selectedDate) {
      return;
    }

    setLoading(true);

    const headerAuth = { headers: { Authorization: authData.token } };
    const formattedDate = selectedDate.format('YYYY-MM-DD');
    const requestData = {
      action: 'monthly_summary',
      date: formattedDate,
    };

    try {
      const response = await axios.post('https://3r5xbrwop6.execute-api.ap-northeast-1.amazonaws.com/staging/users', requestData, headerAuth);
      setSummaryData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    {
      title: '売上内容',
      dataIndex: 'sellName',
      key: 'sellName',
    },
    {
      title: '発生件数',
      dataIndex: 'count',
      key: 'count',
    },
  ];

  const dataSource = summaryData
    ? Object.entries(summaryData).map(([sellName, count]) => ({
        key: sellName,
        sellName: sellName,
        count: count,
      }))
    : [];

  return (
    <div>
      <h1>獲得商材サマリ</h1>
      <ConfigProvider locale={locale}>
        <DatePicker.MonthPicker locale={locale} onChange={handleDateChange} placeholder="月を選択" format={'YYYY-MM'} />
      </ConfigProvider>
      <Button type="primary" onClick={handleRequestSummary}>
        月を選択
      </Button>

      <Modal title="Loading" visible={loading} footer={null} closable={false}>
        <p>検索中です</p>
      </Modal>

      {summaryData && (
        <div>
          <h2>月間レポート</h2>
          <Table columns={columns} dataSource={dataSource} />
        </div>
      )}
    </div>
  );
};

export default MonthlySummaryPage;
