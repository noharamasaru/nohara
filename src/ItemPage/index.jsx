import React, { useContext, useState } from 'react';
import { Button, Modal, Input } from 'antd';
import AuthContext from '../AuthContext';
import axios from 'axios';

const ItemPage = () => {
  const [size] = useState('large');
  const [modalVisible, setModalVisible] = useState(false);
  const [description, setDescription] = useState('');
  const [sellName,setSellName] = useState('');
  const authData = useContext(AuthContext);

  const handleButtonClick = (name) => {
    setSellName(name);
    setModalVisible(true);
  };

  const handleModalOk = async () => {
    const user_id = authData.sub;
    const headerAuth = { headers: { Authorization: authData.token } };
    try {
      const response = await axios.post(
        'https://3r5xbrwop6.execute-api.ap-northeast-1.amazonaws.com/staging/users',
        { action: 'shop_sell', sellName, description, user_id },
        headerAuth
      );
      console.log(response.data);
      // 成功した場合の処理
    } catch (error) {
      console.error(error);
      // エラーが発生した場合の処理
    }
    setModalVisible(false);
    setDescription('');
  };

  const handleModalCancel = () => {
    setModalVisible(false);
    setDescription('');
  };

  return (
    <div style={{ paddingTop: '10px' }}>
      <h1>獲得商材</h1>
      <Modal
        title="説明文を入力"
        visible={modalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
      >
        <Input
          placeholder="説明文を入力してください"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Modal>
      <Button
        type="primary"
        size={size}
        name="au_mnp"
        key="au_mnp"
        onClick={() => handleButtonClick('au_mnp')}
      >
        MNP
      </Button>
      <Button
        type="primary"
        size={size}
        name="au_new"
        key="au_new"
        onClick={() => handleButtonClick('au_new')}
      >
        新規
      </Button>
      <Button
        type="primary"
        size={size}
        name="au_cellup"
        key="au_cellup"
        onClick={() => handleButtonClick('au_cellup')}
      >
        セルアップ
      </Button>
      <Button
        type="primary"
        size={size}
        name="au_device"
        key="au_device"
        onClick={() => handleButtonClick('au_device')}
      >
        機種変更
      </Button>
    </div>
  );
};

export default ItemPage;
