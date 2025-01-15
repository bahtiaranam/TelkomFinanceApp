import React, {useEffect, useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const ModalAddTransaction = ({
  visible,
  onSubmit,
  isEdit,
  selectedItem,
  editTransaction,
  onClose,
  handleDelete,
}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    if (isEdit) {
      setName(selectedItem?.name);
      setDescription(selectedItem?.description);
      setAmount(selectedItem?.amount);
    } else {
      setName('');
      setDescription('');
      setAmount('');
    }
  }, [isEdit]);

  const handleAddTransaction = () => {
    const payload = {name, description, amount};
    if (isEdit) {
      editTransaction(payload);
    } else {
      onSubmit(payload);
    }
  };

  const handleDeleteTransaction = () => {
    if (isEdit) {
      handleDelete(selectedItem.id);
    }
    onClose();
  };

  return (
    <Modal visible={visible} onClose={onClose}>
      <View style={styles.container}>
        <View>
          <Text>Name</Text>
          <TextInput
            placeholder="masukan nama"
            value={name}
            onChangeText={val => setName(val)}
            style={styles.input}
          />
        </View>
        <View>
          <Text>Amount</Text>
          <TextInput
            placeholder="masukan amount"
            value={amount}
            onChangeText={val => setAmount(val)}
            keyboardType="numeric"
            style={styles.input}
          />
        </View>
        <View>
          <Text>Deskripsi</Text>
          <TextInput
            placeholder="masukan deskripsi"
            value={description}
            onChangeText={val => setDescription(val)}
            multiline={true}
            numberOfLines={4}
            style={styles.inputDesc}
          />
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={handleDeleteTransaction}
            style={styles.btnCancel}>
            <Text style={styles.btnTitle}>{isEdit ? 'Hapus' : 'Batal'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleAddTransaction}
            style={styles.btnAdd}>
            <Text style={styles.btnTitle}>{isEdit ? 'Edit' : 'Tambah'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalAddTransaction;

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20, rowGap: 20},
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    paddingHorizontal: 12,
    marginTop: 10,
  },
  inputDesc: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    paddingHorizontal: 12,
    height: 100, // Adjust height as needed
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  btnCancel: {
    width: '48%',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    borderRadius: 4,
  },
  btnAdd: {
    width: '48%',
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    borderRadius: 4,
  },
  btnTitle: {color: '#fff', fontWeight: 'bold'},
});
