import React from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { TaskItem } from './TaskItem';
import { Task } from '@/types/Task';
import { CircleCheck as CheckCircle2 } from 'lucide-react-native';

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
  emptyMessage?: string;
}

export function TaskList({
  tasks,
  onToggleTask,
  onDeleteTask,
  emptyMessage = "No tasks yet. Add one above!",
}: TaskListProps) {
  const renderTask = ({ item }: { item: Task }) => (
    <TaskItem
      task={item}
      onToggle={onToggleTask}
      onDelete={onDeleteTask}
    />
  );

  const renderEmpty = () => (
    <View style={styles.emptyContainer}>
      <CheckCircle2 size={64} color="#C7C7CC" strokeWidth={1} />
      <Text style={styles.emptyTitle}>All Clear!</Text>
      <Text style={styles.emptyMessage}>{emptyMessage}</Text>
    </View>
  );

  return (
    <FlatList
      data={tasks}
      renderItem={renderTask}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={renderEmpty}
      style={styles.list}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    paddingVertical: 80,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#8E8E93',
    marginTop: 20,
    marginBottom: 8,
  },
  emptyMessage: {
    fontSize: 16,
    color: '#C7C7CC',
    textAlign: 'center',
    lineHeight: 22,
  },
});