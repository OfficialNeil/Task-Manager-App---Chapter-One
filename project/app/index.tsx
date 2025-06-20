import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { TaskProvider, useTaskContext } from '@/context/TaskContext';
import { TaskInput } from '@/components/TaskInput';
import { TaskSections } from '../components/TaskSections';
import { TaskStats } from '@/components/TaskStats';

function AllTasksContent() {
  const {
    tasks,
    activeTasks,
    completedTasks,
    addTask,
    toggleTask,
    deleteTask,
    clearCompleted,
  } = useTaskContext();

  return (
    <View style={styles.container}>
      <TaskStats
        totalTasks={tasks.length}
        activeTasks={activeTasks.length}
        completedTasks={completedTasks.length}
      />
      <TaskInput onAddTask={addTask} />
      <TaskSections
        activeTasks={activeTasks}
        completedTasks={completedTasks}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
        onClearCompleted={clearCompleted}
      />
    </View>
  );
}

export default function AllTasksScreen() {
  return (
    <TaskProvider>
      <SafeAreaView style={styles.safeArea}>
        <AllTasksContent />
      </SafeAreaView>
    </TaskProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  container: {
    flex: 1,
  },
});