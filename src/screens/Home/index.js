import React, {useEffect, useMemo, useState} from 'react';
import {
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  addTransaction,
  clearTransaction,
  deleteTransaction,
  editTransaction,
} from './reducer';
import {CardTransaction, ModalAddTransaction} from '../../components';
import {debounce} from 'lodash';

const Home = () => {
  const dispatch = useDispatch();
  const {listTransaction, loading} = useSelector(state => state.home);
  const [filteredTransaction, setFilteredTransaction] =
    useState(listTransaction);
  const [isEdit, setIsEdit] = useState(false);
  const [searchTransaction, setSearchTransaction] = useState('');
  const [visibleAddTransaction, setVisibleTransaction] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const handleVisibleTransaction = () => {
    setIsEdit(false);
    setVisibleTransaction(true);
  };

  const handleAddTransaction = form => {
    dispatch(
      addTransaction({
        id: listTransaction.length + 1,
        ...form,
        date: new Date(),
      }),
    );
    setIsEdit(false);
    setVisibleTransaction(false);
  };

  const handleEditTransaction = transaction => {
    dispatch(
      editTransaction({
        id: selectedItem.id,
        ...transaction,
        date: new Date(),
      }),
    );
    setVisibleTransaction(false);
  };

  const onPressCardItem = item => {
    setIsEdit(true);
    setSelectedItem(item);
    setVisibleTransaction(true);
  };

  const handleDeleteTransaction = id => {
    dispatch(deleteTransaction(id));
  };

  const hadnleClearTransaction = () => {
    dispatch(clearTransaction());
  };

  const renderItem = ({item}) => (
    <CardTransaction
      key={item?.id}
      transaction={item}
      onPress={() => onPressCardItem(item)}
    />
  );

  const handleSearch = useMemo(
    () =>
      debounce(value => {
        if (value.length > 3) {
          const filtered = listTransaction.filter(item =>
            item.name.toLowerCase().includes(value.toLowerCase()),
          );
          setFilteredTransaction(filtered);
        } else {
          setFilteredTransaction(listTransaction);
        }
      }, 300),
    [listTransaction],
  );

  useEffect(() => {
    handleSearch(searchTransaction);
  }, [searchTransaction, handleSearch]);

  return (
    <View style={styles.container}>
      <TextInput
        value={searchTransaction}
        placeholder="Cari nama transaksi..."
        onChangeText={text => setSearchTransaction(text)}
        style={styles.search}
      />
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={filteredTransaction}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text style={styles.textEmpty}>No transaction</Text>
        }
        refreshing={loading}
        refreshControl={<RefreshControl refreshing={loading} onRefresh={{}} />}
      />
      <View style={styles.row}>
        <TouchableOpacity
          onPress={hadnleClearTransaction}
          style={styles.btnCancel}>
          <Text style={styles.btnTitle}>Clear</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleVisibleTransaction}
          style={styles.btnAdd}>
          <Text style={styles.btnTitle}>Tambah</Text>
        </TouchableOpacity>
      </View>
      <ModalAddTransaction
        visible={visibleAddTransaction}
        onSubmit={handleAddTransaction}
        isEdit={isEdit}
        selectedItem={selectedItem}
        editTransaction={handleEditTransaction}
        handleDelete={handleDeleteTransaction}
        onClose={() => setVisibleTransaction(false)}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  search: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 16,
  },
  textEmpty: {color: 'black'},
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
