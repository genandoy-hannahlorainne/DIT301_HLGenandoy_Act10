import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Platform,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function TodoListScreen() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim().length > 0) {
      setTasks([...tasks, { id: Date.now().toString(), text: task }]);
      setTask('');
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(item => item.id !== id));
  };

  const renderTask = ({ item }) => (
    <View style={styles.taskItem}>
      <Text style={styles.taskText}>{item.text}</Text>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteTask(item.id)}
      >
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.title}>My Tasks</Text>
        <Text style={styles.taskCount}>{tasks.length} task{tasks.length !== 1 ? 's' : ''}</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a new task..."
          value={task}
          onChangeText={setTask}
          onSubmitEditing={addTask}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={item => item.id}
        style={styles.list}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>📋</Text>
            <Text style={styles.emptyText}>No tasks yet</Text>
            <Text style={styles.emptySubtext}>Add your first task above to get started!</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#ac9ace',
    paddingVertical: height * 0.025,
    paddingHorizontal: width * 0.05,
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 20,
  },
  title: {
    fontSize: width * 0.07,
    fontWeight: 'bold',
    color: '#fff',
  },
  taskCount: {
    fontSize: width * 0.035,
    color: 'rgba(255, 255, 255, 0.9)',
    marginTop: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: width * 0.04,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: width * 0.03,
    paddingVertical: height * 0.012,
    fontSize: width * 0.04,
    marginRight: width * 0.02,
    minHeight: 44,
  },
  addButton: {
    backgroundColor: '#ac9ace',
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.012,
    borderRadius: 8,
    justifyContent: 'center',
    minHeight: 44,
    minWidth: width * 0.18,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
  list: {
    flex: 1,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: width * 0.04,
    marginHorizontal: width * 0.04,
    marginTop: height * 0.01,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  taskText: {
    flex: 1,
    fontSize: width * 0.04,
    color: '#333',
    marginRight: width * 0.02,
  },
  deleteButton: {
    backgroundColor: '#f44336',
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.01,
    borderRadius: 6,
    minHeight: 36,
    justifyContent: 'center',
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: width * 0.035,
    fontWeight: 'bold',
  },
  emptyContainer: {
    alignItems: 'center',
    marginTop: height * 0.08,
    paddingHorizontal: width * 0.1,
  },
  emptyIcon: {
    fontSize: width * 0.16,
    marginBottom: height * 0.02,
  },
  emptyText: {
    fontSize: width * 0.05,
    fontWeight: '600',
    color: '#666',
    marginBottom: height * 0.01,
  },
  emptySubtext: {
    textAlign: 'center',
    fontSize: width * 0.035,
    color: '#999',
  },
});
