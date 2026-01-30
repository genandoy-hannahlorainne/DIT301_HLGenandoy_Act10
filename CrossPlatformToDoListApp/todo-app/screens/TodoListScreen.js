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
  Modal,
  Animated,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function TodoListScreen() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  const addTask = () => {
    if (task.trim().length > 0) {
      setTasks([...tasks, { id: Date.now().toString(), text: task, completed: false }]);
      setTask('');
    }
  };

  const confirmDelete = (id, text) => {
    setTaskToDelete({ id, text });
    setDeleteModalVisible(true);
  };

  const deleteTask = () => {
    if (taskToDelete) {
      setTasks(tasks.filter(item => item.id !== taskToDelete.id));
      setDeleteModalVisible(false);
      setTaskToDelete(null);
    }
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const renderTask = ({ item, index }) => (
    <Animated.View style={styles.taskItem}>
      <TouchableOpacity 
        style={styles.checkboxContainer}
        onPress={() => toggleComplete(item.id)}
        activeOpacity={0.7}
      >
        <View style={[styles.checkbox, item.completed && styles.checkboxChecked]}>
          {item.completed && <Text style={styles.checkmark}>✓</Text>}
        </View>
      </TouchableOpacity>
      
      <Text style={[styles.taskText, item.completed && styles.taskTextCompleted]}>
        {item.text}
      </Text>
      
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => confirmDelete(item.id, item.text)}
        activeOpacity={0.7}
      >
        <Text style={styles.deleteIcon}>🗑️</Text>
      </TouchableOpacity>
    </Animated.View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#9f82ce" />
      
      <View style={styles.header}>
        <Text style={styles.title}>My Tasks</Text>
        <View style={styles.statsContainer}>
          <View style={styles.statBadge}>
            <Text style={styles.statNumber}>{tasks.length}</Text>
            <Text style={styles.statLabel}>Total</Text>
          </View>
          <View style={styles.statBadge}>
            <Text style={styles.statNumber}>{tasks.filter(t => t.completed).length}</Text>
            <Text style={styles.statLabel}>Done</Text>
          </View>
          <View style={styles.statBadge}>
            <Text style={styles.statNumber}>{tasks.filter(t => !t.completed).length}</Text>
            <Text style={styles.statLabel}>Active</Text>
          </View>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Text style={styles.inputIcon}>✏️</Text>
          <TextInput
            style={styles.input}
            placeholder="What needs to be done?"
            placeholderTextColor="#999"
            value={task}
            onChangeText={setTask}
            onSubmitEditing={addTask}
          />
        </View>
        <TouchableOpacity 
          style={styles.addButton} 
          onPress={addTask}
          activeOpacity={0.8}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={item => item.id}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>📋</Text>
            <Text style={styles.emptyText}>No tasks yet</Text>
            <Text style={styles.emptySubtext}>Add your first task above to get started!</Text>
          </View>
        }
      />

      {/* Delete Confirmation Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={deleteModalVisible}
        onRequestClose={() => setDeleteModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalIcon}>⚠️</Text>
              <Text style={styles.modalTitle}>Delete Task?</Text>
            </View>
            
            <Text style={styles.modalMessage}>
              Are you sure you want to delete this task?
            </Text>
            
            {taskToDelete && (
              <View style={styles.taskPreview}>
                <Text style={styles.taskPreviewText} numberOfLines={2}>
                  "{taskToDelete.text}"
                </Text>
              </View>
            )}
            
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setDeleteModalVisible(false)}
                activeOpacity={0.8}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={[styles.modalButton, styles.confirmButton]}
                onPress={deleteTask}
                activeOpacity={0.8}
              >
                <Text style={styles.confirmButtonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f7fc',
  },
  header: {
    backgroundColor: '#9f82ce',
    paddingVertical: height * 0.03,
    paddingHorizontal: width * 0.05,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 15 : 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    shadowColor: '#9f82ce',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  title: {
    fontSize: width * 0.08,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: height * 0.015,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: height * 0.01,
  },
  statBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.04,
    borderRadius: 12,
    alignItems: 'center',
    minWidth: width * 0.2,
  },
  statNumber: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    color: '#fff',
  },
  statLabel: {
    fontSize: width * 0.03,
    color: 'rgba(255, 255, 255, 0.9)',
    marginTop: 2,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: width * 0.04,
    backgroundColor: 'transparent',
    alignItems: 'center',
    marginTop: height * 0.02,
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingHorizontal: width * 0.04,
    marginRight: width * 0.02,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  inputIcon: {
    fontSize: width * 0.05,
    marginRight: width * 0.02,
  },
  input: {
    flex: 1,
    paddingVertical: height * 0.015,
    fontSize: width * 0.04,
    color: '#333',
  },
  addButton: {
    backgroundColor: '#9f82ce',
    width: width * 0.14,
    height: width * 0.14,
    borderRadius: width * 0.07,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#9f82ce',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 5,
  },
  addButtonText: {
    color: '#fff',
    fontSize: width * 0.08,
    fontWeight: 'bold',
    marginTop: -2,
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingBottom: height * 0.02,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: width * 0.04,
    marginHorizontal: width * 0.04,
    marginTop: height * 0.012,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  checkboxContainer: {
    marginRight: width * 0.03,
  },
  checkbox: {
    width: width * 0.06,
    height: width * 0.06,
    borderRadius: width * 0.03,
    borderWidth: 2,
    borderColor: '#9f82ce',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#9f82ce',
  },
  checkmark: {
    color: '#fff',
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
  taskText: {
    flex: 1,
    fontSize: width * 0.04,
    color: '#333',
    lineHeight: width * 0.055,
  },
  taskTextCompleted: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  deleteButton: {
    padding: width * 0.02,
    marginLeft: width * 0.02,
  },
  deleteIcon: {
    fontSize: width * 0.055,
  },
  emptyContainer: {
    alignItems: 'center',
    marginTop: height * 0.1,
    paddingHorizontal: width * 0.1,
  },
  emptyIcon: {
    fontSize: width * 0.2,
    marginBottom: height * 0.02,
  },
  emptyText: {
    fontSize: width * 0.055,
    fontWeight: '600',
    color: '#666',
    marginBottom: height * 0.01,
  },
  emptySubtext: {
    textAlign: 'center',
    fontSize: width * 0.038,
    color: '#999',
    lineHeight: width * 0.055,
  },
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: width * 0.05,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: width * 0.06,
    width: '100%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  modalHeader: {
    alignItems: 'center',
    marginBottom: height * 0.02,
  },
  modalIcon: {
    fontSize: width * 0.15,
    marginBottom: height * 0.01,
  },
  modalTitle: {
    fontSize: width * 0.055,
    fontWeight: 'bold',
    color: '#333',
  },
  modalMessage: {
    fontSize: width * 0.04,
    color: '#666',
    textAlign: 'center',
    marginBottom: height * 0.02,
    lineHeight: width * 0.055,
  },
  taskPreview: {
    backgroundColor: '#f8f7fc',
    padding: width * 0.04,
    borderRadius: 12,
    marginBottom: height * 0.025,
    borderLeftWidth: 3,
    borderLeftColor: '#9f82ce',
  },
  taskPreviewText: {
    fontSize: width * 0.038,
    color: '#333',
    fontStyle: 'italic',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: width * 0.03,
  },
  modalButton: {
    flex: 1,
    paddingVertical: height * 0.015,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
  },
  cancelButton: {
    backgroundColor: '#f0f0f0',
  },
  cancelButtonText: {
    color: '#666',
    fontSize: width * 0.04,
    fontWeight: '600',
  },
  confirmButton: {
    backgroundColor: '#f44336',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
});
